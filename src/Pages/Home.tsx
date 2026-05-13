import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/home.css';

import heroHome from '../assets/images/home/hero-home.png';
import heroMetro from '../assets/images/metro/hero-metro.png';
import heroBotero from '../assets/images/plaza-botero/hero-botero.png';
import heroAtanasio from '../assets/images/atanasio/hero-atanasio.png';

const places = [
  {
    slug: '/metro',
    label: 'Transporte & Cultura',
    title: 'Metro de Medellín',
    excerpt: 'El sistema que transformó la movilidad y la identidad de una ciudad entera.',
    image: heroMetro,
  },
  {
    slug: '/plaza-botero',
    label: 'Arte & Espacio Público',
    title: 'Plaza Botero',
    excerpt: 'Donde las esculturas de Fernando Botero dialogan con la memoria colectiva.',
    image: heroBotero,
  },
  {
    slug: '/atanasio',
    label: 'Deporte & Pasión',
    title: 'Estadio Atanasio Girardot',
    excerpt: 'El coliseo deportivo que es escenario de pasiones, sueños y encuentros.',
    image: heroAtanasio,
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <main className="home-page">
      <Hero
        label="Descubre"
        title="Crónicas de la Calle"
        subtitle="Memoria urbana y patrimonio cultural de Medellín"
        backgroundImage={heroHome}
        scrollText="Explora las historias"
      />

      {/* Introduction */}
      <section className="home-intro section" id="home-intro">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Patrimonio</span>
            <h2 className="home-intro__title">Historias que habitan la ciudad</h2>
            <p className="home-intro__subtitle">
              Cada esquina de Medellín guarda una historia. En este recorrido, descubrimos las voces
              y memorias que dan vida a los espacios más emblemáticos de la ciudad, donde el patrimonio
              se convierte en experiencia viva.
            </p>
          </div>

          {/* Places Grid */}
          <div className="home-places">
            {places.map((place, index) => (
              <Link
                to={place.slug}
                key={index}
                className={`home-place-card reveal reveal-delay-${index + 1}`}
                id={`place-card-${place.slug.replace('/', '')}`}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="home-place-card__image"
                  loading="lazy"
                />
                <div className="home-place-card__overlay" />
                <div className="home-place-card__content">
                  <span className="home-place-card__label">{place.label}</span>
                  <h3 className="home-place-card__title">{place.title}</h3>
                  <p className="home-place-card__excerpt">{place.excerpt}</p>
                  <span className="home-place-card__cta">
                    Explorar →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="home-manifesto section" id="home-manifesto">
        <div className="container container--narrow">
          <div className="reveal">
            <span className="section-label" style={{ display: 'block', paddingLeft: 0, textAlign: 'center' }}>
              Manifiesto
            </span>
            <p className="home-manifesto__text">
              "Creemos que el patrimonio no vive solo en los edificios, sino en las personas que
              los habitan, en las historias que se cuentan al pasar, en la luz que atraviesa
              una ventana antigua. Esta es una invitación a mirar la ciudad con otros ojos."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
