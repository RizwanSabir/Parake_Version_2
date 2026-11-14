// vendor/module-80576.js — webpack module 80576
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.camelCase = void 0);
var n = /^--[a-zA-Z0-9_-]+$/,
  r = /-([a-z])/g,
  o = /^[^-]+$/,
  i = /^-(webkit|moz|ms|o|khtml)-/,
  a = /^-(ms)-/,
  s = function (e, t) {
    return t.toUpperCase();
  },
  l = function (e, t) {
    return "".concat(t, "-");
  };
t.camelCase = function (e, t) {
  return (
    void 0 === t && (t = {}),
    (function (e) {
      return !e || o.test(e) || n.test(e);
    })(e)
      ? e
      : ((e = e.toLowerCase()),
        (e = t.reactCompat ? e.replace(a, l) : e.replace(i, l)).replace(r, s))
  );
};
