// vendor/module-82371.js — webpack module 82371
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.cache = void 0),
  (t.formatNumber = a),
  (t.formatNumberValue = function (e, t, n) {
    return null == e
      ? ""
      : n
        ? a(e, t, n)
        : a(e / 100, t, { style: "percent" });
  }),
  (t.getFormatter = i);
var r = n(71494 /* vendor/module-71494 */);
const o = (t.cache = new Map());
function i(e, t) {
  const n = JSON.stringify({
      locale: (0, r.stringifyLocale)(e),
      options: t,
    }),
    i = o.get(n);
  if (i) return i;
  const a = new Intl.NumberFormat(e, t);
  return o.set(n, a), a;
}
function a(e, t, n) {
  return null == e ? "" : i(t, n).format(e);
}
