"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { TrackedLink } from "@/components/tracked-links";
import { siteConfig } from "@/config/site";

const navigation = [
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/#process", label: "Как работаем" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo inverse />
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <TrackedLink
            href={siteConfig.phoneHref}
            event="call_click"
            label="header"
            className="header-phone"
          >
            <Phone size={19} aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </TrackedLink>
          <Link href="/#request" className="button button-primary header-cta">
            Вызвать мастера
          </Link>
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Мобильное меню">
          <div className="container">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <TrackedLink
              href={siteConfig.phoneHref}
              event="call_click"
              label="mobile_menu"
              className="mobile-menu-phone"
            >
              Позвонить: {siteConfig.phoneDisplay}
            </TrackedLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

