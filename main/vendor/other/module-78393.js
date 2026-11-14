// vendor/other/module-78393.js — webpack module 78393
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */),
  o = n(34882 /* vendor/other/module-34882 */),
  i = n(79111 /* vendor/other/module-79111 */),
  s = n(86881 /* vendor/other/module-86881 */);
t.initMetric = (e, t = -1) => {
  const n = s.getNavigationEntry();
  let a = "navigate";
  return (
    n &&
      (r.WINDOW.document?.prerendering || i.getActivationStart() > 0
        ? (a = "prerender")
        : r.WINDOW.document?.wasDiscarded
          ? (a = "restore")
          : n.type && (a = n.type.replace(/_/g, "-"))),
    {
      name: e,
      value: t,
      rating: "good",
      delta: 0,
      entries: [],
      id: o.generateUniqueID(),
      navigationType: a,
    }
  );
};
