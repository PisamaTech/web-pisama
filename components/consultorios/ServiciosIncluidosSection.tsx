import {
  FaWifi,
  FaKey,
  FaCalendarCheck,
  FaChair,
  FaCoffee,
} from "react-icons/fa";
import { TbMassage } from "react-icons/tb";

const servicios = [
  {
    icon: FaWifi,
    title: "Wi-Fi de Alta Velocidad",
    description: "Conexión estable y rápida para vos y tus pacientes.",
  },
  {
    icon: FaKey,
    title: "Acceso Autónomo Digital",
    description: "Ingreso con código para máxima flexibilidad y seguridad.",
  },
  {
    icon: FaCalendarCheck,
    title: "Reservas Online 24/7",
    description: "Gestiona tu agenda en cualquier momento desde nuestra app.",
  },
  {
    icon: FaChair,
    title: "Cómoda Sala de Espera",
    description:
      "Un ambiente profesional y sereno para recibir a tus pacientes.",
  },
  {
    icon: TbMassage,
    title: "Uso de Camilla",
    description:
      "El espacio cuenta con una camilla a diposición para su uso en cualquier de nuestro consultorios, sin costo extra.",
  },
  {
    icon: FaCoffee,
    title: "Servicio de Cafetería",
    description:
      "Agua, café y té de cortesía en la sala de descanso para vos y tus pacientes.",
  },
];

export default function ServiciosIncluidosSection() {
  return (
    <div className="container mx-auto max-w-5xl px-4 text-center lg:px-8">
      <h2 className="font-display text-4xl font-bold text-primary">
        Tu Alquiler Siempre Incluye
      </h2>
      <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.title}
            className="rounded-xl bg-gray-50 p-8 text-left shadow-lg transition-transform hover:scale-[1.04]"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <servicio.icon
                className="h-7 w-7 text-secondary"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl text-center font-bold text-primary">
              {servicio.title}
            </h3>
            <p className="mt-2 font-sans text-base text-primary/80">
              {servicio.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
