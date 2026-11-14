// vendor/other/module-32997.js — webpack module 32997
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(23295 /* vendor/other/module-23295 */),
  s = "sentry-";
function a(e) {
  if (e && (i.isString(e) || Array.isArray(e)))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          const n = c(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : c(e);
}
function c(e) {
  return e
    .split(",")
    .map((e) => {
      const t = e.indexOf("=");
      return -1 === t
        ? []
        : [e.slice(0, t), e.slice(t + 1)].map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch {
              return;
            }
          });
    })
    .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
function u(e) {
  if (0 !== Object.keys(e).length)
    return Object.entries(e).reduce((e, [t, n], i) => {
      const s = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        a = 0 === i ? s : `${e},${s}`;
      return a.length > 8192
        ? (r.DEBUG_BUILD &&
            o.debug.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : a;
    }, "");
}
(t.MAX_BAGGAGE_STRING_LENGTH = 8192),
  (t.SENTRY_BAGGAGE_KEY_PREFIX = s),
  (t.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/),
  (t.baggageHeaderToDynamicSamplingContext = function (e) {
    const t = a(e);
    if (!t) return;
    const n = Object.entries(t).reduce(
      (e, [t, n]) => (t.startsWith(s) && (e[t.slice(7)] = n), e),
      {},
    );
    return Object.keys(n).length > 0 ? n : void 0;
  }),
  (t.dynamicSamplingContextToSentryBaggageHeader = function (e) {
    if (e)
      return u(
        Object.entries(e).reduce(
          (e, [t, n]) => (n && (e[`${s}${t}`] = n), e),
          {},
        ),
      );
  }),
  (t.mergeBaggageHeaders = function (e, t) {
    if (!e) return t;
    const n = a(e),
      r = a(t);
    if (!r) return e;
    const o = {};
    let i = !1;
    const c = {},
      l = {};
    for (const [e, t] of Object.entries(r))
      e.startsWith(s) ? ((c[e] = t), (i = !0)) : (l[e] = t);
    if (n)
      for (const [e, t] of Object.entries(n))
        (i && e.startsWith(s)) || (o[e] = t);
    i && Object.assign(o, c);
    for (const [e, t] of Object.entries(l)) o[e] ?? (o[e] = t);
    return u(o);
  }),
  (t.objectToBaggageHeader = u),
  (t.parseBaggageHeader = a);
