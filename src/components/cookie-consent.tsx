"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mastertut-analytics-consent";

function GoogleTagManager({ id }: { id: string }) {
  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}

export function CookieConsent() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setConsent(
        stored === "accepted" || stored === "declined" ? stored : null,
      );
      setReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  if (!ready) {
    return null;
  }

  return (
    <>
      {consent === "accepted" && gtmId ? <GoogleTagManager id={gtmId} /> : null}
      {consent === null ? (
        <aside className="cookie-banner" aria-label="Настройки аналитики">
          <p>
            Мы используем аналитику, чтобы понимать эффективность рекламы. Она
            включится только с вашего согласия.
          </p>
          <div>
            <button
              type="button"
              className="button button-primary button-small"
              onClick={() => choose("accepted")}
            >
              Разрешить
            </button>
            <button
              type="button"
              className="button button-quiet button-small"
              onClick={() => choose("declined")}
            >
              Не сейчас
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
