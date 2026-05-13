import { Link } from 'react-router-dom';
import footerData from './Footer.json';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="main-footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-section">
            <Link to="/" className="footer__brand">
              <span className="footer__brand-icon">◈</span>
              <span className="footer__brand-name">{footerData.brand}</span>
            </Link>
            <p className="footer__tagline">{footerData.tagline}</p>
          </div>

          {footerData.sections.map((section, index) => (
            <div key={index} className="footer__link-section">
              <h4 className="footer__section-title">{section.title}</h4>
              <ul className="footer__link-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__credits-section">
            <p className="footer__credits">{footerData.credits}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-divider" />
          <p className="footer__copyright">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
