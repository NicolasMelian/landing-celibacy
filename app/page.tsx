import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { blogPosts } from "./blog/posts";
import { DownloadButtons } from "./components/DownloadButtons";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is celibacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Celibacy is the voluntary decision to abstain from all sexual activity for a defined period or permanently. Unlike forced abstinence, it is a conscious choice made for personal growth, spiritual development, or health reasons. Practiced for thousands of years across cultures, celibacy allows you to redirect sexual energy toward your goals, career, creativity, and self-mastery."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main benefits of celibacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most commonly reported benefits include dramatically increased energy, sharper mental focus, stronger self-discipline, emotional stability, better sleep, improved confidence, and a deeper sense of purpose. Many practitioners also experience enhanced creativity and spiritual growth. Benefits typically begin within the first week and compound over time."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see benefits from celibacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people notice increased energy within 7 days. Testosterone peaks around day 7 at approximately 145% of baseline. Mental clarity improves significantly between days 14 and 30. Deeper emotional and psychological transformation typically begins after 30 days and solidifies around the 90-day mark."
        }
      },
      {
        "@type": "Question",
        "name": "Is celibacy the same as NoFap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. NoFap focuses specifically on abstaining from pornography and masturbation, and some practitioners still have partnered sex. Celibacy is broader — it means abstaining from all sexual activity. NoFap is rooted in neuroscience and addiction recovery, while celibacy draws from ancient spiritual traditions. Many people start with NoFap and transition to celibacy."
        }
      },
      {
        "@type": "Question",
        "name": "How do I track my celibacy streak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Celibacy Tracker app is purpose-built for this. Set your start date and the app automatically counts your streak, reveals daily benefits at each milestone, provides a private journal, and offers educational content. It's free on both iOS and Android. Research shows visible progress tracking increases habit adherence by up to 40%."
        }
      },
      {
        "@type": "Question",
        "name": "Is celibacy safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Celibacy is a natural, healthy practice with no known physical risks. The body naturally manages unused reproductive resources. If you have specific health concerns, consult a healthcare professional. Celibacy has been practiced safely for thousands of years across nearly every culture and spiritual tradition."
        }
      }
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Celibacy Tracker",
    "description": "Track your celibacy journey with daily benefits, educational content, and personal journal. Monitor your progress and unlock benefits as days pass.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500"
    },
    "author": {
      "@type": "Organization",
      "name": "Celibacy Tracker",
      "url": "https://celibacytracker.com"
    },
    "downloadUrl": "https://apps.apple.com/app/apple-store/id6739954035?pt=127407326&ct=web&mt=8"
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            <span className="text-purple-600">🔥</span> Celibacy Tracker
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/benefits"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm md:text-base hidden md:inline"
          >
            Benefits
          </Link>
          <Link
            href="/calculator"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm md:text-base hidden md:inline"
          >
            Calculator
          </Link>
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

      <main className="relative">
        {/* Hero */}
        <section className="flex min-h-screen items-center px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full pt-20 lg:pt-0">
            <div className="text-left space-y-8 pt-6 md:pt-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Track your <span className="text-purple-600 italic">celibacy</span> journey,<br />
                unlock daily benefits.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Monitor your celibacy streak, discover daily benefits as you progress,
                access educational content, write in your personal journal, and track
                your transformation — all in one private, supportive app.
              </p>

              <DownloadButtons size="large" />

              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  <Image src="/avatar-1.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <Image src="/avatar-2.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <Image src="/avatar-3.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <Image src="/avatar-4.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">500+ active users</div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span>
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl lg:max-w-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 rounded-[3rem] blur-3xl opacity-50"></div>
                <Image
                  src="/celibacy-tracker-mockup.png"
                  alt="Celibacy Tracker app showing streak counter, benefits, education section and journal on iPhone screens"
                  width={800}
                  height={600}
                  className="relative z-10 w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Stay on Track
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built specifically for your celibacy, NoFap, or semen retention journey — not just another generic habit tracker.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Streak Counter</h3>
                <p className="text-gray-600 text-sm">
                  Set your start date and watch your streak grow automatically. Your progress, always visible.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Daily Benefits</h3>
                <p className="text-gray-600 text-sm">
                  Discover which benefits unlock at each milestone — day 7, 14, 30, 60, 90 and beyond.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Journal</h3>
                <p className="text-gray-600 text-sm">
                  Document urges, breakthroughs, and insights. Your private space to reflect and grow.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-purple-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600 text-sm">
                  Access curated content about celibacy, semen retention, and self-improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-gray-600">
                Guides, tips, and insights for your celibacy journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    width={600}
                    height={240}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      · {post.readTime}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                View all articles →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <details className="group bg-purple-50 rounded-2xl border border-purple-100 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  What is celibacy?
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Celibacy is the voluntary decision to abstain from all sexual activity for a defined period or permanently. Unlike forced abstinence, it is a conscious choice made for personal growth, spiritual development, or health reasons. Practiced for thousands of years across cultures, celibacy allows you to redirect sexual energy toward your goals, career, creativity, and self-mastery.
                </p>
              </details>

              <details className="group bg-purple-50 rounded-2xl border border-purple-100 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  What are the main benefits of celibacy?
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  The most commonly reported benefits include dramatically increased energy, sharper mental focus, stronger self-discipline, emotional stability, better sleep, improved confidence, and a deeper sense of purpose. Many practitioners also experience enhanced creativity and spiritual growth. Benefits typically begin within the first week and compound over time.
                </p>
              </details>

              <details className="group bg-purple-50 rounded-2xl border border-purple-100 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  How long does it take to see benefits from celibacy?
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Most people notice increased energy within 7 days. Testosterone peaks around day 7 at approximately 145% of baseline. Mental clarity improves significantly between days 14 and 30. Deeper emotional and psychological transformation typically begins after 30 days and solidifies around the 90-day mark.
                </p>
              </details>

              <details className="group bg-purple-50 rounded-2xl border border-purple-100 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  Is celibacy the same as NoFap?
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  No. NoFap focuses specifically on abstaining from pornography and masturbation, and some practitioners still have partnered sex. Celibacy is broader — it means abstaining from all sexual activity. NoFap is rooted in neuroscience and addiction recovery, while celibacy draws from ancient spiritual traditions. Many people start with NoFap and transition to celibacy.
                </p>
              </details>

              <details className="group bg-purple-50 rounded-2xl border border-purple-100 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  How do I track my celibacy streak?
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  The Celibacy Tracker app is purpose-built for this. Set your start date and the app automatically counts your streak, reveals daily benefits at each milestone, provides a private journal, and offers educational content. It&apos;s free on both iOS and Android. Research shows visible progress tracking increases habit adherence by up to 40%.
                </p>
              </details>

              <details className="group bg-purple-50 rounded-2xl border border-purple-100 p-6">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  Is celibacy safe?
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Yes. Celibacy is a natural, healthy practice with no known physical risks. The body naturally manages unused reproductive resources. If you have specific health concerns, consult a healthcare professional. Celibacy has been practiced safely for thousands of years across nearly every culture and spiritual tradition.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Start Your Celibacy Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Track your progress, unlock benefits, and transform your life with Celibacy Tracker
            </p>
            <DownloadButtons className="justify-center" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              <span className="text-purple-600">🔥</span> Celibacy Tracker
            </span>
            <span className="text-gray-600">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/benefits" className="hover:text-gray-900">Benefits</Link>
            <Link href="/calculator" className="hover:text-gray-900">Calculator</Link>
            <Link href="/glossary" className="hover:text-gray-900">Glossary</Link>
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
            <a href="mailto:info@nicomelian.com" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
