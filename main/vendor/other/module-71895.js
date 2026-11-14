// vendor/other/module-71895.js — webpack module 71895
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { mS: () => l, $G: () => u, kv: () => d });
const r = "1.9.1",
  o = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
  i = (function (e) {
    const t = new Set([e]),
      n = new Set(),
      r = e.match(o);
    if (!r) return () => !1;
    const i = +r[1],
      s = +r[2],
      a = +r[3];
    if (null != r[4])
      return function (t) {
        return t === e;
      };
    function c(e) {
      return n.add(e), !1;
    }
    function u(e) {
      return t.add(e), !0;
    }
    return function (e) {
      if (t.has(e)) return !0;
      if (n.has(e)) return !1;
      const r = e.match(o);
      if (!r) return c(e);
      const l = +r[1],
        d = +r[2],
        p = +r[3];
      return null != r[4] || i !== l
        ? c(e)
        : 0 === i
          ? s === d && a <= p
            ? u(e)
            : c(e)
          : s <= d
            ? u(e)
            : c(e);
    };
  })(r),
  s = r.split(".")[0],
  a = Symbol.for(`opentelemetry.js.api.${s}`),
  c =
    "object" == typeof globalThis
      ? globalThis
      : "object" == typeof self
        ? self
        : "object" == typeof window
          ? window
          : "object" == typeof global
            ? global
            : {};
function u(e, t, n, o = !1) {
  var i;
  const s = (c[a] = null !== (i = c[a]) && void 0 !== i ? i : { version: r });
  if (!o && s[e]) {
    const t = new Error(
      `@opentelemetry/api: Attempted duplicate registration of API: ${e}`,
    );
    return n.error(t.stack || t.message), !1;
  }
  if (s.version !== r) {
    const t = new Error(
      `@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${r}`,
    );
    return n.error(t.stack || t.message), !1;
  }
  return (
    (s[e] = t),
    n.debug(`@opentelemetry/api: Registered a global for ${e} v${r}.`),
    !0
  );
}
function l(e) {
  var t, n;
  const r = null === (t = c[a]) || void 0 === t ? void 0 : t.version;
  if (r && i(r)) return null === (n = c[a]) || void 0 === n ? void 0 : n[e];
}
function d(e, t) {
  t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${r}.`);
  const n = c[a];
  n && delete n[e];
}
