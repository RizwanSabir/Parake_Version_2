// app/components/instructions-field.js — webpack module 373
// params: (e, t, n) = (module, exports, require)
"use strict";
t.InstructionsField = function (e) {
  const t = (0, o.c)(11),
    { value: n, onChange: c, fill: u } = e;
  let d, p;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((d = (0, r.jsx)(s.Label, { children: "Context" })), (t[0] = d))
    : (d = t[0]),
    t[1] !== c
      ? ((p = (e) => c(e.target.value)), (t[1] = c), (t[2] = p))
      : (p = t[2]);
  const f = u ? "flex min-h-40 flex-1 flex-col" : void 0,
    h = u ? "min-h-0 flex-1 resize-none" : "min-h-60 flex-1 resize-none";
  let m, g;
  return (
    t[3] !== p || t[4] !== f || t[5] !== h || t[6] !== n
      ? ((m = (0, r.jsx)(l.Textarea, {
          placeholder:
            "Add role notes, company details, or answer preferences.",
          value: n,
          onChange: p,
          containerClassName: f,
          className: h,
        })),
        (t[3] = p),
        (t[4] = f),
        (t[5] = h),
        (t[6] = n),
        (t[7] = m))
      : (m = t[7]),
    t[8] !== m || t[9] !== n
      ? ((g = (0, r.jsx)(a.FieldWithCount, {
          className: "min-h-0 flex-1",
          label: d,
          value: n,
          limit: i.limits.extraContext,
          children: m,
        })),
        (t[8] = m),
        (t[9] = n),
        (t[10] = g))
      : (g = t[10]),
    g
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(45482 /* vendor/module-45482 */),
  a = n(7696 /* app/components/field-with-count */),
  s = n(47856 /* app/components/label */),
  l = n(6826 /* app/components/textarea */);
