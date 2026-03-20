import { ImageResponse } from "next/og";

export const alt = "Celibacy Blog - Tips, Benefits & Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          🔥 Celibacy Tracker
        </div>
        <div
          style={{
            fontSize: 56,
            color: "white",
            fontWeight: 700,
            display: "flex",
            marginBottom: 20,
          }}
        >
          Celibacy Blog
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            display: "flex",
          }}
        >
          Guides, tips, and insights for your celibacy journey
        </div>
      </div>
    ),
    { ...size }
  );
}
