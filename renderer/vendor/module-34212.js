// vendor/module-34212.js — webpack module 34212
// params: (e, t) = (module, exports, require)
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
