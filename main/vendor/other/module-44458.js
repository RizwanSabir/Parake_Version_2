// vendor/other/module-44458.js — webpack module 44458
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(60467 /* vendor/other/module-60467 */);
let i;
function s() {
  function e(e) {
    return function (...t) {
      const n = t.length > 2 ? t[2] : void 0;
      if (n) {
        const s = i,
          a = (function (e) {
            try {
              return new URL(e, o.WINDOW.location.origin).toString();
            } catch {
              return e;
            }
          })(String(n));
        if (((i = a), s === a)) return e.apply(this, t);
        const c = { from: s, to: a };
        r.triggerHandlers("history", c);
      }
      return e.apply(this, t);
    };
  }
  o.WINDOW.addEventListener("popstate", () => {
    const e = o.WINDOW.location.href,
      t = i;
    if (((i = e), t === e)) return;
    const n = { from: t, to: e };
    r.triggerHandlers("history", n);
  }),
    r.supportsHistory() &&
      (r.fill(o.WINDOW.history, "pushState", e),
      r.fill(o.WINDOW.history, "replaceState", e));
}
(t.addHistoryInstrumentationHandler = function (e) {
  const t = "history";
  r.addHandler(t, e), r.maybeInstrument(t, s);
}),
  (t.instrumentHistory = s);
