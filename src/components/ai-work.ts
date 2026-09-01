import type { AIWorkEntry } from '../types';
import { aiWork } from '../data/ai-work';
import { observeReveal } from '../animations/observer';
import { attachCardGlow, escapeHtml, sanitizeUrl, ICON_EXTERNAL, ICON_GITHUB } from '../utils';

function createCard(entry: AIWorkEntry): string {
  const techPills = entry.tech.map((t) => `<li class="pill pill-sm">${escapeHtml(t)}</li>`).join('');
  const title = escapeHtml(entry.title);

  const links: string[] = [];
  if (entry.liveUrl) {
    links.push(
      `<a href="${sanitizeUrl(entry.liveUrl)}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View live: ${title}">${ICON_EXTERNAL}</a>`
    );
  }
  if (entry.githubUrl) {
    links.push(
      `<a href="${sanitizeUrl(entry.githubUrl)}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub: ${title}">${ICON_GITHUB}</a>`
    );
  }

  return `
    <article class="project-card reveal-item">
      <div class="project-card-glow" aria-hidden="true"></div>
      <div class="project-card-body">
        <h3 class="project-title">${title}</h3>
        <p class="project-description">${escapeHtml(entry.description)}</p>
        <ul class="pill-list tech-pills">${techPills}</ul>
      </div>
      ${links.length ? `<div class="project-card-actions">${links.join('')}</div>` : ''}
    </article>
  `;
}

export function initAIWork(): void {
  const section = document.querySelector<HTMLElement>('#ai-work');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">AI &amp; ML Work</h2>
      <p class="section-intro reveal-item">
        Over the past few years my focus has shifted toward applied AI &mdash; integrating LLMs,
        building serverless AI middleware, and blending intelligent automation into production systems.
      </p>
      <div class="project-grid" id="ai-work-grid" aria-live="polite">
        ${aiWork.map(createCard).join('')}
      </div>
    </div>
  `;

  const grid = section.querySelector<HTMLElement>('#ai-work-grid');
  if (grid) attachCardGlow(grid);

  observeReveal(section);
}
