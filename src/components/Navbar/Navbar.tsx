import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import navData from './Navbar.json';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      id="main-navbar"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Ir al inicio">
          <span className="navbar__brand-icon">◈</span>
          <span className="navbar__brand-text">{navData.brand}</span>
        </Link>

        <div className="navbar__nav-container">
          <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navData.links.map((link, index) => (
              <li key={index} className="navbar__item">
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lang-switch no-translate" aria-label="Seleccionar idioma">
            <button
              onClick={() => changeLanguage('es')}
              className={`lang-switch__btn ${currentLanguage === 'es' ? 'lang-switch__btn--active' : ''}`}
              aria-label="Español"
            >
              ES
            </button>
            <span className="lang-switch__separator">/</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`lang-switch__btn ${currentLanguage === 'en' ? 'lang-switch__btn--active' : ''}`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <button
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            id="navbar-toggle"
          >
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

