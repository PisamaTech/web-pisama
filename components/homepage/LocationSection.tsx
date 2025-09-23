import { FaBus, FaCar, FaMapMarkerAlt } from "react-icons/fa";

export default function LocationSection(): JSX.Element {
  return (
    <section className="bg-crema-suave py-20 sm:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Columna Izquierda: Mapa Embebido */}
          <div className="h-[450px] w-full overflow-hidden rounded-lg shadow-xl">
            <iframe
              title="Mapa de ubicación de Espacio Pisama"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0134501297057!2d-56.169923123518814!3d-34.90611197353255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81afa8928cc1%3A0x8bd901040c3bfb91!2sJuan%20Paullier%201192%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1757690720638!5m2!1ses!2suy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Columna Derecha: Texto Persuasivo */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary">
              Una <span className="text-secondary">Ubicación</span> que Eleva tu
              Práctica.
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-marron-cafe/90">
              Nos encontramos en el corazón de <strong>Parque Rodó</strong>, una
              de las zonas más prestigiosas y accesibles de Montevideo. Atender
              aquí no solo mejora tu imagen profesional, sino que también ofrece
              a tus pacientes una comodidad inigualable.
            </p>

            <div className="mt-8 space-y-6">
              {/* Beneficio 1 */}
              <div className="flex items-center gap-4 text-left">
                <FaBus className="h-8 w-8 flex-shrink-0 text-terracotta-suave" />
                <div>
                  <h3 className="font-display font-bold text-marron-cafe">
                    Conectividad Total
                  </h3>
                  <p className="font-sans text-marron-cafe/80">
                    A pasos de avenidas clave, garantizando un acceso fácil en
                    transporte público.
                  </p>
                </div>
              </div>
              {/* Beneficio 2 */}
              <div className="flex items-center gap-4 text-left">
                <FaCar className="h-8 w-8 flex-shrink-0 text-terracotta-suave" />
                <div>
                  <h3 className="font-display font-bold text-marron-cafe">
                    Estacionamiento Sencillo
                  </h3>
                  <p className="font-sans text-marron-cafe/80">
                    Amplias opciones de estacionamiento en las calles aledañas
                    para una llegada sin estrés.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 flex items-center justify-center lg:justify-start font-sans font-bold text-marron-cafe">
              <FaMapMarkerAlt className="mr-3 h-8 w-8 text-terracotta-suave" />
              Juan Paullier 1192, Parque Rodó, Montevideo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
