import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TINSYS DIGITAL | Software Development, Automation & Digital Systems",
  description:
    "TINSYS DIGITAL builds modern websites, software systems, automation tools, APIs, server infrastructure, and long-term technical solutions for digital businesses.",
  openGraph: {
    title: "TINSYS DIGITAL | Engineering Digital Systems That Scale",
    description:
      "Premium software development, automation systems, infrastructure setup, and technical execution for modern digital operations.",
    url: "https://tinsysdigital.com", // This would be dynamic in real prod
    siteName: "TINSYS DIGITAL",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TINSYS DIGITAL",
    url: "https://tinsysdigital.com",
    email: "tinsysdigital.official@gmail.com",
    description: "Premium technology company focused on software development, automation systems, digital infrastructure, and long-term technical execution.",
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
