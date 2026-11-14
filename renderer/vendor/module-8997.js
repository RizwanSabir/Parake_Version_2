// vendor/module-8997.js — webpack module 8997
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  if (0 === e) return 0;
  if (Math.abs(e) < 1) {
    const t = e.toExponential().split("e-"),
      n = t[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(t[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getDecimalPrecision = n),
  (t.roundValueToStep = function (e, t, r) {
    const o = Math.round((e - r) / t) * t + r;
    return Number(o.toFixed(Math.max(n(t), n(r))));
  });
