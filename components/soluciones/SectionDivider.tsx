import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface SectionDividerProps {
  text?: string;
  anchorId?: string;
}

export default function SectionDivider({
  text = "Conocé más sobre nuestra propuesta",
  anchorId = "contenido-detallado",
}: SectionDividerProps) {
  return (
    <div className="bg-content3 py-8">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <Link
          href={`#${anchorId}`}
          className="group inline-flex flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-primary"
        >
          <span className="text-sm font-medium">{text}</span>
          <FaChevronDown className="animate-bounce text-lg" />
        </Link>
      </div>
    </div>
  );
}
