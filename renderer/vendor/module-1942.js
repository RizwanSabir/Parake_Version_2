// vendor/module-1942.js — webpack module 1942
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { A: () => a });
var i = r(45718 /* vendor/module-45718 */),
  o = r(11028 /* vendor/module-11028 */);
const n = (t) =>
    ((t) => {
      const { r: e, g: r, b: n } = o.A.parse(t),
        a =
          0.2126 * i.A.channel.toLinear(e) +
          0.7152 * i.A.channel.toLinear(r) +
          0.0722 * i.A.channel.toLinear(n);
      return i.A.lang.round(a);
    })(t) >= 0.5,
  a = (t) => !n(t);
