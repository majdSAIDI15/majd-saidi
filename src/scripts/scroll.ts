// Scroll-driven UI: top progress bar + back-to-top button.
export function initScrollUI(): void {
  const progress = document.querySelector<HTMLElement>('.scroll-progress');
  const backToTop = document.getElementById('back-to-top');

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (progress) {
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progress.style.width = `${pct}%`;
    }

    if (backToTop) {
      const show = scrollTop > 300;
      backToTop.classList.toggle('opacity-0', !show);
      backToTop.classList.toggle('invisible', !show);
      backToTop.classList.toggle('opacity-100', show);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
