import './Hero.css';

interface HeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  scrollText?: string;
}

export default function Hero({
  label,
  title,
  subtitle,
  backgroundImage,
  scrollText = 'Explora',
}: HeroProps) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero" id="hero-section" aria-label="Hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label={title}
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        {label && <span className="hero__label">{label}</span>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
      </div>
      <button
        className="hero__scroll-indicator"
        onClick={handleScrollDown}
        aria-label="Desplazarse hacia abajo"
        id="hero-scroll-btn"
      >
        <span className="hero__scroll-text">{scrollText}</span>
        <span className="hero__scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </button>
    </section>
  );
}
