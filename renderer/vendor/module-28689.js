// vendor/module-28689.js — webpack module 28689
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31085 /* vendor/module-31085 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(3996 /* vendor/module-3996 */),
  a = n(30358 /* vendor/module-30358 */),
  s = n(91117 /* vendor/module-91117 */);
function l(e) {
  const [t, n] = o.useState(() => ({ form: e.form, name: e.name })),
    [r, l] = o.useState(() => new a.FieldApi({ ...e }));
  let c = r;
  (t.form === e.form && t.name === e.name) ||
    ((c = new a.FieldApi({ ...e })), l(c), n({ form: e.form, name: e.name }));
  const u = i.useSelector(
      c.store,
      "array" === e.mode ? (e) => e.meta._arrayVersion || 0 : (e) => e.value,
    ),
    d = i.useSelector(c.store, (e) => e.meta.isTouched),
    p = i.useSelector(c.store, (e) => e.meta.isBlurred),
    f = i.useSelector(c.store, (e) => e.meta.isDirty),
    h = i.useSelector(c.store, (e) => e.meta.errorMap),
    m = i.useSelector(c.store, (e) => e.meta.errorSourceMap),
    g = i.useSelector(c.store, (e) => e.meta.isValidating),
    y = o.useMemo(
      () => ({
        ...c,
        get state() {
          return {
            value: "array" === e.mode ? c.state.value : u,
            get meta() {
              return {
                ...c.state.meta,
                isTouched: d,
                isBlurred: p,
                isDirty: f,
                errorMap: h,
                errorSourceMap: m,
                isValidating: g,
              };
            },
          };
        },
      }),
      [c, e.mode, u, d, p, f, h, m, g],
    );
  return (
    s.useIsomorphicLayoutEffect(c.mount, [c]),
    s.useIsomorphicLayoutEffect(() => {
      c.update(e);
    }),
    y
  );
}
(t.Field = ({ children: e, ...t }) => {
  const n = l(t),
    i = o.useMemo(() => a.functionalUpdate(e, n), [e, n]);
  return r.jsx(r.Fragment, { children: i });
}),
  (t.useField = l);
