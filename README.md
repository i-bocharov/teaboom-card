# Teaboom — карточка товара

Адаптивная карточка товара для интернет-магазина [Teaboom.ru](https://teaboom.ru/product/ananasovij-ulun).

## ✨ Возможности

- отображение товара «Ананасовый улун»;
- выбор фасовки: 100 г, 500 г, 1000 г и 5000 г;
- динамическое обновление артикула, текущей и старой цены;
- визуальное состояние выбранной фасовки;
- интерактивная кнопка «В корзину»;
- увеличение изображения товара в модальном окне;
- адаптивная верстка для desktop, tablet и mobile;
- поддержка клавиатурной навигации и `focus-visible`;
- поддержка `prefers-reduced-motion`.

## 🛠 Стек

- HTML5
- SCSS
- TypeScript
- Vite
- Sass
- ESLint
- Stylelint
- Prettier

## 📥 Установка

Клонировать репозиторий:

```bash
git clone https://github.com/i-bocharov/teaboom-card.git
cd teaboom-card
```

Установить зависимости:

```bash
npm install
```

Запустить development-сервер:

```bash
npm run dev
```

После запуска приложение будет доступно по адресу, который выведет Vite.

## 📁 Структура проекта

```text
teaboom-card/
├── public/
├── src/
│   ├── assets/
│   │   └── ananasovij-ulun.jpg
│   ├── main.ts
│   └── style.scss
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── stylelint.config.mjs
└── tsconfig.json
```

## 🔍 Проверка кода

ESLint:

```bash
npm run lint
```

Stylelint:

```bash
npm run lint:styles
```

Проверка форматирования:

```bash
npm run format:check
```

Автоматическое форматирование:

```bash
npm run format
```

Production-сборка:

```bash
npm run build
```

Предпросмотр production-сборки:

```bash
npm run preview
```

## 📱 Адаптивность

Карточка адаптирована под основные разрешения:

- 1440 px — desktop;
- 768 px — tablet;
- 375 px — mobile.

Для построения layout используются CSS Grid и Flexbox без Bootstrap и других UI-фреймворков.

## ♿ Доступность

В проекте используются:

- семантические HTML5-элементы;
- корректная иерархия заголовков;
- кнопки для интерактивных элементов;
- `aria-label` и `aria-pressed`;
- видимое состояние `:focus-visible`;
- текстовое управление без зависимости от цвета;
- `prefers-reduced-motion` для пользователей, ограничивающих анимацию.

## 🔒 Безопасность

Данные вариантов товара хранятся в типизированной структуре TypeScript и выводятся через `textContent`. Проект не использует `innerHTML`, внешние скрипты или небезопасную обработку HTML.

## 📄 Лицензия

Проект создан в учебных целях.
