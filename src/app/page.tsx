import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { ServiceIcon } from "@/components/service-icon";
import { TrackedLink } from "@/components/tracked-links";
import { getWhatsappUrl, siteConfig } from "@/config/site";
import { services } from "@/data/services";

const process = [
  {
    icon: ClipboardCheck,
    title: "Заявка",
    text: "Позвоните или отправьте короткую заявку.",
  },
  {
    icon: Phone,
    title: "Уточнение",
    text: "Обсудим задачу и согласуем удобное время.",
  },
  {
    icon: Search,
    title: "Диагностика",
    text: "Мастер определит причину неисправности.",
  },
  {
    icon: Calculator,
    title: "Цена",
    text: "До начала работ согласуем итоговую стоимость.",
  },
  {
    icon: Wrench,
    title: "Работа",
    text: "Выполним согласованный объем работ.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    text: "Зафиксируем условия гарантии на выполненные работы.",
  },
];

const homeFaq = [
  {
    question: "Сколько стоит выезд мастера?",
    answer:
      "Условия выезда зависят от услуги и района. Оператор уточнит их до оформления заказа, без скрытых доплат после приезда.",
  },
  {
    question: "Можно ли узнать точную цену заранее?",
    answer:
      "По телефону можно получить ориентир. Точную стоимость мастер сообщает после диагностики и до начала работ. Без вашего согласия ремонт не начинается.",
  },
  {
    question: "Какие районы Алматы вы обслуживаете?",
    answer:
      "Работаем по Алматы и ближайшим районам. Назовите адрес при обращении, и оператор подтвердит возможность и время выезда.",
  },
  {
    question: "Как действует гарантия?",
    answer:
      "Срок зависит от вида работы и установленных деталей. Условия фиксируются после выполнения заказа.",
  },
  {
    question: "Как оплатить работу?",
    answer:
      "Доступные способы оплаты оператор подтвердит при оформлении. Итоговая сумма согласовывается до начала работ.",
  },
];

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Услуги мастеров по дому в Алматы",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.siteUrl}/${service.slug}`,
      name: service.name,
    })),
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Ремонт и мастера по дому в Алматы</h1>
            <p className="hero-lead">
              Найдем причину, согласуем стоимость до начала работ и зафиксируем
              условия гарантии.
            </p>
            <div className="hero-actions">
              <Link href="#request" className="button button-primary">
                Вызвать мастера
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
              <TrackedLink
                href={getWhatsappUrl()}
                event="whatsapp_click"
                label="hero"
                target="_blank"
                className="text-link"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Написать в WhatsApp
              </TrackedLink>
            </div>
            <ul className="hero-proof" aria-label="Преимущества сервиса">
              <li>
                <Calculator aria-hidden="true" />
                <span>Стоимость до начала работ</span>
              </li>
              <li>
                <FileCheck2 aria-hidden="true" />
                <span>Условия гарантии в заказе</span>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <span>Выезд по Алматы</span>
              </li>
            </ul>
          </div>
          <div className="hero-media">
            <Image
              src="/images/hero-technician.webp"
              alt="Выездной мастер с инструментами в квартире"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span className="image-caption">Выездной сервис по Алматы</span>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <h2>Чем можем помочь</h2>
            <p>
              Для каждой услуги подготовлена отдельная страница с типовыми
              неисправностями и условиями работы.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.slug}>
                <div className="service-icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <Link href={`/${service.slug}`} className="inline-link">
                    Подробнее
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading">
            <h2>Как проходит заказ</h2>
            <p>Понятный процесс без начала работ до согласования цены.</p>
          </div>
          <ol className="process-list">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <span className="process-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section price-section">
        <div className="container price-grid">
          <div className="price-copy">
            <h2>Цена известна до начала работ</h2>
            <p>
              Мы не публикуем выдуманные цены «от». Итог зависит от
              неисправности, модели, деталей и сложности доступа.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 aria-hidden="true" />
                Диагностика и объяснение причины
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" />
                Согласование работы и деталей
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" />
                Ремонт только после вашего подтверждения
              </li>
            </ul>
            <Link href="/prices" className="inline-link">
              Как формируется стоимость
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="request-card" id="request">
            <div>
              <h2>Опишите задачу</h2>
              <p>
                Заявка откроется в WhatsApp. Проверьте сообщение и отправьте его
                оператору.
              </p>
            </div>
            <LeadForm compact />
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div className="trust-media">
            <Image
              src="/images/team-repair.webp"
              alt="Два мастера диагностируют стиральную машину"
              width={1672}
              height={941}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
          <div className="trust-copy">
            <h2>Работа, которую можно проверить</h2>
            <div className="trust-points">
              <div>
                <BadgeCheck aria-hidden="true" />
                <h3>Один мастер отвечает за заказ</h3>
                <p>
                  Вы знаете, кто выполняет работу и к кому обращаться по
                  результату.
                </p>
              </div>
              <div>
                <Calculator aria-hidden="true" />
                <h3>Цена согласуется заранее</h3>
                <p>
                  Мастер начинает работу после того, как вы подтвердили объем и
                  стоимость.
                </p>
              </div>
              <div>
                <FileCheck2 aria-hidden="true" />
                <h3>Условия фиксируются</h3>
                <p>
                  Состав работы и гарантийные условия должны быть понятны до
                  оплаты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tasks-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <h2>Типовые задачи</h2>
              <p>
                Примеры обращений, для которых можно вызвать выездного мастера.
              </p>
            </div>
            <Link href="/services" className="inline-link">
              Все услуги
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="task-list">
            <article>
              <span>Бытовая техника</span>
              <h3>Машинка не сливает воду</h3>
              <p>
                Проверим сливной тракт, насос, фильтр и управление. Стоимость
                зависит от найденной причины.
              </p>
            </article>
            <article>
              <span>Сантехника</span>
              <h3>Протекает соединение под раковиной</h3>
              <p>
                Определим источник течи и предложим ремонт или замену
                неисправного элемента.
              </p>
            </article>
            <article>
              <span>Электрика</span>
              <h3>Перестала работать розетка</h3>
              <p>
                Проверим питание, контакты и защитную автоматику перед заменой
                оборудования.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <h2>Часто задаваемые вопросы</h2>
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
            <h2>Нужен мастер?</h2>
            <p>Позвоните или отправьте задачу в WhatsApp.</p>
          </div>
          <div className="final-cta-actions">
            <TrackedLink
              href={siteConfig.phoneHref}
              event="call_click"
              label="final_cta"
              className="final-phone"
            >
              <Phone aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </TrackedLink>
            <TrackedLink
              href={getWhatsappUrl()}
              event="whatsapp_click"
              label="final_cta"
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

