// vendor/module-45305.js — webpack module 45305
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { d: () => o });
const r = {};
function o(e, t) {
  const n = t || r;
  return i(
    e,
    "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
    "boolean" != typeof n.includeHtml || n.includeHtml,
  );
}
function i(e, t, n) {
  if (
    (function (e) {
      return Boolean(e && "object" == typeof e);
    })(e)
  ) {
    if ("value" in e) return "html" !== e.type || n ? e.value : "";
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return a(e.children, t, n);
  }
  return Array.isArray(e) ? a(e, t, n) : "";
}
function a(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) r[o] = i(e[o], t, n);
  return r.join("");
}
