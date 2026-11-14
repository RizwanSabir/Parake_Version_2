// vendor/other/module-58857.js — webpack module 58857
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(5015 /* vendor/other/module-5015 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(27134 /* vendor/other/module-27134 */),
  s = "LruMemoizer",
  a = i.generateInstrumentOnce(s, () => new r.LruMemoizerInstrumentation()),
  c = o.defineIntegration(() => ({
    name: s,
    setupOnce() {
      a();
    },
  }));
(t.instrumentLruMemoizer = a), (t.lruMemoizerIntegration = c);
