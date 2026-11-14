// vendor/module-56070.js — webpack module 56070
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(57786 /* vendor/module-57786 */),
  s = o.defineIntegration(() => {
    let e;
    return {
      name: "Dedupe",
      processEvent(t) {
        if (t.type) return t;
        try {
          if (l(t, e))
            return (
              r.DEBUG_BUILD &&
                i.debug.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch {}
        return (e = t);
      },
    };
  });
function l(e, t) {
  return !(
    !t ||
    (!(function (e, t) {
      const n = e.message,
        r = t.message;
      return (
        !(!n && !r) &&
        !((n && !r) || (!n && r)) &&
        n === r &&
        !!u(e, t) &&
        !!c(e, t)
      );
    })(e, t) &&
      !(function (e, t) {
        const n = d(t),
          r = d(e);
        return (
          !(!n || !r) &&
          n.type === r.type &&
          n.value === r.value &&
          !!u(e, t) &&
          !!c(e, t)
        );
      })(e, t))
  );
}
function c(e, t) {
  let n = a.getFramesFromEvent(e),
    r = a.getFramesFromEvent(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  if (r.length !== n.length) return !1;
  for (let e = 0; e < r.length; e++) {
    const t = r[e],
      o = n[e];
    if (
      t.filename !== o.filename ||
      t.lineno !== o.lineno ||
      t.colno !== o.colno ||
      t.function !== o.function
    )
      return !1;
  }
  return !0;
}
function u(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  try {
    return !(n.join("") !== r.join(""));
  } catch {
    return !1;
  }
}
function d(e) {
  return e.exception?.values?.[0];
}
(t._shouldDropEvent = l), (t.dedupeIntegration = s);
