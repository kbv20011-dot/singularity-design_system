repo: kbv20011-dot/singularity-site
branch: dev — работа идёт здесь, master отстаёт

## Last sync

date: 2026-09-02T00:00:00Z

### Синхронизация 02.09.2026 — карточки каталога

Коммит `e15da6d` «Карточки каталога: плашка адресата и метрика вместо строки „Кому“».

- **`SolutionCard` перебран по коду.** Плашка адресата вместо строки «Кому», одна
  метрика внизу (`metricNote` там, где цифры нет), жирные акценты в описании по
  дословному совпадению, имена клиентов вместо статуса. Props сменились целиком:
  `audience`, `audienceLabel`, `status`, `statusLabel`, `statusHint` больше нет —
  проверка пропсов в `_adherence.oxlintrc.json` обновлена вместе с ними
- **Правила карточки решения записаны в `readme.md`** отдельным разделом: что на
  ней обязательно и почему статусов на ней нет
- **Экран `ui_kits/site/automation-screen.jsx` подтянут** под новую карточку: три
  решения с реальными данными из `data/solution-details.ts`, интро каталога
  разбито на две строки — «о чём каталог» и «как им пользоваться»
- **Два расхождения с прод-кодом оставлены сознательно.** Трекинг плашки адресата
  в проде 0.13em, в системе — токен `--tracking-widest` (0.1em); фиолетовый оттенок
  тени плашки при наведении (`shadow-violet-500/30`) токеном не описан и сведён
  к `--shadow-lg`
- **Не переносилось:** перестройка `CatalogRail` (ползунок каталога — часть
  страницы, а не компонент системы) и правки текста на `/automation` вне карточек

### Синхронизация 01.09.2026

Источник правды сместился: сайт ушёл вперёд, система догоняла его, а не наоборот.

- **Токены контраста исправлены по факту.** `--text-on-gradient-support` 0.85 → 0.95,
  `--text-on-gradient-eyebrow` violet-100 → violet-50. Прежний аудит считал по голому
  градиенту, а текст лежит внутри стеклянной панели — со стеклом старые значения
  норму не проходили. Не откатывать
- **GEO убрано** отовсюду: услуга не оказывается, маршрут `/sites/seo-geo` стал `/sites/seo`
- **Инвентарь пополнен девятью компонентами**, которых не было: ProcessTimeline,
  ComparisonRows, CauseReveal, TeamCard, CatalogRail, PageHero, SitesStage, DoCard, ChainSteps
- **Записаны шесть правил**, которые эти компоненты закрепили, и ярусы заголовков
- **Титул колоды пересобран** приёмом страницы `/sites`: фигура-предмет за краем,
  стеклянная карточка поверх, цвет через luminosity. Добавлен `assets/hero-figure.jpg`
- **Правило про цветную полосу слева** переписано под фактическое использование

### Обновлено ранее (15.08.2026)

- Экраны `/automation` и `/privacy` перенесены в UI-кит по `pages/AutomationPage.tsx` и `pages/PrivacyPolicy.tsx`.
- Шапка, подвал и переключатель темы вынесены из `components/Layout.tsx` в компоненты системы: `SiteHeader`, `SiteFooter`, `ThemeToggle`.
- Три провала контраста закрыты токенами (`--text-on-gradient-support`, `--text-on-gradient-eyebrow`, `--text-on-inverse-faint`); яркость градиентов снижена, прод-значение сохранено как `--gradient-hero-vivid`.
- Добавлены три шаблона в `templates/`: лендинг сегмента, страница кейса, контакты с формой.

## Screen map

| Экран проекта | Файлы репозитория |
|---|---|
| ui_kits/site/index.html · Главная | pages/HomePage.tsx, components/Layout.tsx, components/Hero.tsx, components/Section.tsx, components/Reveal.tsx, components/CaseCard.tsx, components/Faq.tsx, components/ClientLogos.tsx, data/cases.ts, data/team.ts, data/contacts.ts |
| ui_kits/site/automation.html · Автоматизация | pages/AutomationPage.tsx, data/solutions.ts, data/cases.ts, data/team.ts |
| ui_kits/site/privacy.html · Политика | pages/PrivacyPolicy.tsx |
| components/core/* | components/Button (инлайн в Layout/Hero/FinalCta), components/Accent.tsx, components/KeyPoint.tsx, components/AnimatedNumber.tsx, components/CipherText.tsx, components/Section.tsx, components/Reveal.tsx, contexts/ThemeContext.tsx |
| components/cards/* | components/CaseCard.tsx, components/SolutionCard.tsx, data/solutions.ts (поля `addressee` и `accent`), data/solution-details.ts (метрики) |
| components/blocks/* | components/Hero.tsx, components/HeroShapes.tsx, components/Layout.tsx (шапка и подвал), components/ClientLogos.tsx, components/Faq.tsx, components/FinalCta.tsx, components/CookieConsent.tsx |
| ui_kits/site/index.html · Контакты (#contact) | pages/ContactForm.tsx, data/contacts.ts |
| ui_kits/site/index.html · Сотрудник (#team/:slug) | pages/EmployeePage.tsx, data/team.ts |
| tokens/* | styles.css, contexts/ThemeContext.tsx |
| templates/* | pages/SegmentPage.tsx, pages/ContactForm.tsx, data/cases.ts (шаблоны собраны из компонентов системы, не копия страниц) |
| readme.md · правила текста | docs/positioning-v1.md, docs/design-review-homepage-v1.md |

## Sync history

- 2026-09-02T00:00:00Z — карточка решения по коммиту `e15da6d`: плашка адресата, метрика, акценты; статусы с карточки сняты.
- 2026-09-01T18:00:00Z — токены контраста пересчитаны со стеклом, GEO убрано, девять компонентов в инвентарь, ярусы заголовков, титул колоды.
- 2026-08-15T09:40:00Z — экраны `/automation` и `/privacy` в UI-кит, шапка/подвал/переключатель темы как компоненты, три шаблона.
- 2026-08-14T20:05:00Z — токены, 20 компонентов, изображения, главная/контакты/сотрудник в UI-ките, `interactions.css` и `responsive.css`, аудит контраста.
- 2026-08-14T11:31:40Z — первое чтение репозитория: классификация Figma-фреймов, таблица конфликтов, вопросы пользователю.
