"use client";

import { useEffect, useState, useRef } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { X } from "lucide-react";

export function CookiePreferencesModal() {
  const { isModalOpen, closeModal, consent, acceptAll, rejectAll, savePreferences } = useCookieConsent();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent.analyticsEnabled);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sync local state when modal opens
    if (isModalOpen) {
      setAnalyticsEnabled(consent.analyticsEnabled);
    }
  }, [isModalOpen, consent.analyticsEnabled]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const handleSave = () => {
    savePreferences(analyticsEnabled);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        ref={modalRef}
        className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 id="cookie-modal-title" className="text-xl font-semibold text-foreground">
              Manage cookie preferences
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Choose how TINSYS DIGITAL uses cookies and similar technologies on this website.
            </p>
          </div>
          <button 
            onClick={closeModal}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Strictly Necessary */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
            <div className="space-y-1 pr-6">
              <h3 className="font-medium text-foreground">Strictly Necessary Cookies</h3>
              <p className="text-sm text-muted-foreground">
                These cookies are required for the website to function properly and cannot be disabled.
              </p>
            </div>
            <div className="shrink-0 flex items-center h-full">
              <span className="text-sm font-medium text-primary">Always Active</span>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border">
            <div className="space-y-1 pr-6">
              <h3 className="font-medium text-foreground">Analytics Cookies</h3>
              <p className="text-sm text-muted-foreground">
                These cookies help us understand website traffic, usage patterns, and overall performance through analytics tools.
              </p>
            </div>
            <div className="shrink-0 flex items-center h-full">
              <Switch 
                checked={analyticsEnabled} 
                onCheckedChange={setAnalyticsEnabled} 
                aria-label="Toggle Analytics Cookies"
              />
            </div>
          </div>

          <div className="pt-2 text-sm text-muted-foreground">
            For more details, please read our{" "}
            <Link href="/cookie-policy" className="text-primary hover:underline hover:text-primary/80 transition-colors" onClick={closeModal}>
              Learn more
            </Link>{" "}
            about cookies.
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex flex-col-reverse sm:flex-row items-center justify-end gap-3 bg-muted/10">
          <Button variant="ghost" onClick={handleSave} className="w-full sm:w-auto">
            Save Preferences
          </Button>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
            <Button variant="secondary" onClick={rejectAll} className="w-full sm:w-auto">
              Reject Non-Essential
            </Button>
            <Button variant="default" onClick={acceptAll} className="w-full sm:w-auto">
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
