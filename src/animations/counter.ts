import { prefersReducedMotion } from './observer';

export function animateCounter(el: HTMLElement): void {
  const target = Number(el.dataset['target'] ?? '0');
  const suffix = el.dataset['suffix'] ?? '';

  if (prefersReducedMotion()) {
    el.textContent = `${target}${suffix}`;
    return;
  }

  const duration = 1300;
  let start: number | null = null;

  function frame(timestamp: number): void {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${Math.round(eased * target)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

/** Wires up count-up animation on every `[data-target]` stat number, once
 * each becomes visible on scroll. */
export function initCounters(selector = '.stat-number[data-target]'): void {
  const stats = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!stats.length) return;

  if (!('IntersectionObserver' in window)) {
    stats.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  stats.forEach((stat) => observer.observe(stat));
}
