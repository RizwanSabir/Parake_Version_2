// vendor/module-29333.js — webpack module 29333
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => d });
var n = r(96956 /* vendor/module-96956 */),
  o = r(1677 /* vendor/module-1677 */),
  i = r(13269 /* vendor/module-13269 */);
function s(t, e) {
  if ("function" != typeof t || (null != e && "function" != typeof e))
    throw new TypeError("Expected a function");
  var r = function () {
    var n = arguments,
      o = e ? e.apply(this, n) : n[0],
      i = r.cache;
    if (i.has(o)) return i.get(o);
    var s = t.apply(this, n);
    return (r.cache = i.set(o, s) || i), s;
  };
  return (r.cache = new (s.Cache || i.A)()), r;
}
s.Cache = i.A;
var u =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g;
const c =
  ((h = s(
    function (t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(""),
        t.replace(u, function (t, r, n, o) {
          e.push(n ? o.replace(a, "$1") : r || t);
        }),
        e
      );
    },
    function (t) {
      return 500 === f.size && f.clear(), t;
    },
  )),
  (f = h.cache),
  h);
var h,
  f,
  l = r(93081 /* vendor/module-93081 */);
const d = function (t, e) {
  return (0, n.A)(t) ? t : (0, o.A)(t, e) ? [t] : c((0, l.A)(t));
};
