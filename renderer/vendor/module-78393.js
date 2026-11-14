// vendor/module-78393.js — webpack module 78393
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */),
  o = n(34882 /* vendor/module-34882 */),
  i = n(79111 /* vendor/module-79111 */),
  a = n(86881 /* vendor/module-86881 */);
t.initMetric = (e, t = -1) => {
  const n = a.getNavigationEntry();
  let s = "navigate";
  return (
    n &&
      (r.WINDOW.document?.prerendering || i.getActivationStart() > 0
        ? (s = "prerender")
        : r.WINDOW.document?.wasDiscarded
          ? (s = "restore")
          : n.type && (s = n.type.replace(/_/g, "-"))),
    {
      name: e,
      value: t,
      rating: "good",
      delta: 0,
      entries: [],
      id: o.generateUniqueID(),
      navigationType: s,
    }
  );
};
