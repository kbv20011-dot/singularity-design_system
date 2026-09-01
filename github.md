repo: kbv20011-dot/singular
branch: master

## Last sync

date: 2026-09-01T18:00:00Z

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
| components/cards/* | components/CaseCard.tsx, components/SolutionCard.tsx, data/solutions.ts |
| components/blocks/* | components/Hero.tsx, components/HeroShapes.tsx, components/Layout.tsx (шапка и подвал), components/ClientLogos.tsx, components/Faq.tsx, components/FinalCta.tsx, components/CookieConsent.tsx |
| ui_kits/site/index.html · Контакты (#contact) | pages/ContactForm.tsx, data/contacts.ts |
| ui_kits/site/index.html · Сотрудник (#team/:slug) | pages/EmployeePage.tsx, data/team.ts |
| tokens/* | styles.css, contexts/ThemeContext.tsx |
| templates/* | pages/SegmentPage.tsx, pages/ContactForm.tsx, data/cases.ts (шаблоны собраны из компонентов системы, не копия страниц) |
| readme.md · правила текста | docs/positioning-v1.md, docs/design-review-homepage-v1.md |

## Sync history

- 2026-08-14T20:05:00Z — токены, 20 компонентов, изображения, главная/контакты/сотрудник в UI-ките, `interactions.css` и `responsive.css`, аудит контраста.
- 2026-08-14T11:31:40Z — первое чтение репозитория: классификация Figma-фреймов, таблица конфликтов, вопросы пользователю.
