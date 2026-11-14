// vendor/module-26614.js — webpack module 26614
// params: (e, t, n) = (module, exports, require)
t.MockListeningOrb = function (e) {
  const t = (0, o.c)(6),
    { active: n, theme: s } = e,
    l = !n,
    c = !n && "opacity-50";
  let u, d;
  return (
    t[0] !== c ? ((u = (0, a.cn)(c)), (t[0] = c), (t[1] = u)) : (u = t[1]),
    t[2] !== l || t[3] !== u || t[4] !== s
      ? ((d = (0, r.jsx)(i.ThinkingOrb, {
          state: "composing",
          size: 20,
          theme: s,
          paused: l,
          className: u,
          "aria-hidden": !0,
        })),
        (t[2] = l),
        (t[3] = u),
        (t[4] = s),
        (t[5] = d))
      : (d = t[5]),
    d
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(68800 /* vendor/module-68800 */),
  a = n(29113 /* vendor/module-29113 */);
