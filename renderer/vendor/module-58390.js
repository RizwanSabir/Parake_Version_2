// vendor/module-58390.js — webpack module 58390
// params: (t) = (module, exports, require)
t.exports = (function () {
  "use strict";
  var t = "day";
  return function (e, n, i) {
    var s = function (e) {
        return e.add(4 - e.isoWeekday(), t);
      },
      r = n.prototype;
    (r.isoWeekYear = function () {
      return s(this).year();
    }),
      (r.isoWeek = function (e) {
        if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), t);
        var n,
          r,
          a,
          o = s(this),
          c =
            ((n = this.isoWeekYear()),
            (a =
              4 -
              (r = (this.$u ? i.utc : i)()
                .year(n)
                .startOf("year")).isoWeekday()),
            r.isoWeekday() > 4 && (a += 7),
            r.add(a, t));
        return o.diff(c, "week") + 1;
      }),
      (r.isoWeekday = function (t) {
        return this.$utils().u(t)
          ? this.day() || 7
          : this.day(this.day() % 7 ? t : t - 7);
      });
    var a = r.startOf;
    r.startOf = function (t, e) {
      var n = this.$utils(),
        i = !!n.u(e) || e;
      return "isoweek" === n.p(t)
        ? i
          ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day")
          : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf(
              "day",
            )
        : a.bind(this)(t, e);
    };
  };
})();
