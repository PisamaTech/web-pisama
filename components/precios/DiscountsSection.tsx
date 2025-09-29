"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import React from "react";

interface Discount {
  horas: string;
  descuento: string;
  premium: string;
  estandar: string;
}

const discounts: Discount[] = [
  {
    horas: "1 a 3 hs",
    descuento: "$0",
    premium: "$250/hora",
    estandar: "$200/hora",
  },
  {
    horas: "4 a 7 hs",
    descuento: "-$20",
    premium: "$230/hora",
    estandar: "$180/hora",
  },
  {
    horas: "8 a 11 hs",
    descuento: "-$40",
    premium: "$210/hora",
    estandar: "$160/hora",
  },
  {
    horas: "12 a 15 hs",
    descuento: "-$60",
    premium: "$190/hora",
    estandar: "$140/hora",
  },
  {
    horas: "16 a 19 hs",
    descuento: "-$80",
    premium: "$170/hora",
    estandar: "$120/hora",
  },
  {
    horas: "20 a 24 hs",
    descuento: "-$100",
    premium: "$150/hora",
    estandar: "$100/hora",
  },
];

export default function DiscountsSection() {
  return (
    <section className="w-full flex flex-col items-center pb-12">
      {/* Título */}
      <h2 className="text-2xl font-bold text-marron-cafe mb-4 text-center">
        Tabla de descuentos acumulativos
      </h2>
      <p className="text-base text-terracotta-suave font-medium mb-4 text-center">
        Cada 4 horas semanales que reserves, se descuentan $20 del costo por
        hora
      </p>

      {/* Tabla */}
      <Table
        aria-label="Tabla de descuentos acumulativos"
        className="max-w-3xl border border-gris-calido rounded-xl shadow-lg"
      >
        <TableHeader className="bg-marron-cafe">
          <TableColumn className="text-default text-center">
            Horas/semana
          </TableColumn>
          <TableColumn className="text-default text-center">
            Descuento/hora
          </TableColumn>
          <TableColumn className="text-default text-center">
            Consultorios Premium
          </TableColumn>
          <TableColumn className="text-default text-center">
            Consultorio Estándar
          </TableColumn>
        </TableHeader>
        <TableBody>
          {discounts.map((row, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-gris-calido"
              } hover:bg-terracotta-suave/20 hover:text-crema-suave transition-colors`}
            >
              <TableCell className="text-center text-marron-cafe font-semibold">
                {row.horas}
              </TableCell>
              <TableCell className="text-center text-terracotta-suave font-bold">
                {row.descuento}
              </TableCell>
              <TableCell className="text-center text-marron-cafe">
                {row.premium}
              </TableCell>
              <TableCell className="text-center text-marron-cafe">
                {row.estandar}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
