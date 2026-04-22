import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyssopproperties.com"),

  title: {
    default: "Hyssop Properties – A Culture of Trust",
    template: "%s | Hyssop Properties",
  },

  description:
    "Premium land investments backed by trust, transparency, and real title delivery.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hyssop Properties",
    title: "Hyssop Properties – Secure Land Investments in Kenya",
    description:
      "Premium land investments backed by trust, transparency, and real title delivery.",
    images: [
      {
        url: "/hyssop/hero/001.png",
        width: 1200,
        height: 630,
        alt: "Hyssop Properties",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hyssop Properties – Secure Land Investments in Kenya",
    description:
      "Premium land investments backed by trust, transparency, and real title delivery.",
    images: ["/hyssop/hero/001.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}