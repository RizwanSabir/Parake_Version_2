// vendor/module-36318.js — webpack module 36318
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
    [r, l] = o.useState(() => new a.FormGroupApi({ ...e }));
  (t.form === e.form && t.name === e.name) ||
    (l(new a.FormGroupApi({ ...e })), n({ form: e.form, name: e.name }));
  const c = i.useSelector(r.store, (e) => e.value),
    u = i.useSelector(r.store, (e) => e.meta.isTouched),
    d = i.useSelector(r.store, (e) => e.meta.isBlurred),
    p = i.useSelector(r.store, (e) => e.meta.isDirty),
    f = i.useSelector(r.store, (e) => e.meta.errorMap),
    h = i.useSelector(r.store, (e) => e.meta.errorSourceMap),
    m = i.useSelector(r.store, (e) => e.meta.isValidating),
    g = i.useSelector(r.store, (e) => e.meta.isSubmitting),
    y = i.useSelector(r.store, (e) => e.meta.isSubmitted),
    v = i.useSelector(r.store, (e) => e.meta.submissionAttempts),
    b = i.useSelector(r.store, (e) => e.meta.isSubmitSuccessful),
    S = i.useSelector(r.store, (e) => e.meta.canSubmit),
    _ = i.useSelector(r.store, (e) => e.meta.isValid),
    x = i.useSelector(r.store, (e) => e.meta.isFieldsValid),
    w = i.useSelector(r.store, (e) => e.meta.isFieldsValidating),
    E = i.useSelector(r.store, (e) => e.meta.isGroupValid),
    T = o.useMemo(
      () => ({
        ...r,
        handleSubmit: (...e) => r._handleSubmit(...e),
        get state() {
          return {
            ...r.state,
            value: c,
            get meta() {
              return {
                ...r.state.meta,
                isTouched: u,
                isBlurred: d,
                isDirty: p,
                errorMap: f,
                errorSourceMap: h,
                isValidating: m,
                isSubmitting: g,
                isSubmitted: y,
                submissionAttempts: v,
                isSubmitSuccessful: b,
                canSubmit: S,
                isValid: _,
                isFieldsValid: x,
                isFieldsValidating: w,
                isGroupValid: E,
              };
            },
          };
        },
      }),
      [r, c, u, d, p, f, h, m, g, y, v, b, S, _, x, w, E],
    );
  return (
    s.useIsomorphicLayoutEffect(r.mount, [r]),
    s.useIsomorphicLayoutEffect(() => {
      r.update(e);
    }),
    T
  );
}
(t.FormGroup = ({ children: e, ...t }) => {
  const n = l(t),
    i = o.useMemo(() => a.functionalUpdate(e, n), [e, n]);
  return r.jsx(r.Fragment, { children: i });
}),
  (t.useFormGroup = l);
