import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Celibacy Tracker",
  description:
    "Privacy policy for the Celibacy Tracker app and website. Learn how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            Celibacy Tracker
          </span>
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: March 20, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Introduction
            </h2>
            <p>
              Celibacy Tracker (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we handle information when you use our
              mobile application and website (celibacytracker.com).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Mobile Application
            </h3>
            <p className="mb-3">
              The Celibacy Tracker app is designed with privacy as a core
              principle. All your personal data — including your streak, journal
              entries, and preferences — is stored locally on your device. We do
              not collect, transmit, or store any personal data on our servers.
            </p>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Website</h3>
            <p>
              Our website uses Vercel Analytics to collect anonymous,
              aggregated usage data such as page views, referral sources, and
              general geographic regions. This data does not identify individual
              users and contains no personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Storage
            </h2>
            <p>
              All app data is stored exclusively on your device. If you delete
              the app, your data is permanently removed. We have no ability to
              access, recover, or view your personal data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Third-Party Services
            </h2>
            <p className="mb-3">Our services may interact with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Apple App Store / Google Play Store</strong> — for app
                distribution. Their respective privacy policies apply to the
                download process.
              </li>
              <li>
                <strong>Vercel Analytics</strong> (website only) — for anonymous
                traffic analysis. See{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  Vercel&apos;s privacy policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact
              us so we can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. Continued
              use of our services after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:info@nicomelian.com"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                info@nicomelian.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
