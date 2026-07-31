import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    const baseTitle = 'Elijah Osianor & Co. | Chartered Accountants';
    document.title = title ? `${title} | Elijah Osianor & Co.` : baseTitle;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title]);
}
