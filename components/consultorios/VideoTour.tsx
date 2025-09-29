export default function VideoTour() {
  return (
    <>
      <div className="container max-w-4xl text-center mx-auto px-4 lg:px-8">
        <h2 className="font-display text-4xl font-bold text-primary">
          Entrá y Sentite como en Casa: Un Recorrido por Dentro
        </h2>
        <p className="mt-6 font-sans text-lg text-primary/90">
          Sabemos que una imagen no siempre es suficiente para transmitir una
          atmósfera. Por eso, preparamos este video para que puedas caminar con
          nosotros a través de cada espacio. Descubrí la calidez de la sala de
          espera, la privacidad de cada consultorio y la funcionalidad de
          nuestras áreas comunes. Queremos que te imagines acá, recibiendo a tus
          pacientes y disfrutando de un entorno profesional y tranquilo.
        </p>
      </div>
      <div className="container mx-auto mt-12 max-w-4xl px-4 lg:px-8">
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/_0-Eh-JvQys"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className="mt-4 text-center font-sans text-lg text-primary/80">
          Presioná play para explorar nuestras instalaciones.
        </p>
      </div>
    </>
  );
}
