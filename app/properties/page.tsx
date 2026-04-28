"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const activeProjects = [
  {
    title: "Hyssop Acres – Malindi",
    image: "/hyssop/location.jpg",
    location: "Malindi",
    size: "1 Acre",
    price: "From KSh 400,000",
    tag: "Acre Investment",
    desc: "Own land in acres, not plots — built for patience, scale, farming, land banking, and long-term wealth.",
    link: "/properties/malindi",
  },
  {
    title: "Konza Ridge",
    image: "/hyssop/konza1.png",
    location: "Konza",
    size: "50 x 100",
    price: "From KSh 449,000",
    tag: "Growth Corridor",
    desc: "Position yourself near Kenya’s future tech hub with affordable ownership in a high-growth location.",
    link: "/properties/konza",
  },
  {
    title: "Bahati Greens – Nakuru",
    image: "/hyssop/bahatika.png",
    location: "Bahati, Nakuru",
    size: "50 x 100",
    price: "About KSh 399,000",
    tag: "Lifestyle + Agribusiness",
    desc: "Affordable land that works for you — combining lifestyle, farming potential, and long-term value.",
    link: "/properties/bahati",
  },
  {
    title: "Kitengela Lush 4",
    image: "/hyssop/kitengela1.png",
    location: "Kitengela",
    size: "50 x 100",
    price: "About KSh 899,000",
    tag: "Near Nairobi",
    desc: "Own near the city. Build at your pace in one of Nairobi’s fastest-growing satellite towns.",
    link: "/properties/lush4",
  },
];

export default function PropertiesPage() {
  return (
    <main className="bg-white text-[#0b1f52] min-h-screen">
      <Navbar />

      <div className="h-[80px]" />

      {/* HERO */}
      <section className="pt-20 pb-16 px-6 lg:px-12 text-center bg-gradient-to-b from-[#f8fbff] to-white">
        <p className="text-sm uppercase tracking-[0.25em] text-[#7ab62f] font-semibold mb-4">
          Land Investment Opportunities
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
          Our Properties
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto leading-7">
          Verified land for sale in Kenya’s high-growth locations — with clear
          pricing, trusted ownership support, and projects designed for both
          lifestyle and long-term value.
        </p>
      </section>

      {/* FEATURED PROJECT */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7ab62f] font-semibold mb-2">
              Featured Project
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Secure your place in Nakuru’s growth story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch bg-[#f8fafc] rounded-[2rem] p-4 sm:p-6 lg:p-8 border border-[#e8eef5]">
            <Link href="/properties/tumaini" className="block">
              <div className="relative w-full h-[420px] sm:h-[500px] rounded-[1.5rem] overflow-hidden bg-[#f3f6f9] cursor-pointer">
                <Image
                  src="/hyssop/gallery-1.png"
                  alt="Tumaini Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-2">
                  <div className="bg-white/95 backdrop-blur-sm text-[#0b1f52] px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                    Ready Title Deeds
                  </div>

                  <div className="bg-[#0b1f52]/90 backdrop-blur-sm text-white rounded-2xl px-4 py-3 shadow-lg min-w-[210px]">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#8cc63f] font-semibold mb-1">
                      Starting Price
                    </p>
                    <p className="text-xl font-bold leading-tight">
                      KSh 949,000
                    </p>
                    <p className="text-xs text-white/75 mt-1">
                      Per 50 x 100 plot
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex flex-col justify-center lg:pl-4">
              <div className="inline-flex w-fit bg-[#8cc63f]/15 text-[#4c7d16] px-4 py-2 rounded-full text-xs font-bold mb-5">
                Premium Gated Investment
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Tumaini Estate – Nakuru
              </h3>

              <p className="text-gray-600 mb-6 leading-7">
                A premium, near-urban gated investment designed for lifestyle
                living, secure ownership, and capital appreciation — located
                approximately 10 minutes from Nakuru CBD.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                <Fact label="Location" value="Nakuru" />
                <Fact label="Plot Size" value="50 x 100" />
                <Fact label="Price" value="KSh 949,000" />
              </div>

              <p className="text-sm text-gray-500 mb-7 leading-6">
                Strategically near Tumaini Resort, RVIST College, and the
                Nakuru–Njoro corridor.
              </p>

              <Link href="/properties/tumaini">
                <button className="bg-[#7ab62f] text-[#0b1f52] px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE PROJECTS */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7ab62f] font-semibold mb-3">
              Active Projects
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Choose your next land investment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeProjects.map((project) => (
              <PropertyCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* SOLD OUT */}
      <section className="bg-[#f8f9fa] px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7ab62f] font-semibold mb-3">
              Track Record
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Completed & Sold Out
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-90">
            <SoldCard
              title="Greenzone Apartments"
              image="/hyssop/sold/greenzone.png"
            />
            <SoldCard
              title="Lanet Oasis Phase 2"
              image="/hyssop/sold/lanet.png"
            />
            <SoldCard title="Amani Estate" image="/hyssop/sold/amani.png" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to invest in land?</h2>

        <p className="text-gray-600 mb-6">
          Speak to our team and secure your plot today.
        </p>

        <a href="https://wa.me/254707666000">
          <button className="bg-[#7ab62f] text-[#0b1f52] px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
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

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-[#e8eef5] rounded-2xl p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="font-bold text-[#0b1f52]">{value}</p>
    </div>
  );
}

function PropertyCard({
  title,
  image,
  desc,
  location,
  size,
  price,
  tag,
  link,
}: {
  title: string;
  image: string;
  desc: string;
  location: string;
  size: string;
  price: string;
  tag: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl transition overflow-hidden border border-[#e8eef5] group">
      <Link href={link} className="block">
        <div className="relative w-full h-[300px] bg-[#f3f6f9] overflow-hidden cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-2">
            <div className="bg-white/95 backdrop-blur-sm text-[#0b1f52] px-4 py-2 rounded-full text-xs font-bold shadow-sm">
              {tag}
            </div>

            <div className="bg-[#0b1f52]/90 backdrop-blur-sm text-white rounded-2xl px-4 py-3 shadow-lg min-w-[210px]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#8cc63f] font-semibold mb-1">
                Starting Price
              </p>
              <p className="text-lg font-bold leading-tight">{price}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 leading-tight">{title}</h3>

        <p className="text-gray-600 text-sm mb-5 leading-6">{desc}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#f8fafc] rounded-2xl p-3 border border-[#e8eef5]">
            <p className="text-xs text-gray-500 mb-1">Location</p>
            <p className="text-sm font-bold">{location}</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-3 border border-[#e8eef5]">
            <p className="text-xs text-gray-500 mb-1">Plot Size</p>
            <p className="text-sm font-bold">{size}</p>
          </div>
        </div>

        <Link href={link}>
          <button className="border border-[#0b1f52] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0b1f52] hover:text-white transition">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}

function SoldCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border relative group">
      <div className="relative h-[180px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>

      <div className="absolute top-3 right-3 text-xs bg-red-500 text-white px-2 py-1 rounded">
        SOLD OUT
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
    </div>
  );
}