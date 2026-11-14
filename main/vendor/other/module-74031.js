// vendor/other/module-74031.js — webpack module 74031
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(71376 /* vendor/other/module-71376 */),
  a = o.createGetModuleFromFilename(i.app.getAppPath());
(t.normaliseProfile = function (e, t) {
  for (const n of e.profile.frames)
    n.abs_path && (n.abs_path = r.normalizeUrlToBase(n.abs_path, t)),
      "filename" in n &&
        "string" == typeof n.filename &&
        (n.filename = r.normalizeUrlToBase(n.filename, t)),
      n.module && (n.module = a(n.abs_path));
}),
  (t.normalizePaths = function (e, t) {
    for (const n of e.exception?.values || [])
      for (const e of n.stacktrace?.frames || [])
        e.filename && (e.filename = r.normalizeUrlToBase(e.filename, t));
    for (const n of e.debug_meta?.images || [])
      "sourcemap" === n.type &&
        (n.code_file = r.normalizeUrlToBase(n.code_file, t));
    e.transaction && (e.transaction = r.normalizeUrlToBase(e.transaction, t));
    const { request: n = {} } = e;
    if (
      (n.url && (n.url = r.normalizeUrlToBase(n.url, t)),
      e.contexts?.feedback?.url &&
        "string" == typeof e.contexts.feedback.url &&
        (e.contexts.feedback.url = r.normalizeUrlToBase(
          e.contexts.feedback.url,
          t,
        )),
      e.spans)
    )
      for (const n of e.spans)
        n.description &&
          (n.description = r.normalizeUrlToBase(n.description, t));
    return e;
  }),
  (t.normalizeProfileChunkEnvelope = function (e, t, n) {
    const [o] = t,
      i = {
        ...o,
        sdk: {
          name: "sentry.javascript.electron",
          version: s.SDK_VERSION,
        },
      };
    let c = r.createEnvelope(i),
      u = !1;
    return (
      r.forEachEnvelopeItem(t, (t, o) => {
        if ("profile_chunk" === o) {
          u = !0;
          const [o, i] = t;
          (function (e, t, n) {
            n.release && (e.release = n.release),
              n.environment && (e.environment = n.environment);
            const o = e.profile;
            if (o?.frames)
              for (const e of o.frames)
                e.abs_path &&
                  (e.abs_path = r.normalizeUrlToBase(e.abs_path, t)),
                  e.filename &&
                    (e.filename = r.normalizeUrlToBase(e.filename, t)),
                  e.module && (e.module = a(e.abs_path));
          })(i, n, e),
            (c = r.addItemToEnvelope(c, [o, i]));
        }
      }),
      u ? c : t
    );
  }),
  (t.normalizeReplayEnvelope = function (e, t, n) {
    let o = r.createEnvelope(t[0]),
      i = !1;
    return (
      r.forEachEnvelopeItem(t, (t, s) => {
        if ("replay_event" === s) {
          i = !0;
          const [s, a] = t,
            c = r.getCurrentScope().getScopeData();
          (a.breadcrumbs = c.breadcrumbs),
            (a.tags = c.tags),
            (a.user = c.user),
            (a.environment = e.environment),
            Array.isArray(a.urls) &&
              (a.urls = a.urls.map((e) => r.normalizeUrlToBase(e, n))),
            a?.request?.url &&
              (a.request.url = r.normalizeUrlToBase(a.request.url, n)),
            (o = r.addItemToEnvelope(o, [s, a]));
        } else "replay_recording" === s && (o = r.addItemToEnvelope(o, t));
      }),
      i ? o : t
    );
  }),
  (t.normalizeSpanStreamingEnvelope = function (e, t, n) {
    const [o] = t,
      i = {
        ...o,
        sdk: {
          name: "sentry.javascript.electron",
          version: s.SDK_VERSION,
        },
      };
    let a,
      c = r.createEnvelope(i),
      u = !1;
    return (
      r.forEachEnvelopeItem(t, (e, t) => {
        if ("span" === t) {
          u = !0;
          const [t, o] = e;
          if (o?.items)
            for (const e of o.items)
              (e.name = r.normalizeUrlToBase(e.name, n)),
                e.attributes?.["sentry.segment.name"]?.value &&
                  (e.attributes["sentry.segment.name"].value =
                    r.normalizeUrlToBase(
                      e.attributes["sentry.segment.name"].value,
                      n,
                    )),
                e.is_segment && (a = e.attributes?.["sentry.origin"]?.value);
          c = r.addItemToEnvelope(c, [t, o]);
        }
      }),
      u ? [c, a] : [t, void 0]
    );
  });
