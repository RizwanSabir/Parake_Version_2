// vendor/module-51733.js — webpack module 51733
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(23295 /* vendor/module-23295 */),
  s = n(8888 /* vendor/module-8888 */),
  l = n(6990 /* vendor/module-6990 */),
  c = n(75122 /* vendor/module-75122 */),
  u = o.defineIntegration((e = {}) => {
    const { depth: t = 3, captureErrorCause: n = !0 } = e;
    return {
      name: "ExtraErrorData",
      processEvent(e, r, o) {
        const { maxValueLength: i } = o.getOptions();
        return (function (e, t = {}, n, r, o) {
          if (!t.originalException || !a.isError(t.originalException)) return e;
          const i =
              t.originalException.name || t.originalException.constructor.name,
            c = d(t.originalException, r, o);
          if (c) {
            const t = { ...e.contexts },
              r = s.normalize(c, n);
            return (
              a.isPlainObject(r) && (l.setSkipNormalizationHint(r), (t[i] = r)),
              { ...e, contexts: t }
            );
          }
          return e;
        })(e, r, t, n, i);
      },
    };
  });
function d(e, t, n) {
  try {
    const r = [
        "name",
        "message",
        "stack",
        "line",
        "column",
        "fileName",
        "lineNumber",
        "columnNumber",
        "toJSON",
      ],
      o = {};
    for (const t of Object.keys(e)) {
      if (-1 !== r.indexOf(t)) continue;
      const i = e[t];
      o[t] =
        a.isError(i) || "string" == typeof i
          ? n
            ? c.truncate(`${i}`, n)
            : `${i}`
          : i;
    }
    if (t && void 0 !== e.cause)
      if (a.isError(e.cause)) {
        const t = e.cause.name || e.cause.constructor.name;
        o.cause = { [t]: d(e.cause, !1, n) };
      } else o.cause = e.cause;
    if ("function" == typeof e.toJSON) {
      const t = e.toJSON();
      for (const e of Object.keys(t)) {
        const n = t[e];
        o[e] = a.isError(n) ? n.toString() : n;
      }
    }
    return o;
  } catch (e) {
    r.DEBUG_BUILD &&
      i.debug.error("Unable to extract extra data from the Error object:", e);
  }
  return null;
}
t.extraErrorDataIntegration = u;
