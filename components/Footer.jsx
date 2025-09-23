import Link from "next/link";
import Image from "next/image";
import LogoPisama from "../public/images/Logo-Espacio-Pisama-Texturado-300px.png";
import { Divider } from "@heroui/divider";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-marron-cafe text-crema-suave">
      {/* Separador Horizontal */}
      <Divider />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-4">
          {/* Columna 1: Logo y Misión */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="block text-secondary-400 text-2xl font-bold text-center"
            >
              espacio PISAMA
            </Link>
            <Image
              src={LogoPisama}
              alt="Logo de Pisama"
              className="my-4 mx-auto"
              width={120}
              height={120}
            />
            <p className="font-sans text-sm text-gris-calido ml-2">
              Un espacio cálido y profesional en Parque Rodó, diseñado para
              potenciar tu práctica con autonomía y flexibilidad.
            </p>
          </div>

          {/* Columnas de Enlaces */}
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:flex md:justify-around">
            {/* Columna: Navegación Principal */}
            <div>
              <h2 className="mb-4 text-secondary-400 font-bold uppercase tracking-wider">
                Navegación
              </h2>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link href="/consultorios" className="hover:text-secondary">
                    Consultorios
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-secondary">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/disponibilidad" className="hover:text-secondary">
                    Disponibilidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sistema-de-reservas"
                    className="hover:text-secondary"
                  >
                    Reservas
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-secondary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Separador Vertical */}
            <Divider orientation="vertical" className="hidden md:block" />

            {/* Columna: Soluciones para... */}
            <div>
              <h2 className="mb-4 text-secondary-400 font-bold uppercase tracking-wider">
                Soluciones para
              </h2>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link
                    href="/blog/consultorio-para-psicologos-alquiler"
                    className="hover:text-secondary"
                  >
                    Psicólogos
                  </Link>
                </li>
                <li>
                  <Link href="/para/coaches" className="hover:text-secondary">
                    Coaches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/para/terapeutas"
                    className="hover:text-secondary"
                  >
                    Terapeutas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Separador Vertical */}
            <Divider orientation="vertical" className="hidden md:block" />

            {/* Columna: Empresa y Legal */}
            <div>
              <h2 className="mb-4 text-secondary-400 font-bold uppercase tracking-wider">
                Empresa
              </h2>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-secondary">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-secondary">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos-y-condiciones"
                    className="hover:text-secondary"
                  >
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separador Horizontal */}
        <Divider className="my-6" />
        {/* Barra Inferior: Copyright y Redes Sociales */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="font-sans text-sm text-gris-calido">
            &copy; {new Date().getFullYear()} Espacio Pisama™. Todos los
            derechos reservados.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gris-calido hover:text-crema-suave"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gris-calido hover:text-crema-suave"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
