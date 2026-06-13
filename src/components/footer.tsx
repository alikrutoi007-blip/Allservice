import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { services } from "@/data/services";
import { siteConfig, getWhatsappUrl } from "@/config/site";
import { TrackedLink } from "@/components/tracked-links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <BrandLogo inverse />
          <p className="footer-summary">
            Выездной сервис бытовых задач в Алматы. Стоимость согласовывается до
            начала работ.
          </p>
        </div>
        <div>
          <h2>Услуги</h2>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`}>{service.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Контакты</h2>
          <ul>
            <li>
              <TrackedLink
                href={siteConfig.phoneHref}
                event="call_click"
                label="footer"
              >
                {siteConfig.phoneDisplay}
              </TrackedLink>
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
            <li>{siteConfig.serviceArea}</li>
          </ul>
        </div>
        <div>
          <h2>Информация</h2>
          <ul>
            <li>
              <Link href="/contacts">О компании и контакты</Link>
            </li>
            <li>
              <Link href="/privacy">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="/terms">Условия оказания услуг</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Бәрі Жөн</span>
        <span>Выездная служба по Алматы</span>
      </div>
    </footer>
  );
}

