// vendor/other/module-3448.js — webpack module 3448
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.r(t),
  n.d(t, {
    createDiagnosticsPort: () => m,
    initialize: () => _,
    load: () => E,
    resolve: () => S,
    setDiagnosticsHook: () => u.setDiagnosticsHook,
  });
var r = n(3680 /* vendor/other/module-3680 */),
  o = n(46850 /* vendor/other/module-46850 */),
  i = n(79280 /* vendor/other/module-79280 */),
  s = n(73136 /* external/node_url */),
  a = n(75919 /* external/node_worker_threads */),
  c = n(56859 /* vendor/other/module-56859 */),
  u = n(95951 /* vendor/other/module-95951 */),
  l = n(73024 /* external/node_fs */);
const d = r("@apm-js-collab/tracing-hooks:esm-hook");
let p = null,
  f = null,
  h = null,
  g = u.emitDiagnostics;
function m() {
  const { port1: e, port2: t } = new a.MessageChannel();
  return e.on("message", u.emitDiagnostics), e.unref(), t;
}
function _(e = {}) {
  const t = e?.instrumentations || [];
  var n;
  (h = (0, o.create)(t)),
    (f = new Set(t.map((e) => e.module.name))),
    (p = new Map()),
    (g = e?.diagnosticsPort
      ? ((n = e.diagnosticsPort),
        (e) => {
          try {
            const t =
              void 0 === e.error || e.error instanceof Error
                ? e.error
                : new Error(String(e.error));
            n.postMessage({ ...e, error: t });
          } catch (t) {
            d("failed to post diagnostics for %s: %o", e.url, t);
          }
        })
      : u.emitDiagnostics);
}
function S(e, t, n) {
  return (function (e) {
    const t = i(e.url);
    if (t && f.has(t.name)) {
      const n = (0, s.fileURLToPath)(t.basedir),
        r = c(n),
        o = h.getTransformer(t.name, r, t.path);
      o && p.set(e.url, o);
    }
    return e;
  })(n(e, t));
}
function E(e, t, n) {
  const r = n(e, t);
  if (!1 === p.has(e)) return r;
  if ("commonjs" === r.format) {
    const t = new URL(r.responseURL ?? e);
    r.source ??= (0, l.readFileSync)(t);
  }
  return (function (e, t) {
    const n = t.source;
    if (n) {
      const r = p.get(e);
      try {
        const o =
            "module" === t.format
              ? "esm"
              : "commonjs" === t.format
                ? "cjs"
                : "unknown",
          i = "string" == typeof n ? n : Buffer.from(n).toString("utf8"),
          s = r.transform(i, o);
        (t.source = s?.code),
          (t.shortCircuit = !0),
          g({ url: e, moduleName: r.moduleName });
      } catch (t) {
        d("Error transforming module %s: %o", e, t),
          g({ url: e, moduleName: r.moduleName, error: t });
      } finally {
        r.free();
      }
    }
    return t;
  })(e, r);
}
