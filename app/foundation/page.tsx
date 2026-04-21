"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/navbar";

export default function FoundationPage() {
  return (
    <main className="bg-[#f8f9fa] text-[#0b1f52] min-h-screen">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] text-white flex items-center pt-[100px]">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hyssop/foundation/bg.png"
            alt="Hyssop Foundation"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 lg:px-16">
          <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-black leading-tight">
            A Culture of <br />
            <span className="text-[#8cc63f]">Giving.</span>
          </h1>

          <span className="inline-block mt-4 px-4 py-1 text-xs font-semibold bg-[#8cc63f] text-[#0b1f52] rounded-full">
            Hyssop Foundation
          </span>

          <p className="mt-6 text-lg sm:text-xl opacity-90">
              Made possible by you.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Giving Back, Together
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Hyssop Properties, our journey goes beyond real estate. Through the Hyssop Foundation, 
            we are committed to giving back to the community — supporting vulnerable families, 
            empowering individuals, and contributing to the education of dozens of needy students across Kenya.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every initiative we undertake is made possible by the trust our clients place in us. 
            Because of you, we are able to extend impact beyond property — into lives, families, and futures.
          </p>

        </div>
      </section>

      {/* ================= IMPACT GRID ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="relative h-[280px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/hyssop/foundation/1.png"
                alt="Feeding the needy"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Feeding the Needy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We regularly organize outreach programs to provide meals to street families, 
                offering not just nourishment, but dignity, care, and human connection.
              </p>
            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl font-semibold">
                Providing Bedding & Shelter Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Through our initiatives, we provide essential bedding and basic living support 
                to those in need - helping restore comfort, safety, and hope.
              </p>
            </div>

            <div className="relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/hyssop/foundation/2.png"
                alt="Providing bedding"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* ROW 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="relative h-[280px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/hyssop/foundation/3.png"
                alt="Providing clothes"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Clothing & Essential Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We distribute clothing and essential items to families and individuals, 
                ensuring they are supported with basic needs while restoring confidence and dignity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="bg-[#0b1f52] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">
            Because of You, We Can Do More
          </h2>

          <p className="opacity-90 leading-relaxed">
            Every act of giving is made possible by the trust you place in Hyssop Properties. 
            Your journey with us creates opportunities to impact lives beyond property — 
            and for that, we are truly grateful.
          </p>

          <p className="opacity-90 leading-relaxed">
            We look forward to continuing this journey together — reaching more communities, 
            supporting more families, and building a future where growth is shared.
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">

          <h2 className="text-2xl font-semibold">
            Join Us on Our Next Outreach
          </h2>

          <p className="text-gray-600">
            Follow our journey and stay updated on upcoming foundation events, outreach programs, 
            and opportunities to be part of the impact.
          </p>

          <a href="https://www.instagram.com" target="_blank">
            <button className="bg-[#8cc63f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Follow Our Journey
            </button>
          </a>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>

    </main>
  );
}