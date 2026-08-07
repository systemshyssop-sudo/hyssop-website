"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

const nakuruProjects = [
  {
    title: "Tumaini Estate – Nakuru",
    image: "/hyssop/gallery-1.png",
    location: "Nakuru",
    size: "50 x 100",
    price: "KSh 999,000",
    priceLabel: "Per 50 x 100 plot",
    tag: "Premium Gated Investment",
    badge: "Ready Title Deeds",
    desc: "A near-urban gated estate for buyers who want a quiet place to build, invest, or secure land close to Nakuru town. Tumaini Estate offers 50 x 100 plots in a location with strong lifestyle and long-term value potential.",
    note: "The project sits near Tumaini Resort, RVIST College, and the Nakuru–Njoro corridor, about 10 minutes from Nakuru CBD.",
    link: "/properties/plots-for-sale-in-tumaini-nakuru",
  },
  {
    title: "Bahati Greens – Nakuru",
    image: "/hyssop/bahatika.png",
    location: "Bahati, Nakuru",
    size: "50 x 100",
    price: "About KSh 399,000",
    priceLabel: "Per 50 x 100 plot",
    tag: "Lifestyle + Agribusiness",
    badge: "Affordable Land Investment",
    desc: "Affordable land in Nakuru for buyers looking for a practical entry into Nakuru property ownership. The project is ideal for land banking, future home plans, small-scale farming, or long-term investment.",
    note: "A good fit for buyers looking for accessible 50 x 100 plots in Nakuru County with room for future growth.",
    link: "/properties/plots-for-sale-in-bahati-nakuru",
  },
];

export default function PlotsForSaleInNakuruPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO IMAGE ONLY */}
      <section
        className="relative w-full overflow-hidden bg-[#f3f6f9]"
        style={{
          height: "46vh",
          minHeight: "360px",
        }}
      >
        <Image
          src="/hyssop/nakuru-hero.jpg"
          alt="Hyssop Properties land projects in Nakuru"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center lg:object-[center_45%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </section>

      {/* INTRO */}
      <section className="bg-gradient-to-b from-[#f8fbff] to-white px-6 pb-16 pt-20 text-center lg:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7ab62f]">
          Affordable Land for Sale in
        </p>

        <h1 className="mb-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Nakuru
        </h1>

        <p className="mx-auto max-w-2xl leading-7 text-gray-600">
          Nakuru continues to attract families, investors, and land buyers looking
          for space, accessibility, and long-term value. Explore Hyssop projects
          with clear pricing, guided ownership support, and a straightforward path
          from site visit to title deed.
        </p>
      </section>

      {/* NAKURU PROJECTS */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Featured Nakuru Projects
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Secure your place in Nakuru’s growth story
            </h2>
          </div>

          <div className="space-y-10">
            {nakuruProjects.map((project) => (
              <FeaturedProject key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* SOLD OUT */}
      <section className="bg-[#f8f9fa] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Track Record
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Completed & Sold Out
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 opacity-90 md:grid-cols-2">
            <SoldCard title="Amani Estate" image="/hyssop/sold/amani.png" />

            <SoldCard
              title="Lanet Oasis Phase 2"
              image="/hyssop/sold/lanet.png"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to invest in Nakuru?</h2>

        <p className="mb-6 text-gray-600">
          Talk to our team, book a site visit, and get guidance on the right plot
          for your plans.
        </p>

        <a
          href="https://wa.me/254707666000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-full bg-[#7ab62f] px-7 py-3 font-semibold text-[#0b1f52] transition hover:scale-105">
            Chat on WhatsApp
          </button>
        </a>
      </section>

      <ContactSection />
    </main>
  );
}

function FeaturedProject({
  title,
  image,
  desc,
  location,
  size,
  price,
  priceLabel,
  tag,
  badge,
  note,
  link,
}: {
  title: string;
  image: string;
  desc: string;
  location: string;
  size: string;
  price: string;
  priceLabel: string;
  tag: string;
  badge: string;
  note: string;
  link: string;
}) {
  return (
    <div className="grid items-stretch gap-8 rounded-[2rem] border border-[#e8eef5] bg-[#f8fafc] p-4 sm:p-6 lg:grid-cols-2 lg:p-8">
      {/* MOBILE: text/badges before image */}
      <div className="lg:hidden">
        <div className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
          {badge}
        </div>

        <div className="mb-4 rounded-[1.25rem] bg-[#0b1f52] px-4 py-4 text-white shadow-lg">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8cc63f]">
            Starting Price
          </p>

          <p className="text-xl font-bold leading-tight">{price}</p>

          <p className="mt-1 text-xs text-white/75">{priceLabel}</p>
        </div>
      </div>

      <Link href={link} className="block">
        <div className="relative h-[420px] w-full cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#f3f6f9] sm:h-[500px]">
          <Image
            src={image}
            alt={`${title} by Hyssop Properties`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={95}
            className="object-cover"
          />

          {/* DESKTOP ONLY: text on image */}
          <div className="absolute left-4 top-4 z-10 hidden flex-col items-start gap-2 lg:flex">
            <div className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm backdrop-blur-sm">
              {badge}
            </div>

            <div className="min-w-[210px] rounded-2xl bg-[#0b1f52]/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8cc63f]">
                Starting Price
              </p>

              <p className="text-xl font-bold leading-tight">{price}</p>

              <p className="mt-1 text-xs text-white/75">{priceLabel}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col justify-center lg:pl-4">
        <div className="mb-5 inline-flex w-fit rounded-full bg-[#8cc63f]/15 px-4 py-2 text-xs font-bold text-[#4c7d16]">
          {tag}
        </div>

        <h3 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h3>

        <p className="mb-6 leading-7 text-gray-600">{desc}</p>

        <div className="mb-7 grid gap-3 sm:grid-cols-3">
          <Fact label="Location" value={location} />
          <Fact label="Plot Size" value={size} />
          <Fact label="Price" value={price} />
        </div>

        <p className="mb-7 text-sm leading-6 text-gray-500">{note}</p>

        <Link href={link}>
          <button className="rounded-full bg-[#7ab62f] px-7 py-3 font-semibold text-[#0b1f52] transition hover:scale-105">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#e8eef5] bg-white p-4">
      <p className="mb-1 text-xs text-gray-500">{label}</p>
      <p className="font-bold text-[#0b1f52]">{value}</p>
    </div>
  );
}

function SoldCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white">
      {/* MOBILE: sold label before image */}
      <div className="px-4 pt-4 md:hidden">
        <span className="inline-flex rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          SOLD OUT
        </span>
      </div>

      <div className="relative h-[220px]">
        <Image
          src={image}
          alt={`${title} by Hyssop Properties`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={95}
          className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
        />
      </div>

      {/* DESKTOP/TABLET: sold label on image */}
      <div className="absolute right-3 top-3 hidden rounded bg-red-500 px-2 py-1 text-xs text-white md:block">
        SOLD OUT
      </div>

      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </div>
  );
}