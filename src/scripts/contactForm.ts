// Contact form: composes the input into a WhatsApp message and opens it.
export function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (!form) return;

  const phone = form.dataset.phone ?? '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? '');
    const message = String(data.get('message') ?? '');

    const text = encodeURIComponent(
      `Nouveau message de portfolio:\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`,
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');

    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!btn) return;
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Envoi...';
    btn.disabled = true;
    window.setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check mr-2"></i> Envoyé !';
      window.setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        form.reset();
      }, 2000);
    }, 1000);
  });
}
