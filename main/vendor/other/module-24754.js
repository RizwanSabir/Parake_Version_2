// vendor/other/module-24754.js — webpack module 24754
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function n(e) {
  return (
    !["__proto__", "prototype", "constructor"].includes(e) &&
    (["string", "number", "symbol", "boolean"].includes(typeof e) || null === e)
  );
}
function r(e) {
  if (Array.isArray(e)) return !1;
  const t = typeof e;
  return "object" === t || "function" === t;
}
function o(e, t, n) {
  const o = t[n];
  if (void 0 === o) return;
  const s = e[n];
  null != s && null != o && r(s) && r(o)
    ? (e[n] = i(s, o))
    : Array.isArray(s) && Array.isArray(o)
      ? (e[n] = Array.from(new Set(s.concat(o))))
      : (e[n] = o);
}
function i(e, t) {
  if (e !== t)
    for (const r of Object.getOwnPropertyNames(t)) n(r) && o(e, t, r);
  return e;
}
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.mapToObject = function e(t) {
    const r = {};
    for (const [o, i] of t)
      n(o) && (i instanceof Map ? (r[o] = e(i)) : (r[o] = i));
    return r;
  }),
  (t.isValidKey = n),
  (t.asArray = function (e) {
    return null == e ? [] : Array.isArray(e) ? e : [e];
  }),
  (t.deepAssign = function (e, ...t) {
    for (const n of t) null != n && i(e, n);
    return e;
  }),
  (t.objectToArgs = function (e) {
    const t = Object.entries(e).reduce((e, [t, r]) => {
      if (!n(t) || null == r) return e;
      if (!s.test(t))
        throw new Error(
          `objectToArgs: unsafe flag name rejected: ${JSON.stringify(t)}`,
        );
      if (a.test(r))
        throw new Error(
          `objectToArgs: value for --${t} contains a null byte or newline`,
        );
      return e.concat([`--${t}`, r]);
    }, []);
    return Object.freeze(t);
  });
const s = /^[a-zA-Z][a-zA-Z0-9-]*$/,
  a = /[\0\r\n]/;
