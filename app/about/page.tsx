"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";
import Navbar from "@/components/navbar";
import { useSearchParams } from "next/navigation";

function AboutPageContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "about";

  return (
    <main className="bg-[#f8f9fa] text-[#0b1f52] min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <>
        {/* MOBILE HERO - TEXT FIRST, IMAGE SECOND */}
        <section className="bg-[#0b1f52] text-white lg:hidden">
          <div className="px-6 pt-8 pb-7">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </section>

        {/* DESKTOP HERO - SAME PROPERTY HERO STYLE */}
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
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
            className="object-cover object-center lg:object-[center_45%]"
          />

          {/* Image readability overlay - no blue text card */}
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
      <div className="relative z-20 px-6 -mt-20">
        <div className="max-w-5xl mx-auto">
          {/* TAB BUTTONS */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {[
              { id: "about", label: "About Us" },
              { id: "team", label: "Our Team" },
              { id: "careers", label: "Careers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  window.history.pushState({}, "", `/about?tab=${tab.id}`);
                }}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#7ab62f] text-white"
                    : "bg-white shadow-md"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ================= ABOUT ================= */}
          {activeTab === "about" && (
            <div className="space-y-16">
              <section className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center">
                <p className="text-lg md:text-xl leading-relaxed">
                  Hyssop Properties is an{" "}
                  <span className="font-semibold">
                    award-winning real estate company in Kenya
                  </span>
                  , helping local and diaspora clients buy land, secure title
                  deeds, and build long-term value through verified property
                  investments.
                </p>

                <p className="opacity-80 leading-relaxed mt-4">
                  For more than{" "}
                  <span className="font-semibold">10 years</span>, we have
                  supported buyers through a clear land ownership journey —
                  from inquiry and site visits to documentation, payment
                  guidance, title deed processing, and after-sale support.
                </p>

                <p className="opacity-80 leading-relaxed mt-4">
                  Our projects are selected with practical growth in mind, giving
                  buyers access to land investment opportunities in Kenya across
                  locations such as Nakuru, Kitengela, Malili, and Malindi. Every
                  client is guided with transparency, professionalism, and a
                  strong commitment to verified ownership.
                </p>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
              <section className="bg-[#0b1f52] text-white rounded-3xl p-10 md:p-16 space-y-12">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-white text-[#0b1f52] p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-[#4a8c2f]">
                      Our Mission
                    </h3>
                    <p>
                      To deliver transparent real estate solutions that help
                      individuals, families, and investors own land with
                      confidence, build long-term value, and create lasting
                      financial security.
                    </p>
                  </div>

                  <div className="bg-white text-[#0b1f52] p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4 text-[#4a8c2f]">
                      Our Vision
                    </h3>
                    <p>
                      To become Africa’s most trusted real estate brand by
                      consistently offering verified land opportunities, clear
                      documentation, and high-quality property investments.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
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
                      className="bg-white text-[#0b1f52] p-6 rounded-2xl text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* TESTIMONIALS */}
              <section className="space-y-12">
                <h2 className="text-3xl text-center font-bold">
                  Real Clients. Real Title Deeds.
                </h2>

                <p className="text-center max-w-2xl mx-auto text-gray-600">
                  Thousands of clients across Kenya and the diaspora have
                  successfully acquired verified land and property investments
                  through Hyssop Properties.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {["1.png", "2.png", "3.png"].map((img, i) => (
                    <div
                      key={i}
                      className="relative h-[280px] rounded-2xl overflow-hidden"
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
                  <Link href="/testimonials">
                    <button className="bg-[#7ab62f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold">
                      View More Success Stories
                    </button>
                  </Link>
                </div>
              </section>

              {/* INVESTMENT */}
              <section className="bg-white rounded-3xl p-10 md:p-16 text-center shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">
                  Unlock More From Your Investment
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  Land is more than ownership — it can become a financial asset.
                  With the right strategy, your property can support income,
                  unlock financing, and strengthen your long-term
                  wealth-building journey.
                </p>

                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  What next with Hyssop? Through the{" "}
                  <span className="font-semibold">
                    Hyssop Investment Co-operative
                  </span>
                  , you can save towards land ownership and access quick,
                  flexible loans using your title deed — helping you grow beyond
                  ownership.
                </p>

                <Link href="/investments">
                  <button className="bg-[#7ab62f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold">
                    Explore Investment Co-operative
                  </button>
                </Link>
              </section>
            </div>
          )}

          {/* ================= TEAM ================= */}
          {activeTab === "team" && (
            <div className="space-y-16">
              <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl text-center">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/hyssop/team.png"
                    alt="Hyssop Properties team"
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">A Team You Can Trust</h3>

                <p className="text-gray-600 max-w-3xl mx-auto">
                  From your first inquiry to receiving your title deed, you are
                  guided by a dedicated{" "}
                  <span className="font-semibold text-[#0b1f52]">
                    Client Success Partner
                  </span>{" "}
                  who helps make your land buying journey clear, transparent, and
                  rewarding at every step.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-16 shadow-xl border-t-4 border-[#8cc63f]">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#4a8c2f]">
                  Leadership
                </h3>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
                  Vision. Experience. Integrity.
                </p>

                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
                  <div className="w-[160px] flex-shrink-0 mx-auto md:mx-0">
                    <div className="rounded-xl overflow-hidden shadow-md bg-gray-100">
                      <Image
                        src="/hyssop/leadership/11.png"
                        alt="Naftaly Mwangi"
                        width={160}
                        height={190}
                        className="w-full h-[190px] object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    <div className="text-center mt-4">
                      <p className="font-bold text-xl leading-tight text-[#0b1f52]">
                        Naftaly Mwangi
                      </p>
                      <p className="text-sm leading-snug text-gray-500 mt-1">
                        Founder &amp; Chief Executive Officer
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 text-left max-w-3xl">
                    <div className="space-y-5 text-gray-700 text-sm md:text-base leading-8">
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
                        investments, and land ownership, helping individuals and
                        families make informed decisions and build a more secure
                        financial future.
                      </p>

                      <p>
                        Through visionary leadership, strong market insight, and
                        a deep commitment to integrity, he continues to shape
                        Hyssop into a brand that stands for trust, progress, and
                        meaningful value for every client.
                      </p>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <blockquote className="text-lg md:text-2xl italic text-[#0b1f52] leading-9">
                        “I started Hyssop to provide a{" "}
                        <span className="font-bold not-italic">trustworthy</span>{" "}
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

          {/* ================= CAREERS ================= */}
          {activeTab === "careers" && (
            <div className="space-y-16">
              <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Careers at Hyssop</h3>

                <p className="text-gray-600 max-w-3xl mx-auto">
                  At Hyssop Properties, we foster a warm, supportive, and
                  growth-driven culture where ambition meets opportunity. We
                  believe in building people just as much as we build
                  investments — creating an environment where driven individuals
                  can thrive, earn, and grow their careers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#8cc63f] text-[#0b1f52] p-8 rounded-2xl shadow">
                  <h4 className="text-xl font-semibold mb-3">
                    Relationship Managers
                  </h4>

                  <p className="mb-4">
                    This is an entry-level opportunity for charismatic,
                    confident, and driven individuals passionate about sales and
                    customer engagement.
                  </p>

                  <p className="mb-4">
                    You will be responsible for client outreach, building
                    relationships, and guiding clients through their investment
                    journey.
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Strong communication and people skills</li>
                    <li>Sales-driven and target-oriented mindset</li>
                    <li>Professional, confident, and presentable</li>
                    <li>A go-getter attitude with high energy</li>
                    <li>Team player and self-driven</li>
                  </ul>
                </div>

                <div className="bg-[#8cc63f] text-[#0b1f52] p-8 rounded-2xl shadow">
                  <h4 className="text-xl font-semibold mb-3">
                    Digital Marketing Experts
                  </h4>

                  <p className="mb-4">
                    We are looking for creative and analytical marketers with
                    experience in driving online growth and brand visibility.
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Google Ads & paid media campaigns</li>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Social media marketing & content strategy</li>
                    <li>Email marketing & funnel optimization</li>
                    <li>Analytics, tracking, and performance optimization</li>
                    <li>Creative, open-minded, and willing to learn</li>
                    <li>Team player and self-driven</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfIHS6YFJkXnYy0SSAw9Jh2DyQAPvR9PEVNH-njkil5GGPYZA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#8cc63f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold">
                    Apply Now
                  </button>
                </a>
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