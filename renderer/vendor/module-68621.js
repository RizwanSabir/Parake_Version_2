// vendor/module-68621.js — webpack module 68621
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(38862 /* vendor/module-38862 */);
(t.logSpanEnd = function (e) {
  if (!r.DEBUG_BUILD) return;
  const { description: t = "< unknown name >", op: n = "< unknown op >" } =
      i.spanToJSON(e),
    { spanId: a } = e.spanContext(),
    s = `[Tracing] Finishing "${n}" ${i.getRootSpan(e) === e ? "root " : ""}span "${t}" with ID ${a}`;
  o.debug.log(s);
}),
  (t.logSpanStart = function (e) {
    if (!r.DEBUG_BUILD) return;
    const {
        description: t = "< unknown name >",
        op: n = "< unknown op >",
        parent_span_id: a,
      } = i.spanToJSON(e),
      { spanId: s } = e.spanContext(),
      l = i.spanIsSampled(e),
      c = i.getRootSpan(e),
      u = c === e,
      d = `[Tracing] Starting ${l ? "sampled" : "unsampled"} ${u ? "root " : ""}span`,
      p = [`op: ${n}`, `name: ${t}`, `ID: ${s}`];
    if ((a && p.push(`parent ID: ${a}`), !u)) {
      const { op: e, description: t } = i.spanToJSON(c);
      p.push(`root ID: ${c.spanContext().spanId}`),
        e && p.push(`root op: ${e}`),
        t && p.push(`root description: ${t}`);
    }
    o.debug.log(`${d}\n  ${p.join("\n  ")}`);
  });
