import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card-icon">
        <ServiceIcon name={service.icon} size={25} />
      </div>
      <div>
        <h3>{service.shortName}</h3>
        <p>{service.intro}</p>
      </div>
      <Link href={`/${service.slug}`} aria-label={`Подробнее: ${service.name}`}>
        <ArrowUpRight size={19} aria-hidden="true" />
      </Link>
    </article>
  );
}
