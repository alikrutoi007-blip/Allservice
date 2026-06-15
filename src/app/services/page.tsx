import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Ремонт техники в Алматы и области — все услуги",
  description:
    "Все услуги Allservice: ремонт и установка бытовой техники, холодильного, теплового, моечного и барного оборудования в Алматы и Алматинской области.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const homeServices = services.filter((service) => service.audience === "home");
  const businessServices = services.filter(
    (service) => service.audience === "business",
  );

  return (
    <>
      <section className="inner-page">
        <div className="container">
          <div className="inner-page-heading">
            <span className="section-label">Каталог Allservice</span>
            <h1>Ремонт и установка техники в Алматы и Алматинской области</h1>
            <p>
              Отдельные направления для дома и бизнеса. Каждая услуга ведет на
              профильную страницу с типичными неисправностями, видами работ и
              формой заявки.
            </p>
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container catalog-cluster">
          <div className="catalog-heading">
            <span className="section-label">Для дома</span>
            <h2>Бытовая техника</h2>
            <p>
              Диагностика, ремонт и установка техники в квартирах и частных
              домах.
            </p>
          </div>
          <div className="catalog-grid">
            {homeServices.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>

        <div className="container catalog-cluster">
          <div className="catalog-heading">
            <span className="section-label">Для бизнеса</span>
            <h2>Ресторанное и коммерческое оборудование</h2>
            <p>
              Холодильное, тепловое, моечное и барное оборудование ресторанов,
              кафе, магазинов и профессиональных кухонь.
            </p>
          </div>
          <div className="catalog-grid">
            {businessServices.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
