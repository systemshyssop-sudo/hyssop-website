"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

type VideoTestimonial = {
  type: "video";
  src: string;
  poster?: string;
  title: string;
};

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(
    null
  );

  const videoTestimonials: VideoTestimonial[] = [
    {
      type: "video",
      src: "/hyssop/testimonials/1.mp4",
      title: "Client testimonial 1",
    },
    {
      type: "video",
      src: "/hyssop/testimonials/2.mp4",
      poster: "/hyssop/testimonials/poster2.PNG",
      title: "Client testimonial 2",
    },
    {
      type: "video",
      src: "/hyssop/testimonials/3.mp4",
      poster: "/hyssop/testimonials/poster3.png",
      title: "Client testimonial 3",
    },
    {
      type: "video",
      src: "/hyssop/testimonials/4.mp4",
      poster: "/hyssop/testimonials/poster4.PNG",
      title: "Client testimonial 4",
    },
    {
      type: "video",
      src: "/hyssop/testimonials/5.mp4",
      poster: "/hyssop/testimonials/poster5.png",
      title: "Client testimonial 5",
    },
    {
      type: "video",
      src: "/hyssop/testimonials/6.mp4",
      title: "Client testimonial 6",
    },
    {
      type: "video",
      src: "/hyssop/testimonials/7.mp4",
      poster: "/hyssop/testimonials/poster7.PNG",
      title: "Client testimonial 7",
    },
  ];

  const images = [
    "1.png",
    "02.png",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "80.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.jpg",
    "16.png",
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <>
        {/* MOBILE HERO - TEXT FIRST, IMAGE SECOND */}
        <section className="bg-[#0b1f52] text-white lg:hidden">
          <div className="px-6 pt-8 pb-7">
            <div className="mb-5 inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
              Title Deed Ceremony
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
              Real clients. Real ownership.
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white">
              Celebrating ownership, trust, and title deed delivery.
            </h1>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden bg-[#e9edf3]">
            <Image
              src="/hyssop/03.jpg"
              alt="Hyssop title deed ceremony"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </section>

        {/* DESKTOP HERO - SAME PROPERTY HERO STYLE */}
        <section
          className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block"
          style={{
            height: "46vh",
            minHeight: "360px",
          }}
        >
          <Image
            src="/hyssop/03.jpg"
            alt="Hyssop title deed ceremony"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
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
            Title Deed Ceremony
          </div>

          <div
            style={{
              position: "absolute",
              left: "24px",
              right: "24px",
              bottom: "96px",
              zIndex: 10,
              maxWidth: "820px",
            }}
          >
            <p
              className="mb-4 hidden text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f] sm:block"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
              }}
            >
              Real clients. Real ownership.
            </p>

            <h1
              className="max-w-3xl text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-5xl"
              style={{
                textShadow: "0 4px 28px rgba(0,0,0,0.85)",
              }}
            >
              Celebrating ownership, trust, and title deed delivery.
            </h1>
          </div>
        </section>
      </>

      {/* INTRO CARD */}
      <section className="relative z-10 px-6 pb-16 -mt-10 sm:-mt-12 md:-mt-14">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[28px] border border-[#e7ecf3] bg-white p-8 text-center shadow-[0_24px_60px_rgba(11,31,82,0.10)] sm:p-10 md:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl md:text-5xl">
              A record of promises fulfilled.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5b6880] sm:text-lg">
              Thousands of clients across Kenya and the diaspora have
              successfully acquired
              <span className="font-semibold text-[#0b1f52]">
                {" "}
                verified land and property
              </span>{" "}
              through Hyssop Properties.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION HEADING */}
      <section className="px-6 pt-6 pb-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Client moments
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Real ownership. Real milestones.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#61708a] sm:text-base">
            A curated collection of client journeys, title handovers, and the
            confidence that comes with dealing with Hyssop.
          </p>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Client voices
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Hear from the people who trusted Hyssop.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#61708a] sm:text-base">
            Real clients sharing their experience, confidence, and ownership
            journey with Hyssop Properties.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videoTestimonials.map((item, index) => (
            <article
              key={`${item.src}-${index}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-slate-200 sm:h-[215px] lg:h-[205px] xl:h-[220px]">
                <button
                  type="button"
                  onClick={() => setSelectedVideo(item)}
                  className="relative block h-full w-full overflow-hidden"
                  aria-label={`Play ${item.title}`}
                >
                  {item.poster ? (
                    <Image
                      src={item.poster}
                      alt={item.title}
                      width={900}
                      height={506}
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover object-center"
                    />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0b1f52] shadow-xl transition group-hover:scale-110">
                      ▶
                    </div>
                  </div>
                </button>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061531]/70 via-[#061531]/20 to-transparent px-4 pb-4 pt-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8cc63f]">
                    Video Testimonial
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Ownership in photos
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            A culture of trust, captured in real moments.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#61708a] sm:text-base">
            From title deed handovers to client milestones, these moments
            reflect the confidence behind every Hyssop ownership journey.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group rounded-[22px] border border-[#e7ecf3] bg-white p-3 shadow-[0_12px_30px_rgba(11,31,82,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,31,82,0.10)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#f3f5f8]">
                <Image
                  src={`/hyssop/testimonials/${img}`}
                  alt={`Hyssop client ${i + 1}`}
                  fill
                  quality={85}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-3xl font-light text-white"
              aria-label="Close testimonial video"
            >
              ×
            </button>

            <video
              controls
              autoPlay
              playsInline
              className="max-h-[82vh] w-full rounded-xl bg-black object-contain"
            >
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}