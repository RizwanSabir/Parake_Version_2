// vendor/module-32997.js — webpack module 32997
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(23295 /* vendor/module-23295 */),
  a = "sentry-";
function s(e) {
  if (e && (i.isString(e) || Array.isArray(e)))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          const n = l(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : l(e);
}
function l(e) {
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
function c(e) {
  if (0 !== Object.keys(e).length)
    return Object.entries(e).reduce((e, [t, n], i) => {
      const a = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        s = 0 === i ? a : `${e},${a}`;
      return s.length > 8192
        ? (r.DEBUG_BUILD &&
            o.debug.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : s;
    }, "");
}
(t.MAX_BAGGAGE_STRING_LENGTH = 8192),
  (t.SENTRY_BAGGAGE_KEY_PREFIX = a),
  (t.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/),
  (t.baggageHeaderToDynamicSamplingContext = function (e) {
    const t = s(e);
    if (!t) return;
    const n = Object.entries(t).reduce(
      (e, [t, n]) => (t.startsWith(a) && (e[t.slice(7)] = n), e),
      {},
    );
    return Object.keys(n).length > 0 ? n : void 0;
  }),
  (t.dynamicSamplingContextToSentryBaggageHeader = function (e) {
    if (e)
      return c(
        Object.entries(e).reduce(
          (e, [t, n]) => (n && (e[`${a}${t}`] = n), e),
          {},
        ),
      );
  }),
  (t.mergeBaggageHeaders = function (e, t) {
    if (!e) return t;
    const n = s(e),
      r = s(t);
    if (!r) return e;
    const o = {};
    let i = !1;
    const l = {},
      u = {};
    for (const [e, t] of Object.entries(r))
      e.startsWith(a) ? ((l[e] = t), (i = !0)) : (u[e] = t);
    if (n)
      for (const [e, t] of Object.entries(n))
        (i && e.startsWith(a)) || (o[e] = t);
    i && Object.assign(o, l);
    for (const [e, t] of Object.entries(u)) o[e] ?? (o[e] = t);
    return c(o);
  }),
  (t.objectToBaggageHeader = c),
  (t.parseBaggageHeader = s);
