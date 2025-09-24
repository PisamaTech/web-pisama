import { Metadata } from "next";
import Link from "next/link";
import { JSX } from "react";

// --- SEO: Metadatos de la Página ---
export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio | Espacio Pisama",
  description:
    "Consulta nuestras políticas de uso, reservas, cancelaciones, reagendamientos y facturación. Nuestro compromiso con una relación profesional transparente.",
};

export default function TerminosYCondicionesPage(): JSX.Element {
  return (
    <main className="bg-background py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <header className="mb-12 border-b-2 border-content2 pb-8 text-center">
          <h1 className="font-display text-5xl font-bold text-primary-500">
            Términos y Condiciones
          </h1>
          <p className="mt-4 font-sans text-lg text-foreground/80">
            Nuestro compromiso con una relación profesional, justa y
            transparente.
          </p>
        </header>

        <article
          // Tailwind Typography para un estilizado de texto profesional
          className="prose prose-lg mx-auto 
                       prose-headings:font-display prose-headings:text-primary-500
                       prose-p:font-sans prose-p:text-foreground/90
                       prose-strong:text-primary-500
                       prose-a:text-secondary-500 prose-a:font-semibold hover:prose-a:text-secondary-600
                       prose-li:font-sans prose-li:text-foreground/90"
        >
          <p className="text-sm text-foreground/60">
            Última actualización: 21/9/2025
          </p>
          <p>
            Bienvenido/a a Espacio Pisama. Al acceder a nuestro sitio web
            (&quot;pisama.uy&quot;), utilizar nuestra plataforma de reservas
            online (&quot;reserva.pisama.uy&quot;) o hacer uso de nuestros
            espacios físicos, usted (&quot;el Usuario&quot;) acepta y se
            compromete a cumplir los siguientes Términos y Condiciones. Por
            favor, léalos detenidamente.
          </p>

          <h2>1. Definiciones</h2>
          <ul>
            <li>
              <strong>Servicio:</strong> Se refiere al alquiler por horas de
              consultorios y espacios comunes, así como al uso de la Plataforma
              de reservas proporcionada por Espacio Pisama.
            </li>
            <li>
              <strong>Usuario:</strong> Toda persona registrada y habilitada
              para utilizar el Servicio.
            </li>
            <li>
              <strong>Plataforma:</strong> La aplicación web proporcionada por
              Espacio Pisama para la gestión de reservas, facturación y perfil
              de usuario.
            </li>
            <li>
              <strong>Reserva Eventual:</strong> Una reserva única para un día y
              hora específicos.
            </li>
            <li>
              <strong>Reserva Fija:</strong> Una reserva recurrente que se
              repite semanalmente en el mismo día y hora.
            </li>
          </ul>

          <h2>2. Cuenta de Usuario y Uso de la Plataforma</h2>
          <ul>
            <li>
              Para acceder al Servicio, el Usuario debe crear una cuenta en la
              Plataforma, proporcionando información veraz y actualizada.
            </li>
            <li>
              El Usuario es el único responsable de mantener la confidencialidad
              de su contraseña y de toda la actividad que ocurra en su cuenta.
            </li>
            <li>
              El uso de la Plataforma está destinado exclusivamente a la gestión
              de reservas para la práctica profesional del Usuario.
            </li>
          </ul>

          <h2>3. Política de Reservas</h2>
          <ul>
            <li>
              Todas las reservas se realizan exclusivamente a través de la
              Plataforma y están sujetas a la disponibilidad mostrada en tiempo
              real.
            </li>
            <li>
              Una reserva se considera confirmada únicamente cuando ha sido
              procesada con éxito por la Plataforma y aparece en la sección
              &quot;Mis Reservas&quot; del perfil del Usuario.
            </li>
            <li>
              Las Reservas Fijas tienen un período de vigencia inicial de 4
              (cuatro) meses, con posibilidad de renovación sujeta a
              disponibilidad.
            </li>
          </ul>

          <h2>4. Política de Cancelación y Reagendamiento</h2>
          <p>
            Hemos diseñado una política flexible que entiende la naturaleza de
            nuestra profesión:
          </p>
          <ul>
            <li>
              <strong>Cancelación Gratuita:</strong> El Usuario puede cancelar
              cualquier reserva **sin costo alguno** si lo hace con **más de 24
              horas de antelación** a la hora de inicio de la misma.
            </li>
            <li>
              <strong>Cancelación con Penalización:</strong> Si una reserva se
              cancela con **menos de 24 horas de antelación**, se considerará
              &quot;Penalizada&quot;. La tarifa correspondiente a dicha hora
              será incluida en la facturación del Usuario.
            </li>
            <li>
              <strong>Reagendamiento de Horas Penalizadas:</strong> Una reserva
              reserva **sin costo adicional**. Este reagendamiento debe
              &quot;Penalizada&quot; otorga al Usuario el derecho a reagendar
              esa misma realizarse dentro de un plazo de **6 (seis) días** a
              partir de la fecha y hora de la reserva original cancelada. Pasado
              ese plazo, el derecho a reagendamiento se pierde.
            </li>
          </ul>

          <h2>5. Precios, Facturación y Descuentos</h2>
          <ul>
            <li>
              Las tarifas vigentes para cada tipo de consultorio están
              publicadas en la página de <Link href="/precios">Precios</Link>.
              Espacio Pisama se reserva el derecho de modificar dichas tarifas,
              notificando a los usuarios con una antelación razonable.
            </li>
            <li>
              La facturación se genera de forma automática según la modalidad de
              pago elegida por el Usuario.
            </li>
            <li>
              El pago deberá realizarse en un plazo no mayor a 10 días después
              de emitida la factura.
            </li>
            <li>
              <strong>Descuentos por Volumen:</strong> El sistema aplicará
              descuentos automáticos basados en el número total de horas
              utilizadas por el Usuario dentro de una semana natural (lunes a
              domingo), tal como se detalla en nuestra página de Precios.
            </li>
          </ul>

          <h2>6. Normas de Uso del Espacio Físico</h2>
          <p>
            El respeto por el espacio y por los colegas es fundamental para
            nuestra comunidad.
          </p>
          <ul>
            <li>
              <strong>Puntualidad:</strong> El Usuario se compromete a respetar
              estrictamente los horarios de inicio y fin de sus reservas.
            </li>
            <li>
              <strong>Cuidado del Espacio:</strong> El Usuario es responsable de
              dejar el consultorio en las mismas condiciones de orden y limpieza
              en las que lo encontró.
            </li>
            <li>
              <strong>Conducta Profesional:</strong> El Usuario es el único
              responsable de su práctica profesional y de la relación con sus
              pacientes.
            </li>
            <li>
              <strong>Confidencialidad:</strong> Se debe mantener la
              confidencialidad en todo momento, respetando la privacidad de
              todos.
            </li>
          </ul>

          <h2>7. Limitación de Responsabilidad</h2>
          <ul>
            <li>
              Espacio Pisama no se hace responsable por la práctica profesional
              de los Usuarios, ni por cualquier evento, disputa o consecuencia
              que ocurra entre el Usuario y sus pacientes o clientes dentro de
              las instalaciones.
            </li>
            <li>
              No nos hacemos responsables por la pérdida, daño o robo de objetos
              personales u objetos de trabajo (incluyendo camillas, equipos,
              etc.) que el Usuario ingrese a las instalaciones.
            </li>
          </ul>

          <h2>8. Nuestro Compromiso con tu Privacidad</h2>
          <p>
            Tu privacidad y la de tus pacientes son de máxima importancia para
            nosotros. Al utilizar nuestra Plataforma, nos confías cierta
            información. A continuación, te explicamos de forma transparente qué
            datos recopilamos, para qué los usamos y cómo los protegemos.
          </p>
          <ul>
            <li>
              <strong>Qué Datos Recopilamos:</strong> Recopilamos únicamente la
              información necesaria para el funcionamiento del servicio:
              <ul>
                <li>
                  <strong>Datos de tu Cuenta:</strong> Tu nombre, apellido,
                  email y teléfono.
                </li>
                <li>
                  <strong>Historial de Actividad:</strong> Tus reservas,
                  cancelaciones, reagendamientos e historial de facturación.
                </li>
                <li>
                  En ningún caso recopilamos ni almacenamos información sensible
                  de tus pacientes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Para Qué Usamos tus Datos:</strong> Tu información se
              utiliza exclusivamente para:
              <ul>
                <li>Gestionar tus reservas y mostrarte tu historial.</li>
                <li>Procesar la facturación de forma automática y precisa.</li>
                <li>
                  Enviarte notificaciones importantes sobre tus reservas, tu
                  cuenta o cambios en el servicio.
                </li>
              </ul>
            </li>
            <li>
              <strong>Seguridad y Confidencialidad:</strong> Nos tomamos la
              seguridad muy en serio.
              <ul>
                <li>
                  <strong>
                    Tu información personal no será vendida, compartida ni
                    alquilada a terceros bajo ninguna circunstancia.
                  </strong>
                </li>
                <li>
                  Utilizamos las prácticas de seguridad estándar de la industria
                  y nos apoyamos en la infraestructura segura de Supabase para
                  proteger tus datos contra accesos no autorizados.
                </li>
                <li>
                  Tú siempre tienes el control para actualizar tus datos
                  personales desde la sección &quot;Perfil&quot; de tu cuenta.
                </li>
              </ul>
            </li>
          </ul>

          <h2>9. Modificación de los Términos</h2>
          <p>
            Espacio Pisama se reserva el derecho de modificar estos Términos y
            Condiciones en cualquier momento. Las modificaciones serán efectivas
            desde su publicación en el sitio web.
          </p>

          <h2>10. Contacto</h2>
          <p className="pb-6">
            Para cualquier duda sobre estos Términos, por favor, contáctanos a
            través de <a href="info@pisama.uy">info@pisama.uy</a> o visita
            nuestra página de <Link href="/contacto">Contacto</Link>.
          </p>
        </article>
      </div>
    </main>
  );
}
