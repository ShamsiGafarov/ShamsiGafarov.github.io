import type { StatItem } from '../types';
import { observeReveal } from '../animations/observer';
import { initCounters } from '../animations/counter';

const STATS: StatItem[] = [
  { label: 'Years Experience', target: 10, suffix: '+' },
  { label: 'Companies', target: 5, suffix: '' },
  { label: 'AI Products', target: 3, suffix: '' },
  { label: 'Degrees', target: 2, suffix: '' },
];

export function initAbout(): void {
  const section = document.querySelector<HTMLElement>('#about');
  if (!section) return;

  section.innerHTML = `
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-copy">
          <h2 class="section-heading reveal-item">About Me</h2>
          <p class="about-text reveal-item">
            I am a Senior Full Stack Software Engineer and AI practitioner with over a decade of
            experience delivering enterprise-grade systems across banking, healthcare, and SaaS at
            companies including Wix, BMO, Ford Motor Company, and Vancouver General Hospital.
          </p>
          <p class="about-text reveal-item">
            My engineering philosophy centers on building systems that are performant, maintainable,
            and built to scale. I architect distributed microservices with Java and Spring Boot, design
            cloud-native infrastructure on AWS and Azure with Kubernetes and Docker, and ship polished
            frontends with React, Angular, and TypeScript.
          </p>
          <p class="about-text reveal-item">
            Over the past several years I have integrated LLM-powered features and AI automation into
            production environments &mdash; building secure serverless middleware, designing prompt
            engineering pipelines, and delivering intelligent applications that solve real business
            problems.
          </p>
          <p class="about-text reveal-item">
            I hold a Diploma in AI and Software Engineering Technology from Centennial College and a
            Bachelor's degree in Computer Programming from Azerbaijan Technical University, bringing
            both modern AI expertise and deep foundational engineering knowledge to every project I take
            on.
          </p>
        </div>
        <div class="stats-row">
          ${STATS.map(
            (stat) => `
            <div class="stat reveal-item">
              <span class="stat-number" data-target="${stat.target}" data-suffix="${stat.suffix}">0</span>
              <span class="stat-label">${stat.label}</span>
            </div>`
          ).join('')}
        </div>
      </div>
    </div>
  `;

  observeReveal(section);
  initCounters();
}
