import ConsultorioCard from "@/components/consultorios/ConsultorioCards";
import { consultoriosData } from "@/src/consultoriosData";
import ConsultoriosSection from "./ConsultoriosSection";
import OtrasAreasSection from "./OtrasAreasSection";

export default function ConsultoriosPage() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Consultorios</h1>
          <p className="text-lg text-gray-600">
            Descubre los diferentes espacios que tenemos en{" "}
            <strong>Espacio Pisama</strong>. Haz click en las imágenes para
            recorrer cada consultorio en detalle.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultoriosData.map((espacio) => (
            <ConsultorioCard key={espacio.id} espacio={espacio} />
          ))}
        </section>
      </main>
      <OtrasAreasSection />
    </>
  );
}
