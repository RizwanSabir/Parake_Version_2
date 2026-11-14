// vendor/module-58594.js — webpack module 58594
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.scopeContextsToSpanAttributes = function (e) {
    const t = {},
      { response: n, profile: r, cloud_resource: o, culture: i, state: a } = e;
    if (
      (n &&
        (null != n.status_code &&
          (t["http.response.status_code"] = n.status_code),
        null != n.body_size && (t["http.response.body.size"] = n.body_size)),
      r &&
        (r.profile_id && (t["sentry.profile_id"] = r.profile_id),
        r.profiler_id && (t["sentry.profiler_id"] = r.profiler_id)),
      o)
    )
      for (const [e, n] of Object.entries(o)) null != n && (t[e] = n);
    i &&
      (i.locale && (t["culture.locale"] = i.locale),
      i.timezone && (t["culture.timezone"] = i.timezone)),
      a?.state &&
        "string" == typeof a.state.type &&
        (t["state.type"] = a.state.type);
    const s = e.angular;
    if (s) {
      const e = s.version;
      ("string" != typeof e && "number" != typeof e) ||
        (t["angular.version"] = e);
    }
    const l = e.react;
    if (l) {
      const e = l.version;
      ("string" != typeof e && "number" != typeof e) ||
        (t["react.version"] = e);
    }
    return t;
  });
