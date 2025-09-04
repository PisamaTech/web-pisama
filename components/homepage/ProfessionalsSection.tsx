import { Card, CardBody } from "@heroui/card";
import { FaBrain, FaSpa, FaAppleAlt } from "react-icons/fa"; // Iconos representativos

// TIPADO: Definimos la interfaz para los datos de cada tarjeta
interface ProfessionalCard {
  icon: JSX.Element;
  title: string;
  professions: string;
  description: string;
}

// DATOS: Mantenemos el contenido separado para una fácil edición
const professionalData: ProfessionalCard[] = [
  {
    icon: <FaBrain className="h-12 w-12 text-terracotta-suave" />,
    title: "Salud Mental",
    professions: "Psicólogos y Psiquiatras",
    description:
      "Ofrece a tus pacientes un espacio de máxima confidencialidad, serenidad y confort, donde puedan sentirse seguros para abrirse y conectar en confianza.",
  },
  {
    icon: <FaSpa className="h-12 w-12 text-terracotta-suave" />,
    title: "Terapias y Bienestar",
    professions: "Terapeutas Alternativos y Masajistas",
    description:
      "Un ambiente de calma y calidez, con la versatilidad necesaria para tus sesiones de bienestar integral, terapias corporales y de sanación.",
  },
  {
    icon: <FaAppleAlt className="h-12 w-12 text-terracotta-suave" />,
    title: "Salud y Nutrición",
    professions: "Nutricionistas y Fisioterapeutas",
    description:
      "Proyecta una imagen profesional en un entorno moderno y acogedor, ideal para consultas de salud, nutrición y recuperación física.",
  },
];

export default function ProfessionalsSection(): JSX.Element {
  return (
    <section className="bg-gris-calido/40 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Un Espacio Diseñado para Profesionales como Vos
          </h2>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {professionalData.map((card) => (
            <Card
              key={card.title}
              className="flex h-full flex-col bg-crema-suave text-center shadow-lg transition-transform hover:-translate-y-2"
            >
              <CardBody className="flex flex-grow flex-col items-center p-8">
                {/* Icono */}
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-terracotta-suave/10">
                  {card.icon}
                </div>
                {/* Título y Profesiones */}
                <h3 className="font-display text-2xl text-center font-bold text-marron-cafe">
                  {card.title}
                </h3>
                <p className="mt-1 font-sans text-center font-semibold text-terracotta-suave">
                  {card.professions}
                </p>
                {/* Descripción */}
                <p className="mt-4 flex-grow font-sans text-marron-cafe/90">
                  {card.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
