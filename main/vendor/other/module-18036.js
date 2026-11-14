// vendor/other/module-18036.js — webpack module 18036
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.replaceExports = function (e, t, n) {
    const r = e[t];
    if ("function" == typeof r) {
      try {
        e[t] = n;
      } catch {
        Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0,
          enumerable: !0,
        });
      }
      if (e.default === r)
        try {
          e.default = n;
        } catch {
          Object.defineProperty(e, "default", {
            value: n,
            writable: !0,
            configurable: !0,
            enumerable: !0,
          });
        }
    }
  });
