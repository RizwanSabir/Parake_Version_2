// vendor/other/module-56176.js — webpack module 56176
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(84195 /* vendor/other/module-84195 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = n(75201 /* vendor/other/module-75201 */),
  l = "Graphql";
function d(e) {
  try {
    return e();
  } catch (e) {
    return void (
      i.DEBUG_BUILD &&
      o.debug.warn("[orchestrion:graphql] error building span", e)
    );
  }
}
const p = o.defineIntegration((e = {}) => {
  const t = (function (e) {
      return {
        ignoreResolveSpans: !1 !== e.ignoreResolveSpans,
        ignoreTrivialResolveSpans: !1 !== e.ignoreTrivialResolveSpans,
        useOperationNameForRootSpan: !1 !== e.useOperationNameForRootSpan,
      };
    })(e),
    n = () => t;
  return {
    name: l,
    setupOnce() {
      r.tracingChannel &&
        o.waitForTracingChannelBinding(() => {
          c.bindTracingChannelToSpan(
            r.tracingChannel(a.CHANNELS.GRAPHQL_PARSE),
            () => d(() => u.startParseSpan()),
          ),
            c.bindTracingChannelToSpan(
              r.tracingChannel(a.CHANNELS.GRAPHQL_VALIDATE),
              (e) => d(() => u.startValidateSpan(e.arguments[1])),
              {
                beforeSpanEnd: (e, t) => {
                  d(() => u.finalizeValidateSpan(e, t.result));
                },
              },
            ),
            c.bindTracingChannelToSpan(
              r.tracingChannel(a.CHANNELS.GRAPHQL_EXECUTE),
              (e) => d(() => u.startExecuteSpan(e.arguments, e.self, t, n)),
              {
                beforeSpanEnd: (e, t) => {
                  d(() => u.finalizeExecuteSpan(e, t.result));
                },
              },
            );
        });
    },
  };
});
(t.graphqlChannelIntegration = p),
  (t.graphqlDiagnosticsChannelIntegration = (e) => {
    const t = p(e);
    return o.extendIntegration(s.graphqlIntegration(e), {
      name: l,
      setupOnce: () => t.setupOnce?.(),
    });
  });
