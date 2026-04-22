"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/navbar";

export default function AwardsPage() {
  const realEstateAwards = [
    {
      title: "Top 10 Most Dependable Real Estate CEOs in Kenya (2025)",
      org: "Dependable Brands Africa",
      img: "1.jpg",
      desc: "This recognition highlights CEO Naftaly Mwangi’s leadership in building a real estate brand grounded in trust, transparency, and consistent delivery. It reflects a vision that prioritizes long-term value for clients while setting a higher standard for professionalism in the industry.",
    },
    {
      title: "Best Land-Selling Company – 2nd Runners Up (2025)",
      org: "Top Properties Awards",
      img: "2.png",
      desc: "Awarded for outstanding performance in land sales, this recognition underscores our ability to deliver accessible, well-documented, and high-potential investment opportunities - consistently meeting the expectations of both local and diaspora clients.",
    },
    {
      title: "Most Trusted & Reliable Company (2024)",
      org: "Real Estate Staging Awards (RESA)",
      img: "3.png",
      desc: "Trust is built over time through consistency. This award affirms our commitment to delivering secure transactions, clear processes, and dependable outcomes - ensuring every client experiences confidence at every step of their journey.",
    },
    {
      title: "Most Credible Land-Selling Company of the Year (2024)",
      org: "Dependable Brands Africa",
      img: "4.jpg",
      desc: "Credibility is the foundation of every investment decision. This recognition reflects our unwavering dedication to transparency, verified ownership, and delivering opportunities that clients can rely on with certainty.",
    },
    {
      title: "Top 5 Most Dependable Real Estate CEOs in Kenya (2024)",
      org: "Dependable Brands Africa",
      img: "5.jpg",
      desc: "This award celebrates leadership that is both visionary and disciplined - driving innovation while maintaining a strong commitment to ethics, client satisfaction, and sustainable growth in the real estate space.",
    },
    {
      title: "Winner – Affordable Homes & Land Investments (2023)",
      org: "Pacesetters Awards – Eastern Africa",
      img: "6.png",
      desc: "Recognizing our contribution to making land ownership more accessible, this award reflects our focus on creating practical investment pathways that empower more individuals and families to secure their future.",
    },
    {
      title: "Company of the Year – Beyond Real Estate Performance (2022)",
      org: "NaBLA Awards",
      img: "07.png",
      desc: "This recognition goes beyond transactions - highlighting our broader impact in empowering clients, supporting communities, and redefining what success in real estate truly means.",
    },
  ];

  const impactAwards = [
    {
      title: "Kamba Festival Sponsorship Recognition (2025)",
      org: "Cultural Contribution",
      img: "8.png",
      desc: "Our support for the Kamba Festival reflects a deep appreciation for culture, identity, and community. We believe that growth is not only measured in investments, but also in how we preserve and celebrate the traditions that bring people together.",
    },
    {
      title: "Kiambu Golf Club Centenary Contribution",
      org: "Sports Contribution",
      img: "9.png",
      desc: "Through our contribution to the Kiambu Golf Club Centenary, we continue to support platforms that foster community engagement, excellence, and shared experiences - reinforcing our belief in building connections beyond business.",
    },
    {
      title: "Nation Golf Series Partnership (2021)",
      org: "Nation Media Group",
      img: "10.png",
      desc: "Our partnership in the Nation Golf Series reflects our commitment to supporting sporting initiatives that bring together professionals, investors, and communities - creating meaningful interactions that extend beyond real estate.",
    },
  ];

  return (
    <main className="bg-[#f8f9fa] text-[#0b1f52] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
<section className="px-6 pt-30 pb-16 lg:px-12">
  <div className="mx-auto max-w-6xl">
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      
      {/* TEXT */}
      <div className="text-center lg:text-left">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
          Awards & Recognition
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-[#0b1f52] sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
          Built on trust.
          <span className="block">Recognized for excellence.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5d6a84] lg:mx-0 lg:max-w-xl">
          Our journey is defined by trust, consistency, and meaningful impact.
          These recognitions reflect not only our performance in real estate,
          but also our commitment to community, culture, and long-term value creation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#0b1f52] lg:justify-start">
          <span className="rounded-full bg-[#eef7df] px-4 py-2">Trusted brand</span>
          <span className="rounded-full bg-[#eef2f7] px-4 py-2">Industry recognition</span>
          <span className="rounded-full bg-[#eef2f7] px-4 py-2">Community impact</span>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[360px] h-[420px] overflow-hidden rounded-[28px] border border-[#e5ebf3] bg-white p-2 shadow-[0_24px_60px_rgba(11,31,82,0.10)]">
          <Image
            src="/hyssop/awards/hero.png"
            alt="Hyssop award moment"
            fill
            className="rounded-[22px] object-contain"
            priority
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= REAL ESTATE ================= */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Excellence in Real Estate
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateAwards.map((award, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition"
              >
                <div className="relative h-[220px]">
                  <Image
  src={`/hyssop/awards/${award.img}`}
  alt={award.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover group-hover:scale-105 transition duration-500"
/>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-sm text-[#8cc63f] font-semibold">
                    {award.org}
                  </p>

                  <h3 className="font-bold text-lg leading-snug">
                    {award.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.desc}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#8cc63f]/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEYOND REAL ESTATE ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Beyond Real Estate
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAwards.map((award, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition"
              >
                <div className="relative h-[220px]">
                  <Image
  src={`/hyssop/awards/${award.img}`}
  alt={award.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover group-hover:scale-105 transition duration-500"
/>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-sm text-[#8cc63f] font-semibold">
                    {award.org}
                  </p>

                  <h3 className="font-bold text-lg leading-snug">
                    {award.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.desc}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#8cc63f]/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">

          <h2 className="text-2xl font-semibold">
            Built on Trust. Driven by Impact.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            From real estate excellence to community engagement, every milestone 
            reflects our commitment to doing more — for our clients, our partners, 
            and the communities we serve.
          </p>

          <a href="/#contact">
            <button className="bg-[#8cc63f] text-[#0b1f52] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Speak to a Consultant
            </button>
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>

    </main>
  );
}