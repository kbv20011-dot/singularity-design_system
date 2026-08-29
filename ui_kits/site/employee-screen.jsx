const { Icon } = window.DesignSystem_03bc73;
const IMG = '../../assets/images/';

const EMPLOYEES = {
  bogdan: {
    name: 'Богдан Краснов',
    roleBadge: 'CO-FOUNDER & STRATEGIST',
    image: IMG + 'bogdan.webp',
    email: 'bogdan@singularity.ai',
    color: 'var(--person-bogdan)',
    soft: 'rgba(59,130,246,0.1)',
    description: 'Соединяю потребности бизнеса и возможности технологий. Моя задача — глубоко вникнуть в вашу работу и спроектировать решение, которое реально разгрузит команду, а не просто станет модной игрушкой. Подробнее обо мне и моих кейсах можно почитать на РБК.',
    responsibilities: [
      'Провожу интервью с заказчиком для выявления истинных потребностей',
      'Структурирую идеи клиента в понятный план действий',
      'Управляю ходом проекта: от идеи до сдачи готового агента',
      'Обеспечиваю связь между бизнесом и технической разработкой',
      'Помогаю адаптировать процессы компании под новые инструменты',
    ],
    skills: ['PROJECT MANAGEMENT', 'CUSTDEV', 'КОММУНИКАЦИЯ', 'АВТОМАТИЗАЦИЯ'],
  },
  maxim: {
    name: 'Максим Макеев',
    roleBadge: 'CO-FOUNDER & CTO',
    image: IMG + 'max.webp',
    email: 'maxim@singularity.ai',
    color: 'var(--person-maxim)',
    soft: 'rgba(6,182,212,0.1)',
    description: 'Превращаю бизнес-логику в стабильный и быстрый код. Моя задача — реализовать техническую часть так, чтобы система работала без сбоев, выдерживала нагрузки и требовала минимум ручного вмешательства.',
    responsibilities: [
      'Проектирую архитектуру сервисов',
      'Автоматизирую работу с данными и отчетностью, исключая рутину',
      'Настраиваю интеграции между различными сервисами и базами данных',
      'Руковожу технической командой',
      'Обеспечиваю техническую надежность и безопасность продукта',
    ],
    skills: ['FULL-STACK DEV', 'PYTHON/VUE.JS', 'HIGH-LOAD', 'SYSTEM ARCHITECTURE'],
  },
  savely: {
    name: 'Савелий',
    roleBadge: 'ML & AI ENGINEER',
    image: null,
    color: 'var(--person-savely)',
    soft: 'rgba(139,92,246,0.1)',
    description: 'Обучаю модели и собираю ИИ-агентов под конкретную задачу бизнеса, а не по шаблону. Моя часть работы начинается там, где заканчивается разбор процессов — превращаю понятную задачу в работающий сервис.',
    responsibilities: [
      'Обучение и дообучение моделей под задачу',
      'Проектирование ИИ-агентов и их логики',
      'Обработка естественного языка (NLP)',
      'Проектирование высоконагруженных сервисов',
    ],
    skills: ['MACHINE LEARNING', 'NLP', 'ИИ-АГЕНТЫ', 'HIGH-LOAD'],
  },
};

function EmployeeScreen({ slug }) {
  const e = EMPLOYEES[(slug || '').toLowerCase()];
  if (!e) {
    return (
      <div style={{ padding: 'var(--section-py-current) var(--gutter)', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>Сотрудник не найден</h1>
        <a href="#top">Вернуться на главную</a>
      </div>
    );
  }
  const heading = { margin: '0 0 var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' };
  const bar = { width: 4, height: 32, borderRadius: 4, background: e.soft, display: 'inline-block' };
  return (
    <div style={{ padding: 'var(--section-py-current) var(--gutter)' }}>
      <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto' }}>
        <a href="#team" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: 'var(--space-8)' }}>
          <Icon name="arrow-left" size={20} /><span>Вернуться к команде</span>
        </a>
        <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', padding: 'var(--card-pad)', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)', marginBottom: 'var(--space-12)' }}>
            <div style={{ width: 160, height: 160, borderRadius: 'var(--radius-pill)', overflow: 'hidden', border: '4px solid var(--border-default)', background: 'var(--surface-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {e.image ? <img src={e.image} alt={e.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <span style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--weight-bold)', color: e.color }}>{e.name[0]}</span>}
            </div>
            <div style={{ flex: '1 1 320px' }}>
              <h1 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{e.name}</h1>
              <p style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: e.color }}>{e.roleBadge}</p>
              <p style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--type-lead)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{e.description}</p>
              {e.email ? (
                <a href={'mailto:' + e.email} className="ds-focusable ds-pressable" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: '8px 16px', background: 'var(--accent)', color: 'var(--text-on-accent)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', boxShadow: 'var(--shadow-sm)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>
                  <Icon name="mail" size={16} /><span>Email</span>
                </a>
              ) : null}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr', gap: 'var(--space-8)' }}>
            <div>
              <h2 style={heading}><span style={bar} />Роль в проекте</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {e.responsibilities.map((r) => (
                  <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <Icon name="check-circle" size={20} color={e.color} style={{ marginTop: 2 }} />
                    <span style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={heading}><span style={bar} />Навыки и экспертиза</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                {e.skills.map((s) => (
                  <span key={s} style={{ padding: '8px 16px', background: e.soft, border: '1px solid ' + e.soft, borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: e.color }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { EmployeeScreen });
