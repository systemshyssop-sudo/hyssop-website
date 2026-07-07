"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

const projectName = "NCC Commercial Plots";
const whatsappNumber = "254723032522";

const heroSrc = "/hyssop/ncc/1.png";
const videoSrc = "/hyssop/ncc/video.mp4";
const videoPosterSrc = "/hyssop/ncc/2.png";

const mapShareLink = "https://maps.app.goo.gl/JXqEvXVa89a72gCA6";

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

export default function NCCCommercialPlotsLandingPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
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
          prev === null
            ? null
            : prev === galleryImages.length - 1
              ? 0
              : prev + 1
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
              Own the Gateway to Nakuru: Prime Commercial &amp; Residential
              Plots at NCC Commercial Plots
            </h1>

            <p className="mt-5 text-base leading-7 text-white/85">
              Secure land in Nakuru in a strategic location suited for business,
              residential development, rental units, and long-term investment.
            </p>

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
              alt="NCC Commercial Plots land for sale in Nakuru"
              fill
              priority
              quality={90}
              sizes="100vw"
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
            alt="NCC Commercial Plots land for sale in Nakuru"
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
              Plots at NCC Commercial Center
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85">
              A strategic land investment in Nakuru for buyers planning business
              premises, rental units, residential development, or future resale
              value.
            </p>

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
      <section className="bg-gradient-to-b from-white via-[#fbfcfe] to-[#f8fafc] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#e8eef5] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
                The perfect intersection of high-traffic business potential and
                peaceful modern living.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Fact label="Ready Titles" value="Clean title deeds available" />
              <Fact
                label="Tarmac Touching"
                value="Directly touching Sobea-Mangu tarmac"
              />
              <Fact label="Location" value="10 Minutes to Nakuru CBD" />
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC INVESTMENT */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-[#f5f8fb] to-[#f8fafc] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Strategic Investment Meets Unmatched Growth
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Why just buy land when you can own a piece of Nakuru’s future?
            </h2>
          </div>

          <div className="space-y-4 border-l-0 border-[#dfe8f1] text-base leading-8 text-gray-600 lg:border-l lg:pl-10">
            <p>
              Located along the growing Nakuru-Eldoret Highway corridor and
              directly touching the Sobea-Mangu tarmac, NCC Commercial Plots
              offer a strong position for buyers searching for land for sale in
              Nakuru with practical access and development potential.
            </p>

            <p>
              Whether you want road visibility for a business premise, a
              well-positioned site for rental units, or a 50 x 100 plot to hold
              for future appreciation, NCC Commercial Plots offer a useful
              balance of access, ownership clarity, and growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NCC + VIDEO */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-[#f6f9fc] to-[#f8fafc] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Why NCC?
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Built for Success, Designed for Comfort
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              NCC Commercial Plots give you a ready foundation to plan, build,
              invest, or secure land in a growing Nakuru corridor with clear
              title deed support.
            </p>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
              <p>
                <span className="font-bold text-[#0b1f52]">
                  Prime Road Access:
                </span>{" "}
                NCC Commercial Plots are directly touching the Sobea-Mangu
                tarmac and positioned near the Nakuru-Eldoret Highway, giving
                buyers convenient access for movement, visibility, and future
                development.
              </p>

              <p>
                <span className="font-bold text-[#0b1f52]">
                  The Commercial Opportunity:
                </span>{" "}
                The location is suitable for shops, rental units, business
                premises, mixed-use development, or a long-term land investment
                strategy.
              </p>

              <p>
                <span className="font-bold text-[#0b1f52]">
                  The Residential Dream:
                </span>{" "}
                Build modern apartments, rental homes, or a standalone residence
                in an area positioned for continued growth and improved access.
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
                Invest with peace of mind. Every plot has a clean, ready title
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
              See NCC Commercial Plots from above
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Watch the location, road access, surrounding development, and
              commercial potential before booking your site visit.
            </p>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white text-left shadow-[0_24px_70px_rgba(11,31,82,0.12)]"
              aria-label="Play NCC Commercial Plots video"
            >
              <Image
                src={videoPosterSrc}
                quality={90}
                alt="NCC Commercial Plots aerial video preview"
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
      <section className="bg-gradient-to-b from-[#f8fafc] via-[#fbfcfe] to-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Everything You Need is Already Here
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              You aren’t just buying a 50 x 100 plot; you are joining a growing
              investment corridor.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Education & Faith"
              text="Minutes away from schools, churches, and everyday amenities that make the area practical for families and future tenants."
            />
            <FeatureCard
              title="Future Growth"
              text="Located near an upcoming business complex, positioning the area for increased activity, demand, and long-term value."
            />
            <FeatureCard
              title="City Access"
              text="Enjoy access to Nakuru CBD while owning land in a corridor that is developing beyond the city centre."
            />
          </div>
        </div>
      </section>

      {/* SITE VISIT FORM */}
      <section className="bg-white px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <form
            id="site-visit"
            onSubmit={handleSubmit}
            className="scroll-mt-24 rounded-[2rem] border border-[#e8eef5] bg-[#f8fafc] p-6 shadow-sm sm:p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Book a Free Site Visit This Week
            </p>

            <h3 className="text-3xl font-bold text-[#0b1f52]">
              Talk to an Investment Consultant
            </h3>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Send your details directly to our team on WhatsApp. The project of
              interest is already set to NCC Commercial Plots.
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
                <span className="mb-2 block text-sm font-semibold">Message</span>
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

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7ab62f]">
              Project Gallery
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore NCC Commercial Plots
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryImages.map((src, index) => (
              <button
                type="button"
                key={src}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#eef2f7] text-left shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
                aria-label={`Open NCC Commercial Plots gallery image ${index + 1}`}
              >
                <Image
                  src={src}
                  quality={90}
                  alt={`NCC Commercial Plots in Nakuru image ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f52]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] opacity-0 shadow-sm transition group-hover:opacity-100">
                  Click to enlarge
                </div>
              </button>
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
            We’ve made it easier than ever to secure your place at NCC
            Commercial Plots.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            Choose the plan that works for your financial goals.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
                Plot Size
              </p>
              <p className="text-xl font-bold text-white">Standard 50 x 100</p>
              <p className="mt-2 text-sm text-white/70">(1/8 Acre)</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#8cc63f]/35 bg-[#8cc63f]/10 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
                Cash Offer
              </p>
              <p className="text-3xl font-bold text-white">KES 2,000,000</p>
              <p className="mt-2 text-sm text-white/75">
                Price for a standard 50 x 100 plot
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8cc63f]">
                Lipa Polepole
              </p>
              <p className="text-base font-semibold leading-7 text-white">
                Flexible installment plans available. Own your land while you
                pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY + MAP */}
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
              Whether your goal is a business premise, rental income, residential
              development, or a long-term land investment in Nakuru, NCC
              Commercial Plots give you the title, utilities, access, and
              location to move with confidence.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              A limited number of plots remain available. Contact Hyssop
              Properties today for viewing and booking.
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
        </div>
      </section>

      <ContactSection
        whatsappNumber={whatsappNumber}
        phoneNumber={whatsappNumber}
      />

      {/* GALLERY LIGHTBOX */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-9 left-0 text-lg font-medium text-white hover:text-[#8cc63f]"
            >
              Close ×
            </button>

            <button
              type="button"
              onClick={openSelectedImageFullscreen}
              className="absolute -top-9 right-0 text-sm font-semibold text-white hover:text-[#8cc63f]"
            >
              Fullscreen
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev === null
                    ? null
                    : prev === 0
                      ? galleryImages.length - 1
                      : prev - 1
                )
              }
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-[#0b1f52] shadow-lg hover:bg-[#8cc63f]"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev === null
                    ? null
                    : prev === galleryImages.length - 1
                      ? 0
                      : prev + 1
                )
              }
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-[#0b1f52] shadow-lg hover:bg-[#8cc63f]"
              aria-label="Next image"
            >
              ›
            </button>

            <div
              ref={lightboxImageWrapRef}
              className="relative aspect-[4/3] max-h-[82vh] w-full overflow-hidden rounded-xl bg-black shadow-2xl"
            >
              <Image
                src={galleryImages[selectedImageIndex]}
                alt={`NCC Commercial Plots enlarged image ${
                  selectedImageIndex + 1
                }`}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-8 left-0 text-lg font-medium text-white hover:text-[#8cc63f]"
            >
              Close ×
            </button>

            <video
              controls
              autoPlay
              className="max-h-[80vh] w-full rounded-xl bg-black shadow-2xl"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
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