import { skillGroups } from '../data/skills';
import { observeReveal } from '../animations/observer';

const CATEGORY_ICONS: Record<string, string> = {
  Languages: '💻',
  Frontend: '🎨',
  Backend: '⚙️',
  'AI & ML': '🤖',
  Databases: '🗄️',
  'Cloud & DevOps': '☁️',
  'Testing & QA': '🧪',
};

export function initSkills(): void {
  const section = document.querySelector<HTMLElement>('#skills');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Tech Stack</h2>
      <div class="stack-groups">
        ${skillGroups
          .map(
            (group) => `
          <div class="stack-group">
            <h3 class="stack-group-title reveal-item">
              <span class="stack-group-icon" aria-hidden="true">${CATEGORY_ICONS[group.category] ?? '🧩'}</span>
              <span>${group.category}</span>
            </h3>
            <ul class="pill-list">
              ${group.skills.map((skill) => `<li class="pill reveal-item">${skill}</li>`).join('')}
            </ul>
          </div>`
          )
          .join('')}
      </div>
    </div>
  `;

  observeReveal(section);
}
