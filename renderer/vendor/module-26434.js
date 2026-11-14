// vendor/module-26434.js — webpack module 26434
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(97190 /* vendor/module-97190 */);
function o(e, t = r.safeDateNow()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return 1e3 * n;
  const o = Date.parse(`${e}`);
  return isNaN(o) ? 6e4 : o - t;
}
function i(e, t) {
  return e[t] || e.all || 0;
}
(t.DEFAULT_RETRY_AFTER = 6e4),
  (t.disabledUntil = i),
  (t.isRateLimited = function (e, t, n = r.safeDateNow()) {
    return i(e, t) > n;
  }),
  (t.parseRetryAfterHeader = o),
  (t.updateRateLimits = function (
    e,
    { statusCode: t, headers: n },
    i = r.safeDateNow(),
  ) {
    const a = { ...e },
      s = n?.["x-sentry-rate-limits"],
      l = n?.["retry-after"];
    if (s)
      for (const e of s.trim().split(",")) {
        const [t, n, , , r] = e.split(":", 5),
          o = parseInt(t, 10),
          s = 1e3 * (isNaN(o) ? 60 : o);
        if (n)
          for (const e of n.split(";"))
            ("metric_bucket" === e && r && !r.split(";").includes("custom")) ||
              (a[e] = i + s);
        else a.all = i + s;
      }
    else l ? (a.all = i + o(l, i)) : 429 === t && (a.all = i + 6e4);
    return a;
  });
