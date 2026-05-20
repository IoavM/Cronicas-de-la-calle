import { useParams, Link } from 'react-router-dom';
import { characters } from '../data/characters';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/personajes.css';

export default function Personajes() {
  useScrollReveal();
  
  // Get character ID from URL params (e.g., /personajes/gladiador)
  const { id } = useParams<{ id: string }>();
  
  // Find matching character
  const character = characters.find((c) => c.id === id);

  // Fallback if character doesn't exist
  if (!character) {
    return (
      <main className="personajes-page personajes-page--error">
        <div className="container text-center">
          <div className="reveal">
            <span className="section-label">Error 404</span>
            <h1 className="error-title">Personaje no encontrado</h1>
            <p className="error-subtitle">
              El guardián urbano que buscas ha desaparecido entre los callejones de la memoria.
            </p>
            <Link to="/" className="error-btn-home">
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="personajes-page personajes-page--detail">
      <div className="container container--wide">
        
        {/* Encabezado / Categoría y Retorno */}
        <div className="personajes-detail__header reveal">
          <Link to={character.siteUrl} className="personajes-detail__back-link">
            ← Volver a la crónica de {character.siteName}
          </Link>
          <div className="personajes-detail__breadcrumb">
            <span>Personaje Conceptual</span>
            <span className="breadcrumb-divider">◈</span>
            <span className="breadcrumb-site">{character.siteName}</span>
          </div>
        </div>

        {/* 1. CINEMATIC ARTWORK BANNER (Widescreen layout) */}
        <div className="personajes-detail__cinematic-wrapper reveal">
          <div className="personajes-detail__frame personajes-detail__frame--cinematic">
            <img
              src={character.cinematicImage}
              alt={character.name}
              className="personajes-detail__image personajes-detail__image--cinematic"
            />
          </div>
        </div>

        {/* TÍTULO MONUMENTAL */}
        <div className="personajes-detail__title-section reveal reveal-delay-1">
          <span className="section-label">El Guardián Cultural</span>
          <h1 className="personajes-detail__name">{character.name}</h1>
          <div className="personajes-detail__divider" />
        </div>

        {/* 2. CITA DESTACADA EN PRIMERA PERSONA */}
        <div className="personajes-detail__quote-container reveal reveal-delay-2">
          <blockquote className="personajes-detail__quote">
            “ {character.quote} ”
          </blockquote>
        </div>

        {/* 3. GRILLA EDITORIAL ASIMÉTRICA INFERIOR */}
        <div className="personajes-detail__story-grid">
          
          {/* Ficha de Anatomía Conceptual (Fila/Columna Izquierda - Glassmorphic) */}
          <div className="personajes-detail__specs-col reveal reveal-delay-3">
            <div className="personajes-detail__specs-card">
              <h3 className="specs-card__title">Anatomía del Sistema</h3>
              <div className="specs-card__divider" />
              <ul className="specs-card__list">
                {character.metadata.map((item, index) => (
                  <li key={index} className="specs-card__item">
                    <span className="specs-card__label">{item.label}</span>
                    <span className="specs-card__value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relato Literario Completo (Columna Derecha) */}
          <div className="personajes-detail__text-col reveal reveal-delay-3">
            <div className="personajes-detail__story">
              {character.story.map((para, index) => (
                <p key={index} className="personajes-detail__paragraph">
                  {para}
                </p>
              ))}
            </div>

            {/* Acciones de Retorno */}
            <div className="personajes-detail__actions">
              <Link to={character.siteUrl} className="personajes-detail__explore-btn">
                Explorar {character.siteName} →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
