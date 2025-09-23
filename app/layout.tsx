import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/EspacioPisama32.png",
//   },
// };

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
    logo: `${siteConfig.url}/EspacioPisama80.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Juan Paullier 1192",
      addressLocality: "Montevideo",
      addressRegion: "Montevideo",
      postalCode: "11200",
      addressCountry: "UY",
    },
    // Agrega tu teléfono si lo tienes
    telephone: "+598-95-961-360",
  };

  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
            <main>{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
