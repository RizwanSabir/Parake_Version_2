// vendor/other/module-39544.js — webpack module 39544
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37067 /* external/node_http */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = "Spotlight",
  s = o.defineIntegration((e = {}) => {
    const t = {
      sidecarUrl: e.sidecarUrl || "http://localhost:8969/stream",
    };
    return {
      name: i,
      setup(e) {
        try {
          o.debug.warn(
            "[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?",
          );
        } catch {}
        !(function (e, t) {
          const n = (function (e) {
            try {
              return new URL(`${e}`);
            } catch {
              return void o.debug.warn(`[Spotlight] Invalid sidecar URL: ${e}`);
            }
          })(t.sidecarUrl);
          if (!n) return;
          let i = 0;
          e.on("beforeEnvelope", (e) => {
            if (i > 3)
              return void o.debug.warn(
                "[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests",
              );
            const t = o.serializeEnvelope(e);
            o.suppressTracing(() => {
              const e = r.request(
                {
                  method: "POST",
                  path: n.pathname,
                  hostname: n.hostname,
                  port: n.port,
                  headers: {
                    "Content-Type": "application/x-sentry-envelope",
                  },
                },
                (e) => {
                  e.statusCode &&
                    e.statusCode >= 200 &&
                    e.statusCode < 400 &&
                    (i = 0),
                    e.on("data", () => {}),
                    e.on("end", () => {}),
                    e.setEncoding("utf8");
                },
              );
              e.on("error", () => {
                i++,
                  o.debug.warn(
                    "[Spotlight] Failed to send envelope to Spotlight Sidecar",
                  );
              }),
                e.write(t),
                e.end();
            });
          });
        })(e, t);
      },
    };
  });
(t.INTEGRATION_NAME = i), (t.spotlightIntegration = s);
