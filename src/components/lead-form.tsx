"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function LeadForm({
  defaultService = "",
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [service, setService] = useState(defaultService);
  const [error, setError] = useState("");
  const started = useRef(false);

  function markStarted() {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", { default_service: defaultService || undefined });
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const phone = String(form.get("phone") ?? "").trim();
    const consent = form.get("consent");
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 10) {
      setError("Введите номер телефона полностью.");
      return;
    }

    if (!consent) {
      setError("Подтвердите согласие с политикой конфиденциальности.");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const selected =
      services.find((item) => item.slug === service)?.name || "Не указана";
    const source = params.get("utm_source");
    const campaign = params.get("utm_campaign");
    const gclid = params.get("gclid");
    const message = [
      "Здравствуйте! Хочу вызвать мастера.",
      `Услуга: ${selected}.`,
      `Телефон для связи: ${phone}.`,
      `Страница: ${window.location.href}.`,
      source ? `Источник: ${source}.` : "",
      campaign ? `Кампания: ${campaign}.` : "",
      gclid ? `GCLID: ${gclid}.` : "",
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent("form_submit", {
      service: selected,
      lead_channel: "whatsapp",
    });

    const whatsapp = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`;
    window.open(whatsapp, "_blank", "noopener,noreferrer");
    window.location.assign("/thank-you");
  }

  return (
    <form
      className={`lead-form ${compact ? "lead-form-compact" : ""}`}
      onSubmit={submit}
      onFocus={markStarted}
      noValidate
    >
      <div className="form-fields">
        <label>
          <span>Какая услуга нужна?</span>
          <select
            name="service"
            value={service}
            onChange={(event) => {
              setService(event.target.value);
              trackEvent("service_selected", { service: event.target.value });
            }}
          >
            <option value="">Выберите услугу</option>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Номер телефона</span>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 700 000 00 00"
            required
          />
        </label>
      </div>
      <label className="consent-field">
        <input type="checkbox" name="consent" />
        <span>
          Согласен с{" "}
          <a href="/privacy" target="_blank">
            политикой конфиденциальности
          </a>
        </span>
      </label>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="button button-primary form-submit">
        Отправить в WhatsApp
        <ArrowRight size={19} aria-hidden="true" />
      </button>
      <p className="form-note">
        Откроется WhatsApp с готовой заявкой. Вы сможете проверить сообщение
        перед отправкой.
      </p>
    </form>
  );
}

