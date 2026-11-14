// vendor/other/module-99606.js — webpack module 99606
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76760 /* external/node_path */),
  o = n(96137 /* vendor/other/module-96137 */);
function i(e) {
  return e.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
}
t.createGetModuleFromFilename = function (
  e = process.argv[1] ? o.dirname(process.argv[1]) : process.cwd(),
  t = "\\" === r.sep,
) {
  const n = t ? i(e) : e;
  return (e) => {
    if (!e) return;
    const o = t ? i(e) : e;
    let { dir: s, base: a, ext: c } = r.posix.parse(o);
    (".js" !== c && ".mjs" !== c && ".cjs" !== c) ||
      (a = a.slice(0, -1 * c.length));
    const u = decodeURIComponent(a);
    s || (s = ".");
    const l = s.lastIndexOf("/node_modules");
    if (l > -1) return `${s.slice(l + 14).replace(/\//g, ".")}:${u}`;
    if (s.startsWith(n)) {
      const e = s.slice(n.length + 1).replace(/\//g, ".");
      return e ? `${e}:${u}` : u;
    }
    return u;
  };
};
