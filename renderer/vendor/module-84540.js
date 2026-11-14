// vendor/module-84540.js — webpack module 84540
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */).__toESM(
  n(65566 /* vendor/module-65566 */),
);
function o(e) {
  return (0, r.observable)((t) =>
    (function t(n = 0, r = e.op) {
      const o = e.links[n];
      if (!o)
        throw new Error(
          "No more links to execute - did you forget to add an ending link?",
        );
      return o({ op: r, next: (e) => t(n + 1, e) });
    })().subscribe(t),
  );
}
function i(e) {
  return Array.isArray(e) ? e : [e];
}
function a(e) {
  return (t) => {
    const n = i(e.true).map((e) => e(t)),
      a = i(e.false).map((e) => e(t));
    return (t) =>
      (0, r.observable)((r) => {
        const i = e.condition(t.op) ? n : a;
        return o({ op: t.op, links: i }).subscribe(r);
      });
  };
}
Object.defineProperty(t, "createChain", {
  enumerable: !0,
  get: function () {
    return o;
  },
}),
  Object.defineProperty(t, "splitLink", {
    enumerable: !0,
    get: function () {
      return a;
    },
  });
