// vendor/module-59937.js — webpack module 59937
// params: (t, e, i) = (module, exports, require)
"use strict";
i.r(e), i.d(e, { render: () => f });
var r = i(27166 /* vendor/module-27166 */),
  n = i(79456 /* vendor/module-79456 */),
  o = i(88936 /* vendor/module-88936 */),
  s = i(99704 /* vendor/module-99704 */),
  a = i(27197 /* vendor/module-27197 */);
function h(t, e) {
  t.forEach((t) => {
    const i = {
      id: t.id,
      labelText: t.label,
      height: t.height,
      width: t.width,
      padding: t.padding ?? 0,
    };
    Object.keys(t).forEach((e) => {
      ["id", "label", "height", "width", "padding", "x", "y"].includes(e) ||
        (i[e] = t[e]);
    }),
      e.add({
        group: "nodes",
        data: i,
        position: { x: t.x ?? 0, y: t.y ?? 0 },
      });
  });
}
function l(t, e) {
  t.forEach((t) => {
    const i = { id: t.id, source: t.start, target: t.end };
    Object.keys(t).forEach((e) => {
      ["id", "start", "end"].includes(e) || (i[e] = t[e]);
    }),
      e.add({ group: "edges", data: i });
  });
}
function g(t) {
  return new Promise((e) => {
    const i = (0, a.Ltv)("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      n = (0, o.A)({
        container: document.getElementById("cy"),
        style: [{ selector: "edge", style: { "curve-style": "bezier" } }],
      });
    i.remove(),
      h(t.nodes, n),
      l(t.edges, n),
      n.nodes().forEach(function (t) {
        t.layoutDimensions = () => {
          const e = t.data();
          return { w: e.width, h: e.height };
        };
      }),
      n
        .layout({
          name: "cose-bilkent",
          quality: "proof",
          styleEnabled: !1,
          animate: !1,
        })
        .run(),
      n.ready((t) => {
        r.R.info("Cytoscape ready", t), e(n);
      });
  });
}
function u(t) {
  return t.nodes().map((t) => {
    const e = t.data(),
      i = t.position(),
      r = { id: e.id, x: i.x, y: i.y };
    return (
      Object.keys(e).forEach((t) => {
        "id" !== t && (r[t] = e[t]);
      }),
      r
    );
  });
}
function c(t) {
  return t.edges().map((t) => {
    const e = t.data(),
      i = t._private.rscratch,
      r = {
        id: e.id,
        source: e.source,
        target: e.target,
        startX: i.startX,
        startY: i.startY,
        midX: i.midX,
        midY: i.midY,
        endX: i.endX,
        endY: i.endY,
      };
    return (
      Object.keys(e).forEach((t) => {
        ["id", "source", "target"].includes(t) || (r[t] = e[t]);
      }),
      r
    );
  });
}
async function d(t, e) {
  r.R.debug("Starting cose-bilkent layout algorithm");
  try {
    p(t);
    const e = await g(t),
      i = u(e),
      n = c(e);
    return (
      r.R.debug(`Layout completed: ${i.length} nodes, ${n.length} edges`),
      { nodes: i, edges: n }
    );
  } catch (t) {
    throw (r.R.error("Error in cose-bilkent layout algorithm:", t), t);
  }
}
function p(t) {
  if (!t) throw new Error("Layout data is required");
  if (!t.config) throw new Error("Configuration is required in layout data");
  if (!t.rootNode) throw new Error("Root node is required");
  if (!t.nodes || !Array.isArray(t.nodes))
    throw new Error("No nodes found in layout data");
  if (!Array.isArray(t.edges))
    throw new Error("Edges array is required in layout data");
  return !0;
}
o.A.use(s),
  (0, n.K)(h, "addNodes"),
  (0, n.K)(l, "addEdges"),
  (0, n.K)(g, "createCytoscapeInstance"),
  (0, n.K)(u, "extractPositionedNodes"),
  (0, n.K)(c, "extractPositionedEdges"),
  (0, n.K)(d, "executeCoseBilkentLayout"),
  (0, n.K)(p, "validateLayoutData");
var f = (0, n.K)(
  async (
    t,
    e,
    {
      insertCluster: i,
      insertEdge: r,
      insertEdgeLabel: n,
      insertMarkers: o,
      insertNode: s,
      log: a,
      positionEdgeLabel: h,
    },
    { algorithm: l },
  ) => {
    const g = {},
      u = {},
      c = e.select("g");
    o(c, t.markers, t.type, t.diagramId);
    const p = c.insert("g").attr("class", "subgraphs"),
      f = c.insert("g").attr("class", "edgePaths"),
      y = c.insert("g").attr("class", "edgeLabels"),
      E = c.insert("g").attr("class", "nodes");
    a.debug("Inserting nodes into DOM for dimension calculation"),
      await Promise.all(
        t.nodes.map(async (e) => {
          if (e.isGroup) {
            const t = { ...e };
            (u[e.id] = t), (g[e.id] = t), await i(p, e);
          } else {
            const i = { ...e };
            g[e.id] = i;
            const r = await s(E, e, {
                config: t.config,
                dir: t.direction || "TB",
              }),
              n = r.node().getBBox();
            (i.width = n.width),
              (i.height = n.height),
              (i.domId = r),
              a.debug(`Node ${e.id} dimensions: ${n.width}x${n.height}`);
          }
        }),
      ),
      a.debug("Running cose-bilkent layout algorithm");
    const v = {
        ...t,
        nodes: t.nodes.map((t) => {
          const e = g[t.id];
          return { ...t, width: e.width, height: e.height };
        }),
      },
      A = await d(v, t.config);
    a.debug("Positioning nodes based on layout results"),
      A.nodes.forEach((t) => {
        const e = g[t.id];
        e?.domId &&
          (e.domId.attr("transform", `translate(${t.x}, ${t.y})`),
          (e.x = t.x),
          (e.y = t.y),
          a.debug(`Positioned node ${e.id} at center (${t.x}, ${t.y})`));
      }),
      A.edges.forEach((e) => {
        const i = t.edges.find((t) => t.id === e.id);
        i &&
          (i.points = [
            { x: e.startX, y: e.startY },
            { x: e.midX, y: e.midY },
            { x: e.endX, y: e.endY },
          ]);
      }),
      a.debug("Inserting and positioning edges"),
      await Promise.all(
        t.edges.map(async (e) => {
          await n(y, e);
          const i = g[e.start ?? ""],
            o = g[e.end ?? ""];
          if (i && o) {
            const n = A.edges.find((t) => t.id === e.id);
            if (n) {
              a.debug("APA01 positionedEdge", n);
              const s = { ...e },
                l = r(f, s, u, t.type, i, o, t.diagramId);
              h(s, l);
            } else {
              const n = {
                  ...e,
                  points: [
                    { x: i.x || 0, y: i.y || 0 },
                    { x: o.x || 0, y: o.y || 0 },
                  ],
                },
                s = r(f, n, u, t.type, i, o, t.diagramId);
              h(n, s);
            }
          }
        }),
      ),
      a.debug("Cose-bilkent rendering completed");
  },
  "render",
);
