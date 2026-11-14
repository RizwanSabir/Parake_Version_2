// vendor/module-50123.js — webpack module 50123
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => p });
var n = r(50405 /* vendor/module-50405 */);
const o = r(39600 /* vendor/module-39600 */).A["__core-js_shared__"];
var i,
  s = (i = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + i
    : "";
var u = r(97942 /* vendor/module-97942 */),
  a = r(1548 /* vendor/module-1548 */),
  c = /^\[object .+?Constructor\]$/,
  h = Function.prototype,
  f = Object.prototype,
  l = h.toString,
  d = f.hasOwnProperty,
  A = RegExp(
    "^" +
      l
        .call(d)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
const v = function (t) {
    return (
      !(!(0, u.A)(t) || ((e = t), s && s in e)) &&
      ((0, n.A)(t) ? A : c).test((0, a.A)(t))
    );
    var e;
  },
  p = function (t, e) {
    var r = (function (t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return v(r) ? r : void 0;
  };
