import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Celibacy Tracker - Track Streaks, Benefits & Journal";
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
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 80,
            display: "flex",
            marginBottom: 24,
          }}
        >
          🔥
        </div>
        <div
          style={{
            fontSize: 64,
            color: "white",
            fontWeight: 700,
            display: "flex",
            marginBottom: 24,
          }}
        >
          Celibacy Tracker
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            display: "flex",
            textAlign: "center",
          }}
        >
          Track your celibacy journey, unlock daily benefits
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            marginTop: 40,
          }}
        >
          Free on iOS & Android
        </div>
      </div>
    ),
    { ...size }
  );
}
