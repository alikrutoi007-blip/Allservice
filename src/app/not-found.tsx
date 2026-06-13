import Link from "next/link";

export default function NotFound() {
  return (
    <section className="inner-page thank-you-page">
      <div className="container narrow-container">
        <span className="error-code">404</span>
        <h1>Страница не найдена</h1>
        <p>Возможно, адрес изменился или в ссылке есть ошибка.</p>
        <Link href="/" className="button button-primary">
          Перейти на главную
        </Link>
      </div>
    </section>
  );
}

