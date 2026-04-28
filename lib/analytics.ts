// lib/analytics.ts

type EventParams = Record<string, any>;

/**
 * Track events to Google Analytics (GA4) and Microsoft Clarity
 * Safe to call anywhere in the app
 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  // Google Analytics (GA4)
  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, {
        ...params,
      });
    }
  } catch (err) {
    console.error("GA4 tracking error:", err);
  }

  // Microsoft Clarity
  try {
    if (typeof (window as any).clarity === "function") {
      (window as any).clarity("event", eventName);
    }
  } catch (err) {
    console.error("Clarity tracking error:", err);
  }
}

/**
 * Optional helper for page views (if needed later)
 */
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  } catch (err) {
    console.error("Page view tracking error:", err);
  }
}