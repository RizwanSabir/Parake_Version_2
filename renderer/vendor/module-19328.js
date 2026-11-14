// vendor/module-19328.js — webpack module 19328
// params: (e, t, n) = (module, exports, require)
const r = n(94680 /* vendor/module-94680 */),
  o = (e) => /^\d+$/.test(e);
function i(e, t, n) {
  if (t.length > 1) {
    const a = [...t],
      s = a.shift(),
      l = a[0];
    return (
      Object.hasOwn(e, s)
        ? Array.isArray(e[s]) &&
          !o(l) &&
          (e[s] = Object.fromEntries(Object.entries(e[s])))
        : (e[s] = o(l) ? [] : r.emptyObject()),
      void i(e[s], a, n)
    );
  }
  const a = t[0];
  void 0 === e[a]
    ? (e[a] = n)
    : Array.isArray(e[a])
      ? e[a].push(n)
      : (e[a] = [e[a], n]);
}
function a(e) {
  const t = r.emptyObject();
  for (const [n, r] of e.entries())
    i(t, n.split(/[\.\[\]]/).filter(Boolean), r);
  return t;
}
Object.defineProperty(t, "formDataToObject", {
  enumerable: !0,
  get: function () {
    return a;
  },
});
