"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/malindi";

const galleryImages = [
  `${base}/gallery-1.jpg`,
  `${base}/gallery-2.png`,
  `${base}/gallery-3.jpg`,
  `${base}/gallery-4.png`,
  `${base}/gallery-5.png`,
];

export default function MalindiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const heroSrc = useMemo(() => `${base}/malindi-hero.jpg`, []);
  const locationSrc = useMemo(() => `${base}/location.jpg`, []);
  const droneThumbSrc = useMemo(() => `${base}/malindi-drone-thumb.png`, []);
  const droneVideoSrc = useMemo(() => `${base}/Drone2.mp4`, []);

  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[480px] w-full overflow-hidden bg-[#e9edf3]">
          <img
            src={heroSrc}
            alt="Hyssop Acres - Malindi"
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
                  HYSSOP ACRES - MALINDI
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#8cc63f]" />

                <h1 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
                  Own land in acres, not plots. Build wealth at scale.
                </h1>

                <p className="mt-4 max-w-[460px] text-sm leading-6 text-white/90 md:text-base">
                  Secure fertile, well-positioned acreage near Malindi for
                  long-term land banking, agribusiness, and legacy ownership in
                  a coastal growth corridor with ready title deeds and flexible
                  installment options.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20Hyssop%20Acres%20-%20Malindi."
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
          <FactCard label="Location" value="Malindi, Kilifi County" />
          <FactCard label="Distance" value="Approx. 30 mins to Malindi Town" />
          <FactCard label="Land Size" value="1 Acre" />
          <FactCard label="Payment" value="Flexible Installments available" />
        </div>
      </section>

      {/* WHY THIS PROJECT */}
      <section className="px-6 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
            Why Malindi
          </span>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Acreage ownership with real agricultural potential and long-term
            coastal upside
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Hyssop Acres - Malindi is designed for buyers who want more land,
            more utility, and more room for wealth creation over time. Set
            within Malindi’s wider growth corridor, the project offers fertile,
            arable acreage that works for both strategic holding and productive
            use.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            With access to the Salagate Bypass, proximity to local centres, and
            ready title deeds, this is a practical opportunity for investors,
            farmers, and families seeking a large-scale asset that can appreciate
            while remaining immediately useful.
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
            Built for patient buyers who think in acres, productivity, and legacy
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Hyssop Acres - Malindi is not a quick flip. It is a strategic
            patience asset for buyers who understand the value of acquiring more
            land volume at a lower entry point in an expanding coastal region.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            Whether your goal is land banking, agribusiness, or securing a
            legacy asset for future generations, this project gives you scale,
            flexibility, and ready ownership in a location shaped by coastal
            expansion and agricultural productivity.
          </p>

          <p className="mt-4 font-medium text-[#0b1f52]">
            Buy acreage today. Hold, farm, or build long-term value over time.
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
              Strategic access within a productive and steadily developing coastal
              corridor
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Located in Malindi, Kilifi County</li>
              <li>• Approximately 30 minutes from Malindi Town</li>
              <li>• Positioned along Salagate Bypass on the A2 Malindi to Voi road</li>
              <li>• Near Kakoneni Shopping Centre, an established local hub</li>
              <li>• Approximately 400 meters from tarmac access</li>
              <li>• Close to Weru Technical College, schools, and local trading centres</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(11,31,82,0.10)]">
            <div className="relative aspect-[4/3]">
              <MediaImage
                src={locationSrc}
                alt="Hyssop Acres - Malindi location view"
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
        See Malindi from above
      </h2>
      <p className="mt-5 text-lg leading-8 text-[#31456f]">
        Explore the scale, access, and surrounding landscape of Hyssop
        Acres - Malindi from above before booking your site visit.
      </p>
    </div>

    <div className="mt-12">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-[#e9edf3] shadow-[0_24px_60px_rgba(11,31,82,0.12)]">
        <video
          controls
          preload="none"
          playsInline
          poster="/hyssop/project/malindi/malindi-drone-thumb.png"
          className="block w-full rounded-[28px] bg-black"
        >
          <source src="/hyssop/project/malindi/drone2.mp4" type="video/mp4" />
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
              Built for scale, usability, and confident long-term ownership
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Large 1 acre ownership units" />
            <FeatureCard text="Fertile, arable land ideal for farming and agribusiness" />
            <FeatureCard text="Only 400 meters from tarmac access" />
            <FeatureCard text="Fully fenced project with internal access roads" />
            <FeatureCard text="Already subdivided and structured for ownership" />
            <FeatureCard text="Ready title deeds with flexible installment options" />
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
              View the land scale, surrounding environment, and access profile of
              Hyssop Acres - Malindi more closely.
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
                    alt={`Hyssop Acres - Malindi gallery image ${index + 1}`}
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
          Secure acreage within Malindi’s long-term growth corridor
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
          Speak to our team today for pricing, installment options, title deed
          guidance, and the next steps to secure your acre at Hyssop Acres -
          Malindi.
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
                alt="Hyssop Acres - Malindi enlarged view"
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