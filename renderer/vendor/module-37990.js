// vendor/module-37990.js — webpack module 37990
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/module-58637 */),
  o = n(15946 /* vendor/module-15946 */),
  i = n(75703 /* vendor/module-75703 */),
  a = n(31079 /* vendor/module-31079 */),
  s = n(68020 /* vendor/module-68020 */),
  l = n(63676 /* vendor/module-63676 */),
  c = n(47981 /* vendor/module-47981 */),
  u = n(21042 /* vendor/module-21042 */);
let d = !1;
function p(e) {
  return function (t, n, r, i) {
    if (
      (c.setSDKProcessingMetadata(n),
      (e?.shouldHandleError || a.defaultShouldHandleError)(t))
    ) {
      const e = o.captureException(t, {
        mechanism: { type: "auto.middleware.express", handled: !1 },
      });
      r.sentry = e;
    }
    i(t);
  };
}
(t.expressErrorHandler = p),
  (t.patchExpressModule = function (e, t) {
    let n, o;
    if (!t && e.express) {
      const { express: t, ...a } = e;
      (o = t),
        (n = () => a),
        d ||
          ((d = !0),
          i.DEBUG_BUILD &&
            r.debug.warn(
              "[Express] `patchExpressModule(options)` is deprecated. Use `patchExpressModule(moduleExports, getOptions)` instead.",
            ));
    } else {
      if ("function" != typeof t)
        throw new TypeError(
          "`patchExpressModule(moduleExports, getOptions)` requires a `getOptions` callback",
        );
      (n = t), (o = e);
    }
    const c = u.getDefaultExport(o),
      p = a.isExpressWithRouterPrototype(c)
        ? c.Router.prototype
        : a.isExpressWithoutRouterPrototype(c)
          ? c.Router
          : void 0;
    if (!p)
      throw new TypeError("no valid Express route function to instrument");
    const f = p.route;
    try {
      s.wrapMethod(p, "route", function (...e) {
        const t = f.apply(this, e),
          r = this.stack[this.stack.length - 1];
        return l.patchLayer(n, r, a.getLayerPath(e)), t;
      });
    } catch (e) {
      i.DEBUG_BUILD &&
        r.debug.error("Failed to patch express route method:", e);
    }
    const h = p.use;
    try {
      s.wrapMethod(p, "use", function (...e) {
        const t = h.apply(this, e),
          r = this.stack[this.stack.length - 1];
        return r ? (l.patchLayer(n, r, a.getLayerPath(e)), t) : t;
      });
    } catch (e) {
      i.DEBUG_BUILD && r.debug.error("Failed to patch express use method:", e);
    }
    const { application: m } = c,
      g = m.use;
    try {
      s.wrapMethod(m, "use", function (...e) {
        const t = g.apply(this, e),
          r = a.isExpressWithRouterPrototype(c) ? this.router : this._router;
        if (r) {
          const t = r.stack[r.stack.length - 1];
          t && l.patchLayer(n, t, a.getLayerPath(e));
        }
        return t;
      });
    } catch (e) {
      i.DEBUG_BUILD &&
        r.debug.error("Failed to patch express application.use method:", e);
    }
    return c;
  }),
  (t.setupExpressErrorHandler = function (e, t) {
    e.use(function (e, t, n) {
      c.setSDKProcessingMetadata(e), n();
    }),
      e.use(p(t));
  });
