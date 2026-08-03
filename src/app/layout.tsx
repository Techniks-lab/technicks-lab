import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const baseUrl = "https://technickslab.com";

export const metadata: Metadata = {
  title: {
    default: "TechnicksLab | IT & Engineering Solutions",
    template: "%s | TechnicksLab",
  },
  description:
    "TechnicksLab delivers cutting-edge IT infrastructure, software engineering, and technology consulting for modern businesses. Explore our innovative products: SentryTriguard, PowerGuard, SynEnergy, and ALTAR.",
  keywords: [
    "IT infrastructure",
    "software engineering",
    "technology consulting",
    "environmental monitoring",
    "power protection",
    "solar energy",
    "autonomous surveying",
    "SentryTriguard",
    "PowerGuard",
    "SynEnergy",
    "ALTAR",
  ],
  authors: [{ name: "TechnicksLab" }],
  creator: "TechnicksLab",
  publisher: "TechnicksLab",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "TechnicksLab",
    title: "TechnicksLab | IT & Engineering Solutions",
    description:
      "TechnicksLab delivers cutting-edge IT infrastructure, software engineering, and technology consulting for modern businesses.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "TechnicksLab - IT & Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechnicksLab | IT & Engineering Solutions",
    description:
      "TechnicksLab delivers cutting-edge IT infrastructure, software engineering, and technology consulting for modern businesses.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  ); 
}
