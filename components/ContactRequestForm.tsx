"use client";

import { FormEvent, useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa6";

export default function ContactRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = `Hello Hyssop Properties, I would like to be contacted.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Message: ${
      formData.message ||
      "Please contact me with more information about Hyssop Properties."
    }`;

    window.open(
      `https://wa.me/254707666000?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT COPY */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#8cc63f]">
              Request a call back
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-[#0b1f52] sm:text-4xl">
              Want us to contact you?
            </h2>

            <p className="mt-5 text-base leading-8 text-[#61708a]">
              Share your details and our team will reach out to guide you
              through available projects, pricing, site visits, and the land
              ownership process.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#e8eef5] bg-[#f8fafc] p-5">
                <FaPhone className="mb-4 text-[#8cc63f]" />
                <p className="text-sm font-semibold text-[#0b1f52]">
                  Direct support
                </p>
                <p className="mt-2 text-sm leading-6 text-[#61708a]">
                  Speak with our sales team about projects and site visits.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#e8eef5] bg-[#f8fafc] p-5">
                <FaEnvelope className="mb-4 text-[#8cc63f]" />
                <p className="text-sm font-semibold text-[#0b1f52]">
                  Clear guidance
                </p>
                <p className="mt-2 text-sm leading-6 text-[#61708a]">
                  Get help with pricing, payments, and documentation.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#e8eef5] bg-[#f8fafc] p-6 shadow-[0_18px_50px_rgba(11,31,82,0.08)] sm:p-8"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#8cc63f]/15 text-[#4c7d16]">
              <FaUser />
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-[#0b1f52]">
              Request contact
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#61708a]">
              Fill in your details and we’ll reach out as soon as possible.
            </p>

            <div className="mt-7 grid gap-4">
              <label>
                <span className="mb-2 block text-sm font-semibold text-[#0b1f52]">
                  Name *
                </span>
                <input
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7ab62f]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-[#0b1f52]">
                  Email *
                </span>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7ab62f]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-[#0b1f52]">
                  Phone number{" "}
                  <span className="font-normal text-[#61708a]">(optional)</span>
                </span>
                <input
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: event.target.value,
                    }))
                  }
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7ab62f]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-[#0b1f52]">
                  Message{" "}
                  <span className="font-normal text-[#61708a]">(optional)</span>
                </span>
                <textarea
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Tell us what you’d like help with"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-[#e8eef5] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7ab62f]"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#7ab62f] px-7 py-3.5 font-semibold text-[#0b1f52] transition hover:scale-[1.02] hover:bg-[#8cc63f]"
            >
              Request to be contacted
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#61708a]">
              Your request opens in WhatsApp so our team can respond directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}