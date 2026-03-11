import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Celibacy Blog - Tips, Benefits & Guides | Celibacy Tracker",
  description:
    "Read expert articles about celibacy benefits, semen retention, NoFap, streak tracking, and how to start your celibacy journey. Free guides and tips.",
  keywords:
    "celibacy blog, celibacy benefits, semen retention, nofap guide, celibacy tips, streak tracker, self-improvement",
  openGraph: {
    title: "Celibacy Blog - Tips, Benefits & Guides",
    description:
      "Expert articles about celibacy, semen retention, and self-improvement.",
    url: "https://celibacytracker.com/blog",
    siteName: "Celibacy Tracker",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            <span className="text-purple-600">🔥</span> Celibacy Tracker
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-purple-600 font-medium text-sm md:text-base"
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

      <main className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Celibacy Blog
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Guides, tips, and insights for your celibacy and self-improvement
            journey.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <img
                    src={post.heroImage}
                    alt={post.heroAlt}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
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
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <a href="mailto:info@nicomelian.com" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
