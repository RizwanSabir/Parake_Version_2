// vendor/other/module-54274.js — webpack module 54274
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(14640 /* vendor/other/module-14640 */),
  i = n(47702 /* vendor/other/module-47702 */),
  s = n(96137 /* vendor/other/module-96137 */),
  a = n(97169 /* vendor/other/module-97169 */),
  c = n(66591 /* vendor/other/module-66591 */),
  u = n(1389 /* vendor/other/module-1389 */);
class l extends i.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-hapi", s.SDK_VERSION, e);
  }
  init() {
    return new i.InstrumentationNodeModuleDefinition(
      c.HapiComponentName,
      [">=17.0.0 <22"],
      (e) => {
        const t = "Module" === e[Symbol.toStringTag] ? e.default : e;
        return (
          i.isWrapped(t.server) ||
            this._wrap(t, "server", this._getServerPatch.bind(this)),
          i.isWrapped(t.Server) ||
            this._wrap(t, "Server", this._getServerPatch.bind(this)),
          t
        );
      },
      (e) => {
        const t = "Module" === e[Symbol.toStringTag] ? e.default : e;
        this._massUnwrap([t], ["server", "Server"]);
      },
    );
  }
  _getServerPatch(e) {
    const t = this,
      n = this;
    return function (r) {
      const o = e.apply(this, [r]);
      return (
        n._wrap(o, "route", (e) => t._getServerRoutePatch.bind(t)(e)),
        n._wrap(o, "ext", (e) => t._getServerExtPatch.bind(t)(e)),
        n._wrap(o, "register", t._getServerRegisterPatch.bind(t)),
        o
      );
    };
  }
  _getServerRegisterPatch(e) {
    const t = this;
    return function (n, r) {
      if (Array.isArray(n))
        for (const e of n) {
          const n = u.getPluginFromInput(e);
          t._wrapRegisterHandler(n);
        }
      else {
        const e = u.getPluginFromInput(n);
        t._wrapRegisterHandler(e);
      }
      return e.apply(this, [n, r]);
    };
  }
  _getServerExtPatch(e, t) {
    const n = this;
    return function (...r) {
      if (Array.isArray(r[0])) {
        const o = r[0];
        for (let e = 0; e < o.length; e++) {
          const r = o[e];
          if (u.isLifecycleExtType(r.type)) {
            const i = r,
              s = n._wrapExtMethods(i.method, r.type, t);
            (i.method = s), (o[e] = i);
          }
        }
        return e.apply(this, r);
      }
      if (u.isDirectExtInput(r)) {
        const o = r,
          i = o[1],
          s = n._wrapExtMethods(i, o[0], t);
        return e.apply(this, [o[0], s, o[2]]);
      }
      if (u.isLifecycleExtEventObj(r[0])) {
        const o = r[0],
          i = n._wrapExtMethods(o.method, o.type, t);
        return (o.method = i), e.call(this, o);
      }
      return e.apply(this, r);
    };
  }
  _getServerRoutePatch(e, t) {
    const n = this;
    return function (r) {
      if (Array.isArray(r))
        for (let e = 0; e < r.length; e++) {
          const o = n._wrapRouteHandler.call(n, r[e], t);
          r[e] = o;
        }
      else r = n._wrapRouteHandler.call(n, r, t);
      return e.apply(this, [r]);
    };
  }
  _wrapRegisterHandler(e) {
    const t = this,
      n = u.getPluginName(e),
      r = e.register,
      o = this;
    e.register = function (e, i) {
      return (
        o._wrap(e, "route", (e) => t._getServerRoutePatch.bind(t)(e, n)),
        o._wrap(e, "ext", (e) => t._getServerExtPatch.bind(t)(e, n)),
        r.call(this, e, i)
      );
    };
  }
  _wrapExtMethods(e, t, n) {
    const o = this;
    if (e instanceof Array) {
      for (let n = 0; n < e.length; n++) e[n] = o._wrapExtMethods(e[n], t);
      return e;
    }
    return u.isPatchableExtMethod(e)
      ? !0 === e[c.handlerPatched]
        ? e
        : ((e[c.handlerPatched] = !0),
          function (...o) {
            if (void 0 === r.trace.getSpan(r.context.active()))
              return e.apply(this, o);
            const i = u.getExtMetadata(t, n, e.name);
            return s.startSpan(
              {
                name: i.name,
                op: `${i.attributes[a.AttributeNames.HAPI_TYPE]}.hapi`,
                attributes: {
                  ...i.attributes,
                  [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hapi",
                },
              },
              () => e.apply(void 0, o),
            );
          })
      : e;
  }
  _wrapRouteHandler(e, t) {
    if (!0 === e[c.handlerPatched]) return e;
    e[c.handlerPatched] = !0;
    const n = (n) =>
      function (...i) {
        if (void 0 === r.trace.getSpan(r.context.active()))
          return n.call(this, ...i);
        o.setHttpServerSpanRouteAttribute(e.path);
        const c = u.getRouteMetadata(e, t);
        return s.startSpan(
          {
            name: c.name,
            op: `${c.attributes[a.AttributeNames.HAPI_TYPE]}.hapi`,
            attributes: {
              ...c.attributes,
              [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.hapi",
            },
          },
          () => n.call(this, ...i),
        );
      };
    if ("function" == typeof e.handler) e.handler = n(e.handler);
    else if ("function" == typeof e.options) {
      const t = e.options;
      e.options = function (e) {
        const r = t(e);
        return "function" == typeof r.handler && (r.handler = n(r.handler)), r;
      };
    } else
      "function" == typeof e.options?.handler &&
        (e.options.handler = n(e.options.handler));
    return e;
  }
}
t.HapiInstrumentation = l;
