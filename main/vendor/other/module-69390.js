// vendor/other/module-69390.js — webpack module 69390
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
function o(e, t) {
  e.setStatus({
    code: r.SPAN_STATUS_ERROR,
    message: `${t.message} ${t.code ? `\nMongoose Error Code: ${t.code}` : ""}`,
  });
}
(t.handleCallbackResponse = function (e, t, n, r, i) {
  let s = 0;
  return (
    2 === i.length ? (s = 1) : 3 === i.length && (s = 2),
    (i[s] = (t, n) => (t && o(r, t), r.end(), e(t, n))),
    t.apply(n, i)
  );
}),
  (t.handlePromiseResponse = function (e, t) {
    return e instanceof Promise
      ? e
          .catch((e) => {
            throw (o(t, e), e);
          })
          .finally(() => t.end())
      : (t.end(), e);
  });
