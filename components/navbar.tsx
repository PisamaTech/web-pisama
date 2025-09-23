import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

import { TbCalendarPlus } from "react-icons/tb";

import PisamaLogo from "../public/images/Logo-EspacioPisama-Texturado-SinFondo-300px.png";

export const Navbar = () => {
  const navLinks = [
    { name: "Consultorios", href: "/consultorios" },
    { name: "Precios", href: "/precios" },
    { name: "Disponibilidad", href: "/disponibilidad" },
    { name: "Reservas", href: "/sistema-de-reservas" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  const brandContent = (
    <NavbarBrand as={Link} href="/">
      <Image
        src={PisamaLogo}
        alt="Logo de Pisama"
        height={45}
        width={45}
        className="mr-2"
      />
      <div className="flex flex-col items-center gap-0 text-primary/60">
        <p className="text-sm mb-[-4px]">espacio</p>
        <p>PISAMA</p>
      </div>
    </NavbarBrand>
  );

  return (
    <HeroUINavbar
      isBordered
      className="bg-content1 text-secondary font-semibold"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        {brandContent}
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="start">
        {brandContent}
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {/* 2. Mapeamos tus enlaces para el menú de escritorio */}
        {navLinks.map((link) => (
          <NavbarItem
            key={link.href}
            // isActive={pathname === link.href} // Descomenta esto si usas un hook para la ruta activa
          >
            <Link
              color="secondary"
              href={link.href}
              // aria-current={pathname === link.href ? "page" : undefined} // Para accesibilidad
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* --- Botones de Acción --- */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="https://reservas.pisama.uy"
            variant="solid"
            startContent={<TbCalendarPlus size={18} />}
            className="px-2 hover: transition-transform duration-200 hover:scale-105"
          >
            Reservar ahora
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* --- Contenido del Menú Móvil --- */}
      <NavbarMenu>
        {/* 3. Mapeamos tus mismos enlaces para el menú móvil */}
        {navLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="primary" // Simplificamos el color, puedes personalizarlo
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
