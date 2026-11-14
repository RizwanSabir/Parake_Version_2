// app/components/style-option-cards.js — webpack module 24107
// params: (e, t, n) = (module, exports, require)
"use strict";
t.StyleOptionCards = function (e) {
  const t = (0, o.c)(15),
    { options: n, value: c, onChange: u, ariaLabel: d, surface: p } = e,
    f = void 0 === p ? "dialog" : p,
    h = (0, i.useId)(),
    m = "sheet" === f,
    g = c ?? null;
  let y, v, b;
  if (
    (t[0] !== u || t[1] !== n
      ? ((y = (e) => {
          const t = n.findIndex((t) => t.value === e);
          -1 !== t && u(n[t].value, t);
        }),
        (t[0] = u),
        (t[1] = n),
        (t[2] = y))
      : (y = t[2]),
    t[3] !== h || t[4] !== m || t[5] !== n)
  ) {
    let e;
    t[7] !== h || t[8] !== m
      ? ((e = (e) => {
          const t = `${h}-${e.value}`;
          return (0, r.jsx)(
            s.FieldLabel,
            {
              htmlFor: t,
              className: (0, a.cn)(
                m &&
                  "[&>[data-slot=field]]:py-3 [&>[data-slot=field]]:pr-3 [&>[data-slot=field]]:pl-4",
              ),
              children: (0, r.jsxs)(s.Field, {
                orientation: "horizontal",
                className: (0, a.cn)(m && "flex-row-reverse"),
                children: [
                  (0, r.jsx)("div", {
                    className: "flex items-center self-center",
                    children: (0, r.jsx)(l.RadioGroupItem, {
                      variant: "brand",
                      id: t,
                      value: e.value,
                    }),
                  }),
                  (0, r.jsxs)(s.FieldContent, {
                    children: [
                      (0, r.jsx)(s.FieldTitle, { children: e.label }),
                      (0, r.jsx)(s.FieldDescription, {
                        children: e.description,
                      }),
                    ],
                  }),
                ],
              }),
            },
            e.value,
          );
        }),
        (t[7] = h),
        (t[8] = m),
        (t[9] = e))
      : (e = t[9]),
      (v = n.map(e)),
      (t[3] = h),
      (t[4] = m),
      (t[5] = n),
      (t[6] = v);
  } else v = t[6];
  return (
    t[10] !== d || t[11] !== g || t[12] !== y || t[13] !== v
      ? ((b = (0, r.jsx)(l.RadioGroup, {
          "aria-label": d,
          value: g,
          onValueChange: y,
          className: "gap-2",
          children: v,
        })),
        (t[10] = d),
        (t[11] = g),
        (t[12] = y),
        (t[13] = v),
        (t[14] = b))
      : (b = t[14]),
    b
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(98134 /* app/components/field */),
  l = n(8237 /* app/components/radio-group */);
