// vendor/other/module-19257.js — webpack module 19257
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(6037 /* vendor/other/module-6037 */);
function i(e) {
  return (
    ("object" == typeof e &&
      e &&
      "function" == typeof Object.getOwnPropertyDescriptor(e, "then")?.value) ||
    !1
  );
}
(t.endSpan = function (e, t) {
  const n = e[o.spanRequestSymbol] || [];
  n.length &&
    (n.forEach((e) => {
      t &&
        (e.setStatus({
          code: r.SpanStatusCode.ERROR,
          message: t.message,
        }),
        e.recordException(t)),
        e.end();
    }),
    delete e[o.spanRequestSymbol]);
}),
  (t.safeExecuteInTheMiddleMaybePromise = function (e, t, n) {
    let r, o;
    try {
      (o = e()),
        i(o) &&
          o.then(
            (e) => t(void 0, e),
            (e) => t(e),
          );
    } catch (e) {
      r = e;
    } finally {
      if (!i(o) && (t(r, o), r)) throw r;
      return o;
    }
  }),
  (t.startSpan = function (e, t, n, r = {}) {
    const i = t.startSpan(n, { attributes: r }),
      s = e[o.spanRequestSymbol] || [];
    return (
      s.push(i),
      Object.defineProperty(e, o.spanRequestSymbol, {
        enumerable: !1,
        configurable: !0,
        value: s,
      }),
      i
    );
  });
