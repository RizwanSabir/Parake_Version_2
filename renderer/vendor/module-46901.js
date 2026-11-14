// vendor/module-46901.js — webpack module 46901
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76421 /* vendor/module-76421 */),
  o = n(23295 /* vendor/module-23295 */);
t.handleCallbackErrors = function (e, t, n = () => {}, i = () => {}) {
  let a;
  try {
    a = e();
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
  })(a, t, n, i);
};
