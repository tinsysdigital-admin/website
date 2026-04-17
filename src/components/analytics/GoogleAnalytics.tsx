"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function GoogleAnalytics({ gaMeasurementId }: { gaMeasurementId: string }) {
  const { consent } = useCookieConsent();

  // Ensure default state is set before GA scripts load.
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(arguments);
    }
    // We bind it manually so Next.js script loading can pick it up.
    window.gtag = window.gtag || gtag;

    // Apply default consent state.
    // analytics_storage defaults to 'denied'
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      wait_for_update: 500, // Optional delay setting
    });
  }, []);

  // Update consent when user triggers an update
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: consent.analyticsEnabled ? "granted" : "denied",
      });
    }
  }, [consent.analyticsEnabled]);

  if (!gaMeasurementId) return null;

  return (
    <>
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
