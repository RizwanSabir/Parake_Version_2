// vendor/other/module-33918.js — webpack module 33918
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
!(function () {
  var t;
  function n(e, r) {
    var o = this instanceof n ? this : t;
    if (
      (o.reset(r),
      "string" == typeof e && e.length > 0 && o.hash(e),
      o !== this)
    )
      return o;
  }
  (n.prototype.hash = function (e) {
    var t, n, r, o, i;
    switch (
      ((i = e.length), (this.len += i), (n = this.k1), (r = 0), this.rem)
    ) {
      case 0:
        n ^= i > r ? 65535 & e.charCodeAt(r++) : 0;
      case 1:
        n ^= i > r ? (65535 & e.charCodeAt(r++)) << 8 : 0;
      case 2:
        n ^= i > r ? (65535 & e.charCodeAt(r++)) << 16 : 0;
      case 3:
        (n ^= i > r ? (255 & e.charCodeAt(r)) << 24 : 0),
          (n ^= i > r ? (65280 & e.charCodeAt(r++)) >> 8 : 0);
    }
    if (((this.rem = (i + this.rem) & 3), (i -= this.rem) > 0)) {
      for (
        t = this.h1;
        (t =
          (5 *
            (t =
              ((t ^= n =
                (13715 *
                  (n =
                    ((n =
                      (11601 * n + 3432906752 * (65535 & n)) & 4294967295) <<
                      15) |
                    (n >>> 17)) +
                  461832192 * (65535 & n)) &
                4294967295) <<
                13) |
              (t >>> 19)) +
            3864292196) &
          4294967295),
          !(r >= i);

      )
        (n =
          (65535 & e.charCodeAt(r++)) ^
          ((65535 & e.charCodeAt(r++)) << 8) ^
          ((65535 & e.charCodeAt(r++)) << 16)),
          (n ^= ((255 & (o = e.charCodeAt(r++))) << 24) ^ ((65280 & o) >> 8));
      switch (((n = 0), this.rem)) {
        case 3:
          n ^= (65535 & e.charCodeAt(r + 2)) << 16;
        case 2:
          n ^= (65535 & e.charCodeAt(r + 1)) << 8;
        case 1:
          n ^= 65535 & e.charCodeAt(r);
      }
      this.h1 = t;
    }
    return (this.k1 = n), this;
  }),
    (n.prototype.result = function () {
      var e, t;
      return (
        (e = this.k1),
        (t = this.h1),
        e > 0 &&
          (t ^= e =
            (13715 *
              (e =
                ((e = (11601 * e + 3432906752 * (65535 & e)) & 4294967295) <<
                  15) |
                (e >>> 17)) +
              461832192 * (65535 & e)) &
            4294967295),
        (t ^= this.len),
        (t = (51819 * (t ^= t >>> 16) + 2246770688 * (65535 & t)) & 4294967295),
        (t = (44597 * (t ^= t >>> 13) + 3266445312 * (65535 & t)) & 4294967295),
        (t ^= t >>> 16) >>> 0
      );
    }),
    (n.prototype.reset = function (e) {
      return (
        (this.h1 = "number" == typeof e ? e : 0),
        (this.rem = this.k1 = this.len = 0),
        this
      );
    }),
    (t = new n()),
    (e.exports = n);
})();
