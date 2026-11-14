// vendor/other/module-33767.js — webpack module 33767
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = "@sentry/instrumentation-fastify",
  c = "auto.http.otel.fastify",
  u = "request_handler.fastify",
  l = [
    "onRequest",
    "preParsing",
    "preValidation",
    "preHandler",
    "preSerialization",
    "onSend",
    "onResponse",
    "onError",
  ],
  d = "hook.name",
  p = "fastify.type",
  f = "hook.callback.name",
  h = "fastify.root",
  g = "hook",
  m = "request-handler",
  _ = "anonymous",
  S = Symbol("sentry fastify request span"),
  E = Symbol("sentry fastify addHook original"),
  y = Symbol("sentry fastify setNotFoundHandler original");
function T(e) {
  return e.routeOptions?.url ?? e.routerPath;
}
function b(e) {
  return e.routeOptions?.config ?? e.routeConfig;
}
function I(e) {
  return (
    i.isObjectLike(e) &&
    !!e.method &&
    !!e.url &&
    (!!e.routeOptions || "routerPath" in e)
  );
}
function v(e, t, n) {
  e.decorate(E, e.addHook),
    e.decorate(y, e.setNotFoundHandler),
    e.decorateRequest("opentelemetry", function () {
      return { span: this[S] };
    }),
    e.decorateRequest(S, null),
    e.addHook("onRoute", N),
    e.addHook("onRequest", O),
    e.addHook("onResponse", w),
    (e.addHook = L),
    (e.setNotFoundHandler = x),
    n();
}
const A = v;
function N(e) {
  if (!1 !== e.config?.otel) {
    for (const t of l) {
      const n = e[t];
      "function" == typeof n
        ? (e[t] = M(n, t, R(this.pluginName, t, n, e.url)))
        : Array.isArray(n) &&
          (e[t] = n.map((n) => M(n, t, R(this.pluginName, t, n, e.url))));
    }
    (e.onSend = C(e.onSend, k)),
      (e.onError = C(e.onError, P)),
      (e.handler = M(e.handler, "handler", {
        [d]: `${this.pluginName} - route-handler`,
        [p]: m,
        [o.HTTP_ROUTE]: e.url,
        [f]: e.handler.name.length > 0 ? e.handler.name : _,
      }));
  }
}
function R(e, t, n, r) {
  return {
    [d]: `${e} - route -> ${t}`,
    [p]: "route-hook",
    [o.HTTP_ROUTE]: r,
    [f]: n.name?.length > 0 ? n.name : _,
  };
}
function C(e, t) {
  return null == e ? t : Array.isArray(e) ? [...e, t] : [e, t];
}
function O(e, t, n) {
  if (!1 === b(e)?.otel) return n();
  const r = {
      [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c,
      [h]: a,
      [o.HTTP_REQUEST_METHOD]: e.method,
      [o.URL_PATH]: e.url,
    },
    s = T(e);
  if (null != s) {
    r[o.HTTP_ROUTE] = s;
    const e = i.getActiveSpan(),
      t = e && i.getRootSpan(e);
    t &&
      "http.server" === i.spanToJSON(t).data[i.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
      t.setAttribute(o.HTTP_ROUTE, s);
  }
  const l = i.startInactiveSpan({
    name: "request",
    op: u,
    attributes: r,
  });
  (e[S] = l),
    i.withActiveSpan(l, () => {
      n();
    });
}
function w(e, t, n) {
  const r = e[S];
  null != r &&
    (r.setAttributes({ [o.HTTP_RESPONSE_STATUS_CODE]: t.statusCode }), r.end()),
    (e[S] = null),
    n();
}
function k(e, t, n, r) {
  const s = e[S];
  null != s &&
    (t.statusCode >= 500 && s.setStatus({ code: i.SPAN_STATUS_ERROR }),
    s.setAttributes({ [o.HTTP_RESPONSE_STATUS_CODE]: t.statusCode }),
    s.end()),
    (e[S] = null),
    r(null, n);
}
function P(e, t, n, r) {
  const o = e[S];
  null != o && o.setStatus({ code: i.SPAN_STATUS_ERROR, message: n.message }),
    r();
}
function L(e, t) {
  const n = this[E];
  return l.includes(e)
    ? n.call(
        this,
        e,
        M(t, e, {
          [d]: `${this.pluginName} - ${e}`,
          [p]: g,
          [f]: t.name?.length > 0 ? t.name : _,
        }),
      )
    : n.call(this, e, t);
}
function x(e, t) {
  const n = this[y];
  "function" != typeof e
    ? (null != e.preValidation &&
        (e.preValidation = M(
          e.preValidation,
          "notFoundHandler - preValidation",
          {
            [d]: `${this.pluginName} - not-found-handler - preValidation`,
            [p]: g,
            [f]: e.preValidation.name?.length > 0 ? e.preValidation.name : _,
          },
        )),
      null != e.preHandler &&
        (e.preHandler = M(e.preHandler, "notFoundHandler - preHandler", {
          [d]: `${this.pluginName} - not-found-handler - preHandler`,
          [p]: g,
          [f]: e.preHandler.name?.length > 0 ? e.preHandler.name : _,
        })),
      null != t
        ? n.call(
            this,
            e,
            M(t, "notFoundHandler", {
              [d]: `${this.pluginName} - not-found-handler`,
              [p]: g,
              [f]: t.name?.length > 0 ? t.name : _,
            }),
          )
        : n.call(this, e))
    : n.call(
        this,
        M(e, "notFoundHandler", {
          [d]: `${this.pluginName} - not-found-handler`,
          [p]: g,
          [f]: e.name?.length > 0 ? e.name : _,
        }),
      );
}
function M(e, t, n = {}) {
  return function (...r) {
    const o = (function (e) {
      for (const t of e) if (I(t)) return t;
      return null;
    })(r);
    if (null === o || !1 === b(o)?.otel) return e.call(this, ...r);
    const s = o[S] ?? void 0,
      a = e.name?.length > 0 ? e.name : (this.pluginName ?? _),
      l = n[p],
      f = l === g ? "hook.fastify" : l === m ? u : void 0,
      h = f
        ? (function (e = "") {
            return e
              .replace(/^fastify -> /, "")
              .replace(/^@fastify\/otel -> /, "")
              .replace(/^@sentry\/instrumentation-fastify -> /, "");
          })(n[d])
        : `${t} - ${a}`;
    return i.startSpan(
      {
        name: h,
        op: f,
        attributes: { ...n, [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c },
        parentSpan: s,
      },
      () => e.call(this, ...r),
    );
  };
}
(A[Symbol.for("skip-override")] = !0),
  (A[Symbol.for("fastify.display-name")] = a),
  (A[Symbol.for("plugin-meta")] = {
    fastify: ">=3.21.0 <6",
    name: a,
  });
let D = !1;
const U = Object.assign(
  function () {
    D ||
      ((D = !0),
      r.subscribe("fastify.initialization", (e) => {
        const t = e.fastify;
        t?.register(v).after((e) => {
          e
            ? s.DEBUG_BUILD &&
              i.debug.error("Failed to setup Fastify instrumentation", e)
            : t &&
              t.addHook("onRequest", async (e, t) => {
                const n = T(e),
                  r = e.method || "GET";
                i.getIsolationScope().setTransactionName(`${r} ${n}`);
              });
        });
      }));
  },
  { id: "Fastify.v5" },
);
t.instrumentFastify = U;
