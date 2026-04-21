"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function PropertiesPage() {
  return (
    <main className="bg-white text-[#0b1f52] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-[110px] pb-16 px-6 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Our Properties
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Verified land ownership opportunities in high-growth locations across Kenya.
        </p>
      </section>

      {/* ================= FEATURED (TUMAINI) ================= */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="mb-6 text-sm uppercase text-[#7ab62f] font-semibold">
            Featured Project
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* IMAGE */}
            <div className="relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/hyssop/gallery-1.png"
                alt="Tumaini Estate"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Tumaini Estate – Nakuru
              </h2>

              <p className="text-gray-600 mb-6 leading-7">
                A premium gated development just minutes from Nakuru CBD,
                designed for secure ownership, lifestyle living, and long-term growth.
              </p>

              <div className="text-sm text-gray-500 mb-6">
                📍 10 mins from Nakuru CBD • 50x100 plots • Ready Title Deeds
              </div>

              <Link href="/properties/tumaini">
                <button className="bg-[#7ab62f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                  View Project
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ACTIVE PROJECTS ================= */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-semibold mb-10 text-center">
            Active Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MALINDI */}
<PropertyCard
  title="Malindi Acres"
  image="/hyssop/location.jpg"
  desc="Own land in acres, not plots—built for patience, scale, and long-term wealth."
  details="📍 Malindi • 1 Acre • From KSh 400K"
  link="/properties/malindi"
/>

{/* LUSH 4 */}
<PropertyCard
  title="Lush 4 – Kitengela"
  image="/hyssop/kitengela1.png"
  desc="Own near the city. Build at your pace in one of Nairobi’s fastest-growing zones."
  details="📍 Kitengela • 50x100 • From KSh 899K"
  link="/properties/lush4"
/>

{/* BAHATI GREENS */}
<PropertyCard
  title="Bahati Greens – Nakuru"
  image="/hyssop/bahatika.png"
  desc="Affordable land that works for you—combining lifestyle, farming, and long-term value."
  details="📍 Bahati • 1/8 Acre • From KSh 399K"
  link="/properties/bahati"
/>

{/* KONZA */}
<PropertyCard
  title="Konza Ridge"
  image="/hyssop/konza1.png"
  desc="Position yourself near Kenya’s future tech hub with flexible ownership options."
  details="📍 Konza • 50x100 • From KSh 449K"
  link="/properties/konza"
/>

          </div>
        </div>
      </section>

      {/* ================= SOLD OUT ================= */}
      <section className="bg-[#f8f9fa] px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl font-semibold mb-10 text-center">
            Completed & Sold Out
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">

            <SoldCard
  title="Greenzone Apartments"
  image="/hyssop/sold/greenzone.png"
/>

<SoldCard
  title="Lanet Oasis Phase 2"
  image="/hyssop/sold/lanet.png"
/>

<SoldCard
  title="Amani Estate"
  image="/hyssop/sold/amani.png"
/>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to invest in land?
        </h2>
        <p className="text-gray-600 mb-6">
          Speak to our team and secure your plot today.
        </p>

        <a href="https://wa.me/254707666000">
          <button className="bg-[#7ab62f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold">
            Chat on WhatsApp
          </button>
        </a>
      </section>

      <ContactSection />
      <FloatingWhatsApp />
      <ChatbotWidget />
    </main>
  );
}

/* ================= COMPONENTS ================= */

function PropertyCard({ title, image, desc, details, link }: any) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative h-[260px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-600 text-sm mb-4">{desc}</p>

        <p className="text-xs text-gray-500 mb-4">{details}</p>

        <Link href={link}>
          <button className="border border-[#0b1f52] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#0b1f52] hover:text-white transition">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}

function SoldCard({ title, image }: any) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border relative group">
      
      {/* IMAGE */}
      <div className="relative h-[180px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* LABEL */}
      <div className="absolute top-3 right-3 text-xs bg-red-500 text-white px-2 py-1 rounded">
        SOLD OUT
      </div>

      {/* TITLE */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>

    </div>
  );
}