import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import StorySection from '../components/StorySection/StorySection';
import Gallery from '../components/Gallery/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/atanasio.css';

import heroAtanasio from '../assets/images/atanasio/hero-atanasio.png';
import galleryAtanasio1 from '../assets/images/atanasio/gallery-atanasio-1.png';
import galleryAtanasio2 from '../assets/images/atanasio/gallery-atanasio-2.png';
import galleryAtanasio3 from '../assets/images/atanasio/gallery-atanasio-3.png';
import { characters } from '../data/characters';

export default function Atanasio() {
  useScrollReveal();

  const [activeTimeline, setActiveTimeline] = useState(0);
  const gladiadorChar = characters.find((c) => c.id === 'gladiador');

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
      src: galleryAtanasio2,
      alt: 'Graderias del Estadio Atanasio Girardot',
      caption: 'Donde miles de voces se convierten en una sola',
    },
    {
      src: galleryAtanasio3,
      alt: 'Fachada exterior del complejo deportivo',
      caption: 'Concreto y pasion: arquitectura que emociona',
    },
  ];

  const timelineData = [
    {
      year: "Años 80 - 90",
      title: "El Origen: De la Fiesta Familiar a la Polarización",
      description: "Durante mediados del siglo XX, asistir al Atanasio Girardot era un plan primordialmente familiar. Hinchas de Atlético Nacional e Independiente Medellín compartían las tribunas en paz, separados apenas por la preferencia de sus colores, pero unidos por el espectáculo. Sin embargo, a finales de la década de 1980 y principios de la de 1990, el entorno del fútbol colombiano se transformó drásticamente. El auge del narcotráfico en la ciudad y la permeabilidad de las fronteras sociales influyeron en la cultura popular. El fútbol dejó de ser solo un juego y se convirtió en un fuerte elemento de identidad y pertenencia territorial para miles de jóvenes atrapados en una Medellín golpeada por la crisis social.",
      impact: "Surgimiento de las primeras identidades territoriales y tensiones ligadas a los colores de las camisetas en los barrios."
    },
    {
      year: "Fin de los 90",
      title: "La Era de las \"Barras Bravas\" y Fronteras Invisibles",
      description: "A finales de los 90, inspirado en el modelo argentino, el fenómeno de las barras bravas se consolidó en el Atanasio. Los Del Sur (LDS) ocuparon la tribuna Sur respaldando a Atlético Nacional, y Rexixtenxia Norte (RXN) se adueñó de la tribuna Norte, alentando al Independiente Medellín. Con la música, los bombos y los trapos llegó también la radicalización. El estadio se fragmentó. Lo que antes era un espacio de convivencia se convirtió en un territorio en disputa, replicando las fronteras invisibles que ya existían en los barrios de las comunas de Medellín.",
      impact: "La separación física definitiva de las tribunas y clásicos antioqueños convertidos en operativos de alta seguridad."
    },
    {
      year: "Años 2000",
      title: "Consolidación de Fronteras e Invasión de las Afueras",
      description: "Las barras bravas reclaman no solo el dominio de sus respectivas tribunas norte y sur, sino también el control de los alrededores del estadio y las calles aledañas durante y después de los partidos, configurándose las afueras como el principal foco de batallas físicas tras el pitazo final.",
      impact: "Implementación de cierres de fronteras estrictos para hinchas visitantes en clásicos de alto riesgo y requisas severas."
    },
    {
      year: "2010 - 2015",
      title: "El Conflicto en las Carreteras Nacionales",
      description: "El fervor de la rivalidad futbolística desborda los límites geográficos de Medellín. La violencia y las riñas a muerte por un color de camiseta se desplazan a las carreteras nacionales del país, peajes y estaciones de servicio, cuando las barras viajan a alentar a sus equipos en otras regiones.",
      impact: "Lanzamiento del plan gubernamental \"Fútbol en Paz\" y primeros intentos de carnetización biométrica fallidos."
    },
    {
      year: "2023 - 2024",
      title: "Ruptura Institucional y Sanciones Históricas",
      description: "En 2023 se rompe la relación entre los dirigentes de Atlético Nacional y Los Del Sur, provocando disturbios severos en la tribuna Sur. En 2024, el partido Nacional vs. Junior en la tribuna Norte termina con gravísimos disturbios y heridos con arma blanca a la vista de todos, reabriendo la discusión nacional sobre la viabilidad del fútbol con público.",
      impact: "Sanciones históricas a las tribunas, pérdidas millonarias en infraestructura y debates sobre la seguridad civil."
    }
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
        label="Testimonio Real"
        quote="Yo siento que en el Atanasio Girardot han pasado más cosas buenas que malas; guardaría más euforias porque es un estadio que ha llevado años viviendo finales del fútbol. Ser parte de una barra no implica buscar el conflicto; al tener las barras en el estadio le estamos dando folclore y vida al fútbol."
        author="Barrista de Atlético Nacional"
        role="5 años asistiendo seguidos al estadio"
      />

      {/* ============================================================
          [NUEVA SECCIÓN] LAS CICATRICES DEL CEMENTO (HISTORIA DEL CONFLICTO)
          ============================================================ */}
      <section className="atanasio-conflict-section section" id="atanasio-conflict">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Memoria Colectiva</span>
            <h2 className="conflict-title">Las Cicatrices del Cemento: Historia del Conflicto</h2>
            <p className="conflict-intro text-balance">
              El Estadio Atanasio Girardot no es solo el templo del fútbol antioqueño; es un espejo de la sociedad de Medellín. Sus graderías han sido testigos de glorias deportivas, pero también de oscuros capítulos de tensión social.
            </p>

            {/* Interactive Timeline Stepper */}
            <div className="conflict-timeline-wrapper">
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
                  <strong>Impacto en el Estadio:</strong>
                  <p>{timelineData[activeTimeline].impact}</p>
                </div>
              </div>
            </div>

            {/* Las Múltiples Caras del Conflicto */}
            <div className="conflict-faces">
              <h3 className="faces-title">Las Múltiples Caras de la Fractura</h3>
              <div className="faces-grid">
                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    {/* Territorial map icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h4>Disputa Territorial y Cultural</h4>
                  <p>Para muchos jóvenes, la barra es su familia elegida y el estadio representa su único territorio de poder. Defender el "trapo" o la tribuna se vuelve una cuestión de honor vital y de pertenencia colectiva.</p>
                </div>

                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    {/* Wallet/money economic icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/>
                    </svg>
                  </div>
                  <h4>Intereses Económicos</h4>
                  <p>Las barras organizadas se convirtieron en estructuras con un peso económico enorme (logística de tribuna, venta de boletería, parafernalia y convenios de convivencia con la alcaldía). El control de estos recursos genera fricciones internas y externas.</p>
                </div>

                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    {/* Alert / tension icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <h4>Tensiones con las Dirigencias</h4>
                  <p>La compleja relación de amor-odio entre los dueños de los equipos y las barras organizadas ha sido un detonante constante de protestas, reclamos por boletas y tensiones de seguridad en el interior de las tribunas.</p>
                </div>
              </div>
            </div>

            {/* El Camino hacia la Solución */}
            <div className="conflict-solutions">
              <div className="solutions-grid">
                <div className="solution-block solution-block--coercion">
                  <h4>Línea Coercitiva (Línea Dura)</h4>
                  <p>Aboga por sanciones severas directas a las barras, cierres totales de tribunas, control estricto de accesos y el uso de tecnología avanzada como el reconocimiento facial para individualizar y expulsar a los infractores.</p>
                  <span className="solution-tag">Coerción y Sanción</span>
                </div>
                <div className="solution-block solution-block--social">
                  <h4>Línea de Intervención Social</h4>
                  <p>Apuesta por la estrategia de "Cultura Fútbol", transformando las barras en colectivos artísticos y de diálogo, facilitando empleo, educación y promoviendo la logística de mediación interna dirigida por los mismos barristas.</p>
                  <span className="solution-tag">Barrismo Social</span>
                </div>
              </div>
              
              <div className="conflict-conclusion-box">
                <p className="conflict-conclusion text-balance">
                  El Atanasio Girardot sigue en pie, en el corazón de la unidad deportiva de la ciudad. Su historia es un recordatorio de que el fútbol refleja lo mejor y lo peor de nosotros; un recordatorio de que la pelota no se mancha, pero las tribunas, desafortunadamente, a veces sí.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {gladiadorChar && (
        <CharacterSection
          title={gladiadorChar.title}
          characterName={gladiadorChar.name}
          characterImage={gladiadorChar.image}
          imagePosition={gladiadorChar.imagePosition}
          description={gladiadorChar.description}
          showGlobalLink={true}
          characterId={gladiadorChar.id}
        />
      )}

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
