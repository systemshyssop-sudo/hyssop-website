"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const diasporaPhotos = [
  "/hyssop/diaspora/21.jpg",
  "/hyssop/diaspora/22.jpg",
  "/hyssop/diaspora/23.jpg",
  "/hyssop/diaspora/24.jpg",
  "/hyssop/diaspora/25.jpg",
  "/hyssop/diaspora/26.jpg",
  "/hyssop/diaspora/27.jpg",
  "/hyssop/diaspora/28.jpg",
  "/hyssop/diaspora/29.jpg",
  "/hyssop/diaspora/30.jpg",
];

export default function DiasporaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroImage = "/hyssop/diaspora/hero1.jpg";
  const authorityImage = "/hyssop/diaspora/leadership1.jpg";

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden pt-[100px] text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hyssop diaspora services"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07163f]/65" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-16 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8cc63f]">
              Diaspora Property Support
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-[5.8rem]">
              Building Home,
              <br />
              From Anywhere.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Trusted by Kenyans worldwide to acquire land, receive title deeds,
              and build back home with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20am%20in%20the%20diaspora%20and%20would%20like%20guidance%20on%20property%20ownership%20in%20Kenya."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#8cc63f] px-6 py-3 font-semibold text-[#0b1f52] transition hover:brightness-95"
              >
                Speak to a Consultant
              </a>

              <a
                href="#diaspora-gallery"
                className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Diaspora Moments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
            Built for Confidence
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A trusted partner for diaspora clients
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#42557a]">
            Over the years, Hyssop Properties has worked with thousands of
            diaspora clients, helping them acquire land, develop property, and
            build homes back in Kenya with confidence.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#42557a]">
            From initial inquiry to receiving title deeds, our process is
            designed to be seamless, transparent, and fully supported no matter
            where you are in the world.
          </p>
        </div>
      </section>

      {/* TRUST / PROOF */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <TrustCard
            title="Global Client Reach"
            text="We have served Kenyans across South Africa, other African countries, Gulf countries, the United States, the United Kingdom, Europe, and Asia."
          />
          <TrustCard
            title="Structured Guidance"
            text="We support diaspora buyers from inquiry to ownership with clear communication, practical next steps, and trusted documentation support."
          />
          <TrustCard
            title="Real Proof of Delivery"
            text="Diaspora meetings, title deed handovers, and client references reinforce the confidence clients place in Hyssop Properties."
          />
        </div>
      </section>

      {/* IMAGE STRIP / SOCIAL PROOF */}
      <section id="diaspora-gallery" className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
              Diaspora Moments
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Visible trust, real engagement, global presence
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#42557a]">
              These moments help communicate something important: diaspora trust
              is built through real presence, direct engagement, and consistent
              follow-through.
            </p>
          </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {diasporaPhotos.slice(0, 8).map((src, index) => (
    <button
      key={src}
      type="button"
      onClick={() => setSelectedImage(src)}
      className="group relative overflow-hidden rounded-[18px] bg-white shadow-[0_14px_35px_rgba(11,31,82,0.08)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
  src={src}
  alt={`Hyssop diaspora event image ${index + 1}`}
  loading="eager"
  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
/>
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
      </div>
    </button>
  ))}
</div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(11,31,82,0.10)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={authorityImage}
                alt="Hyssop leadership at a diaspora event"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
              Leadership You Can Trust
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Credibility that travels with the client journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#42557a]">
              Hyssop’s leadership presence in diaspora forums and international
              investment conversations reinforces a simple message: clients are
              not dealing with a faceless company. They are dealing with a team
              that shows up, educates, and stands behind the process.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#42557a]">
              That visibility helps diaspora buyers move forward with greater
              confidence, especially when navigating land ownership decisions
              from thousands of miles away.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
              How We Support You
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A guided process from first inquiry to final ownership
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              step="01"
              title="Consultation"
              text="We understand your goals, budget, location preferences, and timeline."
            />
            <StepCard
              step="02"
              title="Project Guidance"
              text="We recommend suitable opportunities and share practical next steps clearly."
            />
            <StepCard
              step="03"
              title="Documentation Support"
              text="We guide you through reservation, payments, and title-related processes with transparency."
            />
            <StepCard
              step="04"
              title="Ownership and Beyond"
              text="We remain available as your local partner as you build, hold, or develop."
            />
          </div>
        </div>
      </section>

      {/* CO-OP SECTION */}
      <section className="bg-[#0b1f52] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
            Smarter Investing From Abroad
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A smarter way to invest from abroad
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/88">
            Through the Hyssop Investment Co-operative, we make property
            ownership even more accessible for diaspora clients.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/88">
            Clients can save towards land ownership in a structured way, earn
            interest on their savings, and access quick, affordable financing
            using their property as security.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/88">
            This integrated system ensures that distance is never a barrier and
            that every client has the tools to build wealth sustainably.
          </p>

          <Link href="/investments">
            <button className="mt-8 rounded-full bg-[#8cc63f] px-8 py-4 font-semibold text-[#0b1f52] transition hover:scale-105">
              Explore the Co-operative
            </button>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Start your journey home
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#42557a]">
            Whether you're planning to invest, build, or secure land for the
            future, Hyssop Properties is your trusted partner every step of the
            way.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20am%20in%20the%20diaspora%20and%20would%20like%20to%20start%20my%20property%20journey."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#8cc63f] px-8 py-4 font-semibold text-[#0b1f52] transition hover:scale-105"
            >
              Speak to a Consultant
            </a>

            <a
              href="/properties"
              className="rounded-full border border-[#0b1f52]/15 bg-white px-8 py-4 font-semibold text-[#0b1f52] transition hover:border-[#0b1f52] hover:bg-[#0b1f52] hover:text-white"
            >
              View Properties
            </a>
          </div>
        </div>
      </section>

      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>

      <FloatingWhatsApp />
      <ChatbotWidget />

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
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

            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-black">
              <img
                src={selectedImage}
                alt="Diaspora event enlarged"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function DiasporaImage({
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

function TrustCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#e7edf5] bg-white p-8 shadow-[0_12px_35px_rgba(11,31,82,0.05)]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-8 text-[#42557a]">{text}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#e7edf5] bg-[#f8f9fa] p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8cc63f]">
        {step}
      </p>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-8 text-[#42557a]">{text}</p>
    </div>
  );
}