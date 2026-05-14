import './CharacterSection.css';

interface CharacterSectionProps {
  label?: string;
  title: string;
  story: string[];
  characterName: string;
  characterImage?: string;
  imagePosition?: 'left' | 'right';
}

export default function CharacterSection({
  label = 'Personaje',
  title,
  story,
  characterName,
  characterImage,
  imagePosition = 'right',
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
            {story.map((paragraph, index) => (
              <p key={index} className="character__story-paragraph">
                {paragraph}
              </p>
            ))}
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
