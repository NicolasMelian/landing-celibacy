import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Celibacy Tracker",
  description:
    "Terms of service for the Celibacy Tracker app and website.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: March 20, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the Celibacy Tracker app or
              visiting celibacytracker.com, you agree to be bound by these Terms
              of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description of Service
            </h2>
            <p>
              Celibacy Tracker is a free mobile application available on iOS and
              Android that allows users to track their celibacy streak, discover
              daily benefits, write journal entries, and access educational
              content about celibacy and self-improvement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Health Disclaimer
            </h2>
            <p>
              The content provided in the Celibacy Tracker app and website is
              for informational and educational purposes only. It is not
              intended as medical, psychological, or professional health advice.
              Always consult a qualified healthcare professional before making
              changes to your health practices. We make no guarantees regarding
              the health benefits described in our content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              User Responsibilities
            </h2>
            <p className="mb-3">By using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the app for its intended purpose</li>
              <li>
                Not attempt to reverse-engineer, modify, or distribute the app
              </li>
              <li>
                Not use the app or website for any unlawful or prohibited
                purpose
              </li>
              <li>
                Be responsible for maintaining the security of your device and
                data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Intellectual Property
            </h2>
            <p>
              All content, design, code, graphics, and trademarks associated
              with Celibacy Tracker are the property of their respective owners.
              You may not reproduce, distribute, or create derivative works
              without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Limitation of Liability
            </h2>
            <p>
              Celibacy Tracker is provided &quot;as is&quot; without warranties
              of any kind, express or implied. We are not liable for any
              damages arising from the use or inability to use our services,
              including but not limited to direct, indirect, incidental, or
              consequential damages. Your use of the app and website is at your
              own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data and Privacy
            </h2>
            <p>
              Your use of our services is also governed by our{" "}
              <Link
                href="/privacy"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Privacy Policy
              </Link>
              . All personal data in the app is stored locally on your device
              and is not accessible to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any
              time. Changes will be posted on this page with an updated
              revision date. Continued use of our services constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, contact us at{" "}
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
