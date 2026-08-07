"use client";

import {
  ArrowDown,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Mail,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

const relationshipResponsibilities = [
  "Generate and convert qualified leads into sales.",
  "Build and maintain strong customer relationships.",
  "Conduct property presentations and site visits.",
  "Guide clients through the sales process from enquiry to completion.",
  "Achieve monthly sales targets while delivering exceptional customer service.",
];

const relationshipQualifications = [
  "Diploma or Bachelor’s degree in Business, Marketing, Sales, or a related field.",
  "Minimum of 2 years’ experience in sales, customer relationship management, or business development.",
  "Excellent communication, negotiation, and interpersonal skills.",
  "Self-driven, target-oriented, and customer-focused.",
  "Experience in real estate or property sales is an added advantage.",
];

const marketingQualifications = [
  "Bachelor’s degree in Marketing, Communications, Business, or a related field.",
  "At least 2 years’ experience in digital marketing.",
  "Proficient in Google Ads, Meta Ads, SEO, website management, and social media marketing.",
  "Familiar with Google Analytics, CRM systems, AI marketing tools, and marketing automation.",
  "Strong analytical, communication, and project management skills.",
  "Real estate marketing experience is an added advantage.",
];

function CheckItem({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={`mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          dark
            ? "border-white/25 text-[#9bd84a]"
            : "border-[#0b1f52]/15 text-[#559727]"
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={2.5} />
      </span>

      <span
        className={`text-[15px] leading-6 ${
          dark ? "text-white/80" : "text-[#53617a]"
        }`}
      >
        {children}
      </span>
    </li>
  );
}

function JobMeta({
  category,
}: {
  category: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-[#66738a]">
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-[#63a42e]" />
        Nairobi
      </span>

      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5 text-[#63a42e]" />
        Closes 18 August 2026
      </span>

      <span className="inline-flex items-center gap-1.5">
        <BriefcaseBusiness className="h-3.5 w-3.5 text-[#63a42e]" />
        {category}
      </span>
    </div>
  );
}

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#0b1f52]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-[#e7edf4] bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-[10%] -top-[55%] h-[160%] w-[46%] rotate-[38deg] bg-gradient-to-r from-transparent via-[#e8eef6]/65 to-transparent" />
          <div className="absolute right-[25%] -top-[65%] h-[155%] w-[18%] rotate-[38deg] bg-[#eef3f8]/50" />
          <div className="absolute -bottom-32 -left-28 h-64 w-64 rounded-full bg-[#8cc63f]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:px-8 lg:h-[calc(100vh-80px)] lg:max-h-[600px] lg:min-h-[500px] lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-12">
          {/* LEFT */}
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex rounded-full border border-[#8cc63f]/30 bg-[#f1f8e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#559727]">
              Careers at Hyssop
            </span>

            <div className="mt-6">
              <p className="text-3xl font-medium leading-none text-[#7dc32c] sm:text-4xl">
                We are
              </p>

              <h1 className="mt-1 text-5xl font-black leading-none tracking-[-0.045em] text-[#30479d] sm:text-6xl lg:text-[4.6rem]">
                Hiring!
              </h1>
            </div>

            <h2 className="mt-6 max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#0b1f52] sm:text-3xl">
              Build your next chapter with Hyssop.
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#61708a] sm:text-base">
              Join a team shaped by trust, ambition, performance, and a shared
              commitment to delivering exceptional experiences for our clients.
            </p>

            <a
              href="#open-positions"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b1f52] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#18306d]"
            >
              View Open Positions
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative hidden h-[370px] lg:block">
            <div className="absolute right-6 top-1/2 h-[310px] w-[310px] -translate-y-1/2 rounded-full bg-[#30479d]" />

            <div className="absolute right-14 top-1/2 w-[330px] -translate-y-1/2 rounded-[26px] border border-[#dde5ee] bg-white p-6 shadow-[0_24px_65px_rgba(11,31,82,0.16)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#64a72f]">
                    Open Positions
                  </p>

                  <p className="mt-1 text-4xl font-black tracking-tight text-[#30479d]">
                    02
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef7df] text-[#5c9b29]">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 border-t border-[#e4e9ef] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b96a9]">
                  Sales
                </p>
                <p className="mt-1 text-base font-bold text-[#0b1f52]">
                  Relationship Manager
                </p>
              </div>

              <div className="mt-4 border-t border-[#e4e9ef] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b96a9]">
                  Marketing
                </p>
                <p className="mt-1 text-base font-bold text-[#0b1f52]">
                  Digital Marketing Strategist
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-[#f4f6f9] px-4 py-3 text-xs font-semibold leading-5 text-[#53617a]">
                Nairobi · Applications close 18 August 2026
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 bg-[#30479d]" />
      </section>

      {/* =========================================================
          CULTURE
      ========================================================== */}
      <section className="px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5e9e2b]">
              A Culture of Trust
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0b1f52] sm:text-3xl">
              A place for people
              <span className="block text-[#559727]">who want to grow.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-[15px] leading-7 text-[#61708a]">
              At Hyssop Properties, we foster a supportive, performance-driven
              environment where ambition meets opportunity. We believe in
              building people just as intentionally as we build investments —
              creating room for driven individuals to learn, contribute,
              perform, and grow.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Growth", "Ownership", "Performance"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dce4ed] bg-white px-4 py-2 text-xs font-bold text-[#0b1f52]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OPEN POSITIONS
      ========================================================== */}
      <section
        id="open-positions"
        className="scroll-mt-24 bg-white px-6 py-12 sm:px-8 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5e9e2b]">
              Current Opportunities
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0b1f52] sm:text-3xl">
              Open positions
            </h2>

            <p className="mt-2 text-[15px] text-[#61708a]">
              Send your CV and cover letter directly to our HR team.
            </p>
          </div>

          {/* =====================================================
              RELATIONSHIP MANAGER
          ====================================================== */}
          <article className="overflow-hidden rounded-[24px] border border-[#dde5ed] bg-[#fbfcfe] shadow-[0_18px_50px_rgba(11,31,82,0.07)]">
            {/* HEADER */}
            <div className="relative border-b border-[#e4e9ef] px-6 py-6 md:px-8 md:py-7">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-24 h-56 w-56 rounded-[70px] bg-[#eef2f7]/80"
              />

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#eaf6d7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#559727]">
                    We&apos;re Hiring
                  </span>

                  <span className="rounded-full border border-[#d8e0e9] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#66738a]">
                    Sales
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#30479d] sm:text-4xl">
                  Relationship Manager
                </h3>

                <JobMeta category="Sales" />

                <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#596780]">
                  Hyssop Properties Ltd is seeking ambitious, customer-focused
                  Relationship Managers to join our growing sales team.
                </p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="grid gap-8 px-6 py-7 md:px-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h4 className="inline-flex rounded-full bg-[#30479d] px-4 py-2 text-lg font-bold text-white">
                  Key Responsibilities
                </h4>

                <ul className="mt-5 space-y-3">
                  {relationshipResponsibilities.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="inline-flex rounded-full bg-[#30479d] px-4 py-2 text-lg font-bold text-white">
                  Qualifications
                </h4>

                <ul className="mt-5 space-y-3">
                  {relationshipQualifications.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>

            {/* APPLICATION */}
            <div className="mx-6 mb-6 overflow-hidden rounded-[18px] bg-[#0b1f52] md:mx-8 md:mb-8">
              <div className="grid gap-5 px-6 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[14px] font-semibold leading-6 text-white">
                    If you&apos;re passionate about sales, relationship
                    building, and delivering results, we&apos;d love to hear
                    from you.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8cc63f]">
                        Email CV &amp; Cover Letter
                      </p>
                      <a
                        href="mailto:hr@hyssop.co.ke?subject=Relationship%20Manager%20Application"
                        className="mt-1 inline-block text-sm font-bold text-white hover:text-[#9bd84a]"
                      >
                        hr@hyssop.co.ke
                      </a>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8cc63f]">
                        Subject
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Relationship Manager Application
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8cc63f]">
                        Closing Date
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        18 August 2026
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    Only shortlisted candidates will be contacted.
                  </p>
                </div>

                <a
                  href="mailto:hr@hyssop.co.ke?subject=Relationship%20Manager%20Application"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#8cc63f] px-5 py-3 text-sm font-bold text-[#0b1f52] transition hover:bg-[#9bd84a]"
                >
                  <Mail className="h-4 w-4" />
                  Email Application
                </a>
              </div>
            </div>
          </article>

          {/* =====================================================
              DIGITAL MARKETING STRATEGIST
          ====================================================== */}
          <article className="mt-10 overflow-hidden rounded-[24px] border border-[#d9e1ea] bg-white shadow-[0_18px_50px_rgba(11,31,82,0.08)]">
            {/* HEADER */}
            <div className="relative overflow-hidden px-6 py-6 md:px-8 md:py-7">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8cc63f]/10 blur-xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#eaf6d7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#559727]">
                    We&apos;re Hiring
                  </span>

                  <span className="rounded-full border border-[#d8e0e9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#66738a]">
                    Marketing
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#30479d] sm:text-4xl">
                  Digital Marketing Strategist
                </h3>

                <JobMeta category="Digital Marketing" />

                <div className="mt-4 grid max-w-5xl gap-2 lg:grid-cols-2 lg:gap-8">
                  <p className="text-[15px] font-semibold leading-7 text-[#0b1f52]">
                    Are you a creative, data-driven marketer with a passion for
                    generating leads and driving business growth?
                  </p>

                  <p className="text-[15px] leading-7 text-[#596780]">
                    Hyssop Properties Ltd seeks an experienced Digital Marketing
                    Strategist to drive brand visibility, generate quality
                    leads, and support business growth.
                  </p>
                </div>
              </div>
            </div>

            {/* DARK POSTER-INSPIRED SECTION */}
            <div className="relative overflow-hidden bg-[#30479d] px-6 py-7 text-white md:px-8">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-32 h-72 w-72 rounded-full border-[48px] border-white/[0.035]"
              />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
                <div>
                  <h4 className="text-xl font-bold text-[#9ce63f]">
                    Qualifications
                  </h4>

                  <ul className="mt-5 grid gap-3 md:grid-cols-2 md:gap-x-8">
                    {marketingQualifications.map((item) => (
                      <CheckItem key={item} dark>
                        {item}
                      </CheckItem>
                    ))}
                  </ul>

                  <p className="mt-5 text-[14px] font-semibold leading-6 text-[#a2ec46]">
                    If you&apos;re innovative, results-driven, and passionate
                    about digital marketing, we&apos;d love to hear from you.
                  </p>
                </div>

                <div className="rounded-[18px] border border-white/15 bg-[#24377f] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9ce63f]">
                    Submit Your Application
                  </p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-white/50">
                        Email CV &amp; Cover Letter
                      </p>
                      <a
                        href="mailto:hr@hyssop.co.ke?subject=Digital%20Marketing%20Strategist%20Application"
                        className="mt-1 inline-block text-sm font-bold text-white hover:text-[#9ce63f]"
                      >
                        hr@hyssop.co.ke
                      </a>
                    </div>

                    <div className="border-t border-white/10 pt-3">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-white/50">
                        Subject
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Digital Marketing Strategist Application
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/50">
                          Closing
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          18 Aug 2026
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-white/50">
                          Location
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          Nairobi
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:hr@hyssop.co.ke?subject=Digital%20Marketing%20Strategist%20Application"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9ce63f] px-5 py-3 text-sm font-bold text-[#192866] transition hover:bg-[#a9ed56]"
                  >
                    <Mail className="h-4 w-4" />
                    Email Application
                  </a>

                  <p className="mt-3 text-xs leading-5 text-white/55">
                    Only shortlisted candidates will be contacted.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <FloatingWhatsApp />
      <ChatbotWidget />
    </main>
  );
}