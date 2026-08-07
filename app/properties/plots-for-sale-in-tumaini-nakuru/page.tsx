"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/tumaini";

const galleryImages = [
  `${base}/gallery1.png`,
  `${base}/gallery2.png`,
  `${base}/gallery3.png`,
  `${base}/gallery04.png`,
  `${base}/gallery05.png`,
];

export default function TumainiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDay: "",
    message: "",
  });

  const projectName = "Tumaini Estate – Nakuru";
  const heroSrc = `${base}/tumainihero.jpg`;
  const droneThumbSrc = `${base}/tumaini-drone-thumbnail.jpg`;
  const droneVideoSrc = `${base}/tumaini.mp4`;

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setVideoOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = `Hello Hyssop Properties, I am interested in ${projectName}.

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Day: ${formData.preferredDay || "Not specified"}
Project of Interest: ${projectName}
Price: KSh 999,000
Payment Plan: Installments from KSh 25,000 per month
Message: ${
      formData.message ||
      "I would like more information and site visit assistance."
    }`;

    window.open(
      `https://wa.me/254707666000?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <>
        {/* MOBILE HERO */}
        <section className="bg-[#0b1f52] text-white lg:hidden">
          <div className="px-6 pb-6 pt-7">
            <div className="mb-4 inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
              Ready Title Deeds
            </div>

            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8cc63f]">
              Tumaini Estate · Nakuru
            </p>

            <h1 className="max-w-md text-3xl font-bold leading-tight text-white">
              Gated 50 x 100 plots near Nakuru CBD
            </h1>

            {/* PRIMARY MOBILE OFFER */}
            <div className="mt-5 flex items-center justify-between gap-4 rounded-[18px] border border-white/15 bg-white/[0.08] px-4 py-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
                  Plot Price
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  KSh 999,000
                </p>
              </div>

              <div className="min-w-[112px] rounded-xl bg-[#8cc63f] px-3 py-2.5 text-center text-[#0b1f52]">
                <p className="text-[8px] font-black uppercase tracking-[0.13em]">
                  Installments
                </p>

                <p className="mt-0.5 text-xl font-black">
                  25K
                </p>

                <p className="text-[9px] font-bold">
                  per month
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[310px] w-full overflow-hidden bg-[#e9edf3]">
            <Image
              src={heroSrc}
              alt="Tumaini Estate gated plots in Nakuru"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </section>

        {/* DESKTOP HERO */}
        <section
          className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block"
          style={{
            height: "50vh",
            minHeight: "410px",
            maxHeight: "540px",
          }}
        >
          <Image
            src={heroSrc}
            alt="Tumaini Estate gated plots in Nakuru"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center lg:object-[center_45%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 z-10 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
            Ready Title Deeds
          </div>

          <div className="absolute bottom-7 left-6 right-6 z-10 max-w-[840px]">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
              }}
            >
              Tumaini Estate · Nakuru
            </p>

            <h1
              className="max-w-3xl text-4xl font-bold leading-tight text-white xl:text-5xl"
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.7)",
              }}
            >
              Gated 50 x 100 plots near Nakuru CBD
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-white/20 bg-[#0b1f52]/90 px-5 py-3 backdrop-blur-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
                  Plot Price
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  KSh 999,000
                </p>
              </div>

              <div className="rounded-xl bg-[#8cc63f] px-5 py-3 text-[#0b1f52] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
                <p className="text-[9px] font-black uppercase tracking-[0.16em]">
                  Flexible Installments
                </p>

                <p className="mt-1 text-lg font-black">
                  From KSh 25,000 / month
                </p>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================== */}
      <section className="px-6 py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#e8eef5] pb-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
                  Featured Project
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Tumaini Estate – Nakuru
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
                  Tumaini Estate is a near-urban gated project for buyers who
                  want a quiet place to build, invest, or secure land close to
                  town. The estate offers 50 x 100 plots with ready title deeds,
                  guided ownership support, and convenient access to Nakuru CBD.
                </p>
              </div>

              {/* COMPACT COMMERCIAL SUMMARY */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[16px] border border-[#e3e9f0] bg-[#f8fafc] px-4 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#748198]">
                    Price
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#0b1f52]">
                    KSh 999,000
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#cfe3ad] bg-[#f0f8e4] px-4 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#5c9629]">
                    Installments
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#0b1f52]">
                    From KSh 25K/month
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Fact label="Plot Size" value="50 x 100" />
              <Fact label="Location" value="Nakuru" />
              <Fact label="Distance" value="~10 mins to CBD" />
              <Fact label="Title" value="Ready Title Deeds" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#site-visit"
                className="rounded-full bg-[#7ab62f] px-6 py-3 text-sm font-semibold text-[#0b1f52] transition hover:scale-[1.03]"
              >
                Book Site Visit
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-[#0b1f52] px-6 py-3 text-sm font-semibold text-[#0b1f52] transition hover:bg-[#0b1f52] hover:text-white"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUMMARY
      ========================================================== */}
      <section className="px-6 pb-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <InfoCard
            title="Location Intelligence"
            text="Approximately 10 minutes from Nakuru CBD, near Tumaini Resort, RVIST College, and the Nakuru–Njoro corridor."
          />

          <InfoCard
            title="Investment Position"
            text="A practical choice for buyers looking for a gated Nakuru development with lifestyle appeal and long-term growth potential."
          />

          <InfoCard
            title="Accessible Ownership"
            text="Flexible monthly installments make it easier to secure a plot while planning your ownership journey."
            accent
          />
        </div>
      </section>

      {/* =========================================================
          WHY TUMAINI
      ========================================================== */}
      <section className="bg-[#f8fafc] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Why Tumaini
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Live close, grow faster, and secure value within Nakuru&apos;s
              expansion zone.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Tumaini Estate is ideal for homeowners and investors who want land
              near Nakuru CBD without losing the comfort of a calm, controlled
              environment. It combines urban access with the appeal of a gated
              estate, making it suitable for a future home, rental plan, or
              long-term property investment.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              The project sits within a high-demand residential corridor near
              Tumaini Resort, RVIST College, and the Nakuru–Njoro route. Ready
              title deeds and a flexible payment structure give buyers a clear,
              practical path to ownership.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white text-left shadow-[0_20px_60px_rgba(11,31,82,0.1)]"
            aria-label="Play Tumaini Estate aerial video"
          >
            <Image
              src={droneThumbSrc}
              quality={90}
              alt="Tumaini Estate aerial video preview"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#0b1f52] shadow-xl transition group-hover:scale-110">
                <span className="ml-1 text-2xl">▶</span>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
              Watch aerial view
            </div>
          </button>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Key Features
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Built for confidence, usability, and future appreciation
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Premium gated community concept" />
            <FeatureCard text="Approximately 10 minutes from Nakuru CBD" />
            <FeatureCard text="Near Tumaini Resort and RVIST College" />
            <FeatureCard text="Accessible through the Nakuru–Njoro corridor" />
            <FeatureCard text="50 x 100 plots with ready title deeds" />
            <FeatureCard text="Flexible installments from KSh 25,000/month" accent />
          </div>
        </div>
      </section>

      {/* =========================================================
          SITE VISIT FORM
      ========================================================== */}
      <section
        id="site-visit"
        className="bg-[#f8fafc] px-6 py-16 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Book a Site Visit
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Interested in Tumaini Estate?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
              Send your details directly to our team on WhatsApp. We&apos;ll
              guide you on availability, the payment plan, site visits, and
              title deed verification.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#dfe6ed] bg-white px-4 py-2 text-xs font-semibold text-[#0b1f52]">
                KSh 999,000
              </span>

              <span className="rounded-full border border-[#cfe3ad] bg-[#f0f8e4] px-4 py-2 text-xs font-bold text-[#4f8d25]">
                From KSh 25,000/month
              </span>

              <span className="rounded-full border border-[#dfe6ed] bg-white px-4 py-2 text-xs font-semibold text-[#0b1f52]">
                Ready Title Deeds
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-[#e8eef5] bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                required
                value={formData.name}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: value,
                  }))
                }
                placeholder="Enter your name"
              />

              <Field
                label="Phone"
                required
                value={formData.phone}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: value,
                  }))
                }
                placeholder="Enter your phone number"
              />

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">
                  Preferred Day
                </span>

                <select
                  value={formData.preferredDay}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredDay: event.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none focus:border-[#7ab62f]"
                >
                  <option value="">Select preferred day</option>
                  <option value="Weekday">Weekday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Any day">Any day</option>
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">
                  Project of Interest
                </span>

                <input
                  value={projectName}
                  readOnly
                  className="w-full rounded-2xl border border-[#e8eef5] bg-[#eef2f7] px-4 py-3 text-sm text-gray-600 outline-none"
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">
                  Message
                </span>

                <textarea
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Optional message"
                  rows={4}
                  className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none focus:border-[#7ab62f]"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-[#7ab62f] px-7 py-3 text-sm font-semibold text-[#0b1f52] transition hover:scale-[1.03]"
            >
              Submit Interest on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================== */}
      <section
        id="gallery"
        className="scroll-mt-24 bg-white px-6 py-16 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Project Gallery
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore the project visually
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group relative overflow-hidden rounded-[20px] bg-[#eef2f7] shadow-[0_12px_30px_rgba(11,31,82,0.07)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    quality={90}
                    alt={`Tumaini Estate Nakuru gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <FloatingWhatsApp />
      <ChatbotWidget />

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-lg font-medium text-white hover:text-[#8cc63f]"
              aria-label="Close video"
            >
              Close ×
            </button>

            <video
              key={droneVideoSrc}
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={droneThumbSrc}
              className="max-h-[80vh] w-full rounded-xl bg-black shadow-2xl"
            >
              <source src={droneVideoSrc} type="video/mp4" />

              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-3xl font-light text-white"
              aria-label="Close image"
            >
              ×
            </button>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black">
              <Image
                src={selectedImage}
                alt="Tumaini Estate enlarged view"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[16px] border border-[#e8eef5] bg-[#f8fafc] p-4">
      <p className="mb-1 text-[11px] text-gray-500">
        {label}
      </p>

      <p className="text-sm font-bold text-[#0b1f52]">
        {value}
      </p>
    </div>
  );
}

function InfoCard({
  title,
  text,
  accent = false,
}: {
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] border p-5 ${
        accent
          ? "border-[#d6e8b9] bg-[#f5faee]"
          : "border-[#e8eef5] bg-white"
      }`}
    >
      <h3
        className={`mb-2 text-lg font-bold ${
          accent ? "text-[#4f8d25]" : "text-[#0b1f52]"
        }`}
      >
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-600">
        {text}
      </p>
    </div>
  );
}

function FeatureCard({
  text,
  accent = false,
}: {
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[18px] border p-5 ${
        accent
          ? "border-[#cfe3ad] bg-[#f3f9ea]"
          : "border-[#e8eef5] bg-white"
      }`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${
          accent
            ? "bg-[#8cc63f] text-[#0b1f52]"
            : "bg-[#8cc63f]/15 text-[#4c7d16]"
        }`}
      >
        ✓
      </div>

      <p className="text-sm font-semibold leading-6 text-[#0b1f52]">
        {text}
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold">
        {label}
        {required ? " *" : ""}
      </span>

      <input
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none focus:border-[#7ab62f]"
      />
    </label>
  );
}