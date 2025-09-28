import { Link } from "@heroui/link";

const AvailabilityHeader = () => (
  <div className="mx-auto max-w-4xl text-center">
    <h1 className="font-display text-5xl font-bold text-primary pb-6">
      Control Total sobre tu Agenda: Disponibilidad en Tiempo Real
    </h1>
    <p className="mt-6 font-sans text-lg text-primary/90">
      Se acabó la incertidumbre de consultar por mensaje y esperar una respuesta
      para confirmar con tu paciente. Esta es tu herramienta para planificar con
      total certeza y autonomía tu agenda.
    </p>
    <p className="mt-4 font-sans text-lg text-primary/90">
      Aquí puedes ver, en vivo y en directo, cada espacio libre en Espacio
      Pisama. Los horarios que ves en blanco están disponibles y pueden ser
      tuyos al instante.
    </p>
    <p className="mt-4 font-sans text-lg text-primary/90">
      <Link
        isExternal
        href="https://reservas.pisama.uy/"
        className="font-semibold text-lg text-primary underline"
      >
        Registrándote en nuestra aplicación
      </Link>{" "}
      podes acceder ya mismo a reservarlo. ¡Así de fácil!
    </p>
  </div>
);

export default AvailabilityHeader;
