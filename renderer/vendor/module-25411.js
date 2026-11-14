// vendor/module-25411.js — webpack module 25411
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.hasNullItemLabel = function (e) {
    if (!Array.isArray(e)) return null != e && "null" in e;
    const t = e;
    if (s(t)) {
      for (const e of t)
        for (const t of e.items)
          if (t && null == t.value && null != t.label) return !0;
      return !1;
    }
    for (const e of t) if (e && null == e.value && null != e.label) return !0;
    return !1;
  }),
  (t.isGroupedItems = s),
  (t.resolveMultipleLabels = function (e, t, n) {
    return e.reduce(
      (e, r, i) => (
        i > 0 && e.push(", "),
        e.push((0, a.jsx)(o.Fragment, { children: c(r, t, n) }, i)),
        e
      ),
      [],
    );
  }),
  (t.resolveSelectedLabel = c),
  (t.stringifyAsLabel = l),
  (t.stringifyAsValue = function (e, t) {
    return t && null != e
      ? (t(e) ?? "")
      : e && "object" == typeof e && "value" in e && "label" in e
        ? (0, i.serializeValue)(e.value)
        : (0, i.serializeValue)(e);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(75639 /* vendor/module-75639 */),
  a = n(31085 /* vendor/module-31085 */);
function s(e) {
  return (
    null != e &&
    e.length > 0 &&
    "object" == typeof e[0] &&
    null != e[0] &&
    "items" in e[0]
  );
}
function l(e, t) {
  if (t && null != e) return t(e) ?? "";
  if (e && "object" == typeof e) {
    if ("label" in e && null != e.label) return String(e.label);
    if ("value" in e) return String(e.value);
  }
  return (0, i.serializeValue)(e);
}
function c(e, t, n) {
  function r() {
    return l(e, n);
  }
  if (n && null != e) return n(e);
  if (e && "object" == typeof e && "label" in e && null != e.label)
    return e.label;
  if (t && !Array.isArray(t)) return t[e] ?? r();
  if (Array.isArray(t)) {
    const n = t,
      o = s(n) ? n.flatMap((e) => e.items) : n;
    if (null == e || "object" != typeof e) {
      const t = o.find((t) => t.value === e);
      return t && null != t.label ? t.label : r();
    }
    if ("value" in e) {
      const t = o.find((t) => t && t.value === e.value);
      if (t && null != t.label) return t.label;
    }
  }
  return r();
}
