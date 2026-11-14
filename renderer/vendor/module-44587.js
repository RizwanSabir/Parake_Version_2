// vendor/module-44587.js — webpack module 44587
// params: (e, t) = (module, exports, require)
function n(e) {
  return e
    ? "input" in e
      ? e
      : { input: e, output: e }
    : {
        input: { serialize: (e) => e, deserialize: (e) => e },
        output: { serialize: (e) => e, deserialize: (e) => e },
      };
}
Object.defineProperty(t, "getTransformer", {
  enumerable: !0,
  get: function () {
    return n;
  },
});
