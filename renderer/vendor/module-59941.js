// vendor/module-59941.js — webpack module 59941
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { v7: () => s });
var r = n(31424 /* vendor/module-31424 */),
  o = n(55292 /* vendor/module-55292 */);
const i = {};
function a(e, t, n, r, o = 0) {
  if (e.length < 16) throw new Error("Random bytes length must be >= 16");
  if (r) {
    if (o < 0 || o + 16 > r.length)
      throw new RangeError(
        `UUID byte range ${o}:${o + 15} is out of buffer bounds`,
      );
  } else (r = new Uint8Array(16)), (o = 0);
  return (
    (t ??= Date.now()),
    (n ??= ((127 * e[6]) << 24) | (e[7] << 16) | (e[8] << 8) | e[9]),
    (r[o++] = (t / 1099511627776) & 255),
    (r[o++] = (t / 4294967296) & 255),
    (r[o++] = (t / 16777216) & 255),
    (r[o++] = (t / 65536) & 255),
    (r[o++] = (t / 256) & 255),
    (r[o++] = 255 & t),
    (r[o++] = 112 | ((n >>> 28) & 15)),
    (r[o++] = (n >>> 20) & 255),
    (r[o++] = 128 | ((n >>> 14) & 63)),
    (r[o++] = (n >>> 6) & 255),
    (r[o++] = ((n << 2) & 255) | (3 & e[10])),
    (r[o++] = e[11]),
    (r[o++] = e[12]),
    (r[o++] = e[13]),
    (r[o++] = e[14]),
    (r[o++] = e[15]),
    r
  );
}
const s = function (e, t, n) {
  let s;
  if (e) s = a(e.random ?? e.rng?.() ?? (0, r.A)(), e.msecs, e.seq, t, n);
  else {
    const e = Date.now(),
      o = (0, r.A)();
    !(function (e, t, n) {
      (e.msecs ??= -1 / 0),
        (e.seq ??= 0),
        t > e.msecs
          ? ((e.seq = (n[6] << 23) | (n[7] << 16) | (n[8] << 8) | n[9]),
            (e.msecs = t))
          : ((e.seq = (e.seq + 1) | 0), 0 === e.seq && e.msecs++);
    })(i, e, o),
      (s = a(o, i.msecs, i.seq, t, n));
  }
  return t ?? (0, o.k)(s);
};
