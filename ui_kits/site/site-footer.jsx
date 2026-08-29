const { SiteFooter } = window.DesignSystem_03bc73;

const SECTIONS = [
  { label: 'Автоматизация процессов', href: '#automation' },
  { label: 'ИИ-решения', href: '#automation' },
  { label: 'Для федераций и НКО', href: '#automation' },
  { label: 'Сайты и SEO', href: '#sites' },
  { label: 'SEO и GEO-продвижение', href: '#sites' },
  { label: 'Сайты для банных комплексов', href: '#sites' },
  { label: 'Сайты для застройщиков', href: '#sites' },
  { label: 'Проекты', href: '#top' },
];

/* Экранная обвязка: данные сайта поверх системного SiteFooter. */
function AppFooter() {
  return (
    <SiteFooter
      brand="СИНГУЛЯРНОСТЬ"
      claim="Работаем с малым и средним бизнесом напрямую"
      sub="Автоматизация, ИИ и сайты — без аккаунт-менеджеров и посредников"
      sections={SECTIONS}
      email="info@singularity-ai.ru"
      phone="+7 (915) 486-75-75"
      copyright="© 2026 Сингулярность. Все права защищены."
      legalLabel="Политика конфиденциальности"
      legalHref="#privacy"
      style={{ marginTop: 'var(--space-20)' }}
    />
  );
}
Object.assign(window, { AppFooter });
