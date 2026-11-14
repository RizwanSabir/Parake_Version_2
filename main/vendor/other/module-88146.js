// vendor/other/module-88146.js — webpack module 88146
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(18433 /* vendor/other/module-18433 */),
  o = n(20216 /* vendor/other/module-20216 */),
  i = n(93593 /* vendor/other/module-93593 */);
t.filterCookies = function (e, t) {
  if (!1 === t) return {};
  try {
    const n = r.parseCookie(e);
    return 0 === Object.keys(n).length
      ? {}
      : i.filterKeyValueData(n, t, o.SENSITIVE_COOKIE_NAME_SNIPPETS);
  } catch {
    return o.FILTERED_VALUE;
  }
};
