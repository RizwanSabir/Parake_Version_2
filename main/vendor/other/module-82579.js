// vendor/other/module-82579.js — webpack module 82579
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = [];
function a(e, t, n) {
  if (n[t.name])
    o.DEBUG_BUILD &&
      i.debug.log(
        `Integration skipped because it was already installed: ${t.name}`,
      );
  else {
    if (
      ((n[t.name] = t),
      s.includes(t.name) ||
        "function" != typeof t.setupOnce ||
        (t.setupOnce(), s.push(t.name)),
      t.setup && "function" == typeof t.setup && t.setup(e),
      "function" == typeof t.preprocessEvent)
    ) {
      const n = t.preprocessEvent.bind(t);
      e.on("preprocessEvent", (t, r) => n(t, r, e));
    }
    if ("function" == typeof t.processEvent) {
      const n = t.processEvent.bind(t),
        r = Object.assign((t, r) => n(t, r, e), { id: t.name });
      e.addEventProcessor(r);
    }
    ["processSpan", "processSegmentSpan"].forEach((n) => {
      const r = t[n];
      "function" == typeof r && e.on(n, (n) => r.call(t, n, e));
    }),
      o.DEBUG_BUILD && i.debug.log(`Integration installed: ${t.name}`);
  }
}
(t.addIntegration = function (e) {
  const t = r.getClient();
  t
    ? t.addIntegration(e)
    : o.DEBUG_BUILD &&
      i.debug.warn(
        `Cannot add integration "${e.name}" because no SDK Client is available.`,
      );
}),
  (t.afterSetupIntegrations = function (e, t) {
    for (const n of t) n?.afterAllSetup && n.afterAllSetup(e);
  }),
  (t.defineIntegration = function (e) {
    return e;
  }),
  (t.extendIntegration = function (e, t) {
    const n = { ...e, ...t };
    for (const r in t) {
      const o = e[r],
        i = t[r];
      if ("function" == typeof o && "function" == typeof i) {
        const e = new Proxy(o, {
          apply: (e, t, n) => (Reflect.apply(e, t, n), Reflect.apply(i, t, n)),
        });
        n[r] = e;
      }
    }
    return n;
  }),
  (t.getIntegrationsToSetup = function (e) {
    const t = e.defaultIntegrations || [],
      n = e.integrations;
    let r;
    if (
      (t.forEach((e) => {
        e.isDefaultInstance = !0;
      }),
      Array.isArray(n))
    )
      r = [...t, ...n];
    else if ("function" == typeof n) {
      const e = n(t);
      r = Array.isArray(e) ? e : [e];
    } else r = t;
    return (function (e) {
      const t = {};
      return (
        e.forEach((e) => {
          const { name: n } = e,
            r = t[n];
          (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
        }),
        Object.values(t)
      );
    })(r);
  }),
  (t.installedIntegrations = s),
  (t.setupIntegration = a),
  (t.setupIntegrations = function (e, t) {
    const n = {};
    return (
      t.forEach((t) => {
        t?.beforeSetup && t.beforeSetup(e);
      }),
      t.forEach((t) => {
        t && a(e, t, n);
      }),
      n
    );
  });
