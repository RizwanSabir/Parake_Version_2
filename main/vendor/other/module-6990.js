// vendor/other/module-6990.js — webpack module 6990
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/other/module-68020 */),
  o = Symbol.for("sentry.skipNormalization"),
  i = Symbol.for("sentry.overrideNormalizationDepth");
(t.getNormalizationDepthOverrideHint = function (e) {
  const t = e[i];
  return "number" == typeof t ? t : void 0;
}),
  (t.hasSkipNormalizationHint = function (e) {
    return Boolean(e[o]);
  }),
  (t.setNormalizationDepthOverrideHint = function (e, t) {
    r.addNonEnumerableProperty(e, i, t);
  }),
  (t.setSkipNormalizationHint = function (e) {
    r.addNonEnumerableProperty(e, o, !0);
  });
