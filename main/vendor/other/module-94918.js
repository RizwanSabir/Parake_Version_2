// vendor/other/module-94918.js — webpack module 94918
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(51835 /* vendor/other/module-51835 */);
let o = 0,
  i = 1 / 0,
  s = 0;
const a = (e) => {
  e.forEach((e) => {
    e.interactionId &&
      ((i = Math.min(i, e.interactionId)),
      (s = Math.max(s, e.interactionId)),
      (o = s ? (s - i) / 7 + 1 : 0));
  });
};
let c;
(t.getInteractionCount = () => (c ? o : performance.interactionCount || 0)),
  (t.initInteractionCountPolyfill = () => {
    "interactionCount" in performance ||
      c ||
      (c = r.observe("event", a, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  });
