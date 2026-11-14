// vendor/other/module-97624.js — webpack module 97624
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e, r, o, i, s, a) {
  var c = Math.floor((r - e) / 2) + e,
    u = s(o, i[c], !0);
  return 0 === u
    ? c
    : u > 0
      ? r - c > 1
        ? n(c, r, o, i, s, a)
        : a == t.LEAST_UPPER_BOUND
          ? r < i.length
            ? r
            : -1
          : c
      : c - e > 1
        ? n(e, c, o, i, s, a)
        : a == t.LEAST_UPPER_BOUND
          ? c
          : e < 0
            ? -1
            : e;
}
(t.GREATEST_LOWER_BOUND = 1),
  (t.LEAST_UPPER_BOUND = 2),
  (t.search = function (e, r, o, i) {
    if (0 === r.length) return -1;
    var s = n(-1, r.length, e, r, o, i || t.GREATEST_LOWER_BOUND);
    if (s < 0) return -1;
    for (; s - 1 >= 0 && 0 === o(r[s], r[s - 1], !0); ) --s;
    return s;
  });
