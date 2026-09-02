const { Hero, Faq, FinalCta, Section, Reveal, KeyPoint, CaseCard, SolutionCard, Icon } = window.DesignSystem_03bc73;
const IMG_A = '../../assets/images/';

const NORMAL = [
  { label: 'Как это ощущается', text: 'Что-то отнимает слишком много времени, конкуренты «уже что-то внедряют», а с чего начать — непонятно' },
  { label: 'Что видно снаружи', text: '«Менеджеры не успевают обрабатывать заявки» — это симптом. Причина может быть в маршрутизации, в форме на сайте или в том, что половина заявок нецелевые.' },
  { label: 'Почему начинаем не с этого', text: 'Автоматизировать симптом — потратить деньги и не решить задачу. Поэтому начинаем с разбора, а не с решения.' },
];
const PROCESS = [
  { title: 'Разговор, 20 минут', text: 'Консультант по стратегии и операционным моделям, не менеджер по продажам. Задача разговора — понять, что у вас происходит.' },
  { title: 'Разбор процессов', text: 'Где именно теряется время, что можно автоматизировать, а что дешевле починить организационно' },
  { title: 'Техзадание', text: 'Для сложных задач — сначала оно, потом смета. Так вы платите за то, что действительно нужно.' },
  { title: 'Разработка и поддержка', text: 'Full-stack разработка с опытом интеграций и CRM-систем. Поддержка после сдачи — тоже на нас.' },
];
const AUTOMATION_CASES = [
  { name: 'Верба — чат-боты', subtitle: 'Внутренняя автоматизация, банный комплекс', description: 'Чат-бот маршрутизирует заявки на нужного менеджера, отправляет уведомления и собирает аналитику в дашборд.', result: 'сделан, запущен, работает', url: 'https://myverba.ru/', urlLabel: 'myverba.ru' },
  { name: 'More House — CRM', subtitle: 'Операционный процесс, застройщик', description: 'Настроили путь лида в CRM с автоматическими уведомлениями о новых заявках.', result: 'лид → CRM с уведомлениями', url: 'https://morehouse.ru/', urlLabel: 'morehouse.ru' },
];
const TEAM_SHORT = [
  { name: 'Максим', text: 'Разработка и интеграции. Full-stack с опытом интеграций между сервисами, CRM-системами и автоматизации отчётности.' },
  { name: 'Богдан', text: 'Стратегический и операционный консалтинг. Ведёт разбор процессов' },
  { name: 'Савелий', text: 'Машинное обучение и ИИ-агенты. Подключается там, где задачу не закрыть обычной логикой' },
];
const TIMELINE = [
  { bold: 'Понятная задача', text: '— смета за 2–3 дня после разбора.' },
  { bold: 'Задача, которую нужно распутывать', text: '— сначала техзадание, потом смета. Согласование обычно занимает до двух недель.' },
  { bold: 'Небольшой проект', text: '— как правило, до двух месяцев на реализацию, в зависимости от объёма.' },
];
const DIRECTIONS = ['Обработка и маршрутизация заявок', 'Аналитика и дашборды', 'Интеграции между системами и CRM', 'Автоматизация отчётности', 'Внутренние сервисы и порталы', 'ИИ-агенты для рутинных задач'];
const SOLUTIONS_SHOWN = [
  { addressee: 'Отдел продаж', runningAt: ['Верба', 'More House'], title: 'Маршрутизация входящих заявок', short: 'Заявки с сайта, Авито и мессенджеров попадают в один поток. Система определяет продукт, регион и срочность, отсеивает спам и отдаёт заявку нужному менеджеру', accent: ['Авито'], metric: { before: '40 мин', after: '2–3 мин', label: 'время первого ответа' }, href: '#' },
  { addressee: 'Отдел продаж', title: 'Автозаполнение CRM по звонкам', short: 'После разговора система расшифровывает запись, достаёт договорённости, суммы и сроки, заполняет карточку сделки и ставит следующую задачу', accent: ['договорённости, суммы и сроки'], metric: { before: '40%', after: '95%', label: 'заполняемость карточек CRM' }, href: '#' },
  { addressee: 'Маркетинг', title: 'Автоматический монтаж коротких видео', short: 'Система находит в длинной записи законченные фрагменты, режет паузы, переводит в вертикальный формат, держит спикера в кадре и добавляет субтитры', accent: ['вертикальный формат'], href: '#' },
];
const FAQ_AUTOMATION = [
  { q: 'Сколько времени занимает внедрение?', a: 'Зависит от задачи: от нескольких дней для точечной автоматизации до нескольких недель для комплексной. Точный срок называем после разбора — универсального ответа нет.' },
  { q: 'Нужно ли нанимать программиста для поддержки?', a: 'Нет. Поддержку и доработки берём на себя — так это уже работает с действующими клиентами.' },
  { q: 'Безопасно ли доверять данные?', a: 'Данные обрабатываются в рамках вашего проекта, доступ есть только у команды, которая с ним работает. Если в вашей отрасли особые требования — обсуждаем до начала работ, а не после.' },
  { q: 'Что если нужно поменять логику после запуска?', a: 'Оформляем как отдельную задачу и оцениваем по той же матрице. Решение не застывает после сдачи — процессы меняются, это нормально.' },
];

const h2Style = { margin: '0 0 var(--space-10)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)', maxWidth: 'var(--container-narrow)' };
const bodyStyle = { color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' };
const numberStyle = { flexShrink: 0, width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: 'var(--accent)', color: 'var(--text-on-accent)', fontWeight: 'var(--weight-bold)', display: 'flex', alignItems: 'center', justifyContent: 'center' };

function AutomationScreen() {
  return (
    <>
      <Hero
        title="Автоматизация начинается не с технологии, а с того, где теряется время"
        subtitle="Большинство приходит с ощущением «надо что-то автоматизировать», а не с готовой задачей. Найти, где именно автоматизация окупится — это и есть наша работа."
        ctaLabel="Обсудить задачу" ctaHref="#contact"
        subText="20 минут с нашей командой. Если поймём, что не поможем — скажем сразу."
        bgImage={IMG_A + 'hero-bg.webp'}
        style={{ paddingTop: 'var(--space-8)' }}
      />
      <Section>
        <h2 style={h2Style}>С этого начинают почти все</h2>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
          {NORMAL.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <li style={{ height: '100%', background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)', padding: 'var(--card-pad)', border: '1px solid var(--border-subtle)', boxSizing: 'border-box' }}>
                <span style={Object.assign({}, numberStyle, { width: 36, height: 36, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' })}>{i + 1}</span>
                <p style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>{item.label}</p>
                <p style={Object.assign({ margin: 0 }, bodyStyle)}>{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section muted>
        <h2 style={h2Style}>Диагностика, потом решение — не наоборот</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
          {PROCESS.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
                <div style={numberStyle}>{i + 1}</div>
                <div>
                  <p style={{ margin: '0 0 4px', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{step.title}</p>
                  <p style={Object.assign({ margin: 0, maxWidth: 'var(--container-prose)' }, bodyStyle)}>{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <KeyPoint variant="card"
          lead="Если на разборе выяснится, что автоматизация не окупится — мы скажем это прямо и не возьмём проект"
          support="Это не благотворительность: браться за то, что не даст эффекта, дороже для репутации, чем отказаться" />
      </Section>
      <Section>
        <h2 style={h2Style}>Что у нас работает прямо сейчас</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', marginBottom: 'var(--space-10)' }}>
          {AUTOMATION_CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}><CaseCard variant="compact" {...c} /></Reveal>
          ))}
        </div>
        <h3 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)' }}>Команда</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
          {TEAM_SHORT.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div style={{ height: '100%', padding: 'var(--card-pad)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxSizing: 'border-box' }}>
                <p style={{ margin: '0 0 var(--space-2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{m.name}</p>
                <p style={Object.assign({ margin: 0, fontSize: 'var(--text-sm)' }, bodyStyle)}>{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <KeyPoint variant="rule"
          lead="Выше — решения, которые работают прямо сейчас. За ними опыт команды в разработке систем и разбор задачи до того, как вы заплатите."
          support="Сотен внедрений за плечами у нас нет, и мы не станем делать вид, что есть" />
        <p style={{ maxWidth: 'var(--container-prose)', marginTop: 'var(--space-8)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
          Значимее другое: <strong style={{ color: 'var(--text-primary)' }}>поддержка не заканчивается со сдачей проекта.</strong> Процессы меняются — решение приходится дорабатывать, и мы остаёмся.
        </p>
      </Section>
      <Section muted>
        <h2 style={h2Style}>Мы не исчезаем после сдачи</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 'var(--container-prose)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
          <p style={{ margin: 0 }}>Верба, банный комплекс — наш первый клиент. Мы до сих пор поддерживаем их сайт и консультируем по позиционированию. С More House, застройщиком энергоэффективных домов, — так же.</p>
          <p style={{ margin: 0 }}>Автоматизация тем более не бывает разовой: процессы меняются, и решение приходится дорабатывать. Мы к этому готовы и остаёмся на связи.</p>
        </div>
      </Section>
      <Section>
        <h2 style={h2Style}>Сколько времени это займёт на самом деле</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 'var(--container-prose)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-10)' }}>
          {TIMELINE.map((row, i) => (
            <Reveal key={row.bold} delay={i * 80}>
              <p style={{ margin: 0 }}><strong style={{ color: 'var(--text-primary)' }}>{row.bold}</strong> {row.text}</p>
            </Reveal>
          ))}
        </div>
        <KeyPoint variant="rule"
          lead="Смету считаем по матрице часов, а не на глаз"
          support="Поэтому не обещаем «расчёт за 15 минут»: быстрая оценка сложной задачи — это заложенный запас на всё непонятное. Вы либо переплатите, либо получите не то." />
      </Section>
      <Section muted>
        <h2 style={h2Style}>С чем к нам приходят</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d} delay={i * 50}>
              <span style={{ display: 'inline-block', padding: '12px 20px', background: 'var(--surface-raised)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)', fontWeight: 'var(--weight-medium)' }}>{d}</span>
            </Reveal>
          ))}
        </div>
        <p style={Object.assign({ maxWidth: 'var(--container-prose)', margin: '0 0 var(--space-8)' }, bodyStyle)}>Это направления, а не прайс-лист. Что нужно именно вам — станет понятно после разбора.</p>
        <KeyPoint variant="card"
          lead="Мы и сами работаем на ИИ внутри своих процессов"
          support="Поэтому делаем быстрее и дешевле классической студии — и берём проекты, за которые студия запросила бы бюджет другого порядка" />
      </Section>
      <Section>
        <h2 style={Object.assign({}, h2Style, { marginBottom: 'var(--space-4)' })}>Что мы можем построить</h2>
        <p style={{ maxWidth: 'var(--container-prose)', margin: '0 0 var(--space-3)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
          Задачи, с которыми к нам приходят чаще всего — под каждую собираем решение по вашему процессу
        </p>
        <p style={{ maxWidth: 'var(--container-prose)', margin: '0 0 var(--space-10)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
          Откройте любое: что происходит сейчас, что делает система и что меняется в работе
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          {SOLUTIONS_SHOWN.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}><SolutionCard {...s} /></Reveal>
          ))}
        </div>
        <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Icon name="lightbulb" size={16} />В проде карточек тринадцать, здесь три: с клиентами, с метрикой и без цифры.
        </p>
      </Section>
      <Faq heading="Частые вопросы" items={FAQ_AUTOMATION} idPrefix="automation" id="faq" />
      <FinalCta
        heading="Начнём с разговора"
        sub="20 минут с нашей командой. Расскажете, что происходит в бизнесе — разберём, есть ли здесь задача для автоматизации. Если нет, скажем честно."
        ctaLabel="Обсудить задачу" ctaHref="#contact"
        phone="+7 (915) 486-75-75" phoneHref="tel:+79154867575"
        telegram="https://t.me/singularity_ai" telegramLabel="Telegram" />
    </>
  );
}
Object.assign(window, { AutomationScreen });
