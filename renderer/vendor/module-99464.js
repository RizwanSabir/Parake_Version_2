// vendor/module-99464.js — webpack module 99464
// params: (e, t) = (module, exports, require)
const n = {
  _input: null,
  _output: null,
  parse(e) {
    if (e instanceof ReadableStream) return e;
    throw new Error(
      "Parsed input was expected to be a ReadableStream but was: " + typeof e,
    );
  },
};
Object.defineProperty(t, "octetInputParser", {
  enumerable: !0,
  get: function () {
    return n;
  },
});
