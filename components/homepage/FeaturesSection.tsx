import { Card, CardBody } from "@heroui/card";
import { FaClock, FaMapMarkerAlt, FaCouch } from "react-icons/fa";

export default function BeneficiosClave() {
  const beneficios = [
    {
      titulo: "Flexibilidad horaria",
      descripcion:
        "Reservá consultorios por hora, mañana, tarde o fin de semana.",
      icono: <FaClock className="text-primary text-4xl mb-3" />,
    },
    {
      titulo: "Ubicación estratégica",
      descripcion:
        "En el corazón de Montevideo, fácil acceso para vos y tus pacientes.",
      icono: <FaMapMarkerAlt className="text-primary text-4xl mb-3" />,
    },
    {
      titulo: "Comodidad y profesionalismo",
      descripcion:
        "Espacios cuidados, amoblados y listos para recibir a tus clientes.",
      icono: <FaCouch className="text-primary text-4xl mb-3" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Beneficios clave de{" "}
          <span className="text-primary">Espacio Pisama</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              shadow="sm"
              className="transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardBody className="flex flex-col items-center text-center p-8">
                {beneficio.icono}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
