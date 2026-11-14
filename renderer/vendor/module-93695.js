// vendor/module-93695.js — webpack module 93695
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */),
  o = n(79111 /* vendor/module-79111 */),
  i = n(80291 /* vendor/module-80291 */);
let a = -1;
const s = new Set(),
  l = (e) => {
    if (
      (function (e) {
        return (
          "pagehide" === e.type ||
          "hidden" === r.WINDOW.document?.visibilityState
        );
      })(e) &&
      a > -1
    ) {
      if ("visibilitychange" === e.type || "pagehide" === e.type)
        for (const e of s) e();
      isFinite(a) ||
        ((a = "visibilitychange" === e.type ? e.timeStamp : 0),
        i.removePageListener("prerenderingchange", l, !0));
    }
  };
t.getVisibilityWatcher = () => {
  if (r.WINDOW.document && a < 0) {
    const e = o.getActivationStart(),
      t = r.WINDOW.document.prerendering
        ? void 0
        : globalThis.performance
            .getEntriesByType("visibility-state")
            .filter((t) => "hidden" === t.name && t.startTime > e)[0]
            ?.startTime;
    (a =
      t ??
      ("hidden" !== r.WINDOW.document?.visibilityState ||
      r.WINDOW.document?.prerendering
        ? 1 / 0
        : 0)),
      i.addPageListener("visibilitychange", l, !0),
      i.addPageListener("pagehide", l, !0),
      i.addPageListener("prerenderingchange", l, !0);
  }
  return {
    get firstHiddenTime() {
      return a;
    },
    onHidden(e) {
      s.add(e);
    },
  };
};
