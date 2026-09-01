import { prefersReducedMotion } from './observer';

/** Types `text` into `el` one character at a time. A blinking cursor is
 * handled purely in CSS (see hero.css `.cursor`). */
export function typewrite(el: HTMLElement, text: string, speedMs = 42): void {
  if (prefersReducedMotion()) {
    el.textContent = text;
    return;
  }

  let i = 0;
  const tick = (): void => {
    el.textContent = text.slice(0, i);
    i += 1;
    if (i <= text.length) {
      window.setTimeout(tick, speedMs);
    }
  };

  tick();
}
