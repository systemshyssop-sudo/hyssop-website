"use client";

import { useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-[#0b1f52] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-[1.03]"
      >
        Chat with us
      </button>

      {open && (
        <div className="mt-3 w-72 rounded-[22px] border border-[#e7ecf2] bg-white p-5 text-[#0b1f52] shadow-[0_20px_45px_rgba(11,31,82,0.14)]">
          <p className="text-sm font-semibold">Hi there 👋</p>
          <p className="mt-2 text-sm leading-6 text-[#5d6a84]">
            Welcome to Hyssop Properties. How can we help you today?
          </p>
        </div>
      )}
    </div>
  );
}