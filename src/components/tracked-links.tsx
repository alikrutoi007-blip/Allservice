"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  className,
  children,
  label,
  target,
}: {
  href: string;
  event: "call_click" | "whatsapp_click";
  className?: string;
  children: ReactNode;
  label: string;
  target?: "_blank";
}) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      onClick={() => trackEvent(event, { placement: label })}
    >
      {children}
    </a>
  );
}

