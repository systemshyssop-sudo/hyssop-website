"use client";

import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected" | "custom";

type StoredConsent = {
  choice: ConsentChoice;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "hyssop_cookie_consent";

function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      return null;
    }

    return JSON.parse(savedConsent) as StoredConsent;
  } catch {
    return null;
  }
}

function updateTrackingConsent({
  analyticsGranted,
  marketingGranted,
}: {
  analyticsGranted: boolean;
  marketingGranted: boolean;
}) {
  /*
   * Tracking integrations must never be allowed
   * to break the cookie consent interface.
   */
  try {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: marketingGranted ? "granted" : "denied",
        ad_user_data: marketingGranted ? "granted" : "denied",
        ad_personalization: marketingGranted ? "granted" : "denied",
      });
    }
  } catch (error) {
    console.error("Unable to update Google consent:", error);
  }

  try {
    if (typeof window.clarity === "function") {
      window.clarity("consent", analyticsGranted);
    }
  } catch (error) {
    console.error("Unable to update Clarity consent:", error);
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const storedConsent = readStoredConsent();

    if (storedConsent) {
      updateTrackingConsent({
        analyticsGranted: Boolean(storedConsent.analytics),
        marketingGranted: Boolean(storedConsent.marketing),
      });
    }

    /*
     * Queue the local UI initialization rather than synchronously
     * changing state inside the effect body.
     */
    const timer = window.setTimeout(() => {
      setAnalytics(storedConsent?.analytics ?? true);
      setMarketing(storedConsent?.marketing ?? true);
      setVisible(!storedConsent);
      setInitialized(true);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  function saveConsent(
    choice: ConsentChoice,
    analyticsValue: boolean,
    marketingValue: boolean
  ) {
    const consent: StoredConsent = {
      choice,
      necessary: true,
      analytics: analyticsValue,
      marketing: marketingValue,
      updatedAt: new Date().toISOString(),
    };

    /*
     * Save locally first.
     */
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(consent)
      );
    } catch (error) {
      console.error("Unable to save cookie consent:", error);
    }

    /*
     * Close the interface immediately.
     * Tracking scripts must not control whether the banner closes.
     */
    setVisible(false);
    setShowCustomize(false);

    /*
     * Update external tracking only after the local UI has been handled.
     */
    updateTrackingConsent({
      analyticsGranted: analyticsValue,
      marketingGranted: marketingValue,
    });
  }

  if (!initialized || !visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[99999] px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0b1f52] p-5 text-white shadow-2xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-lg font-semibold">
              We use cookies
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/80">
              We use necessary cookies to keep the website working. With your
              permission, we may also use analytics cookies to understand
              website performance and marketing cookies to improve advertising
              and retargeting.
            </p>

            {showCustomize && (
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <label className="flex cursor-not-allowed items-center rounded-xl bg-white/10 p-3 text-white/80">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mr-2"
                  />
                  Necessary
                </label>

                <label className="flex cursor-pointer items-center rounded-xl bg-white/10 p-3 transition hover:bg-white/[0.14]">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) =>
                      setAnalytics(event.target.checked)
                    }
                    className="mr-2"
                  />
                  Analytics
                </label>

                <label className="flex cursor-pointer items-center rounded-xl bg-white/10 p-3 transition hover:bg-white/[0.14]">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(event) =>
                      setMarketing(event.target.checked)
                    }
                    className="mr-2"
                  />
                  Marketing
                </label>
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
            {showCustomize ? (
              <button
                type="button"
                onClick={() =>
                  saveConsent(
                    "custom",
                    analytics,
                    marketing
                  )
                }
                className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52] transition hover:bg-[#9bd84a]"
              >
                Save choices
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  saveConsent(
                    "accepted",
                    true,
                    true
                  )
                }
                className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52] transition hover:bg-[#9bd84a]"
              >
                Accept all
              </button>
            )}

            <button
              type="button"
              onClick={() =>
                saveConsent(
                  "rejected",
                  false,
                  false
                )
              }
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Reject non-essential
            </button>

            <button
              type="button"
              onClick={() =>
                setShowCustomize((value) => !value)
              }
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 underline underline-offset-2 transition hover:text-white"
            >
              {showCustomize
                ? "Hide options"
                : "Customize"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}