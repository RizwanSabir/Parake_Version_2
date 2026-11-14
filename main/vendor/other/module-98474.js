// vendor/other/module-98474.js — webpack module 98474
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = new Set();
(t._INTERNAL_clearAiProviderSkips = function () {
  i.clear(),
    r.DEBUG_BUILD && o.debug.log("Cleared AI provider skip registrations");
}),
  (t._INTERNAL_shouldSkipAiProviderWrapping = function (e) {
    return i.has(e);
  }),
  (t._INTERNAL_skipAiProviderWrapping = function (e) {
    e.forEach((e) => {
      i.add(e),
        r.DEBUG_BUILD &&
          o.debug.log(`AI provider "${e}" wrapping will be skipped`);
    });
  });
