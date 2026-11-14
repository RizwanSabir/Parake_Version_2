// vendor/other/module-46901.js — webpack module 46901
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76421 /* vendor/other/module-76421 */),
  o = n(23295 /* vendor/other/module-23295 */);
t.handleCallbackErrors = function (e, t, n = () => {}, i = () => {}) {
  let s;
  try {
    s = e();
  } catch (e) {
    throw (t(e), n(), e);
  }
  return (function (e, t, n, i) {
    return o.isThenable(e)
      ? r.chainAndCopyPromiseLike(
          e,
          (e) => {
            n(), i(e);
          },
          (e) => {
            t(e), n();
          },
        )
      : (n(), i(e), e);
  })(s, t, n, i);
};
