// vendor/module-95418.js — webpack module 95418
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(56080 /* vendor/module-56080 */),
  o = n(42408 /* vendor/module-42408 */),
  i = n(75457 /* vendor/module-75457 */),
  a = n(26895 /* vendor/module-26895 */),
  s = n(82615 /* vendor/module-82615 */),
  l = n(8888 /* vendor/module-8888 */),
  c = n(75715 /* vendor/module-75715 */),
  u = n(75122 /* vendor/module-75122 */),
  d = n(35959 /* vendor/module-35959 */),
  p = n(19410 /* vendor/module-19410 */);
function f(e, t) {
  const { environment: n, release: o, dist: i, maxValueLength: a } = t;
  (e.environment = e.environment || n || r.DEFAULT_ENVIRONMENT),
    !e.release && o && (e.release = o),
    !e.dist && i && (e.dist = i);
  const s = e.request;
  s?.url && a && (s.url = u.truncate(s.url, a)),
    a &&
      e.exception?.values?.forEach((e) => {
        e.value && (e.value = u.truncate(e.value, a));
      });
}
function h(e, t) {
  const n = a.getFilenameToDebugIdMap(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function m(e) {
  const t = {};
  if (
    (e.exception?.values?.forEach((e) => {
      e.stacktrace?.frames?.forEach((e) => {
        e.debug_id &&
          (e.abs_path
            ? (t[e.abs_path] = e.debug_id)
            : e.filename && (t[e.filename] = e.debug_id),
          delete e.debug_id);
      });
    }),
    0 === Object.keys(t).length)
  )
    return;
  (e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []);
  const n = e.debug_meta.images;
  Object.entries(t).forEach(([e, t]) => {
    n.push({ type: "sourcemap", code_file: e, debug_id: t });
  });
}
function g(e, t) {
  if (!t) return e;
  const n = e ? e.clone() : new i.Scope();
  return n.update(t), n;
}
const y = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
(t.applyClientOptions = f),
  (t.applyDebugIds = h),
  (t.applyDebugMeta = m),
  (t.parseEventHintOrCaptureContext = function (e) {
    if (e)
      return (function (e) {
        return e instanceof i.Scope || "function" == typeof e;
      })(e) ||
        (function (e) {
          return Object.keys(e).some((e) => y.includes(e));
        })(e)
        ? { captureContext: e }
        : e;
  }),
  (t.prepareEvent = function (e, t, n, r, i, a) {
    const { normalizeDepth: u = 3, normalizeMaxBreadth: y = 1e3 } = e,
      v = {
        ...t,
        event_id: t.event_id || n.event_id || s.uuid4(),
        timestamp: t.timestamp || p.dateTimestampInSeconds(),
      },
      b = n.integrations || e.integrations.map((e) => e.name);
    f(v, e),
      (function (e, t) {
        t.length > 0 &&
          ((e.sdk = e.sdk || {}),
          (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
      })(v, b),
      i && i.emit("applyFrameMetadata", t),
      void 0 === t.type && h(v, e.stackParser);
    const S = g(r, n.captureContext);
    n.mechanism && s.addExceptionMechanism(v, n.mechanism);
    const _ = i ? i.getEventProcessors() : [],
      x = c.getCombinedScopeData(a, S),
      w = [...(n.attachments || []), ...x.attachments];
    w.length && (n.attachments = w), c.applyScopeDataToEvent(v, x);
    const E = [..._, ...x.eventProcessors];
    return (
      n.data && !0 === n.data.__sentry__
        ? d.resolvedSyncPromise(v)
        : o.notifyEventProcessors(E, v, n)
    ).then(
      (e) => (
        e && m(e),
        "number" == typeof u && u > 0
          ? (function (e, t, n) {
              if (!e) return null;
              const r = {
                ...e,
                ...(e.breadcrumbs && {
                  breadcrumbs: e.breadcrumbs.map((e) => ({
                    ...e,
                    ...(e.data && {
                      data: l.normalize(e.data, t, n),
                    }),
                  })),
                }),
                ...(e.user && { user: l.normalize(e.user, t, n) }),
                ...(e.contexts && {
                  contexts: l.normalize(e.contexts, t, n),
                }),
                ...(e.extra && { extra: l.normalize(e.extra, t, n) }),
              };
              return (
                e.contexts?.trace &&
                  r.contexts &&
                  ((r.contexts.trace = e.contexts.trace),
                  e.contexts.trace.data &&
                    (r.contexts.trace.data = l.normalize(
                      e.contexts.trace.data,
                      t,
                      n,
                    ))),
                e.spans &&
                  (r.spans = e.spans.map((e) => ({
                    ...e,
                    ...(e.data && {
                      data: l.normalize(e.data, t, n),
                    }),
                  }))),
                e.contexts?.flags &&
                  r.contexts &&
                  (r.contexts.flags = l.normalize(e.contexts.flags, 3, n)),
                r
              );
            })(e, u, y)
          : e
      ),
    );
  });
