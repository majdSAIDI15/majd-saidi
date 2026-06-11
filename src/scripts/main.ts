// Client entry point: wires up all interactive behaviour after the DOM is ready.
import { initNavigation } from './navigation';
import { initTypewriter } from './typewriter';
import { initScrollUI } from './scroll';
import { initCursor } from './cursor';
import { initParticles } from './particles';
import { initMatrixRain } from './matrix';
import { initTilt, initConfetti } from './effects';
import { initContactForm } from './contactForm';
import { initProjectModals } from './projectModal';

function init(): void {
  // Always-on, lightweight behaviour.
  initNavigation();
  initTypewriter();
  initScrollUI();
  initContactForm();
  initProjectModals();

  // Pointer-driven flourishes only make sense with a fine pointer.
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (finePointer) {
    initCursor();
    initTilt();
    initConfetti();
  }

  // Heavy canvas animations — skip when the user prefers reduced motion.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    initParticles();
    initMatrixRain();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
