import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import StorySection from '../components/StorySection/StorySection';
import Gallery from '../components/Gallery/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import CharacterSection from '../components/CharacterSection/CharacterSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../Styles/metro.css';

import heroMetro from '../assets/images/metro/hero-metro.png';
import galleryMetro1 from '../assets/images/metro/gallery-metro-1.png';
import galleryMetro2 from '../assets/images/metro/gallery-metro-2.png';
import galleryMetro3 from '../assets/images/metro/gallery-metro-3.png';
import { characters } from '../data/characters';

export default function Metro() {
  useScrollReveal();

  const [activeTimeline, setActiveTimeline] = useState(0);
  const vigilanteChar = characters.find((c) => c.id === 'vigilante');

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
      src: galleryMetro2,
      alt: 'Interior de una estacion del Metro de Medellin',
      caption: 'Arquitectura y luz en la estacion',
    },
    {
      src: galleryMetro3,
      alt: 'Vista aerea del Metro recorriendo el valle',
      caption: 'El Metro atravesando el Valle de Aburra',
    },
  ];

  const timelineData = [
    {
      year: "Inicios - 1995",
      title: "El Tratamiento del Suicidio y el \"Efecto Werther\"",
      description: "Desde el nacimiento de los primeros sistemas ferroviarios subterráneos en el siglo XIX y XX, las vías han atraído a personas en extrema vulnerabilidad. Inicialmente, las coberturas de prensa eran sensacionalistas y explícitas, lo que disparaba el Efecto Werther o imitación: la replicación del acto en la misma estación tras la difusión pública del detalle.",
      impact: "Creación de la Clave Alfa interna y adopción de políticas corporativas estrictas de comunicación prudente, acuñando el término \"incidente en la vía\"."
    },
    {
      year: "Años 2000",
      title: "La Cruda Realidad Física: Mitos vs. Hechos",
      description: "Las estadísticas derriban la creencia popular de que arrojarse al tren implica una muerte inmediata. Las cifras demuestran que el 70% de las personas que se lanzan sobreviven a la fuerza de impacto de los trenes. Sin embargo, las secuelas físicas son trágicas, derivando en la pérdida permanente de extremidades en casi todos los casos sobrevivientes.",
      impact: "Visibilización del inmenso trauma físico crónico y afectación psicológica severa a conductores y personal operativo de andén."
    },
    {
      year: "Años 2010",
      title: "Medidas Preventivas de Infraestructura: Puertas PSD",
      description: "Los operadores a nivel mundial inician la instalación de Puertas de Pantalla de Plataforma (PSD). Estas estructuras herméticas de vidrio templado corren sincrónicamente y solo se abren cuando el tren se detiene por completo en andén, impidiendo caídas y actos deliberados al 100%.",
      impact: "Aislamiento físico completo de la vía, limitado únicamente por el elevadísimo costo de adaptarlo a líneas con más de 20 años de construcción."
    },
    {
      year: "Años 2020",
      title: "Detección Tecnológica y Sistemas Inteligentes",
      description: "Para andenes abiertos tradicionales, se implementan cámaras integradas con Inteligencia Artificial. Algoritmos avanzados monitorean anomalías en tiempo real, detectando usuarios que sobrepasan constantemente la línea amarilla de seguridad o permanecen demasiado tiempo viendo el vacío.",
      impact: "Entrenamiento del personal de primera línea en lenguaje corporal de desorientación, logrando interceptar un promedio de 5 a 6 crisis por cada intento real."
    },
    {
      year: "Actualidad",
      title: "El Giro Humano: Los Escuchaderos en Estaciones",
      description: "Los metros modernos entienden que los rieles son reflejo de la salud mental de la ciudad. Medellín se convierte en pionera al instalar \"Los Escuchaderos\": cabinas gratuitas de atención y contención psicológica en plenas estaciones, democratizando el acceso profesional a miles de ciudadanos en depresión.",
      impact: "Derribo del estigma sobre la salud mental, abordando el origen del sufrimiento y salvando vidas de forma activa a nivel comunitario."
    }
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
        label="Testimonio Real"
        quote="El Metro invitaría a la ciudadanía a ver a quién tenemos al frente y alrededor, a ser conscientes de que quien está al lado también es una persona con sus problemas. Si podemos tender una mano a quien pasa una situación difícil, tendámosla, para que las estaciones dejen de ser lugares de despedida."
        author="Miguel Ángel Peña"
        role="Pasajero cotidiano y consciente"
      />

      {/* ============================================================
          [NUEVA SECCIÓN] LAS VÍAS DEL SILENCIO (HISTORIA DE INCIDENTES)
          ============================================================ */}
      <section className="metro-conflict-section section" id="metro-conflict">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Salud Mental y Memoria</span>
            <h2 className="conflict-title">Las Vías del Silencio: Historia e Incidentes en la Vía</h2>
            <p className="conflict-intro text-balance">
              Detrás del eufemismo corporativo "incidente con persona en la vía" o "Clave Alfa", se esconde uno de los desafíos más profundos de la salud pública urbana. Las vías no son solo metal; son arterias por donde palpita la realidad humana de nuestra ciudad.
            </p>

            {/* Stepper Interactiva */}
            <div className="metro-timeline-wrapper">
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
                  <strong>Consecuencia y Prevención:</strong>
                  <p>{timelineData[activeTimeline].impact}</p>
                </div>
              </div>
            </div>

            {/* Las Múltiples Caras del Conflicto / Drama */}
            <div className="conflict-faces">
              <h3 className="faces-title">Las Caras Invisibles del Dolor</h3>
              <div className="faces-grid">
                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    {/* Shadow Werther / Media icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 17H5v-3h1v3zm0-4H5V8h1v5zm10 4h-4v-1h4v1zm0-2h-4v-1h4v1zm0-2h-4V8h4v5zm4 4h-3v-1h3v1zm0-2h-3v-1h3v1z"/>
                    </svg>
                  </div>
                  <h4>Efecto Werther (Imitación)</h4>
                  <p>La psicología ha comprobado que el detalle explícito del suicidio en medios actúa como imitación. El silencio técnico busca proteger la dignidad de las víctimas y evitar el efecto contagio en puntos críticos.</p>
                </div>

                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    {/* Trauma / Operator icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <h4>Secuelas en Primera Línea</h4>
                  <p>El impacto no recae únicamente en la víctima; los conductores y operadores experimentan shocks emocionales severos y un sentimiento irracional de culpabilidad tras presenciar accidentes inevitables sobre los rieles.</p>
                </div>

                <div className="face-card">
                  <div className="face-card-icon-wrapper">
                    {/* Individualism icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32" className="face-card-icon">
                      <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h4>Individualismo Urbano</h4>
                  <p>La velocidad masiva y las rutinas automatizadas de la ciudad provocan que muchos usuarios se molesten por el retraso de sus viajes en clásicas horas pico, deshumanizando temporalmente el sufrimiento que ocurre debajo de sus pies.</p>
                </div>
              </div>
            </div>

            {/* El Camino hacia la Solución */}
            <div className="conflict-solutions">
              <div className="solutions-grid">
                <div className="solution-block solution-block--coercion">
                  <h4>Prevención Estructural</h4>
                  <p>Inversión en barreras físicas (Puertas de Plataforma PSD) que sellan el acceso y cámaras termográficas con Inteligencia Artificial que generan alertas inmediatas ante el cruce de la franja amarilla de seguridad.</p>
                  <span className="solution-tag">Barreras Físicas</span>
                </div>
                <div className="solution-block solution-block--social">
                  <h4>Prevención Social y Escucha</h4>
                  <p>Instalación de "Los Escuchaderos", entrenamiento en primeros auxilios psicológicos al personal de estación, y el fomento de la empatía colectiva para tender una mano a quienes cargan dificultades extremas.</p>
                  <span className="solution-tag">Salud Mental Activa</span>
                </div>
              </div>

              <div className="conflict-conclusion-box">
                <p className="conflict-conclusion text-balance">
                  Las redes de transporte no son solo túneles y trenes; son arterias donde palpita la realidad social de una urbe. La solución a la salud mental no radica únicamente en poner barreras físicas más altas, sino en derribar el estigma social que la rodea, permitiendo que quien busque un final encuentre, en cambio, un espacio de escucha.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {vigilanteChar && (
        <CharacterSection
          title={vigilanteChar.title}
          characterName={vigilanteChar.name}
          characterImage={vigilanteChar.image}
          imagePosition={vigilanteChar.imagePosition}
          description={vigilanteChar.description}
          showGlobalLink={true}
          characterId={vigilanteChar.id}
        />
      )}

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
