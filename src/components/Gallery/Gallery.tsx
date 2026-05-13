import { useState } from 'react';
import './Gallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  label?: string;
  title?: string;
  images: GalleryImage[];
}

export default function Gallery({ label, title, images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="gallery section" id="gallery-section" aria-label="Galería">
      <div className="container">
        <div className="gallery__header reveal">
          {label && <span className="section-label">{label}</span>}
          {title && <h2 className="gallery__title">{title}</h2>}
        </div>

        <div className="gallery__grid">
          {images.map((img, index) => (
            <figure
              key={index}
              className={`gallery__item reveal reveal-delay-${(index % 4) + 1}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Ver imagen: ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__image"
                loading="lazy"
              />
              <div className="gallery__item-overlay">
                <span className="gallery__item-icon">⊕</span>
              </div>
              {img.caption && (
                <figcaption className="gallery__caption">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Visor de imagen"
        >
          <button
            className="gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar visor"
            id="lightbox-close"
          >
            ✕
          </button>
          <button
            className="gallery__lightbox-nav gallery__lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="gallery__lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="gallery__lightbox-nav gallery__lightbox-next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Siguiente imagen"
          >
            ›
          </button>
          {images[lightboxIndex].caption && (
            <p className="gallery__lightbox-caption">
              {images[lightboxIndex].caption}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
