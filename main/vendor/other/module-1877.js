// vendor/other/module-1877.js — webpack module 1877
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(93931 /* vendor/other/module-93931 */),
  i = n(73339 /* external/module */),
  s = n(44139 /* vendor/other/module-44139 */);
var a = "undefined" != typeof document ? document.currentScript : null;
t.initializeEsmLoader = function () {
  if (
    s.supportsEsmLoaderHooks() &&
    !r.GLOBAL_OBJ._sentryEsmLoaderHookRegistered
  ) {
    r.GLOBAL_OBJ._sentryEsmLoaderHookRegistered = !0;
    try {
      const { addHookMessagePort: e } = o.createAddHookMessageChannel();
      i.register(
        "import-in-the-middle/hook.mjs",
        "undefined" == typeof document
          ? n(87016 /* external/url */).pathToFileURL(__filename).href
          : (a && "SCRIPT" === a.tagName.toUpperCase() && a.src) ||
              new URL("sdk/esmLoader.js", document.baseURI).href,
        {
          data: { addHookMessagePort: e, include: [] },
          transferList: [e],
        },
      );
    } catch (e) {
      r.debug.warn("Failed to register 'import-in-the-middle' hook", e);
    }
  }
};
