import Hero from '../components/Hero/Hero';
import StorySection from '../components/StorySection/StorySection';
import Gallery from '../components/Gallery/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import MediaSection from '../components/MediaSection/MediaSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/atanasio.css';

import heroAtanasio from '../assets/images/atanasio/hero-atanasio.png';
import galleryAtanasio1 from '../assets/images/atanasio/gallery-atanasio-1.png';

export default function Atanasio() {
  useScrollReveal();

  const galleryImages = [
    {
      src: heroAtanasio,
      alt: 'Vista panorámica del Estadio Atanasio Girardot',
      caption: 'El coliseo deportivo del Valle de Aburrá',
    },
    {
      src: galleryAtanasio1,
      alt: 'Interior del Estadio Atanasio Girardot',
      caption: 'Donde miles de voces se convierten en una sola',
    },
    {
      src: heroAtanasio,
      alt: 'Estadio Atanasio Girardot al atardecer',
      caption: 'La luz dorada sobre el templo deportivo',
    },
    {
      src: galleryAtanasio1,
      alt: 'Arquitectura del estadio',
      caption: 'Concreto y pasión: arquitectura que emociona',
    },
  ];

  const mediaItems = [
    {
      type: 'image' as const,
      src: galleryAtanasio1,
      title: 'Arquitectura deportiva',
      description: 'Las formas del estadio dialogan con las montañas del valle.',
    },
    {
      type: 'image' as const,
      src: heroAtanasio,
      title: 'El templo de los sueños',
      description: 'Vista exterior del estadio que ha sido testigo de generaciones.',
    },
  ];

  return (
    <main className="atanasio-page">
      <Hero
        label="Lugar Patrimonial"
        title="Estadio Atanasio Girardot"
        subtitle="El templo donde los sueños resuenan"
        backgroundImage={heroAtanasio}
        scrollText="Descubre su historia"
      />

      <StorySection
        label="Historia"
        title="Más que un estadio: un lugar de encuentro"
        paragraphs={[
          'El Estadio Atanasio Girardot, inaugurado en 1953, lleva el nombre de un héroe de la independencia antioqueña. Pero su heroísmo real está en las historias de miles de familias que han cruzado sus puertas.',
          'Este estadio ha sido escenario de finales épicas, de goles que detuvieron el tiempo, de tardes donde la lluvia no fue suficiente para apagar el fervor de una hinchada. Aquí, Nacional y Medellín no son solo equipos: son formas de vivir la ciudad.',
          'Más allá del fútbol, el Atanasio ha sido sede de conciertos, eventos culturales y ceremonias deportivas internacionales. Es un espacio donde la ciudad se reúne, donde las diferencias se olvidan por noventa minutos, donde el grito de gol es un abrazo colectivo.',
        ]}
        image={galleryAtanasio1}
        imageAlt="Interior del Estadio Atanasio Girardot"
      />

      <Gallery
        label="Galería Visual"
        title="El coliseo de la pasión paisa"
        images={galleryImages}
      />

      <Testimonial
        label="Testimonio"
        quote="Mi abuelo me trajo aquí cuando tenía cinco años. No recuerdo el marcador, pero recuerdo su mano apretando la mía cuando gritó gol. Este estadio es donde aprendí lo que significa pertenecer a algo más grande que uno."
        author="Santiago Mejía"
        role="Hincha de toda la vida, tercera generación"
      />

      <CharacterSection
        title="El Eco de la Tribuna"
        description="Un personaje que nace del rugido de las tribunas, de la emoción compartida y de la arquitectura brutalista del estadio. Será revelado como parte de una experiencia artística que conecta deporte, memoria y ciudad."
        characterName="El Eco de la Tribuna"
      />

      <MediaSection
        label="Multimedia"
        title="Experiencia inmersiva"
        description="Explora el Estadio Atanasio Girardot a través de diferentes formatos documentales."
        items={mediaItems}
      />

      {/* Reflection */}
      <section className="atanasio-reflection section" id="atanasio-reflection">
        <div className="container container--narrow">
          <div className="reveal">
            <span className="section-label" style={{ display: 'block', paddingLeft: 0, textAlign: 'center' }}>
              Reflexión
            </span>
            <p className="atanasio-reflection__text">
              "Un estadio vacío es solo concreto. Pero cuando se llena de voces, se convierte
              en el lugar más vivo de la ciudad. Aquí no se viene a ver fútbol: se viene a sentir."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
