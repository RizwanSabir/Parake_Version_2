// vendor/module-79611.js — webpack module 79611
// params: (t, e, i) = (module, exports, require)
"use strict";
i.d(e, { diagram: () => et });
var n = i(26637 /* vendor/module-26637 */),
  r = i(56496 /* vendor/module-56496 */),
  o = i(27741 /* vendor/module-27741 */),
  s = i(50320 /* vendor/module-50320 */),
  a = i(72514 /* vendor/module-72514 */),
  h = i(8679 /* vendor/module-8679 */),
  l = i(27166 /* vendor/module-27166 */),
  d = i(79456 /* vendor/module-79456 */),
  c = i(73744 /* vendor/module-73744 */),
  g = i(88936 /* vendor/module-88936 */),
  u = i(53574 /* vendor/module-53574 */),
  f = i(27197 /* vendor/module-27197 */),
  p = { L: "left", R: "right", T: "top", B: "bottom" },
  m = {
    L: (0, d.K)((t) => `${t},${t / 2} 0,${t} 0,0`, "L"),
    R: (0, d.K)((t) => `0,${t / 2} ${t},0 ${t},${t}`, "R"),
    T: (0, d.K)((t) => `0,0 ${t},0 ${t / 2},${t}`, "T"),
    B: (0, d.K)((t) => `${t / 2},0 ${t},${t} 0,${t}`, "B"),
  },
  y = {
    L: (0, d.K)((t, e) => t - e + 2, "L"),
    R: (0, d.K)((t, e) => t - 2, "R"),
    T: (0, d.K)((t, e) => t - e + 2, "T"),
    B: (0, d.K)((t, e) => t - 2, "B"),
  },
  v = (0, d.K)(function (t) {
    return N(t) ? ("L" === t ? "R" : "L") : "T" === t ? "B" : "T";
  }, "getOppositeArchitectureDirection"),
  E = (0, d.K)(function (t) {
    return "L" === t || "R" === t || "T" === t || "B" === t;
  }, "isArchitectureDirection"),
  N = (0, d.K)(function (t) {
    return "L" === t || "R" === t;
  }, "isArchitectureDirectionX"),
  T = (0, d.K)(function (t) {
    return "T" === t || "B" === t;
  }, "isArchitectureDirectionY"),
  A = (0, d.K)(function (t, e) {
    const i = N(t) && T(e),
      n = T(t) && N(e);
    return i || n;
  }, "isArchitectureDirectionXY"),
  w = (0, d.K)(function (t) {
    const e = t[0],
      i = t[1],
      n = N(e) && T(i),
      r = T(e) && N(i);
    return n || r;
  }, "isArchitecturePairXY"),
  I = (0, d.K)(function (t) {
    return "LL" !== t && "RR" !== t && "TT" !== t && "BB" !== t;
  }, "isValidArchitectureDirectionPair"),
  C = (0, d.K)(function (t, e) {
    const i = `${t}${e}`;
    return I(i) ? i : void 0;
  }, "getArchitectureDirectionPair"),
  L = (0, d.K)(function ([t, e], i) {
    const n = i[0],
      r = i[1];
    return N(n)
      ? T(r)
        ? [t + ("L" === n ? -1 : 1), e + ("T" === r ? 1 : -1)]
        : [t + ("L" === n ? -1 : 1), e]
      : N(r)
        ? [t + ("L" === r ? 1 : -1), e + ("T" === n ? 1 : -1)]
        : [t, e + ("T" === n ? 1 : -1)];
  }, "shiftPositionByArchitectureDirectionPair"),
  M = (0, d.K)(function (t) {
    return "LT" === t || "TL" === t
      ? [1, 1]
      : "BL" === t || "LB" === t
        ? [1, -1]
        : "BR" === t || "RB" === t
          ? [-1, -1]
          : [-1, 1];
  }, "getArchitectureDirectionXYFactors"),
  _ = (0, d.K)(function (t, e) {
    return A(t, e) ? "bend" : N(t) ? "horizontal" : "vertical";
  }, "getArchitectureDirectionAlignment"),
  x = (0, d.K)(function (t) {
    return "service" === t.type;
  }, "isArchitectureService"),
  O = (0, d.K)(function (t) {
    return "junction" === t.type;
  }, "isArchitectureJunction"),
  D = (0, d.K)((t, e) => {
    const [i, n] = [t, e].sort();
    return `${JSON.stringify(i)}-${JSON.stringify(n)}`;
  }, "architectureGroupAlignmentKey"),
  R = (0, d.K)((t) => t.data(), "edgeData"),
  b = (0, d.K)((t) => t.data(), "nodeData"),
  F = h.UI.architecture,
  G = class {
    constructor() {
      (this.nodes = new Map()),
        (this.groups = new Map()),
        (this.edges = []),
        (this.layoutHints = []),
        (this.registeredIds = new Map()),
        (this.elements = new Map()),
        (this.diagramId = ""),
        (this.setAccTitle = h.SV),
        (this.getAccTitle = h.iN),
        (this.setDiagramTitle = h.ke),
        (this.getDiagramTitle = h.ab),
        (this.getAccDescription = h.m7),
        (this.setAccDescription = h.EI),
        this.clear();
    }
    static {
      (0, d.K)(this, "ArchitectureDB");
    }
    setDiagramId(t) {
      this.diagramId = t;
    }
    getDiagramId() {
      return this.diagramId;
    }
    clear() {
      (this.nodes = new Map()),
        (this.groups = new Map()),
        (this.edges = []),
        (this.layoutHints = []),
        (this.registeredIds = new Map()),
        (this.dataStructures = void 0),
        (this.elements = new Map()),
        (this.diagramId = ""),
        (0, h.IU)();
    }
    addService({ id: t, icon: e, in: i, title: n, iconText: r }) {
      if (this.registeredIds.has(t))
        throw new Error(
          `The service id [${t}] is already in use by another ${this.registeredIds.get(t)}`,
        );
      if (void 0 !== i) {
        if (t === i)
          throw new Error(`The service [${t}] cannot be placed within itself`);
        if (!this.registeredIds.has(i))
          throw new Error(
            `The service [${t}]'s parent does not exist. Please make sure the parent is created before this service`,
          );
        if ("node" === this.registeredIds.get(i))
          throw new Error(`The service [${t}]'s parent is not a group`);
      }
      this.registeredIds.set(t, "node"),
        this.nodes.set(t, {
          id: t,
          type: "service",
          icon: e,
          iconText: r,
          title: n,
          edges: [],
          in: i,
        });
    }
    getServices() {
      return [...this.nodes.values()].filter(x);
    }
    addJunction({ id: t, in: e }) {
      if (this.registeredIds.has(t))
        throw new Error(
          `The junction id [${t}] is already in use by another ${this.registeredIds.get(t)}`,
        );
      if (void 0 !== e) {
        if (t === e)
          throw new Error(`The junction [${t}] cannot be placed within itself`);
        if (!this.registeredIds.has(e))
          throw new Error(
            `The junction [${t}]'s parent does not exist. Please make sure the parent is created before this junction`,
          );
        if ("node" === this.registeredIds.get(e))
          throw new Error(`The junction [${t}]'s parent is not a group`);
      }
      this.registeredIds.set(t, "node"),
        this.nodes.set(t, { id: t, type: "junction", edges: [], in: e });
    }
    getJunctions() {
      return [...this.nodes.values()].filter(O);
    }
    getNodes() {
      return [...this.nodes.values()];
    }
    getNode(t) {
      return this.nodes.get(t) ?? null;
    }
    addGroup({ id: t, icon: e, in: i, title: n }) {
      if (this.registeredIds.has(t))
        throw new Error(
          `The group id [${t}] is already in use by another ${this.registeredIds.get(t)}`,
        );
      if (void 0 !== i) {
        if (t === i)
          throw new Error(`The group [${t}] cannot be placed within itself`);
        if (!this.registeredIds.has(i))
          throw new Error(
            `The group [${t}]'s parent does not exist. Please make sure the parent is created before this group`,
          );
        if ("node" === this.registeredIds.get(i))
          throw new Error(`The group [${t}]'s parent is not a group`);
      }
      this.registeredIds.set(t, "group"),
        this.groups.set(t, { id: t, icon: e, title: n, in: i });
    }
    getGroups() {
      return [...this.groups.values()];
    }
    addEdge({
      lhsId: t,
      rhsId: e,
      lhsDir: i,
      rhsDir: n,
      lhsInto: r,
      rhsInto: o,
      lhsGroup: s,
      rhsGroup: a,
      title: h,
    }) {
      if (!E(i))
        throw new Error(
          `Invalid direction given for left hand side of edge ${t}--${e}. Expected (L,R,T,B) got ${String(i)}`,
        );
      if (!E(n))
        throw new Error(
          `Invalid direction given for right hand side of edge ${t}--${e}. Expected (L,R,T,B) got ${String(n)}`,
        );
      if (!this.nodes.has(t) && !this.groups.has(t))
        throw new Error(
          `The left-hand id [${t}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      if (!this.nodes.has(e) && !this.groups.has(e))
        throw new Error(
          `The right-hand id [${e}] does not yet exist. Please create the service/group before declaring an edge to it.`,
        );
      const l = this.nodes.get(t).in,
        d = this.nodes.get(e).in;
      if (s && l && d && l == d)
        throw new Error(
          `The left-hand id [${t}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      if (a && l && d && l == d)
        throw new Error(
          `The right-hand id [${e}] is modified to traverse the group boundary, but the edge does not pass through two groups.`,
        );
      const c = {
        lhsId: t,
        lhsDir: i,
        lhsInto: r,
        lhsGroup: s,
        rhsId: e,
        rhsDir: n,
        rhsInto: o,
        rhsGroup: a,
        title: h,
      };
      this.edges.push(c);
      const g = this.nodes.get(t),
        u = this.nodes.get(e);
      g &&
        u &&
        (g.edges.push(this.edges[this.edges.length - 1]),
        u.edges.push(this.edges[this.edges.length - 1]));
    }
    getEdges() {
      return this.edges;
    }
    addLayoutHint(t) {
      if (t.members.length < 2)
        throw new Error(
          `An align directive requires at least two members; got ${t.members.length}`,
        );
      const e = new Set();
      t.members.forEach((i) => {
        if ("node" !== this.registeredIds.get(i))
          throw new Error(
            `align ${t.direction} references [${i}], which is not a service or junction`,
          );
        if (e.has(i))
          throw new Error(`align ${t.direction} lists [${i}] more than once`);
        e.add(i);
      }),
        this.layoutHints.push(t);
    }
    getLayoutHints() {
      return this.layoutHints;
    }
    getDataStructures() {
      if (void 0 === this.dataStructures) {
        const t = new Map(),
          e = new Map();
        for (const [i, n] of this.nodes.entries()) {
          const r = new Map();
          for (const e of n.edges) {
            const n = this.getNode(e.lhsId)?.in,
              o = this.getNode(e.rhsId)?.in;
            if (n && o && n !== o) {
              const i = _(e.lhsDir, e.rhsDir);
              "bend" !== i && t.set(D(n, o), i);
            }
            if (e.lhsId === i) {
              const t = C(e.lhsDir, e.rhsDir);
              t && r.set(t, e.rhsId);
            } else {
              const t = C(e.rhsDir, e.lhsDir);
              t && r.set(t, e.lhsId);
            }
          }
          e.set(i, r);
        }
        const i = new Set(),
          n = new Set(e.keys()),
          r = (0, d.K)((t) => {
            const r = new Map([[t, [0, 0]]]),
              o = [t];
            for (; o.length > 0; ) {
              const t = o.shift();
              if (t) {
                i.add(t), n.delete(t);
                const s = e.get(t);
                if (!s)
                  throw new Error(
                    `BFS error: adjacency list for id ${t} not found. Please report this as a bug.`,
                  );
                const a = r.get(t);
                if (!a)
                  throw new Error(
                    `BFS error: position for id ${t} not found in spatial map. Please report this as a bug.`,
                  );
                const [h, l] = a;
                s.forEach((t, e) => {
                  i.has(t) || (r.set(t, L([h, l], e)), o.push(t));
                });
              }
            }
            return r;
          }, "BFS"),
          o = [];
        for (; n.size > 0; ) {
          const t = n.values().next().value;
          o.push(r(t));
        }
        this.dataStructures = {
          adjList: e,
          spatialMaps: o,
          groupAlignments: t,
        };
      }
      return this.dataStructures;
    }
    setElementForId(t, e) {
      this.elements.set(t, e);
    }
    getElementById(t) {
      return this.elements.get(t);
    }
    getConfig() {
      return (0, a.$t)({ ...F, ...(0, h.zj)().architecture });
    }
    getConfigField(t) {
      return this.getConfig()[t];
    }
  },
  S = (0, d.K)((t, e) => {
    (0, n.S)(t, e),
      t.groups.map((t) => e.addGroup(t)),
      t.services.map((t) => e.addService({ ...t, type: "service" })),
      t.junctions.map((t) => e.addJunction({ ...t, type: "junction" })),
      t.edges.map((t) => e.addEdge(t)),
      t.alignments?.map((t) =>
        e.addLayoutHint({
          direction: t.direction,
          members: [...t.members],
        }),
      );
  }, "populateDb"),
  P = {
    parser: { yy: void 0 },
    parse: (0, d.K)(async (t) => {
      const e = await (0, c.qg)("architecture", t);
      l.R.debug(e);
      const i = P.parser?.yy;
      if (!(i instanceof G))
        throw new Error(
          "parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      S(e, i);
    }, "parse"),
  },
  U = (0, d.K)(
    (t) =>
      `\n  .edge {\n    stroke-width: ${t.archEdgeWidth};\n    stroke: ${t.archEdgeColor};\n    fill: none;\n  }\n\n  .arrow {\n    fill: ${t.archEdgeArrowColor};\n  }\n\n  .node-bkg {\n    fill: none;\n    stroke: ${t.archGroupBorderColor};\n    stroke-width: ${t.archGroupBorderWidth};\n    stroke-dasharray: 8;\n  }\n  .node-icon-text {\n    display: flex; \n    align-items: center;\n  }\n  \n  .node-icon-text > div {\n    color: #fff;\n    margin: 1px;\n    height: fit-content;\n    text-align: center;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n  }\n`,
    "getStyles",
  );
function Y(t, e) {
  if (0 === t) return e();
  const i = Math.random;
  let n = t >>> 0;
  Math.random = function () {
    n = (n + 1831565813) >>> 0;
    let t = n;
    return (
      (t = Math.imul(t ^ (t >>> 15), 1 | t)),
      (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
  try {
    return e();
  } finally {
    Math.random = i;
  }
}
(0, d.K)(Y, "withSeededRandom");
var k = (0, d.K)(
    (t) =>
      `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${t}</g>`,
    "wrapIcon",
  ),
  H = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: k(
          '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      server: {
        body: k(
          '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>',
        ),
      },
      disk: {
        body: k(
          '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>',
        ),
      },
      internet: {
        body: k(
          '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      cloud: {
        body: k(
          '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>',
        ),
      },
      unknown: s.Gc,
      blank: { body: k("") },
    },
  },
  X = (0, d.K)(async function (t, e, i, n) {
    const r = i.getConfigField("padding"),
      s = i.getConfigField("iconSize"),
      l = s / 2,
      d = s / 6,
      c = d / 2;
    await Promise.all(
      e.edges().map(async (e) => {
        const {
          source: s,
          sourceDir: g,
          sourceArrow: u,
          sourceGroup: f,
          target: p,
          targetDir: v,
          targetArrow: E,
          targetGroup: I,
          label: L,
        } = R(e);
        let { x: _, y: x } = e[0].sourceEndpoint();
        const { x: O, y: D } = e[0].midpoint();
        let { x: b, y: F } = e[0].targetEndpoint();
        const G = r + 4;
        if (
          (f &&
            (N(g) ? (_ += "L" === g ? -G : G) : (x += "T" === g ? -G : G + 18)),
          I &&
            (N(v) ? (b += "L" === v ? -G : G) : (F += "T" === v ? -G : G + 18)),
          f ||
            "junction" !== i.getNode(s)?.type ||
            (N(g) ? (_ += "L" === g ? l : -l) : (x += "T" === g ? l : -l)),
          I ||
            "junction" !== i.getNode(p)?.type ||
            (N(v) ? (b += "L" === v ? l : -l) : (F += "T" === v ? l : -l)),
          e[0]._private.rscratch)
        ) {
          const e = t.insert("g");
          if (
            (e
              .insert("path")
              .attr("d", `M ${_},${x} L ${O},${D} L${b},${F} `)
              .attr("class", "edge")
              .attr("id", `${n}-${(0, a.rY)(s, p, { prefix: "L" })}`),
            u)
          ) {
            const t = N(g) ? y[g](_, d) : _ - c,
              i = T(g) ? y[g](x, d) : x - c;
            e.insert("polygon")
              .attr("points", m[g](d))
              .attr("transform", `translate(${t},${i})`)
              .attr("class", "arrow");
          }
          if (E) {
            const t = N(v) ? y[v](b, d) : b - c,
              i = T(v) ? y[v](F, d) : F - c;
            e.insert("polygon")
              .attr("points", m[v](d))
              .attr("transform", `translate(${t},${i})`)
              .attr("class", "arrow");
          }
          if (L) {
            const t = A(g, v) ? "XY" : N(g) ? "X" : "Y";
            let i = 0;
            i =
              "X" === t
                ? Math.abs(_ - b)
                : "Y" === t
                  ? Math.abs(x - F) / 1.5
                  : Math.abs(_ - b) / 2;
            const n = e.append("g");
            if (
              (await (0, o.GZ)(
                n,
                L,
                {
                  useHtmlLabels: !1,
                  width: i,
                  classes: "architecture-service-label",
                },
                (0, h.D7)(),
              ),
              n
                .attr("dy", "1em")
                .attr("alignment-baseline", "middle")
                .attr("dominant-baseline", "middle")
                .attr("text-anchor", "middle"),
              "X" === t)
            )
              n.attr("transform", "translate(" + O + ", " + D + ")");
            else if ("Y" === t)
              n.attr(
                "transform",
                "translate(" + O + ", " + D + ") rotate(-90)",
              );
            else if ("XY" === t) {
              const t = C(g, v);
              if (t && w(t)) {
                const e = n.node().getBoundingClientRect(),
                  [i, r] = M(t);
                n.attr("dominant-baseline", "auto").attr(
                  "transform",
                  `rotate(${-1 * i * r * 45})`,
                );
                const o = n.node().getBoundingClientRect();
                n.attr(
                  "transform",
                  `\n                translate(${O}, ${D - e.height / 2})\n                translate(${(i * o.width) / 2}, ${(r * o.height) / 2})\n                rotate(${-1 * i * r * 45}, 0, ${e.height / 2})\n              `,
                );
              }
            }
          }
        }
      }),
    );
  }, "drawEdges"),
  z = (0, d.K)(async function (t, e, i, n) {
    const r = 0.75 * i.getConfigField("padding"),
      a = i.getConfigField("fontSize"),
      l = i.getConfigField("iconSize") / 2;
    await Promise.all(
      e.nodes().map(async (e) => {
        const d = b(e);
        if ("group" === d.type) {
          const { h: c, w: g, x1: u, y1: f } = e.boundingBox(),
            p = t.append("rect");
          p.attr("id", `${n}-group-${d.id}`)
            .attr("x", u + l)
            .attr("y", f + l)
            .attr("width", g)
            .attr("height", c)
            .attr("class", "node-bkg");
          const m = t.append("g");
          let y = u,
            v = f;
          if (d.icon) {
            const t = m.append("g");
            t.html(
              `<g>${await (0, s.WY)(d.icon, { height: r, width: r, fallbackPrefix: H.prefix })}</g>`,
            ),
              t.attr(
                "transform",
                "translate(" + (y + l + 1) + ", " + (v + l + 1) + ")",
              ),
              (y += r),
              (v += a / 2 - 1 - 2);
          }
          if (d.label) {
            const t = m.append("g");
            await (0, o.GZ)(
              t,
              d.label,
              {
                useHtmlLabels: !1,
                width: g,
                classes: "architecture-service-label",
              },
              (0, h.D7)(),
            ),
              t
                .attr("dy", "1em")
                .attr("alignment-baseline", "middle")
                .attr("dominant-baseline", "start")
                .attr("text-anchor", "start"),
              t.attr(
                "transform",
                "translate(" + (y + l + 4) + ", " + (v + l + 2) + ")",
              );
          }
          i.setElementForId(d.id, p);
        }
      }),
    );
  }, "drawGroups"),
  B = (0, d.K)(async function (t, e, i, n) {
    const r = (0, h.D7)();
    for (const a of i) {
      const i = e.append("g"),
        l = t.getConfigField("iconSize");
      if (a.title) {
        const t = i.append("g");
        await (0, o.GZ)(
          t,
          a.title,
          {
            useHtmlLabels: !1,
            width: 1.5 * l,
            classes: "architecture-service-label",
          },
          r,
        ),
          t
            .attr("dy", "1em")
            .attr("alignment-baseline", "middle")
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle"),
          t.attr("transform", "translate(" + l / 2 + ", " + l + ")");
      }
      const d = i.append("g");
      if (a.icon)
        d.html(
          `<g>${await (0, s.WY)(a.icon, { height: l, width: l, fallbackPrefix: H.prefix })}</g>`,
        );
      else if (a.iconText) {
        d.html(
          `<g>${await (0, s.WY)("blank", { height: l, width: l, fallbackPrefix: H.prefix })}</g>`,
        );
        const t = d
            .append("g")
            .append("foreignObject")
            .attr("width", l)
            .attr("height", l)
            .append("div")
            .attr("class", "node-icon-text")
            .attr("style", `height: ${l}px;`)
            .append("div")
            .html((0, h.jZ)(a.iconText, r)),
          e =
            parseInt(
              window
                .getComputedStyle(t.node(), null)
                .getPropertyValue("font-size")
                .replace(/\D/g, ""),
            ) ?? 16;
        t.attr("style", `-webkit-line-clamp: ${Math.floor((l - 2) / e)};`);
      } else
        d.append("path")
          .attr("class", "node-bkg")
          .attr("id", `${n}-node-${a.id}`)
          .attr("d", `M0,${l} V5 Q0,0 5,0 H${l - 5} Q${l},0 ${l},5 V${l} Z`);
      i.attr("id", `${n}-service-${a.id}`).attr(
        "class",
        "architecture-service",
      );
      const { width: c, height: g } = i.node().getBBox();
      (a.width = c), (a.height = g), t.setElementForId(a.id, i);
    }
    return 0;
  }, "drawServices"),
  V = (0, d.K)(function (t, e, i, n) {
    i.forEach((i) => {
      const r = e.append("g"),
        o = t.getConfigField("iconSize");
      r
        .append("g")
        .append("rect")
        .attr("id", `${n}-node-${i.id}`)
        .attr("fill-opacity", "0")
        .attr("width", o)
        .attr("height", o),
        r.attr("class", "architecture-junction");
      const { width: s, height: a } = r._groups[0][0].getBBox();
      (r.width = s), (r.height = a), t.setElementForId(i.id, r);
    });
  }, "drawJunctions");
function W(t, e, i) {
  t.forEach((t) => {
    e.add({
      group: "nodes",
      data: {
        type: "service",
        id: t.id,
        icon: t.icon,
        label: t.title,
        parent: t.in,
        width: i.getConfigField("iconSize"),
        height: i.getConfigField("iconSize"),
      },
      classes: "node-service",
    });
  });
}
function $(t, e, i) {
  t.forEach((t) => {
    e.add({
      group: "nodes",
      data: {
        type: "junction",
        id: t.id,
        parent: t.in,
        width: i.getConfigField("iconSize"),
        height: i.getConfigField("iconSize"),
      },
      classes: "node-junction",
    });
  });
}
function j(t, e) {
  e.nodes().map((e) => {
    const i = b(e);
    "group" !== i.type &&
      ((i.x = e.position().x),
      (i.y = e.position().y),
      t
        .getElementById(i.id)
        .attr("transform", "translate(" + (i.x || 0) + "," + (i.y || 0) + ")"));
  });
}
function q(t, e) {
  t.forEach((t) => {
    e.add({
      group: "nodes",
      data: {
        type: "group",
        id: t.id,
        icon: t.icon,
        label: t.title,
        parent: t.in,
      },
      classes: "node-group",
    });
  });
}
function K(t, e) {
  t.forEach((t) => {
    const {
        lhsId: i,
        rhsId: n,
        lhsInto: r,
        lhsGroup: o,
        rhsInto: s,
        lhsDir: a,
        rhsDir: h,
        rhsGroup: l,
        title: d,
      } = t,
      c = A(t.lhsDir, t.rhsDir) ? "segments" : "straight",
      g = {
        id: `${i}-${n}`,
        label: d,
        source: i,
        sourceDir: a,
        sourceArrow: r,
        sourceGroup: o,
        sourceEndpoint:
          "L" === a
            ? "0 50%"
            : "R" === a
              ? "100% 50%"
              : "T" === a
                ? "50% 0"
                : "50% 100%",
        target: n,
        targetDir: h,
        targetArrow: s,
        targetGroup: l,
        targetEndpoint:
          "L" === h
            ? "0 50%"
            : "R" === h
              ? "100% 50%"
              : "T" === h
                ? "50% 0"
                : "50% 100%",
      };
    e.add({ group: "edges", data: g, classes: c });
  });
}
function Z(t, e, i, n = []) {
  const r = (0, d.K)((t, e) => {
      const n = new Map();
      for (const [r, o] of t.entries()) {
        const t = `${r}`;
        let s = 0;
        const a = [...o.entries()];
        if (1 !== a.length)
          for (let r = 0; r < a.length - 1; r++)
            for (let o = r + 1; o < a.length; o++) {
              const [h, l] = a[r],
                [d, c] = a[o];
              if (i.get(D(h, d)) === e)
                n.set(t, [...(n.get(t) ?? []), ...l, ...c]);
              else if ("default" === h || "default" === d)
                n.set(t, [...(n.get(t) ?? []), ...l, ...c]);
              else {
                const e = `${t}-${s++}`;
                n.set(e, l);
                const i = `${t}-${s++}`;
                n.set(i, c);
              }
            }
        else n.set(t, a[0][1]);
      }
      return n;
    }, "flattenAlignments"),
    o = e.map((e) => {
      const i = new Map(),
        n = new Map();
      return (
        e.forEach(([e, r], o) => {
          const s = t.getNode(o)?.in ?? "default",
            a = i.get(r) ?? new Map();
          i.has(r) || i.set(r, a);
          const h = n.get(e) ?? new Map();
          n.has(e) || n.set(e, h);
          for (const t of [a, h]) {
            const e = t.get(s) ?? [];
            t.has(s) || t.set(s, e), e.push(o);
          }
        }),
        {
          horiz: [...r(i, "horizontal").values()].filter((t) => t.length > 1),
          vert: [...r(n, "vertical").values()].filter((t) => t.length > 1),
        }
      );
    }),
    [s, a] = o.reduce(
      ([t, e], { horiz: i, vert: n }) => [
        [...t, ...i],
        [...e, ...n],
      ],
      [[], []],
    ),
    h = new Set();
  n.forEach((t) => t.members.forEach((t) => h.add(t)));
  const l = (0, d.K)(
      (t) => t.filter((t) => !t.some((t) => h.has(t))),
      "dropOverlapping",
    ),
    c = l(s),
    g = l(a);
  return (
    n.forEach((t) => {
      t.members.length < 2 ||
        ("row" === t.direction
          ? c.push([...t.members])
          : g.push([...t.members]));
    }),
    { horizontal: c, vertical: g }
  );
}
function Q(t, e, i = []) {
  const n = [],
    r = e.getConfigField("iconSize"),
    o = e.getConfigField("idealEdgeLengthMultiplier"),
    s = o * r,
    a = new Set();
  i.forEach((t) => {
    for (let e = 0; e < t.members.length - 1; e++) {
      const i = t.members[e],
        r = t.members[e + 1];
      a.add(`${i}|${r}`),
        a.add(`${r}|${i}`),
        "row" === t.direction
          ? n.push({ left: i, right: r, gap: s })
          : n.push({ top: i, bottom: r, gap: s });
    }
  });
  const h = (0, d.K)((t) => `${t[0]},${t[1]}`, "posToStr"),
    l = (0, d.K)((t) => t.split(",").map((t) => parseInt(t)), "strToPos");
  return (
    t.forEach((t) => {
      const e = new Map([...t.entries()].map(([t, e]) => [h(e), t])),
        i = [h([0, 0])],
        s = {},
        d = { L: [-1, 0], R: [1, 0], T: [0, 1], B: [0, -1] };
      for (; i.length > 0; ) {
        const t = i.shift();
        if (t) {
          s[t] = 1;
          const c = e.get(t);
          if (c) {
            const g = l(t);
            Object.entries(d).forEach(([t, l]) => {
              const d = h([g[0] + l[0], g[1] + l[1]]),
                u = e.get(d);
              if (u && !s[d]) {
                if ((i.push(d), a.has(`${c}|${u}`))) return;
                n.push({ [p[t]]: u, [p[v(t)]]: c, gap: o * r });
              }
            });
          }
        }
      }
    }),
    n
  );
}
function J(t, e, i, n, r, { spatialMaps: o, groupAlignments: s }) {
  return new Promise((a) => {
    const h = (0, f.Ltv)("body")
        .append("div")
        .attr("id", "cy")
        .attr("style", "display:none"),
      c = (0, g.A)({
        container: document.getElementById("cy"),
        style: [
          {
            selector: "edge",
            style: {
              "curve-style": "straight",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          { selector: "edge[label]", style: { label: "data(label)" } },
          {
            selector: "edge.segments",
            style: {
              "curve-style": "segments",
              "segment-weights": "0",
              "segment-distances": [0.5],
              "edge-distances": "endpoints",
              "source-endpoint": "data(sourceEndpoint)",
              "target-endpoint": "data(targetEndpoint)",
            },
          },
          {
            selector: "node",
            style: { "compound-sizing-wrt-labels": "include" },
          },
          {
            selector: "node[label]",
            style: {
              "text-valign": "bottom",
              "text-halign": "center",
              "font-size": `${r.getConfigField("fontSize")}px`,
            },
          },
          {
            selector: ".node-service",
            style: {
              label: "data(label)",
              width: "data(width)",
              height: "data(height)",
            },
          },
          {
            selector: ".node-junction",
            style: { width: "data(width)", height: "data(height)" },
          },
          {
            selector: ".node-group",
            style: { padding: `${r.getConfigField("padding")}px` },
          },
        ],
        layout: {
          name: "grid",
          boundingBox: { x1: 0, x2: 100, y1: 0, y2: 100 },
        },
      });
    h.remove(), q(i, c), W(t, c, r), $(e, c, r), K(n, c);
    const u = r.getLayoutHints(),
      p = Z(r, o, s, u),
      m = Q(o, r, u),
      y = r.getConfigField("iconSize"),
      v = r.getConfigField("idealEdgeLengthMultiplier") * y,
      E = 0.5 * y,
      N = r.getConfigField("edgeElasticity"),
      A = r.getConfigField("seed"),
      w = c.layout({
        name: "fcose",
        quality: "proof",
        randomize: r.getConfigField("randomize"),
        nodeSeparation: r.getConfigField("nodeSeparation"),
        numIter: r.getConfigField("numIter"),
        styleEnabled: !1,
        animate: !1,
        nodeDimensionsIncludeLabels: !1,
        idealEdgeLength(t) {
          const [e, i] = t.connectedNodes(),
            { parent: n } = b(e),
            { parent: r } = b(i);
          return n === r ? v : E;
        },
        edgeElasticity(t) {
          const [e, i] = t.connectedNodes(),
            { parent: n } = b(e),
            { parent: r } = b(i);
          return n === r ? N : 0.001;
        },
        alignmentConstraint: p,
        relativePlacementConstraint: m,
      });
    w.one("layoutstop", () => {
      function t(t, e, i, n) {
        let r, o;
        const { x: s, y: a } = t,
          { x: h, y: l } = e;
        (o =
          (n - a + ((s - i) * (a - l)) / (s - h)) /
          Math.sqrt(1 + Math.pow((a - l) / (s - h), 2))),
          (r = Math.sqrt(
            Math.pow(n - a, 2) + Math.pow(i - s, 2) - Math.pow(o, 2),
          )),
          (r /= Math.sqrt(Math.pow(h - s, 2) + Math.pow(l - a, 2)));
        let d = (h - s) * (n - a) - (l - a) * (i - s);
        switch (!0) {
          case d >= 0:
            d = 1;
            break;
          case d < 0:
            d = -1;
        }
        let c = (h - s) * (i - s) + (l - a) * (n - a);
        switch (!0) {
          case c >= 0:
            c = 1;
            break;
          case c < 0:
            c = -1;
        }
        return (o = Math.abs(o) * d), (r *= c), { distances: o, weights: r };
      }
      (0, d.K)(t, "getSegmentWeights"), c.startBatch();
      for (const e of Object.values(c.edges()))
        if (e.data?.()) {
          const { x: i, y: n } = e.source().position(),
            { x: r, y: o } = e.target().position();
          if (i !== r && n !== o) {
            const i = e.sourceEndpoint(),
              n = e.targetEndpoint(),
              { sourceDir: r } = R(e),
              [o, s] = T(r) ? [i.x, n.y] : [n.x, i.y],
              { weights: a, distances: h } = t(i, n, o, s);
            e.style("segment-distances", h), e.style("segment-weights", a);
          }
        }
      c.endBatch(), Y(A, () => w.run());
    });
    try {
      Y(A, () => w.run());
    } catch (t) {
      if (t instanceof RangeError && t.message.includes("Invalid array length"))
        throw new Error(
          "Architecture layout failed: a declared `align row|column` directive likely contradicts the edge directions, or two declared alignments overlap on a shared node. Check that the order of members in each `align` chain is consistent with the edges between them, and that no node appears in two `align` directives along the same axis.",
        );
      throw t;
    }
    c.ready((t) => {
      l.R.info("Ready", t), a(c);
    });
  });
}
(0, s.pC)([{ name: H.prefix, icons: H }]),
  g.A.use(u),
  (0, d.K)(W, "addServices"),
  (0, d.K)($, "addJunctions"),
  (0, d.K)(j, "positionNodes"),
  (0, d.K)(q, "addGroups"),
  (0, d.K)(K, "addEdges"),
  (0, d.K)(Z, "getAlignments"),
  (0, d.K)(Q, "getRelativeConstraints"),
  (0, d.K)(J, "layoutArchitecture");
var tt = {
    draw: (0, d.K)(async (t, e, i, n) => {
      const o = n.db;
      o.setDiagramId(e);
      const s = o.getServices(),
        a = o.getJunctions(),
        l = o.getGroups(),
        d = o.getEdges(),
        c = o.getDataStructures(),
        g = (0, r.D)(e),
        u = g.append("g");
      u.attr("class", "architecture-edges");
      const f = g.append("g");
      f.attr("class", "architecture-services");
      const p = g.append("g");
      p.attr("class", "architecture-groups"),
        await B(o, f, s, e),
        V(o, f, a, e);
      const m = await J(s, a, l, d, o, c);
      await X(u, m, o, e),
        await z(p, m, o, e),
        j(o, m),
        (0, h.ot)(
          void 0,
          g,
          o.getConfigField("padding"),
          o.getConfigField("useMaxWidth"),
        );
    }, "draw"),
  },
  et = {
    parser: P,
    get db() {
      return new G();
    },
    renderer: tt,
    styles: U,
  };
