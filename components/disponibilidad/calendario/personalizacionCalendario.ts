import dayjs from "dayjs";
import { DateLocalizer } from "react-big-calendar";

export const calendarMessages = {
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  allDay: "Todo el día",
  week: "Semana",
  work_week: "Semana laboral",
  day: "Día",
  month: "Mes",
  previous: "⬅️ Anterior",
  next: "Siguiente ➡️",
  yesterday: "Ayer",
  tomorrow: "Mañana",
  today: "⬇️ Hoy",
  agenda: "Agenda",

  noEventsInRange: "No hay eventos en este rango.",
  /**
   * params {total} count of remaining events
   * params {remainingEvents} remaining events
   * params {events} all events in day
   */
  showMore: (total: any) => `+${total} más`,
};

const capitalizeFirstLetter = (string: string) => {
  if (!string) {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const miFormatoEncabezadoDiaDayjs = (
  date: Date,
  culture: string | undefined,
  localizer: DateLocalizer | undefined
) => {
  if (!localizer) {
    return "";
  }
  const formatoFecha = localizer.format(date, "dddd, D [de] MMMM", culture); // Formato base: "lunes, 20 de febrero"
  const partes = formatoFecha.split(", "); // Separar día de la semana y el resto: ["lunes", "20 de febrero"]
  const diaSemanaCapitalizado = capitalizeFirstLetter(partes[0]); // Capitalizar "lunes" -> "Lunes"
  const restoFechaPartes = partes[1].split(" de "); // Separar día del mes y mes: ["20", "febrero"]
  const diaMes = restoFechaPartes[0]; // "20"
  const mesSinCapitalizar = restoFechaPartes[1]; // "febrero"
  const mesCapitalizado = capitalizeFirstLetter(mesSinCapitalizar); // Capitalizar "febrero" -> "Febrero"
  const restoFechaCapitalizado = `${diaMes} de ${mesCapitalizado}`; // Reconstruir el resto: "20 de Febrero"

  return `${diaSemanaCapitalizado}, ${restoFechaCapitalizado}`; // Reconstruir la cadena final: "Lunes, 20 de Febrero"
};

// Función para formatear el encabezado del día
const customDayFormat = (
  date: string | number | Date | dayjs.Dayjs | null | undefined
) => {
  const dia = capitalizeFirstLetter(dayjs(date).format("dddd"));
  const resto = dayjs(date).format(" D");

  return dia + resto;
}; // "Lunes 10"

export const formatosPersonalizadosDayjs = {
  dayHeaderFormat: miFormatoEncabezadoDiaDayjs,
  dayFormat: customDayFormat,
};
