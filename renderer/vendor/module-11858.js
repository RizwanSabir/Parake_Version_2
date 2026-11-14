// vendor/module-11858.js — webpack module 11858
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(15946 /* vendor/module-15946 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(8888 /* vendor/module-8888 */),
  s = n(77481 /* vendor/module-77481 */),
  l = n(6990 /* vendor/module-6990 */),
  c = {
    mechanism: { handled: !1, type: "auto.rpc.trpc.middleware" },
  };
t.trpcMiddleware = function (e = {}) {
  return async function (t) {
    const { path: n, type: u, next: d, rawInput: p, getRawInput: f } = t,
      h = r.getClient(),
      m = h?.getOptions(),
      g = h?.getDataCollectionOptions(),
      y = { procedure_path: n, procedure_type: u };
    if (
      (l.setNormalizationDepthOverrideHint(y, 1 + (m?.normalizeDepth ?? 5)),
      (void 0 !== e.attachRpcInput
        ? e.attachRpcInput
        : g?.httpBodies.includes("incomingRequest")) &&
        (void 0 !== p && (y.input = a.normalize(p)),
        void 0 !== f && "function" == typeof f))
    )
      try {
        const e = await f();
        y.input = a.normalize(e);
      } catch {}
    return r.withIsolationScope(
      (t) => (
        t.setContext("trpc", y),
        s.startSpanManual(
          {
            name: `trpc/${n}`,
            op: "rpc.server",
            attributes: {
              [i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
              [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc",
            },
            forceTransaction: !!e.forceTransaction,
          },
          async (e) => {
            try {
              const t = await d();
              return (
                (function (e) {
                  "object" == typeof e &&
                    null !== e &&
                    "ok" in e &&
                    !e.ok &&
                    "error" in e &&
                    o.captureException(e.error, c);
                })(t),
                e.end(),
                t
              );
            } catch (t) {
              throw (o.captureException(t, c), e.end(), t);
            }
          },
        )
      ),
    );
  };
};
