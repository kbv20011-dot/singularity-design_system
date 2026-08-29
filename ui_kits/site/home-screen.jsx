const { Hero, ClientLogos, Faq, FinalCta, Section, Reveal, Metric, KeyPoint, CaseCard, Icon, Button } = window.DesignSystem_03bc73;
const IMG = '../../assets/images/';

const STATS = [
  { value: 46, prefix: '', suffix: '', label: 'регионов федерации — в одной системе', attribution: 'delivered' },
  { value: 150, prefix: '+', suffix: '%', label: 'органического трафика банному комплексу', attribution: 'delivered' },
  { value: 4, prefix: 'x', suffix: '', label: 'дольше посетители изучают сайт застройщика', attribution: 'delivered' },
];
const AUDIENCE = [
  'Работа устроена не как у всех — и вы уже поняли, что готовое не подходит',
  'Пробовали типовую систему и бросили: оказалось проще работать по-старому',
  'Отрасль такая, что программ под неё просто не написали',
  'Доросли до потолка: таблицы уже не тянут, а большая система избыточна и неподъёмна',
  'Чувствуете, что отстаёте, но не понимаете, с чего начать',
];
const ROUTES = [
  { image: IMG + 'icon-automation.webp', href: '#automation', title: 'Автоматизация процессов', text: 'Заявки теряются, данные лежат в пяти местах, отчёт собирается руками. Разбираем, где уходит время, и строим систему под ваш процесс.', cta: 'Разобрать процессы' },
  { image: IMG + 'icon-ai.webp', href: '#ai', title: 'ИИ-решения', text: 'Обработка обращений, распознавание документов, поиск по своей базе знаний. Там, где ИИ действительно снимает рутину, а не стоит для галочки.', cta: 'Посмотреть ИИ-решения' },
  { image: IMG + 'icon-sites.webp', href: '#sites', title: 'Сайты и SEO', text: 'Сайт как часть системы, а не как картинка: чтобы вас находили в поиске и чтобы заявка доходила до CRM, а не терялась в почте', cta: 'Получить разбор сайта' },
];
const BELIEF = [
  { icon: IMG + 'belief-offshelf.png', label: 'Готовое решение', title: 'Даёт равенство', text: 'Его купит любой конкурент — до вас, вместе с вами и после вас. У всех получается одинаково.' },
  { icon: IMG + 'belief-custom.png', label: 'Своё решение', title: 'Даёт преимущество', text: 'Сделано под ваш способ работать, ваши правила, вашу специфику. Скопировать нельзя.' },
];
const CASES = [
  { name: 'Верба', subtitle: 'Банный комплекс, Одинцово', description: 'Сделали сайт, настроили поисковое продвижение, собрали контентную стратегию и структуру страниц под форматы отдыха и программы.', result: '+150% органического трафика', note: 'Первый клиент агентства — работаем до сих пор.', url: 'https://myverba.ru/', urlLabel: 'myverba.ru', screenshot: IMG + 'cases/verba.webp' },
  { name: 'More House', subtitle: 'Энергоэффективные дома', description: 'Сделали сайт, поисковое продвижение и архитектуру страниц под проекты домов и технологии, работали с контентом.', result: 'в 4 раза больше времени на сайте', url: 'https://morehouse.ru/', urlLabel: 'morehouse.ru', screenshot: IMG + 'cases/more-house.webp' },
  { name: 'ФХГАСР', subtitle: 'Федерация адаптивной художественной гимнастики России', description: 'Провели полную цифровизацию процессов федерации — от проведения занятий до соревнований: объединили группы из 46 регионов в единую систему.', result: '46 регионов в единой системе', url: 'https://vfrgas.ru/', urlLabel: 'vfrgas.ru', screenshot: IMG + 'cases/vfrgas.webp' },
  { name: 'Верба — чат-боты', subtitle: 'Внутренняя автоматизация, банный комплекс', description: 'Чат-бот маршрутизирует заявки на нужного менеджера, отправляет уведомления и собирает аналитику в дашборд.', result: 'сделан, запущен, работает', url: 'https://myverba.ru/', urlLabel: 'myverba.ru' },
  { name: 'More House — CRM', subtitle: 'Операционный процесс, застройщик', description: 'Настроили путь лида в CRM с автоматическими уведомлениями о новых заявках.', result: 'лид → CRM с уведомлениями', url: 'https://morehouse.ru/', urlLabel: 'morehouse.ru' },
  { name: 'Цветочные магазины', subtitle: 'Платформа для роста трафика', description: 'Разрабатываем единую платформу для увеличения трафика малых цветочных магазинов.', result: 'в работе' },
];
const STEPS = [
  { icon: IMG + 'step-talk.png', title: 'Разговор, 20 минут', text: 'Слушаем задачу. Без презентаций и обязательств с вашей стороны.' },
  { icon: IMG + 'step-review.png', title: 'Разбор процесса', text: 'Смотрим, как работа устроена сейчас и где именно уходит время' },
  { icon: IMG + 'step-estimate.png', title: 'Честный ответ и смета', text: 'Понятная задача — смета за 2–3 дня. Сложная — сначала короткое техзадание. Если не окупится, скажем сразу.' },
  { icon: IMG + 'step-delivery.png', title: 'Работа и передача', text: 'Приёмка — когда ваш человек сделал в системе реальную работу. Код, документация и доступы остаются у вас.' },
];
const COMPARISON = [
  { icon: IMG + 'vs-freelancer.png', alt: 'Фрилансер', text: 'Сайт отдельно, реклама отдельно, CRM отдельно — и никто не отвечает за то, что не работает вместе' },
  { icon: IMG + 'vs-agency.png', alt: 'Крупная студия', text: 'Платите за менеджеров и офис — до вашего проекта руки доходят в последнюю очередь' },
  { icon: IMG + 'vs-employee.png', alt: 'Сотрудник в штат', text: 'Зарплата, налоги, отпуск, риск, что уйдёт — против системы, которая не уходит в отпуск' },
  { icon: IMG + 'vs-nothing.png', alt: 'Ничего не менять', text: 'Заявки продолжают теряться. Конкуренты — не продолжают.' },
];
const PILLARS = [
  { icon: IMG + 'pillar-talk.png', title: 'Вы говорите с теми, кто будет делать работу', text: 'Первый разговор — с нашей командой, а не с аккаунт-менеджером, который передаст задачу дальше. Между вами и теми, кто пишет код, нет посредников.' },
  { icon: null, title: 'Мы не пропадаем после сдачи — и это проверяемо', text: 'Клиенты, с которыми мы начинали, работают с нами до сих пор', linkLabel: 'Проверить на странице проектов' },
  { icon: null, title: 'Скажем «нет», если не сработает', text: 'Не берём проект, если не уверены, что он даст эффект. Потерять сделку честнее, чем продать ненужное.' },
];
const NOT_FOR = [
  { lead: 'Задачу закрывает готовый сервис', text: 'Скажем об этом и подскажем, куда обратиться, — вместо того чтобы делать сложнее ради своего чека' },
  { lead: 'Нужна только картинка', text: 'Мы отвечаем за то, что сайт делает: заявки доходят, страницы находятся в поиске. Айдентика и визуальный образ — это к дизайн-студии' },
  { lead: 'Решает только цифра в смете', text: 'Считаем по матрице часов и показываем расчёт построчно. Если сравнение идёт по итоговой сумме без того, что за ней, — не сойдёмся' },
  { lead: 'Со стороны компании некому участвовать', text: 'Нужен человек, который знает процесс и принимает решения. Иначе обе стороны потеряют время.' },
  { lead: 'Деньги нужны в понедельник', text: 'Разработка занимает недели и месяцы. Сначала решайте кассу — мы подождём.' },
];
const TEAM = [
  { slug: 'bogdan', name: 'Богдан Краснов', role: 'CO-FOUNDER & STRATEGIST', image: IMG + 'bogdan.webp', color: 'var(--person-bogdan)', points: ['Ведёт первый разговор и переводит задачу бизнеса в понятный план', 'Считает, окупится ли решение — до того как вы подпишете договор', 'Держит связь между бизнесом и технической частью'] },
  { slug: 'maxim', name: 'Максим Макеев', role: 'CO-FOUNDER & CTO', image: IMG + 'max.webp', color: 'var(--person-maxim)', points: ['Отвечает за архитектуру и техническую надёжность', 'Настраивает интеграции между сервисами и базами данных', 'На связи после сдачи — не только на этапе разработки'] },
  { slug: 'savely', name: 'Савелий', role: 'ML & AI ENGINEER', image: null, color: 'var(--person-savely)', points: ['Обучает модели и собирает ИИ-агентов под конкретную задачу', 'Работает там, где ИИ реально снимает рутину, не для галочки', 'Обработка естественного языка, высоконагруженные сервисы'] },
];
const FAQ = [
  { q: 'Сколько времени занимает разработка?', a: 'Зависит от объёма. Понятная задача — смета за 2–3 дня после разбора. Сложная система — сначала короткое техзадание, потом смета; согласование обычно занимает до двух недель. Мы не называем сроков, которых не проверяли: быстрая оценка сложной задачи означает, что в неё заложили запас на всё непонятное — то есть вы переплатите или получите не то.' },
  { q: 'Нужно ли нанимать программиста, чтобы это поддерживать?', a: 'Нет, поддержку и доработки ведём мы. При этом код, документация и доступы принадлежат вам — вы можете в любой момент передать проект другим подрядчикам. Иначе это не партнёрство, а привязка.' },
  { q: 'ИИ заменит моих сотрудников?', a: 'Нет, и мы это не продаём. ИИ забирает повторяющуюся работу: разбор однотипных обращений, перенос данных между системами, заполнение форм. Люди остаются там, где нужно решение и разговор. Если в вашей задаче ИИ ничего не снимает, мы скажем это прямо, а не станем встраивать его для галочки.' },
  { q: 'Насколько безопасно отдавать вам данные?', a: 'Подписываем NDA. Доступы выдаём под конкретную задачу и отзываем после сдачи. Где данные чувствительные, разворачиваем решение в вашем контуре, чтобы они не уходили наружу. Конкретный вариант зависит от задачи — обсуждаем до начала работ, а не после.' },
  { q: 'Что если процесс изменится и логику нужно будет переделать?', a: 'Это нормально, процессы меняются. Правки оформляем отдельной задачей и оцениваем по той же матрице часов, что и основную работу. Система не застывает после сдачи.' },
];

const h2 = { margin: '0 0 var(--space-4)', fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', lineHeight: 'var(--leading-tight)' };
const lead = { margin: '0 0 var(--space-10)', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: 'var(--container-prose)' };
const grid = (cols) => ({ display: 'grid', gridTemplateColumns: 'repeat(' + cols + ', minmax(0, 1fr))', gap: 'var(--space-6)' });

function RouteCard({ route }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={route.href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'var(--space-8)', background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)', border: '1px solid ' + (hover ? 'var(--border-accent-soft)' : 'var(--border-subtle)'), boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', transform: hover ? 'translateY(var(--lift))' : 'none', transition: 'all var(--duration-base)', textDecoration: 'none' }}>
      <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-6)', transform: hover ? 'scale(var(--zoom-icon))' : 'none', transition: 'transform var(--duration-base)' }}>
        <img src={route.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3 style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{route.title}</h3>
      <p style={{ margin: '0 0 var(--space-6)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', flexGrow: 1 }}>{route.text}</p>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', fontSize: 'var(--text-sm)' }}>
        {route.cta}<Icon name="arrow-right" size={16} />
      </span>
    </a>
  );
}

function HomeScreen() {
  const [wide, setWide] = React.useState(window.innerWidth >= 900);
  React.useEffect(() => {
    const on = () => setWide(window.innerWidth >= 900);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const cols = (n) => (wide ? n : 1);
  return (
    <div id="top" style={{ paddingBottom: 'var(--space-20)' }}>
      <div style={{ paddingTop: 'var(--space-16)' }}>
        <Hero badge="Отвечаем в течение рабочего дня"
          title="Готовые системы рассчитаны на типовой бизнес. Ваш — не такой."
          subtitle="Разбираемся, как устроена ваша работа, и строим под неё: автоматизацию процессов, ИИ-инструменты, сайты. Скажем прямо, если задача закрывается готовым сервисом за десять тысяч."
          ctaLabel="Получить разбор задачи" ctaHref="#contact" bgImage={IMG + 'hero-visual.webp'} style={{ marginBottom: 'var(--space-16)' }} />
      </div>

      <ClientLogos logos={[
        { alt: 'Верба', mask: IMG + 'clients/verba.svg', color: 'var(--client-verba-brown)', width: 111 },
        { alt: 'More House', src: IMG + 'clients/morehouse.png' },
        { alt: 'ФХГАСР', src: IMG + 'clients/vfrgas.svg' },
      ]} />

      <section style={{ maxWidth: 'var(--container-text)', margin: '0 auto', padding: '0 var(--gutter)', marginBottom: 'var(--space-24)' }}>
        <div style={grid(cols(3))}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <Metric value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} attribution={s.attribution} />
            </Reveal>
          ))}
        </div>
      </section>

      <Section muted>
        <h2 style={h2}>Кто наш клиент</h2>
        <p style={lead}>Общий признак один: вы уже знаете, что у вас не как у всех. Убеждать в этом не нужно — нужно показать, что решение существует и стоит подъёмных денег.</p>
        <ul style={Object.assign({ listStyle: 'none', margin: 0, padding: 0 }, grid(cols(2)), { gap: 'var(--space-4)' })}>
          {AUDIENCE.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', border: '1px solid var(--border-subtle)', height: '100%' }}>
                <Icon name="check-circle" size={20} color="var(--text-accent)" style={{ marginTop: 2 }} />
                <span style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="automation">
        <h2 style={h2}>С чего начать</h2>
        <p style={lead}>Три направления. Что из этого ваше — станет понятно после разбора.</p>
        <div style={grid(cols(3))}>
          {ROUTES.map((r, i) => <Reveal key={r.title} delay={i * 100}><RouteCard route={r} /></Reveal>)}
        </div>
      </Section>

      <Section muted>
        <p style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>Во что мы верим</p>
        <h2 style={Object.assign({}, h2, { fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-8)', maxWidth: 'var(--container-prose)' })}>Выигрывает тот, чью технологию нельзя скопировать</h2>
        <div style={Object.assign({}, grid(cols(2)), { marginBottom: 'var(--space-8)' })}>
          {BELIEF.map((b, i) => (
            <Reveal key={b.label} delay={i * 100}>
              <div style={{ height: '100%', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', background: i === 0 ? 'var(--surface-raised)' : 'var(--surface-accent-soft)', border: '1px solid ' + (i === 0 ? 'var(--border-default)' : 'var(--border-accent-soft)') }}>
                <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--gray-900)', marginBottom: 'var(--space-5)' }}>
                  <img src={b.icon} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: i === 0 ? 'var(--text-faint)' : 'var(--text-accent)' }}>{b.label}</p>
                <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{b.title}</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p style={Object.assign({}, lead, { marginBottom: 'var(--space-12)' })}>Раньше своё стоило как годовой бюджет небольшой компании. Сегодня — нет. Это единственное изменение, но оно меняет всё.</p>
        <KeyPoint variant="rule" eyebrow="Наше достойное дело" lead="Открывать возможности каждому — и превращать их в то, чего нет больше ни у кого" />
      </Section>

      <Section id="sites">
        <h2 style={Object.assign({}, h2, { textAlign: 'center', marginBottom: 'var(--space-12)' })}>Что уже сделали</h2>
        <div style={Object.assign({}, grid(cols(3)), { gap: 'var(--space-8)' })}>
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i, 3) * 100}>
              <CaseCard variant="compact" {...c} />
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          <Button variant="quiet" icon="arrow-right" href="#cases">Смотреть все проекты</Button>
        </div>
      </Section>

      <Section muted>
        <h2 style={h2}>Диагностика, потом решение — не наоборот</h2>
        <p style={Object.assign({}, lead, { marginBottom: 'var(--space-12)' })}>Автоматизировать беспорядок бессмысленно — получится быстрый беспорядок. Если процесс не описан, начинаем с процесса.</p>
        <div style={Object.assign({}, grid(cols(4)), { gap: 'var(--space-8)' })}>
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <img src={s.icon} alt="" loading="lazy" style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 'var(--space-4)' }} />
              <p style={{ margin: '0 0 4px', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{s.title}</p>
              <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <h2 style={Object.assign({}, h2, { textAlign: 'center', marginBottom: 'var(--space-10)' })}>С чем вы это сравниваете</h2>
        <Reveal style={{ overflowX: 'auto', marginBottom: 'var(--space-16)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={row.alt} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
                  <td style={{ padding: 'var(--space-5) var(--space-6) var(--space-5) 0', verticalAlign: 'top', width: 224 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>
                      <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'var(--gray-900)', flexShrink: 0 }}>
                        <img src={row.icon} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </span>
                      {row.alt}
                    </span>
                  </td>
                  <td style={{ padding: 'var(--space-5) 0', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{row.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <h3 style={{ margin: '0 0 var(--space-10)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', textAlign: 'center' }}>Три вещи, на которых всё держится</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} style={{ display: 'flex', gap: 'var(--space-5)' }}>
              {p.icon ? (
                <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--gray-900)', flexShrink: 0 }}>
                  <img src={p.icon} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </span>
              ) : <Icon name="check-circle" size={24} color="var(--accent)" style={{ marginTop: 4 }} />}
              <div>
                <p style={{ margin: '0 0 4px', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>{p.title}</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '65ch' }}>
                  {p.text}{p.linkLabel ? <> <a href="#cases" style={{ fontWeight: 'var(--weight-semibold)' }}>{p.linkLabel}</a></> : null}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <h2 style={h2}>Кому мы не нужны</h2>
        <p style={lead}>Позиционирование определяется не тем, кого мы берём, а тем, кому говорим «нет»</p>
        <ul style={Object.assign({ listStyle: 'none', margin: 0, padding: 0 }, grid(cols(2)), { gap: 'var(--space-4)' })}>
          {NOT_FOR.map((item, i) => (
            <Reveal key={item.lead} delay={i * 60}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', height: '100%', background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', border: '1px solid var(--border-subtle)' }}>
                <Icon name="x" size={20} color="var(--text-faint)" style={{ marginTop: 4 }} />
                <div>
                  <p style={{ margin: '0 0 4px', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{item.lead}</p>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{item.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <section id="team" style={{ padding: 'var(--section-py-inverse) 0', background: 'var(--surface-inverse)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + IMG + 'team-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <h2 style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-5xl)', fontWeight: 'var(--weight-bold)', color: 'var(--white)', textAlign: 'center', letterSpacing: 'var(--tracking-tight)' }}>Команда, которая ведёт ваш проект</h2>
          <p style={{ margin: '0 auto var(--space-20)', color: 'var(--gray-400)', textAlign: 'center', maxWidth: 'var(--container-narrow)' }}>Вы работаете напрямую с теми, кто делает работу — без посредников между вами и командой</p>
          <div style={grid(cols(3))}>
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <a href={'#team/' + m.slug} className="ds-focusable" style={{ display: 'block', textDecoration: 'none', background: 'var(--surface-inverse-card)', border: '1px solid var(--gray-800)', borderRadius: 'var(--radius-xl)', padding: 'var(--card-pad)', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', marginBottom: 'var(--space-8)' }}>
                    <div style={{ width: 80, height: 80, borderRadius: 'var(--radius-pill)', overflow: 'hidden', filter: 'grayscale(1)', border: '2px solid var(--gray-800)', background: 'var(--gray-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {m.image ? <img src={m.image} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--gray-500)' }}>{m.name[0]}</span>}
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 4px', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--white)' }}>{m.name}</h3>
                      <p style={{ margin: 0, fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: m.color }}>{m.role}</p>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {m.points.map((p) => (
                      <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', color: 'var(--gray-300)', fontSize: 'var(--text-sm)' }}>
                        <Icon name="check-circle" size={16} color={m.color} style={{ marginTop: 2 }} />
                        <span style={{ lineHeight: 'var(--leading-relaxed)' }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq heading="Частые вопросы" items={FAQ} idPrefix="home" id="faq" />

      <div id="contact">
        <FinalCta heading="Расскажите, что у вас происходит"
          sub="20 минут с нашей командой. Разберём задачу и честно скажем, можем ли мы помочь. Отвечаем в течение рабочего дня."
          ctaLabel="Получить разбор задачи" ctaHref="#contact"
          phone="+7 (915) 486-75-75" phoneHref="tel:+79154867575"
          telegram="https://t.me/singularity_ai" telegramLabel="Написать в Telegram" />
      </div>
    </div>
  );
}
Object.assign(window, { HomeScreen, RouteCard });
