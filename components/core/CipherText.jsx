import React from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

/** Строка, которая «расшифровывается» по символам за 1500 мс. */
export function CipherText({ text = '', delay = 0, style }) {
  const [out, setOut] = React.useState(text);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOut(text); return; }
    let i = 0, iv;
    const frames = 30, duration = 1500;
    const step = text.length / ((duration / 1000) * frames);
    const scramble = () => text.split('').map((ch, idx) => (idx < i ? text[idx] : ch === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)])).join('');
    setOut(scramble());
    const to = setTimeout(() => {
      iv = setInterval(() => {
        setOut(scramble());
        if (i >= text.length) { clearInterval(iv); setOut(text); }
        i += Math.max(step, 0.5);
      }, 1000 / frames);
    }, delay);
    return () => { clearTimeout(to); if (iv) clearInterval(iv); };
  }, [text, delay]);
  return <span style={style}>{out}</span>;
}
