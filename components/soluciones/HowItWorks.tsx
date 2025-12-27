import { Card, CardBody } from "@heroui/card";
import {
  FaCalendarCheck,
  FaKey,
  FaDoorOpen,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    number: "1",
    icon: FaCalendarCheck,
    title: "Reservá online",
    description:
      "Elegí consultorio y horario en tiempo real con nuestra aplicación. Reserva instantánea, sin esperar respuestas.",
  },
  {
    number: "2",
    icon: FaKey,
    title: "Recibí tu código",
    description:
      "Código de acceso enviado automáticamente a tu app y email. Sin llaves físicas.",
  },
  {
    number: "3",
    icon: FaDoorOpen,
    title: "Ingresá con autonomía",
    description:
      "Portero digital disponible de 7:00 a 23:00, los 365 días. Sin depender de nadie.",
  },
  {
    number: "4",
    icon: FaCheckCircle,
    title: "Atendé tranquilo",
    description:
      "Espacio impecable, clima controlado, todo listo. Solo concentrate en tu paciente.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-content1 py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Tu Consultorio <span className="text-secondary">Sin Estrés</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
            Desde la reserva hasta atender a tu paciente, todo automatizado y
            sin intermediarios.
          </p>
        </div>

        {/* Pasos en grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card
                key={index}
                shadow="md"
                className="relative bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-visible"
              >
                {/* Número del paso */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold shadow-lg">
                  {step.number}
                </div>

                <CardBody className="flex flex-col items-center p-6 pt-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="text-3xl text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-default-600">
                    {step.description}
                  </p>
                </CardBody>

                {/* Flecha conectora (excepto el último) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-secondary/50 lg:block">
                    →
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
