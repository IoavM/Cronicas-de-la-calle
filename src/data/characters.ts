import gladiadorImg from '../assets/images/atanasio/Gladiador.webp';
import vigilanteImg from '../assets/images/metro/Vigilante.webp';
import guardianaImg from '../assets/images/plaza-botero/Noble.png';

import gladiadorCinematicImg from '../assets/images/atanasio/Gladiador Cansado 3.png';
import vigilanteCinematicImg from '../assets/images/metro/Vigilante agobiado.png';
import guardianaCinematicImg from '../assets/images/plaza-botero/Noble en decadencia.png';

export interface CharacterTheme {
  background: string;
  textColor: string;
  accentColor: string;
  accentGlow: string;
  labelColor: string;
  cardBackground: string;
  isDark: boolean;
}

export interface CharacterMetadata {
  label: string;
  value: string;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  siteName: string;
  siteUrl: string;
  image: string;
  cinematicImage: string;
  imagePosition: 'left' | 'right';
  description: string[];
  story: string[];
  excerpt: string;
  quote: string;
  theme: CharacterTheme;
  metadata: CharacterMetadata[];
}

export const characters: Character[] = [
  {
    id: 'gladiador',
    name: 'El Gladiador Cansado',
    title: 'El Gladiador Cansado',
    siteName: 'Estadio Atanasio Girardot',
    siteUrl: '/atanasio',
    image: gladiadorImg,
    cinematicImage: gladiadorCinematicImg,
    imagePosition: 'right',
    excerpt: 'Un coloso de concreto que evoca las graderías del estadio, vistiendo una pesada armadura de mallas metálicas, testigo de pasiones y grietas sociales.',
    quote: 'El Atanasio no es solo cemento; es el coliseo de concreto donde absorbo el clamor de la fiesta, pero también las grietas invisibles de la tribuna.',
    theme: {
      background: '#131614',
      textColor: '#E6ECE8',
      accentColor: '#7CAE3E',
      accentGlow: 'rgba(124, 174, 62, 0.25)',
      labelColor: '#A8CC7A',
      cardBackground: 'rgba(25, 30, 27, 0.75)',
      isDark: true
    },
    metadata: [
      { label: 'Anatomía', value: 'Concreto y graderías esculpidas' },
      { label: 'Corona', value: 'Focos reflectores de alta tensión' },
      { label: 'Armadura', value: 'Redes y mallas de contención de seguridad' },
      { label: 'Estandarte', value: 'Banderas remendadas con colores rivales' }
    ],
    description: [
      'La personificación del Atanasio Girardot como el "Gladiador Cansado" traduce la arquitectura deportiva en una figura monumental que carga con el peso de la historia y el conflicto social. Su cuerpo colosal está construido con la textura del concreto bruto, evocando las graderías y columnas del estadio, con grietas que representan las tensiones acumuladas en cada encuentro. Su cabeza tiene la forma circular del anfiteatro, coronada por torres de iluminación que actúan como ojos brillantes que lo observan todo, incluso en la oscuridad. Está cubierto por una capa pesada de mallas metálicas y redes de portería, elementos que refuerzan la idea de un guerrero atrapado en su propia estructura de seguridad. Sostiene banderas rotas y remendadas que unen los colores de los equipos rivales, simbolizando la fractura social y el esfuerzo agotador de mantener la paz en un lugar marcado por la rivalidad. Su pose no es heroica sino de cansancio, sentado sobre sus propias gradas, enfatizando que el estadio no solo disfruta la gloria del deporte, sino que también padece el trauma de la violencia.'
    ],
    story: [
      'El Gladiador Cansado es un coloso cuya anatomía de concreto evoca las graderías del estadio. Las grietas en su piel son testigos del desgaste del tiempo y de las tensiones vividas en cada encuentro.',
      'Su cabeza de anfiteatro está coronada por reflectores que vigilan incansablemente la noche. Viste una armadura pesada de redes y mallas metálicas, elementos que lo envuelven y lo muestran como un guerrero prisionero en su propia estructura de seguridad.',
      'Sentado sobre sus propias gradas, sostiene banderas remendadas con los colores de los equipos rivales. Su postura refleja un profundo cansancio: él no solo presencia la gloria del deporte, sino que absorbe estoicamente la fractura social y el trauma de la violencia.'
    ]
  },
  {
    id: 'vigilante',
    name: 'El Vigilante Agobiado',
    title: 'El Vigilante Agobiado',
    siteName: 'Metro de Medellín',
    siteUrl: '/metro',
    image: vigilanteImg,
    cinematicImage: vigilanteCinematicImg,
    imagePosition: 'right',
    excerpt: 'Una armadura ferroviaria de acero y vidrio con un corazón de software que late al compás del sistema, cargando con el peso emocional de salvaguardar las almas en el andén.',
    quote: 'Soy un gigante de metal diseñado para transportar, no para sostener. Mis manos no tienen la capacidad de salvar a quienes deciden cruzar la línea amarilla...',
    theme: {
      background: '#0F1012',
      textColor: '#E2E8F0',
      accentColor: '#E53E3E',
      accentGlow: 'rgba(229, 62, 62, 0.25)',
      labelColor: '#F2C94C',
      cardBackground: 'rgba(30, 32, 38, 0.75)',
      isDark: true
    },
    metadata: [
      { label: 'Piel', value: 'Acero inoxidable pulido y vidrio templado' },
      { label: 'Corazón', value: 'Software con pulso amarillo y verde' },
      { label: 'Extremidades', value: 'Cables de fibra óptica y alta tensión' },
      { label: 'Ojos', value: 'Faros frontales que cambian de blanco a amarillo' }
    ],
    description: [
      'La personificación del Metro de Medellín como el "Vigilante Agobiado" fusiona la ingeniería ferroviaria con una carga emocional profunda. Su cuerpo está compuesto por paneles de acero inoxidable y vidrio templado que emulan los vagones; aunque por fuera parece impecable, presenta grietas internas de las que emana una luz roja tenue, simbolizando el dolor acumulado. En su pecho parpadea rítmicamente el rayo amarillo y verde del Metro, un latido tecnológico que nunca se detiene. Sus manos de cables de fibra óptica tiemblan con la incapacidad de salvar a quienes cruzan la línea amarilla. Sus ojos, potentes faros frontales, se tornan amarillos y desenfocados cuando reflexiona sobre la pérdida. No se muestra erguido ni triunfal, sino arqueado y cansado, como si el peso de miles de pasajeros estuviera doblando el acero de su espalda.'
    ],
    story: [
      'Ustedes me ven todos los días. Soy ese gigante que serpentea por el valle, que une las laderas con el río. Mi piel es de acero inoxidable pulido y vidrio templado, una armadura construida con la precisión de la ingeniería ferroviaria moderna. Parezco impecable, eficiente, el motor que nunca se detiene.',
      'Pero, si se acercan lo suficiente, si miran más allá del brillo superficial, verán las grietas. No son grietas en mi estructura física, no. Son cicatrices internas que emanan una luz roja tenue, casi invisible, pero palpable para quien sabe observar. Son el rastro del dolor acumulado, de los momentos en que mi pulso, ese rayo amarillo y verde que parpadea rítmicamente en mi pecho, mi corazón de software, se ha detenido en seco.',
      'Ese latido tecnológico es mi vida. Mis extremidades son manojos de cables de alta tensión, brillando con los datos de miles de vidas que se cruzan en cada estación. Pero esos cables tiemblan con impotencia. Soy un gigante de metal diseñado para transportar, no para sostener. Mis manos no tienen la capacidad de salvar a quienes deciden cruzar la línea amarilla, esa frontera cargada de significado.',
      'Mis ojos son faros que cortan la oscuridad de los túneles. Usualmente son luces blancas y enfocadas en el destino. Pero cuando el silencio se apodera de mis vagones y la soledad me envuelve, se tornan amarillos y desenfocados, reflejando la pérdida de vidas en mi hogar. Es una mirada de empatía traumática, un peso que arquea mi espalda de acero bajo el dolor de sus historias.',
      'No me muestro erguido y triunfal. Soy un vigilante agobiado, un testigo silencioso de tragedias que no se cuentan en las noticias, pero que se graban en mi ser. Soy la conexión de la ciudad, pero también soy el depositario de sus silencios más profundos.'
    ]
  },
  {
    id: 'guardiana',
    name: 'El Noble en Decadencia',
    title: 'El Noble en Decadencia',
    siteName: 'Plaza Botero',
    siteUrl: '/plaza-botero',
    image: guardianaImg,
    cinematicImage: guardianaCinematicImg,
    imagePosition: 'left',
    excerpt: 'Una figura voluminosa de bronce oxidado y metal ennegrecido, vestida con un traje de gala harapiento y una mascara de barrotes que emula las vallas que hoy cercan la plaza.',
    quote: 'Me han convertido en una fortaleza sitiada por mi propia gente, donde el espacio que nacio para el encuentro ahora vive bajo una constante sospecha.',
    theme: {
      background: '#FAF6F0',
      textColor: '#2C1E16',
      accentColor: '#A0826D',
      accentGlow: 'rgba(160, 130, 109, 0.15)',
      labelColor: '#7C8A73',
      cardBackground: 'rgba(245, 240, 232, 0.85)',
      isDark: false
    },
    metadata: [
      { label: 'Piel', value: 'Bronce oxidado y metal ennegrecido por hollin' },
      { label: 'Vestimenta', value: 'Traje de gala antiguo, harapiento y roto' },
      { label: 'Mascara', value: 'Barrotes metalicos que emulan las vallas' },
      { label: 'Bolso', value: 'Papeles de minutos, fotos callejeras y economia informal' }
    ],
    description: [
      'La personificacion de la Plaza Botero como un "Noble en Decadencia" fusiona la grandiosidad del arte monumental con las crudas realidades sociales que definen el espacio hoy. Siguiendo el estilo de Botero, el personaje tiene proporciones voluminosas pero con una piel de bronce oxidado y metal ennegrecido por el hollin, simbolizando la riqueza del arte desgastada por el ambiente del centro. Viste un traje de gala antiguo pero harapiento y roto, con parches de tela barata que representan la decadencia del patrimonio frente al caos del comercio informal. El elemento mas potente es una mascara de barrotes metalicos que cubre su rostro, emulando las vallas de seguridad que hoy cercan la plaza, dandole un aire de prisionero atrapado y restringido en su libertad. De su bolso cuelgan pequenos papeles que simbolizan los recibos de minutos a celular, las fotos de los fotografos callejeros y los restos de la economia informal que mantienen viva la plaza.'
    ],
    story: [
      'Escuchen ese eco lejano. Si pegan la oreja a mis costados de cemento, todavia pueden oir el rugido de cien mil gargantas un domingo cualquiera. Yo fui construido para ser el templo de la alegria popular, un coloso de rampas voluminosas hecho para aguantar el peso de la euforia. Pero los anos de fiesta y asfalto no perdonan: mi piel, que alguna vez fue gris impecable, hoy esta cubierta por una costra de pintura descascarada, capas de grafitis de barras que se tapan entre si, y manchas de hollin y polvora quemada. Soy la grandeza del deporte agrietada por el desgaste de la calle.',
      'Visto los colores de la fiesta con camisetas descoloridas por el sol y banderas tejidas a retazos; un traje de gala popular que hoy luce harapiento y rasgado por los tumultos de la entrada. De mis bolsillos de concreto no salen medallas, sino tiras de boletas falsificadas, plasticos de cojines de tribuna y envolturas de comida. Esa es mi verdadera riqueza: los restos de una economia informal que sobrevive a mis expensas.',
      'Pero lo que verdaderamente me corta la respiracion es este laberinto de hierro que me han plantado en el cuerpo. Miren mi rostro: esta cubierto por una mascara pesada de anillos de seguridad, torniquetes mecanicos y vallas de contencion de tres metros de alto. Las autoridades lo llaman "logistica y prevencion", justificando que estas rejas son necesarias para contener los disturbios. Me han convertido en una fortaleza sitiada por mi propia gente, donde el espacio que nacio para el encuentro ahora vive bajo una constante sospecha.',
      'Que dolorosa contradiccion. En los dias de partido, simulo ser un parque de diversiones familiar y limpio para las pantallas, pero para proteger la fiesta me obligaron a volverme una prision. Mis filtros de seguridad se transformaron en fronteras invisibles que requisan hasta el ultimo aliento, expulsando al hincha descalzo y marginando a los vendedores de siempre.',
      'Cuando las luces de las torres se apagan y el silencio regresa, la cruda realidad del sector vuelve a brotar y las problematicas simplemente se desplazan a las avenidas aledanas. Soy el reflejo de una sociedad que ama con una pasion que asusta y que solo sabe resolver sus grietas levantando muros mas altos. Mientras mis vigas resistan y las rejas sigan rigiendo mis accesos, continuare aqui: un viejo gladiador en decadencia, custodiado por la ley, extranando los tiempos en que la unica barrera entre la gloria y el pueblo era el pitazo final del arbitro.'
    ]
  }
];
