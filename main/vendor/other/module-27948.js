// vendor/other/module-27948.js — webpack module 27948
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
t.getSpotlightConfig = function (e) {
  if (!1 === e) return !1;
  if ("string" == typeof e) return e;
  const t = r.envToBool(process.env.SENTRY_SPOTLIGHT, { strict: !0 }),
    n =
      null === t && process.env.SENTRY_SPOTLIGHT
        ? process.env.SENTRY_SPOTLIGHT
        : void 0;
  return !0 === e ? (n ?? !0) : (t ?? n);
};
