// vendor/other/module-88695.js — webpack module 88695
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
let r;
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.isDebuggerEnabled = async function () {
    if (void 0 === r)
      try {
        const e = await Promise.resolve().then(n.t.bind(n, 86592, 23));
        r = !!e.url();
      } catch {
        r = !1;
      }
    return r;
  });
