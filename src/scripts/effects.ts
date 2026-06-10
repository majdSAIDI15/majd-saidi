import confetti from 'canvas-confetti';

// 3D tilt on elements tagged `.rotate-3d`.
export function initTilt(): void {
  document.querySelectorAll<HTMLElement>('.rotate-3d').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const angleY = (e.clientX - rect.left - rect.width / 2) / 20;
      const angleX = (rect.height / 2 - (e.clientY - rect.top)) / 20;
      el.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'rotateY(0) rotateX(0)';
    });
  });
}

// Confetti burst when hovering a certification card (desktop only).
export function initConfetti(): void {
  document.querySelectorAll<HTMLElement>('.certification-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (window.innerWidth <= 768) return;
      const rect = card.getBoundingClientRect();
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x: rect.left / window.innerWidth, y: rect.top / window.innerHeight },
        colors: ['#0066ff', '#00ccff', '#ffffff'],
      });
    });
  });
}
