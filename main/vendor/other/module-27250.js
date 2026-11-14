// vendor/other/module-27250.js — webpack module 27250
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var t = 1e3,
  n = 60 * t,
  r = 60 * n,
  o = 24 * r,
  i = 7 * o;
function s(e, t, n, r) {
  var o = t >= 1.5 * n;
  return Math.round(e / n) + " " + r + (o ? "s" : "");
}
e.exports = function (e, a) {
  a = a || {};
  var c,
    u,
    l = typeof e;
  if ("string" === l && e.length > 0)
    return (function (e) {
      if (!((e = String(e)).length > 100)) {
        var s =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e,
          );
        if (s) {
          var a = parseFloat(s[1]);
          switch ((s[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * a;
            case "weeks":
            case "week":
            case "w":
              return a * i;
            case "days":
            case "day":
            case "d":
              return a * o;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return a * r;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return a * n;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return a * t;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return a;
            default:
              return;
          }
        }
      }
    })(e);
  if ("number" === l && isFinite(e))
    return a.long
      ? ((c = e),
        (u = Math.abs(c)) >= o
          ? s(c, u, o, "day")
          : u >= r
            ? s(c, u, r, "hour")
            : u >= n
              ? s(c, u, n, "minute")
              : u >= t
                ? s(c, u, t, "second")
                : c + " ms")
      : (function (e) {
          var i = Math.abs(e);
          return i >= o
            ? Math.round(e / o) + "d"
            : i >= r
              ? Math.round(e / r) + "h"
              : i >= n
                ? Math.round(e / n) + "m"
                : i >= t
                  ? Math.round(e / t) + "s"
                  : e + "ms";
        })(e);
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(e),
  );
};
