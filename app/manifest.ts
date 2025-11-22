import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Espacio PISAMA - Alquiler de Consultorios en Montevideo",
    short_name: "PISAMA",
    description:
      "Alquiler de consultorios por hora en Parque Rodó, Montevideo. Reserva online, precios flexibles y ambiente profesional.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5C4033", // marron-cafe - color primario de la marca
    icons: [
      {
        src: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
