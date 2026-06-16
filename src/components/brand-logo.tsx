import Link from "next/link";
import { Wrench } from "lucide-react";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`}
      aria-label="MasterTut — на главную"
    >
      <span className="brand-mark" aria-hidden="true">
        <Wrench size={20} strokeWidth={2.4} />
      </span>
      <span>
        Master<span>Tut</span>
      </span>
    </Link>
  );
}
