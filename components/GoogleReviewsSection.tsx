"use client";

import Link from "next/link";

const reviews = [
  {
    name: "Diana Chenah",
    text: "“Beautiful properties and flexible payment plans. I love your apartments at Thindigua.”",
    role: "Hyssop Properties Client",
    link: "https://maps.app.goo.gl/TfnrnHNU4ChV1WEx5",
  },
  {
    name: "Katey Wanjiku",
    text: "“Received my tittle on time.Looking forward to doing more business with you in future. Barikiweni.”",
    role: "Hyssop Properties Client",
    link: "https://maps.app.goo.gl/Vy49ufwp4dPAP2169",
  },
  {
    name: "Patriciah Kamunya",
    text: "“I loved their honesty and zeal, best company to invest in.”",
    role: "Hyssop Properties Client",
    link: "https://maps.app.goo.gl/S954GK8jLSqDGUzT6",
  },
  {
    name: "Rose Chepkorir",
    text: "“Hyssop properties Limited are genuine transparent and trustworthy.”",
    role: "Hyssop Properties Client",
    link: "https://maps.app.goo.gl/Lvij84bwJYRpoKPE6",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Google reviews
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Trusted by real property investors.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#61708a]">
            Hear directly from clients who have worked with Hyssop Properties through their land ownership journey.
          </p>
        </div>

        {/* Reviews Grid - Forced to 4 columns on large screens */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[24px] border border-[#e7edf4] bg-[#fbfcfe] p-8 shadow-[0_10px_24px_rgba(11,31,82,0.04)]"
            >
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#fbbc05] text-lg">★</span>
                ))}
              </div>
              <p className="flex-grow text-sm italic leading-relaxed text-[#0b1f52]">
                {review.text}
              </p>
              <div className="mt-6 border-t border-[#e7edf4] pt-6">
                <p className="font-bold text-[#0b1f52]">{review.name}</p>
                <p className="text-xs text-[#6c7b94]">{review.role}</p>
                <Link
                  href={review.link}
                  target="_blank"
                  className="mt-3 inline-block text-xs font-bold text-[#8cc63f] hover:underline"
                >
                  View on Google
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-14 text-center">
          <Link
            href="https://www.google.com/maps/place/Hyssop+Properties+Limited/@-1.2292447,36.839516,17z/data=!4m8!3m7!1s0x182f111c96cf3133:0x6a7bf056632b15f3!8m2!3d-1.2292447!4d36.8420909!9m1!1b1!16s%2Fg%2F11j20g40hv?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1f52] hover:text-[#8cc63f]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b1f52] text-[10px] text-white">G</span>
            Read More Google Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}