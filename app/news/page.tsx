"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

function NewsPageContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "events";
  const activePost = searchParams.get("post");

  const whatsappLink = "https://wa.me/254707666000";

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

      {/* HERO */}
      <section className="relative w-full pt-[84px]">
        <div className="relative w-full">
          <Image
            src="/hyssop/eventcropped.png"
            alt="Hyssop Investors Day countdown at Tumaini Estate, Nakuru"
            width={2048}
            height={921}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* TAB NAV */}
      <section className="relative z-10 px-6 -mt-6 sm:-mt-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/news?tab=events"
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeTab === "events"
                  ? "bg-[#8cc63f] text-[#0b1f52]"
                  : "bg-white text-[#0b1f52] shadow-md"
              }`}
            >
              Events
            </Link>

            <Link
              href="/news?tab=blogs"
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeTab === "blogs"
                  ? "bg-[#8cc63f] text-[#0b1f52]"
                  : "bg-white text-[#0b1f52] shadow-md"
              }`}
            >
              Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      {activeTab === "events" && (
        <section className="px-6 pt-10 pb-20">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="rounded-[28px] border border-[#e7ecf3] bg-white p-8 shadow-[0_24px_60px_rgba(11,31,82,0.10)] sm:p-10 md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex rounded-full bg-[#eaf6d7] px-4 py-1 font-semibold text-[#4a8c2f]">
                  Upcoming Event
                </span>
                <span className="text-[#5b6880]">April 25, 2026</span>
                <span className="text-[#5b6880]">•</span>
                <span className="text-[#5b6880]">Tumaini Estate, Nakuru</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl md:text-5xl">
                Investors Day at Tumaini Estate
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5b6880] sm:text-lg">
                Join us for a special Investors Day at Tumaini Estate, Nakuru.
                This event is designed to bring together clients, investors, and
                prospective land buyers for a meaningful day centered on real
                ownership, trust, and long-term value.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5b6880] sm:text-lg">
                Guests will get the opportunity to experience the project,
                connect with the Hyssop team, and witness the confidence that
                comes with investing in trusted real estate in Kenya. If you
                have been exploring land for sale in Nakuru or looking for a
                secure property investment opportunity, this is a timely moment
                to engage directly with us.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5b6880] sm:text-lg">
                We would love to host you. Reach out on WhatsApp to confirm your
                attendance, ask questions, or request directions.
              </p>

              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOGS LIST */}
      {activeTab === "blogs" && !activePost && (
        <section className="px-6 pt-10 pb-20">
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

            <Link
              href={`/news?tab=blogs&post=${blog.slug}`}
              className="block rounded-[28px] border border-[#e7ecf3] bg-white p-8 shadow-[0_24px_60px_rgba(11,31,82,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(11,31,82,0.14)] sm:p-10"
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
            </Link>
          </div>
        </section>
      )}

      {/* SINGLE BLOG POST */}
      {activeTab === "blogs" && activePost === blog.slug && (
        <section className="px-6 pt-10 pb-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/news?tab=blogs"
              className="mb-6 inline-flex text-sm font-semibold text-[#4a8c2f]"
            >
              ← Back to blogs
            </Link>

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