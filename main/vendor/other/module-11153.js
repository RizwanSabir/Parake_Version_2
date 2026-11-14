// vendor/other/module-11153.js — webpack module 11153
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(73024 /* external/node_fs */),
  o = n(76760 /* external/node_path */),
  i = n(96137 /* vendor/other/module-96137 */);
let s;
function a() {
  const e = n.c[n.s]?.paths || [],
    t = (function () {
      try {
        return n.c ? Object.keys(n.c) : [];
      } catch {
        return [];
      }
    })(),
    i = {},
    s = new Set();
  return (
    t.forEach((t) => {
      let n = t;
      const a = () => {
        const t = n;
        if (((n = o.dirname(t)), !n || t === n || s.has(t))) return;
        if (e.indexOf(n) < 0) return a();
        const c = o.join(t, "package.json");
        if ((s.add(t), !r.existsSync(c))) return a();
        try {
          const e = JSON.parse(r.readFileSync(c, "utf8"));
          i[e.name] = e.version;
        } catch {}
      };
      a();
    }),
    i
  );
}
function c() {
  return (
    s ||
      (s = {
        ...("undefined" != typeof __SENTRY_SERVER_MODULES__
          ? __SENTRY_SERVER_MODULES__
          : (i.GLOBAL_OBJ.__SENTRY_SERVER_MODULES__ ?? {})),
        ...u(),
        ...a(),
      }),
    s
  );
}
function u() {
  const e = (function () {
    try {
      const e = o.join(process.cwd(), "package.json");
      return JSON.parse(r.readFileSync(e, "utf8"));
    } catch {
      return {};
    }
  })();
  return { ...e.dependencies, ...e.devDependencies };
}
t.modulesIntegration = () => ({
  name: "Modules",
  processEvent: (e) => ((e.modules = { ...e.modules, ...c() }), e),
  getModules: c,
});
