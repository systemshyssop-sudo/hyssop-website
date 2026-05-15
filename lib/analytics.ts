// lib/analytics.ts

type EventParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Track events to Google Analytics (GA4) and Microsoft Clarity.
 * Safe to call anywhere in the app.
 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  // Google Analytics (GA4)
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        ...params,
      });
    }
  } catch (err) {
    console.error("GA4 tracking error:", err);
  }

  // Microsoft Clarity
  try {
    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);
    }
  } catch (err) {
    console.error("Clarity tracking error:", err);
  }
}

/**
 * Optional helper for manual page views if needed later.
 */
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-BZYP447964", {
        page_path: url,
      });
    }
  } catch (err) {
    console.error("Page view tracking error:", err);
  }
}