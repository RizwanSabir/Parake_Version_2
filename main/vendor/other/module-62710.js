// vendor/other/module-62710.js — webpack module 62710
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(39023 /* external/util */);
function o(e = {}) {
  const t = new WeakSet();
  return function (n, r) {
    if ("object" == typeof r && null !== r) {
      if (t.has(r)) return;
      t.add(r);
    }
    return i(0, r, e);
  };
}
function i(e, t, n = {}) {
  const r = !1 !== n?.serializeMapAndSet;
  return t instanceof Error
    ? t.stack
    : t
      ? "function" == typeof t
        ? `[function] ${t.toString()}`
        : t instanceof Date
          ? t.toISOString()
          : r && t instanceof Map && Object.fromEntries
            ? Object.fromEntries(t)
            : r && t instanceof Set && Array.from
              ? Array.from(t)
              : t
      : t;
}
e.exports = {
  serialize: i,
  maxDepth({ data: t, transport: n, depth: r = n?.depth ?? 6 }) {
    if (!t) return t;
    if (r < 1)
      return Array.isArray(t)
        ? "[array]"
        : "object" == typeof t && t
          ? "[object]"
          : t;
    if (Array.isArray(t))
      return t.map((t) => e.exports.maxDepth({ data: t, depth: r - 1 }));
    if ("object" != typeof t) return t;
    if (t && "function" == typeof t.toISOString) return t;
    if (null === t) return null;
    if (t instanceof Error) return t;
    const o = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        (o[n] = e.exports.maxDepth({ data: t[n], depth: r - 1 }));
    return o;
  },
  toJSON: ({ data: e }) => JSON.parse(JSON.stringify(e, o())),
  toString({ data: e, transport: t }) {
    const n = t?.inspectOptions || {},
      i = e.map((e) => {
        if (void 0 !== e)
          try {
            const t = JSON.stringify(e, o(), "  ");
            return void 0 === t ? void 0 : JSON.parse(t);
          } catch (t) {
            return e;
          }
      });
    return r.formatWithOptions(n, ...i);
  },
};
