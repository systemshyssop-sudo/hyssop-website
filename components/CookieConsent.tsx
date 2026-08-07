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

function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const savedConsent = localStorage.getItem(STORAGE_KEY);

  if (!savedConsent) {
    return null;
  }

  try {
    return JSON.parse(savedConsent) as StoredConsent;
  } catch {
    return null;
  }
}

function updateGoogleConsent({
  analyticsGranted,
  marketingGranted,
}: {
  analyticsGranted: boolean;
  marketingGranted: boolean;
}) {
  window.gtag?.("consent", "update", {
    analytics_storage: analyticsGranted ? "granted" : "denied",
    ad_storage: marketingGranted ? "granted" : "denied",
    ad_user_data: marketingGranted ? "granted" : "denied",
    ad_personalization: marketingGranted ? "granted" : "denied",
  });

  if (window.clarity) {
    window.clarity("consent", analyticsGranted);
  }
}

export default function CookieConsent() {
  const initialConsent = getStoredConsent();

  const [visible, setVisible] = useState(() => initialConsent === null);
  const [showCustomize, setShowCustomize] = useState(false);

  const [analytics, setAnalytics] = useState(
    () => initialConsent?.analytics ?? true
  );

  const [marketing, setMarketing] = useState(
    () => initialConsent?.marketing ?? true
  );

  useEffect(() => {
    if (!initialConsent) {
      return;
    }

    updateGoogleConsent({
      analyticsGranted: Boolean(initialConsent.analytics),
      marketingGranted: Boolean(initialConsent.marketing),
    });
  }, [initialConsent]);

  const saveConsent = (
    choice: ConsentChoice,
    analyticsValue: boolean,
    marketingValue: boolean
  ) => {
    const consent: StoredConsent = {
      choice,
      necessary: true,
      analytics: analyticsValue,
      marketing: marketingValue,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

    updateGoogleConsent({
      analyticsGranted: analyticsValue,
      marketingGranted: marketingValue,
    });

    setVisible(false);
    setShowCustomize(false);
  };

  if (!visible) {
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
                  saveConsent("custom", analytics, marketing)
                }
                className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52] transition hover:bg-[#9bd84a]"
              >
                Save choices
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  saveConsent("accepted", true, true)
                }
                className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52] transition hover:bg-[#9bd84a]"
              >
                Accept all
              </button>
            )}

            <button
              type="button"
              onClick={() =>
                saveConsent("rejected", false, false)
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
              {showCustomize ? "Hide options" : "Customize"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}