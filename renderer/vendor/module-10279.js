// vendor/module-10279.js — webpack module 10279
// params: (t) = (module, exports, require)
t.exports = (function () {
  "use strict";
  var t,
    e,
    n = 1e3,
    i = 6e4,
    s = 36e5,
    r = 864e5,
    a = 31536e6,
    o = 2628e6,
    c =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
    l = /\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,
    d = {
      years: a,
      months: o,
      days: r,
      hours: s,
      minutes: i,
      seconds: n,
      milliseconds: 1,
      weeks: 6048e5,
    },
    u = function (t) {
      return t instanceof p;
    },
    h = function (t, e, n) {
      return new p(t, n, e.$l);
    },
    f = function (t) {
      return e.p(t) + "s";
    },
    m = function (t) {
      return t < 0;
    },
    k = function (t) {
      return m(t) ? Math.ceil(t) : Math.floor(t);
    },
    y = function (t) {
      return Math.abs(t);
    },
    g = function (t, e) {
      return t
        ? m(t)
          ? { negative: !0, format: "" + y(t) + e }
          : { negative: !1, format: "" + t + e }
        : { negative: !1, format: "" };
    },
    p = (function () {
      function m(t, e, n) {
        var i = this;
        if (
          ((this.$d = {}),
          (this.$l = n),
          void 0 === t && ((this.$ms = 0), this.parseFromMilliseconds()),
          e)
        )
          return h(t * d[f(e)], this);
        if ("number" == typeof t)
          return (this.$ms = t), this.parseFromMilliseconds(), this;
        if ("object" == typeof t)
          return (
            Object.keys(t).forEach(function (e) {
              i.$d[f(e)] = t[e];
            }),
            this.calMilliseconds(),
            this
          );
        if ("string" == typeof t) {
          var s = t.match(c);
          if (s) {
            var r = s.slice(2).map(function (t) {
              return null != t ? Number(t) : 0;
            });
            return (
              (this.$d.years = r[0]),
              (this.$d.months = r[1]),
              (this.$d.weeks = r[2]),
              (this.$d.days = r[3]),
              (this.$d.hours = r[4]),
              (this.$d.minutes = r[5]),
              (this.$d.seconds = r[6]),
              this.calMilliseconds(),
              this
            );
          }
        }
        return this;
      }
      var y = m.prototype;
      return (
        (y.calMilliseconds = function () {
          var t = this;
          this.$ms = Object.keys(this.$d).reduce(function (e, n) {
            return e + (t.$d[n] || 0) * d[n];
          }, 0);
        }),
        (y.parseFromMilliseconds = function () {
          var t = this.$ms;
          (this.$d.years = k(t / a)),
            (t %= a),
            (this.$d.months = k(t / o)),
            (t %= o),
            (this.$d.days = k(t / r)),
            (t %= r),
            (this.$d.hours = k(t / s)),
            (t %= s),
            (this.$d.minutes = k(t / i)),
            (t %= i),
            (this.$d.seconds = k(t / n)),
            (t %= n),
            (this.$d.milliseconds = t);
        }),
        (y.toISOString = function () {
          var t = g(this.$d.years, "Y"),
            e = g(this.$d.months, "M"),
            n = +this.$d.days || 0;
          this.$d.weeks && (n += 7 * this.$d.weeks);
          var i = g(n, "D"),
            s = g(this.$d.hours, "H"),
            r = g(this.$d.minutes, "M"),
            a = this.$d.seconds || 0;
          this.$d.milliseconds &&
            ((a += this.$d.milliseconds / 1e3),
            (a = Math.round(1e3 * a) / 1e3));
          var o = g(a, "S"),
            c =
              t.negative ||
              e.negative ||
              i.negative ||
              s.negative ||
              r.negative ||
              o.negative,
            l = s.format || r.format || o.format ? "T" : "",
            d =
              (c ? "-" : "") +
              "P" +
              t.format +
              e.format +
              i.format +
              l +
              s.format +
              r.format +
              o.format;
          return "P" === d || "-P" === d ? "P0D" : d;
        }),
        (y.toJSON = function () {
          return this.toISOString();
        }),
        (y.format = function (t) {
          var n = t || "YYYY-MM-DDTHH:mm:ss",
            i = {
              Y: this.$d.years,
              YY: e.s(this.$d.years, 2, "0"),
              YYYY: e.s(this.$d.years, 4, "0"),
              M: this.$d.months,
              MM: e.s(this.$d.months, 2, "0"),
              D: this.$d.days,
              DD: e.s(this.$d.days, 2, "0"),
              H: this.$d.hours,
              HH: e.s(this.$d.hours, 2, "0"),
              m: this.$d.minutes,
              mm: e.s(this.$d.minutes, 2, "0"),
              s: this.$d.seconds,
              ss: e.s(this.$d.seconds, 2, "0"),
              SSS: e.s(this.$d.milliseconds, 3, "0"),
            };
          return n.replace(l, function (t, e) {
            return e || String(i[t]);
          });
        }),
        (y.as = function (t) {
          return this.$ms / d[f(t)];
        }),
        (y.get = function (t) {
          var e = this.$ms,
            n = f(t);
          return (
            "milliseconds" === n
              ? (e %= 1e3)
              : (e = "weeks" === n ? k(e / d[n]) : this.$d[n]),
            e || 0
          );
        }),
        (y.add = function (t, e, n) {
          var i;
          return (
            (i = e ? t * d[f(e)] : u(t) ? t.$ms : h(t, this).$ms),
            h(this.$ms + i * (n ? -1 : 1), this)
          );
        }),
        (y.subtract = function (t, e) {
          return this.add(t, e, !0);
        }),
        (y.locale = function (t) {
          var e = this.clone();
          return (e.$l = t), e;
        }),
        (y.clone = function () {
          return h(this.$ms, this);
        }),
        (y.humanize = function (e) {
          return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
        }),
        (y.valueOf = function () {
          return this.asMilliseconds();
        }),
        (y.milliseconds = function () {
          return this.get("milliseconds");
        }),
        (y.asMilliseconds = function () {
          return this.as("milliseconds");
        }),
        (y.seconds = function () {
          return this.get("seconds");
        }),
        (y.asSeconds = function () {
          return this.as("seconds");
        }),
        (y.minutes = function () {
          return this.get("minutes");
        }),
        (y.asMinutes = function () {
          return this.as("minutes");
        }),
        (y.hours = function () {
          return this.get("hours");
        }),
        (y.asHours = function () {
          return this.as("hours");
        }),
        (y.days = function () {
          return this.get("days");
        }),
        (y.asDays = function () {
          return this.as("days");
        }),
        (y.weeks = function () {
          return this.get("weeks");
        }),
        (y.asWeeks = function () {
          return this.as("weeks");
        }),
        (y.months = function () {
          return this.get("months");
        }),
        (y.asMonths = function () {
          return this.as("months");
        }),
        (y.years = function () {
          return this.get("years");
        }),
        (y.asYears = function () {
          return this.as("years");
        }),
        m
      );
    })(),
    v = function (t, e, n) {
      return t
        .add(e.years() * n, "y")
        .add(e.months() * n, "M")
        .add(e.days() * n, "d")
        .add(e.hours() * n, "h")
        .add(e.minutes() * n, "m")
        .add(e.seconds() * n, "s")
        .add(e.milliseconds() * n, "ms");
    };
  return function (n, i, s) {
    (t = s),
      (e = s().$utils()),
      (s.duration = function (t, e) {
        var n = s.locale();
        return h(t, { $l: n }, e);
      }),
      (s.isDuration = u);
    var r = i.prototype.add,
      a = i.prototype.subtract;
    (i.prototype.add = function (t, e) {
      return u(t) ? v(this, t, 1) : r.bind(this)(t, e);
    }),
      (i.prototype.subtract = function (t, e) {
        return u(t) ? v(this, t, -1) : a.bind(this)(t, e);
      });
  };
})();
