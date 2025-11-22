// TIPADO: Exportamos el tipo para poder usarlo en otros componentes si es necesario

export type SiteConfig = typeof siteConfig;

// El "single source of truth" (la fuente única de verdad) para toda la información de tu sitio.
export const siteConfig = {
  name: "Espacio Pisama",
  description:
    "Descubre el alquiler de consultorios por hora en Montevideo, diseñado por un psicólogo para colegas. Ofrecemos autonomía total con una plataforma de reservas online, precios flexibles y un entorno profesional que cuida cada detalle.",
  url: "https://www.pisama.uy",
  ogImage: "https://www.pisama.uy/images/og-image.png", // URL de la imagen para redes sociales (crear esta imagen)

  // Enlaces principales y redes sociales
  links: {
    youtube: "https://www.youtube.com/channel/UCsyM5U-6FftYfTd34PAgsew", // Reemplaza con tu URL de YouTube
    instagram: "https://www.instagram.com/espacio.pisama", // Reemplaza si lo creas
    // linkedin: "https://www.linkedin.com/company/espacio-pisama", // Reemplaza si lo creas
    reservasApp: "https://reservas.pisama.uy",
  },

  // Información de contacto y ubicación
  contact: {
    address: "Juan Paullier 1192, Parque Rodó, Montevideo, Uruguay",
    email: "info@pisama.uy", // Reemplaza con tu email real
    phone: "+598 95 961 360", // Reemplaza con tu teléfono real
  },

  // Palabras clave principales para SEO
  keywords: [
    "alquiler de consultorios",
    "alquiler de consultorios en montevideo",
    "consultorios por hora en montevideo",
    "consultorios para psicólogos en montevideo",
    "espacio para terapeutas en montevideo",
    "alquier consultorios para terapias alternativas",
    "alquier consultorios con camilla",
    "alquier consultorios para masajes",
    "Montevideo",
    "Parque Rodó",
    "alquiler flexible",
    "reserva online de consultorios",
  ],

  // Elementos del menú de navegación principal
  navItems: [
    { label: "Consultorios", href: "/consultorios" },
    { label: "Disponibilidad", href: "/disponibilidad" },
    { label: "Precios", href: "/precios" },
    {
      label: "Soluciones",
      dropdown: [
        { label: "Para Psicólogos", href: "/soluciones/psicologos" },
        { label: "Para Nutricionistas", href: "/soluciones/nutricionistas" },
        {
          label: "Para Terapeutas Alternativos",
          href: "/soluciones/terapeutas-alternativos",
        },
        { label: "Ver Todas", href: "/soluciones" },
      ],
    },
    {
      label: "App de Reservas",
      dropdown: [
        { label: "Conoce la App", href: "/app-de-reservas" },
        { label: "Guía de Uso", href: "/guia-de-uso" },
      ],
    },
    {
      label: "Nosotros",
      dropdown: [
        { label: "Nuestra Filosofía", href: "/sobre-nosotros" },
        { label: "Blog", href: "/blog" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ],

  // Elementos de navegación del footer, organizados por columnas
  footerNav: {
    navegacion: [
      { label: "Consultorios", href: "/consultorios" },
      { label: "Precios", href: "/precios" },
      { label: "Disponibilidad", href: "/disponibilidad" },
      { label: "App de Reservas", href: "/app-de-reservas" },
      { label: "Blog", href: "/blog" },
    ],
    soluciones: [
      {
        label: "Para Psicólogos",
        href: "/soluciones/psicologos",
      },
      {
        label: "Para Nutricionistas",
        href: "/soluciones/nutricionistas",
      },
      {
        label: "Para Terapeutas Alternativos",
        href: "/soluciones/terapeutas-alternativos",
      },
      { label: "Ver Todas las Soluciones", href: "/soluciones" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "/sobre-nosotros" },
      { label: "Contacto", href: "/contacto" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
    ],
  },
};
