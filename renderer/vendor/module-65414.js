// vendor/module-65414.js — webpack module 65414
// params: (t, e, n) = (module, exports, require)
n.d(e, {
  CP: () => u,
  Ck: () => d,
  HT: () => p,
  PB: () => y,
  aC: () => h,
  lC: () => l,
  m: () => c,
  tk: () => o,
});
var i = n(8679 /* vendor/module-8679 */),
  s = n(79456 /* vendor/module-79456 */),
  r = n(8041 /* vendor/module-8041 */),
  a = n(27197 /* vendor/module-27197 */),
  o = (0, s.K)((t, e) => {
    const n = t.append("rect");
    if (
      (n.attr("x", e.x),
      n.attr("y", e.y),
      n.attr("fill", e.fill),
      n.attr("stroke", e.stroke),
      n.attr("width", e.width),
      n.attr("height", e.height),
      e.name && n.attr("name", e.name),
      e.rx && n.attr("rx", e.rx),
      e.ry && n.attr("ry", e.ry),
      void 0 !== e.attrs)
    )
      for (const t in e.attrs) n.attr(t, e.attrs[t]);
    return e.class && n.attr("class", e.class), n;
  }, "drawRect"),
  l = (0, s.K)((t, e) => {
    const n = {
      x: e.startx,
      y: e.starty,
      width: e.stopx - e.startx,
      height: e.stopy - e.starty,
      fill: e.fill,
      stroke: e.stroke,
      class: "rect",
    };
    o(t, n).lower();
  }, "drawBackgroundRect"),
  c = (0, s.K)((t, e) => {
    const n = e.text.replace(i.H1, " "),
      s = t.append("text");
    s.attr("x", e.x),
      s.attr("y", e.y),
      s.attr("class", "legend"),
      s.style("text-anchor", e.anchor),
      e.class && s.attr("class", e.class);
    const r = s.append("tspan");
    return r.attr("x", e.x + 2 * e.textMargin), r.text(n), s;
  }, "drawText"),
  h = (0, s.K)((t, e, n, i) => {
    const s = t.append("image");
    s.attr("x", e), s.attr("y", n);
    const a = (0, r.J)(i);
    s.attr("xlink:href", a);
  }, "drawImage"),
  u = (0, s.K)((t, e, n, i) => {
    const s = t.append("use");
    s.attr("x", e), s.attr("y", n);
    const a = (0, r.J)(i);
    s.attr("xlink:href", `#${a}`);
  }, "drawEmbeddedImage"),
  y = (0, s.K)(
    () => ({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fill: "#EDF2AE",
      stroke: "#666",
      anchor: "start",
      rx: 0,
      ry: 0,
    }),
    "getNoteRect",
  ),
  p = (0, s.K)(
    () => ({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      "text-anchor": "start",
      style: "#666",
      textMargin: 0,
      rx: 0,
      ry: 0,
      tspan: !0,
    }),
    "getTextObj",
  ),
  d = (0, s.K)(() => {
    let t = (0, a.Ltv)(".mermaidTooltip");
    return (
      t.empty() &&
        (t = (0, a.Ltv)("body")
          .append("div")
          .attr("class", "mermaidTooltip")
          .style("opacity", 0)
          .style("position", "absolute")
          .style("text-align", "center")
          .style("max-width", "200px")
          .style("padding", "2px")
          .style("font-size", "12px")
          .style("background", "#ffffde")
          .style("border", "1px solid #333")
          .style("border-radius", "2px")
          .style("pointer-events", "none")
          .style("z-index", "100")),
      t
    );
  }, "createTooltip");
