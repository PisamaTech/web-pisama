// src/components/sistema-de-reservas/BenefitsSection.tsx
import { Card, CardBody, CardHeader } from "@heroui/card";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaPeopleArrows, FaRegRectangleList } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <MdOutlineEventAvailable size={32} color="#ef9d88" />,
      title: "Disponibilidad 24/7",
      description:
        "Consulta la agenda y reserva a medianoche o el fin de semana. La plataforma trabaja para ti.",
    },
    {
      icon: <FaPeopleArrows size={32} color="#ef9d88" />,
      title: "Cero Intermediarios",
      description:
        "Tu reserva es directa e inmediata. Se acabaron las idas y vueltas por mensaje.",
    },
    {
      icon: <FaRegRectangleList size={32} color="#ef9d88" />,
      title: "Tu Historial y Facturación a un Clic",
      description:
        "Todas tus reservas, pasadas y futuras, registradas en tu perfil para un control total.",
    },
    {
      icon: <CgUnavailable size={32} color="#ef9d88" />,
      title: "Gestión de Imprevistos",
      description:
        "Nuestra política de cancelación flexible está integrada para que puedas reprogramar fácilmente.",
    },
  ];

  return (
    <section className="py-20 bg-content2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Una Plataforma Creada para tu Libertad Profesional
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              shadow="md"
              radius="lg"
              className="bg-content1 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="flex flex-col items-center text-center pt-6 pb-4">
                {/* Icono */}
                <div className="mb-3 flex h-18 w-18 items-center justify-center rounded-full bg-secondary/20">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {benefit.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="font-sans text-primary/80 pb-4 px-4">
                  {benefit.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
