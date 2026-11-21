import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cajueiraDisplay = localFont({
  src: "../../public/fonts/cajueira/Cajueira-Display-SemiBold-Exfont3511.ttf",
  variable: "--font-cajueira-display",
  weight: "600",
  style: "normal",
  display: "swap",
});

const cajueiraDisplayMedium = localFont({
  src: "../../public/fonts/cajueira/Cajueira-Display-Medium-Exfont7321.ttf",
  variable: "--font-cajueira-display-medium",
  weight: "500",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIXEN — Software Engineer / Data & AI Enthusiast",
  description:
    "Personal portfolio of Nixen Jenio — Software Engineer specializing in scalable enterprise web applications, data analytics, and applied AI research. Computer Science graduate from BINUS University.",
  keywords: [
    "Nixen Jenio",
    "Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AI Research",
    "Machine Learning",
    "Graph Neural Networks",
    "Indonesia Software Engineer",
  ],
  authors: [{ name: "Nixen Jenio" }],
  creator: "Nixen Jenio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nixenjenio.com",
    title: "NIXEN — Software Engineer / Data & AI Enthusiast",
    description:
      "Software engineering, data analysis, and applied AI research by Nixen Jenio.",
    siteName: "Nixen Jenio Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIXEN — Software Engineer / Data & AI Enthusiast",
    description:
      "Software engineering, data analysis, and applied AI research by Nixen Jenio.",
  },
  icons: {
    icon: "/Profile.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} ${cajueiraDisplay.variable} ${cajueiraDisplayMedium.variable}`}>
      <body className="antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
