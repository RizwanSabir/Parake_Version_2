// vendor/sentry/renderer-event-loop-block.js — webpack module 50593
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(10342 /* vendor/sentry/electron-constants */),
  a = n(77999 /* vendor/other/module-77999 */),
  c = n(66383 /* vendor/sentry/session-tracking */),
  u = n(67838 /* vendor/sentry/renderer-stack-frames */);
function l(e, ...t) {
  r.debug.log(`[Renderer Event Loop Block] ${e}`, ...t);
}
function d(e, t) {
  return () => {
    u.captureRendererStackFrames(e)
      .then((e) => {
        e && t(e);
      })
      .catch(() => {});
  };
}
function p(e, t) {
  l("Connecting to debugger"), e.debugger.attach("1.3");
  const n = new Map(),
    s = o.createGetModuleFromFilename(i.app.getAppPath());
  return (
    e.debugger.on("message", (o, i, a) => {
      if ("Debugger.scriptParsed" === i) {
        const e = a;
        n.set(e.scriptId, e.url);
      } else if ("Debugger.paused" === i) {
        const o = a;
        if ("other" !== o.reason) return;
        const i = [...o.callFrames];
        e.debugger.sendCommand("Debugger.resume").then(null, () => {});
        const c = r.stripSentryFramesAndReverse(
          i.map((e) =>
            r.callFrameToStackFrame(e, n.get(e.location.scriptId), s),
          ),
        );
        t(c);
      }
    }),
    e.debugger.sendCommand("Debugger.enable").catch(() => {}),
    () => {
      if (!e.isDestroyed())
        return (
          l("Pausing debugger to capture stack trace"),
          e.debugger.sendCommand("Debugger.pause")
        );
    }
  );
}
function f() {
  let e = process.hrtime();
  return {
    getTimeMs: () => {
      const [t, n] = process.hrtime(e);
      return Math.floor(1e3 * t + n / 1e6);
    },
    reset: () => {
      e = process.hrtime();
    },
  };
}
const h = "RendererEventLoopBlock",
  g = r.defineIntegration((e = {}) => {
    const t = new Map();
    let n;
    function o(e, t, o) {
      c.sessionAnr();
      const i =
          (function (e) {
            return n?.getRendererName?.(e);
          })(e) || "renderer",
        s = {
          level: "error",
          exception: {
            values: [
              {
                type: "ApplicationNotResponding",
                value: `Application Not Responding for at least ${t} ms`,
                stacktrace: { frames: o },
                mechanism: { type: "ANR" },
              },
            ],
          },
          tags: { "event.process": i },
        };
      r.captureEvent(s);
    }
    return {
      name: h,
      setup: (t) => {
        (n = t.getOptions()),
          s.ELECTRON_MAJOR_VERSION >= 34 &&
            (i.app.commandLine.appendSwitch(
              "enable-features",
              "DocumentPolicyIncludeJSCallStacksInCrashReports",
            ),
            e.captureNativeStacktrace &&
              i.app.on("ready", () => {
                n?.getSessions().forEach((e) =>
                  a.addHeaderToSession(
                    e,
                    "Document-Policy",
                    "include-js-call-stacks-in-crash-reports",
                  ),
                );
              }));
      },
      createRendererEventLoopBlockStatusHandler: () => (n, a) => {
        let c = t.get(a);
        function u() {
          c?.enabled(!1);
        }
        function h() {
          c?.enabled(!0);
        }
        if (void 0 === c) {
          let g;
          if (
            (l("Renderer sent first status message", n.config),
            n.config.captureStackTrace)
          ) {
            const t =
              e.captureNativeStacktrace && s.ELECTRON_MAJOR_VERSION >= 34
                ? d
                : p;
            g = t(a, (e) => {
              l("Event captured with stack frames"),
                o(a, n.config.anrThreshold, e);
            });
          }
          (c = r.watchdogTimer(f, 100, n.config.anrThreshold, async () => {
            l("Watchdog timeout"),
              g ? g() : (l("Capturing event"), o(a, n.config.anrThreshold));
          })),
            a.once("destroyed", () => {
              t?.delete(a),
                i.powerMonitor.off("suspend", u),
                i.powerMonitor.off("resume", h),
                i.powerMonitor.off("lock-screen", u),
                i.powerMonitor.off("unlock-screen", h);
            }),
            a.once("blur", u),
            a.once("focus", h),
            i.powerMonitor.on("suspend", u),
            i.powerMonitor.on("resume", h),
            i.powerMonitor.on("lock-screen", u),
            i.powerMonitor.on("unlock-screen", h),
            t.set(a, c);
        }
        c.poll(),
          "alive" !== n.status &&
            (l(`Renderer visibility changed '${n.status}'`),
            c.enabled("visible" === n.status));
      },
    };
  });
(t.createRendererEventLoopBlockStatusHandler = function (e) {
  const t = e.getIntegrationByName(h);
  return t?.createRendererEventLoopBlockStatusHandler();
}),
  (t.rendererEventLoopBlockIntegration = g);
