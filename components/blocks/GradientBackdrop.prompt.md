Живой градиентный фон секции — absolute-слой под контентом.

```jsx
<section style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-hero)' }}>
  <GradientBackdrop />
  <div style={{ position: 'relative' }}>…контент…</div>
</section>
```

- Родителю обязательны `position: relative` и `overflow: hidden`.
- Текст поверх — только токены `--text-on-gradient*`.
- Больше одной такой секции на страницу не ставьте: полотно перестаёт быть акцентом.
