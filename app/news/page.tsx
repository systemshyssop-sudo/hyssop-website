"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
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
            <div className="rounded-[28px] border border-[#e7ecf3] bg-white p-8 shadow sm:p-10 md:p-12">
              <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                Investors Day at Tumaini Estate
              </h1>

              <p className="mt-5 text-[#5b6880]">
                Join us for a special Investors Day at Tumaini Estate, Nakuru.
              </p>

              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-white"
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
            <Link
              href={`/news?tab=blogs&post=${blog.slug}`}
              className="block rounded-[28px] bg-white p-8 shadow"
            >
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="mt-4 text-[#5b6880]">{blog.excerpt}</p>
            </Link>
          </div>
        </section>
      )}

      {/* SINGLE BLOG */}
      {activeTab === "blogs" && activePost === blog.slug && (
        <section className="px-6 pt-10 pb-20">
          <div className="mx-auto max-w-4xl">
            <article className="bg-white p-8 shadow">
              <h1 className="text-3xl font-semibold">{blog.title}</h1>
              <p className="mt-6 text-[#5b6880]">
                Buying land is one of the most important financial decisions...
              </p>
            </article>
          </div>
        </section>
      )}

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <NewsPageContent />
    </Suspense>
  );
}