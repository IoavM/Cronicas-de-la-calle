import Hero from '../components/Hero/Hero';
import StorySection from '../components/StorySection/StorySection';
import Gallery from '../components/Gallery/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import MediaSection from '../components/MediaSection/MediaSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/metro.css';

import heroMetro from '../assets/images/metro/hero-metro.png';
import galleryMetro1 from '../assets/images/metro/gallery-metro-1.png';

export default function Metro() {
  useScrollReveal();

  const galleryImages = [
    {
      src: heroMetro,
      alt: 'Vista panorámica del Metro de Medellín',
      caption: 'El Metro recorriendo el Valle de Aburrá',
    },
    {
      src: galleryMetro1,
      alt: 'Interior de una estación del Metro',
      caption: 'Estación — Un lugar de encuentro cotidiano',
    },
    {
      src: heroMetro,
      alt: 'Metro de Medellín al atardecer',
      caption: 'Atardecer sobre las vías del progreso',
    },
    {
      src: galleryMetro1,
      alt: 'Pasajeros en el Metro',
      caption: 'Historias en movimiento',
    },
  ];

  const mediaItems = [
    {
      type: 'image' as const,
      src: galleryMetro1,
      title: 'La estación como espacio de encuentro',
      description: 'Fotografía documental del flujo cotidiano en una estación del Metro.',
    },
    {
      type: 'image' as const,
      src: heroMetro,
      title: 'Arquitectura y movilidad',
      description: 'El diseño del Metro integrado con el paisaje urbano de Medellín.',
    },
  ];

  return (
    <main className="metro-page">
      <Hero
        label="Lugar Patrimonial"
        title="Metro de Medellín"
        subtitle="El pulso de la ciudad en movimiento"
        backgroundImage={heroMetro}
        scrollText="Descubre su historia"
      />

      <StorySection
        label="Historia"
        title="Más que transporte: una revolución cultural"
        paragraphs={[
          'El Metro de Medellín, inaugurado en 1995, nació como una respuesta a la necesidad de conectar un valle fragmentado. Pero su impacto fue mucho más allá del transporte: se convirtió en un símbolo de orgullo, civismo y transformación social.',
          'La famosa "Cultura Metro" no fue un accidente. Fue el resultado de un pacto tácito entre los ciudadanos y su sistema de transporte. Aquí, los asientos se ceden, las estaciones se cuidan, y el respeto es un idioma compartido.',
          'Cada vagón cuenta historias silenciosas: el estudiante que viaja al amanecer, la abuela que mira por la ventana las montañas que siempre han estado allí, el músico que tararea una melodía mientras el tren atraviesa el valle.',
        ]}
        image={galleryMetro1}
        imageAlt="Interior de estación del Metro de Medellín"
      />

      <Gallery
        label="Galería Visual"
        title="Miradas al Metro"
        images={galleryImages}
      />

      <Testimonial
        label="Testimonio"
        quote="El Metro no es solo un tren. Es donde aprendí que esta ciudad podía ser diferente. Cada vez que subo, recuerdo que el cambio empezó aquí, en este vagón, con esta gente."
        author="Carlos Andrés Restrepo"
        role="Habitante del barrio Popular, usuario desde 1995"
      />

      <CharacterSection
        title="El Vigía del Riel"
        description="Un personaje que encarna el espíritu de la Cultura Metro: la disciplina, el respeto colectivo y la esperanza de una ciudad que decidió moverse unida. Este personaje será revelado como parte de una experiencia artística más profunda."
        characterName="El Vigía del Riel"
      />

      <MediaSection
        label="Multimedia"
        title="Experiencia inmersiva"
        description="Explora el Metro de Medellín a través de diferentes formatos documentales."
        items={mediaItems}
      />

      {/* Reflection */}
      <section className="metro-reflection section" id="metro-reflection">
        <div className="container container--narrow">
          <div className="reveal">
            <span className="section-label" style={{ display: 'block', paddingLeft: 0, textAlign: 'center' }}>
              Reflexión
            </span>
            <p className="metro-reflection__text">
              "Un sistema de transporte puede mover personas. Pero la Cultura Metro movió algo más profundo:
              movió la manera en que una ciudad se mira a sí misma."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
