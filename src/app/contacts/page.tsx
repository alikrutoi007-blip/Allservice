import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { TrackedLink } from "@/components/tracked-links";
import { getWhatsappUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Контакты сервисной службы в Алматы",
  description:
    "Телефон и WhatsApp выездной сервисной службы Бәрі Жөн в Алматы.",
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  return (
    <section className="inner-page">
      <div className="container contact-grid">
        <div>
          <div className="inner-page-heading">
            <h1>Контакты</h1>
            <p>
              Работаем в формате выездной службы. Возможность и время выезда по
              вашему адресу подтвердит оператор.
            </p>
          </div>
          <div className="contact-list">
            <TrackedLink
              href={siteConfig.phoneHref}
              event="call_click"
              label="contacts"
            >
              <Phone aria-hidden="true" />
              <span>
                <small>Телефон</small>
                {siteConfig.phoneDisplay}
              </span>
            </TrackedLink>
            <TrackedLink
              href={getWhatsappUrl()}
              event="whatsapp_click"
              label="contacts"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" />
              <span>
                <small>Мессенджер</small>
                WhatsApp
              </span>
            </TrackedLink>
            <div>
              <MapPin aria-hidden="true" />
              <span>
                <small>Зона обслуживания</small>
                {siteConfig.serviceArea}
              </span>
            </div>
          </div>
          <p className="legal-placeholder">
            Перед публикацией добавьте реквизиты ИП/ТОО и фактический адрес,
            если по нему принимаются клиенты.
          </p>
        </div>
        <div className="request-card">
          <div>
            <h2>Отправить задачу</h2>
            <p>Сообщение откроется в WhatsApp для проверки и отправки.</p>
          </div>
          <LeadForm compact />
        </div>
      </div>
    </section>
  );
}

