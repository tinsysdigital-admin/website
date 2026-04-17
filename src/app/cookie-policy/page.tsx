import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | TINSYS DIGITAL",
  description: "Read the Cookie Policy for TINSYS DIGITAL, including how cookies and analytics technologies are used on our website.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  const effectiveDate = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="flex-1 bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-muted py-20 px-4 md:px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Learn how TINSYS DIGITAL uses cookies, analytics technologies, and consent settings on this website.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          <p className="font-medium text-foreground">
            Effective Date: <br />{effectiveDate}
          </p>

          <p>
            TINSYS DIGITAL uses cookies and similar technologies to operate the website, understand usage, and improve the user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit and may be used for functionality, performance, analytics, and user preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">2. How TINSYS DIGITAL Uses Cookies</h2>
          <p>TINSYS DIGITAL uses cookies and similar technologies to:</p>
          <ul>
            <li>support basic website functionality;</li>
            <li>remember consent preferences;</li>
            <li>measure website usage and performance;</li>
            <li>understand how visitors interact with the website;</li>
            <li>improve website performance and business operations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">Strictly Necessary Cookies</h3>
          <p>
            These cookies are required for the website to function properly and for essential technical operations such as security, basic navigation, and consent preference storage.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">Analytics Cookies</h3>
          <p>
            These cookies help us understand traffic, usage patterns, page performance, and general visitor behavior through analytics tools such as Google Analytics 4.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">Preference Cookies</h3>
          <p>
            These cookies remember choices made by the user, including cookie consent preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">4. Analytics Technologies</h2>
          <p>
            TINSYS DIGITAL may use analytics tools to collect website usage information such as page views, session data, approximate location, browser type, and device information.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">5. Consent Choices</h2>
          <p>When you first visit the website, you may choose to:</p>
          <ul>
            <li>Accept analytics cookies;</li>
            <li>Reject non-essential cookies;</li>
            <li>Manage your cookie preferences.</li>
          </ul>
          <p>Your choice will be stored and used on future visits until you change it.</p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">6. Managing Your Preferences</h2>
          <p>
            You can reopen and update your cookie preferences at any time using the cookie settings control available on the website.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">7. Data and Privacy</h2>
          <p>
            For more information about how personal information is collected, used, and protected, please review our <Link href="/privacy-policy" className="text-primary font-medium hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">8. Contact</h2>
          <p>
            If you have any questions about this Cookie Policy or your cookie preferences, contact us at:<br />
            <a href="mailto:tinsysdigital.official@gmail.com" className="text-primary font-medium hover:underline">tinsysdigital.official@gmail.com</a>
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">9. Updates</h2>
          <p>
            We may update this Cookie Policy from time to time. The latest version will always be published on this page.
          </p>
        </div>
      </section>
    </main>
  );
}
