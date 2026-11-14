// vendor/other/module-71987.js — webpack module 71987
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(93109 /* vendor/other/module-93109 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = n(64673 /* vendor/other/module-64673 */),
  a = "Graphql",
  c = i.generateInstrumentOnce(a, r.GraphQLInstrumentation, (e) => l(e)),
  u = o.defineIntegration((e = {}) =>
    o.extendIntegration(s.graphqlIntegration(l(e)), {
      name: a,
      setupOnce() {
        c(l(e));
      },
    }),
  );
function l(e) {
  return {
    ignoreResolveSpans: !0,
    ignoreTrivialResolveSpans: !0,
    useOperationNameForRootSpan: !0,
    ...e,
  };
}
(t.graphqlIntegration = u), (t.instrumentGraphql = c);
