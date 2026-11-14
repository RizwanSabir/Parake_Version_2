// vendor/other/module-28635.js — webpack module 28635
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
(e = n.nmd(e)),
  Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(34212 /* vendor/other/module-34212 */);
function o(e, t) {
  return e.require(t);
}
(t.isNodeEnv = function () {
  return (
    !r.isBrowserBundle() &&
    "[object process]" ===
      Object.prototype.toString.call(
        "undefined" != typeof process ? process : 0,
      )
  );
}),
  (t.loadModule = function (t, n = e) {
    let r;
    try {
      r = o(n, t);
    } catch {}
    if (!r)
      try {
        const { cwd: e } = o(n, "process");
        r = o(n, `${e()}/node_modules/${t}`);
      } catch {}
    return r;
  });
