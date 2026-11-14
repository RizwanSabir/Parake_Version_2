// vendor/module-83407.js — webpack module 83407
// params: (e, t, n) = (module, exports, require)
t.RejoinCountdownTooltip = function (e) {
  const t = (0, o.c)(10),
    { msLeft: n, children: l } = e;
  let c, u, d, p, f;
  return (
    t[0] !== l
      ? ((c = (0, r.jsx)(s.TooltipTrigger, { render: l })),
        (t[0] = l),
        (t[1] = c))
      : (c = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = (0, r.jsx)(i.Info, { className: "size-4 shrink-0" })), (t[2] = u))
      : (u = t[2]),
    t[3] !== n
      ? ((d = (0, a.formatCountdown)(n)), (t[3] = n), (t[4] = d))
      : (d = t[4]),
    t[5] !== d
      ? ((p = (0, r.jsxs)(s.TooltipContent, {
          className: "z-20",
          children: [
            u,
            (0, r.jsxs)("span", {
              children: [
                (0, r.jsx)("span", {
                  className: "font-medium tabular-nums",
                  children: d,
                }),
                " ",
                "left to rejoin session",
              ],
            }),
          ],
        })),
        (t[5] = d),
        (t[6] = p))
      : (p = t[6]),
    t[7] !== c || t[8] !== p
      ? ((f = (0, r.jsxs)(s.Tooltip, { children: [c, p] })),
        (t[7] = c),
        (t[8] = p),
        (t[9] = f))
      : (f = t[9]),
    f
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(62852 /* vendor/module-62852 */),
  s = n(58055 /* app/components/tooltip */);
