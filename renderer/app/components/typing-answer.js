// app/components/typing-answer.js — webpack module 14953
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TypingAnswer = function (e) {
  const t = (0, o.c)(17),
    { fields: n, active: l } = e,
    [d, p] = (0, i.useState)(0),
    f = (function (e) {
      return u(e).reduce((e, [, t]) => e + c(t).length, 0);
    })(n);
  let h, m, g, y, v, b;
  return (
    t[0] !== l || t[1] !== f
      ? ((h = () => {
          if ((p(0), !l || 0 === f)) return;
          const e = Math.ceil(40),
            t = Math.max(1, Math.ceil(f / e));
          let n = 0;
          const r = setInterval(() => {
            (n += t), p(n), n >= f && clearInterval(r);
          }, 40);
          return () => clearInterval(r);
        }),
        (t[0] = l),
        (t[1] = f),
        (t[2] = h))
      : (h = t[2]),
    t[3] !== l || t[4] !== n || t[5] !== f
      ? ((m = [n, l, f]), (t[3] = l), (t[4] = n), (t[5] = f), (t[6] = m))
      : (m = t[6]),
    (0, i.useEffect)(h, m),
    t[7] !== n
      ? ((g = (0, r.jsx)("div", {
          className: "invisible col-start-1 row-start-1",
          "aria-hidden": !0,
          children: (0, r.jsx)(a.LiveAnswer, {
            fields: n,
            actions: !1,
          }),
        })),
        (t[7] = n),
        (t[8] = g))
      : (g = t[8]),
    t[9] !== n || t[10] !== d
      ? ((y = (function (e, t) {
          const n = {};
          let r = t;
          for (const [t, o] of u(e)) {
            if (r <= 0) return n;
            const i = c(o),
              a = i.slice(0, r).join("").replace(s, "");
            (r -= i.length),
              "code" === t
                ? e.code && (n.code = { ...e.code, source: a })
                : ("question" === t || "answer" === t || o) && (n[t] = a);
          }
          return r >= 0 && (n.diagram = e.diagram), n;
        })(n, d)),
        (t[9] = n),
        (t[10] = d),
        (t[11] = y))
      : (y = t[11]),
    t[12] !== y
      ? ((v = (0, r.jsx)("div", {
          className: "col-start-1 row-start-1",
          children: (0, r.jsx)(a.LiveAnswer, {
            fields: y,
            actions: !1,
          }),
        })),
        (t[12] = y),
        (t[13] = v))
      : (v = t[13]),
    t[14] !== g || t[15] !== v
      ? ((b = (0, r.jsxs)("div", {
          className: "grid",
          children: [g, v],
        })),
        (t[14] = g),
        (t[15] = v),
        (t[16] = b))
      : (b = t[16]),
    b
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(36564 /* app/components/live-answer */),
  s = /\n[-*+][ \t]*$/,
  l = /\S+\s*/g,
  c = (e) => e.match(l) ?? [];
function u(e) {
  return [
    ["question", e.question],
    ["answer", e.answer],
    ["keySteps", e.keySteps ?? ""],
    ["code", e.code?.source ?? ""],
    ["explanation", e.explanation ?? ""],
  ];
}
