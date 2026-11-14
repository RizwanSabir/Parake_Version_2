// vendor/other/module-42682.js — webpack module 42682
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(39887 /* vendor/other/module-39887 */),
  i = n(70121 /* vendor/other/module-70121 */);
function s(e) {
  o.setGlobalTracingHelper(
    new i.ActiveTracingHelper({
      ignoreSpanTypes: e?.instrumentationConfig?.ignoreSpanTypes ?? [],
    }),
  );
}
const a = r.defineIntegration((e) => ({
  name: "Prisma",
  setupOnce() {
    s(e);
  },
}));
(t.instrumentPrisma = s), (t.prismaIntegration = a);
