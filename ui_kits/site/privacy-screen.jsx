const { Section, Reveal, Icon, KeyPoint } = window.DesignSystem_03bc73;

/* Экран показывает раскладку длинного правового документа: оглавление,
   секции с иконкой и заголовком, ширина колонки 64rem. Тело разделов в
   UI-кит не переносится — юридический текст живёт в pages/PrivacyPolicy.tsx
   и меняется юристом, а не дизайн-системой. */
const SECTIONS = [
  { icon: 'check-circle', title: '1. Общие положения' },
  { icon: 'search', title: '2. Персональные данные, которые мы собираем' },
  { icon: 'lightbulb', title: '3. Цели и правовые основания обработки персональных данных' },
  { icon: 'wrench', title: '4. Способы и сроки обработки персональных данных' },
  { icon: 'zap', title: '5. Меры по защите персональных данных' },
  { icon: 'send', title: '6. Передача персональных данных третьим лицам' },
  { icon: 'cookie', title: '7. Использование файлов cookie и аналогичных технологий' },
  { icon: 'globe', title: '8. Ваши права в отношении персональных данных' },
  { icon: 'mail', title: '9. Контакты и обратная связь' },
  { icon: 'plus', title: '10. Изменения в Политике конфиденциальности' },
];

function PrivacyScreen() {
  return (
    <Section style={{ paddingTop: 'var(--space-16)' }}>
      <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--type-h1)', fontWeight: 'var(--weight-extrabold)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', lineHeight: 'var(--leading-tight)' }}>Политика конфиденциальности</h1>
        <p style={{ margin: '0 0 var(--space-12)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}><strong style={{ color: 'var(--text-secondary)' }}>Дата последнего обновления:</strong> 12 декабря 2025 г.</p>
        <nav aria-label="Разделы документа" style={{ marginBottom: 'var(--space-16)', padding: 'var(--card-pad)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-muted)' }}>
          <h2 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-accent)' }}>Содержание</h2>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-3)' }}>
            {SECTIONS.map((s, i) => (
              <li key={s.title}><a href={'#privacy-' + (i + 1)} className="ds-focusable" style={{ color: 'var(--text-secondary)', textDecoration: 'none', lineHeight: 'var(--leading-relaxed)' }}>{s.title}</a></li>
            ))}
          </ol>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i, 5) * 60}>
              <section id={'privacy-' + (i + 1)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
                  <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--surface-accent-soft)', color: 'var(--text-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={20} /></span>
                  <h2 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)' }}>{s.title}</h2>
                </div>
                <div style={{ paddingLeft: 60, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {[0, 1, 2].map((n) => (
                    <div key={n} aria-hidden="true" style={{ height: 12, borderRadius: 6, background: 'repeating-linear-gradient(135deg, var(--border-subtle) 0 6px, var(--surface-page) 6px 12px)', width: n === 2 ? '62%' : '100%' }} />
                  ))}
                  <p style={{ margin: 'var(--space-2) 0 0', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>текст раздела — pages/PrivacyPolicy.tsx</p>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
        <KeyPoint variant="card" style={{ marginTop: 'var(--space-16)' }}
          lead="Правовой текст в дизайн-систему не переносится"
          support="Здесь зафиксирована только раскладка: оглавление, секция с иконкой 44×44, колонка 64rem, вертикальный ритм 48px. Формулировки живут в репозитории и меняются юристом." />
      </div>
    </Section>
  );
}
Object.assign(window, { PrivacyScreen });
