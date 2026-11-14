// vendor/module-62816.js — webpack module 62816
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  return !["__proto__", "constructor", "prototype"].includes(String(e));
}
function r(e, t) {
  if (null == e || "object" != typeof e) return {};
  if (null == t || "object" != typeof t) return e;
  const o = Object.keys(e),
    i = Object.keys(t),
    a = new Set([...o, ...i]);
  for (const o of a) {
    if (!n(o)) continue;
    const i = o,
      a = o;
    if (!Object.hasOwn(t, a)) continue;
    const s = t[a],
      l = e[i];
    Array.isArray(l) && Array.isArray(s)
      ? Object.defineProperty(e, o, {
          value: [...s],
          enumerable: !0,
          writable: !0,
          configurable: !0,
        })
      : "object" != typeof l ||
          null === l ||
          "object" != typeof s ||
          null === s ||
          Array.isArray(l) ||
          Array.isArray(s)
        ? Object.defineProperty(e, o, {
            value: s,
            enumerable: !0,
            writable: !0,
            configurable: !0,
          })
        : r(l, s);
  }
  return e;
}
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.mergeForm = function (e, t) {
    return r(e.state, t), e;
  }),
  (t.mutateMergeDeep = r);
