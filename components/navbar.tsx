"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type DropdownKey = "about" | "properties" | "news" | null;

type DropdownPosition = {
  left: number;
  top: number;
};

type DropdownItem = {
  label: string;
  href: string;
  isChild?: boolean;
};

const dropdownItems: Record<Exclude<DropdownKey, null>, DropdownItem[]> = {
  about: [
    {
      label: "About Us",
      href: "/about?tab=about",
    },
    {
      label: "Our Team",
      href: "/about?tab=team",
    },
  ],

  properties: [
    {
      label: "Plots for Sale in Nakuru",
      href: "/plots-for-sale-in-nakuru-county",
    },
    {
      label: "Tumaini Estate, Nakuru",
      href: "/properties/plots-for-sale-in-tumaini-nakuru",
      isChild: true,
    },
    {
      label: "Bahati Plots, Nakuru",
      href: "/properties/plots-for-sale-in-bahati-nakuru",
      isChild: true,
    },
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
  ],

  news: [
    {
      label: "Events",
      href: "/news?tab=events",
    },
    {
      label: "Blogs",
      href: "/news?tab=blogs",
    },
  ],
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] =
    useState<DropdownKey>(null);

  const [dropdownPosition, setDropdownPosition] =
    useState<DropdownPosition>({
      left: 0,
      top: 80,
    });

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] =
    useState<string | null>(null);

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const router = useRouter();

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeAllMenus = () => {
    clearCloseTimer();
    setOpenDropdown(null);
    setMobileDropdown(null);
    setMobileOpen(false);
  };

  const openDesktopDropdown = (
    key: Exclude<DropdownKey, null>,
    event: MouseEvent<HTMLDivElement>
  ) => {
    clearCloseTimer();

    const rect =
      event.currentTarget.getBoundingClientRect();

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
    closeAllMenus();
    router.push(href);
  };

  const scrollToContact = (
    location: "navbar_desktop" | "navbar_mobile"
  ) => {
    trackEvent("contact_click", {
      location,
    });

    const contactSection =
      document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeAllMenus();
  };

  return (
    <>
      <header className="sticky left-0 top-0 z-[9999] w-full overflow-visible">
        <nav
          className="flex h-[80px] w-full items-center justify-between overflow-visible border-b border-[#e8eef5] bg-white/95 px-6 text-[#0b1f52] shadow-sm backdrop-blur-md lg:px-10 xl:px-16"
          style={{
            overflow: "visible",
          }}
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Hyssop Properties Home"
            onClick={closeAllMenus}
            className="relative flex h-[80px] w-[126px] shrink-0 items-center"
          >
            <Image
              src="/logo1.png"
              alt="Hyssop Properties"
              width={126}
              height={80}
              priority
              className="h-[80px] w-auto cursor-pointer object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden h-full items-center gap-5 text-sm font-medium lg:flex xl:gap-6">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Home
            </Link>

            {/* ABOUT */}
            <div
              className="flex h-full items-center"
              onMouseEnter={(event) =>
                openDesktopDropdown("about", event)
              }
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                className="flex h-full items-center gap-1 transition-colors hover:text-[#7ab62f]"
                aria-expanded={
                  openDropdown === "about"
                }
              >
                About

                <span
                  className={`text-xs transition-transform ${
                    openDropdown === "about"
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>

            {/* PROPERTIES */}
            <div
              className="flex h-full items-center"
              onMouseEnter={(event) =>
                openDesktopDropdown(
                  "properties",
                  event
                )
              }
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                className="flex h-full items-center gap-1 transition-colors hover:text-[#7ab62f]"
                aria-expanded={
                  openDropdown === "properties"
                }
              >
                Properties

                <span
                  className={`text-xs transition-transform ${
                    openDropdown === "properties"
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>

            {/* NCC */}
            <Link
              href="/plots-for-sale-in-nakuru"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              NCC Commercial Center
            </Link>

            {/* DIASPORA */}
            <Link
              href="/diaspora"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Diaspora
            </Link>

            {/* CAREERS */}
            <Link
              href="/careers"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Careers
            </Link>

            {/* FOUNDATION */}
            <Link
              href="/foundation"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Foundation
            </Link>

            {/* TESTIMONIALS */}
            <Link
              href="/testimonials"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Testimonials
            </Link>

            {/* AWARDS */}
            <Link
              href="/awards"
              onClick={closeAllMenus}
              className="flex h-full items-center transition-colors hover:text-[#7ab62f]"
            >
              Awards
            </Link>

            {/* NEWS */}
            <div
              className="flex h-full items-center"
              onMouseEnter={(event) =>
                openDesktopDropdown("news", event)
              }
              onMouseLeave={scheduleCloseDropdown}
            >
              <button
                type="button"
                className="flex h-full items-center gap-1 transition-colors hover:text-[#7ab62f]"
                aria-expanded={
                  openDropdown === "news"
                }
              >
                News

                <span
                  className={`text-xs transition-transform ${
                    openDropdown === "news"
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>
          </div>

          {/* DESKTOP CONTACT + MOBILE MENU BUTTON */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                scrollToContact(
                  "navbar_desktop"
                )
              }
              className="hidden rounded-full bg-[#7ab62f] px-6 py-2 text-sm font-bold text-[#0b1f52] transition-all hover:bg-[#8cc63f] lg:block"
            >
              Contact
            </button>

            <button
              type="button"
              className="relative z-[10001] p-2 text-3xl leading-none text-[#0b1f52] lg:hidden"
              onClick={() => {
                setOpenDropdown(null);
                setMobileDropdown(null);
                setMobileOpen(
                  (previous) => !previous
                );
              }}
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
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
                onClick={closeAllMenus}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Home
              </Link>

              {/* MOBILE ABOUT */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown(
                      (previous) =>
                        previous ===
                        "mobile-about"
                          ? null
                          : "mobile-about"
                    )
                  }
                  className="flex items-center justify-between text-lg font-medium hover:text-[#8cc63f]"
                  aria-expanded={
                    mobileDropdown ===
                    "mobile-about"
                  }
                >
                  <span>About</span>

                  <span className="text-sm">
                    {mobileDropdown ===
                    "mobile-about"
                      ? "▴"
                      : "▾"}
                  </span>
                </button>

                {mobileDropdown ===
                  "mobile-about" && (
                  <div className="flex flex-col gap-4 border-l border-white/20 pl-4">
                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/about?tab=about"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ About Us
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/about?tab=team"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Our Team
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE PROPERTIES */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown(
                      (previous) =>
                        previous ===
                        "mobile-properties"
                          ? null
                          : "mobile-properties"
                    )
                  }
                  className="flex items-center justify-between text-lg font-medium hover:text-[#8cc63f]"
                  aria-expanded={
                    mobileDropdown ===
                    "mobile-properties"
                  }
                >
                  <span>Properties</span>

                  <span className="text-sm">
                    {mobileDropdown ===
                    "mobile-properties"
                      ? "▴"
                      : "▾"}
                  </span>
                </button>

                {mobileDropdown ===
                  "mobile-properties" && (
                  <div className="flex flex-col gap-4 border-l border-white/20 pl-4">
                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/plots-for-sale-in-nakuru-county"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in
                      Nakuru
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/properties/plots-for-sale-in-tumaini-nakuru"
                        )
                      }
                      className="ml-4 text-left text-white/70 hover:text-[#8cc63f]"
                    >
                      ↳ Tumaini Estate,
                      Nakuru
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/properties/plots-for-sale-in-bahati-nakuru"
                        )
                      }
                      className="ml-4 text-left text-white/70 hover:text-[#8cc63f]"
                    >
                      ↳ Bahati Plots,
                      Nakuru
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/properties/plots-for-sale-in-kitengela"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in
                      Kitengela
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/properties/plots-for-sale-in-machakos"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in
                      Machakos
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/properties/plots-for-sale-in-malindi"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Plots for Sale in
                      Malindi
                    </button>
                  </div>
                )}
              </div>

              {/* NCC */}
              <button
                type="button"
                onClick={() =>
                  goToMobileLink(
                    "/plots-for-sale-in-nakuru"
                  )
                }
                className="w-full text-left text-lg font-medium hover:text-[#8cc63f]"
              >
                NCC Commercial Center
              </button>

              {/* DIASPORA */}
              <Link
                href="/diaspora"
                onClick={closeAllMenus}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Diaspora
              </Link>

              {/* CAREERS */}
              <Link
                href="/careers"
                onClick={closeAllMenus}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Careers
              </Link>

              {/* FOUNDATION */}
              <Link
                href="/foundation"
                onClick={closeAllMenus}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Foundation
              </Link>

              {/* TESTIMONIALS */}
              <Link
                href="/testimonials"
                onClick={closeAllMenus}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Testimonials
              </Link>

              {/* AWARDS */}
              <Link
                href="/awards"
                onClick={closeAllMenus}
                className="text-lg font-medium hover:text-[#8cc63f]"
              >
                Awards
              </Link>

              {/* MOBILE NEWS */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setMobileDropdown(
                      (previous) =>
                        previous ===
                        "mobile-news"
                          ? null
                          : "mobile-news"
                    )
                  }
                  className="flex items-center justify-between text-lg font-medium hover:text-[#8cc63f]"
                  aria-expanded={
                    mobileDropdown ===
                    "mobile-news"
                  }
                >
                  <span>News</span>

                  <span className="text-sm">
                    {mobileDropdown ===
                    "mobile-news"
                      ? "▴"
                      : "▾"}
                  </span>
                </button>

                {mobileDropdown ===
                  "mobile-news" && (
                  <div className="flex flex-col gap-4 border-l border-white/20 pl-4">
                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/news?tab=events"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Events
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        goToMobileLink(
                          "/news?tab=blogs"
                        )
                      }
                      className="text-left text-white/80 hover:text-[#8cc63f]"
                    >
                      ↳ Blogs
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE CONTACT */}
              <button
                type="button"
                onClick={() =>
                  scrollToContact(
                    "navbar_mobile"
                  )
                }
                className="mt-4 rounded-full bg-[#8cc63f] px-6 py-4 text-center text-base font-bold text-[#0b1f52]"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* DESKTOP DROPDOWN PORTAL-LIKE LAYER */}
      {openDropdown && (
        <div
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleCloseDropdown}
          className="hidden flex-col rounded-b-xl border-x border-b border-[#e8eef5] bg-white py-2 text-sm text-[#0b1f52] shadow-2xl lg:flex"
          style={{
            position: "fixed",
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width:
              openDropdown === "properties"
                ? 320
                : 224,
            zIndex: 2147483001,
          }}
        >
          {dropdownItems[
            openDropdown
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 hover:bg-gray-50 hover:text-[#7ab62f] ${
                item.isChild
                  ? "pl-8 text-[#0b1f52]/75"
                  : ""
              }`}
              onClick={closeAllMenus}
            >
              {item.isChild ? "↳ " : ""}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}