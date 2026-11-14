// app/lib/set-telemetry-sdk.js — webpack module 37148
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.log = void 0),
  (t.setTelemetrySdk = function (e) {
    globalThis[s] = e;
  }),
  (t.setTelemetryUser = function (e) {
    l()?.setUser(e);
  }),
  (t.setTelemetryContext = function (e) {
    !(function (e) {
      const t = l();
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
const r = n(37150 /* vendor/module-37150 */);
function o(e) {
  return e instanceof Error ? { "error.type": e.name } : {};
}
const i = "[unserializable]";
function a(e) {
  if ("string" == typeof e) return e;
  if (e instanceof Error) return e.message;
  try {
    return JSON.stringify((0, r.scrub)(e)) ?? i;
  } catch {
    return i;
  }
}
const s = Symbol.for("parakeetai.telemetry.sdk");
function l() {
  return globalThis[s];
}
t.log = {
  error(e, n, o = {}) {
    const { code: i, ...s } = n,
      { labels: c, fingerprint: u } = (function (e) {
        if (!e) return {};
        const t = (0, r.scrub)(e);
        return {
          labels: t,
          fingerprint: ["{{ default }}", ...Object.values(t)],
        };
      })(o.groupBy);
    l()?.captureException(
      (function (e, t) {
        if (e instanceof Error) return e;
        const n = new Error(a(e));
        return Error.captureStackTrace?.(n, t), n;
      })(e, t.log.error),
      {
        tags: { ...c, code: i },
        extra: s,
        ...(u ? { fingerprint: u } : {}),
      },
    );
  },
  warn(e, t) {
    l()?.logger.warn(a(e), { ...t, ...o(e) });
  },
  info(e, t) {
    l()?.logger.info(a(e), { ...t, ...o(e) });
  },
};
