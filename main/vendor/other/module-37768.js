// vendor/other/module-37768.js — webpack module 37768
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
function n(e, t, n) {
  var r = e[t];
  (e[t] = e[n]), (e[n] = r);
}
function r(e, t, o, i) {
  if (o < i) {
    var s = o - 1;
    n(e, ((l = o), (d = i), Math.round(l + Math.random() * (d - l))), i);
    for (var a = e[i], c = o; c < i; c++) t(e[c], a) <= 0 && n(e, (s += 1), c);
    n(e, s + 1, c);
    var u = s + 1;
    r(e, t, o, u - 1), r(e, t, u + 1, i);
  }
  var l, d;
}
t.g = function (e, t) {
  r(e, t, 0, e.length - 1);
};
