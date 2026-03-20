"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";

export function DownloadButtons({
  size = "default",
  className = "",
}: {
  size?: "default" | "large";
  className?: string;
}) {
  const imgClass = size === "large" ? "h-16 w-auto" : "h-14 w-auto";

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
      <a
        href="https://apps.apple.com/app/celibacy-tracker/id6739954035?l=en-GB"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:scale-105 transition-transform"
        onClick={() => track("download_click", { store: "app_store" })}
      >
        <Image
          src="/applebutton.png"
          alt="Download on the App Store"
          width={200}
          height={60}
          className={imgClass}
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.nicomelian.celibacytracker"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:scale-105 transition-transform"
        onClick={() => track("download_click", { store: "google_play" })}
      >
        <Image
          src="/playstore.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className={imgClass}
        />
      </a>
    </div>
  );
}
