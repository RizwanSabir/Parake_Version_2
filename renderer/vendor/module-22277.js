// vendor/module-22277.js — webpack module 22277
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AnswerMeta = function (e) {
  const t = (0, o.c)(8),
    { logo: n, triggerKind: i, createdAt: l } = e;
  let c;
  if (t[0] !== l || t[1] !== n || t[2] !== i) {
    const e = [];
    if ((n && e.push(n), i)) {
      let n;
      t[4] !== i
        ? ((n = (0, r.jsx)(a.TriggerKindLabel, { kind: i })),
          (t[4] = i),
          (t[5] = n))
        : (n = t[5]),
        e.push(n);
    }
    if (l) {
      let n;
      t[6] !== l
        ? ((n = new Date(l).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })),
          (t[6] = l),
          (t[7] = n))
        : (n = t[7]),
        e.push(n);
    }
    (c = e.map(s)), (t[0] = l), (t[1] = n), (t[2] = i), (t[3] = c);
  } else c = t[3];
  return c;
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(86378 /* vendor/module-86378 */);
function s(e, t) {
  return (0, r.jsxs)(
    i.Fragment,
    {
      children: [
        t > 0 && (0, r.jsx)("span", { className: "mx-1", children: "·" }),
        e,
      ],
    },
    t,
  );
}
