// app/components/question-detection-indicator.js — webpack module 73458
// params: (e, t, n) = (module, exports, require)
"use strict";
t.QuestionDetectionIndicator = function (e) {
  const t = (0, o.c)(14),
    {
      state: n,
      leadingSeparator: l,
      className: c,
      questionColorClassName: u,
      announce: d,
    } = e,
    p = void 0 === l || l,
    f = void 0 === u ? "text-emerald-500" : u,
    h = void 0 !== d && d,
    m = "question" === n;
  let g;
  t[0] !== c
    ? ((g = (0, i.cn)("inline-flex items-center gap-1", c)),
      (t[0] = c),
      (t[1] = g))
    : (g = t[1]);
  const y = h ? "status" : void 0,
    v = h ? "polite" : void 0;
  let b, S, _;
  return (
    t[2] !== p
      ? ((b = p && (0, r.jsx)("span", { "aria-hidden": !0, children: "·" })),
        (t[2] = p),
        (t[3] = b))
      : (b = t[3]),
    t[4] !== m || t[5] !== f || t[6] !== n
      ? ((S =
          "detecting" === n
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(a.Spinner, {
                    className: "h-3.5 w-3.5 shrink-0",
                  }),
                  (0, r.jsx)("span", {
                    className: "sr-only",
                    children: "Checking for question",
                  }),
                ],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("span", {
                    className: (0, i.cn)("error" === n && "text-error"),
                    children: s[n],
                  }),
                  m &&
                    (0, r.jsx)("span", {
                      "aria-hidden": !0,
                      className: (0, i.cn)(
                        "inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current",
                        f,
                      ),
                    }),
                ],
              })),
        (t[4] = m),
        (t[5] = f),
        (t[6] = n),
        (t[7] = S))
      : (S = t[7]),
    t[8] !== g || t[9] !== y || t[10] !== v || t[11] !== b || t[12] !== S
      ? ((_ = (0, r.jsxs)("span", {
          className: g,
          role: y,
          "aria-live": v,
          children: [b, S],
        })),
        (t[8] = g),
        (t[9] = y),
        (t[10] = v),
        (t[11] = b),
        (t[12] = S),
        (t[13] = _))
      : (_ = t[13]),
    _
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(15201 /* app/components/spinner */),
  s = {
    question: "Question detected",
    "no-question": "No question",
    error: "Detection failed",
  };
