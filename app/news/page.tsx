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
const eventVideo = "/hyssop/events/Recap1.mp4";

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
    <section className="bg-[#f7f8fa] px-6 pb-8 pt-12 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
          Event Recap
        </span>

        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#0b1f52] sm:text-5xl lg:text-[4rem]">
          A milestone delivered.
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#61708a] sm:text-lg">
          A look inside Hyssop Properties' April 2026 title deed issuance and
          investor event at Tumaini Estate, Nakuru.
        </p>
      </div>
    </section>

    {/* VIDEO THUMBNAIL */}
    <section className="bg-[#f7f8fa] px-6 pb-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          className="group relative aspect-video w-full overflow-hidden rounded-[34px] bg-black shadow-[0_28px_80px_rgba(11,31,82,0.16)] ring-1 ring-black/5"
        >
          <img
            src={eventHeroImage}
            alt="Hyssop title deed issuance video thumbnail"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#8cc63f] text-4xl font-bold text-[#0b1f52] shadow-2xl transition duration-300 group-hover:scale-110">
              ▶
            </div>
          </div>
        </button>
      </div>
    </section>

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
            From site visits to documentation and title deed issuance, this
            milestone reflects Hyssop's commitment to walking with clients until
            ownership is clear, verified, and confidently secured.
          </p>

          <p className="mt-4 text-base leading-8 text-[#61708a]">
            The event gave clients a chance to celebrate real progress, meet the
            Hyssop team, and experience the confidence that comes with investing
            through a transparent real estate process.
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
              <p className="text-lg font-semibold text-[#0b1f52]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

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
                  details before making payment. If you are exploring{" "}
                  <span className="font-semibold text-[#0b1f52]">
                    real estate in Kenya
                  </span>
                  , taking the right precautions can protect both your money and
                  your peace of mind.
                </p>

                <p>
                  The first step is to verify ownership. Never rely only on
                  verbal assurances, screenshots, or excitement around a deal.
                  Ask to see the title documents and ensure the seller has the
                  legal right to transact. A genuine land purchase should always
                  be supported by clear documentation and a process you can
                  follow with confidence.
                </p>

                <p>
                  It is also important to visit the site physically. Photos and
                  online posts can be helpful, but they are not enough on their
                  own. A site visit helps you confirm location, accessibility,
                  surroundings, and whether the property matches what has been
                  advertised. This is especially important for anyone looking for{" "}
                  <span className="font-semibold text-[#0b1f52]">
                    land for sale in Kenya
                  </span>{" "}
                  from afar.
                </p>

                <p>
                  Another smart step is to work with a trusted company that
                  values transparency. In the property market, trust matters.
                  Clear communication, consistent documentation, and a
                  professional client journey reduce the chance of confusion or
                  costly mistakes. When dealing with{" "}
                  <span className="font-semibold text-[#0b1f52]">
                    property investment in Kenya
                  </span>
                  , it is always better to choose a process that protects you at
                  every stage.
                </p>

                <p>
                  Buyers should also be cautious about rushed payments. If
                  someone pressures you to send money immediately without giving
                  you time to verify details, that is a red flag. A serious land
                  transaction should allow room for due diligence, proper review,
                  and informed decision-making.
                </p>

                <p>
                  At Hyssop, we believe land ownership should be built on trust,
                  clarity, and confidence. Whether you are a first-time buyer or
                  an experienced investor, taking time to verify documents, visit
                  the property, and work with a credible team can help you avoid
                  unnecessary risk and make stronger real estate decisions.
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