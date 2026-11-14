// vendor/other/module-77551.js — webpack module 77551
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = n(87112 /* vendor/other/module-87112 */),
  u = "express.name",
  l = "express.type",
  d = () => {};
let p = !1;
function f(e) {
  const t = e.self?.stack;
  if (!Array.isArray(t)) return;
  const n = t[t.length - 1];
  n && c.setLayerRegisteredPath(n, c.getLayerPath(e.arguments ?? []));
}
function h(e) {
  if (!e._sentryStoredLayer) return;
  e._sentryStoredLayer = !1;
  const t = e.arguments?.[0];
  t && c.popLayerPath(t);
}
function g(e, t) {
  const n = e.self,
    s = e.arguments;
  if (!n || !Array.isArray(s)) return;
  if (4 === n.handle?.length) return;
  if (n.method && !n.route) return;
  const a = s[0],
    d = s[1];
  if (!a) return;
  if (!o.getActiveSpan()) return;
  const p = (function (e) {
      return "router" === e.name
        ? "router"
        : "bound dispatch" === e.name || "handle" === e.name
          ? "request_handler"
          : "middleware";
    })(n),
    f = c.getLayerRegisteredPath(n);
  null != f && (c.pushLayerPath(a, f), (e._sentryStoredLayer = !0));
  const h = "request_handler" === p ? c.getConstructedRoute(a) : void 0,
    g =
      "request_handler" === p && null != h
        ? c.getActualMatchedRoute(a, h)
        : void 0,
    m =
      "request_handler" === p
        ? h || "request handler"
        : "router" === p
          ? (n.path ?? "/")
          : (n.name ?? "<anonymous>");
  if (
    (g &&
      (function (e) {
        const t = o.getActiveSpan(),
          n = t && o.getRootSpan(t);
        n &&
          "http.server" ===
            o.spanToJSON(n).data[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
          n.setAttribute(r.HTTP_ROUTE, e);
      })(g),
    "request_handler" === p && h)
  ) {
    const e = o.getIsolationScope();
    if (e !== o.getDefaultIsolationScope()) {
      const t = "string" == typeof a.method ? a.method.toUpperCase() : "GET";
      e.setTransactionName(`${t} ${h}`);
    } else
      i.DEBUG_BUILD &&
        o.debug.warn(
          "[orchestrion:express] Isolation scope is still default isolation scope - skipping transaction name",
        );
  }
  if (
    (function (e, t, n) {
      const { ignoreLayers: r, ignoreLayersType: i } = n;
      if (Array.isArray(i) && i.includes(t)) return !0;
      if (!Array.isArray(r)) return !1;
      try {
        return o.stringMatchesSomePattern(e, r, !0);
      } catch {
        return !1;
      }
    })(m, p, t)
  )
    return;
  const _ = o.startInactiveSpan({
    name: m,
    attributes: {
      [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.express",
      [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${p}.express`,
      [u]: m,
      [l]: p,
      ...(g ? { [r.HTTP_ROUTE]: g } : {}),
    },
  });
  if (d && "function" == typeof d.once) {
    const t = () => {
      _.end();
    };
    d.once("finish", t),
      (e._sentryCleanup = () => d.removeListener("finish", t));
  }
  return _;
}
t.instrumentExpress = function (e, t) {
  if (!p) {
    p = !0;
    for (const e of [s.CHANNELS.EXPRESS_REGISTER, s.CHANNELS.ROUTER_REGISTER])
      t(e).subscribe({
        start: d,
        asyncStart: d,
        asyncEnd: d,
        error: d,
        end: f,
      });
    for (const n of [s.CHANNELS.EXPRESS_HANDLE, s.CHANNELS.ROUTER_HANDLE]) {
      i.DEBUG_BUILD &&
        o.debug.log(`[orchestrion:express] subscribing to channel "${n}"`);
      const r = t(n);
      a.bindTracingChannelToSpan(r, (t) => g(t, e), {
        beforeSpanEnd(e, t) {
          t._sentryCleanup?.();
        },
      }),
        r.subscribe({
          start: d,
          asyncEnd: d,
          end: d,
          error: d,
          asyncStart: h,
        });
    }
  }
};
