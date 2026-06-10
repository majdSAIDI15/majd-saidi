// "Matrix rain" backdrop behind the hero section.
const KATAKANA =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const ALPHABET = `${KATAKANA}ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
const FONT_SIZE = 16;

export function initMatrixRain(): void {
  const canvas = document.getElementById('matrix-rain') as HTMLCanvasElement | null;
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;

  let drops: number[] = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array.from({ length: Math.ceil(canvas.width / FONT_SIZE) }, () => 1);
  };
  resize();

  const draw = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0066ff';
    ctx.font = `${FONT_SIZE}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
      ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE);
      if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  };

  window.setInterval(draw, 30);
  window.addEventListener('resize', resize);
}
