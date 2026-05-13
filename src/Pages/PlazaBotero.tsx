import Hero from '../components/Hero/Hero';
import StorySection from '../components/StorySection/StorySection';
import Gallery from '../components/Gallery/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import MediaSection from '../components/MediaSection/MediaSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/plazabotero.css';

import heroBotero from '../assets/images/plaza-botero/hero-botero.png';
import galleryBotero1 from '../assets/images/plaza-botero/gallery-botero-1.png';

export default function PlazaBotero() {
  useScrollReveal();

  const galleryImages = [
    {
      src: heroBotero,
      alt: 'Vista panorámica de Plaza Botero',
      caption: 'Plaza Botero, corazón artístico de Medellín',
    },
    {
      src: galleryBotero1,
      alt: 'Escultura de Fernando Botero',
      caption: 'Formas volumétricas que dialogan con el espacio público',
    },
    {
      src: heroBotero,
      alt: 'Plaza Botero y Museo de Antioquia',
      caption: 'El Museo de Antioquia como telón de fondo',
    },
    {
      src: galleryBotero1,
      alt: 'Detalle escultórico de Botero',
      caption: 'El bronce que cuenta historias de humanidad',
    },
  ];

  const mediaItems = [
    {
      type: 'image' as const,
      src: galleryBotero1,
      title: 'Volumen y emoción en bronce',
      description: 'Detalle de una escultura de Botero bajo la luz del mediodía antioqueño.',
    },
    {
      type: 'image' as const,
      src: heroBotero,
      title: 'El espacio público como galería',
      description: 'La plaza transformada en museo al aire libre.',
    },
  ];

  return (
    <main className="botero-page">
      <Hero
        label="Lugar Patrimonial"
        title="Plaza Botero"
        subtitle="Donde el arte abraza la calle"
        backgroundImage={heroBotero}
        scrollText="Descubre su historia"
      />

      <StorySection
        label="Historia"
        title="El regalo de un hijo a su ciudad"
        paragraphs={[
          'En el año 2000, Fernando Botero donó 23 esculturas en bronce a la ciudad que lo vio nacer. Estas obras, junto con la remodelación de la plaza frente al Museo de Antioquia, transformaron un espacio urbano deteriorado en un museo al aire libre.',
          'La Plaza Botero se convirtió rápidamente en el corazón cultural de Medellín. Aquí confluyen turistas y locales, artistas callejeros y vendedores, niños que juegan entre las esculturas y ancianos que recuerdan cómo era este lugar antes.',
          'Las figuras voluminosas de Botero — mujeres, hombres, animales, guerreros — no son solo arte: son espejos de una identidad colombiana que celebra lo abundante, lo generoso, lo vital. En cada curva de bronce se refleja una filosofía de vida.',
        ]}
        image={galleryBotero1}
        imageAlt="Escultura de Fernando Botero en la plaza"
        reversed={true}
      />

      <Gallery
        label="Galería Visual"
        title="El arte que habita la calle"
        images={galleryImages}
      />

      <Testimonial
        label="Testimonio"
        quote="Yo vengo aquí todos los días. Me siento junto a la gorda y leo el periódico. Esta plaza me devolvió un pedazo de ciudad que creí perdido. Aquí la gente se mira, se saluda, se reconoce."
        author="Doña Lucía Montoya"
        role="Vecina del centro, visitante diaria desde 2001"
      />

      <CharacterSection
        title="La Guardiana de las Formas"
        description="Un personaje inspirado en la generosidad volumétrica de Botero y en la energía protectora de quienes cuidan la plaza cada día. Será revelada como parte de una experiencia artística expandida."
        characterName="La Guardiana de las Formas"
      />

      <MediaSection
        label="Multimedia"
        title="Experiencia inmersiva"
        description="Explora Plaza Botero a través de diferentes formatos documentales."
        items={mediaItems}
      />

      {/* Reflection */}
      <section className="botero-reflection section" id="botero-reflection">
        <div className="container container--narrow">
          <div className="reveal">
            <span className="section-label" style={{ display: 'block', paddingLeft: 0, textAlign: 'center' }}>
              Reflexión
            </span>
            <p className="botero-reflection__text">
              "El arte no necesita paredes. A veces, lo único que necesita es una plaza abierta,
              la luz del sol y la mirada de quien pasa."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
