// vendor/module-27887.js — webpack module 27887
// params: (e, t, n) = (module, exports, require)
"use strict";
t.extractReactNodeText = i;
const r = n(14041 /* vendor/module-14041 */);
function o(e) {
  if (Array.isArray(e)) {
    for (const t of e) {
      const e = o(t);
      if (null !== e) return e;
    }
    return null;
  }
  return (0, r.isValidElement)(e)
    ? "annotation" === e.type
      ? i(e.props.children)
      : o(e.props.children)
    : null;
}
function i(e) {
  if (null == e) return "";
  if ("string" == typeof e || "number" == typeof e) return String(e);
  if (Array.isArray(e)) return e.map(i).join("");
  if ((0, r.isValidElement)(e)) {
    const t = "string" == typeof e.props.className ? e.props.className : "";
    if (/(^|\s)katex(\s|$)/.test(t)) {
      const t = o(e.props.children);
      if (null !== t) return `$${t}$`;
    }
    return i(e.props.children);
  }
  return "";
}
