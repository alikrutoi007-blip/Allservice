import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { ServiceCard } from "@/components/service-card";
import { TrackedLink } from "@/components/tracked-links";
import { getWhatsappUrl, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import {
  audiences,
  businessTypes,
  commonProblems,
  districts,
  homeFaq,
  processSteps,
  reasons,
  recentWorks,
} from "@/data/home";

export default function Home() {
  const homeServices = services.filter((service) => service.audience === "home");
  const businessServices = services.filter(
    (service) => service.audience === "business",
  );
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Услуги MasterTut в Алматы и Алматинской области",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.siteUrl}/${service.slug}`,
          name: service.name,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="hero">
        <Image
          src="/images/hero-technician.webp"
          alt="Мастер MasterTut приехал для ремонта техники в Алматы и Алматинской области"
          fill
          priority
          sizes="100vw"
          className="hero-background"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <h1>Ремонт бытовой и коммерческой техники в Алматы и Алматинской области</h1>
          <p>
            Ремонтируем и устанавливаем технику в квартирах, частных домах,
            ресторанах, кафе и профессиональных кухнях. Работаем с премиальным
            и коммерческим оборудованием.
          </p>
          <div className="hero-actions">
            <Link href="#request" className="button button-primary">
              Оставить заявку
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <TrackedLink
              href={siteConfig.phoneHref}
              event="call_click"
              label="hero"
              className="button button-secondary"
            >
              <Phone size={18} aria-hidden="true" />
              Позвонить
            </TrackedLink>
          </div>
          <ul className="hero-proof">
            <li>
              <Check aria-hidden="true" />
              Диагностика до ремонта
            </li>
            <li>
              <Check aria-hidden="true" />
              Согласование работ заранее
            </li>
            <li>
              <Check aria-hidden="true" />
              Выезд по Алматы и области
            </li>
          </ul>
        </div>
      </section>

      <section className="request-band" id="request">
        <div className="container request-band-grid">
          <div>
            <span className="section-label">Быстрая заявка</span>
            <h2>Опишите технику и проблему</h2>
            <p>
              Чем точнее модель и симптомы, тем лучше мастер подготовится к
              выезду.
            </p>
          </div>
          <LeadForm compact />
        </div>
      </section>

      <section className="section audience-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="section-label">Два направления</span>
            <h2>Один сервис для дома и бизнеса</h2>
            <p>
              Выберите подходящий раздел. Каждая услуга ведет на отдельную
              страницу с конкретными неисправностями и видами работ.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              const list =
                audience.id === "home-services"
                  ? homeServices.slice(0, 6)
                  : businessServices.slice(0, 6);
              return (
                <div className="audience-column" id={audience.id} key={audience.id}>
                  <div className="audience-heading">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{audience.title}</h3>
                      <p>{audience.text}</p>
                    </div>
                  </div>
                  <div className="audience-services">
                    {list.map((service) => (
                      <ServiceCard service={service} key={service.slug} />
                    ))}
                  </div>
                  <Link href="/services" className="inline-link">
                    Смотреть все услуги
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container problem-layout">
          <div>
            <span className="section-label">Когда обращаться</span>
            <h2>Не ждите, пока небольшая проблема остановит технику</h2>
            <p>
              Своевременная диагностика помогает понять, нужен ли ремонт,
              обслуживание или замена отдельного узла.
            </p>
          </div>
          <ul className="problem-list">
            {commonProblems.map((problem) => (
              <li key={problem}>
                <Check aria-hidden="true" />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label section-label-light">
                Порядок работы
              </span>
              <h2>От заявки до проверенного результата</h2>
            </div>
            <p>
              Без ремонта наугад: сначала выясняем задачу, затем согласуем
              решение.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section works-section" id="works">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Примеры задач</span>
              <h2>Недавние работы</h2>
            </div>
            <p>
              Показываем суть неисправности и выполненную работу. Цена зависит
              от диагностики, модели и необходимых деталей.
            </p>
          </div>
          <div className="works-layout">
            <div className="works-media">
              <Image
                src="/images/team-repair.webp"
                alt="Мастера MasterTut диагностируют стиральную машину"
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="works-list">
              {recentWorks.map((work, index) => (
                <article key={work.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{work.type}</small>
                    <h3>{work.title}</h3>
                    <p>
                      <strong>Проблема:</strong> {work.problem}
                    </p>
                    <p>
                      <strong>Что сделали:</strong> {work.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section reasons-section">
        <div className="container reasons-layout">
          <div className="reasons-intro">
            <ShieldCheck aria-hidden="true" />
            <span className="section-label">Почему MasterTut</span>
            <h2>Беремся за задачи, где важны аккуратность и понимание техники</h2>
            <p>
              Особенно при работе с премиальным и коммерческим оборудованием.
            </p>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <span className="section-label">Кому помогаем</span>
            <h2>Частным клиентам и предприятиям Алматы и Алматинской области</h2>
          </div>
          <div className="client-types">
            {businessTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
          <div className="districts">
            <strong>Районы выезда:</strong>
            {districts.map((district) => (
              <span key={district}>{district}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <span className="section-label">Вопросы</span>
            <h2>Что важно знать до вызова мастера</h2>
            <p>
              Не нашли ответ? Позвоните по номеру{" "}
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>.
            </p>
          </div>
          <div className="faq-list">
            {homeFaq.map((item) => (
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
            <h2>Нужен ремонт или установка техники?</h2>
            <p>Расскажите, что произошло, и мы уточним следующий шаг.</p>
          </div>
          <div className="final-cta-actions">
            <TrackedLink
              href={siteConfig.phoneHref}
              event="call_click"
              label="final_cta"
              className="button button-dark"
            >
              <Phone size={18} aria-hidden="true" />
              Позвонить
            </TrackedLink>
            <TrackedLink
              href={getWhatsappUrl()}
              event="whatsapp_click"
              label="final_cta"
              target="_blank"
              className="button button-primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Написать в WhatsApp
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
