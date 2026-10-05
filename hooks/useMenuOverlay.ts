import { useEffect } from 'react';

/**
 * While the menu is open: Escape closes it,
 * and the page behind it can't scroll.
 */
export function useMenuOverlay(active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, onClose]);
}
