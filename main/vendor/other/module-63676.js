// vendor/other/module-63676.js — webpack module 63676
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(38862 /* vendor/other/module-38862 */),
  a = n(19648 /* vendor/other/module-19648 */),
  c = n(68020 /* vendor/other/module-68020 */),
  u = n(76041 /* vendor/other/module-76041 */),
  l = n(77481 /* vendor/other/module-77481 */),
  d = n(58119 /* vendor/other/module-58119 */),
  p = n(76443 /* vendor/other/module-76443 */),
  f = n(31079 /* vendor/other/module-31079 */),
  h = n(98429 /* vendor/other/module-98429 */),
  g = n(47981 /* vendor/other/module-47981 */);
t.patchLayer = function (e, t, n) {
  if (!t?.handle) return;
  const m = t,
    _ = m.handle;
  if (!c.getOriginalFunction(_) && 4 !== _.length) {
    for (const e in _)
      e in S ||
        Object.defineProperty(S, e, {
          get: () => _[e],
          set(t) {
            _[e] = t;
          },
        });
    c.markFunctionWrapped(S, _),
      Object.defineProperty(m, "handle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: S,
      });
  }
  function S(t, c, ...S) {
    const E = e();
    g.setSDKProcessingMetadata(t);
    const y = s.getActiveSpan();
    if (!y) return _.apply(this, [t, c, ...S]);
    n && d.storeLayer(t, n);
    const T = d.getStoredLayers(t),
      b = !!n,
      I = f.getConstructedRoute(t),
      v = f.getActualMatchedRoute(t, I);
    E.onRouteResolved?.(v);
    const A = f.getLayerMetadata(I, m, n),
      N = A.attributes[p.ATTR_EXPRESS_NAME],
      R = A.attributes[p.ATTR_EXPRESS_TYPE],
      C = Object.assign(A.attributes, {
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.express",
        [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `${R}.express`,
      });
    if (
      (v && (C[p.ATTR_HTTP_ROUTE] = v),
      f.isLayerIgnored(A.attributes[p.ATTR_EXPRESS_NAME], R, E))
    )
      return b && T.pop(), _.apply(this, [t, c, ...S]);
    const O = u.getIsolationScope();
    if (O !== h.getDefaultIsolationScope()) {
      if ("request_handler" === R) {
        const e = t.method ? t.method.toUpperCase() : "GET";
        O.setTransactionName(`${e} ${I}`);
      }
    } else
      r.DEBUG_BUILD &&
        i.debug.warn(
          "Isolation scope is still default isolation scope - skipping setting transactionName",
        );
    return l.startSpanManual({ name: N, attributes: C }, (e) => {
      let n = !1;
      A.attributes[p.ATTR_EXPRESS_TYPE] === p.ExpressLayerType_ROUTER &&
        (e.end(), (n = !0));
      const r = () => {
        n || ((n = !0), e.end());
      };
      for (let o = 0; o < S.length; o++) {
        const i = S[o];
        if ("function" == typeof i) {
          S[o] = function (...o) {
            const s = o[0],
              u = !!s && "route" !== s && "router" !== s;
            if (!n && u) {
              const [t, n] = f.asErrorAndMessage(s);
              e.setStatus({ code: a.SPAN_STATUS_ERROR, message: n });
            }
            return (
              n || ((n = !0), c.removeListener("finish", r), e.end()),
              (t.route && u) || !b || T.pop(),
              l.withActiveSpan(y, () => i.apply(this, o))
            );
          };
          break;
        }
      }
      try {
        return _.apply(this, [t, c, ...S]);
      } catch (t) {
        const [n, r] = f.asErrorAndMessage(t);
        throw (e.setStatus({ code: a.SPAN_STATUS_ERROR, message: r }), t);
      } finally {
        n || c.once("finish", r);
      }
    });
  }
};
