// src/app/guia-de-uso/page.tsx
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import {
  FaRegStar,
  FaCalendarCheck,
  FaShieldAlt,
  FaRedoAlt,
  FaFileInvoiceDollar,
  FaArrowRight,
} from "react-icons/fa";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Guía de Uso de la Plataforma | Espacio Pisama",
  description:
    "Encuentra tutoriales y guías paso a paso para sacar el máximo provecho de nuestra app de reservas. Aprende a gestionar tu agenda, reagendar y más.",
};

// TIPADO Y DATOS para las tarjetas de las guías
interface GuideCardProps {
  key: string;
  title: string;
  description: string;
  href: string;
  icon: JSX.Element;
}

const guideData: GuideCardProps[] = [
  {
    key: "1",
    title: "Primeros Pasos y Primera Reserva",
    description:
      "Una guía de inicio rápido para crear tu cuenta y agendar tu primer consultorio en menos de 5 minutos.",
    href: "/guia-de-uso/agendar-primera-reserva", // Ruta de la guía específica
    icon: <FaRegStar className="h-8 w-8 text-secondary-500" />,
  },
  {
    key: "2",
    title: "Entendiendo los Tipos de Reserva",
    description:
      "Descubre la diferencia entre Reservas Fijas y Eventuales, y aprende a elegir la mejor opción para tu práctica.",
    href: "/guia-de-uso/tipos-de-reserva",
    icon: <FaCalendarCheck className="h-8 w-8 text-secondary-500" />,
  },
  {
    key: "3",
    title: "Guía de Cancelaciones",
    description:
      "Conoce nuestra política de cancelación flexible y cómo gestionar imprevistos sin afectar tu inversión.",
    href: "/guia-de-uso/politica-de-cancelacion",
    icon: <FaShieldAlt className="h-8 w-8 text-secondary-500" />,
  },
  {
    key: "4",
    title: "Cómo Reagendar una Reserva Penalizada",
    description:
      "El tutorial paso a paso para recuperar una hora cancelada a último momento y proteger tu economía.",
    href: "/guia-de-uso/como-reagendar-una-reserva-penalizada", // La página que ya creamos
    icon: <FaRedoAlt className="h-8 w-8 text-secondary-500" />,
  },
  {
    key: "5",
    title: "Todo sobre Facturación y Descuentos",
    description:
      "Aprende a leer tu factura, entender el consumo en curso y ver cómo se aplican tus descuentos por volumen.",
    href: "/guia-de-uso/facturacion-y-descuentos",
    icon: <FaFileInvoiceDollar className="h-8 w-8 text-secondary-500" />,
  },
];

// --- NUEVA SECCIÓN DE BIENVENIDA DE LEO ---
const WelcomeSection = () => (
  <section className="bg-background py-20">
    <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-3">
      {/* Ilustración de Leo */}
      <div className="flex justify-center md:col-span-1">
        <Image
          src="/images/leo/leo-saludando-animado.webp"
          alt="Leo, el asistente virtual de Espacio Pisama saludando"
          className="border border-content3 rounded-[20px] shadow-2xl"
          width={400}
          height={400}
          unoptimized
          // className="rounded-full"
        />
      </div>
      {/* Texto de Bienvenida */}
      <div className="text-center md:col-span-2 md:text-left">
        <h1 className="font-display text-5xl font-bold text-primary-500">
          Hola, soy Leo! Tu asistente virtual en Espacio Pisama.
        </h1>
        <p className="mt-6 font-sans text-lg text-foreground/80">
          Mi misión es ayudarte a que aproveches al máximo cada herramienta que
          hemos creado para vos. Sé que empezar en una nueva plataforma puede
          generar preguntas, y para eso estoy aquí! A continuación, he preparado
          una serie de guías detalladas y videos paso a paso para resolver todas
          tus dudas.
        </p>
      </div>
    </div>
  </section>
);

export default function GuiaDeUsoPage(): JSX.Element {
  return (
    <>
      {/* --- Encabezado de la Página --- */}
      <WelcomeSection />

      {/* --- Grilla de Guías --- */}
      <section className="bg-content1 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideData.map((guide) => (
              <Card
                key={guide.key}
                className="flex h-full flex-col bg-background shadow-xl hover:scale-105 transition-transform duration-200"
              >
                <CardHeader className="flex items-start gap-4 p-6">
                  {guide.icon}
                  <h2 className="font-display text-2xl font-bold text-primary-500">
                    {guide.title}
                  </h2>
                </CardHeader>
                <CardBody className="flex-grow p-6 pt-0">
                  <p className="font-sans text-foreground/80">
                    {guide.description}
                  </p>
                </CardBody>
                <CardFooter className="p-6 pt-0">
                  <Button
                    as={Link}
                    href={guide.href}
                    variant="bordered"
                    className="border-secondary-500 font-display font-semibold text-secondary-500 mx-auto"
                    endContent={<FaArrowRight />}
                  >
                    Leer Guía
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA de Contacto --- */}
      <section className="py-20 bg-content4 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-primary-500">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-foreground/80">
            Si tienes una duda que no está cubierta en nuestras guías, ponte en
            contacto con nosotros para ayudarte personalmente.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              href="/contacto"
              className="bg-primary-500 font-display font-semibold text-primary-foreground"
              size="lg"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
