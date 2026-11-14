// vendor/other/module-37990.js — webpack module 37990
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/other/module-58637 */),
  o = n(15946 /* vendor/other/module-15946 */),
  i = n(75703 /* vendor/other/module-75703 */),
  s = n(31079 /* vendor/other/module-31079 */),
  a = n(68020 /* vendor/other/module-68020 */),
  c = n(63676 /* vendor/other/module-63676 */),
  u = n(47981 /* vendor/other/module-47981 */),
  l = n(21042 /* vendor/other/module-21042 */);
let d = !1;
function p(e) {
  return function (t, n, r, i) {
    if (
      (u.setSDKProcessingMetadata(n),
      (e?.shouldHandleError || s.defaultShouldHandleError)(t))
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
      const { express: t, ...s } = e;
      (o = t),
        (n = () => s),
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
    const u = l.getDefaultExport(o),
      p = s.isExpressWithRouterPrototype(u)
        ? u.Router.prototype
        : s.isExpressWithoutRouterPrototype(u)
          ? u.Router
          : void 0;
    if (!p)
      throw new TypeError("no valid Express route function to instrument");
    const f = p.route;
    try {
      a.wrapMethod(p, "route", function (...e) {
        const t = f.apply(this, e),
          r = this.stack[this.stack.length - 1];
        return c.patchLayer(n, r, s.getLayerPath(e)), t;
      });
    } catch (e) {
      i.DEBUG_BUILD &&
        r.debug.error("Failed to patch express route method:", e);
    }
    const h = p.use;
    try {
      a.wrapMethod(p, "use", function (...e) {
        const t = h.apply(this, e),
          r = this.stack[this.stack.length - 1];
        return r ? (c.patchLayer(n, r, s.getLayerPath(e)), t) : t;
      });
    } catch (e) {
      i.DEBUG_BUILD && r.debug.error("Failed to patch express use method:", e);
    }
    const { application: g } = u,
      m = g.use;
    try {
      a.wrapMethod(g, "use", function (...e) {
        const t = m.apply(this, e),
          r = s.isExpressWithRouterPrototype(u) ? this.router : this._router;
        if (r) {
          const t = r.stack[r.stack.length - 1];
          t && c.patchLayer(n, t, s.getLayerPath(e));
        }
        return t;
      });
    } catch (e) {
      i.DEBUG_BUILD &&
        r.debug.error("Failed to patch express application.use method:", e);
    }
    return u;
  }),
  (t.setupExpressErrorHandler = function (e, t) {
    e.use(function (e, t, n) {
      u.setSDKProcessingMetadata(e), n();
    }),
      e.use(p(t));
  });
