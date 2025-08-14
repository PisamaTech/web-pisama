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
import PisamaLogo from "../public/EspacioPisama80.png";

export const Navbar = () => {
  const navLinks = [
    { name: "Consultorios", href: "/consultorios" },
    { name: "Precios", href: "/precios" },
    { name: "Disponibilidad", href: "/disponibilidad" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  const brandContent = (
    <NavbarBrand>
      <Image
        src={PisamaLogo}
        alt="Logo de Pisama"
        height={36}
        width={36}
        className="mr-2"
      />
      <p className="font-bold text-inherit">espacio PISAMA</p>{" "}
    </NavbarBrand>
  );

  return (
    <HeroUINavbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        {brandContent}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {brandContent}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* 2. Mapeamos tus enlaces para el menú de escritorio */}
        {navLinks.map((link) => (
          <NavbarItem
            key={link.href}
            // isActive={pathname === link.href} // Descomenta esto si usas un hook para la ruta activa
          >
            <Link
              color="foreground"
              href={link.href}
              // aria-current={pathname === link.href ? "page" : undefined} // Para accesibilidad
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* --- Botones de Acción (Login/Sign Up) --- */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="warning" href="/signup" variant="flat">
            Sign Up
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
              color="foreground" // Simplificamos el color, puedes personalizarlo
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
