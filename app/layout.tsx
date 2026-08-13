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
  title: "Jamestuns Trading Venture | Financial, Business & Travel Solutions",

  description:
    "Jamestuns Trading Venture provides financial services, digital payments, business solutions, travel and international support, UK & Europe sourcing, logistics, documentation, digital solutions and finance support in Nigeria.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://jamestuns.com",
  },

  openGraph: {
    title:
      "Jamestuns Trading Venture | Financial, Business & Travel Solutions",

    description:
      "Financial, business, travel, international sourcing, logistics and digital solutions for individuals and businesses.",

    url: "https://jamestuns.com",

    siteName: "Jamestuns Trading Venture",

    images: [
      {
        url: "https://jamestuns.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jamestuns Trading Venture",
      },
    ],

    locale: "en_NG",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Jamestuns Trading Venture | Financial, Business & Travel Solutions",

    description:
      "Financial, business, travel, international sourcing, logistics and digital solutions for individuals and businesses.",

    images: ["https://jamestuns.com/og-image.png"],
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}