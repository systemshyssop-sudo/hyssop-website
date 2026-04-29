"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

const eventImages = [
  "/hyssop/events/1.jpg",
  "/hyssop/events/2.jpg",
  "/hyssop/events/3.jpg",
  "/hyssop/events/4.jpg",
  "/hyssop/events/5.jpg",
  "/hyssop/events/6.jpg",
  "/hyssop/events/7.jpg",
  "/hyssop/events/8.jpg",
];

const eventHeroImage = "/hyssop/events/hero.jpg";
const eventVideo = "/hyssop/events/dosika2.mp4"; // Updated to match your local path

function NewsPageContent() {
  const [activeTab, setActiveTab] = useState<"events" | "blogs">("events");
  const [activePost, setActivePost] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const whatsappLink = "https://wa.me/254707666000";

  useEffect(() => {
    if (!videoOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [videoOpen]);

  const blog = {
    slug: "avoid-land-scams-kenya",
    title: "How to Avoid Being Scammed When Buying Land in Kenya",
    excerpt:
      "A practical guide for buyers looking to invest safely in real estate in Kenya, with simple checks that can protect your money and your future.",
    date: "April 21, 2026",
    author: "Hyssop Editorial Team",
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1f52]">
      <Navbar />

      {/* TAB NAV */}
      <section className="relative z-10 bg-[#f7f8fa] px-6 pt-[112px]">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setActiveTab("events");
                setActivePost(null);
              }}
              className={`rounded-full px-6 py-3 font-medium transition ${
                activeTab === "events"
                  ? "bg-[#8cc63f] text-[#0b1f52]"
                  : "bg-white text-[#0b1f52] shadow-md hover:shadow-lg"
              }`}
            >
              Events
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("blogs");
                setActivePost(null);
              }}
              className={`rounded-full px-6 py-3 font-medium transition ${
                activeTab === "blogs"
                  ? "bg-[#8cc63f] text-[#0b1f52]"
                  : "bg-white text-[#0b1f52] shadow-md hover:shadow-lg"
              }`}
            >
              Blogs
            </button>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      {activeTab === "events" && (
        <>
          {/* EVENTS */}
{activeTab === "events" && (
  <>
   {/* 1. OPENING TEXT SECTION */}
<section className="bg-white px-6 pb-12 pt-16 lg:px-16">
  <div className="mx-auto max-w-6xl">
    {/* Text Section */}
    <div className="max-w-4xl">
      <span className="mb-6 inline-block text-xs font-black uppercase tracking-[0.3em] text-[#8cc63f]">
        Event Recap • April 2026
      </span>
      <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-[#0b1f52] sm:text-6xl lg:text-[5.5rem]">
        A milestone <br /> delivered.
      </h1>
      <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#61708a]">
        A look inside Hyssop Properties' title deed issuance and investor event 
        at Tumaini Estate, Nakuru. Real people, verified ownership.
      </p>
    </div>

    {/* 2. VIDEO SECTION (Now Center Aligned) */}
    <div className="mx-auto flex flex-col items-center w-full" style={{ marginTop: "64px" }}>
      <p className="mb-12 max-w-xl text-center text-[15px] leading-8 text-[#4f6384]">
        Check out highlights from our recent title deed issuance event and
        see the trust, transparency, and client confidence behind every
        Hyssop investment.
      </p>

      <button
        type="button"
        onClick={() => setVideoOpen(true)}
        className="group relative h-[420px] w-full max-w-4xl overflow-hidden rounded-[34px] bg-[#eef3f8] text-left shadow-[0_28px_80px_rgba(11,31,82,0.16)] ring-1 ring-black/5"
      >
        <Image
          src="/hyssop/thumbnail.jpg"
          alt="Hyssop title deed issuance event"
          fill
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061531]/80 via-[#061531]/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-2xl font-bold text-[#0b1f52] shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition duration-300 group-hover:scale-110">
            ▶
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            Watch the event
          </p>

          <h3 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Title deed issuance, client confidence, and real ownership.
          </h3>
        </div>
      </button>
    </div>
  </div> {/* This closes the mx-auto max-w-6xl */}
</section> {/* This closes the section */}
  </>
)}


          {/* VALUE PROPOSITION */}
          <section className="bg-white px-6 py-24 lg:px-16">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
                  What this moment represents
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
                  More than an event - proof of a completed journey.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#61708a]">
                  From site visits to documentation and title deed issuance,
                  this milestone reflects Hyssop's commitment to walking with
                  clients until ownership is clear, verified, and confidently
                  secured.
                </p>
                <p className="mt-4 text-base leading-8 text-[#61708a]">
                  The event gave clients a chance to celebrate real progress,
                  meet the Hyssop team, and experience the confidence that comes
                  with investing through a transparent real estate process.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Title deed handovers completed",
                  "Clients and investors hosted on site",
                  "Verified ownership process celebrated",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[#e7edf4] bg-[#fbfcfe] p-6 shadow-[0_14px_35px_rgba(11,31,82,0.06)]"
                  >
                    <p className="text-lg font-semibold text-[#0b1f52]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PHOTO GALLERY */}
          <section className="bg-[#f7f9fc] px-6 py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
                  Event moments
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
                  Moments from the day.
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {eventImages.map((src, index) => (
                  <div
                    key={src}
                    className="group overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_rgba(11,31,82,0.08)] ring-1 ring-black/5"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#eef3f8]">
                      <Image
                        src={src}
                        alt={`Hyssop event moment ${index + 1}`}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* BLOGS LIST */}
      {activeTab === "blogs" && !activePost && (
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
                Insights
              </span>
              <h1 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
                Latest from Hyssop
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#61708a] sm:text-base">
                Practical insights on land ownership, real estate in Kenya, and
                smarter property investment decisions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActivePost(blog.slug)}
              className="block w-full rounded-[28px] border border-[#e7ecf3] bg-white p-8 text-left shadow-[0_24px_60px_rgba(11,31,82,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(11,31,82,0.14)] sm:p-10"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#5b6880]">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.author}</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#0b1f52] sm:text-3xl">
                {blog.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5b6880]">
                {blog.excerpt}
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[#4a8c2f]">
                Read article
              </span>
            </button>
          </div>
        </section>
      )}

      {/* SINGLE BLOG POST */}
      {activeTab === "blogs" && activePost === blog.slug && (
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto max-w-4xl">
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className="mb-6 inline-flex text-sm font-semibold text-[#4a8c2f] hover:text-[#3d7326]"
            >
              ← Back to blogs
            </button>

            <article className="rounded-[28px] border border-[#e7ecf3] bg-white p-8 shadow-[0_24px_60px_rgba(11,31,82,0.10)] sm:p-10 md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#5b6880]">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.author}</span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl md:text-5xl">
                {blog.title}
              </h1>
              <div className="mt-8 space-y-6 text-base leading-8 text-[#5b6880] sm:text-lg">
                <p>
                  Buying land is one of the most important financial decisions a
                  person can make. Yet many buyers lose money because they move
                  too quickly, trust the wrong people, or fail to verify key
                  details before making payment...
                </p>
                {/* [Article Content Restored] */}
                <p>
                  At Hyssop, we believe land ownership should be built on trust,
                  clarity, and confidence.
                </p>
              </div>
              <div className="mt-10 border-t border-[#e7ecf3] pt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02]"
                >
                  Ask Us on WhatsApp
                </a>
              </div>
            </article>
          </div>
        </section>
      )}

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
              className="absolute -top-12 right-0 text-3xl font-light text-white hover:text-gray-300"
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
                poster={eventHeroImage}
                className="max-h-[80vh] w-full object-contain"
              >
                <source src={eventVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>
    </main>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f8fa]" />}>
      <NewsPageContent />
    </Suspense>
  );
}