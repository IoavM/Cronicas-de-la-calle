import './StorySection.css';

interface StorySectionProps {
  label?: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
}

export default function StorySection({
  label,
  title,
  paragraphs,
  image,
  imageAlt,
  reversed = false,
}: StorySectionProps) {
  return (
    <section
      className={`story section ${reversed ? 'story--reversed' : ''}`}
      id="story-section"
      aria-label="Historia"
    >
      <div className="container">
        <div className="story__grid">
          <div className="story__text reveal">
            {label && <span className="section-label">{label}</span>}
            <h2 className="story__title">{title}</h2>
            <div className="story__divider" />
            {paragraphs.map((p, i) => (
              <p key={i} className="story__paragraph">
                {p}
              </p>
            ))}
          </div>
          {image && (
            <div className="story__image-wrapper reveal reveal-delay-2">
              <img
                src={image}
                alt={imageAlt || title}
                className="story__image"
                loading="lazy"
              />
              <div className="story__image-accent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
