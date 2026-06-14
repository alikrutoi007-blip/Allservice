"use client";

import { MessageCircle, Phone } from "lucide-react";
import { getWhatsappUrl, siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Быстрые действия">
      <a
        href={siteConfig.phoneHref}
        onClick={() => trackEvent("call_click", { placement: "mobile_bar" })}
      >
        <Phone size={19} aria-hidden="true" />
        Позвонить
      </a>
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("whatsapp_click", { placement: "mobile_bar" })
        }
      >
        <MessageCircle size={19} aria-hidden="true" />
        WhatsApp
      </a>
    </nav>
  );
}
