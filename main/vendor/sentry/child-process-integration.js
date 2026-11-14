// vendor/sentry/child-process-integration.js — webpack module 88892
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = {
    breadcrumbs: n(10342 /* vendor/sentry/electron-constants */).EXIT_REASONS,
    events: ["abnormal-exit", "launch-failed", "integrity-failure"],
  };
function a(e, t) {
  const n = `'${t}' process exited with '${e}'`,
    r = o.logger.fmt`'${t}' process exited with '${e}'`;
  switch (e) {
    case "abnormal-exit":
    case "killed":
      return {
        message: n,
        level: "warning",
        log: o.logger.warn,
        messageFmt: r,
      };
    case "crashed":
    case "oom":
    case "launch-failed":
    case "integrity-failure":
      return {
        message: n,
        level: "fatal",
        log: o.logger.error,
        messageFmt: r,
      };
    default:
      return {
        message: n,
        level: "debug",
        log: o.logger.info,
        messageFmt: r,
      };
  }
}
const c = r.defineIntegration((e = {}) => {
  const { breadcrumbs: t, events: n } = e,
    c = o.childProcessIntegration(e),
    u = {
      breadcrumbs: Array.isArray(t) ? t : !1 === t ? [] : s.breadcrumbs,
      events: Array.isArray(n) ? n : !1 === n ? [] : s.events,
    };
  return {
    name: "ChildProcess",
    setup(e) {
      c.setup?.(e);
      const { breadcrumbs: t, events: n } = u;
      if (Array.from(new Set([...t, ...n])).length > 0) {
        const o = e.getOptions(),
          s = !!o?.enableLogs;
        i.app.on("child-process-gone", (e, o) => {
          const { reason: i } = o,
            {
              message: c,
              level: u,
              log: l,
              messageFmt: d,
            } = a(o.reason, o.type);
          n.includes(i) &&
            r.captureMessage(c, {
              level: u,
              tags: { "event.process": o.type },
            }),
            t.includes(i) &&
              (r.addBreadcrumb({
                type: "process",
                category: "child-process",
                message: c,
                level: u,
                data: o,
              }),
              s &&
                l(d, {
                  "sentry.origin": "auto.electron.child-process",
                  exitCode: o.exitCode,
                  name: o.name,
                  serviceName: o.serviceName,
                }));
        }),
          i.app.on("render-process-gone", (e, i, c) => {
            const { reason: u } = c,
              l = o?.getRendererName?.(i) || "renderer",
              { message: d, level: p, log: f, messageFmt: h } = a(c.reason, l);
            n.includes(u) && r.captureMessage(d, p),
              t.includes(u) &&
                (r.addBreadcrumb({
                  type: "process",
                  category: "child-process",
                  message: d,
                  level: p,
                  data: c,
                }),
                s &&
                  f(h, {
                    "sentry.origin": "auto.electron.child-process",
                    exitCode: c.exitCode,
                  }));
          });
      }
    },
  };
});
t.childProcessIntegration = c;
