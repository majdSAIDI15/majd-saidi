// Custom blue cursor dot that grows over interactive elements.
export function initCursor(): void {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  const interactive = document.querySelectorAll('a, button, .card-hover, input, textarea');
  interactive.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.opacity = '0.7';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '0.5';
    });
  });
}
