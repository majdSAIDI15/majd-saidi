// Rotates the hero role text with a type / pause / delete loop.
export function initTypewriter(): void {
  const el = document.getElementById('role');
  if (!el) return;

  let roles: string[] = [];
  try {
    roles = JSON.parse(el.dataset.roles ?? '[]');
  } catch {
    return;
  }
  if (roles.length <= 1) return;

  // Respect reduced-motion: show the first role and stop.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = roles[0];
    return;
  }

  const TYPE = 60;
  const DELETE = 30;
  const HOLD = 1800;
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = true;

  const tick = () => {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(tick, HOLD);
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      window.setTimeout(tick, TYPE);
    } else {
      window.setTimeout(tick, deleting ? DELETE : TYPE);
    }
  };

  window.setTimeout(tick, HOLD);
}
