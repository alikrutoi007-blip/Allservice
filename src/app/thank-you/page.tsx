import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Заявка подготовлена",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="inner-page thank-you-page">
      <div className="container narrow-container">
        <CheckCircle2 size={56} aria-hidden="true" />
        <h1>Заявка подготовлена</h1>
        <p>
          В WhatsApp открылось готовое сообщение. Проверьте его и нажмите
          «Отправить». Если мессенджер не открылся, позвоните нам.
        </p>
        <div className="hero-actions">
          <a href={siteConfig.phoneHref} className="button button-primary">
            <Phone size={19} aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <Link href="/" className="button button-secondary">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </section>
  );
}

