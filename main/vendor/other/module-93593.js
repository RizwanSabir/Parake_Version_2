// vendor/other/module-93593.js — webpack module 93593
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(20216 /* vendor/other/module-20216 */);
function o(e, t) {
  return t.some((t) => e.includes(t));
}
t.filterKeyValueData = function (e, t, n) {
  if (!1 === t) return {};
  const i =
      null != n
        ? [...r.SENSITIVE_KEY_SNIPPETS, ...n]
        : r.SENSITIVE_KEY_SNIPPETS,
    s = {};
  if (!0 === t) {
    for (const t of Object.keys(e))
      s[t] = o(t.toLowerCase(), i) ? r.FILTERED_VALUE : e[t];
    return s;
  }
  if ("deny" in t) {
    const n = t.deny.map((e) => e.toLowerCase());
    for (const t of Object.keys(e)) {
      const a = t.toLowerCase(),
        c = o(a, i) || n.some((e) => a.includes(e));
      s[t] = c ? r.FILTERED_VALUE : e[t];
    }
    return s;
  }
  const a = t.allow.map((e) => e.toLowerCase());
  for (const t of Object.keys(e)) {
    const n = t.toLowerCase();
    if (o(n, i)) s[t] = r.FILTERED_VALUE;
    else {
      const o = a.some((e) => n.includes(e));
      s[t] = o ? e[t] : r.FILTERED_VALUE;
    }
  }
  return s;
};
