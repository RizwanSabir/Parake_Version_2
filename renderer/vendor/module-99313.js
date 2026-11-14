// vendor/module-99313.js — webpack module 99313
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31085 /* vendor/module-31085 */),
  o = n(30358 /* vendor/module-30358 */),
  i = n(3996 /* vendor/module-3996 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(28689 /* vendor/module-28689 */),
  l = n(91117 /* vendor/module-91117 */),
  c = n(48914 /* vendor/module-48914 */),
  u = n(36318 /* vendor/module-36318 */);
function d({ form: e, selector: t = (e) => e, children: n }) {
  const a = i.useSelector(e.store, t);
  return r.jsx(r.Fragment, { children: o.functionalUpdate(n, a) });
}
t.useForm = function (e) {
  const t = c.useFormId(),
    [n, i] = a.useState(e?.formId),
    [p, f] = a.useState(() => new o.FormApi({ ...e, formId: e?.formId ?? t }));
  if (n !== e?.formId) {
    const n = e?.formId ?? t;
    f(new o.FormApi({ ...e, formId: n })), i(n);
  }
  const h = a.useMemo(() => {
    const e = {
      ...p,
      handleSubmit: (...e) => p._handleSubmit(...e),
      get formId() {
        return p._formId;
      },
      get state() {
        return p.store.state;
      },
    };
    return (
      (e.Field = function (e) {
        return r.jsx(s.Field, { ...e, form: p });
      }),
      (e.FormGroup = function (e) {
        return r.jsx(u.FormGroup, { ...e, form: p });
      }),
      (e.Subscribe = function (e) {
        return r.jsx(d, {
          form: p,
          selector: e.selector,
          children: e.children,
        });
      }),
      e
    );
  }, [p]);
  l.useIsomorphicLayoutEffect(p.mount, []),
    l.useIsomorphicLayoutEffect(() => {
      p.update(e);
    });
  const m = a.useRef(!1);
  return (
    l.useIsomorphicLayoutEffect(() => {
      m.current && e?.transform && o.mergeAndUpdate(p, e.transform);
    }, [p, e?.transform]),
    l.useIsomorphicLayoutEffect(() => {
      m.current = !0;
    }),
    h
  );
};
