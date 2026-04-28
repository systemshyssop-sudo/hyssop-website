"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const WHATSAPP_URL =
  "https://wa.me/254707666000?text=Hello%20Hyssop%20Properties%2C%20I%20need%20assistance.";

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function getBotResponse(input: string) {
  const text = input.toLowerCase();

  const asksPrice = includesAny(text, [
    "price",
    "prices",
    "cost",
    "how much",
    "payment",
    "pay",
    "installment",
    "deposit",
  ]);

  const asksTitleTime =
    includesAny(text, ["title", "deed", "title deed"]) &&
    includesAny(text, ["time", "long", "take", "duration", "when"]);

  const isTumaini = includesAny(text, ["tumaini", "tumaini estate"]);
  const isMalindi = includesAny(text, ["malindi", "hyssop acres"]);
  const isKitengela = includesAny(text, ["kitengela", "lush", "lush 4"]);
  const isBahati = includesAny(text, ["bahati", "bahati greens"]);
  const isKonza = includesAny(text, ["konza", "konza ridge"]);

  if (asksPrice && isTumaini) {
  return "Tumaini Estate offers 50×100 plots from KSh 949,000. It is a premium gated investment in Nakuru, about 10 minutes from Nakuru CBD. Payment plans may vary, so tap “Continue on WhatsApp” to confirm current availability and booking details.";
}

  if (asksPrice && isMalindi) {
    return "Hyssop Acres Malindi starts from KSh 400,000 per acre. It is along Salagate Bypass, near Kakoneni Shopping Centre, and about 400m from tarmac.";
  }

  if (asksPrice && isKonza) {
    return "konza Ridge starts from KSh 449,000 per 50 x 100 plot. It is located in Malili, close to Konza Techno City approximately 2.5 to 3 km off Mombasa Road along Sala Gate Bypass, near Kakoneni Shopping Centre, and about 400m from tarmac.";
  }

  if (asksPrice && isKitengela) {
    return "Lush 4 in Kitengela starts from about KSh 899,000 for 1/8 acre plots.";
  }

  if (asksPrice && isBahati) {
    return "Bahati Greens in Nakuru starts from about KSh 399,000 for 1/8 acre plots.";
  }

  if (asksPrice) {
    return "Prices vary by project. Guide prices include Malindi from KSh 400,000 per acre, Konza Ridge from 449,000 per 50 x 100, Bahati Greens from about KSh 399,000 for a 50 x 100 plot, Kitengela Lush 4 from about KSh 899,000 for a 50 x 100 plot, and Tumaini at 949,000 per 50 x 100 plot.";
  }

  if (asksTitleTime) {
    return "Title deed timelines depend on the project, payment status, documentation, and processing stage. Usually, title processing and issuance takes as little as 14 days after the completion of payment. Hyssop supports clients through verification, documentation, and title processing. For an exact timeline, please continue on WhatsApp.";
  }

  if (
    includesAny(text, [
      "about hyssop",
      "tell me about hyssop",
      "who is hyssop",
      "what is hyssop",
      "what do you do",
      "company",
    ])
  ) {
    return "Hyssop Properties is a Kenyan real estate company focused on secure land investments, transparency, verified ownership, and title deed delivery. The company helps clients identify land opportunities, complete documentation, and move confidently from inquiry to ownership.";
  }

  if (
    includesAny(text, [
      "diaspora",
      "abroad",
      "outside kenya",
      "overseas",
      "remote",
      "kenyans abroad",
      "invest from abroad",
    ])
  ) {
    return "Hyssop supports diaspora clients who want to invest in Kenyan land while living abroad. The team can guide clients remotely on available projects, pricing, documentation, payment steps, ownership verification, and title deed processing. Please contact our team for more information and personalized options";
  }

  if (isTumaini) {
    return "Tumaini Estate is a premium gated land investment in Nakuru, about 10 minutes from Nakuru CBD. It is near Tumaini Resort, RVIST College, and the Nakuru–Njoro corridor. Currently, 50 x 100 plots go for Ksh. 949,000. Kindly contact us on WhatsApp for more information.";
  }

  if (isMalindi) {
    return "Hyssop Acres Malindi offers 1-acre plots from KSh 400,000. It is suitable for farming, land banking, future development, and coastal investment. Kindly contact us on WhatsApp for more information.";
  }

  if (isKonza) {
    return "Konza Ridge offers 1/8 plots from KSh 449,000. It is attractive for future residential development and designed for buyers who want to secure land before the wider value curve fully forms. Kindly contact us on WhatsApp for more information.";
  }

  if (isKitengela) {
    return "Lush 4 in Kitengela offers 1/8 acre plots from about KSh 899,000 near the Namanga Road corridor. Kindly contact us on WhatsApp for more information.";
  }

  if (isBahati) {
    return "Bahati Greens in Nakuru offers 1/8 acre plots from about KSh 399,000, suitable for lifestyle ownership, agribusiness, and long-term investment. Kindly contact us on WhatsApp for more information.";
  }

  if (
    includesAny(text, ["properties", "projects", "available", "land", "plots"])
  ) {
    return "Hyssop’s featured projects include Tumaini Estate in Nakuru, Hyssop Acres Malindi, Konza in Malili, Lush 4 in Kitengela, and Bahati Greens in Nakuru.";
  }

  if (
    includesAny(text, [
      "title",
      "deed",
      "ownership",
      "documents",
      "documentation",
    ])
  ) {
    return "Hyssop emphasizes secure ownership, clear documentation, and title deed delivery. The team supports clients from inquiry to verification, payment, documentation, and title processing. Kindly call us or contact us on WhatsApp for more information.";
  }

  if (
    includesAny(text, [
      "cooperative",
      "co-operative",
      "investment co-operative",
      "loan",
      "savings",
      "financing",
    ])
  ) {
    return "Hyssop Investment Co-operative helps clients save towards land ownership and may support quick, flexible loans using title deeds.";
  }

  if (
    includesAny(text, [
      "office",
      "offices",
      "location",
      "address",
      "branches",
      "where",
    ])
  ) {
    return "Hyssop has offices in Nairobi, Nakuru, Kisii, and Malindi. Nairobi HQ is at Hyssop Center, Ridgeways Springs, Kiambu Road.";
  }

  if (includesAny(text, ["contact", "call", "phone", "whatsapp", "speak"])) {
    return "You can reach Hyssop on WhatsApp or call +254 707 666 000. Tap “Continue on WhatsApp” below.";
  }

  return "I can help with Hyssop, available projects, prices, title deeds, diaspora investment, offices, contacts, testimonials, awards, and the Investment Co-operative.";
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi 👋 Ask me about Hyssop, projects, prices, title deeds, diaspora investment, offices, or contacts.",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(customInput?: string) {
    const messageText = customInput || input;
    if (!messageText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: messageText },
      { sender: "bot", text: getBotResponse(messageText) },
    ]);

    setInput("");
  }

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 99999,
      }}
    >
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-[#0b1f52] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(0,0,0,0.22)]"
        >
          Chat with us
        </button>
      )}

      {open && (
        <div
          style={{
            width: "360px",
            height: "540px",
            maxWidth: "calc(100vw - 32px)",
            maxHeight: "calc(100vh - 48px)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "22px",
            background: "#ffffff",
            border: "1px solid #e7ecf2",
            boxShadow: "0 20px 45px rgba(11,31,82,0.18)",
          }}
        >
          {/* HEADER */}
          <div className="flex shrink-0 items-center justify-between bg-[#0b1f52] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Hyssop Assistant</p>
              <p className="text-xs text-white/70">Quick property help</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-white/80 hover:text-white"
            >
              ×
            </button>
          </div>

          {/* MESSAGES - ONLY THIS AREA SCROLLS */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              minHeight: 0,
            }}
          >
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-5 ${
                    message.sender === "bot"
                      ? "bg-[#f3f6fa] text-[#0b1f52]"
                      : "ml-auto bg-[#0b1f52] text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* QUICK REPLIES + INPUT */}
          <div className="shrink-0 border-t border-[#e7ecf2] bg-white">
            <div className="flex flex-wrap gap-2 px-3 py-2">
              {["About Hyssop", "Projects", "Prices", "Diaspora"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => sendMessage(item)}
                    className="rounded-full bg-[#eef3f8] px-3 py-1 text-xs text-[#0b1f52]"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="border-t border-[#e7ecf2] p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                  placeholder="Type a message..."
                  className="min-w-0 flex-1 rounded-full border border-[#dfe6ee] px-3 py-2 text-sm outline-none"
                />

                <button
                  onClick={() => sendMessage()}
                  className="rounded-full bg-[#8cc63f] px-4 py-2 text-sm font-semibold text-[#0b1f52]"
                >
                  Send
                </button>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-[#25D366] px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Continue on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}