// vendor/other/module-17697.js — webpack module 17697
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var t = /[\\^$.*+?()[\]{}|]/g,
  n = RegExp(t.source),
  r = "object" == typeof global && global && global.Object === Object && global,
  o = "object" == typeof self && self && self.Object === Object && self,
  i = r || o || Function("return this")(),
  s = Object.prototype.toString,
  a = i.Symbol,
  c = a ? a.prototype : void 0,
  u = c ? c.toString : void 0;
e.exports = function (e) {
  var r;
  return (e =
    null == (r = e)
      ? ""
      : (function (e) {
          if ("string" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == s.call(e))
              );
            })(e)
          )
            return u ? u.call(e) : "";
          var t = e + "";
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
        })(r)) && n.test(e)
    ? e.replace(t, "\\$&")
    : e;
};
