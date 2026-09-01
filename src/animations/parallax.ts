import { prefersReducedMotion } from './observer';

/** Nudges the hero's dot-grid background and content by a fraction of the
 * scroll distance, only while the hero is still on screen. */
export function initHeroParallax(heroSelector = '.hero', contentSelector = '.hero-content'): void {
  const hero = document.querySelector<HTMLElement>(heroSelector);
  const content = document.querySelector<HTMLElement>(contentSelector);
  if (!hero) return;

  let ticking = false;

  function update(): void {
    if (!prefersReducedMotion()) {
      const scrollY = window.scrollY;
      const heroHeight = hero?.offsetHeight ?? 0;
      if (scrollY < heroHeight) {
        document.documentElement.style.setProperty('--hero-parallax', `${Math.round(scrollY * 0.08)}px`);
        content?.style.setProperty('--hero-content-parallax', `${Math.round(scrollY * 0.15)}px`);
      }
    }
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
