import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { DownloadButtons } from "../components/DownloadButtons";

export const metadata: Metadata = {
  title: "Celibacy Benefits Timeline: Day-by-Day Guide | Celibacy Tracker",
  description:
    "Discover what happens to your body and mind at every stage of celibacy. A complete day-by-day benefits timeline from day 1 through day 365 and beyond.",
  keywords:
    "celibacy benefits timeline, nofap benefits day by day, semen retention timeline, nofap day 7, nofap day 30, nofap day 90, celibacy benefits",
  openGraph: {
    title: "Celibacy Benefits Timeline: Day-by-Day Guide",
    description:
      "What happens at every stage of celibacy — from day 1 through day 365.",
    url: "https://celibacytracker.com/benefits",
    siteName: "Celibacy Tracker",
    type: "website",
  },
  alternates: {
    canonical: "/benefits",
  },
};

const milestones = [
  {
    days: "Days 1–3",
    phase: "Initiation",
    color: "bg-red-500",
    title: "The First 72 Hours",
    description:
      "Your body begins adjusting. The brain notices the absence of its accustomed dopamine flood and responds with cravings.",
    benefits: [
      "Awareness of how dependent you were on the habit",
      "First experience of consciously resisting urges",
      "Beginning of willpower training",
    ],
    challenges: "Strong urges, restlessness, difficulty sleeping, irritability",
  },
  {
    days: "Days 4–7",
    phase: "Energy Surge",
    color: "bg-orange-500",
    title: "The Testosterone Window",
    description:
      "Testosterone levels begin rising, peaking around day 7 at approximately 145% of baseline. Energy increases noticeably.",
    benefits: [
      "Noticeable increase in physical energy",
      "Improved motivation and drive",
      "Better workout performance",
      "Testosterone peaks — heightened confidence and assertiveness",
    ],
    challenges: "Urges may intensify before day 7, mood swings possible",
  },
  {
    days: "Days 7–14",
    phase: "Momentum",
    color: "bg-yellow-500",
    title: "Building Confidence",
    description:
      "The testosterone peak stabilizes and psychological confidence builds. You start noticing genuine changes in how you feel and interact with others.",
    benefits: [
      "Sustained energy levels throughout the day",
      "Improved eye contact and social presence",
      "Better sleep quality begins",
      "Reduced brain fog — thinking becomes clearer",
      "Sense of accomplishment from 2-week milestone",
    ],
    challenges:
      "Flatline may begin for some — temporary low energy and libido",
  },
  {
    days: "Days 14–30",
    phase: "Clarity",
    color: "bg-green-500",
    title: "The Mental Breakthrough",
    description:
      "This is where many people experience the most dramatic shift. Mental fog lifts significantly and emotional processing accelerates.",
    benefits: [
      "Laser-sharp focus and concentration",
      "Emotional stability improves dramatically",
      "Creative thinking and problem-solving sharpen",
      "Reduced anxiety and social confidence grows",
      "Deeper appreciation for simple pleasures",
      "Skin clarity and physical appearance improve",
    ],
    challenges:
      "Emotional processing — suppressed feelings may surface. Flatline period possible.",
  },
  {
    days: "Days 30–60",
    phase: "Transformation",
    color: "bg-teal-500",
    title: "Deep Rewiring",
    description:
      "Significant dopamine receptor recovery is underway. Your brain is physically restructuring neural pathways, making natural rewards feel satisfying again.",
    benefits: [
      "Genuine enjoyment of natural rewards (food, music, nature)",
      "Discipline transfers to other areas — diet, exercise, work",
      "Deeper, more meaningful relationships",
      "Sustained motivation without external stimulation",
      "Voice may deepen slightly due to hormonal optimization",
      "Physical vitality — clearer eyes, better posture, more energy",
    ],
    challenges:
      "Complacency risk — feeling good can lead to lowered guard",
  },
  {
    days: "Days 60–90",
    phase: "Reboot",
    color: "bg-blue-500",
    title: "The Standard Reboot",
    description:
      "The 90-day mark is considered a full neurological reboot. Dopamine receptors approach healthy baseline levels. Habitual neural pathways have significantly weakened.",
    benefits: [
      "Porn-induced erectile dysfunction (PIED) recovery for many men",
      "Complete emotional regulation — reduced reactivity",
      "Strong sense of purpose and direction",
      "Natural charisma and magnetic confidence",
      "Excellent sleep quality as the new normal",
      "Robust self-discipline across all life areas",
    ],
    challenges:
      "Identity shift can be disorienting — you're becoming a different person",
  },
  {
    days: "Days 90–180",
    phase: "Mastery",
    color: "bg-indigo-500",
    title: "Beyond the Reboot",
    description:
      "Most content stops at 90 days. But the transformation continues and deepens. New habits solidify into identity. The practice becomes effortless.",
    benefits: [
      "Celibacy becomes part of your identity, not a struggle",
      "Profound self-awareness and emotional intelligence",
      "Career and creative output reach new levels",
      "Relationships are deeper and more authentic",
      "Physical fitness improvements compound",
      "Spiritual insights deepen for those who practice",
    ],
    challenges:
      "Rare intense urges can catch you off guard — stay vigilant",
  },
  {
    days: "Days 180–365",
    phase: "New Baseline",
    color: "bg-purple-600",
    title: "The One-Year Transformation",
    description:
      "A full year of celibacy creates a fundamentally new baseline. The benefits don't keep escalating — they become your permanent normal. And that normal is extraordinary.",
    benefits: [
      "Unshakeable self-discipline as your default state",
      "Deep inner peace and contentment",
      "Complete freedom from compulsive patterns",
      "Sustained high energy without supplements or stimulants",
      "The compound effect of 365 days of redirected energy",
      "A documented transformation that proves what you're capable of",
    ],
    challenges: "Maintaining purpose — you need to keep channeling the energy",
  },
];

export default function BenefitsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Celibacy Benefits Timeline: Day-by-Day Guide",
    description:
      "A complete day-by-day benefits timeline for celibacy, NoFap, and semen retention from day 1 through day 365.",
    author: {
      "@type": "Organization",
      name: "Celibacy Tracker",
      url: "https://celibacytracker.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Celibacy Tracker",
      url: "https://celibacytracker.com",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Script
        id="benefits-json-ld"
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Celibacy Benefits Timeline
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What happens to your body and mind at every stage — from day 1
              through a full year of celibacy, NoFap, or semen retention.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-green-500 via-blue-500 to-purple-600 hidden sm:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative sm:pl-20">
                  <div
                    className={`hidden sm:flex absolute left-4 md:left-6 w-4 h-4 rounded-full ${milestone.color} border-4 border-white shadow-md`}
                  />
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`${milestone.color} text-white text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {milestone.days}
                      </span>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {milestone.phase} Phase
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h2>
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">
                        Benefits
                      </h3>
                      <ul className="space-y-1.5">
                        {milestone.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 text-sm"
                          >
                            <span className="text-green-500 mt-0.5">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-1">
                        Common Challenges
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {milestone.challenges}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-purple-50 rounded-2xl p-8 md:p-12 text-center border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Track Your Benefits in Real Time
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              The Celibacy Tracker app reveals which benefits unlock at each
              stage of your journey. Watch them appear as your streak grows.
            </p>
            <DownloadButtons className="justify-center" />
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
