import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "../posts";
import { DownloadButtons } from "../../components/DownloadButtons";

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
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://celibacytracker.com/blog/${post.slug}`,
      siteName: "Celibacy Tracker",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
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
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-purple-600 underline hover:text-purple-700">$1</a>'
      )
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
            <Image
              src={match[2]}
              alt={match[1]}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              className="w-full rounded-2xl shadow-md"
            />
          </figure>
        );
      }
    } else if (/^\{cta\}.*\{\/cta\}$/.test(trimmed)) {
      flushList();
      const match = trimmed.match(/^\{cta\}(.*)\{\/cta\}$/);
      if (match) {
        elements.push(
          <aside
            key={elements.length}
            className="my-8 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🔥</span>
              <p
                className="text-gray-800 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: inlineFormat(match[1]) }}
              />
            </div>
            <DownloadButtons />
          </aside>
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

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        image: post.heroImage.startsWith("http")
          ? post.heroImage
          : `https://celibacytracker.com${post.heroImage}`,
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
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://celibacytracker.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://celibacytracker.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
          },
        ],
      },
    ],
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
        <article className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-900">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </li>
            </ol>
          </nav>

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

          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            width={800}
            height={400}
            className="w-full rounded-2xl shadow-md mb-10"
            priority
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
            <DownloadButtons className="justify-center" />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <Image
                    src={related.heroImage}
                    alt={related.heroAlt}
                    width={400}
                    height={160}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-gray-500 mt-2 block">
                      {related.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-50 py-8 px-6 md:px-12 lg:px-20">
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
