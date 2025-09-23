// src/components/sistema-de-reservas/BeforeAfterSection.tsx
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const BeforeAfterSection = () => (
  <section className="pt-3 pb-20 bg-content2">
    <div className="container max-w-5xl mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:px-8">
      {/* El Método Antiguo */}
      <div className="w-5/6 mx-auto rounded-2xl border-2 border-danger/50 bg-danger/10 p-8 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="font-display text-2xl font-bold text-primary">
          El Laberinto de la Coordinación Manual
        </h2>
        <h3 className="font-display text-base font-bold text-secondary/80">
          El Modelo Antiguo
        </h3>
        <ul className="mt-6 space-y-4 font-sans text-marron-cafe/80">
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Consultas disponibilidad al consultorio y esperas.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Ofreces los horarios a tu paciente y esperas de nuevo.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>
              Tu paciente confirma. Vuelves a contactar al consultorio y...
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-danger/70" />
            <span>Disculpa, esa hora ya no está disponible.</span>
          </li>
        </ul>
      </div>
      {/* El Método Espacio Pisama */}
      <div className="w-5/6 mx-auto rounded-2xl border-2 border-success bg-success/5 p-8 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="font-display text-2xl font-bold text-primary">
          El Poder de la Certeza Instantánea
        </h2>
        <h3 className="font-display text-base font-bold text-secondary/80">
          El Modelo de Espacio Pisama
        </h3>
        <ul className="mt-6 space-y-4 font-sans text-marron-cafe">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>
              Mientras hablas con tu paciente, abres la agenda online.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>
              Ves la disponibilidad de todos los consultorios en tiempo real.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>Haces clic, reservas y el espacio es tuyo al instante.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
            <span>Cero fricción, máxima eficiencia y profesionalismo.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
