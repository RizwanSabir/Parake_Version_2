// vendor/other/module-79665.js — webpack module 79665
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(57975 /* external/node_util */),
  o = n(96137 /* vendor/other/module-96137 */).defineIntegration((e = {}) => ({
    name: "NodeSystemError",
    processEvent: (t, n, o) => {
      if (
        !(function (e) {
          return (
            e instanceof Error &&
            "errno" in e &&
            "number" == typeof e.errno &&
            "function" == typeof r.getSystemErrorMap &&
            r.getSystemErrorMap().has(e.errno)
          );
        })(n.originalException)
      )
        return t;
      const i = n.originalException,
        s = { ...i };
      o.getDataCollectionOptions().userInfo ||
        !0 === e.includePaths ||
        (delete s.path, delete s.dest),
        (t.contexts = { ...t.contexts, node_system_error: s });
      for (const e of t.exception?.values || [])
        e.value &&
          (i.path &&
            e.value.includes(i.path) &&
            (e.value = e.value.replace(`'${i.path}'`, "").trim()),
          i.dest &&
            e.value.includes(i.dest) &&
            (e.value = e.value.replace(`'${i.dest}'`, "").trim()));
      return t;
    },
  }));
t.systemErrorIntegration = o;
