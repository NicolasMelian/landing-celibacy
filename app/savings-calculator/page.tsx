import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SavingsCalculator } from "../components/SavingsCalculator";
import { DownloadButtons } from "../components/DownloadButtons";

export const metadata: Metadata = {
  title:
    "NoFap Money & Time Saved Calculator: See What Porn Actually Costs You",
  description:
    "Find out how much money and time porn is costing you per year and over a decade. Free calculator showing the real opportunity cost of compulsive habits.",
  keywords:
    "nofap money saved calculator, how much money does porn cost, porn time wasted calculator, nofap opportunity cost, semen retention money saved, porn cost per year",
  openGraph: {
    title: "How Much Is Porn Actually Costing You?",
    description:
      "A blunt calculator that turns minutes and sessions into money and years of your life.",
    url: "https://celibacytracker.com/savings-calculator",
    siteName: "Celibacy Tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Is Porn Actually Costing You?",
    description:
      "A blunt calculator that turns minutes and sessions into money and years of your life.",
  },
  alternates: {
    canonical: "/savings-calculator",
  },
};

export default function SavingsCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "NoFap Money & Time Saved Calculator",
    description:
      "Estimate the money and life hours lost to compulsive porn or masturbation habits, and what quitting could give back.",
    applicationCategory: "FinanceApplication",
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
        id="savings-calculator-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            Celibacy Tracker
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

      <main className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What is porn actually costing you?
            </h1>
            <p className="text-lg text-gray-600">
              Put your numbers in. See the years and dollars on the other side.
              No judgment, just math.
            </p>
          </div>

          <SavingsCalculator />

          <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Now turn those numbers around
            </h2>
            <p className="text-gray-600 mb-6">
              Celibacy Tracker shows you the streak, the money you are getting
              back, and what your brain is doing on the way.
            </p>
            <DownloadButtons className="justify-center" />
          </div>

          <article className="mt-16 prose prose-lg max-w-none space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              The hidden cost most people never count
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The dollar number stings because it is real. An hour of your time
              has a market price. If you have a job, a side hustle, or any
              skill someone pays for, every hour you spend on a compulsive habit
              is an hour you could have sold, invested, or compounded into
              something you actually want.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The time number stings more. Hours do not come back. A guy doing
              twenty minutes a session, five times a week, loses about three
              and a half days of life every single year. Over a decade that is
              more than a month of waking time vaporized.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              Why the calculator is conservative
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The number above only counts the session itself. The real cost is
              bigger. Most people underestimate the recovery tax: the foggy
              hour after a session where focus is gone, the late nights
              chasing the wrong dopamine instead of sleeping, the workouts
              skipped, the conversations dodged because energy is low. Honest
              users who track this for a month usually find the true cost is
              double or triple what the calculator shows.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              What the gain side actually looks like
            </h2>
            <p className="text-gray-700 leading-relaxed">
              People who quit for ninety days usually report the same three
              things. More energy in the morning, less afternoon crash, and the
              ability to sit and focus on one task for a couple of hours
              without reaching for the phone. None of that shows up on the
              calculator, but it is where the compound interest actually
              happens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For a closer look at what happens biologically during that
              recovery window, see our{" "}
              <Link
                href="/blog/nofap-benefits-timeline-day-by-day"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                day by day benefits timeline
              </Link>{" "}
              or check your current phase in the{" "}
              <Link
                href="/calculator"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                streak calculator
              </Link>
              .
            </p>
          </article>
        </div>
      </main>

      <footer className="bg-gray-50 py-8 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              Celibacy Tracker
            </span>
            <span className="text-gray-600">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <a
              href="mailto:info@nicomelian.com"
              className="hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
