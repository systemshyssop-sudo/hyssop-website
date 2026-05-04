"use client";

import {
  FaGoogle,
  FaStar,
  FaArrowRight,
} from "react-icons/fa6";

const googleReviews = [
  {
    name: "Diana Chenah",
    location: "Hyssop Properties Client",
    review:
      "Beautiful properties and flexible payment plans. I love your apartments at Thindigua.",
    link: "https://maps.app.goo.gl/TfnrnHNU4ChV1WEx5",
  },
  {
    name: "Katey Wanjiku",
    location: "Hyssop Properties Client",
    review:
      "Received my tittle on time.Looking forward to doing more business with you in future. Barikiweni.",
    link: "https://maps.app.goo.gl/Vy49ufwp4dPAP2169",
  },
  {
    name: "Patriciah Kamunya",
    location: "Hyssop Properties Client",
    review:
      "I loved their honesty and zeal, best company to invest in.",
    link: "https://maps.app.goo.gl/S954GK8jLSqDGUzT6",
  },
  {
    name: "Rose Chepkorir",
    location: "Hyssop Properties Client",
    review:
      "Hyssop properties Limited are genuine  transparent and trustworthy.",
    link: "https://maps.app.goo.gl/Lvij84bwJYRpoKPE6",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="bg-[#f7f9fc] px-6 py-24 text-[#0b1f52] lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
            Google reviews
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
            Trusted by real property investors.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#61708a]">
            Hear directly from clients who have worked with Hyssop Properties
            through their land ownership journey.
          </p>
        </div>

        <div className="mt-8 mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#0b1f52] shadow-sm ring-1 ring-black/5">
            Verified Google Reviews • Hyssop Properties
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {googleReviews.map((review, index) => (
            <a
              key={index}
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[310px] flex-col overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(11,31,82,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b1f52] text-white">
                  <FaGoogle className="text-base" />
                </div>

                <div className="flex gap-1 text-[#8cc63f]">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-xs" />
                  ))}
                </div>
              </div>

              <p className="flex-1 text-sm leading-7 text-[#61708a]">
                “{review.review}”
              </p>

              <div className="mt-7 border-t border-[#0b1f52]/10 pt-5">
                <h3 className="text-base font-semibold tracking-tight text-[#0b1f52]">
                  {review.name}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8cc63f]">
                  {review.location}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b1f52] transition duration-300 group-hover:text-[#8cc63f]">
                  View on Google
                  <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
  <a
    href="https://www.google.com/maps/place/Hyssop+Properties+Limited/@-1.2292447,36.839516,17z/data=!4m8!3m7!1s0x182f111c96cf3133:0x6a7bf056632b15f3!8m2!3d-1.2292447!4d36.8420909!9m1!1b1!16s%2Fg%2F11j20g40hv?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-[#0b1f52]/12 px-7 py-3.5 font-semibold text-[#0b1f52] transition duration-300 hover:bg-[#0b1f52] hover:text-white"
  >
    <FaGoogle className="mr-2" />
    Read More Google Reviews
  </a>
</div>
      </div>
    </section>
  );
}