import Link from "next/link";
import Image from "next/image";
import LogoPisama from "../public/images/Logo-Espacio-Pisama-Texturado-300px.png";
import { Divider } from "@heroui/divider";
import { FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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
              <Image
                src={LogoPisama}
                alt="Logo de Pisama"
                className="mb-4 mt-[-10px] mx-auto hover:scale-105 ease-in-out transition-all duration-200"
                width={120}
                height={120}
              />
            </Link>
            <div className="text-center text-sm text-gris-calido mb-4 font-sans">
              <div>
                <span>Juan Paullier 1192</span>, <span>11200</span>{" "}
                <span>Montevideo</span>, <span>Departamento de Montevideo</span>
                .
              </div>
              <p>
                Horario: <span>Lun-Dom 7:00-23:00</span>
              </p>
              <p>
                Tel: <span>+598 95 961 360</span>
              </p>
            </div>
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
                    href="/app-de-reservas"
                    className="hover:text-secondary"
                  >
                    Conoce la App
                  </Link>
                </li>
                <li>
                  <Link href="/guia-de-uso" className="hover:text-secondary">
                    Guía de Uso
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
                  <Link href="/blog" className="hover:text-secondary">
                    Masajistas
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-secondary">
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
              href="tel:+5985961360"
              target="_blank"
              itemProp="telephone"
              itemScope
              itemType="http://schema.org/ContactPoint"
              rel="noopener noreferrer"
              aria-label="Phone"
              className="text-gris-calido hover:text-secondary"
            >
              <FaPhoneAlt size={22} />
            </a>
            <a
              href="https://wa.me/59895961360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="text-gris-calido hover:text-secondary"
            >
              <FaWhatsapp size={25} />
            </a>
            <a
              href="https://www.instagram.com/espacio.pisama/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gris-calido hover:text-secondary"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsyM5U-6FftYfTd34PAgsew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="text-gris-calido hover:text-secondary"
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
