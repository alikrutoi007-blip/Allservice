import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Search,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Цены на ремонт и услуги мастеров в Алматы",
  description:
    "Как формируется стоимость ремонта и вызова мастера в Алматы. Цена согласовывается до начала работ.",
  alternates: { canonical: "/prices" },
};

export default function PricesPage() {
  return (
    <section className="inner-page">
      <div className="container narrow-container">
        <div className="inner-page-heading">
          <h1>Как формируется стоимость</h1>
          <p>
            Мы не публикуем заниженные цены «от», которые невозможно подтвердить
            без диагностики. Итоговая сумма согласовывается до начала работ.
          </p>
        </div>
        <div className="price-steps">
          <article>
            <Search aria-hidden="true" />
            <h2>1. Определяем причину</h2>
            <p>
              Одинаковый симптом может быть вызван разными неисправностями и
              требовать разных деталей.
            </p>
          </article>
          <article>
            <Calculator aria-hidden="true" />
            <h2>2. Составляем расчет</h2>
            <p>
              Мастер учитывает объем работы, необходимые материалы, модель и
              сложность доступа.
            </p>
          </article>
          <article>
            <Wrench aria-hidden="true" />
            <h2>3. Получаем согласие</h2>
            <p>
              Ремонт начинается только после вашего подтверждения состава и
              стоимости работ.
            </p>
          </article>
        </div>
        <div className="content-panel">
          <h2>Что уточнить у оператора</h2>
          <ul className="check-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Условия и стоимость выезда
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              Входит ли диагностика в стоимость ремонта
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              Возможные способы оплаты
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              Условия гарантии на работу и детали
            </li>
          </ul>
          <Link href="/#request" className="button button-primary">
            Узнать стоимость
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

