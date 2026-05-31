"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ContactRequestForm from "@/components/ContactRequestForm";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  label: string;
};

type Property = {
  name: string;
  location: string;
  price: string;
  description: string;
  image: string;
  href: string;
};

type ApproachItem = {
  title: string;
  description: string;
};

type TestimonialItem = {
  type: "video" | "image";
  src: string;
  title: string;
  poster?: string;
};

type Award = {
  image: string;
  title: string;
  subtitle: string;
};

const properties: Property[] = [
  {
    name: "Ngata Commercial Center",
    location: "10 minutes from Nakuru CBD",
    price: "Prime commercial & residential plots",
    description:
      "The perfect intersection of high-traffic business and serene modern living, located at the gateway to Nakuru.",
    image: "/hyssop/ncc/3.png",
    href: "/plots-for-sale-in-nakuru",
  },
  {
    name: "Tumaini Estate",
    location: "10 minutes from Nakuru CBD",
    price: "Prime gated plots",
    description:
      "A calm, strategic development positioned for secure family ownership and long-term value growth.",
    image: "/hyssop/1.png",
    href: "/properties/tumaini",
  },
];

const approach: ApproachItem[] = [
  {
    title: "Trust",
    description:
      "Clarity at every stage. No hidden costs. No uncertainty. Just a transparent path from inquiry to title deed.",
  },
  {
    title: "Ownership",
    description:
      "We stay with you until your investment is fully yours - verified, documented, and confidently secured.",
  },
  {
    title: "Growth",
    description:
      "Every opportunity is selected with tomorrow in mind, giving your investment room to appreciate and strengthen over time.",
  },
  {
    title: "Investment",
    description:
      "Your property can become more than ownership - a foundation for leverage, income, and broader financial growth.",
  },
];

const testimonials: TestimonialItem[] = [
  { type: "video", src: "/hyssop/testimonials/1.mp4", title: "Client testimonial 1" },
  { type: "video", src: "/hyssop/testimonials/2.mp4", poster: "/hyssop/testimonials/poster2.PNG", title: "Client testimonial 2" },
  { type: "video", src: "/hyssop/testimonials/3.mp4", poster: "/hyssop/testimonials/poster3.png", title: "Client testimonial 3" },
  { type: "video", src: "/hyssop/testimonials/4.mp4", poster: "/hyssop/testimonials/poster4.PNG", title: "Client testimonial 4" },
  { type: "video", src: "/hyssop/testimonials/5.mp4", poster: "/hyssop/testimonials/poster5.png", title: "Client testimonial 5" },
  { type: "video", src: "/hyssop/testimonials/6.mp4", title: "Client testimonial 6" },
  { type: "video", src: "/hyssop/testimonials/7.mp4", poster: "/hyssop/testimonials/poster7.PNG", title: "Client testimonial 7" },
  { type: "image", src: "/hyssop/testimonials/1.jpg", title: "Client ownership moment" },
  { type: "image", src: "/hyssop/testimonials/4.jpg", title: "Client title deed moment" },
];

const awards: Award[] = [
  {
    image: "/hyssop/awards/1.jpg",
    title: "Top 10 Most Dependable CEOs in Kenya",
    subtitle: "Dependable Brands Africa • 2025",
  },
  {
    image: "/hyssop/awards/2.png",
    title: "Best Land Selling Company",
    subtitle: "Nation Property Awards • 2025",
  },
  {
    image: "/hyssop/awards/3.png",
    title: "Most Trusted & Reliable Company",
    subtitle: "RESA Awards • 2024",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <OurApproach />
      <Stats />
      <Testimonials />
      <GoogleReviewsSection />
      <Awards />
      <ContactRequestForm />
      <InvestmentCTA />
      <ContactSection />
    </main>
  );
}

const heroSlides: Slide[] = [
  {
    image: "/hyssop/hero/03.jpg",
    eyebrow: "Proof of Delivery",
    title: "A Culture of Trust.",
    subtitle: "Real clients. Verified ownership. Delivered results.",
    label: "Testimonials",
  },
  {
    image: "/hyssop/diaspora/2.jpg",
    eyebrow: "Diaspora Support",
    title: "Invest from anywhere.",
    subtitle: "Invest from anywhere with confidence and transparency.",
    label: "Diaspora",
  },
  {
    image: "/hyssop/ncc/7.png",
    eyebrow: "Featured Location",
    title: "Prime land. Clear process.",
    subtitle: "Premium land for sale in Kenya with verified title deeds and transparent ownership.",
    label: "Ngata Commercial Center",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
  };

  const activeSlide = heroSlides[current];

  return (
    <div className="relative">
      <section className="bg-[#0b1f52] text-white lg:hidden">
        <div className="px-6 pt-8 pb-7 text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8cc63f]">
            {activeSlide.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight">
            A Culture of <span className="text-[#8cc63f]">Trust</span>
          </h1>
          <div className="mt-7 flex flex-col gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 text-sm font-bold text-[#0b1f52]"
            >
              View Properties
            </Link>
            <Link
              href="/investments"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3.5 text-sm font-bold text-white"
            >
              Explore Investments
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] w-full overflow-hidden bg-[#e9edf3]">
          <Image
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.label}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </section>

      <section
        className="relative hidden w-full overflow-hidden bg-[#0b1f52] text-white lg:block"
        style={{ height: "58vh", minHeight: "440px" }}
      >
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
              style={{
                opacity: current === index ? 1 : 0,
                zIndex: current === index ? 20 : 0,
              }}
            >
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                priority={index === 0}
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
                className="object-cover object-center lg:object-[center_45%]"
              />
              <div
                className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm"
                style={{ position: "absolute", top: "24px", left: "24px", zIndex: 50 }}
              >
                {slide.eyebrow}
              </div>
            </div>
          ))}
          <div className="absolute inset-0 z-30 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
          <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div
          style={{
            position: "absolute",
            left: "24px",
            right: "24px",
            bottom: "34px",
            zIndex: 40,
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.4rem]"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.75)" }}
            >
              A Culture of <span className="text-[#8cc63f]">Trust</span>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/properties"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 text-sm font-bold text-[#0b1f52] transition hover:scale-[1.03] sm:w-auto"
              >
                View Properties
              </Link>
              <Link
                href="/investments"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/60 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0b1f52] sm:w-auto"
              >
                Explore Investments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-24px",
          marginBottom: "24px",
          position: "relative",
          zIndex: 90,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            border: "1px solid #dfe7f0",
            background: "rgba(255,255,255,0.98)",
            borderRadius: "999px",
            padding: "12px 24px",
            boxShadow: "0 14px 35px rgba(11,31,82,0.14)",
          }}
        >
          {heroSlides.map((_, index) => {
            const isActive = current === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  display: "block",
                  width: isActive ? "52px" : "16px",
                  height: "16px",
                  borderRadius: "999px",
                  border: isActive ? "1px solid #8cc63f" : "1px solid rgba(11,31,82,0.28)",
                  backgroundColor: isActive ? "#8cc63f" : "rgba(11,31,82,0.42)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  padding: 0,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FeaturedProperties() {
  return (
    <section className="bg-[#f7f9fc] px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            Featured Properties
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Premium opportunities, presented with clarity.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#61708a]">
            Explore selected Hyssop projects with clear location advantages,
            verified ownership support, and a guided path to title transfer.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {properties.map((property) => (
            <article
              key={property.name}
              className="group overflow-hidden rounded-[30px] border border-[#dfe7f0] bg-white shadow-[0_20px_55px_rgba(11,31,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(11,31,82,0.12)]"
            >
              <Link
                href={property.href}
                aria-label={`View ${property.name}`}
                className="relative block h-[260px] w-full overflow-hidden bg-[#eef3f8]"
              >
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061531]/70 via-[#061531]/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-[#8cc63f] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0b1f52]">
                    {property.price}
                  </span>
                </div>
              </Link>
              <div className="p-7 sm:p-8">
                <p className="text-sm font-medium text-[#6b7a93]">{property.location}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b1f52]">
                  {property.name}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#61708a]">{property.description}</p>
                <div className="mt-7">
                  <Link
                    href={property.href}
                    className="inline-flex items-center justify-center rounded-full bg-[#0b1f52] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8cc63f] hover:text-[#0b1f52]"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 font-bold text-[#0b1f52] transition duration-300 hover:scale-[1.02]"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  const [videoOpen, setVideoOpen] = useState(false);
  useEffect(() => {
    if (!videoOpen) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [videoOpen]);

  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div className="max-w-xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            Our Difference
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Ownership you can see, not just promises.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#61708a]">
            From site visits to title deed issuance, Hyssop supports clients
            through a clear, documented, and confidence-led ownership journey.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {approach.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[#e7edf4] bg-[#fbfcfe] p-5">
                <h3 className="text-base font-semibold text-[#0b1f52]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#61708a]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full" style={{ marginTop: "64px" }}>
          <p className="mb-7 max-w-xl text-[15px] leading-8 text-[#4f6384]">
            Check out highlights from our recent title deed issuance event and
            see the trust, transparency, and client confidence behind every
            Hyssop investment.
          </p>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group relative h-[420px] w-full overflow-hidden rounded-[34px] bg-[#eef3f8] text-left shadow-[0_28px_80px_rgba(11,31,82,0.16)] ring-1 ring-black/5"
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
      </div>

      {/* SURGICAL UPDATE: Modal behavior matched strictly to Testimonials */}
      {videoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-6" onClick={() => setVideoOpen(false)}>
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setVideoOpen(false)} className="absolute -top-10 right-0 text-2xl text-white/70 hover:text-white">Close ×</button>
            <div className="overflow-hidden rounded-xl bg-black shadow-2xl">
              <video controls autoPlay playsInline className="max-h-[70vh] w-full object-contain">
                <source src="/hyssop/Recap.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function InvestmentCTA() {
  return (
    <section className="bg-[#f7f9fc] px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-br from-[#8cc63f]/25 via-[#7ab62f]/10 to-[#0b1f52]/20 blur-2xl" />
          <div className="relative rounded-[32px] bg-gradient-to-br from-[#8cc63f] via-[#6ea828] to-[#0b1f52] p-[1.5px] shadow-[0_30px_80px_rgba(11,31,82,0.15)]">
            <div className="rounded-[31px] bg-white px-8 py-12 text-center sm:px-12 sm:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7ab62f]">
                Beyond ownership
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
                Hyssop Investment Co-operative
              </h2>
              <div className="mx-auto my-6 h-[2px] w-16 bg-[#8cc63f]" />
              <p className="mx-auto max-w-3xl text-base leading-8 text-[#61708a]">
                Your property can become more than a title deed. With the right structure, it can support savings, unlock financing, and accelerate your next move.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#61708a]">
                Through the Hyssop Investment Co-operative, clients can save towards land ownership and access quick, flexible loans using their title deed.
              </p>
              <div className="mt-8">
                <Link
                  href="/investments"
                  className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 font-semibold text-[#0b1f52] shadow-[0_18px_36px_rgba(140,198,63,0.18)] transition duration-300 hover:scale-[1.02]"
                >
                  Explore Investment Co-operative
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 24, start: 18, suffix: "+", label: "Projects" },
    { value: 50000, start: 9600, suffix: "+", label: "Titles Issued" },
    { value: 10000, start: 8600, suffix: "+", label: "Satisfied Clients" },
    { value: 15, start: 10, suffix: "+", label: "Awards" },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Hyssop in numbers
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Measured by trust delivered.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-[#e7edf4] bg-[#fbfcfe] px-5 py-8 text-center shadow-[0_10px_24px_rgba(11,31,82,0.04)]"
            >
              <CountUp
                start={stat.start}
                end={stat.value}
                suffix={stat.suffix}
                className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl"
              />
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-[#6c7b94]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ start, end, suffix = "", className = "" }: { start: number; end: number; suffix?: string; className?: string; }) {
  const [value, setValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasAnimated(true);
      const duration = 1200;
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const next = Math.round(start + (end - start) * eased);
        setValue(next);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [start, end, hasAnimated]);

  return <div ref={ref} className={className}>{new Intl.NumberFormat("en-US").format(value)}{suffix}</div>;
}

function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<TestimonialItem | null>(null);

  return (
    <section className="bg-[#f7f9fc] px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8cc63f]">Success stories</span>
          <h2 className="mt-3 text-3xl font-semibold text-[#0b1f52] sm:text-4xl">Real clients. Real title deeds.</h2>
          <p className="mt-5 text-[#61708a]">Hear directly from Hyssop clients and see real ownership moments.</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article key={index} className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-[180px] w-full bg-slate-200">
                {item.type === "video" ? (
                  <button onClick={() => setSelectedVideo(item)} className="relative block h-full w-full overflow-hidden">
                    {item.poster ? (
                      <Image src={item.poster} alt={item.title} fill className="object-cover object-center transition duration-500 group-hover:scale-105" />
                    ) : (
                      <video src={item.src} muted playsInline className="h-full w-full object-cover" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b1f52] shadow-lg transition group-hover:scale-110">▶</div>
                    </div>
                  </button>
                ) : (
                  <Image src={item.src} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8cc63f]">
                    {item.type === "video" ? "Video Testimonial" : "Ownership Moment"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-6" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-10 right-0 text-2xl text-white/70 hover:text-white">Close ×</button>
            <div className="overflow-hidden rounded-xl bg-black shadow-2xl">
              <video controls autoPlay playsInline className="max-h-[70vh] w-full object-contain">
                <source src={selectedVideo.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Awards() {
  return (
    <section className="bg-[#081942] px-6 py-24 text-white lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#a7d85f]">Recognition</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Awards & recognition</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">Recognition earned through trust and consistency.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {awards.map((award) => (
            <div key={award.title} className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] text-center transition hover:-translate-y-1 hover:border-[#8cc63f]/40">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image src={award.image} alt={award.title} fill className="object-cover" />
              </div>
              <div className="px-6 pb-6 pt-5">
                <p className="text-lg font-semibold text-white">{award.title}</p>
                <p className="mt-2 text-sm text-white/65">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/awards" className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 font-semibold text-[#0b1f52] transition hover:scale-[1.02]">View All Awards</Link>
        </div>
      </div>
    </section>
  );
}