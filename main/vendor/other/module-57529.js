// vendor/other/module-57529.js — webpack module 57529
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(64673 /* vendor/other/module-64673 */),
  i = "auto.db.otel.mongo";
(t.getV3CommandOperation = o.getV3CommandOperation),
  (t.startMongoSpan = o.startMongoSpan),
  (t.getV3SpanAttributes = function (e, t, n, r) {
    return o.getV3SpanAttributes(e, t, n, r, i);
  }),
  (t.getV4SpanAttributes = function (e, t, n, r) {
    return o.getV4SpanAttributes(e, t, n, r, i);
  }),
  (t.patchEnd = function (e, t) {
    const n = r.getActiveSpan();
    let o = !1;
    return function (...i) {
      if (!o) {
        o = !0;
        const t = i[0];
        e &&
          (t instanceof Error &&
            e.setStatus({
              code: r.SPAN_STATUS_ERROR,
              message: t.message,
            }),
          e.end());
      }
      return r.withActiveSpan(n ?? null, () => t.apply(this, i));
    };
  }),
  (t.shouldSkipInstrumentation = function () {
    return !r.getActiveSpan();
  });
