// vendor/other/module-68621.js — webpack module 68621
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(38862 /* vendor/other/module-38862 */);
(t.logSpanEnd = function (e) {
  if (!r.DEBUG_BUILD) return;
  const { description: t = "< unknown name >", op: n = "< unknown op >" } =
      i.spanToJSON(e),
    { spanId: s } = e.spanContext(),
    a = `[Tracing] Finishing "${n}" ${i.getRootSpan(e) === e ? "root " : ""}span "${t}" with ID ${s}`;
  o.debug.log(a);
}),
  (t.logSpanStart = function (e) {
    if (!r.DEBUG_BUILD) return;
    const {
        description: t = "< unknown name >",
        op: n = "< unknown op >",
        parent_span_id: s,
      } = i.spanToJSON(e),
      { spanId: a } = e.spanContext(),
      c = i.spanIsSampled(e),
      u = i.getRootSpan(e),
      l = u === e,
      d = `[Tracing] Starting ${c ? "sampled" : "unsampled"} ${l ? "root " : ""}span`,
      p = [`op: ${n}`, `name: ${t}`, `ID: ${a}`];
    if ((s && p.push(`parent ID: ${s}`), !l)) {
      const { op: e, description: t } = i.spanToJSON(u);
      p.push(`root ID: ${u.spanContext().spanId}`),
        e && p.push(`root op: ${e}`),
        t && p.push(`root description: ${t}`);
    }
    o.debug.log(`${d}\n  ${p.join("\n  ")}`);
  });
