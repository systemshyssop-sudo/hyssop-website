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
      desc: "This recognition highlights CEO Naftaly Mwangi’s leadership in building a real estate company in Kenya grounded in trust, transparency, and consistent delivery. It reflects a vision that prioritizes long-term value for clients while setting a higher standard for professionalism in land ownership and property investment.",
    },
    {
      title: "Best Land-Selling Company – 2nd Runners Up (2025)",
      org: "Top Properties Awards",
      img: "2.png",
      desc: "Awarded for outstanding performance in land sales, this recognition reflects our ability to deliver accessible, well-documented, and high-potential land investment opportunities to both local and diaspora clients.",
    },
    {
      title: "Most Trusted & Reliable Company (2024)",
      org: "Real Estate Staging Awards (RESA)",
      img: "3.png",
      desc: "Trust is built through consistency. This award affirms our commitment to secure transactions, clear processes, ready title deed support, and dependable outcomes for clients buying land in Kenya.",
    },
    {
      title: "Most Credible Land-Selling Company of the Year (2024)",
      org: "Dependable Brands Africa",
      img: "4.jpg",
      desc: "Credibility is the foundation of every land purchase. This recognition reflects our dedication to transparency, verified ownership, and property opportunities that clients can approach with confidence.",
    },
    {
      title: "Top 5 Most Dependable Real Estate CEOs in Kenya (2024)",
      org: "Dependable Brands Africa",
      img: "5.jpg",
      desc: "This award celebrates leadership that is both visionary and disciplined — driving growth while maintaining a strong commitment to ethics, client satisfaction, and responsible real estate investment in Kenya.",
    },
    {
      title: "Winner – Affordable Homes & Land Investments (2023)",
      org: "Pacesetters Awards – Eastern Africa",
      img: "6.png",
      desc: "Recognizing our contribution to making land ownership more accessible, this award reflects our focus on creating practical investment pathways that help more individuals and families secure their future.",
    },
    {
      title: "Company of the Year – Beyond Real Estate Performance (2022)",
      org: "NaBLA Awards",
      img: "07.png",
      desc: "This recognition goes beyond transactions — highlighting our broader impact in empowering clients, supporting communities, and redefining what success in real estate truly means.",
    },
  ];

  const impactAwards = [
    {
      title: "Kamba Festival Sponsorship Recognition (2025)",
      org: "Cultural Contribution",
      img: "8.png",
      desc: "Our support for the Kamba Festival reflects a deep appreciation for culture, identity, and community. We believe growth is not only measured in investments, but also in how we preserve and celebrate the traditions that bring people together.",
    },
    {
      title: "Kiambu Golf Club Centenary Contribution",
      org: "Sports Contribution",
      img: "9.png",
      desc: "Through our contribution to the Kiambu Golf Club Centenary, we continue to support platforms that foster community engagement, excellence, and shared experiences — reinforcing our belief in building connections beyond business.",
    },
    {
      title: "Nation Golf Series Partnership (2021)",
      org: "Nation Media Group",
      img: "10.png",
      desc: "Our partnership in the Nation Golf Series reflects our commitment to supporting initiatives that bring together professionals, investors, and communities — creating meaningful interactions that extend beyond real estate.",
    },
  ];

  return (
    <main className="bg-[#f8f9fa] text-[#0b1f52] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-20 lg:pt-32">
          <div className="h-4 lg:h-8" />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="pb-16 lg:pb-32">
              <p className="mb-10 text-[0.75rem] font-bold uppercase tracking-[0.35em] text-[#8cc63f]">
                Awards &amp; Recognition
              </p>

              <h1 className="max-w-xl text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#0b1f52] sm:text-6xl lg:text-[5.2rem]">
                Built on trust.
                <span className="block">Recognized for excellence.</span>
              </h1>

              <p className="mt-10 max-w-lg text-[1.05rem] leading-relaxed text-[#5d6a84]">
                Our journey is defined by trust, consistency, and meaningful
                impact. These recognitions reflect our work as a trusted real
                estate company in Kenya, our commitment to verified land
                ownership, and our focus on long-term value for every client.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-[#f1f8e8] px-6 py-3 text-xs font-bold text-[#0b1f52]">
                  Trusted land brand
                </span>
                <span className="rounded-full bg-[#f1f4f9] px-6 py-3 text-xs font-bold text-[#0b1f52]">
                  Industry recognition
                </span>
                <span className="rounded-full bg-[#f1f4f9] px-6 py-3 text-xs font-bold text-[#0b1f52]">
                  Community impact
                </span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[3rem] shadow-2xl lg:rounded-tl-[5rem]">
                  <Image
                    src="/hyssop/awards/hero1.png"
                    alt="Hyssop Properties award recognition in Kenya"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL ESTATE */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
              Real Estate Awards
            </p>

            <h2 className="text-3xl font-bold">
              Excellence in Real Estate
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
              These awards reflect the trust clients place in Hyssop Properties
              when buying land, securing title deeds, and making property
              investment decisions in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateAwards.map((award, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={`/hyssop/awards/${award.img}`}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <p className="text-sm text-[#8cc63f] font-bold uppercase tracking-wider">
                    {award.org}
                  </p>
                  <h3 className="font-bold text-xl leading-tight text-[#0b1f52]">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND REAL ESTATE */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
              Beyond Real Estate
            </p>

            <h2 className="text-3xl font-bold">
              Community, Culture, and Impact
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
              For Hyssop, real estate is also about people. Our community
              engagements reflect a wider commitment to the clients, partners,
              and communities that shape our growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAwards.map((award, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={`/hyssop/awards/${award.img}`}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <p className="text-sm text-[#8cc63f] font-bold uppercase tracking-wider">
                    {award.org}
                  </p>
                  <h3 className="font-bold text-xl leading-tight text-[#0b1f52]">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0b1f52] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built on Trust. Driven by Impact.
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed">
            From real estate excellence to community engagement, every milestone
            reflects our commitment to doing more — for our clients, our
            partners, and the communities we serve.
          </p>

          <a href="/#contact" className="inline-block">
            <button className="bg-[#8cc63f] text-[#0b1f52] px-10 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300">
              Speak to a Consultant
            </button>
          </a>
        </div>
      </section>

      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>
    </main>
  );
}