import React from "react";
import { Link } from "@heroui/link";
import { WhatsappIcon } from "@/components/icons";

export const WhatsAppButton = () => {
  return (
    <Link
      isExternal
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg/50 hover:bg-[#128C7E] hover:scale-[1.10] transition-all duration-300 flex items-center justify-center"
      href="https://wa.me/59895961360"
    >
      <WhatsappIcon size={34} />
    </Link>
  );
};
