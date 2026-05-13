import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';

/**
 * Automatically scrolls to top when route changes.
 * Also provides a floating "back to top" button.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="scroll-to-top"
      onClick={handleScrollToTop}
      aria-label="Volver arriba"
      id="scroll-to-top-btn"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
