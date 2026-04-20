import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";


const testimonials = [
  {
    quote:
      "Siempre todo impecable! Estoy en Pisama desde el 2021 y mi experiencia con el espacio es sumamente positiva. Destaco y valoro mucho el empeño que Gastón le pone en mejorar y agilizar las gestiones de los diferentes espacios lo que hacen que Pisama se diferencie de otros lugares!",
    name: "Nicolás Michel",
    initials: "NM",
    title: "Psicólogo · desde 2021 en Espacio Pisama",
    timeAgo: "Hace 4 semanas",
    reviewUrl: "https://maps.app.goo.gl/TDjBeJFyiPTLcfyg9",
  },
  {
    quote:
      "Alquilé consultorio en Espacio Pisama durante tres años y mi experiencia fue sumamente positiva... es un espacio ideal para profesionales de la psicología: los consultorios son amplios, cómodos y están muy bien cuidados. Gastón y Ginanina siempre con la mejor disposición a la hora de gestionar el espacio, y también destaco el clima de respeto y colaboración entre colegas que en espacios compartidos es fundamental. Para mí fue una muy linda experiencia. Lo recomiendo totalmente.",
    name: "Noelia Prates Nuñez",
    initials: "NP",
    title: "Psicóloga · 3 años en Espacio Pisama",
    timeAgo: "Hace 6 meses",
    reviewUrl: "https://maps.app.goo.gl/uy8iBMA21BAqBSQp9",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-content3 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-primary">
            Las <span className="text-secondary">Palabras</span> de quienes
            Vivieron la Experiencia Pisama.
          </h2>
          <a
            href="https://share.google/qYPO2cOTOMcytb3NM"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-marron-cafe/60 px-4 py-1.5 text-sm text-crema-suave transition-opacity hover:opacity-80"
          >
            <span className="text-yellow-400">★</span>
            Reseñas reales de Google
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex h-full flex-col bg-crema-suave transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-primary/10"
            >
              <CardHeader className="flex items-start gap-4 p-6 pb-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-suave font-bold text-sm text-white">
                  {testimonial.initials}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-display text-lg font-bold text-marron-cafe leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-marron-cafe/60">
                    {testimonial.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-sm tracking-tight">
                      ★★★★★
                    </span>
                    <span className="text-xs text-marron-cafe/50">
                      {testimonial.timeAgo}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="flex-grow px-6 pb-4 pt-2">
                <blockquote className="border-l-4 border-terracotta-suave/40 pl-4 font-sans italic text-marron-cafe/90 text-sm leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </CardBody>

              <CardFooter className="px-6 pb-6 pt-0">
                <a
                  href={testimonial.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-marron-cafe/20 px-4 py-1.5 text-xs font-semibold text-marron-cafe/70 transition-colors hover:border-terracotta-suave hover:text-terracotta-suave"
                >
                  <span className="text-yellow-400">★</span>
                  Ver reseña en Google
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
