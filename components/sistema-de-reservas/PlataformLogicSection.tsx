import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import {
  FaCalendarAlt,
  FaShieldAlt,
  FaRedoAlt,
  FaFileInvoiceDollar,
} from "react-icons/fa";

// TIPADO: Definimos la interfaz para los datos de cada tarjeta
interface LogicCardProps {
  icon: JSX.Element;
  title: string;
  content: React.ReactNode; // Usamos React.ReactNode para permitir texto con subtítulos
}

// DATOS: Mantenemos el contenido separado para una fácil edición
const logicData: LogicCardProps[] = [
  {
    icon: <FaCalendarAlt size={30} className="text-secondary" />,
    title: "Tu Reserva, a Tu Medida.",
    content: (
      <>
        <h4 className="italic font-semibold text-primary">
          Reserva Eventual: Flexibilidad para el Momento
        </h4>
        <p className="mt-1 font-sans text-primary/90">
          Perfecta para una consulta única. Elige un día y hora específicos y
          aseguras el espacio solo para esa ocasión.
        </p>
        <h4 className="mt-4 italic font-semibold text-primary">
          Reserva Fija: Tu Horario Blindado
        </h4>
        <p className="mt-1 font-sans text-primary/90">
          Asegura tu horario preferido a largo plazo. Se repite automáticamente
          cada semana, garantizándote ese espacio.
        </p>
      </>
    ),
  },
  {
    icon: <FaShieldAlt size={30} className="text-secondary" />,
    title: "Una Política de Cancelación Pensada para Profesionales.",
    content: (
      <>
        <h4 className="italic font-semibold text-primary ">
          Más de 24h: Libertad Total
        </h4>
        <p className="mt-1 text-primary/90">
          Cancela cualquier reserva sin costo ni penalización. Total
          flexibilidad para tu tranquilidad.
        </p>
        <h4 className="mt-4 italic font-semibold text-primary">
          Menos de 24h: Una Oportunidad, no una Pérdida
        </h4>
        <p className="mt-1 font-sans text-primary/90">
          Si cancelas a último momento, no pierdes esa inversión. Te damos la
          oportunidad de recuperarla.
        </p>
      </>
    ),
  },
  {
    icon: <FaRedoAlt size={30} className="text-secondary" />,
    title: "Reagendamiento Inteligente: Nunca Pierdes.",
    content: (
      <p className="font-sans text-primary/90">
        Una reserva cancelada a último momento se convierte en un crédito a tu
        favor. Tienes <strong>6 días</strong> desde la fecha original para
        reagendar esa hora sin costo alguno en cualquier otro horario
        disponible. Es nuestro compromiso para que tu inversión esté siempre
        protegida.
      </p>
    ),
  },
  {
    icon: <FaFileInvoiceDollar size={30} className="text-secondary" />,
    title: "Facturación Transparente, Ahorro Automático.",
    content: (
      <p className="font-sans text-primary/90">
        Tu factura se genera con un detalle claro y, aquí ocurre la magia:
        nuestro sistema calcula tu uso semanal y aplica los descuentos por
        volumen automáticamente. No tienes que hacer nada. Cuanto más creces,
        menos pagas por hora.
      </p>
    ),
  },
];

export default function PlatformLogicSection(): JSX.Element {
  return (
    <section className="bg-content1 py-20 sm:py-24">
      <div className="container max-w-5xl mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-primary">
            Reglas Claras, Relaciones a Largo Plazo.
          </h2>
          <p className="mt-6 font-sans text-lg text-primary/90">
            Creemos que la confianza se construye con transparencia. Por eso,
            queremos que conozcas en detalle el funcionamiento de nuestra
            plataforma. Hemos diseñado cada lógica para que sea justa, flexible
            y te dé siempre el control.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {logicData.map((item) => (
            <Card
              key={item.title}
              className="bg-content2 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              radius="lg"
              shadow="md"
            >
              <CardHeader className="flex flex-col items-center text-center pt-6 pb-4">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary pb-4">
                  {item.title}
                </h3>
                <Divider />
              </CardHeader>
              <CardBody className="p-8 pt-0 text-sm/6 ">
                {item.content}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
