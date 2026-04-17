"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";

export function CookieConsentBanner() {
  const { consent, isMounted, acceptAll, rejectAll, openModal } = useCookieConsent();

  // Don't render anything until mounted (hydration)
  if (!isMounted) return null;

  // Don't render if user has already made a choice
  if (consent.hasConsented) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-8 md:p-6 sm:pb-6 pointer-events-none">
      <div className="mx-auto max-w-4xl bg-card border border-border rounded-xl shadow-2xl p-5 md:p-6 font-sans flex flex-col md:flex-row items-center gap-6 pointer-events-auto overflow-hidden relative overflow-y-auto max-h-[85vh]">
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Cookie settings</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            TINSYS DIGITAL uses cookies and similar technologies to operate the website, remember your preferences, and measure website usage through analytics. You can accept, reject, or manage your preferences.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
          <Button variant="outline" onClick={openModal} className="w-full sm:w-auto">
            Manage preferences
          </Button>
          <Button variant="secondary" onClick={rejectAll} className="w-full sm:w-auto">
            Reject
          </Button>
          <Button variant="default" onClick={acceptAll} className="w-full sm:w-auto">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
