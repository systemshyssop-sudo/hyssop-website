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

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative"
      style={{ backgroundColor: "#0b1f52" }}
    >
      {/* Top CTA Section */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Label */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#8cc63f] opacity-90">
                Contact Hyssop
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let's hold your hand to the{" "}
              <span style={{ color: "#8cc63f" }}>perfect investment.</span>
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Reach us via phone, WhatsApp, email, or any of our offices.
            </p>

            {/* Email */}
            <div className="pt-2">
              <a
                href="mailto:info@hyssopproperties.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#8cc63f] transition-colors group"
              >
                <FaEnvelope className="text-lg group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-medium">
                  info@hyssopproperties.com
                </span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/254707666000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8cc63f] hover:bg-[#7ab535] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+254707666000"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <FaPhone className="text-lg" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      {/* Footer Body - Quick Links & Office Locations */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Quick Links - Appears first on mobile */}
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
        { label: "Diaspora", href: "/diaspora" },
        { label: "Investment Co-operative", href: "/investments" },
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

          {/* Office Locations */}
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
    {/* Nairobi HQ */}
    <div
      className="rounded-[1rem] border border-white/15 p-5 transition-all duration-300 hover:border-[#8cc63f]/40"
      style={{ backgroundColor: "#142c5f" }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <FaLocationDot className="mt-1 shrink-0 text-sm text-[#8cc63f]" />
          <div>
            <h4 className="text-base font-bold text-white">Nairobi HQ</h4>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Hyssop Center, Ridgeways
            </p>
          </div>
        </div>

        <a
          href="tel:+254707666000"
          className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#8cc63f]"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          <FaPhone className="shrink-0 text-xs text-[#8cc63f]" />
          <span>+254 707 666 000</span>
        </a>
      </div>
    </div>

    {/* Nakuru Office */}
    <div
      className="rounded-[1rem] border border-white/15 p-5 transition-all duration-300 hover:border-[#8cc63f]/40"
      style={{ backgroundColor: "#142c5f" }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <FaLocationDot className="mt-1 shrink-0 text-sm text-[#8cc63f]" />
          <div>
            <h4 className="text-base font-bold text-white">Nakuru Office</h4>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Tower One, Moi Rd
            </p>
          </div>
        </div>

        <a
          href="tel:+254758707050"
          className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#8cc63f]"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          <FaPhone className="shrink-0 text-xs text-[#8cc63f]" />
          <span>+254 758 707 050</span>
        </a>
      </div>
    </div>

    {/* Kisii Office */}
    <div
      className="rounded-[1rem] border border-white/15 p-5 transition-all duration-300 hover:border-[#8cc63f]/40"
      style={{ backgroundColor: "#142c5f" }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <FaLocationDot className="mt-1 shrink-0 text-sm text-[#8cc63f]" />
          <div>
            <h4 className="text-base font-bold text-white">Kisii Office</h4>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Magsons Plaza, Opp. KCB
            </p>
          </div>
        </div>

        <a
          href="tel:+254758555000"
          className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#8cc63f]"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          <FaPhone className="shrink-0 text-xs text-[#8cc63f]" />
          <span>+254 758 555 000</span>
        </a>
      </div>
    </div>

    {/* Malindi Office */}
    <div
      className="rounded-[1rem] border border-white/15 p-5 transition-all duration-300 hover:border-[#8cc63f]/40"
      style={{ backgroundColor: "#142c5f" }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <FaLocationDot className="mt-1 shrink-0 text-sm text-[#8cc63f]" />
          <div>
            <h4 className="text-base font-bold text-white">Malindi Office</h4>
            <p className="mt-1 text-sm leading-6 text-white/75">
              Near Malindi Law Courts
            </p>
          </div>
        </div>

        <a
          href="tel:+254758555000"
          className="flex items-center gap-3 text-sm font-semibold transition-colors hover:text-[#8cc63f]"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          <FaPhone className="shrink-0 text-xs text-[#8cc63f]" />
          <span>+254 758 555 000</span>
        </a>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/10" />
      </div>

      {/* Social Media & Copyright */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://web.facebook.com/hyssopke/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#8cc63f] text-white transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="https://www.instagram.com/hyssopke/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#8cc63f] text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a
              href="https://x.com/hyssopke"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#8cc63f] text-white transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-sm" />
            </a>
            <a
              href="https://www.tiktok.com/@hyssopke"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#8cc63f] text-white transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok className="text-sm" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/90 font-light">
            Copyright © 2026 Hyssop Properties | All Rights Reserved |{" "}
            <Link
              href="/privacy-policy"
              className="text-white hover:text-[#8cc63f] transition-colors underline underline-offset-2"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}