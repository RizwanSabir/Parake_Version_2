// vendor/module-2538.js — webpack module 2538
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */);
t.checkAndWarnIfIsEmbeddedBrowserExtension = function () {
  return (
    !!(function () {
      if (void 0 === i.WINDOW.window) return !1;
      const e = i.WINDOW;
      if (e.nw) return !1;
      const t = e.chrome || e.browser;
      if (!t?.runtime?.id) return !1;
      const n = r.getLocationHref();
      return !(
        i.WINDOW === i.WINDOW.top &&
        /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
          n,
        )
      );
    })() && (o.DEBUG_BUILD && r.consoleSandbox(() => {}), !0)
  );
};
