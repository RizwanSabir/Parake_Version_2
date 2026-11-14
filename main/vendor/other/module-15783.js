// vendor/other/module-15783.js — webpack module 15783
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
var r = n(40370 /* vendor/other/module-40370 */);
function o() {
  (this._array = []),
    (this._sorted = !0),
    (this._last = { generatedLine: -1, generatedColumn: 0 });
}
(o.prototype.unsortedForEach = function (e, t) {
  this._array.forEach(e, t);
}),
  (o.prototype.add = function (e) {
    var t, n, o, i, s, a;
    (n = e),
      (o = (t = this._last).generatedLine),
      (i = n.generatedLine),
      (s = t.generatedColumn),
      (a = n.generatedColumn),
      i > o ||
      (i == o && a >= s) ||
      r.compareByGeneratedPositionsInflated(t, n) <= 0
        ? ((this._last = e), this._array.push(e))
        : ((this._sorted = !1), this._array.push(e));
  }),
  (o.prototype.toArray = function () {
    return (
      this._sorted ||
        (this._array.sort(r.compareByGeneratedPositionsInflated),
        (this._sorted = !0)),
      this._array
    );
  }),
  (t.P = o);
