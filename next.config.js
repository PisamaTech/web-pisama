/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/consultorio-para-psicologos-alquiler",
        destination: "/soluciones/psicologos",
        permanent: true,
      },
      {
        source: "/blog/alquiler-consultorios-terapias-alternativas",
        destination: "/soluciones/terapeutas-alternativos",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
