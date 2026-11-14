// app/components/get-session-status.js — webpack module 89411
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.getSessionStatus = function (e) {
  return e.isEndedOrExpired ? "ended" : e.activatedAt ? "live" : "ready";
}),
  (t.SessionStatusIndicator = function (e) {
    const t = (0, o.c)(10),
      { status: n } = e;
    let l;
    t[0] !== n
      ? ((l =
          "live" === n
            ? (0, r.jsxs)("span", {
                className: "relative flex size-2 shrink-0",
                children: [
                  (0, r.jsx)("span", {
                    className:
                      "bg-error absolute inline-flex size-full rounded-full opacity-75 motion-safe:animate-ping",
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "bg-error relative inline-flex size-2 rounded-full",
                  }),
                ],
              })
            : (0, r.jsx)("span", {
                className: (0, i.cn)(
                  "size-2 shrink-0 rounded-full",
                  "ended" === n
                    ? "bg-status-ended"
                    : "bg-primary dark:bg-brand-500",
                ),
              })),
        (t[0] = n),
        (t[1] = l))
      : (l = t[1]);
    const c = "ended" === n ? "text-muted-foreground" : "text-foreground";
    let u;
    t[2] !== c
      ? ((u = (0, i.cn)("font-medium", c)), (t[2] = c), (t[3] = u))
      : (u = t[3]);
    const d = s[n];
    let p, f;
    return (
      t[4] !== u || t[5] !== d
        ? ((p = (0, r.jsx)(a.Typography, {
            variant: "meta",
            className: u,
            children: d,
          })),
          (t[4] = u),
          (t[5] = d),
          (t[6] = p))
        : (p = t[6]),
      t[7] !== l || t[8] !== p
        ? ((f = (0, r.jsxs)("div", {
            className: "flex items-center gap-1.5",
            children: [l, p],
          })),
          (t[7] = l),
          (t[8] = p),
          (t[9] = f))
        : (f = t[9]),
      f
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(34483 /* app/components/typography-variants */),
  s = { ready: "Ready to Start", live: "Live", ended: "Ended" };
