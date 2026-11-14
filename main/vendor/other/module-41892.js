// vendor/other/module-41892.js — webpack module 41892
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(21042 /* vendor/other/module-21042 */),
  o = n(42123 /* vendor/other/module-42123 */),
  i = n(68020 /* vendor/other/module-68020 */),
  s = n(19172 /* vendor/other/module-19172 */);
let a;
t.patchHttpModuleClient = (e, t = {}) =>
  (function (e, t = {}) {
    return (
      (function (e, t) {
        const n = e.ClientRequest?.prototype;
        if ("function" != typeof n?._storeHeader) return;
        const r = s.getHttpClientSubscriptions({ ...t, http: e });
        if (
          ((a = r[o.HTTP_ON_CLIENT_REQUEST]),
          i.getOriginalFunction(n._storeHeader))
        )
          return;
        const c = n._storeHeader;
        i.wrapMethod(n, "_storeHeader", function (...e) {
          try {
            a({ request: this }, o.HTTP_ON_CLIENT_REQUEST);
          } catch {}
          return c.apply(this, e);
        });
      })(r.getDefaultExport(e), t),
      e
    );
  })(e, t);
