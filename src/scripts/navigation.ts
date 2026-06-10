// Mobile menu toggle + smooth-scrolling for in-page anchor links.
export function initNavigation(): void {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn?.addEventListener('click', () => {
    const open = mobileMenu?.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector<HTMLElement>(targetId);
      if (!target) return;

      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      mobileMenu?.classList.add('hidden');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });
}
