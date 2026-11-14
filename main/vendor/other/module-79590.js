// vendor/other/module-79590.js — webpack module 79590
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = r.GLOBAL_OBJ,
  i = r.defineIntegration((e = {}) => ({
    name: "ContextLines",
    processEvent: (t, n, i) =>
      (function (e, t) {
        const n = o.document,
          i = o.location && r.stripUrlQueryAndFragment(o.location.href);
        if (!n || !i) return e;
        const a = e.exception?.values;
        if (!a?.length) return e;
        const c = n.documentElement.innerHTML;
        if (!c) return e;
        const u = ["<!DOCTYPE html>", "<html>", ...c.split("\n"), "</html>"];
        return (
          a.forEach((e) => {
            const n = e.stacktrace;
            n?.frames && (n.frames = n.frames.map((e) => s(e, u, i, t)));
          }),
          e
        );
      })(
        t,
        e.frameContextLines ??
          i?.getDataCollectionOptions().frameContextLines ??
          7,
      ),
  }));
function s(e, t, n, o) {
  return e.filename === n && e.lineno && t.length
    ? (r.addContextToFrame(t, e, o), e)
    : e;
}
(t.applySourceContextToFrame = s), (t.contextLinesIntegration = i);
