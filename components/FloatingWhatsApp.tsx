"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254707666000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}