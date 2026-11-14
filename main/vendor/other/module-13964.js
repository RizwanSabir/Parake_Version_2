// vendor/other/module-13964.js — webpack module 13964
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(34878 /* vendor/other/module-34878 */),
  a = n(41302 /* vendor/other/module-41302 */),
  c = n(47488 /* vendor/other/module-47488 */);
function u(e) {
  const t = Object.create(null);
  if (e) for (const n in e) t[n] = e[n];
  return (t.default = e), t;
}
const l = u(i);
t.configureUtilityProcessIPC = function () {
  l.utilityProcess?.fork &&
    (l.utilityProcess.fork = new Proxy(l.utilityProcess.fork, {
      apply: (e, t, n) => {
        const i = e.apply(t, n);
        return (
          i.on("message", (e) => {
            if (a.isMagicMessage(e)) {
              (t = `SDK started in utility process '${(function () {
                const [, , e] = n;
                return e?.serviceName || `pid:${i.pid}`;
              })()}'`),
                r.debug.log(`[Utility Process] ${t}`);
              const { port1: e, port2: u } = new l.MessageChannelMain();
              u.on("message", (e) => {
                (e.data instanceof Uint8Array || "string" == typeof e.data) &&
                  (function (e) {
                    const t = r.parseEnvelope(e),
                      n = s.eventFromEnvelope(t);
                    if (n) {
                      const [e, t] = n;
                      !(function (e, t) {
                        delete e.environment,
                          delete e.release,
                          delete e.sdk?.name,
                          delete e.sdk?.version,
                          delete e.sdk?.packages,
                          o.captureEvent(
                            c.mergeEvents(e, {
                              tags: { "event.process": "utility" },
                            }),
                            { attachments: t },
                          );
                      })(e, t);
                    } else o.getClient()?.getTransport()?.send(t);
                  })(e.data);
              }),
                u.start(),
                i.postMessage(a.getMagicMessage(), [e]);
            }
            var t;
          }),
          (i.on = new Proxy(i.on, {
            apply: (e, t, n) => {
              const [r, o] = n;
              return "message" === r
                ? Reflect.apply(e, t, [
                    r,
                    (e) => {
                      if (!a.isMagicMessage(e)) return o(e);
                    },
                  ])
                : Reflect.apply(e, t, n);
            },
          })),
          i
        );
      },
    }));
};
