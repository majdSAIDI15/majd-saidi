// Decorative particle network drawn on a full-screen canvas.
const COLOR = '0, 102, 255';

class Particle {
  x = 0;
  y = 0;
  size = 0;
  speedX = 0;
  speedY = 0;
  color = '';

  constructor(private width: number, private height: number) {
    this.reset();
  }

  reset(): void {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() - 0.5;
    this.speedY = Math.random() - 0.5;
    this.color = `rgba(${COLOR}, ${Math.random() * 0.3})`;
  }

  update(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > width || this.x < 0) this.speedX = -this.speedX;
    if (this.y > height || this.y < 0) this.speedY = -this.speedY;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function initParticles(): void {
  const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();

  const count = window.innerWidth < 768 ? 60 : 90;
  const particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(canvas.width, canvas.height);
      particles[i].draw(ctx);
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);
        if (distance < 100) {
          ctx.strokeStyle = `rgba(${COLOR}, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  };

  animate();
  window.addEventListener('resize', resize);
}
