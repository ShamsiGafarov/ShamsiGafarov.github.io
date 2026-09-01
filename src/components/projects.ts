import type { Project, ProjectCategory } from '../types';
import { projects as defaultProjects } from '../data/projects';
import { observeReveal, prefersReducedMotion } from '../animations/observer';
import { attachCardGlow, escapeHtml, sanitizeUrl, ICON_EXTERNAL, ICON_GITHUB } from '../utils';

const STORAGE_KEY = 'shamsi-portfolio-custom-projects';
const CATEGORIES: Array<ProjectCategory | 'All'> = ['All', 'Full Stack', 'AI & ML', 'Backend', 'DevOps'];

let allProjects: Project[] = [];
let currentFilter: ProjectCategory | 'All' = 'All';

function loadCustomProjects(): Project[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Project[]) : [];
  } catch {
    return [];
  }
}

function saveCustomProjects(list: Project[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — skip persistence.
  }
}

function createCard(project: Project): string {
  const techPills = project.tech.map((t) => `<li class="pill pill-sm">${escapeHtml(t)}</li>`).join('');
  const liveHref = sanitizeUrl(project.liveUrl);
  const githubHref = sanitizeUrl(project.githubUrl);
  const title = escapeHtml(project.title);
  const detailsHref = `./src/pages/project.html?id=${encodeURIComponent(project.id)}`;

  return `
    <article class="project-card" data-category="${escapeHtml(project.category)}">
      <div class="project-card-glow" aria-hidden="true"></div>
      <div class="project-card-body">
        <span class="project-category">${escapeHtml(project.category)}</span>
        <h3 class="project-title"><a href="${detailsHref}" class="project-title-link">${title}</a></h3>
        <p class="project-description">${escapeHtml(project.description)}</p>
        <ul class="pill-list tech-pills">${techPills}</ul>
      </div>
      <div class="project-card-actions">
        <a href="${detailsHref}" class="text-link project-details-link">View Details &rarr;</a>
        <div class="project-card-icons">
          <a href="${liveHref}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View live project: ${title}">${ICON_EXTERNAL}</a>
          <a href="${githubHref}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub: ${title}">${ICON_GITHUB}</a>
        </div>
      </div>
    </article>
  `;
}

function renderGrid(isFilterAction: boolean): void {
  const grid = document.querySelector<HTMLElement>('#project-grid');
  if (!grid) return;
  attachCardGlow(grid);

  const filtered =
    currentFilter === 'All' ? allProjects : allProjects.filter((p) => p.category === currentFilter);

  const paint = (): void => {
    grid.innerHTML = filtered.length
      ? filtered.map(createCard).join('')
      : '<p class="project-empty">No projects in this category yet.</p>';
    observeReveal(grid);
    requestAnimationFrame(() => grid.classList.remove('is-filtering'));
  };

  if (isFilterAction && !prefersReducedMotion()) {
    grid.classList.add('is-filtering');
    window.setTimeout(paint, 180);
  } else {
    paint();
  }
}

function renderFilterBar(): string {
  return CATEGORIES.map(
    (category) =>
      `<button type="button" class="filter-btn${category === 'All' ? ' is-active' : ''}" data-filter="${category}" role="tab" aria-selected="${category === 'All'}">${category}</button>`
  ).join('');
}

function initFilters(): void {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.filter-btn'));
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('is-active')) return;
      buttons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = (btn.dataset['filter'] as ProjectCategory | 'All') ?? 'All';
      renderGrid(true);
    });
  });
}

function resetFilterToAll(): void {
  currentFilter = 'All';
  document.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach((b) => {
    const isAll = b.dataset['filter'] === 'All';
    b.classList.toggle('is-active', isAll);
    b.setAttribute('aria-selected', String(isAll));
  });
}

function initModal(): void {
  const fab = document.querySelector<HTMLButtonElement>('#add-project-fab');
  const overlay = document.querySelector<HTMLElement>('#project-modal-overlay');
  const closeBtn = document.querySelector<HTMLButtonElement>('#project-modal-close');
  const cancelBtn = document.querySelector<HTMLButtonElement>('#project-modal-cancel');
  const form = document.querySelector<HTMLFormElement>('#project-form');
  if (!fab || !overlay || !closeBtn || !cancelBtn || !form) return;

  const openModal = (): void => {
    overlay.hidden = false;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => overlay.classList.add('is-open'));
    form.querySelector<HTMLInputElement>('#field-title')?.focus();
  };

  const closeModal = (): void => {
    overlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    window.setTimeout(() => {
      overlay.hidden = true;
      form.reset();
    }, 200);
  };

  fab.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) closeModal();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const title = String(data.get('title') ?? '').trim();
    const description = String(data.get('description') ?? '').trim();
    if (!title || !description) return;

    const tech = String(data.get('tech') ?? '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const category = (data.get('category') as ProjectCategory | null) ?? 'Full Stack';

    const project: Project = {
      id: `custom-${Date.now()}`,
      title,
      description,
      tech,
      category,
      liveUrl: String(data.get('liveUrl') ?? '').trim(),
      githubUrl: String(data.get('githubUrl') ?? '').trim(),
    };

    const customProjects = loadCustomProjects();
    customProjects.push(project);
    saveCustomProjects(customProjects);
    allProjects.push(project);

    resetFilterToAll();
    renderGrid(true);
    closeModal();
  });
}

function modalMarkup(): string {
  return `
    <button type="button" class="fab" id="add-project-fab" aria-haspopup="dialog" aria-controls="project-modal" aria-label="Add a project">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
    <div class="modal-overlay" id="project-modal-overlay" hidden>
      <div class="modal" id="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div class="modal-header">
          <h2 id="project-modal-title">Add a Project</h2>
          <button type="button" class="modal-close" id="project-modal-close" aria-label="Close dialog">&times;</button>
        </div>
        <form id="project-form" novalidate>
          <div class="form-field">
            <label for="field-title">Title</label>
            <input type="text" id="field-title" name="title" required maxlength="80" />
          </div>
          <div class="form-field">
            <label for="field-description">Description</label>
            <textarea id="field-description" name="description" rows="3" required maxlength="400"></textarea>
          </div>
          <div class="form-field">
            <label for="field-tech">Tech Stack <span class="field-hint">(comma separated)</span></label>
            <input type="text" id="field-tech" name="tech" placeholder="React, Node.js, PostgreSQL" />
          </div>
          <div class="form-row">
            <div class="form-field">
              <label for="field-category">Category</label>
              <select id="field-category" name="category">
                <option value="Full Stack">Full Stack</option>
                <option value="AI &amp; ML">AI &amp; ML</option>
                <option value="Backend">Backend</option>
                <option value="DevOps">DevOps</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label for="field-live-url">Live URL</label>
              <input type="url" id="field-live-url" name="liveUrl" placeholder="https://" />
            </div>
            <div class="form-field">
              <label for="field-github-url">GitHub URL</label>
              <input type="url" id="field-github-url" name="githubUrl" placeholder="https://" />
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="project-modal-cancel">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Project</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initProjects(): void {
  const section = document.querySelector<HTMLElement>('#projects');
  if (!section) return;

  allProjects = [...defaultProjects, ...loadCustomProjects()];

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Projects</h2>
      <div class="project-filters" role="tablist" aria-label="Filter projects by category">
        ${renderFilterBar()}
      </div>
      <div class="project-grid" id="project-grid" aria-live="polite"></div>
    </div>
    ${modalMarkup()}
  `;

  initFilters();
  initModal();
  renderGrid(false);
}
