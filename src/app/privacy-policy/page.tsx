import React from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | TINSYS DIGITAL",
  description:
    "Read the Privacy Policy for TINSYS DIGITAL, including how we collect, use, store, and protect personal information submitted through our website and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main id="main-content" className="flex-1 w-full relative bg-background text-foreground pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Page hero area */}
            <header className="mb-12 border-b border-border pb-10">
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                How TINSYS DIGITAL collects, uses, stores, and protects information submitted through our website and services.
              </p>
            </header>

            {/* Privacy policy content container */}
            <article className="text-base md:text-lg text-muted-foreground leading-relaxed flex flex-col gap-6">
              <p className="font-medium text-foreground">
                Effective Date: <br className="md:hidden" /> April 18, 2026
              </p>

              <p>
                TINSYS DIGITAL respects your privacy and is committed to protecting the personal information you provide through our website and services.
              </p>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  TINSYS DIGITAL is a technology company providing software development, web development, automation tools, bot development, API development, system setup, server setup, and software maintenance.
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-foreground">Website:</strong> tinsysdigital.com
                  </li>
                  <li>
                    <strong className="text-foreground">Contact Email:</strong>{" "}
                    <a
                      href="mailto:tinsysdigital.official@gmail.com"
                      className="text-primary hover:underline hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm inline-block"
                    >
                      tinsysdigital.official@gmail.com
                    </a>
                  </li>
                </ul>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company or brand name</li>
                  <li>Project details</li>
                  <li>Budget and deadline information</li>
                  <li>Preferred contact method</li>
                  <li>Basic website usage data collected through analytics tools</li>
                </ul>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                  <li>review and respond to project requests</li>
                  <li>communicate with potential clients</li>
                  <li>provide services and support</li>
                  <li>improve website performance and business operations</li>
                  <li>monitor website traffic and usage patterns</li>
                </ul>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Analytics and Technical Data</h2>
                <p>
                  Our website may use analytics tools to collect website usage information such as page views, session data, approximate location, browser type, and device information.
                </p>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
                <p className="mb-4">We do not sell your personal information.</p>
                <p>
                  We may share data only with service providers or tools required to operate the website, communicate with users, or run business operations.
                </p>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
                <p>
                  We keep personal information only for as long as necessary to handle inquiries, provide services, maintain records, or meet legal and operational needs.
                </p>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
                <p>
                  We take reasonable steps to protect submitted information against unauthorized access, misuse, or disclosure.
                </p>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
                <p>
                  You may contact us to request access, correction, or deletion of your personal information, subject to applicable requirements.
                </p>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
                <p>
                  If you have any privacy-related questions, contact us at:
                  <br />
                  <a
                    href="mailto:tinsysdigital.official@gmail.com"
                    className="text-primary hover:underline hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm inline-block mt-2"
                  >
                    tinsysdigital.official@gmail.com
                  </a>
                </p>
              </section>

              <section className="mt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Updates</h2>
                <p>
                  We may update this Privacy Policy from time to time. The latest version will always be published on our website.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
