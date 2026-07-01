# АЛМАЗ — алмазная резка бетона (Бишкек)

Лендинг компании по алмазной резке и бурению бетона в Бишкеке. React + Vite, мультистраничный SPA (`react-router-dom`), форма заявки на смету через [Web3Forms](https://web3forms.com).

## Команды

```bash
npm install      # установка зависимостей
npm run dev      # локальная разработка (http://localhost:5173)
npm run build    # production-сборка в dist/
npm run preview  # предпросмотр собранной версии
npm run lint     # ESLint
```

## Где что менять

- **Контакты, услуги, проекты, FAQ, бренд** — `src/data/siteData.js` (единый источник данных).
- **Форма заявки** — `src/components/EstimateForm.jsx`. Ключ Web3Forms задаётся в `WEB3FORMS_ACCESS_KEY`; заявки приходят на email из настроек ключа. Есть honeypot-защита от спама.
- **SEO мета по страницам** — хук `src/hooks/useSeo.js`, вызывается в каждой странице.
- **Базовые мета / Open Graph / структурированные данные** — `index.html`.
- **Стили** — `src/index.css` (mobile-first, брейкпоинты 540 / 768 / 1024px).

## Деплой

Статический сайт. Для корректной работы клиентских маршрутов на статических хостингах добавлены:

- `public/_redirects` — Netlify / Cloudflare Pages.
- `vercel.json` — Vercel.

Также в `public/`: `robots.txt`, `sitemap.xml`, `favicon.svg`.

> ⚠️ Перед запуском замените домен-заглушку `https://diamondcut.kg` в `index.html`, `src/hooks/useSeo.js` (если используется), `robots.txt`, `sitemap.xml` и `siteData.js` (`SITE_URL`) на реальный, и добавьте `public/og-image.jpg` (картинка-превью для соцсетей/мессенджеров).
