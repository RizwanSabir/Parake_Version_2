// vendor/other/module-95418.js — webpack module 95418
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(56080 /* vendor/other/module-56080 */),
  o = n(42408 /* vendor/other/module-42408 */),
  i = n(75457 /* vendor/other/module-75457 */),
  s = n(26895 /* vendor/other/module-26895 */),
  a = n(82615 /* vendor/other/module-82615 */),
  c = n(8888 /* vendor/other/module-8888 */),
  u = n(75715 /* vendor/other/module-75715 */),
  l = n(75122 /* vendor/other/module-75122 */),
  d = n(35959 /* vendor/other/module-35959 */),
  p = n(19410 /* vendor/other/module-19410 */);
function f(e, t) {
  const { environment: n, release: o, dist: i, maxValueLength: s } = t;
  (e.environment = e.environment || n || r.DEFAULT_ENVIRONMENT),
    !e.release && o && (e.release = o),
    !e.dist && i && (e.dist = i);
  const a = e.request;
  a?.url && s && (a.url = l.truncate(a.url, s)),
    s &&
      e.exception?.values?.forEach((e) => {
        e.value && (e.value = l.truncate(e.value, s));
      });
}
function h(e, t) {
  const n = s.getFilenameToDebugIdMap(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function g(e) {
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
function m(e, t) {
  if (!t) return e;
  const n = e ? e.clone() : new i.Scope();
  return n.update(t), n;
}
const _ = [
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
  (t.applyDebugMeta = g),
  (t.parseEventHintOrCaptureContext = function (e) {
    if (e)
      return (function (e) {
        return e instanceof i.Scope || "function" == typeof e;
      })(e) ||
        (function (e) {
          return Object.keys(e).some((e) => _.includes(e));
        })(e)
        ? { captureContext: e }
        : e;
  }),
  (t.prepareEvent = function (e, t, n, r, i, s) {
    const { normalizeDepth: l = 3, normalizeMaxBreadth: _ = 1e3 } = e,
      S = {
        ...t,
        event_id: t.event_id || n.event_id || a.uuid4(),
        timestamp: t.timestamp || p.dateTimestampInSeconds(),
      },
      E = n.integrations || e.integrations.map((e) => e.name);
    f(S, e),
      (function (e, t) {
        t.length > 0 &&
          ((e.sdk = e.sdk || {}),
          (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
      })(S, E),
      i && i.emit("applyFrameMetadata", t),
      void 0 === t.type && h(S, e.stackParser);
    const y = m(r, n.captureContext);
    n.mechanism && a.addExceptionMechanism(S, n.mechanism);
    const T = i ? i.getEventProcessors() : [],
      b = u.getCombinedScopeData(s, y),
      I = [...(n.attachments || []), ...b.attachments];
    I.length && (n.attachments = I), u.applyScopeDataToEvent(S, b);
    const v = [...T, ...b.eventProcessors];
    return (
      n.data && !0 === n.data.__sentry__
        ? d.resolvedSyncPromise(S)
        : o.notifyEventProcessors(v, S, n)
    ).then(
      (e) => (
        e && g(e),
        "number" == typeof l && l > 0
          ? (function (e, t, n) {
              if (!e) return null;
              const r = {
                ...e,
                ...(e.breadcrumbs && {
                  breadcrumbs: e.breadcrumbs.map((e) => ({
                    ...e,
                    ...(e.data && {
                      data: c.normalize(e.data, t, n),
                    }),
                  })),
                }),
                ...(e.user && { user: c.normalize(e.user, t, n) }),
                ...(e.contexts && {
                  contexts: c.normalize(e.contexts, t, n),
                }),
                ...(e.extra && { extra: c.normalize(e.extra, t, n) }),
              };
              return (
                e.contexts?.trace &&
                  r.contexts &&
                  ((r.contexts.trace = e.contexts.trace),
                  e.contexts.trace.data &&
                    (r.contexts.trace.data = c.normalize(
                      e.contexts.trace.data,
                      t,
                      n,
                    ))),
                e.spans &&
                  (r.spans = e.spans.map((e) => ({
                    ...e,
                    ...(e.data && {
                      data: c.normalize(e.data, t, n),
                    }),
                  }))),
                e.contexts?.flags &&
                  r.contexts &&
                  (r.contexts.flags = c.normalize(e.contexts.flags, 3, n)),
                r
              );
            })(e, l, _)
          : e
      ),
    );
  });
