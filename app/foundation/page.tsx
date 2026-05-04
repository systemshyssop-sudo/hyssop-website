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
<>
  {/* MOBILE HERO - TEXT FIRST, IMAGE SECOND */}
  <section className="bg-[#0b1f52] text-white lg:hidden">
    <div className="px-6 pt-8 pb-7">
      <div className="mb-5 inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0b1f52] shadow-sm">
        Hyssop Foundation
      </div>

      <h1 className="text-3xl font-bold leading-tight text-white">
        Real estate with real human impact
      </h1>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]">
        Real estate with purpose
      </p>
    </div>

    <div className="relative h-[320px] w-full overflow-hidden bg-[#e9edf3]">
      <Image
        src="/hyssop/foundation/hero.png"
        alt="Hyssop Foundation"
        fill
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 48px), 1280px"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  </section>

  {/* DESKTOP HERO - IMAGE WITH OVERLAY TEXT */}
  <section
    className="relative hidden w-full overflow-hidden bg-[#e9edf3] lg:block"
    style={{
      height: "46vh",
      minHeight: "360px",
    }}
  >
    <Image
      src="/hyssop/foundation/hero.png"
      alt="Hyssop Foundation"
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
      Hyssop Foundation
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
        Real estate with real human impact
      </h1>

      <p
        className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#8cc63f]"
        style={{
          textShadow: "0 2px 12px rgba(0,0,0,0.55)",
        }}
      >
        Real estate with purpose
      </p>
    </div>
  </section>
</>

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