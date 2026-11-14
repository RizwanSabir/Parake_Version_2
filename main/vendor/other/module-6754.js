// vendor/other/module-6754.js — webpack module 6754
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getSpanName = function (e, t, n, r) {
    return "execBulkLoad" === e && r && t
      ? `${e} ${r} ${t}`
      : "callProcedure" === e
        ? t
          ? `${e} ${n} ${t}`
          : `${e} ${n}`
        : t
          ? `${e} ${t}`
          : `${e}`;
  }),
  (t.once = (e) => {
    let t = !1;
    return (...n) => {
      if (!t) return (t = !0), e(...n);
    };
  });
