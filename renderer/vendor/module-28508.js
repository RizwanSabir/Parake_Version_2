// vendor/module-28508.js — webpack module 28508
// params: (e, a, t) = (module, exports, require)
t.d(a, { diagram: () => o });
var r = t(56496 /* vendor/module-56496 */),
  s = t(8679 /* vendor/module-8679 */),
  n = t(27166 /* vendor/module-27166 */),
  d = t(79456 /* vendor/module-79456 */),
  i = t(73744 /* vendor/module-73744 */),
  p = "12.2.0",
  o = {
    parser: {
      parse: (0, d.K)(async (e) => {
        const a = await (0, i.qg)("info", e);
        n.R.debug(a);
      }, "parse"),
    },
    db: { getVersion: (0, d.K)(() => p, "getVersion") },
    renderer: {
      draw: (0, d.K)((e, a, t) => {
        n.R.debug("rendering info diagram\n" + e);
        const d = (0, r.D)(a);
        (0, s.a$)(d, 100, 400, !0),
          d
            .append("g")
            .append("text")
            .attr("x", 100)
            .attr("y", 40)
            .attr("class", "version")
            .attr("font-size", 32)
            .style("text-anchor", "middle")
            .text(`v${t}`);
      }, "draw"),
    },
  };
