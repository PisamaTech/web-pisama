"use client";
import { useState } from "react";
import CtaSection from "@/components/homepage/CtaSection";
import MediaViewer from "@/components/consultorios/MediaViewer";
import InfoPanel from "@/components/consultorios/InfoPanel";
import { Tabs, Tab } from "@heroui/tabs";
import { consultoriosData } from "@/src/consultoriosData";

export default function ConsultoriosPage() {
  const consultorios = consultoriosData.filter(
    (s) => s.category === "consultorio"
  );
  const espaciosComunes = consultoriosData.filter(
    (s) => s.category === "comun"
  );

  const [activeTab, setActiveTab] = useState("consultorios");
  const [selectedSpace, setSelectedSpace] = useState(consultorios[0]);

  const listToDisplay =
    activeTab === "consultorios" ? consultorios : espaciosComunes;

  return (
    <>
      <section className="bg-crema-suave py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="font-display text-5xl font-bold text-marron-cafe">
              Conoce cada rincón de tu futuro espacio profesional.
            </h1>
            <p className="mt-6 font-sans text-lg text-marron-cafe/90">
              Diseñamos un entorno de calidez y profesionalismo para potenciar
              tu práctica. Explora nuestros consultorios y áreas comunes en
              detalle.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Columna de Navegación de Espacios */}
            <div className="mb-8 w-full md:mb-0 md:w-1/4">
              <Tabs
                aria-label="Categorías de Espacios"
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key)}
                fullWidth
                classNames={{
                  tabList: "bg-gris-calido/50 p-1",
                  cursor: "bg-crema-suave shadow-md",
                  tabContent:
                    "group-data-[selected=true]:text-terracotta-suave font-display font-bold",
                }}
              >
                <Tab key="consultorios" title="Consultorios" />
                <Tab key="comunes" title="Espacios Comunes" />
              </Tabs>
              <div className="mt-4 space-y-2">
                {listToDisplay.map((space) => (
                  <button
                    key={space.id}
                    onClick={() => setSelectedSpace(space)}
                    className={`w-full rounded-md p-3 text-left font-sans transition-colors ${selectedSpace.id === space.id ? "bg-terracotta-suave text-white" : "hover:bg-gris-calido/50"}`}
                  >
                    {space.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Columna Principal de Contenido */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <MediaViewer space={selectedSpace} />
                <InfoPanel space={selectedSpace} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Visita Virtual */}
      <section className="bg-gris-calido/40 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold text-marron-cafe">
              Recorre Espacio Pisama como si estuvieras aquí.
            </h2>
          </div>
          <div className="aspect-video mx-auto max-w-4xl overflow-hidden rounded-lg shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Visita Virtual Espacio Pisama"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
