import Link from "next/link";
import { CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { FaCheckCircle } from "react-icons/fa";

import { Espacio } from "@/src/consultoriosData";

const CardInfo = ({ espacio }: { espacio: Espacio }) => (
  <CardFooter className="flex flex-col items-start gap-3">
    <Divider />
    <h3 className="text-xl text-primary font-bold">{espacio.nombre}</h3>
    <Chip
      variant="flat"
      color={espacio.tipo === "premium" ? "primary" : "secondary"}
      className="capitalize"
    >
      {espacio.tipo}
    </Chip>
    <p className="text-default">{espacio.descripcion}</p>
    {espacio.precio && (
      <p className="text-amber-950/80 font-semibold">{espacio.precio}</p>
    )}
    <ul className="text-sm text-default space-y-2">
      {espacio.caracteristicas.map((c, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <FaCheckCircle className="text-secondary" /> {c}
        </li>
      ))}
    </ul>
    <Button
      as={Link}
      href={`/disponibilidad?id=${espacio.id}`}
      color="primary"
      className="w-full mt-4"
    >
      Ver Disponibilidad
    </Button>
  </CardFooter>
);

export default CardInfo;
