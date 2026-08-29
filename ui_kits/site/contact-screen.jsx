const { Icon } = window.DesignSystem_03bc73;

const T = {
  heading: 'Расскажите, что у вас происходит',
  sub: '20 минут с нашей командой. Разберём задачу и честно скажем, можем ли мы помочь. Отвечаем в течение рабочего дня.',
  nameLabel: 'Как к вам обращаться?',
  namePlaceholder: 'Ваше имя',
  contactLabel: 'Telegram или номер телефона',
  contactPlaceholder: '@username или +7 (___) ___-__-__',
  contactHint: 'Укажите @username или номер',
  taskLabel: 'Что у вас за задача? (необязательно)',
  taskPlaceholder: 'Например: «Сайт есть, а заявок нет»',
  consentText: 'Даю согласие на обработку персональных данных в соответствии с',
  privacyLink: 'Политикой конфиденциальности',
  submit: 'Разобрать мою ситуацию',
  sending: 'Отправка...',
  thanksHeading: 'Спасибо!',
  thanksText: 'Заявка получена. Свяжемся с вами в течение рабочего дня.',
  contactsHeading: 'Или напишите напрямую',
  errName: 'Укажите имя',
  errContactRequired: 'Поле обязательно для заполнения',
  errContactFormat: 'Укажите @username или номер телефона',
  errConsent: 'Необходимо дать согласие на обработку данных',
};

const label = { display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' };
const hint = { margin: 'var(--space-2) 0 0', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' };
const errText = { margin: 'var(--space-2) 0 0', fontSize: 'var(--text-sm)', color: 'var(--danger-text)' };

function Field({ id, value, onChange, placeholder, error }) {
  return (
    <input id={id} name={id} type="text" value={value} onChange={onChange} placeholder={placeholder}
      aria-invalid={error ? 'true' : undefined} className="ds-focusable"
      style={{
        width: '100%', boxSizing: 'border-box', padding: '12px 16px',
        border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-default)'),
        background: 'var(--surface-raised)', color: 'var(--text-primary)',
        borderRadius: 'var(--radius-sm)', outline: 'none', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
        transition: 'border-color var(--duration-base)',
      }} />
  );
}

function ContactScreen() {
  const [form, setForm] = React.useState({ name: '', contact: '', task: '', consent: false });
  const [errors, setErrors] = React.useState({});
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const change = (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(Object.assign({}, form, { [e.target.name]: v }));
    if (errors[e.target.name]) setErrors(Object.assign({}, errors, { [e.target.name]: '' }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = T.errName;
    if (!form.contact.trim()) next.contact = T.errContactRequired;
    else {
      const tg = /^@?[a-zA-Z0-9_]{5,32}$/.test(form.contact.replace('@', ''));
      const ph = /^[\d\s\-+()]{10,}$/.test(form.contact);
      if (!tg && !ph) next.contact = T.errContactFormat;
    }
    if (!form.consent) next.consent = T.errConsent;
    setErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setForm({ name: '', contact: '', task: '', consent: false }); }, 900);
  };

  return (
    <div style={{ padding: 'var(--section-py-current) var(--gutter)', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-prose)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h1 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--type-inverse-heading)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)' }}>{T.heading}</h1>
          <p style={{ margin: '0 auto', fontSize: 'var(--type-hero-sub)', color: 'var(--text-secondary)', maxWidth: 'var(--container-narrow)' }}>{T.sub}</p>
        </div>

        {sent ? (
          <div style={{ background: 'var(--success-bg)', border: '2px solid var(--success-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--card-pad)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)' }}><Icon name="check-circle" size={64} color="var(--success-text)" /></div>
            <h3 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{T.thanksHeading}</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{T.thanksText}</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
              <label htmlFor="name" style={label}>{T.nameLabel}</label>
              <Field id="name" value={form.name} onChange={change} placeholder={T.namePlaceholder} error={errors.name} />
              {errors.name ? <p style={errText}>{errors.name}</p> : null}
            </div>
            <div>
              <label htmlFor="contact" style={label}>{T.contactLabel}</label>
              <Field id="contact" value={form.contact} onChange={change} placeholder={T.contactPlaceholder} error={errors.contact} />
              {errors.contact ? <p style={errText}>{errors.contact}</p> : <p style={hint}>{T.contactHint}</p>}
            </div>
            <div>
              <label htmlFor="task" style={label}>{T.taskLabel}</label>
              <Field id="task" value={form.task} onChange={change} placeholder={T.taskPlaceholder} />
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', cursor: 'pointer' }}>
                <input type="checkbox" name="consent" checked={form.consent} onChange={change} className="ds-focusable"
                  style={{ marginTop: 4, width: 16, height: 16, flexShrink: 0, accentColor: 'var(--accent)' }} />
                <span style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: errors.consent ? 'var(--danger-text)' : 'var(--text-secondary)' }}>
                  {T.consentText} <a href="#privacy" style={{ textDecoration: 'underline' }}>{T.privacyLink}</a>
                </span>
              </label>
              {errors.consent ? <p style={Object.assign({}, errText, { marginLeft: 28 })}>{errors.consent}</p> : null}
            </div>
            <button type="submit" disabled={sending} className="ds-focusable ds-pressable"
              style={{
                width: '100%', padding: '16px 32px', background: 'var(--accent)', color: 'var(--text-on-accent)',
                fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-base)',
                border: 'none', borderRadius: 'var(--radius-sm)', cursor: sending ? 'not-allowed' : 'pointer',
                opacity: sending ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
              }}>
              <Icon name="send" size={20} />
              <span>{sending ? T.sending : T.submit}</span>
            </button>
          </form>
        )}

        <div style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-12)', borderTop: '1px solid var(--border-subtle)' }}>
          <h2 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', textAlign: 'center' }}>{T.contactsHeading}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-8)' }}>
            {[{ icon: 'mail', text: 'info@singularity-ai.ru', href: 'mailto:info@singularity-ai.ru' }, { icon: 'phone', text: '+7 (915) 486-75-75', href: 'tel:+79154867575' }].map((x) => (
              <div key={x.icon} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ padding: 10, background: 'var(--surface-accent-soft)', borderRadius: 'var(--radius-sm)' }}><Icon name={x.icon} size={20} color="var(--text-accent)" /></div>
                <a href={x.href} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{x.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ContactScreen });
