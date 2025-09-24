import { Card, CardBody } from "@heroui/card";
import { FaClock, FaMapMarkerAlt, FaCouch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdAppShortcut } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

export default function BeneficiosClave() {
  const beneficios = [
    {
      titulo: "Reservas Online 24/7",
      descripcion:
        "Gestiona tus consultas desde tu celular o computadora, en tiempo real y sin intermediarios, con nuestro sistema de reservas online.",
      icono: <MdAppShortcut className="text-primary text-4xl mb-3" />,
    },
    {
      titulo: "Ahorro Inteligente",
      descripcion:
        "Nuestro sistema de tarifas es superior a las cuponeras. Cuantas más horas usas, más barato se vuelve el costo. Impulsamos tu crecimiento, sin pagos por adelantado.",
      icono: <RiMoneyDollarBoxFill className="text-secondary text-4xl mb-3" />,
    },

    {
      titulo: "Cancelaciones Sin Estrés",
      descripcion:
        "Sabemos que surgen imprevistos. Cancela sin costo hasta 24 horas antes. Si es con menos tiempo, puedes reagendar esa hora sin perder tu inversión.",
      icono: <MdCancel className="text-primary text-4xl mb-3" />,
    },
    {
      titulo: "Ubicación estratégica",
      descripcion:
        "Parque Rodó, en el corazón de Montevideo. Una zona que realza tu imagen profesional y es de fácil acceso para vos y tus pacientes. ",
      icono: <FaMapMarkerAlt className="text-secondary text-4xl mb-3" />,
    },
    {
      titulo: "Comodidad y profesionalismo",
      descripcion:
        "Cada detalle, desde la acústica hasta la decoración, fueron pensado por dos psicólogos para el bienestar de profesionales y pacientes. Un espacio creado desde la experiencia.",
      icono: <FaCouch className="text-primary text-4xl mb-3" />,
    },
    {
      titulo: "Flexibilidad horaria",
      descripcion:
        "Abierto todos los días de 7:00 a 23:00 hs, incluso domingos y feriados. Los 365 días del año a tu disposición.",
      icono: <FaClock className="text-secondary text-4xl mb-3" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-primary max-w-2xl mx-auto">
          Un Conjunto de <span className="text-secondary">Ventajas</span> para
          Simplificar tus Consultas.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              shadow="sm"
              className="bg-content1 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardBody className="flex flex-col items-center text-center p-8">
                {beneficio.icono}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {beneficio.titulo}
                </h3>
                <p className="text-default">{beneficio.descripcion}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
