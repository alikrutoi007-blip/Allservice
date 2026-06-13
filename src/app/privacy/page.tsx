import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="inner-page legal-page">
      <div className="container narrow-container">
        <h1>Политика конфиденциальности</h1>
        <p>
          Эта страница описывает обработку данных посетителей сайта «Бәрі Жөн».
          Перед публикацией документа владелец бизнеса должен проверить текст с
          учетом своих реквизитов, CRM и подключенных рекламных систем.
        </p>
        <h2>Какие данные обрабатываются</h2>
        <p>
          При обращении пользователь может передать номер телефона, выбранную
          услугу, адрес страницы и рекламные параметры UTM/GCLID. Сообщение
          формируется в браузере и отправляется пользователем через WhatsApp.
        </p>
        <h2>Для чего используются данные</h2>
        <p>
          Для ответа на обращение, согласования услуги, анализа эффективности
          рекламы и улучшения сайта.
        </p>
        <h2>Аналитика</h2>
        <p>
          Google Tag Manager подключается только после согласия пользователя и
          только если владелец сайта настроил идентификатор GTM.
        </p>
        <h2>Контакты</h2>
        <p>
          По вопросам обработки данных:{" "}
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>.
        </p>
      </div>
    </article>
  );
}

