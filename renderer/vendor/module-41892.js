// vendor/module-41892.js — webpack module 41892
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(21042 /* vendor/module-21042 */),
  o = n(42123 /* vendor/module-42123 */),
  i = n(68020 /* vendor/module-68020 */),
  a = n(19172 /* vendor/module-19172 */);
let s;
t.patchHttpModuleClient = (e, t = {}) =>
  (function (e, t = {}) {
    return (
      (function (e, t) {
        const n = e.ClientRequest?.prototype;
        if ("function" != typeof n?._storeHeader) return;
        const r = a.getHttpClientSubscriptions({ ...t, http: e });
        if (
          ((s = r[o.HTTP_ON_CLIENT_REQUEST]),
          i.getOriginalFunction(n._storeHeader))
        )
          return;
        const l = n._storeHeader;
        i.wrapMethod(n, "_storeHeader", function (...e) {
          try {
            s({ request: this }, o.HTTP_ON_CLIENT_REQUEST);
          } catch {}
          return l.apply(this, e);
        });
      })(r.getDefaultExport(e), t),
      e
    );
  })(e, t);
