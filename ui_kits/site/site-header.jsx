const { SiteHeader } = window.DesignSystem_03bc73;

const NAV = [
  { label: 'АВТОМАТИЗАЦИЯ', href: '#automation' },
  { label: 'САЙТЫ', href: '#sites' },
  { label: 'КОМАНДА', href: '#team' },
  { label: 'КОНТАКТЫ', href: '#contact' },
];
const NAV_MOBILE = [
  { label: 'Автоматизация и AI', href: '#automation' },
  { label: 'Сайты и SEO', href: '#sites' },
  { label: 'Команда', href: '#team' },
  { label: 'Контакты', href: '#contact' },
];

/* Экранная обвязка: данные сайта поверх системного SiteHeader. */
function AppHeader(props) {
  return (
    <SiteHeader
      brand="СИНГУЛЯРНОСТЬ"
      tagline="Строим то, чего нет в коробке"
      nav={NAV}
      navMobile={NAV_MOBILE}
      cta="Разобрать задачу"
      ctaHref="#contact"
      {...props}
    />
  );
}
Object.assign(window, { AppHeader });
