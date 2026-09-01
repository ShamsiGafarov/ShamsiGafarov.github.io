import { education } from '../data/education';
import { observeReveal } from '../animations/observer';

export function initEducation(): void {
  const section = document.querySelector<HTMLElement>('#education');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Education</h2>
      <ol class="timeline">
        ${education
          .map(
            (entry) => `
          <li class="timeline-item reveal-item">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-heading">
                  <h3 class="timeline-company">${entry.school}</h3>
                  <p class="timeline-role">${entry.degree}</p>
                </div>
                <span class="timeline-dates">${entry.period}</span>
              </div>
              <ul class="timeline-points">
                ${entry.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
              </ul>
              <ul class="pill-list timeline-tags">
                ${entry.skills.map((skill) => `<li class="pill pill-sm">${skill}</li>`).join('')}
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
