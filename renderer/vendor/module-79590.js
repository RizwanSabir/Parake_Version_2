// vendor/module-79590.js — webpack module 79590
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = r.GLOBAL_OBJ,
  i = r.defineIntegration((e = {}) => ({
    name: "ContextLines",
    processEvent: (t, n, i) =>
      (function (e, t) {
        const n = o.document,
          i = o.location && r.stripUrlQueryAndFragment(o.location.href);
        if (!n || !i) return e;
        const s = e.exception?.values;
        if (!s?.length) return e;
        const l = n.documentElement.innerHTML;
        if (!l) return e;
        const c = ["<!DOCTYPE html>", "<html>", ...l.split("\n"), "</html>"];
        return (
          s.forEach((e) => {
            const n = e.stacktrace;
            n?.frames && (n.frames = n.frames.map((e) => a(e, c, i, t)));
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
function a(e, t, n, o) {
  return e.filename === n && e.lineno && t.length
    ? (r.addContextToFrame(t, e, o), e)
    : e;
}
(t.applySourceContextToFrame = a), (t.contextLinesIntegration = i);
