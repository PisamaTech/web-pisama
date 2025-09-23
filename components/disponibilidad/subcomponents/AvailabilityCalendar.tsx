import { Calendar, CalendarProps, dayjsLocalizer } from "react-big-calendar";
import { Spinner } from "@heroui/spinner";
import dayjs from "dayjs";

import { CalendarEvent } from "@/src/lib/getReservas";

// Definimos el tipo para el localizador
const localizer = dayjsLocalizer(dayjs);

// Configuramos el idioma a español
dayjs.locale("es");

// Props para el componente Calendar de react-big-calendar
type BigCalendarProps = CalendarProps<CalendarEvent, object>;

interface AvailabilityCalendarProps {
  loading: boolean;
  calendarProps: Omit<BigCalendarProps, "localizer">;
}

const AvailabilityCalendar = ({
  loading,
  calendarProps,
}: AvailabilityCalendarProps) => (
  <div className="h-[85vh] mx-auto max-w-4xl rounded-lg border-2 border-gris-calido bg-white p-2 text-marron-cafe shadow-lg sm:p-4">
    {loading ? (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner label="Cargando disponibilidad..." color="default" size="lg" />
      </div>
    ) : (
      <Calendar {...calendarProps} localizer={localizer} />
    )}
  </div>
);

export default AvailabilityCalendar;
