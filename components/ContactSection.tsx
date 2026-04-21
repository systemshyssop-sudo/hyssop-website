"use client";

import { FaWhatsapp } from "react-icons/fa";

const offices = [
  {
    name: "Nairobi HQ",
    phone: "+254 707 666 000",
    address: "Hyssop Center, Ridgeways Springs, Kiambu Road",
  },
  {
    name: "Nakuru Office",
    phone: "+254 758 707050",
    address: "Tower One, 3rd Floor, Moi Rd",
  },
  {
    name: "Kisii Office",
    phone: "+254 758 555000",
    address: "Magsons Plaza, Opposite KCB Bank",
  },
  {
    name: "Malindi Office",
    phone: "+254 758 555000",
    address: "Next to Malindi Law Courts",
  },
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#081942] px-6 py-24 text-white lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,198,63,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            Contact Hyssop
          </span>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Let’s hold your hand to the perfect investment.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
            Reach us via phone, WhatsApp, or visit one of our offices for
            guided property investment support.
          </p>

          <p className="mt-6 font-medium text-[#a7d85f]">
            info@hyssopproperties.com
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="rounded-[24px] border border-white/10 bg-white/95 p-6 text-left text-[#0b1f52] shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-[#8cc63f]" />

              <h3 className="text-lg font-semibold">{office.name}</h3>

              <p className="mt-4 text-sm">
                <span className="font-medium">Phone:</span>{" "}
                <a href={`tel:${office.phone}`} className="hover:underline">
                  {office.phone}
                </a>
              </p>

              <p className="mt-3 text-sm leading-6 text-[#5e6b84]">
                <span className="font-medium text-[#0b1f52]">Address:</span>{" "}
                {office.address}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
          <a
            href="https://wa.me/254707666000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8cc63f] px-7 py-3.5 font-semibold text-[#0b1f52] shadow-[0_14px_34px_rgba(140,198,63,0.25)] transition-transform duration-300 hover:scale-[1.02]"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          <a
            href="tel:+254707666000"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0b1f52]"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}