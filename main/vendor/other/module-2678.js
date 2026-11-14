// vendor/other/module-2678.js — webpack module 2678
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(47702 /* vendor/other/module-47702 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(96137 /* vendor/other/module-96137 */),
  a = n(14640 /* vendor/other/module-14640 */),
  c = n(49461 /* vendor/other/module-49461 */),
  u = n(19257 /* vendor/other/module-19257 */),
  l = "anonymous",
  d = new Set([
    "onTimeout",
    "onRequest",
    "preParsing",
    "preValidation",
    "preSerialization",
    "preHandler",
    "onSend",
    "onResponse",
    "onError",
  ]);
class p extends o.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-fastify-v3", s.SDK_VERSION, e);
  }
  init() {
    return [
      new o.InstrumentationNodeModuleDefinition(
        "fastify",
        [">=3.0.0 <3.21.0"],
        (e) => this._patchConstructor(e),
      ),
    ];
  }
  _hookOnRequest() {
    const e = this;
    return function (t, n, r) {
      if (!e.isEnabled()) return r();
      e._wrap(n, "send", e._patchSend());
      const o = t,
        i = o.routeOptions ? o.routeOptions.url : t.routerPath;
      i && a.setHttpServerSpanRouteAttribute(i);
      const c = t.method || "GET";
      s.getIsolationScope().setTransactionName(`${c} ${i}`), r();
    };
  }
  _wrapHandler(e, t, n, o) {
    const i = this;
    return (
      this._diag.debug("Patching fastify route.handler function"),
      function (...s) {
        if (!i.isEnabled()) return n.apply(this, s);
        const a = n.name || e || l,
          d = `${c.FastifyNames.MIDDLEWARE} - ${a}`,
          p = s[1],
          f = u.startSpan(p, i.tracer, d, {
            [c.AttributeNames.FASTIFY_TYPE]: c.FastifyTypes.MIDDLEWARE,
            [c.AttributeNames.PLUGIN_NAME]: e,
            [c.AttributeNames.HOOK_NAME]: t,
          }),
          h = o && s[s.length - 1];
        return (
          h &&
            (s[s.length - 1] = function (...e) {
              u.endSpan(p), h.apply(this, e);
            }),
          r.context.with(r.trace.setSpan(r.context.active(), f), () =>
            u.safeExecuteInTheMiddleMaybePromise(
              () => n.apply(this, s),
              (e) => {
                e instanceof Error &&
                  (f.setStatus({
                    code: r.SpanStatusCode.ERROR,
                    message: e.message,
                  }),
                  f.recordException(e)),
                  o || u.endSpan(p);
              },
            ),
          )
        );
      }
    );
  }
  _wrapAddHook() {
    const e = this;
    return (
      this._diag.debug("Patching fastify server.addHook function"),
      function (t) {
        return function (...n) {
          const r = n[0],
            o = n[1],
            i = this.pluginName;
          if (!d.has(r)) return t.apply(this, n);
          const s =
            "function" == typeof n[n.length - 1] &&
            "AsyncFunction" !== o.constructor.name;
          return t.apply(this, [r, e._wrapHandler(i, r, o, s)]);
        };
      }
    );
  }
  _patchConstructor(e) {
    const t = this;
    function n(...n) {
      const r = e.fastify.apply(this, n);
      return (
        r.addHook("onRequest", t._hookOnRequest()),
        r.addHook("preHandler", t._hookPreHandler()),
        (function () {
          const e = s.getClient();
          e &&
            e.on("spanStart", (e) => {
              f(e);
            });
        })(),
        t._wrap(r, "addHook", t._wrapAddHook()),
        r
      );
    }
    return (
      void 0 !== e.errorCodes && (n.errorCodes = e.errorCodes),
      (n.fastify = n),
      (n.default = n),
      n
    );
  }
  _patchSend() {
    const e = this;
    return (
      this._diag.debug("Patching fastify reply.send function"),
      function (t) {
        return function (...n) {
          const r = n[0];
          return e.isEnabled()
            ? o.safeExecuteInTheMiddle(
                () => t.apply(this, n),
                (e) => {
                  !e && r instanceof Error && (e = r), u.endSpan(this, e);
                },
              )
            : t.apply(this, n);
        };
      }
    );
  }
  _hookPreHandler() {
    const e = this;
    return (
      this._diag.debug("Patching fastify preHandler function"),
      function (t, n, s) {
        if (!e.isEnabled()) return s();
        const a = t,
          d = a.routeOptions?.handler || a.context?.handler,
          p = d?.name.startsWith("bound ") ? d.name.substring(6) : d?.name,
          h = `${c.FastifyNames.REQUEST_HANDLER} - ${p || this.pluginName || l}`,
          g = {
            [c.AttributeNames.PLUGIN_NAME]: this.pluginName,
            [c.AttributeNames.FASTIFY_TYPE]: c.FastifyTypes.REQUEST_HANDLER,
            [i.HTTP_ROUTE]: a.routeOptions ? a.routeOptions.url : t.routerPath,
          };
        p && (g[c.AttributeNames.FASTIFY_NAME] = p);
        const m = u.startSpan(n, e.tracer, h, g);
        f(m);
        const { requestHook: _ } = e.getConfig();
        return (
          _ &&
            o.safeExecuteInTheMiddle(
              () => _(m, { request: t }),
              (t) => {
                t && e._diag.error("request hook failed", t);
              },
              !0,
            ),
          r.context.with(r.trace.setSpan(r.context.active(), m), () => {
            s();
          })
        );
      }
    );
  }
}
function f(e) {
  const t = s.spanToJSON(e).data,
    n = t["fastify.type"];
  if (t[s.SEMANTIC_ATTRIBUTE_SENTRY_OP] || !n) return;
  e.setAttributes({
    [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.fastify",
    [s.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${n}.fastify`,
  });
  const r = t["fastify.name"] || t["plugin.name"] || t["hook.name"];
  if ("string" == typeof r) {
    const t = r.replace(/^fastify -> /, "").replace(/^@fastify\/otel -> /, "");
    e.updateName(t);
  }
}
t.FastifyInstrumentationV3 = p;
