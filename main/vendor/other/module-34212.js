// vendor/other/module-34212.js — webpack module 34212
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getSDKSource = function () {
    return "npm";
  }),
  (t.isBrowserBundle = function () {
    return (
      "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
      !!__SENTRY_BROWSER_BUNDLE__
    );
  });
