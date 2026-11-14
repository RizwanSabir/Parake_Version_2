// vendor/other/module-3365.js — webpack module 3365
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/other/module-68020 */);
(t.isStreamedBeforeSendSpanCallback = function (e) {
  return !!e && "function" == typeof e && "_streamed" in e && !!e._streamed;
}),
  (t.withStreamedSpan = function (e) {
    return r.addNonEnumerableProperty(e, "_streamed", !0), e;
  });
