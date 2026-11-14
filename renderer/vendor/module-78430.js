// vendor/module-78430.js — webpack module 78430
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
let n,
  r = 0;
t.getSequenceAttribute = function (e) {
  const t = Math.floor(1e3 * e);
  void 0 !== n && t !== n && (r = 0);
  const o = r;
  return (
    r++,
    (n = t),
    {
      key: "sentry.timestamp.sequence",
      value: { value: o, type: "integer" },
    }
  );
};
