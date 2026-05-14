"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type DropdownKey = "about" | "properties" | "news" | null;

type DropdownPosition = {
  left: number;
  top: number;
};

type DropdownItem = {
  label: string;
  href: string;
};

const dropdownItems: Record<Exclude<DropdownKey, null>, DropdownItem[]> = {
  about: [
    { label: "About Us", href: "/about?tab=about" },
    { label: "Our Team", href: "/about?tab=team" },
    { label: "Careers", href: "/about?tab=careers" },
  ],

  properties: [
    { label: "Plots for Sale in Nakuru", href: "/plots-for-sale-in-nakuru" },
    { label: "Plots for Sale in Machakos", href: "/properties/konza" },
    { label: "Plots for Sale in Kitengela", href: "/properties/lush4" },
    { label: "Plots for Sale in Malindi", href: "/properties/malindi" },
  ],

  news: [
    { label: "Events", href: "/news?tab=events" },
    { label: "Blogs", href: "/news?tab=blogs" },
  ],
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({
    left: 0,
    top: 80,
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setOpenDropdown(null);
    setMobileDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDesktopDropdown = (
    key: Exclude<DropdownKey, null>,
    event: MouseEvent<HTMLDivElement>
  ) => {
    clearCloseTimer();

    const rect = event.currentTarget.getBoundingClientRect();

    setDropdownPosition({
      left: rect.left,
      top: rect.bottom,
    });

    setOpenDropdown(key);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 140);
  };

  const goToMobileLink = (href: string) => {
    setMobileDropdown(null);
    setMobileOpen(false);
    router.push(href);
  };

  const scrollToContact = (location: "navbar_desktop" | "navbar_mobile") => {
    trackEvent("contact_click", { location });

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setOpenDropdown(null);
    setMobileDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky left-0 top-0 z-[9999] w-full overflow-visible">
        <nav
          className="flex h-[80px] w-full items-center justify-between overflow-visible border-b border-[#e8eef5] bg-white/95 px-6 text-[#0b1f52] shadow-sm backdrop-blur-md lg:px-10 xl:px-16"
          style={{ overflow: "visible" }}
        >
          {/* LOGO */}
          <Link href="/" aria-label="Hyssop Properties Home">
            <img
              src="/logo1.png"
              alt="Hyssop"
              className="h-[80px] cursor-pointer"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden h-full items-center gap-5 text-sm font-medium lg:flex xl:gap-6">
            <Link
              href="/"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Home
            </Link>

            {/* ABOUT */}
            <div
              className="flex h-full items-center"
              onMouseEnter={(event) => openDesktopDropdown("about", event)}
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                className="flex h-full items-center gap-1 transition-colors hover:text-[#7ab62f]"
              >
                About
                <span
                  className={`text-xs transition-transform ${
                    openDropdown === "about" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>

            {/* PROPERTIES */}
            <div
              className="flex h-full items-center"
              onMouseEnter={(event) => openDesktopDropdown("properties", event)}
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                className="flex h-full items-center gap-1 transition-colors hover:text-[#7ab62f]"
              >
                Properties
                <span
                  className={`text-xs transition-transform ${
                    openDropdown === "properties" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>

            <Link
              href="/plots-for-sale-in-ngata-nakuru"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Ngata Commercial Center
            </Link>

            <Link
              href="/diaspora"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Diaspora
            </Link>

            <Link
              href="/investments"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Investments
            </Link>

            <Link
              href="/foundation"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Foundation
            </Link>

            <Link
              href="/testimonials"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Testimonials
            </Link>

            <Link
              href="/awards"
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Awards
            </Link>

            {/* NEWS */}
            <div
              className="flex h-full items-center"
              onMouseEnter={(event) => openDesktopDropdown("news", event)}
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                className="flex h-full items-center gap-1 transition-colors hover:text-[#7ab62f]"
              >
                News
                <span
                  className={`text-xs transition-transform ${
                    openDropdown === "news" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToContact("navbar_desktop")}
              className="hidden rounded-full bg-[#7ab62f] px-6 py-2 text-sm font-bold text-[#0b1f52] transition-all hover:bg-[#8cc63f] lg:block"
            >
              Contact
            </button>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              className="relative z-[10001] p-2 text-3xl leading-none text-[#0b1f52] lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="relative z-[9998] w-full border-b border-white/10 bg-[#0b1f52] text-white shadow-lg lg:hidden">
            <div className="flex flex-col gap-6 px-6 py-10">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Home
              </Link>

              {/* ABOUT MOBILE */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown((prev) =>
                      prev === "mobile-about" ? null : "mobile-about"
                    )
                  }
                  className="flex items-center justify-between text-lg font-medium hover:text-[#8cc63f]"
                >
                  <span>About</span>
                  <span className="text-sm">
                    {mobileDropdown === "mobile-about" ? "▴" : "▾"}
                  </span>
                </button>

                {mobileDropdown === "mobile-about" && (
                  <div className="flex flex-col gap-4 border-l border-white/20 pl-4">
                    <button
                      onClick={() => goToMobileLink("/about?tab=about")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ About Us
                    </button>

                    <button
                      onClick={() => goToMobileLink("/about?tab=team")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Our Team
                    </button>

                    <button
                      onClick={() => goToMobileLink("/about?tab=careers")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Careers
                    </button>
                  </div>
                )}
              </div>

              {/* PROPERTIES MOBILE */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown((prev) =>
                      prev === "mobile-properties"
                        ? null
                        : "mobile-properties"
                    )
                  }
                  className="flex items-center justify-between text-lg font-medium hover:text-[#8cc63f]"
                >
                  <span>Properties</span>
                  <span className="text-sm">
                    {mobileDropdown === "mobile-properties" ? "▴" : "▾"}
                  </span>
                </button>

                {mobileDropdown === "mobile-properties" && (
                  <div className="flex flex-col gap-4 border-l border-white/20 pl-4">
                    <button
                      onClick={() => goToMobileLink("/plots-for-sale-in-nakuru")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in Nakuru
                    </button>

                    <button
                      onClick={() => goToMobileLink("/properties/konza")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in Machakos
                    </button>

                    <button
                      onClick={() => goToMobileLink("/properties/lush4")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in Kitengela
                    </button>

                    <button
                      onClick={() => goToMobileLink("/properties/malindi")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in Malindi
                    </button>
                  </div>
                )}
              </div>

              {/* PRIORITY PROJECT MOBILE */}
              <button
                type="button"
                onClick={() => goToMobileLink("/plots-for-sale-in-ngata-nakuru")}
                className="w-full text-left text-lg font-medium hover:text-[#8cc63f]"
              >
                Ngata Commercial Center
              </button>

              <Link
                href="/diaspora"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Diaspora
              </Link>

              <Link
                href="/investments"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Investments
              </Link>

              <Link
                href="/foundation"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Foundation
              </Link>

              <Link
                href="/testimonials"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Testimonials
              </Link>

              <Link
                href="/awards"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Awards
              </Link>

              {/* NEWS MOBILE */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown((prev) =>
                      prev === "mobile-news" ? null : "mobile-news"
                    )
                  }
                  className="flex items-center justify-between text-lg font-medium hover:text-[#8cc63f]"
                >
                  <span>News</span>
                  <span className="text-sm">
                    {mobileDropdown === "mobile-news" ? "▴" : "▾"}
                  </span>
                </button>

                {mobileDropdown === "mobile-news" && (
                  <div className="flex flex-col gap-4 border-l border-white/20 pl-4">
                    <button
                      onClick={() => goToMobileLink("/news?tab=events")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Events
                    </button>

                    <button
                      onClick={() => goToMobileLink("/news?tab=blogs")}
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Blogs
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => scrollToContact("navbar_mobile")}
                className="mt-4 rounded-full bg-[#8cc63f] px-6 py-4 text-center text-md font-bold text-[#0b1f52]"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* DESKTOP DROPDOWN PORTAL */}
      {openDropdown && (
        <div
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleCloseDropdown}
          className="hidden flex-col rounded-b-xl border-x border-b border-[#e8eef5] bg-white py-2 text-sm text-[#0b1f52] shadow-2xl lg:flex"
          style={{
            position: "fixed",
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: openDropdown === "properties" ? 288 : 224,
            zIndex: 2147483001,
          }}
        >
          {dropdownItems[openDropdown].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 hover:bg-gray-50 hover:text-[#7ab62f]"
              onClick={() => setOpenDropdown(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}