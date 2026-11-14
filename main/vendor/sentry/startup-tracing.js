// vendor/sentry/startup-tracing.js — webpack module 95920
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(9642 /* vendor/sentry/ipc-and-breadcrumbs */),
  s = n(75405 /* vendor/other/module-75405 */);
let a;
function c() {
  if (!a) {
    const e = 1e3 * process.uptime(),
      t = (Date.now() - e) / 1e3;
    r.startSpanManual(
      {
        name: "Startup",
        op: "app.start",
        startTime: t,
        attributes: {
          [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.electron.startup",
        },
        forceTransaction: !0,
      },
      (e) => {
        a = e;
      },
    );
  }
  return a;
}
function u(e) {
  const t = r.timestampInSeconds();
  r.startSpanManual(
    {
      ...e,
      attributes: {
        [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.electron.startup",
        ...e.attributes,
      },
      parentSpan: e.parentSpan || c(),
      startTime: t,
    },
    (e) => {
      e.end(1e3 * t);
    },
  );
}
const l = r.defineIntegration((e = {}) => ({
  name: "StartupTracing",
  setup() {
    i.startSpanEnvelopeBuffering();
    let t = !1;
    const n = setTimeout(
      () => {
        (t = !0), i.flushSpanEnvelopeBuffer();
        const e = c();
        e.setStatus({ code: 2, message: "Timeout exceeded" }), e.end();
      },
      1e3 * (e.timeoutSeconds || 10),
    );
    o.app.once("will-finish-launching", () => {
      u({
        name: "will-finish-launching",
        op: "electron.will-finish-launching",
      });
    }),
      o.app.once("ready", () => {
        u({ name: "ready", op: "electron.ready" });
      }),
      o.app.once("web-contents-created", (o, a) => {
        u({
          name: "web-contents-created",
          op: "electron.web-contents.created",
        }),
          a.once("dom-ready", async () => {
            if (t) return;
            clearTimeout(n);
            const o = c();
            u({
              name: "dom-ready",
              op: "electron.web-contents.dom-ready",
            });
            let a = r.timestampInSeconds();
            const l = await ((d = 1e3 * (e.timeoutSeconds || 10)),
            new Promise((e) => {
              const t = (e) => o({ event: e }),
                n = (e) => o({ spans: e }),
                r = setTimeout(() => o(void 0), d);
              function o(o) {
                clearTimeout(r),
                  i.ipcMainHooks.removeListener("pageload-transaction", t),
                  i.ipcMainHooks.removeListener("pageload-spans", n),
                  e(o);
              }
              i.ipcMainHooks.on("pageload-transaction", t),
                i.ipcMainHooks.on("pageload-spans", n);
            }));
            var d;
            i.flushSpanEnvelopeBuffer(),
              (a =
                l && "spans" in l
                  ? s.applyStreamedRendererSpans(o, l.spans, a)
                  : (function (e, t, n) {
                      let o = n;
                      if (!t) return o;
                      const i = t.start_timestamp || t.timestamp;
                      if (
                        (e.setAttribute("performance.timeOrigin", i),
                        r.startSpanManual(
                          {
                            name: t.transaction || "electron.renderer",
                            op: "electron.renderer",
                            startTime: i,
                            parentSpan: e,
                            attributes: {
                              [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                                "auto.electron.startup",
                            },
                          },
                          (e) => {
                            if (t?.spans?.length)
                              for (const n of t.spans) {
                                const t = n.start_timestamp,
                                  i = n.timestamp;
                                i && (o = Math.max(o, i)),
                                  r.startSpanManual(
                                    {
                                      name:
                                        n.description || "electron.renderer",
                                      op: n.op,
                                      startTime: t,
                                      attributes: n.data,
                                      parentSpan: e,
                                    },
                                    (e) => {
                                      n.status &&
                                        e.setStatus(s.parseStatus(n.status)),
                                        e.end(1e3 * (i || t));
                                    },
                                  );
                              }
                            e.end(1e3 * o);
                          },
                        ),
                        t.measurements)
                      )
                        for (const [n, o] of Object.entries(t.measurements))
                          r.setMeasurement(n, o.value, o.unit, e);
                      if (t.contexts?.trace?.data)
                        for (const [n, r] of Object.entries(
                          t.contexts.trace.data,
                        ))
                          [
                            "sentry.op",
                            "sentry.origin",
                            "performance.timeOrigin",
                          ].includes(n) || e.setAttribute(n, r);
                      return o;
                    })(o, l?.event, a)),
              o.end(1e3 * a);
          });
      });
  },
}));
t.startupTracingIntegration = l;
