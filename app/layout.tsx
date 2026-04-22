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
  title: {
    default: "Hyssop Properties – A Culture of Trust",
    template: "%s | Hyssop Properties",
  },
  description:
    "Secure land investments in Kenya with verified title deeds. Hyssop Properties offers transparent processes, flexible payments, and trusted ownership.",
  metadataBase: new URL("http://hyssopproperties.com"),
  openGraph: {
  title: "Hyssop Properties – Secure Land Investments in Kenya",
  description:
    "Premium land investments backed by trust, transparency, and real title delivery.",
  url: "http://hyssopproperties.com",
  siteName: "Hyssop Properties",
  images: [
    {
      url: "http://hyssopproperties.com/hyssop/hero/001.png",
      width: 1200,
      height: 630,
      alt: "Hyssop Properties",
    },
  ],
  locale: "en_KE",
  type: "website",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
