// vendor/module-82615.js — webpack module 82615
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/module-68020 */),
  o = n(97190 /* vendor/module-97190 */),
  i = n(75122 /* vendor/module-75122 */),
  a = n(27352 /* vendor/module-27352 */);
let s;
function l(e) {
  return e.exception?.values?.[0];
}
const c =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function u(e) {
  return parseInt(e || "", 10);
}
function d(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
(t.addContextToFrame = function (e, t, n = 5) {
  if (void 0 === t.lineno) return;
  const r = e.length,
    o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
  t.pre_context = e.slice(Math.max(0, o - n), o).map((e) => i.snipLine(e, 0));
  const a = Math.min(r - 1, o);
  (t.context_line = i.snipLine(e[a], t.colno || 0)),
    (t.post_context = e
      .slice(Math.min(o + 1, r), o + 1 + n)
      .map((e) => i.snipLine(e, 0)));
}),
  (t.addExceptionMechanism = function (e, t) {
    const n = l(e);
    if (!n) return;
    const r = n.mechanism;
    if (
      ((n.mechanism = { type: "generic", handled: !0, ...r, ...t }),
      t && "data" in t)
    ) {
      const e = { ...r?.data, ...t.data };
      n.mechanism.data = e;
    }
  }),
  (t.addExceptionTypeValue = function (e, t, n) {
    const r = (e.exception = e.exception || {}),
      o = (r.values = r.values || []),
      i = (o[0] = o[0] || {});
    i.value || (i.value = t || ""), i.type || (i.type = n || "Error");
  }),
  (t.checkOrSetAlreadyCaught = function (e) {
    if (d(e)) return !0;
    try {
      r.addNonEnumerableProperty(e, "__sentry_captured__", !0);
    } catch {}
    return !1;
  }),
  (t.getEventDescription = function (e) {
    const { message: t, event_id: n } = e;
    if (t) return t;
    const r = l(e);
    return r
      ? r.type && r.value
        ? `${r.type}: ${r.value}`
        : r.type || r.value || n || "<unknown>"
      : n || "<unknown>";
  }),
  (t.isAlreadyCaptured = d),
  (t.parseSemver = function (e) {
    const t = e.match(c) || [],
      n = u(t[1]),
      r = u(t[2]),
      o = u(t[3]);
    return {
      buildmetadata: t[5],
      major: isNaN(n) ? void 0 : n,
      minor: isNaN(r) ? void 0 : r,
      patch: isNaN(o) ? void 0 : o,
      prerelease: t[4],
    };
  }),
  (t.uuid4 = function (
    e = (function () {
      const e = a.GLOBAL_OBJ;
      return e.crypto || e.msCrypto;
    })(),
  ) {
    try {
      if (e?.randomUUID)
        return o.withRandomSafeContext(() => e.randomUUID()).replace(/-/g, "");
    } catch {}
    return (
      s || (s = "10000000100040008000100000000000"),
      s.replace(/[018]/g, (e) =>
        (e ^ (((16 * o.safeMathRandom()) & 15) >> (e / 4))).toString(16),
      )
    );
  });
