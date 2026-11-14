// vendor/module-94918.js — webpack module 94918
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(51835 /* vendor/module-51835 */);
let o = 0,
  i = 1 / 0,
  a = 0;
const s = (e) => {
  e.forEach((e) => {
    e.interactionId &&
      ((i = Math.min(i, e.interactionId)),
      (a = Math.max(a, e.interactionId)),
      (o = a ? (a - i) / 7 + 1 : 0));
  });
};
let l;
(t.getInteractionCount = () => (l ? o : performance.interactionCount || 0)),
  (t.initInteractionCountPolyfill = () => {
    "interactionCount" in performance ||
      l ||
      (l = r.observe("event", s, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  });
