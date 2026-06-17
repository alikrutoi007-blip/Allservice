"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { getWhatsappUrl } from "@/config/site";
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
  const homeServices = services.filter((item) => item.audience === "home");
  const businessServices = services.filter(
    (item) => item.audience === "business",
  );

  function markStarted() {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", { default_service: defaultService || undefined });
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const problem = String(form.get("problem") ?? "").trim();
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
    const message = [
      "Здравствуйте! Хочу оставить заявку в MasterTut.",
      name ? `Имя: ${name}.` : "",
      `Услуга: ${selected}.`,
      `Телефон: ${phone}.`,
      problem ? `Описание: ${problem}.` : "",
      `Страница: ${window.location.href}.`,
      params.get("utm_source")
        ? `Источник: ${params.get("utm_source")}.`
        : "",
      params.get("utm_campaign")
        ? `Кампания: ${params.get("utm_campaign")}.`
        : "",
      params.get("gclid") ? `GCLID: ${params.get("gclid")}.` : "",
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent("form_submit", {
      service: selected,
      lead_channel: "whatsapp",
    });

    window.open(
      getWhatsappUrl(message),
      "_blank",
      "noopener,noreferrer",
    );
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
          <span>Ваше имя</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Как к вам обращаться"
          />
        </label>
        <label>
          <span>Номер телефона *</span>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 700 000 00 00"
            required
          />
        </label>
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
            <optgroup label="Для дома">
              {homeServices.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Для бизнеса">
              {businessServices.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </optgroup>
          </select>
        </label>
        <label>
          <span>Что произошло?</span>
          <input
            type="text"
            name="problem"
            placeholder="Например: холодильник не охлаждает"
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
        Отправить заявку
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      <p className="form-note">
        Откроется WhatsApp с готовым сообщением. Вы сможете проверить его перед
        отправкой.
      </p>
    </form>
  );
}
