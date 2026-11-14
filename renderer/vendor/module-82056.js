// vendor/module-82056.js — webpack module 82056
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(4064 /* vendor/module-4064 */),
  i = n(59295 /* vendor/module-59295 */),
  a = n(18277 /* vendor/module-18277 */),
  s = r.__toESM(n(65566 /* vendor/module-65566 */)),
  l = r.__toESM(n(35e3));
function c(e) {
  return e instanceof Uint8Array || e instanceof Blob;
}
function u(e) {
  return e instanceof FormData;
}
function d(e) {
  return c(e) || u(e);
}
var p = r.__toESM(o.require_objectSpread2(), 1);
function f(e) {
  const t = a.resolveHTTPLinkOptions(e);
  return () => (n) => {
    const { op: r } = n;
    return (0, s.observable)((n) => {
      const { path: o, input: s, type: d } = r;
      if ("subscription" === d)
        throw new Error(
          "Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`",
        );
      const f = ((e) => {
        if ("input" in e) {
          const { input: t } = e;
          if (u(t)) {
            if ("mutation" !== e.type && "POST" !== e.methodOverride)
              throw new Error("FormData is only supported for mutations");
            return a.httpRequest(
              (0, p.default)(
                (0, p.default)({}, e),
                {},
                {
                  contentTypeHeader: void 0,
                  getUrl: a.getUrl,
                  getBody: () => t,
                },
              ),
            );
          }
          if (c(t)) {
            if ("mutation" !== e.type && "POST" !== e.methodOverride)
              throw new Error(
                "Octet type input is only supported for mutations",
              );
            return a.httpRequest(
              (0, p.default)(
                (0, p.default)({}, e),
                {},
                {
                  contentTypeHeader: "application/octet-stream",
                  getUrl: a.getUrl,
                  getBody: () => t,
                },
              ),
            );
          }
        }
        return a.jsonHttpRequester(e);
      })(
        (0, p.default)(
          (0, p.default)({}, t),
          {},
          {
            type: d,
            path: o,
            input: s,
            signal: r.signal,
            headers: () =>
              e.headers
                ? "function" == typeof e.headers
                  ? e.headers({ op: r })
                  : e.headers
                : {},
          },
        ),
      );
      let h;
      return (
        f
          .then((e) => {
            h = e.meta;
            const r = (0, l.transformResult)(e.json, t.transformer.output);
            r.ok
              ? (n.next({ context: e.meta, result: r.result }), n.complete())
              : n.error(i.TRPCClientError.from(r.error, { meta: h }));
          })
          .catch((e) => {
            n.error(i.TRPCClientError.from(e, { meta: h }));
          }),
        () => {}
      );
    });
  };
}
Object.defineProperty(t, "httpLink", {
  enumerable: !0,
  get: function () {
    return f;
  },
}),
  Object.defineProperty(t, "isFormData", {
    enumerable: !0,
    get: function () {
      return u;
    },
  }),
  Object.defineProperty(t, "isNonJsonSerializable", {
    enumerable: !0,
    get: function () {
      return d;
    },
  }),
  Object.defineProperty(t, "isOctetType", {
    enumerable: !0,
    get: function () {
      return c;
    },
  });
