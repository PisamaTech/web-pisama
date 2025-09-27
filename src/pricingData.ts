// TIPADO: Definimos la interfaz para los datos de precios
interface PricingPlan {
  title: string;
  price: number;
  priceSubtitle: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

export const pricingData: PricingPlan[] = [
  {
    title: "Consultorio Estándar",
    price: 200,
    priceSubtitle: "(o hasta $100/hora con descuentos)",
    description:
      "Acogedor, funcional y con todo lo indispensable para una sesión productiva. Un ambiente íntimo y profesional, optimizado para terapias individuales, coaching o consultas nutricionales. La solución más eficiente en costos.",
    features: [
      "Ideal para sesiones individuales",
      "Espacio cálido y acogedor",
      "Dos cómodos sillones individuales",
      "Mesa de apoyo funcional",
      "Máxima privacidad",
      "Aire acondicionado",
    ],
    isFeatured: false,
  },
  {
    title: "Consultorio Premium",
    price: 250,
    priceSubtitle: "(o hasta $150/hora con descuentos)",
    description:
      "Ideal para profesionales que buscan un extra de confort y amplitud. Un espacio generoso con mobiliario seleccionado para crear una atmósfera de calma y distinción. Perfecto para terapias de pareja, sesiones familiares o para ofrecer una experiencia superior.",
    features: [
      "Mayor amplitud y confort.",
      "Ideal para terapia de pareja, niños y adultos",
      "Sillones de alta comodidad para 2 o 3 personas.",
      "Escritorio",
      "Diseño cálido y confortable ",
      "Aire acondicionado",
    ],
    isFeatured: true, // Destacamos el plan Premium
  },
];
