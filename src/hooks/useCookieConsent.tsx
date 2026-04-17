"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CookieConsentState } from "@/hooks/useCookieConsent"; // For typing, wait, I will rewrite the hook entirely.

const CONSENT_COOKIE_KEY = "tinsys_cookie_consent";

interface CookieConsentContextType {
  consent: {
    hasConsented: boolean;
    analyticsEnabled: boolean;
    timestamp: string | null;
  };
  isMounted: boolean;
  isModalOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const defaultState = {
    hasConsented: false,
    analyticsEnabled: false,
    timestamp: null,
  };

  const [consent, setConsent] = useState(defaultState);
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_COOKIE_KEY);
      if (stored) {
        setConsent(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading cookie consent", e);
    }
  }, []);

  const saveConsent = (analytics: boolean) => {
    const newState = {
      hasConsented: true,
      analyticsEnabled: analytics,
      timestamp: new Date().toISOString(),
    };
    
    setConsent(newState);
    try {
      localStorage.setItem(CONSENT_COOKIE_KEY, JSON.stringify(newState));
    } catch (e) {
      console.error("Error saving cookie consent", e);
    }

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analytics ? "granted" : "denied",
      });
    }
  };

  const acceptAll = () => {
    saveConsent(true);
    setIsModalOpen(false);
  };

  const rejectAll = () => {
    saveConsent(false);
    setIsModalOpen(false);
  };

  const savePreferences = (analytics: boolean) => {
    saveConsent(analytics);
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CookieConsentContext.Provider value={{
      consent,
      isMounted,
      isModalOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openModal,
      closeModal
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
}
