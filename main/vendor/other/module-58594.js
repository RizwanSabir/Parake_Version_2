// vendor/other/module-58594.js — webpack module 58594
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.scopeContextsToSpanAttributes = function (e) {
    const t = {},
      { response: n, profile: r, cloud_resource: o, culture: i, state: s } = e;
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
      s?.state &&
        "string" == typeof s.state.type &&
        (t["state.type"] = s.state.type);
    const a = e.angular;
    if (a) {
      const e = a.version;
      ("string" != typeof e && "number" != typeof e) ||
        (t["angular.version"] = e);
    }
    const c = e.react;
    if (c) {
      const e = c.version;
      ("string" != typeof e && "number" != typeof e) ||
        (t["react.version"] = e);
    }
    return t;
  });
