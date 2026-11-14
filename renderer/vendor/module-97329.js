// vendor/module-97329.js — webpack module 97329
// params: (e, t, n) = (module, exports, require)
(t.AnswerProvider = function (e) {
  const t = (0, o.c)(8),
    { copy: n, touch: s, glass: l, copyable: c, children: u } = e,
    d = (0, i.useContext)(a),
    p = n ?? d.copy,
    f = s ?? d.touch,
    h = l ?? d.glass,
    m = c ?? d.copyable;
  let g, y;
  return (
    t[0] !== p || t[1] !== f || t[2] !== h || t[3] !== m
      ? ((g = { copy: p, touch: f, glass: h, copyable: m }),
        (t[0] = p),
        (t[1] = f),
        (t[2] = h),
        (t[3] = m),
        (t[4] = g))
      : (g = t[4]),
    t[5] !== u || t[6] !== g
      ? ((y = (0, r.jsx)(a.Provider, { value: g, children: u })),
        (t[5] = u),
        (t[6] = g),
        (t[7] = y))
      : (y = t[7]),
    y
  );
}),
  (t.useAnswerEnvironment = function () {
    return (0, i.useContext)(a);
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = (0, i.createContext)({
    copy: async function (e) {
      try {
        await navigator.clipboard.writeText(e);
      } catch (e) {
        throw e;
      }
    },
    touch: !1,
    glass: !1,
    copyable: !0,
  });
