import {
  FaWifi,
  FaKey,
  FaCalendarCheck,
  FaChair,
  FaShieldAlt,
  FaCoffee,
} from "react-icons/fa";

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
    icon: FaShieldAlt,
    title: "Privacidad y Seguridad",
    description: "Instalaciones diseñadas para garantizar la confidencialidad.",
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
      <h2 className="font-display text-4xl font-bold text-marron-cafe">
        Tu Alquiler Siempre Incluye
      </h2>
      <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.title}
            className="rounded-xl bg-crema-suave/50 p-8 text-left shadow-sm transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-suave/10">
              <servicio.icon
                className="h-7 w-7 text-secondary"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold text-marron-cafe">
              {servicio.title}
            </h3>
            <p className="mt-2 font-sans text-base text-marron-cafe/80">
              {servicio.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
