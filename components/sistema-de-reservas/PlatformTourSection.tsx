"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import LightboxModal from "@/components/LightboxModal";

// TIPADO Y DATOS
interface TourItem {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

const tourData: TourItem[] = [
  {
    key: "1",
    title: "Inicio (Tu Panel de Control)",
    subtitle:
      "Tu centro de notificaciones para ver lo más importante de un vistazo.",
    description:
      "Es tu vista principal y tu centro de notificaciones. Aquí verás un resumen rápido de lo más importante.",
    features: [
      "Tus Próximas Reservas",
      "Horas crédito para Reagendar",
      "Resumen de Facturación",
      "Alertas de Renovaciones",
    ],
    imageSrc: "/images/app/app_inicio.webp",
    imageAlt: "Captura de la sección Inicio de la aplicación",
  },
  {
    key: "2",
    title: "Calendario Semanal (Vista por Consultorio)",
    subtitle:
      "La vista clásica para planificar tu semana en un consultorio específico.",
    description:
      "La vista clásica de la agenda semanal, enfocada en un solo consultorio.",
    features: [
      "Selector de Consultorio",
      "Visualización de Lunes a Domingo",
      "Agenda con un par de clics",
    ],
    imageSrc: "/images/app/app_disponibilidad_semanal.webp",
    imageAlt: "Captura de la sección Calendario Semanal",
  },
  {
    key: "3",
    title: "Calendario Diario (Vista Completa)",
    subtitle:
      "La herramienta ideal para encontrar un espacio libre urgentemente.",
    description:
      "Una vista potente que te muestra la disponibilidad de todos los consultorios para un día específico.",
    features: [
      "Comparación rápida de todos los consultorios en un día específico",
      "Agendamiento inmediato",
    ],
    imageSrc: "/images/app/app_disponibilidad_diaria.webp",
    imageAlt: "Captura de la sección Calendario Diario",
  },
  {
    key: "4",
    title: "Mis Reservas (Tu Historial Completo)",
    subtitle:
      "El registro detallado de toda tu actividad, siempre a tu alcance.",
    description:
      "El registro detallado de todas tus reservas: pasadas, presentes y futuras.",
    features: [
      "Filtros por fecha, estado o tipo",
      "Navegación por historial",
      "Acciones directas para cancelar o reagendar",
    ],
    imageSrc: "/images/app/app_reservas.webp",
    imageAlt: "Captura de la sección Mis Reservas",
  },
  {
    key: "5",
    title: "Facturación (Tu Centro Financiero)",
    subtitle:
      "Toda la información de tus pagos, presentada de forma clara y transparente.",
    description:
      "Tu centro financiero. Aquí encontrarás toda la información sobre tus pagos de forma transparente.",
    features: [
      "Historial completo de facturas",
      "Detalle de consumo por factura",
      "Vista de facturación en curso",
    ],
    imageSrc: "/images/app/app_facturacion.webp",
    imageAlt: "Captura de la sección Facturación",
  },
  {
    key: "6",
    title: "Perfil (Tu Cuenta)",
    subtitle:
      "Gestiona tu información personal y la seguridad de tu cuenta fácilmente.",
    description: "El lugar para gestionar los datos de tu cuenta.",
    features: [
      "Actualización de datos personales",
      "Cambio de contraseña seguro",
    ],
    imageSrc: "/images/app/app_configuracion_cuenta.webp",
    imageAlt: "Captura de la sección Perfil",
  },
];

export default function PlatformTourSection(): JSX.Element {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-content2">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-primary">
            Un Tour Guiado por tu Futura Plataforma
          </h2>
          <p className="mt-6 font-sans text-lg text-primary/90">
            Hemos diseñado cada apartado para que sea intuitivo y potente. Haz
            clic en cada sección para descubrir cómo te ayudará a gestionar tu
            práctica de forma más eficiente.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <Accordion
            selectionMode="multiple"
            variant="splitted"
            classNames={{
              item: "bg-content1 !shadow-lg",
              trigger: "p-6",
              content: "p-6 pt-0",
            }}
          >
            {tourData.map((item) => (
              <AccordionItem
                key={item.key}
                aria-label={item.title}
                title={
                  <span className="font-display text-xl font-bold text-primary">
                    {item.title}
                  </span>
                }
                subtitle={
                  <span className="font-sans text-primary/80">
                    {item.subtitle}
                  </span>
                }
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Columna de Texto */}
                  <div>
                    <h4 className="font-display font-bold text-primary">
                      Funciones Principales:
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {item.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 font-sans text-primary/90"
                        >
                          <FaRegArrowAltCircleRight className="mt-1 h-4 w-4 flex-shrink-0 text-terracotta-suave" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Columna de Imagen */}
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openLightbox(item.imageSrc)}
                    />
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <LightboxModal
        isOpen={lightboxOpen}
        image={selectedImage}
        onClose={closeLightbox}
      />
    </section>
  );
}
