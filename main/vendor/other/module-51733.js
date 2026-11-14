// vendor/other/module-51733.js — webpack module 51733
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(82579 /* vendor/other/module-82579 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(23295 /* vendor/other/module-23295 */),
  a = n(8888 /* vendor/other/module-8888 */),
  c = n(6990 /* vendor/other/module-6990 */),
  u = n(75122 /* vendor/other/module-75122 */),
  l = o.defineIntegration((e = {}) => {
    const { depth: t = 3, captureErrorCause: n = !0 } = e;
    return {
      name: "ExtraErrorData",
      processEvent(e, r, o) {
        const { maxValueLength: i } = o.getOptions();
        return (function (e, t = {}, n, r, o) {
          if (!t.originalException || !s.isError(t.originalException)) return e;
          const i =
              t.originalException.name || t.originalException.constructor.name,
            u = d(t.originalException, r, o);
          if (u) {
            const t = { ...e.contexts },
              r = a.normalize(u, n);
            return (
              s.isPlainObject(r) && (c.setSkipNormalizationHint(r), (t[i] = r)),
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
        s.isError(i) || "string" == typeof i
          ? n
            ? u.truncate(`${i}`, n)
            : `${i}`
          : i;
    }
    if (t && void 0 !== e.cause)
      if (s.isError(e.cause)) {
        const t = e.cause.name || e.cause.constructor.name;
        o.cause = { [t]: d(e.cause, !1, n) };
      } else o.cause = e.cause;
    if ("function" == typeof e.toJSON) {
      const t = e.toJSON();
      for (const e of Object.keys(t)) {
        const n = t[e];
        o[e] = s.isError(n) ? n.toString() : n;
      }
    }
    return o;
  } catch (e) {
    r.DEBUG_BUILD &&
      i.debug.error("Unable to extract extra data from the Error object:", e);
  }
  return null;
}
t.extraErrorDataIntegration = l;
