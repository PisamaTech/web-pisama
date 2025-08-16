import ConsultorioCard from "@/components/consultorios/ConsultorioCard";

// Separamos los datos del diseño para que sea fácil de actualizar
const consultoriosData = [
  {
    imageUrl: "/images/consultorio3-3.jpg", // Asegúrate de tener esta imagen
    altText:
      "Foto de un consultorio estándar amplio y luminoso en Espacio Pisama",
    title: "Consultorios Estándar",
    description:
      "Espacios amplios, bañados en luz natural y equipados con mobiliario que invita a la conversación. Ideales para terapia individual, de pareja, coaching y cualquier sesión donde el confort es prioritario.",
    features: [
      "Espacio amplio y luminoso",
      "Cómodo diván y sillones",
      "Luz cálida regulable",
      "Decoración profesional y acogedora",
    ],
    priceLink: "/precios",
  },
  {
    imageUrl: "/images/consultorio5-1.jpg", // Asegúrate de tener esta imagen
    altText: "Foto de un consultorio íntimo y funcional en Espacio Pisama",
    title: "Consultorio Íntimo",
    description:
      "La solución perfecta para quienes buscan un entorno más recogido. Su diseño funcional optimiza cada metro, ofreciendo un ambiente profesional ideal para terapia individual o consultas focalizadas.",
    features: [
      "Espacio optimizado y funcional",
      "Dos cómodos sillones individuales",
      "Mesa auxiliar para apoyo",
      "Mantiene la calidez de Pisama",
    ],
    priceLink: "/precios",
  },
];

export default function ConsultoriosPage() {
  return (
    <section className="bg-crema-suave py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado de la Página */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold text-marron-cafe">
            Un refugio de calma para cada tipo de sesión.
          </h1>
          <p className="mt-6 font-sans text-lg text-marron-cafe/90">
            Sabemos que el entorno es una parte fundamental de tu trabajo. Por
            eso, cada uno de nuestros consultorios está diseñado para fomentar
            la confianza, la apertura y la serenidad.
          </p>
        </div>

        {/* Grilla de Consultorios */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {consultoriosData.map((consultorio) => (
            <ConsultorioCard
              key={consultorio.title}
              imageUrl={consultorio.imageUrl}
              altText={consultorio.altText}
              title={consultorio.title}
              description={consultorio.description}
              features={consultorio.features}
              priceLink={consultorio.priceLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
