export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Reveals `.reveal-item` elements (fade + slide up) as they enter the
 * viewport. Elements sharing a parent are staggered by their index within
 * that parent, giving each section's children a wave-like entrance.
 */
export function observeReveal(root: ParentNode = document): void {
  const items = Array.from(
    root.querySelectorAll<HTMLElement>('.reveal-item:not(.is-visible), .project-card:not(.is-visible)')
  );
  if (!items.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const groups = new Map<Element, HTMLElement[]>();
  items.forEach((el) => {
    const parent = el.parentElement ?? el;
    const list = groups.get(parent) ?? [];
    list.push(el);
    groups.set(parent, list);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  groups.forEach((els) => {
    els.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 70, 560)}ms`;
      observer.observe(el);
    });
  });
}
