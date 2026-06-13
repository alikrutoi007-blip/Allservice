import Link from "next/link";
import { Check, House } from "lucide-react";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`}
      aria-label="Бәрі Жөн — на главную"
    >
      <span className="brand-mark" aria-hidden="true">
        <House size={25} strokeWidth={2.2} />
        <Check className="brand-check" size={15} strokeWidth={3} />
      </span>
      <span>Бәрі Жөн</span>
    </Link>
  );
}

