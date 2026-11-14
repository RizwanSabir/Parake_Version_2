// vendor/other/module-84526.js — webpack module 84526
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(57529 /* vendor/other/module-57529 */),
  i = n(64673 /* vendor/other/module-64673 */);
(t.getV3PatchCommand = function () {
  return (e) =>
    function (t, n, r, s, a) {
      const c = "function" == typeof s ? s : a;
      if (
        o.shouldSkipInstrumentation() ||
        "function" != typeof c ||
        "object" != typeof r
      )
        return "function" == typeof s
          ? e.call(this, t, n, r, s)
          : e.call(this, t, n, r, s, a);
      const u = i.getV3CommandOperation(r),
        l = i.startMongoSpan(o.getV3SpanAttributes(n, t, r, u)),
        d = o.patchEnd(l, c);
      return "function" == typeof s
        ? e.call(this, t, n, r, d)
        : e.call(this, t, n, r, s, d);
    };
}),
  (t.getV3PatchCursor = function () {
    return (e) =>
      function (t, n, r, s, a, c) {
        const u = "function" == typeof a ? a : c;
        if (o.shouldSkipInstrumentation() || "function" != typeof u)
          return "function" == typeof a
            ? e.call(this, t, n, r, s, a)
            : e.call(this, t, n, r, s, a, c);
        const l = i.startMongoSpan(
            o.getV3SpanAttributes(n, t, r.cmd, "getMore"),
          ),
          d = o.patchEnd(l, u);
        return "function" == typeof a
          ? e.call(this, t, n, r, s, d)
          : e.call(this, t, n, r, s, a, d);
      };
  }),
  (t.getV3PatchFind = function () {
    return (e) =>
      function (t, n, r, s, a, c) {
        const u = "function" == typeof a ? a : c;
        if (
          o.shouldSkipInstrumentation() ||
          "function" != typeof u ||
          "object" != typeof r
        )
          return "function" == typeof a
            ? e.call(this, t, n, r, s, a)
            : e.call(this, t, n, r, s, a, c);
        const l = i.startMongoSpan(o.getV3SpanAttributes(n, t, r, "find")),
          d = o.patchEnd(l, u);
        return "function" == typeof a
          ? e.call(this, t, n, r, s, d)
          : e.call(this, t, n, r, s, a, d);
      };
  }),
  (t.getV3PatchOperation = function (e) {
    return (t) =>
      function (n, r, s, a, c) {
        const u = "function" == typeof a ? a : c;
        if (
          o.shouldSkipInstrumentation() ||
          "function" != typeof u ||
          "object" != typeof s
        )
          return "function" == typeof a
            ? t.call(this, n, r, s, a)
            : t.call(this, n, r, s, a, c);
        const l = i.startMongoSpan(o.getV3SpanAttributes(r, n, s[0], e)),
          d = o.patchEnd(l, u);
        return "function" == typeof a
          ? t.call(this, n, r, s, d)
          : t.call(this, n, r, s, a, d);
      };
  }),
  (t.getV4ConnectionPoolCheckOut = function () {
    return (e) =>
      function (t) {
        const n = r.getActiveSpan();
        return e.call(this, function (...e) {
          return r.withActiveSpan(n ?? null, () => t.apply(this, e));
        });
      };
  }),
  (t.getV4PatchCommandCallback = function () {
    return (e) =>
      function (t, n, r, s) {
        const a = s,
          c = Object.keys(n)[0];
        if ("object" != typeof n || n.ismaster || n.hello)
          return e.call(this, t, n, r, s);
        let u;
        o.shouldSkipInstrumentation() ||
          (u = i.startMongoSpan(o.getV4SpanAttributes(this, t, n, c)));
        const l = o.patchEnd(u, a);
        return e.call(this, t, n, r, l);
      };
  }),
  (t.getV4PatchCommandPromise = function () {
    return (e) =>
      function (...t) {
        const [n, r] = t,
          s = Object.keys(r)[0];
        if ("object" != typeof r || r.ismaster || r.hello)
          return e.apply(this, t);
        let a;
        o.shouldSkipInstrumentation() ||
          (a = i.startMongoSpan(o.getV4SpanAttributes(this, n, r, s)));
        const c = o.patchEnd(a, () => {}),
          u = e.apply(this, t);
        return (
          u.then(
            (e) => c(null, e),
            (e) => c(e),
          ),
          u
        );
      };
  });
