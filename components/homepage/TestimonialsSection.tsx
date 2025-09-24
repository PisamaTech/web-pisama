import { Avatar } from "@heroui/avatar";
import { Card, CardHeader, CardBody } from "@heroui/card"; // Usamos los primitivos Card y Avatar

// Estructura de datos para los testimonios (esto no cambia)
const testimonials = [
  {
    quote:
      "La autonomía que me da Espacio Pisama es impagable. Poder reservar una hora sobre la marcha desde la web y saber que puedo entrar con mi código me cambió la forma de organizar mi semana. El ambiente es siempre impecable y mis pacientes lo notan.",
    name: "Ana López",
    title: "Psicóloga Clínica",
    avatar: "https://i.pravatar.cc/150?u=ana-lopez",
  },
  {
    quote:
      "Buscaba un lugar que fuera profesional pero a la vez acogedor. La calidez del espacio y la tranquilidad que se respira aquí son perfectas para mis sesiones de coaching. La ubicación es, sin duda, un gran plus.",
    name: "Martín Rodríguez",
    title: "Coach Ontológico",
    avatar: "https://i.pravatar.cc/150?u=martin-rodriguez",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gris-calido/40 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Título de la Sección */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-marron-cafe">
            Quienes confían en nosotros lo dicen mejor.
          </h2>
        </div>

        {/* Grilla de Testimonios */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2">
          {testimonials.map((testimonial) => (
            // 1. Usamos el componente <Card> como contenedor principal
            <Card
              key={testimonial.name}
              className="flex h-full flex-col bg-crema-suave shadow-lg"
            >
              {/* 2. En el CardHeader, colocamos el Avatar y la información del autor */}
              <CardHeader className="flex items-center gap-4 p-6">
                <Avatar
                  src={testimonial.avatar}
                  name={testimonial.name}
                  classNames={{
                    img: "ring-2 ring-terracotta-suave/50",
                  }}
                />
                <div className="flex flex-col">
                  <p className="font-display text-lg font-bold text-marron-cafe">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-terracotta-suave">
                    {testimonial.title}
                  </p>
                </div>
              </CardHeader>

              {/* 3. En el CardBody, colocamos la cita del testimonio */}
              <CardBody className="flex-grow p-6 pt-0">
                <blockquote className="border-l-4 border-gris-calido pl-4 font-sans italic text-marron-cafe/90">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
