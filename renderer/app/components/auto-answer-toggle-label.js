// app/components/auto-answer-toggle-label.js — webpack module 12829
// params: (e, t, n) = (module, exports, require)
t.AutoAnswerToggleLabel = function (e) {
  const t = (0, o.c)(9),
    { status: n } = e,
    u = "generating" === n || "checking" === n;
  let d, p;
  t[0] !== u || t[1] !== n
    ? ((d = (0, r.jsx)("span", {
        className: "flex size-3.5 shrink-0 items-center justify-center",
        children: u
          ? (0, r.jsx)(s.Spinner, { className: "size-3.5" })
          : (0, r.jsx)("span", {
              className: (0, a.cn)(
                "relative inline-block size-1.5 rounded-full bg-current",
                "waiting" === n &&
                  "animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] before:absolute before:inset-0 before:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] before:rounded-full before:bg-current before:opacity-50",
                "question" === n && "text-brand-600 dark:text-brand-400",
                "off" === n && "opacity-40",
              ),
              "aria-hidden": !0,
            }),
      })),
      (t[0] = u),
      (t[1] = n),
      (t[2] = d))
    : (d = t[2]),
    t[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = l.map(c)), (t[3] = p))
      : (p = t[3]);
  const f = i.AUTO_ANSWER_STATUS_LABEL[n];
  let h, m;
  return (
    t[4] !== f
      ? ((h = (0, r.jsxs)("span", {
          className: "grid",
          children: [
            p,
            (0, r.jsx)("span", {
              className: "col-start-1 row-start-1",
              "aria-live": "polite",
              children: f,
            }),
          ],
        })),
        (t[4] = f),
        (t[5] = h))
      : (h = t[5]),
    t[6] !== d || t[7] !== h
      ? ((m = (0, r.jsxs)("span", {
          className: "flex h-full items-center gap-2 whitespace-nowrap",
          children: [d, h],
        })),
        (t[6] = d),
        (t[7] = h),
        (t[8] = m))
      : (m = t[8]),
    m
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(27005 /* vendor/module-27005 */),
  a = n(29113 /* vendor/module-29113 */),
  s =
    (n(66244 /* app/components/button-variants */),
    n(15201 /* app/components/spinner */)),
  l = [...new Set(Object.values(i.AUTO_ANSWER_STATUS_LABEL))];
function c(e) {
  return (0, r.jsx)(
    "span",
    {
      className: "invisible col-start-1 row-start-1",
      "aria-hidden": !0,
      children: e,
    },
    e,
  );
}
