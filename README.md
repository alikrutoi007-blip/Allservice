# Allservice

Сайт сервисной компании в Алматы и Алматинской области: ремонт и установка бытовой техники,
премиальной техники и профессионального оборудования для
ресторанов, кафе, магазинов и коммерческих кухонь.

## Локальный запуск

```bash
npm install
npm run dev
```

Проверки:

```bash
npm run check
npm run build
npm run start
```

## Деплой на Railway

1. Загрузить проект в GitHub.
2. В Railway выбрать `New Project` → `Deploy from GitHub repo`.
3. Добавить собственный домен в `Settings` → `Networking`.
4. Установить переменные окружения:

```text
NEXT_PUBLIC_SITE_URL=https://ваш-домен.kz
NEXT_PUBLIC_CONTACT_EMAIL=ваша-почта
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

`NEXT_PUBLIC_GTM_ID` необязателен. Google Tag Manager загружается только после
согласия посетителя. Railway использует `railway.json`, проверяет `/health` и
запускает оптимизированную standalone-сборку Next.js.

## Перед рекламой

- заменить домен в `NEXT_PUBLIC_SITE_URL`;
- добавить реальные реквизиты исполнителя в контакты, политику и условия;
- подключить GTM, GA4 и конверсии Google Ads;
- подтвердить домен в Google Search Console;
- добавить компанию в Google Business Profile и 2GIS;
- заменить демонстрационные фотографии реальными фото мастеров и работ;
- проверить доступные районы, график, способы оплаты и гарантийные сроки.

Основной номер и WhatsApp: `+7 777 342 6900`.
