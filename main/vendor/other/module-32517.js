// vendor/other/module-32517.js — webpack module 32517
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = ["get", "set", "setex"],
  r = ["get", "mget"],
  o = ["set", "setex"],
  i = ["del", "unlink"];
function s(e, t) {
  return e.includes(t.toLowerCase());
}
function a(e) {
  return s(r, e)
    ? "cache.get"
    : s(o, e)
      ? "cache.put"
      : s(i, e)
        ? "cache.remove"
        : void 0;
}
function c(e, t) {
  return t.some((t) => e.startsWith(t));
}
function u(e) {
  const t = [],
    n = (e) => {
      e.forEach((e) => {
        Array.isArray(e) ? n(e) : t.push(e);
      });
    };
  return n(e), t;
}
(t.GET_COMMANDS = r),
  (t.REMOVE_COMMANDS = i),
  (t.SET_COMMANDS = o),
  (t.calculateCacheItemSize = function (e) {
    const t = (e) => {
      try {
        return Buffer.isBuffer(e)
          ? e.byteLength
          : "string" == typeof e
            ? e.length
            : "number" == typeof e
              ? e.toString().length
              : null == e
                ? 0
                : JSON.stringify(e).length;
      } catch {
        return;
      }
    };
    return Array.isArray(e)
      ? e.reduce((e, n) => {
          const r = t(n);
          return "number" == typeof r ? (void 0 !== e ? e + r : r) : e;
        }, 0)
      : t(e);
  }),
  (t.getCacheKeySafely = function (e, t) {
    try {
      if (0 === t.length) return;
      const r = (e) =>
          "string" == typeof e || "number" == typeof e || Buffer.isBuffer(e)
            ? [e.toString()]
            : Array.isArray(e)
              ? u(e.map((e) => r(e)))
              : ["<unknown>"],
        o = t[0];
      return s(n, e) && null != o ? r(o) : u(t.map((e) => r(e)));
    } catch {
      return;
    }
  }),
  (t.getCacheOperation = a),
  (t.isInCommands = s),
  (t.shouldConsiderForCache = function (e, t, n) {
    if (!a(e)) return !1;
    for (const e of t) if (c(e, n)) return !0;
    return !1;
  });
