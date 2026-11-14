// vendor/other/module-75405.js — webpack module 75405
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = "sentry.segment.name.source";
function s(e) {
  return "ok" === e ? { code: 1 } : { code: 2, message: e };
}
function a(e, t) {
  return e.attributes?.[t]?.value;
}
const c = new Set([
    r.SENTRY_OP,
    r.SENTRY_ORIGIN,
    r.SENTRY_SOURCE,
    r.SENTRY_PROFILE_ID,
    r.SENTRY_PROFILER_ID,
    o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE,
    r.SENTRY_SEGMENT_NAME,
    i,
    r.SENTRY_SEGMENT_ID,
    r.SENTRY_TRACE_LIFECYCLE,
    r.SENTRY_SDK_NAME,
    r.SENTRY_SDK_VERSION,
    r.SENTRY_SDK_INTEGRATIONS,
    r.SENTRY_RELEASE,
    r.SENTRY_ENVIRONMENT,
    r.URL_FULL,
    "http.request.header.user_agent",
  ]),
  u = new Set([
    r.SENTRY_TRACE_LIFECYCLE,
    r.SENTRY_SEGMENT_NAME,
    i,
    r.SENTRY_SEGMENT_ID,
    r.SENTRY_SDK_NAME,
    r.SENTRY_SDK_VERSION,
    r.SENTRY_SDK_INTEGRATIONS,
    r.SENTRY_RELEASE,
    r.SENTRY_ENVIRONMENT,
    o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE,
  ]);
function l(e) {
  const t = {};
  for (const [n, r] of Object.entries(e.attributes || {}))
    u.has(n) || (t[n] = r.value);
  return t;
}
(t.applyStreamedRendererSpans = function (e, t, n) {
  let i = n;
  if (!t.length) return i;
  const u = t.find((e) => e.is_segment),
    d = t.filter((e) => !e.is_segment),
    p = u?.start_timestamp || o.timestampInSeconds();
  if ((e.setAttribute("performance.timeOrigin", p), u?.attributes))
    for (const [t, n] of Object.entries(u.attributes))
      c.has(t) || e.setAttribute(t, n.value);
  return (
    o.startSpanManual(
      {
        name: u?.name || "electron.renderer",
        op: "electron.renderer",
        startTime: p,
        parentSpan: e,
        attributes: {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.electron.startup",
        },
      },
      (e) => {
        for (const t of d) {
          const n = t.start_timestamp,
            c = t.end_timestamp;
          c && (i = Math.max(i, c)),
            o.startSpanManual(
              {
                name: t.name,
                op: a(t, r.SENTRY_OP),
                startTime: n,
                attributes: l(t),
                parentSpan: e,
              },
              (e) => {
                t.status && e.setStatus(s(t.status)), e.end(1e3 * (c || n));
              },
            );
        }
        u?.end_timestamp && (i = Math.max(i, u.end_timestamp)), e.end(1e3 * i);
      },
    ),
    i
  );
}),
  (t.parseStatus = s);
