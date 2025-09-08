import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Celibacy Tracker - Track Streaks, Benefits & Journal",
  description: "Track your celibacy journey with daily benefits, educational content, and personal journal. Monitor your streak, unlock benefits as days pass, and transform your life.",
  keywords: "celibacy tracker, nofap tracker, semen retention, streak counter, benefits tracker, personal journal, celibacy benefits, self-improvement app",
  authors: [{ name: "Celibacy Tracker" }],
  openGraph: {
    title: "Celibacy Tracker - Track Streaks, Benefits & Journal",
    description: "Track your celibacy journey with daily benefits, educational content, and personal journal. Transform your life one day at a time.",
    url: "https://celibacy-tracker.vercel.app",
    siteName: "Celibacy Tracker",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Celibacy Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celibacy Tracker",
    description: "Track your celibacy streak and unlock daily benefits. Download on App Store.",
    images: ["/twitter-image.png"],
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
  appleWebApp: {
    title: "Celibacy Tracker",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
