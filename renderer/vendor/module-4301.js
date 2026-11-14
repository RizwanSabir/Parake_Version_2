// vendor/module-4301.js — webpack module 4301
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, {
  IU: () => v,
  Jo: () => N,
  Nq: () => f,
  Pk: () => $,
  T_: () => E,
  UQ: () => B,
  a6: () => _,
  g0: () => yt,
  hq: () => g,
  jP: () => F,
  lP: () => T,
});
var i = r(99624 /* vendor/module-99624 */),
  o = r(16450 /* vendor/module-16450 */),
  n = r(83035 /* vendor/module-83035 */),
  a = r(27741 /* vendor/module-27741 */),
  s = r(72514 /* vendor/module-72514 */),
  l = r(8679 /* vendor/module-8679 */),
  h = r(27166 /* vendor/module-27166 */),
  c = r(79456 /* vendor/module-79456 */),
  d = r(27197 /* vendor/module-27197 */),
  u = r(7083 /* vendor/module-7083 */),
  p = (0, c.K)((t, e) => {
    if (e) return "translate(" + -t.width / 2 + ", " + -t.height / 2 + ")";
    const r = t.x ?? 0,
      i = t.y ?? 0;
    return "translate(" + -(r + t.width / 2) + ", " + -(i + t.height / 2) + ")";
  }, "computeLabelTransform"),
  g = {
    aggregation: 17.25,
    extension: 17.25,
    composition: 17.25,
    dependency: 6,
    lollipop: 13.5,
    arrow_point: 4,
    arrow_barb: 0,
    arrow_barb_neo: 5.5,
  },
  f = { arrow_point: 4, arrow_cross: 12.5, arrow_circle: 12.5 };
function y(t, e) {
  if (void 0 === t || void 0 === e) return { angle: 0, deltaX: 0, deltaY: 0 };
  (t = m(t)), (e = m(e));
  const [r, i] = [t.x, t.y],
    [o, n] = [e.x, e.y],
    a = o - r,
    s = n - i;
  return { angle: Math.atan(s / a), deltaX: a, deltaY: s };
}
(0, c.K)(y, "calculateDeltaAndAngle");
var m = (0, c.K)(
    (t) => (Array.isArray(t) ? { x: t[0], y: t[1] } : t),
    "pointTransformer",
  ),
  x = (0, c.K)(
    (t) => ({
      x: (0, c.K)(function (e, r, i) {
        let o = 0;
        const n = m(i[0]).x < m(i[i.length - 1]).x ? "left" : "right";
        if (0 === r && Object.hasOwn(g, t.arrowTypeStart)) {
          const { angle: e, deltaX: r } = y(i[0], i[1]);
          o = g[t.arrowTypeStart] * Math.cos(e) * (r >= 0 ? 1 : -1);
        } else if (r === i.length - 1 && Object.hasOwn(g, t.arrowTypeEnd)) {
          const { angle: e, deltaX: r } = y(i[i.length - 1], i[i.length - 2]);
          o = g[t.arrowTypeEnd] * Math.cos(e) * (r >= 0 ? 1 : -1);
        }
        const a = Math.abs(m(e).x - m(i[i.length - 1]).x),
          s = Math.abs(m(e).y - m(i[i.length - 1]).y),
          l = Math.abs(m(e).x - m(i[0]).x),
          h = Math.abs(m(e).y - m(i[0]).y),
          c = g[t.arrowTypeStart],
          d = g[t.arrowTypeEnd];
        if (a < d && a > 0 && s < d) {
          let t = d + 1 - a;
          (t *= "right" === n ? -1 : 1), (o -= t);
        }
        if (l < c && l > 0 && h < c) {
          let t = c + 1 - l;
          (t *= "right" === n ? -1 : 1), (o += t);
        }
        return m(e).x + o;
      }, "x"),
      y: (0, c.K)(function (e, r, i) {
        let o = 0;
        const n = m(i[0]).y < m(i[i.length - 1]).y ? "down" : "up";
        if (0 === r && Object.hasOwn(g, t.arrowTypeStart)) {
          const { angle: e, deltaY: r } = y(i[0], i[1]);
          o = g[t.arrowTypeStart] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
        } else if (r === i.length - 1 && Object.hasOwn(g, t.arrowTypeEnd)) {
          const { angle: e, deltaY: r } = y(i[i.length - 1], i[i.length - 2]);
          o = g[t.arrowTypeEnd] * Math.abs(Math.sin(e)) * (r >= 0 ? 1 : -1);
        }
        const a = Math.abs(m(e).y - m(i[i.length - 1]).y),
          s = Math.abs(m(e).x - m(i[i.length - 1]).x),
          l = Math.abs(m(e).y - m(i[0]).y),
          h = Math.abs(m(e).x - m(i[0]).x),
          c = g[t.arrowTypeStart],
          d = g[t.arrowTypeEnd];
        if (a < d && a > 0 && s < d) {
          let t = d + 1 - a;
          (t *= "up" === n ? -1 : 1), (o -= t);
        }
        if (l < c && l > 0 && h < c) {
          let t = c + 1 - l;
          (t *= "up" === n ? -1 : 1), (o += t);
        }
        return m(e).y + o;
      }, "y"),
    }),
    "getLineFunctionsWithOffset",
  ),
  C = (0, c.K)((t, e, r, i, o, n = !1, a) => {
    e.arrowTypeStart && w(t, "start", e.arrowTypeStart, r, i, o, n, a),
      e.arrowTypeEnd && w(t, "end", e.arrowTypeEnd, r, i, o, n, a);
  }, "addEdgeMarkers"),
  b = {
    arrow_cross: { type: "cross", fill: !1 },
    arrow_point: { type: "point", fill: !0 },
    arrow_barb: { type: "barb", fill: !0 },
    arrow_barb_neo: { type: "barb", fill: !0 },
    arrow_circle: { type: "circle", fill: !1 },
    arrow_hierarchy: { type: "hierarchy", fill: !1 },
    aggregation: { type: "aggregation", fill: !1 },
    extension: { type: "extension", fill: !1 },
    composition: { type: "composition", fill: !0 },
    dependency: { type: "dependency", fill: !0 },
    lollipop: { type: "lollipop", fill: !1 },
    only_one: { type: "onlyOne", fill: !1 },
    zero_or_one: { type: "zeroOrOne", fill: !1 },
    one_or_more: { type: "oneOrMore", fill: !1 },
    zero_or_more: { type: "zeroOrMore", fill: !1 },
    requirement_arrow: { type: "requirement_arrow", fill: !1 },
    requirement_contains: { type: "requirement_contains", fill: !1 },
  },
  k = [
    "cross",
    "point",
    "circle",
    "lollipop",
    "aggregation",
    "extension",
    "composition",
    "dependency",
    "barb",
  ],
  w = (0, c.K)((t, e, r, i, o, n, a = !1, s) => {
    if (!r || "none" === r) return;
    const l = b[r],
      c = l && k.includes(l.type);
    if (!l) return void h.R.warn(`Unknown arrow type: ${r}`);
    const d = `${o}_${n}-${l.type}${"start" === e ? "Start" : "End"}${a && c ? "-margin" : ""}`;
    if (s && "" !== s.trim()) {
      const r = `${d}_${s.replace(/[^\dA-Za-z]/g, "_")}`;
      if (!document.getElementById(r)) {
        const t = document.getElementById(d);
        if (t) {
          const e = t.cloneNode(!0);
          (e.id = r),
            e.querySelectorAll("path, circle, line").forEach((t) => {
              t.setAttribute("stroke", s), l.fill && t.setAttribute("fill", s);
            }),
            t.parentNode?.appendChild(e);
        }
      }
      t.attr(`marker-${e}`, `url(${i}#${r})`);
    } else t.attr(`marker-${e}`, `url(${i}#${d})`);
  }, "addEdgeMarker"),
  S = (0, c.K)(
    (t) => ("string" == typeof t ? t : (0, l.D7)()?.flowchart?.curve),
    "resolveEdgeCurveType",
  ),
  T = new Map(),
  B = new Map(),
  v = (0, c.K)(() => {
    T.clear(), B.clear();
  }, "clear"),
  _ = (0, c.K)(
    (t) =>
      Boolean(
        t.label ||
          t.startLabelLeft ||
          t.startLabelRight ||
          t.endLabelLeft ||
          t.endLabelRight,
      ),
    "hasEdgeLabel",
  ),
  A = (0, c.K)(
    (t) =>
      t ? ("string" == typeof t ? t : t.reduce((t, e) => t + ";" + e, "")) : "",
    "getLabelStyles",
  ),
  F = (0, c.K)(async (t, e) => {
    const r = (0, l.D7)();
    let i = (0, l.E)(r);
    const { labelStyles: s } = (0, n.GX)(e);
    e.labelStyle = s;
    const c = t.insert("g").attr("class", "edgeLabel"),
      u = c.insert("g").attr("class", "label").attr("data-id", e.id),
      g = "markdown" === e.labelType,
      f = await (0, a.GZ)(
        t,
        e.label,
        {
          style: A(e.labelStyle),
          useHtmlLabels: i,
          addSvgBackground: !0,
          isNode: !1,
          markdown: g,
          width: void 0,
        },
        r,
      );
    let y, m, x;
    if ((u.node().appendChild(f), h.R.info("abc82", e, e.labelType), i)) {
      const t = f.children[0],
        e = (0, d.Ltv)(f);
      (y = await a.lT.measure(() => t.getBoundingClientRect())),
        (m = y),
        e.attr("width", y.width),
        e.attr("height", y.height);
    } else {
      const t = (0, d.Ltv)(f).select("text").node();
      await a.lT.measure(() => {
        (y = f.getBBox()),
          (m = t && "function" == typeof t.getBBox ? t.getBBox() : y);
      });
    }
    if (
      (u.attr("transform", p(m, i)),
      T.set(e.id, c),
      (e.width = y.width),
      (e.height = y.height),
      e.startLabelLeft)
    ) {
      const r = t.insert("g").attr("class", "edgeTerminals"),
        n = r.insert("g").attr("class", "inner"),
        a = await (0, o.DA)(n, e.startLabelLeft, A(e.labelStyle) || "", !1, !1);
      x = a;
      let s = a.getBBox();
      if (i) {
        const t = a.children[0],
          e = (0, d.Ltv)(a);
        (s = t.getBoundingClientRect()),
          e.attr("width", s.width),
          e.attr("height", s.height);
      }
      n.attr("transform", p(s, i)),
        B.get(e.id) || B.set(e.id, {}),
        (B.get(e.id).startLeft = r),
        M(x, e.startLabelLeft, s),
        L(e, "startLeft", s);
    }
    if (e.startLabelRight) {
      const r = t.insert("g").attr("class", "edgeTerminals"),
        n = r.insert("g").attr("class", "inner"),
        a = await (0, o.DA)(
          n,
          e.startLabelRight,
          A(e.labelStyle) || "",
          !1,
          !1,
        );
      x = a;
      let s = a.getBBox();
      if (i) {
        const t = a.children[0],
          e = (0, d.Ltv)(a);
        (s = t.getBoundingClientRect()),
          e.attr("width", s.width),
          e.attr("height", s.height);
      }
      n.attr("transform", p(s, i)),
        B.get(e.id) || B.set(e.id, {}),
        (B.get(e.id).startRight = r),
        M(x, e.startLabelRight, s),
        L(e, "startRight", s);
    }
    if (e.endLabelLeft) {
      const r = t.insert("g").attr("class", "edgeTerminals"),
        n = r.insert("g").attr("class", "inner"),
        a = await (0, o.DA)(n, e.endLabelLeft, A(e.labelStyle) || "", !1, !1);
      x = a;
      let s = a.getBBox();
      if (i) {
        const t = a.children[0],
          e = (0, d.Ltv)(a);
        (s = t.getBoundingClientRect()),
          e.attr("width", s.width),
          e.attr("height", s.height);
      }
      n.attr("transform", p(s, i)),
        B.get(e.id) || B.set(e.id, {}),
        (B.get(e.id).endLeft = r),
        M(x, e.endLabelLeft, s),
        L(e, "endLeft", s);
    }
    if (e.endLabelRight) {
      const r = t.insert("g").attr("class", "edgeTerminals"),
        n = r.insert("g").attr("class", "inner"),
        a = await (0, o.DA)(n, e.endLabelRight, A(e.labelStyle) || "", !1, !1);
      x = a;
      let s = a.getBBox();
      if (i) {
        const t = a.children[0],
          e = (0, d.Ltv)(a);
        (s = t.getBoundingClientRect()),
          e.attr("width", s.width),
          e.attr("height", s.height);
      }
      n.attr("transform", p(s, i)),
        B.get(e.id) || B.set(e.id, {}),
        (B.get(e.id).endRight = r),
        M(x, e.endLabelRight, s),
        L(e, "endRight", s);
    }
    return f;
  }, "insertEdgeLabel");
function L(t, e, r) {
  (t.terminalLabelSizes ??= {}),
    (t.terminalLabelSizes[e] = { width: r.width, height: r.height });
}
function M(t, e, r) {
  (0, l.E)((0, l.D7)()) &&
    t &&
    ((t.style.width = Math.max(9 * e.length, r.width) + "px"),
    (t.style.height = r.height + "px"));
}
(0, c.K)(L, "recordTerminalLabelSize"), (0, c.K)(M, "setTerminalWidth");
var $ = (0, c.K)((t, e) => {
    let r = t.x,
      i = t.y;
    if (e?.updatedPath) {
      const o = s._K.calcLabelPosition(e.updatedPath);
      if (e.originalPath) {
        const n = s._K.calcLabelPosition(e.originalPath);
        (r = t.x + (o.x - n.x)), (i = t.y + (o.y - n.y));
      } else (r = o.x), (i = o.y);
    }
    return { x: r, y: i };
  }, "resolveEdgeLabelPosition"),
  E = (0, c.K)((t, e) => {
    h.R.debug("Moving label abc88 ", t.id, t.label, T.get(t.id), e);
    const r = (0, l.D7)(),
      { subGraphTitleTotalMargin: o } = (0, i.Oi)(r);
    if (t.label) {
      const r = T.get(t.id),
        { x: i, y: n } = $(t, e);
      h.R.debug(
        "Moving label " + t.label + " from (",
        t.x,
        ",",
        t.y,
        ") to (",
        i,
        ",",
        n,
        ") abc88",
      ),
        r.attr("transform", `translate(${i}, ${n + o / 2})`);
    }
    const n = e.updatedPath ? e.updatedPath : e.originalPath;
    if (t.startLabelLeft) {
      const e = B.get(t.id).startLeft;
      let r = t.x,
        i = t.y;
      if (n) {
        const e = s._K.calcTerminalLabelPosition(
          t.arrowTypeStart ? 10 : 0,
          "start_left",
          n,
        );
        (r = e.x), (i = e.y);
      }
      e.attr("transform", `translate(${r}, ${i})`);
    }
    if (t.startLabelRight) {
      const e = B.get(t.id).startRight;
      let r = t.x,
        i = t.y;
      if (n) {
        const e = s._K.calcTerminalLabelPosition(
          t.arrowTypeStart ? 10 : 0,
          "start_right",
          n,
        );
        (r = e.x), (i = e.y);
      }
      e.attr("transform", `translate(${r}, ${i})`);
    }
    if (t.endLabelLeft) {
      const e = B.get(t.id).endLeft;
      let r = t.x,
        i = t.y;
      if (n) {
        const e = s._K.calcTerminalLabelPosition(
          t.arrowTypeEnd ? 10 : 0,
          "end_left",
          n,
        );
        (r = e.x), (i = e.y);
      }
      e.attr("transform", `translate(${r}, ${i})`);
    }
    if (t.endLabelRight) {
      const e = B.get(t.id).endRight;
      let r = t.x,
        i = t.y;
      if (n) {
        const e = s._K.calcTerminalLabelPosition(
          t.arrowTypeEnd ? 10 : 0,
          "end_right",
          n,
        );
        (r = e.x), (i = e.y);
      }
      e.attr("transform", `translate(${r}, ${i})`);
    }
  }, "positionEdgeLabel"),
  O = (0, c.K)((t, e) => {
    if (!t?.isLabelEdge || !t?.id?.endsWith("-to-label") || !Array.isArray(e))
      return e;
    if (2 !== e.length) return e;
    const [r, i] = e,
      o = Math.abs(i.x - r.x),
      n = Math.abs(i.y - r.y);
    return o < 0.001 || n < 0.001
      ? e
      : n >= o
        ? [r, { x: r.x, y: i.y }, i]
        : [r, { x: i.x, y: r.y }, i];
  }, "orthogonalizeToLabelClippedPoints"),
  D = (0, c.K)((t, e) => {
    const r = t.x,
      i = t.y,
      o = Math.abs(e.x - r),
      n = Math.abs(e.y - i),
      a = t.width / 2,
      s = t.height / 2;
    return o >= a || n >= s;
  }, "outsideNode"),
  I = (0, c.K)((t, e, r) => {
    h.R.debug(
      `intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(r)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`,
    );
    const i = t.x,
      o = t.y,
      n = Math.abs(i - r.x),
      a = t.width / 2;
    let s = r.x < e.x ? a - n : a + n;
    const l = t.height / 2,
      c = Math.abs(e.y - r.y),
      d = Math.abs(e.x - r.x);
    if (Math.abs(o - e.y) * a > Math.abs(i - e.x) * l) {
      let t = r.y < e.y ? e.y - l - o : o - l - e.y;
      s = (d * t) / c;
      const i = {
        x: r.x < e.x ? r.x + s : r.x - d + s,
        y: r.y < e.y ? r.y + c - t : r.y - c + t,
      };
      return (
        0 === s && ((i.x = e.x), (i.y = e.y)),
        0 === d && (i.x = e.x),
        0 === c && (i.y = e.y),
        h.R.debug(`abc89 top/bottom calc, Q ${c}, q ${t}, R ${d}, r ${s}`, i),
        i
      );
    }
    {
      s = r.x < e.x ? e.x - a - i : i - a - e.x;
      let t = (c * s) / d,
        o = r.x < e.x ? r.x + d - s : r.x - d + s,
        n = r.y < e.y ? r.y + t : r.y - t;
      return (
        h.R.debug(`sides calc abc89, Q ${c}, q ${t}, R ${d}, r ${s}`, {
          _x: o,
          _y: n,
        }),
        0 === s && ((o = e.x), (n = e.y)),
        0 === d && (o = e.x),
        0 === c && (n = e.y),
        { x: o, y: n }
      );
    }
  }, "intersection"),
  K = (0, c.K)((t, e) => {
    h.R.warn("abc88 cutPathAtIntersect", t, e);
    let r = [],
      i = t[0],
      o = !1;
    return (
      t.forEach((t) => {
        if ((h.R.info("abc88 checking point", t, e), D(e, t) || o))
          h.R.warn("abc88 outside", t, i), (i = t), o || r.push(t);
        else {
          const n = I(e, i, t);
          h.R.debug("abc88 inside", t, i, n),
            h.R.debug("abc88 intersection", n, e);
          let a = !1;
          r.forEach((t) => {
            a = a || (t.x === n.x && t.y === n.y);
          }),
            r.some((t) => t.x === n.x && t.y === n.y)
              ? h.R.warn("abc88 no intersect", n, r)
              : r.push(n),
            (o = !0);
        }
      }),
      h.R.debug("returning points", r),
      r
    );
  }, "cutPathAtIntersect");
function q(t) {
  const e = [],
    r = [];
  for (let i = 1; i < t.length - 1; i++) {
    const o = t[i - 1],
      n = t[i],
      a = t[i + 1];
    ((o.x === n.x &&
      n.y === a.y &&
      Math.abs(n.x - a.x) > 5 &&
      Math.abs(n.y - o.y) > 5) ||
      (o.y === n.y &&
        n.x === a.x &&
        Math.abs(n.x - o.x) > 5 &&
        Math.abs(n.y - a.y) > 5)) &&
      (e.push(n), r.push(i));
  }
  return { cornerPoints: e, cornerPointPositions: r };
}
(0, c.K)(q, "extractCornerPoints");
var P = (0, c.K)(function (t, e, r) {
    const i = e.x - t.x,
      o = e.y - t.y,
      n = r / Math.sqrt(i * i + o * o);
    return { x: e.x - n * i, y: e.y - n * o };
  }, "findAdjacentPoint"),
  R = (0, c.K)(function (t) {
    const { cornerPointPositions: e } = q(t),
      r = [];
    for (let i = 0; i < t.length; i++)
      if (e.includes(i)) {
        const e = t[i - 1],
          o = t[i + 1],
          n = t[i],
          a = P(e, n, 5),
          s = P(o, n, 5),
          l = s.x - a.x,
          c = s.y - a.y;
        r.push(a);
        const d = 2 * Math.sqrt(2);
        let u = { x: n.x, y: n.y };
        if (Math.abs(o.x - e.x) > 10 && Math.abs(o.y - e.y) >= 10) {
          h.R.debug(
            "Corner point fixing",
            Math.abs(o.x - e.x),
            Math.abs(o.y - e.y),
          );
          const t = 5;
          u =
            n.x === a.x
              ? {
                  x: l < 0 ? a.x - t + d : a.x + t - d,
                  y: c < 0 ? a.y - d : a.y + d,
                }
              : {
                  x: l < 0 ? a.x - d : a.x + d,
                  y: c < 0 ? a.y - t + d : a.y + t - d,
                };
        } else
          h.R.debug(
            "Corner point skipping fixing",
            Math.abs(o.x - e.x),
            Math.abs(o.y - e.y),
          );
        r.push(u, s);
      } else r.push(t[i]);
    return r;
  }, "fixCorners"),
  z = (0, c.K)((t, e, r) => {
    const i = t - e - r,
      o = Math.floor(i / 4),
      n = Number.isFinite(o) ? Math.max(0, o) : 0;
    return `0 ${e} ${Array(n).fill("2 2").join(" ")} ${r}`;
  }, "generateDashArray"),
  N = (0, c.K)(function (t, e, r, i, o, a, c, p = !1, g = void 0) {
    if (!c)
      throw new Error(
        `insertEdge: missing diagramId for edge "${e.id}" — edge IDs require a diagram prefix for uniqueness`,
      );
    const { handDrawnSeed: y, layout: m } = (0, l.D7)(),
      b = g ?? m;
    let k = e.points,
      w = !1;
    const T = o;
    var B = a;
    const v = [];
    for (const t in e.cssCompiledStyles)
      (0, n.KX)(t) || v.push(e.cssCompiledStyles[t]);
    if ("swimlane" === b) {
      if (!p && B.intersect && T.intersect && Array.isArray(k) && k.length >= 2)
        if (2 === k.length) k = [T.intersect(k[0]), B.intersect(k[1])];
        else {
          const t = k.slice(1, -1),
            e = t[0],
            r = t[t.length - 1],
            i = 0.5,
            o =
              Math.abs(k[k.length - 1].x - r.x) < i &&
              Math.abs(k[k.length - 1].y - r.y) < i,
            n = T.intersect(e),
            a = o ? r : B.intersect(r),
            s = Math.abs(a.x - r.x) < i && Math.abs(a.y - r.y) < i ? [] : [a];
          k = [
            ...(Math.abs(n.x - e.x) < i && Math.abs(n.y - e.y) < i ? [] : [n]),
            ...t,
            ...s,
          ];
        }
      k = O(e, k);
    } else
      B.intersect &&
        T.intersect &&
        !p &&
        ((k = k.slice(1, e.points.length - 1)),
        k.unshift(T.intersect(k[0])),
        k.push(B.intersect(k[k.length - 1])));
    const _ = btoa(JSON.stringify(k));
    e.toCluster &&
      (h.R.info("to cluster abc88", r.get(e.toCluster)),
      (k = K(e.points, r.get(e.toCluster).node)),
      (w = !0)),
      e.fromCluster &&
        (h.R.debug(
          "from cluster abc88",
          r.get(e.fromCluster),
          JSON.stringify(k, null, 2),
        ),
        (k = K(k.reverse(), r.get(e.fromCluster).node).reverse()),
        (w = !0));
    let A = k.filter((t) => !Number.isNaN(t.y));
    const F = S(e.curve);
    "rounded" !== F && (A = R(A));
    let L = d.lUB;
    switch (F) {
      case "linear":
      case "rounded":
        L = d.lUB;
        break;
      case "basis":
      default:
        L = d.qrM;
        break;
      case "cardinal":
        L = d.y8u;
        break;
      case "bumpX":
        L = d.Wi0;
        break;
      case "bumpY":
        L = d.PGM;
        break;
      case "catmullRom":
        L = d.oDi;
        break;
      case "monotoneX":
        L = d.nVG;
        break;
      case "monotoneY":
        L = d.uxU;
        break;
      case "natural":
        L = d.Xf2;
        break;
      case "step":
        L = d.GZz;
        break;
      case "stepAfter":
        L = d.UPb;
        break;
      case "stepBefore":
        L = d.dyv;
    }
    const { x: M, y: $ } = x(e),
      E = (0, d.n8j)().x(M).y($).curve(L);
    let D, I;
    switch (e.thickness) {
      case "normal":
      default:
        D = "edge-thickness-normal";
        break;
      case "thick":
        D = "edge-thickness-thick";
        break;
      case "invisible":
        D = "edge-thickness-invisible";
    }
    switch (e.pattern) {
      case "solid":
      default:
        D += " edge-pattern-solid";
        break;
      case "dotted":
        D += " edge-pattern-dotted";
        break;
      case "dashed":
        D += " edge-pattern-dashed";
    }
    let q = "rounded" === F ? W(H(A, e), 5) : E(A);
    const P = Array.isArray(e.style) ? e.style : [e.style];
    let N = P.find((t) => t?.startsWith("stroke:")),
      j = "";
    e.animate && (j = "edge-animation-fast"),
      e.animation && (j = "edge-animation-" + e.animation);
    let U = !1;
    if ("handDrawn" === e.look) {
      const r = u.A.svg(t);
      Object.assign([], A);
      const i = r.path(q, { roughness: 0.3, seed: y });
      (D += " transition"),
        (I = (0, d.Ltv)(i)
          .select("path")
          .attr("id", `${c}-${e.id}`)
          .attr(
            "class",
            " " + D + (e.classes ? " " + e.classes : "") + (j ? " " + j : ""),
          )
          .attr("style", P ? P.reduce((t, e) => t + ";" + e, "") : ""));
      let o = I.attr("d");
      I.attr("d", o), t.node().appendChild(I.node());
    } else {
      const r = v.join(";"),
        i = P ? P.reduce((t, e) => t + e + ";", "") : "",
        o =
          (r ? r + ";" + i + ";" : i) +
          ";" +
          (P ? P.reduce((t, e) => t + ";" + e, "") : "");
      (I = t
        .append("path")
        .attr("d", q)
        .attr("id", `${c}-${e.id}`)
        .attr(
          "class",
          " " + D + (e.classes ? " " + e.classes : "") + (j ? " " + j : ""),
        )
        .attr("style", o)),
        (N = o.match(/stroke:([^;]+)/)?.[1]),
        (U = !0 === e.animate || !!e.animation || r.includes("animation"));
      const n = I.node(),
        a = "function" == typeof n.getTotalLength ? n.getTotalLength() : 0,
        s = f[e.arrowTypeStart] || 0,
        l = f[e.arrowTypeEnd] || 0;
      if ("neo" === e.look && !U) {
        const t = `stroke-dasharray: ${"dotted" === e.pattern || "dashed" === e.pattern ? z(a, s, l) : `0 ${s} ${a - s - l} ${l}`}; stroke-dashoffset: 0;`;
        I.attr("style", t + I.attr("style"));
      }
    }
    I.attr("data-edge", !0),
      I.attr("data-et", "edge"),
      I.attr("data-id", e.id),
      I.attr("data-points", _),
      I.attr("data-look", (0, s.KL)(e.look)),
      e.showPoints &&
        A.forEach((e) => {
          t.append("circle")
            .style("stroke", "red")
            .style("fill", "red")
            .attr("r", 1)
            .attr("cx", e.x)
            .attr("cy", e.y);
        });
    let Y = "";
    ((0, l.D7)().flowchart.arrowMarkerAbsolute ||
      (0, l.D7)().state.arrowMarkerAbsolute) &&
      ((Y =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        window.location.search),
      (Y = Y.replace(/\(/g, "\\(").replace(/\)/g, "\\)"))),
      h.R.info("arrowTypeStart", e.arrowTypeStart),
      h.R.info("arrowTypeEnd", e.arrowTypeEnd),
      C(I, e, Y, c, i, !U && "neo" === e?.look, N);
    const G = k[Math.floor(k.length / 2)];
    s._K.isLabelCoordinateInPath(G, I.attr("d")) || (w = !0);
    let X = {};
    return w && (X.updatedPath = k), (X.originalPath = e.points), X;
  }, "insertEdge");
function W(t, e) {
  if (t.length < 2) return "";
  let r = "";
  const i = t.length,
    o = 1e-5;
  for (let n = 0; n < i; n++) {
    const a = t[n],
      s = t[n - 1],
      l = t[n + 1];
    if (0 === n) r += `M${a.x},${a.y}`;
    else if (n === i - 1) r += `L${a.x},${a.y}`;
    else {
      const t = a.x - s.x,
        i = a.y - s.y,
        n = l.x - a.x,
        h = l.y - a.y,
        c = Math.hypot(t, i),
        d = Math.hypot(n, h);
      if (c < o || d < o) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const u = t / c,
        p = i / c,
        g = n / d,
        f = h / d,
        y = u * g + p * f,
        m = Math.max(-1, Math.min(1, y)),
        x = Math.acos(m);
      if (x < o || Math.abs(Math.PI - x) < o) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const C = Math.min(e / Math.sin(x / 2), c / 2, d / 2),
        b = a.x - u * C,
        k = a.y - p * C,
        w = a.x + g * C,
        S = a.y + f * C;
      (r += `L${b},${k}`), (r += `Q${a.x},${a.y} ${w},${S}`);
    }
  }
  return r;
}
function j(t, e) {
  if (!t || !e) return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = e.x - t.x,
    i = e.y - t.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
function H(t, e) {
  const r = t.map((t) => ({ ...t }));
  if (t.length >= 2 && g[e.arrowTypeStart]) {
    const i = g[e.arrowTypeStart],
      o = t[0],
      n = t[1],
      { angle: a } = j(o, n),
      s = i * Math.cos(a),
      l = i * Math.sin(a);
    (r[0].x = o.x + s), (r[0].y = o.y + l);
  }
  const i = t.length;
  if (i >= 2 && g[e.arrowTypeEnd]) {
    const o = g[e.arrowTypeEnd],
      n = t[i - 1],
      a = t[i - 2],
      { angle: s } = j(a, n),
      l = o * Math.cos(s),
      h = o * Math.sin(s);
    (r[i - 1].x = n.x - l), (r[i - 1].y = n.y - h);
  }
  return r;
}
(0, c.K)(W, "generateRoundedPath"),
  (0, c.K)(j, "calculateDeltaAndAngle"),
  (0, c.K)(H, "applyMarkerOffsetsToPoints");
var U = (0, c.K)((t, e, r, i) => {
    e.forEach((e) => {
      ft[e](t, r, i);
    });
  }, "insertMarkers"),
  Y = (0, c.K)((t, e, r) => {
    h.R.trace("Making markers for ", r),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-extensionStart")
        .attr("class", "marker extension " + e)
        .attr("refX", 18)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M 1,7 L18,13 V 1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-extensionEnd")
        .attr("class", "marker extension " + e)
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M 1,1 V 13 L18,7 Z"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-extensionStart-margin")
        .attr("class", "marker extension " + e)
        .attr("refX", 18)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .attr("viewBox", "0 0 20 14")
        .append("polygon")
        .attr("points", "10,7 18,13 18,1")
        .style("stroke-width", 2)
        .style("stroke-dasharray", "0"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-extensionEnd-margin")
        .attr("class", "marker extension " + e)
        .attr("refX", 9)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .attr("viewBox", "0 0 20 14")
        .append("polygon")
        .attr("points", "10,1 10,13 18,7")
        .style("stroke-width", 2)
        .style("stroke-dasharray", "0");
  }, "extension"),
  G = (0, c.K)((t, e, r) => {
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-compositionStart")
      .attr("class", "marker composition " + e)
      .attr("refX", 18)
      .attr("refY", 7)
      .attr("markerWidth", 190)
      .attr("markerHeight", 240)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-compositionEnd")
        .attr("class", "marker composition " + e)
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-compositionStart-margin")
        .attr("class", "marker composition " + e)
        .attr("refX", 15)
        .attr("refY", 7)
        .attr("markerWidth", 190)
        .attr("markerHeight", 240)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .style("stroke-width", 0)
        .attr("viewBox", "0 0 15 15")
        .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-compositionEnd-margin")
        .attr("class", "marker composition " + e)
        .attr("refX", 3.5)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .style("stroke-width", 0)
        .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition"),
  X = (0, c.K)((t, e, r) => {
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-aggregationStart")
      .attr("class", "marker aggregation " + e)
      .attr("refX", 18)
      .attr("refY", 7)
      .attr("markerWidth", 190)
      .attr("markerHeight", 240)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-aggregationEnd")
        .attr("class", "marker aggregation " + e)
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-aggregationStart-margin")
        .attr("class", "marker aggregation " + e)
        .attr("refX", 15)
        .attr("refY", 7)
        .attr("markerWidth", 190)
        .attr("markerHeight", 240)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .style("stroke-width", 2)
        .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-aggregationEnd-margin")
        .attr("class", "marker aggregation " + e)
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .style("stroke-width", 2)
        .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation"),
  V = (0, c.K)((t, e, r) => {
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-dependencyStart")
      .attr("class", "marker dependency " + e)
      .attr("refX", 6)
      .attr("refY", 7)
      .attr("markerWidth", 190)
      .attr("markerHeight", 240)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-dependencyEnd")
        .attr("class", "marker dependency " + e)
        .attr("refX", 13)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-dependencyStart-margin")
        .attr("class", "marker dependency " + e)
        .attr("refX", 4)
        .attr("refY", 7)
        .attr("markerWidth", 190)
        .attr("markerHeight", 240)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .style("stroke-width", 0)
        .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-dependencyEnd-margin")
        .attr("class", "marker dependency " + e)
        .attr("refX", 16)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 28)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .style("stroke-width", 0)
        .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency"),
  Z = (0, c.K)((t, e, r) => {
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-lollipopStart")
      .attr("class", "marker lollipop " + e)
      .attr("refX", 13)
      .attr("refY", 7)
      .attr("markerWidth", 190)
      .attr("markerHeight", 240)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("circle")
      .attr("fill", "transparent")
      .attr("cx", 7)
      .attr("cy", 7)
      .attr("r", 6),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-lollipopEnd")
        .attr("class", "marker lollipop " + e)
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerWidth", 190)
        .attr("markerHeight", 240)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("circle")
        .attr("fill", "transparent")
        .attr("cx", 7)
        .attr("cy", 7)
        .attr("r", 6),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-lollipopStart-margin")
        .attr("class", "marker lollipop " + e)
        .attr("refX", 13)
        .attr("refY", 7)
        .attr("markerWidth", 190)
        .attr("markerHeight", 240)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("circle")
        .attr("fill", "transparent")
        .attr("cx", 7)
        .attr("cy", 7)
        .attr("r", 6)
        .attr("stroke-width", 2),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-lollipopEnd-margin")
        .attr("class", "marker lollipop " + e)
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerWidth", 190)
        .attr("markerHeight", 240)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("circle")
        .attr("fill", "transparent")
        .attr("cx", 7)
        .attr("cy", 7)
        .attr("r", 6)
        .attr("stroke-width", 2);
  }, "lollipop"),
  Q = (0, c.K)((t, e, r) => {
    t
      .append("marker")
      .attr("id", r + "_" + e + "-pointEnd")
      .attr("class", "marker " + e)
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 5)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("class", "arrowMarkerPath")
      .style("stroke-width", 1)
      .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-pointStart")
        .attr("class", "marker " + e)
        .attr("viewBox", "0 0 10 10")
        .attr("refX", 4.5)
        .attr("refY", 5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 8)
        .attr("markerHeight", 8)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 5 L 10 10 L 10 0 z")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 1)
        .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-pointEnd-margin")
        .attr("class", "marker " + e)
        .attr("viewBox", "0 0 11.5 14")
        .attr("refX", 11.5)
        .attr("refY", 7)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 10.5)
        .attr("markerHeight", 14)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 L 11.5 7 L 0 14 z")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 0)
        .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-pointStart-margin")
        .attr("class", "marker " + e)
        .attr("viewBox", "0 0 11.5 14")
        .attr("refX", 1)
        .attr("refY", 7)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 11.5)
        .attr("markerHeight", 14)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0,7 11.5,14 11.5,0")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 0)
        .style("stroke-dasharray", "1,0");
  }, "point"),
  J = (0, c.K)((t, e, r) => {
    t
      .append("marker")
      .attr("id", r + "_" + e + "-circleEnd")
      .attr("class", "marker " + e)
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 11)
      .attr("refY", 5)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 11)
      .attr("markerHeight", 11)
      .attr("orient", "auto")
      .append("circle")
      .attr("cx", "5")
      .attr("cy", "5")
      .attr("r", "5")
      .attr("class", "arrowMarkerPath")
      .style("stroke-width", 1)
      .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-circleStart")
        .attr("class", "marker " + e)
        .attr("viewBox", "0 0 10 10")
        .attr("refX", -1)
        .attr("refY", 5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 11)
        .attr("markerHeight", 11)
        .attr("orient", "auto")
        .append("circle")
        .attr("cx", "5")
        .attr("cy", "5")
        .attr("r", "5")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 1)
        .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-circleEnd-margin")
        .attr("class", "marker " + e)
        .attr("viewBox", "0 0 10 10")
        .attr("refY", 5)
        .attr("refX", 12.25)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 14)
        .attr("markerHeight", 14)
        .attr("orient", "auto")
        .append("circle")
        .attr("cx", "5")
        .attr("cy", "5")
        .attr("r", "5")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 0)
        .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-circleStart-margin")
        .attr("class", "marker " + e)
        .attr("viewBox", "0 0 10 10")
        .attr("refX", -2)
        .attr("refY", 5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 14)
        .attr("markerHeight", 14)
        .attr("orient", "auto")
        .append("circle")
        .attr("cx", "5")
        .attr("cy", "5")
        .attr("r", "5")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 0)
        .style("stroke-dasharray", "1,0");
  }, "circle"),
  tt = (0, c.K)((t, e, r) => {
    t
      .append("marker")
      .attr("id", r + "_" + e + "-crossEnd")
      .attr("class", "marker cross " + e)
      .attr("viewBox", "0 0 11 11")
      .attr("refX", 12)
      .attr("refY", 5.2)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 11)
      .attr("markerHeight", 11)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
      .attr("class", "arrowMarkerPath")
      .style("stroke-width", 2)
      .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-crossStart")
        .attr("class", "marker cross " + e)
        .attr("viewBox", "0 0 11 11")
        .attr("refX", -1)
        .attr("refY", 5.2)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 11)
        .attr("markerHeight", 11)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 2)
        .style("stroke-dasharray", "1,0"),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-crossEnd-margin")
        .attr("class", "marker cross " + e)
        .attr("viewBox", "0 0 15 15")
        .attr("refX", 17.7)
        .attr("refY", 7.5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 1,1 L 14,14 M 1,14 L 14,1")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 2.5),
      t
        .append("marker")
        .attr("id", r + "_" + e + "-crossStart-margin")
        .attr("class", "marker cross " + e)
        .attr("viewBox", "0 0 15 15")
        .attr("refX", -3.5)
        .attr("refY", 7.5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 12)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 1,1 L 14,14 M 1,14 L 14,1")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 2.5)
        .style("stroke-dasharray", "1,0");
  }, "cross"),
  et = (0, c.K)((t, e, r) => {
    t.append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-barbEnd")
      .attr("refX", 19)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 14)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "barb"),
  rt = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { transitionColor: n } = o;
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-barbEnd")
      .attr("refX", 19)
      .attr("refY", 7)
      .attr("markerWidth", 20)
      .attr("markerHeight", 14)
      .attr("markerUnits", "strokeWidth")
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-barbEnd-margin")
        .attr("refX", 17)
        .attr("refY", 7)
        .attr("markerWidth", 20)
        .attr("markerHeight", 14)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 19,7 L11,14 L13,7 L11,0 Z")
        .attr("fill", `${n}`);
  }, "barbNeo"),
  it = (0, c.K)((t, e, r) => {
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-onlyOneStart")
      .attr("class", "marker onlyOne " + e)
      .attr("refX", 0)
      .attr("refY", 9)
      .attr("markerWidth", 18)
      .attr("markerHeight", 18)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M9,0 L9,18 M15,0 L15,18"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-onlyOneEnd")
        .attr("class", "marker onlyOne " + e)
        .attr("refX", 18)
        .attr("refY", 9)
        .attr("markerWidth", 18)
        .attr("markerHeight", 18)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M3,0 L3,18 M9,0 L9,18");
  }, "only_one"),
  ot = (0, c.K)((t, e, r) => {
    const i = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-zeroOrOneStart")
      .attr("class", "marker zeroOrOne " + e)
      .attr("refX", 0)
      .attr("refY", 9)
      .attr("markerWidth", 30)
      .attr("markerHeight", 18)
      .attr("orient", "auto");
    i
      .append("circle")
      .attr("fill", "white")
      .attr("cx", 21)
      .attr("cy", 9)
      .attr("r", 6),
      i.append("path").attr("d", "M9,0 L9,18");
    const o = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-zeroOrOneEnd")
      .attr("class", "marker zeroOrOne " + e)
      .attr("refX", 30)
      .attr("refY", 9)
      .attr("markerWidth", 30)
      .attr("markerHeight", 18)
      .attr("orient", "auto");
    o
      .append("circle")
      .attr("fill", "white")
      .attr("cx", 9)
      .attr("cy", 9)
      .attr("r", 6),
      o.append("path").attr("d", "M21,0 L21,18");
  }, "zero_or_one"),
  nt = (0, c.K)((t, e, r) => {
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-oneOrMoreStart")
      .attr("class", "marker oneOrMore " + e)
      .attr("refX", 18)
      .attr("refY", 18)
      .attr("markerWidth", 45)
      .attr("markerHeight", 36)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-oneOrMoreEnd")
        .attr("class", "marker oneOrMore " + e)
        .attr("refX", 27)
        .attr("refY", 18)
        .attr("markerWidth", 45)
        .attr("markerHeight", 36)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
  }, "one_or_more"),
  at = (0, c.K)((t, e, r) => {
    const i = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-zeroOrMoreStart")
      .attr("class", "marker zeroOrMore " + e)
      .attr("refX", 18)
      .attr("refY", 18)
      .attr("markerWidth", 57)
      .attr("markerHeight", 36)
      .attr("orient", "auto");
    i
      .append("circle")
      .attr("fill", "white")
      .attr("cx", 48)
      .attr("cy", 18)
      .attr("r", 6),
      i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    const o = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-zeroOrMoreEnd")
      .attr("class", "marker zeroOrMore " + e)
      .attr("refX", 39)
      .attr("refY", 18)
      .attr("markerWidth", 57)
      .attr("markerHeight", 36)
      .attr("orient", "auto");
    o
      .append("circle")
      .attr("fill", "white")
      .attr("cx", 9)
      .attr("cy", 18)
      .attr("r", 6),
      o.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
  }, "zero_or_more"),
  st = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { strokeWidth: n } = o;
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-onlyOneStart")
      .attr("class", "marker onlyOne " + e)
      .attr("refX", 0)
      .attr("refY", 9)
      .attr("markerWidth", 18)
      .attr("markerHeight", 18)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M9,0 L9,18 M15,0 L15,18")
      .attr("stroke-width", `${n}`),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-onlyOneEnd")
        .attr("class", "marker onlyOne " + e)
        .attr("refX", 18)
        .attr("refY", 9)
        .attr("markerWidth", 18)
        .attr("markerHeight", 18)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("path")
        .attr("d", "M3,0 L3,18 M9,0 L9,18")
        .attr("stroke-width", `${n}`);
  }, "only_one_neo"),
  lt = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { strokeWidth: n, mainBkg: a } = o,
      s = t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-zeroOrOneStart")
        .attr("class", "marker zeroOrOne " + e)
        .attr("refX", 0)
        .attr("refY", 9)
        .attr("markerWidth", 30)
        .attr("markerHeight", 18)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse");
    s
      .append("circle")
      .attr("fill", a ?? "white")
      .attr("cx", 21)
      .attr("cy", 9)
      .attr("stroke-width", `${n}`)
      .attr("r", 6),
      s.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${n}`);
    const h = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-zeroOrOneEnd")
      .attr("class", "marker zeroOrOne " + e)
      .attr("refX", 30)
      .attr("refY", 9)
      .attr("markerWidth", 30)
      .attr("markerHeight", 18)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("orient", "auto");
    h
      .append("circle")
      .attr("fill", a ?? "white")
      .attr("cx", 9)
      .attr("cy", 9)
      .attr("stroke-width", `${n}`)
      .attr("r", 6),
      h.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${n}`);
  }, "zero_or_one_neo"),
  ht = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { strokeWidth: n } = o;
    t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-oneOrMoreStart")
      .attr("class", "marker oneOrMore " + e)
      .attr("refX", 18)
      .attr("refY", 18)
      .attr("markerWidth", 45)
      .attr("markerHeight", 36)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27")
      .attr("stroke-width", `${n}`),
      t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-oneOrMoreEnd")
        .attr("class", "marker oneOrMore " + e)
        .attr("refX", 27)
        .attr("refY", 18)
        .attr("markerWidth", 45)
        .attr("markerHeight", 36)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18")
        .attr("stroke-width", `${n}`);
  }, "one_or_more_neo"),
  ct = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { strokeWidth: n, mainBkg: a } = o,
      s = t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-zeroOrMoreStart")
        .attr("class", "marker zeroOrMore " + e)
        .attr("refX", 18)
        .attr("refY", 18)
        .attr("markerWidth", 57)
        .attr("markerHeight", 36)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("orient", "auto");
    s
      .append("circle")
      .attr("fill", a ?? "white")
      .attr("cx", 45.5)
      .attr("cy", 18)
      .attr("r", 6)
      .attr("stroke-width", `${n}`),
      s
        .append("path")
        .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18")
        .attr("stroke-width", `${n}`);
    const h = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-zeroOrMoreEnd")
      .attr("class", "marker zeroOrMore " + e)
      .attr("refX", 39)
      .attr("refY", 18)
      .attr("markerWidth", 57)
      .attr("markerHeight", 36)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse");
    h
      .append("circle")
      .attr("fill", a ?? "white")
      .attr("cx", 11)
      .attr("cy", 18)
      .attr("r", 6)
      .attr("stroke-width", `${n}`),
      h
        .append("path")
        .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18")
        .attr("stroke-width", `${n}`);
  }, "zero_or_more_neo"),
  dt = (0, c.K)((t, e, r) => {
    t.append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-requirement_arrowEnd")
      .attr("refX", 20)
      .attr("refY", 10)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20");
  }, "requirement_arrow"),
  ut = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { strokeWidth: n } = o;
    t.append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-requirement_arrowEnd")
      .attr("refX", 20)
      .attr("refY", 10)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .attr("stroke-width", `${n}`)
      .attr("viewBox", "0 0 25 20")
      .append("path")
      .attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20")
      .attr("stroke-linejoin", "miter");
  }, "requirement_arrow_neo"),
  pt = (0, c.K)((t, e, r) => {
    const i = t
      .append("defs")
      .append("marker")
      .attr("id", r + "_" + e + "-requirement_containsStart")
      .attr("refX", 0)
      .attr("refY", 10)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("orient", "auto")
      .append("g");
    i
      .append("circle")
      .attr("cx", 10)
      .attr("cy", 10)
      .attr("r", 9)
      .attr("fill", "none"),
      i
        .append("line")
        .attr("x1", 1)
        .attr("x2", 19)
        .attr("y1", 10)
        .attr("y2", 10),
      i
        .append("line")
        .attr("y1", 1)
        .attr("y2", 19)
        .attr("x1", 10)
        .attr("x2", 10);
  }, "requirement_contains"),
  gt = (0, c.K)((t, e, r) => {
    const i = (0, l.zj)(),
      { themeVariables: o } = i,
      { strokeWidth: n } = o,
      a = t
        .append("defs")
        .append("marker")
        .attr("id", r + "_" + e + "-requirement_containsStart")
        .attr("refX", 0)
        .attr("refY", 10)
        .attr("markerWidth", 20)
        .attr("markerHeight", 20)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("g");
    a
      .append("circle")
      .attr("cx", 10)
      .attr("cy", 10)
      .attr("r", 9)
      .attr("fill", "none"),
      a
        .append("line")
        .attr("x1", 1)
        .attr("x2", 19)
        .attr("y1", 10)
        .attr("y2", 10),
      a
        .append("line")
        .attr("y1", 1)
        .attr("y2", 19)
        .attr("x1", 10)
        .attr("x2", 10),
      a.selectAll("*").attr("stroke-width", `${n}`);
  }, "requirement_contains_neo"),
  ft = {
    extension: Y,
    composition: G,
    aggregation: X,
    dependency: V,
    lollipop: Z,
    point: Q,
    circle: J,
    cross: tt,
    barb: et,
    barbNeo: rt,
    hierarchy: (0, c.K)((t, e, r) => {
      t
        .append("marker")
        .attr("id", r + "_" + e + "-hierarchyEnd")
        .attr("class", "marker hierarchy " + e)
        .attr("viewBox", "0 0 12 10")
        .attr("refX", 10)
        .attr("refY", 5)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("markerWidth", 12)
        .attr("markerHeight", 10)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 L 6 5 L 0 10 M 4 0 L 10 5 L 4 10")
        .attr("class", "arrowMarkerPath")
        .style("stroke-width", 1)
        .style("stroke-dasharray", "1,0")
        .style("fill", "none"),
        t
          .append("marker")
          .attr("id", r + "_" + e + "-hierarchyStart")
          .attr("class", "marker hierarchy " + e)
          .attr("viewBox", "0 0 12 10")
          .attr("refX", 2)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 10)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 12 0 L 6 5 L 12 10 M 8 0 L 2 5 L 8 10")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0")
          .style("fill", "none");
    }, "hierarchy"),
    only_one: it,
    zero_or_one: ot,
    one_or_more: nt,
    zero_or_more: at,
    only_one_neo: st,
    zero_or_one_neo: lt,
    one_or_more_neo: ht,
    zero_or_more_neo: ct,
    requirement_arrow: dt,
    requirement_contains: pt,
    requirement_arrow_neo: ut,
    requirement_contains_neo: gt,
  },
  yt = U;
