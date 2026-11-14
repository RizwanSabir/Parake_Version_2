// vendor/other/module-39629.js — webpack module 39629
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(47702 /* vendor/other/module-47702 */),
  i = n(92202 /* vendor/other/module-92202 */),
  s = n(96137 /* vendor/other/module-96137 */),
  a = n(88516 /* vendor/other/module-88516 */),
  c = n(66774 /* vendor/other/module-66774 */),
  u = n(14640 /* vendor/other/module-14640 */),
  l = n(15280 /* vendor/other/module-15280 */),
  d = n(75228 /* vendor/other/module-75228 */),
  p = n(89078 /* vendor/other/module-89078 */);
class f extends o.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-koa", s.SDK_VERSION, e);
  }
  init() {
    return new o.InstrumentationNodeModuleDefinition(
      "koa",
      [">=2.0.0 <4"],
      (e) => {
        const t = "Module" === e[Symbol.toStringTag] ? e.default : e;
        return null == t
          ? t
          : (o.isWrapped(t.prototype.use) && this._unwrap(t.prototype, "use"),
            this._wrap(t.prototype, "use", this._getKoaUsePatch.bind(this)),
            e);
      },
      (e) => {
        const t = "Module" === e[Symbol.toStringTag] ? e.default : e;
        t && o.isWrapped(t.prototype.use) && this._unwrap(t.prototype, "use");
      },
    );
  }
  _getKoaUsePatch(e) {
    const t = this._patchRouterDispatch.bind(this),
      n = this._patchLayer.bind(this);
    return function (r) {
      const o = r.router ? t(r) : n(r, !1);
      return e.apply(this, [o]);
    };
  }
  _patchRouterDispatch(e) {
    const t = e.router,
      n = t?.stack ?? [];
    for (const e of n) {
      const t = e.path,
        n = e.stack;
      for (let e = 0; e < n.length; e++) {
        const r = n[e];
        n[e] = this._patchLayer(r, !0, t);
      }
    }
    return e;
  }
  _patchLayer(e, t, n) {
    const o = t ? i.KoaLayerType.ROUTER : i.KoaLayerType.MIDDLEWARE;
    return !0 === e[p.kLayerPatched] ||
      c.isLayerIgnored(o, this.getConfig()) ||
      "GeneratorFunction" === e.constructor.name ||
      "AsyncGeneratorFunction" === e.constructor.name
      ? e
      : ((e[p.kLayerPatched] = !0),
        (i, p) => {
          if (void 0 === r.trace.getSpan(r.context.active())) return e(i, p);
          const f = c.getMiddlewareMetadata(i, e, t, n);
          i._matchedRoute &&
            u.setHttpServerSpanRouteAttribute(i._matchedRoute.toString());
          const h = f.attributes[d.AttributeNames.KOA_NAME],
            g = "string" == typeof h ? h || "< unknown >" : f.name;
          return s.startSpan(
            {
              name: g,
              op: `${o}.koa`,
              attributes: {
                ...f.attributes,
                [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.koa",
              },
            },
            () => {
              const t = f.attributes[a.HTTP_ROUTE];
              if (s.getIsolationScope() === s.getDefaultIsolationScope())
                l.DEBUG_BUILD &&
                  s.debug.warn(
                    "Isolation scope is default isolation scope - skipping setting transactionName",
                  );
              else if (t) {
                const e = i.request?.method?.toUpperCase() || "GET";
                s.getIsolationScope().setTransactionName(`${e} ${t}`);
              }
              return e(i, p);
            },
          );
        });
  }
}
t.KoaInstrumentation = f;
