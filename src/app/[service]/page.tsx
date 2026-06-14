import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { ServiceIcon } from "@/components/service-icon";
import { TrackedLink } from "@/components/tracked-links";
import { getWhatsappUrl, siteConfig } from "@/config/site";
import { serviceBySlug, services } from "@/data/services";

type Props = {
  params: Promise<{ service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `/${service.slug}`,
      type: "website",
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) {
    notFound();
  }

  const whatsappMessage = `Здравствуйте! Нужна услуга: ${service.name.toLowerCase()}. Я нахожусь в Алматы.`;
  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => serviceBySlug.get(relatedSlug))
    .filter((item) => item !== undefined);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: {
          "@type": "City",
          name: siteConfig.city,
        },
        provider: {
          "@id": `${siteConfig.siteUrl}/#business`,
        },
        url: `${siteConfig.siteUrl}/${service.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Услуги",
            item: `${siteConfig.siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${siteConfig.siteUrl}/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="service-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/">Главная</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/services">Услуги</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span>{service.shortName}</span>
          </nav>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <div className="service-page-icon">
                <ServiceIcon name={service.icon} size={42} />
              </div>
              <h1>{service.title}</h1>
              <p>{service.intro}</p>
              <div className="hero-actions">
                <Link href="#service-request" className="button button-primary">
                  Вызвать мастера
                  <ArrowRight size={19} aria-hidden="true" />
                </Link>
                <TrackedLink
                  href={getWhatsappUrl(whatsappMessage)}
                  event="whatsapp_click"
                  label={`service_hero_${service.slug}`}
                  target="_blank"
                  className="text-link"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Написать в WhatsApp
                </TrackedLink>
              </div>
              <div className="service-trust-row">
                <span>
                  <Calculator aria-hidden="true" />
                  Работы согласуем заранее
                </span>
                <span>
                  <ShieldCheck aria-hidden="true" />
                  Условия гарантии фиксируем
                </span>
              </div>
            </div>
            <div className="service-request-card" id="service-request">
              <h2>Отправить заявку</h2>
              <p>
                Укажите телефон. Заявка откроется в WhatsApp с названием
                выбранной услуги.
              </p>
              <LeadForm defaultService={service.slug} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-intro">
          <span className="section-label">Об услуге</span>
          <h2>{service.name}: диагностика, ремонт и проверка результата</h2>
          <p>{service.description}</p>
        </div>
        <div className="container two-column-section">
          <div>
            <div className="section-heading">
              <h2>С какими проблемами помогаем</h2>
              <p>
                Если вашей неисправности нет в списке, опишите ее оператору.
              </p>
            </div>
            <ul className="issue-list">
              {service.issues.map((issue) => (
                <li key={issue}>
                  <CheckCircle2 aria-hidden="true" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="section-heading">
              <h2>Какие работы выполняем</h2>
              <p>Точный перечень определяется после диагностики.</p>
            </div>
            <ul className="work-list">
              {service.workTypes.map((work, index) => (
                <li key={work}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {work}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section service-price-section">
        <div className="container service-price-grid">
          <div>
            <h2>От чего зависит стоимость</h2>
            <p>
              Точную цену нельзя честно назвать без понимания причины
              неисправности. Мастер сообщит ее до начала работ.
            </p>
          </div>
          <ul>
            {service.priceFactors.map((factor) => (
              <li key={factor}>
                <Calculator aria-hidden="true" />
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section related-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Связанные услуги</span>
              <h2>Другие работы с техникой и оборудованием</h2>
            </div>
            <p>
              Если проблема затрагивает несколько устройств, укажите это в
              заявке. Так мастер сможет лучше подготовиться к выезду.
            </p>
          </div>
          <div className="related-grid">
            {relatedServices.map((related) => (
              <Link href={`/${related.slug}`} key={related.slug}>
                <ServiceIcon name={related.icon} size={25} />
                <span>{related.name}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <h2>Вопросы об услуге</h2>
            <p>
              Для консультации позвоните по номеру{" "}
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>.
            </p>
          </div>
          <div className="faq-list">
            {service.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <h2>{service.name} — оставить заявку</h2>
            <p>Сначала обсудим задачу, затем согласуем время выезда.</p>
          </div>
          <div className="final-cta-actions">
            <TrackedLink
              href={siteConfig.phoneHref}
              event="call_click"
              label={`service_final_${service.slug}`}
              className="button button-dark"
            >
              <Phone size={18} aria-hidden="true" />
              Позвонить
            </TrackedLink>
            <TrackedLink
              href={getWhatsappUrl(whatsappMessage)}
              event="whatsapp_click"
              label={`service_final_${service.slug}`}
              target="_blank"
              className="button button-primary"
            >
              <MessageCircle size={19} aria-hidden="true" />
              WhatsApp
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
