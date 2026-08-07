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
    <main className="min-h-screen bg-[#f8f9fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#e7edf4] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:px-8 lg:min-h-[510px] lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-14">
          {/* COPY */}
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#6aa931]">
              Awards &amp; Recognition
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-[#0b1f52] sm:text-5xl lg:text-[3.45rem]">
              Built on trust.
              <span className="block">Recognized for excellence.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#5d6a84] sm:text-base">
              Our journey is defined by trust, consistency, and meaningful
              impact. These recognitions reflect our work as a trusted real
              estate company in Kenya, our commitment to verified land
              ownership, and our focus on long-term value for every client.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-[#dce9c8] bg-[#f1f8e8] px-4 py-2 text-xs font-semibold text-[#0b1f52]">
                Trusted land brand
              </span>

              <span className="rounded-full border border-[#e1e6ee] bg-[#f4f6f9] px-4 py-2 text-xs font-semibold text-[#0b1f52]">
                Industry recognition
              </span>

              <span className="rounded-full border border-[#e1e6ee] bg-[#f4f6f9] px-4 py-2 text-xs font-semibold text-[#0b1f52]">
                Community impact
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#eef2f6] shadow-[0_22px_60px_rgba(11,31,82,0.12)]">
              <Image
                src="/hyssop/awards/hero1.png"
                alt="Hyssop Properties award recognition in Kenya"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061531]/10 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 left-7 rounded-full bg-[#8cc63f] px-5 py-2.5 text-xs font-bold text-[#0b1f52] shadow-[0_10px_28px_rgba(11,31,82,0.14)]">
              Recognition earned through consistent delivery
            </div>
          </div>
        </div>
      </section>

      {/* REAL ESTATE */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6aa931]">
              Real Estate Awards
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1f52]">
              Excellence in Real Estate
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#61708a]">
              These awards reflect the trust clients place in Hyssop Properties
              when buying land, securing title deeds, and making property
              investment decisions in Kenya.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realEstateAwards.map((award) => (
              <article
                key={award.title}
                className="group overflow-hidden rounded-[22px] border border-[#e2e8ef] bg-white shadow-[0_14px_40px_rgba(11,31,82,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(11,31,82,0.11)]"
              >
                <div className="relative h-[210px] overflow-hidden bg-[#eef2f6]">
                  <Image
                    src={`/hyssop/awards/${award.img}`}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#6aa931]">
                    {award.org}
                  </p>

                  <h3 className="mt-3 text-lg font-bold leading-snug text-[#0b1f52]">
                    {award.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#65728a]">
                    {award.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6aa931]">
              Beyond Real Estate
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1f52]">
              Community, Culture, and Impact
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#61708a]">
              For Hyssop, real estate is also about people. Our community
              engagements reflect a wider commitment to the clients, partners,
              and communities that shape our growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactAwards.map((award) => (
              <article
                key={award.title}
                className="group overflow-hidden rounded-[22px] border border-[#e2e8ef] bg-[#fbfcfe] shadow-[0_12px_34px_rgba(11,31,82,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,31,82,0.1)]"
              >
                <div className="relative h-[210px] overflow-hidden bg-[#eef2f6]">
                  <Image
                    src={`/hyssop/awards/${award.img}`}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#6aa931]">
                    {award.org}
                  </p>

                  <h3 className="mt-3 text-lg font-bold leading-snug text-[#0b1f52]">
                    {award.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#65728a]">
                    {award.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHARED CONTACT FOOTER */}
      <ContactSection />
    </main>
  );
}