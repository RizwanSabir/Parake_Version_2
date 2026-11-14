// vendor/module-7518.js — webpack module 7518
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31085 /* vendor/module-31085 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(3996 /* vendor/module-3996 */),
  a = n(30358 /* vendor/module-30358 */),
  s = n(91117 /* vendor/module-91117 */);
function l({ lens: e, selector: t = (e) => e, children: n }) {
  const o = i.useSelector(e.store, t);
  return r.jsx(r.Fragment, { children: a.functionalUpdate(n, o) });
}
t.useFieldGroup = function (e) {
  const [t] = o.useState(() => {
    const n = new a.FieldGroupApi(e),
      o = e.form instanceof a.FieldGroupApi ? e.form.form : e.form,
      i = n;
    return (
      (i.AppForm = function (e) {
        return r.jsx(o.AppForm, { ...e });
      }),
      (i.AppField = function (e) {
        return r.jsx(o.AppField, { ...t.getFormFieldOptions(e) });
      }),
      (i.Field = function (e) {
        return r.jsx(o.Field, { ...t.getFormFieldOptions(e) });
      }),
      (i.Subscribe = function (e) {
        return r.jsx(l, {
          lens: t,
          selector: e.selector,
          children: e.children,
        });
      }),
      Object.assign(i, { ...e.formComponents })
    );
  });
  return s.useIsomorphicLayoutEffect(t.mount, [t]), t;
};
