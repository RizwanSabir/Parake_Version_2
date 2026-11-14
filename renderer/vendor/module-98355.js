// vendor/module-98355.js — webpack module 98355
// params: (e) = (module, exports, require)
function t(e) {
  var n,
    r,
    o = "";
  if ("string" == typeof e || "number" == typeof e) o += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++)
        e[n] && (r = t(e[n])) && (o && (o += " "), (o += r));
    } else for (r in e) e[r] && (o && (o += " "), (o += r));
  return o;
}
function n() {
  for (var e, n, r = 0, o = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (n = t(e)) && (o && (o += " "), (o += n));
  return o;
}
(e.exports = n), (e.exports.clsx = n);
