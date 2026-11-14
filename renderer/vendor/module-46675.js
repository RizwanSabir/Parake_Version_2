// vendor/module-46675.js — webpack module 46675
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { XX: () => m, q7: () => C, sO: () => f });
var i = r(50475 /* vendor/module-50475 */),
  o = r(42349 /* vendor/module-42349 */),
  n = r(4301 /* vendor/module-4301 */),
  a = r(99624 /* vendor/module-99624 */),
  s = r(16450 /* vendor/module-16450 */),
  l = r(72514 /* vendor/module-72514 */),
  h = r(8679 /* vendor/module-8679 */),
  c = r(27166 /* vendor/module-27166 */),
  d = r(79456 /* vendor/module-79456 */),
  u = {
    common: h.Y2,
    getConfig: h.zj,
    insertCluster: o.U,
    insertEdge: n.Jo,
    insertEdgeLabel: n.jP,
    insertMarkers: n.g0,
    insertNode: a.on,
    interpolateToCurve: l.Ib,
    labelHelper: s.Zk,
    log: c.R,
    positionEdgeLabel: n.T_,
  },
  p = [
    "elk.stress",
    "elk.force",
    "elk.mrtree",
    "elk.sporeOverlap",
    "elk.box",
    "elk.rectpacking",
  ],
  g = Object.create(null),
  f = (0, d.K)((t) => {
    for (const e of t) g[e.name] = e;
  }, "registerLayoutLoaders"),
  y = (0, d.K)(() => {
    const t = (0, d.K)(
      async () =>
        await Promise.all([r.e(8558), r.e(7425), r.e(5183)]).then(
          r.bind(r, 45183),
        ),
      "loader",
    );
    return [
      { name: "elk", loader: t, algorithm: "elk.layered" },
      ...p.map((e) => ({ name: e, loader: t, algorithm: e })),
    ];
  }, "elkLayoutLoaders");
(0, d.K)(() => {
  f([
    {
      name: "dagre",
      loader: (0, d.K)(
        async () =>
          await Promise.all([r.e(8558), r.e(7425), r.e(7906)]).then(
            r.bind(r, 47906),
          ),
        "loader",
      ),
    },
    {
      name: "swimlane",
      loader: (0, d.K)(
        async () =>
          await Promise.all([r.e(8558), r.e(7425), r.e(9658)]).then(
            r.bind(r, 49658),
          ),
        "loader",
      ),
    },
    {
      name: "cose-bilkent",
      loader: (0, d.K)(
        async () =>
          await Promise.all([r.e(8936), r.e(9937)]).then(r.bind(r, 59937)),
        "loader",
      ),
    },
    ...y(),
  ]);
}, "registerDefaultLayoutLoaders")();
var m = (0, d.K)(async (t, e) => {
    if (!Object.hasOwn(g, t.layoutAlgorithm))
      throw new Error(`Unknown layout algorithm: ${t.layoutAlgorithm}`);
    if (t.diagramId)
      for (const e of t.nodes) {
        const r = e.domId || e.id;
        e.domId = `${t.diagramId}-${r}`;
      }
    const r = g[t.layoutAlgorithm],
      o = await r.loader();
    return (0, i.F)(e, t.config), o.render(t, e, u, { algorithm: r.algorithm });
  }, "render"),
  x = "dagre",
  C = (0, d.K)((t = "", { fallback: e = x } = {}) => {
    if (Object.hasOwn(g, t)) return t;
    for (const r of [e, x])
      if (Object.hasOwn(g, r))
        return (
          c.R.warn(
            `Layout algorithm ${t} is not registered. Using ${r} as fallback.`,
          ),
          r
        );
    throw new Error(
      `Neither layout algorithm ${t}, ${e}, nor ${x} is registered.`,
    );
  }, "getRegisteredLayoutAlgorithm");
