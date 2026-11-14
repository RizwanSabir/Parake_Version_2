// vendor/other/module-40109.js — webpack module 40109
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var n =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
(t.encode = function (e) {
  if (0 <= e && e < n.length) return n[e];
  throw new TypeError("Must be between 0 and 63: " + e);
}),
  (t.decode = function (e) {
    return 65 <= e && e <= 90
      ? e - 65
      : 97 <= e && e <= 122
        ? e - 97 + 26
        : 48 <= e && e <= 57
          ? e - 48 + 52
          : 43 == e
            ? 62
            : 47 == e
              ? 63
              : -1;
  });
