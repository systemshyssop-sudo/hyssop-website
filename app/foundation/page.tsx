"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";

type ImpactSection = {
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
};

const impactSections: ImpactSection[] = [
  {
    eyebrow: "Essential care",
    title: "Clothing & Essential Support",
    description:
      "We distribute clothing and essential items to families and individuals, ensuring they are supported with basic needs while restoring confidence and dignity.",
    images: [
      "/hyssop/foundation/clothing-a.png",
      "/hyssop/foundation/clothing-b.png",
      "/hyssop/foundation/clothing-c.png",
      "/hyssop/foundation/clothing-d.png",
    ],
    reverse: false,
  },
  {
    eyebrow: "Shelter & comfort",
    title: "Providing Bedding & Shelter Support",
    description:
      "Through our initiatives, we provide essential bedding and basic living support to those in need - helping restore comfort, safety, and hope.",
    images: [
      "/hyssop/foundation/bedding-a.png",
      "/hyssop/foundation/bedding-b.png",
      "/hyssop/foundation/bedding-c.png",
      "/hyssop/foundation/bedding-d.png",
    ],
    reverse: true,
  },
  {
    eyebrow: "Community outreach",
    title: "Feeding the Needy",
    description:
      "We regularly organize outreach programs to provide meals to street families, offering not just nourishment, but dignity, care, and human connection.",
    images: [
      "/hyssop/foundation/feed-e.png",
      "/hyssop/foundation/feed-b.png",
      "/hyssop/foundation/feed-c.png",
      "/hyssop/foundation/feed-f.png",
    ],
    reverse: false,
  },
  {
    eyebrow: "Economic empowerment",
    title: "Supporting Local Businesses",
    description:
      "We also invest in dignity through opportunity - supporting local entrepreneurs and small businesses that strengthen communities and create sustainable livelihoods.",
    images: [
      "/hyssop/foundation/biz-a.png",
      "/hyssop/foundation/biz-f.png",
      "/hyssop/foundation/biz-c.png",
      "/hyssop/foundation/biz-e.png",
    ],
    reverse: true,
  },
];

function PremiumCollage({
  images,
  altBase,
}: {
  images: string[];
  altBase: string;
}) {
  const collageImages = images.slice(0, 4);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        {collageImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="overflow-hidden rounded-[20px] bg-[#eef3f8] h-[170px] sm:h-[220px] lg:h-[240px]"
          >
            <Image
              src={img}
              alt={`${altBase} ${index + 1}`}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
<section className="relative overflow-hidden pt-[110px] pb-20 text-white">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/hyssop/foundation/bg.png"
      alt="Hyssop Foundation background"
      fill
      priority
      className="object-cover object-right"
    />
    <div className="absolute inset-0 bg-[#0b1f52]/72" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f52]/88 via-[#0b1f52]/70 to-[#0b1f52]/38" />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
    <div className="flex min-h-[560px] items-center">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-[#8cc63f]/60 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#a7d85f]">
          Hyssop Foundation
        </p>

        <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-[6rem]">
          Real estate with
          <span className="block text-[#8cc63f]">real human</span>
          <span className="block text-[#8cc63f]">impact.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-white/88">
          At Hyssop Properties, our journey goes beyond land and ownership.
          Through the Hyssop Foundation, we are committed to supporting
          vulnerable families, empowering communities, and creating lasting
          impact where it matters most.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">
          Every outreach initiative is made possible by the trust our clients
          place in us. Because of you, our work extends beyond property —
          into lives, dignity, and futures.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* INTRO */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            Giving back, together
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Community impact, captured in action
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#8cc63f]" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#61708a]">
            Our foundation work is rooted in practical support and human dignity
            - from feeding families and providing bedding, to essential care
            and empowering local businesses. These moments reflect the people,
            partnerships, and purpose behind the Hyssop Foundation.
          </p>
        </div>
      </section>

      {/* IMPACT SECTIONS */}
      <section className="px-6 pb-24 lg:px-12">
  <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
    {impactSections.map((section) => (
      <div
        key={section.title}
        className="rounded-[28px] border border-[#e6ebf2] bg-white p-6 shadow-[0_16px_40px_rgba(11,31,82,0.05)] sm:p-8 lg:p-10"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={
              section.reverse
                ? "order-2 lg:order-2"
                : "order-2 lg:order-1"
            }
          >
            <PremiumCollage
              images={section.images}
              altBase={section.title}
            />
          </div>

          <div
            className={
              section.reverse
                ? "order-1 lg:order-1"
                : "order-1 lg:order-2"
            }
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
              {section.eyebrow}
            </p>

            <h3 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]">
              {section.title}
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#61708a]">
              {section.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CLOSING */}
      <section className="bg-[#0b1f52] px-6 py-20 text-white lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7d85f]">
            Shared impact
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Because of You, We Can Do More
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/82">
            Every initiative through the Hyssop Foundation is made possible by
            the trust our clients place in us. Your journey with Hyssop
            Properties helps us extend impact beyond real estate and into
            communities that need support most.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/82">
            As we continue to grow, we remain committed to building not only
            investments, but hope, dignity, and opportunity for others.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-[#e6ebf2] bg-white px-8 py-14 text-center shadow-[0_24px_60px_rgba(11,31,82,0.06)] sm:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8cc63f]">
            Stay connected
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#0b1f52] sm:text-3xl">
            Follow the Journey of Impact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#61708a]">
            Stay updated on future outreach programs, community support
            initiatives, and the lives being touched through the Hyssop
            Foundation.
          </p>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-8 py-3.5 font-semibold text-[#0b1f52] transition duration-300 hover:scale-[1.02]"
          >
            Follow Our Journey
          </a>
        </div>
      </section>

      <div id="contact" className="scroll-mt-[100px]">
        <ContactSection />
      </div>
    </main>
  );
}