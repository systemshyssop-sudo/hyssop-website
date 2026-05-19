"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const DEFAULT_WHATSAPP_NUMBER = "254707666000";
const NGATA_WHATSAPP_NUMBER = "254723032522";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  const whatsappNumber = pathname.includes("ngata")
    ? NGATA_WHATSAPP_NUMBER
    : DEFAULT_WHATSAPP_NUMBER;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}