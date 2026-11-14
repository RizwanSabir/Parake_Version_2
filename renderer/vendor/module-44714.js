// vendor/module-44714.js — webpack module 44714
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(38862 /* vendor/module-38862 */),
  s = "flag.evaluation.";
function l(e, t, n, r) {
  if ("boolean" != typeof n) return;
  if (e.length > r)
    return void (
      o.DEBUG_BUILD &&
      i.debug.error(
        `[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`,
      )
    );
  const a = e.findIndex((e) => e.flag === t);
  -1 !== a && e.splice(a, 1),
    e.length === r && e.shift(),
    e.push({ flag: t, result: n });
}
(t._INTERNAL_FLAG_BUFFER_SIZE = 100),
  (t._INTERNAL_MAX_FLAGS_PER_SPAN = 10),
  (t._INTERNAL_addFeatureFlagToActiveSpan = function (e, t, n = 10) {
    if ("boolean" != typeof t) return;
    const r = a.getActiveSpan();
    if (!r) return;
    const o = a.spanToJSON(r).data;
    (`${s}${e}` in o ||
      Object.keys(o).filter((e) => e.startsWith(s)).length < n) &&
      r.setAttribute(`${s}${e}`, t);
  }),
  (t._INTERNAL_copyFlagsFromScopeToEvent = function (e) {
    if (e.type) return e;
    const t = r.getCurrentScope().getScopeData().contexts.flags,
      n = t ? t.values : [];
    return n.length
      ? (void 0 === e.contexts && (e.contexts = {}),
        (e.contexts.flags = { values: [...n] }),
        e)
      : e;
  }),
  (t._INTERNAL_insertFlagToScope = function (e, t, n = 100) {
    const o = r.getCurrentScope().getScopeData().contexts;
    o.flags || (o.flags = { values: [] }), l(o.flags.values, e, t, n);
  }),
  (t._INTERNAL_insertToFlagBuffer = l);
