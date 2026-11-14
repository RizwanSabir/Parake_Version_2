// vendor/module-19026.js — webpack module 19026
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.hasNumberFormatRoundingOptions = a),
  (t.removeFloatingPointErrors = s),
  (t.toValidatedNumber = function (
    e,
    {
      step: t,
      minWithDefault: n,
      maxWithDefault: o,
      minWithZeroDefault: i,
      format: l,
      snapOnStep: c,
      small: u,
      clamp: d,
    },
  ) {
    if (null === e) return e;
    let p = e;
    if (
      (null != t &&
        c &&
        0 !== t &&
        (p = (function (e, t, n, r = "directional") {
          const o = Math.abs(n),
            i = Math.sign(n),
            a = e - t + 1e-10 * o * i;
          if ("nearest" === r) return t + Math.round(a / n) * n;
          return t + (i > 0 ? Math.floor(a / o) : Math.ceil(a / o)) * o;
        })(
          p,
          u || n === Number.MIN_SAFE_INTEGER ? i : n,
          t,
          u ? "nearest" : "directional",
        )),
      d && (p = (0, r.clamp)(p, n, o)),
      null == t && !a(l))
    )
      return p;
    const f = s(p, l);
    return d ? (0, r.clamp)(f, n, o) : f;
  });
var r = n(41153 /* vendor/module-41153 */),
  o = n(82371 /* vendor/module-82371 */),
  i = n(46597 /* vendor/module-46597 */);
function a(e) {
  return (
    null != e?.maximumFractionDigits ||
    null != e?.minimumFractionDigits ||
    null != e?.maximumSignificantDigits ||
    null != e?.minimumSignificantDigits ||
    null != e?.roundingIncrement ||
    null != e?.roundingMode ||
    null != e?.roundingPriority
  );
}
function s(e, t) {
  if (!Number.isFinite(e)) return e;
  if (!a(t)) {
    const t = parseFloat(e.toPrecision(15));
    return Math.abs(t - e) <=
      Math.min(Number.EPSILON * Math.max(1, Math.abs(e)), 1e-10)
      ? t
      : e;
  }
  const n = (0, o.getFormatter)("en-US", {
      ...t,
      signDisplay: "auto",
      currencySign: "standard",
      notation: "compact" === t.notation ? "standard" : t.notation,
      useGrouping: !1,
    }),
    r = n.format(e),
    s = (0, i.parseNumber)(r, "en-US", t);
  return null === s ? e : n.format(s) === r ? s : e;
}
