// app/components/regular-call-details.js — webpack module 86300
// params: (e, t, n) = (module, exports, require)
"use strict";
t.RegularCallDetails = function (e) {
  const t = (0, o.c)(23),
    { form: n, title: u, description: d, disabled: p } = e;
  let f, h, m, g, y, v, b, S, _;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((f = (0, r.jsxs)(l.Label, {
          className: "gap-1",
          children: [
            "Call Title",
            (0, r.jsx)("span", {
              className: "text-muted-foreground text-xs",
              children: "(Optional)",
            }),
          ],
        })),
        (t[0] = f))
      : (f = t[0]),
    t[1] !== n
      ? ((h = (e) => n.setFieldValue("title", e.target.value)),
        (t[1] = n),
        (t[2] = h))
      : (h = t[2]),
    t[3] !== p || t[4] !== h || t[5] !== u
      ? ((m = (0, r.jsx)(s.Input, {
          placeholder: "Enter call title",
          value: u,
          onChange: h,
          disabled: p,
        })),
        (t[3] = p),
        (t[4] = h),
        (t[5] = u),
        (t[6] = m))
      : (m = t[6]),
    t[7] !== m || t[8] !== u
      ? ((g = (0, r.jsx)(a.FieldWithCount, {
          label: f,
          value: u,
          limit: i.limits.sessionTitle,
          children: m,
        })),
        (t[7] = m),
        (t[8] = u),
        (t[9] = g))
      : (g = t[9]),
    t[10] === Symbol.for("react.memo_cache_sentinel")
      ? ((y = (0, r.jsxs)(l.Label, {
          className: "gap-1",
          children: [
            "Description",
            (0, r.jsx)("span", {
              className: "text-muted-foreground text-xs",
              children: "(Optional)",
            }),
          ],
        })),
        (t[10] = y))
      : (y = t[10]),
    t[11] !== n
      ? ((v = (e) => n.setFieldValue("description", e.target.value)),
        (t[11] = n),
        (t[12] = v))
      : (v = t[12]),
    t[13] !== d || t[14] !== p || t[15] !== v
      ? ((b = (0, r.jsx)(c.Textarea, {
          placeholder: "Enter description",
          value: d,
          onChange: v,
          containerClassName: "flex flex-col max-sm:h-21 sm:min-h-25 sm:flex-1",
          className: "min-h-0 flex-1 resize-none",
          disabled: p,
        })),
        (t[13] = d),
        (t[14] = p),
        (t[15] = v),
        (t[16] = b))
      : (b = t[16]),
    t[17] !== d || t[18] !== b
      ? ((S = (0, r.jsx)(a.FieldWithCount, {
          className: "min-h-0 max-sm:flex-none sm:flex-1",
          label: y,
          value: d,
          limit: i.limits.jobDescription,
          children: b,
        })),
        (t[17] = d),
        (t[18] = b),
        (t[19] = S))
      : (S = t[19]),
    t[20] !== g || t[21] !== S
      ? ((_ = (0, r.jsxs)(r.Fragment, { children: [g, S] })),
        (t[20] = g),
        (t[21] = S),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(45482 /* vendor/module-45482 */),
  a = n(7696 /* app/components/field-with-count */),
  s = n(91722 /* app/components/input */),
  l = n(47856 /* app/components/label */),
  c = n(6826 /* app/components/textarea */);
