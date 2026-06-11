// Opens/closes the per-project case-study dialogs and the shared image lightbox.
export function initProjectModals(): void {
  const openers = document.querySelectorAll<HTMLElement>('[data-open-modal]');
  if (openers.length === 0) return;

  const lockScroll = () => (document.body.style.overflow = 'hidden');
  const unlockScroll = () => (document.body.style.overflow = '');

  // --- Open / close dialogs ---
  openers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.openModal;
      const dialog = document.getElementById(`pm-${slug}`) as HTMLDialogElement | null;
      if (!dialog?.showModal) return;
      dialog.showModal();
      lockScroll();
    });
  });

  document.querySelectorAll<HTMLDialogElement>('dialog.project-modal').forEach((dialog) => {
    const close = () => {
      dialog.close();
    };

    // Close button(s)
    dialog.querySelectorAll('.modal-close').forEach((b) => b.addEventListener('click', close));

    // Backdrop click (clicks land on <dialog> itself, not the inner card)
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) close();
    });

    dialog.addEventListener('close', unlockScroll);
  });

  // --- Lightbox (its own dialog so it layers above an open project modal) ---
  const lightbox = document.getElementById('lightbox') as HTMLDialogElement | null;
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  const openLightbox = (src: string, caption: string) => {
    if (!lightbox?.showModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    lightbox.showModal();
    lockScroll();
  };

  document.querySelectorAll<HTMLElement>('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      openLightbox(item.dataset.full ?? '', item.dataset.caption ?? '');
    });
  });

  lightboxClose?.addEventListener('click', () => lightbox?.close());
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.close();
  });
  lightbox?.addEventListener('close', () => {
    if (lightboxImg) lightboxImg.src = '';
    // The project modal may still be open beneath — keep scroll locked if so.
    if (!document.querySelector('dialog.project-modal[open]')) unlockScroll();
  });
}
