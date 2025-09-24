export interface Espacio {
  id: string;
  nombre: string;
  descripcion: string;
  precio?: string;
  caracteristicas: string[];
  media: { type: "image" | "video"; src: string }[];
  tipo: "premium" | "estandar";
}

export const consultoriosData: Espacio[] = [
  {
    id: "consultorio-1",
    nombre: "Consultorio 1",
    descripcion:
      "Espacio luminoso y profesional de estilo minimalista, diseñado para consultas individuales y sesiones de terapia.",
    precio: "$250 / hora",
    caracteristicas: [
      "Amplio ventanal con luz natural",
      "Mobiliario versátil: sillones y sofa de 3 cuerpos",
      "Decoración minimalista y cálida",
    ],
    media: [
      { type: "image", src: "/images/consultorio1-1.webp" },
      { type: "image", src: "/images/consultorio1-2.webp" },
      { type: "image", src: "/images/consultorio1-3.webp" },
      { type: "image", src: "/images/consultorio1-4.webp" },
      { type: "image", src: "/images/consultorio1-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
    tipo: "premium",
  },
  {
    id: "consultorio-2",
    nombre: "Consultorio 2",
    descripcion:
      "Un consultorio cálido y ecléctico, con un ambiente natural y relajado.",
    precio: "$250 / hora",
    caracteristicas: [
      "Excelente iluminación natural",
      "Decoración con plantas y texturas",
      "Espacio flexible con múltiples asientos",
    ],
    media: [
      { type: "image", src: "/images/consultorio2-1.webp" },
      { type: "image", src: "/images/consultorio2-2.webp" },
      { type: "image", src: "/images/consultorio2-3.webp" },
      { type: "image", src: "/images/consultorio2-4.webp" },
      { type: "image", src: "/images/consultorio2-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
    tipo: "premium",
  },
  {
    id: "consultorio-3",
    nombre: "Consultorio 3",
    descripcion: "Un espacio íntimo con una decoración moderna y unificada.",
    precio: "$250 / hora",
    caracteristicas: [
      "Mobiliario de diseño a juego",
      "Iluminación cálida y acogedora",
      "Ideal para sesiones individuales y de pareja",
    ],
    media: [
      { type: "image", src: "/images/consultorio3-1.webp" },
      { type: "image", src: "/images/consultorio3-2.webp" },
      { type: "image", src: "/images/consultorio3-3.webp" },
      { type: "image", src: "/images/consultorio3-4.webp" },
      { type: "image", src: "/images/consultorio3-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
    tipo: "premium",
  },
  {
    id: "consultorio-4",
    nombre: "Consultorio 4",
    descripcion:
      "Ambiente clásico y sereno que transmite estabilidad y confort.",
    precio: "$250 / hora",
    caracteristicas: [
      "Sillones amplios y cómodos",
      "Detalles en madera y texturas cálidas",
      "Escritorio, biblioteca y espacio de guardado",
    ],
    media: [
      { type: "image", src: "/images/consultorio4-1.webp" },
      { type: "image", src: "/images/consultorio4-2.webp" },
      { type: "image", src: "/images/consultorio4-3.webp" },
      { type: "image", src: "/images/consultorio4-4.webp" },
      { type: "image", src: "/images/consultorio4-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
    tipo: "premium",
  },
  {
    id: "consultorio-5",
    nombre: "Consultorio 5",
    descripcion:
      "Un espacio sofisticado, ideal para crear un ambiente distinguido.",
    precio: "$200 / hora",
    caracteristicas: [
      "Decoración con detalles artísticos",
      "Diseño simétrico para terapia individual",
      "Espacio cálido y acogedor",
    ],
    media: [
      { type: "image", src: "/images/consultorio5-1.webp" },
      { type: "image", src: "/images/consultorio5-2.webp" },
      { type: "image", src: "/images/consultorio5-3.webp" },
      { type: "image", src: "/images/consultorio5-4.webp" },
      { type: "image", src: "/images/consultorio5-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
    tipo: "estandar",
  },
  {
    id: "consultorio-6",
    nombre: "Consultorio 6",
    descripcion:
      "Consultorio con carácter único que combina elementos vintage y modernos.",
    precio: "$250 / hora",
    caracteristicas: [
      "Distintivo piso de baldosas de época",
      "Mobiliario de alto contraste (sofá púrpura)",
      "Equipado con escritorio y sillones",
    ],
    media: [
      { type: "image", src: "/images/consultorio6-1.webp" },
      { type: "image", src: "/images/consultorio6-2.webp" },
      { type: "image", src: "/images/consultorio6-3.webp" },
      { type: "image", src: "/images/consultorio6-4.webp" },
      { type: "image", src: "/images/consultorio6-5.webp" },
      {
        type: "video",
        src: "https://www.youtube.com/embed/r7IPPJnpSt8",
      },
    ],
    tipo: "premium",
  },
];
