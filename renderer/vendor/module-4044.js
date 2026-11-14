// vendor/module-4044.js — webpack module 4044
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => h });
var n = r(83516 /* vendor/module-83516 */),
  o = Object.prototype,
  i = o.hasOwnProperty,
  s = o.toString,
  u = n.A ? n.A.toStringTag : void 0;
var a = Object.prototype.toString;
var c = n.A ? n.A.toStringTag : void 0;
const h = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : c && c in Object(t)
      ? (function (t) {
          var e = i.call(t, u),
            r = t[u];
          try {
            t[u] = void 0;
            var n = !0;
          } catch (t) {}
          var o = s.call(t);
          return n && (e ? (t[u] = r) : delete t[u]), o;
        })(t)
      : (function (t) {
          return a.call(t);
        })(t);
};
