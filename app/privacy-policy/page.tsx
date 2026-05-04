import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata = {
  title: "Privacy Policy | Hyssop Properties",
  description:
    "Privacy Policy for Hyssop Properties, explaining how client and website visitor information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b1f52]">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f8fbff] to-white px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7ab62f]">
            Hyssop Properties
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            This Privacy Policy explains how Hyssop Properties collects, uses,
            and protects information shared by clients, prospects, website
            visitors, and users who contact us through our digital platforms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e8eef5] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="space-y-10 text-gray-600">
            <PolicyBlock title="1. Information We Collect">
              <p>
                We may collect personal information that you voluntarily provide
                when you contact Hyssop Properties, fill in a form, request a
                site visit, make an inquiry, subscribe to updates, or communicate
                with us through WhatsApp, phone, email, social media, or our
                website.
              </p>

              <p>
                This information may include your name, phone number, email
                address, preferred project, inquiry details, and any message or
                information you choose to share with us.
              </p>
            </PolicyBlock>

            <PolicyBlock title="2. How We Use Your Information">
              <p>
                We use the information collected to respond to your inquiries,
                assist with property information, arrange site visits, share
                project updates, provide customer support, process requests, and
                improve our services.
              </p>

              <p>
                We may also use your information to communicate relevant updates
                about Hyssop Properties projects, offers, events, title deed
                issuance activities, and related services where appropriate.
              </p>
            </PolicyBlock>

            <PolicyBlock title="3. Website Analytics and Cookies">
              <p>
                Our website may use analytics and tracking tools such as Google
                Analytics, Microsoft Clarity, and similar technologies to help us
                understand website performance, visitor behavior, and user
                engagement.
              </p>

              <p>
                These tools may collect information such as pages visited, device
                type, browser type, approximate location, session activity, and
                interactions with website buttons or forms. This helps us improve
                the website experience and measure marketing effectiveness.
              </p>
            </PolicyBlock>

            <PolicyBlock title="4. WhatsApp, Forms, and Communication Channels">
              <p>
                When you submit a form or click a WhatsApp button on our website,
                the information you provide may be sent to Hyssop Properties
                through WhatsApp or other connected communication systems.
              </p>

              <p>
                By contacting us through these channels, you consent to being
                contacted by Hyssop Properties regarding your inquiry.
              </p>
            </PolicyBlock>

            <PolicyBlock title="5. How We Protect Your Information">
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, misuse, loss, or disclosure. Access to
                client information is limited to authorized team members and
                service providers who need it to support your inquiry or service
                request.
              </p>
            </PolicyBlock>

            <PolicyBlock title="6. Sharing of Information">
              <p>
                We do not sell your personal information. We may share your
                information only where necessary to respond to your inquiry,
                support service delivery, comply with legal obligations, or work
                with trusted service providers who help us operate our website,
                communication systems, and customer support processes.
              </p>
            </PolicyBlock>

            <PolicyBlock title="7. Your Choices">
              <p>
                You may request that we update, correct, or stop using your
                personal information for marketing or follow-up communication.
                You may also choose not to provide certain optional information,
                such as a phone number or message, when filling in website forms.
              </p>
            </PolicyBlock>

            <PolicyBlock title="8. External Links">
              <p>
                Our website may include links to external platforms such as
                Google Maps, WhatsApp, Facebook, Instagram, TikTok, YouTube, or
                other third-party services. These platforms have their own
                privacy practices, and Hyssop Properties is not responsible for
                how they process your information.
              </p>
            </PolicyBlock>

            <PolicyBlock title="9. Updates to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our services, website features, legal requirements, or
                business operations. The latest version will always be available
                on this page.
              </p>
            </PolicyBlock>

            <PolicyBlock title="10. Contact Us">
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, you can contact Hyssop Properties through
                our official communication channels.
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:info@hyssopproperties.com"
                  className="font-semibold text-[#0b1f52] hover:text-[#7ab62f]"
                >
                  info@hyssopproperties.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+254707666000"
                  className="font-semibold text-[#0b1f52] hover:text-[#7ab62f]"
                >
                  +254 707 666 000
                </a>
              </p>
            </PolicyBlock>
          </div>

          <div className="mt-12 border-t border-[#e8eef5] pt-8">
            <Link
              href="/"
              className="inline-flex rounded-full border border-[#0b1f52]/15 px-6 py-3 text-sm font-semibold text-[#0b1f52] transition hover:bg-[#0b1f52] hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <FloatingWhatsApp />
      <ChatbotWidget />
    </main>
  );
}

function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0b1f52]">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-8">{children}</div>
    </section>
  );
}