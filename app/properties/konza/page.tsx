"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/konza";

const galleryImages = [
  `${base}/gallery-1.png`,
  `${base}/gallery-2.png`,
  `${base}/gallery-3.png`,
  `${base}/gallery-4.png`,
  `${base}/gallery-5.png`,
];

export default function KonzaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroSrc = useMemo(() => `${base}/konza-hero.png`, []);
  const locationSrc = useMemo(() => `${base}/location.png`, []);
  const droneThumbSrc = useMemo(() => `${base}/drone-thumb.png`, []);
  const droneVideoSrc = useMemo(() => `${base}/drone.mp4`, []);

  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[480px] w-full overflow-hidden bg-[#e9edf3]">
          <img
            src={heroSrc}
            alt="Konza Ridge – Malili"
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
                  KONZA RIDGE – MALILI
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#8cc63f]" />

                <h1 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
                  Invest where Kenya’s future city is being built
                </h1>

                <p className="mt-4 max-w-[460px] text-sm leading-6 text-white/90 md:text-base">
                  Konza Ridge offers affordable 1/8 acre plots just minutes from
                  Konza Techno City, giving buyers early access to one of
                  Kenya’s most ambitious growth corridors with ready title deeds
                  and flexible payment options.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20Konza%20Ridge%20%E2%80%93%20Malili."
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
          <FactCard label="Location" value="Malili, near Konza Techno City" />
          <FactCard label="Distance" value="Approx. 2.5–3 km from Mombasa Road" />
          <FactCard label="Plot Size" value="50x100" />
          <FactCard label="Payment" value="From KSh 449K cash" />
        </div>
      </section>

      {/* WHY THIS PROJECT */}
      <section className="px-6 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
            Why Konza Ridge
          </span>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Affordable entry into one of Kenya’s most talked-about future growth zones
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Konza Ridge is designed for buyers who want to secure land before
            the wider value curve fully forms. Located near Malili and just
            minutes from Konza Techno City, the project offers an early position
            in a corridor shaped by infrastructure ambition, future business
            activity, and strong long-term visibility.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            With ready title deeds, clearly demarcated plots, and flexible
            payment options, Konza Ridge makes it easier to enter a future-facing
            location at an accessible price point while the area is still
            building momentum.
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
            Secure your position before the city fully forms
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Konza is planned as a world-class city powered by ICT, reliable
            infrastructure, and business-friendly governance. That makes Konza
            Ridge attractive not just for residential use, but for buyers who
            understand the value of timing in real estate.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            This is a vision-driven, future-facing land play. It is well suited
            for buyers seeking legacy ownership, long-term appreciation, and a
            strategic foothold near a location that has already captured
            national attention as Kenya’s Silicon Savannah.
          </p>

          <p className="mt-4 font-medium text-[#0b1f52]">
            Get in early. Hold with vision. Own next to the future.
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
              Strategic proximity to Konza Techno City and the Nairobi–Mombasa corridor
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Located at Malili, close to Konza Techno City</li>
              <li>• Approximately 2.5 to 3 km off Mombasa Road</li>
              <li>• Just off the Nairobi–Mombasa highway corridor</li>
              <li>• Attractive for future residential development</li>
              <li>• 1/8 acre plots with numbered beacons and ready title deeds</li>
              <li>• Positioned within one of Kenya’s most visible future growth stories</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(11,31,82,0.10)]">
            <div className="relative aspect-[4/3]">
              <MediaImage
                src={locationSrc}
                alt="Konza Ridge location view"
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

      {/* DRONE / ACCESS CLIP */}
      <section className="bg-[#f5f7fb] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8cc63f]">
              Access Preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b1f52] md:text-5xl">
              A quick look at access and surroundings
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#31456f]">
              A short preview of the access road and surrounding environment to
              help you understand the location before visiting.
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
              Structured, affordable, and positioned for the future
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Affordable 1/8 acre plots near Konza Techno City" />
            <FeatureCard text="Approximately 2.5 to 3 km from Mombasa Road" />
            <FeatureCard text="Ready title deeds for confident ownership" />
            <FeatureCard text="Clearly demarcated plots with numbered beacons" />
            <FeatureCard text="Flexible payment plan up to 6 months" />
            <FeatureCard text="Strong future-facing residential and investment appeal" />
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
              View the site surroundings, access profile, and future-facing
              setting of Konza Ridge more closely.
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
                    alt={`Konza Ridge gallery image ${index + 1}`}
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
          Secure your place next to Kenya’s future city
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
          Speak to our team today about cash pricing, flexible payment options,
          title deed guidance, and the next steps to secure your plot at Konza
          Ridge – Malili.
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
                alt="Konza Ridge enlarged view"
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