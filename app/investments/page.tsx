"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1f52] flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="rounded-[32px] border border-[#dbe4ef] bg-white px-8 py-10 shadow-[0_24px_60px_rgba(11,31,82,0.08)] sm:px-10 sm:py-12">
            <div className="mx-auto mb-8 flex h-[180px] w-[180px] items-center justify-center rounded-[28px] bg-[#f3f7eb] ring-1 ring-[#d9ebbb] sm:h-[200px] sm:w-[200px]">
              <Image
                src="/hyssop/investments-logo.jpg"
                alt="Hyssop Investment Co-operative"
                width={160}
                height={160}
                className="h-auto w-[120px] object-contain sm:w-[140px]"
                priority
              />
            </div>

            <span className="inline-block rounded-full bg-[#eaf6d7] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4a8c2f]">
              Coming Soon
            </span>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
              Hyssop Investment Co-operative
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#5b6880] sm:text-lg">
              A new platform designed to help you grow beyond ownership through
              smarter saving, access to financing, and long-term value creation
              anchored on trust.
            </p>

            <a
              href="https://wa.me/254707666000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:scale-[1.02]"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}