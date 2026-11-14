// vendor/module-40566.js — webpack module 40566
// params: (e, t) = (module, exports, require)
function n(e) {
  return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
}
t.shallow = function (e, t) {
  if (Object.is(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [n, r] of e) if (!t.has(n) || !Object.is(r, t.get(n))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  }
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  const r = n(e);
  if (r.length !== n(t).length) return !1;
  for (let n = 0; n < r.length; n++)
    if (
      !Object.prototype.hasOwnProperty.call(t, r[n]) ||
      !Object.is(e[r[n]], t[r[n]])
    )
      return !1;
  return !0;
};
