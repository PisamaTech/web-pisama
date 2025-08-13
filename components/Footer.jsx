import Link from "next/link";
import Image from "next/image";
import LogoPisama from "../public/EspacioPisama80.png";
import { Divider } from "@heroui/divider";

// Para los iconos de redes sociales, la mejor práctica es instalar 'react-icons'.
// Ejecuta: npm install react-icons
// Luego puedes descomentar las siguientes líneas:
// import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SiteFooter() {
  return (
    <footer className="bg-marron-cafe text-crema-suave">
      {/* Separador Horizontal */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Divider className="mb-6" />
        <div className="grid gap-16 md:grid-cols-4">
          {/* Columna 1: Logo y Misión */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="block font-display text-2xl font-bold text-center"
            >
              espacio PISAMA
            </Link>
            <Image
              src={LogoPisama}
              alt="Logo de Pisama"
              className="my-4 mx-auto"
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
              <h2 className="mb-4 font-display font-bold uppercase tracking-wider">
                Navegación
              </h2>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link
                    href="/consultorios"
                    className="hover:text-terracotta-suave"
                  >
                    Consultorios
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-terracotta-suave">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disponibilidad"
                    className="hover:text-terracotta-suave"
                  >
                    Disponibilidad
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-terracotta-suave">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Separador Vertical */}
            <Divider orientation="vertical" className="hidden md:block" />

            {/* Columna: Soluciones para... */}
            <div>
              <h2 className="mb-4 font-display font-bold uppercase tracking-wider">
                Soluciones para
              </h2>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link
                    href="/para/psicologos"
                    className="hover:text-terracotta-suave"
                  >
                    Psicólogos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/para/coaches"
                    className="hover:text-terracotta-suave"
                  >
                    Coaches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/para/terapeutas"
                    className="hover:text-terracotta-suave"
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
              <h2 className="mb-4 font-display font-bold uppercase tracking-wider">
                Empresa
              </h2>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link
                    href="/sobre-nosotros"
                    className="hover:text-terracotta-suave"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="hover:text-terracotta-suave"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos-y-condiciones"
                    className="hover:text-terracotta-suave"
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
              {/* <FaLinkedin size={20} /> */}
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gris-calido hover:text-crema-suave"
            >
              {/* <FaInstagram size={20} /> */}
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
