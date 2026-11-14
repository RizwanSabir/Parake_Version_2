// vendor/other/module-23306.js — webpack module 23306
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(98995 /* external/node_module */),
  i = n(73136 /* external/node_url */),
  s = n(75919 /* external/node_worker_threads */),
  a = n(95455 /* vendor/other/module-95455 */);
t.registerDiagnosticsChannelInjection = function (e) {
  if (!s.isMainThread && !s.parentPort) return;
  if (r.GLOBAL_OBJ?.__SENTRY_ORCHESTRION__?.runtime) return;
  const t = globalThis,
    c = (function (e) {
      const t = (e) => e.split(".").map((e) => parseInt(e, 10)),
        n = t(process.versions.node ?? "0.0.0"),
        r = t(e ?? "0.0.0");
      return (
        (n[0] ?? 0) > 25 ||
        (25 === n[0] && (n[1] ?? 0) >= 1) ||
        (24 === n[0] && (n[1] ?? 0) >= 13) ||
        (r[0] ?? 0) > 2 ||
        (2 === r[0] && (r[1] ?? 0) >= 8)
      );
    })(t.Deno?.version?.deno);
  let u, l;
  (u = i.pathToFileURL(__filename).href), (l = void 0);
  const d = e?.tracingHooksDir,
    p = d ? o.createRequire(u) : void 0,
    f = o;
  try {
    const { setDiagnosticsHook: e } = p
        ? p(`${d}/lib/diagnostics.js`)
        : n(95951 /* vendor/other/module-95951 */),
      o = ({ moduleName: e, error: t }) => {
        t
          ? r.debug.warn(
              `[orchestrion] failed to inject diagnostics-channel into ${e}:`,
              t,
            )
          : ((r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ =
              r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ || {}),
            (r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime =
              r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime || []),
            r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime.push(e));
      };
    if ((e(o), "function" == typeof f.registerHooks && c)) {
      const {
        initialize: e,
        resolve: t,
        load: o,
      } = p ? p(`${d}/hook-sync.mjs`) : n(3448 /* vendor/other/module-3448 */);
      e({ instrumentations: a.SENTRY_INSTRUMENTATIONS }),
        f.registerHooks({ resolve: t, load: o }),
        r.debug.log(
          "Registered diagnostics-channel injection via Module.registerHooks()",
        );
    } else {
      if ("function" != typeof f.register || t.Bun || t.Deno)
        return void r.debug.warn(
          "No available Node API to register diagnostics-channel injection hooks; skipping.",
        );
      {
        const e = d
            ? i.pathToFileURL(`${d}/hook.mjs`).href
            : "@apm-js-collab/tracing-hooks/hook.mjs",
          { port1: t, port2: c } = new s.MessageChannel();
        t.on("message", o),
          t.unref(),
          f.register(e, {
            parentURL: u,
            data: {
              instrumentations: a.SENTRY_INSTRUMENTATIONS,
              diagnosticsPort: c,
            },
            transferList: [c],
          }),
          new (p && d ? p(d) : n(7191 /* vendor/other/module-7191 */))({
            instrumentations: a.SENTRY_INSTRUMENTATIONS,
          }).patch(),
          r.debug.log(
            "Registered diagnostics-channel injection via Module.register()",
          );
      }
    }
  } catch (e) {
    return void r.debug.warn(
      "Failed to register diagnostics-channel injection hooks; channel-based integrations will not record spans.",
      e,
    );
  }
  (r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ =
    r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ || {}),
    (r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime =
      r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__.runtime || []);
};
