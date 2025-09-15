import React from "react";
import { Calendar } from "@heroui/calendar"; // Importa Calendar de shadcn/ui
import { Button } from "@heroui/button"; // O tu componente Button
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuCalendarSync } from "react-icons/lu";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import dayjs from "dayjs";
import { ToolbarProps } from "react-big-calendar";
import {
  CalendarDate,
  fromDate,
  getLocalTimeZone,
  ZonedDateTime,
} from "@internationalized/date";

const CustomToolbar: React.FC<ToolbarProps> = (toolbar) => {
  const { date, onNavigate, label } = toolbar;

  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  const goToToday = () => {
    onNavigate("TODAY");
  };

  const handleDateChange = (newDate: CalendarDate | ZonedDateTime) => {
    if (newDate) {
      onNavigate("DATE", newDate.toDate(getLocalTimeZone()));
    }
  };

  return (
    <div className="rbc-toolbar flex items-center justify-between">
      {/* Botones de navegación */}
      <span className="rbc-btn-group">
        <Button
          isIconOnly
          variant="ghost"
          onPress={goToBack}
          className="flex items-center justify-center"
        >
          <FaChevronLeft size={14} />
        </Button>
        <Button variant="ghost" onPress={goToToday}>
          Hoy
        </Button>
        <Button
          isIconOnly
          variant="ghost"
          onPress={goToNext}
          className="flex items-center justify-center"
        >
          <FaChevronRight size={14} />
        </Button>
      </span>

      {/* Etiqueta (mes y año) */}
      <span className="rbc-toolbar-label">{label}</span>

      {/* DatePicker (usando Popover) */}
      <div className="flex items-center gap-2">
        <p className="text-sm ">Cambiar fecha: </p>
        <span className="rbc-btn-group">
          <Popover placement="bottom-end">
            <PopoverTrigger asChild>
              <Button variant="ghost" className="w-32">
                <div className="flex items-center justify-between gap-0">
                  <LuCalendarSync />{" "}
                  <span>{dayjs(date).format("DD/MM/YYYY")}</span>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                value={fromDate(date, getLocalTimeZone())}
                onChange={handleDateChange}
              />
            </PopoverContent>
          </Popover>
        </span>
      </div>
    </div>
  );
};

export default CustomToolbar;
