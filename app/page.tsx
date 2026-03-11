import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { blogPosts } from "./blog/posts";

export default function Home() {
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
    "downloadUrl": "https://apps.apple.com/app/celibacy-tracker/id6739954035?l=en-GB"
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            href="/blog"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm md:text-base"
          >
            Blog
          </Link>
          <a
            href="https://apps.apple.com/app/celibacy-tracker/id6739954035?l=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            Get the App
          </a>
        </div>
      </nav>

      <main className="relative">
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

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://apps.apple.com/app/celibacy-tracker/id6739954035?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform"
                >
                  <img
                    src="/applebutton.png"
                    alt="Download on the App Store"
                    className="h-16 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nicomelian.celibacytracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform"
                >
                  <img
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    className="h-16 w-auto"
                  />
                </a>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  <img src="/avatar-1.jpg" alt="Happy couple user" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="/avatar-2.jpg" alt="Happy couple user" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="/avatar-3.jpg" alt="Happy couple user" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="/avatar-4.jpg" alt="Happy couple user" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
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
                <img
                  src="/celibacy-tracker-mockup.png"
                  alt="Celibacy Tracker app showing streak counter, benefits, education section and journal on iPhone screens"
                  className="relative z-10 w-full h-auto"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
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
                  <img
                    src={post.heroImage}
                    alt={post.heroAlt}
                    className="w-full h-40 object-cover"
                    loading="lazy"
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

        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Start Your Celibacy Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Track your progress, unlock benefits, and transform your life with Celibacy Tracker
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/app/celibacy-tracker/id6739954035?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <img
                  src="/applebutton.png"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nicomelian.celibacytracker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <img
                  src="/playstore.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              <span className="text-purple-600">🔥</span> Celibacy Tracker
            </span>
            <span className="text-gray-600">© 2025</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>
            <a href="mailto:info@nicomelian.com" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
