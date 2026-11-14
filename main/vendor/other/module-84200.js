// vendor/other/module-84200.js — webpack module 84200
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(86359 /* vendor/other/module-86359 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = "auto.db.orchestrion.mongo",
  u = new Set(["insert", "update", "delete", "find", "getMore", "killCursors"]);
function l(e, t) {
  a.bindTracingChannelToSpan(
    r.tracingChannel(e),
    (e) => {
      const n = e.arguments;
      if (!n) return;
      const r = t(n);
      return r && "string" == typeof r.ns
        ? i.startMongoSpan(
            i.getV3SpanAttributes(r.ns, r.topology, r.command, r.operation, c),
          )
        : void 0;
    },
    { requiresParentSpan: !0 },
  );
}
const d = o.defineIntegration(() => ({
  name: "Mongo",
  setupOnce() {
    r.tracingChannel &&
      o.waitForTracingChannelBinding(() => {
        a.bindTracingChannelToSpan(
          r.tracingChannel(s.CHANNELS.MONGODB_COMMAND),
          (e) => {
            const t = e.arguments ?? [],
              n = t[0],
              r = t[1];
            if (!n || !r || "object" != typeof r || r.ismaster || r.hello)
              return;
            const o = Object.keys(r)[0];
            return i.startMongoSpan(i.getV4SpanAttributes(e.self, n, r, o, c));
          },
          { requiresParentSpan: !0 },
        ),
          a.bindTracingChannelToSpan(
            r.tracingChannel(s.CHANNELS.MONGODB_CHECKOUT),
            () => {},
          ),
          (function () {
            for (const e of ["insert", "update", "remove"])
              l(
                "insert" === e
                  ? s.CHANNELS.MONGODB_V3_INSERT
                  : "update" === e
                    ? s.CHANNELS.MONGODB_V3_UPDATE
                    : s.CHANNELS.MONGODB_V3_REMOVE,
                (t) => ({
                  topology: t[0],
                  ns: t[1],
                  command: t[2]?.[0],
                  operation: e,
                }),
              );
            l(s.CHANNELS.MONGODB_V3_COMMAND, (e) => {
              const t = e[2],
                n = t ? Object.keys(t)[0] : void 0;
              if (!n || !u.has(n))
                return {
                  topology: e[0],
                  ns: e[1],
                  command: t,
                  operation: t ? i.getV3CommandOperation(t) : void 0,
                };
            }),
              l(s.CHANNELS.MONGODB_V3_QUERY, (e) => ({
                topology: e[0],
                ns: e[1],
                command: e[2],
                operation: "find",
              })),
              l(s.CHANNELS.MONGODB_V3_GET_MORE, (e) => ({
                topology: e[0],
                ns: e[1],
                command: e[2]?.cmd,
                operation: "getMore",
              }));
          })();
      });
  },
}));
t.mongodbChannelIntegration = d;
