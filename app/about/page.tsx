"use client";

import { Suspense, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";
import Navbar from "@/components/navbar";

function AboutPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const requestedTab = searchParams.get("tab") || "about";
  const activeTab = requestedTab === "team" ? "team" : "about";

  useEffect(() => {
    if (requestedTab === "careers") {
      router.replace("/careers");
    }
  }, [requestedTab, router]);

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <>
        {/* MOBILE HERO */}
        <section className="bg-[#0b1f52] text-white lg:hidden">
          <div className="px-6 pb-7 pt-8">
            <div className="mb-5 inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
              About Hyssop
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white">
              A culture of trust.
            </h1>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
              Built over a decade
            </p>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden bg-[#e9edf3]">
            <Image
              src="/hyssop/about-hero.png"
              alt="Hyssop Properties real estate company in Kenya"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </section>

        {/* DESKTOP HERO */}
        <section
          className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block"
          style={{
            height: "46vh",
            minHeight: "360px",
          }}
        >
          <Image
            src="/hyssop/about-hero.png"
            alt="Hyssop Properties real estate company in Kenya"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center lg:object-[center_45%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div
            className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm"
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              zIndex: 10,
            }}
          >
            About Hyssop
          </div>

          <div
            style={{
              position: "absolute",
              left: "24px",
              right: "24px",
              bottom: "28px",
              zIndex: 10,
              maxWidth: "760px",
            }}
          >
            <h1
              className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl"
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.7)",
              }}
            >
              A culture of trust.
            </h1>

            <p
              className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.55)",
              }}
            >
              Built over a decade
            </p>
          </div>
        </section>
      </>

      {/* TABS */}
      <div className="relative z-20 -mt-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {[
              { id: "about", label: "About Us" },
              { id: "team", label: "Our Team" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  window.history.pushState({}, "", `/about?tab=${tab.id}`);
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className={`rounded-full px-6 py-3 font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#7ab62f] text-white"
                    : "bg-white shadow-md"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ABOUT */}
          {activeTab === "about" && (
            <div className="space-y-16">
              <section className="rounded-3xl bg-white p-10 text-center shadow-xl md:p-16">
                <p className="text-lg leading-relaxed md:text-xl">
                  Hyssop Properties is an{" "}
                  <span className="font-semibold">
                    award-winning real estate company in Kenya
                  </span>
                  , helping local and diaspora clients buy land, secure title
                  deeds, and build long-term value through verified property
                  investments.
                </p>

                <p className="mt-4 leading-relaxed opacity-80">
                  For more than{" "}
                  <span className="font-semibold">10 years</span>, we have
                  supported buyers through a clear land ownership journey —
                  from inquiry and site visits to documentation, payment
                  guidance, title deed processing, and after-sale support.
                </p>

                <p className="mt-4 leading-relaxed opacity-80">
                  Our projects are selected with practical growth in mind,
                  giving buyers access to land investment opportunities in
                  Kenya across locations such as Nakuru, Kitengela, Malili, and
                  Malindi. Every client is guided with transparency,
                  professionalism, and a strong commitment to verified
                  ownership.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#4a8c2f]">24+</h3>
                    <p>Projects</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#4a8c2f]">
                      50,000+
                    </h3>
                    <p>Titles Issued</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#4a8c2f]">
                      10,000+
                    </h3>
                    <p>Clients</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#4a8c2f]">15+</h3>
                    <p>Awards</p>
                  </div>
                </div>
              </section>

              {/* MISSION / VISION */}
              <section className="space-y-12 rounded-3xl bg-[#0b1f52] p-10 text-white md:p-16">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-8 text-[#0b1f52]">
                    <h3 className="mb-4 text-2xl font-bold text-[#4a8c2f]">
                      Our Mission
                    </h3>

                    <p>
                      To deliver transparent real estate solutions that help
                      individuals, families, and investors own land with
                      confidence, build long-term value, and create lasting
                      financial security.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-8 text-[#0b1f52]">
                    <h3 className="mb-4 text-2xl font-bold text-[#4a8c2f]">
                      Our Vision
                    </h3>

                    <p>
                      To become Africa&apos;s most trusted real estate brand by
                      consistently offering verified land opportunities, clear
                      documentation, and high-quality property investments.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    "Award-winning real estate expertise in Kenya",
                    "Trusted by local and diaspora land buyers",
                    "Over 10 years of industry experience",
                    "Verified land projects in high-growth locations",
                    "Ready title deeds and guided ownership support",
                    "End-to-end support from inquiry to ownership",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white p-6 text-center text-[#0b1f52]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* TESTIMONIALS */}
              <section className="space-y-12">
                <h2 className="text-center text-3xl font-bold">
                  Real Clients. Real Title Deeds.
                </h2>

                <p className="mx-auto max-w-2xl text-center text-gray-600">
                  Thousands of clients across Kenya and the diaspora have
                  successfully acquired verified land and property investments
                  through Hyssop Properties.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  {["1.png", "2.png", "3.png"].map((img, i) => (
                    <div
                      key={i}
                      className="relative h-[280px] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={`/hyssop/testimonials/${img}`}
                        alt="Hyssop Properties client receiving title deed"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href="/testimonials"
                    className="inline-flex rounded-full bg-[#7ab62f] px-6 py-3 font-semibold text-[#0b1f52]"
                  >
                    View More Success Stories
                  </Link>
                </div>
              </section>

              {/*
                The previous Hyssop Investment Co-operative block has been
                removed because /investments is being retired and replaced
                by the dedicated Careers route.
              */}
            </div>
          )}

          {/* TEAM */}
          {activeTab === "team" && (
            <div className="space-y-16">
              <div className="rounded-3xl bg-white p-10 text-center shadow-xl md:p-16">
                <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px]">
                  <Image
                    src="/hyssop/team.png"
                    alt="Hyssop Properties team"
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  A Team You Can Trust
                </h3>

                <p className="mx-auto max-w-3xl text-gray-600">
                  From your first inquiry to receiving your title deed, you are
                  guided by a dedicated{" "}
                  <span className="font-semibold text-[#0b1f52]">
                    Client Success Partner
                  </span>{" "}
                  who helps make your land buying journey clear, transparent,
                  and rewarding at every step.
                </p>
              </div>

              <div className="rounded-3xl border-t-4 border-[#8cc63f] bg-white p-6 shadow-xl md:p-10 lg:p-16">
                <h3 className="mb-3 text-center text-2xl font-bold text-[#4a8c2f] md:text-3xl">
                  Leadership
                </h3>

                <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600 md:mb-12 md:text-base">
                  Vision. Experience. Integrity.
                </p>

                <div className="flex flex-col items-start gap-8 md:flex-row md:gap-10">
                  <div className="mx-auto w-[160px] flex-shrink-0 md:mx-0">
                    <div className="overflow-hidden rounded-xl bg-gray-100 shadow-md">
                      <Image
                        src="/hyssop/leadership/11.png"
                        alt="Naftaly Mwangi"
                        width={160}
                        height={190}
                        className="h-[190px] w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-xl font-bold leading-tight text-[#0b1f52]">
                        Naftaly Mwangi
                      </p>

                      <p className="mt-1 text-sm leading-snug text-gray-500">
                        Founder &amp; Chief Executive Officer
                      </p>
                    </div>
                  </div>

                  <div className="max-w-3xl flex-1 text-left">
                    <div className="space-y-5 text-sm leading-8 text-gray-700 md:text-base">
                      <p>
                        Naftaly is a respected thought leader and business
                        trainer, renowned in the real estate market across
                        Kenya, Africa, and globally. With nearly two decades of
                        hands-on experience, he has become a trusted voice on
                        land ownership, investments, and long-term wealth
                        creation.
                      </p>

                      <p>
                        He has trained and inspired many people on marketing,
                        investments, and land ownership, helping individuals
                        and families make informed decisions and build a more
                        secure financial future.
                      </p>

                      <p>
                        Through visionary leadership, strong market insight,
                        and a deep commitment to integrity, he continues to
                        shape Hyssop into a brand that stands for trust,
                        progress, and meaningful value for every client.
                      </p>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <blockquote className="text-lg italic leading-9 text-[#0b1f52] md:text-2xl">
                        “I started Hyssop to provide a{" "}
                        <span className="font-bold not-italic">
                          trustworthy
                        </span>{" "}
                        pathway for people to own land with confidence. I see
                        land as more than property - it is a powerful investment
                        with lasting value. My commitment is to help people not
                        only own land, but also unlock its{" "}
                        <span className="font-bold not-italic">
                          wealth-building
                        </span>{" "}
                        potential for generations to come.”
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <FloatingWhatsApp />
      <ChatbotWidget />
    </main>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f9fa]" />}>
      <AboutPageContent />
    </Suspense>
  );
}