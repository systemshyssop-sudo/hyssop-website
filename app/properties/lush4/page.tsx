"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/kitengela";

const galleryImages = [
  `${base}/gallery-1.png`,
  `${base}/gallery-2.png`,
  `${base}/gallery-3.png`,
  `${base}/gallery-4.png`,
  `${base}/gallery-5.png`,
];

export default function Lush4Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroSrc = useMemo(() => `${base}/kitengela-hero.png`, []);
  const locationSrc = useMemo(() => `${base}/location.png`, []);
  const droneThumbSrc = useMemo(() => `${base}/kitengela-drone-thumb.png`, []);
  const droneVideoSrc = useMemo(() => `${base}/drone.mp4`, []);

  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[480px] w-full overflow-hidden bg-[#e9edf3]">
          <img
            src={heroSrc}
            alt="Lush 4 – Kitengela"
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
                  LUSH 4 – KITENGELA
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#8cc63f]" />

                <h1 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
                  Own near the city, build at your pace
                </h1>

                <p className="mt-4 max-w-[460px] text-sm leading-6 text-white/90 md:text-base">
                  Lush 4 offers affordable, ready-to-own residential plots in
                  Kitengela for buyers who want proximity to Nairobi, clean
                  documentation, and the flexibility to build over time in a
                  fast-growing satellite town.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20Lush%204%20%E2%80%93%20Kitengela."
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
          <FactCard label="Location" value="Kitengela" />
          <FactCard label="Distance" value="Approx. 10 mins to Kitengela Town" />
          <FactCard label="Plot Size" value="50x100" />
          <FactCard label="Payment" value="Deposit from KSh 150K" />
        </div>
      </section>

      {/* WHY THIS PROJECT */}
      <section className="px-6 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
            Why Lush 4
          </span>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Affordable residential entry within Nairobi’s fast-expanding commuter belt
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Lush 4 is built for buyers who want practical access, affordability,
            and real residential usability without stretching to Nairobi prices.
            Located in Kitengela, one of Kenya’s fastest-growing satellite towns,
            the project gives buyers an opportunity to secure land in a developed
            neighborhood where settlement and construction are already realistic.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            With road access already in place, flexible payment terms, and ready
            title deeds, Lush 4 is designed to convert interest into confident
            ownership for first-time buyers, young families, and investors looking
            for high-demand residential plots.
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
            A quick-turnover residential play backed by affordability and urban spillover
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Kitengela’s growth is being driven by a simple reality: buyers and
            families want proximity to Nairobi without absorbing Nairobi-level
            land prices. That makes Lush 4 a strong volume-sales opportunity in
            a location already benefiting from infrastructure growth and the steady
            migration of middle-income earners.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            For first-time land buyers, this is an accessible entry point. For
            investors, it is a high-demand residential product with strong
            liquidity appeal because the market is driven by real settlement and
            real housing demand, not speculative hype.
          </p>

          <p className="mt-4 font-medium text-[#0b1f52]">
            Get in near the city. Build at your pace. Own in a location people are actively moving to.
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
              Strong residential logic within one of Nairobi’s key growth corridors
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Located in Kitengela, one of Kenya’s fastest-growing satellite towns</li>
              <li>• Approximately 30 to 35 km from Nairobi CBD</li>
              <li>• Roughly 10 minutes from Kitengela Town</li>
              <li>• Accessible via the Namanga Road corridor</li>
              <li>• Positioned within a developed, build-ready neighborhood</li>
              <li>• Strong fit for commuters, first-time buyers, and young families</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(11,31,82,0.10)]">
            <div className="relative aspect-[4/3]">
              <MediaImage
                src={locationSrc}
                alt="Lush 4 – Kitengela location view"
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
              See Lush 4 from above
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#31456f]">
              Explore the surrounding neighborhood, access profile, and residential
              setting of Lush 4 before booking your site visit.
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
              Positioned for low-risk entry and practical residential use
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Developed neighborhood, not speculative bush land" />
            <FeatureCard text="Road access already in place" />
            <FeatureCard text="Ideal for immediate construction or settlement" />
            <FeatureCard text="Flexible installment plans for easier entry" />
            <FeatureCard text="Clean documentation for lower-risk acquisition" />
            <FeatureCard text="Ready title deeds for confident ownership" />
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
              View the project environment, road access, and surrounding residential
              character of Lush 4 more closely.
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
                    alt={`Lush 4 – Kitengela gallery image ${index + 1}`}
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
          Secure your plot near Nairobi without the city price tag
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
          Speak to our team today about pricing, deposit options, installment
          plans, title deed guidance, and the next steps to secure your plot at
          Lush 4 – Kitengela.
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
                alt="Lush 4 – Kitengela enlarged view"
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