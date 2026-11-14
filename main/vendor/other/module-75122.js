// vendor/other/module-75122.js — webpack module 75122
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/other/module-23295 */),
  o = n(8888 /* vendor/other/module-8888 */);
function i(e, t, n = !1) {
  return (
    !!r.isString(e) &&
    (r.isRegExp(t)
      ? t.test(e)
      : r.isString(t)
        ? n
          ? e === t
          : e.includes(t)
        : "function" == typeof t && t(e))
  );
}
(t.isMatchingPattern = i),
  (t.safeJoin = function (e, t) {
    if (!Array.isArray(e)) return "";
    const n = [];
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      r.isPrimitive(i)
        ? n.push(String(i))
        : i instanceof Error
          ? n.push(i.message ? `${i.name}: ${i.message}` : i.name)
          : n.push(o.stringifyValue(void 0, i));
    }
    return n.join(t);
  }),
  (t.snipLine = function (e, t) {
    let n = e;
    const r = n.length;
    if (r <= 150) return n;
    t > r && (t = r);
    let o = Math.max(t - 60, 0);
    o < 5 && (o = 0);
    let i = Math.min(o + 140, r);
    return (
      i > r - 5 && (i = r),
      i === r && (o = Math.max(i - 140, 0)),
      (n = n.slice(o, i)),
      o > 0 && (n = `'{snip} ${n}`),
      i < r && (n += " {snip}"),
      n
    );
  }),
  (t.stringMatchesSomePattern = function (e, t = [], n = !1) {
    for (const r of t) if (i(e, r, n)) return !0;
    return !1;
  }),
  (t.stringify = function (e, t = "[unserializable]") {
    if ("string" == typeof e) return e;
    try {
      return JSON.stringify(e);
    } catch {
      return "function" == typeof t ? t(e) : t;
    }
  }),
  (t.truncate = function (e, t = 0) {
    return "string" != typeof e || 0 === t || e.length <= t
      ? e
      : `${e.slice(0, t)}...`;
  });
