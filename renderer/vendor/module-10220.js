// vendor/module-10220.js — webpack module 10220
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */),
  o = n(80291 /* vendor/module-80291 */),
  i = n(923 /* vendor/module-923 */);
t.whenIdleOrHidden = (e) => {
  const t = r.WINDOW.requestIdleCallback || r.WINDOW.setTimeout;
  "hidden" === r.WINDOW.document?.visibilityState
    ? e()
    : ((e = i.runOnce(e)),
      o.addPageListener("visibilitychange", e, {
        once: !0,
        capture: !0,
      }),
      o.addPageListener("pagehide", e, { once: !0, capture: !0 }),
      t(() => {
        e(),
          o.removePageListener("visibilitychange", e, {
            capture: !0,
          }),
          o.removePageListener("pagehide", e, { capture: !0 });
      }));
};
