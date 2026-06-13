export type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "form_start"
  | "form_submit"
  | "service_selected";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  details: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...details });
}

