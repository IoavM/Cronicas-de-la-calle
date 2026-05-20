import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import StorySection from '../components/StorySection/StorySection';
import Gallery from '../components/Gallery/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/plazabotero.css';

import heroBotero from '../assets/images/plaza-botero/hero-botero.png';
import galleryBotero1 from '../assets/images/plaza-botero/gallery-botero-1.png';
import galleryBotero2 from '../assets/images/plaza-botero/gallery-botero-2.png';
import galleryBotero3 from '../assets/images/plaza-botero/gallery-botero-3.png';
import { characters } from '../data/characters';

export default function PlazaBotero() {
  useScrollReveal();

  const [activeTimeline, setActiveTimeline] = useState(0);
  const guardianaChar = characters.find((c) => c.id === 'guardiana');

  const galleryImages = [
    {
      src: heroBotero,
      alt: 'Vista panoramica de Plaza Botero',
      caption: 'Plaza Botero, corazon artistico de Medellin',
    },
    {
      src: galleryBotero1,
      alt: 'Escultura de Fernando Botero',
      caption: 'Formas volumetricas que dialogan con el espacio publico',
    },
    {
      src: galleryBotero2,
      alt: 'Detalle de escultura de bronce de Botero',
      caption: 'La textura y patina del bronce monumental',
    },
    {
      src: galleryBotero3,
      alt: 'Vista general de Plaza Botero al atardecer',
      caption: 'El arte publico que abraza la calle',
    },
  ];

  const timelineData = [
    {
      year: "Ano 2000",
      title: "El Regalo de Botero: Un Museo a Cielo Abierto",
      description: "Fernando Botero dona 23 esculturas monumentales de bronce a la ciudad que lo vio nacer. La plaza frente al Museo de Antioquia es remodelada y transformada en un museo al aire libre, concebido con una promesa democratica: sacar el arte de las elites y entregarlo al pueblo.",
      impact: "Creacion de un espacio publico emblematico que rapidamente se convierte en el corazon cultural de Medellin y atraccion turistica internacional."
    },
    {
      year: "Anos 2000-2010",
      title: "La Apropiacion Popular y sus Tensiones",
      description: "La plaza se convierte en un ecosistema de supervivencia para miles de personas: vendedores de tinto, fotografos callejeros, artesanos y comerciantes informales hacen de este espacio su sustento diario. Pero junto a la economia popular, emergen problematicas como el microtrafico, la delincuencia y la explotacion sexual.",
      impact: "El centro de Medellin se consolida como un territorio donde la riqueza del arte convive con la cruda realidad de la desigualdad social."
    },
    {
      year: "Anos 2010-2020",
      title: "El Cerramiento Institucional: Del Espacio Publico al Recinto Segregado",
      description: "Las autoridades locales implementan un fuerte cerramiento institucional. La plaza es rodeada por vallas de seguridad y se establecen puntos de control de la Policia Nacional para regular el acceso, en respuesta a las problematicas historicas del sector.",
      impact: "Para los turistas, la plaza se transforma en un oasis de tranquilidad. Para los habitantes locales y vendedores informales, se convierte en un espacio excluyente con filtros de seguridad que crean segregacion."
    },
    {
      year: "Actualidad",
      title: "La Paradoja: Arte Universal, Acceso Restringido",
      description: "Hoy las figuras monumentales parecen testigos mudos de un espacio atrapado en una contradiccion: un museo internacional de acceso libre convertido en recinto cerrado con requisas y vallas. El microtrafico y la explotacion no desaparecieron; se mudaron a metros de distancia, rodeando las vallas.",
      impact: "La plaza demuestra que el arte y la seguridad no pueden sostenerse a largo plazo si el precio a pagar es la exclusion de su propia gente."
    }
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
          'En el ano 2000, Fernando Botero dono 23 esculturas en bronce a la ciudad que lo vio nacer. Estas obras, junto con la remodelacion de la plaza frente al Museo de Antioquia, transformaron un espacio urbano deteriorado en un museo al aire libre.',
          'La Plaza Botero se convirtio rapidamente en el corazon cultural de Medellin. Aqui confluyen turistas y locales, artistas callejeros y vendedores, ninos que juegan entre las esculturas y ancianos que recuerdan como era este lugar antes.',
          'Las figuras voluminosas de Botero no son solo arte: son espejos de una identidad colombiana que celebra lo abundante, lo generoso, lo vital. En cada curva de bronce se refleja una filosofia de vida.',
        ]}
        image={galleryBotero1}
        imageAlt="Escultura de Fernando Botero en la plaza"
        reversed={true}
      />

      <Gallery
        label="Galeria Visual"
        title="El arte que habita la calle"
        images={galleryImages}
      />

      <Testimonial
        label="Testimonio Real"
        quote="El dueno real es el vendedor que esta aqui desde la manana hasta la noche ganandose el sustento. El turista solo viene de pasada un rato, se toma la foto y se va. Nosotros somos los que mantenemos el movimiento del lugar todos los dias."
        author="Vendedor informal de la plaza"
        role="Trabajador del centro historico"
      />

      {/* ============================================================
          SECCION DE CONFLICTO SOCIAL — El Espejo de las Dos Medellines
          ============================================================ */}
      <section className="botero-conflict-section section" id="botero-conflict">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Contraste Social</span>
            <h2 className="conflict-title">El Espejo de las Dos Medellines</h2>
            <p className="conflict-intro text-balance">
              Concebida como un museo a cielo abierto, la Plaza Botero nacio con una promesa democratica: sacar el arte de las elites y entregarlo al pueblo. Sin embargo, hoy es el epicentro de una profunda contradiccion social, donde el arte internacional choca de frente con la cruda realidad del centro urbano.
            </p>

            {/* Stepper Interactiva */}
            <div className="botero-timeline-wrapper">
              <div className="timeline-stepper">
                {timelineData.map((node, index) => (
                  <button
                    key={index}
                    className={`timeline-step-btn ${activeTimeline === index ? 'active' : ''}`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    <span className="step-dot"></span>
                    <span className="step-year">{node.year}</span>
                  </button>
                ))}
              </div>

              <div className="timeline-detail-card">
                <span className="timeline-detail-period">{timelineData[activeTimeline].year}</span>
                <h3 className="timeline-detail-title">{timelineData[activeTimeline].title}</h3>
                <p className="timeline-detail-desc">{timelineData[activeTimeline].description}</p>
                <div className="timeline-detail-impact">
                  <strong>Impacto Social:</strong>
                  <p>{timelineData[activeTimeline].impact}</p>
                </div>
              </div>
            </div>

            {/* Las Multiples Caras del Conflicto */}
            <div className="conflict-faces">
              <h3 className="faces-title">Las Caras de la Contradiccion</h3>
              <div className="faces-grid">
                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  <h4>Cerramiento y Segregacion</h4>
                  <p>Las vallas de seguridad transformaron un espacio publico en un recinto controlado. Para los turistas es un oasis de tranquilidad; para los habitantes locales, una frontera que restringe el derecho a circular libremente por su propia ciudad.</p>
                </div>

                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/>
                    </svg>
                  </div>
                  <h4>Exclusion de los Vulnerables</h4>
                  <p>Al priorizar la seguridad del turista, la intervencion margino a vendedores de tinto, fotografos tradicionales y artesanos. Los habitantes de calle fueron desplazados a las calles aledanas en lugar de resolver las problematicas de raiz.</p>
                </div>

                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <h4>La Paradoja de Botero</h4>
                  <p>Fernando Botero defendia que sus esculturas pertenecian a la gente, sin distinciones de clase. Hoy, sus figuras monumentales son testigos mudos de un espacio donde la apropiacion cultural ciudadana fue reemplazada por el consumo turistico controlado.</p>
                </div>
              </div>
            </div>

            {/* El Camino hacia la Solucion */}
            <div className="conflict-solutions">
              <div className="solutions-grid">
                <div className="solution-block solution-block--coercion">
                  <h4>Dimension Ideal</h4>
                  <p>Museo internacional de acceso libre, apropiacion cultural ciudadana e integracion urbana que democratiza el arte para todos los sectores de la sociedad sin distincion.</p>
                  <span className="solution-tag">Promesa Original</span>
                </div>
                <div className="solution-block solution-block--social">
                  <h4>Dimension Real</h4>
                  <p>Recinto cerrado con requisas y vallas, espacio enfocado en el consumo turistico y frontera que acentua la brecha de clases entre el adentro "seguro" y el afuera "peligroso".</p>
                  <span className="solution-tag">Realidad Actual</span>
                </div>
              </div>

              <div className="conflict-conclusion-box">
                <p className="conflict-conclusion text-balance">
                  Plaza Botero es el reflejo perfecto de los retos que enfrenta Medellin. Es el espejo de una ciudad que se debate entre mostrar su cara mas innovadora al mundo, o asumir el reto de sanar las profundas desigualdades sociales que laten en su propio centro. El arte y la seguridad no pueden sostenerse si el precio es la exclusion de su propia gente.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {guardianaChar && (
        <CharacterSection
          title={guardianaChar.title}
          characterName={guardianaChar.name}
          characterImage={guardianaChar.image}
          imagePosition={guardianaChar.imagePosition}
          description={guardianaChar.description}
          showGlobalLink={true}
          characterId={guardianaChar.id}
        />
      )}

      {/* Reflection */}
      <section className="botero-reflection section" id="botero-reflection">
        <div className="container container--narrow">
          <div className="reveal">
            <span className="section-label" style={{ display: 'block', paddingLeft: 0, textAlign: 'center' }}>
              Reflexion
            </span>
            <p className="botero-reflection__text">
              "El arte no necesita paredes. Pero cuando le ponen vallas,
              deja de pertenecer a quien mas lo necesita."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
