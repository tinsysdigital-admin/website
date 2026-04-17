"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieSettingsTrigger() {
  const { openModal } = useCookieConsent();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }}
      className="text-xs text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
    >
      Cookie Settings
    </button>
  );
}
