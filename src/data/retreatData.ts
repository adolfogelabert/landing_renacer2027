export const WHATSAPP_NUMBER = '584140000000';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Rutas relativas (sin barra inicial) para que la página funcione tanto en
// GitHub Pages como en subcarpetas (p. ej. /landing_renacer2027/).
export const ASSETS = {
  logoTvpc: 'assets/aistudio/logo_tvpc_firma_f1dc8c80.svg',
  logoPosada: 'assets/aistudio/LOGO_POSADA_5aa78c25.svg',
  facilitatorPhoto: 'assets/aistudio/WhatsApp_Image_2026-11-22_at_12.40.59__1__06298229.jpeg',
  posterMain: 'assets/aistudio/WhatsApp_Image_2026-11-22_at_12.40.58_162641b1.jpeg',
  posterItinerary: 'assets/aistudio/WhatsApp_Image_2026-11-22_at_12.40.59_e0a8ee4c.jpeg',
  heroSunset: 'src/assets/images/hero_beach_ritual_sunset_1795382039563.jpg',
  posadaPool: 'src/assets/images/posada_pool_twilight_1795382039133.jpg',
  posadaSuite: 'src/assets/images/posada_suite_linen_1795382039800.jpg',
  posadaDining: 'src/assets/images/posada_gastronomy_terrace_1795382039377.jpg',
} as const;

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  practiceNote: string;
  icon: 'lotus' | 'thirdEye' | 'spiral' | 'butterfly' | 'sacredHeart';
}

export const PILLARS: PillarItem[] = [
  {
    id: 'liberacion',
    number: '01',
    title: 'Liberación de Creencias Ancestrales',
    subtitle: 'Raíces en paz, alas livianas',
    description:
      'Honra tu historia familiar y suelta con amor lealtades invisibles, memorias limitantes y cargas heredadas que ya cumplieron su ciclo.',
    practiceNote:
      'Trabajado mediante Constelaciones Familiares y el ritual al atardecer "Fuego del Olvido" frente al Caribe.',
    icon: 'lotus',
  },
  {
    id: 'manifestacion',
    number: '02',
    title: 'Manifestación Consciente',
    subtitle: 'Claridad desde el centro',
    description:
      'Alinea mente, emoción y propósito para diseñar un 2027 coherente, lúcido y libre de ruido externo.',
    practiceNote:
      'Anclado en la sesión "Magnetiza y Crea" y el ritual final de Siembra de Propósitos con mandalas y semillas.',
    icon: 'thirdEye',
  },
  {
    id: 'aceleramiento',
    number: '03',
    title: 'Aceleramiento Cuántico',
    subtitle: 'Elevación de frecuencia vital',
    description:
      'Activa tu campo bioenergético a través de la respiración consciente y prácticas somáticas que desbloquean tu energía disponible.',
    practiceNote:
      'Vivido en las inmersiones de Respiración Cuántica y Biofrecuencial acompañadas por el sonido del mar.',
    icon: 'spiral',
  },
  {
    id: 'atraer',
    number: '04',
    title: 'Dejar de Perseguir y Empezar a Atraer',
    subtitle: 'Del esfuerzo al magnetismo',
    description:
      'Transforma la exigencia constante y el desgaste en presencia magnética, permitiendo que las oportunidades y vínculos sanos lleguen a ti.',
    practiceNote:
      'Integrado a través de los Órdenes del Amor, meditaciones al amanecer y regulación profunda del sistema nervioso.',
    icon: 'butterfly',
  },
  {
    id: 'placer',
    number: '05',
    title: 'Crear con Placer y Abundancia',
    subtitle: 'Gozo, disfrute y expansión',
    description:
      'Reconcíliate con el merecimiento y el disfrute cotidiano: crear tu nueva etapa desde el bienestar, la belleza y la abundancia compartida.',
    practiceNote:
      'Celebrado en la Cena Sagrada de blanco, gastronomía de autor y la velada "Encendido de tu luz" junto a la piscina.',
    icon: 'sacredHeart',
  },
];

export interface ScheduleActivity {
  time: string;
  title: string;
  detail: string;
  highlight?: boolean;
}

export interface ItineraryDay {
  id: string;
  dayNumber: string;
  dateLabel: string;
  shortLabel: string;
  theme: string;
  summary: string;
  dressCode: string;
  energyFocus: string;
  image: string;
  imageAlt: string;
  activities: ScheduleActivity[];
}

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    id: 'dia-1',
    dayNumber: 'Día 1',
    dateLabel: 'Viernes 4 de Diciembre',
    shortLabel: 'Vie 4 Dic',
    theme: 'Limpieza y Apertura',
    summary:
      'Un día dedicado a desconectar del ritmo de la ciudad, llegar al abrazo costero de Todasana y liberar con conciencia lo que se queda en 2026.',
    dressCode: 'Ropa fresca de viaje · Vestimenta blanca para la velada nocturna',
    energyFocus: 'Limpieza somática, pertenencia y Fuego del Olvido',
    image: ASSETS.heroSunset,
    imageAlt: 'Círculo de apertura y velas frente al mar al atardecer en Todasana',
    activities: [
      {
        time: '06:00 a. m.',
        title: 'Salida en Transporte Ejecutivo desde Caracas',
        detail:
          'Encuentro en CC Paseo Las Mercedes y traslado privado en unidad ejecutiva rumbo a la costa de Todasana, La Guaira.',
      },
      {
        time: '10:30 a. m. – 04:30 p. m.',
        title: 'Llegada a Todasana y Bienvenida en Posada Bagbazindio',
        detail:
          'Recibimiento con bebida botánica fresca, check-in relajado, disfrute de la posada y tiempo de transición frente al mar.',
      },
      {
        time: '05:00 – 06:30 p. m.',
        title: 'Círculo de Apertura y Constelación Inaugural',
        detail:
          'Encuentro guiado por Tibisay Mejías para abrir el campo sistémico, establecer intenciones y armonizar al grupo.',
        highlight: true,
      },
      {
        time: '06:30 – 07:30 p. m.',
        title: 'Ritual al Atardecer: "Soltar y Recibir / Fuego del Olvido"',
        detail:
          'Ceremonia simbólica a orillas del mar para entregar lo vivido en 2026 y abrir espacio a la renovación.',
        highlight: true,
      },
      {
        time: '07:30 – 08:30 p. m.',
        title: 'Cena Nutritiva de Autor',
        detail:
          'Gastronomía consciente preparada con ingredientes frescos de la costa en la terraza de la posada.',
      },
      {
        time: '08:30 – 10:00 p. m.',
        title: 'Velada en Piscina de Blanco: "Encendido de tu Luz"',
        detail:
          'Encuentro íntimo junto a la piscina iluminada vestidos de blanco para activar la intención luminosa del retiro.',
        highlight: true,
      },
    ],
  },
  {
    id: 'dia-2',
    dayNumber: 'Día 2',
    dateLabel: 'Sábado 5 de Diciembre',
    shortLabel: 'Sáb 5 Dic',
    theme: 'Reprogramación y Manifestación',
    summary:
      'La jornada central de transformación profunda: constelaciones familiares, respiración cuántica biofrecuencial y nuestra gran celebración sagrada de blanco.',
    dressCode: 'Ropa cómoda y liviana de día · Vestimenta blanca elegante para la Cena Sagrada',
    energyFocus: 'Órdenes del Amor, Magnetiza y Crea, Respiración Cuántica',
    image: ASSETS.posadaDining,
    imageAlt: 'Cena Sagrada de blanco con velas y eucalipto en la terraza frente al mar',
    activities: [
      {
        time: '06:30 – 07:30 a. m.',
        title: 'Meditación al Amanecer frente al Mar',
        detail:
          'Práctica contemplativa con la brisa matutina y el primer sol sobre el Caribe para abrir los sentidos.',
      },
      {
        time: '08:00 – 09:15 a. m.',
        title: 'Desayuno Vital',
        detail:
          'Frutas tropicales, infusiones botánicas y desayuno artesanal de la posada.',
      },
      {
        time: '10:00 a. m. – 12:30 p. m.',
        title: 'Talleres Intensivos: Constelaciones y Órdenes del Amor',
        detail:
          'Trabajo sistémico profundo para ordenar vínculos, sanar memorias ancestrales y recuperar tu lugar de fuerza.',
        highlight: true,
      },
      {
        time: '01:00 – 02:30 p. m.',
        title: 'Almuerzo de Autor e Integración',
        detail:
          'Mesa compartida y tiempo libre de descanso junto a la piscina o frente a la playa.',
      },
      {
        time: '04:30 – 06:30 p. m.',
        title: 'Sesión "Magnetiza y Crea" · Respiración Biofrecuencial',
        detail:
          'Ceremonia de flores y respiración cuántica grupal para reprogramar creencias y elevar tu frecuencia hacia 2027.',
        highlight: true,
      },
      {
        time: '07:30 – 10:00 p. m.',
        title: 'Cena Sagrada de Blanco y Ritual con Fuego',
        detail:
          'Celebración nocturna a la luz de las velas y ceremonia de fuego para sellar tu nueva frecuencia de abundancia.',
        highlight: true,
      },
    ],
  },
  {
    id: 'dia-3',
    dayNumber: 'Día 3',
    dateLabel: 'Domingo 6 de Diciembre',
    shortLabel: 'Dom 6 Dic',
    theme: 'Siembra y Cierre',
    summary:
      'Integramos lo vivido con gratitud, sembramos tus propósitos para el año 2027 y regresamos a Caracas renovados y en plenitud.',
    dressCode: 'Tonos claros, lino o blanco suave para el ritual de siembra',
    energyFocus: 'Gratitud, Siembra de Propósitos y Renacer 2027',
    image: ASSETS.posadaPool,
    imageAlt: 'Espacios serenos de Posada Bagbazindio rodeados de naturaleza costera',
    activities: [
      {
        time: '07:00 – 08:15 a. m.',
        title: 'Meditación Matutina de Gratitud y Anclaje',
        detail:
          'Práctica guiada frente al mar para fijar en el cuerpo la serenidad y claridad alcanzada.',
      },
      {
        time: '08:30 – 09:30 a. m.',
        title: 'Desayuno de Cierre',
        detail:
          'Última mañana frente a la brisa marina con mesa fresca y aromática.',
      },
      {
        time: '10:00 a. m. – 12:00 p. m.',
        title: 'Ritual "Siembra de Propósitos" y Círculo de Cierre',
        detail:
          'Ceremonia con mandalas florales, eucalipto y semillas vivas para bendecir tu ciclo 2027 e integrar la experiencia.',
        highlight: true,
      },
      {
        time: '12:00 – 01:00 p. m.',
        title: 'Almuerzo de Despedida y Check-out',
        detail:
          'Brindis consciente de despedida en Posada Bagbazindio.',
      },
      {
        time: '01:00 p. m.',
        title: 'Retorno en Unidad Ejecutiva hacia Caracas',
        detail:
          'Regreso cómodo y seguro con llegada al CC Paseo Las Mercedes.',
      },
    ],
  },
];

export interface VenueGalleryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  tag: string;
}

export const VENUE_GALLERY: VenueGalleryItem[] = [
  {
    id: 'piscina',
    image: ASSETS.posadaPool,
    title: 'Piscina iluminada y veladas bajo las estrellas',
    caption:
      'Escenario íntimo para la noche "Encendido de tu luz", rodeado de piedra natural, faroles cálidos y brisa marina.',
    tag: 'Santuario nocturno',
  },
  {
    id: 'suite',
    image: ASSETS.posadaSuite,
    title: 'Confort boutique en lino y madera noble',
    caption:
      'Habitaciones diseñadas para el descanso profundo, ventiladas por la costa de Todasana y bañadas en luz natural.',
    tag: 'Descanso consciente',
  },
  {
    id: 'gastronomia',
    image: ASSETS.posadaDining,
    title: 'Gastronomía de autor frente al mar',
    caption:
      'Alimentación completa pensada para nutrir cuerpo y energía durante los tres días, culminando en la Cena Sagrada.',
    tag: 'Cocina consciente',
  },
  {
    id: 'playa',
    image: ASSETS.heroSunset,
    title: 'Espacios abiertos frente al Caribe',
    caption:
      'Acceso privilegiado a la serenidad de Todasana para meditaciones al amanecer, constelaciones y rituales de fuego.',
    tag: 'Todasana, La Guaira',
  },
];

export const VENUE_HIGHLIGHTS = [
  {
    title: 'Confort Boutique',
    detail: 'Arquitectura cálida de maderas naturales, lino orgánico y atención personalizada.',
  },
  {
    title: 'Gastronomía de Autor Incluida',
    detail: 'Menú completo nutritivo, fresco y estaciones de hidratación botánica continuas.',
  },
  {
    title: 'Espacios Abiertos para Rituales',
    detail: 'Áreas rodeadas de naturaleza y mar diseñadas para círculos, constelaciones y fuego.',
  },
  {
    title: 'Piscina Iluminada y Máxima Privacidad',
    detail: 'Uso exclusivo para el grupo del retiro, garantizando silencio, intimidad y resguardo.',
  },
];

export const ALL_INCLUSIVE_BENEFITS = [
  '3 días y 2 noches de hospedaje exclusivo en Posada Bagbazindio.',
  'Traslados ida y vuelta en unidad ejecutiva privada (Caracas – Todasana – Caracas).',
  'Alimentación completa de autor y estaciones de hidratación durante todo el retiro.',
  'Todas las terapias, constelaciones familiares, respiración cuántica y rituales guiados por Tibisay Mejías.',
  'Kit de materiales sagrados para los rituales (mandalas florales, velas, eucalipto y semillas).',
];

export interface PlanOption {
  id: string;
  name: string;
  occupancy: string;
  tagline: string;
  description: string;
  featured?: boolean;
  highlights: string[];
  whatsappMessage: string;
}

export const ACCOMMODATION_PLANS: PlanOption[] = [
  {
    id: 'compartida',
    name: 'Habitación Compartida',
    occupancy: 'Acomodación doble o triple',
    tagline: 'Conexión y hermandad consciente',
    description:
      'Ideal si vienes con amigas o deseas abrirte a compartir la experiencia con compañeras de camino en un ambiente acogedor y sereno.',
    highlights: [
      'Cama individual en habitación boutique con baño privado',
      'Acceso completo a todas las terapias, comidas y traslados',
      'Excelente opción para grupos de amigas o viajeras individuales',
    ],
    whatsappMessage:
      'Hola equipo de Tu Viaje en Primera Clase, deseo consultar tarifa y disponibilidad en Habitación Compartida para el retiro Soltar para Renacer 2027 (4-6 Dic 2026).',
  },
  {
    id: 'matrimonial',
    name: 'Habitación Privada Matrimonial',
    occupancy: 'Uso individual privado o en pareja',
    tagline: 'La opción preferida para descanso profundo',
    description:
      'Tu refugio privado entre cada sesión. Pensada para quienes priorizan el silencio interior, la introspección y la comodidad boutique.',
    featured: true,
    highlights: [
      'Habitación privada con cama matrimonial en lino fresco',
      'Privacidad absoluta para descanso e integración nocturna',
      'Opción de reserva individual o junto a tu pareja / acompañante',
    ],
    whatsappMessage:
      'Hola equipo de Tu Viaje en Primera Clase, deseo consultar tarifa y disponibilidad en Habitación Privada Matrimonial para el retiro Soltar para Renacer 2027 (4-6 Dic 2026).',
  },
  {
    id: 'suite',
    name: 'Suite Exclusiva',
    occupancy: 'Categoría superior · Cupos muy limitados',
    tagline: 'Amplitud, luz marina y lujo consciente',
    description:
      'Nuestra acomodación más amplia en Posada Bagbazindio, con detalles artesanales, terraza o vista privilegiada y experiencia VIP de principio a fin.',
    highlights: [
      'Suite boutique de mayor amplitud y ambientación superior',
      'Prioridad de asignación y detalle de bienvenida especial',
      'Disponibilidad sumamente limitada dentro de la posada',
    ],
    whatsappMessage:
      'Hola equipo de Tu Viaje en Primera Clase, deseo consultar tarifa y disponibilidad en la Suite Exclusiva para el retiro Soltar para Renacer 2027 (4-6 Dic 2026).',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'transporte',
    question: '¿Cómo funciona el transporte privado desde Caracas?',
    answer:
      'El punto de encuentro y salida es el CC Paseo Las Mercedes en Caracas el viernes 4 de diciembre a las 6:00 a. m. Viajarás en una unidad ejecutiva privada, cómoda y con aire acondicionado directamente hasta Posada Bagbazindio en Todasana. El retorno sale el domingo 6 de diciembre a la 1:00 p. m. hacia el mismo punto en Caracas.',
  },
  {
    id: 'experiencia',
    question: '¿Es necesario tener experiencia previa en constelaciones o meditación?',
    answer:
      'No se requiere ninguna experiencia previa. Tibisay Mejías Palacios guía cada práctica —desde la respiración cuántica hasta las constelaciones familiares y rituales— de forma progresiva, cercana y segura, adaptándose con calidez tanto a quienes viven su primer retiro como a personas con recorrido terapéutico.',
  },
  {
    id: 'vestimenta',
    question: '¿Qué tipo de ropa debo empacar y cómo es el código de vestimenta blanco?',
    answer:
      'Te recomendamos llevar ropa fresca de playa en fibras naturales (lino o algodón), traje de baño, sombrero, protector solar biodegradable, sandalias cómodas y un abrigo ligero para la brisa nocturna. Incluye al menos dos atuendos blancos: uno relajado para la velada "Encendido de tu luz" en la piscina el viernes y un vestido o conjunto blanco especial para la Cena Sagrada del sábado.',
  },
  {
    id: 'reserva',
    question: '¿Cómo es la política de reserva y confirmación de cupo?',
    answer:
      'Para garantizar un acompañamiento profundo y personalizado, los cupos son estrictamente limitados a la capacidad exclusiva de Posada Bagbazindio. Puedes apartar tu lugar con un abono inicial consultando directamente con tu asesor de Tu Viaje en Primera Clase vía WhatsApp, donde recibirás las tarifas vigentes según tu tipo de habitación y facilidades de pago previas al viaje.',
  },
  {
    id: 'alimentacion',
    question: '¿La gastronomía del retiro contempla requerimientos alimenticios especiales?',
    answer:
      'Sí. Nuestro menú todo incluido está diseñado con cocina fresca, equilibrada y de autor. Al momento de formalizar tu reserva podrás indicarle a tu asesor si requieres opciones vegetarianas, sin gluten o si tienes alguna alergia alimentaria para que el equipo de cocina de Posada Bagbazindio lo prepare con dedicación.',
  },
];
