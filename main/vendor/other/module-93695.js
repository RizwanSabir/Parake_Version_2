// vendor/other/module-93695.js — webpack module 93695
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */),
  o = n(79111 /* vendor/other/module-79111 */),
  i = n(80291 /* vendor/other/module-80291 */);
let s = -1;
const a = new Set(),
  c = (e) => {
    if (
      (function (e) {
        return (
          "pagehide" === e.type ||
          "hidden" === r.WINDOW.document?.visibilityState
        );
      })(e) &&
      s > -1
    ) {
      if ("visibilitychange" === e.type || "pagehide" === e.type)
        for (const e of a) e();
      isFinite(s) ||
        ((s = "visibilitychange" === e.type ? e.timeStamp : 0),
        i.removePageListener("prerenderingchange", c, !0));
    }
  };
t.getVisibilityWatcher = () => {
  if (r.WINDOW.document && s < 0) {
    const e = o.getActivationStart(),
      t = r.WINDOW.document.prerendering
        ? void 0
        : globalThis.performance
            .getEntriesByType("visibility-state")
            .filter((t) => "hidden" === t.name && t.startTime > e)[0]
            ?.startTime;
    (s =
      t ??
      ("hidden" !== r.WINDOW.document?.visibilityState ||
      r.WINDOW.document?.prerendering
        ? 1 / 0
        : 0)),
      i.addPageListener("visibilitychange", c, !0),
      i.addPageListener("pagehide", c, !0),
      i.addPageListener("prerenderingchange", c, !0);
  }
  return {
    get firstHiddenTime() {
      return s;
    },
    onHidden(e) {
      a.add(e);
    },
  };
};
