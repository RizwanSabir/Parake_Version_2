// vendor/module-34766.js — webpack module 34766
// params: (e, t, n) = (module, exports, require)
t.ListBody = function (e) {
  const t = (0, o.c)(6),
    {
      state: n,
      loading: a,
      error: s,
      empty: l,
      noResults: c,
      pagination: u,
      className: d,
      children: p,
    } = e;
  if ("loading" === n) return a;
  if ("error" === n) return s;
  if ("empty" === n) return l;
  if ("no-results" === n) return c;
  let f, h;
  return (
    t[0] !== u
      ? ((f = u && (0, r.jsx)(i.InfiniteScrollTrigger, { ...u })),
        (t[0] = u),
        (t[1] = f))
      : (f = t[1]),
    t[2] !== p || t[3] !== d || t[4] !== f
      ? ((h = (0, r.jsxs)("div", { className: d, children: [p, f] })),
        (t[2] = p),
        (t[3] = d),
        (t[4] = f),
        (t[5] = h))
      : (h = t[5]),
    h
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(61685 /* app/components/infinite-scroll-trigger */);
