// vendor/other/module-98695.js — webpack module 98695
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
function o(e) {
  return void 0 !== e && (0 === e.length || "?" === e || "<anonymous>" === e);
}
(t.LOCAL_VARIABLES_KEY = "__SENTRY_ERROR_LOCAL_VARIABLES__"),
  (t.createRateLimiter = function (e, t, n) {
    let r = 0,
      o = 5,
      i = 0;
    return (
      setInterval(() => {
        0 === i
          ? r > e && ((o *= 2), n(o), o > 86400 && (o = 86400), (i = o))
          : ((i -= 1), 0 === i && t()),
          (r = 0);
      }, 1e3).unref(),
      () => {
        r += 1;
      }
    );
  }),
  (t.filterFrameVariables = function (e, t) {
    return r._INTERNAL_filterKeyValueData(e, t);
  }),
  (t.functionNamesMatch = function (e, t) {
    return (
      e === t || `Object.${e}` === t || e === `Object.${t}` || (o(e) && o(t))
    );
  }),
  (t.isAnonymous = o);
