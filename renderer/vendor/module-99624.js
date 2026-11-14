// vendor/module-99624.js — webpack module 99624
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, {
  IU: () => d,
  Oi: () => s,
  U7: () => c,
  U_: () => u,
  on: () => h,
});
var i = r(16450 /* vendor/module-16450 */),
  o = r(72514 /* vendor/module-72514 */),
  n = r(27166 /* vendor/module-27166 */),
  a = r(79456 /* vendor/module-79456 */),
  s = (0, a.K)(({ flowchart: t }) => {
    const e = t?.subGraphTitleMargin?.top ?? 0,
      r = t?.subGraphTitleMargin?.bottom ?? 0;
    return {
      subGraphTitleTopMargin: e,
      subGraphTitleBottomMargin: r,
      subGraphTitleTotalMargin: e + r,
    };
  }, "getSubGraphTitleMargins"),
  l = new Map();
async function h(t, e, r) {
  let n, a;
  "rect" === e.shape &&
    (e.rx && e.ry ? (e.shape = "roundedRect") : (e.shape = "squareRect"));
  const s = e.shape ? i.nq[e.shape] : void 0;
  if (!s)
    throw new Error(`No such shape: ${e.shape}. Please check your syntax.`);
  if (e.link) {
    let i;
    "sandbox" === r.config.securityLevel
      ? (i = "_top")
      : e.linkTarget && (i = e.linkTarget || "_blank"),
      (n = t
        .insert("svg:a")
        .attr("xlink:href", e.link)
        .attr("target", i ?? null)),
      (a = await s(n, e, r));
  } else (a = await s(t, e, r)), (n = a);
  return (
    n.attr("data-look", (0, o.KL)(e.look)),
    e.tooltip && a.attr("title", e.tooltip),
    l.set(e.id, n),
    e.haveCallback && n.attr("class", n.attr("class") + " clickable"),
    n
  );
}
(0, a.K)(h, "insertNode");
var c = (0, a.K)((t, e) => {
    l.set(e.id, t);
  }, "setNodeElem"),
  d = (0, a.K)(() => {
    l.clear();
  }, "clear"),
  u = (0, a.K)((t) => {
    const e = l.get(t.id);
    n.R.trace(
      "Transforming node",
      t.diff,
      t,
      "translate(" + (t.x - t.width / 2 - 5) + ", " + t.width / 2 + ")",
    );
    const r = t.diff || 0;
    return (
      t.clusterNode
        ? e.attr(
            "transform",
            "translate(" +
              (t.x + r - t.width / 2) +
              ", " +
              (t.y - t.height / 2 - 8) +
              ")",
          )
        : e.attr("transform", "translate(" + t.x + ", " + t.y + ")"),
      r
    );
  }, "positionNode");
