import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { TrackedLink } from "@/components/tracked-links";
import { getWhatsappUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Контакты MasterTut в Алматы и Алматинской области",
  description:
    "Телефон и WhatsApp MasterTut для ремонта и установки бытовой и коммерческой техники в Алматы и Алматинской области.",
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  return (
    <section className="inner-page">
      <div className="container contact-grid">
        <div>
          <div className="inner-page-heading">
            <h1>Контакты MasterTut</h1>
            <p>
              Принимаем обращения по ремонту и установке бытовой и коммерческой
              техники и оборудования. Возможность выезда по вашему адресу
              уточняется после описания задачи.
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
                <small>Сообщения</small>
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
            Выезд выполняется по Алматы и Алматинской области. При обращении
            укажите тип оборудования, адрес и кратко опишите задачу.
          </p>
        </div>
        <div className="request-card">
          <div>
            <h2>Описать задачу</h2>
            <p>
              Заполните форму, проверьте подготовленное сообщение и отправьте
              его через WhatsApp.
            </p>
          </div>
          <LeadForm compact />
        </div>
      </div>
    </section>
  );
}
