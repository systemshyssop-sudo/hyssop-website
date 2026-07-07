"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const base = "/hyssop/project/malindi";

const galleryImages = [
  `${base}/gallery-1.jpg`,
  `${base}/gallery-2.png`,
  `${base}/gallery-3.JPG`,
  `${base}/gallery-4.png`,
  `${base}/gallery-5.png`,
];

export default function MalindiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDay: "",
    message: "",
  });

  const projectName = "Hyssop Acres – Malindi";
  const heroSrc = `${base}/malindi-hero.jpg`;
  const droneThumbSrc = `${base}/location.jpg`;
  const droneVideoSrc = `${base}/Drone2.mp4`;

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setVideoOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = `Hello Hyssop Properties, I am interested in ${projectName}.

Name: ${formData.name}
Phone: ${formData.phone}
Preferred Day: ${formData.preferredDay || "Not specified"}
Project of Interest: ${projectName}
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

      {/* HERO */}
      <>
        {/* MOBILE HERO - TEXT FIRST, IMAGE SECOND */}
        <section className="bg-[#0b1f52] text-white lg:hidden">
          <div className="px-6 pt-8 pb-7">
            <div className="mb-5 inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
              Ready Title Deeds
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white">
              Acreage for sale in Malindi with long-term value
            </h1>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
              Hyssop Acres · Malindi
            </p>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden bg-[#e9edf3]">
            <Image
              src={heroSrc}
              alt="Hyssop Acres land for sale in Malindi"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </section>

        {/* DESKTOP HERO - IMAGE WITH OVERLAY TEXT */}
        <section
          className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block"
          style={{
            height: "46vh",
            minHeight: "360px",
          }}
        >
          <Image
            src={heroSrc}
            alt="Hyssop Acres land for sale in Malindi"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center lg:object-[center_45%]"
          />

          {/* Image readability overlay - no blue text card */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div
            className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm"
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              zIndex: 10,
            }}
          >
            Ready Title Deeds
          </div>

          <div
            style={{
              position: "absolute",
              left: "24px",
              right: "24px",
              bottom: "28px",
              zIndex: 10,
              maxWidth: "760px",
            }}
          >
            <h1
              className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl"
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.7)",
              }}
            >
              Acreage for sale in Malindi with long-term value
            </h1>

            <p
              className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
              }}
            >
              Hyssop Acres · Malindi
            </p>
          </div>
        </section>
      </>

      {/* FEATURED PROJECT */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#e8eef5] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Featured Project
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Hyssop Acres – Malindi
            </h2>

            <div className="mt-6 rounded-[1.5rem] bg-[#0b1f52] p-6 text-white">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8cc63f]">
                Starting Price
              </p>
              <p className="text-4xl font-bold">KSh 400,000</p>
              <p className="mt-1 text-sm text-white/75">Per acre</p>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Hyssop Acres offers well-positioned acreage in Malindi for buyers
              looking for more than a standard plot. The project is suitable for
              long-term land banking, agribusiness, farming, family legacy
              ownership, and coastal land investment in Kilifi County.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <Fact label="Land Size" value="1 Acre" />
              <Fact label="Location" value="Malindi" />
              <Fact label="Distance" value="30 mins to town" />
              <Fact label="Payment" value="Flexible Plans" />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#site-visit"
                className="rounded-full bg-[#7ab62f] px-7 py-3 font-semibold text-[#0b1f52] transition hover:scale-105"
              >
                Book Site Visit
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-[#0b1f52] px-7 py-3 font-semibold text-[#0b1f52] transition hover:bg-[#0b1f52] hover:text-white"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <InfoCard
            title="Location Intelligence"
            text="Located in Malindi, Kilifi County, approximately 30 minutes from Malindi Town, along Salagate Bypass on the A2 Malindi to Voi road."
          />
          <InfoCard
            title="Investment Position"
            text="A strong option for buyers looking for land for sale in Malindi, coastal acreage, agribusiness land, or long-term land banking."
          />
          <InfoCard
            title="Ownership Confidence"
            text="Large 1 acre ownership units with ready title deeds, flexible installment options, fencing, and internal access roads."
          />
        </div>
      </section>

      {/* WHY MALINDI */}
      <section className="bg-[#f8fafc] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Why Malindi
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Acreage ownership with real agricultural potential and long-term
              coastal upside.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Hyssop Acres – Malindi is designed for buyers who want more land,
              more utility, and more room for wealth creation over time. Set
              within Malindi’s wider growth corridor, the project offers
              fertile, arable acreage that can support both strategic holding
              and productive use.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              For buyers comparing plots for sale in Malindi or larger acreage
              opportunities at the Coast, this project offers a different kind
              of value: space, access, ready title deeds, and the flexibility to
              farm, hold, develop gradually, or build a family land asset.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white text-left shadow-[0_24px_70px_rgba(11,31,82,0.12)]"
            aria-label="Play Hyssop Acres Malindi aerial video"
          >
            <Image
              src={droneThumbSrc}
              quality={90}
              alt="Hyssop Acres Malindi aerial video preview"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-[#0b1f52] shadow-xl transition group-hover:scale-110">
                <span className="ml-1 text-3xl">▶</span>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-5 py-2 text-sm font-bold text-[#0b1f52] shadow-sm">
              Watch aerial view
            </div>
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Key Features
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Built for scale, usability, and confident long-term ownership
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard text="Large 1 acre ownership units in Malindi" />
            <FeatureCard text="Fertile, arable land ideal for farming and agribusiness" />
            <FeatureCard text="Only 400 meters from tarmac access" />
            <FeatureCard text="Fully fenced project with internal access roads" />
            <FeatureCard text="Already subdivided and structured for ownership" />
            <FeatureCard text="Ready title deeds with flexible installment options" />
          </div>
        </div>
      </section>

      {/* SITE VISIT FORM */}
      <section id="site-visit" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Book a Site Visit
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Interested in this property?
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Send your details directly to our team on WhatsApp. The project of
              interest is already set to Hyssop Acres – Malindi, and our team can
              guide you on location, pricing, payment plans, site visits, and
              title deed verification.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#e8eef5] bg-[#f8fafc] p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                required
                value={formData.name}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, name: value }))
                }
                placeholder="Enter your name"
              />

              <Field
                label="Phone"
                required
                value={formData.phone}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phone: value }))
                }
                placeholder="Enter your phone number"
              />

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">
                  Preferred Day
                </span>
                <select
                  value={formData.preferredDay}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredDay: e.target.value,
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
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
              className="mt-6 rounded-full bg-[#7ab62f] px-7 py-3 font-semibold text-[#0b1f52] transition hover:scale-105"
            >
              Submit Interest on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="scroll-mt-24 bg-[#f8fafc] px-6 py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Project Gallery
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore the project visually
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600">
              View the land scale, surrounding environment, and access profile
              of Hyssop Acres – Malindi more closely.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group relative overflow-hidden rounded-[1.5rem] bg-[#eef2f7] shadow-[0_14px_35px_rgba(11,31,82,0.08)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    quality={90}
                    alt={`Hyssop Acres Malindi gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
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
              <img
                src={selectedImage}
                alt="Hyssop Acres Malindi enlarged view"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#e8eef5] bg-[#f8fafc] p-4">
      <p className="mb-1 text-xs text-gray-500">{label}</p>
      <p className="text-sm font-bold text-[#0b1f52]">{value}</p>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#e8eef5] bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-7 text-gray-600">{text}</p>
    </div>
  );
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#e8eef5] bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8cc63f]/15 text-[#4c7d16]">
        ✓
      </div>
      <p className="font-semibold leading-7 text-[#0b1f52]">{text}</p>
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
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none focus:border-[#7ab62f]"
      />
    </label>
  );
}