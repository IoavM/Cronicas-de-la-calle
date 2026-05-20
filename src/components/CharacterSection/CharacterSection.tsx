import { Link } from 'react-router-dom';
import './CharacterSection.css';

interface CharacterSectionProps {
  label?: string;
  title: string;
  description: string | string[];
  characterName: string;
  characterImage?: string;
  imagePosition?: 'left' | 'right';
  showGlobalLink?: boolean;
  characterId?: string;
}

export default function CharacterSection({
  label = 'Personaje',
  title,
  description,
  characterName,
  characterImage,
  imagePosition = 'right',
  showGlobalLink = false,
  characterId,
}: CharacterSectionProps) {
  return (
    <section
      className="character section"
      id="character-section"
      aria-label="Personaje conceptual"
    >
      <div className="container">
        {/* Title centered at the top */}
        <div className="character__header reveal">
          <span className="section-label">{label}</span>
          <h2 className="character__title">{title}</h2>
          <div className="character__divider" />
        </div>

        {/* Two-column layout: image + text */}
        <div className={`character__grid reveal ${imagePosition === 'left' ? 'character__grid--image-left' : ''}`}>
          {/* Text column */}
          <div className="character__text">
            <h3 className="character__name">{characterName}</h3>
            {Array.isArray(description) ? (
              description.map((para, idx) => {
                const colonIndex = para.indexOf(':');
                if (colonIndex > 0 && colonIndex < 40) {
                  const key = para.substring(0, colonIndex);
                  const value = para.substring(colonIndex + 1);
                  return (
                    <p key={idx} className="character__story-paragraph">
                      <strong>{key}:</strong>{value}
                    </p>
                  );
                }
                return (
                  <p key={idx} className="character__story-paragraph">
                    {para}
                  </p>
                );
              })
            ) : (
              <p className="character__story-paragraph">
                {description}
              </p>
            )}

            {showGlobalLink && characterId && (
              <div className="character__global-cta reveal reveal-delay-2">
                <Link to={`/personajes/${characterId}`} className="character__global-link">
                  <span>Conocer el personaje conceptual</span>
                  <span className="character__global-link-arrow">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* Image column — space reserved for future image */}
          <div className="character__image-space">
            {characterImage ? (
              <img
                src={characterImage}
                alt={characterName}
                className="character__image"
              />
            ) : (
              <div className="character__image-placeholder" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

