// vendor/module-45183.js — webpack module 45183
// params: (n, t, e) = (module, exports, require)
"use strict";
e.r(t), e.d(t, { render: () => W });
var i = e(86551 /* vendor/module-86551 */),
  r = e(87425 /* vendor/module-87425 */),
  c = e(42349 /* vendor/module-42349 */),
  a = e(4301 /* vendor/module-4301 */),
  o =
    (e(99624 /* vendor/module-99624 */),
    e(16450 /* vendor/module-16450 */),
    e(83035 /* vendor/module-83035 */),
    e(27741 /* vendor/module-27741 */),
    e(50320 /* vendor/module-50320 */),
    e(33870 /* vendor/module-33870 */),
    e(72514 /* vendor/module-72514 */),
    e(8679 /* vendor/module-8679 */)),
  u = (e(27166 /* vendor/module-27166 */), e(79456 /* vendor/module-79456 */)),
  s = e(27197 /* vendor/module-27197 */),
  h = e(16743 /* vendor/module-16743 */),
  f = (0, u.K)((n, t, { parentById: e }) => {
    const i = new Set();
    let r = n;
    if (n === t) return e[n] || "root";
    for (; r; ) {
      if ((i.add(r), r === t)) return r;
      r = e[r];
    }
    for (r = t; r; ) {
      if (i.has(r)) return r;
      r = e[r];
    }
    return "root";
  }, "findCommonAncestor");
function l(n, t, { parentById: e }) {
  let i = n;
  for (; (e[i] ?? "root") !== t; ) i = e[i];
  return i;
}
function b(n, t) {
  const e = n.map(() => !1),
    i = new Map();
  n.forEach(({ source: n, target: e }, r) => {
    if (n === e) return;
    const c = f(n, e, t);
    if (c === n || c === e) return;
    const a = l(n, c, t),
      o = l(e, c, t),
      u = i.get(c) ?? [];
    u.push({ index: r, from: a, to: o, collapsed: a !== n || o !== e }),
      i.set(c, u);
  });
  for (const n of i.values()) {
    const t = new Map(),
      i = [],
      r = new Map();
    for (const e of n) {
      for (const n of [e.from, e.to])
        t.has(n) || (t.set(n, []), i.push(n), r.set(n, 0));
      t.get(e.from).push(e), r.set(e.to, r.get(e.to) + 1);
    }
    const c = 1,
      a = 2,
      o = new Map(),
      u = [...i.filter((n) => 0 === r.get(n)), ...i];
    for (const n of u) {
      if (o.has(n)) continue;
      o.set(n, c);
      const i = [{ node: n, next: 0 }];
      for (; i.length > 0; ) {
        const n = i[i.length - 1],
          r = t.get(n.node);
        if (n.next >= r.length) {
          o.set(n.node, a), i.pop();
          continue;
        }
        const u = r[n.next++],
          s = o.get(u.to);
        s === c
          ? (e[u.index] = u.collapsed)
          : void 0 === s && (o.set(u.to, c), i.push({ node: u.to, next: 0 }));
      }
    }
  }
  return e;
}
function w(n, { measure: t }) {
  const e = n.config?.elk?.lineHops;
  if (!1 === e) return;
  const r = n.edges
    .filter((n) => Array.isArray(n.points) && n.points.length >= 2)
    .map((n) => ({
      id: n.id,
      points: n.points,
      curve: n.curve,
      arrowTypeStart: n.arrowTypeStart,
      arrowTypeEnd: n.arrowTypeEnd,
    }));
  (0, i.Z)(t.groups.edgePaths, r, {
    enabled: !0,
    jumpRadius: 6,
    jumpStyle: "gap" === e ? "gap" : "arc",
  });
}
(0, u.K)(l, "childOnPath"),
  (0, u.K)(b, "findSubgraphFeedbackEdges"),
  (0, u.K)(w, "applyElkLineJumps");
var d = {},
  g = {},
  p = {},
  m = {},
  v = (0, u.K)((n, t, e = 0.5) => {
    const i = n.width / 2,
      r = n.height / 2,
      c = n.x - i,
      a = n.x + i,
      o = n.y - r,
      u = n.y + r,
      s = Math.abs(t.x - c) <= e && t.y >= o - e && t.y <= u + e,
      h = Math.abs(t.x - a) <= e && t.y >= o - e && t.y <= u + e,
      f = Math.abs(t.y - o) <= e && t.x >= c - e && t.x <= a + e,
      l = Math.abs(t.y - u) <= e && t.x >= c - e && t.x <= a + e;
    return s || h || f || l;
  }, "onBorder"),
  y = (0, u.K)((n, t, e) => {
    const i = n.x,
      r = n.y,
      c = Math.abs(i - e.x),
      a = n.width / 2;
    let o = e.x < t.x ? a - c : a + c;
    const u = n.height / 2,
      s = Math.abs(t.y - e.y),
      h = Math.abs(t.x - e.x);
    if (Math.abs(r - t.y) * a > Math.abs(i - t.x) * u) {
      const n = e.y < t.y ? t.y - u - r : r - u - t.y;
      o = (h * n) / s;
      const i = {
        x: e.x < t.x ? e.x + o : e.x - h + o,
        y: e.y < t.y ? e.y + s - n : e.y - s + n,
      };
      return 0 === h && (i.x = t.x), 0 === s && (i.y = t.y), i;
    }
    {
      o = e.x < t.x ? t.x - a - i : i - a - t.x;
      const n = (s * o) / h;
      let r = e.x < t.x ? e.x + h - o : e.x - h + o,
        c = e.y < t.y ? e.y + n : e.y - n;
      return 0 === h && (r = t.x), 0 === s && (c = t.y), { x: r, y: c };
    }
  }, "intersection"),
  k = (0, u.K)((n, t) => {
    const e = n.x,
      i = n.y,
      r = Math.abs(t.x - e),
      c = Math.abs(t.y - i),
      a = n.width / 2,
      o = n.height / 2;
    return r >= a || c >= o;
  }, "outsideNode"),
  M = (0, u.K)((n, t, e = 10) => {
    const i = Math.abs(t.x - n.x),
      r = Math.abs(t.y - n.y),
      c = n.width / 2,
      a = n.height / 2;
    if (Math.abs(i - c) < 1 || Math.abs(r - a) < 1) {
      const i = t.x - n.x,
        r = t.y - n.y,
        c = Math.sqrt(i * i + r * r);
      if (c > 0)
        return { x: n.x + (i / c) * (c + e), y: n.y + (r / c) * (c + e) };
    }
    return t;
  }, "ensureTrulyOutside"),
  E = (0, u.K)((n, t, e) => {
    const i = Math.abs(t.x - n.x) < 1,
      r = Math.abs(t.y - n.y) < 1;
    return {
      x: i ? t.x : t.x < n.x ? n.x - n.width / 4 : n.x + n.width / 4,
      y: r ? t.y : e.y,
    };
  }, "makeInsidePoint"),
  T = (0, u.K)((n, t, e) => {
    if (!n?.intersect) return null;
    const i = n.intersect(e);
    return i
      ? (e.x < t.x && i.x > t.x) ||
        (e.x > t.x && i.x < t.x) ||
        Math.hypot(e.x - i.x, e.y - i.y) <= 1
        ? null
        : i
      : null;
  }, "tryNodeIntersect"),
  j = (0, u.K)((n, t, e) => {
    const i = E(n, t, e);
    return y(n, t, i);
  }, "fallbackIntersection"),
  S = 1e-6,
  P = (0, u.K)((n, t, e) => {
    const i = n.intersect?.(e);
    return (
      !!i &&
      Math.hypot(e.x - t.x, e.y - t.y) <=
        Math.hypot(i.x - t.x, i.y - t.y) + 1e-9
    );
  }, "insideOutline"),
  C = (0, u.K)((n, t, e, i) => {
    if (!n?.intersect) return null;
    const r = i.x - e.x,
      c = i.y - e.y;
    if (0 === r && 0 === c) return null;
    if (Math.abs(r) > S && Math.abs(c) > S) return null;
    const a = { x: t.x, y: t.y },
      o = Math.abs(r) > Math.abs(c),
      s = (0, u.K)((n) => (o ? { x: n, y: e.y } : { x: e.x, y: n }), "along");
    let h = o ? a.x : a.y,
      f = o ? e.x : e.y;
    if (!P(n, a, s(h))) return null;
    if (P(n, a, s(f))) return { ...e };
    for (let t = 0; t < 20; t++) {
      const t = (h + f) / 2;
      P(n, a, s(t)) ? (h = t) : (f = t);
    }
    return s(h);
  }, "outlineAttachPoint"),
  O = (0, u.K)((n, t, e, i) => {
    const r = M(t, e);
    return T(n, t, r) ?? j(t, r, i);
  }, "computeNodeIntersection"),
  I = (0, u.K)((n, t, e, i = 0.1) => {
    if (e && 0 !== n.length)
      if ("start" === t)
        n.length > 0 && Math.abs(n[0].x - e.x) < i && Math.abs(n[0].y - e.y) < i
          ? n.shift()
          : (n[0] = e);
      else {
        const t = n.length - 1;
        n.length > 0 && Math.abs(n[t].x - e.x) < i && Math.abs(n[t].y - e.y) < i
          ? n.pop()
          : (n[t] = e);
      }
  }, "replaceEndpoint"),
  A = (0, u.K)(
    (n) => ("string" != typeof n ? 0 : Math.max(a.hq[n] ?? 0, a.Nq[n] ?? 0)),
    "markerPathOffset",
  ),
  L = {
    arrow_open: ["none", "none"],
    arrow_cross: ["none", "arrow_cross"],
    double_arrow_cross: ["arrow_cross", "arrow_cross"],
    arrow_point: ["none", "arrow_point"],
    double_arrow_point: ["arrow_point", "arrow_point"],
    arrow_circle: ["none", "arrow_circle"],
    double_arrow_circle: ["arrow_circle", "arrow_circle"],
  },
  x = "[top=12,left=12,bottom=12,right=12]",
  N = {
    "spacing.baseValue": 15,
    "spacing.nodeNode": 15,
    "elk.aspectRatio": "1.6",
    "elk.expandNodes": "true",
    "elk.rectpacking.trybox": "true",
    "elk.rectpacking.packing.compaction.rowHeightReevaluation": "true",
    "elk.rectpacking.packing.compaction.iterations": 10,
    "elk.rectpacking.whiteSpaceElimination.strategy":
      "EQUAL_BETWEEN_STRUCTURES",
    "elk.rectpacking.widthApproximation.strategy": "SCANLINE",
  },
  $ = [
    "nodeSize.constraints",
    "nodeSize.minimum",
    "elk.algorithm",
    "elk.aspectRatio",
    "elk.contentAlignment",
    "elk.expandNodes",
    "elk.padding",
    ...Object.keys(N),
  ];
function D(n) {
  for (const t of $) delete n[t];
  (n["spacing.baseValue"] = 24), (n["spacing.nodeNode"] = 50);
}
(0, u.K)(D, "clearContainerAlgorithmOptions");
var K = new Set([
  "elk.layered",
  "elk.box",
  "elk.rectpacking",
  "elk.stress",
  "elk.force",
  "elk.mrtree",
  "elk.radial",
  "elk.sporeOverlap",
]);
function R(n, t) {
  if ("string" == typeof n) {
    if (K.has(n)) return n;
    t?.warn(
      `Unknown container layout algorithm "${n}". Supported values: ${[...K].join(", ")}. Falling back to the diagram's layout algorithm.`,
    );
  }
}
function F(n) {
  switch (n) {
    case "LR":
      return "RIGHT";
    case "RL":
      return "LEFT";
    case "TB":
    case "TD":
    default:
      return "DOWN";
    case "BT":
      return "UP";
  }
}
function _(n) {
  return (0, c.qV)(n.shape)
    ? (n.labelData?.width ?? n.labels?.[0]?.width ?? 0) + (n.padding ?? 0)
    : 0;
}
function B(n) {
  return (0, c.qV)(n.shape)
    ? {
        "nodeSize.constraints": "[MINIMUM_SIZE, NODE_LABELS]",
        "nodeSize.minimum": `(${_(n)}, 0)`,
      }
    : {};
}
function H(n, t, e, i) {
  const r = (n.labelData?.width ?? 0) + 2 * (n.padding ?? 0),
    c = n.labelData?.height ?? 0,
    a = tn(t?.preset),
    o = {
      ...B(n),
      "spacing.baseValue": 24,
      "elk.layered.spacing.edgeNodeBetweenLayers": 30,
      "elk.spacing.edgeEdge": 20,
      "spacing.nodeNode": 50,
      "elk.padding": "[top=24,left=24,bottom=24,right=24]",
      "nodeLabels.placement": "[H_CENTER V_TOP, INSIDE]",
      "elk.layered.mergeEdges": t?.mergeEdges,
      "elk.layered.nodePlacement.bk.fixedAlignment":
        t?.nodePlacementAlignment ?? a.alignment,
      "elk.layered.nodePlacement.strategy":
        t?.nodePlacementStrategy ?? a.containerPlacement,
      "elk.layered.cycleBreaking.strategy":
        t?.cycleBreakingStrategy ?? a.cycleBreaking,
      "elk.layered.nodePlacement.networkSimplex.nodeFlexibility":
        "PORT_POSITION",
      "elk.spacing.portsSurrounding": x,
    },
    u = R(n.metadata?.algorithm, i);
  if (u) {
    const n = c + 15;
    if (
      ((o["nodeSize.constraints"] = "[MINIMUM_SIZE, NODE_LABELS]"),
      (o["nodeSize.minimum"] = `(${r}, ${n + 15})`),
      (o["elk.algorithm"] = u),
      (o["elk.hierarchyHandling"] = "SEPARATE_CHILDREN"),
      (o["elk.aspectRatio"] = "2.0"),
      (o["elk.contentAlignment"] = "H_CENTER V_TOP"),
      (o["elk.expandNodes"] = "true"),
      (o["elk.padding"] = `[top=${n},left=15,bottom=15,right=15]`),
      "elk.rectpacking" === u)
    ) {
      const n = c + 10;
      Object.assign(o, N, {
        "elk.padding": `[top=${n},left=10,bottom=10,right=10]`,
        "nodeSize.minimum": `(${r}, ${n + 10})`,
      });
    }
  } else
    n.dir &&
      ((o["elk.algorithm"] = e),
      (o["elk.direction"] = F(n.dir)),
      (o["elk.hierarchyHandling"] = "SEPARATE_CHILDREN"));
  return Object.assign(o, m), o;
}
function U(n, t) {
  const e = new Set(),
    i = new Map();
  for (const { id: t, parentId: e } of n) {
    const n = i.get(e);
    n ? n.push(t) : i.set(e, [t]);
  }
  for (const n of i.values()) {
    const i = new Set(n),
      r = new Map(n.map((n) => [n, 0])),
      c = new Map(n.map((n) => [n, []])),
      a = [];
    for (const n of t) {
      const t = null == n.source ? void 0 : String(n.source),
        e = null == n.target ? void 0 : String(n.target);
      t &&
        e &&
        t !== e &&
        i.has(t) &&
        i.has(e) &&
        (r.set(e, (r.get(e) ?? 0) + 1),
        c.get(t).push(e),
        c.get(e).push(t),
        a.push([t, e]));
    }
    const o = new Map();
    let s = 0;
    for (const t of n) {
      if (o.has(t)) continue;
      const n = [t];
      for (o.set(t, s); n.length > 0; ) {
        const t = n.pop();
        for (const e of c.get(t)) o.has(e) || (o.set(e, s), n.push(e));
      }
      s++;
    }
    const h = new Array(s).fill(!1);
    for (const t of n) 0 === (r.get(t) ?? 0) && (h[o.get(t)] = !0);
    if (!h.includes(!1)) continue;
    const f = new Map(n.map((n) => [n, []])),
      l = new Map(n.map((n) => [n, 0])),
      b = (0, u.K)((n, t) => {
        const e = new Set([n]),
          i = [n];
        for (; i.length > 0; ) {
          const n = i.pop();
          if (n === t) return !0;
          for (const t of f.get(n)) e.has(t) || (e.add(t), i.push(t));
        }
        return !1;
      }, "reaches");
    for (const [n, t] of a)
      b(t, n) || (f.get(n).push(t), l.set(t, (l.get(t) ?? 0) + 1));
    const w = new Array(s).fill(!1);
    for (const t of n) {
      const n = o.get(t);
      h[n] || w[n] || 0 !== l.get(t) || (e.add(t), (w[n] = !0));
    }
  }
  return e;
}
function G(n, t) {
  if (!n.config.elk?.keepEntryNodeOnTop) return;
  const e = U(
    n.nodes,
    n.edges.map((n) => ({ source: n.start, target: n.end })),
  );
  for (const n of e) {
    const e = t[n];
    e &&
      (e.layoutOptions = {
        ...e.layoutOptions,
        "elk.layered.layering.layerConstraint": "FIRST",
      });
  }
}
function q(n, t) {
  const e = Z(t);
  return Q(e), Jn(n, e), { algorithm: e.algorithm };
}
async function X(n, t) {
  const e = Z(t),
    i = z(n, e),
    r = new h();
  e.log.info("Drawing flowchart using v4 renderer", r);
  const c = await dn(r, i.elkGraph, e.log);
  return gn(n, c, i, e.log), J(n.nodes), c;
}
function z(n, t) {
  const e = {},
    i = en(n, t.algorithm, t.rootLayoutOptions),
    r = n.direction ?? "DOWN";
  i.layoutOptions["elk.direction"] = F(r);
  const c = rn(n.nodes, t.log);
  return (
    cn(n.nodes, i, e, t),
    sn(n, i, e, t),
    ln(n, e, c, t),
    bn(i, e, c, t.log),
    !1 !== n.config.elk?.orientFeedbackEdges && V(i, c),
    G(n, e),
    { elkGraph: i, nodeDb: e, parentLookupDb: c }
  );
}
function V(n, t) {
  const e = b(
    n.edges.map((n) => ({ source: n.sources[0], target: n.targets[0] })),
    t,
  );
  n.edges.forEach((n, t) => {
    e[t] &&
      (([n.sources, n.targets] = [n.targets, n.sources]),
      (n.layoutReversed = !0));
  });
}
(0, u.K)(R, "resolveContainerAlgorithm"),
  (0, u.K)(F, "dir2ElkDirection"),
  (0, u.K)(_, "groupTitleWidth"),
  (0, u.K)(B, "groupTitleSizeOptions"),
  (0, u.K)(H, "buildSubgraphLayoutOptions"),
  (0, u.K)(U, "findCyclicEntryNodes"),
  (0, u.K)(G, "applyCyclicEntryConstraint"),
  (0, u.K)(q, "prepareLayoutForElk"),
  (0, u.K)(X, "runElkLayoutCore"),
  (0, u.K)(z, "buildElkGraphFromLayoutData"),
  (0, u.K)(V, "reverseSubgraphFeedbackEdges");
var W = (0, r.xY)({
  afterPaint: w,
  prepareLayout: q,
  measureLayout: (0, u.K)(
    (n, t) => (0, r.QV)(n, t, { unwrapGroupLabels: !0 }),
    "measureLayout",
  ),
  runLayoutCore: X,
  paintOptions: { skipIntersect: !0 },
});
function Q(n) {
  (0, o.XV)(n.getConfig());
}
function J(n) {
  const t = new Map(n.map((n) => [n.id, n]));
  n.sort((n, e) =>
    n.isGroup !== e.isGroup
      ? n.isGroup
        ? -1
        : 1
      : n.isGroup && e.isGroup
        ? Y(n, t) - Y(e, t)
        : 0,
  );
}
function Y(n, t) {
  let e = 0;
  const i = new Set();
  let r = n.parentId;
  for (; r && !i.has(r); ) {
    i.add(r);
    const n = t.get(r);
    if (!n?.isGroup) break;
    e++, (r = n.parentId);
  }
  return e;
}
function Z(n) {
  const t = n.helpers;
  if (!t) throw new Error("ELK layout requires Mermaid internal helpers");
  return {
    algorithm: n.preparedLayout?.algorithm ?? n.options?.algorithm,
    rootLayoutOptions: n.options?.rootLayoutOptions,
    common: t.common,
    getConfig: t.getConfig,
    interpolateToCurve: t.interpolateToCurve,
    log: t.log,
  };
}
(0, u.K)(Q, "syncHostConfig"),
  (0, u.K)(J, "orderNodesForElkPaint"),
  (0, u.K)(Y, "getGroupDepth"),
  (0, u.K)(Z, "getElkLayoutContext");
var nn = {
  default: {
    layering: "NETWORK_SIMPLEX",
    placement: "BRANDES_KOEPF",
    containerPlacement: "BRANDES_KOEPF",
    alignment: "BALANCED",
    cycleBreaking: "DEPTH_FIRST",
  },
  legacy: {
    layering: "NETWORK_SIMPLEX",
    placement: "BRANDES_KOEPF",
    containerPlacement: "BRANDES_KOEPF",
    alignment: "NONE",
    cycleBreaking: "GREEDY",
  },
  modelOrder: {
    layering: "NETWORK_SIMPLEX",
    placement: "NETWORK_SIMPLEX",
    containerPlacement: "BRANDES_KOEPF",
    alignment: "NONE",
    cycleBreaking: "GREEDY_MODEL_ORDER",
  },
  depthFirst: {
    layering: "NETWORK_SIMPLEX",
    placement: "NETWORK_SIMPLEX",
    containerPlacement: "BRANDES_KOEPF",
    alignment: "NONE",
    cycleBreaking: "DEPTH_FIRST",
  },
};
function tn(n) {
  return void 0 !== n && Object.hasOwn(nn, n) ? nn[n] : nn.default;
}
function en(n, t, e) {
  const i = tn(n.config.elk?.preset),
    r = {
      id: "root",
      layoutOptions: {
        "elk.hierarchyHandling": "INCLUDE_CHILDREN",
        "elk.algorithm": t,
        "elk.layered.nodePlacement.strategy":
          n.config.elk?.nodePlacementStrategy ?? i.placement,
        "elk.layered.nodePlacement.bk.fixedAlignment":
          n.config.elk?.nodePlacementAlignment ?? i.alignment,
        "elk.layered.mergeEdges": n.config.elk?.mergeEdges,
        "elk.direction": "DOWN",
        "spacing.baseValue": 40,
        "elk.layered.crossingMinimization.forceNodeModelOrder":
          n.config.elk?.forceNodeModelOrder,
        "elk.layered.considerModelOrder.strategy":
          n.config.elk?.considerModelOrder,
        "elk.layered.unnecessaryBendpoints": !0,
        "elk.layered.cycleBreaking.strategy":
          n.config.elk?.cycleBreakingStrategy ?? i.cycleBreaking,
        "elk.layered.layering.strategy":
          n.config.elk?.layeringStrategy ?? i.layering,
        "elk.layered.layering.coffmanGraham.layerBound":
          n.config.elk?.layeringLayerBound,
        "elk.layered.wrapping.multiEdge.improveCuts": !0,
        "elk.layered.wrapping.multiEdge.improveWrappedEdges": !0,
        "elk.layered.edgeRouting.selfLoopDistribution": "EQUALLY",
        "elk.layered.mergeHierarchyEdges": !0,
        "elk.spacing.portsSurrounding": x,
      },
      children: [],
      edges: [],
    };
  return (
    "elk.rectpacking" === t &&
      Object.assign(r.layoutOptions, N, {
        "elk.contentAlignment": "H_CENTER V_TOP",
        "elk.padding": "[top=15,left=15,bottom=15,right=15]",
      }),
    e && Object.assign(r.layoutOptions, e),
    Object.assign(r.layoutOptions, d, g, p),
    r
  );
}
function rn(n, t) {
  const e = { parentById: {}, childrenById: {} },
    i = n.filter((n) => n.isGroup);
  return (
    t.info("Subgraphs - ", i),
    i.forEach((t) => {
      n.filter((n) => n.parentId === t.id).forEach((n) => {
        (e.parentById[n.id] = t.id),
          (e.childrenById[t.id] ??= []),
          e.childrenById[t.id].push(n.id);
      });
    }),
    e
  );
}
function cn(n, t, e, i, r) {
  const c = n.filter((n) => n?.parentId === r);
  return (
    i.log.info("addVertices APA12", c, r),
    c.forEach((r) => {
      an(t, n, r, e, i);
    }),
    t
  );
}
function an(n, t, e, i, r) {
  const c = on(e);
  n.children.push(c),
    (i[e.id] = c),
    e.isGroup &&
      ((c.children = []),
      cn(t, c, i, r, e.id),
      (c.labelData = un(e, r.getConfig())));
}
function on(n) {
  const t = { ...n };
  return (
    delete t.domId,
    n.isGroup
      ? (t.children = [])
      : ((t.width = n.width ?? 0),
        (t.height = n.height ?? 0),
        n.spreadPorts &&
          (t.layoutOptions = {
            ...t.layoutOptions,
            "elk.portAlignment.default": "CENTER",
          })),
    t
  );
}
function un(n, t) {
  return (
    n.labelData ||
    (n.labelBBox
      ? {
          width: n.labelBBox.width,
          height: Math.max(0, n.labelBBox.height - 2),
          wrappingWidth: n.wrappingWidth ?? t.flowchart?.wrappingWidth,
        }
      : {
          width: 0,
          height: 0,
          wrappingWidth: n.wrappingWidth ?? t.flowchart?.wrappingWidth,
        })
  );
}
function sn(n, t, e, i) {
  i.log.info("abc78 DAGA edges = ", n);
  const r = {};
  return (
    n.edges.forEach((n) => {
      const c = n.id;
      r[c] = (r[c] ?? -1) + 1;
      const a = c;
      (n.id = a), i.log.info("abc78 new link id to be used is", c, a, r[c]);
      const { source: o, target: u, sourceId: s, targetId: h } = fn(n, e);
      i.log.debug("abc78 source and target", o, u),
        t.edges.push({
          ...n,
          sources: [o],
          targets: [u],
          sourceId: s,
          targetId: h,
          labels: [
            {
              width: n.width ?? 0,
              height: n.height ?? 0,
              orgWidth: n.width ?? 0,
              orgHeight: n.height ?? 0,
              text: n.label ?? "",
              layoutOptions: {
                "edgeLabels.inline": "true",
                "edgeLabels.placement": "CENTER",
              },
            },
            ...("elk.layered" ===
            (i.rootLayoutOptions?.["elk.algorithm"] ??
              i.algorithm ??
              "elk.layered")
              ? hn(n)
              : []),
          ],
        });
    }),
    t
  );
}
function hn(n) {
  const t = {
    startLeft: n.startLabelLeft,
    startRight: n.startLabelRight,
    endLeft: n.endLabelLeft,
    endRight: n.endLabelRight,
  };
  return Object.entries(n.terminalLabelSizes ?? {}).map(([e, i]) => {
    const r = e.startsWith("start"),
      c = r ? n.arrowTypeStart : n.arrowTypeEnd,
      a = c && "none" !== c ? 6 : 0;
    return {
      terminal: e,
      text: t[e],
      width: i.width + 2 * a,
      height: i.height + 2 * a,
      layoutOptions: { "edgeLabels.placement": r ? "TAIL" : "HEAD" },
    };
  });
}
function fn(n, t) {
  const e = n.start,
    i = n.end,
    r = e,
    c = i,
    a = e ? t[e] : void 0,
    o = i ? t[i] : void 0;
  return a && o
    ? { source: r, target: c, sourceId: e, targetId: i }
    : { source: r, target: c };
}
function ln(n, t, e, i) {
  n.nodes.forEach((r) => {
    const c = t[r.id];
    c &&
      void 0 !== e.childrenById[c.id] &&
      ((c.labels = [
        {
          text: c.label,
          width: c?.labelData?.width ?? 50,
          height: c?.labelData?.height ?? 50,
        },
      ]),
      i.log.debug("UIO node label", c?.labelData?.width, c.padding),
      (c.layoutOptions = H(c, n.config.elk, i.algorithm, i.log)),
      delete c.x,
      delete c.y,
      delete c.width,
      delete c.height);
  });
}
function bn(n, t, e, i) {
  i.debug("APA01 processing edges, count:", n.edges.length),
    n.edges.forEach((n, r) => {
      i.debug("APA01 processing edge", r, ":", n);
      const c = n.sources[0],
        a = n.targets[0];
      if (
        (i.debug("APA01 source:", c, "target:", a),
        i.debug("APA01 nodeDb[source]:", t[c]),
        i.debug("APA01 nodeDb[target]:", t[a]),
        t[c] && t[a] && t[c].parentId !== t[a].parentId)
      ) {
        const n = f(c, a, e);
        wn(t, c, n, i), wn(t, a, n, i);
      }
    });
}
function wn(n, t, e, i) {
  const r = n[t];
  r &&
    ((r.layoutOptions ??= {}),
    "SEPARATE_CHILDREN" === r.layoutOptions["elk.hierarchyHandling"] &&
      R(r.metadata?.algorithm) &&
      (i.debug(
        "Dropping explicit algorithm for node",
        r.id,
        "due to cross-boundary edges",
      ),
      D(r.layoutOptions),
      Object.assign(r.layoutOptions, B(r))),
    (r.layoutOptions["elk.hierarchyHandling"] = "INCLUDE_CHILDREN"),
    r.id !== e && r.parentId && wn(n, r.parentId, e, i));
}
async function dn(n, t, e) {
  const i = globalThis.__mermaidProfiler;
  try {
    let r;
    i?.begin("layoutCore");
    try {
      r = await n.layout(t);
    } finally {
      i?.end();
    }
    return (
      e.debug("APA01 after - success"), e.debug("APA01 layout result:", r), r
    );
  } catch (n) {
    throw (e.error("ELK layout error:", n), n);
  }
}
function gn(n, t, e, i) {
  const r = new Map(n.nodes.map((n) => [n.id, n]));
  yn(t.children ?? [], e, r, 0, 0, 0, i),
    vn(t.children ?? [], e, r, t),
    xn(n, t, e, i);
}
function pn(n, t = new Set()) {
  for (const e of n.children ?? []) t.add(e.id), pn(e, t);
  return t;
}
function mn(n, t, e, i) {
  const r = [];
  for (const c of n.edges ?? []) {
    const n = c.sources?.[0] ?? c.start,
      a = c.targets?.[0] ?? c.end,
      o = t.has(n) && t.has(a),
      u = n === i,
      s = a === i;
    if (!o && !u && !s) continue;
    const h = Un(n, a, e.parentLookupDb, e.nodeDb);
    for (const n of c.sections ?? []) {
      const t = o
        ? [n.startPoint, ...(n.bendPoints ?? []), n.endPoint]
        : [u ? n.startPoint : null, s ? n.endPoint : null];
      for (const n of t) n && r.push({ x: n.x + h.x, y: n.y + h.y });
    }
  }
  return r;
}
function vn(n, t, e, i = {}) {
  for (const r of n) {
    if (!r?.isGroup) continue;
    const n = r.children ?? [];
    vn(n, t, e, i);
    const c = t.nodeDb[r.id],
      a = n
        .map((n) => t.nodeDb[n.id])
        .filter((n) => n?.offset && n.width && n.height);
    if (!c?.offset || 0 === a.length) continue;
    const o = mn(i, pn(r), t, r.id),
      u = [
        ...a.map((n) => n.offset.posX),
        ...a.map((n) => n.offset.posX + n.width),
        ...o.map((n) => n.x),
      ],
      s = [
        ...a.map((n) => n.offset.posY),
        ...a.map((n) => n.offset.posY + n.height),
        ...o.map((n) => n.y),
      ],
      h = c.offset,
      f = Math.max(h.posX, Math.min(...u) - 24),
      l = Math.min(h.posX + c.width, Math.max(...u) + 24),
      b = Math.min(h.posY + c.height, Math.max(...s) + 24),
      w = h.posY,
      d = _(r);
    let g = f,
      p = l - f;
    if (p < d) {
      (g -= (d - p) / 2), (p = d);
      const n = h.posX + c.width;
      (g = Math.max(h.posX, Math.min(g, n - p))), (p = Math.min(p, c.width));
    }
    const m = b - w;
    if (m <= 0 || p <= 0) continue;
    (c.elkOrigin ??= { posX: h.posX, posY: h.posY }),
      (c.offset.posX = g),
      (c.offset.width = p),
      (c.offset.height = m),
      (c.width = p),
      (c.height = m),
      (c.x = g + p / 2),
      (c.y = w + m / 2);
    const v = e.get(r.id);
    v && ((v.x = c.x), (v.y = c.y), (v.width = p), (v.height = m));
  }
}
function yn(n, t, e, i, r, c, a) {
  n.forEach((n) => {
    if (!n) return;
    const o = t.nodeDb[n.id] ?? n,
      u = Math.max(n.width, (n.labels && n.labels[0]?.width) || 0),
      s = {
        posX: n.x + i,
        posY: n.y + r,
        x: i,
        y: r,
        depth: c,
        width: u,
        height: n.height,
      };
    (o.offset = s),
      (o.x = s.posX + n.width / 2),
      (o.y = s.posY + n.height / 2),
      (o.width = n.width),
      (o.height = n.height);
    const h = e.get(n.id);
    if (h) {
      (h.x = o.x),
        (h.y = o.y),
        (h.width = n.isGroup
          ? Math.max(n.width, n.labelData?.width ?? 0)
          : n.width),
        (h.height = n.height);
      const t = h;
      (t.labelData = n.labelData), (t.labels = n.labels);
    }
    n.isGroup
      ? (a.debug("Id abc88 subgraph = ", n.id, n.x, n.y, n.labelData),
        yn(n.children ?? [], t, e, s.posX, s.posY, c + 1, a))
      : a.info("Id NODE = ", n.id, n.x, n.y, i, r, `translate(${o.x}, ${o.y})`);
  });
}
(0, u.K)(tn, "resolveElkPreset"),
  (0, u.K)(en, "createRootElkGraph"),
  (0, u.K)(rn, "addSubGraphs"),
  (0, u.K)(cn, "addVertices"),
  (0, u.K)(an, "addVertex"),
  (0, u.K)(on, "createElkNode"),
  (0, u.K)(un, "getMeasuredLabelData"),
  (0, u.K)(sn, "addEdgesToElkGraph"),
  (0, u.K)(hn, "terminalElkLabels"),
  (0, u.K)(fn, "getEdgeStartEndPoint"),
  (0, u.K)(ln, "configureSubgraphNodes"),
  (0, u.K)(bn, "configureCrossHierarchyEdges"),
  (0, u.K)(wn, "setIncludeChildrenPolicy"),
  (0, u.K)(dn, "runElkLayout"),
  (0, u.K)(gn, "applyElkLayoutResult"),
  (0, u.K)(pn, "collectDescendantIds"),
  (0, u.K)(mn, "internalEdgePoints"),
  (0, u.K)(vn, "evenGroupFrames"),
  (0, u.K)(yn, "applyElkNodePositions");
var kn = 0.01;
function Mn(n, t) {
  const e = Math.abs(t.x - n.x),
    i = Math.abs(t.y - n.y);
  return e > kn && i <= kn ? "h" : i > kn && e <= kn ? "v" : void 0;
}
function En(n) {
  const t = [];
  let e = n;
  const i = Tn(e);
  i && ((e = i.points), t.push(i.run));
  const r = Tn([...e].reverse());
  return r && ((e = r.points.reverse()), t.push(r.run)), { points: e, runs: t };
}
function Tn(n) {
  if (n.length < 5) return null;
  const [t, e, i, r] = n,
    c = Mn(t, e);
  if (!c || Mn(i, r) !== c || Mn(e, i) !== ("h" === c ? "v" : "h")) return null;
  if (Math.hypot(e.x - t.x, e.y - t.y) > 30) return null;
  const a = "h" === c ? Math.abs(i.y - e.y) : Math.abs(i.x - e.x);
  if (a < kn || a > 16) return null;
  if (
    !("h" === c
      ? Math.sign(e.x - t.x) === Math.sign(r.x - i.x)
      : Math.sign(e.y - t.y) === Math.sign(r.y - i.y))
  )
    return null;
  let o = 3;
  for (; o + 1 < n.length && Mn(n[o], n[o + 1]) === c; ) o++;
  if (o === n.length - 1) return null;
  const u = [...n];
  for (let e = 2; e <= o; e++)
    u[e] = "h" === c ? { x: n[e].x, y: t.y } : { x: t.x, y: n[e].y };
  const s = { old: { a: n[2], b: n[o] }, new: { a: u[2], b: u[o] } };
  return u.splice(1, 2), { points: u, run: s };
}
function jn(n, t, e, i) {
  const r = (0, u.K)(
      (n, t, e) => (t.x - n.x) * (e.y - n.y) - (t.y - n.y) * (e.x - n.x),
      "side",
    ),
    c = r(e, i, n),
    a = r(e, i, t),
    o = r(n, t, e),
    s = r(n, t, i);
  return (
    ((c > 0 && a < 0) || (c < 0 && a > 0)) &&
    ((o > 0 && s < 0) || (o < 0 && s > 0))
  );
}
function Sn(n, t) {
  let e = 0;
  for (let i = 0; i < n.length - 1; i++)
    for (let r = 0; r < t.length - 1; r++)
      jn(n[i], n[i + 1], t[r], t[r + 1]) && e++;
  return e;
}
function Pn(n, t, e) {
  const i = e.x - t.x,
    r = e.y - t.y,
    c = i * i + r * r;
  return 0 === c
    ? 0
    : Math.max(0, Math.min(1, ((n.x - t.x) * i + (n.y - t.y) * r) / c));
}
function Cn(n, t, e) {
  return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
}
function On(n, t) {
  let e = null;
  for (const i of t) {
    const t = Pn(n, i.old.a, i.old.b),
      r = Cn(i.old.a, i.old.b, t),
      c = r.x - n.x,
      a = r.y - n.y,
      o = c * c + a * a;
    (!e || o < e.distSq) && (e = { distSq: o, point: Cn(i.new.a, i.new.b, t) });
  }
  return e?.point ?? null;
}
function In(n, t, e) {
  let i = 0,
    r = 1;
  const c = t.x - n.x,
    a = t.y - n.y;
  for (const [t, o] of [
    [-c, n.x - e.x1],
    [c, e.x2 - n.x],
    [-a, n.y - e.y1],
    [a, e.y2 - n.y],
  ])
    if (0 === t) {
      if (o < 0) return !1;
    } else t < 0 ? (i = Math.max(i, o / t)) : (r = Math.min(r, o / t));
  return i < r;
}
(0, u.K)(Mn, "axisOf"),
  (0, u.K)(En, "straightenTerminalJogsWithRuns"),
  (0, u.K)(Tn, "straightenFront"),
  (0, u.K)(jn, "segmentsCrossStrict"),
  (0, u.K)(Sn, "crossingCount"),
  (0, u.K)(Pn, "paramOnSegment"),
  (0, u.K)(Cn, "pointAtParam"),
  (0, u.K)(On, "projectLabelOntoStraightenedRun"),
  (0, u.K)(In, "segmentHitsBox");
var An = (0, u.K)(
  (n, t) => ({
    x1: n.x - t.width / 2,
    y1: n.y - t.height / 2,
    x2: n.x + t.width / 2,
    y2: n.y + t.height / 2,
  }),
  "labelBox",
);
function Ln(n) {
  const t = n.map((n) => n.points ?? []),
    e = n.map((n) =>
      null != n.x && null != n.y && n.label && n.width && n.height
        ? {
            centre: { x: n.x, y: n.y },
            size: { width: n.width, height: n.height },
          }
        : void 0,
    ),
    i = (0, u.K)((n, t) => {
      const e = t && An(t.centre, t.size);
      return !!e && n.some((t, i) => i < n.length - 1 && In(t, n[i + 1], e));
    }, "covers"),
    r = [];
  for (const [c, a] of n.entries()) {
    const n = t[c];
    if (n.length < 5) continue;
    const { points: o, runs: u } = En(n);
    if (o === n) continue;
    const s = e[c],
      h = s && On(s.centre, u),
      f = s && h ? { centre: h, size: s.size } : s;
    let l = 0,
      b = 0,
      w = 0,
      d = 0;
    for (const [r, a] of t.entries())
      r === c ||
        a.length < 2 ||
        ((l += Sn(n, a)),
        (b += Sn(o, a)),
        (w += Number(i(a, s)) + Number(i(n, e[r]))),
        (d += Number(i(a, f)) + Number(i(o, e[r]))));
    b > l ||
      d > w ||
      ((a.points = o), (t[c] = o), (e[c] = f), r.push({ edge: a, runs: u }));
  }
  return r;
}
function xn(n, t, e, i) {
  const r = new Map(n.edges.map((n) => [n.id, n])),
    c = !1 !== n.config.elk?.straightenEdges,
    a = new Map();
  for (const t of n.edges) delete t.terminalLabelCenters;
  const o = new Map(n.nodes.map((n) => [n.id, n])),
    s = new Set();
  if (
    (t.edges?.forEach((n) => {
      if (!n.sections?.length) return;
      const t = e.nodeDb[n.sources?.[0] ?? n.start],
        i = e.nodeDb[n.targets?.[0] ?? n.end];
      if (!t || !i) return;
      const r = Un(
          n.start ?? n.sourceId ?? n.sources?.[0],
          n.end ?? n.targetId ?? n.targets?.[0],
          e.parentLookupDb,
          e.nodeDb,
        ),
        c = n.sections[0];
      "rect33" !== t.shape &&
        Bn(t, { x: c.startPoint.x + r.x, y: c.startPoint.y + r.y }, o, s),
        "rect33" !== i.shape &&
          Bn(i, { x: c.endPoint.x + r.x, y: c.endPoint.y + r.y }, o, s);
    }),
    t.edges?.forEach((n) => {
      const t = r.get(n.id);
      if (!t) return;
      const c = !0 === n.layoutReversed;
      let o = n.sources?.[0] ?? n.start,
        s = n.targets?.[0] ?? n.end;
      c && ([o, s] = [s, o]);
      const h = e.nodeDb[o],
        f = e.nodeDb[s];
      if (!h || !f) return;
      if (!n.sections?.length) {
        const e = (0, u.K)(
            (n) => ({
              x: (n.offset?.posX ?? n.x ?? 0) + (n.width ?? 0) / 2,
              y: (n.offset?.posY ?? n.y ?? 0) + (n.height ?? 0) / 2,
            }),
            "centre",
          ),
          r = e(h),
          c = e(f);
        (h.x = r.x), (h.y = r.y), (f.x = c.x), (f.y = c.y);
        const a = Gn([r, c], h, f, i);
        (t.points = a), (t.curve = "linear");
        const o = a[0],
          s = a[a.length - 1];
        return (
          (t.x = (o.x + s.x) / 2),
          (t.y = (o.y + s.y) / 2),
          void i.debug(
            "APA18 no edge sections, using a straight line",
            n.id,
            t.points,
          )
        );
      }
      const l = n.start ?? n.sourceId ?? o,
        b = n.end ?? n.targetId ?? s,
        w = Un(l, b, e.parentLookupDb, e.nodeDb);
      i.debug("APA18 offset", w, l, " ==> ", b, "edge:", n, h);
      const d = Hn(n.sections[0], w);
      c && d.reverse();
      const g = { start: d[0], end: d[d.length - 1] };
      (h.x = h.offset.posX + h.width / 2),
        (h.y = h.offset.posY + h.height / 2),
        (f.x = f.offset.posX + f.width / 2),
        (f.y = f.offset.posY + f.height / 2),
        "rect33" !== h.shape && d.unshift({ x: h.x, y: h.y }),
        "rect33" !== f.shape && d.push({ x: f.x, y: f.y });
      const p = Gn(d, h, f, i);
      (t.points = Wn(Qn(p, it(f), zn(t), i), it(h), Vn(t), i)),
        (t.curve = "rounded");
      const m = n.labels?.[0];
      m && ((t.x = m.x + w.x + m.width / 2), (t.y = m.y + w.y + m.height / 2));
      for (const e of n.labels ?? [])
        e.terminal &&
          (e.x || e.y) &&
          ((t.terminalLabelCenters ??= {}),
          (t.terminalLabelCenters[e.terminal] = {
            x: e.x + w.x + e.width / 2,
            y: e.y + w.y + e.height / 2,
          }));
      t.terminalLabelCenters && a.set(t, g);
    }),
    c)
  ) {
    const t = Ln(n.edges);
    for (const { edge: n, runs: e } of t) {
      if (null == n.x || null == n.y) continue;
      const t = On({ x: n.x, y: n.y }, e);
      t && ((n.x = t.x), (n.y = t.y));
    }
  }
  for (const [n, t] of a) _n(n, t);
  Rn(n.edges, n.nodes), Fn(n.edges, n.nodes), Nn(n.edges);
}
function Nn(n) {
  const t = new Map();
  for (const e of n) {
    if (null == e.x || null == e.y || !e.label || !e.width) continue;
    const n = [e.start ?? "", e.end ?? ""].sort().join("\0"),
      i = t.get(n);
    i ? i.push(e) : t.set(n, [e]);
  }
  for (const n of t.values()) {
    if (2 !== n.length) continue;
    const [t, e] = n;
    if (Math.abs(t.y - e.y) > Math.max(t.height ?? 0, e.height ?? 0)) continue;
    const i = t.width / 2 + e.width / 2 + 4,
      r = e.x - t.x,
      c = i - Math.abs(r);
    if (c <= 0) continue;
    const a = Math.sign(r) || 1;
    (t.x = t.x - (a * c) / 2), (e.x = e.x + (a * c) / 2);
  }
}
(0, u.K)(Ln, "straightenEdgeTerminals"),
  (0, u.K)(xn, "applyElkEdgeLayout"),
  (0, u.K)(Nn, "separateOppositeEdgeLabels");
var $n = (0, u.K)(
  (n, t) => n.x1 < t.x2 && t.x1 < n.x2 && n.y1 < t.y2 && t.y1 < n.y2,
  "boxesOverlap",
);
function Dn(n, t) {
  const e = t.filter((n) => void 0 !== n.x && void 0 !== n.y),
    i = (0, u.K)(
      (n) =>
        An({ x: n.x, y: n.y }, { width: n.width ?? 0, height: n.height ?? 0 }),
      "boxOf",
    ),
    r = e.filter((n) => !n.isGroup).map(i),
    c = e
      .filter((n) => n.isGroup)
      .map(i)
      .flatMap(({ x1: n, y1: t, x2: e, y2: i }) => [
        [
          { x: n, y: t },
          { x: e, y: t },
        ],
        [
          { x: e, y: t },
          { x: e, y: i },
        ],
        [
          { x: e, y: i },
          { x: n, y: i },
        ],
        [
          { x: n, y: i },
          { x: n, y: t },
        ],
      ]),
    a = n
      .filter((n) => n.label && n.width && n.height && void 0 !== n.x)
      .map((n) => An({ x: n.x, y: n.y }, { width: n.width, height: n.height })),
    o = (0, u.K)((n, t = 0) => {
      const e = {
        x1: n.x1 - t,
        y1: n.y1 - t,
        x2: n.x2 + t,
        y2: n.y2 + t,
      };
      return c.some(([n, t]) => In(n, t, e));
    }, "hitsFrame"),
    s = (0, u.K)(
      (t, e, i, c, u = 0) =>
        r.some((n) => $n(t, n)) ||
        a.some((n) => $n(t, n)) ||
        o(t, u) ||
        n.some((n) =>
          (n.points ?? []).some(
            (i, r, a) =>
              r < a.length - 1 && !(n === e && r === c) && In(i, a[r + 1], t),
          ),
        ) ||
        n.some((n) =>
          Object.entries(n.terminalLabelCenters ?? {}).some(([r, c]) => {
            const a = n.terminalLabelSizes?.[r];
            return !(n === e && r === i) && void 0 !== a && $n(t, An(c, a));
          }),
        ),
      "blocked",
    );
  return { hitsFrame: o, blocked: s };
}
function* Kn(n) {
  for (const t of n) {
    const n = t.points;
    if (n && !(n.length < 2) && t.terminalLabelCenters && t.terminalLabelSizes)
      for (const [e, i] of Object.entries(t.terminalLabelCenters)) {
        const r = t.terminalLabelSizes[e],
          c = e.startsWith("start"),
          a = c ? 0 : n.length - 2,
          [o, u] = [n[a], n[a + 1]],
          s = Math.hypot(u.x - o.x, u.y - o.y);
        r &&
          0 !== s &&
          (yield {
            edge: t,
            key: e,
            center: i,
            size: r,
            atStart: c,
            segment: a,
            from: o,
            to: u,
            length: s,
          });
      }
  }
}
function Rn(n, t) {
  const { hitsFrame: e, blocked: i } = Dn(n, t);
  for (const {
    edge: t,
    key: r,
    center: c,
    size: a,
    atStart: o,
    segment: s,
    from: h,
    to: f,
    length: l,
  } of Kn(n)) {
    if (!e(An(c, a))) continue;
    const [n, b] = o ? [f, h] : [h, f],
      w = { x: (b.x - n.x) / l, y: (b.y - n.y) / l },
      d = (Math.abs(w.x) * a.width + Math.abs(w.y) * a.height) / 2,
      g = (0, u.K)((n) => (n.x - b.x) * w.x + (n.y - b.y) * w.y, "along"),
      p = (0, u.K)((n) => g(n) + d <= 0 && g(n) - d >= -l, "onSegment");
    for (let n = 1; n <= l; n++) {
      const e = [n, -n]
        .map((n) => ({ x: c.x + n * w.x, y: c.y + n * w.y }))
        .find((n) => p(n) && !i(An(n, a), t, r, s, 2));
      if (e) {
        t.terminalLabelCenters[r] = e;
        break;
      }
    }
  }
}
function Fn(n, t) {
  const { blocked: e } = Dn(n, t);
  for (const {
    edge: t,
    key: i,
    center: r,
    size: c,
    segment: a,
    from: o,
    to: u,
    length: s,
  } of Kn(n)) {
    const n = { x: -(u.y - o.y) / s, y: (u.x - o.x) / s },
      h = (r.x - o.x) * n.x + (r.y - o.y) * n.y;
    if (0 === h || h > 0 === i.endsWith("Right")) continue;
    const f = { x: r.x - 2 * h * n.x, y: r.y - 2 * h * n.y };
    e(An(f, c), t, i, a) || (t.terminalLabelCenters[i] = f);
  }
}
function _n(n, t) {
  const e = n.points;
  if (!e?.length || !n.terminalLabelCenters) return;
  const i = {
    start: { x: e[0].x - t.start.x, y: e[0].y - t.start.y },
    end: {
      x: e[e.length - 1].x - t.end.x,
      y: e[e.length - 1].y - t.end.y,
    },
  };
  for (const [t, e] of Object.entries(n.terminalLabelCenters)) {
    const r = t.startsWith("start") ? i.start : i.end;
    n.terminalLabelCenters[t] = { x: e.x + r.x, y: e.y + r.y };
  }
}
function Bn(n, t, e, i) {
  const r = n.width ?? 0,
    c = n.height ?? 0,
    a = n.offset.posY,
    o = a + c,
    u = Math.abs(t.y - a) <= 0.5 || Math.abs(t.y - o) <= 0.5;
  if ((u ? r : c) >= 24) return;
  if (i.has(n.id)) return;
  i.add(n.id);
  const s = u ? t.x - (n.offset.posX + r / 2) : t.y - (n.offset.posY + c / 2);
  if (Math.abs(s) < 0.01) return;
  u
    ? ((n.offset.posX += s), (n.x = n.offset.posX + r / 2))
    : ((n.offset.posY += s), (n.y = n.offset.posY + c / 2));
  const h = e.get(n.id);
  h && ((h.x = n.offset.posX + r / 2), (h.y = n.offset.posY + c / 2));
}
function Hn(n, t) {
  const e = n.startPoint,
    i = n.endPoint,
    r = (n.bendPoints ? n.bendPoints : []).map((n) => ({
      x: n.x + t.x,
      y: n.y + t.y,
    }));
  return [{ x: e.x + t.x, y: e.y + t.y }, ...r, { x: i.x + t.x, y: i.y + t.y }];
}
function Un(n, t, e, i) {
  const r = f(n, t, e);
  if (void 0 === r || "root" === r) return { x: 0, y: 0 };
  const c = i[r],
    a = c?.elkOrigin ?? c?.offset;
  return { x: a?.posX ?? 0, y: a?.posY ?? 0 };
}
function Gn(n, t, e, i) {
  const r = Array.isArray(n) ? [...n] : [],
    c = it(e);
  let a;
  i.debug(
    "PPP cutter2: Points before cutter2:",
    JSON.stringify(n),
    "endBounds:",
    c,
    v(c, n[n.length - 1]),
  );
  {
    const n = it(t),
      c = it(e),
      o = !!t?.isGroup,
      u = !!e?.isGroup,
      { candidate: s, centerApprox: h } = at(r, t, "start"),
      { candidate: f, centerApprox: l } = at(r, e, "end");
    let b = o && v(n, s),
      w = u && v(c, f);
    ot(r, "start", b && h),
      ot(r, "end", w && l),
      o && !b && (b = ut(r, n, "start")),
      u && !w && (w = ut(r, c, "end")),
      b || w
        ? (b || st(r, t, n, i),
          w || ht(r, e, c, i),
          i.debug(
            "PPP cutter2: skipping cutter2 due to on-border group endpoint(s)",
            {
              skipStart: b,
              skipEnd: w,
              startCenterApprox: h,
              endCenterApprox: l,
              startCandidate: s,
              endCandidate: f,
            },
          ),
          (a = r))
        : (a = lt(t, e, r, i));
  }
  if (
    (i.debug("PPP cutter2: Points after cutter2:", JSON.stringify(a)),
    !Array.isArray(a) || a.length < 2 || qn(a))
  ) {
    i.warn(
      "POI cutter2: Invalid points from cutter2, falling back to prevPoints",
      a,
    );
    const n = r.filter((n) => Number.isFinite(n?.x) && Number.isFinite(n?.y));
    a = n.length >= 2 ? n : r;
  }
  return i.debug("UIO cutter2: Points after cutter2 (sanitized):", a), Xn(a, i);
}
function qn(n) {
  return n?.some((n) => !Number.isFinite(n?.x) || !Number.isFinite(n?.y));
}
function Xn(n, t) {
  const e = n.filter((n, t, e) => {
    if (0 === t) return !0;
    const i = e[t - 1];
    return Math.abs(n.x - i.x) > 1e-6 || Math.abs(n.y - i.y) > 1e-6;
  });
  return (
    e.length !== n.length &&
      t.debug("UIO cutter2: removed consecutive duplicate points", {
        before: n,
        after: e,
      }),
    e
  );
}
function zn(n) {
  return A(n.arrowTypeEnd);
}
function Vn(n) {
  return A(n.arrowTypeStart);
}
function Wn(n, t, e, i) {
  if (e <= 0 || n.length < 3) return n;
  const r = n[0],
    c = n[1],
    a = Math.hypot(c.x - r.x, c.y - r.y);
  if (a >= Math.max(8, 2 * e)) return n;
  if (!v(t, c, 1)) return n;
  const o = [r, ...n.slice(2)];
  return (
    i.debug("UIO cutter2: removed short start marker segment", {
      before: n,
      after: o,
      markerOffset: e,
      segmentLength: a,
    }),
    o
  );
}
function Qn(n, t, e, i) {
  if (e <= 0 || n.length < 3) return n;
  const r = n[n.length - 1],
    c = n[n.length - 2],
    a = Math.hypot(r.x - c.x, r.y - c.y);
  if (a >= Math.max(8, 2 * e)) return n;
  if (!v(t, c, 1)) return n;
  const o = [...n.slice(0, -2), r];
  return (
    i.debug("UIO cutter2: removed short end marker segment", {
      before: n,
      after: o,
      markerOffset: e,
      segmentLength: a,
    }),
    o
  );
}
function Jn(n, t) {
  const e = n.edges.defaultInterpolate,
    i = n.edges.defaultStyle,
    r = t.getConfig();
  n.edges.forEach((n) => {
    const c = tt(
      n,
      { defaultStyle: i, defaultInterpolate: e, confCurve: r.curve },
      t,
    );
    Object.assign(n, c);
  });
}
function Yn(n) {
  return void 0 !== n.classes
    ? n.classes
    : n.start && n.end
      ? `flowchart-link LS_${n.start} LE_${n.end}`
      : void 0;
}
function Zn(n, t, e) {
  let i = "normal",
    r = "solid",
    c = [],
    a = [];
  return (
    "dotted" === n
      ? ((r = "dotted"),
        (c = ["fill:none", "stroke-width:2px", "stroke-dasharray:3"]))
      : "thick" === n
        ? ((i = "thick"), (c = ["stroke-width: 3.5px", "fill:none"]))
        : ((c = t ?? ["fill:none"]), void 0 !== e && (a = e)),
    { thickness: i, pattern: r, style: c, labelStyle: a }
  );
}
function nt(n, t, e) {
  return void 0 !== n ? n : void 0 !== t ? t : e;
}
function tt(n, t, e) {
  const i = {};
  (i.minlen = n.minlen ?? n.length ?? 1),
    (i.text = n.text ?? n.label),
    (i.arrowhead =
      n.arrowhead ?? ("arrow_open" === n.type ? "none" : "normal"));
  const r = L[n.type ?? "arrow_open"] ?? L.arrow_open;
  (i.arrowTypeStart = n.arrowTypeStart ?? r[0]),
    (i.arrowTypeEnd = n.arrowTypeEnd ?? r[1]),
    (i.startLabelRight = n.startLabelRight),
    (i.endLabelLeft = n.endLabelLeft);
  const c = Zn(n.stroke, t.defaultStyle, t.defaultLabelStyle);
  (i.thickness = n.thickness ?? c.thickness),
    (i.pattern = n.pattern ?? c.pattern),
    (i.style = n.style ?? c.style),
    (i.labelStyle = n.labelStyle ?? c.labelStyle),
    (i.classes = Yn(n)),
    (i.curve = e.interpolateToCurve(
      nt(n.curve ?? n.interpolate, t.defaultInterpolate, t.confCurve),
      s.lUB,
    ));
  const a = "" !== (i.text ?? "");
  return (
    void 0 !== n.arrowheadStyle
      ? (i.arrowheadStyle = n.arrowheadStyle)
      : (a || void 0 !== n.style) && (i.arrowheadStyle = "fill: #333"),
    (i.labelpos = n.labelpos ?? (a ? "c" : void 0)),
    (i.labelType = n.labelType),
    (i.label = (n.label ?? i.text ?? "").replace(
      e.common.lineBreakRegex,
      "\n",
    )),
    i
  );
}
function et(n) {
  return Math.max(n.width ?? 0, _(n));
}
function it(n) {
  const t = n?.isGroup ? et(n) : n.width;
  return {
    x: n.offset.posX + n.width / 2,
    y: n.offset.posY + n.height / 2,
    width: t ?? 0,
    height: n.height ?? 0,
    padding: n.padding,
  };
}
function rt(n, t, e = 1e-6) {
  return Math.abs(n - t) < e;
}
function ct(n, t) {
  return rt(n.x, t.x ?? 0) && rt(n.y, t.y ?? 0);
}
function at(n, t, e) {
  if (!n?.length)
    return { candidate: { x: t.x ?? 0, y: t.y ?? 0 }, centerApprox: !0 };
  if ("start" === e) {
    const e = n[0],
      i = ct(e, t);
    return { candidate: i && n.length > 1 ? n[1] : e, centerApprox: i };
  }
  {
    const e = n[n.length - 1],
      i = ct(e, t);
    return {
      candidate: i && n.length > 1 ? n[n.length - 2] : e,
      centerApprox: i,
    };
  }
}
function ot(n, t, e) {
  e && ("start" === t ? n.length > 0 && n.shift() : n.length > 0 && n.pop());
}
function ut(n, t, e) {
  const i = "start" === e ? 1 : -1;
  let r = "start" === e ? 0 : n.length - 1;
  const c = r;
  for (; r >= 0 && r < n.length && !k(t, n[r]); ) r += i;
  if (r === c || r < 0 || r >= n.length) return !1;
  const a = n[r],
    o = n[r - i],
    u = a.x - o.x,
    s = a.y - o.y,
    h = 0 === u ? 1 / 0 : (t.x + (Math.sign(u) * t.width) / 2 - o.x) / u,
    f = 0 === s ? 1 / 0 : (t.y + (Math.sign(s) * t.height) / 2 - o.y) / s,
    l = Math.min(h, f),
    b = { x: o.x + l * u, y: o.y + l * s };
  return (
    "start" === e ? n.splice(0, r, b) : n.splice(r + 1, n.length - r - 1, b), !0
  );
}
function st(n, t, e, i) {
  let r = -1;
  for (const [t, i] of n.entries())
    if (k(e, i)) {
      r = t;
      break;
    }
  if (-1 !== r) {
    const c = n[r],
      a = n[0],
      o = O(t, e, c, a);
    I(n, "start", o),
      i.debug("UIO cutter2: start-only intersection applied", {
        startIntersection: o,
      });
  }
}
function ht(n, t, e, i) {
  let r = -1;
  for (let t = n.length - 1; t >= 0; t--)
    if (k(e, n[t])) {
      r = t;
      break;
    }
  if (-1 !== r) {
    const c = n[r],
      a = n[n.length - 1],
      o = O(t, e, c, a);
    I(n, "end", o),
      i.debug("UIO cutter2: end-only intersection applied", {
        endIntersection: o,
      });
  }
}
function ft(n, t, e, i, r) {
  if (n?.isGroup) return null;
  const c = e[i],
    a = e[i + r];
  return c && a ? C(n, t, c, a) : null;
}
function lt(n, t, e, i) {
  const r = it(n),
    c = it(t);
  if (0 === e.length) return [];
  const a = [...e],
    o = a[0],
    u = a[a.length - 1];
  i.debug("PPP cutter2: bounds", { startBounds: r, endBounds: c }),
    i.debug("PPP cutter2: original points", e);
  let s = -1;
  for (const [n, t] of a.entries()) -1 === s && k(r, t) && (s = n);
  if (-1 !== s) {
    const t = a[s],
      e = ft(n, r, a, s, 1) ?? O(n, r, t, o);
    i.debug("UIO cutter2: start intersection", e), I(a, "start", e);
  }
  let h = null,
    f = -1;
  for (let n = a.length - 1; n >= 0; n--)
    if (k(c, a[n])) {
      (h = a[n]), (f = n);
      break;
    }
  if ((!h && a.length > 1 && ((h = a[a.length - 2]), (f = a.length - 2)), h)) {
    const n = ft(t, c, a, f, -1) ?? O(t, c, h, u);
    i.debug("UIO cutter2: end intersection", {
      endIntersection: n,
      outsideIndexForEnd: f,
    }),
      I(a, "end", n);
  }
  if (a.length > 1) {
    const n = a[a.length - 1],
      t = a[a.length - 2],
      e = Math.sqrt((n.x - t.x) ** 2 + (n.y - t.y) ** 2);
    e < 2 &&
      (i.debug("UIO cutter2: trimming tail point (too close)", {
        distance: e,
        lastPoint: n,
        secondLastPoint: t,
      }),
      a.pop());
  }
  return i.debug("UIO cutter2: final points", a), a;
}
(0, u.K)(Dn, "terminalLabelObstacles"),
  (0, u.K)(Kn, "placedTerminalLabels"),
  (0, u.K)(Rn, "slideTerminalLabelsOffFrames"),
  (0, u.K)(Fn, "putTerminalLabelsOnTheirSide"),
  (0, u.K)(_n, "followMovedEndpoints"),
  (0, u.K)(Bn, "alignDegenerateNodeToAnchor"),
  (0, u.K)(Hn, "createEdgePointsFromSection"),
  (0, u.K)(Un, "calcOffset"),
  (0, u.K)(Gn, "sanitizeElkEdgePoints"),
  (0, u.K)(qn, "hasInvalidPoint"),
  (0, u.K)(Xn, "dedupeConsecutivePoints"),
  (0, u.K)(zn, "getEndMarkerPathOffset"),
  (0, u.K)(Vn, "getStartMarkerPathOffset"),
  (0, u.K)(Wn, "ensureStartMarkerSegmentLength"),
  (0, u.K)(Qn, "ensureEndMarkerSegmentLength"),
  (0, u.K)(Jn, "applyElkEdgeRenderData"),
  (0, u.K)(Yn, "buildFallbackEdgeClasses"),
  (0, u.K)(Zn, "computeStroke"),
  (0, u.K)(nt, "getCurve"),
  (0, u.K)(tt, "buildEdgeData"),
  (0, u.K)(et, "getEffectiveGroupWidth"),
  (0, u.K)(it, "boundsFor"),
  (0, u.K)(rt, "approxEq"),
  (0, u.K)(ct, "isCenterApprox"),
  (0, u.K)(at, "getCandidateBorderPoint"),
  (0, u.K)(ot, "dropAutoCenterPoint"),
  (0, u.K)(ut, "clipGroupEndpoint"),
  (0, u.K)(st, "applyStartIntersectionIfNeeded"),
  (0, u.K)(ht, "applyEndIntersectionIfNeeded"),
  (0, u.K)(ft, "attachAlongDepartureAxis"),
  (0, u.K)(lt, "cutter2");
