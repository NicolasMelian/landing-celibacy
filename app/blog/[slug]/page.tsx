import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "../posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Celibacy Tracker Blog`,
    description: post.description,
    keywords: `celibacy, ${post.slug.replace(/-/g, ", ")}, celibacy tracker, self-improvement`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://celibacytracker.com/blog/${post.slug}`,
      siteName: "Celibacy Tracker",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 675,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc pl-6 space-y-2 text-gray-700">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
    if (orderedItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="list-decimal pl-6 space-y-2 text-gray-700">
          {orderedItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      );
      orderedItems = [];
    }
  };

  const inlineFormat = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={elements.length} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={elements.length} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.replace("- ", ""));
    } else if (/^\d+\.\s/.test(trimmed)) {
      orderedItems.push(trimmed.replace(/^\d+\.\s/, ""));
    } else if (/^!\[.*\]\(.*\)$/.test(trimmed)) {
      flushList();
      const match = trimmed.match(/^!\[(.*)\]\((.*)\)$/);
      if (match) {
        elements.push(
          <figure key={elements.length} className="my-8">
            <img
              src={match[2]}
              alt={match[1]}
              className="w-full rounded-2xl shadow-md"
              loading="lazy"
            />
            {match[1] && (
              <figcaption className="text-center text-sm text-gray-500 mt-3">
                {match[1]}
              </figcaption>
            )}
          </figure>
        );
      }
    } else {
      flushList();
      elements.push(
        <p
          key={elements.length}
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }}
        />
      );
    }
  }

  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://celibacytracker.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <script
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
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <img
            src={post.heroImage}
            alt={post.heroAlt}
            className="w-full rounded-2xl shadow-md mb-10"
          />

          <div className="prose prose-lg max-w-none space-y-4">
            {renderMarkdown(post.content)}
          </div>

          <div className="mt-16 bg-purple-50 rounded-2xl p-8 text-center border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Download Celibacy Tracker and start monitoring your progress today.
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
        </article>
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
