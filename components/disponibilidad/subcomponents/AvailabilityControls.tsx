import { Select, SelectItem } from "@heroui/select";

interface SelectOption {
  id: string;
  title: string;
  disabled: boolean;
}

interface AvailabilityControlsProps {
  selectedConsultorio: string;
  handleViewChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectOptions: SelectOption[];
}

const AvailabilityControls = ({
  selectedConsultorio,
  handleViewChange,
  selectOptions,
}: AvailabilityControlsProps) => (
  <div className="mt-8 flex flex-col items-center gap-6 rounded-lg border border-gris-calido bg-white p-4 shadow-sm md:flex-row md:justify-between">
    <Select
      label="Selecciona una vista"
      selectedKeys={[selectedConsultorio]}
      onChange={handleViewChange}
      className="w-full md:w-auto md:min-w-[300px]"
      color="primary"
      size="lg"
      aria-label="Filtro de vista de disponibilidad"
      items={selectOptions}
      disabledKeys={selectOptions
        .filter((item) => item.disabled)
        .map((item) => item.id)}
    >
      {(item) => (
        <SelectItem key={item.id} textValue={item.title}>
          {item.title}
        </SelectItem>
      )}
    </Select>

    {/* Leyenda de Colores de Eventos */}
    <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 p-3 my-4 rounded-lg bg-slate-50 border border-slate-200">
      <div className="flex items-center">
        <div
          className="w-4 h-4 rounded-sm mr-2 border border-slate-400/50"
          style={{ backgroundColor: "#5b9bd5" }}
        />
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Reservas Fijas:</span> se repiten
          todas las semanas.
        </p>
      </div>
      <div className="flex items-center">
        <div
          className="w-4 h-4 rounded-sm mr-2 border border-slate-400/50"
          style={{ backgroundColor: "#92d050" }}
        />
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Reservas Eventuales:</span> uso
          único en esa fecha.
        </p>
      </div>
    </div>
  </div>
);

export default AvailabilityControls;
