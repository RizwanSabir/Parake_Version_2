// vendor/module-98532.js — webpack module 98532
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15802 /* vendor/module-15802 */),
  o = n(57786 /* vendor/module-57786 */);
(t.callFrameToStackFrame = function (e, t, n) {
  const i = t ? t.replace(/^file:\/\//, "") : void 0,
    a = e.location.columnNumber ? e.location.columnNumber + 1 : void 0,
    s = e.location.lineNumber ? e.location.lineNumber + 1 : void 0;
  return {
    filename: i,
    module: n(i),
    function: e.functionName || o.UNKNOWN_FUNCTION,
    colno: a,
    lineno: s,
    in_app: i ? r.filenameIsInApp(i) : void 0,
  };
}),
  (t.watchdogTimer = function (e, t, n, r) {
    const o = e();
    let i = !1,
      a = !0;
    return (
      setInterval(() => {
        const e = o.getTimeMs();
        !1 === i && e > t + n && ((i = !0), a && r()), e < t + n && (i = !1);
      }, 20),
      {
        poll: () => {
          o.reset();
        },
        enabled: (e) => {
          a = e;
        },
      }
    );
  });
