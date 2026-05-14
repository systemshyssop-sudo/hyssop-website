"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

const projectName = "Ngata Commercial Centre";
const whatsappNumber = "254707666000";

const heroSrc = "/hyssop/ncc/1.png";
const videoSrc = "/hyssop/ncc/video.mp4";
const videoPosterSrc = "/hyssop/ncc/2.png";

const mapShareLink = "https://maps.app.goo.gl/JXqEvXVa89a72gCA6";

// Paste the Google Maps iframe src here once they provide it.
// Example: const mapEmbedSrc = "https://www.google.com/maps/embed?pb=...";
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3330.013934367121!2d35.944325!3d-0.242157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTQnMzEuOCJTIDM1wrA1NiczOS42IkU!5e1!3m2!1sen!2ske!4v1778530532120!5m2!1sen!2ske";

const galleryImages = [
  "/hyssop/ncc/1.png",
  "/hyssop/ncc/2.png",
  "/hyssop/ncc/3.png",
  "/hyssop/ncc/4.png",
  "/hyssop/ncc/5.png",
  "/hyssop/ncc/6.png",
  "/hyssop/ncc/7.png",
  "/hyssop/ncc/8.png",
];

export default function NgataLandingPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const lightboxImageWrapRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDay: "",
    message: "",
  });

  useEffect(() => {
  function handleGalleryKeys(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setSelectedImageIndex(null);
      setVideoOpen(false);
      return;
    }

    if (selectedImageIndex === null) return;

    if (event.key === "ArrowLeft") {
      setSelectedImageIndex((prev) =>
        prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }

    if (event.key === "ArrowRight") {
      setSelectedImageIndex((prev) =>
        prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  }

  window.addEventListener("keydown", handleGalleryKeys);
  return () => window.removeEventListener("keydown", handleGalleryKeys);
}, [selectedImageIndex]);

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
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

async function openSelectedImageFullscreen() {
  if (selectedImageIndex === null) return;

  const element = lightboxImageWrapRef.current;

  if (element?.requestFullscreen) {
    await element.requestFullscreen();
    return;
  }

  const webkitElement = element as HTMLDivElement & {
    webkitRequestFullscreen?: () => Promise<void>;
  };

  if (webkitElement?.webkitRequestFullscreen) {
    await webkitElement.webkitRequestFullscreen();
    return;
  }

  window.open(galleryImages[selectedImageIndex], "_blank");
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
              Ready Titles | Tarmac-Touching
            </div>

    <h1 className="text-[2rem] font-bold leading-[1.15] text-white sm:text-[2.35rem]">
  Own the Gateway to Nakuru: Prime Commercial &amp; Residential Plots at Ngata
  Commercial Centre
</h1>

            <div className="mt-6 grid grid-cols-2 gap-2.5">
  <a
    href="#site-visit"
    className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-4 py-3.5 text-sm font-bold text-[#0b1f52]"
  >
    Secure Your Plot
  </a>

  <a
    href="#gallery"
    className="inline-flex items-center justify-center rounded-full border border-white/70 px-4 py-3.5 text-sm font-bold text-white"
  >
    View Photos
  </a>
</div>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden bg-[#e9edf3]">
            <Image
              src={heroSrc}
              alt="Ngata Commercial Centre plots"
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </section>

        {/* DESKTOP HERO - IMAGE WITH OVERLAY TEXT */}
        <section
          className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block"
          style={{
            height: "56vh",
            minHeight: "460px",
          }}
        >
          <Image
            src={heroSrc}
            alt="Ngata Commercial Centre plots"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center lg:object-[center_45%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/28 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <div
            className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm"
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              zIndex: 10,
            }}
          >
            Ready Titles | Tarmac-Touching
          </div>

          <div
            style={{
              position: "absolute",
              left: "24px",
              right: "24px",
              bottom: "36px",
              zIndex: 10,
              maxWidth: "900px",
            }}
          >
            <h1
  className="max-w-4xl text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.9rem] xl:text-[3.15rem]"
  style={{
    textShadow: "0 4px 28px rgba(0,0,0,0.85)",
  }}
>
              Own the Gateway to Nakuru: Prime Commercial &amp; Residential
              Plots at Ngata Commercial Centre
            </h1>

            <div className="mt-7 flex flex-wrap gap-3.5">
              <a
                href="#site-visit"
                className="rounded-full bg-[#8cc63f] px-7 py-3.5 font-semibold text-[#0b1f52] transition hover:scale-105"
              >
                Secure Your Plot Now
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#0b1f52]"
              >
                View Photos
              </a>
            </div>
          </div>
        </section>
      </>

      {/* QUICK FACTS */}
<section className="px-6 py-16 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="rounded-[2rem] border border-[#e8eef5] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
          The Perfect Intersection of High-Traffic Business and Serene Modern Living.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Fact label="Ready Titles" value="Clean title deeds available" />
        <Fact label="Tarmac Touching" value="Direct highway visibility" />
        <Fact label="Location" value="10 Minutes to Nakuru CBD" />
      </div>
    </div>
  </div>
</section>

      {/* STRATEGIC INVESTMENT */}
      <section className="bg-[#f8fafc] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
            Strategic Investment Meets Unmatched Growth
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Why just buy land when you can own a piece of Nakuru’s future?
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600">
            Located along the bustling Nakuru-Eldoret Highway, Ngata has evolved
            from a quiet suburb into a premier commercial hub.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-600">
            Whether you are looking to tap into the high-traffic visibility for
            a retail empire or seeking the tranquility of an upscale
            neighborhood for your family home, Ngata Commercial Centre offers
            the best of both worlds.
          </p>
        </div>
      </section>

      {/* WHY NGATA + VIDEO */}
<section className="bg-[#f8fafc] px-6 py-20 lg:px-12">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
    {/* LEFT CONTENT */}
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
        Why Ngata?
      </p>

      <h2 className="text-3xl font-bold sm:text-4xl">
        Built for Success, Designed for Comfort
      </h2>

      <p className="mt-6 text-base leading-8 text-gray-600">
        We provide the infrastructure; you provide the vision. Our plots are
        &quot;plug-and-play,&quot; meaning you can begin construction the
        moment you sign the papers.
      </p>

      <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
        <p>
          <span className="font-bold text-[#0b1f52]">
            The Commercial Goldmine:
          </span>{" "}
          Direct tarmac frontage ensures your business—be it a petrol station,
          hardware store, or mini-mall—gets seen by thousands of commuters
          daily.
        </p>

        <p>
          <span className="font-bold text-[#0b1f52]">
            The Residential Dream:
          </span>{" "}
          Build modern apartments catering to the growing professional class in
          Nakuru, or design a standalone home in a developed estate with a sense
          of community.
        </p>

        <p>
          <span className="font-bold text-[#0b1f52]">
            Essential Utilities On-Site:
          </span>{" "}
          No waiting for infrastructure. Water and electricity are already
          connected to the site.
        </p>

        <p>
          <span className="font-bold text-[#0b1f52]">
            Absolute Certainty:
          </span>{" "}
          Invest with total peace of mind. Every plot has a clean, ready title
          deed available for verification.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/news?tab=events"
          className="inline-flex items-center justify-center rounded-full border border-[#0b1f52] px-7 py-3 font-semibold text-[#0b1f52] transition hover:bg-[#0b1f52] hover:text-white"
        >
          Check Out Our Recent Titling Event
        </Link>
      </div>
    </div>

    {/* RIGHT VIDEO */}
    <div className="w-full">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
        Aerial View
      </p>

      <h3 className="text-3xl font-bold sm:text-4xl">
        See Ngata Commercial Centre from above
      </h3>

      <p className="mt-6 text-base leading-8 text-gray-600">
        Watch the location, road access, surrounding development, and commercial
        potential before booking your site visit.
      </p>

      <button
        type="button"
        onClick={() => setVideoOpen(true)}
        className="group relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white text-left shadow-[0_24px_70px_rgba(11,31,82,0.12)]"
        aria-label="Play Ngata Commercial Centre video"
      >
        <Image
          src={videoPosterSrc}
          quality={90}
          alt="Ngata Commercial Centre video preview"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />

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
  </div>
</section>

      {/* EVERYTHING YOU NEED */}
      <section className="bg-[#f8fafc] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Everything You Need is Already Here
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              You aren’t just buying a 50x100 plot; you are joining a thriving
              ecosystem.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Education & Faith"
              text="Minutes away from top-tier schools and established churches."
            />
            <FeatureCard
              title="Future Growth"
              text="Located adjacent to an upcoming multi-million shilling business complex that is set to skyrocket property values in the immediate area."
            />
            <FeatureCard
              title="City Access"
              text="Work in the CBD and sleep in the suburbs. A smooth 10-minute drive is all that separates you from the heart of Nakuru City."
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
<section id="gallery" className="scroll-mt-24 bg-white px-6 py-20 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
        Project Gallery
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">
        Explore Ngata Commercial Centre
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {galleryImages.map((src, index) => (
        <div
          key={src}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#eef2f7] shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
        >
          <Image
            src={src}
            quality={90}
            alt={`Ngata Commercial Centre ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-700 ease-in-out group-hover:scale-110"
          />
          
          {/* Subtle overlay gradient that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f52]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </div>
</section>
      

      {/* INVESTMENT TABLE */}
      <section className="bg-[#0b1f52] px-6 py-20 text-white lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            An Investment That Fits Your Pace
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            We’ve made it easier than ever to join the Ngata community.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            Choose the plan that works for your financial goals.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
  <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
      Plot Size
    </p>
    <p className="text-xl font-bold text-white">
      Standard 50 x 100
    </p>
    <p className="mt-2 text-sm text-white/70">
      (1/8 Acre)
    </p>
  </div>

  <div className="rounded-[1.5rem] border border-[#8cc63f]/35 bg-[#8cc63f]/10 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
      Cash Offer
    </p>
    <p className="text-3xl font-bold text-white">
      KES 2,000,000
    </p>
    <p className="mt-2 text-sm text-white/75">
      (Discounted for immediate settlement)
    </p>
  </div>

  <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
      Lipa Polepole
    </p>
    <p className="text-base font-semibold leading-7 text-white">
      Flexible installment plans available. Own your land while you pay!
    </p>
  </div>
</div>
</div>
</section>

      {/* URGENCY + MAP + FORM */}
<section className="bg-white px-6 py-20 lg:px-12">
  <div className="mx-auto flex max-w-5xl flex-col gap-10">
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
        Ready to take the next step?
      </p>

      <h2 className="text-3xl font-bold sm:text-4xl">
        The Best Time to Buy Was Yesterday. The Second Best Time is NOW.
      </h2>

      <p className="mt-6 text-base leading-8 text-gray-600">
        Property values along the Nakuru-Eldoret highway are appreciating
        rapidly. Don&apos;t wait until the &quot;Sold Out&quot; signs go
        up.
      </p>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#e8eef5] bg-[#f8fafc] shadow-sm">
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ab62f]">
                  Interactive Map
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#0b1f52]">
                  See exactly where you’ll be building
                </h3>
              </div>

              <div className="relative h-[320px] w-full bg-[#e9edf3]">
                {mapEmbedSrc ? (
                  <iframe
                    src={mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                    <p className="max-w-md text-sm leading-7 text-gray-600">
                      The interactive map embed will appear here once the Google
                      Maps embed link is added.
                    </p>

                    <a
                      href={mapShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 rounded-full bg-[#0b1f52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8cc63f] hover:text-[#0b1f52]"
                    >
                      Open Location on Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <form
            id="site-visit"
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#e8eef5] bg-[#f8fafc] p-6 shadow-sm sm:p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Book a Free Site Visit This Week
            </p>

            <h3 className="text-3xl font-bold text-[#0b1f52]">
              Talk to an Investment Consultant
            </h3>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Send your details directly to our team on WhatsApp. The project
              of interest is already set to Ngata Commercial Centre.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
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
              className="mt-6 w-full rounded-full bg-[#7ab62f] px-7 py-3.5 font-semibold text-[#0b1f52] transition hover:scale-[1.02]"
            >
              Submit Interest on WhatsApp
            </button>
          </form>
        </div>
      </section>

      <ContactSection />

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-3xl font-light text-white"
              aria-label="Close video"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-[1.5rem] bg-black shadow-2xl">
              <video
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={videoPosterSrc}
                className="max-h-[80vh] w-full object-contain"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#e8eef5] bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8cc63f]/15 text-[#4c7d16]">
        ✓
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#0b1f52]">{title}</h3>
      <p className="text-sm leading-7 text-gray-600">{text}</p>
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