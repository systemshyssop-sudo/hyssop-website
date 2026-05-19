"use client";



import { useEffect, useState } from "react";



type ConsentChoice = "accepted" | "rejected" | "custom";



declare global {

  interface Window {

    gtag?: (...args: unknown[]) => void;

    clarity?: (...args: unknown[]) => void;

  }

}



const STORAGE_KEY = "hyssop_cookie_consent";



export default function CookieConsent() {

  const [visible, setVisible] = useState(false);

  const [showCustomize, setShowCustomize] = useState(false);

  const [analytics, setAnalytics] = useState(true);

  const [marketing, setMarketing] = useState(true);



  useEffect(() => {

    const savedConsent = localStorage.getItem(STORAGE_KEY);



    if (!savedConsent) {

      setVisible(true);

      return;

    }



    try {

      const parsed = JSON.parse(savedConsent);



      updateGoogleConsent({

        analyticsGranted: Boolean(parsed.analytics),

        marketingGranted: Boolean(parsed.marketing),

      });

    } catch {

      setVisible(true);

    }

  }, []);



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



  function saveConsent(choice: ConsentChoice, analyticsValue: boolean, marketingValue: boolean) {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify({

        choice,

        necessary: true,

        analytics: analyticsValue,

        marketing: marketingValue,

        updatedAt: new Date().toISOString(),

      })

    );



    updateGoogleConsent({

      analyticsGranted: analyticsValue,

      marketingGranted: marketingValue,

    });



    setVisible(false);

  }



  if (!visible) return null;



  return (

    <div className="fixed inset-x-0 bottom-0 z-[99999] px-4 pb-4 sm:px-6">

      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0b1f52] p-5 text-white shadow-2xl">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          <div className="max-w-3xl">

            <h2 className="text-lg font-semibold">We use cookies</h2>

            <p className="mt-2 text-sm leading-6 text-white/80">

              We use necessary cookies to keep the website working. With your

              permission, we may also use analytics cookies to understand website

              performance and marketing cookies to improve advertising and

              retargeting.

            </p>



            {showCustomize ? (

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">

                <label className="rounded-xl bg-white/10 p-3">

                  <input type="checkbox" checked disabled className="mr-2" />

                  Necessary

                </label>



                <label className="rounded-xl bg-white/10 p-3">

                  <input

                    type="checkbox"

                    checked={analytics}

                    onChange={(e) => setAnalytics(e.target.checked)}

                    className="mr-2"

                  />

                  Analytics

                </label>



                <label className="rounded-xl bg-white/10 p-3">

                  <input

                    type="checkbox"

                    checked={marketing}

                    onChange={(e) => setMarketing(e.target.checked)}

                    className="mr-2"

                  />

                  Marketing

                </label>

              </div>

            ) : null}

          </div>



          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">

            {showCustomize ? (

              <button

                onClick={() => saveConsent("custom", analytics, marketing)}

                className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52]"

              >

                Save choices

              </button>

            ) : (

              <button

                onClick={() => saveConsent("accepted", true, true)}

                className="rounded-full bg-[#8cc63f] px-5 py-2.5 text-sm font-semibold text-[#0b1f52]"

              >

                Accept all

              </button>

            )}



            <button

              onClick={() => saveConsent("rejected", false, false)}

              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white"

            >

              Reject non-essential

            </button>



            <button

              onClick={() => setShowCustomize((value) => !value)}

              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/80 underline"

            >

              Customize

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}