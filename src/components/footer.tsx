import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { services } from "@/data/services";
import { getWhatsappUrl, siteConfig } from "@/config/site";
import { TrackedLink } from "@/components/tracked-links";

export function Footer() {
  const homeServices = services.filter((service) => service.audience === "home");
  const businessServices = services.filter(
    (service) => service.audience === "business",
  );

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo inverse />
          <p>
            Ремонт и установка бытовой и коммерческой техники в Алматы и Алматинской области. Для
            квартир, частных домов, ресторанов, кафе и профессиональных кухонь.
          </p>
          <TrackedLink
            href={siteConfig.phoneHref}
            event="call_click"
            label="footer"
            className="footer-phone"
          >
            {siteConfig.phoneDisplay}
          </TrackedLink>
        </div>
        <div>
          <h2>Для дома</h2>
          <ul>
            {homeServices.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`}>{service.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Для бизнеса</h2>
          <ul>
            {businessServices.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`}>{service.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Компания</h2>
          <ul>
            <li>
              <Link href="/services">Все услуги</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
            <li>
              <TrackedLink
                href={getWhatsappUrl()}
                event="whatsapp_click"
                label="footer"
                target="_blank"
              >
                WhatsApp
              </TrackedLink>
            </li>
            <li>
              <Link href="/privacy">Конфиденциальность</Link>
            </li>
            <li>
              <Link href="/terms">Условия оказания услуг</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Allservice</span>
        <span>{siteConfig.serviceArea}</span>
      </div>
    </footer>
  );
}
