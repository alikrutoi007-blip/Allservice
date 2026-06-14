import Link from "next/link";
import { Wrench } from "lucide-react";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`}
      aria-label="Allservice — на главную"
    >
      <span className="brand-mark" aria-hidden="true">
        <Wrench size={20} strokeWidth={2.4} />
      </span>
      <span>
        All<span>service</span>
      </span>
    </Link>
  );
}
