import { ImageResponse } from "next/og";
import { blogPosts } from "../posts";

export const alt = "Celibacy Tracker Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title || "Celibacy Tracker Blog";
  const readTime = post?.readTime || "";

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #6366f1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            display: "flex",
            marginBottom: 16,
          }}
        >
          🔥 Celibacy Tracker Blog
        </div>
        <div
          style={{
            fontSize: 48,
            color: "white",
            fontWeight: 700,
            lineHeight: 1.2,
            display: "flex",
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            marginTop: 24,
          }}
        >
          {readTime} · celibacytracker.com
        </div>
      </div>
    ),
    { ...size }
  );
}
