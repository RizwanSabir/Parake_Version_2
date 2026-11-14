// vendor/other/module-16206.js — webpack module 16206
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = Symbol("sentry-track-pino-logger");
function s(e, t, n) {
  const r = Object.getOwnPropertySymbols(e),
    o = `Symbol(${t})`;
  for (const t of r)
    if (t.toString() === o) {
      const r = e[t];
      return "string" == typeof r ? r : n;
    }
  return n;
}
const a = { levels: [], handled: !0 },
  c = {
    levels: ["trace", "debug", "info", "warn", "error", "fatal"],
  },
  u = o.defineIntegration((e = {}) => {
    const t = {
      autoInstrument: !1 !== e.autoInstrument,
      error: { ...a, ...e.error },
      log: { ...c, ...e.log },
    };
    return {
      name: "Pino",
      setup: (e) => {
        const n = !!e.getOptions().enableLogs;
        r.tracingChannel("pino_asJson").end.subscribe((e) => {
          const { instance: r, arguments: a, result: c } = e;
          !(function (e, r, a) {
            if (
              !(function (e) {
                const n = e[i];
                return "track" === n || ("ignore" !== n && t.autoInstrument);
              })(e)
            )
              return;
            const c = (function (e) {
                const { level: t, time: n, pid: r, hostname: o, ...i } = e;
                return i;
              })(a),
              [u, l, d] = r,
              p = e?.levels?.labels?.[d] || "info",
              f = s(e, "pino.messageKey", "msg"),
              h = l || c?.[f] || "";
            if (n && t.log.levels.includes(p)) {
              const e = {
                ...c,
                "sentry.origin": "auto.log.pino",
                "pino.logger.level": d,
              };
              o._INTERNAL_captureLog({
                level: p,
                message: h,
                attributes: e,
              });
            }
            if (t.error.levels.includes(p)) {
              const n = s(e, "pino.errorKey", "err"),
                r = {};
              for (const [e, t] of Object.entries(c))
                e !== n && e !== f && (r[e] = t);
              h && (r[f] = h);
              const i = {
                level: o.severityLevelFromString(p),
                contexts: { pino: r },
              };
              o.withScope((e) => {
                e.addEventProcessor(
                  (e) => (
                    (e.logger = "pino"),
                    o.addExceptionMechanism(e, {
                      handled: t.error.handled,
                      type: "auto.log.pino",
                    }),
                    e
                  ),
                );
                const r = u[n];
                r ? o.captureException(r, i) : o.captureMessage(h, i);
              });
            }
          })(r, a, JSON.parse(c));
        });
      },
    };
  }),
  l = Object.assign(u, {
    trackLogger(e) {
      o.isObjectLike(e) && "levels" in e && (e[i] = "track");
    },
    untrackLogger(e) {
      o.isObjectLike(e) && "levels" in e && (e[i] = "ignore");
    },
  });
t.pinoIntegration = l;
