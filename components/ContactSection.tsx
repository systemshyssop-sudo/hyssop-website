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
  return (
    <footer
      id="contact"
      className="relative"
      style={{ backgroundColor: "#0b1f52" }}
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f] opacity-90 sm:text-sm">
                Contact Hyssop
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s hold your hand to the{" "}
              <span style={{ color: "#8cc63f" }}>perfect investment.</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Reach us via phone, WhatsApp, email, or any of our offices.
            </p>

            <div className="pt-2">
              <a
                href="mailto:info@hyssopproperties.com"
                className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#8cc63f]"
              >
                <FaEnvelope className="text-lg transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium sm:text-base">
                  info@hyssopproperties.com
                </span>
              </a>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#8cc63f] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#7ab535] hover:shadow-xl"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                <FaPhone className="text-lg" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <nav>
            <p
              className="mb-10 text-xs font-black uppercase"
              style={{
                color: "#8cc63f",
                letterSpacing: "0.34em",
              }}
            >
              Quick Links
            </p>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-24">
              <ul className="space-y-4">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about?tab=about" },
                  { label: "Properties", href: "/properties" },
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
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative flex min-h-[40px] items-center border-b border-white/10 pl-5 text-sm font-semibold text-white/70 transition hover:text-[#8cc63f]"
                    >
                      <span
                        className="absolute left-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full"
                        style={{
                          backgroundColor: "#8cc63f",
                          boxShadow: "0 0 0 2px rgba(140,198,63,0.18)",
                        }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-4">
                {[
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
                  { label: "Diaspora", href: "/diaspora" },
                  { label: "Investments", href: "/investments" },
                  { label: "Foundation", href: "/foundation" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Awards", href: "/awards" },
                  { label: "Events", href: "/news?tab=events" },
                  { label: "Blog", href: "/news?tab=blogs" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative flex min-h-[40px] items-center border-b border-white/10 pl-5 text-sm font-semibold text-white/70 transition hover:text-[#8cc63f]"
                    >
                      <span
                        className="absolute left-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full"
                        style={{
                          backgroundColor: "#8cc63f",
                          boxShadow: "0 0 0 2px rgba(140,198,63,0.18)",
                        }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-10">
            <div>
              <span
                className="block text-xs font-black uppercase"
                style={{
                  color: "#8cc63f",
                  letterSpacing: "0.34em",
                }}
              >
                Our Offices
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
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
              ].map((office) => (
                <div
                  key={office.title}
                  className="rounded-[1rem] border border-white/15 p-5 transition-all duration-300 hover:border-[#8cc63f]/40"
                  style={{ backgroundColor: "#142c5f" }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaLocationDot className="mt-1 shrink-0 text-sm text-[#8cc63f]" />
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {office.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/75">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    <a
                      href={office.href}
                      className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#8cc63f]"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      <FaPhone className="shrink-0 text-xs text-[#8cc63f]" />
                      <span>{office.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://web.facebook.com/hyssopke/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm" />
            </a>

            <a
              href="https://www.instagram.com/hyssopke/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="https://x.com/hyssopke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-sm" />
            </a>

            <a
              href="https://www.tiktok.com/@hyssopke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#8cc63f]"
              aria-label="TikTok"
            >
              <FaTiktok className="text-sm" />
            </a>
          </div>

          <div className="text-center text-sm font-light text-white/90">
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