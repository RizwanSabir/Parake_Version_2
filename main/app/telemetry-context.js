// app/telemetry-context.js — webpack module 49581
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.Rm = void 0),
  (t.setTelemetrySdk = function (e) {
    globalThis[a] = e;
  }),
  (t.setTelemetryContext = function (e) {
    !(function (e) {
      const t = c();
      t &&
        (t.setTags(e),
        t.getIsolationScope().setAttributes(
          Object.fromEntries(
            Object.entries(e)
              .filter((e) => void 0 !== e[1])
              .map(([e, t]) => [e, t.slice(0, 200)]),
          ),
        ));
    })(e);
  });
const r = n(91711 /* vendor/other/module-91711 */);
function o(e) {
  return e instanceof Error ? { "error.type": e.name } : {};
}
const i = "[unserializable]";
function s(e) {
  if ("string" == typeof e) return e;
  if (e instanceof Error) return e.message;
  try {
    return JSON.stringify((0, r.scrub)(e)) ?? i;
  } catch {
    return i;
  }
}
const a = Symbol.for("parakeetai.telemetry.sdk");
function c() {
  return globalThis[a];
}
t.Rm = {
  error(e, n, o = {}) {
    const { code: i, ...a } = n,
      { labels: u, fingerprint: l } = (function (e) {
        if (!e) return {};
        const t = (0, r.scrub)(e);
        return {
          labels: t,
          fingerprint: ["{{ default }}", ...Object.values(t)],
        };
      })(o.groupBy);
    c()?.captureException(
      (function (e, t) {
        if (e instanceof Error) return e;
        const n = new Error(s(e));
        return Error.captureStackTrace?.(n, t), n;
      })(e, t.Rm.error),
      {
        tags: { ...u, code: i },
        extra: a,
        ...(l ? { fingerprint: l } : {}),
      },
    );
  },
  warn(e, t) {
    c()?.logger.warn(s(e), { ...t, ...o(e) });
  },
  info(e, t) {
    c()?.logger.info(s(e), { ...t, ...o(e) });
  },
};
