// src/components/precios/ComparisonTable.tsx
"use client"; // 👈 importante si usas Next.js con RSC

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";

// TIPADO
interface ComparisonRow {
  feature: string;
  pisamaModel: string;
  cuponeraModel: string;
}

// DATOS
const comparisonData: ComparisonRow[] = [
  {
    feature: "Flexibilidad",
    pisamaModel:
      "Total. Adapta tus horas semana a semana según tu flujo real de pacientes.",
    cuponeraModel:
      "Rígido. Te obliga a comprometerte con un número fijo de horas mensuales.",
  },
  {
    feature: "Forma de Pago",
    pisamaModel:
      "A mes vencido. Pagas solo por las horas que realmente utilizaste.",
    cuponeraModel:
      "Por adelantado. Pagas antes de usar, comprometiendo tu capital de trabajo.",
  },
  {
    feature: "Riesgo Financiero",
    pisamaModel:
      "Cero. Si tienes una semana tranquila o te vas de vacaciones, no pagas nada.",
    cuponeraModel:
      "Alto. Las horas que no usas en el mes se pierden. Es dinero perdido.",
  },
  {
    feature: "Sistema de Ahorro",
    pisamaModel:
      "Automático e inteligente. Tu ahorro aumenta a medida que tu práctica crece.",
    cuponeraModel:
      "Estático. El precio es fijo y no recompensa tu crecimiento profesional.",
  },
  {
    feature: "Compromiso",
    pisamaModel:
      "Ninguno. Tienes la libertad de usar el espacio tanto o tan poco como necesites.",
    cuponeraModel:
      "Mensual. Te ata a un costo fijo, tengas o no tengas pacientes.",
  },
];

export default function ComparisonTable(): JSX.Element {
  return (
    <div className="mx-auto mt-12 w-full max-w-5xl rounded-lg border border-gris-calido shadow-lg">
      <Table
        aria-label="Tabla comparativa del modelo de precios de Espacio Pisama vs. Paquetes fijos"
        selectionMode="none"
        classNames={{
          wrapper: "overflow-x-auto",
          th: "bg-crema-suave p-4 font-display text-lg text-marron-cafe text-left",
          td: "p-4 align-top font-sans text-marron-cafe/90",
          tr: "border-b border-gris-calido/50",
          base: "bg-crema-suave",
        }}
      >
        <TableHeader>
          <TableColumn className="w-[150px] sm:w-[200px] lg:w-[250px] p-4 font-display text-lg font-bold text-marron-cafe text-left">
            Característica
          </TableColumn>
          <TableColumn className="border-l border-gris-calido bg-terracotta-suave/10 p-4 font-display text-lg font-bold text-marron-cafe text-left">
            ✅ Nuestro Modelo Flexible
          </TableColumn>
          <TableColumn className="border-l border-gris-calido p-4 font-display text-lg font-bold text-marron-cafe text-left">
            Paquetes Fijos (Cuponeras)
          </TableColumn>
        </TableHeader>

        <TableBody>
          {comparisonData.map((row) => (
            <TableRow key={row.feature}>
              {/* Columna de Característica */}
              <TableCell className="p-4 align-top font-sans font-bold text-marron-cafe">
                {row.feature}
              </TableCell>

              {/* Columna de "Espacio Pisama" */}
              <TableCell className="border-l border-gris-calido bg-terracotta-suave/10 p-4 align-top">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-terracotta-suave" />
                  <span className="font-sans text-marron-cafe">
                    {row.pisamaModel}
                  </span>
                </div>
              </TableCell>

              {/* Columna de "Cuponeras" */}
              <TableCell className="border-l border-gris-calido p-4 align-top">
                <div className="flex items-start gap-3">
                  <FaTimesCircle className="mt-1 h-5 w-5 flex-shrink-0 text-marron-cafe/50" />
                  <span className="font-sans text-marron-cafe/80">
                    {row.cuponeraModel}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
