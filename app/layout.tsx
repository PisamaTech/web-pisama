import "@/styles/globals.css";
import "photoswipe/dist/photoswipe.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import React from "react";

import SiteFooter from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

import { Providers } from "./providers";

export const metadata: Metadata = {
  icons: {
    icon: "/EspacioPisama32.png",
  },
  authors: [{ name: "Gastón Campo", url: siteConfig.url }],
  creator: "Gastón Campo",
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo e interior de ${siteConfig.name}`,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Espacio Pisama",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo-Espacio-Pisama-Texturado-300px.png`,
    image: [
      `${siteConfig.url}/images/consultorio1-1.webp`,
      `${siteConfig.url}/images/consultorio2-1.webp`,
      `${siteConfig.url}/images/consultorio3-1.webp`,
      `${siteConfig.url}/images/consultorio4-1.webp`,
      `${siteConfig.url}/images/consultorio5-1.webp`,
      `${siteConfig.url}/images/consultorio6-1.webp`,
    ],
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Juan Paullier 1192",
      addressLocality: "Montevideo",
      addressRegion: "Montevideo",
      postalCode: "11200",
      addressCountry: "UY",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "-34.906094",
      longitude: "-56.167494",
    },
    telephone: "+598-95-961-360",
    email: "info@pisama.uy",

    // --- NUEVAS PROPIEDADES SUGERIDAS ---

    // 1. Horario de Apertura
    openingHours: ["Mo-Su 07:00-23:00"],

    // 2. Rango de Precios
    priceRange: "$$", // Indica un rango de precios moderado. Usa de "$" a "$$".
    areaServed: "Montevideo",

    // 3. Conexión con Redes Sociales (¡Muy potente!)
    sameAs: [
      siteConfig.links.youtube,
      siteConfig.links.instagram, // Añade las URLs completas en tu siteConfig
    ],
  };

  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4C6SK93ENE"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4C6SK93ENE');
          `}
        </Script>
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <ScrollIndicator />
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="pt-[65px]">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
