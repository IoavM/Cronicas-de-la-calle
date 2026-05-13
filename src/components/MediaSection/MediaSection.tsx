import './MediaSection.css';
import defaultData from './MediaSection.json';

interface MediaItem {
  type: 'audio' | 'video' | 'image';
  src: string;
  title: string;
  description?: string;
  poster?: string;
}

interface MediaSectionProps {
  label?: string;
  title?: string;
  description?: string;
  items: MediaItem[];
}

export default function MediaSection({
  label = defaultData.default.label,
  title = defaultData.default.title,
  description = defaultData.default.description,
  items,
}: MediaSectionProps) {
  return (
    <section className="media section" id="media-section" aria-label="Multimedia">
      <div className="container">
        <div className="media__header reveal">
          <span className="section-label">{label}</span>
          <h2 className="media__title">{title}</h2>
          <p className="media__description">{description}</p>
        </div>

        <div className="media__grid">
          {items.map((item, index) => (
            <div key={index} className={`media__item media__item--${item.type} reveal reveal-delay-${(index % 4) + 1}`}>
              <div className="media__item-header">
                <span className="media__item-type">
                  {item.type === 'audio' && '♫'}
                  {item.type === 'video' && '▶'}
                  {item.type === 'image' && '◻'}
                </span>
                <span className="media__item-type-label">{item.type}</span>
              </div>

              <div className="media__item-content">
                {item.type === 'audio' && (
                  <audio controls preload="none" className="media__audio">
                    <source src={item.src} />
                    Tu navegador no soporta audio.
                  </audio>
                )}
                {item.type === 'video' && (
                  <video
                    controls
                    preload="none"
                    poster={item.poster}
                    className="media__video"
                  >
                    <source src={item.src} />
                    Tu navegador no soporta video.
                  </video>
                )}
                {item.type === 'image' && (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="media__image"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="media__item-info">
                <h4 className="media__item-title">{item.title}</h4>
                {item.description && (
                  <p className="media__item-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
