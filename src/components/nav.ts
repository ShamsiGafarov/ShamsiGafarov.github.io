interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-work', label: 'AI Work' },
  { href: '#contact', label: 'Contact' },
];

export interface NavOptions {
  /** Relative path back to index.html — pass this when rendering the nav on
   * a subpage (e.g. a project detail page) so in-page anchors and the logo
   * link resolve to the homepage instead of the current document. */
  homeHref?: string;
}

export function initNav(options: NavOptions = {}): void {
  const homeHref = options.homeHref ?? '';
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;

  header.innerHTML = `
    <nav class="nav" aria-label="Primary">
      <a href="${homeHref ? homeHref : '#top'}" class="nav-name">Shamsi Gafarov</a>
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        ${NAV_LINKS.map(
          (link) => `<li><a href="${homeHref}${link.href}"${homeHref ? '' : ' data-nav'}>${link.label}</a></li>`
        ).join('')}
      </ul>
    </nav>
  `;

  initMobileToggle(header);
  initFrostedScroll(header);
  if (!homeHref) {
    initScrollspy();
  }
}

function initMobileToggle(header: HTMLElement): void {
  const toggle = header.querySelector<HTMLButtonElement>('#nav-toggle');
  const links = header.querySelector<HTMLUListElement>('#nav-links');
  if (!toggle || !links) return;

  const closeMenu = (): void => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function initFrostedScroll(header: HTMLElement): void {
  const hero = document.querySelector<HTMLElement>('.hero');
  let ticking = false;

  function update(): void {
    const heroHeight = hero?.offsetHeight ?? 0;
    header.classList.toggle('is-scrolled', window.scrollY > heroHeight - header.offsetHeight);
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
}

function initScrollspy(): void {
  const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'));
  const sections = anchors
    .map((anchor) => document.querySelector<HTMLElement>(anchor.getAttribute('href') ?? ''))
    .filter((section): section is HTMLElement => section !== null);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const setActive = (id: string): void => {
    anchors.forEach((anchor) => anchor.classList.toggle('active', anchor.getAttribute('href') === `#${id}`));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
