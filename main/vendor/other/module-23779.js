// vendor/other/module-23779.js — webpack module 23779
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */),
  o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
e.exports = new r("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: function (e) {
    if (null === e) return !1;
    let t = 0;
    const n = e.length,
      r = o;
    for (let o = 0; o < n; o++) {
      const n = r.indexOf(e.charAt(o));
      if (!(n > 64)) {
        if (n < 0) return !1;
        t += 6;
      }
    }
    return t % 8 == 0;
  },
  construct: function (e) {
    const t = e.replace(/[\r\n=]/g, ""),
      n = t.length,
      r = o;
    let i = 0;
    const s = [];
    for (let e = 0; e < n; e++)
      e % 4 == 0 &&
        e &&
        (s.push((i >> 16) & 255), s.push((i >> 8) & 255), s.push(255 & i)),
        (i = (i << 6) | r.indexOf(t.charAt(e)));
    const a = (n % 4) * 6;
    return (
      0 === a
        ? (s.push((i >> 16) & 255), s.push((i >> 8) & 255), s.push(255 & i))
        : 18 === a
          ? (s.push((i >> 10) & 255), s.push((i >> 2) & 255))
          : 12 === a && s.push((i >> 4) & 255),
      new Uint8Array(s)
    );
  },
  predicate: function (e) {
    return "[object Uint8Array]" === Object.prototype.toString.call(e);
  },
  represent: function (e) {
    let t = "",
      n = 0;
    const r = e.length,
      i = o;
    for (let o = 0; o < r; o++)
      o % 3 == 0 &&
        o &&
        ((t += i[(n >> 18) & 63]),
        (t += i[(n >> 12) & 63]),
        (t += i[(n >> 6) & 63]),
        (t += i[63 & n])),
        (n = (n << 8) + e[o]);
    const s = r % 3;
    return (
      0 === s
        ? ((t += i[(n >> 18) & 63]),
          (t += i[(n >> 12) & 63]),
          (t += i[(n >> 6) & 63]),
          (t += i[63 & n]))
        : 2 === s
          ? ((t += i[(n >> 10) & 63]),
            (t += i[(n >> 4) & 63]),
            (t += i[(n << 2) & 63]),
            (t += i[64]))
          : 1 === s &&
            ((t += i[(n >> 2) & 63]),
            (t += i[(n << 4) & 63]),
            (t += i[64]),
            (t += i[64])),
      t
    );
  },
});
