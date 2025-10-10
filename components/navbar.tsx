"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbCalendarPlus, TbChevronDown } from "react-icons/tb";

import { siteConfig } from "@/config/site";

import PisamaLogo from "../public/images/Logo-EspacioPisama-Texturado-SinFondo-300px.png";

export const Navbar = () => {
  const router = useRouter();
  const brandContent = (
    <NavbarBrand as={Link} href="/">
      <Image
        src={PisamaLogo}
        alt="Logo de Pisama"
        height={45}
        width={45}
        className="mr-2"
      />
      <div className="flex flex-col items-center gap-0 text-primary/90">
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
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="center">
        {brandContent}
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="start">
        {brandContent}
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {siteConfig.navItems.map((item) =>
          item.dropdown ? (
            <Dropdown key={item.label}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-secondary font-semibold text-base"
                    endContent={<TbChevronDown size={16} />}
                    radius="sm"
                    variant="light"
                  >
                    {item.label}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={`Acciones para ${item.label}`}
                className="w-full text-center text-default"
                itemClasses={{ base: "gap-4" }}
                onAction={(key) => router.push(key as string)}
              >
                {item.dropdown.map((subItem) => (
                  <DropdownItem key={subItem.href}>
                    {subItem.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={item.href}>
              <Link
                color="secondary"
                href={item.href}
                className="hover:text-primary/80 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>

      {/* --- Botones de Acción --- */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href={siteConfig.links.reservasApp}
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
        {siteConfig.navItems.flatMap((item) =>
          item.dropdown
            ? item.dropdown.map((subItem) => (
                <NavbarMenuItem key={subItem.href}>
                  <Link className="w-full" href={subItem.href} size="lg">
                    {subItem.label}
                  </Link>
                </NavbarMenuItem>
              ))
            : [
                <NavbarMenuItem key={item.href}>
                  <Link className="w-full" href={item.href} size="lg">
                    {item.label}
                  </Link>
                </NavbarMenuItem>,
              ]
        )}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
