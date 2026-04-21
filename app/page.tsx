"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";
import ContactSection from "@/components/ContactSection";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
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

type Award = {
  image: string;
  title: string;
  subtitle: string;
};

const heroSlides: Slide[] = [
  {
    image: "/hyssop/hero/001.png",
    eyebrow: "Verified ownership",
    title: "A culture of trust.",
    text: "Secure land investments backed by transparency, clarity, and real title delivery.",
    label: "Title Event",
  },
  {
    image: "/hyssop/hero/7.png",
    eyebrow: "Featured location",
    title: "Prime land. Clear process.",
    text: "Carefully selected projects designed for confident ownership and long-term value.",
    label: "Tumaini Estate",
  },
  {
    image: "/hyssop/diaspora/2.jpg",
    eyebrow: "Diaspora support",
    title: "Invest from anywhere.",
    text: "Helping Kenyans in the diaspora acquire property back home with confidence.",
    label: "Diaspora",
  },
  {
    image: "/hyssop/hero/44.png",
    eyebrow: "Beyond ownership",
    title: "Grow beyond the title deed.",
    text: "Turn property into a stronger financial future through strategic investment support.",
    label: "Investment",
  },
];

const properties: Property[] = [
  {
    name: "Tumaini Estate",
    location: "10 minutes from Nakuru CBD",
    price: "Prime gated plots",
    description:
      "A calm, strategic development positioned for secure family ownership and long-term value growth.",
    image: "/hyssop/gallery-1.png",
    href: "/properties",
  },
  {
    name: "Palm Ridge, Kitengela",
    location: "3 minutes from Namanga Road",
    price: "Accessible investment location",
    description:
      "A well-positioned opportunity for buyers seeking convenience, growth potential, and verified ownership.",
    image: "/hyssop/palmr.png",
    href: "/properties",
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
      "We stay with you until your investment is fully yours — verified, documented, and confidently secured.",
  },
  {
    title: "Growth",
    description:
      "Every opportunity is selected with tomorrow in mind, giving your investment room to appreciate and strengthen over time.",
  },
  {
    title: "Investment",
    description:
      "Your property can become more than ownership — a foundation for leverage, income, and broader financial growth.",
  },
];

const testimonialImages = [
  "/hyssop/testimonials/1.png",
  "/hyssop/testimonials/2.png",
  "/hyssop/testimonials/3.png",
  "/hyssop/testimonials/4.jpg",
  "/hyssop/testimonials/5.jpg",
  "/hyssop/testimonials/6.jpg",
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
    <main className="isolate bg-white text-[#0b1f52]">
      <Navbar />

      <Hero />
      <FeaturedProperties />
      <OurApproach />
      <InvestmentCTA />
      <Stats />
      <Testimonials />
      <Awards />

      <div id="contact" className="scroll-mt-[120px]">
        <ContactSection />
      </div>

      <FloatingWhatsApp />
      <ChatbotWidget />
    </main>
  );
}

function Hero() {
  const slides = [
    {
      image: "/hyssop/hero/001.png",
      text: "Join us on April 25th as we hand over real title deeds.",
      label: "Title Event",
    },
    {
      image: "/hyssop/hero/7.png",
      text: "Invest in land you can trust.",
      label: "Tumaini Estate",
    },
    {
      image: "/hyssop/diaspora/2.jpg",
      text: "Connecting Kenyans in diaspora to home.",
      label: "Diaspora",
    },
    {
      image: "/hyssop/hero/44.png",
      text: "Grow beyond ownership.",
      label: "Investment",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [typed, setTyped] = useState("");

  // TYPEWRITER
  useEffect(() => {
    let i = 0;
    setTyped("");

    const typing = setInterval(() => {
      setTyped(slides[current].text.slice(0, i));
      i++;
      if (i > slides[current].text.length) clearInterval(typing);
    }, 35);

    return () => clearInterval(typing);
  }, [current]);

  // AUTO SLIDE
  useEffect(() => {
    const auto = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(auto);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-[100px] px-6 lg:px-12 bg-white">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT TEXT */}
        <div className="max-w-xl">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            <span className="block text-[#0b1f52]">A Culture of</span>
            <span className="block text-[#7ab62f]">Trust</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 min-h-[28px]">
            {typed}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/properties">
              <button className="bg-[#7ab62f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold hover:scale-105 transition w-full sm:w-auto">
                View Properties
              </button>
            </Link>

            <Link href="/investments">
              <button className="border border-[#0b1f52] text-[#0b1f52] px-6 py-3 rounded-full font-semibold hover:bg-[#0b1f52] hover:text-white transition w-full sm:w-auto">
                Explore Investments
              </button>
            </Link>
          </div>

          {/* SLIDE CONTROLS */}
          <div className="flex gap-2 flex-wrap">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  current === i
                    ? "bg-[#0b1f52] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden shadow-xl">

          <Image
            src={slides[current].image}
            alt="Hero"
            fill
            className="object-cover transition duration-700 ease-in-out"
            priority
          />

        </div>

      </div>
    </section>
  );
}

function FeaturedProperties() {
  return (
    <section className="bg-[#f7f9fc] px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Featured Properties
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Premium opportunities, presented with clarity.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#61708a]">
            Prime locations, ready title deeds, and carefully selected investment opportunities designed for secure ownership and long-term growth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {properties.map((property) => (
            <article
              key={property.name}
              className="group overflow-hidden rounded-[28px] border border-[#e4ebf3] bg-white shadow-[0_20px_55px_rgba(11,31,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(11,31,82,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#eef7df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#5f8f1f]">
                    {property.price}
                  </span>
                  <span className="text-sm text-[#6b7a93]">{property.location}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0b1f52]">
                  {property.name}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#61708a]">
                  {property.description}
                </p>

                <div className="mt-7">
                  <Link
                    href={property.href}
                    className="inline-flex items-center justify-center rounded-full border border-[#0b1f52]/12 px-5 py-3 text-sm font-semibold text-[#0b1f52] transition duration-300 hover:bg-[#0b1f52] hover:text-white"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-7 py-3.5 font-semibold text-[#0b1f52] transition duration-300 hover:scale-[1.02]"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Our Difference
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Why clients choose Hyssop.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#61708a]">
            Every investment journey should feel clear, supported, and built for long-term confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {approach.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-[#e7edf4] bg-[#fbfcfe] p-8 shadow-[0_10px_24px_rgba(11,31,82,0.04)] transition duration-300 hover:border-[#8cc63f]/35 hover:shadow-[0_18px_40px_rgba(11,31,82,0.08)]"
            >
              <h3 className="text-xl font-semibold text-[#0b1f52]">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#61708a]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
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
    { value: 50001, start: 48000, suffix: "+", label: "Titles Issued" },
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

function CountUp({
  start,
  end,
  suffix = "",
  className = "",
}: {
  start: number;
  end: number;
  suffix?: string;
  className?: string;
}) {
  const [value, setValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);

        const duration = 1200;
        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const next = Math.round(start + (end - start) * eased);
          setValue(next);

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [start, end, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {formatNumber(value)}
      {suffix}
    </div>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function Testimonials() {
  const featured = testimonialImages.slice(0, 4);

  return (
    <section className="bg-[#f7f9fc] px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Success stories
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Real clients. Real title deeds.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#61708a]">
            A few of the many clients who have secured verified land and property through Hyssop Properties.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((src, index) => (
            <div
              key={src}
              className="group overflow-hidden rounded-[24px] border border-[#e4ebf3] bg-white p-3 shadow-[0_16px_40px_rgba(11,31,82,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(11,31,82,0.10)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#eef3f8]">
                <Image
                  src={src}
                  alt={`Hyssop client success story ${index + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center rounded-full border border-[#0b1f52]/12 px-7 py-3.5 font-semibold text-[#0b1f52] transition duration-300 hover:bg-[#0b1f52] hover:text-white"
          >
            View More Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="bg-[#081942] px-6 py-24 text-white lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#a7d85f]">
          Recognition
        </span>

        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Awards & recognition
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
          Recognition earned through trust, consistency, and a commitment to doing real estate properly.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.title}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#8cc63f]/40 hover:shadow-[0_24px_60px_rgba(140,198,63,0.14)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="px-6 pb-6 pt-5">
                <p className="text-lg font-semibold leading-7 text-white">
                  {award.title}
                </p>
                <p className="mt-2 text-sm text-white/65">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/awards"
            className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 font-semibold text-[#0b1f52] transition duration-300 hover:scale-[1.02]"
          >
            View All Awards
          </Link>
        </div>
      </div>
    </section>
  );
}