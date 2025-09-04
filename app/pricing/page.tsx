"use client";

import { useState } from "react";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import {
  FaPlay,
  FaEye,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const ConsultoriosPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedMedia, setSelectedMedia] = useState({
    type: "",
    src: "",
    title: "",
  });

  // Datos de ejemplo para los consultorios
  const consultorios = [
    {
      id: 1,
      name: "Consultorio 1",
      description:
        "Espacio amplio y luminoso, ideal para sesiones individuales con ambiente cálido y profesional.",
      price: "$150.000/mes",
      features: [
        "Espacio optimizado y funcional",
        "Dos cómodos sillones individuales",
        "Mesa auxiliar para apoyo",
        "Mantiene la calidez de Pisama",
        "Excelente iluminación natural",
      ],
      images: [
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      id: 2,
      name: "Consultorio 2",
      description:
        "Consultorio de tamaño medio con diseño moderno, perfecto para terapias familiares.",
      price: "$135.000/mes",
      features: [
        "Diseño contemporáneo",
        "Sofá de 3 plazas y sillón individual",
        "Mesa de centro amplia",
        "Sistema de audio integrado",
        "Climatización independiente",
      ],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      id: 3,
      name: "Consultorio 3",
      description:
        "Espacio íntimo y acogedor, especialmente diseñado para crear un ambiente de confianza.",
      price: "$125.000/mes",
      features: [
        "Ambiente íntimo y privado",
        "Decoración en tonos cálidos",
        "Sillones ergonómicos",
        "Biblioteca integrada",
        "Vista al jardín interior",
      ],
      images: [
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      id: 4,
      name: "Consultorio 4",
      description:
        "El más amplio de nuestros espacios, ideal para dinámicas grupales y talleres.",
      price: "$180.000/mes",
      features: [
        "Espacio extra amplio",
        "Configuración flexible",
        "Capacidad para 8 personas",
        "Pizarra interactiva",
        "Proyector incluido",
      ],
      images: [
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      id: 5,
      name: "Consultorio 5",
      description:
        "Espacio especializado en terapias infantiles con diseño lúdico y seguro.",
      price: "$140.000/mes",
      features: [
        "Diseño adaptado para niños",
        "Colores suaves y estimulantes",
        "Juguetes terapéuticos incluidos",
        "Rincón de juegos",
        "Máxima seguridad infantil",
      ],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      id: 6,
      name: "Consultorio 6",
      description:
        "Nuestro consultorio premium con las mejores comodidades y tecnología de punta.",
      price: "$200.000/mes",
      features: [
        "Espacio premium",
        "Tecnología de última generación",
        "Mobiliario de lujo",
        "Terraza privada",
        "Servicio de café incluido",
      ],
      images: [
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
  ];

  const espaciosComunes = [
    {
      name: "Sala de Espera",
      description:
        "Amplia sala de espera con ambiente relajante y cómodos asientos para garantizar la comodidad de los pacientes.",
      features: [
        "Capacidad para 15 personas",
        "Wi-Fi gratuito",
        "Revistas especializadas",
        "Música ambiental",
        "Máquina de café y agua",
      ],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      name: "Baños",
      description:
        "Instalaciones sanitarias modernas y completamente equipadas, mantenidas con los más altos estándares de limpieza.",
      features: [
        "Diseño moderno y funcional",
        "Accesibilidad universal",
        "Productos de higiene incluidos",
        "Limpieza profesional diaria",
        "Ventilación optimizada",
      ],
      images: [
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      name: "Sala de Descanso",
      description:
        "Espacio privado para profesionales donde pueden relajarse entre sesiones y preparar sus consultas.",
      features: [
        "Cocina completamente equipada",
        "Zona de descanso con sofás",
        "Mesa de trabajo amplia",
        "Refrigerador y microondas",
        "Lockers personales",
      ],
      images: [
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
    {
      name: "Fachada del Espacio",
      description:
        "Entrada principal con diseño arquitectónico moderno que transmite profesionalismo y calidez desde el primer momento.",
      features: [
        "Fachada moderna y acogedora",
        "Acceso principal amplio",
        "Señalización profesional",
        "Jardín frontal cuidado",
        "Estacionamiento disponible",
      ],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    },
  ];

  const openMedia = (type, src, title) => {
    setSelectedMedia({ type, src, title });
    onOpen();
  };

  const MediaGrid = ({
    images,
    video,
    title,
    showPrice = false,
    price = null,
    isConsultorio = false,
  }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative group cursor-pointer"
          onClick={() => openMedia("image", img, `${title} - Foto ${idx + 1}`)}
        >
          <Image
            src={img}
            alt={`${title} - Foto ${idx + 1}`}
            className="w-full h-24 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
            <FaEye
              className="text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
              size={20}
            />
          </div>
        </div>
      ))}
      <div
        className="relative group cursor-pointer"
        onClick={() => openMedia("video", video, `${title} - Video`)}
      >
        <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <FaPlay
            className="text-white group-hover:scale-110 transition-transform duration-200"
            size={24}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className=" border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Consultorios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Espacios profesionales diseñados para brindar el mejor ambiente
              terapéutico. Cada consultorio está equipado con todo lo necesario
              para garantizar sesiones exitosas.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Consultorios Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Consultorios Disponibles
            </h2>
            <p className="text-gray-600">
              Elige el espacio perfecto para tu práctica profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultorios.map((consultorio) => (
              <Card
                key={consultorio.id}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {consultorio.name}
                      </h3>
                      <Chip color="success" variant="flat" className="mt-2">
                        {consultorio.price}
                      </Chip>
                    </div>
                    <Button
                      color="primary"
                      size="sm"
                      endContent={<FaCalendarAlt size={16} />}
                    >
                      Reservar
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 mb-4">
                    {consultorio.description}
                  </p>

                  <MediaGrid
                    images={consultorio.images}
                    video={consultorio.video}
                    title={consultorio.name}
                    showPrice={true}
                    price={consultorio.price}
                    isConsultorio={true}
                  />

                  <Divider className="my-4" />

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Características:
                    </h4>
                    <ul className="space-y-1">
                      {consultorio.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Espacios Comunes Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Espacios Comunes
            </h2>
            <p className="text-gray-600">
              Instalaciones compartidas que complementan tu experiencia
              profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {espaciosComunes.map((espacio, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {espacio.name}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 mb-4">{espacio.description}</p>

                  <MediaGrid
                    images={espacio.images}
                    video={espacio.video}
                    title={espacio.name}
                  />

                  <Divider className="my-4" />

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Características:
                    </h4>
                    <ul className="space-y-1">
                      {espacio.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
            <CardBody className="text-center p-8">
              <h2 className="text-3xl font-bold mb-4">Tour Virtual Completo</h2>
              <p className="text-lg mb-6 opacity-90">
                Recorre todos nuestros espacios desde la comodidad de tu hogar.
                Conoce cada rincón antes de tomar tu decisión.
              </p>
              <Button
                size="lg"
                color="default"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                startContent={<FaPlay size={20} />}
                onClick={() =>
                  openMedia(
                    "video",
                    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
                    "Tour Virtual Completo"
                  )
                }
              >
                Iniciar Tour Virtual
              </Button>
            </CardBody>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="shadow-xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <CardBody className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para comenzar?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte a encontrar el
                consultorio perfecto para tu práctica profesional. Agenda una
                visita o solicita más información sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  color="primary"
                  className="font-semibold"
                  startContent={<FaPhone size={20} />}
                >
                  Llamar Ahora
                </Button>
                <Button
                  size="lg"
                  color="primary"
                  variant="bordered"
                  className="font-semibold"
                  startContent={<FaEnvelope size={20} />}
                >
                  Enviar Consulta
                </Button>
                <Button
                  size="lg"
                  color="success"
                  className="font-semibold"
                  startContent={<FaCalendarAlt size={20} />}
                >
                  Agendar Visita
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>

      {/* Modal for Media Viewer */}
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedMedia.title}
              </ModalHeader>
              <ModalBody className="pb-6">
                {selectedMedia.type === "image" ? (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full max-h-96 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaPlay
                        size={48}
                        className="text-gray-400 mx-auto mb-2"
                      />
                      <p className="text-gray-600">
                        Video: {selectedMedia.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Haz clic para reproducir
                      </p>
                    </div>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ConsultoriosPage;
