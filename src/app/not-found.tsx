import Link from "next/link";

export default function NotFound() {
  return (
    <section className="inner-page thank-you-page">
      <div className="container narrow-container">
        <span className="error-code">404</span>
        <h1>Страница не найдена</h1>
        <p>
          Проверьте адрес страницы или вернитесь на главную страницу Allservice.
        </p>
        <Link href="/" className="button button-primary">
          На главную
        </Link>
      </div>
    </section>
  );
}
