import { experiences } from '../data/experience';
import { observeReveal } from '../animations/observer';

export function initExperience(): void {
  const section = document.querySelector<HTMLElement>('#experience');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Experience</h2>
      <ol class="timeline">
        ${experiences
          .map(
            (role) => `
          <li class="timeline-item reveal-item">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-heading">
                  <h3 class="timeline-company">${role.company}</h3>
                  <p class="timeline-role">${role.title}</p>
                  <p class="timeline-meta">${role.type} &middot; ${role.location}</p>
                </div>
                <span class="timeline-dates">${role.period}</span>
              </div>
              <ul class="timeline-points">
                ${role.bullets.map((point) => `<li>${point}</li>`).join('')}
              </ul>
              <ul class="pill-list timeline-tags">
                ${role.tech.map((t) => `<li class="pill pill-sm">${t}</li>`).join('')}
              </ul>
            </div>
          </li>`
          )
          .join('')}
      </ol>
    </div>
  `;

  observeReveal(section);
}
