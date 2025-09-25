export interface OtraArea {
  nombre: string;
  descripcion: string;
  caracteristicas: string[];
  media: { type: "image" | "video"; src: string }[];
}

export const otrasAreas: OtraArea[] = [
  {
    nombre: "Sala de Espera",
    descripcion:
      "Un recibidor amplio y elegante que da la bienvenida con el encanto de la arquitectura de época.",
    caracteristicas: [
      "Luminosa claraboya con vitrales",
      "Pisos originales y techos altos",
      "Ambiente calefaccionado y confortable",
      "Musica funcional de fondo",
    ],
    media: [
      { type: "image", src: "/images/salaespera-1.webp" },
      { type: "image", src: "/images/salaespera-1-1.webp" },
      { type: "image", src: "/images/salaespera-1-2.webp" },
      { type: "image", src: "/images/salaespera-1-3.webp" },
      { type: "image", src: "/images/salaespera-1-4.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
  },
  {
    nombre: "Sala de Descanso",
    descripcion:
      "Un espacio privado y funcional, pensado para el confort de los profesionales entre sesiones.",
    caracteristicas: [
      "Agua, café y té disponibles",
      "Kitchenette equipada (heladera, microondas)",
      "Zona de comedor y estar con sofá",
      "Ambiente calefaccionado",
    ],
    media: [
      { type: "image", src: "/images/saladescanso-1.webp" },
      { type: "image", src: "/images/saladescanso-1-1.webp" },
      { type: "image", src: "/images/saladescanso-1-2.webp" },
      { type: "image", src: "/images/saladescanso-1-3.webp" },
      { type: "image", src: "/images/saladescanso-1-4.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
  },
  {
    nombre: "Baños",
    descripcion:
      "Instalaciones sanitarias modernas para la comodidad de profesionales y pacientes.",
    caracteristicas: [
      "Dos baños independientes",
      "Uno para profesionales y otro para pacientes",
      "Diseño moderno y funcional",
      "Completamente equipados",
    ],
    media: [
      { type: "image", src: "/images/banos1-1.webp" },
      { type: "image", src: "/images/banos1-2.webp" },
      { type: "image", src: "/images/banos1-3.webp" },
      { type: "image", src: "/images/banos1-4.webp" },
      { type: "image", src: "/images/banos1-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
  },
  {
    nombre: "Fachada",
    descripcion:
      "Una elegante fachada de época con valor arquitectónico, que brinda una presencia profesional y distinguida.",
    caracteristicas: [
      "Diseño arquitectónico de época con detalles ornamentales",
      "Ubicación de fácil acceso para profesionales y pacientes",
      "Facilidad para estacionar en la zona",
      "Entorno seguro y tranquilo",
    ],
    media: [
      { type: "image", src: "/images/fachada-1.1.webp" },
      { type: "image", src: "/images/fachada-1.2.webp" },
      { type: "image", src: "/images/fachada-1.3.webp" },
      { type: "image", src: "/images/fachada-1.4.webp" },
      { type: "image", src: "/images/fachada-1.5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
  },
];

export default otrasAreas;
