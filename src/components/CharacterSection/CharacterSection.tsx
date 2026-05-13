import './CharacterSection.css';
import defaultData from './CharacterSection.json';

interface CharacterSectionProps {
  label?: string;
  title?: string;
  description?: string;
  characterName?: string;
  comingSoon?: string;
}

export default function CharacterSection({
  label = defaultData.default.label,
  title = defaultData.default.title,
  description = defaultData.default.description,
  characterName,
  comingSoon = defaultData.default.comingSoon,
}: CharacterSectionProps) {
  return (
    <section
      className="character section"
      id="character-section"
      aria-label="Personaje conceptual"
    >
      <div className="container container--narrow">
        <div className="character__content reveal">
          <span className="section-label">{label}</span>
          <h2 className="character__title">{title}</h2>
          <div className="character__divider" />
          <p className="character__description">{description}</p>

          <div className="character__placeholder">
            <div className="character__placeholder-frame">
              <div className="character__placeholder-icon">◇</div>
              {characterName && (
                <p className="character__placeholder-name">{characterName}</p>
              )}
              <span className="character__placeholder-badge">{comingSoon}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
