// vendor/module-63676.js — webpack module 63676
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(38862 /* vendor/module-38862 */),
  s = n(19648 /* vendor/module-19648 */),
  l = n(68020 /* vendor/module-68020 */),
  c = n(76041 /* vendor/module-76041 */),
  u = n(77481 /* vendor/module-77481 */),
  d = n(58119 /* vendor/module-58119 */),
  p = n(76443 /* vendor/module-76443 */),
  f = n(31079 /* vendor/module-31079 */),
  h = n(98429 /* vendor/module-98429 */),
  m = n(47981 /* vendor/module-47981 */);
t.patchLayer = function (e, t, n) {
  if (!t?.handle) return;
  const g = t,
    y = g.handle;
  if (!l.getOriginalFunction(y) && 4 !== y.length) {
    for (const e in y)
      e in v ||
        Object.defineProperty(v, e, {
          get: () => y[e],
          set(t) {
            y[e] = t;
          },
        });
    l.markFunctionWrapped(v, y),
      Object.defineProperty(g, "handle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: v,
      });
  }
  function v(t, l, ...v) {
    const b = e();
    m.setSDKProcessingMetadata(t);
    const S = a.getActiveSpan();
    if (!S) return y.apply(this, [t, l, ...v]);
    n && d.storeLayer(t, n);
    const _ = d.getStoredLayers(t),
      x = !!n,
      w = f.getConstructedRoute(t),
      E = f.getActualMatchedRoute(t, w);
    b.onRouteResolved?.(E);
    const T = f.getLayerMetadata(w, g, n),
      k = T.attributes[p.ATTR_EXPRESS_NAME],
      C = T.attributes[p.ATTR_EXPRESS_TYPE],
      I = Object.assign(T.attributes, {
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.express",
        [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${C}.express`,
      });
    if (
      (E && (I[p.ATTR_HTTP_ROUTE] = E),
      f.isLayerIgnored(T.attributes[p.ATTR_EXPRESS_NAME], C, b))
    )
      return x && _.pop(), y.apply(this, [t, l, ...v]);
    const A = c.getIsolationScope();
    if (A !== h.getDefaultIsolationScope()) {
      if ("request_handler" === C) {
        const e = t.method ? t.method.toUpperCase() : "GET";
        A.setTransactionName(`${e} ${w}`);
      }
    } else
      r.DEBUG_BUILD &&
        i.debug.warn(
          "Isolation scope is still default isolation scope - skipping setting transactionName",
        );
    return u.startSpanManual({ name: k, attributes: I }, (e) => {
      let n = !1;
      T.attributes[p.ATTR_EXPRESS_TYPE] === p.ExpressLayerType_ROUTER &&
        (e.end(), (n = !0));
      const r = () => {
        n || ((n = !0), e.end());
      };
      for (let o = 0; o < v.length; o++) {
        const i = v[o];
        if ("function" == typeof i) {
          v[o] = function (...o) {
            const a = o[0],
              c = !!a && "route" !== a && "router" !== a;
            if (!n && c) {
              const [t, n] = f.asErrorAndMessage(a);
              e.setStatus({ code: s.SPAN_STATUS_ERROR, message: n });
            }
            return (
              n || ((n = !0), l.removeListener("finish", r), e.end()),
              (t.route && c) || !x || _.pop(),
              u.withActiveSpan(S, () => i.apply(this, o))
            );
          };
          break;
        }
      }
      try {
        return y.apply(this, [t, l, ...v]);
      } catch (t) {
        const [n, r] = f.asErrorAndMessage(t);
        throw (e.setStatus({ code: s.SPAN_STATUS_ERROR, message: r }), t);
      } finally {
        n || l.once("finish", r);
      }
    });
  }
};
