import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Celibacy & NoFap Glossary: Key Terms Defined | Celibacy Tracker",
  description:
    "A comprehensive glossary of celibacy, NoFap, and semen retention terms. Learn what flatline, PIED, chaser effect, brahmacharya, transmutation, and more mean.",
  keywords:
    "nofap glossary, celibacy terms, flatline meaning, PIED meaning, chaser effect nofap, brahmacharya meaning, semen retention glossary, nofap terminology",
  openGraph: {
    title: "Celibacy & NoFap Glossary: Key Terms Defined",
    description:
      "Every celibacy, NoFap, and semen retention term explained clearly.",
    url: "https://celibacytracker.com/glossary",
    siteName: "Celibacy Tracker",
    type: "website",
  },
  alternates: {
    canonical: "/glossary",
  },
};

const terms = [
  {
    term: "Abstinence",
    definition:
      "The practice of refraining from sexual activity. Can be voluntary (chosen for personal, spiritual, or health reasons) or involuntary. Unlike celibacy, abstinence sometimes refers only to refraining from intercourse specifically.",
  },
  {
    term: "Brahmacharya",
    definition:
      'An ancient Hindu/yogic concept meaning "conduct consistent with Brahman" — the divine. In practice, it refers to celibacy and the conservation of sexual energy for spiritual growth. One of the five Yamas (ethical disciplines) in Patanjali\'s Yoga Sutras. Brahmacharya is practiced across Hinduism, Buddhism, and Jainism as a path to self-mastery and spiritual power.',
    link: { href: "/blog/benefits-of-celibacy-complete-guide", text: "Read about spiritual benefits of celibacy" },
  },
  {
    term: "Celibacy",
    definition:
      "The voluntary decision to abstain from all sexual activity — including with partners — for a defined period or permanently. Broader than NoFap, which focuses primarily on pornography and masturbation. Celibacy has roots in virtually every major spiritual tradition spanning thousands of years.",
    link: { href: "/blog/celibacy-vs-nofap-differences", text: "Celibacy vs NoFap: key differences" },
  },
  {
    term: "Chaser Effect",
    definition:
      "The intense craving for sexual stimulation that occurs in the 24–72 hours after ejaculation or relapse. Caused by a neurochemical cascade: dopamine crashes while prolactin surges, creating strong urges to repeat the behavior. Understanding the chaser effect is critical for preventing a single relapse from becoming a multi-day binge.",
    link: { href: "/blog/nofap-relapse-recovery-guide", text: "How to manage relapse and the chaser effect" },
  },
  {
    term: "Day Counter / Streak Counter",
    definition:
      "A tool that tracks how many consecutive days you've maintained celibacy, NoFap, or semen retention. Research shows visible progress tracking increases habit adherence by up to 40%. The Celibacy Tracker app provides an automatic day counter along with daily benefits and journaling.",
    link: { href: "/calculator", text: "Try the streak calculator" },
  },
  {
    term: "Dopamine",
    definition:
      "A neurotransmitter primarily associated with motivation, anticipation, and reward-seeking behavior. Contrary to popular belief, dopamine is not a 'pleasure chemical' — it drives you to pursue rewards, not just enjoy them. Pornography and compulsive masturbation overstimulate dopamine receptors, leading to desensitization and the need for increasingly intense stimulation.",
    link: { href: "/blog/dopamine-detox-nofap-brain-reset", text: "How NoFap resets your dopamine system" },
  },
  {
    term: "Dopamine Detox",
    definition:
      "A cognitive behavioral intervention involving the temporary reduction of overstimulating activities (social media, video games, pornography, junk food) to allow dopamine receptors to resensitize. Coined by psychiatrist Dr. Cameron Sepah. NoFap and celibacy are considered among the most potent forms of dopamine detox.",
    link: { href: "/blog/dopamine-detox-nofap-brain-reset", text: "Complete dopamine detox guide" },
  },
  {
    term: "Edging",
    definition:
      "The practice of engaging in sexual stimulation up to the point of orgasm but stopping before ejaculation. In the NoFap community, edging is generally considered a relapse or near-relapse because it maintains the neurochemical stimulation patterns that NoFap aims to break, even if ejaculation doesn't occur.",
  },
  {
    term: "Flatline",
    definition:
      "A period of unusually low energy, motivation, and libido experienced during NoFap or semen retention, typically occurring between days 7–45. Caused by dopamine receptor recalibration as the brain adjusts to lower stimulation levels. Though uncomfortable, the flatline is a sign of neurological healing and is always temporary. Typical duration: 2–6 weeks.",
    link: { href: "/blog/nofap-flatline-complete-guide", text: "Complete flatline survival guide" },
  },
  {
    term: "Hard Mode",
    definition:
      "A NoFap approach that involves complete abstinence from all sexual activity — including with partners. Equivalent to full celibacy. Contrasted with 'normal mode' where partnered sex is permitted. Some practitioners believe hard mode produces faster and more dramatic benefits.",
  },
  {
    term: "Monk Mode",
    definition:
      "An intensive self-improvement period combining celibacy/NoFap with elimination of other distractions: social media, entertainment, alcohol, junk food. The goal is total focus on personal development — career, fitness, education, and spiritual growth. Typically practiced for 30–90 days.",
  },
  {
    term: "Neuroplasticity",
    definition:
      "The brain's ability to reorganize itself by forming new neural connections and weakening unused ones. This is the mechanism that makes NoFap and celibacy work: old neural pathways associated with compulsive behavior weaken through disuse, while new pathways associated with healthy habits strengthen through repetition. Significant neural rewiring typically requires approximately 90 days.",
  },
  {
    term: "NoFap",
    definition:
      "A movement and practice focused on abstaining from pornography and masturbation. Started as a Reddit community in 2011 and grew into a global movement. Rooted in neuroscience and addiction recovery rather than spiritual tradition. Some NoFap practitioners still engage in partnered sexual activity, distinguishing it from full celibacy.",
    link: { href: "/blog/celibacy-vs-nofap-differences", text: "Celibacy vs NoFap explained" },
  },
  {
    term: "Nocturnal Emission (Wet Dream)",
    definition:
      "An involuntary ejaculation that occurs during sleep, common during NoFap and semen retention. A normal biological function — the body's way of managing unused reproductive resources. The community consensus is that wet dreams do NOT count as a relapse because they are passive and uncontrollable. Frequency typically decreases over time.",
  },
  {
    term: "Ojas",
    definition:
      "In Ayurvedic and yogic philosophy, ojas is the subtle vital energy produced from the refinement of all bodily tissues, with reproductive fluid considered its most concentrated form. Conservation of sexual energy (brahmacharya) is believed to increase ojas, leading to radiance, immunity, vitality, and spiritual power.",
  },
  {
    term: "PIED (Porn-Induced Erectile Dysfunction)",
    definition:
      "Erectile dysfunction caused by excessive pornography use rather than physiological factors. Occurs when the brain becomes conditioned to respond only to the supranormal stimulation of pornography and can no longer achieve or maintain arousal with real partners. Recovery typically requires 60–90 days of complete abstinence from pornography, though severe cases may take longer.",
  },
  {
    term: "Prolactin",
    definition:
      "A hormone released in large quantities after ejaculation. Causes the 'refractory period' — feelings of satisfaction, fatigue, and reduced motivation that can last 24–72 hours. During celibacy and semen retention, baseline prolactin levels decrease, contributing to sustained drive and energy.",
  },
  {
    term: "Reboot",
    definition:
      "The process of resetting the brain's reward system through sustained abstinence from pornography and/or masturbation. The standard reboot period is 90 days, based on the approximate time needed for significant dopamine receptor recovery and neural pathway restructuring. After a successful reboot, sensitivity to natural rewards is restored.",
    link: { href: "/blog/nofap-benefits-timeline-day-by-day", text: "Complete NoFap timeline" },
  },
  {
    term: "Relapse",
    definition:
      "A return to the behavior you're abstaining from (pornography use, masturbation, or sexual activity depending on your practice). A single relapse does not erase neurological progress — the neural pathways you've built are still present. The greater danger is the 'binge' that often follows due to the Abstinence Violation Effect.",
    link: { href: "/blog/nofap-relapse-recovery-guide", text: "Relapse recovery guide" },
  },
  {
    term: "Semen Retention",
    definition:
      "The practice of consciously avoiding ejaculation, either through complete sexual abstinence or through non-ejaculatory practices. Central to Taoist, Hindu (brahmacharya), and other spiritual traditions for thousands of years. Practitioners report benefits including increased energy, mental clarity, confidence, and spiritual growth.",
    link: { href: "/blog/semen-retention-benefits-science", text: "Semen retention: science and experience" },
  },
  {
    term: "Sexual Energy Transmutation",
    definition:
      "The practice of consciously redirecting sexual drive into creative, professional, physical, or spiritual pursuits. Popularized by Napoleon Hill in 'Think and Grow Rich' (1937). The concept exists across cultures: Taoist jing conservation, yogic sublimation, and modern biohacking. Practical techniques include intense exercise, creative work, meditation, and deep professional focus.",
    link: { href: "/blog/sexual-energy-transmutation-guide", text: "How to transmute sexual energy" },
  },
  {
    term: "Streak",
    definition:
      "The number of consecutive days you've maintained your commitment to celibacy, NoFap, or semen retention. Streaks create psychological investment through the sunk cost effect — the longer your streak, the more motivated you are to protect it. Tracking streaks with an app increases adherence significantly.",
    link: { href: "/calculator", text: "Calculate your streak" },
  },
  {
    term: "Testosterone",
    definition:
      "The primary male sex hormone. Research shows testosterone levels peak around day 7 of abstinence at approximately 145% of baseline, then moderate. While the permanent testosterone increase from abstinence is debated, the initial spike contributes to increased confidence, motivation, and physical performance in the early stages of NoFap.",
  },
  {
    term: "Urge Surfing",
    definition:
      "A mindfulness technique for managing sexual urges without acting on them. Rather than fighting the urge, you observe it like a wave — it rises, peaks, and falls, typically within 15–20 minutes. With practice, urges become weaker and shorter as the brain learns that they don't require action.",
    link: { href: "/blog/how-to-stop-masturbating-strategies", text: "12 strategies including urge surfing" },
  },
];

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Celibacy & NoFap Glossary",
    description:
      "Comprehensive glossary of celibacy, NoFap, and semen retention terminology.",
    url: "https://celibacytracker.com/glossary",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  const letters = [...new Set(terms.map((t) => t.term[0].toUpperCase()))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Script
        id="glossary-json-ld"
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

      <main className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Celibacy & NoFap Glossary
            </h1>
            <p className="text-lg text-gray-600">
              Every key term in the celibacy, NoFap, and semen retention
              space — clearly defined.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          <div className="space-y-6">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <div className="text-2xl font-bold text-purple-600 mb-4 pt-4">
                  {letter}
                </div>
                {terms
                  .filter((t) => t.term[0].toUpperCase() === letter)
                  .map((t) => (
                    <div
                      key={t.term}
                      id={t.term.toLowerCase().replace(/[\s()\/]/g, "-")}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4"
                    >
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {t.term}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {t.definition}
                      </p>
                      {t.link && (
                        <Link
                          href={t.link.href}
                          className="inline-block mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium"
                        >
                          {t.link.text} →
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
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
