// vendor/other/module-26434.js — webpack module 26434
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(97190 /* vendor/other/module-97190 */);
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
    const s = { ...e },
      a = n?.["x-sentry-rate-limits"],
      c = n?.["retry-after"];
    if (a)
      for (const e of a.trim().split(",")) {
        const [t, n, , , r] = e.split(":", 5),
          o = parseInt(t, 10),
          a = 1e3 * (isNaN(o) ? 60 : o);
        if (n)
          for (const e of n.split(";"))
            ("metric_bucket" === e && r && !r.split(";").includes("custom")) ||
              (s[e] = i + a);
        else s.all = i + a;
      }
    else c ? (s.all = i + o(c, i)) : 429 === t && (s.all = i + 6e4);
    return s;
  });
