import { observeReveal } from '../animations/observer';
import { ICON_GITHUB } from '../utils';

const ICON_MAIL = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`;
const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const ICON_ARROW = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;

interface ContactLink {
  label: string;
  href: string;
  icon: string;
  external: boolean;
  ariaLabel: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:shamsigafarov@gmail.com',
    icon: ICON_MAIL,
    external: false,
    ariaLabel: 'Email shamsigafarov@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shamsigafarov/',
    icon: ICON_LINKEDIN,
    external: true,
    ariaLabel: 'Shamsi Gafarov on LinkedIn',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ShamsiGafarov',
    icon: ICON_GITHUB,
    external: true,
    ariaLabel: 'Shamsi Gafarov on GitHub',
  },
];

export function initContact(): void {
  const section = document.querySelector<HTMLElement>('#contact');
  if (!section) return;

  section.innerHTML = `
    <div class="contact-grid-overlay" aria-hidden="true"></div>
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Let&rsquo;s Build Something</h2>
      <p class="contact-text reveal-item">
        I'm based in Toronto, Canada and open to new opportunities and interesting
        conversations. The best way to reach me is by email.
      </p>
      <ul class="contact-links reveal-item">
        ${CONTACT_LINKS.map(
          (link) => `
          <li>
            <a
              href="${link.href}"
              class="contact-link"
              aria-label="${link.ariaLabel}"
              ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
            >
              <span class="contact-link-icon">${link.icon}</span>
              <span class="contact-link-label">${link.label}</span>
              <span class="contact-link-arrow">${ICON_ARROW}</span>
            </a>
          </li>`
        ).join('')}
      </ul>
    </div>
  `;

  observeReveal(section);
}
