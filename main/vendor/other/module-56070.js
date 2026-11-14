// vendor/other/module-56070.js — webpack module 56070
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(82579 /* vendor/other/module-82579 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(57786 /* vendor/other/module-57786 */),
  a = o.defineIntegration(() => {
    let e;
    return {
      name: "Dedupe",
      processEvent(t) {
        if (t.type) return t;
        try {
          if (c(t, e))
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
function c(e, t) {
  return !(
    !t ||
    (!(function (e, t) {
      const n = e.message,
        r = t.message;
      return (
        !(!n && !r) &&
        !((n && !r) || (!n && r)) &&
        n === r &&
        !!l(e, t) &&
        !!u(e, t)
      );
    })(e, t) &&
      !(function (e, t) {
        const n = d(t),
          r = d(e);
        return (
          !(!n || !r) &&
          n.type === r.type &&
          n.value === r.value &&
          !!l(e, t) &&
          !!u(e, t)
        );
      })(e, t))
  );
}
function u(e, t) {
  let n = s.getFramesFromEvent(e),
    r = s.getFramesFromEvent(t);
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
function l(e, t) {
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
(t._shouldDropEvent = c), (t.dedupeIntegration = a);
