import { typewrite } from '../animations/typewriter';
import { initHeroParallax } from '../animations/parallax';

const HERO_BADGES: string[] = ['10+ Years', '50+ Projects', 'AI & ML Expert'];

interface HeroInfoRow {
  label: string;
  value: string;
}

const HERO_INFO_ROWS: HeroInfoRow[] = [
  { label: 'Location', value: 'Toronto, Canada' },
  { label: 'Experience', value: '10+ Years' },
  { label: 'Companies', value: 'Wix &middot; BMO &middot; Ford &middot; VGH' },
  { label: 'Available for', value: 'Full-time &amp; Contract roles' },
];

export function initHero(): void {
  const hero = document.querySelector<HTMLElement>('#hero');
  if (!hero) return;

  hero.innerHTML = `
    <div class="section-inner hero-content">
      <div class="hero-copy">
        <h1 class="hero-name">Shamsi Gafarov</h1>
        <div class="gradient-underline" aria-hidden="true"></div>
        <ul class="hero-badges" aria-label="Highlights">
          ${HERO_BADGES.map((badge) => `<li class="hero-badge">${badge}</li>`).join('')}
        </ul>
        <p class="eyebrow"><span class="typewriter-text"></span><span class="cursor" aria-hidden="true"></span></p>
        <p class="hero-bio">
          Senior Full Stack Engineer based in Toronto with 10+ years of experience building robust
          backend systems, intuitive frontends, and intelligent AI powered applications. Specializing
          in Java, TypeScript, AWS, and Kubernetes to architect and ship solutions that scale across
          millions of users.
        </p>
        <div class="hero-ctas">
          <a href="#projects" class="btn btn-primary">View Work</a>
          <a href="#contact" class="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-visual-glow" aria-hidden="true"></div>
        <div class="info-card">
          <div class="info-card-header">
            <span class="info-card-name">Shamsi Gafarov</span>
            <span class="info-card-title">Senior Full Stack Engineer</span>
          </div>
          <ul class="info-card-list">
            ${HERO_INFO_ROWS.map(
              (row) => `
              <li class="info-card-row">
                <span class="info-card-label">${row.label}</span>
                <span class="info-card-value">${row.value}</span>
              </li>`
            ).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  const typewriterEl = hero.querySelector<HTMLElement>('.typewriter-text');
  if (typewriterEl) {
    typewrite(typewriterEl, 'Senior Full Stack Software Engineer');
  }

  initHeroParallax();
}
