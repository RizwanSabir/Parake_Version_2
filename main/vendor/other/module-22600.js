// vendor/other/module-22600.js — webpack module 22600
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(34308 /* vendor/other/module-34308 */),
  s = (e) => "string" == typeof e && i.HapiLifecycleMethodNames.has(e),
  a = (e, t) => {
    const n = { [o.HTTP_ROUTE]: e.path, [o.HTTP_METHOD]: e.method };
    let r;
    return (
      t
        ? ((n[i.AttributeNames.HAPI_TYPE] = i.HapiLayerType.PLUGIN),
          (n[i.AttributeNames.PLUGIN_NAME] = t),
          (r = `${t}: route - ${e.path}`))
        : ((n[i.AttributeNames.HAPI_TYPE] = i.HapiLayerType.ROUTER),
          (r = `route - ${e.path}`)),
      { attributes: n, name: r }
    );
  },
  c = (e, t, n) => {
    let r = `ext - ${e}`;
    return (
      n && "method" !== n && (r = `ext - ${e} - ${n}`),
      t
        ? {
            attributes: {
              [i.AttributeNames.EXT_TYPE]: e,
              [i.AttributeNames.HAPI_TYPE]: i.HapiLayerType.EXT,
              [i.AttributeNames.PLUGIN_NAME]: t,
            },
            name: `${t}: ${r}`,
          }
        : {
            attributes: {
              [i.AttributeNames.EXT_TYPE]: e,
              [i.AttributeNames.HAPI_TYPE]: i.HapiLayerType.EXT,
            },
            name: r,
          }
    );
  };
function u(e, t) {
  return r.startSpan(
    {
      name: e.name,
      op: `${e.attributes[i.AttributeNames.HAPI_TYPE]}.hapi`,
      attributes: {
        ...e.attributes,
        [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.orchestrion.hapi",
      },
    },
    t,
  );
}
function l(e, t) {
  if (!0 === e[i.handlerPatched]) return e;
  e[i.handlerPatched] = !0;
  const n = (n) =>
    function (...i) {
      return r.getActiveSpan()
        ? ((function (e) {
            const t = r.getActiveSpan();
            if (!t) return;
            const n = r.getRootSpan(t);
            n &&
              "http.server" ===
                r.spanToJSON(n).data[r.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
              n.setAttribute(o.HTTP_ROUTE, e);
          })(e.path),
          u(a(e, t), () => n.call(this, ...i)))
        : n.call(this, ...i);
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
function d(e, t, n) {
  if (Array.isArray(e)) {
    for (let n = 0; n < e.length; n++) e[n] = d(e[n], t);
    return e;
  }
  if (((o = e), !Array.isArray(o))) {
    if (!0 === e[i.handlerPatched]) return e;
    e[i.handlerPatched] = !0;
    const o = function (...o) {
      return r.getActiveSpan()
        ? u(c(t, n, e.name), () => e.apply(void 0, o))
        : e.apply(this, o);
    };
    return (o[i.handlerPatched] = !0), o;
  }
  var o;
  return e;
}
(t.getExtMetadata = c),
  (t.getRouteMetadata = a),
  (t.wrapExtArguments = function (e, t) {
    if (Array.isArray(e[0])) {
      const n = e[0];
      for (let e = 0; e < n.length; e++) {
        const r = n[e];
        if (s(r.type)) {
          const o = r,
            i = d(o.method, r.type, t);
          (o.method = i), (n[e] = o);
        }
      }
      return;
    }
    if (
      ((n = e),
      Array.isArray(n) && n.length <= 3 && s(n[0]) && "function" == typeof n[1])
    ) {
      const n = e,
        r = d(n[1], n[0], t);
      return void (e[1] = r);
    }
    if (
      ((e) => {
        const t = e?.type;
        return void 0 !== t && s(t);
      })(e[0])
    ) {
      const n = e[0],
        r = d(n.method, n.type, t);
      n.method = r;
    }
    var n;
  }),
  (t.wrapRouteArguments = function (e, t) {
    const n = e[0];
    if (Array.isArray(n)) for (let e = 0; e < n.length; e++) n[e] = l(n[e], t);
    else e[0] = l(n, t);
  });
