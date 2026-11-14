// vendor/other/module-923.js — webpack module 923
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.runOnce = (e) => {
    let t = !1;
    return () => {
      t || (e(), (t = !0));
    };
  });
