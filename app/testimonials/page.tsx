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
    { type: "video", src: "/hyssop/testimonials/1.mp4", title: "Client testimonial 1" },
    { type: "video", src: "/hyssop/testimonials/2.mp4", poster: "/hyssop/testimonials/poster2.PNG", title: "Client testimonial 2" },
    { type: "video", src: "/hyssop/testimonials/3.mp4", poster: "/hyssop/testimonials/poster3.png", title: "Client testimonial 3" },
    { type: "video", src: "/hyssop/testimonials/4.mp4", poster: "/hyssop/testimonials/poster4.PNG", title: "Client testimonial 4" },
    { type: "video", src: "/hyssop/testimonials/5.mp4", poster: "/hyssop/testimonials/poster5.png", title: "Client testimonial 5" },
    { type: "video", src: "/hyssop/testimonials/6.mp4", title: "Client testimonial 6" },
    { type: "video", src: "/hyssop/testimonials/7.mp4", poster: "/hyssop/testimonials/poster7.PNG", title: "Client testimonial 7" },
  ];

  const images = [
    "1.png", "02.png", "3.png", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "80.png",
    "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.jpg", "16.png",
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO SECTION - MOBILE */}
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
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* HERO SECTION - DESKTOP */}
      <section className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block" style={{ height: "46vh", minHeight: "360px" }}>
        <Image
          src="/hyssop/03.jpg"
          alt="Hyssop title deed ceremony"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute bottom-24 left-6 right-6 z-10 max-w-[820px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
            Real clients. Real ownership.
          </p>
          <h1 className="text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
            Celebrating ownership, trust, and title deed delivery.
          </h1>
        </div>
      </section>

      {/* INTRO CARD */}
      <section className="relative z-10 px-6 pb-16 -mt-10 sm:-mt-12 md:-mt-14">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[28px] border border-[#e7ecf3] bg-white p-8 text-center shadow-[0_24px_60px_rgba(11,31,82,0.10)] sm:p-10 md:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl md:text-5xl">
              A record of promises fulfilled.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#5b6880] sm:text-lg">
              Thousands of clients across Kenya and the diaspora have successfully acquired{" "}
              <span className="font-semibold text-[#0b1f52]">verified land and property</span> through Hyssop Properties.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Client voices
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0b1f52] sm:text-3xl">
            Hear from the people who trusted Hyssop.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoTestimonials.map((item, index) => (
            <article key={index} className="group overflow-hidden rounded-xl bg-white shadow-md">
              <div className="relative h-[180px] w-full bg-slate-200">
                <button type="button" onClick={() => setSelectedVideo(item)} className="relative block h-full w-full">
                  {item.poster ? (
                    <Image 
                      src={item.poster} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover" 
                    />
                  ) : (
                    <video src={item.src} muted playsInline className="h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0b1f52] shadow-lg">▶</div>
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY - SURGICAL FIX FOR UNIFORMITY BASED ON image_77d8ff.jpg */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Ownership in photos
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0b1f52] sm:text-3xl">
            A culture of trust, captured.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={img}
              className="group overflow-hidden rounded-xl border border-[#e7ecf3] bg-white p-2 shadow-sm"
            >
              {/* Force uniform container size with aspect-ratio and relative positioning */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={`/hyssop/testimonials/${img}`}
                  alt={`Hyssop testimonial photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-lg font-medium hover:text-[#8cc63f]"
            >
              Close ×
            </button>
            <video
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-xl shadow-2xl bg-black"
            >
              <source src={selectedVideo.src} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </main>
  );
}