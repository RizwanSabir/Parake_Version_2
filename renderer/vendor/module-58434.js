// vendor/module-58434.js — webpack module 58434
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCallSessionWizardForm = function (e) {
  const t = (0, r.c)(11),
    { defaultValues: n, onSubmit: a, onNotice: s, mock: l } = e,
    c = (0, o.useRef)(null);
  let u, d, p;
  t[0] !== a
    ? ((u = (e) => {
        const { value: t } = e;
        return a(t);
      }),
      (t[0] = a),
      (t[1] = u))
    : (u = t[1]),
    t[2] !== s
      ? ((d = (e) => {
          c.current?.goToStep(0), s({ type: "error", message: e });
        }),
        (t[2] = s),
        (t[3] = d))
      : (d = t[3]),
    t[4] !== n || t[5] !== l || t[6] !== u || t[7] !== d
      ? ((p = {
          defaultValues: n,
          onSubmit: u,
          mock: l,
          onInvalidSubmit: d,
        }),
        (t[4] = n),
        (t[5] = l),
        (t[6] = u),
        (t[7] = d),
        (t[8] = p))
      : (p = t[8]);
  const f = (0, i.useCallSessionForm)(p);
  let h;
  return (
    t[9] !== f
      ? ((h = { form: f, wizardRef: c }), (t[9] = f), (t[10] = h))
      : (h = t[10]),
    h
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(82417 /* vendor/module-82417 */);
