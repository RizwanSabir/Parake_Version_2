// vendor/module-93593.js — webpack module 93593
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(20216 /* vendor/module-20216 */);
function o(e, t) {
  return t.some((t) => e.includes(t));
}
t.filterKeyValueData = function (e, t, n) {
  if (!1 === t) return {};
  const i =
      null != n
        ? [...r.SENSITIVE_KEY_SNIPPETS, ...n]
        : r.SENSITIVE_KEY_SNIPPETS,
    a = {};
  if (!0 === t) {
    for (const t of Object.keys(e))
      a[t] = o(t.toLowerCase(), i) ? r.FILTERED_VALUE : e[t];
    return a;
  }
  if ("deny" in t) {
    const n = t.deny.map((e) => e.toLowerCase());
    for (const t of Object.keys(e)) {
      const s = t.toLowerCase(),
        l = o(s, i) || n.some((e) => s.includes(e));
      a[t] = l ? r.FILTERED_VALUE : e[t];
    }
    return a;
  }
  const s = t.allow.map((e) => e.toLowerCase());
  for (const t of Object.keys(e)) {
    const n = t.toLowerCase();
    if (o(n, i)) a[t] = r.FILTERED_VALUE;
    else {
      const o = s.some((e) => n.includes(e));
      a[t] = o ? e[t] : r.FILTERED_VALUE;
    }
  }
  return a;
};
