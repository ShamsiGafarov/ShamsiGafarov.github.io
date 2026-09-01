import '../styles/main.css';
import '../styles/nav.css';
import '../styles/skills.css';
import '../styles/projects.css';
import '../styles/about.css';
import '../styles/project-detail.css';

import { initNav } from '../components/nav';
import { observeReveal } from '../animations/observer';
import { escapeHtml, sanitizeUrl } from '../utils';
import { projects } from '../data/projects';
import { projectDetails } from '../data/project-details';
import type { Project, ProjectDetail } from '../types';

const HOME_HREF = '../../index.html';
const PROJECTS_HREF = `${HOME_HREF}#projects`;

function getProjectId(): string | null {
  return new URLSearchParams(window.location.search).get('id');
}

function renderNotFound(): void {
  const main = document.querySelector<HTMLElement>('#project-main');
  if (!main) return;

  main.innerHTML = `
    <section class="project-not-found">
      <div class="section-inner">
        <a href="${PROJECTS_HREF}" class="back-link">&larr; Back to Projects</a>
        <h1 class="project-hero-title">Project not found</h1>
        <p>We couldn't find a project matching that link.</p>
        <a href="${PROJECTS_HREF}" class="btn btn-primary">Back to Projects</a>
      </div>
    </section>
  `;
}

function renderHero(project: Project): void {
  const section = document.querySelector<HTMLElement>('#project-hero');
  if (!section) return;

  const techPills = project.tech.map((t) => `<li class="pill pill-sm">${escapeHtml(t)}</li>`).join('');

  section.innerHTML = `
    <div class="section-inner">
      <a href="${PROJECTS_HREF}" class="back-link reveal-item">&larr; Back to Projects</a>
      <div class="project-hero-top">
        <div class="project-hero-heading">
          <span class="project-category reveal-item">${escapeHtml(project.category)}</span>
          <h1 class="project-hero-title reveal-item">${escapeHtml(project.title)}</h1>
          <div class="project-hero-underline" aria-hidden="true"></div>
          <ul class="pill-list tech-pills reveal-item">${techPills}</ul>
        </div>
        <div class="project-hero-actions reveal-item">
          <a href="${sanitizeUrl(project.liveUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href="${sanitizeUrl(project.githubUrl)}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  `;
}

function renderOverview(detail: ProjectDetail): void {
  const section = document.querySelector<HTMLElement>('#project-overview');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Overview</h2>
      ${detail.description.map((p) => `<p class="project-detail-text reveal-item">${escapeHtml(p)}</p>`).join('')}
    </div>
  `;
}

function renderWhatIBuilt(detail: ProjectDetail): void {
  const section = document.querySelector<HTMLElement>('#project-built');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">What I Built</h2>
      <ul class="project-detail-points reveal-item">
        ${detail.bullets.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderTechStack(project: Project): void {
  const section = document.querySelector<HTMLElement>('#project-techstack');
  if (!section) return;

  const techPills = project.tech.map((t) => `<li class="pill">${escapeHtml(t)}</li>`).join('');

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Tech Stack</h2>
      <div class="tech-group reveal-item">
        <h3 class="tech-group-label">Core Technologies</h3>
        <ul class="pill-list">${techPills}</ul>
      </div>
    </div>
  `;
}

function renderChallenges(detail: ProjectDetail): void {
  const section = document.querySelector<HTMLElement>('#project-challenges');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Challenges &amp; Solutions</h2>
      ${detail.challenges.map((p) => `<p class="project-detail-text reveal-item">${escapeHtml(p)}</p>`).join('')}
    </div>
  `;
}

function renderResults(detail: ProjectDetail): void {
  const section = document.querySelector<HTMLElement>('#project-results');
  if (!section) return;

  const cards = detail.results
    .map(
      (result) => `
      <div class="stat reveal-item">
        <span class="stat-number">${escapeHtml(result.value)}</span>
        <span class="stat-label">${escapeHtml(result.label)}</span>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Results &amp; Impact</h2>
      <div class="results-grid">${cards}</div>
    </div>
  `;
}

function setFooterYear(): void {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function bootstrap(): void {
  initNav({ homeHref: HOME_HREF });
  setFooterYear();

  const id = getProjectId();
  const project = projects.find((p) => p.id === id);
  const detail = project ? projectDetails.find((d) => d.id === id) : undefined;

  if (!project || !detail) {
    renderNotFound();
    observeReveal(document);
    return;
  }

  document.title = `${project.title} — Shamsi Gafarov`;

  renderHero(project);
  renderOverview(detail);
  renderWhatIBuilt(detail);
  renderTechStack(project);
  renderChallenges(detail);
  renderResults(detail);

  observeReveal(document);
}

document.addEventListener('DOMContentLoaded', bootstrap);
