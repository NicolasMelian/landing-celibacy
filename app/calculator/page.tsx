import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { StreakCalculator } from "../components/StreakCalculator";
import { DownloadButtons } from "../components/DownloadButtons";

export const metadata: Metadata = {
  title: "Celibacy Streak Calculator — Check Your Progress | Celibacy Tracker",
  description:
    "Calculate your celibacy or NoFap streak instantly. Enter your start date and see how many days you've been on your journey, your current phase, and benefits unlocked.",
  keywords:
    "nofap day counter, celibacy streak calculator, nofap calculator, semen retention day count, how many days nofap, streak counter",
  openGraph: {
    title: "Celibacy Streak Calculator",
    description:
      "Enter your start date and instantly see your streak, phase, and benefits unlocked.",
    url: "https://celibacytracker.com/calculator",
    siteName: "Celibacy Tracker",
    type: "website",
  },
  alternates: {
    canonical: "/calculator",
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Celibacy Streak Calculator",
    description:
      "Calculate your celibacy or NoFap streak. See your current phase and benefits unlocked.",
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Celibacy Tracker",
      url: "https://celibacytracker.com",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Script
        id="calculator-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            <span className="text-purple-600">🔥</span> Celibacy Tracker
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm md:text-base"
          >
            Blog
          </Link>
          <a
            href="https://apps.apple.com/app/apple-store/id6739954035?pt=127407326&ct=web&mt=8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            Get the App
          </a>
        </div>
      </nav>

      <main className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Celibacy Streak Calculator
            </h1>
            <p className="text-lg text-gray-600">
              Enter your start date to see your streak, current phase, and
              what benefits you&apos;ve unlocked.
            </p>
          </div>

          <StreakCalculator />

          <div className="mt-16 bg-purple-50 rounded-2xl p-8 text-center border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Track Automatically with the App
            </h2>
            <p className="text-gray-600 mb-6">
              Stop counting manually. The Celibacy Tracker app tracks your
              streak automatically, reveals daily benefits, and includes a
              private journal — all on your phone.
            </p>
            <DownloadButtons className="justify-center" />
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How the Streak Calculator Works
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This calculator counts the number of days between your chosen
                start date and today, then maps your streak to one of 8
                scientifically-informed phases of celibacy, NoFap, or semen
                retention.
              </p>
              <p>
                Each phase is based on community reports and clinical
                literature on abstinence, dopamine receptor recovery, and
                hormonal changes. Your individual experience may vary, but the
                patterns are remarkably consistent across thousands of
                practitioners.
              </p>
              <p>
                For a detailed breakdown of what happens at each stage, see
                our{" "}
                <Link
                  href="/benefits"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  complete benefits timeline
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 py-8 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              <span className="text-purple-600">🔥</span> Celibacy Tracker
            </span>
            <span className="text-gray-600">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
            <a href="mailto:info@nicomelian.com" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
