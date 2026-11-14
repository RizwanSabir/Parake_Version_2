// vendor/other/module-51644.js — webpack module 51644
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(75122 /* vendor/other/module-75122 */);
function s(e) {
  o.debug.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`,
  );
}
function a(e) {
  return "string" == typeof e || e instanceof RegExp;
}
(t.reparentChildSpans = function (e, t) {
  const n = t.parent_span_id,
    r = t.span_id;
  if (n) for (const t of e) t.parent_span_id === r && (t.parent_span_id = n);
}),
  (t.shouldIgnoreSpan = function (e, t) {
    if (!t?.length) return !1;
    for (const n of t) {
      if (a(n)) {
        if (e.description && i.isMatchingPattern(e.description, n))
          return r.DEBUG_BUILD && s(e), !0;
        continue;
      }
      const t = !!n.attributes && Object.keys(n.attributes).length > 0;
      if (!n.name && !n.op && !t) continue;
      const o =
          !n.name ||
          (e.description && i.isMatchingPattern(e.description, n.name)),
        c = !n.op || (e.op && i.isMatchingPattern(e.op, n.op)),
        u =
          !n.attributes ||
          Object.entries(n.attributes).every(([t, n]) => {
            return (
              (r = e.attributes?.[t]),
              (o = n),
              "string" == typeof r &&
              ("string" == typeof o || o instanceof RegExp)
                ? i.isMatchingPattern(r, o)
                : Array.isArray(r) && Array.isArray(o)
                  ? r.length === o.length && r.every((e, t) => e === o[t])
                  : r === o
            );
            var r, o;
          });
      if (o && c && u) return r.DEBUG_BUILD && s(e), !0;
    }
    return !1;
  });
