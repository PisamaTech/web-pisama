import { Link } from "@heroui/link";

const AvailabilityHeader = () => (
  <div className="mx-auto mb-12 max-w-4xl text-center">
    <h1 className="font-display text-5xl font-bold text-marron-cafe">
      Disponibilidad en Tiempo Real
    </h1>
    <p className="mt-6 font-sans text-lg text-marron-cafe/90">
      Explora la ocupación de nuestros espacios. <br />
      Selecciona una vista para ver la disponibilidad en tiempo real.
      <br /> Puedes ver una vista diaria de <em>todos los consultorios</em> o la{" "}
      <em>disponibilidad semanal</em> de uno en particular.
      <br />
      Si ves un horario libre, está disponible para vos. <br />{" "}
      <Link
        isExternal
        href="https://reservas.pisama.uy/"
        className="font-semibold text-primary underline"
      >
        Registrándote en nuestra aplicación
      </Link>{" "}
      podes acceder ya mismo a reservarlo.
    </p>
  </div>
);

export default AvailabilityHeader;
