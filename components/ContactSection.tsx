"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaLocationDot,
} from "react-icons/fa6";

export default function ContactSection({
  whatsappNumber = "254707666000",
  phoneNumber = "254707666000",
}: {
  whatsappNumber?: string;
  phoneNumber?: string;
}) {
  const quickLinksLeft = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about?tab=about",
    },
    {
      label: "Properties",
      href: "/properties",
    },
    {
      label: "NCC Commercial Center",
      href: "/plots-for-sale-in-nakuru",
    },
    {
      label: "Plots for Sale in Nakuru",
      href: "/plots-for-sale-in-nakuru-county",
    },
    {
      label: "Tumaini Estate, Nakuru",
      href: "/properties/plots-for-sale-in-tumaini-nakuru",
    },
    {
      label: "Bahati Plots, Nakuru",
      href: "/properties/plots-for-sale-in-bahati-nakuru",
    },
  ];

  const quickLinksRight = [
    {
      label: "Plots for Sale in Kitengela",
      href: "/properties/plots-for-sale-in-kitengela",
    },
    {
      label: "Plots for Sale in Machakos",
      href: "/properties/plots-for-sale-in-machakos",
    },
    {
      label: "Plots for Sale in Malindi",
      href: "/properties/plots-for-sale-in-malindi",
    },
    {
      label: "Diaspora",
      href: "/diaspora",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Foundation",
      href: "/foundation",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
    },
    {
      label: "Awards",
      href: "/awards",
    },
    {
      label: "Events",
      href: "/news?tab=events",
    },
    {
      label: "Blog",
      href: "/news?tab=blogs",
    },
  ];

  const offices = [
    {
      title: "Nairobi HQ",
      address: "Hyssop Center, Ridgeways",
      phone: "+254 707 666 000",
      href: "tel:+254707666000",
    },
    {
      title: "Nakuru Office",
      address: "Tower One, Moi Rd",
      phone: "+254 758 707 050",
      href: "tel:+254758707050",
    },
    {
      title: "Kisii Office",
      address: "Magsons Plaza, Opp. KCB",
      phone: "+254 758 555 000",
      href: "tel:+254758555000",
    },
    {
      title: "Malindi Office",
      address: "Near Malindi Law Courts",
      phone: "+254 758 555 000",
      href: "tel:+254758555000",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-[#0b1f52]"
    >
      {/* =========================================================
          CONTACT CTA
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8cc63f] sm:text-xs">
              Contact Hyssop
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let&apos;s hold your hand to the{" "}
              <span className="text-[#8cc63f]">
                perfect investment.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Reach us via phone, WhatsApp, email, or any of our offices.
            </p>

            <div className="mt-4">
              <a
                href="mailto:info@hyssopproperties.com"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-[#8cc63f]"
              >
                <FaEnvelope className="text-base transition-transform group-hover:scale-110" />

                <span>
                  info@hyssopproperties.com
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#8cc63f] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#7ab535]"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                <FaPhone className="text-sm" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      {/* =========================================================
          LINKS + OFFICES
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* QUICK LINKS */}
          <nav>
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.28em] text-[#8cc63f]">
              Quick Links
            </p>

            <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-16">
              <ul className="space-y-2">
                {quickLinksLeft.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative flex min-h-[34px] items-center border-b border-white/[0.08] pl-4 text-[13px] font-semibold text-white/70 transition hover:text-[#8cc63f]"
                    >
                      <span className="absolute left-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#8cc63f] shadow-[0_0_0_2px_rgba(140,198,63,0.14)]" />

                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {quickLinksRight.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative flex min-h-[34px] items-center border-b border-white/[0.08] pl-4 text-[13px] font-semibold text-white/70 transition hover:text-[#8cc63f]"
                    >
                      <span className="absolute left-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#8cc63f] shadow-[0_0_0_2px_rgba(140,198,63,0.14)]" />

                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* OFFICES */}
          <div>
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.28em] text-[#8cc63f]">
              Our Offices
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.title}
                  className="rounded-[14px] border border-white/15 bg-[#142c5f] p-4 transition-all duration-300 hover:border-[#8cc63f]/40"
                >
                  <div className="flex items-start gap-3">
                    <FaLocationDot className="mt-1 shrink-0 text-xs text-[#8cc63f]" />

                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {office.title}
                      </h4>

                      <p className="mt-1 text-[13px] leading-5 text-white/70">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <a
                    href={office.href}
                    className="mt-3 flex items-center gap-2.5 text-[13px] font-semibold text-white/80 transition-colors hover:text-[#8cc63f]"
                  >
                    <FaPhone className="shrink-0 text-[10px] text-[#8cc63f]" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      {/* =========================================================
          SOCIAL + COPYRIGHT
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://web.facebook.com/hyssopke/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xs" />
            </a>

            <a
              href="https://www.instagram.com/hyssopke/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xs" />
            </a>

            <a
              href="https://x.com/hyssopke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-xs" />
            </a>

            <a
              href="https://www.tiktok.com/@hyssopke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="TikTok"
            >
              <FaTiktok className="text-xs" />
            </a>
          </div>

          <div className="text-center text-xs font-light text-white/75 sm:text-sm">
            Copyright © 2026 Hyssop Properties | All Rights Reserved |{" "}
            <Link
              href="/privacy-policy"
              className="text-white underline underline-offset-2 transition-colors hover:text-[#8cc63f]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}