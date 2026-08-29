/* @ds-bundle: {"format":4,"namespace":"DesignSystem_03bc73","components":[{"name":"ClientLogos","sourcePath":"components/blocks/ClientLogos.jsx"},{"name":"CookieConsent","sourcePath":"components/blocks/CookieConsent.jsx"},{"name":"Faq","sourcePath":"components/blocks/Faq.jsx"},{"name":"FinalCta","sourcePath":"components/blocks/FinalCta.jsx"},{"name":"GradientBackdrop","sourcePath":"components/blocks/GradientBackdrop.jsx"},{"name":"Hero","sourcePath":"components/blocks/Hero.jsx"},{"name":"HeroShapes","sourcePath":"components/blocks/HeroShapes.jsx"},{"name":"SiteFooter","sourcePath":"components/blocks/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/blocks/SiteHeader.jsx"},{"name":"Timeline","sourcePath":"components/blocks/Timeline.jsx"},{"name":"CaseCard","sourcePath":"components/cards/CaseCard.jsx"},{"name":"SolutionCard","sourcePath":"components/cards/SolutionCard.jsx"},{"name":"Accent","sourcePath":"components/core/Accent.jsx"},{"name":"AnimatedNumber","sourcePath":"components/core/AnimatedNumber.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CipherText","sourcePath":"components/core/CipherText.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"KeyPoint","sourcePath":"components/core/KeyPoint.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Metric","sourcePath":"components/core/Metric.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"Reveal","sourcePath":"components/core/Reveal.jsx"},{"name":"ScrollProgress","sourcePath":"components/core/ScrollProgress.jsx"},{"name":"Section","sourcePath":"components/core/Section.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"IconlyGlassArrow","sourcePath":"components/illustrations/IconlyGlassArrow.jsx"},{"name":"IconlyGlassBag","sourcePath":"components/illustrations/IconlyGlassBag.jsx"},{"name":"IconlyGlassCalendar","sourcePath":"components/illustrations/IconlyGlassCalendar.jsx"},{"name":"IconlyGlassCamera","sourcePath":"components/illustrations/IconlyGlassCamera.jsx"},{"name":"IconlyGlassDiscount","sourcePath":"components/illustrations/IconlyGlassDiscount.jsx"},{"name":"IconlyGlassFilter","sourcePath":"components/illustrations/IconlyGlassFilter.jsx"},{"name":"IconlyGlassFolder","sourcePath":"components/illustrations/IconlyGlassFolder.jsx"},{"name":"IconlyGlassGame","sourcePath":"components/illustrations/IconlyGlassGame.jsx"},{"name":"IconlyGlassInfo","sourcePath":"components/illustrations/IconlyGlassInfo.jsx"},{"name":"IconlyGlassMenu","sourcePath":"components/illustrations/IconlyGlassMenu.jsx"},{"name":"IconlyGlassPaper","sourcePath":"components/illustrations/IconlyGlassPaper.jsx"},{"name":"IconlyGlassProfile","sourcePath":"components/illustrations/IconlyGlassProfile.jsx"}],"sourceHashes":{"components/blocks/ClientLogos.jsx":"ef4e3f4da524","components/blocks/CookieConsent.jsx":"26e78977af66","components/blocks/Faq.jsx":"f5761d6c88a9","components/blocks/FinalCta.jsx":"4f71a3a9a62d","components/blocks/GradientBackdrop.jsx":"13b0174289d6","components/blocks/Hero.jsx":"6ea782dfaf68","components/blocks/HeroShapes.jsx":"c5ea8651f79d","components/blocks/SiteFooter.jsx":"4f72983f5f9e","components/blocks/SiteHeader.jsx":"f20a098fc392","components/blocks/Timeline.jsx":"be890649fff5","components/cards/CaseCard.jsx":"1fadbe5d0cc1","components/cards/SolutionCard.jsx":"3cf0141e26e0","components/core/Accent.jsx":"e970ad39f4c6","components/core/AnimatedNumber.jsx":"5d3b82729aaf","components/core/Badge.jsx":"53a1c83c8d74","components/core/Button.jsx":"d54ec208dfa1","components/core/CipherText.jsx":"d34a6656a259","components/core/Icon.jsx":"aa735f558574","components/core/IconButton.jsx":"a21083dd42a1","components/core/KeyPoint.jsx":"34af975e2f54","components/core/Logo.jsx":"d86dd2b89879","components/core/Metric.jsx":"e8911ab5515d","components/core/Quote.jsx":"a996e939568a","components/core/Reveal.jsx":"b7c039e7d51c","components/core/ScrollProgress.jsx":"15fa61d3eda1","components/core/Section.jsx":"0cf2a7b082bc","components/core/StatusBadge.jsx":"344b4d762461","components/core/ThemeToggle.jsx":"74c23d8a2c16","components/illustrations/IconlyGlassArrow.jsx":"600dbec4d6d7","components/illustrations/IconlyGlassBag.jsx":"b30e3e080a42","components/illustrations/IconlyGlassCalendar.jsx":"3f8e05897fe5","components/illustrations/IconlyGlassCamera.jsx":"3b2d8415e0eb","components/illustrations/IconlyGlassDiscount.jsx":"830aab614e34","components/illustrations/IconlyGlassFilter.jsx":"26d9edcdac54","components/illustrations/IconlyGlassFolder.jsx":"1c70e9b8c34b","components/illustrations/IconlyGlassGame.jsx":"68dcc29cbda1","components/illustrations/IconlyGlassInfo.jsx":"32e6bc7a9eee","components/illustrations/IconlyGlassMenu.jsx":"a8e47b12950d","components/illustrations/IconlyGlassPaper.jsx":"996c3ec23cc6","components/illustrations/IconlyGlassProfile.jsx":"69215ee68555","ui_kits/site/automation-screen.jsx":"9556fa4fb52c","ui_kits/site/contact-screen.jsx":"0e6ddefd3e73","ui_kits/site/employee-screen.jsx":"ba2ce744bb66","ui_kits/site/home-screen.jsx":"2cae96ac2cdd","ui_kits/site/privacy-screen.jsx":"b88ccc881435","ui_kits/site/site-footer.jsx":"2a91d5c5eaf0","ui_kits/site/site-header.jsx":"8670ed7691a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_03bc73 = window.DesignSystem_03bc73 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/ClientLogos.jsx
try { (() => {
/** Логотипы клиентов карточками. Однотонные SVG красятся CSS-маской
 *  в брендовый цвет клиента, цветные файлы выводятся как есть. */
function ClientLogos({
  label = 'Нам доверяют',
  logos = [],
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: Object.assign({
      padding: '0 var(--gutter) var(--space-20)',
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }, style)
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      margin: '0 0 var(--space-8)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)'
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.alt,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 80,
      padding: '0 var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-card)'
    }
  }, l.mask ? /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": l.alt,
    style: {
      display: 'inline-block',
      width: l.width,
      height: l.height || 32,
      backgroundColor: l.color,
      WebkitMaskImage: 'url(' + l.mask + ')',
      maskImage: 'url(' + l.mask + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.alt,
    loading: "lazy",
    style: {
      height: l.height || 32,
      width: 'auto',
      objectFit: 'contain'
    }
  })))));
}
Object.assign(__ds_scope, { ClientLogos });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ClientLogos.jsx", error: String((e && e.message) || e) }); }

// components/blocks/GradientBackdrop.jsx
try { (() => {
/** Живой градиентный фон секции: то же полотно, что у hero, но пятна
 *  медленно дышат. Absolute-слой — родителю нужен position: relative и
 *  overflow: hidden. Движение отключается при prefers-reduced-motion
 *  (глобальное правило в base.css гасит анимации). */
function GradientBackdrop({
  intensity = 'soft',
  children,
  style
}) {
  const vivid = intensity === 'vivid';
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: Object.assign({
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: vivid ? 'var(--gradient-hero-vivid)' : 'var(--gradient-hero)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-25%',
      right: '-10%',
      width: 520,
      height: 520,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--violet-400)',
      filter: 'blur(var(--parallax-blur))',
      opacity: vivid ? 0.5 : 0.35,
      animation: 'var(--float-slow)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-30%',
      left: '-8%',
      width: 480,
      height: 480,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--fuchsia-500)',
      filter: 'blur(var(--parallax-blur))',
      opacity: vivid ? 0.45 : 0.3,
      animation: 'var(--float-medium)',
      animationDelay: '-2s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '30%',
      left: '35%',
      width: 320,
      height: 320,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--violet-200)',
      filter: 'blur(var(--parallax-blur))',
      opacity: 0.2,
      animation: 'var(--float-fast)',
      animationDelay: '-1s'
    }
  }), children);
}
Object.assign(__ds_scope, { GradientBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/GradientBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/blocks/HeroShapes.jsx
try { (() => {
const SHAPES = [{
  top: '8%',
  right: '6%',
  size: 192,
  radius: 'var(--radius-xl)',
  kind: 'shape-cube',
  float: 'var(--float-slow)',
  rotate: '12deg',
  opacity: 0.9
}, {
  top: '42%',
  right: '22%',
  size: 128,
  radius: 'var(--radius-pill)',
  kind: 'shape-sphere',
  float: 'var(--float-fast)',
  opacity: 0.9
}, {
  bottom: '12%',
  right: '12%',
  size: 96,
  radius: 'var(--radius-lg)',
  kind: 'shape-cube',
  float: 'var(--float-medium)',
  rotate: '-12deg',
  opacity: 0.8
}, {
  top: '26%',
  right: '3%',
  size: 48,
  radius: 'var(--radius-pill)',
  kind: 'shape-sphere',
  float: 'var(--float-slow)',
  opacity: 0.7
}, {
  bottom: '38%',
  right: '38%',
  size: 40,
  radius: 'var(--radius-sm)',
  kind: 'shape-cube',
  float: 'var(--float-medium)',
  rotate: '45deg',
  opacity: 0.6
}];

/** Плавающие кубики и сферы первого экрана. Параллакс по прокрутке живёт
 *  в приложении (framer-motion useScroll) — здесь только плавание. */
function HeroShapes({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: Object.assign({
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }, style)
  }, SHAPES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: s.kind,
    style: {
      position: 'absolute',
      top: s.top,
      bottom: s.bottom,
      right: s.right,
      width: s.size,
      height: s.size,
      borderRadius: s.radius,
      opacity: s.opacity,
      animation: s.float,
      transform: s.rotate ? 'rotate(' + s.rotate + ')' : undefined
    }
  })));
}
Object.assign(__ds_scope, { HeroShapes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/HeroShapes.jsx", error: String((e && e.message) || e) }); }

// components/core/Accent.jsx
try { (() => {
/** Выделение ключевого слова внутри абзаца: жирный + фиолетовое подчёркивание. */
function Accent({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: Object.assign({
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      textDecorationLine: 'underline',
      textDecorationColor: 'rgba(167,139,250,0.6)',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Accent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accent.jsx", error: String((e && e.message) || e) }); }

// components/core/AnimatedNumber.jsx
try { (() => {
/** Цифра с count-up при попадании в область видимости (1400 мс).
 *  При prefers-reduced-motion сразу показывает финальное значение. */
function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 1400,
  style
}) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value);
      return;
    }
    let raf;
    const run = t0 => {
      const step = t => {
        const p = Math.min((t - t0) / duration, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        run(performance.now());
        io.disconnect();
      }
    }), {
      rootMargin: '-60px'
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: style
  }, prefix, n, suffix);
}
Object.assign(__ds_scope, { AnimatedNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AnimatedNumber.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Плашка над заголовком hero. Только для проверяемых утверждений —
 *  «Отвечаем в течение рабочего дня», не «статус системы: оптимальный». */
function Badge({
  children,
  dot = true,
  tone = 'onAccent',
  style
}) {
  const onAccent = tone === 'onAccent';
  return /*#__PURE__*/React.createElement("p", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: onAccent ? 'var(--surface-scrim)' : 'var(--surface-accent-soft)',
      backdropFilter: onAccent ? 'blur(12px)' : 'none',
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (onAccent ? 'rgba(255,255,255,0.1)' : 'var(--border-accent-soft)'),
      margin: 0
    }, style)
  }, dot ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--status-live-dot)',
      boxShadow: 'var(--shadow-live-dot)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: onAccent ? 'var(--text-on-inverse)' : 'var(--text-accent)'
    }
  }, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/CipherText.jsx
try { (() => {
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

/** Строка, которая «расшифровывается» по символам за 1500 мс. */
function CipherText({
  text = '',
  delay = 0,
  style
}) {
  const [out, setOut] = React.useState(text);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text);
      return;
    }
    let i = 0,
      iv;
    const frames = 30,
      duration = 1500;
    const step = text.length / (duration / 1000 * frames);
    const scramble = () => text.split('').map((ch, idx) => idx < i ? text[idx] : ch === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('');
    setOut(scramble());
    const to = setTimeout(() => {
      iv = setInterval(() => {
        setOut(scramble());
        if (i >= text.length) {
          clearInterval(iv);
          setOut(text);
        }
        i += Math.max(step, 0.5);
      }, 1000 / frames);
    }, delay);
    return () => {
      clearTimeout(to);
      if (iv) clearInterval(iv);
    };
  }, [text, delay]);
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, out);
}
Object.assign(__ds_scope, { CipherText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CipherText.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PASCAL = n => n.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());

/** Обёртка над lucide-react 0.344 — единственный иконочный набор системы.
 *  Данные глифов берутся из глобального lucide (UMD с CDN), поэтому SVG остаётся
 *  под контролем React: 24-сетка, stroke 2, currentColor. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  title,
  style
}) {
  const [tick, setTick] = React.useState(0);
  const key = PASCAL(name || '');
  const raw = typeof window !== 'undefined' && window.lucide && window.lucide.icons ? window.lucide.icons[key] : null;
  // lucide отдаёт либо тройку ['svg', attrs, children], либо просто список детей.
  const node = !raw ? null : Array.isArray(raw) && typeof raw[0] === 'string' ? Array.isArray(raw[2]) ? raw[2] : [] : raw;
  React.useEffect(() => {
    if (node || tick > 40) return;
    const t = setTimeout(() => setTick(tick + 1), 60);
    return () => clearTimeout(t);
  }, [node, tick]);
  const children = (Array.isArray(node) ? node : []).map((c, i) => {
    const tag = Array.isArray(c) ? c[0] : c && c.tag;
    const attrs = Array.isArray(c) ? c[1] : c && (c.attrs || c.attributes);
    if (!tag) return null;
    return React.createElement(tag, Object.assign({
      key: i
    }, attrs));
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : 'true',
    role: title ? 'img' : undefined,
    style: Object.assign({
      display: 'block',
      flexShrink: 0
    }, style)
  }, title ? /*#__PURE__*/React.createElement("title", null, title) : null, children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/blocks/CookieConsent.jsx
try { (() => {
/** Баннер cookie. Компонент презентационный: решение о согласии
 *  хранит приложение (в проде — localStorage cookieConsent). */
function CookieConsent({
  visible = true,
  title = 'Мы используем файлы cookie',
  body,
  privacyLabel = 'Политикой конфиденциальности',
  privacyHref = '/privacy',
  acceptLabel = 'Принять',
  declineLabel = 'Отклонить',
  onAccept,
  onDecline,
  style
}) {
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "false",
    "aria-label": title,
    style: Object.assign({
      padding: 'var(--space-6)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '72rem',
      margin: '0 auto',
      background: 'var(--surface-raised)',
      border: '2px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-2xl)',
      padding: 'var(--space-8)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3)',
      background: 'var(--surface-accent-soft)',
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cookie",
    size: 32,
    color: "var(--text-accent)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-2)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, body, " ", /*#__PURE__*/React.createElement("a", {
    href: privacyHref,
    style: {
      color: 'var(--text-accent)',
      fontWeight: 'var(--weight-semibold)',
      textDecoration: 'underline'
    }
  }, privacyLabel), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDecline,
    className: "ds-focusable ds-pressable",
    style: {
      padding: '12px 24px',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-secondary)',
      background: 'var(--border-subtle)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, declineLabel), /*#__PURE__*/React.createElement("button", {
    onClick: onAccept,
    className: "ds-focusable ds-pressable",
    style: {
      padding: '12px 24px',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-on-accent)',
      background: 'var(--accent)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, acceptLabel))));
}
Object.assign(__ds_scope, { CookieConsent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/CookieConsent.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Faq.jsx
try { (() => {
/** Аккордеон вопрос-ответ. Снятие возражений перед действием — стоит
 *  последним блоком перед финальным CTA. */
function Faq({
  heading,
  items = [],
  idPrefix = 'faq',
  id,
  style
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: Object.assign({
      padding: 'var(--section-py-current) var(--gutter)',
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }, style)
  }, heading ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-10)',
      fontSize: 'var(--type-h2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, heading) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    const bid = idPrefix + '-faq-' + i + '-button';
    const pid = idPrefix + '-faq-' + i + '-panel';
    return /*#__PURE__*/React.createElement("div", {
      key: item.q,
      style: {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      id: bid,
      className: "ds-focusable",
      "aria-expanded": isOpen,
      "aria-controls": pid,
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-8)',
        padding: 'var(--space-6)',
        textAlign: 'left',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--weight-bold)',
        background: isOpen ? 'var(--accent)' : 'var(--surface-raised)',
        color: isOpen ? 'var(--text-on-accent)' : 'var(--text-primary)',
        transition: 'background-color var(--duration-base)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        padding: 4,
        borderRadius: 'var(--radius-pill)',
        background: isOpen ? 'rgba(255,255,255,0.2)' : 'var(--border-subtle)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 18,
      color: isOpen ? 'var(--white)' : 'var(--text-muted)'
    })))), isOpen ? /*#__PURE__*/React.createElement("div", {
      id: pid,
      role: "region",
      "aria-labelledby": bid,
      style: {
        padding: 'var(--space-6)',
        background: 'var(--surface-muted)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--leading-relaxed)',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, item.a) : null);
  })));
}
Object.assign(__ds_scope, { Faq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Faq.jsx", error: String((e && e.message) || e) }); }

// components/cards/CaseCard.jsx
try { (() => {
/** Карточка кейса. full — крупный заголовок и стрелка (страница проектов);
 *  compact — поменьше, с подписью домена и результатом отдельной строкой. */
function CaseCard({
  name,
  subtitle,
  description,
  result,
  resultLabel = 'Результат',
  note,
  url,
  urlLabel,
  screenshot,
  variant = 'full',
  style
}) {
  const compact = variant === 'compact';
  const [hover, setHover] = React.useState(false);
  const media = screenshot ? /*#__PURE__*/React.createElement("img", {
    src: screenshot,
    alt: name + ' — ' + subtitle,
    loading: "lazy",
    style: {
      width: '100%',
      height: compact ? 192 : 'auto',
      maxHeight: compact ? 192 : 320,
      objectFit: 'cover',
      objectPosition: 'top',
      display: 'block',
      transition: 'transform var(--duration-slow)',
      transform: hover ? 'scale(var(--zoom-image))' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: compact ? 192 : 160,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gradient-case-placeholder)',
      transition: 'transform var(--duration-slow)',
      transform: hover ? 'scale(var(--zoom-card))' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-extrabold)',
      color: 'rgba(255,255,255,0.9)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, (name || '')[0]));
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(var(--lift))' : 'none',
      transition: 'box-shadow var(--duration-base), transform var(--duration-base)'
    }, style)
  }, url ? /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'block'
    }
  }, media) : media, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 ' + (compact ? 'var(--space-1)' : 'var(--space-2)'),
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, subtitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      fontSize: compact ? 'var(--text-2xl)' : 'var(--text-3xl)'
    }
  }, url ? /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, name) : name, compact ? urlLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-faint)'
    }
  }, "(", urlLabel, ")") : null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 22,
    color: "var(--text-faint)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description), compact ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-2)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, resultLabel, ": ", result, ".") : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '8px 16px',
      background: 'var(--surface-accent-soft)',
      color: 'var(--text-accent)',
      fontWeight: 'var(--weight-bold)',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--text-sm)'
    }
  }, resultLabel, ": ", result), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, note) : null));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    bg: 'var(--action-primary-bg)',
    bgHover: 'var(--action-primary-bg-hover)',
    color: 'var(--action-primary-text)',
    radius: 'var(--radius-sm)',
    pad: 'var(--btn-pad-sm)',
    size: '1rem',
    upper: false,
    shadow: 'var(--shadow-button)'
  },
  onAccent: {
    bg: 'var(--action-on-accent-bg)',
    bgHover: 'var(--gray-50)',
    color: 'var(--action-on-accent-text)',
    radius: 'var(--radius-md)',
    pad: 'var(--btn-pad-md)',
    size: 'var(--text-sm)',
    upper: true,
    shadow: 'var(--shadow-button)'
  },
  accent: {
    bg: 'var(--accent)',
    bgHover: 'var(--accent-hover)',
    color: 'var(--text-on-accent)',
    radius: 'var(--radius-md)',
    pad: 'var(--btn-pad-lg)',
    size: '1rem',
    upper: true,
    shadow: 'var(--shadow-xl)'
  },
  quiet: {
    bg: 'transparent',
    bgHover: 'transparent',
    color: 'var(--text-accent)',
    radius: '0',
    pad: '0',
    size: 'var(--text-sm)',
    upper: true,
    shadow: 'none'
  }
};
const PAD = {
  sm: 'var(--btn-pad-sm)',
  md: 'var(--btn-pad-md)',
  lg: 'var(--btn-pad-lg)'
};

/** Кнопка/ссылка-действие. Геометрия и состояния сняты с прода. */
function Button({
  variant = 'primary',
  size,
  href,
  onClick,
  disabled,
  icon,
  iconAfter = true,
  block,
  children,
  style
}) {
  const v = V[variant] || V.primary;
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null;
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    disabled: disabled,
    className: 'ds-focusable ds-pressable' + (block ? ' ds-btn-block' : ''),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      justifyContent: 'center',
      padding: size ? PAD[size] : v.pad,
      borderRadius: v.radius,
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: hover && !disabled ? v.bgHover : v.bg,
      color: v.color,
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: v.size,
      textTransform: v.upper ? 'uppercase' : 'none',
      letterSpacing: v.upper ? 'var(--tracking-wide)' : 'normal',
      boxShadow: hover && !disabled && v.shadow !== 'none' ? 'var(--shadow-button-hover)' : v.shadow,
      transform: hover && !disabled && variant === 'onAccent' ? 'translateY(var(--lift-sm))' : 'none',
      opacity: disabled ? 0.5 : 1,
      borderRadius: v.radius,
      transition: 'background-color var(--duration-base), box-shadow var(--duration-base), transform var(--duration-base)'
    }, style)
  }, glyph && !iconAfter ? glyph : null, /*#__PURE__*/React.createElement("span", null, children), glyph && iconAfter ? glyph : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/blocks/FinalCta.jsx
try { (() => {
/** Тёмная финальная секция: заголовок, кнопка, контакты. */
function FinalCta({
  heading,
  sub,
  ctaLabel,
  ctaHref,
  phone,
  phoneHref,
  telegram,
  telegramLabel = 'Telegram',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: Object.assign({
      padding: 'var(--section-py-inverse) var(--gutter)',
      background: 'var(--surface-cta)',
      position: 'relative',
      overflow: 'hidden'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 700,
      height: 700,
      background: 'rgba(76,29,149,0.2)',
      borderRadius: 'var(--radius-pill)',
      filter: 'blur(140px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--type-inverse-heading)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-on-inverse)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-10)',
      fontSize: 'var(--text-lg)',
      color: 'var(--gray-300)',
      maxWidth: 'var(--container-narrow)',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, sub), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    icon: "arrow-right",
    href: ctaHref,
    block: true
  }, ctaLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-8)',
      flexWrap: 'wrap',
      color: 'var(--text-on-inverse-secondary)',
      fontSize: 'var(--text-sm)'
    }
  }, phone ? /*#__PURE__*/React.createElement("a", {
    href: phoneHref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  }), phone) : null, telegram ? /*#__PURE__*/React.createElement("a", {
    href: telegram,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "send",
    size: 16
  }), telegramLabel) : null)));
}
Object.assign(__ds_scope, { FinalCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/FinalCta.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Hero.jsx
try { (() => {
/** Первый экран: фиолетово-фуксиевый градиент, плавающие фигуры,
 *  стеклянная рамка вокруг текста. Одинаковый на всех страницах прода. */
function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  eyebrow,
  badge,
  subText,
  bgImage,
  shapes = true,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: Object.assign({
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      borderRadius: 'var(--radius-hero)',
      overflow: 'hidden',
      background: 'var(--gradient-hero)',
      boxShadow: 'var(--shadow-hero)',
      padding: 'var(--hero-pad-y) var(--hero-pad-x)'
    }
  }, bgImage ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + bgImage + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.3,
      mixBlendMode: 'luminosity',
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-20%',
      right: '-10%',
      width: 500,
      height: 500,
      background: 'var(--violet-400)',
      borderRadius: 'var(--radius-pill)',
      filter: 'blur(100px)',
      opacity: 0.4,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: '-20%',
      left: '-10%',
      width: 500,
      height: 500,
      background: 'var(--fuchsia-500)',
      borderRadius: 'var(--radius-pill)',
      filter: 'blur(100px)',
      opacity: 0.4,
      pointerEvents: 'none'
    }
  }), shapes ? /*#__PURE__*/React.createElement(__ds_scope.HeroShapes, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      maxWidth: 'var(--container-prose)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-glass)',
      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      backdropFilter: 'blur(24px)',
      border: '1px solid var(--border-glass)',
      boxShadow: 'var(--shadow-glass)',
      padding: 'var(--hero-glass-pad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent 60%)',
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)) : null, eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-on-gradient-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--type-h1)',
      fontWeight: 'var(--weight-extrabold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-on-inverse)',
      lineHeight: 'var(--leading-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-10)',
      fontSize: 'var(--type-hero-sub)',
      color: 'var(--text-on-gradient-secondary)',
      fontWeight: 'var(--weight-medium)',
      maxWidth: 'var(--container-narrow)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, subtitle), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "onAccent",
    icon: "arrow-right",
    href: ctaHref,
    block: true
  }, ctaLabel), subText ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      color: 'var(--text-on-gradient-support)',
      fontSize: 'var(--text-sm)'
    }
  }, subText) : null)))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Hero.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
/** Квадратная кнопка-иконка: тема, бургер, язык. Минимум 44×44 —
 *  требование из docs/design-review-homepage-v1.md (тач-таргеты). */
function IconButton({
  icon,
  label,
  onClick,
  size = 20,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    className: "ds-focusable ds-pressable",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      minWidth: 'var(--tap-target-min)',
      minHeight: 'var(--tap-target-min)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      background: hover ? 'var(--surface-hover)' : 'transparent',
      color: 'var(--text-secondary)',
      transition: 'background-color var(--duration-base)'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/** Знак бренда: стеклянная сфера с искрой сингулярности внутри.
 *  Перенесён из прод-исходника NeuroCoreLogo.tsx один в один — геометрия,
 *  тени, блики и градиент искры взяты оттуда, не восстановлены по картинке.
 *  Пропорции считаются от базового размера 56px (w-14 в проде). */
const BASE = 56;
function Logo({
  size = 40,
  title = 'Сингулярность',
  decorative,
  style
}) {
  const id = React.useId();
  const k = size / BASE;
  const px = n => n * k + 'px';
  return /*#__PURE__*/React.createElement("div", {
    role: decorative ? 'presentation' : 'img',
    "aria-hidden": decorative ? 'true' : undefined,
    "aria-label": decorative ? undefined : title,
    style: Object.assign({
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--violet-600)',
      borderRadius: 'var(--radius-pill)',
      filter: 'blur(' + px(24) + ')',
      opacity: 0.2,
      transform: 'scale(1.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.1), rgba(139,92,246,0.1))',
      border: '1px solid rgba(255,255,255,0.3)',
      boxShadow: 'inset ' + px(-4) + ' ' + px(-4) + ' ' + px(10) + ' rgba(124,58,237,0.2), inset ' + px(4) + ' ' + px(4) + ' ' + px(10) + ' rgba(255,255,255,0.95), 0 ' + px(8) + ' ' + px(20) + ' rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      filter: 'blur(' + px(0.8) + ')',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 32 * k,
    height: 32 * k,
    viewBox: "0 0 24 24",
    fill: 'url(#' + id + ')',
    style: {
      display: 'block',
      filter: 'drop-shadow(0 ' + px(4) + ' ' + px(8) + ' rgba(124,58,237,0.4))'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--violet-500)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--violet-900)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C12 2 13.5 8.5 14 10C15.5 10.5 22 12 22 12C22 12 15.5 13.5 14 14C13.5 15.5 12 22 12 22C12 22 10.5 15.5 10 14C8.5 13.5 2 12 2 12C2 12 8.5 10.5 10 10C10.5 8.5 12 2 12 2Z"
  }))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '15%',
      left: '20%',
      width: '35%',
      height: '20%',
      background: 'linear-gradient(to bottom, var(--white), transparent)',
      opacity: 0.9,
      borderRadius: 'var(--radius-pill)',
      filter: 'blur(' + px(1) + ')',
      transform: 'rotate(-12deg)',
      zIndex: 20,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: '15%',
      right: '20%',
      width: '25%',
      height: '25%',
      background: 'rgba(167,139,250,0.2)',
      borderRadius: 'var(--radius-pill)',
      filter: 'blur(' + px(12) + ')',
      zIndex: 20,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/blocks/SiteFooter.jsx
try { (() => {
/** Подвал: чёрная секция, марка, градиентная фраза, разделы, контакты,
 *  нижняя строка с копирайтом. Мелкий текст — на --text-on-inverse-faint:
 *  gray-600 давал 4.34:1 и не проходил AA. */
function SiteFooter({
  brand = 'СИНГУЛЯРНОСТЬ',
  claim,
  sub,
  sectionsLabel = 'Разделы',
  sections = [],
  contactsLabel = 'Контакты',
  email,
  phone,
  copyright,
  legalLabel,
  legalHref,
  style
}) {
  const colLabel = {
    margin: '0 0 var(--space-6)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-bold)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-label)',
    color: 'var(--violet-500)'
  };
  const contact = {
    color: 'var(--white)',
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--weight-medium)',
    textDecoration: 'none',
    letterSpacing: 'var(--tracking-tight)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: Object.assign({
      background: 'var(--surface-footer)',
      color: 'var(--text-on-inverse)',
      paddingTop: 'var(--space-24)',
      paddingBottom: 'var(--space-8)',
      borderTop: '1px solid var(--gray-900)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-12)',
      marginBottom: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 40%',
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 48,
    decorative: true
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tighter)',
      color: 'var(--white)'
    }
  }, brand)), claim ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      maxWidth: 480,
      lineHeight: 'var(--leading-tight)',
      background: 'linear-gradient(to right, var(--gray-100), var(--gray-500))',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, claim) : null, sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-on-inverse-secondary)',
      fontWeight: 'var(--weight-medium)'
    }
  }, sub) : null), sections.length ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": sectionsLabel,
    style: {
      flex: '1 1 22%',
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: colLabel
  }, sectionsLabel), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.label || s
  }, /*#__PURE__*/React.createElement("a", {
    href: s.href || '#top',
    style: {
      color: 'var(--text-on-inverse-secondary)',
      textDecoration: 'none'
    }
  }, s.label || s))))) : null, email || phone ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 22%',
      minWidth: 220,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: colLabel
  }, contactsLabel), email ? /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: contact
  }, email) : null, phone ? /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/[^+\d]/g, ''),
    style: contact
  }, phone) : null) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-8)',
      borderTop: '1px solid var(--gray-900)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-4)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-on-inverse-faint)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, /*#__PURE__*/React.createElement("div", null, copyright), legalLabel ? /*#__PURE__*/React.createElement("a", {
    href: legalHref,
    style: {
      color: 'var(--text-on-inverse-faint)',
      textDecoration: 'none'
    }
  }, legalLabel) : null)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/blocks/SiteHeader.jsx
try { (() => {
/** Фиксированная шапка сайта: марка с тэглайном, меню капсом, переключатели
 *  языка и темы, primary-CTA. Ниже 860px — бургер и полноэкранное меню.
 *  Высота 80px, фон полупрозрачный с backdrop-blur, снизу линия border-subtle. */
function SiteHeader({
  brand = 'СИНГУЛЯРНОСТЬ',
  tagline,
  href = '#top',
  nav = [],
  navMobile,
  cta,
  ctaHref,
  locale = 'ru',
  onToggleLocale,
  theme = 'light',
  onToggleTheme,
  breakpoint = 860,
  style
}) {
  const [menu, setMenu] = React.useState(false);
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < breakpoint);
  React.useEffect(() => {
    const on = () => setNarrow(window.innerWidth < breakpoint);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [breakpoint]);
  const localeBtn = {
    borderRadius: 'var(--radius-xs)',
    border: '1px solid var(--border-default)',
    background: 'transparent',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-bold)',
    fontSize: 'var(--text-xs)',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: Object.assign({
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: theme === 'dark' ? 'rgba(17,24,39,0.8)' : 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "ds-focusable",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 40,
    decorative: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-none)'
    }
  }, brand), tagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      marginTop: 4
    }
  }, tagline) : null)), narrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, onToggleLocale ? /*#__PURE__*/React.createElement("button", {
    onClick: onToggleLocale,
    className: "ds-focusable",
    "aria-label": "Switch language",
    style: Object.assign({
      minWidth: 'var(--tap-target-min)',
      minHeight: 'var(--tap-target-min)'
    }, localeBtn)
  }, locale === 'ru' ? 'EN' : 'RU') : null, onToggleTheme ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: theme === 'light' ? 'moon' : 'sun',
    label: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u0443",
    onClick: onToggleTheme
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: menu ? 'x' : 'menu',
    label: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",
    size: 24,
    onClick: () => setMenu(!menu)
  })) : /*#__PURE__*/React.createElement("nav", {
    "aria-label": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      whiteSpace: 'nowrap'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.href,
    href: n.href,
    className: "ds-focusable",
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, n.label)), onToggleLocale ? /*#__PURE__*/React.createElement("button", {
    onClick: onToggleLocale,
    className: "ds-focusable",
    "aria-label": "Switch language",
    style: Object.assign({
      padding: '4px 8px'
    }, localeBtn)
  }, locale === 'ru' ? 'EN' : 'RU') : null, onToggleTheme ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: theme === 'light' ? 'moon' : 'sun',
    label: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u0443",
    onClick: onToggleTheme
  }) : null, cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    icon: "zap",
    iconAfter: false,
    href: ctaHref
  }, cta) : null))), menu && narrow ? /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      background: 'var(--surface-page)',
      paddingTop: 'var(--space-24)',
      paddingLeft: 'var(--gutter)',
      paddingRight: 'var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, (navMobile || nav).map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.href || i,
    href: n.href,
    onClick: () => setMenu(false),
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, n.label)), cta ? /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    onClick: () => setMenu(false),
    style: {
      marginTop: 'var(--space-8)',
      padding: '16px 0',
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      borderRadius: 'var(--radius-md)',
      textAlign: 'center',
      textDecoration: 'none'
    }
  }, cta) : null) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Reveal.jsx
try { (() => {
/** Появление элемента при попадании в область видимости: fade + сдвиг вверх.
 *  Каскад задаётся delay = индекс × 60/80/100 мс. Уважает prefers-reduced-motion. */
function Reveal({
  children,
  delay = 0,
  offset = 16,
  className,
  style
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }), {
      rootMargin: '-40px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: Object.assign({
      opacity: seen ? 1 : 0,
      transform: seen ? 'none' : 'translateY(' + offset + 'px)',
      transition: 'opacity var(--duration-reveal) var(--ease-out) ' + delay + 'ms, transform var(--duration-reveal) var(--ease-out) ' + delay + 'ms'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/core/KeyPoint.jsx
try { (() => {
/** Выделение ключевой мысли: главная фраза отдельно, пояснение отдельно.
 *  rule — с фиолетовой полосой слева, card — на светло-фиолетовой подложке. */
function KeyPoint({
  lead,
  support,
  eyebrow,
  variant = 'card',
  style
}) {
  const eyebrowEl = eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, eyebrow) : null;
  const leadStyle = {
    margin: 0,
    fontWeight: 'var(--weight-bold)',
    color: 'var(--text-primary)',
    lineHeight: 'var(--leading-snug)',
    fontSize: variant === 'rule' ? 'var(--text-2xl)' : 'var(--type-h3)'
  };
  const supportStyle = {
    margin: 0,
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)'
  };
  if (variant === 'rule') {
    return /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
      style: Object.assign({
        position: 'relative',
        paddingLeft: 'var(--space-8)',
        maxWidth: 'var(--container-prose)'
      }, style)
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        top: 4,
        bottom: 4,
        width: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--accent)'
      }
    }), eyebrowEl, /*#__PURE__*/React.createElement("p", {
      style: leadStyle
    }, lead), support ? /*#__PURE__*/React.createElement("p", {
      style: Object.assign({
        marginTop: 'var(--space-4)'
      }, supportStyle)
    }, support) : null);
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    style: Object.assign({
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-accent-soft)',
      border: '1px solid var(--border-accent-soft)',
      padding: 'var(--card-pad)',
      maxWidth: 'var(--container-prose)'
    }, style)
  }, eyebrowEl, /*#__PURE__*/React.createElement("p", {
    style: leadStyle
  }, lead), support ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      margin: 'var(--space-5) 0',
      height: 1,
      background: 'var(--border-accent-soft)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: supportStyle
  }, support)) : null);
}
Object.assign(__ds_scope, { KeyPoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KeyPoint.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
/** Отзыв клиента. Всегда с атрибуцией: без имени и роли цитата ничего не
 *  доказывает. variant: card — на подложке, plain — в поток текста,
 *  inverse — на чёрной секции или градиенте. */
function Quote({
  children,
  author,
  role,
  company,
  meta,
  variant = 'card',
  style
}) {
  const inverse = variant === 'inverse';
  const text = {
    margin: 0,
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-tight)',
    color: inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)',
    textWrap: 'pretty'
  };
  const attrName = {
    margin: 0,
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-bold)',
    color: inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)'
  };
  const attrRole = {
    margin: 0,
    fontSize: 'var(--text-sm)',
    color: inverse ? 'var(--text-on-inverse-secondary)' : 'var(--text-secondary)'
  };
  const box = variant === 'plain' ? {} : {
    padding: 'var(--card-pad)',
    borderRadius: 'var(--radius-lg)',
    background: inverse ? 'var(--surface-inverse-card)' : 'var(--surface-muted)',
    border: '1px solid ' + (inverse ? 'var(--border-strong)' : 'var(--border-subtle)')
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 'var(--container-prose)'
    }, box, style)
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-numeric)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 0.6,
      fontWeight: 'var(--weight-bold)',
      color: inverse ? 'var(--accent-quiet)' : 'var(--accent)'
    }
  }, "\xAB"), /*#__PURE__*/React.createElement("blockquote", {
    style: text
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: attrName
  }, author), /*#__PURE__*/React.createElement("p", {
    style: attrRole
  }, [role, company].filter(Boolean).join(', ')), meta ? /*#__PURE__*/React.createElement("p", {
    style: Object.assign({}, attrRole, {
      color: inverse ? 'var(--text-on-inverse-faint)' : 'var(--text-muted)',
      marginTop: 4
    })
  }, meta) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/ScrollProgress.jsx
try { (() => {
/** Прогресс чтения страницы — полоса 3px сверху. Под шапкой (z-index ниже
 *  меню). При prefers-reduced-motion полоса остаётся, убирается только
 *  сглаживание перехода: это индикатор, а не декорация. */
function ScrollProgress({
  height = 3,
  color = 'var(--accent)',
  style
}) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-label": "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0447\u0442\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(p * 100),
    style: Object.assign({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height,
      zIndex: 40,
      pointerEvents: 'none',
      background: 'transparent'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: p * 100 + '%',
      background: color,
      transition: 'width var(--duration-instant) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ScrollProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScrollProgress.jsx", error: String((e && e.message) || e) }); }

// components/core/Section.jsx
try { (() => {
/** Стандартная секция страницы: вертикаль 80/96px, контейнер 64rem,
 *  контент проявляется при прокрутке. muted — серая полоса-подложка. */
function Section({
  children,
  id,
  muted,
  inverse,
  width = 'text',
  style,
  contentStyle
}) {
  const max = width === 'wide' ? 'var(--container-wide)' : width === 'prose' ? 'var(--container-prose)' : 'var(--container-text)';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: Object.assign({
      paddingTop: inverse ? 'var(--section-py-inverse)' : 'var(--section-py-current)',
      paddingBottom: inverse ? 'var(--section-py-inverse)' : 'var(--section-py-current)',
      background: inverse ? 'var(--surface-inverse)' : muted ? 'var(--surface-muted)' : 'transparent',
      color: inverse ? 'var(--text-on-inverse)' : 'inherit'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    offset: 24,
    style: Object.assign({
      maxWidth: max,
      margin: '0 auto',
      paddingLeft: 'var(--gutter)',
      paddingRight: 'var(--gutter)'
    }, contentStyle)
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Section.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const S = {
  delivered: {
    bg: 'var(--status-delivered-bg)',
    color: 'var(--status-delivered-text)',
    border: 'var(--status-delivered-border)',
    icon: 'check-circle',
    label: 'Внедрено у клиента'
  },
  prototype: {
    bg: 'var(--status-prototype-bg)',
    color: 'var(--status-prototype-text)',
    border: 'var(--status-prototype-border)',
    icon: 'wrench',
    label: 'Рабочий прототип'
  },
  concept: {
    bg: 'var(--status-concept-bg)',
    color: 'var(--status-concept-text)',
    border: 'var(--status-concept-border)',
    icon: 'lightbulb',
    label: 'Можем собрать'
  }
};

/** Статус решения. Обязательный элемент карточки: посетитель должен отличать
 *  внедрённое у клиента от того, что мы можем собрать (positioning §8). */
function StatusBadge({
  status = 'concept',
  label,
  hint,
  style
}) {
  const s = S[status] || S.concept;
  return /*#__PURE__*/React.createElement("span", {
    title: hint,
    style: Object.assign({
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + s.border,
      background: s.bg,
      color: s.color,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 13
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Timeline.jsx
try { (() => {
/** Этапы внедрения. Вертикально — на странице, горизонтально — на слайде.
 *  Номер шага набирается шрифтом цифр (--type-metric-font). */
function Timeline({
  steps = [],
  orientation = 'vertical',
  style
}) {
  const vertical = orientation === 'vertical';
  const num = {
    fontFamily: 'var(--type-metric-font)',
    fontVariantNumeric: 'var(--type-metric-numeric)',
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--weight-bold)',
    lineHeight: 1,
    color: 'var(--text-on-accent)'
  };
  return /*#__PURE__*/React.createElement("ol", {
    style: Object.assign({
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: vertical ? 0 : 'var(--space-6)',
      gridTemplateColumns: vertical ? '1fr' : 'repeat(' + Math.max(steps.length, 1) + ', 1fr)'
    }, style)
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    key: i,
    delay: i * 80,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: vertical ? 'row' : 'column',
      gap: 'var(--space-5)',
      paddingBottom: vertical && i < steps.length - 1 ? 'var(--space-8)' : 0
    }
  }, vertical && i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 19,
      top: 40,
      bottom: 0,
      width: 2,
      background: 'var(--border-accent-soft)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }, num)
  }, i + 1), !vertical ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: 2,
      background: i < steps.length - 1 ? 'var(--border-accent-soft)' : 'transparent'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--type-h3-size)',
      fontWeight: 'var(--type-h3-weight)',
      lineHeight: 'var(--type-h3-leading)',
      color: 'var(--text-primary)'
    }
  }, s.title), s.duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--type-metric-font)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, s.duration) : null), s.body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      textWrap: 'pretty'
    }
  }, s.body) : null, s.status ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: s.status
  })) : null))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/cards/SolutionCard.jsx
try { (() => {
/** Карточка решения из каталога автоматизации. Статус показывается всегда. */
function SolutionCard({
  title,
  short,
  audience,
  audienceLabel = 'Кому?',
  status = 'concept',
  statusLabel,
  statusHint,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--card-pad)',
      border: '1px solid var(--border-subtle)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(var(--lift))' : 'none',
      transition: 'box-shadow var(--duration-base), transform var(--duration-base)'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    label: statusLabel,
    hint: statusHint,
    style: {
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-5)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      flexGrow: 1
    }
  }, short), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, audienceLabel), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, audience)));
}
Object.assign(__ds_scope, { SolutionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SolutionCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Metric.jsx
try { (() => {
const ATTR = {
  delivered: 'Внедрено у клиента',
  prototype: 'Рабочий прототип',
  concept: 'Ожидаемый эффект таких систем — по опыту команды'
};

/** Блок метрики. Вмещает три формы утверждения из positioning §7–§8:
 *  пару «было → стало», диапазон и одиночное число — всегда с атрибуцией. */
function Metric({
  label,
  before,
  after,
  value,
  prefix = '',
  suffix = '',
  range,
  attribution = 'delivered',
  note,
  style
}) {
  const num = {
    fontFamily: 'var(--type-metric-font)',
    fontVariantNumeric: 'var(--type-metric-numeric)',
    fontSize: 'var(--type-metric)',
    fontWeight: 'var(--type-metric-weight-numeric)',
    color: 'var(--text-accent)',
    lineHeight: 'var(--leading-none)',
    letterSpacing: 'var(--tracking-tight)'
  };
  const was = {
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--weight-bold)',
    color: 'var(--text-faint)',
    textDecoration: 'line-through'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      height: '100%',
      padding: 'var(--card-pad)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-muted)',
      border: '1px solid var(--border-subtle)'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: attribution,
    label: ATTR[attribution]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, before != null ? /*#__PURE__*/React.createElement("span", {
    style: was
  }, before) : null, before != null ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-faint)',
      fontSize: 'var(--text-xl)'
    }
  }, "\u2192") : null, range ? /*#__PURE__*/React.createElement("span", {
    style: num
  }, range) : after != null ? /*#__PURE__*/React.createElement("span", {
    style: num
  }, after) : /*#__PURE__*/React.createElement("span", {
    style: num
  }, /*#__PURE__*/React.createElement(__ds_scope.AnimatedNumber, {
    value: value || 0,
    prefix: prefix,
    suffix: suffix
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, label), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Metric.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
/** Переключатель светлой и тёмной темы. Ставит класс .dark на <html> и <body>
 *  — под этим селектором в системе лежат все парные значения токенов.
 *  Без props работает сам: помнит выбор в localStorage под ключом ds-theme. */
function ThemeToggle({
  theme,
  onChange,
  label = 'Переключить тему',
  style
}) {
  const controlled = theme !== undefined;
  const [own, setOwn] = React.useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('ds-theme') || 'light';
  });
  const current = controlled ? theme : own;
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', current === 'dark');
    document.body.classList.toggle('dark', current === 'dark');
  }, [current]);
  const next = current === 'light' ? 'dark' : 'light';
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: current === 'light' ? 'moon' : 'sun',
    label: label,
    style: style,
    onClick: () => {
      if (!controlled) {
        setOwn(next);
        try {
          window.localStorage.setItem('ds-theme', next);
        } catch (e) {/* приватный режим */}
      }
      if (onChange) onChange(next);
    }
  });
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassArrow.jsx
try { (() => {
// figma node: 346:2020 Iconly/Glass/Arrow
function IconlyGlassArrow(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100.667,
      height: 87.667,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.667,
      height: 87.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60,
      height: 60,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60,
    height: 60,
    viewBox: "0 0 60 60",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60,
      height: 60,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30 60 C 46.53 60 60 46.56 60 30 C 60 13.47 46.53 0 30 0 C 13.44 0 0 13.47 0 30 C 0 46.279 12.988 59.544 29.161 59.988 L 30 60 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.802,
      top: 14,
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 20,
      color: "rgb(43,161,44)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 32 C 24.816 32 32 24.832 32 16 C 32 7.184 24.816 0 16 0 C 7.168 0 0 7.184 0 16 C 0 24.682 6.927 31.757 15.552 31.994 L 16 32 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19,
      top: 6,
      width: 81.667,
      height: 81.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.667,
    height: 81.667,
    viewBox: "0 0 81.667 81.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.667,
      height: 81.667,
      backdropFilter: "blur(24px)",
      color: "rgba(114,220,96,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40.833 81.667 C 63.332 81.667 81.667 63.373 81.667 40.833 C 81.667 18.334 63.332 0 40.833 0 C 18.293 0 0 18.334 0 40.833 C 0 62.991 17.678 81.045 39.691 81.651 L 40.833 81.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 40.833 81.667 L 40.82 82.667 L 40.833 82.667 L 40.833 81.667 Z M 39.691 81.651 L 39.663 82.651 L 39.677 82.651 L 39.691 81.651 Z M 40.833 82.667 C 63.884 82.667 82.667 63.926 82.667 40.833 L 80.667 40.833 C 80.667 62.82 62.781 80.667 40.833 80.667 L 40.833 82.667 Z M 82.667 40.833 C 82.667 17.782 63.885 -1 40.833 -1 L 40.833 1 C 62.78 1 80.667 18.886 80.667 40.833 L 82.667 40.833 Z M 40.833 -1 C 17.74 -1 -1 17.783 -1 40.833 L 1 40.833 C 1 18.886 18.846 1 40.833 1 L 40.833 -1 Z M -1 40.833 C -1 63.534 17.111 82.03 39.663 82.651 L 39.718 80.651 C 18.246 80.061 1 62.448 1 40.833 L -1 40.833 Z M 39.677 82.651 L 40.82 82.667 L 40.847 80.667 L 39.705 80.651 L 39.677 82.651 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.361,
    height: 34.484,
    viewBox: "0 0 20.361 34.484",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.865,
      top: 23.602,
      width: 20.361,
      height: 34.484,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(116,222,96,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.924 5.227 C -0.301 4.043 -0.301 2.123 0.883 0.898 C 1.496 0.286 2.271 0 3.088 0 C 3.864 0 4.64 0.286 5.211 0.898 L 19.462 15.068 C 20.034 15.639 20.361 16.415 20.361 17.232 C 20.361 18.048 20.034 18.824 19.462 19.396 L 5.211 33.565 C 4.027 34.79 2.108 34.79 0.883 33.565 C -0.301 32.381 -0.301 30.421 0.924 29.237 L 12.97 17.232 L 0.924 5.227 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.924 5.227 L 1.065 5.085 L 1.063 5.083 L 0.924 5.227 Z M 0.883 0.898 L 0.742 0.757 L 0.739 0.759 L 0.883 0.898 Z M 5.211 0.898 L 5.065 1.035 L 5.07 1.04 L 5.211 0.898 Z M 19.462 15.068 L 19.604 14.926 L 19.603 14.926 L 19.462 15.068 Z M 19.462 19.396 L 19.603 19.538 L 19.604 19.537 L 19.462 19.396 Z M 5.211 33.565 L 5.07 33.423 L 5.068 33.426 L 5.211 33.565 Z M 0.924 29.237 L 1.063 29.38 L 1.065 29.378 L 0.924 29.237 Z M 12.97 17.232 L 13.111 17.373 L 13.253 17.232 L 13.111 17.09 L 12.97 17.232 Z M 1.063 5.083 C -0.08 3.978 -0.083 2.186 1.027 1.037 L 0.739 0.759 C -0.519 2.061 -0.522 4.107 0.785 5.37 L 1.063 5.083 Z M 1.025 1.04 C 1.597 0.468 2.32 0.2 3.088 0.2 L 3.088 -0.2 C 2.223 -0.2 1.395 0.104 0.742 0.757 L 1.025 1.04 Z M 3.088 0.2 C 3.815 0.2 4.536 0.467 5.065 1.035 L 5.358 0.762 C 4.744 0.104 3.913 -0.2 3.088 -0.2 L 3.088 0.2 Z M 5.07 1.04 L 19.321 15.209 L 19.603 14.926 L 5.352 0.757 L 5.07 1.04 Z M 19.321 15.209 C 19.855 15.744 20.161 16.469 20.161 17.232 L 20.561 17.232 C 20.561 16.361 20.212 15.535 19.604 14.926 L 19.321 15.209 Z M 20.161 17.232 C 20.161 17.995 19.855 18.72 19.321 19.254 L 19.604 19.537 C 20.212 18.929 20.561 18.102 20.561 17.232 L 20.161 17.232 Z M 19.321 19.254 L 5.07 33.423 L 5.352 33.707 L 19.603 19.538 L 19.321 19.254 Z M 5.068 33.426 C 3.963 34.568 2.173 34.572 1.025 33.424 L 0.742 33.706 C 2.043 35.008 4.091 35.012 5.355 33.704 L 5.068 33.426 Z M 1.025 33.424 C -0.081 32.318 -0.081 30.486 1.063 29.38 L 0.785 29.093 C -0.521 30.355 -0.521 32.444 0.742 33.706 L 1.025 33.424 Z M 1.065 29.378 L 13.111 17.373 L 12.829 17.09 L 0.783 29.095 L 1.065 29.378 Z M 13.111 17.09 L 1.065 5.085 L 0.783 5.368 L 12.829 17.373 L 13.111 17.09 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassArrow, __ds_default_components_illustrations_IconlyGlassArrow_1ueeb89: IconlyGlassArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassArrow.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassBag.jsx
try { (() => {
// figma node: 346:1950 Iconly/Glass/Bag
function IconlyGlassBag(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 91.999,
      height: 82.991,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 91.999,
      height: 82.991,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58.417,
      height: 61.492,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.417,
    height: 61.492,
    viewBox: "0 0 58.417 61.492",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58.417,
      height: 61.492
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42.793 13.743 L 43.423 13.743 C 51.7 13.743 58.417 20.661 58.417 29.147 L 58.417 46.119 C 58.417 54.605 51.7 61.492 43.423 61.492 L 14.994 61.492 C 6.717 61.492 0 54.605 0 46.119 L 0 29.147 C 0 20.661 6.717 13.743 14.994 13.743 L 15.624 13.743 C 15.684 10.054 17.093 6.61 19.642 4.028 C 22.221 1.414 25.52 0.092 29.238 0 C 36.676 0 42.703 6.149 42.793 13.743 Z M 22.792 7.316 C 21.113 9.038 20.183 11.313 20.123 13.742 L 38.296 13.742 C 38.206 8.7 34.188 4.61 29.239 4.61 C 26.93 4.61 24.531 5.564 22.792 7.316 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33,
    height: 30,
    viewBox: "0 0 33 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,45.651,52.795)",
      transformOrigin: "0 0",
      width: 33,
      height: 30,
      opacity: 0.5,
      color: "rgb(250,69,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.184 0 L 8.818 0 C 3.245 0 0 2.67 0 7.245 L 0 22.74 C 0 27.39 3.245 30 8.818 30 L 24.184 30 C 29.847 30 33 27.39 33 22.74 L 33 7.245 C 33 2.67 29.847 0 24.184 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.401,
      top: 5.758,
      width: 73.598,
      height: 77.233,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35.001,
    height: 23.610,
    viewBox: "0 0 35.001 23.610",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.973,
      top: 0,
      width: 35.001,
      height: 23.61,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,114,94,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.001 17.56 C 35.012 17.831 34.868 23.362 34.757 23.61 L 29.727 23.61 C 29.629 23.358 29.578 16.981 29.574 16.71 C 29.574 9.999 24.115 4.558 17.38 4.558 C 10.646 4.558 5.186 9.999 5.186 16.71 C 5.233 16.972 5.233 23.349 5.187 23.61 L 0.035 23.61 C -0.012 23.349 -0.012 16.972 0.035 16.71 C 0.426 7.371 8.138 0 17.518 0 C 26.898 0 34.609 7.371 35.001 16.71 L 35.001 17.56 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 35.001 17.56 L 34.8 17.56 L 34.801 17.568 L 35.001 17.56 Z M 34.757 23.61 L 34.757 23.81 L 34.886 23.81 L 34.939 23.692 L 34.757 23.61 Z M 29.727 23.61 L 29.54 23.683 L 29.59 23.81 L 29.727 23.81 L 29.727 23.61 Z M 29.574 16.71 L 29.374 16.71 L 29.374 16.713 L 29.574 16.71 Z M 5.186 16.71 L 4.986 16.71 L 4.986 16.728 L 4.99 16.745 L 5.186 16.71 Z M 5.187 23.61 L 5.187 23.81 L 5.354 23.81 L 5.383 23.645 L 5.187 23.61 Z M 0.035 23.61 L -0.162 23.645 L -0.133 23.81 L 0.035 23.81 L 0.035 23.61 Z M 0.035 16.71 L 0.232 16.745 L 0.234 16.732 L 0.234 16.719 L 0.035 16.71 Z M 35.001 16.71 L 35.201 16.71 L 35.2 16.702 L 35.001 16.71 Z M 34.801 17.568 C 34.806 17.694 34.773 19.134 34.725 20.587 C 34.7 21.311 34.672 22.032 34.644 22.588 C 34.629 22.866 34.615 23.101 34.6 23.274 C 34.593 23.36 34.586 23.429 34.58 23.478 C 34.576 23.503 34.573 23.521 34.571 23.533 C 34.568 23.549 34.568 23.543 34.574 23.529 L 34.939 23.692 C 34.953 23.662 34.96 23.63 34.963 23.611 C 34.968 23.587 34.972 23.56 34.976 23.531 C 34.984 23.472 34.992 23.396 34.999 23.307 C 35.014 23.128 35.029 22.888 35.043 22.609 C 35.072 22.049 35.1 21.325 35.124 20.6 C 35.173 19.158 35.206 17.697 35.2 17.551 L 34.801 17.568 Z M 34.757 23.41 L 29.727 23.41 L 29.727 23.81 L 34.757 23.81 L 34.757 23.41 Z M 29.913 23.538 C 29.919 23.553 29.918 23.559 29.915 23.539 C 29.913 23.525 29.911 23.504 29.908 23.476 C 29.903 23.419 29.897 23.34 29.892 23.242 C 29.881 23.045 29.872 22.776 29.862 22.458 C 29.844 21.822 29.828 20.994 29.815 20.164 C 29.79 18.504 29.776 16.845 29.774 16.708 L 29.374 16.713 C 29.376 16.846 29.39 18.511 29.415 20.17 C 29.428 21 29.444 21.831 29.462 22.47 C 29.472 22.789 29.482 23.062 29.493 23.263 C 29.498 23.364 29.504 23.449 29.51 23.513 C 29.513 23.545 29.516 23.575 29.52 23.599 C 29.523 23.619 29.528 23.652 29.54 23.683 L 29.913 23.538 Z M 29.774 16.71 C 29.774 9.888 24.225 4.358 17.38 4.358 L 17.38 4.758 C 24.005 4.758 29.374 10.11 29.374 16.71 L 29.774 16.71 Z M 17.38 4.358 C 10.536 4.358 4.986 9.888 4.986 16.71 L 5.386 16.71 C 5.386 10.11 10.756 4.758 17.38 4.758 L 17.38 4.358 Z M 4.99 16.745 C 4.989 16.742 4.99 16.746 4.991 16.766 C 4.992 16.783 4.994 16.807 4.995 16.836 C 4.997 16.896 5 16.976 5.002 17.076 C 5.006 17.274 5.01 17.545 5.012 17.864 C 5.018 18.502 5.021 19.331 5.021 20.16 C 5.021 20.99 5.018 21.819 5.012 22.457 C 5.01 22.776 5.006 23.047 5.002 23.245 C 5 23.345 4.997 23.425 4.995 23.485 C 4.994 23.514 4.992 23.538 4.991 23.555 C 4.99 23.575 4.989 23.579 4.99 23.576 L 5.383 23.645 C 5.389 23.613 5.392 23.557 5.394 23.501 C 5.397 23.438 5.399 23.354 5.402 23.254 C 5.406 23.053 5.41 22.78 5.412 22.461 C 5.418 21.821 5.421 20.991 5.421 20.16 C 5.421 19.33 5.418 18.5 5.412 17.86 C 5.41 17.541 5.406 17.268 5.402 17.067 C 5.399 16.966 5.397 16.883 5.394 16.82 C 5.392 16.764 5.389 16.708 5.383 16.676 L 4.99 16.745 Z M 5.187 23.41 L 0.035 23.41 L 0.035 23.81 L 5.187 23.81 L 5.187 23.41 Z M 0.232 23.576 C 0.232 23.579 0.231 23.575 0.23 23.555 C 0.229 23.538 0.228 23.514 0.226 23.485 C 0.224 23.425 0.222 23.345 0.219 23.245 C 0.215 23.047 0.212 22.776 0.209 22.457 C 0.203 21.819 0.2 20.99 0.2 20.16 C 0.2 19.331 0.203 18.502 0.209 17.864 C 0.211 17.545 0.215 17.274 0.219 17.076 C 0.222 16.976 0.224 16.896 0.226 16.836 C 0.228 16.807 0.229 16.783 0.23 16.766 C 0.231 16.746 0.232 16.742 0.232 16.745 L -0.162 16.676 C -0.168 16.708 -0.171 16.764 -0.173 16.82 C -0.176 16.883 -0.178 16.966 -0.181 17.067 C -0.185 17.268 -0.188 17.541 -0.191 17.86 C -0.197 18.5 -0.2 19.33 -0.2 20.16 C -0.2 20.991 -0.197 21.821 -0.191 22.461 C -0.188 22.78 -0.185 23.053 -0.18 23.254 C -0.178 23.354 -0.176 23.438 -0.173 23.501 C -0.171 23.557 -0.168 23.613 -0.162 23.645 L 0.232 23.576 Z M 0.234 16.719 C 0.621 7.487 8.244 0.2 17.518 0.2 L 17.518 -0.2 C 8.031 -0.2 0.231 7.255 -0.165 16.702 L 0.234 16.719 Z M 17.518 0.2 C 26.791 0.2 34.414 7.487 34.801 16.719 L 35.2 16.702 C 34.804 7.255 27.004 -0.2 17.518 -0.2 L 17.518 0.2 Z M 34.801 16.71 L 34.801 17.56 L 35.201 17.56 L 35.201 16.71 L 34.801 16.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 73.598,
    height: 60.157,
    viewBox: "0 0 73.598 60.157",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 17.076,
      width: 73.598,
      height: 60.157,
      backdropFilter: "blur(15px)",
      color: "rgba(255,172,149,0.4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 19.407 C 0 8.716 8.463 0 18.891 0 L 54.707 0 C 65.135 0 73.598 8.716 73.598 19.407 L 73.598 40.789 C 73.598 51.48 65.135 60.157 54.707 60.157 L 18.891 60.157 C 8.463 60.157 0 51.48 0 40.789 L 0 19.407 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.891 -1 C 7.885 -1 -1 8.19 -1 19.407 L 1 19.407 C 1 9.242 9.041 1 18.891 1 L 18.891 -1 Z M -1 19.407 L -1 40.789 L 1 40.789 L 1 19.407 L -1 19.407 Z M -1 40.789 C -1 52.009 7.887 61.157 18.891 61.157 L 18.891 59.157 C 9.039 59.157 1 50.951 1 40.789 L -1 40.789 Z M 18.891 61.157 L 54.707 61.157 L 54.707 59.157 L 18.891 59.157 L 18.891 61.157 Z M 54.707 61.157 C 65.711 61.157 74.598 52.009 74.598 40.789 L 72.598 40.789 C 72.598 50.951 64.559 59.157 54.707 59.157 L 54.707 61.157 Z M 74.598 40.789 L 74.598 19.407 L 72.598 19.407 L 72.598 40.789 L 74.598 40.789 Z M 74.598 19.407 C 74.598 8.19 65.713 -1 54.707 -1 L 54.707 1 C 64.557 1 72.598 9.242 72.598 19.407 L 74.598 19.407 Z M 54.707 -1 L 18.891 -1 L 18.891 1 L 54.707 1 L 54.707 -1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.723,
    height: 10.304,
    viewBox: "0 0 34.723 10.304",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.27,
      top: 23.717,
      width: 34.723,
      height: 10.304,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,114,94,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.834 10.304 C 4.42 10.304 5.667 8.987 5.667 7.399 L 5.667 2.905 C 5.667 1.317 4.42 0 2.834 0 C 1.285 0 0 1.317 0 2.905 L 0 7.399 C 0 8.987 1.285 10.304 2.834 10.304 Z M 31.889 10.304 C 33.476 10.304 34.723 8.987 34.723 7.399 L 34.723 2.905 C 34.723 1.317 33.476 0 31.889 0 C 30.34 0 29.056 1.317 29.056 2.905 L 29.056 7.399 C 29.056 8.987 30.34 10.304 31.889 10.304 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.467 7.399 C 5.467 8.883 4.304 10.104 2.834 10.104 L 2.834 10.504 C 4.537 10.504 5.867 9.091 5.867 7.399 L 5.467 7.399 Z M 5.467 2.905 L 5.467 7.399 L 5.867 7.399 L 5.867 2.905 L 5.467 2.905 Z M 2.834 0.2 C 4.304 0.2 5.467 1.421 5.467 2.905 L 5.867 2.905 C 5.867 1.213 4.537 -0.2 2.834 -0.2 L 2.834 0.2 Z M 0.2 2.905 C 0.2 1.423 1.4 0.2 2.834 0.2 L 2.834 -0.2 C 1.169 -0.2 -0.2 1.211 -0.2 2.905 L 0.2 2.905 Z M 0.2 7.399 L 0.2 2.905 L -0.2 2.905 L -0.2 7.399 L 0.2 7.399 Z M 2.834 10.104 C 1.4 10.104 0.2 8.881 0.2 7.399 L -0.2 7.399 C -0.2 9.092 1.169 10.504 2.834 10.504 L 2.834 10.104 Z M 34.523 7.399 C 34.523 8.883 33.359 10.104 31.889 10.104 L 31.889 10.504 C 33.593 10.504 34.923 9.091 34.923 7.399 L 34.523 7.399 Z M 34.523 2.905 L 34.523 7.399 L 34.923 7.399 L 34.923 2.905 L 34.523 2.905 Z M 31.889 0.2 C 33.359 0.2 34.523 1.421 34.523 2.905 L 34.923 2.905 C 34.923 1.213 33.593 -0.2 31.889 -0.2 L 31.889 0.2 Z M 29.256 2.905 C 29.256 1.423 30.455 0.2 31.889 0.2 L 31.889 -0.2 C 30.225 -0.2 28.856 1.212 28.856 2.905 L 29.256 2.905 Z M 29.256 7.399 L 29.256 2.905 L 28.856 2.905 L 28.856 7.399 L 29.256 7.399 Z M 31.889 10.104 C 30.455 10.104 29.256 8.881 29.256 7.399 L 28.856 7.399 C 28.856 9.093 30.225 10.504 31.889 10.504 L 31.889 10.104 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassBag, __ds_default_components_illustrations_IconlyGlassBag_80o0k8: IconlyGlassBag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassBag.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassCalendar.jsx
try { (() => {
// figma node: 346:1719 Iconly/Glass/Calendar
function IconlyGlassCalendar(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 101.258,
      height: 102.857,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 101.258,
      height: 102.857,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 97.016,
      height: 98.131,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 73.500,
    height: 75.583,
    viewBox: "0 0 73.500 75.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.922,0.387,-0.387,0.922,29.237,0)",
      transformOrigin: "0 0",
      width: 73.5,
      height: 75.583
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.647 14.863 C 0.268 16.395 0.066 21.152 0.014 23.549 L 73.485 23.549 C 73.433 21.148 73.231 16.354 72.856 14.863 C 70.92 6.329 64.264 0.821 54.945 0 L 18.558 0 C 9.159 0.78 2.583 6.252 0.647 14.863 Z M 0 54.636 L 0 23.549 L 73.5 23.549 L 73.5 54.885 C 73.5 67.702 65.432 75.583 52.523 75.583 L 20.937 75.583 C 8.149 75.583 0 67.539 0 54.636 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 43.523,
    height: 52.544,
    viewBox: "0 0 43.523 52.544",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.927,0.374,-0.374,0.927,35.369,15.553)",
      transformOrigin: "0 0",
      width: 43.523,
      height: 52.544,
      opacity: 0.5,
      borderRadius: 20,
      color: "rgb(235,111,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.895 0 L 11.63 0 C 4.28 0 0 4.676 0 12.689 L 0 39.829 C 0 47.973 4.28 52.544 11.63 52.544 L 31.895 52.544 C 39.364 52.544 43.523 47.973 43.523 39.829 L 43.523 12.689 C 43.523 4.676 39.364 0 31.895 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.758,
      top: 21.189,
      width: 73.5,
      height: 81.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 73.500,
    height: 75.583,
    viewBox: "0 0 73.500 75.583",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.084,
      width: 73.5,
      height: 75.583,
      backdropFilter: "blur(24px)",
      color: "rgba(255,203,185,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.647 14.863 C 0.268 16.395 0.066 21.152 0.014 23.549 L 73.485 23.549 C 73.433 21.148 73.231 16.354 72.856 14.863 C 70.92 6.329 64.264 0.821 54.945 0 L 18.558 0 C 9.159 0.78 2.583 6.252 0.647 14.863 Z M 0 23.549 L 0 54.636 C 0 67.539 8.149 75.583 20.937 75.583 L 52.523 75.583 C 65.432 75.583 73.5 67.702 73.5 54.885 L 73.5 23.549 L 0 23.549 Z M 16.781 41.328 C 16.862 43.203 18.395 44.677 20.251 44.591 C 22.066 44.513 23.518 42.962 23.438 41.079 C 23.397 39.246 21.905 37.813 20.089 37.813 C 18.234 37.898 16.781 39.45 16.781 41.328 Z M 33.361 41.328 C 33.442 43.203 34.975 44.677 36.831 44.591 C 38.646 44.513 40.098 42.962 40.018 41.079 C 39.977 39.246 38.485 37.813 36.669 37.813 C 34.814 37.898 33.361 39.45 33.361 41.328 Z M 49.941 56.147 C 49.941 58.025 51.434 59.577 53.29 59.617 C 55.186 59.617 56.719 58.066 56.719 56.147 C 56.719 54.232 55.186 52.68 53.29 52.68 L 53.249 52.68 C 51.394 52.721 49.901 54.268 49.941 56.147 Z M 36.831 59.413 C 34.975 59.499 33.442 58.025 33.361 56.147 C 33.361 54.268 34.814 52.721 36.669 52.635 C 38.485 52.635 39.977 54.068 40.018 55.906 C 40.098 57.784 38.646 59.336 36.831 59.413 Z M 20.21 59.413 C 18.355 59.499 16.822 58.025 16.741 56.147 C 16.741 54.268 18.193 52.721 20.049 52.635 C 21.864 52.635 23.357 54.068 23.397 55.906 C 23.478 57.784 22.026 59.336 20.21 59.413 Z M 53.289 37.857 C 51.434 37.898 49.981 39.409 49.981 41.287 L 49.981 41.328 C 50.022 43.203 51.555 44.632 53.41 44.591 C 55.226 44.554 56.678 43.002 56.638 41.124 C 56.557 39.323 55.105 37.857 53.289 37.857 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.014 23.549 L -0.986 23.527 C -0.992 23.796 -0.889 24.056 -0.701 24.248 C -0.513 24.44 -0.255 24.549 0.014 24.549 L 0.014 23.549 Z M 0.647 14.863 L 1.618 15.104 C 1.619 15.097 1.621 15.09 1.623 15.083 L 0.647 14.863 Z M 73.485 23.549 L 73.485 24.549 C 73.754 24.549 74.012 24.44 74.2 24.248 C 74.388 24.056 74.491 23.796 74.485 23.527 L 73.485 23.549 Z M 72.856 14.863 L 71.881 15.085 C 71.883 15.092 71.884 15.1 71.886 15.107 L 72.856 14.863 Z M 54.945 0 L 55.033 -0.996 C 55.004 -0.999 54.974 -1 54.945 -1 L 54.945 0 Z M 18.558 0 L 18.558 -1 C 18.531 -1 18.503 -0.999 18.475 -0.997 L 18.558 0 Z M 0 23.549 L 0 22.549 C -0.552 22.549 -1 22.997 -1 23.549 L 0 23.549 Z M 73.5 23.549 L 74.5 23.549 C 74.5 22.997 74.052 22.549 73.5 22.549 L 73.5 23.549 Z M 20.251 44.591 L 20.208 43.592 L 20.205 43.592 L 20.251 44.591 Z M 16.781 41.328 L 15.781 41.328 C 15.781 41.343 15.782 41.357 15.782 41.371 L 16.781 41.328 Z M 23.438 41.079 L 22.438 41.101 C 22.438 41.108 22.438 41.115 22.439 41.122 L 23.438 41.079 Z M 20.089 37.813 L 20.089 36.813 C 20.074 36.813 20.059 36.813 20.043 36.814 L 20.089 37.813 Z M 36.831 44.591 L 36.788 43.592 L 36.785 43.592 L 36.831 44.591 Z M 33.361 41.328 L 32.361 41.328 C 32.361 41.343 32.362 41.357 32.362 41.371 L 33.361 41.328 Z M 40.018 41.079 L 39.018 41.101 C 39.018 41.108 39.018 41.115 39.019 41.122 L 40.018 41.079 Z M 36.669 37.813 L 36.669 36.813 C 36.654 36.813 36.639 36.813 36.623 36.814 L 36.669 37.813 Z M 53.29 59.617 L 53.268 60.617 C 53.275 60.617 53.282 60.617 53.29 60.617 L 53.29 59.617 Z M 49.941 56.147 L 50.941 56.147 C 50.941 56.14 50.941 56.132 50.941 56.125 L 49.941 56.147 Z M 53.249 52.68 L 53.249 51.68 C 53.242 51.68 53.235 51.68 53.227 51.68 L 53.249 52.68 Z M 33.361 56.147 L 32.361 56.147 C 32.361 56.161 32.362 56.175 32.362 56.19 L 33.361 56.147 Z M 36.831 59.413 L 36.788 58.414 L 36.785 58.414 L 36.831 59.413 Z M 36.669 52.635 L 36.669 51.635 C 36.654 51.635 36.639 51.635 36.623 51.636 L 36.669 52.635 Z M 40.018 55.906 L 39.018 55.928 C 39.018 55.935 39.018 55.942 39.019 55.949 L 40.018 55.906 Z M 16.741 56.147 L 15.741 56.147 C 15.741 56.161 15.741 56.175 15.742 56.19 L 16.741 56.147 Z M 20.21 59.413 L 20.168 58.414 L 20.164 58.414 L 20.21 59.413 Z M 20.049 52.635 L 20.049 51.635 C 20.034 51.635 20.018 51.635 20.003 51.636 L 20.049 52.635 Z M 23.397 55.906 L 22.397 55.928 C 22.398 55.935 22.398 55.942 22.398 55.949 L 23.397 55.906 Z M 53.289 37.857 L 53.289 36.857 C 53.282 36.857 53.275 36.858 53.267 36.858 L 53.289 37.857 Z M 49.981 41.328 L 48.981 41.328 C 48.981 41.335 48.982 41.343 48.982 41.35 L 49.981 41.328 Z M 53.41 44.591 L 53.39 43.591 L 53.388 43.591 L 53.41 44.591 Z M 56.638 41.124 L 57.637 41.103 C 57.637 41.095 57.637 41.087 57.637 41.079 L 56.638 41.124 Z M 1.013 23.57 C 1.039 22.382 1.102 20.608 1.206 18.943 C 1.312 17.242 1.454 15.765 1.618 15.104 L -0.324 14.623 C -0.539 15.493 -0.687 17.16 -0.79 18.819 C -0.896 20.516 -0.96 22.318 -0.986 23.527 L 1.013 23.57 Z M 73.485 22.549 L 0.014 22.549 L 0.014 24.549 L 73.485 24.549 L 73.485 22.549 Z M 71.886 15.107 C 72.047 15.745 72.188 17.217 72.294 18.926 C 72.397 20.595 72.46 22.38 72.486 23.57 L 74.485 23.527 C 74.459 22.316 74.395 20.504 74.29 18.803 C 74.188 17.142 74.041 15.472 73.826 14.619 L 71.886 15.107 Z M 54.857 0.996 C 63.786 1.783 70.05 7.014 71.881 15.085 L 73.831 14.642 C 71.79 5.644 64.742 -0.141 55.033 -0.996 L 54.857 0.996 Z M 18.558 1 L 54.945 1 L 54.945 -1 L 18.558 -1 L 18.558 1 Z M 1.623 15.083 C 3.455 6.934 9.638 1.744 18.641 0.997 L 18.475 -0.997 C 8.679 -0.184 1.712 5.569 -0.329 14.644 L 1.623 15.083 Z M 1 54.636 L 1 23.549 L -1 23.549 L -1 54.636 L 1 54.636 Z M 20.937 74.583 C 14.755 74.583 9.793 72.643 6.379 69.24 C 2.965 65.837 1 60.874 1 54.636 L -1 54.636 C -1 61.301 1.109 66.811 4.967 70.656 C 8.824 74.501 14.33 76.583 20.937 76.583 L 20.937 74.583 Z M 52.523 74.583 L 20.937 74.583 L 20.937 76.583 L 52.523 76.583 L 52.523 74.583 Z M 72.5 54.885 C 72.5 61.08 70.555 65.979 67.151 69.328 C 63.745 72.679 58.773 74.583 52.523 74.583 L 52.523 76.583 C 59.182 76.583 64.698 74.547 68.554 70.753 C 72.411 66.958 74.5 61.507 74.5 54.885 L 72.5 54.885 Z M 72.5 23.549 L 72.5 54.885 L 74.5 54.885 L 74.5 23.549 L 72.5 23.549 Z M 0 24.549 L 73.5 24.549 L 73.5 22.549 L 0 22.549 L 0 24.549 Z M 20.205 43.592 C 18.934 43.651 17.839 42.639 17.781 41.285 L 15.782 41.371 C 15.885 43.766 17.856 45.703 20.297 45.59 L 20.205 43.592 Z M 22.439 41.122 C 22.496 42.454 21.47 43.538 20.208 43.592 L 20.293 45.59 C 22.662 45.489 24.541 43.469 24.437 41.036 L 22.439 41.122 Z M 20.089 38.813 C 21.368 38.813 22.41 39.818 22.438 41.101 L 24.437 41.057 C 24.385 38.673 22.441 36.813 20.089 36.813 L 20.089 38.813 Z M 17.781 41.328 C 17.781 39.969 18.829 38.872 20.136 38.811 L 20.043 36.814 C 17.639 36.925 15.781 38.931 15.781 41.328 L 17.781 41.328 Z M 36.785 43.592 C 35.514 43.651 34.419 42.639 34.361 41.285 L 32.362 41.371 C 32.465 43.766 34.436 45.703 36.877 45.59 L 36.785 43.592 Z M 39.019 41.122 C 39.076 42.454 38.05 43.538 36.788 43.592 L 36.873 45.59 C 39.242 45.489 41.121 43.469 41.017 41.036 L 39.019 41.122 Z M 36.669 38.813 C 37.948 38.813 38.99 39.818 39.018 41.101 L 41.017 41.057 C 40.965 38.673 39.021 36.813 36.669 36.813 L 36.669 38.813 Z M 34.361 41.328 C 34.361 39.969 35.409 38.872 36.716 38.811 L 36.623 36.814 C 34.219 36.925 32.361 38.931 32.361 41.328 L 34.361 41.328 Z M 53.312 58.618 C 52.013 58.589 50.941 57.495 50.941 56.147 L 48.941 56.147 C 48.941 58.555 50.855 60.564 53.268 60.617 L 53.312 58.618 Z M 55.719 56.147 C 55.719 57.525 54.622 58.617 53.29 58.617 L 53.29 60.617 C 55.749 60.617 57.719 58.607 57.719 56.147 L 55.719 56.147 Z M 53.29 53.68 C 54.623 53.68 55.719 54.773 55.719 56.147 L 57.719 56.147 C 57.719 53.69 55.749 51.68 53.29 51.68 L 53.29 53.68 Z M 53.249 53.68 L 53.29 53.68 L 53.29 51.68 L 53.249 51.68 L 53.249 53.68 Z M 50.941 56.125 C 50.913 54.799 51.968 53.708 53.271 53.68 L 53.227 51.68 C 50.82 51.733 48.889 53.738 48.942 56.168 L 50.941 56.125 Z M 32.362 56.19 C 32.465 58.587 34.435 60.525 36.877 60.412 L 36.785 58.414 C 35.515 58.473 34.419 57.463 34.361 56.104 L 32.362 56.19 Z M 36.623 51.636 C 34.22 51.747 32.361 53.748 32.361 56.147 L 34.361 56.147 C 34.361 54.789 35.407 53.694 36.716 53.634 L 36.623 51.636 Z M 41.017 55.884 C 40.965 53.497 39.022 51.635 36.669 51.635 L 36.669 53.635 C 37.947 53.635 38.99 54.64 39.018 55.928 L 41.017 55.884 Z M 36.873 60.412 C 39.242 60.311 41.121 58.292 41.017 55.863 L 39.019 55.949 C 39.076 57.276 38.051 58.36 36.788 58.414 L 36.873 60.412 Z M 15.742 56.19 C 15.845 58.587 17.815 60.525 20.257 60.412 L 20.164 58.414 C 18.895 58.473 17.799 57.463 17.74 56.104 L 15.742 56.19 Z M 20.003 51.636 C 17.6 51.747 15.741 53.748 15.741 56.147 L 17.741 56.147 C 17.741 54.789 18.787 53.694 20.095 53.634 L 20.003 51.636 Z M 24.397 55.884 C 24.345 53.497 22.402 51.635 20.049 51.635 L 20.049 53.635 C 21.327 53.635 22.369 54.64 22.397 55.928 L 24.397 55.884 Z M 20.253 60.412 C 22.621 60.311 24.501 58.292 24.396 55.863 L 22.398 55.949 C 22.455 57.276 21.43 58.36 20.168 58.414 L 20.253 60.412 Z M 50.981 41.287 C 50.981 39.939 52.013 38.886 53.311 38.857 L 53.267 36.858 C 50.854 36.911 48.981 38.88 48.981 41.287 L 50.981 41.287 Z M 50.981 41.328 L 50.981 41.287 L 48.981 41.287 L 48.981 41.328 L 50.981 41.328 Z M 53.388 43.591 C 52.073 43.62 51.009 42.617 50.981 41.307 L 48.982 41.35 C 49.034 43.788 51.036 45.643 53.432 45.591 L 53.388 43.591 Z M 55.638 41.146 C 55.667 42.498 54.626 43.566 53.39 43.591 L 53.431 45.591 C 55.825 45.542 57.689 43.507 57.637 41.103 L 55.638 41.146 Z M 53.289 38.857 C 54.542 38.857 55.581 39.874 55.639 41.169 L 57.637 41.079 C 57.533 38.773 55.668 36.857 53.289 36.857 L 53.289 38.857 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 36.388,
    height: 18.742,
    viewBox: "0 0 36.388 18.742",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.556,
      top: 0,
      width: 36.388,
      height: 18.742,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,137,41,0.2))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.212 15.598 C 6.212 17.399 4.881 18.742 3.106 18.742 C 1.331 18.742 0 17.399 0 15.598 L 0 3.148 C 0 1.347 1.331 0 3.106 0 C 4.881 0 6.212 1.347 6.212 3.148 L 6.212 15.598 Z M 36.388 15.598 C 36.388 17.399 35.017 18.742 33.282 18.742 C 31.507 18.742 30.176 17.399 30.176 15.598 L 30.176 3.148 C 30.176 1.347 31.507 0 33.282 0 C 35.017 0 36.388 1.347 36.388 3.148 L 36.388 15.598 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.106 19.142 C 5.106 19.142 6.612 17.616 6.612 15.598 L 5.812 15.598 C 5.812 17.182 4.656 18.342 3.106 18.342 L 3.106 19.142 Z M -0.4 15.598 C -0.4 17.616 1.106 19.142 3.106 19.142 L 3.106 18.342 C 1.556 18.342 0.4 17.182 0.4 15.598 L -0.4 15.598 Z M -0.4 3.148 L -0.4 15.598 L 0.4 15.598 L 0.4 3.148 L -0.4 3.148 Z M 3.106 -0.4 C 1.105 -0.4 -0.4 1.132 -0.4 3.148 L 0.4 3.148 C 0.4 1.563 1.557 0.4 3.106 0.4 L 3.106 -0.4 Z M 6.612 3.148 C 6.612 1.132 5.107 -0.4 3.106 -0.4 L 3.106 0.4 C 4.655 0.4 5.812 1.563 5.812 3.148 L 6.612 3.148 Z M 6.612 15.598 L 6.612 3.148 L 5.812 3.148 L 5.812 15.598 L 6.612 15.598 Z M 33.282 19.142 C 35.238 19.142 36.788 17.619 36.788 15.598 L 35.988 15.598 C 35.988 17.179 34.795 18.342 33.282 18.342 L 33.282 19.142 Z M 29.776 15.598 C 29.776 17.616 31.282 19.142 33.282 19.142 L 33.282 18.342 C 31.732 18.342 30.576 17.182 30.576 15.598 L 29.776 15.598 Z M 29.776 3.148 L 29.776 15.598 L 30.576 15.598 L 30.576 3.148 L 29.776 3.148 Z M 33.282 -0.4 C 31.281 -0.4 29.776 1.132 29.776 3.148 L 30.576 3.148 C 30.576 1.563 31.733 0.4 33.282 0.4 L 33.282 -0.4 Z M 36.788 3.148 C 36.788 1.128 35.239 -0.4 33.282 -0.4 L 33.282 0.4 C 34.794 0.4 35.988 1.567 35.988 3.148 L 36.788 3.148 Z M 36.788 15.598 L 36.788 3.148 L 35.988 3.148 L 35.988 15.598 L 36.788 15.598 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 39.977,
    height: 21.805,
    viewBox: "0 0 39.977 21.805",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.777,
      top: 43.934,
      width: 39.977,
      height: 21.805,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,134,35,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.041 3.516 C 0.122 5.39 1.655 6.864 3.511 6.778 C 5.326 6.701 6.778 5.149 6.697 3.267 C 6.657 1.433 5.164 0 3.349 0 C 1.494 0.086 0.041 1.637 0.041 3.516 Z M 16.62 3.516 C 16.701 5.39 18.234 6.864 20.09 6.778 C 21.905 6.701 23.357 5.149 23.277 3.267 C 23.236 1.433 21.744 0 19.928 0 C 18.073 0.086 16.62 1.637 16.62 3.516 Z M 33.2 18.334 C 33.2 20.212 34.693 21.764 36.548 21.805 C 38.444 21.805 39.977 20.253 39.977 18.334 C 39.977 16.419 38.444 14.867 36.548 14.867 L 36.508 14.867 C 34.653 14.908 33.16 16.456 33.2 18.334 Z M 20.09 21.601 C 18.234 21.687 16.701 20.213 16.62 18.334 C 16.62 16.456 18.073 14.908 19.928 14.823 C 21.744 14.823 23.236 16.256 23.277 18.093 C 23.357 19.972 21.905 21.523 20.09 21.601 Z M 3.469 21.601 C 1.614 21.687 0.081 20.213 0 18.334 C 0 16.456 1.452 14.908 3.308 14.823 C 5.123 14.823 6.616 16.256 6.656 18.093 C 6.737 19.972 5.285 21.523 3.469 21.601 Z M 36.548 0.045 C 34.693 0.086 33.24 1.597 33.24 3.475 L 33.24 3.516 C 33.281 5.39 34.814 6.819 36.669 6.778 C 38.485 6.742 39.937 5.19 39.897 3.312 C 39.816 1.511 38.364 0.045 36.548 0.045 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.511 6.778 L 3.493 6.379 L 3.492 6.379 L 3.511 6.778 Z M 0.041 3.516 L -0.359 3.516 L -0.359 3.524 L -0.358 3.533 L 0.041 3.516 Z M 6.697 3.267 L 6.297 3.275 L 6.298 3.284 L 6.697 3.267 Z M 3.349 0 L 3.349 -0.4 L 3.34 -0.4 L 3.331 -0.4 L 3.349 0 Z M 20.09 6.778 L 20.073 6.379 L 20.071 6.379 L 20.09 6.778 Z M 16.62 3.516 L 16.22 3.516 L 16.22 3.524 L 16.221 3.533 L 16.62 3.516 Z M 23.277 3.267 L 22.877 3.275 L 22.877 3.284 L 23.277 3.267 Z M 19.928 0 L 19.928 -0.4 L 19.919 -0.4 L 19.91 -0.4 L 19.928 0 Z M 36.548 21.805 L 36.54 22.205 L 36.548 22.205 L 36.548 21.805 Z M 33.2 18.334 L 33.6 18.334 L 33.6 18.325 L 33.2 18.334 Z M 36.508 14.867 L 36.508 14.467 L 36.499 14.467 L 36.508 14.867 Z M 16.62 18.334 L 16.22 18.334 L 16.22 18.343 L 16.221 18.351 L 16.62 18.334 Z M 20.09 21.601 L 20.073 21.201 L 20.071 21.201 L 20.09 21.601 Z M 19.928 14.823 L 19.928 14.423 L 19.919 14.423 L 19.91 14.423 L 19.928 14.823 Z M 23.277 18.093 L 22.877 18.102 L 22.877 18.111 L 23.277 18.093 Z M 0 18.334 L -0.4 18.334 L -0.4 18.343 L -0.4 18.351 L 0 18.334 Z M 3.469 21.601 L 3.452 21.201 L 3.451 21.201 L 3.469 21.601 Z M 3.308 14.823 L 3.308 14.423 L 3.299 14.423 L 3.289 14.423 L 3.308 14.823 Z M 6.656 18.093 L 6.256 18.102 L 6.257 18.111 L 6.656 18.093 Z M 36.548 0.045 L 36.548 -0.355 L 36.54 -0.355 L 36.548 0.045 Z M 33.24 3.516 L 32.84 3.516 L 32.841 3.524 L 33.24 3.516 Z M 36.669 6.778 L 36.661 6.379 L 36.661 6.379 L 36.669 6.778 Z M 39.897 3.312 L 40.297 3.303 L 40.296 3.294 L 39.897 3.312 Z M 3.492 6.379 C 1.871 6.454 0.513 5.165 0.441 3.499 L -0.358 3.533 C -0.269 5.615 1.439 7.274 3.529 7.178 L 3.492 6.379 Z M 6.298 3.284 C 6.369 4.946 5.087 6.311 3.493 6.379 L 3.528 7.178 C 5.564 7.091 7.187 5.352 7.097 3.25 L 6.298 3.284 Z M 3.349 0.4 C 4.95 0.4 6.262 1.662 6.298 3.275 L 7.097 3.258 C 7.052 1.204 5.379 -0.4 3.349 -0.4 L 3.349 0.4 Z M 0.441 3.516 C 0.441 1.845 1.731 0.475 3.368 0.4 L 3.331 -0.4 C 1.256 -0.304 -0.359 1.43 -0.359 3.516 L 0.441 3.516 Z M 20.071 6.379 C 18.45 6.454 17.092 5.165 17.02 3.499 L 16.221 3.533 C 16.31 5.615 18.018 7.274 20.108 7.178 L 20.071 6.379 Z M 22.877 3.284 C 22.948 4.946 21.666 6.311 20.073 6.379 L 20.107 7.178 C 22.143 7.091 23.766 5.352 23.676 3.25 L 22.877 3.284 Z M 19.928 0.4 C 21.529 0.4 22.841 1.662 22.877 3.275 L 23.676 3.258 C 23.631 1.204 21.958 -0.4 19.928 -0.4 L 19.928 0.4 Z M 17.02 3.516 C 17.02 1.845 18.311 0.475 19.947 0.4 L 19.91 -0.4 C 17.835 -0.304 16.22 1.43 16.22 3.516 L 17.02 3.516 Z M 36.557 21.405 C 34.925 21.369 33.6 20 33.6 18.334 L 32.8 18.334 C 32.8 20.424 34.461 22.159 36.54 22.205 L 36.557 21.405 Z M 39.577 18.334 C 39.577 20.037 38.219 21.405 36.548 21.405 L 36.548 22.205 C 38.67 22.205 40.377 20.469 40.377 18.334 L 39.577 18.334 Z M 36.548 15.267 C 38.219 15.267 39.577 16.636 39.577 18.334 L 40.377 18.334 C 40.377 16.202 38.67 14.467 36.548 14.467 L 36.548 15.267 Z M 36.508 15.267 L 36.548 15.267 L 36.548 14.467 L 36.508 14.467 L 36.508 15.267 Z M 33.6 18.325 C 33.565 16.668 34.882 15.303 36.517 15.267 L 36.499 14.467 C 34.423 14.513 32.755 16.244 32.8 18.343 L 33.6 18.325 Z M 16.221 18.351 C 16.31 20.438 18.018 22.097 20.108 22.001 L 20.071 21.201 C 18.45 21.276 17.092 19.988 17.02 18.317 L 16.221 18.351 Z M 19.91 14.423 C 17.835 14.519 16.22 16.248 16.22 18.334 L 17.02 18.334 C 17.02 16.664 18.31 15.298 19.947 15.222 L 19.91 14.423 Z M 23.676 18.085 C 23.631 16.027 21.959 14.423 19.928 14.423 L 19.928 15.223 C 21.529 15.223 22.841 16.485 22.877 18.102 L 23.676 18.085 Z M 20.107 22.001 C 22.143 21.914 23.766 20.175 23.676 18.076 L 22.877 18.111 C 22.948 19.768 21.667 21.133 20.073 21.201 L 20.107 22.001 Z M -0.4 18.351 C -0.31 20.438 1.398 22.097 3.488 22.001 L 3.451 21.201 C 1.83 21.276 0.471 19.988 0.4 18.317 L -0.4 18.351 Z M 3.289 14.423 C 1.215 14.519 -0.4 16.248 -0.4 18.334 L 0.4 18.334 C 0.4 16.664 1.69 15.298 3.326 15.222 L 3.289 14.423 Z M 7.056 18.085 C 7.011 16.027 5.338 14.423 3.308 14.423 L 3.308 15.223 C 4.908 15.223 6.221 16.485 6.256 18.102 L 7.056 18.085 Z M 3.486 22.001 C 5.523 21.914 7.146 20.175 7.056 18.076 L 6.257 18.111 C 6.328 19.768 5.046 21.133 3.452 21.201 L 3.486 22.001 Z M 33.64 3.475 C 33.64 1.808 34.925 0.481 36.557 0.445 L 36.54 -0.355 C 34.461 -0.309 32.84 1.385 32.84 3.475 L 33.64 3.475 Z M 33.64 3.516 L 33.64 3.475 L 32.84 3.475 L 32.84 3.516 L 33.64 3.516 Z M 36.661 6.379 C 35.021 6.415 33.676 5.156 33.64 3.507 L 32.841 3.524 C 32.886 5.624 34.606 7.224 36.678 7.178 L 36.661 6.379 Z M 39.497 3.32 C 39.532 4.988 38.245 6.346 36.661 6.379 L 36.677 7.178 C 38.724 7.137 40.341 5.392 40.296 3.303 L 39.497 3.32 Z M 36.548 0.445 C 38.139 0.445 39.425 1.731 39.497 3.33 L 40.296 3.294 C 40.206 1.291 38.589 -0.355 36.548 -0.355 L 36.548 0.445 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.212,
    height: 64.500,
    viewBox: "0 0 6.212 64.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,68.250,26.834)",
      transformOrigin: "0 0",
      width: 6.212,
      height: 64.5,
      opacity: 0.5,
      backdropFilter: "blur(15px)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.106 64.5 C 4.841 64.5 6.212 63.157 6.212 61.356 L 6.212 3.148 C 6.212 1.347 4.841 0 3.106 0 C 1.331 0 0 1.347 0 3.148 L 0 61.356 C 0 63.157 1.331 64.5 3.106 64.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassCalendar, __ds_default_components_illustrations_IconlyGlassCalendar_1e4vah4: IconlyGlassCalendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassCalendar.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassCamera.jsx
try { (() => {
// figma node: 346:1602 Iconly/Glass/Camera
function IconlyGlassCamera(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 106.948,
      height: 93.5,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 106.948,
      height: 93.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.105,
      width: 79.367,
      height: 79.367,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61.213,
    height: 61.213,
    viewBox: "0 0 61.213 61.213",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.931,-0.366,0.366,0.931,0,22.398)",
      transformOrigin: "0 0",
      width: 61.213,
      height: 61.213
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 43.89 0 L 17.354 0 C 6.978 0 0 7.284 0 18.119 L 0 43.125 C 0 53.929 6.978 61.213 17.354 61.213 L 43.89 61.213 C 54.266 61.213 61.213 53.929 61.213 43.125 L 61.213 18.119 C 61.213 7.284 54.266 0 43.89 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 36.407,
    height: 46.794,
    viewBox: "0 0 36.407 46.794",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.366,0.931,-0.931,0.366,58.192,14.910)",
      transformOrigin: "0 0",
      width: 36.407,
      height: 46.794,
      opacity: 0.5,
      color: "rgb(255,98,77)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.68 0 L 9.729 0 C 3.58 0 0 4.165 0 11.301 L 0 35.47 C 0 42.723 3.58 46.794 9.729 46.794 L 26.68 46.794 C 32.928 46.794 36.407 42.723 36.407 35.47 L 36.407 11.301 C 36.407 4.165 32.928 0 26.68 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.281,
      top: 0,
      width: 81.667,
      height: 93.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.667,
    height: 73.500,
    viewBox: "0 0 81.667 73.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 81.667,
      height: 73.5,
      backdropFilter: "blur(15px)",
      color: "rgba(255,172,149,0.4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 63.047 13.215 L 62.638 12.318 C 61.536 9.993 60.27 7.301 59.494 5.751 C 57.616 2.08 54.39 0.041 50.429 0 L 31.197 0 C 27.236 0.041 24.051 2.08 22.173 5.751 C 21.356 7.383 19.968 10.319 18.824 12.726 L 18.579 13.215 C 18.457 13.542 18.13 13.705 17.803 13.705 C 7.963 13.705 0 21.699 0 31.488 L 0 55.716 C 0 65.506 7.963 73.5 17.803 73.5 L 63.863 73.5 C 73.663 73.5 81.667 65.506 81.667 55.716 L 81.667 31.488 C 81.667 21.699 73.663 13.705 63.863 13.705 C 63.496 13.705 63.21 13.501 63.047 13.215 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 63.047 13.215 L 62.136 13.63 C 62.149 13.658 62.163 13.685 62.179 13.712 L 63.047 13.215 Z M 62.638 12.318 L 63.549 11.904 C 63.546 11.899 63.544 11.894 63.542 11.89 L 62.638 12.318 Z M 59.494 5.751 L 60.388 5.303 L 60.384 5.296 L 59.494 5.751 Z M 50.429 0 L 50.439 -1 L 50.429 -1 L 50.429 0 Z M 31.197 0 L 31.197 -1 L 31.186 -1 L 31.197 0 Z M 22.173 5.751 L 21.282 5.296 L 21.278 5.303 L 22.173 5.751 Z M 18.824 12.726 L 19.718 13.173 C 19.721 13.167 19.724 13.161 19.727 13.155 L 18.824 12.726 Z M 18.579 13.215 L 17.685 12.768 C 17.669 12.799 17.655 12.831 17.643 12.864 L 18.579 13.215 Z M 63.957 12.801 L 63.549 11.904 L 61.728 12.732 L 62.136 13.63 L 63.957 12.801 Z M 63.542 11.89 C 62.444 9.573 61.171 6.866 60.388 5.303 L 58.6 6.199 C 59.369 7.736 60.628 10.413 61.735 12.746 L 63.542 11.89 Z M 60.384 5.296 C 58.345 1.309 54.789 -0.955 50.439 -1 L 50.419 1 C 53.991 1.037 56.887 2.851 58.604 6.207 L 60.384 5.296 Z M 50.429 -1 L 31.197 -1 L 31.197 1 L 50.429 1 L 50.429 -1 Z M 31.186 -1 C 26.832 -0.955 23.32 1.313 21.282 5.296 L 23.063 6.207 C 24.782 2.847 27.639 1.037 31.207 1 L 31.186 -1 Z M 21.278 5.303 C 20.456 6.947 19.061 9.897 17.921 12.297 L 19.727 13.155 C 20.874 10.741 22.256 7.818 23.067 6.199 L 21.278 5.303 Z M 17.93 12.278 L 17.685 12.768 L 19.473 13.663 L 19.718 13.173 L 17.93 12.278 Z M 17.643 12.864 C 17.669 12.793 17.72 12.745 17.758 12.722 C 17.775 12.712 17.788 12.708 17.794 12.706 C 17.799 12.705 17.802 12.705 17.803 12.705 L 17.803 14.705 C 18.425 14.705 19.208 14.386 19.515 13.567 L 17.643 12.864 Z M 17.803 12.705 C 7.41 12.705 -1 21.147 -1 31.488 L 1 31.488 C 1 22.251 8.515 14.705 17.803 14.705 L 17.803 12.705 Z M -1 31.488 L -1 55.716 L 1 55.716 L 1 31.488 L -1 31.488 Z M -1 55.716 C -1 66.057 7.41 74.5 17.803 74.5 L 17.803 72.5 C 8.515 72.5 1 64.954 1 55.716 L -1 55.716 Z M 17.803 74.5 L 63.863 74.5 L 63.863 72.5 L 17.803 72.5 L 17.803 74.5 Z M 63.863 74.5 C 74.215 74.5 82.667 66.059 82.667 55.716 L 80.667 55.716 C 80.667 64.952 73.112 72.5 63.863 72.5 L 63.863 74.5 Z M 82.667 55.716 L 82.667 31.488 L 80.667 31.488 L 80.667 55.716 L 82.667 55.716 Z M 82.667 31.488 C 82.667 21.146 74.215 12.705 63.863 12.705 L 63.863 14.705 C 73.112 14.705 80.667 22.253 80.667 31.488 L 82.667 31.488 Z M 63.863 12.705 C 63.865 12.705 63.872 12.705 63.883 12.708 C 63.894 12.711 63.903 12.716 63.911 12.721 C 63.925 12.73 63.923 12.734 63.915 12.719 L 62.179 13.712 C 62.492 14.259 63.084 14.705 63.863 14.705 L 63.863 12.705 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 42.671,
    height: 33.038,
    viewBox: "0 0 42.671 33.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.785,
      top: 45.166,
      width: 42.671,
      height: 33.038,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,114,94,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.281 3.712 C 35.281 5.751 36.914 7.383 38.956 7.383 C 40.997 7.383 42.671 5.751 42.671 3.712 C 42.671 1.672 40.997 0 38.956 0 C 36.914 0 35.281 1.672 35.281 3.712 Z M 27.359 28.348 C 24.46 31.244 20.458 33.038 16.048 33.038 C 11.761 33.038 7.759 31.366 4.697 28.348 C 1.675 25.289 0.001 21.291 0.001 17.009 C -0.04 12.767 1.634 8.769 4.656 5.71 C 7.718 2.651 11.761 0.979 16.048 0.979 C 20.336 0.979 24.378 2.651 27.4 5.67 C 30.422 8.729 32.096 12.767 32.096 17.009 C 32.055 21.455 30.258 25.452 27.359 28.348 Z M 16.048 7.097 C 13.394 7.097 10.903 8.117 8.984 10.034 C 7.106 11.91 6.085 14.398 6.126 16.968 L 6.126 17.008 C 6.126 19.66 7.147 22.148 9.025 24.024 C 10.903 25.9 13.394 26.92 16.048 26.92 C 21.52 26.92 25.93 22.474 25.971 17.008 C 25.971 14.357 24.95 11.869 23.072 9.993 C 21.193 8.117 18.702 7.097 16.048 7.097 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 27.359 28.348 L 27.5 28.489 L 27.359 28.348 Z M 4.697 28.348 L 4.554 28.488 L 4.556 28.49 L 4.697 28.348 Z M 0.001 17.009 L 0.201 17.009 L 0.201 17.007 L 0.001 17.009 Z M 4.656 5.71 L 4.514 5.569 L 4.513 5.57 L 4.656 5.71 Z M 27.4 5.67 L 27.542 5.529 L 27.541 5.528 L 27.4 5.67 Z M 32.096 17.009 L 32.296 17.01 L 32.296 17.009 L 32.096 17.009 Z M 8.984 10.034 L 9.125 10.175 L 8.984 10.034 Z M 6.126 16.968 L 6.326 16.968 L 6.326 16.965 L 6.126 16.968 Z M 9.025 24.024 L 9.166 23.883 L 9.166 23.883 L 9.025 24.024 Z M 25.971 17.008 L 26.171 17.01 L 26.171 17.008 L 25.971 17.008 Z M 23.072 9.993 L 22.93 10.134 L 22.93 10.134 L 23.072 9.993 Z M 38.956 7.183 C 37.024 7.183 35.481 5.64 35.481 3.712 L 35.081 3.712 C 35.081 5.862 36.804 7.583 38.956 7.583 L 38.956 7.183 Z M 42.471 3.712 C 42.471 5.638 40.89 7.183 38.956 7.183 L 38.956 7.583 C 41.105 7.583 42.871 5.865 42.871 3.712 L 42.471 3.712 Z M 38.956 0.2 C 40.887 0.2 42.471 1.783 42.471 3.712 L 42.871 3.712 C 42.871 1.562 41.108 -0.2 38.956 -0.2 L 38.956 0.2 Z M 35.481 3.712 C 35.481 1.78 37.027 0.2 38.956 0.2 L 38.956 -0.2 C 36.801 -0.2 35.081 1.565 35.081 3.712 L 35.481 3.712 Z M 16.048 33.238 C 20.514 33.238 24.565 31.421 27.5 28.489 L 27.218 28.206 C 24.354 31.066 20.403 32.838 16.048 32.838 L 16.048 33.238 Z M 4.556 28.49 C 7.655 31.545 11.707 33.238 16.048 33.238 L 16.048 32.838 C 11.814 32.838 7.863 31.187 4.837 28.205 L 4.556 28.49 Z M -0.199 17.009 C -0.199 21.345 1.496 25.393 4.554 28.488 L 4.839 28.207 C 1.853 25.185 0.201 21.238 0.201 17.009 L -0.199 17.009 Z M 4.513 5.57 C 1.456 8.665 -0.241 12.713 -0.199 17.011 L 0.201 17.007 C 0.16 12.82 1.812 8.874 4.798 5.851 L 4.513 5.57 Z M 16.048 0.779 C 11.707 0.779 7.614 2.472 4.514 5.569 L 4.797 5.852 C 7.822 2.83 11.814 1.179 16.048 1.179 L 16.048 0.779 Z M 27.541 5.528 C 24.482 2.472 20.389 0.779 16.048 0.779 L 16.048 1.179 C 20.283 1.179 24.274 2.83 27.259 5.811 L 27.541 5.528 Z M 32.296 17.009 C 32.296 12.713 30.6 8.625 27.542 5.529 L 27.258 5.81 C 30.243 8.832 31.896 12.82 31.896 17.009 L 32.296 17.009 Z M 27.5 28.489 C 30.436 25.557 32.254 21.51 32.296 17.01 L 31.896 17.007 C 31.855 21.399 30.081 25.346 27.218 28.206 L 27.5 28.489 Z M 9.125 10.175 C 11.007 8.296 13.447 7.297 16.048 7.297 L 16.048 6.897 C 13.341 6.897 10.799 7.938 8.843 9.892 L 9.125 10.175 Z M 6.326 16.965 C 6.286 14.451 7.284 12.014 9.125 10.175 L 8.843 9.892 C 6.927 11.806 5.884 14.345 5.926 16.971 L 6.326 16.965 Z M 6.326 17.008 L 6.326 16.968 L 5.926 16.968 L 5.926 17.008 L 6.326 17.008 Z M 9.166 23.883 C 7.326 22.044 6.326 19.607 6.326 17.008 L 5.926 17.008 C 5.926 19.712 6.967 22.251 8.884 24.166 L 9.166 23.883 Z M 16.048 26.72 C 13.446 26.72 11.007 25.721 9.166 23.883 L 8.884 24.166 C 10.8 26.08 13.342 27.12 16.048 27.12 L 16.048 26.72 Z M 25.771 17.007 C 25.731 22.364 21.408 26.72 16.048 26.72 L 16.048 27.12 C 21.631 27.12 26.129 22.584 26.171 17.01 L 25.771 17.007 Z M 22.93 10.134 C 24.771 11.973 25.771 14.41 25.771 17.008 L 26.171 17.008 C 26.171 14.305 25.129 11.766 23.213 9.851 L 22.93 10.134 Z M 16.048 7.297 C 18.65 7.297 21.09 8.296 22.93 10.134 L 23.213 9.851 C 21.297 7.937 18.755 6.897 16.048 6.897 L 16.048 7.297 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.500,
    height: 25,
    viewBox: "0 0 17.500 25",
    fill: "none",
    style: {
      position: "absolute",
      left: 59.719,
      top: 0,
      width: 17.5,
      height: 25,
      borderRadius: 0.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.617 0 L 5.352 0 C 5.141 0 4.953 0.133 4.881 0.332 L 0.239 13.332 C 0.122 13.657 0.364 14 0.71 14 L 6.786 14 C 7.133 14 7.375 14.345 7.256 14.671 L 4.338 22.695 C 4.152 23.206 4.802 23.605 5.174 23.207 L 16.715 10.841 C 17.013 10.522 16.787 10 16.349 10 L 10.383 10 C 9.994 10 9.754 9.576 9.954 9.243 L 15.046 0.757 C 15.246 0.424 15.006 0 14.617 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassCamera, __ds_default_components_illustrations_IconlyGlassCamera_1p8829j: IconlyGlassCamera });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassCamera.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassDiscount.jsx
try { (() => {
// figma node: 346:1935 Iconly/Glass/Discount
function IconlyGlassDiscount(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 95.833,
      height: 95.818,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 95.833,
      height: 95.818,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.667,
      height: 81.648,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.667,
    height: 81.648,
    viewBox: "0 0 81.667 81.648",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.667,
      height: 81.648
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 78.071 32.117 L 75.13 29.177 C 73.986 28.034 73.333 26.482 73.333 24.853 L 73.333 20.643 C 73.333 13.864 67.818 8.356 61.037 8.356 L 56.83 8.356 C 55.196 8.356 53.644 7.699 52.5 6.555 L 49.518 3.579 C 44.698 -1.199 36.896 -1.199 32.117 3.615 L 29.176 6.555 C 28.032 7.699 26.48 8.356 24.846 8.356 L 20.639 8.356 C 13.858 8.356 8.343 13.864 8.343 20.643 L 8.343 24.808 C 8.343 26.482 7.69 28.034 6.546 29.177 L 3.564 32.162 C -1.215 36.976 -1.174 44.779 3.605 49.553 L 6.546 52.452 C 7.69 53.636 8.343 55.188 8.343 56.825 L 8.343 61.027 C 8.343 67.805 13.858 73.322 20.639 73.322 L 24.846 73.322 C 26.48 73.322 28.032 73.971 29.176 75.114 L 32.158 78.099 C 34.568 80.468 37.713 81.648 40.858 81.648 C 44.004 81.648 47.149 80.468 49.559 78.054 L 52.5 75.114 C 53.644 73.971 55.196 73.322 56.83 73.322 L 61.037 73.322 C 67.818 73.322 73.333 67.805 73.333 61.027 L 73.333 56.825 C 73.333 55.188 73.986 53.636 75.13 52.493 L 78.03 49.594 C 78.071 49.553 78.112 49.516 78.153 49.471 C 80.44 47.148 81.707 44.04 81.666 40.774 C 81.666 37.507 80.399 34.404 78.071 32.117 L 78.071 32.117 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 54.070,
    height: 54.058,
    viewBox: "0 0 54.070 54.058",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.798,
      top: 13.795,
      width: 54.07,
      height: 54.058,
      opacity: 0.5,
      color: "rgb(228,104,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 51.69 21.264 L 49.743 19.318 C 48.985 18.561 48.553 17.533 48.553 16.455 L 48.553 13.667 C 48.553 9.179 44.902 5.532 40.412 5.532 L 37.626 5.532 C 36.545 5.532 35.517 5.097 34.76 4.34 L 32.785 2.369 C 29.594 -0.794 24.428 -0.794 21.264 2.394 L 19.317 4.34 C 18.56 5.097 17.532 5.532 16.45 5.532 L 13.665 5.532 C 9.175 5.532 5.524 9.179 5.524 13.667 L 5.524 16.425 C 5.524 17.533 5.091 18.561 4.334 19.318 L 2.36 21.294 C -0.805 24.481 -0.778 29.648 2.387 32.808 L 4.334 34.728 C 5.091 35.512 5.524 36.539 5.524 37.623 L 5.524 40.405 C 5.524 44.893 9.175 48.545 13.665 48.545 L 16.45 48.545 C 17.532 48.545 18.56 48.975 19.317 49.732 L 21.291 51.709 C 22.887 53.277 24.969 54.058 27.052 54.058 C 29.134 54.058 31.217 53.277 32.812 51.679 L 34.76 49.732 C 35.517 48.975 36.545 48.545 37.626 48.545 L 40.412 48.545 C 44.902 48.545 48.553 44.893 48.553 40.405 L 48.553 37.623 C 48.553 36.539 48.985 35.512 49.743 34.755 L 51.663 32.835 C 51.69 32.808 51.717 32.784 51.744 32.754 C 53.258 31.216 54.097 29.159 54.07 26.996 C 54.07 24.833 53.231 22.778 51.69 21.264 L 51.69 21.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.166,
      top: 14.17,
      width: 81.667,
      height: 81.648,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.667,
    height: 81.648,
    viewBox: "0 0 81.667 81.648",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.667,
      height: 81.648,
      backdropFilter: "blur(24px)",
      color: "rgba(255,203,185,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 78.071 32.117 L 75.13 29.177 C 73.986 28.034 73.333 26.482 73.333 24.853 L 73.333 20.643 C 73.333 13.864 67.818 8.356 61.037 8.356 L 56.83 8.356 C 55.196 8.356 53.644 7.699 52.5 6.555 L 49.518 3.579 C 44.698 -1.199 36.896 -1.199 32.117 3.615 L 29.176 6.555 C 28.032 7.699 26.48 8.356 24.846 8.356 L 20.639 8.356 C 13.858 8.356 8.343 13.864 8.343 20.643 L 8.343 24.808 C 8.343 26.482 7.69 28.034 6.546 29.177 L 3.564 32.162 C -1.215 36.976 -1.174 44.779 3.605 49.553 L 6.546 52.452 C 7.69 53.636 8.343 55.188 8.343 56.825 L 8.343 61.027 C 8.343 67.805 13.858 73.322 20.639 73.322 L 24.846 73.322 C 26.48 73.322 28.032 73.971 29.176 75.114 L 32.158 78.099 C 34.568 80.468 37.713 81.648 40.858 81.648 C 44.004 81.648 47.149 80.468 49.559 78.054 L 52.5 75.114 C 53.644 73.971 55.196 73.322 56.83 73.322 L 61.037 73.322 C 67.818 73.322 73.333 67.805 73.333 61.027 L 73.333 56.825 C 73.333 55.188 73.986 53.636 75.13 52.493 L 78.03 49.594 C 78.071 49.553 78.112 49.516 78.153 49.471 C 80.44 47.148 81.707 44.04 81.666 40.774 C 81.666 37.507 80.399 34.404 78.071 32.117 L 78.071 32.117 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 75.13 29.177 L 75.837 28.47 L 75.837 28.47 L 75.13 29.177 Z M 52.5 6.555 L 53.207 5.848 L 53.207 5.848 L 52.5 6.555 Z M 49.518 3.579 L 50.225 2.871 L 50.222 2.868 L 49.518 3.579 Z M 32.117 3.615 L 32.824 4.323 L 32.827 4.32 L 32.117 3.615 Z M 29.176 6.555 L 29.883 7.263 L 29.883 7.263 L 29.176 6.555 Z M 6.546 29.177 L 5.839 28.47 L 5.839 28.47 L 6.546 29.177 Z M 3.564 32.162 L 2.857 31.455 L 2.854 31.457 L 3.564 32.162 Z M 3.605 49.553 L 2.898 50.26 L 2.903 50.265 L 3.605 49.553 Z M 6.546 52.452 L 7.265 51.757 C 7.26 51.751 7.254 51.746 7.248 51.74 L 6.546 52.452 Z M 29.176 75.114 L 29.883 74.408 L 29.883 74.407 L 29.176 75.114 Z M 32.158 78.099 L 31.45 78.806 L 31.457 78.813 L 32.158 78.099 Z M 49.559 78.054 L 48.852 77.347 L 48.851 77.348 L 49.559 78.054 Z M 52.5 75.114 L 53.207 75.822 L 53.207 75.822 L 52.5 75.114 Z M 75.13 52.493 L 75.837 53.2 L 75.837 53.2 L 75.13 52.493 Z M 78.03 49.594 L 77.323 48.886 L 77.323 48.886 L 78.03 49.594 Z M 78.153 49.471 L 77.44 48.77 C 77.431 48.779 77.422 48.789 77.413 48.798 L 78.153 49.471 Z M 81.666 40.774 L 80.666 40.774 L 80.666 40.786 L 81.666 40.774 Z M 78.778 31.41 L 75.837 28.47 L 74.423 29.884 L 77.364 32.824 L 78.778 31.41 Z M 75.837 28.47 C 74.878 27.512 74.333 26.213 74.333 24.853 L 72.333 24.853 C 72.333 26.751 73.094 28.556 74.423 29.884 L 75.837 28.47 Z M 74.333 24.853 L 74.333 20.643 L 72.333 20.643 L 72.333 24.853 L 74.333 24.853 Z M 74.333 20.643 C 74.333 13.311 68.37 7.356 61.037 7.356 L 61.037 9.356 C 67.267 9.356 72.333 14.418 72.333 20.643 L 74.333 20.643 Z M 61.037 7.356 L 56.83 7.356 L 56.83 9.356 L 61.037 9.356 L 61.037 7.356 Z M 56.83 7.356 C 55.466 7.356 54.167 6.807 53.207 5.848 L 51.793 7.263 C 53.121 8.59 54.926 9.356 56.83 9.356 L 56.83 7.356 Z M 53.207 5.848 L 50.225 2.871 L 48.812 4.286 L 51.794 7.263 L 53.207 5.848 Z M 50.222 2.868 C 45.014 -2.294 36.579 -2.299 31.407 2.911 L 32.827 4.32 C 37.214 -0.099 44.383 -0.104 48.814 4.289 L 50.222 2.868 Z M 31.41 2.908 L 28.469 5.848 L 29.883 7.263 L 32.824 4.323 L 31.41 2.908 Z M 28.469 5.848 C 27.509 6.807 26.21 7.356 24.846 7.356 L 24.846 9.356 C 26.75 9.356 28.555 8.59 29.883 7.263 L 28.469 5.848 Z M 24.846 7.356 L 20.639 7.356 L 20.639 9.356 L 24.846 9.356 L 24.846 7.356 Z M 20.639 7.356 C 13.306 7.356 7.343 13.311 7.343 20.643 L 9.343 20.643 C 9.343 14.418 14.409 9.356 20.639 9.356 L 20.639 7.356 Z M 7.343 20.643 L 7.343 24.808 L 9.343 24.808 L 9.343 20.643 L 7.343 20.643 Z M 7.343 24.808 C 7.343 26.217 6.795 27.514 5.839 28.47 L 7.253 29.884 C 8.585 28.553 9.343 26.747 9.343 24.808 L 7.343 24.808 Z M 5.839 28.47 L 2.857 31.455 L 4.272 32.869 L 7.253 29.884 L 5.839 28.47 Z M 2.854 31.457 C -2.315 36.664 -2.269 45.099 2.898 50.26 L 4.312 48.845 C -0.079 44.46 -0.116 37.288 4.274 32.866 L 2.854 31.457 Z M 2.903 50.265 L 5.844 53.164 L 7.248 51.74 L 4.307 48.841 L 2.903 50.265 Z M 5.827 53.147 C 6.799 54.153 7.343 55.459 7.343 56.825 L 9.343 56.825 C 9.343 54.917 8.581 53.119 7.265 51.757 L 5.827 53.147 Z M 7.343 56.825 L 7.343 61.027 L 9.343 61.027 L 9.343 56.825 L 7.343 56.825 Z M 7.343 61.027 C 7.343 68.357 13.305 74.322 20.639 74.322 L 20.639 72.322 C 14.41 72.322 9.343 67.253 9.343 61.027 L 7.343 61.027 Z M 20.639 74.322 L 24.846 74.322 L 24.846 72.322 L 20.639 72.322 L 20.639 74.322 Z M 24.846 74.322 C 26.213 74.322 27.512 74.865 28.469 75.822 L 29.883 74.407 C 28.552 73.077 26.746 72.322 24.846 72.322 L 24.846 74.322 Z M 28.468 75.821 L 31.45 78.806 L 32.865 77.393 L 29.883 74.408 L 28.468 75.821 Z M 31.457 78.813 C 34.063 81.373 37.463 82.648 40.858 82.648 L 40.858 80.648 C 37.963 80.648 35.073 79.562 32.859 77.386 L 31.457 78.813 Z M 40.858 82.648 C 44.255 82.648 47.659 81.372 50.267 78.761 L 48.851 77.348 C 46.639 79.563 43.753 80.648 40.858 80.648 L 40.858 82.648 Z M 50.266 78.762 L 53.207 75.822 L 51.793 74.407 L 48.852 77.347 L 50.266 78.762 Z M 53.207 75.822 C 54.164 74.865 55.463 74.322 56.83 74.322 L 56.83 72.322 C 54.93 72.322 53.124 73.077 51.793 74.407 L 53.207 75.822 Z M 56.83 74.322 L 61.037 74.322 L 61.037 72.322 L 56.83 72.322 L 56.83 74.322 Z M 61.037 74.322 C 68.371 74.322 74.333 68.357 74.333 61.027 L 72.333 61.027 C 72.333 67.253 67.266 72.322 61.037 72.322 L 61.037 74.322 Z M 74.333 61.027 L 74.333 56.825 L 72.333 56.825 L 72.333 61.027 L 74.333 61.027 Z M 74.333 56.825 C 74.333 55.456 74.879 54.158 75.837 53.2 L 74.423 51.786 C 73.094 53.115 72.333 54.92 72.333 56.825 L 74.333 56.825 Z M 75.837 53.2 L 78.737 50.301 L 77.323 48.886 L 74.423 51.786 L 75.837 53.2 Z M 78.737 50.301 C 78.752 50.286 78.756 50.283 78.789 50.25 C 78.815 50.225 78.852 50.188 78.893 50.144 L 77.413 48.798 C 77.412 48.799 77.408 48.803 77.394 48.818 C 77.385 48.826 77.379 48.832 77.365 48.845 C 77.354 48.856 77.339 48.871 77.323 48.886 L 78.737 50.301 Z M 78.865 50.173 C 81.338 47.661 82.71 44.298 82.666 40.761 L 80.666 40.786 C 80.703 43.783 79.543 46.634 77.44 48.77 L 78.865 50.173 Z M 82.666 40.774 C 82.666 37.246 81.297 33.883 78.772 31.403 L 77.37 32.83 C 79.502 34.924 80.666 37.768 80.666 40.774 L 82.666 40.774 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.144,
    height: 28.152,
    viewBox: "0 0 28.144 28.152",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.766,
      top: 26.75,
      width: 28.144,
      height: 28.152,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,148,63,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.086 27.09 C 5.433 27.784 4.534 28.152 3.554 28.152 C 2.614 28.152 1.716 27.784 1.062 27.09 C -0.327 25.702 -0.327 23.415 1.062 22.027 L 22.058 1.038 C 23.447 -0.346 25.694 -0.346 27.082 1.038 C 28.471 2.427 28.471 4.717 27.082 6.106 L 6.086 27.09 Z M 24.591 28.152 C 22.589 28.152 20.996 26.559 20.996 24.558 C 20.996 22.602 22.589 21.006 24.591 21.006 C 26.551 21.006 28.144 22.602 28.144 24.558 C 28.144 26.559 26.551 28.152 24.591 28.152 Z M 7.148 3.57 C 7.148 1.61 5.555 0.018 3.595 0.018 C 1.634 0.018 0 1.61 0 3.57 C 0 5.575 1.634 7.163 3.595 7.163 C 5.555 7.163 7.148 5.575 7.148 3.57 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.086 27.09 L 5.804 26.807 L 5.795 26.816 L 6.086 27.09 Z M 1.062 27.09 L 1.353 26.816 L 1.345 26.807 L 1.062 27.09 Z M 1.062 22.027 L 0.779 21.744 L 0.779 21.744 L 1.062 22.027 Z M 22.058 1.038 L 21.776 0.755 L 21.775 0.755 L 22.058 1.038 Z M 27.082 1.038 L 27.365 0.755 L 27.365 0.755 L 27.082 1.038 Z M 27.082 6.106 L 27.365 6.389 L 27.365 6.388 L 27.082 6.106 Z M 3.554 28.552 C 4.637 28.552 5.643 28.144 6.378 27.364 L 5.795 26.816 C 5.222 27.424 4.432 27.752 3.554 27.752 L 3.554 28.552 Z M 0.771 27.364 C 1.504 28.142 2.509 28.552 3.554 28.552 L 3.554 27.752 C 2.719 27.752 1.928 27.426 1.353 26.816 L 0.771 27.364 Z M 0.779 21.744 C -0.766 23.288 -0.766 25.828 0.779 27.373 L 1.345 26.807 C 0.112 25.575 0.112 23.542 1.345 22.309 L 0.779 21.744 Z M 21.775 0.755 L 0.779 21.744 L 1.345 22.309 L 22.341 1.321 L 21.775 0.755 Z M 27.365 0.755 C 25.82 -0.785 23.321 -0.785 21.776 0.755 L 22.34 1.321 C 23.573 0.093 25.567 0.093 26.8 1.321 L 27.365 0.755 Z M 27.365 6.388 C 28.91 4.844 28.91 2.3 27.365 0.755 L 26.8 1.321 C 28.032 2.553 28.032 4.591 26.8 5.823 L 27.365 6.388 Z M 6.369 27.373 L 27.365 6.389 L 26.8 5.823 L 5.804 26.807 L 6.369 27.373 Z M 20.596 24.558 C 20.596 26.78 22.368 28.552 24.591 28.552 L 24.591 27.752 C 22.81 27.752 21.396 26.338 21.396 24.558 L 20.596 24.558 Z M 24.591 20.606 C 22.371 20.606 20.596 22.379 20.596 24.558 L 21.396 24.558 C 21.396 22.826 22.807 21.406 24.591 21.406 L 24.591 20.606 Z M 28.544 24.558 C 28.544 22.382 26.772 20.606 24.591 20.606 L 24.591 21.406 C 26.33 21.406 27.744 22.823 27.744 24.558 L 28.544 24.558 Z M 24.591 28.552 C 26.775 28.552 28.544 26.777 28.544 24.558 L 27.744 24.558 C 27.744 26.341 26.328 27.752 24.591 27.752 L 24.591 28.552 Z M 3.595 0.418 C 5.335 0.418 6.748 1.831 6.748 3.57 L 7.548 3.57 C 7.548 1.389 5.776 -0.382 3.595 -0.382 L 3.595 0.418 Z M 0.4 3.57 C 0.4 1.837 1.849 0.418 3.595 0.418 L 3.595 -0.382 C 1.419 -0.382 -0.4 1.383 -0.4 3.57 L 0.4 3.57 Z M 3.595 6.763 C 1.851 6.763 0.4 5.351 0.4 3.57 L -0.4 3.57 C -0.4 5.799 1.416 7.563 3.595 7.563 L 3.595 6.763 Z M 6.748 3.57 C 6.748 5.357 5.332 6.763 3.595 6.763 L 3.595 7.563 C 5.779 7.563 7.548 5.793 7.548 3.57 L 6.748 3.57 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassDiscount, __ds_default_components_illustrations_IconlyGlassDiscount_6xau0n: IconlyGlassDiscount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassDiscount.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassFilter.jsx
try { (() => {
// figma node: 346:1888 Iconly/Glass/Filter
function IconlyGlassFilter(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 90.666,
      height: 73.665,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 90.666,
      height: 73.665,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 13.967,
      width: 50,
      height: 53.68,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 50,
    height: 50,
    viewBox: "0 0 50 50",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 3.68,
      width: 50,
      height: 50
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.32 0 L 44.68 0 C 47.619 0 50 2.453 50 5.481 L 50 9.309 C 50 10.778 49.426 12.189 48.407 13.218 L 32.144 29.668 C 32.016 29.798 31.868 29.902 31.706 29.976 L 31.706 42.838 C 31.706 43.618 31.264 44.323 30.574 44.649 L 19.557 49.822 C 19.3 49.942 19.027 50 18.754 50 C 18.391 50 18.028 49.894 17.711 49.684 C 17.158 49.319 16.823 48.688 16.823 48.011 L 16.823 29.915 C 16.659 29.833 16.509 29.72 16.381 29.58 L 1.436 13.143 C 0.512 12.128 0 10.786 0 9.394 L 0 5.483 C 0 2.455 2.381 0 5.32 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,26.254,0)",
      transformOrigin: "0 0",
      width: 23.618,
      height: 14.984,
      borderRadius: 3,
      backgroundColor: "rgba(130,55,255,0.5)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17,
      top: 0,
      width: 73.666,
      height: 73.665,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 73.666,
    height: 73.665,
    viewBox: "0 0 73.666 73.665",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 73.666,
      height: 73.665,
      backdropFilter: "blur(24px)",
      color: "rgba(186,144,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.839 0 L 65.827 0 C 70.158 0 73.666 3.613 73.666 8.075 L 73.666 13.716 C 73.666 15.88 72.82 17.958 71.318 19.474 L 47.358 43.71 C 46.945 44.131 46.384 44.366 45.803 44.362 L 25.742 44.299 C 25.132 44.299 24.551 44.038 24.134 43.581 L 2.116 19.364 C 0.755 17.868 0 15.892 0 13.841 L 0 8.079 C 0 3.617 3.508 0 7.839 0 Z M 26.816 50.918 L 44.696 50.973 C 45.811 50.977 46.714 51.91 46.714 53.055 L 46.714 63.114 C 46.714 64.262 46.062 65.302 45.045 65.782 L 28.814 73.404 C 28.435 73.579 28.033 73.665 27.631 73.665 C 27.096 73.665 26.562 73.509 26.095 73.2 C 25.28 72.661 24.787 71.732 24.787 70.735 L 24.787 53 C 24.787 51.848 25.697 50.914 26.816 50.918 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 71.318 19.474 L 70.608 18.77 L 70.607 18.771 L 71.318 19.474 Z M 47.358 43.71 L 46.647 43.006 L 46.644 43.01 L 47.358 43.71 Z M 45.803 44.362 L 45.81 43.362 L 45.807 43.362 L 45.803 44.362 Z M 25.742 44.299 L 25.745 43.299 L 25.742 43.299 L 25.742 44.299 Z M 24.134 43.581 L 23.394 44.253 L 23.396 44.255 L 24.134 43.581 Z M 2.116 19.364 L 2.856 18.692 L 2.856 18.691 L 2.116 19.364 Z M 44.696 50.973 L 44.7 49.973 L 44.7 49.973 L 44.696 50.973 Z M 26.816 50.918 L 26.812 51.918 L 26.813 51.918 L 26.816 50.918 Z M 45.045 65.782 L 45.47 66.687 L 45.473 66.686 L 45.045 65.782 Z M 28.814 73.404 L 29.235 74.311 L 29.239 74.309 L 28.814 73.404 Z M 26.095 73.2 L 26.647 72.366 L 26.647 72.366 L 26.095 73.2 Z M 65.827 -1 L 7.839 -1 L 7.839 1 L 65.827 1 L 65.827 -1 Z M 74.666 8.075 C 74.666 3.089 70.738 -1 65.827 -1 L 65.827 1 C 69.578 1 72.666 4.138 72.666 8.075 L 74.666 8.075 Z M 74.666 13.716 L 74.666 8.075 L 72.666 8.075 L 72.666 13.716 L 74.666 13.716 Z M 72.028 20.178 C 73.719 18.471 74.666 16.138 74.666 13.716 L 72.666 13.716 C 72.666 15.621 71.92 17.445 70.608 18.77 L 72.028 20.178 Z M 48.069 44.413 L 72.029 20.177 L 70.607 18.771 L 46.647 43.006 L 48.069 44.413 Z M 45.797 45.362 C 46.651 45.368 47.472 45.022 48.073 44.409 L 46.644 43.01 C 46.418 43.24 46.116 43.364 45.81 43.362 L 45.797 45.362 Z M 25.739 45.299 L 45.8 45.362 L 45.807 43.362 L 25.745 43.299 L 25.739 45.299 Z M 23.396 44.255 C 23.997 44.913 24.842 45.299 25.742 45.299 L 25.742 43.299 C 25.421 43.299 25.106 43.162 24.873 42.906 L 23.396 44.255 Z M 1.376 20.037 L 23.394 44.253 L 24.874 42.908 L 2.856 18.692 L 1.376 20.037 Z M -1 13.841 C -1 16.135 -0.156 18.353 1.376 20.037 L 2.856 18.691 C 1.665 17.383 1 15.648 1 13.841 L -1 13.841 Z M -1 8.079 L -1 13.841 L 1 13.841 L 1 8.079 L -1 8.079 Z M 7.839 -1 C 2.927 -1 -1 3.094 -1 8.079 L 1 8.079 C 1 4.141 4.089 1 7.839 1 L 7.839 -1 Z M 44.7 49.973 L 26.819 49.918 L 26.813 51.918 L 44.693 51.973 L 44.7 49.973 Z M 47.714 53.055 C 47.714 51.387 46.393 49.979 44.7 49.973 L 44.693 51.973 C 45.23 51.974 45.714 52.434 45.714 53.055 L 47.714 53.055 Z M 47.714 63.114 L 47.714 53.055 L 45.714 53.055 L 45.714 63.114 L 47.714 63.114 Z M 45.473 66.686 C 46.846 66.037 47.714 64.641 47.714 63.114 L 45.714 63.114 C 45.714 63.884 45.277 64.566 44.618 64.878 L 45.473 66.686 Z M 29.239 74.309 L 45.47 66.687 L 44.62 64.877 L 28.389 72.498 L 29.239 74.309 Z M 27.631 74.665 C 28.177 74.665 28.722 74.548 29.235 74.311 L 28.394 72.496 C 28.148 72.61 27.889 72.665 27.631 72.665 L 27.631 74.665 Z M 25.543 74.034 C 26.174 74.452 26.901 74.665 27.631 74.665 L 27.631 72.665 C 27.291 72.665 26.949 72.566 26.647 72.366 L 25.543 74.034 Z M 23.787 70.735 C 23.787 72.059 24.441 73.306 25.544 74.035 L 26.647 72.366 C 26.118 72.017 25.787 71.404 25.787 70.735 L 23.787 70.735 Z M 23.787 53 L 23.787 70.735 L 25.787 70.735 L 25.787 53 L 23.787 53 Z M 26.819 49.918 C 25.119 49.912 23.787 51.322 23.787 53 L 25.787 53 C 25.787 52.373 26.275 51.916 26.812 51.918 L 26.819 49.918 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassFilter, __ds_default_components_illustrations_IconlyGlassFilter_1rbreic: IconlyGlassFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassFilter.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassFolder.jsx
try { (() => {
// figma node: 346:1858 Iconly/Glass/Folder
function IconlyGlassFolder(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 104.129,
      height: 93.524,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104.129,
      height: 93.524,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.053,
      top: 0,
      width: 80.076,
      height: 85.095,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 63.882,
    height: 70.980,
    viewBox: "0 0 63.882 70.980",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.966,0.259,-0.259,0.966,18.371,0)",
      transformOrigin: "0 0",
      width: 63.882,
      height: 70.98
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.815 0 L 17.071 0 C 6.282 0 0 6.317 0 17.142 L 0 53.803 C 0 64.804 6.282 70.98 17.071 70.98 L 46.815 70.98 C 57.777 70.98 63.882 64.804 63.882 53.803 L 63.882 17.142 C 63.882 6.317 57.777 0 46.815 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 43.682,
    height: 48.536,
    viewBox: "0 0 43.682 48.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.966,0.259,-0.259,0.966,25.221,13.453)",
      transformOrigin: "0 0",
      width: 43.682,
      height: 48.536,
      opacity: 0.5,
      color: "rgb(248,102,82)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.012 0 L 11.673 0 C 4.295 0 0 4.32 0 11.721 L 0 36.79 C 0 44.313 4.295 48.536 11.673 48.536 L 32.012 48.536 C 39.508 48.536 43.682 44.313 43.682 36.79 L 43.682 11.721 C 43.682 4.32 39.508 0 32.012 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 11.859,
      width: 81.67,
      height: 81.665,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.670,
    height: 81.665,
    viewBox: "0 0 81.670 81.665",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.67,
      height: 81.665,
      backdropFilter: "blur(15px)",
      color: "rgba(255,172,149,0.4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 40.624 L 0 57.284 C -0.001 59.092 0.145 60.898 0.436 62.683 C 0.893 65.837 1.98 68.868 3.631 71.596 C 4.383 72.913 5.298 74.13 6.354 75.219 C 11.207 79.658 17.642 81.968 24.217 81.632 L 57.401 81.632 C 63.965 81.971 70.39 79.659 75.228 75.219 C 76.297 74.132 77.224 72.915 77.987 71.596 C 79.648 68.866 80.758 65.838 81.255 62.683 C 81.516 60.895 81.649 59.091 81.654 57.284 L 81.654 35.834 C 81.778 31.727 81.176 27.63 79.875 23.732 C 79.214 21.835 78.204 20.078 76.898 18.551 C 76.487 18.068 76.038 17.62 75.555 17.21 C 71.358 13.909 66.069 12.305 60.742 12.717 L 48.501 12.717 C 45.603 12.661 42.869 11.34 41.027 9.096 L 37.069 3.624 C 35.204 1.293 32.362 -0.045 29.372 0.001 L 20.876 0.001 C 5.628 0.001 0 8.951 0 24.169 L 0 40.618 C 0 40.62 0 40.622 0 40.624 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 40.624 L 1 40.624 C 1 40.598 0.999 40.572 0.997 40.547 L 0 40.624 Z M 0 57.284 L 1 57.284 L 1 57.284 L 0 57.284 Z M 0.436 62.683 L 1.426 62.539 C 1.425 62.533 1.424 62.528 1.423 62.522 L 0.436 62.683 Z M 3.631 71.596 L 4.499 71.1 C 4.495 71.093 4.491 71.085 4.486 71.078 L 3.631 71.596 Z M 6.354 75.219 L 5.636 75.915 C 5.65 75.93 5.664 75.944 5.679 75.957 L 6.354 75.219 Z M 24.217 81.632 L 24.217 80.632 C 24.2 80.632 24.183 80.633 24.166 80.634 L 24.217 81.632 Z M 57.401 81.632 L 57.453 80.634 C 57.436 80.633 57.418 80.632 57.401 80.632 L 57.401 81.632 Z M 75.228 75.219 L 75.904 75.956 C 75.917 75.944 75.929 75.932 75.941 75.92 L 75.228 75.219 Z M 77.987 71.596 L 77.133 71.076 C 77.129 71.082 77.125 71.089 77.122 71.095 L 77.987 71.596 Z M 81.255 62.683 L 82.243 62.838 L 82.244 62.827 L 81.255 62.683 Z M 81.654 57.284 L 82.654 57.287 L 82.654 57.284 L 81.654 57.284 Z M 81.654 35.834 L 80.655 35.804 C 80.654 35.814 80.654 35.824 80.654 35.834 L 81.654 35.834 Z M 79.875 23.732 L 80.824 23.416 L 80.819 23.403 L 79.875 23.732 Z M 76.898 18.551 L 76.137 19.199 L 76.138 19.201 L 76.898 18.551 Z M 75.555 17.21 L 76.201 16.447 C 76.192 16.44 76.183 16.432 76.173 16.424 L 75.555 17.21 Z M 60.742 12.717 L 60.742 13.717 C 60.767 13.717 60.793 13.716 60.819 13.714 L 60.742 12.717 Z M 48.501 12.717 L 48.481 13.717 C 48.488 13.717 48.494 13.717 48.501 13.717 L 48.501 12.717 Z M 41.027 9.096 L 40.216 9.682 C 40.228 9.698 40.241 9.714 40.254 9.73 L 41.027 9.096 Z M 37.069 3.624 L 37.88 3.038 C 37.87 3.025 37.86 3.012 37.85 3 L 37.069 3.624 Z M 29.372 0.001 L 29.372 1.001 C 29.377 1.001 29.383 1.001 29.388 1.001 L 29.372 0.001 Z M 0 40.618 L 1 40.629 L 1 40.618 L 0 40.618 Z M -1 40.624 L -1 57.284 L 1 57.284 L 1 40.624 L -1 40.624 Z M -1 57.283 C -1.001 59.146 -0.851 61.005 -0.551 62.843 L 1.423 62.522 C 1.141 60.79 0.999 59.039 1 57.284 L -1 57.283 Z M -0.554 62.826 C -0.077 66.113 1.055 69.271 2.775 72.114 L 4.486 71.078 C 2.904 68.464 1.864 65.561 1.426 62.539 L -0.554 62.826 Z M 2.763 72.092 C 3.556 73.481 4.522 74.766 5.636 75.915 L 7.072 74.523 C 6.074 73.494 5.21 72.344 4.499 71.1 L 2.763 72.092 Z M 5.679 75.957 C 10.73 80.577 17.426 82.981 24.268 82.631 L 24.166 80.634 C 17.858 80.956 11.685 78.739 7.029 74.481 L 5.679 75.957 Z M 24.217 82.632 L 57.401 82.632 L 57.401 80.632 L 24.217 80.632 L 24.217 82.632 Z M 57.35 82.631 C 64.182 82.983 70.868 80.578 75.904 75.956 L 74.552 74.482 C 69.912 78.741 63.749 80.958 57.453 80.634 L 57.35 82.631 Z M 75.941 75.92 C 77.069 74.773 78.047 73.489 78.853 72.097 L 77.122 71.095 C 76.401 72.341 75.525 73.491 74.515 74.518 L 75.941 75.92 Z M 78.842 72.116 C 80.571 69.274 81.726 66.122 82.243 62.838 L 80.267 62.527 C 79.791 65.553 78.726 68.458 77.133 71.076 L 78.842 72.116 Z M 82.244 62.827 C 82.512 60.992 82.649 59.141 82.654 57.287 L 80.654 57.281 C 80.649 59.04 80.519 60.797 80.265 62.538 L 82.244 62.827 Z M 82.654 57.284 L 82.654 35.834 L 80.654 35.834 L 80.654 57.284 L 82.654 57.284 Z M 82.654 35.864 C 82.781 31.64 82.162 27.426 80.824 23.416 L 78.927 24.049 C 80.19 27.835 80.775 31.815 80.655 35.804 L 82.654 35.864 Z M 80.819 23.403 C 80.117 21.389 79.045 19.523 77.658 17.901 L 76.138 19.201 C 77.364 20.634 78.311 22.282 78.931 24.061 L 80.819 23.403 Z M 77.659 17.903 C 77.214 17.379 76.726 16.892 76.201 16.447 L 74.908 17.973 C 75.35 18.348 75.761 18.758 76.137 19.199 L 77.659 17.903 Z M 76.173 16.424 C 71.779 12.968 66.242 11.289 60.664 11.72 L 60.819 13.714 C 65.897 13.322 70.937 14.85 74.937 17.996 L 76.173 16.424 Z M 60.742 11.717 L 48.501 11.717 L 48.501 13.717 L 60.742 13.717 L 60.742 11.717 Z M 48.52 11.717 C 45.914 11.667 43.456 10.479 41.8 8.461 L 40.254 9.73 C 42.282 12.201 45.291 13.655 48.481 13.717 L 48.52 11.717 Z M 41.837 8.51 L 37.88 3.038 L 36.259 4.211 L 40.216 9.682 L 41.837 8.51 Z M 37.85 3 C 35.791 0.426 32.655 -1.05 29.357 -0.999 L 29.388 1.001 C 32.068 0.96 34.616 2.159 36.288 4.249 L 37.85 3 Z M 29.372 -0.999 L 20.876 -0.999 L 20.876 1.001 L 29.372 1.001 L 29.372 -0.999 Z M 20.876 -0.999 C 13.051 -0.999 7.498 1.307 3.939 5.753 C 0.418 10.153 -1 16.468 -1 24.169 L 1 24.169 C 1 16.651 2.396 10.882 5.501 7.003 C 8.568 3.17 13.453 1.001 20.876 1.001 L 20.876 -0.999 Z M -1 24.169 L -1 40.618 L 1 40.618 L 1 24.169 L -1 24.169 Z M -1 40.608 C -1 40.639 -0.999 40.67 -0.997 40.701 L 0.997 40.547 C 0.999 40.574 1 40.601 1 40.629 L -1 40.608 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 48.077,
    height: 6.743,
    viewBox: "0 0 48.077 6.743",
    fill: "none",
    style: {
      position: "absolute",
      left: 17,
      top: 56.945,
      width: 48.077,
      height: 6.743,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(249,111,90,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.476 6.739 L 3.377 6.739 C 1.512 6.739 0 5.231 0 3.37 C 0 1.509 1.512 0 3.377 0 L 44.803 0 C 45.808 0.011 46.75 0.495 47.344 1.304 C 47.861 1.907 48.121 2.687 48.07 3.478 C 48.042 4.379 47.654 5.23 46.992 5.843 C 46.33 6.456 45.45 6.779 44.548 6.739 L 44.476 6.739 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 44.803 0 L 44.807 -0.4 L 44.803 -0.4 L 44.803 0 Z M 47.344 1.304 L 47.022 1.541 L 47.031 1.553 L 47.04 1.565 L 47.344 1.304 Z M 48.07 3.478 L 47.671 3.453 L 47.67 3.466 L 48.07 3.478 Z M 44.548 6.739 L 44.566 6.34 L 44.557 6.339 L 44.548 6.339 L 44.548 6.739 Z M 44.476 6.339 L 3.377 6.339 L 3.377 7.139 L 44.476 7.139 L 44.476 6.339 Z M 3.377 6.339 C 1.732 6.339 0.4 5.009 0.4 3.37 L -0.4 3.37 C -0.4 5.452 1.292 7.139 3.377 7.139 L 3.377 6.339 Z M 0.4 3.37 C 0.4 1.73 1.732 0.4 3.377 0.4 L 3.377 -0.4 C 1.292 -0.4 -0.4 1.287 -0.4 3.37 L 0.4 3.37 Z M 3.377 0.4 L 44.803 0.4 L 44.803 -0.4 L 3.377 -0.4 L 3.377 0.4 Z M 44.798 0.4 C 45.678 0.41 46.502 0.833 47.022 1.541 L 47.667 1.068 C 46.998 0.156 45.938 -0.387 44.807 -0.4 L 44.798 0.4 Z M 47.04 1.565 C 47.489 2.088 47.715 2.766 47.671 3.453 L 48.469 3.504 C 48.527 2.608 48.232 1.726 47.648 1.044 L 47.04 1.565 Z M 47.67 3.466 C 47.646 4.259 47.303 5.009 46.72 5.55 L 47.264 6.137 C 48.004 5.451 48.438 4.498 48.47 3.491 L 47.67 3.466 Z M 46.72 5.55 C 46.137 6.09 45.361 6.374 44.566 6.34 L 44.531 7.139 C 45.539 7.183 46.524 6.822 47.264 6.137 L 46.72 5.55 Z M 44.548 6.339 L 44.476 6.339 L 44.476 7.139 L 44.548 7.139 L 44.548 6.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassFolder, __ds_default_components_illustrations_IconlyGlassFolder_1rfzjfu: IconlyGlassFolder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassFolder.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassGame.jsx
try { (() => {
// figma node: 346:1918 Iconly/Glass/Game
function IconlyGlassGame(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 97.667,
      height: 99.105,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 97.667,
      height: 99.105,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 83,
      height: 83,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 83,
    height: 83,
    viewBox: "0 0 83 83",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 83,
      height: 83,
      backdropFilter: "blur(13px)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 58.564 16.992 C 54.655 16.952 50.786 16.872 46.917 16.872 L 46.917 16.112 C 46.876 10.115 41.867 5.197 35.717 5.158 L 31.685 5.158 C 30.463 5.158 29.445 4.198 29.445 2.999 C 29.445 1.359 28.101 0 26.391 0 C 24.721 0 23.336 1.359 23.336 2.999 C 23.336 7.476 27.083 11.155 31.685 11.155 L 35.717 11.155 C 38.486 11.155 40.808 13.394 40.808 16.152 L 40.808 16.832 C 35.269 16.832 29.812 16.912 24.476 16.992 C 10.304 16.992 0 27.067 0 40.98 L 0 58.852 C 0 72.765 10.304 82.84 24.436 82.84 C 30.097 82.96 35.839 83 41.541 83 C 47.242 83 52.903 82.96 58.564 82.84 C 72.696 82.84 83 72.765 83 58.852 L 83 40.98 C 83 27.067 72.696 16.992 58.564 16.992",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 57,
    height: 42,
    viewBox: "0 0 57 42",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.702,
      top: 29.795,
      width: 57,
      height: 42,
      opacity: 0.5,
      color: "rgb(227,19,82)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.825 0 L 15.2 0 C 5.497 0 0 4.051 0 11.2 L 0 30.8 C 0 37.949 5.497 42 15.2 42 L 41.825 42 C 51.528 42 57 37.949 57 30.8 L 57 11.2 C 57 4.051 51.528 0 41.825 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 34,
      width: 81.667,
      height: 65.105,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.667,
    height: 65.105,
    viewBox: "0 0 81.667 65.105",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.667,
      height: 65.105,
      backdropFilter: "blur(24px)",
      color: "rgba(255,116,159,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.753 0.109 C 55.04 0.126 56.329 0.144 57.623 0.157 C 71.528 0.157 81.667 10.071 81.667 23.76 L 81.667 41.344 C 81.667 55.034 71.528 64.947 57.623 64.947 C 52.053 65.065 46.483 65.105 40.873 65.105 C 35.263 65.105 29.613 65.065 24.043 64.947 C 10.138 64.947 0 55.034 0 41.344 L 0 23.76 C 0 10.071 10.138 0.157 24.083 0.157 C 29.333 0.079 34.702 0 40.152 0 C 42.156 0 44.159 0 46.163 0.039 C 48.689 0.039 51.215 0.074 53.753 0.109 Z M 36.145 35.484 L 31.938 35.484 L 31.938 39.654 C 31.938 41.267 30.575 42.604 28.932 42.604 C 27.249 42.604 25.927 41.267 25.927 39.654 L 25.927 35.484 L 21.679 35.484 C 20.036 35.484 18.674 34.186 18.674 32.534 C 18.674 30.921 20.036 29.583 21.679 29.583 L 25.927 29.583 L 25.927 25.453 C 25.927 23.84 27.249 22.503 28.932 22.503 C 30.575 22.503 31.938 23.84 31.938 25.453 L 31.938 29.583 L 36.145 29.583 C 37.788 29.583 39.151 30.921 39.151 32.534 C 39.151 34.186 37.788 35.484 36.145 35.484 Z M 53.177 28.838 L 53.577 28.838 C 55.22 28.838 56.583 27.539 56.583 25.887 C 56.583 24.274 55.22 22.937 53.577 22.937 L 53.177 22.937 C 51.494 22.937 50.171 24.274 50.171 25.887 C 50.171 27.539 51.494 28.838 53.177 28.838 Z M 60.028 42.369 L 60.429 42.369 C 62.072 42.369 63.434 41.071 63.434 39.419 C 63.434 37.806 62.072 36.468 60.429 36.468 L 60.028 36.468 C 58.345 36.468 57.023 37.806 57.023 39.419 C 57.023 41.071 58.345 42.369 60.028 42.369 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 57.623 0.157 L 57.613 1.157 L 57.623 1.157 L 57.623 0.157 Z M 53.753 0.109 L 53.767 -0.891 L 53.753 0.109 Z M 57.623 64.947 L 57.623 63.947 C 57.616 63.947 57.609 63.947 57.602 63.947 L 57.623 64.947 Z M 24.043 64.947 L 24.064 63.947 C 24.057 63.947 24.05 63.947 24.043 63.947 L 24.043 64.947 Z M 24.083 0.157 L 24.083 1.157 C 24.088 1.157 24.093 1.157 24.098 1.157 L 24.083 0.157 Z M 46.163 0.039 L 46.143 1.039 C 46.15 1.039 46.156 1.039 46.163 1.039 L 46.163 0.039 Z M 31.938 35.484 L 31.938 34.484 C 31.386 34.484 30.938 34.932 30.938 35.484 L 31.938 35.484 Z M 25.927 35.484 L 26.927 35.484 C 26.927 34.932 26.479 34.484 25.927 34.484 L 25.927 35.484 Z M 25.927 29.583 L 25.927 30.583 C 26.479 30.583 26.927 30.136 26.927 29.583 L 25.927 29.583 Z M 31.938 29.583 L 30.938 29.583 C 30.938 30.136 31.386 30.583 31.938 30.583 L 31.938 29.583 Z M 57.634 -0.843 C 56.342 -0.856 55.054 -0.873 53.767 -0.891 L 53.739 1.109 C 55.026 1.126 56.317 1.144 57.613 1.157 L 57.634 -0.843 Z M 82.667 23.76 C 82.667 9.5 72.062 -0.843 57.623 -0.843 L 57.623 1.157 C 70.995 1.157 80.667 10.641 80.667 23.76 L 82.667 23.76 Z M 82.667 41.344 L 82.667 23.76 L 80.667 23.76 L 80.667 41.344 L 82.667 41.344 Z M 57.623 65.947 C 72.062 65.947 82.667 55.605 82.667 41.344 L 80.667 41.344 C 80.667 54.463 70.995 63.947 57.623 63.947 L 57.623 65.947 Z M 40.873 66.105 C 46.488 66.105 52.065 66.065 57.645 65.947 L 57.602 63.947 C 52.042 64.065 46.479 64.105 40.873 64.105 L 40.873 66.105 Z M 24.022 65.947 C 29.601 66.065 35.259 66.105 40.873 66.105 L 40.873 64.105 C 35.268 64.105 29.625 64.065 24.064 63.947 L 24.022 65.947 Z M -1 41.344 C -1 55.605 9.605 65.947 24.043 65.947 L 24.043 63.947 C 10.672 63.947 1 54.463 1 41.344 L -1 41.344 Z M -1 23.76 L -1 41.344 L 1 41.344 L 1 23.76 L -1 23.76 Z M 24.083 -0.843 C 9.606 -0.843 -1 9.499 -1 23.76 L 1 23.76 C 1 10.642 10.671 1.157 24.083 1.157 L 24.083 -0.843 Z M 40.152 -1 C 34.694 -1 29.317 -0.921 24.068 -0.843 L 24.098 1.157 C 29.348 1.079 34.711 1 40.152 1 L 40.152 -1 Z M 46.183 -0.96 C 44.167 -1 42.154 -1 40.152 -1 L 40.152 1 C 42.157 1 44.151 1 46.143 1.039 L 46.183 -0.96 Z M 53.767 -0.891 C 51.23 -0.926 48.697 -0.961 46.163 -0.961 L 46.163 1.039 C 48.681 1.039 51.2 1.074 53.739 1.109 L 53.767 -0.891 Z M 31.938 36.484 L 36.145 36.484 L 36.145 34.484 L 31.938 34.484 L 31.938 36.484 Z M 32.938 39.654 L 32.938 35.484 L 30.938 35.484 L 30.938 39.654 L 32.938 39.654 Z M 28.932 43.604 C 31.11 43.604 32.938 41.837 32.938 39.654 L 30.938 39.654 C 30.938 40.697 30.041 41.604 28.932 41.604 L 28.932 43.604 Z M 24.927 39.654 C 24.927 41.828 26.706 43.604 28.932 43.604 L 28.932 41.604 C 27.793 41.604 26.927 40.706 26.927 39.654 L 24.927 39.654 Z M 24.927 35.484 L 24.927 39.654 L 26.927 39.654 L 26.927 35.484 L 24.927 35.484 Z M 21.679 36.484 L 25.927 36.484 L 25.927 34.484 L 21.679 34.484 L 21.679 36.484 Z M 17.674 32.534 C 17.674 34.764 19.51 36.484 21.679 36.484 L 21.679 34.484 C 20.562 34.484 19.674 33.608 19.674 32.534 L 17.674 32.534 Z M 21.679 28.583 C 19.502 28.583 17.674 30.351 17.674 32.534 L 19.674 32.534 C 19.674 31.491 20.571 30.583 21.679 30.583 L 21.679 28.583 Z M 25.927 28.583 L 21.679 28.583 L 21.679 30.583 L 25.927 30.583 L 25.927 28.583 Z M 24.927 25.453 L 24.927 29.583 L 26.927 29.583 L 26.927 25.453 L 24.927 25.453 Z M 28.932 21.503 C 26.706 21.503 24.927 23.279 24.927 25.453 L 26.927 25.453 C 26.927 24.401 27.793 23.503 28.932 23.503 L 28.932 21.503 Z M 32.938 25.453 C 32.938 23.271 31.11 21.503 28.932 21.503 L 28.932 23.503 C 30.041 23.503 30.938 24.41 30.938 25.453 L 32.938 25.453 Z M 32.938 29.583 L 32.938 25.453 L 30.938 25.453 L 30.938 29.583 L 32.938 29.583 Z M 36.145 28.583 L 31.938 28.583 L 31.938 30.583 L 36.145 30.583 L 36.145 28.583 Z M 40.151 32.534 C 40.151 30.351 38.323 28.583 36.145 28.583 L 36.145 30.583 C 37.254 30.583 38.151 31.491 38.151 32.534 L 40.151 32.534 Z M 36.145 36.484 C 38.314 36.484 40.151 34.764 40.151 32.534 L 38.151 32.534 C 38.151 33.608 37.262 34.484 36.145 34.484 L 36.145 36.484 Z M 53.577 27.838 L 53.177 27.838 L 53.177 29.838 L 53.577 29.838 L 53.577 27.838 Z M 55.583 25.887 C 55.583 26.961 54.694 27.838 53.577 27.838 L 53.577 29.838 C 55.746 29.838 57.583 28.118 57.583 25.887 L 55.583 25.887 Z M 53.577 23.937 C 54.686 23.937 55.583 24.844 55.583 25.887 L 57.583 25.887 C 57.583 23.705 55.755 21.937 53.577 21.937 L 53.577 23.937 Z M 53.177 23.937 L 53.577 23.937 L 53.577 21.937 L 53.177 21.937 L 53.177 23.937 Z M 51.171 25.887 C 51.171 24.835 52.037 23.937 53.177 23.937 L 53.177 21.937 C 50.95 21.937 49.171 23.713 49.171 25.887 L 51.171 25.887 Z M 53.177 27.838 C 52.028 27.838 51.171 26.97 51.171 25.887 L 49.171 25.887 C 49.171 28.109 50.959 29.838 53.177 29.838 L 53.177 27.838 Z M 60.429 41.369 L 60.028 41.369 L 60.028 43.369 L 60.429 43.369 L 60.429 41.369 Z M 62.434 39.419 C 62.434 40.492 61.546 41.369 60.429 41.369 L 60.429 43.369 C 62.598 43.369 64.434 41.649 64.434 39.419 L 62.434 39.419 Z M 60.429 37.468 C 61.537 37.468 62.434 38.375 62.434 39.419 L 64.434 39.419 C 64.434 37.236 62.607 35.468 60.429 35.468 L 60.429 37.468 Z M 60.028 37.468 L 60.429 37.468 L 60.429 35.468 L 60.028 35.468 L 60.028 37.468 Z M 58.023 39.419 C 58.023 38.367 58.889 37.468 60.028 37.468 L 60.028 35.468 C 57.802 35.468 56.023 37.245 56.023 39.419 L 58.023 39.419 Z M 60.028 41.369 C 58.88 41.369 58.023 40.501 58.023 39.419 L 56.023 39.419 C 56.023 41.64 57.81 43.369 60.028 43.369 L 60.028 41.369 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.264,
    height: 19.434,
    viewBox: "0 0 13.264 19.434",
    fill: "none",
    style: {
      position: "absolute",
      left: 50.153,
      top: 22.958,
      width: 13.264,
      height: 19.434,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,82,140,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.005 5.901 L 3.406 5.901 C 5.049 5.901 6.412 4.603 6.412 2.95 C 6.412 1.337 5.049 0 3.406 0 L 3.005 0 C 1.322 0 0 1.337 0 2.95 C 0 4.603 1.322 5.901 3.005 5.901 Z M 9.858 19.434 L 10.259 19.434 C 11.902 19.434 13.264 18.136 13.264 16.484 C 13.264 14.871 11.902 13.533 10.259 13.533 L 9.858 13.533 C 8.175 13.533 6.853 14.871 6.853 16.484 C 6.853 18.136 8.175 19.434 9.858 19.434 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.406 5.501 L 3.005 5.501 L 3.005 6.301 L 3.406 6.301 L 3.406 5.501 Z M 6.012 2.95 C 6.012 4.371 4.839 5.501 3.406 5.501 L 3.406 6.301 C 5.259 6.301 6.812 4.834 6.812 2.95 L 6.012 2.95 Z M 3.406 0.4 C 4.835 0.4 6.012 1.565 6.012 2.95 L 6.812 2.95 C 6.812 1.11 5.263 -0.4 3.406 -0.4 L 3.406 0.4 Z M 3.005 0.4 L 3.406 0.4 L 3.406 -0.4 L 3.005 -0.4 L 3.005 0.4 Z M 0.4 2.95 C 0.4 1.562 1.54 0.4 3.005 0.4 L 3.005 -0.4 C 1.105 -0.4 -0.4 1.113 -0.4 2.95 L 0.4 2.95 Z M 3.005 5.501 C 1.536 5.501 0.4 4.375 0.4 2.95 L -0.4 2.95 C -0.4 4.83 1.108 6.301 3.005 6.301 L 3.005 5.501 Z M 10.259 19.034 L 9.858 19.034 L 9.858 19.834 L 10.259 19.834 L 10.259 19.034 Z M 12.864 16.484 C 12.864 17.904 11.691 19.034 10.259 19.034 L 10.259 19.834 C 12.112 19.834 13.664 18.367 13.664 16.484 L 12.864 16.484 Z M 10.259 13.933 C 11.688 13.933 12.864 15.099 12.864 16.484 L 13.664 16.484 C 13.664 14.643 12.116 13.133 10.259 13.133 L 10.259 13.933 Z M 9.858 13.933 L 10.259 13.933 L 10.259 13.133 L 9.858 13.133 L 9.858 13.933 Z M 7.253 16.484 C 7.253 15.095 8.392 13.933 9.858 13.933 L 9.858 13.133 C 7.958 13.133 6.453 14.646 6.453 16.484 L 7.253 16.484 Z M 9.858 19.034 C 8.389 19.034 7.253 17.908 7.253 16.484 L 6.453 16.484 C 6.453 18.364 7.961 19.834 9.858 19.834 L 9.858 19.034 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.477,
    height: 20.102,
    viewBox: "0 0 20.477 20.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.657,
      top: 22.524,
      width: 20.477,
      height: 20.102,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(255,82,140,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.471 12.982 L 13.264 12.982 L 13.264 17.151 C 13.264 18.764 11.901 20.102 10.258 20.102 C 8.575 20.102 7.253 18.764 7.253 17.151 L 7.253 12.982 L 3.005 12.982 C 1.362 12.982 0 11.683 0 10.031 C 0 8.418 1.362 7.081 3.005 7.081 L 7.253 7.081 L 7.253 2.95 C 7.253 1.337 8.575 0 10.258 0 C 11.901 0 13.264 1.337 13.264 2.95 L 13.264 7.081 L 17.471 7.081 C 19.114 7.081 20.477 8.418 20.477 10.031 C 20.477 11.683 19.114 12.982 17.471 12.982",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.264 12.982 L 13.264 12.582 L 12.864 12.582 L 12.864 12.982 L 13.264 12.982 Z M 7.253 12.982 L 7.653 12.982 L 7.653 12.582 L 7.253 12.582 L 7.253 12.982 Z M 7.253 7.081 L 7.253 7.481 L 7.653 7.481 L 7.653 7.081 L 7.253 7.081 Z M 13.264 7.081 L 12.864 7.081 L 12.864 7.481 L 13.264 7.481 L 13.264 7.081 Z M 17.471 12.582 L 13.264 12.582 L 13.264 13.382 L 17.471 13.382 L 17.471 12.582 Z M 12.864 12.982 L 12.864 17.151 L 13.664 17.151 L 13.664 12.982 L 12.864 12.982 Z M 12.864 17.151 C 12.864 18.536 11.687 19.702 10.258 19.702 L 10.258 20.502 C 12.115 20.502 13.664 18.992 13.664 17.151 L 12.864 17.151 Z M 10.258 19.702 C 8.793 19.702 7.653 18.54 7.653 17.151 L 6.853 17.151 C 6.853 18.989 8.358 20.502 10.258 20.502 L 10.258 19.702 Z M 7.653 17.151 L 7.653 12.982 L 6.853 12.982 L 6.853 17.151 L 7.653 17.151 Z M 7.253 12.582 L 3.005 12.582 L 3.005 13.382 L 7.253 13.382 L 7.253 12.582 Z M 3.005 12.582 C 1.573 12.582 0.4 11.452 0.4 10.031 L -0.4 10.031 C -0.4 11.915 1.152 13.382 3.005 13.382 L 3.005 12.582 Z M 0.4 10.031 C 0.4 8.646 1.576 7.481 3.005 7.481 L 3.005 6.681 C 1.149 6.681 -0.4 8.191 -0.4 10.031 L 0.4 10.031 Z M 3.005 7.481 L 7.253 7.481 L 7.253 6.681 L 3.005 6.681 L 3.005 7.481 Z M 7.653 7.081 L 7.653 2.95 L 6.853 2.95 L 6.853 7.081 L 7.653 7.081 Z M 7.653 2.95 C 7.653 1.562 8.793 0.4 10.258 0.4 L 10.258 -0.4 C 8.358 -0.4 6.853 1.113 6.853 2.95 L 7.653 2.95 Z M 10.258 0.4 C 11.687 0.4 12.864 1.565 12.864 2.95 L 13.664 2.95 C 13.664 1.11 12.115 -0.4 10.258 -0.4 L 10.258 0.4 Z M 12.864 2.95 L 12.864 7.081 L 13.664 7.081 L 13.664 2.95 L 12.864 2.95 Z M 13.264 7.481 L 17.471 7.481 L 17.471 6.681 L 13.264 6.681 L 13.264 7.481 Z M 17.471 7.481 C 18.9 7.481 20.077 8.646 20.077 10.031 L 20.877 10.031 C 20.877 8.191 19.328 6.681 17.471 6.681 L 17.471 7.481 Z M 20.077 10.031 C 20.077 11.452 18.904 12.582 17.471 12.582 L 17.471 13.382 C 19.325 13.382 20.877 11.915 20.877 10.031 L 20.077 10.031 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassGame, __ds_default_components_illustrations_IconlyGlassGame_1fis7hk: IconlyGlassGame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassGame.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassInfo.jsx
try { (() => {
// figma node: 346:1547 Iconly/Glass/Info
function IconlyGlassInfo(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 103,
      height: 103,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -24.106,
      top: -24.106,
      width: 144.634,
      height: 144.634,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.966,-0.259,0.259,0.966,0,30.565)",
      transformOrigin: "0 0",
      width: 118.093,
      height: 118.093,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 118.093,
    height: 118.093,
    viewBox: "0 0 118.093 118.093",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 118.093,
      height: 118.093
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 76.131 19.682 L 42.002 19.682 C 28.657 19.682 19.682 29.051 19.682 42.986 L 19.682 75.15 C 19.682 89.046 28.657 98.411 42.002 98.411 L 76.131 98.411 C 89.475 98.411 98.411 89.046 98.411 75.15 L 98.411 42.986 C 98.411 29.051 89.475 19.682 76.131 19.682 L 76.131 19.682 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,33.189,82.692)",
      transformOrigin: "0 0",
      width: 50.8,
      height: 52.186,
      borderRadius: 19,
      backgroundColor: "rgba(130,55,255,0.5)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 6.928,
    height: 36.768,
    viewBox: "0 0 6.928 36.768",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.582,
      top: 40.589,
      width: 6.928,
      height: 36.768,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.039 3.464 C 0.039 5.35 1.574 6.889 3.424 6.889 C 5.393 6.889 6.928 5.35 6.928 3.464 C 6.928 1.535 5.393 0 3.503 0 C 1.574 0 0.039 1.535 0.039 3.464 Z M 3.425 36.768 C 5.354 36.768 6.889 35.233 6.889 33.344 L 6.889 15.945 C 6.889 14.051 5.354 12.481 3.425 12.481 C 1.535 12.481 0 14.051 0 15.945 L 0 33.344 C 0 35.233 1.535 36.768 3.425 36.768 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 48.377,
      top: 48.377,
      width: 78.729,
      height: 78.729,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 78.729,
    height: 78.729,
    viewBox: "0 0 78.729 78.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 78.729,
      height: 78.729,
      backdropFilter: "blur(24px)",
      color: "rgba(186,144,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.448 0 L 22.32 0 C 8.975 0 0 9.369 0 23.304 L 0 55.468 C 0 69.364 8.975 78.729 22.32 78.729 L 56.448 78.729 C 69.793 78.729 78.729 69.364 78.729 55.468 L 78.729 23.304 C 78.729 9.369 69.793 0 56.448 0 L 56.448 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 56.448 -1 C 55.896 -1 55.448 -0.552 55.448 0 C 55.448 0.552 55.896 1 56.448 1 L 56.448 -1 Z M 56.448 -1 L 22.32 -1 L 22.32 1 L 56.448 1 L 56.448 -1 Z M 22.32 -1 C 15.405 -1 9.554 1.433 5.433 5.735 C 1.317 10.032 -1 16.119 -1 23.304 L 1 23.304 C 1 16.553 3.171 10.988 6.878 7.118 C 10.581 3.251 15.89 1 22.32 1 L 22.32 -1 Z M -1 23.304 L -1 55.468 L 1 55.468 L 1 23.304 L -1 23.304 Z M -1 55.468 C -1 62.634 1.317 68.71 5.434 73.002 C 9.554 77.297 15.405 79.729 22.32 79.729 L 22.32 77.729 C 15.89 77.729 10.581 75.478 6.877 71.617 C 3.17 67.752 1 62.199 1 55.468 L -1 55.468 Z M 22.32 79.729 L 56.448 79.729 L 56.448 77.729 L 22.32 77.729 L 22.32 79.729 Z M 56.448 79.729 C 63.364 79.729 69.205 77.297 73.315 73.001 C 77.422 68.709 79.729 62.632 79.729 55.468 L 77.729 55.468 C 77.729 62.2 75.567 67.754 71.87 71.618 C 68.177 75.478 62.878 77.729 56.448 77.729 L 56.448 79.729 Z M 79.729 55.468 L 79.729 23.304 L 77.729 23.304 L 77.729 55.468 L 79.729 55.468 Z M 79.729 23.304 C 79.729 16.121 77.422 10.034 73.316 5.735 C 69.205 1.433 63.364 -1 56.448 -1 L 56.448 1 C 62.878 1 68.176 3.251 71.87 7.117 C 75.567 10.987 77.729 16.552 77.729 23.304 L 79.729 23.304 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.928,
    height: 36.767,
    viewBox: "0 0 6.928 36.767",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.9,
      top: 20.906,
      width: 6.928,
      height: 36.767,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(147,92,239,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.039 3.464 C 0.039 5.35 1.574 6.889 3.425 6.889 C 5.393 6.889 6.928 5.35 6.928 3.464 C 6.928 1.535 5.393 0 3.503 0 C 1.574 0 0.039 1.535 0.039 3.464 Z M 3.425 36.767 C 5.354 36.767 6.889 35.232 6.889 33.342 L 6.889 15.943 C 6.889 14.05 5.354 12.479 3.425 12.479 C 1.535 12.479 0 14.05 0 15.943 L 0 33.342 C 0 35.232 1.535 36.767 3.425 36.767 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.425 6.489 C 1.799 6.489 0.439 5.132 0.439 3.464 L -0.361 3.464 C -0.361 5.567 1.35 7.289 3.425 7.289 L 3.425 6.489 Z M 6.528 3.464 C 6.528 5.123 5.178 6.489 3.425 6.489 L 3.425 7.289 C 5.608 7.289 7.328 5.576 7.328 3.464 L 6.528 3.464 Z M 3.503 0.4 C 5.169 0.4 6.528 1.753 6.528 3.464 L 7.328 3.464 C 7.328 1.317 5.617 -0.4 3.503 -0.4 L 3.503 0.4 Z M 0.439 3.464 C 0.439 1.756 1.795 0.4 3.503 0.4 L 3.503 -0.4 C 1.354 -0.4 -0.361 1.314 -0.361 3.464 L 0.439 3.464 Z M 6.489 33.342 C 6.489 35.008 5.136 36.367 3.425 36.367 L 3.425 37.167 C 5.571 37.167 7.289 35.456 7.289 33.342 L 6.489 33.342 Z M 6.489 15.943 L 6.489 33.342 L 7.289 33.342 L 7.289 15.943 L 6.489 15.943 Z M 3.425 12.879 C 5.13 12.879 6.489 14.268 6.489 15.943 L 7.289 15.943 C 7.289 13.832 5.577 12.079 3.425 12.079 L 3.425 12.879 Z M 0.4 15.943 C 0.4 14.265 1.762 12.879 3.425 12.879 L 3.425 12.079 C 1.309 12.079 -0.4 13.835 -0.4 15.943 L 0.4 15.943 Z M 0.4 33.342 L 0.4 15.943 L -0.4 15.943 L -0.4 33.342 L 0.4 33.342 Z M 3.425 36.367 C 1.756 36.367 0.4 35.011 0.4 33.342 L -0.4 33.342 C -0.4 35.453 1.314 37.167 3.425 37.167 L 3.425 36.367 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassInfo, __ds_default_components_illustrations_IconlyGlassInfo_1fiu1p6: IconlyGlassInfo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassInfo.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassMenu.jsx
try { (() => {
// figma node: 346:1698 Iconly/Glass/Menu
function IconlyGlassMenu(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100.667,
      height: 81.667,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 100.667,
      height: 81.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 24,
      width: 54.667,
      height: 54.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 54.667,
    height: 54.667,
    viewBox: "0 0 54.667 54.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54.667,
      height: 54.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 54.667 27.333 C 54.667 42.432 42.43 54.667 27.333 54.667 C 12.237 54.667 0 42.432 0 27.333 C 0 12.24 12.237 0 27.333 0 C 42.43 0 54.667 12.24 54.667 27.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30.639,
    height: 30.639,
    viewBox: "0 0 30.639 30.639",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.014,
      top: 12.014,
      width: 30.639,
      height: 30.639,
      opacity: 0.5,
      color: "rgb(130,55,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.639 15.32 C 30.639 23.782 23.781 30.639 15.32 30.639 C 6.859 30.639 0 23.782 0 15.32 C 0 6.86 6.859 0 15.32 0 C 23.781 0 30.639 6.86 30.639 15.32 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19,
      top: 0,
      width: 81.667,
      height: 81.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 81.667,
    height: 81.667,
    viewBox: "0 0 81.667 81.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 81.667,
      height: 81.667,
      backdropFilter: "blur(24px)",
      color: "rgba(186,144,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 81.667 40.833 C 81.667 63.39 63.386 81.667 40.833 81.667 C 18.281 81.667 0 63.39 0 40.833 C 0 18.285 18.281 0 40.833 0 C 63.386 0 81.667 18.285 81.667 40.833 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80.667 40.833 C 80.667 62.837 62.833 80.667 40.833 80.667 L 40.833 82.667 C 63.938 82.667 82.667 63.942 82.667 40.833 L 80.667 40.833 Z M 40.833 80.667 C 18.833 80.667 1 62.837 1 40.833 L -1 40.833 C -1 63.942 17.729 82.667 40.833 82.667 L 40.833 80.667 Z M 1 40.833 C 1 18.837 18.833 1 40.833 1 L 40.833 -1 C 17.729 -1 -1 17.733 -1 40.833 L 1 40.833 Z M 40.833 1 C 62.833 1 80.667 18.837 80.667 40.833 L 82.667 40.833 C 82.667 17.733 63.938 -1 40.833 -1 L 40.833 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.364,
    height: 9.775,
    viewBox: "0 0 46.364 9.775",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.652,
      top: 35.949,
      width: 46.364,
      height: 9.775,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(147,92,239,0.5))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.892 0 C 2.193 0 0 2.193 0 4.884 C 0 7.579 2.193 9.775 4.892 9.775 C 7.591 9.775 9.784 7.579 9.784 4.884 C 9.784 2.193 7.591 0 4.892 0 Z M 23.182 0 C 20.483 0 18.29 2.193 18.29 4.884 C 18.29 7.579 20.483 9.775 23.182 9.775 C 25.881 9.775 28.074 7.579 28.074 4.884 C 28.074 2.193 25.881 0 23.182 0 Z M 36.58 4.884 C 36.58 2.193 38.773 0 41.472 0 C 44.171 0 46.364 2.193 46.364 4.884 C 46.364 7.579 44.171 9.775 41.472 9.775 C 38.773 9.775 36.58 7.579 36.58 4.884 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.4 4.884 C 0.4 2.414 2.413 0.4 4.892 0.4 L 4.892 -0.4 C 1.972 -0.4 -0.4 1.971 -0.4 4.884 L 0.4 4.884 Z M 4.892 9.375 C 2.414 9.375 0.4 7.358 0.4 4.884 L -0.4 4.884 C -0.4 7.799 1.972 10.175 4.892 10.175 L 4.892 9.375 Z M 9.384 4.884 C 9.384 7.358 7.37 9.375 4.892 9.375 L 4.892 10.175 C 7.812 10.175 10.184 7.799 10.184 4.884 L 9.384 4.884 Z M 4.892 0.4 C 7.37 0.4 9.384 2.414 9.384 4.884 L 10.184 4.884 C 10.184 1.971 7.811 -0.4 4.892 -0.4 L 4.892 0.4 Z M 18.69 4.884 C 18.69 2.414 20.703 0.4 23.182 0.4 L 23.182 -0.4 C 20.262 -0.4 17.89 1.971 17.89 4.884 L 18.69 4.884 Z M 23.182 9.375 C 20.704 9.375 18.69 7.358 18.69 4.884 L 17.89 4.884 C 17.89 7.799 20.262 10.175 23.182 10.175 L 23.182 9.375 Z M 27.674 4.884 C 27.674 7.358 25.66 9.375 23.182 9.375 L 23.182 10.175 C 26.102 10.175 28.474 7.799 28.474 4.884 L 27.674 4.884 Z M 23.182 0.4 C 25.66 0.4 27.674 2.414 27.674 4.884 L 28.474 4.884 C 28.474 1.971 26.101 -0.4 23.182 -0.4 L 23.182 0.4 Z M 41.472 -0.4 C 38.552 -0.4 36.18 1.971 36.18 4.884 L 36.98 4.884 C 36.98 2.414 38.993 0.4 41.472 0.4 L 41.472 -0.4 Z M 46.764 4.884 C 46.764 1.971 44.391 -0.4 41.472 -0.4 L 41.472 0.4 C 43.951 0.4 45.964 2.414 45.964 4.884 L 46.764 4.884 Z M 41.472 10.175 C 44.392 10.175 46.764 7.799 46.764 4.884 L 45.964 4.884 C 45.964 7.358 43.95 9.375 41.472 9.375 L 41.472 10.175 Z M 36.18 4.884 C 36.18 7.799 38.552 10.175 41.472 10.175 L 41.472 9.375 C 38.994 9.375 36.98 7.358 36.98 4.884 L 36.18 4.884 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassMenu, __ds_default_components_illustrations_IconlyGlassMenu_1fiwx9f: IconlyGlassMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassMenu.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassPaper.jsx
try { (() => {
// figma node: 346:1627 Iconly/Glass/Paper
function IconlyGlassPaper(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 83.801,
      height: 99.279,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 83.801,
      height: 99.279,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.767,
      height: 80.903,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.767,
    height: 80.903,
    viewBox: "0 0 68.767 80.903",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.767,
      height: 80.903
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 58.351 L 0 18.162 C 0 8.131 8.05 0 17.983 0 L 49.863 0 C 60.276 0 68.767 8.535 68.767 19.052 L 68.767 22.553 L 68.767 62.741 C 68.767 72.773 60.716 80.903 50.784 80.903 L 18.904 80.903 C 8.491 80.903 0 72.368 0 61.851 L 0 58.351 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,13,58.168)",
      transformOrigin: "0 0",
      width: 42,
      height: 36,
      opacity: 0.5,
      borderRadius: 5,
      backgroundColor: "rgba(130,55,255,0.5)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.034,
      top: 18.377,
      width: 68.767,
      height: 80.902,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.767,
    height: 80.902,
    viewBox: "0 0 68.767 80.902",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.767,
      height: 80.902,
      backdropFilter: "blur(24px)",
      color: "rgba(186,144,255,0.35)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.063 0 L 47.802 0 L 68.767 22.551 L 68.767 62.739 C 68.767 72.771 60.716 80.902 50.784 80.902 L 18.904 80.902 C 8.491 80.902 0 72.367 0 61.85 L 0 18.243 C 0 8.212 8.09 0 18.063 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 47.802 0 L 48.534 -0.681 C 48.345 -0.884 48.08 -1 47.802 -1 L 47.802 0 Z M 68.767 22.551 L 69.767 22.551 C 69.767 22.298 69.671 22.055 69.499 21.87 L 68.767 22.551 Z M 47.802 -1 L 18.063 -1 L 18.063 1 L 47.802 1 L 47.802 -1 Z M 18.063 -1 C 7.527 -1 -1 7.67 -1 18.243 L 1 18.243 C 1 8.753 8.653 1 18.063 1 L 18.063 -1 Z M -1 18.243 L -1 61.85 L 1 61.85 L 1 18.243 L -1 18.243 Z M -1 61.85 C -1 72.912 7.932 81.902 18.904 81.902 L 18.904 79.902 C 9.05 79.902 1 71.821 1 61.85 L -1 61.85 Z M 18.904 81.902 L 50.784 81.902 L 50.784 79.902 L 18.904 79.902 L 18.904 81.902 Z M 50.784 81.902 C 61.278 81.902 69.767 73.314 69.767 62.739 L 67.767 62.739 C 67.767 72.228 60.155 79.902 50.784 79.902 L 50.784 81.902 Z M 69.767 62.739 L 69.767 22.551 L 67.767 22.551 L 67.767 62.739 L 69.767 62.739 Z M 69.499 21.87 L 48.534 -0.681 L 47.07 0.681 L 68.034 23.232 L 69.499 21.87 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.795,
    height: 26.251,
    viewBox: "0 0 27.795 26.251",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.539,
      top: 31.736,
      width: 27.795,
      height: 26.251
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.541 0 L 3.004 0 C 1.362 0 0 1.375 0 3.034 C 0 4.692 1.362 6.027 3.004 6.027 L 16.541 6.027 C 18.183 6.027 19.545 4.692 19.545 3.034 C 19.545 1.375 18.183 0 16.541 0 Z M 3.004 26.251 L 24.791 26.251 C 26.433 26.251 27.795 24.876 27.795 23.218 C 27.795 21.559 26.433 20.224 24.791 20.224 L 3.004 20.224 C 1.362 20.224 0 21.559 0 23.218 C 0 24.876 1.362 26.251 3.004 26.251 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.004 0.4 L 16.541 0.4 L 16.541 -0.4 L 3.004 -0.4 L 3.004 0.4 Z M 0.4 3.034 C 0.4 1.592 1.586 0.4 3.004 0.4 L 3.004 -0.4 C 1.137 -0.4 -0.4 1.158 -0.4 3.034 L 0.4 3.034 Z M 3.004 5.627 C 1.579 5.627 0.4 4.468 0.4 3.034 L -0.4 3.034 C -0.4 4.916 1.144 6.427 3.004 6.427 L 3.004 5.627 Z M 16.541 5.627 L 3.004 5.627 L 3.004 6.427 L 16.541 6.427 L 16.541 5.627 Z M 19.145 3.034 C 19.145 4.468 17.965 5.627 16.541 5.627 L 16.541 6.427 C 18.401 6.427 19.945 4.916 19.945 3.034 L 19.145 3.034 Z M 16.541 0.4 C 17.958 0.4 19.145 1.592 19.145 3.034 L 19.945 3.034 C 19.945 1.158 18.408 -0.4 16.541 -0.4 L 16.541 0.4 Z M 24.791 25.851 L 3.004 25.851 L 3.004 26.651 L 24.791 26.651 L 24.791 25.851 Z M 27.395 23.218 C 27.395 24.659 26.209 25.851 24.791 25.851 L 24.791 26.651 C 26.658 26.651 28.195 25.093 28.195 23.218 L 27.395 23.218 Z M 24.791 20.624 C 26.216 20.624 27.395 21.783 27.395 23.218 L 28.195 23.218 C 28.195 21.335 26.651 19.824 24.791 19.824 L 24.791 20.624 Z M 3.004 20.624 L 24.791 20.624 L 24.791 19.824 L 3.004 19.824 L 3.004 20.624 Z M 0.4 23.218 C 0.4 21.783 1.579 20.624 3.004 20.624 L 3.004 19.824 C 1.144 19.824 -0.4 21.335 -0.4 23.218 L 0.4 23.218 Z M 3.004 25.851 C 1.586 25.851 0.4 24.659 0.4 23.218 L -0.4 23.218 C -0.4 25.093 1.137 26.651 3.004 26.651 L 3.004 25.851 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.956,
    height: 20.802,
    viewBox: "0 0 19.956 20.802",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.432,
      top: 5.012,
      width: 19.956,
      height: 20.802,
      backdropFilter: "blur(15px)",
      filter: "drop-shadow(5px 5px 10px rgba(147,92,239,0.25))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.078 20.769 C 10.87 20.798 14.751 20.81 18.043 20.798 C 19.729 20.794 20.586 18.759 19.416 17.533 C 15.187 13.092 7.622 5.143 3.292 0.596 C 2.095 -0.662 0 0.204 0 1.948 L 0 12.61 C 0 17.084 3.649 20.769 8.078 20.769",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.043 20.798 L 18.042 20.398 L 18.041 20.398 L 18.043 20.798 Z M 19.416 17.533 L 19.127 17.809 L 19.127 17.809 L 19.416 17.533 Z M 3.292 0.596 L 3.002 0.872 L 3.002 0.872 L 3.292 0.596 Z M 8.074 21.169 C 10.868 21.198 14.75 21.21 18.044 21.198 L 18.041 20.398 C 14.751 20.41 10.872 20.398 8.082 20.369 L 8.074 21.169 Z M 18.044 21.198 C 20.088 21.193 21.113 18.732 19.706 17.257 L 19.127 17.809 C 20.058 18.785 19.37 20.394 18.042 20.398 L 18.044 21.198 Z M 19.706 17.257 C 15.474 12.813 7.914 4.87 3.582 0.321 L 3.002 0.872 C 7.329 5.416 14.9 13.371 19.127 17.809 L 19.706 17.257 Z M 3.582 0.321 C 2.125 -1.209 -0.4 -0.143 -0.4 1.948 L 0.4 1.948 C 0.4 0.551 2.064 -0.114 3.002 0.872 L 3.582 0.321 Z M -0.4 1.948 L -0.4 12.61 L 0.4 12.61 L 0.4 1.948 L -0.4 1.948 Z M -0.4 12.61 C -0.4 17.301 3.424 21.169 8.078 21.169 L 8.078 20.369 C 3.873 20.369 0.4 16.867 0.4 12.61 L -0.4 12.61 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassPaper, __ds_default_components_illustrations_IconlyGlassPaper_1uomfty: IconlyGlassPaper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassPaper.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/IconlyGlassProfile.jsx
try { (() => {
// figma node: 346:1642 Iconly/Glass/Profile
function IconlyGlassProfile(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 89.049,
      height: 86.802,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 89.049,
      height: 86.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35,
      top: 6.641,
      width: 54.049,
      height: 66.187,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 54.049,
    height: 66.187,
    viewBox: "0 0 54.049 66.187",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 54.049,
      height: 66.187,
      backdropFilter: "blur(13px)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.907 17.512 C 44.907 27.234 36.952 35.024 27.025 35.024 C 17.102 35.024 9.143 27.234 9.143 17.512 C 9.143 7.791 17.102 0 27.025 0 C 36.952 0 44.907 7.791 44.907 17.512 Z M 0 54.852 C 0 45.853 12.449 43.601 27.025 43.601 C 41.679 43.601 54.049 45.93 54.049 54.937 C 54.049 63.936 41.6 66.187 27.025 66.187 C 12.37 66.187 0 63.858 0 54.852 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33,
    height: 15,
    viewBox: "0 0 33 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.655,
      top: 49.373,
      width: 33,
      height: 15,
      color: "rgba(239,86,65,0.5)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.5 0 C 7.601 0 0 1.495 0 7.472 C 0 13.453 7.553 15 16.5 15 C 25.399 15 33 13.505 33 7.528 C 33 1.547 25.447 0 16.5 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.655,
      top: 8.373,
      width: 18,
      height: 18,
      color: "rgba(239,86,65,0.5)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 18 C 13.996 18 18 13.996 18 9 C 18 4.004 13.996 0 9 0 C 4.006 0 0 4.004 0 9 C 0 13.996 4.006 18 9 18",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70.882,
      height: 86.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 70.882,
    height: 86.802,
    viewBox: "0 0 70.882 86.802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 70.882,
      height: 86.802,
      backdropFilter: "blur(15px)",
      color: "rgba(255,172,149,0.4)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 58.892 22.966 C 58.892 35.715 48.459 45.932 35.441 45.932 C 22.427 45.932 11.99 35.715 11.99 22.966 C 11.99 10.217 22.427 0 35.441 0 C 48.459 0 58.892 10.217 58.892 22.966 Z M 0 71.937 C 0 60.135 16.326 57.182 35.441 57.182 C 54.66 57.182 70.882 60.237 70.882 72.048 C 70.882 83.85 54.556 86.802 35.441 86.802 C 16.222 86.802 0 83.748 0 71.937 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 35.441 46.932 C 48.992 46.932 59.892 36.287 59.892 22.966 L 57.892 22.966 C 57.892 35.143 47.927 44.932 35.441 44.932 L 35.441 46.932 Z M 10.99 22.966 C 10.99 36.287 21.895 46.932 35.441 46.932 L 35.441 44.932 C 22.959 44.932 12.99 35.143 12.99 22.966 L 10.99 22.966 Z M 35.441 -1 C 21.895 -1 10.99 9.645 10.99 22.966 L 12.99 22.966 C 12.99 10.789 22.959 1 35.441 1 L 35.441 -1 Z M 59.892 22.966 C 59.892 9.645 48.992 -1 35.441 -1 L 35.441 1 C 47.927 1 57.892 10.789 57.892 22.966 L 59.892 22.966 Z M 35.441 56.182 C 25.862 56.182 16.863 56.918 10.229 59.188 C 6.906 60.324 4.103 61.87 2.123 63.966 C 0.12 66.086 -1 68.729 -1 71.937 L 1 71.937 C 1 69.244 1.921 67.092 3.577 65.339 C 5.255 63.563 7.728 62.157 10.876 61.08 C 17.183 58.923 25.906 58.182 35.441 58.182 L 35.441 56.182 Z M 71.882 72.048 C 71.882 68.839 70.771 66.19 68.778 64.059 C 66.806 61.952 64.014 60.392 60.696 59.241 C 54.074 56.944 45.074 56.182 35.441 56.182 L 35.441 58.182 C 45.027 58.182 53.748 58.948 60.041 61.131 C 63.182 62.22 65.646 63.638 67.317 65.425 C 68.966 67.189 69.882 69.351 69.882 72.048 L 71.882 72.048 Z M 35.441 87.802 C 45.02 87.802 54.019 87.066 60.653 84.797 C 63.976 83.66 66.779 82.115 68.76 80.019 C 70.762 77.899 71.882 75.256 71.882 72.048 L 69.882 72.048 C 69.882 74.74 68.961 76.893 67.306 78.645 C 65.627 80.422 63.154 81.828 60.006 82.905 C 53.699 85.062 44.977 85.802 35.441 85.802 L 35.441 87.802 Z M -1 71.937 C -1 75.145 0.112 77.794 2.105 79.926 C 4.076 82.033 6.868 83.593 10.186 84.744 C 16.809 87.041 25.808 87.802 35.441 87.802 L 35.441 85.802 C 25.855 85.802 17.134 85.037 10.841 82.854 C 7.701 81.765 5.237 80.346 3.565 78.559 C 1.916 76.796 1 74.634 1 71.937 L -1 71.937 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}
Object.assign(__ds_scope, { IconlyGlassProfile, __ds_default_components_illustrations_IconlyGlassProfile_1093s1r: IconlyGlassProfile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/IconlyGlassProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/automation-screen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  Faq,
  FinalCta,
  Section,
  Reveal,
  KeyPoint,
  CaseCard,
  SolutionCard,
  Icon
} = window.DesignSystem_03bc73;
const IMG_A = '../../assets/images/';
const NORMAL = [{
  label: 'Как это ощущается',
  text: 'Что-то отнимает слишком много времени, конкуренты «уже что-то внедряют», а с чего начать — непонятно'
}, {
  label: 'Что видно снаружи',
  text: '«Менеджеры не успевают обрабатывать заявки» — это симптом. Причина может быть в маршрутизации, в форме на сайте или в том, что половина заявок нецелевые.'
}, {
  label: 'Почему начинаем не с этого',
  text: 'Автоматизировать симптом — потратить деньги и не решить задачу. Поэтому начинаем с разбора, а не с решения.'
}];
const PROCESS = [{
  title: 'Разговор, 20 минут',
  text: 'Консультант по стратегии и операционным моделям, не менеджер по продажам. Задача разговора — понять, что у вас происходит.'
}, {
  title: 'Разбор процессов',
  text: 'Где именно теряется время, что можно автоматизировать, а что дешевле починить организационно'
}, {
  title: 'Техзадание',
  text: 'Для сложных задач — сначала оно, потом смета. Так вы платите за то, что действительно нужно.'
}, {
  title: 'Разработка и поддержка',
  text: 'Full-stack разработка с опытом интеграций и CRM-систем. Поддержка после сдачи — тоже на нас.'
}];
const AUTOMATION_CASES = [{
  name: 'Верба — чат-боты',
  subtitle: 'Внутренняя автоматизация, банный комплекс',
  description: 'Чат-бот маршрутизирует заявки на нужного менеджера, отправляет уведомления и собирает аналитику в дашборд.',
  result: 'сделан, запущен, работает',
  url: 'https://myverba.ru/',
  urlLabel: 'myverba.ru'
}, {
  name: 'More House — CRM',
  subtitle: 'Операционный процесс, застройщик',
  description: 'Настроили путь лида в CRM с автоматическими уведомлениями о новых заявках.',
  result: 'лид → CRM с уведомлениями',
  url: 'https://morehouse.ru/',
  urlLabel: 'morehouse.ru'
}];
const TEAM_SHORT = [{
  name: 'Максим',
  text: 'Разработка и интеграции. Full-stack с опытом интеграций между сервисами, CRM-системами и автоматизации отчётности.'
}, {
  name: 'Богдан',
  text: 'Стратегический и операционный консалтинг. Ведёт разбор процессов'
}, {
  name: 'Савелий',
  text: 'Машинное обучение и ИИ-агенты. Подключается там, где задачу не закрыть обычной логикой'
}];
const TIMELINE = [{
  bold: 'Понятная задача',
  text: '— смета за 2–3 дня после разбора.'
}, {
  bold: 'Задача, которую нужно распутывать',
  text: '— сначала техзадание, потом смета. Согласование обычно занимает до двух недель.'
}, {
  bold: 'Небольшой проект',
  text: '— как правило, до двух месяцев на реализацию, в зависимости от объёма.'
}];
const DIRECTIONS = ['Обработка и маршрутизация заявок', 'Аналитика и дашборды', 'Интеграции между системами и CRM', 'Автоматизация отчётности', 'Внутренние сервисы и порталы', 'ИИ-агенты для рутинных задач'];
const SOLUTIONS_SHOWN = [{
  title: 'Маршрутизация входящих заявок',
  short: 'Заявки с сайта, Авито и мессенджеров попадают в один поток. Система определяет продукт, регион и срочность, отсеивает спам и отдаёт заявку нужному менеджеру',
  audience: 'Тем, у кого заявки идут из нескольких каналов и теряются в общей куче',
  status: 'delivered',
  statusLabel: 'Внедрено у клиента',
  statusHint: 'Работает в проде, есть кейс'
}, {
  title: 'Автоматический монтаж коротких видео',
  short: 'Система находит в длинной записи законченные фрагменты, режет паузы, переводит в вертикальный формат, держит спикера в кадре и добавляет субтитры',
  audience: 'Тем, у кого копятся вебинары, подкасты и выступления без нарезки',
  status: 'prototype',
  statusLabel: 'Рабочий прототип',
  statusHint: 'Собрано и проверено, но не у клиента'
}, {
  title: 'Автозаполнение CRM по звонкам',
  short: 'После разговора система расшифровывает запись, достаёт договорённости, суммы и сроки, заполняет карточку сделки и ставит следующую задачу',
  audience: 'Отделам продаж, где карточки заполняются по памяти и с опозданием',
  status: 'concept',
  statusLabel: 'Можем собрать',
  statusHint: 'Компетенции есть, готового решения нет'
}];
const FAQ_AUTOMATION = [{
  q: 'Сколько времени занимает внедрение?',
  a: 'Зависит от задачи: от нескольких дней для точечной автоматизации до нескольких недель для комплексной. Точный срок называем после разбора — универсального ответа нет.'
}, {
  q: 'Нужно ли нанимать программиста для поддержки?',
  a: 'Нет. Поддержку и доработки берём на себя — так это уже работает с действующими клиентами.'
}, {
  q: 'Безопасно ли доверять данные?',
  a: 'Данные обрабатываются в рамках вашего проекта, доступ есть только у команды, которая с ним работает. Если в вашей отрасли особые требования — обсуждаем до начала работ, а не после.'
}, {
  q: 'Что если нужно поменять логику после запуска?',
  a: 'Оформляем как отдельную задачу и оцениваем по той же матрице. Решение не застывает после сдачи — процессы меняются, это нормально.'
}];
const h2Style = {
  margin: '0 0 var(--space-10)',
  fontSize: 'var(--type-h2)',
  fontWeight: 'var(--weight-bold)',
  color: 'var(--text-primary)',
  letterSpacing: 'var(--tracking-tight)',
  maxWidth: 'var(--container-narrow)'
};
const bodyStyle = {
  color: 'var(--text-secondary)',
  lineHeight: 'var(--leading-relaxed)'
};
const numberStyle = {
  flexShrink: 0,
  width: 40,
  height: 40,
  borderRadius: 'var(--radius-pill)',
  background: 'var(--accent)',
  color: 'var(--text-on-accent)',
  fontWeight: 'var(--weight-bold)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
function AutomationScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    title: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0441 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u0430 \u0441 \u0442\u043E\u0433\u043E, \u0433\u0434\u0435 \u0442\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u0432\u0440\u0435\u043C\u044F",
    subtitle: "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0441 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435\u043C \xAB\u043D\u0430\u0434\u043E \u0447\u0442\u043E-\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C\xBB, \u0430 \u043D\u0435 \u0441 \u0433\u043E\u0442\u043E\u0432\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439. \u041D\u0430\u0439\u0442\u0438, \u0433\u0434\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u043A\u0443\u043F\u0438\u0442\u0441\u044F \u2014 \u044D\u0442\u043E \u0438 \u0435\u0441\u0442\u044C \u043D\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0442\u0430.",
    ctaLabel: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443",
    ctaHref: "#contact",
    subText: "20 \u043C\u0438\u043D\u0443\u0442 \u0441 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439. \u0415\u0441\u043B\u0438 \u043F\u043E\u0439\u043C\u0451\u043C, \u0447\u0442\u043E \u043D\u0435 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u2014 \u0441\u043A\u0430\u0436\u0435\u043C \u0441\u0440\u0430\u0437\u0443.",
    bgImage: IMG_A + 'hero-bg.webp',
    style: {
      paddingTop: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "\u0421 \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u043F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, NORMAL.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: item.label,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      height: '100%',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--card-pad)',
      border: '1px solid var(--border-subtle)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: Object.assign({}, numberStyle, {
      width: 36,
      height: 36,
      fontSize: 'var(--text-sm)',
      marginBottom: 'var(--space-4)'
    })
  }, i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-2)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, item.label), /*#__PURE__*/React.createElement("p", {
    style: Object.assign({
      margin: 0
    }, bodyStyle)
  }, item.text)))))), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u043F\u043E\u0442\u043E\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u2014 \u043D\u0435 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-10)'
    }
  }, PROCESS.map((step, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: step.title,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: numberStyle
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, step.title), /*#__PURE__*/React.createElement("p", {
    style: Object.assign({
      margin: 0,
      maxWidth: 'var(--container-prose)'
    }, bodyStyle)
  }, step.text)))))), /*#__PURE__*/React.createElement(KeyPoint, {
    variant: "card",
    lead: "\u0415\u0441\u043B\u0438 \u043D\u0430 \u0440\u0430\u0437\u0431\u043E\u0440\u0435 \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u0441\u044F, \u0447\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0435 \u043E\u043A\u0443\u043F\u0438\u0442\u0441\u044F \u2014 \u043C\u044B \u0441\u043A\u0430\u0436\u0435\u043C \u044D\u0442\u043E \u043F\u0440\u044F\u043C\u043E \u0438 \u043D\u0435 \u0432\u043E\u0437\u044C\u043C\u0451\u043C \u043F\u0440\u043E\u0435\u043A\u0442",
    support: "\u042D\u0442\u043E \u043D\u0435 \u0431\u043B\u0430\u0433\u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: \u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0437\u0430 \u0442\u043E, \u0447\u0442\u043E \u043D\u0435 \u0434\u0430\u0441\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0430, \u0434\u043E\u0440\u043E\u0436\u0435 \u0434\u043B\u044F \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0438, \u0447\u0435\u043C \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "\u0427\u0442\u043E \u0443 \u043D\u0430\u0441 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-10)'
    }
  }, AUTOMATION_CASES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.name,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(CaseCard, _extends({
    variant: "compact"
  }, c))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)'
    }
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-10)'
    }
  }, TEAM_SHORT.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      padding: 'var(--card-pad)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, m.name), /*#__PURE__*/React.createElement("p", {
    style: Object.assign({
      margin: 0,
      fontSize: 'var(--text-sm)'
    }, bodyStyle)
  }, m.text))))), /*#__PURE__*/React.createElement(KeyPoint, {
    variant: "rule",
    lead: "\u0412\u044B\u0448\u0435 \u2014 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441. \u0417\u0430 \u043D\u0438\u043C\u0438 \u043E\u043F\u044B\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0438\u0441\u0442\u0435\u043C \u0438 \u0440\u0430\u0437\u0431\u043E\u0440 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043E \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0432\u044B \u0437\u0430\u043F\u043B\u0430\u0442\u0438\u0442\u0435.",
    support: "\u0421\u043E\u0442\u0435\u043D \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0439 \u0437\u0430 \u043F\u043B\u0435\u0447\u0430\u043C\u0438 \u0443 \u043D\u0430\u0441 \u043D\u0435\u0442, \u0438 \u043C\u044B \u043D\u0435 \u0441\u0442\u0430\u043D\u0435\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0438\u0434, \u0447\u0442\u043E \u0435\u0441\u0442\u044C"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--container-prose)',
      marginTop: 'var(--space-8)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "\u0417\u043D\u0430\u0447\u0438\u043C\u0435\u0435 \u0434\u0440\u0443\u0433\u043E\u0435: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043D\u0435 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0434\u0430\u0447\u0435\u0439 \u043F\u0440\u043E\u0435\u043A\u0442\u0430."), " \u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u2014 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0434\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C, \u0438 \u043C\u044B \u043E\u0441\u0442\u0430\u0451\u043C\u0441\u044F.")), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "\u041C\u044B \u043D\u0435 \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u043C \u043F\u043E\u0441\u043B\u0435 \u0441\u0434\u0430\u0447\u0438"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 'var(--container-prose)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u0412\u0435\u0440\u0431\u0430, \u0431\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u2014 \u043D\u0430\u0448 \u043F\u0435\u0440\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442. \u041C\u044B \u0434\u043E \u0441\u0438\u0445 \u043F\u043E\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u0438\u0445 \u0441\u0430\u0439\u0442 \u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E. \u0421 More House, \u0437\u0430\u0441\u0442\u0440\u043E\u0439\u0449\u0438\u043A\u043E\u043C \u044D\u043D\u0435\u0440\u0433\u043E\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432, \u2014 \u0442\u0430\u043A \u0436\u0435."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0442\u0435\u043C \u0431\u043E\u043B\u0435\u0435 \u043D\u0435 \u0431\u044B\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043E\u0432\u043E\u0439: \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F, \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0434\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C. \u041C\u044B \u043A \u044D\u0442\u043E\u043C\u0443 \u0433\u043E\u0442\u043E\u0432\u044B \u0438 \u043E\u0441\u0442\u0430\u0451\u043C\u0441\u044F \u043D\u0430 \u0441\u0432\u044F\u0437\u0438."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u044D\u0442\u043E \u0437\u0430\u0439\u043C\u0451\u0442 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 'var(--container-prose)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      marginBottom: 'var(--space-10)'
    }
  }, TIMELINE.map((row, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: row.bold,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, row.bold), " ", row.text)))), /*#__PURE__*/React.createElement(KeyPoint, {
    variant: "rule",
    lead: "\u0421\u043C\u0435\u0442\u0443 \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043F\u043E \u043C\u0430\u0442\u0440\u0438\u0446\u0435 \u0447\u0430\u0441\u043E\u0432, \u0430 \u043D\u0435 \u043D\u0430 \u0433\u043B\u0430\u0437",
    support: "\u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u043E\u0431\u0435\u0449\u0430\u0435\u043C \xAB\u0440\u0430\u0441\u0447\u0451\u0442 \u0437\u0430 15 \u043C\u0438\u043D\u0443\u0442\xBB: \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u0441\u043B\u043E\u0436\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u2014 \u044D\u0442\u043E \u0437\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0441 \u043D\u0430 \u0432\u0441\u0451 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0435. \u0412\u044B \u043B\u0438\u0431\u043E \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0442\u0438\u0442\u0435, \u043B\u0438\u0431\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043D\u0435 \u0442\u043E."
  })), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "\u0421 \u0447\u0435\u043C \u043A \u043D\u0430\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-8)'
    }
  }, DIRECTIONS.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: d,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '12px 20px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-secondary)',
      fontWeight: 'var(--weight-medium)'
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: Object.assign({
      maxWidth: 'var(--container-prose)',
      margin: '0 0 var(--space-8)'
    }, bodyStyle)
  }, "\u042D\u0442\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0430 \u043D\u0435 \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442. \u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u0430\u043C \u2014 \u0441\u0442\u0430\u043D\u0435\u0442 \u043F\u043E\u043D\u044F\u0442\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u0431\u043E\u0440\u0430."), /*#__PURE__*/React.createElement(KeyPoint, {
    variant: "card",
    lead: "\u041C\u044B \u0438 \u0441\u0430\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430 \u0418\u0418 \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0432\u043E\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432",
    support: "\u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0434\u0435\u043B\u0430\u0435\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u0434\u0435\u0448\u0435\u0432\u043B\u0435 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0442\u0443\u0434\u0438\u0438 \u2014 \u0438 \u0431\u0435\u0440\u0451\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0442\u0443\u0434\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0430 \u0431\u044B \u0431\u044E\u0434\u0436\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: Object.assign({}, h2Style, {
      marginBottom: 'var(--space-4)'
    })
  }, "\u0427\u0442\u043E \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 0 var(--space-10)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0434 \u0432\u0430\u0448 \u043F\u0440\u043E\u0446\u0435\u0441\u0441. \u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0447\u0435\u0441\u0442\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E, \u0432\u043D\u0435\u0434\u0440\u044F\u043B\u0438 \u043B\u0438 \u043C\u044B \u0435\u0433\u043E \u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0436\u0435\u043C \u0441\u043E\u0431\u0440\u0430\u0442\u044C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, SOLUTIONS_SHOWN.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(SolutionCard, _extends({}, s, {
    audienceLabel: "\u041A\u043E\u043C\u0443"
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    size: 16
  }), "\u0412 \u043F\u0440\u043E\u0434\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0442\u0440\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u044C \u2014 \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u0440\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043F\u043E\u0434\u0440\u044F\u0434.")), /*#__PURE__*/React.createElement(Faq, {
    heading: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
    items: FAQ_AUTOMATION,
    idPrefix: "automation",
    id: "faq"
  }), /*#__PURE__*/React.createElement(FinalCta, {
    heading: "\u041D\u0430\u0447\u043D\u0451\u043C \u0441 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430",
    sub: "20 \u043C\u0438\u043D\u0443\u0442 \u0441 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u0442\u0435, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432 \u0431\u0438\u0437\u043D\u0435\u0441\u0435 \u2014 \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u043C, \u0435\u0441\u0442\u044C \u043B\u0438 \u0437\u0434\u0435\u0441\u044C \u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438. \u0415\u0441\u043B\u0438 \u043D\u0435\u0442, \u0441\u043A\u0430\u0436\u0435\u043C \u0447\u0435\u0441\u0442\u043D\u043E.",
    ctaLabel: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443",
    ctaHref: "#contact",
    phone: "+7 (915) 486-75-75",
    phoneHref: "tel:+79154867575",
    telegram: "https://t.me/singularity_ai",
    telegramLabel: "Telegram"
  }));
}
Object.assign(window, {
  AutomationScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/automation-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/contact-screen.jsx
try { (() => {
const {
  Icon
} = window.DesignSystem_03bc73;
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
  errConsent: 'Необходимо дать согласие на обработку данных'
};
const label = {
  display: 'block',
  fontSize: 'var(--text-sm)',
  fontWeight: 'var(--weight-semibold)',
  color: 'var(--text-primary)',
  marginBottom: 'var(--space-2)'
};
const hint = {
  margin: 'var(--space-2) 0 0',
  fontSize: 'var(--text-xs)',
  color: 'var(--text-muted)'
};
const errText = {
  margin: 'var(--space-2) 0 0',
  fontSize: 'var(--text-sm)',
  color: 'var(--danger-text)'
};
function Field({
  id,
  value,
  onChange,
  placeholder,
  error
}) {
  return /*#__PURE__*/React.createElement("input", {
    id: id,
    name: id,
    type: "text",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    "aria-invalid": error ? 'true' : undefined,
    className: "ds-focusable",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px 16px',
      border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-default)'),
      background: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      transition: 'border-color var(--duration-base)'
    }
  });
}
function ContactScreen() {
  const [form, setForm] = React.useState({
    name: '',
    contact: '',
    task: '',
    consent: false
  });
  const [errors, setErrors] = React.useState({});
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const change = e => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(Object.assign({}, form, {
      [e.target.name]: v
    }));
    if (errors[e.target.name]) setErrors(Object.assign({}, errors, {
      [e.target.name]: ''
    }));
  };
  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = T.errName;
    if (!form.contact.trim()) next.contact = T.errContactRequired;else {
      const tg = /^@?[a-zA-Z0-9_]{5,32}$/.test(form.contact.replace('@', ''));
      const ph = /^[\d\s\-+()]{10,}$/.test(form.contact);
      if (!tg && !ph) next.contact = T.errContactFormat;
    }
    if (!form.consent) next.consent = T.errConsent;
    setErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({
        name: '',
        contact: '',
        task: '',
        consent: false
      });
    }, 900);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--section-py-current) var(--gutter)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--type-inverse-heading)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, T.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto',
      fontSize: 'var(--type-hero-sub)',
      color: 'var(--text-secondary)',
      maxWidth: 'var(--container-narrow)'
    }
  }, T.sub)), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--success-bg)',
      border: '2px solid var(--success-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--card-pad)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 64,
    color: "var(--success-text)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-2)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, T.thanksHeading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)'
    }
  }, T.thanksText)) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name",
    style: label
  }, T.nameLabel), /*#__PURE__*/React.createElement(Field, {
    id: "name",
    value: form.name,
    onChange: change,
    placeholder: T.namePlaceholder,
    error: errors.name
  }), errors.name ? /*#__PURE__*/React.createElement("p", {
    style: errText
  }, errors.name) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "contact",
    style: label
  }, T.contactLabel), /*#__PURE__*/React.createElement(Field, {
    id: "contact",
    value: form.contact,
    onChange: change,
    placeholder: T.contactPlaceholder,
    error: errors.contact
  }), errors.contact ? /*#__PURE__*/React.createElement("p", {
    style: errText
  }, errors.contact) : /*#__PURE__*/React.createElement("p", {
    style: hint
  }, T.contactHint)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "task",
    style: label
  }, T.taskLabel), /*#__PURE__*/React.createElement(Field, {
    id: "task",
    value: form.task,
    onChange: change,
    placeholder: T.taskPlaceholder
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "consent",
    checked: form.consent,
    onChange: change,
    className: "ds-focusable",
    style: {
      marginTop: 4,
      width: 16,
      height: 16,
      flexShrink: 0,
      accentColor: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: errors.consent ? 'var(--danger-text)' : 'var(--text-secondary)'
    }
  }, T.consentText, " ", /*#__PURE__*/React.createElement("a", {
    href: "#privacy",
    style: {
      textDecoration: 'underline'
    }
  }, T.privacyLink))), errors.consent ? /*#__PURE__*/React.createElement("p", {
    style: Object.assign({}, errText, {
      marginLeft: 28
    })
  }, errors.consent) : null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: sending,
    className: "ds-focusable ds-pressable",
    style: {
      width: '100%',
      padding: '16px 32px',
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-base)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: sending ? 'not-allowed' : 'pointer',
      opacity: sending ? 0.5 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, sending ? T.sending : T.submit))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)',
      paddingTop: 'var(--space-12)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      textAlign: 'center'
    }
  }, T.contactsHeading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 'var(--space-8)'
    }
  }, [{
    icon: 'mail',
    text: 'info@singularity-ai.ru',
    href: 'mailto:info@singularity-ai.ru'
  }, {
    icon: 'phone',
    text: '+7 (915) 486-75-75',
    href: 'tel:+79154867575'
  }].map(x => /*#__PURE__*/React.createElement("div", {
    key: x.icon,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: 'var(--surface-accent-soft)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: x.icon,
    size: 20,
    color: "var(--text-accent)"
  })), /*#__PURE__*/React.createElement("a", {
    href: x.href,
    style: {
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, x.text)))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/contact-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/employee-screen.jsx
try { (() => {
const {
  Icon
} = window.DesignSystem_03bc73;
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
    responsibilities: ['Провожу интервью с заказчиком для выявления истинных потребностей', 'Структурирую идеи клиента в понятный план действий', 'Управляю ходом проекта: от идеи до сдачи готового агента', 'Обеспечиваю связь между бизнесом и технической разработкой', 'Помогаю адаптировать процессы компании под новые инструменты'],
    skills: ['PROJECT MANAGEMENT', 'CUSTDEV', 'КОММУНИКАЦИЯ', 'АВТОМАТИЗАЦИЯ']
  },
  maxim: {
    name: 'Максим Макеев',
    roleBadge: 'CO-FOUNDER & CTO',
    image: IMG + 'max.webp',
    email: 'maxim@singularity.ai',
    color: 'var(--person-maxim)',
    soft: 'rgba(6,182,212,0.1)',
    description: 'Превращаю бизнес-логику в стабильный и быстрый код. Моя задача — реализовать техническую часть так, чтобы система работала без сбоев, выдерживала нагрузки и требовала минимум ручного вмешательства.',
    responsibilities: ['Проектирую архитектуру сервисов', 'Автоматизирую работу с данными и отчетностью, исключая рутину', 'Настраиваю интеграции между различными сервисами и базами данных', 'Руковожу технической командой', 'Обеспечиваю техническую надежность и безопасность продукта'],
    skills: ['FULL-STACK DEV', 'PYTHON/VUE.JS', 'HIGH-LOAD', 'SYSTEM ARCHITECTURE']
  },
  savely: {
    name: 'Савелий',
    roleBadge: 'ML & AI ENGINEER',
    image: null,
    color: 'var(--person-savely)',
    soft: 'rgba(139,92,246,0.1)',
    description: 'Обучаю модели и собираю ИИ-агентов под конкретную задачу бизнеса, а не по шаблону. Моя часть работы начинается там, где заканчивается разбор процессов — превращаю понятную задачу в работающий сервис.',
    responsibilities: ['Обучение и дообучение моделей под задачу', 'Проектирование ИИ-агентов и их логики', 'Обработка естественного языка (NLP)', 'Проектирование высоконагруженных сервисов'],
    skills: ['MACHINE LEARNING', 'NLP', 'ИИ-АГЕНТЫ', 'HIGH-LOAD']
  }
};
function EmployeeScreen({
  slug
}) {
  const e = EMPLOYEES[(slug || '').toLowerCase()];
  if (!e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--section-py-current) var(--gutter)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '0 0 var(--space-4)',
        fontSize: 'var(--type-h2)',
        fontWeight: 'var(--weight-bold)',
        color: 'var(--text-primary)'
      }
    }, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"), /*#__PURE__*/React.createElement("a", {
      href: "#top"
    }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"));
  }
  const heading = {
    margin: '0 0 var(--space-6)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--weight-bold)',
    color: 'var(--text-primary)'
  };
  const bar = {
    width: 4,
    height: 32,
    borderRadius: 4,
    background: e.soft,
    display: 'inline-block'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--section-py-current) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#team",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--card-pad)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)',
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 160,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      border: '4px solid var(--border-default)',
      background: 'var(--surface-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, e.image ? /*#__PURE__*/React.createElement("img", {
    src: e.image,
    alt: e.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      color: e.color
    }
  }, e.name[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-2)',
      fontSize: 'var(--type-h2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, e.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: e.color
    }
  }, e.roleBadge), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--type-lead)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, e.description), e.email ? /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + e.email,
    className: "ds-focusable ds-pressable",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '8px 16px',
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-sm)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Email")) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: heading
  }, /*#__PURE__*/React.createElement("span", {
    style: bar
  }), "\u0420\u043E\u043B\u044C \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, e.responsibilities.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20,
    color: e.color,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, r))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: heading
  }, /*#__PURE__*/React.createElement("span", {
    style: bar
  }), "\u041D\u0430\u0432\u044B\u043A\u0438 \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)'
    }
  }, e.skills.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '8px 16px',
      background: e.soft,
      border: '1px solid ' + e.soft,
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: e.color
    }
  }, s))))))));
}
Object.assign(window, {
  EmployeeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/employee-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/home-screen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  ClientLogos,
  Faq,
  FinalCta,
  Section,
  Reveal,
  Metric,
  KeyPoint,
  CaseCard,
  Icon,
  Button
} = window.DesignSystem_03bc73;
const IMG = '../../assets/images/';
const STATS = [{
  value: 46,
  prefix: '',
  suffix: '',
  label: 'регионов федерации — в одной системе',
  attribution: 'delivered'
}, {
  value: 150,
  prefix: '+',
  suffix: '%',
  label: 'органического трафика банному комплексу',
  attribution: 'delivered'
}, {
  value: 4,
  prefix: 'x',
  suffix: '',
  label: 'дольше посетители изучают сайт застройщика',
  attribution: 'delivered'
}];
const AUDIENCE = ['Работа устроена не как у всех — и вы уже поняли, что готовое не подходит', 'Пробовали типовую систему и бросили: оказалось проще работать по-старому', 'Отрасль такая, что программ под неё просто не написали', 'Доросли до потолка: таблицы уже не тянут, а большая система избыточна и неподъёмна', 'Чувствуете, что отстаёте, но не понимаете, с чего начать'];
const ROUTES = [{
  image: IMG + 'icon-automation.webp',
  href: '#automation',
  title: 'Автоматизация процессов',
  text: 'Заявки теряются, данные лежат в пяти местах, отчёт собирается руками. Разбираем, где уходит время, и строим систему под ваш процесс.',
  cta: 'Разобрать процессы'
}, {
  image: IMG + 'icon-ai.webp',
  href: '#ai',
  title: 'ИИ-решения',
  text: 'Обработка обращений, распознавание документов, поиск по своей базе знаний. Там, где ИИ действительно снимает рутину, а не стоит для галочки.',
  cta: 'Посмотреть ИИ-решения'
}, {
  image: IMG + 'icon-sites.webp',
  href: '#sites',
  title: 'Сайты и SEO',
  text: 'Сайт как часть системы, а не как картинка: чтобы вас находили в поиске и чтобы заявка доходила до CRM, а не терялась в почте',
  cta: 'Получить разбор сайта'
}];
const BELIEF = [{
  icon: IMG + 'belief-offshelf.png',
  label: 'Готовое решение',
  title: 'Даёт равенство',
  text: 'Его купит любой конкурент — до вас, вместе с вами и после вас. У всех получается одинаково.'
}, {
  icon: IMG + 'belief-custom.png',
  label: 'Своё решение',
  title: 'Даёт преимущество',
  text: 'Сделано под ваш способ работать, ваши правила, вашу специфику. Скопировать нельзя.'
}];
const CASES = [{
  name: 'Верба',
  subtitle: 'Банный комплекс, Одинцово',
  description: 'Сделали сайт, настроили поисковое продвижение, собрали контентную стратегию и структуру страниц под форматы отдыха и программы.',
  result: '+150% органического трафика',
  note: 'Первый клиент агентства — работаем до сих пор.',
  url: 'https://myverba.ru/',
  urlLabel: 'myverba.ru',
  screenshot: IMG + 'cases/verba.webp'
}, {
  name: 'More House',
  subtitle: 'Энергоэффективные дома',
  description: 'Сделали сайт, поисковое продвижение и архитектуру страниц под проекты домов и технологии, работали с контентом.',
  result: 'в 4 раза больше времени на сайте',
  url: 'https://morehouse.ru/',
  urlLabel: 'morehouse.ru',
  screenshot: IMG + 'cases/more-house.webp'
}, {
  name: 'ФХГАСР',
  subtitle: 'Федерация адаптивной художественной гимнастики России',
  description: 'Провели полную цифровизацию процессов федерации — от проведения занятий до соревнований: объединили группы из 46 регионов в единую систему.',
  result: '46 регионов в единой системе',
  url: 'https://vfrgas.ru/',
  urlLabel: 'vfrgas.ru',
  screenshot: IMG + 'cases/vfrgas.webp'
}, {
  name: 'Верба — чат-боты',
  subtitle: 'Внутренняя автоматизация, банный комплекс',
  description: 'Чат-бот маршрутизирует заявки на нужного менеджера, отправляет уведомления и собирает аналитику в дашборд.',
  result: 'сделан, запущен, работает',
  url: 'https://myverba.ru/',
  urlLabel: 'myverba.ru'
}, {
  name: 'More House — CRM',
  subtitle: 'Операционный процесс, застройщик',
  description: 'Настроили путь лида в CRM с автоматическими уведомлениями о новых заявках.',
  result: 'лид → CRM с уведомлениями',
  url: 'https://morehouse.ru/',
  urlLabel: 'morehouse.ru'
}, {
  name: 'Цветочные магазины',
  subtitle: 'Платформа для роста трафика',
  description: 'Разрабатываем единую платформу для увеличения трафика малых цветочных магазинов.',
  result: 'в работе'
}];
const STEPS = [{
  icon: IMG + 'step-talk.png',
  title: 'Разговор, 20 минут',
  text: 'Слушаем задачу. Без презентаций и обязательств с вашей стороны.'
}, {
  icon: IMG + 'step-review.png',
  title: 'Разбор процесса',
  text: 'Смотрим, как работа устроена сейчас и где именно уходит время'
}, {
  icon: IMG + 'step-estimate.png',
  title: 'Честный ответ и смета',
  text: 'Понятная задача — смета за 2–3 дня. Сложная — сначала короткое техзадание. Если не окупится, скажем сразу.'
}, {
  icon: IMG + 'step-delivery.png',
  title: 'Работа и передача',
  text: 'Приёмка — когда ваш человек сделал в системе реальную работу. Код, документация и доступы остаются у вас.'
}];
const COMPARISON = [{
  icon: IMG + 'vs-freelancer.png',
  alt: 'Фрилансер',
  text: 'Сайт отдельно, реклама отдельно, CRM отдельно — и никто не отвечает за то, что не работает вместе'
}, {
  icon: IMG + 'vs-agency.png',
  alt: 'Крупная студия',
  text: 'Платите за менеджеров и офис — до вашего проекта руки доходят в последнюю очередь'
}, {
  icon: IMG + 'vs-employee.png',
  alt: 'Сотрудник в штат',
  text: 'Зарплата, налоги, отпуск, риск, что уйдёт — против системы, которая не уходит в отпуск'
}, {
  icon: IMG + 'vs-nothing.png',
  alt: 'Ничего не менять',
  text: 'Заявки продолжают теряться. Конкуренты — не продолжают.'
}];
const PILLARS = [{
  icon: IMG + 'pillar-talk.png',
  title: 'Вы говорите с теми, кто будет делать работу',
  text: 'Первый разговор — с нашей командой, а не с аккаунт-менеджером, который передаст задачу дальше. Между вами и теми, кто пишет код, нет посредников.'
}, {
  icon: null,
  title: 'Мы не пропадаем после сдачи — и это проверяемо',
  text: 'Клиенты, с которыми мы начинали, работают с нами до сих пор',
  linkLabel: 'Проверить на странице проектов'
}, {
  icon: null,
  title: 'Скажем «нет», если не сработает',
  text: 'Не берём проект, если не уверены, что он даст эффект. Потерять сделку честнее, чем продать ненужное.'
}];
const NOT_FOR = [{
  lead: 'Задачу закрывает готовый сервис',
  text: 'Скажем об этом и подскажем, куда обратиться, — вместо того чтобы делать сложнее ради своего чека'
}, {
  lead: 'Нужна только картинка',
  text: 'Мы отвечаем за то, что сайт делает: заявки доходят, страницы находятся в поиске. Айдентика и визуальный образ — это к дизайн-студии'
}, {
  lead: 'Решает только цифра в смете',
  text: 'Считаем по матрице часов и показываем расчёт построчно. Если сравнение идёт по итоговой сумме без того, что за ней, — не сойдёмся'
}, {
  lead: 'Со стороны компании некому участвовать',
  text: 'Нужен человек, который знает процесс и принимает решения. Иначе обе стороны потеряют время.'
}, {
  lead: 'Деньги нужны в понедельник',
  text: 'Разработка занимает недели и месяцы. Сначала решайте кассу — мы подождём.'
}];
const TEAM = [{
  slug: 'bogdan',
  name: 'Богдан Краснов',
  role: 'CO-FOUNDER & STRATEGIST',
  image: IMG + 'bogdan.webp',
  color: 'var(--person-bogdan)',
  points: ['Ведёт первый разговор и переводит задачу бизнеса в понятный план', 'Считает, окупится ли решение — до того как вы подпишете договор', 'Держит связь между бизнесом и технической частью']
}, {
  slug: 'maxim',
  name: 'Максим Макеев',
  role: 'CO-FOUNDER & CTO',
  image: IMG + 'max.webp',
  color: 'var(--person-maxim)',
  points: ['Отвечает за архитектуру и техническую надёжность', 'Настраивает интеграции между сервисами и базами данных', 'На связи после сдачи — не только на этапе разработки']
}, {
  slug: 'savely',
  name: 'Савелий',
  role: 'ML & AI ENGINEER',
  image: null,
  color: 'var(--person-savely)',
  points: ['Обучает модели и собирает ИИ-агентов под конкретную задачу', 'Работает там, где ИИ реально снимает рутину, не для галочки', 'Обработка естественного языка, высоконагруженные сервисы']
}];
const FAQ = [{
  q: 'Сколько времени занимает разработка?',
  a: 'Зависит от объёма. Понятная задача — смета за 2–3 дня после разбора. Сложная система — сначала короткое техзадание, потом смета; согласование обычно занимает до двух недель. Мы не называем сроков, которых не проверяли: быстрая оценка сложной задачи означает, что в неё заложили запас на всё непонятное — то есть вы переплатите или получите не то.'
}, {
  q: 'Нужно ли нанимать программиста, чтобы это поддерживать?',
  a: 'Нет, поддержку и доработки ведём мы. При этом код, документация и доступы принадлежат вам — вы можете в любой момент передать проект другим подрядчикам. Иначе это не партнёрство, а привязка.'
}, {
  q: 'ИИ заменит моих сотрудников?',
  a: 'Нет, и мы это не продаём. ИИ забирает повторяющуюся работу: разбор однотипных обращений, перенос данных между системами, заполнение форм. Люди остаются там, где нужно решение и разговор. Если в вашей задаче ИИ ничего не снимает, мы скажем это прямо, а не станем встраивать его для галочки.'
}, {
  q: 'Насколько безопасно отдавать вам данные?',
  a: 'Подписываем NDA. Доступы выдаём под конкретную задачу и отзываем после сдачи. Где данные чувствительные, разворачиваем решение в вашем контуре, чтобы они не уходили наружу. Конкретный вариант зависит от задачи — обсуждаем до начала работ, а не после.'
}, {
  q: 'Что если процесс изменится и логику нужно будет переделать?',
  a: 'Это нормально, процессы меняются. Правки оформляем отдельной задачей и оцениваем по той же матрице часов, что и основную работу. Система не застывает после сдачи.'
}];
const h2 = {
  margin: '0 0 var(--space-4)',
  fontSize: 'var(--text-4xl)',
  fontWeight: 'var(--weight-bold)',
  color: 'var(--text-primary)',
  lineHeight: 'var(--leading-tight)'
};
const lead = {
  margin: '0 0 var(--space-10)',
  fontSize: 'var(--text-lg)',
  color: 'var(--text-secondary)',
  lineHeight: 'var(--leading-relaxed)',
  maxWidth: 'var(--container-prose)'
};
const grid = cols => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(' + cols + ', minmax(0, 1fr))',
  gap: 'var(--space-6)'
});
function RouteCard({
  route
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: route.href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: 'var(--space-8)',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (hover ? 'var(--border-accent-soft)' : 'var(--border-subtle)'),
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(var(--lift))' : 'none',
      transition: 'all var(--duration-base)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      marginBottom: 'var(--space-6)',
      transform: hover ? 'scale(var(--zoom-icon))' : 'none',
      transition: 'transform var(--duration-base)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: route.image,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, route.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      flexGrow: 1
    }
  }, route.text), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-sm)'
    }
  }, route.cta, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })));
}
function HomeScreen() {
  const [wide, setWide] = React.useState(window.innerWidth >= 900);
  React.useEffect(() => {
    const on = () => setWide(window.innerWidth >= 900);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const cols = n => wide ? n : 1;
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      paddingBottom: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    badge: "\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F",
    title: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B \u043D\u0430 \u0442\u0438\u043F\u043E\u0432\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441. \u0412\u0430\u0448 \u2014 \u043D\u0435 \u0442\u0430\u043A\u043E\u0439.",
    subtitle: "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C\u0441\u044F, \u043A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0432\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0442\u0430, \u0438 \u0441\u0442\u0440\u043E\u0438\u043C \u043F\u043E\u0434 \u043D\u0435\u0451: \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0418\u0418-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0441\u0430\u0439\u0442\u044B. \u0421\u043A\u0430\u0436\u0435\u043C \u043F\u0440\u044F\u043C\u043E, \u0435\u0441\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0430 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C \u0437\u0430 \u0434\u0435\u0441\u044F\u0442\u044C \u0442\u044B\u0441\u044F\u0447.",
    ctaLabel: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u0431\u043E\u0440 \u0437\u0430\u0434\u0430\u0447\u0438",
    ctaHref: "#contact",
    bgImage: IMG + 'hero-visual.webp',
    style: {
      marginBottom: 'var(--space-16)'
    }
  })), /*#__PURE__*/React.createElement(ClientLogos, {
    logos: [{
      alt: 'Верба',
      mask: IMG + 'clients/verba.svg',
      color: 'var(--client-verba-brown)',
      width: 111
    }, {
      alt: 'More House',
      src: IMG + 'clients/morehouse.png'
    }, {
      alt: 'ФХГАСР',
      src: IMG + 'clients/vfrgas.svg'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      marginBottom: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: grid(cols(3))
  }, STATS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.label,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(Metric, {
    value: s.value,
    prefix: s.prefix,
    suffix: s.suffix,
    label: s.label,
    attribution: s.attribution
  }))))), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "\u041A\u0442\u043E \u043D\u0430\u0448 \u043A\u043B\u0438\u0435\u043D\u0442"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "\u041E\u0431\u0449\u0438\u0439 \u043F\u0440\u0438\u0437\u043D\u0430\u043A \u043E\u0434\u0438\u043D: \u0432\u044B \u0443\u0436\u0435 \u0437\u043D\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u043D\u0435 \u043A\u0430\u043A \u0443 \u0432\u0441\u0435\u0445. \u0423\u0431\u0435\u0436\u0434\u0430\u0442\u044C \u0432 \u044D\u0442\u043E\u043C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u2014 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C, \u0447\u0442\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438 \u0441\u0442\u043E\u0438\u0442 \u043F\u043E\u0434\u044A\u0451\u043C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433."), /*#__PURE__*/React.createElement("ul", {
    style: Object.assign({
      listStyle: 'none',
      margin: 0,
      padding: 0
    }, grid(cols(2)), {
      gap: 'var(--space-4)'
    })
  }, AUDIENCE.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: item,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      border: '1px solid var(--border-subtle)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20,
    color: "var(--text-accent)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, item)))))), /*#__PURE__*/React.createElement(Section, {
    id: "automation"
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "\u0421 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "\u0422\u0440\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u0427\u0442\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0432\u0430\u0448\u0435 \u2014 \u0441\u0442\u0430\u043D\u0435\u0442 \u043F\u043E\u043D\u044F\u0442\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u0431\u043E\u0440\u0430."), /*#__PURE__*/React.createElement("div", {
    style: grid(cols(3))
  }, ROUTES.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.title,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(RouteCard, {
    route: r
  }))))), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-accent)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "\u0412\u043E \u0447\u0442\u043E \u043C\u044B \u0432\u0435\u0440\u0438\u043C"), /*#__PURE__*/React.createElement("h2", {
    style: Object.assign({}, h2, {
      fontSize: 'var(--text-5xl)',
      marginBottom: 'var(--space-8)',
      maxWidth: 'var(--container-prose)'
    })
  }, "\u0412\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u0442\u043E\u0442, \u0447\u044C\u044E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044E \u043D\u0435\u043B\u044C\u0437\u044F \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    style: Object.assign({}, grid(cols(2)), {
      marginBottom: 'var(--space-8)'
    })
  }, BELIEF.map((b, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: b.label,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      background: i === 0 ? 'var(--surface-raised)' : 'var(--surface-accent-soft)',
      border: '1px solid ' + (i === 0 ? 'var(--border-default)' : 'var(--border-accent-soft)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--gray-900)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: b.icon,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: i === 0 ? 'var(--text-faint)' : 'var(--text-accent)'
    }
  }, b.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-3)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, b.text))))), /*#__PURE__*/React.createElement("p", {
    style: Object.assign({}, lead, {
      marginBottom: 'var(--space-12)'
    })
  }, "\u0420\u0430\u043D\u044C\u0448\u0435 \u0441\u0432\u043E\u0451 \u0441\u0442\u043E\u0438\u043B\u043E \u043A\u0430\u043A \u0433\u043E\u0434\u043E\u0432\u043E\u0439 \u0431\u044E\u0434\u0436\u0435\u0442 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0421\u0435\u0433\u043E\u0434\u043D\u044F \u2014 \u043D\u0435\u0442. \u042D\u0442\u043E \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u043D\u043E \u043E\u043D\u043E \u043C\u0435\u043D\u044F\u0435\u0442 \u0432\u0441\u0451."), /*#__PURE__*/React.createElement(KeyPoint, {
    variant: "rule",
    eyebrow: "\u041D\u0430\u0448\u0435 \u0434\u043E\u0441\u0442\u043E\u0439\u043D\u043E\u0435 \u0434\u0435\u043B\u043E",
    lead: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u2014 \u0438 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u0438\u0445 \u0432 \u0442\u043E, \u0447\u0435\u0433\u043E \u043D\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0438 \u0443 \u043A\u043E\u0433\u043E"
  })), /*#__PURE__*/React.createElement(Section, {
    id: "sites"
  }, /*#__PURE__*/React.createElement("h2", {
    style: Object.assign({}, h2, {
      textAlign: 'center',
      marginBottom: 'var(--space-12)'
    })
  }, "\u0427\u0442\u043E \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u0438"), /*#__PURE__*/React.createElement("div", {
    style: Object.assign({}, grid(cols(3)), {
      gap: 'var(--space-8)'
    })
  }, CASES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.name,
    delay: Math.min(i, 3) * 100
  }, /*#__PURE__*/React.createElement(CaseCard, _extends({
    variant: "compact"
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    icon: "arrow-right",
    href: "#cases"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"))), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u043F\u043E\u0442\u043E\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u2014 \u043D\u0435 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442"), /*#__PURE__*/React.createElement("p", {
    style: Object.assign({}, lead, {
      marginBottom: 'var(--space-12)'
    })
  }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0431\u0435\u0441\u043F\u043E\u0440\u044F\u0434\u043E\u043A. \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0435 \u043E\u043F\u0438\u0441\u0430\u043D, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430."), /*#__PURE__*/React.createElement("div", {
    style: Object.assign({}, grid(cols(4)), {
      gap: 'var(--space-8)'
    })
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: "",
    loading: "lazy",
    style: {
      width: 64,
      height: 64,
      objectFit: 'contain',
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, s.text))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: Object.assign({}, h2, {
      textAlign: 'center',
      marginBottom: 'var(--space-10)'
    })
  }, "\u0421 \u0447\u0435\u043C \u0432\u044B \u044D\u0442\u043E \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0435"), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      overflowX: 'auto',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, COMPARISON.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.alt,
    style: {
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-5) var(--space-6) var(--space-5) 0',
      verticalAlign: 'top',
      width: 224
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'var(--gray-900)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: row.icon,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), row.alt)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-5) 0',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, row.text)))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-10)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      textAlign: 'center'
    }
  }, "\u0422\u0440\u0438 \u0432\u0435\u0449\u0438, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u0441\u0451 \u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.title,
    delay: i * 80,
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, p.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--gray-900)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.icon,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 24,
    color: "var(--accent)",
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '65ch'
    }
  }, p.text, p.linkLabel ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("a", {
    href: "#cases",
    style: {
      fontWeight: 'var(--weight-semibold)'
    }
  }, p.linkLabel)) : null)))))), /*#__PURE__*/React.createElement(Section, {
    muted: true
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "\u041A\u043E\u043C\u0443 \u043C\u044B \u043D\u0435 \u043D\u0443\u0436\u043D\u044B"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "\u041F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0435 \u0442\u0435\u043C, \u043A\u043E\u0433\u043E \u043C\u044B \u0431\u0435\u0440\u0451\u043C, \u0430 \u0442\u0435\u043C, \u043A\u043E\u043C\u0443 \u0433\u043E\u0432\u043E\u0440\u0438\u043C \xAB\u043D\u0435\u0442\xBB"), /*#__PURE__*/React.createElement("ul", {
    style: Object.assign({
      listStyle: 'none',
      margin: 0,
      padding: 0
    }, grid(cols(2)), {
      gap: 'var(--space-4)'
    })
  }, NOT_FOR.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: item.lead,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      height: '100%',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20,
    color: "var(--text-faint)",
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)'
    }
  }, item.lead), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, item.text))))))), /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      padding: 'var(--section-py-inverse) 0',
      background: 'var(--surface-inverse)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + IMG + 'team-bg.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.2,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--white)',
      textAlign: 'center',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0435\u0434\u0451\u0442 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto var(--space-20)',
      color: 'var(--gray-400)',
      textAlign: 'center',
      maxWidth: 'var(--container-narrow)'
    }
  }, "\u0412\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441 \u0442\u0435\u043C\u0438, \u043A\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u2014 \u0431\u0435\u0437 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u0432\u0430\u043C\u0438 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439"), /*#__PURE__*/React.createElement("div", {
    style: grid(cols(3))
  }, TEAM.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement("a", {
    href: '#team/' + m.slug,
    className: "ds-focusable",
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface-inverse-card)',
      border: '1px solid var(--gray-800)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--card-pad)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      filter: 'grayscale(1)',
      border: '2px solid var(--gray-800)',
      background: 'var(--gray-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, m.image ? /*#__PURE__*/React.createElement("img", {
    src: m.image,
    alt: m.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--gray-500)'
    }
  }, m.name[0])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--white)'
    }
  }, m.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: m.color
    }
  }, m.role))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, m.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      color: 'var(--gray-300)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 16,
    color: m.color,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 'var(--leading-relaxed)'
    }
  }, p)))))))))), /*#__PURE__*/React.createElement(Faq, {
    heading: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
    items: FAQ,
    idPrefix: "home",
    id: "faq"
  }), /*#__PURE__*/React.createElement("div", {
    id: "contact"
  }, /*#__PURE__*/React.createElement(FinalCta, {
    heading: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442",
    sub: "20 \u043C\u0438\u043D\u0443\u0442 \u0441 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439. \u0420\u0430\u0437\u0431\u0435\u0440\u0451\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0447\u0435\u0441\u0442\u043D\u043E \u0441\u043A\u0430\u0436\u0435\u043C, \u043C\u043E\u0436\u0435\u043C \u043B\u0438 \u043C\u044B \u043F\u043E\u043C\u043E\u0447\u044C. \u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F.",
    ctaLabel: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u0431\u043E\u0440 \u0437\u0430\u0434\u0430\u0447\u0438",
    ctaHref: "#contact",
    phone: "+7 (915) 486-75-75",
    phoneHref: "tel:+79154867575",
    telegram: "https://t.me/singularity_ai",
    telegramLabel: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"
  })));
}
Object.assign(window, {
  HomeScreen,
  RouteCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/home-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/privacy-screen.jsx
try { (() => {
const {
  Section,
  Reveal,
  Icon,
  KeyPoint
} = window.DesignSystem_03bc73;

/* Экран показывает раскладку длинного правового документа: оглавление,
   секции с иконкой и заголовком, ширина колонки 64rem. Тело разделов в
   UI-кит не переносится — юридический текст живёт в pages/PrivacyPolicy.tsx
   и меняется юристом, а не дизайн-системой. */
const SECTIONS = [{
  icon: 'check-circle',
  title: '1. Общие положения'
}, {
  icon: 'search',
  title: '2. Персональные данные, которые мы собираем'
}, {
  icon: 'lightbulb',
  title: '3. Цели и правовые основания обработки персональных данных'
}, {
  icon: 'wrench',
  title: '4. Способы и сроки обработки персональных данных'
}, {
  icon: 'zap',
  title: '5. Меры по защите персональных данных'
}, {
  icon: 'send',
  title: '6. Передача персональных данных третьим лицам'
}, {
  icon: 'cookie',
  title: '7. Использование файлов cookie и аналогичных технологий'
}, {
  icon: 'globe',
  title: '8. Ваши права в отношении персональных данных'
}, {
  icon: 'mail',
  title: '9. Контакты и обратная связь'
}, {
  icon: 'plus',
  title: '10. Изменения в Политике конфиденциальности'
}];
function PrivacyScreen() {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 var(--space-4)',
      fontSize: 'var(--type-h1)',
      fontWeight: 'var(--weight-extrabold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-tight)'
    }
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-12)',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F:"), " 12 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2025 \u0433."), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
    style: {
      marginBottom: 'var(--space-16)',
      padding: 'var(--card-pad)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-accent)'
    }
  }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--space-3)'
    }
  }, SECTIONS.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.title
  }, /*#__PURE__*/React.createElement("a", {
    href: '#privacy-' + (i + 1),
    className: "ds-focusable",
    style: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, s.title))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, SECTIONS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    delay: Math.min(i, 5) * 60
  }, /*#__PURE__*/React.createElement("section", {
    id: 'privacy-' + (i + 1)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-accent-soft)',
      color: 'var(--text-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-tight)'
    }
  }, s.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 60,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, [0, 1, 2].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    "aria-hidden": "true",
    style: {
      height: 12,
      borderRadius: 6,
      background: 'repeating-linear-gradient(135deg, var(--border-subtle) 0 6px, var(--surface-page) 6px 12px)',
      width: n === 2 ? '62%' : '100%'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "\u0442\u0435\u043A\u0441\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u0430 \u2014 pages/PrivacyPolicy.tsx")))))), /*#__PURE__*/React.createElement(KeyPoint, {
    variant: "card",
    style: {
      marginTop: 'var(--space-16)'
    },
    lead: "\u041F\u0440\u0430\u0432\u043E\u0432\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432 \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u0441\u044F",
    support: "\u0417\u0434\u0435\u0441\u044C \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430: \u043E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0441\u0435\u043A\u0446\u0438\u044F \u0441 \u0438\u043A\u043E\u043D\u043A\u043E\u0439 44\xD744, \u043A\u043E\u043B\u043E\u043D\u043A\u0430 64rem, \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0438\u0442\u043C 48px. \u0424\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u0436\u0438\u0432\u0443\u0442 \u0432 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u0438 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u044E\u0440\u0438\u0441\u0442\u043E\u043C."
  })));
}
Object.assign(window, {
  PrivacyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/privacy-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/site-footer.jsx
try { (() => {
const {
  SiteFooter
} = window.DesignSystem_03bc73;
const SECTIONS = [{
  label: 'Автоматизация процессов',
  href: '#automation'
}, {
  label: 'ИИ-решения',
  href: '#automation'
}, {
  label: 'Для федераций и НКО',
  href: '#automation'
}, {
  label: 'Сайты и SEO',
  href: '#sites'
}, {
  label: 'SEO и GEO-продвижение',
  href: '#sites'
}, {
  label: 'Сайты для банных комплексов',
  href: '#sites'
}, {
  label: 'Сайты для застройщиков',
  href: '#sites'
}, {
  label: 'Проекты',
  href: '#top'
}];

/* Экранная обвязка: данные сайта поверх системного SiteFooter. */
function AppFooter() {
  return /*#__PURE__*/React.createElement(SiteFooter, {
    brand: "\u0421\u0418\u041D\u0413\u0423\u041B\u042F\u0420\u041D\u041E\u0421\u0422\u042C",
    claim: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u043C\u0430\u043B\u044B\u043C \u0438 \u0441\u0440\u0435\u0434\u043D\u0438\u043C \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E",
    sub: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F, \u0418\u0418 \u0438 \u0441\u0430\u0439\u0442\u044B \u2014 \u0431\u0435\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432",
    sections: SECTIONS,
    email: "info@singularity-ai.ru",
    phone: "+7 (915) 486-75-75",
    copyright: "\xA9 2026 \u0421\u0438\u043D\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.",
    legalLabel: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    legalHref: "#privacy",
    style: {
      marginTop: 'var(--space-20)'
    }
  });
}
Object.assign(window, {
  AppFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/site-footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/site-header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SiteHeader
} = window.DesignSystem_03bc73;
const NAV = [{
  label: 'АВТОМАТИЗАЦИЯ',
  href: '#automation'
}, {
  label: 'САЙТЫ',
  href: '#sites'
}, {
  label: 'КОМАНДА',
  href: '#team'
}, {
  label: 'КОНТАКТЫ',
  href: '#contact'
}];
const NAV_MOBILE = [{
  label: 'Автоматизация и AI',
  href: '#automation'
}, {
  label: 'Сайты и SEO',
  href: '#sites'
}, {
  label: 'Команда',
  href: '#team'
}, {
  label: 'Контакты',
  href: '#contact'
}];

/* Экранная обвязка: данные сайта поверх системного SiteHeader. */
function AppHeader(props) {
  return /*#__PURE__*/React.createElement(SiteHeader, _extends({
    brand: "\u0421\u0418\u041D\u0413\u0423\u041B\u042F\u0420\u041D\u041E\u0421\u0422\u042C",
    tagline: "\u0421\u0442\u0440\u043E\u0438\u043C \u0442\u043E, \u0447\u0435\u0433\u043E \u043D\u0435\u0442 \u0432 \u043A\u043E\u0440\u043E\u0431\u043A\u0435",
    nav: NAV,
    navMobile: NAV_MOBILE,
    cta: "\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443",
    ctaHref: "#contact"
  }, props));
}
Object.assign(window, {
  AppHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/site-header.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ClientLogos = __ds_scope.ClientLogos;

__ds_ns.CookieConsent = __ds_scope.CookieConsent;

__ds_ns.Faq = __ds_scope.Faq;

__ds_ns.FinalCta = __ds_scope.FinalCta;

__ds_ns.GradientBackdrop = __ds_scope.GradientBackdrop;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.HeroShapes = __ds_scope.HeroShapes;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.SolutionCard = __ds_scope.SolutionCard;

__ds_ns.Accent = __ds_scope.Accent;

__ds_ns.AnimatedNumber = __ds_scope.AnimatedNumber;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CipherText = __ds_scope.CipherText;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.KeyPoint = __ds_scope.KeyPoint;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.ScrollProgress = __ds_scope.ScrollProgress;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.IconlyGlassArrow = __ds_scope.IconlyGlassArrow;

__ds_ns.IconlyGlassBag = __ds_scope.IconlyGlassBag;

__ds_ns.IconlyGlassCalendar = __ds_scope.IconlyGlassCalendar;

__ds_ns.IconlyGlassCamera = __ds_scope.IconlyGlassCamera;

__ds_ns.IconlyGlassDiscount = __ds_scope.IconlyGlassDiscount;

__ds_ns.IconlyGlassFilter = __ds_scope.IconlyGlassFilter;

__ds_ns.IconlyGlassFolder = __ds_scope.IconlyGlassFolder;

__ds_ns.IconlyGlassGame = __ds_scope.IconlyGlassGame;

__ds_ns.IconlyGlassInfo = __ds_scope.IconlyGlassInfo;

__ds_ns.IconlyGlassMenu = __ds_scope.IconlyGlassMenu;

__ds_ns.IconlyGlassPaper = __ds_scope.IconlyGlassPaper;

__ds_ns.IconlyGlassProfile = __ds_scope.IconlyGlassProfile;

})();
