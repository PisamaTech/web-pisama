export interface Espacio {
  id: string;
  nombre: string;
  descripcion: string;
  precio?: string;
  caracteristicas: string[];
  media: { type: "image" | "video"; src: string }[];
}

export const consultoriosData: Espacio[] = [
  {
    id: "consultorio-1",
    nombre: "Consultorio 1",
    descripcion:
      "Espacio luminoso, diseñado para consultas individuales y sesiones de terapia.",
    precio: "$500 / hora",
    caracteristicas: [
      "Espacio optimizado y funcional",
      "Sillón cómodo + escritorio amplio",
      "Decoración minimalista y cálida",
    ],
    media: [
      { type: "image", src: "/images/consultorio1-1.jpg" },
      { type: "image", src: "/images/consultorio1-2.jpg" },
      { type: "image", src: "/images/consultorio1-3.jpg" },
      { type: "video", src: "/videos/consultorio1.mp4" },
    ],
  },
  {
    id: "consultorio-2",
    nombre: "Consultorio 2",
    descripcion: "Consultorio moderno con mobiliario ergonómico.",
    precio: "$550 / hora",
    caracteristicas: [
      "Muebles ergonómicos",
      "Iluminación cálida",
      "Ideal para sesiones individuales y parejas",
    ],
    media: [
      { type: "image", src: "/images/consultorio2-1.jpg" },
      { type: "image", src: "/images/consultorio2-2.jpg" },
      { type: "image", src: "/images/consultorio2-3.jpg" },
      { type: "video", src: "/videos/consultorio2.mp4" },
    ],
  },
  {
    id: "consultorio-3",
    nombre: "Consultorio 3",
    descripcion: "Un espacio íntimo, ideal para terapias familiares.",
    precio: "$600 / hora",
    caracteristicas: [
      "Dos sillones individuales",
      "Mesa auxiliar",
      "Ambiente acogedor y privado",
    ],
    media: [
      { type: "image", src: "/images/consultorio3-1.jpg" },
      { type: "image", src: "/images/consultorio3-2.jpg" },
      { type: "image", src: "/images/consultorio3-3.jpg" },
      { type: "video", src: "/videos/consultorio3.mp4" },
    ],
  },
  {
    id: "consultorio-4",
    nombre: "Consultorio 4",
    descripcion: "Espacio amplio y versátil, preparado para talleres pequeños.",
    precio: "$650 / hora",
    caracteristicas: [
      "Espacio amplio y flexible",
      "Mesa redonda con sillas",
      "Ideal para pequeños grupos",
    ],
    media: [
      { type: "image", src: "/images/consultorio4-1.jpg" },
      { type: "image", src: "/images/consultorio4-2.jpg" },
      { type: "image", src: "/images/consultorio4-3.jpg" },
      { type: "video", src: "/videos/consultorio4.mp4" },
    ],
  },
  {
    id: "consultorio-5",
    nombre: "Consultorio 5",
    descripcion: "Decoración moderna con detalles en madera.",
    precio: "$500 / hora",
    caracteristicas: [
      "Iluminación natural",
      "Decoración moderna",
      "Espacio cálido y acogedor",
    ],
    media: [
      { type: "image", src: "/images/consultorio5-1.jpg" },
      { type: "image", src: "/images/consultorio5-2.jpg" },
      { type: "image", src: "/images/consultorio5-3.jpg" },
      { type: "video", src: "/videos/consultorio5.mp4" },
    ],
  },
  {
    id: "consultorio-6",
    nombre: "Consultorio 6",
    descripcion:
      "Un espacio discreto y profesional, listo para recibir a tus pacientes.",
    precio: "$550 / hora",
    caracteristicas: [
      "Estilo sobrio",
      "Sillón y escritorio",
      "Buena insonorización",
    ],
    media: [
      { type: "image", src: "/images/consultorio6-1.jpg" },
      { type: "image", src: "/images/consultorio6-2.jpg" },
      { type: "image", src: "/images/consultorio6-3.jpg" },
      { type: "video", src: "/videos/consultorio6.mp4" },
    ],
  },
];
