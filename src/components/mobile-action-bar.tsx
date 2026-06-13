"use client";

import Link from "next/link";
import { MessageCircle, Phone, Wrench } from "lucide-react";
import { getWhatsappUrl, siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Быстрые действия">
      <a
        href={siteConfig.phoneHref}
        onClick={() => trackEvent("call_click", { placement: "mobile_bar" })}
      >
        <Phone size={20} aria-hidden="true" />
        Позвонить
      </a>
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { placement: "mobile_bar" })}
      >
        <MessageCircle size={20} aria-hidden="true" />
        WhatsApp
      </a>
      <Link href="/#request">
        <Wrench size={20} aria-hidden="true" />
        Вызвать
      </Link>
    </nav>
  );
}

