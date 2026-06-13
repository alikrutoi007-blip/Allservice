import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги мастеров в Алматы",
  description:
    "Ремонт бытовой техники, сантехника, электрика и кондиционеров с выездом по Алматы.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <div className="inner-page-heading">
          <h1>Услуги мастеров в Алматы</h1>
          <p>
            Выберите задачу. На каждой странице указаны типовые неисправности,
            порядок работы и факторы стоимости.
          </p>
        </div>
        <div className="catalog-grid">
          {services.map((service) => (
            <article key={service.slug}>
              <div className="service-icon">
                <ServiceIcon name={service.icon} />
              </div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <Link href={`/${service.slug}`} className="inline-link">
                Открыть страницу
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

