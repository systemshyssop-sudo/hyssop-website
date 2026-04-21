"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

export default function TestimonialsPage() {
  const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "80.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
<section className="relative w-full">
  <div className="relative w-full">

    <Image
      src="/hyssop/eventcropped.png"
      alt="Hyssop title deed ceremony"
      width={1920}
      height={1080}
      priority
      className="w-full h-auto object-contain"
    />

    {/* WhatsApp CTA */}
    <div className="absolute bottom-6 right-6 z-10">
      <a
        href="https://wa.me/254707666000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:scale-105"
      >
        Chat on WhatsApp
      </a>
    </div>

  </div>
</section>

      {/* INTRO CARD */}
      <section className="relative z-10 px-6 pb-16 -mt-10 sm:-mt-12 md:-mt-14">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[28px] border border-[#e7ecf3] bg-white p-8 text-center shadow-[0_24px_60px_rgba(11,31,82,0.10)] sm:p-10 md:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl md:text-5xl">
              A record of promises fulfilled.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5b6880] sm:text-lg">
              Thousands of clients across Kenya and the diaspora have
              successfully acquired
              <span className="font-semibold text-[#0b1f52]">
                {" "}
                verified land and property
              </span>{" "}
              through Hyssop Properties.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION HEADING */}
      <section className="px-6 pt-6 pb-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Client moments
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Real ownership. Real milestones.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#61708a] sm:text-base">
            A curated collection of client journeys, title handovers, and the
            confidence that comes with dealing with Hyssop.
          </p>
        </div>
      </section>

      {/* GALLERY */}
<section className="px-4 sm:px-6 pb-24">
  <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
    {images.map((img, i) => (
      <div
        key={i}
        className="group rounded-[22px] border border-[#e7ecf3] bg-white p-3 shadow-[0_12px_30px_rgba(11,31,82,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,31,82,0.10)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#f3f5f8]">
          <Image
  src={`/hyssop/testimonials/${img}`}
  alt={`Hyssop client ${i + 1}`}
  fill
  quality={85}
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
/>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>
    </main>
  );
}