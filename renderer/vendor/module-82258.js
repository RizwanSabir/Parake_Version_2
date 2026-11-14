// vendor/module-82258.js — webpack module 82258
// params: (t) = (module, exports, require)
t.exports = (function () {
  "use strict";
  return function (t, e) {
    var n = e.prototype,
      i = n.format;
    n.format = function (t) {
      var e = this,
        n = this.$locale();
      if (!this.isValid()) return i.bind(this)(t);
      var s = this.$utils(),
        r = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(
          /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
          function (t) {
            switch (t) {
              case "Q":
                return Math.ceil((e.$M + 1) / 3);
              case "Do":
                return n.ordinal(e.$D);
              case "gggg":
                return e.weekYear();
              case "GGGG":
                return e.isoWeekYear();
              case "wo":
                return n.ordinal(e.week(), "W");
              case "w":
              case "ww":
                return s.s(e.week(), "w" === t ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(
                  String(0 === e.$H ? 24 : e.$H),
                  "k" === t ? 1 : 2,
                  "0",
                );
              case "X":
                return Math.floor(e.$d.getTime() / 1e3);
              case "x":
                return e.$d.getTime();
              case "z":
                return "[" + e.offsetName() + "]";
              case "zzz":
                return "[" + e.offsetName("long") + "]";
              default:
                return t;
            }
          },
        );
      return i.bind(this)(r);
    };
  };
})();
