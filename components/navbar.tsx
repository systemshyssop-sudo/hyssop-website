"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* CLOSE DROPDOWN ON OUTSIDE CLICK */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#0b1f52] text-white h-[80px] flex items-center justify-between px-6 lg:px-16">

      {/* LOGO */}
      <Link href="/">
        <img
          src="/logo.png"
          alt="Hyssop"
          className="h-[70px] cursor-pointer"
        />
      </Link>

      {/* DESKTOP NAV */}
      <div
        className="hidden lg:flex gap-8 text-sm font-medium items-center"
        ref={dropdownRef}
      >

                {/* ABOUT */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("about")}
            className="hover:text-[#7ab62f]"
          >
            About
          </button>

          {openDropdown === "about" && (
            <div className="absolute top-full left-0 mt-2 bg-white text-[#0b1f52] rounded-xl shadow-lg w-56 py-2">
              <Link
                href="/about?tab=about"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpenDropdown(null)}
              >
                About Us
              </Link>
              <Link
                href="/about?tab=team"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpenDropdown(null)}
              >
                Our Team
              </Link>
              <Link
                href="/about?tab=careers"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setOpenDropdown(null)}
              >
                Careers
              </Link>
            </div>
          )}
        </div>

        <Link href="/properties" className="hover:text-[#7ab62f]">
          Properties
        </Link>
        <Link href="/diaspora" className="hover:text-[#7ab62f]">
          Diaspora
        </Link>
        <Link href="/investments" className="hover:text-[#7ab62f]">
          Investment Co-operative
        </Link>
        <Link href="/foundation" className="hover:text-[#7ab62f]">
          Foundation
        </Link>

        <Link href="/testimonials" className="hover:text-[#7ab62f]">
          Testimonials
        </Link>

        <Link href="/awards" className="hover:text-[#7ab62f]">
          Awards
        </Link>

        {/* NEWS */}
<div className="relative">
  <button
    onClick={() => toggleDropdown("news")}
    className="hover:text-[#7ab62f]"
  >
    News
  </button>

  {openDropdown === "news" && (
    <div className="absolute top-full left-0 mt-2 bg-white text-[#0b1f52] rounded-xl shadow-lg w-56 py-2">
      <Link
        href="/news?tab=events"
        className="block px-4 py-2 hover:bg-gray-100"
        onClick={() => setOpenDropdown(null)}
      >
        Events
      </Link>

      <Link
        href="/news?tab=blogs"
        className="block px-4 py-2 hover:bg-gray-100"
        onClick={() => setOpenDropdown(null)}
      >
        Blogs
      </Link>
    </div>
  )}
</div>
      </div>

      {/* CONTACT */}
<a
  href="#contact"
  className="hidden lg:block bg-[#7ab62f] text-[#0b1f52] px-4 py-2 rounded-full text-sm font-semibold"
>
  Contact
</a>

      {/* MOBILE TOGGLE */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-[#0b1f52] text-white flex flex-col px-6 py-6 gap-4 z-[9999]">

          <Link href="/about?tab=about" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/about?tab=team" onClick={() => setMobileOpen(false)}>
            Our Team
          </Link>
          <Link href="/about?tab=careers" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>

          <Link href="/properties" onClick={() => setMobileOpen(false)}>Properties</Link>
          <Link href="/diaspora" onClick={() => setMobileOpen(false)}>Diaspora</Link>
          <Link href="/investments" onClick={() => setMobileOpen(false)}>Investment Co-operative</Link>
          <Link href="/foundation" onClick={() => setMobileOpen(false)}>Foundation</Link>

          <Link href="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link href="/awards" onClick={() => setMobileOpen(false)}>Awards</Link>

          <Link href="/news?tab=events" onClick={() => setMobileOpen(false)}>
  Events
</Link>
<Link href="/news?tab=blogs" onClick={() => setMobileOpen(false)}>
  Blogs
</Link>

  <a
  href="#contact"
  onClick={() => setMobileOpen(false)}
  className="mt-4 inline-block bg-[#7ab62f] text-[#0b1f52] px-4 py-2 rounded-full text-sm font-semibold"
>
  Contact
</a>
        </div>
      )}
    </nav>
  );
}