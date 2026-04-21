"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/bahati";

const galleryImages = [
  `${base}/gallery-1.png`,
  `${base}/gallery-2.jpg`,
  `${base}/gallery-3.jpg`,
  `${base}/gallery-4.jpg`,
  `${base}/gallery-5.png`,
];

export default function BahatiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroSrc = useMemo(() => `${base}/bahati-hero.png`, []);
  const locationSrc = useMemo(() => `${base}/location1.png`, []);
  const droneThumbSrc = useMemo(() => `${base}/bahati-drone-thumb.png`, []);
  const droneVideoSrc = useMemo(() => `${base}/drone.mp4`, []);

  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[480px] w-full overflow-hidden bg-[#e9edf3]">
          <img
            src={heroSrc}
            alt="Bahati Greens – Nakuru"
            className="block h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 z-20 flex items-start pt-20">
            <div className="inline-block px-6 lg:px-8">
              <div
                className="ml-2 w-[420px] max-w-[calc(100vw-3rem)] rounded-[24px] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:ml-4 md:px-6 md:py-6"
                style={{ backgroundColor: "rgba(11, 31, 82, 0.88)" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8cc63f]">
                  BAHATI GREENS – NAKURU
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#8cc63f]" />

                <h1 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
                  Affordable land that works for you
                </h1>

                <p className="mt-4 max-w-[460px] text-sm leading-6 text-white/90 md:text-base">
                  Bahati Greens offers ready-title 1/8 acre plots in Nakuru’s
                  growing Bahati area for buyers who want flexible ownership,
                  practical land use, and the freedom to build, farm, or hold
                  value in a rising peri-urban corridor.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20Bahati%20Greens%20%E2%80%93%20Nakuru."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52] transition hover:brightness-95"
                  >
                    Book a Site Visit
                  </a>

                  <a
                    href="#gallery"
                    className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FactCard label="Location" value="Bahati, Nakuru" />
          <FactCard label="Distance" value="Approx. 25 mins to Nakuru CBD" />
          <FactCard label="Plot Size" value="1/8 Acre" />
          <FactCard label="Payment" value="Deposit from KSh 150K" />
        </div>
      </section>

      {/* WHY THIS PROJECT */}
      <section className="px-6 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
            Why Bahati Greens
          </span>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Low-entry land with real lifestyle use and income potential
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Bahati Greens is built around one of the strongest land-buying
            drivers in Kenya: the desire to own land that is both emotionally
            meaningful and practically useful. Set within Nakuru’s growing
            peri-urban agricultural belt, it gives buyers an affordable way to
            secure land that can support residential living, small-scale farming,
            or both.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            With water and electricity already available on-site, fertile soil,
            and a growing neighborhood around it, Bahati Greens offers more than
            ownership. It offers utility from day one in a location where demand
            is rising as people look beyond the city for value, space, and
            flexibility.
          </p>
        </div>
      </section>

      {/* INVESTMENT POSITIONING */}
      <section className="px-6 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
            Investment Perspective
          </span>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            A dual-purpose asset for living, farming, and long-term value
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Bahati Greens is positioned for buyers who want land that can do more
            than sit idle. It is ideal for small-scale farming ventures such as
            greenhouse projects, poultry, kitchen farming, or subsistence
            production, while also remaining suitable for countryside living,
            retirement homes, or future residential development.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            At this price point, the project works as a low-ticket, high-volume
            peri-urban transition asset. It taps into both food-security thinking
            and the emotional drive for ownership, giving buyers a practical,
            flexible, and affordable way to secure land that can support both
            utility and appreciation.
          </p>

          <p className="mt-4 font-medium text-[#0b1f52]">
            Own land that serves you now and grows with you over time.
          </p>
        </div>
      </section>

      {/* LOCATION INTELLIGENCE */}
      <section className="bg-[#f8f9fa] px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Location Intelligence
            </span>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Positioned within Nakuru’s growing rural-urban transition belt
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Located in the Bahati area within Nakuru</li>
              <li>• Approximately 25 minutes from Nakuru CBD</li>
              <li>• Set within a growing peri-urban agricultural belt</li>
              <li>• Strong appeal for both farming and residential use</li>
              <li>• Surrounded by a growing neighborhood with rising land demand</li>
              <li>• Positioned for low-entry ownership with practical utility</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(11,31,82,0.10)]">
            <div className="relative aspect-[4/3]">
              <MediaImage
                src={locationSrc}
                alt="Bahati Greens – Nakuru location view"
                fill
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                fallbackLabel="Location image missing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DRONE VIDEO */}
      <section className="bg-[#f5f7fb] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8cc63f]">
              Aerial View
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b1f52] md:text-5xl">
              See Bahati Greens from above
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#31456f]">
              Explore the land utility, surrounding environment, and peri-urban
              setting of Bahati Greens before booking your site visit.
            </p>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-[#e9edf3] shadow-[0_24px_60px_rgba(11,31,82,0.12)]">
              <video
                controls
                preload="none"
                playsInline
                poster={droneThumbSrc}
                className="block w-full rounded-[28px] bg-black"
              >
                <source src={droneVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f8f9fa] px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Key Features
            </span>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Flexible land with practical value from day one
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Water and electricity available on-site" />
            <FeatureCard text="Fertile, rich agricultural soil" />
            <FeatureCard text="Suitable for both farming and residential development" />
            <FeatureCard text="Growing neighborhood with rising land demand" />
            <FeatureCard text="Flexible payment structure for easier entry" />
            <FeatureCard text="Ready titles for confident ownership" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Project Gallery
            </span>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Explore the project visually
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
              View the environment, land quality, and surrounding feel of Bahati
              Greens more closely.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group relative overflow-hidden rounded-[20px] bg-[#eef2f7] text-left shadow-[0_14px_35px_rgba(11,31,82,0.08)]"
              >
                <div className="relative aspect-[4/3]">
                  <MediaImage
                    src={src}
                    alt={`Bahati Greens – Nakuru gallery image ${index + 1}`}
                    fill
                    quality={70}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    fallbackLabel={`Gallery image ${index + 1} missing`}
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1f52] px-6 py-20 text-center text-white lg:px-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Secure affordable land with real utility in Nakuru
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
          Speak to our team today about pricing, deposit options, installment
          plans, title deed guidance, and the next steps to secure your plot at
          Bahati Greens – Nakuru.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/254707666000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#7ab62f] px-6 py-3 font-semibold text-[#0b1f52] transition hover:scale-105"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+254707666000"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0b1f52]"
          >
            Call Now
          </a>
        </div>
      </section>

      <ContactSection />
      <FloatingWhatsApp />
      <ChatbotWidget />

      {/* GALLERY MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-3xl font-light text-white"
              aria-label="Close image"
            >
              ×
            </button>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black">
              <img
                src={selectedImage}
                alt="Bahati Greens – Nakuru enlarged view"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function MediaImage({
  src,
  alt,
  fallbackLabel,
  className,
  ...props
}: {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  [key: string]: any;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#e9edf3] px-4 text-center">
        <div>
          <p className="text-sm font-semibold text-[#0b1f52]">{fallbackLabel}</p>
          <p className="mt-1 break-all text-xs text-gray-500">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-[#e8edf3] bg-white p-6 text-center shadow-[0_10px_30px_rgba(11,31,82,0.05)]">
      <p className="text-sm uppercase tracking-[0.12em] text-gray-500">
        {label}
      </p>
      <p className="mt-2 font-semibold text-[#0b1f52]">{value}</p>
    </div>
  );
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="rounded-[20px] bg-white p-6 text-center shadow-[0_10px_30px_rgba(11,31,82,0.05)]">
      <p className="font-medium text-[#0b1f52]">{text}</p>
    </div>
  );
}