"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/tumaini";

const galleryImages = [
  `${base}/gallery-1.png`,
  `${base}/galleryphoto-2.jpg`,
  `${base}/galleryphoto-3.jpg`,
  `${base}/gallery-4.png`,
  `${base}/gallery-5.png`,
];

export default function TumainiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const heroSrc = useMemo(() => `${base}/tumaini-hero.jpg`, []);
  const locationSrc = useMemo(() => `${base}/location.png`, []);
  const droneThumbSrc = useMemo(() => `${base}/tumaini-drone-thumb.jpg`, []);
  const droneVideoSrc = useMemo(() => `${base}/tumaini-edited-drone.mp4`, []);

  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative">
  <div className="relative h-[50vh] min-h-[480px] w-full overflow-hidden bg-[#e9edf3]">
    <img
      src={heroSrc}
      alt="Tumaini Estate Nakuru"
      className="block h-full w-full object-cover"
    />

    {/* subtle overall darkening */}
    <div className="absolute inset-0 bg-black/10" />

    {/* CONTENT */}
    <div className="absolute inset-0 z-20 flex items-start pt-20">
      <div className="inline-block px-6 lg:px-8">
        <div
  className="ml-2 md:ml-4 w-[420px] max-w-[calc(100vw-3rem)] rounded-[24px] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:px-6 md:py-6"
          style={{ backgroundColor: "rgba(11, 31, 82, 0.88)" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8cc63f]">
            TUMAINI ESTATE · NAKURU
          </p>

          <div className="mt-2 h-[2px] w-10 bg-[#8cc63f]" />

          <h1 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
            Prime, gated tranquil development for a perfect family home
          </h1>

          <p className="mt-4 max-w-[460px] text-sm leading-6 text-white/90 md:text-base">
            Secure a well-positioned plot near Nakuru CBD designed for both residential living and capital appreciation within one of the city’s most practical growth zones. 
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
  href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20would%20like%20to%20book%20a%20site%20visit%20for%20Tumaini%20Estate."
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
          <FactCard label="Location" value="Nakuru" />
          <FactCard label="Distance" value="Approx. 10 mins to CBD" />
          <FactCard label="Plot Size" value="50x100 (1/8 Acre)" />
          <FactCard label="Payment" value="Flexible Installments available" />
        </div>
      </section>

      {/* WHY THIS PROJECT */}
      <section className="px-6 pb-16 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
            Why Tumaini
          </span>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Live close, grow faster, and secure value within Nakuru’s expansion zone
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Tumaini Estate is designed for both homeowners and investors seeking proximity,
            security, and long-term value. Located just minutes from Nakuru CBD, it offers a
            rare combination of urban accessibility and a controlled, gated environment—making
            it ideal for immediate development or strategic land holding.
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
      Built for both living and long-term value
    </h2>

    <p className="mt-6 text-base leading-8 text-gray-600">
      Tumaini Estate is positioned for buyers who want more than just land.
      With its proximity to Nakuru CBD and surrounding infrastructure,
      it sits directly within a high-demand residential corridor.
    </p>

    <p className="mt-4 text-base leading-8 text-gray-600">
      Whether you’re building a home or securing an appreciating asset,
      Tumaini offers the flexibility to start now and grow over time through
      accessible installment options and ready title deeds.
    </p>

    <p className="mt-4 font-medium text-[#0b1f52]">
      Live close. Grow faster. Secure your place within Nakuru’s expansion zone.
    </p>
  </div>
</section>

      {/* LOCATION ADVANTAGE */}
      <section className="bg-[#f8f9fa] px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Location Intelligence
            </span>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Strategic access backed by real surrounding amenities
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Approximately 10 minutes from Nakuru CBD</li>
              <li>• Strategically near Tumaini Resort</li>
              <li>• Close to RVIST College and other learning institutions</li>
              <li>• Accessible via the Nakuru–Njoro corridor</li>
              <li>• Positioned within a developed, near-urban neighborhood</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(11,31,82,0.10)]">
            <div className="relative aspect-[4/3]">
              <MediaImage
                src={locationSrc}
                alt="Tumaini Estate location view"
                fill
                quality={100}
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
              See Tumaini from above
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#31456f]">
              Experience the full layout, surrounding access, and near-urban setting of Tumaini
              Estate from above before booking your site visit.
            </p>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-[#e9edf3] shadow-[0_24px_60px_rgba(11,31,82,0.12)]">
              <video
                controls
                preload="metadata"
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
              Built for confidence, usability, and future appreciation
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Gated community concept" />
            <FeatureCard text="Fully developed, non-speculative location" />
            <FeatureCard text="Road accessibility and infrastructure readiness" />
            <FeatureCard text="Close to schools, resorts, and learning institutions" />
            <FeatureCard text="Ideal for immediate residential development" />
            <FeatureCard text="Ready title deeds with flexible installment options" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-16 lg:px-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
              Project Gallery
            </span>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Explore the project visually
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
              View the environment, layout, and surrounding feel of Tumaini Estate more closely.
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
                    alt={`Tumaini Estate gallery image ${index + 1}`}
                    fill
                    quality={100}
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
          Secure your position within Nakuru’s growth corridor
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
          Speak to our team today for pricing, installment options, title deed guidance,
          and the next steps to secure your plot at Tumaini Estate.
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

      {/* IMAGE MODAL */}
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
                alt="Tumaini Estate enlarged view"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-3xl font-light text-white"
              aria-label="Close video"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-[20px] bg-black shadow-2xl">
              <div className="relative aspect-[16/9]">
                <VideoPlayer
                  src={droneVideoSrc}
                  poster={droneThumbSrc}
                />
              </div>
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

function DronePreview({
  thumbnailSrc,
  videoSrc,
  onOpen,
}: {
  thumbnailSrc: string;
  videoSrc: string;
  onOpen: () => void;
}) {
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full text-left"
    >
      <div className="overflow-hidden rounded-[28px] bg-[#e9edf3] shadow-[0_24px_60px_rgba(11,31,82,0.12)]">
        {!thumbFailed ? (
          <div className="relative">
            <img
              src={thumbnailSrc}
              alt="Tumaini Estate drone preview"
              className="block w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              onError={() => setThumbFailed(true)}
            />

            <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition duration-300 group-hover:scale-105">
                <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-[#0b1f52]" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0b1f52]">
              Play drone video
            </div>
          </div>
        ) : (
          <div className="flex min-h-[260px] items-center justify-center px-4 py-12 text-center">
            <div>
              <p className="text-sm font-semibold text-[#0b1f52]">
                Drone thumbnail missing
              </p>
              <p className="mt-1 break-all text-xs text-gray-500">
                {thumbnailSrc}
              </p>
              <p className="mt-2 break-all text-xs text-gray-500">
                Video source: {videoSrc}
              </p>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const [videoFailed, setVideoFailed] = useState(false);

  if (videoFailed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
        <div>
          <p className="text-sm font-semibold">Video missing or unsupported</p>
          <p className="mt-1 break-all text-xs text-white/70">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <video
      controls
      autoPlay
      className="h-full w-full"
      poster={poster}
      onError={() => setVideoFailed(true)}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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