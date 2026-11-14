// vendor/module-16450.js — webpack module 16450
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, {
  DA: () => q,
  FA: () => K,
  I7: () => I,
  Zk: () => m,
  aP: () => dr,
  lC: () => C,
  nM: () => B,
  nq: () => cr,
});
var i = r(83035 /* vendor/module-83035 */),
  o = r(27741 /* vendor/module-27741 */),
  n = r(50320 /* vendor/module-50320 */),
  a = r(33870 /* vendor/module-33870 */),
  s = r(72514 /* vendor/module-72514 */),
  l = r(8679 /* vendor/module-8679 */),
  h = r(27166 /* vendor/module-27166 */),
  c = r(79456 /* vendor/module-79456 */),
  d = r(27197 /* vendor/module-27197 */),
  u = r(7083 /* vendor/module-7083 */);
async function p(t) {
  const e = t.getElementsByTagName("img");
  if (!e || 0 === e.length) return;
  const r = !g(t);
  await Promise.all(
    [...e].map(
      (t) =>
        new Promise((e) => {
          function i() {
            if (
              ((t.style.display = "flex"),
              (t.style.flexDirection = "column"),
              r)
            ) {
              const e = (0, l.D7)().fontSize
                  ? (0, l.D7)().fontSize
                  : window.getComputedStyle(document.body).fontSize,
                r = 5,
                [i = l.UI.fontSize] = (0, s.I5)(e),
                o = i * r + "px";
              (t.style.minWidth = o), (t.style.maxWidth = o);
            } else t.style.width = "100%";
            e(t);
          }
          (0, c.K)(i, "setupImage"),
            setTimeout(() => {
              t.complete && i();
            }),
            t.addEventListener("error", i),
            t.addEventListener("load", i);
        }),
    ),
  );
}
function g(t) {
  return 3 === t.nodeType
    ? "" !== t.textContent?.trim()
    : 1 === t.nodeType &&
        "img" !== t.tagName.toLowerCase() &&
        [...t.childNodes].some(g);
}
(0, c.K)(p, "configureLabelImages"), (0, c.K)(g, "hasTextBesidesImages");
var f = (0, c.K)(async (t, e, r) => {
    const i = (0, l.D7)(),
      n = t
        .insert("g")
        .attr("class", r ?? "node default")
        .attr("id", e.domId || e.id),
      a = n
        .insert("g")
        .attr("class", "label")
        .attr("style", (0, s.KL)(e.labelStyle)),
      h = [
        {
          text: "string" == typeof e.label ? e.label : (e.label?.[0] ?? ""),
          cssClass: "c4-name",
        },
        { text: e.stereotype, cssClass: "c4-type" },
        ...(e.description ?? []).map((t) => ({
          text: t,
          cssClass: "c4-descr",
        })),
      ].filter((t) => t.text),
      c = e.width
        ? Math.max(e.width - 2 * (e.padding ?? 0), 32)
        : ((0, l.D7)().flowchart?.wrappingWidth ?? 200),
      u = (i.c4?.wrap ?? 1) ? c : Number.POSITIVE_INFINITY,
      p = await Promise.all(
        h.map(async (t) => {
          const r = a.append("g").attr("class", t.cssClass),
            n = await (0, o.GZ)(
              r,
              (0, l.jZ)((0, s.Sm)(t.text ?? ""), i),
              {
                useHtmlLabels: !1,
                markdown: !1,
                isNode: !0,
                width: u,
                style: e.labelStyle,
              },
              i,
            );
          return (
            (0, d.Ltv)(n)
              .selectAll("tspan.text-outer-tspan")
              .attr("text-anchor", "middle"),
            (0, d.Ltv)(n)
              .selectAll("tspan.text-inner-tspan")
              .attr("font-weight", null)
              .attr("font-style", null),
            { el: r, box: r.node().getBBox() }
          );
        }),
      ),
      g = Math.max(...p.map(({ box: t }) => t.width), 0);
    let f = 0;
    for (const { el: t, box: e } of p)
      t.attr(
        "transform",
        `translate(${g / 2 - e.x - e.width / 2}, ${f - e.y})`,
      ),
        (f += e.height + 3);
    const y = p.length > 0 ? f - 3 : 0;
    return (
      a.insert("rect", ":first-child"),
      a.attr("transform", `translate(${-g / 2}, ${-y / 2})`),
      {
        shapeSvg: n,
        bbox: a.node().getBBox(),
        halfPadding: (e.padding ?? 0) / 2,
        label: a,
      }
    );
  }, "c4LabelHelper"),
  y = (0, c.K)((t, e) => {
    const { x: r, y: i, width: o, height: n } = t;
    return o >= e
      ? t
      : "left" in t
        ? {
            x: r,
            y: i,
            width: e,
            height: n,
            top: i,
            left: r,
            bottom: i + n,
            right: r + e,
            toJSON: (0, c.K)(() => ({}), "toJSON"),
          }
        : { x: r - (e - o) / 2, y: i, width: e, height: n };
  }, "withMinWidth"),
  m = (0, c.K)(async (t, e, r, { ignoreMinWidth: i = !1 } = {}) => {
    if (void 0 !== e.stereotype) return f(t, e, r);
    let n;
    const a = e.useHtmlLabels || (0, l._3)((0, l.D7)()?.htmlLabels);
    n = r || "node default";
    const h = t
        .insert("g")
        .attr("class", n)
        .attr("id", e.domId || e.id),
      c = h
        .insert("g")
        .attr("class", "label")
        .attr("style", (0, s.KL)(e.labelStyle));
    let u;
    u =
      void 0 === e.label
        ? ""
        : "string" == typeof e.label
          ? e.label
          : e.label[0];
    const g = !!e.icon || !!e.img,
      m = "markdown" === e.labelType,
      x = !u || e.width || i ? 0 : (e.minWidth ?? 0),
      C = await (0, o.GZ)(
        c,
        (0, l.jZ)((0, s.Sm)(u), (0, l.D7)()),
        {
          useHtmlLabels: a,
          width:
            e.width || e.wrappingWidth || (0, l.D7)().flowchart?.wrappingWidth,
          minWidth: x,
          classes: m ? "markdown-node-label" : "",
          style: e.labelStyle,
          addSvgBackground: g,
          markdown: m,
        },
        (0, l.D7)(),
      ),
      b = (e?.padding ?? 0) / 2;
    let k;
    if (a) {
      const t = C.children[0],
        e = (0, d.Ltv)(C);
      await p(t),
        (k = await o.lT.measure(() => t.getBoundingClientRect())),
        (k = y(k, x)),
        e.attr("width", k.width),
        e.attr("height", k.height);
    } else (k = await o.lT.measure(() => C.getBBox())), (k = y(k, x));
    return (
      a
        ? c.attr(
            "transform",
            "translate(" + -k.width / 2 + ", " + -k.height / 2 + ")",
          )
        : c.attr("transform", "translate(0, " + -k.height / 2 + ")"),
      e.centerLabel &&
        c.attr(
          "transform",
          "translate(" + -k.width / 2 + ", " + -k.height / 2 + ")",
        ),
      c.insert("rect", ":first-child"),
      { shapeSvg: h, bbox: k, halfPadding: b, label: c }
    );
  }, "labelHelper"),
  x = (0, c.K)(async (t, e, r) => {
    const i = r.useHtmlLabels ?? (0, l.E)((0, l.D7)()),
      n = t
        .insert("g")
        .attr("class", "label")
        .attr("style", r.labelStyle || ""),
      a = await (0, o.GZ)(n, (0, l.jZ)((0, s.Sm)(e), (0, l.D7)()), {
        useHtmlLabels: i,
        width: r.width || (0, l.D7)()?.flowchart?.wrappingWidth,
        style: r.labelStyle,
        addSvgBackground: !!r.icon || !!r.img,
      }),
      h = r.padding / 2;
    let c;
    if ((0, l.E)((0, l.D7)())) {
      const t = a.children[0],
        e = (0, d.Ltv)(a);
      (c = await o.lT.measure(() => t.getBoundingClientRect())),
        e.attr("width", c.width),
        e.attr("height", c.height);
    } else c = await o.lT.measure(() => a.getBBox());
    return (
      i
        ? n.attr(
            "transform",
            "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")",
          )
        : n.attr("transform", "translate(0, " + -c.height / 2 + ")"),
      r.centerLabel &&
        n.attr(
          "transform",
          "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")",
        ),
      n.insert("rect", ":first-child"),
      { shapeSvg: t, bbox: c, halfPadding: h, label: n }
    );
  }, "insertLabel"),
  C = (0, c.K)((t, e, r) => {
    if (r) return (t.width = r.width), void (t.height = r.height);
    const i = e.node().getBBox();
    (t.width = i.width), (t.height = i.height);
  }, "updateNodeBounds"),
  b = (0, c.K)(
    (t, e) =>
      ("handDrawn" === t.look ? "rough-node" : "node") +
      " " +
      t.cssClasses +
      " " +
      (e || ""),
    "getNodeClasses",
  );
function k(t) {
  const e = t.map((t, e) => `${0 === e ? "M" : "L"}${t.x},${t.y}`);
  return e.push("Z"), e.join(" ");
}
function w(t, e, r, i, o, n) {
  const a = [],
    s = r - t,
    l = i - e,
    h = s / n,
    c = (2 * Math.PI) / h,
    d = e + l / 2;
  for (let e = 0; e <= 50; e++) {
    const r = t + (e / 50) * s,
      i = d + o * Math.sin(c * (r - t));
    a.push({ x: r, y: i });
  }
  return a;
}
function S(t, e, r, i, o, n) {
  const a = [],
    s = (o * Math.PI) / 180,
    l = ((n * Math.PI) / 180 - s) / (i - 1);
  for (let o = 0; o < i; o++) {
    const i = s + o * l,
      n = t + r * Math.cos(i),
      h = e + r * Math.sin(i);
    a.push({ x: -n, y: -h });
  }
  return a;
}
function T(t) {
  const e = Array.from(t.childNodes).filter((t) => "path" === t.tagName),
    r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
    i = e
      .map((t) => t.getAttribute("d"))
      .filter((t) => null !== t)
      .join(" ");
  r.setAttribute("d", i);
  const o = e.find((t) => "none" !== t.getAttribute("fill")),
    n = e.find((t) => "none" !== t.getAttribute("stroke")),
    a = (0, c.K)((t, e) => t?.getAttribute(e) ?? void 0, "getAttr");
  if (o) {
    const t = {
      fill: a(o, "fill"),
      "fill-opacity": a(o, "fill-opacity") ?? "1",
    };
    Object.entries(t).forEach(([t, e]) => {
      e && r.setAttribute(t, e);
    });
  }
  if (n) {
    const t = {
      stroke: a(n, "stroke"),
      "stroke-width": a(n, "stroke-width") ?? "1",
      "stroke-opacity": a(n, "stroke-opacity") ?? "1",
    };
    Object.entries(t).forEach(([t, e]) => {
      e && r.setAttribute(t, e);
    });
  }
  const s = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return s.appendChild(r), s;
}
(0, c.K)(k, "createPathFromPoints"),
  (0, c.K)(w, "generateFullSineWavePoints"),
  (0, c.K)(S, "generateCirclePoints"),
  (0, c.K)(T, "mergePaths");
var B = (0, c.K)((t, e) => {
  var r,
    i,
    o = t.x,
    n = t.y,
    a = e.x - o,
    s = e.y - n,
    l = t.width / 2,
    h = t.height / 2;
  return (
    Math.abs(s) * l > Math.abs(a) * h
      ? (s < 0 && (h = -h), (r = 0 === s ? 0 : (h * a) / s), (i = h))
      : (a < 0 && (l = -l), (r = l), (i = 0 === a ? 0 : (l * s) / a)),
    { x: o + r, y: n + i }
  );
}, "intersectRect");
function v(t, e) {
  return t.intersect(e);
}
(0, c.K)(v, "intersectNode");
var _ = v;
function A(t, e, r, i) {
  var o = t.x,
    n = t.y,
    a = o - i.x,
    s = n - i.y,
    l = Math.sqrt(e * e * s * s + r * r * a * a),
    h = Math.abs((e * r * a) / l);
  i.x < o && (h = -h);
  var c = Math.abs((e * r * s) / l);
  return i.y < n && (c = -c), { x: o + h, y: n + c };
}
(0, c.K)(A, "intersectEllipse");
var F = A;
function L(t, e, r) {
  return F(t, e, e, r);
}
(0, c.K)(L, "intersectCircle");
var M = L;
function $(t, e, r, i) {
  {
    const o = e.y - t.y,
      n = t.x - e.x,
      a = e.x * t.y - t.x * e.y,
      s = o * r.x + n * r.y + a,
      l = o * i.x + n * i.y + a,
      h = 1e-6;
    if (0 !== s && 0 !== l && E(s, l)) return;
    const c = i.y - r.y,
      d = r.x - i.x,
      u = i.x * r.y - r.x * i.y,
      p = c * t.x + d * t.y + u,
      g = c * e.x + d * e.y + u;
    if (Math.abs(p) < h && Math.abs(g) < h && E(p, g)) return;
    const f = o * d - c * n;
    if (0 === f) return;
    return { x: (n * u - d * a) / f, y: (c * a - o * u) / f };
  }
}
function E(t, e) {
  return t * e > 0;
}
(0, c.K)($, "intersectLine"), (0, c.K)(E, "sameSign");
var O = $;
function D(t, e, r) {
  let i = t.x,
    o = t.y,
    n = [],
    a = Number.POSITIVE_INFINITY,
    s = Number.POSITIVE_INFINITY;
  "function" == typeof e.forEach
    ? e.forEach(function (t) {
        (a = Math.min(a, t.x)), (s = Math.min(s, t.y));
      })
    : ((a = Math.min(a, e.x)), (s = Math.min(s, e.y)));
  let l = i - t.width / 2 - a,
    h = o - t.height / 2 - s;
  for (let i = 0; i < e.length; i++) {
    let o = e[i],
      a = e[i < e.length - 1 ? i + 1 : 0],
      s = O(t, r, { x: l + o.x, y: h + o.y }, { x: l + a.x, y: h + a.y });
    s && n.push(s);
  }
  return n.length
    ? (n.length > 1 &&
        n.sort(function (t, e) {
          let i = t.x - r.x,
            o = t.y - r.y,
            n = Math.sqrt(i * i + o * o),
            a = e.x - r.x,
            s = e.y - r.y,
            l = Math.sqrt(a * a + s * s);
          return n < l ? -1 : n === l ? 0 : 1;
        }),
      n[0])
    : t;
}
(0, c.K)(D, "intersectPolygon");
var I = { node: _, circle: M, ellipse: F, polygon: D, rect: B },
  K = (0, c.K)(
    (t, e, r, i, o) =>
      [
        "M",
        t + o,
        e,
        "H",
        t + r - o,
        "A",
        o,
        o,
        0,
        0,
        1,
        t + r,
        e + o,
        "V",
        e + i - o,
        "A",
        o,
        o,
        0,
        0,
        1,
        t + r - o,
        e + i,
        "H",
        t + o,
        "A",
        o,
        o,
        0,
        0,
        1,
        t,
        e + i - o,
        "V",
        e + o,
        "A",
        o,
        o,
        0,
        0,
        1,
        t + o,
        e,
        "Z",
      ].join(" "),
    "createRoundedRectPathD",
  ),
  q = (0, c.K)(async (t, e, r, i = !1, n = !1) => {
    let a = e || "";
    "object" == typeof a && (a = a[0]);
    const s = (0, l.D7)(),
      h = (0, l.E)(s);
    return await (0, o.GZ)(
      t,
      a,
      {
        style: r,
        isTitle: i,
        useHtmlLabels: h,
        markdown: !1,
        isNode: n,
        width: Number.POSITIVE_INFINITY,
      },
      s,
    );
  }, "createLabel");
function P(t, e) {
  const { labelStyles: r } = (0, i.GX)(e);
  e.labelStyle = r;
  const o = b(e);
  let n = o;
  o || (n = "anchor");
  const a = t
      .insert("g")
      .attr("class", n)
      .attr("id", e.domId || e.id),
    { cssStyles: l } = e,
    c = u.A.svg(a),
    d = (0, i.Fr)(e, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid",
    });
  "handDrawn" !== e.look && (d.roughness = 0);
  const p = c.circle(0, 0, 2, d),
    g = a.insert(() => p, ":first-child");
  return (
    g.attr("class", "anchor").attr("style", (0, s.KL)(l)),
    C(e, g),
    (e.intersect = function (t) {
      return h.R.info("Circle intersect", e, 1, t), I.circle(e, 1, t);
    }),
    a
  );
}
function R(t, e, r, i, o, n, a) {
  const s = (t + r) / 2,
    l = (e + i) / 2,
    h = Math.atan2(i - e, r - t),
    c = (r - t) / 2 / o,
    d = (i - e) / 2 / n,
    u = Math.sqrt(c ** 2 + d ** 2);
  if (u > 1)
    throw new Error(
      "The given radii are too small to create an arc between the points.",
    );
  const p = Math.sqrt(1 - u ** 2),
    g = s + p * n * Math.sin(h) * (a ? -1 : 1),
    f = l - p * o * Math.cos(h) * (a ? -1 : 1),
    y = Math.atan2((e - f) / n, (t - g) / o);
  let m = Math.atan2((i - f) / n, (r - g) / o) - y;
  a && m < 0 && (m += 2 * Math.PI), !a && m > 0 && (m -= 2 * Math.PI);
  const x = [];
  for (let t = 0; t < 20; t++) {
    const e = y + (t / 19) * m,
      r = g + o * Math.cos(e),
      i = f + n * Math.sin(e);
    x.push({ x: r, y: i });
  }
  return x;
}
function z(t, e, r) {
  const [i, o] = [e, r].sort((t, e) => e - t);
  return o * (1 - Math.sqrt(1 - (t / i / 2) ** 2));
}
async function N(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n,
    l = (0, c.K)((t) => t + s, "calcTotalHeight"),
    h = (0, c.K)((t) => {
      const e = t / 2;
      return [e / (2.5 + t / 50), e];
    }, "calcEllipseRadius"),
    { shapeSvg: d, bbox: p } = await m(t, e, b(e)),
    g = l(e?.height ? e?.height : p.height),
    [f, y] = h(g),
    x = z(g, f, y),
    w = (e?.width ? e?.width : p.width) + 2 * a + x - x,
    S = g,
    { cssStyles: T } = e,
    B = [
      { x: w / 2, y: -S / 2 },
      { x: -w / 2, y: -S / 2 },
      ...R(-w / 2, -S / 2, -w / 2, S / 2, f, y, !1),
      { x: w / 2, y: S / 2 },
      ...R(w / 2, S / 2, w / 2, -S / 2, f, y, !0),
    ],
    v = u.A.svg(d),
    _ = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((_.roughness = 0), (_.fillStyle = "solid"));
  const A = k(B),
    F = v.path(A, _),
    L = d.insert(() => F, ":first-child");
  return (
    L.attr("class", "basic label-container outer-path"),
    T && "handDrawn" !== e.look && L.selectAll("path").attr("style", T),
    o && "handDrawn" !== e.look && L.selectAll("path").attr("style", o),
    L.attr("transform", `translate(${f / 2}, 0)`),
    C(e, L),
    (e.intersect = function (t) {
      return I.polygon(e, B, t);
    }),
    d
  );
}
async function W(t, e, { config: { themeVariables: r } }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const { shapeSvg: a, bbox: s, label: l } = await m(t, e, b(e)),
    h = r?.nodeBorder ?? r?.lineColor ?? "currentColor",
    d = e.padding ?? 12,
    p = Math.max(s.width + 2 * d, e.width ?? 0, 80),
    g = Math.max(Math.min(0.08 * p, 12), 5),
    f = Math.max(s.height + 2 * d + g, e.height ?? 0),
    y = -f / 2 + g,
    x = f / 2,
    k = 0.72 * p,
    w = [
      `M${-p / 2},${y}`,
      `L${-k / 2},${x}`,
      `A${k / 2},${g} 0 0 0 ${k / 2},${x}`,
      `L${p / 2},${y}`,
      `A${p / 2},${g} 0 0 0 ${-p / 2},${y}`,
      "Z",
    ].join(" "),
    { cssStyles: S } = e,
    T = a.insert("g", ":first-child").attr("class", "basic label-container");
  if ("handDrawn" === e.look) {
    const t = u.A.svg(a).path(w, (0, i.Fr)(e, {}));
    T.node()?.appendChild(t), S && T.attr("style", S);
  } else T.append("path").attr("d", w).attr("style", n);
  T.append("ellipse")
    .attr("cx", 0)
    .attr("cy", y)
    .attr("rx", p / 2)
    .attr("ry", g)
    .attr("style", `fill:none;stroke:${h};stroke-width:1px`),
    C(e, T);
  const B = y + (x - y) / 2;
  l.attr(
    "transform",
    `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${B - s.height / 2 - (s.y - (s.top ?? 0))})`,
  );
  const v = (0, c.K)(
      (t, e, r) =>
        Array.from({ length: 13 }, (i, o) => {
          const n = Math.PI - (o * Math.PI) / 12;
          return { x: t * Math.cos(n), y: e + r * g * Math.sin(n) };
        }),
      "arc",
    ),
    _ = [...v(p / 2, y, -1), ...v(k / 2, x, 1).reverse()];
  return (
    (e.intersect = function (t) {
      return I.polygon(e, _, t);
    }),
    a
  );
}
function j(t) {
  const { themeVariables: e } = (0, l.D7)(),
    r = e.clusterBkg,
    i = e.clusterBorder;
  return "flow" === t
    ? {
        rx: 10,
        fill: "none",
        stroke: e.flowContainerStroke || e.secondaryBorderColor,
        strokeWidth: 0.75,
        cssClass: "flow-collapsed",
      }
    : { rx: 8, fill: r, stroke: i, cssClass: "collapsed-group" };
}
async function H(t, e) {
  const r = j(e.metadata?.containerType),
    { fill: o, stroke: n } = r,
    { nodeStyles: h } = (0, i.GX)(e),
    { shapeSvg: c, bbox: d } = await m(t, e, b(e)),
    { theme: p, themeVariables: g } = (0, l.D7)();
  (0, a.XE)(c, e.colorIndex, p, g.borderColorArray);
  const f = e.padding ?? 8,
    y = d.height,
    x = Math.max(d.width + 2 * f, 80, e?.width ?? 0),
    k = Math.max(y + 8 + 20 + 2 * f, e?.height ?? 0),
    w = -x / 2,
    S = -k / 2,
    T = c.select(".label");
  let B;
  if (
    (T &&
      ((e.useHtmlLabels ?? (0, l.E)((0, l.D7)()))
        ? T.attr(
            "transform",
            `translate(${-d.width / 2}, ${-d.height / 2 - 14})`,
          )
        : T.attr("transform", `translate(0, ${-d.height / 2 - 14})`)),
    "handDrawn" === e.look)
  ) {
    const t = u.A.svg(c),
      a = (0, i.Fr)(e, {
        fill: o,
        stroke: n,
        ...(void 0 === r.strokeWidth ? {} : { strokeWidth: r.strokeWidth }),
        ...("none" === o ? { fillWeight: 0 } : { fillStyle: "solid" }),
      }),
      l = t.path(K(w, S, x, k, r.rx), a);
    (B = c.insert(() => l, ":first-child")),
      B.attr("class", "basic label-container " + r.cssClass).attr(
        "style",
        (0, s.KL)(e.cssStyles),
      );
  } else
    (B = c.insert("rect", ":first-child")),
      B.attr("class", "basic label-container " + r.cssClass)
        .attr("style", h)
        .attr("rx", r.rx)
        .attr("ry", r.rx)
        .attr("x", w)
        .attr("y", S)
        .attr("width", x)
        .attr("height", k)
        .attr("fill", o)
        .attr("stroke", n),
      void 0 !== r.strokeWidth && B.attr("stroke-width", r.strokeWidth + "px");
  const v = S + f + y + 8;
  c.append("line")
    .attr("class", "collapsed-separator")
    .attr("x1", w + 8)
    .attr("y1", v)
    .attr("x2", w + x - 8)
    .attr("y2", v)
    .attr("stroke", n)
    .attr("stroke-dasharray", "3, 3");
  const _ = v + 10;
  for (let t = -1; t <= 1; t++)
    c.append("circle")
      .attr("class", "collapsed-indicator")
      .attr("cx", 10 * t)
      .attr("cy", _)
      .attr("r", 2.5)
      .attr("fill", n);
  return (
    C(e, B),
    (e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    }),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    c
  );
}
function U(t, e, r, i) {
  return t
    .insert("polygon", ":first-child")
    .attr(
      "points",
      i
        .map(function (t) {
          return t.x + "," + t.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr("transform", "translate(" + -e / 2 + "," + r / 2 + ")");
}
(0, c.K)(P, "anchor"),
  (0, c.K)(R, "generateArcPoints"),
  (0, c.K)(z, "calculateArcSagitta"),
  (0, c.K)(N, "bowTieRect"),
  (0, c.K)(W, "bucket"),
  (0, c.K)(j, "getCollapsedStyle"),
  (0, c.K)(H, "collapsedGroup"),
  (0, c.K)(U, "insertPolygonShape");
var Y = ["right", "left", "up", "down"],
  G = "point",
  X = (0, c.K)((t) => {
    const e = new Set();
    for (const r of t)
      switch (r) {
        case "x":
          e.add("right"), e.add("left");
          break;
        case "y":
          e.add("up"), e.add("down");
          break;
        default:
          e.add(r);
      }
    return e;
  }, "expandAndDeduplicateDirections"),
  V = (0, c.K)(
    (t) => Y.filter((e) => t.has(e)).join("|") || G,
    "getDirectionKey",
  ),
  Z = {
    "right|left|up|down": (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: 0, y: 0 },
        { x: e, y: 0 },
        { x: i / 2, y: 2 * r },
        { x: i - e, y: 0 },
        { x: i, y: 0 },
        { x: i, y: -t / 3 },
        { x: i + 2 * r, y: -t / 2 },
        { x: i, y: (-2 * t) / 3 },
        { x: i, y: -t },
        { x: i - e, y: -t },
        { x: i / 2, y: -t - 2 * r },
        { x: e, y: -t },
        { x: 0, y: -t },
        { x: 0, y: (-2 * t) / 3 },
        { x: -2 * r, y: -t / 2 },
        { x: 0, y: -t / 3 },
      ],
      "right|left|up|down",
    ),
    "right|left|up": (0, c.K)(
      ({ height: t, midpoint: e, width: r }) => [
        { x: e, y: 0 },
        { x: r - e, y: 0 },
        { x: r, y: -t / 2 },
        { x: r - e, y: -t },
        { x: e, y: -t },
        { x: 0, y: -t / 2 },
      ],
      "right|left|up",
    ),
    "right|left|down": (0, c.K)(
      ({ height: t, midpoint: e, width: r }) => [
        { x: 0, y: 0 },
        { x: e, y: -t },
        { x: r - e, y: -t },
        { x: r, y: 0 },
      ],
      "right|left|down",
    ),
    "right|up|down": (0, c.K)(
      ({ height: t, midpoint: e, width: r }) => [
        { x: 0, y: 0 },
        { x: r, y: -e },
        { x: r, y: -t + e },
        { x: 0, y: -t },
      ],
      "right|up|down",
    ),
    "left|up|down": (0, c.K)(
      ({ height: t, midpoint: e, width: r }) => [
        { x: r, y: 0 },
        { x: 0, y: -e },
        { x: 0, y: -t + e },
        { x: r, y: -t },
      ],
      "left|up|down",
    ),
    "right|left": (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: e, y: 0 },
        { x: e, y: -r },
        { x: i - e, y: -r },
        { x: i - e, y: 0 },
        { x: i, y: -t / 2 },
        { x: i - e, y: -t },
        { x: i - e, y: -t + r },
        { x: e, y: -t + r },
        { x: e, y: -t },
        { x: 0, y: -t / 2 },
      ],
      "right|left",
    ),
    "up|down": (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: i / 2, y: 0 },
        { x: 0, y: -r },
        { x: e, y: -r },
        { x: e, y: -t + r },
        { x: 0, y: -t + r },
        { x: i / 2, y: -t },
        { x: i, y: -t + r },
        { x: i - e, y: -t + r },
        { x: i - e, y: -r },
        { x: i, y: -r },
      ],
      "up|down",
    ),
    "right|up": (0, c.K)(
      ({ height: t, midpoint: e, width: r }) => [
        { x: 0, y: 0 },
        { x: r, y: -e },
        { x: 0, y: -t },
      ],
      "right|up",
    ),
    "right|down": (0, c.K)(
      ({ height: t, width: e }) => [
        { x: 0, y: 0 },
        { x: e, y: 0 },
        { x: 0, y: -t },
      ],
      "right|down",
    ),
    "left|up": (0, c.K)(
      ({ height: t, midpoint: e, width: r }) => [
        { x: r, y: 0 },
        { x: 0, y: -e },
        { x: r, y: -t },
      ],
      "left|up",
    ),
    "left|down": (0, c.K)(
      ({ height: t, width: e }) => [
        { x: e, y: 0 },
        { x: 0, y: 0 },
        { x: e, y: -t },
      ],
      "left|down",
    ),
    right: (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: e, y: -r },
        { x: e, y: -r },
        { x: i - e, y: -r },
        { x: i - e, y: 0 },
        { x: i, y: -t / 2 },
        { x: i - e, y: -t },
        { x: i - e, y: -t + r },
        { x: e, y: -t + r },
        { x: e, y: -t + r },
      ],
      "right",
    ),
    left: (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: e, y: 0 },
        { x: e, y: -r },
        { x: i - e, y: -r },
        { x: i - e, y: -t + r },
        { x: e, y: -t + r },
        { x: e, y: -t },
        { x: 0, y: -t / 2 },
      ],
      "left",
    ),
    up: (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: e, y: -r },
        { x: e, y: -t + r },
        { x: 0, y: -t + r },
        { x: i / 2, y: -t },
        { x: i, y: -t + r },
        { x: i - e, y: -t + r },
        { x: i - e, y: -r },
      ],
      "up",
    ),
    down: (0, c.K)(
      ({ height: t, midpoint: e, padding: r, width: i }) => [
        { x: i / 2, y: 0 },
        { x: 0, y: -r },
        { x: e, y: -r },
        { x: e, y: -t + r },
        { x: i - e, y: -t + r },
        { x: i - e, y: -r },
        { x: i, y: -r },
      ],
      "down",
    ),
    [G]: () => [{ x: 0, y: 0 }],
  },
  Q = (0, c.K)((t, e, r, i) => {
    const o = X(t),
      n = (r.padding ?? 0) / 2,
      a = e.height + 4 * n,
      s = a / 2,
      l = i ?? e.width + 2 * s + 2 * n,
      h = V(o);
    return (Z[h] ?? Z[G])({
      height: a,
      midpoint: s,
      padding: n,
      width: l,
    });
  }, "getArrowPoints");
async function J(t, e) {
  const r = e,
    { shapeSvg: i, bbox: o } = await m(t, r, b(r)),
    n = r.padding ?? 0,
    a = o.height + 2 * n,
    s = a / 2,
    l = o.width + 2 * s + n,
    h = r.width ?? 0,
    c = r.positioned && (r.widthInColumns ?? 1) > 1 && h > l ? h : l,
    d = Q(r.directions ?? [], o, r, c),
    u = U(i, c, a, d);
  return (
    u.attr("style", r.style ?? null),
    C(r, u),
    (r.intersect = function (t) {
      return I.polygon(r, d, t);
    }),
    i
  );
}
async function tt(t, e, { config: { themeVariables: r } }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const { shapeSvg: a, bbox: s, label: l } = await m(t, e, b(e)),
    h = r?.nodeBorder ?? r?.lineColor ?? "currentColor",
    c = e.padding ?? 12,
    d = Math.max(s.width + 2 * c, e.width ?? 0, 90),
    p = Math.max(s.height + 2 * c + 18, e.height ?? 0),
    g = -p / 2,
    { cssStyles: f } = e,
    y = a.insert("g", ":first-child").attr("class", "basic label-container");
  if ("handDrawn" === e.look) {
    const t = u.A.svg(a).path(K(-d / 2, g, d, p, 12), (0, i.Fr)(e, {}));
    y.node()?.appendChild(t), f && y.attr("style", f);
  } else
    y.append("rect")
      .attr("x", -d / 2)
      .attr("y", g)
      .attr("width", d)
      .attr("height", p)
      .attr("rx", 12)
      .attr("ry", 12)
      .attr("style", n);
  y.append("line")
    .attr("x1", -d / 2)
    .attr("y1", g + 18)
    .attr("x2", d / 2)
    .attr("y2", g + 18)
    .attr("style", `stroke:${h};stroke-width:1px`);
  for (let t = 0; t < 3; t++)
    y.append("circle")
      .attr("cx", -d / 2 + 12 + 9 * t)
      .attr("cy", g + 9)
      .attr("r", 2.5)
      .attr("style", `fill:${h};stroke:none`);
  y
    .append("rect")
    .attr("class", "browser-address-bar")
    .attr("x", -d / 2 + 44)
    .attr("y", g + 4)
    .attr("width", Math.max(d - 56, 10))
    .attr("height", 10)
    .attr("rx", 3)
    .attr("ry", 3)
    .attr("style", `fill:none;stroke:${h};stroke-width:1px;opacity:0.6`),
    C(e, y);
  const x = g + 18 + (p - 18) / 2;
  return (
    l.attr(
      "transform",
      `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${x - s.height / 2 - (s.y - (s.top ?? 0))})`,
    ),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    a
  );
}
async function et(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 28 : n,
    s = "neo" === e.look ? 24 : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = (e?.width ?? h.width) + ("neo" === e.look ? 2 * a : a + 12),
    d = (e?.height ?? h.height) + ("neo" === e.look ? 2 * s : s),
    p = -d,
    g = [
      { x: 12, y: p },
      { x: c, y: p },
      { x: c, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: p + 12 },
      { x: 12, y: p },
    ];
  let f;
  const { cssStyles: y } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(l),
      r = (0, i.Fr)(e, {}),
      o = k(g),
      n = t.path(o, r);
    (f = l
      .insert(() => n, ":first-child")
      .attr("transform", `translate(${-c / 2}, ${d / 2})`)),
      y && f.attr("style", y);
  } else f = U(l, c, d, g);
  return (
    o && f.attr("style", o),
    C(e, f),
    (e.intersect = function (t) {
      return I.polygon(e, g, t);
    }),
    l
  );
}
function rt(t, e) {
  const { nodeStyles: r } = (0, i.GX)(e);
  e.label = "";
  const o = t
      .insert("g")
      .attr("class", b(e))
      .attr("id", e.domId ?? e.id),
    { cssStyles: n } = e,
    a = Math.max(28, e.width ?? 0),
    s = [
      { x: 0, y: a / 2 },
      { x: a / 2, y: 0 },
      { x: 0, y: -a / 2 },
      { x: -a / 2, y: 0 },
    ],
    l = u.A.svg(o),
    h = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((h.roughness = 0), (h.fillStyle = "solid"));
  const c = k(s),
    d = l.path(c, h),
    p = o.insert(() => d, ":first-child");
  return (
    n && "handDrawn" !== e.look && p.selectAll("path").attr("style", n),
    r && "handDrawn" !== e.look && p.selectAll("path").attr("style", r),
    (e.width = 28),
    (e.height = 28),
    (e.intersect = function (t) {
      return I.polygon(e, s, t);
    }),
    o
  );
}
async function it(t, e, r) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const {
      shapeSvg: a,
      bbox: l,
      halfPadding: c,
    } = await m(t, e, b(e), { ignoreMinWidth: !0 }),
    d = r?.padding ?? c,
    p = Math.sqrt(l.width ** 2 + l.height ** 2) / 2,
    g = "neo" === e.look ? p + 16 : p + d;
  let f;
  const { cssStyles: y } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(a),
      r = (0, i.Fr)(e, {}),
      o = t.circle(0, 0, 2 * g, r);
    (f = a.insert(() => o, ":first-child")),
      f.attr("class", "basic label-container").attr("style", (0, s.KL)(y));
  } else
    f = a
      .insert("circle", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", n)
      .attr("r", g)
      .attr("cx", 0)
      .attr("cy", 0);
  return (
    C(e, f),
    (e.calcIntersect = function (t, e) {
      const r = t.width / 2;
      return I.circle(t, r, e);
    }),
    (e.intersect = function (t) {
      return h.R.info("Circle intersect", e, g, t), I.circle(e, g, t);
    }),
    a
  );
}
async function ot(t, e) {
  const r = e,
    i = ["node", r.cssClasses, r.class].filter(Boolean).join(" "),
    { shapeSvg: o, bbox: n, halfPadding: a } = await m(t, r, i),
    s = o.insert("rect", ":first-child"),
    l = r.padding ?? 0,
    h = r.positioned ? (r.width ?? 0) : n.width + l,
    c = r.positioned ? (r.height ?? 0) : n.height + l,
    d = r.positioned ? -h / 2 : -n.width / 2 - a,
    u = r.positioned ? -c / 2 : -n.height / 2 - a;
  return (
    s
      .attr("class", "basic cluster composite label-container")
      .attr("style", r.style ?? null)
      .attr("rx", r.rx ?? null)
      .attr("ry", r.ry ?? null)
      .attr("x", d)
      .attr("y", u)
      .attr("width", h)
      .attr("height", c),
    C(r, s),
    (r.intersect = function (t) {
      return I.rect(r, t);
    }),
    o
  );
}
async function nt(t, e, { config: { themeVariables: r } }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const { shapeSvg: a, bbox: s, label: l } = await m(t, e, b(e)),
    h = r?.nodeBorder ?? r?.lineColor ?? "currentColor",
    c = e.padding ?? 12,
    d = Math.max(s.width + 2 * c, e.width ?? 0, 90),
    p = Math.max(s.height + 2 * c + 20, e.height ?? 0),
    g = -p / 2,
    { cssStyles: f } = e,
    y = a.insert("g", ":first-child").attr("class", "basic label-container");
  if ("handDrawn" === e.look) {
    const t = u.A.svg(a).path(K(-d / 2, g, d, p, 12), (0, i.Fr)(e, {}));
    y.node()?.appendChild(t), f && y.attr("style", f);
  } else
    y.append("rect")
      .attr("x", -d / 2)
      .attr("y", g)
      .attr("width", d)
      .attr("height", p)
      .attr("rx", 12)
      .attr("ry", 12)
      .attr("style", n);
  y
    .append("text")
    .attr("x", -d / 2 + 12)
    .attr("y", g + 16)
    .attr("class", "console-glyph")
    .attr(
      "style",
      `font-family:monospace;font-weight:bold;font-size:14px;fill:${h}`,
    )
    .text(">_"),
    C(e, y);
  const x = g + 20 + (p - 20) / 2;
  return (
    l.attr(
      "transform",
      `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${x - s.height / 2 - (s.y - (s.top ?? 0))})`,
    ),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    a
  );
}
function at(t) {
  const e = Math.cos(Math.PI / 4),
    r = Math.sin(Math.PI / 4),
    i = 2 * t;
  return `M ${(-i / 2) * e},${(i / 2) * r} L ${(i / 2) * e},${(-i / 2) * r}\n                   M ${(i / 2) * e},${(i / 2) * r} L ${(-i / 2) * e},${(-i / 2) * r}`;
}
function st(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  (e.labelStyle = r), (e.label = "");
  const n = t
      .insert("g")
      .attr("class", b(e))
      .attr("id", e.domId ?? e.id),
    a = Math.max(30, e?.width ?? 0),
    { cssStyles: s } = e,
    l = u.A.svg(n),
    c = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((c.roughness = 0), (c.fillStyle = "solid"));
  const d = l.circle(0, 0, 2 * a, c),
    p = at(a),
    g = l.path(p, c),
    f = n.insert(() => d, ":first-child");
  return (
    f.insert(() => g),
    f.attr("class", "outer-path"),
    s && "handDrawn" !== e.look && f.selectAll("path").attr("style", s),
    o && "handDrawn" !== e.look && f.selectAll("path").attr("style", o),
    C(e, f),
    (e.intersect = function (t) {
      return (
        h.R.info("crossedCircle intersect", e, { radius: a, point: t }),
        I.circle(e, a, t)
      );
    }),
    n
  );
}
function lt(t, e, r, i = 100, o = 0, n = 180) {
  const a = [],
    s = (o * Math.PI) / 180,
    l = ((n * Math.PI) / 180 - s) / (i - 1);
  for (let o = 0; o < i; o++) {
    const i = s + o * l,
      n = t + r * Math.cos(i),
      h = e + r * Math.sin(i);
    a.push({ x: -n, y: -h });
  }
  return a;
}
async function ht(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = "neo" === e.look ? 18 : (e.padding ?? 0),
    h = "neo" === e.look ? 12 : (e.padding ?? 0),
    c = a.width + l,
    d = a.height + h,
    p = Math.max(5, 0.1 * d),
    { cssStyles: g } = e,
    f = [
      ...lt(c / 2, -d / 2, p, 30, -90, 0),
      { x: -c / 2 - p, y: p },
      ...lt(c / 2 + 2 * p, -p, p, 20, -180, -270),
      ...lt(c / 2 + 2 * p, p, p, 20, -90, -180),
      { x: -c / 2 - p, y: -d / 2 },
      ...lt(c / 2, d / 2, p, 20, 0, 90),
    ],
    y = [
      { x: c / 2, y: -d / 2 - p },
      { x: -c / 2, y: -d / 2 - p },
      ...lt(c / 2, -d / 2, p, 20, -90, 0),
      { x: -c / 2 - p, y: -p },
      ...lt(c / 2 + 0.1 * c, -p, p, 20, -180, -270),
      ...lt(c / 2 + 0.1 * c, p, p, 20, -90, -180),
      { x: -c / 2 - p, y: d / 2 },
      ...lt(c / 2, d / 2, p, 20, 0, 90),
      { x: -c / 2, y: d / 2 + p },
      { x: c / 2, y: d / 2 + p },
    ],
    x = u.A.svg(n),
    w = (0, i.Fr)(e, { fill: "none" });
  "handDrawn" !== e.look && ((w.roughness = 0), (w.fillStyle = "solid"));
  const S = k(f).replace("Z", ""),
    T = x.path(S, w),
    B = k(y),
    v = x.path(B, { ...w }),
    _ = n.insert("g", ":first-child");
  return (
    _.insert(() => v, ":first-child").attr("stroke-opacity", 0),
    _.insert(() => T, ":first-child"),
    _.attr("class", "text"),
    g && "handDrawn" !== e.look && _.selectAll("path").attr("style", g),
    o && "handDrawn" !== e.look && _.selectAll("path").attr("style", o),
    _.attr("transform", `translate(${p}, 0)`),
    s.attr(
      "transform",
      `translate(${-c / 2 + p - (a.x - (a.left ?? 0))},${-d / 2 + (e.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`,
    ),
    C(e, _),
    (e.intersect = function (t) {
      return I.polygon(e, y, t);
    }),
    n
  );
}
function ct(t, e, r, i = 100, o = 0, n = 180) {
  const a = [],
    s = (o * Math.PI) / 180,
    l = ((n * Math.PI) / 180 - s) / (i - 1);
  for (let o = 0; o < i; o++) {
    const i = s + o * l,
      n = t + r * Math.cos(i),
      h = e + r * Math.sin(i);
    a.push({ x: n, y: h });
  }
  return a;
}
async function dt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = "neo" === e.look ? 18 : (e.padding ?? 0),
    h = "neo" === e.look ? 12 : (e.padding ?? 0),
    c = a.width + ("neo" === e.look ? 2 * l : l),
    d = a.height + ("neo" === e.look ? 2 * h : h),
    p = Math.max(5, 0.1 * d),
    { cssStyles: g } = e,
    f = [
      ...ct(c / 2, -d / 2, p, 20, -90, 0),
      { x: c / 2 + p, y: -p },
      ...ct(c / 2 + 2 * p, -p, p, 20, -180, -270),
      ...ct(c / 2 + 2 * p, p, p, 20, -90, -180),
      { x: c / 2 + p, y: d / 2 },
      ...ct(c / 2, d / 2, p, 20, 0, 90),
    ],
    y = [
      { x: -c / 2, y: -d / 2 - p },
      { x: c / 2, y: -d / 2 - p },
      ...ct(c / 2, -d / 2, p, 20, -90, 0),
      { x: c / 2 + p, y: -p },
      ...ct(c / 2 + 2 * p, -p, p, 20, -180, -270),
      ...ct(c / 2 + 2 * p, p, p, 20, -90, -180),
      { x: c / 2 + p, y: d / 2 },
      ...ct(c / 2, d / 2, p, 20, 0, 90),
      { x: c / 2, y: d / 2 + p },
      { x: -c / 2, y: d / 2 + p },
    ],
    x = u.A.svg(n),
    w = (0, i.Fr)(e, { fill: "none" });
  "handDrawn" !== e.look && ((w.roughness = 0), (w.fillStyle = "solid"));
  const S = k(f).replace("Z", ""),
    T = x.path(S, w),
    B = k(y),
    v = x.path(B, { ...w }),
    _ = n.insert("g", ":first-child");
  return (
    _.insert(() => v, ":first-child").attr("stroke-opacity", 0),
    _.insert(() => T, ":first-child"),
    _.attr("class", "text"),
    g && "handDrawn" !== e.look && _.selectAll("path").attr("style", g),
    o && "handDrawn" !== e.look && _.selectAll("path").attr("style", o),
    _.attr("transform", `translate(${-p}, 0)`),
    s.attr(
      "transform",
      `translate(${-c / 2 + (e.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-d / 2 + (e.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`,
    ),
    C(e, _),
    (e.intersect = function (t) {
      return I.polygon(e, y, t);
    }),
    n
  );
}
function ut(t, e, r, i = 100, o = 0, n = 180) {
  const a = [],
    s = (o * Math.PI) / 180,
    l = ((n * Math.PI) / 180 - s) / (i - 1);
  for (let o = 0; o < i; o++) {
    const i = s + o * l,
      n = t + r * Math.cos(i),
      h = e + r * Math.sin(i);
    a.push({ x: -n, y: -h });
  }
  return a;
}
async function pt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = "neo" === e.look ? 18 : (e.padding ?? 0),
    h = "neo" === e.look ? 12 : (e.padding ?? 0),
    c = a.width + ("neo" === e.look ? 2 * l : l),
    d = a.height + ("neo" === e.look ? 2 * h : h),
    p = Math.max(5, 0.1 * d),
    { cssStyles: g } = e,
    f = [
      ...ut(c / 2, -d / 2, p, 30, -90, 0),
      { x: -c / 2 - p, y: p },
      ...ut(c / 2 + 2 * p, -p, p, 20, -180, -270),
      ...ut(c / 2 + 2 * p, p, p, 20, -90, -180),
      { x: -c / 2 - p, y: -d / 2 },
      ...ut(c / 2, d / 2, p, 20, 0, 90),
    ],
    y = [
      ...ut(-c / 2 + p + p / 2, -d / 2, p, 20, -90, -180),
      { x: c / 2 - p / 2, y: p },
      ...ut(-c / 2 - p / 2, -p, p, 20, 0, 90),
      ...ut(-c / 2 - p / 2, p, p, 20, -90, 0),
      { x: c / 2 - p / 2, y: -p },
      ...ut(-c / 2 + p + p / 2, d / 2, p, 30, -180, -270),
    ],
    x = [
      { x: c / 2, y: -d / 2 - p },
      { x: -c / 2, y: -d / 2 - p },
      ...ut(c / 2, -d / 2, p, 20, -90, 0),
      { x: -c / 2 - p, y: -p },
      ...ut(c / 2 + 2 * p, -p, p, 20, -180, -270),
      ...ut(c / 2 + 2 * p, p, p, 20, -90, -180),
      { x: -c / 2 - p, y: d / 2 },
      ...ut(c / 2, d / 2, p, 20, 0, 90),
      { x: -c / 2, y: d / 2 + p },
      { x: c / 2 - p - p / 2, y: d / 2 + p },
      ...ut(-c / 2 + p + p / 2, -d / 2, p, 20, -90, -180),
      { x: c / 2 - p / 2, y: p },
      ...ut(-c / 2 - p / 2, -p, p, 20, 0, 90),
      ...ut(-c / 2 - p / 2, p, p, 20, -90, 0),
      { x: c / 2 - p / 2, y: -p },
      ...ut(-c / 2 + p + p / 2, d / 2, p, 30, -180, -270),
    ],
    w = u.A.svg(n),
    S = (0, i.Fr)(e, { fill: "none" });
  "handDrawn" !== e.look && ((S.roughness = 0), (S.fillStyle = "solid"));
  const T = k(f).replace("Z", ""),
    B = w.path(T, S),
    v = k(y).replace("Z", ""),
    _ = w.path(v, S),
    A = k(x),
    F = w.path(A, { ...S }),
    L = n.insert("g", ":first-child");
  return (
    L.insert(() => F, ":first-child").attr("stroke-opacity", 0),
    L.insert(() => B, ":first-child"),
    L.insert(() => _, ":first-child"),
    L.attr("class", "text"),
    g && "handDrawn" !== e.look && L.selectAll("path").attr("style", g),
    o && "handDrawn" !== e.look && L.selectAll("path").attr("style", o),
    L.attr("transform", `translate(${p - p / 4}, 0)`),
    s.attr(
      "transform",
      `translate(${-c / 2 + (e.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-d / 2 + (e.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`,
    ),
    C(e, L),
    (e.intersect = function (t) {
      return I.polygon(e, x, t);
    }),
    n
  );
}
async function gt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = Math.max(5, h.height + 2 * s, e?.height ?? 0),
    d = c / 2,
    p = d - Math.sqrt(Math.max(0, d ** 2 - (h.height / 2) ** 2)),
    g = Math.max(c / 4, p),
    f = Math.max(
      20,
      h.width + 2 * a + 2 * g,
      1.25 * (h.width + 2 * a),
      e?.width ?? 0,
    ),
    { cssStyles: y } = e,
    x = u.A.svg(l),
    w = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((w.roughness = 0), (w.fillStyle = "solid"));
  const T = f - d,
    B = c / 4,
    v = [
      { x: T, y: 0 },
      { x: B, y: 0 },
      { x: 0, y: c / 2 },
      { x: B, y: c },
      { x: T, y: c },
      ...S(-T, -c / 2, d, 50, 270, 90),
    ],
    _ = k(v),
    A = x.path(_, w),
    F = l.insert(() => A, ":first-child");
  return (
    F.attr("class", "basic label-container outer-path"),
    y && "handDrawn" !== e.look && F.selectChildren("path").attr("style", y),
    o && "handDrawn" !== e.look && F.selectChildren("path").attr("style", o),
    F.attr("transform", `translate(${-f / 2}, ${-c / 2})`),
    C(e, F),
    (e.intersect = function (t) {
      return I.polygon(e, v, t);
    }),
    l
  );
}
async function ft(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = e.padding ?? 20,
    h = Math.max(a.width + 2 * l, e.width ?? 0, 100),
    c = Math.min(Math.max(0.23 * h, 16), 56),
    d = 0.27 * c,
    p = Math.max(a.height + 2 * l, e.height ? e.height - (2 * c - d) : 0),
    g = Math.min(0.177 * h, 0.45 * p),
    f = p + 2 * c - d,
    y = -f / 2,
    x = y + 2 * c - d,
    k = n.insert("g", ":first-child").attr("class", "basic label-container"),
    { cssStyles: w } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(n),
      r = (0, i.Fr)(e, {}),
      o = t.path(K(-h / 2, x, h, p, g), r),
      a = t.circle(0, y + c, 2 * c, r);
    k.insert(() => a, ":first-child"),
      k.insert(() => o, ":first-child"),
      w && k.attr("style", w);
  } else
    k
      .append("rect")
      .attr("x", -h / 2)
      .attr("y", x)
      .attr("width", h)
      .attr("height", p)
      .attr("rx", g)
      .attr("ry", g)
      .attr("style", o),
      k
        .append("circle")
        .attr("cx", 0)
        .attr("cy", y + c)
        .attr("r", c)
        .attr("style", o);
  C(e, k);
  const T = x + p / 2;
  s.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${T - a.height / 2 - (a.y - (a.top ?? 0))})`,
  );
  const B = y + c,
    v = (180 * Math.asin(Math.min(1, (x - B) / c))) / Math.PI,
    _ = [
      ...S(0, -B, c, 24, 180 + v, -v),
      ...S(-(-h / 2 + g), -(x + g), g, 12, 90, 0),
      ...S(-(-h / 2 + g), -(f / 2 - g), g, 12, 360, 270),
      ...S(-(h / 2 - g), -(f / 2 - g), g, 12, 270, 180),
      ...S(-(h / 2 - g), -(x + g), g, 12, 180, 90),
    ];
  return (
    (e.intersect = function (t) {
      return I.polygon(e, _, t);
    }),
    n
  );
}
(0, c.K)(J, "block_arrow"),
  (0, c.K)(tt, "browser"),
  (0, c.K)(et, "card"),
  (0, c.K)(rt, "choice"),
  (0, c.K)(it, "circle"),
  (0, c.K)(ot, "composite"),
  (0, c.K)(nt, "consoleWindow"),
  (0, c.K)(at, "createLine"),
  (0, c.K)(st, "crossedCircle"),
  (0, c.K)(lt, "generateCirclePoints"),
  (0, c.K)(ht, "curlyBraceLeft"),
  (0, c.K)(ct, "generateCirclePoints"),
  (0, c.K)(dt, "curlyBraceRight"),
  (0, c.K)(ut, "generateCirclePoints"),
  (0, c.K)(pt, "curlyBraces"),
  (0, c.K)(gt, "curvedTrapezoid"),
  (0, c.K)(ft, "person");
var yt = (0, c.K)(
    (t, e, r, i, o, n) =>
      [
        `M${t},${e + n}`,
        `a${o},${n} 0,0,0 ${r},0`,
        `a${o},${n} 0,0,0 ${-r},0`,
        `l0,${i}`,
        `a${o},${n} 0,0,0 ${r},0`,
        "l0," + -i,
      ].join(" "),
    "createCylinderPathD",
  ),
  mt = (0, c.K)(
    (t, e, r, i, o, n) =>
      [
        `M${t},${e + n}`,
        `M${t + r},${e + n}`,
        `a${o},${n} 0,0,0 ${-r},0`,
        `l0,${i}`,
        `a${o},${n} 0,0,0 ${r},0`,
        "l0," + -i,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  xt = (0, c.K)(
    (t, e, r, i, o, n) =>
      [`M${t - r / 2},${-i / 2}`, `a${o},${n} 0,0,0 ${r},0`].join(" "),
    "createInnerCylinderPathD",
  );
async function Ct(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 24 : n,
    l = "neo" === e.look ? 24 : n,
    h = e.width ?? 0;
  if (
    (e.width && ((e.width = e.width - l), e.width < 8 && (e.width = 8)),
    e.height)
  ) {
    const t = h / 2 / (2.5 + h / 50);
    (e.height = e.height - a - 3 * t), e.height < 8 && (e.height = 8);
  }
  const { shapeSvg: c, bbox: d, label: p } = await m(t, e, b(e)),
    g = Math.max(e.width ?? 0, d.width) + l,
    f = g / 2,
    y = f / (2.5 + g / 50),
    x = Math.max(e.height ?? 0, d.height) + a + y;
  let k;
  const { cssStyles: w } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(c),
      r = mt(0, 0, g, x, f, y),
      o = xt(0, y, g, x, f, y),
      n = (0, i.Fr)(e, {}),
      a = t.path(r, n),
      s = t.path(o, (0, i.Fr)(e, { fill: "none" }));
    (k = c.insert(() => s, ":first-child")),
      (k = c.insert(() => a, ":first-child")),
      k.attr("class", "basic label-container"),
      w && k.attr("style", w);
  } else {
    const t = yt(0, 0, g, x, f, y);
    k = c
      .insert("path", ":first-child")
      .attr("d", t)
      .attr("class", "basic label-container outer-path")
      .attr("style", (0, s.KL)(w))
      .attr("style", o);
  }
  return (
    k.attr("label-offset-y", y),
    k.attr("transform", `translate(${-g / 2}, ${-(x / 2 + y)})`),
    C(e, k),
    p.attr(
      "transform",
      `translate(${-d.width / 2 - (d.x - (d.left ?? 0))}, ${-d.height / 2 + (e.padding ?? 0) / 1.5 - (d.y - (d.top ?? 0))})`,
    ),
    (e.intersect = function (t) {
      const r = I.rect(e, t),
        i = r.x - (e.x ?? 0);
      if (
        0 != f &&
        (Math.abs(i) < (e.width ?? 0) / 2 ||
          (Math.abs(i) == (e.width ?? 0) / 2 &&
            Math.abs(r.y - (e.y ?? 0)) > (e.height ?? 0) / 2 - y))
      ) {
        let o = y * y * (1 - (i * i) / (f * f));
        o > 0 && (o = Math.sqrt(o)),
          (o = y - o),
          t.y - (e.y ?? 0) > 0 && (o = -o),
          (r.y += o);
      }
      return r;
    }),
    c
  );
}
async function bt(t, e, r) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const { shapeSvg: a, bbox: l } = await m(t, e, b(e)),
    h = Math.max(l.width + 2 * r.labelPaddingX, e?.width || 0),
    c = Math.max(l.height + 2 * r.labelPaddingY, e?.height || 0),
    d = -h / 2,
    p = -c / 2;
  let g,
    { rx: f, ry: y } = e;
  const { cssStyles: x } = e;
  if ((r?.rx && r.ry && ((f = r.rx), (y = r.ry)), "handDrawn" === e.look)) {
    const t = u.A.svg(a),
      r = (0, i.Fr)(e, {}),
      o =
        f || y ? t.path(K(d, p, h, c, f || 0), r) : t.rectangle(d, p, h, c, r);
    (g = a.insert(() => o, ":first-child")),
      g.attr("class", "basic label-container").attr("style", (0, s.KL)(x));
  } else
    (g = a.insert("rect", ":first-child")),
      g
        .attr("class", "basic label-container")
        .attr("style", n)
        .attr("rx", (0, s.KL)(f))
        .attr("ry", (0, s.KL)(y))
        .attr("x", d)
        .attr("y", p)
        .attr("width", h)
        .attr("height", c);
  return (
    C(e, g, "handDrawn" === e.look ? void 0 : { width: h, height: c }),
    (e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    }),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    a
  );
}
async function kt(t, e) {
  const {
      cssClasses: r,
      labelPaddingX: o,
      labelPaddingY: n,
      padding: a,
      width: s,
      height: l,
    } = e,
    h = {
      rx: 0,
      ry: 0,
      classes: r ?? "",
      labelPaddingX: o ?? 2 * (a ?? 0),
      labelPaddingY: n ?? a ?? 0,
    },
    c = await bt(t, e, h);
  if ("handDrawn" === e.look) {
    const t = u.A.svg(c),
      r = (0, i.Fr)(e, {}),
      o = c.select(".basic.label-container > path:nth-child(2)"),
      n = o.node();
    if (!n) return c;
    let a = null;
    return n instanceof SVGGraphicsElement
      ? ((a = n.getBBox()),
        c.insert(
          () => t.line(a.x, a.y, a.x + a.width, a.y, r),
          ".basic.label-container g.label",
        ),
        c.insert(
          () => t.line(a.x, a.y + a.height, a.x + a.width, a.y + a.height, r),
          ".basic.label-container g.label",
        ),
        o.remove(),
        c)
      : c;
  }
  const d = c.select(".basic.label-container"),
    p = (Number(d.attr("width")) || s) ?? 0,
    g = (Number(d.attr("height")) || l) ?? 0;
  return p > 0 && g > 0 && d.attr("stroke-dasharray", `${p} ${g}`), c;
}
async function wt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = "neo" === e.look ? 16 : (e.padding ?? 0),
    a = "neo" === e.look ? 16 : (e.padding ?? 0),
    { shapeSvg: s, bbox: l, label: h } = await m(t, e, b(e)),
    c = l.width + n,
    d = l.height + a,
    p = 0.2 * d,
    g = -c / 2,
    f = -d / 2 - p / 2,
    { cssStyles: y } = e,
    x = u.A.svg(s),
    k = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((k.roughness = 0), (k.fillStyle = "solid"));
  const w = [
      { x: g, y: f + p },
      { x: -g, y: f + p },
      { x: -g, y: -f },
      { x: g, y: -f },
      { x: g, y: f },
      { x: -g, y: f },
      { x: -g, y: f + p },
    ],
    S = x.polygon(
      w.map((t) => [t.x, t.y]),
      k,
    ),
    T = s.insert(() => S, ":first-child");
  return (
    T.attr("class", "basic label-container outer-path"),
    y && "handDrawn" !== e.look && T.selectAll("path").attr("style", y),
    o && "handDrawn" !== e.look && T.selectAll("path").attr("style", o),
    h.attr(
      "transform",
      `translate(${g + (e.padding ?? 0) / 2 - (l.x - (l.left ?? 0))}, ${f + p + (e.padding ?? 0) / 2 - (l.y - (l.top ?? 0))})`,
    ),
    C(e, T),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    s
  );
}
async function St(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e),
    n = "neo" === e.look ? 12 : 5;
  e.labelStyle = r;
  const a = e.padding ?? 0,
    l = "neo" === e.look ? 16 : a,
    { shapeSvg: c, bbox: d } = await m(t, e, b(e), {
      ignoreMinWidth: !0,
    }),
    p = Math.sqrt(d.width ** 2 + d.height ** 2) / 2,
    g = (e?.width ? e?.width / 2 : p) + (l ?? 0),
    f = g + n;
  let y;
  const { cssStyles: x } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(c),
      r = (0, i.Fr)(e, { roughness: 0.2, strokeWidth: 2.5 }),
      o = (0, i.Fr)(e, { roughness: 0.2, strokeWidth: 1.5 }),
      n = t.circle(0, 0, 2 * f, r),
      a = t.circle(0, 0, 2 * g, o);
    (y = c.insert("g", ":first-child")),
      y.attr("class", (0, s.KL)(e.cssClasses)).attr("style", (0, s.KL)(x)),
      y.node()?.appendChild(n),
      y.node()?.appendChild(a);
  } else {
    y = c.insert("g", ":first-child");
    const t = y.insert("circle", ":first-child"),
      e = y.insert("circle");
    y.attr("class", "basic label-container").attr("style", o),
      t
        .attr("class", "outer-circle")
        .attr("style", o)
        .attr("r", f)
        .attr("cx", 0)
        .attr("cy", 0),
      e
        .attr("class", "inner-circle")
        .attr("style", o)
        .attr("r", g)
        .attr("cx", 0)
        .attr("cy", 0);
  }
  return (
    C(e, y),
    (e.intersect = function (t) {
      return h.R.info("DoubleCircle intersect", e, f, t), I.circle(e, f, t);
    }),
    c
  );
}
async function Tt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: s, halfPadding: h } = await m(t, e, b(e)),
    { theme: c, themeVariables: d } = (0, l.D7)();
  (0, a.XE)(n, e.colorIndex, c, d.borderColorArray);
  const p = h ?? 10,
    g = s.width / 2 + 2 * p,
    f = s.height / 2 + 2 * p;
  let y;
  const { cssStyles: x } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(n),
      r = (0, i.Fr)(e, {}),
      o = t.ellipse(0, 0, 2 * g, 2 * f, r);
    (y = n.insert(() => o, ":first-child")),
      y.attr("class", "basic label-container"),
      x && y.attr("style", x);
  } else
    y = n
      .insert("ellipse", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", o)
      .attr("rx", g)
      .attr("ry", f)
      .attr("cx", 0)
      .attr("cy", 0);
  return (
    (e.width = 2 * g),
    (e.height = 2 * f),
    C(e, y),
    (e.calcIntersect = function (t, e) {
      const r = t.width / 2,
        i = t.height / 2;
      return I.ellipse(t, r, i, e);
    }),
    (e.intersect = function (t) {
      return I.ellipse(e, g, f, t);
    }),
    n
  );
}
function Bt(t, e, { config: { themeVariables: r } }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  (e.label = ""), (e.labelStyle = o);
  const a = t
      .insert("g")
      .attr("class", b(e))
      .attr("id", e.domId ?? e.id),
    { cssStyles: s } = e,
    l = u.A.svg(a),
    { nodeBorder: c } = r,
    d = (0, i.Fr)(e, { fillStyle: "solid" });
  "handDrawn" !== e.look && (d.roughness = 0);
  const p = l.circle(0, 0, 14, d),
    g = a.insert(() => p, ":first-child");
  return (
    g.selectAll("path").attr("style", `fill: ${c} !important;`),
    s &&
      s.length > 0 &&
      "handDrawn" !== e.look &&
      g.selectAll("path").attr("style", s),
    n && "handDrawn" !== e.look && g.selectAll("path").attr("style", n),
    C(e, g),
    (e.intersect = function (t) {
      return (
        h.R.info("filledCircle intersect", e, { radius: 7, point: t }),
        I.circle(e, 7, t)
      );
    }),
    a
  );
}
async function vt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 2 * n : n;
  (e.width || e.height) &&
    ((e.height = e?.height ?? 0),
    e.height < 10 && (e.height = 10),
    (e.width = (e?.width ?? 0) - a - a / 2),
    e.width < 10 && (e.width = 10));
  const { shapeSvg: s, bbox: l, label: c } = await m(t, e, b(e)),
    d = (e?.width ? e?.width : l.width) + (a ?? 0),
    p = e?.height ? e?.height : d + l.height,
    g = [
      { x: 0, y: -p },
      { x: p, y: -p },
      { x: p / 2, y: 0 },
    ],
    { cssStyles: f } = e,
    y = u.A.svg(s),
    x = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((x.roughness = 0), (x.fillStyle = "solid"));
  const w = k(g),
    S = y.path(w, x),
    T = s
      .insert(() => S, ":first-child")
      .attr("transform", `translate(${-p / 2}, ${p / 2})`)
      .attr("class", "outer-path");
  return (
    f && "handDrawn" !== e.look && T.selectChildren("path").attr("style", f),
    o && "handDrawn" !== e.look && T.selectChildren("path").attr("style", o),
    (e.width = d),
    (e.height = p),
    C(e, T),
    c.attr(
      "transform",
      `translate(${-l.width / 2 - (l.x - (l.left ?? 0))}, ${-p / 2 + (e.padding ?? 0) / 2 + (l.y - (l.top ?? 0))})`,
    ),
    (e.intersect = function (t) {
      return h.R.info("Triangle intersect", e, g, t), I.polygon(e, g, t);
    }),
    s
  );
}
async function _t(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = e.padding ?? 12,
    h = Math.max(a.width + 2 * l, e.width ?? 0, 90),
    c = a.height + 2 * l,
    d = Math.max(Math.min(0.16 * c, 14), 8),
    p = Math.max(c + d, e.height ?? 0),
    g = p - d,
    f = Math.max(0.38 * h, 28),
    y = -p / 2,
    x = [
      { x: -h / 2, y },
      { x: -h / 2 + f, y },
      { x: -h / 2 + f, y: y + d },
      { x: h / 2, y: y + d },
      { x: h / 2, y: p / 2 },
      { x: -h / 2, y: p / 2 },
    ],
    k = [
      `M${x[0].x},${x[0].y}`,
      ...x.slice(1).map((t) => `L${t.x},${t.y}`),
      "Z",
    ].join(" "),
    { cssStyles: w } = e;
  let S;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(n).path(k, (0, i.Fr)(e, {}));
    (S = n
      .insert(() => t, ":first-child")
      .attr("class", "basic label-container")),
      w && S.attr("style", w);
  } else
    S = n
      .insert("path", ":first-child")
      .attr("d", k)
      .attr("class", "basic label-container")
      .attr("style", o);
  "handDrawn" === e.look ? C(e, S) : C(e, S, { width: h, height: p });
  const T = y + d + g / 2;
  return (
    s.attr(
      "transform",
      `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${T - a.height / 2 - (a.y - (a.top ?? 0))})`,
    ),
    (e.intersect = function (t) {
      return I.polygon(e, x, t);
    }),
    n
  );
}
function At(t, e, { dir: r, config: { state: o, themeVariables: n } }) {
  const { nodeStyles: a } = (0, i.GX)(e);
  e.label = "";
  const s = t
      .insert("g")
      .attr("class", b(e))
      .attr("id", e.domId ?? e.id),
    { cssStyles: l } = e;
  let h = Math.max(70, e?.width ?? 0),
    c = Math.max(10, e?.height ?? 0);
  ("LR" !== r && "RL" !== r) ||
    ((h = Math.max(10, e?.width ?? 0)), (c = Math.max(70, e?.height ?? 0)));
  const d = (-1 * h) / 2,
    p = (-1 * c) / 2,
    g = u.A.svg(s),
    f = (0, i.Fr)(e, { stroke: n.lineColor, fill: n.lineColor });
  "handDrawn" !== e.look && ((f.roughness = 0), (f.fillStyle = "solid"));
  const y = g.rectangle(d, p, h, c, f),
    m = s.insert(() => y, ":first-child");
  l && "handDrawn" !== e.look && m.selectAll("path").attr("style", l),
    a && "handDrawn" !== e.look && m.selectAll("path").attr("style", a),
    C(e, m);
  const x = o?.padding ?? 0;
  return (
    e.width && e.height && ((e.width += x / 2 || 0), (e.height += x / 2 || 0)),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    s
  );
}
async function Ft(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = "neo" === e.look ? 16 : (e.padding ?? 0),
    a = "neo" === e.look ? 12 : (e.padding ?? 0);
  (e.width || e.height) &&
    ((e.height = (e?.height ?? 0) - 2 * a),
    e.height < 10 && (e.height = 10),
    (e.width = (e?.width ?? 0) - 2 * n),
    e.width < 15 && (e.width = 15));
  const { shapeSvg: s, bbox: l } = await m(t, e, b(e)),
    c = (e?.height ? e?.height : Math.max(10, l.height)) + 2 * a,
    d = c / 2,
    p = d - Math.sqrt(Math.max(0, d ** 2 - (l.height / 2) ** 2)),
    g = (e?.width ? e?.width : Math.max(15, l.width) + 2 * p) + 2 * n,
    { cssStyles: f } = e,
    y = u.A.svg(s),
    x = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((x.roughness = 0), (x.fillStyle = "solid"));
  const w = [
      { x: -g / 2, y: -c / 2 },
      { x: g / 2 - d, y: -c / 2 },
      ...S(-g / 2 + d, 0, d, 50, 90, 270),
      { x: g / 2 - d, y: c / 2 },
      { x: -g / 2, y: c / 2 },
    ],
    T = k(w),
    B = y.path(T, x),
    v = s.insert(() => B, ":first-child");
  return (
    v.attr("class", "basic label-container outer-path"),
    f && "handDrawn" !== e.look && v.selectChildren("path").attr("style", f),
    o && "handDrawn" !== e.look && v.selectChildren("path").attr("style", o),
    C(e, v),
    (e.intersect = function (t) {
      return (
        h.R.info("Pill intersect", e, { radius: d, point: t }),
        I.polygon(e, w, t)
      );
    }),
    s
  );
}
(0, c.K)(Ct, "cylinder"),
  (0, c.K)(bt, "drawRect"),
  (0, c.K)(kt, "datastore"),
  (0, c.K)(wt, "dividedRectangle"),
  (0, c.K)(St, "doublecircle"),
  (0, c.K)(Tt, "usecaseEllipse"),
  (0, c.K)(Bt, "filledCircle"),
  (0, c.K)(vt, "flippedTriangle"),
  (0, c.K)(_t, "folder"),
  (0, c.K)(At, "forkJoin"),
  (0, c.K)(Ft, "halfRoundedRectangle");
var Lt = (0, c.K)(
  (t, e, r, i, o) =>
    [
      `M${t + o},${e}`,
      `L${t + r - o},${e}`,
      `L${t + r},${e - i / 2}`,
      `L${t + r - o},${e - i}`,
      `L${t + o},${e - i}`,
      `L${t},${e - i / 2}`,
      "Z",
    ].join(" "),
  "createHexagonPathD",
);
async function Mt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e),
    n = "neo" === e.look ? 3.5 : 4;
  e.labelStyle = r;
  const a = e.padding ?? 0,
    s = "neo" === e.look ? 70 : a,
    l = "neo" === e.look ? 32 : a;
  if (e.width || e.height) {
    const t = (e.height ?? 0) / n;
    (e.width = (e?.width ?? 0) - 2 * t - l), (e.height = (e.height ?? 0) - s);
  }
  const { shapeSvg: h, bbox: c } = await m(t, e, b(e)),
    d = (e?.height ? e?.height : c.height) + s,
    p = d / n,
    g = (e?.width ? e?.width : c.width) + 2 * p + l,
    f = [
      { x: p, y: 0 },
      { x: g - p, y: 0 },
      { x: g, y: -d / 2 },
      { x: g - p, y: -d },
      { x: p, y: -d },
      { x: 0, y: -d / 2 },
    ];
  let y;
  const { cssStyles: x } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(h),
      r = (0, i.Fr)(e, {}),
      o = Lt(0, 0, g, d, p),
      n = t.path(o, r);
    (y = h
      .insert(() => n, ":first-child")
      .attr("transform", `translate(${-g / 2}, ${d / 2})`)),
      x && y.attr("style", x);
  } else y = U(h, g, d, f);
  return (
    o && y.attr("style", o),
    (e.width = g),
    (e.height = d),
    C(e, y),
    (e.intersect = function (t) {
      return I.polygon(e, f, t);
    }),
    h
  );
}
async function $t(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  (e.label = ""), (e.labelStyle = r);
  const { shapeSvg: n } = await m(t, e, b(e)),
    a = Math.max(30, e?.width ?? 0),
    s = Math.max(30, e?.height ?? 0),
    { cssStyles: l } = e,
    c = u.A.svg(n),
    d = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((d.roughness = 0), (d.fillStyle = "solid"));
  const p = [
      { x: 0, y: 0 },
      { x: a, y: 0 },
      { x: 0, y: s },
      { x: a, y: s },
    ],
    g = k(p),
    f = c.path(g, d),
    y = n.insert(() => f, ":first-child");
  return (
    y.attr("class", "basic label-container outer-path"),
    l && "handDrawn" !== e.look && y.selectChildren("path").attr("style", l),
    o && "handDrawn" !== e.look && y.selectChildren("path").attr("style", o),
    y.attr("transform", `translate(${-a / 2}, ${-s / 2})`),
    C(e, y),
    (e.intersect = function (t) {
      return h.R.info("Pill intersect", e, { points: p }), I.polygon(e, p, t);
    }),
    n
  );
}
async function Et(t, e, { config: { themeVariables: r, flowchart: o } }) {
  const { labelStyles: a } = (0, i.GX)(e);
  e.labelStyle = a;
  const s = e.assetHeight ?? 48,
    l = e.assetWidth ?? 48,
    c = Math.max(s, l),
    d = o?.wrappingWidth;
  e.width = Math.max(c, d ?? 0);
  const {
      shapeSvg: p,
      bbox: g,
      label: f,
    } = await m(t, e, "icon-shape default"),
    y = "t" === e.pos,
    x = c,
    b = c,
    { nodeBorder: k } = r,
    { stylesMap: w } = (0, i.WW)(e),
    S = -b / 2,
    T = -x / 2,
    B = e.label ? 8 : 0,
    v = u.A.svg(p),
    _ = (0, i.Fr)(e, { stroke: "none", fill: "none" });
  "handDrawn" !== e.look && ((_.roughness = 0), (_.fillStyle = "solid"));
  const A = v.rectangle(S, T, b, x, _),
    F = Math.max(b, g.width),
    L = x + g.height + B,
    M = v.rectangle(-F / 2, -L / 2, F, L, {
      ..._,
      fill: "transparent",
      stroke: "none",
    }),
    $ = p.insert(() => A, ":first-child"),
    E = p.insert(() => M);
  if (e.icon) {
    const t = p.append("g");
    t.html(
      `<g>${await (0, n.WY)(e.icon, { height: c, width: c, fallbackPrefix: "" })}</g>`,
    );
    const r = t.node().getBBox(),
      i = r.width,
      o = r.height,
      a = r.x,
      s = r.y;
    t.attr(
      "transform",
      `translate(${-i / 2 - a},${y ? g.height / 2 + B / 2 - o / 2 - s : -g.height / 2 - B / 2 - o / 2 - s})`,
    ),
      t.attr("style", `color: ${w.get("stroke") ?? k};`);
  }
  return (
    f.attr(
      "transform",
      `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${y ? -L / 2 : L / 2 - g.height})`,
    ),
    $.attr(
      "transform",
      `translate(0,${y ? g.height / 2 + B / 2 : -g.height / 2 - B / 2})`,
    ),
    C(e, E),
    (e.intersect = function (t) {
      if ((h.R.info("iconSquare intersect", e, t), !e.label))
        return I.rect(e, t);
      const r = e.x ?? 0,
        i = e.y ?? 0,
        o = e.height ?? 0;
      let n = [];
      return (
        (n = y
          ? [
              { x: r - g.width / 2, y: i - o / 2 },
              { x: r + g.width / 2, y: i - o / 2 },
              { x: r + g.width / 2, y: i - o / 2 + g.height + B },
              { x: r + b / 2, y: i - o / 2 + g.height + B },
              { x: r + b / 2, y: i + o / 2 },
              { x: r - b / 2, y: i + o / 2 },
              { x: r - b / 2, y: i - o / 2 + g.height + B },
              { x: r - g.width / 2, y: i - o / 2 + g.height + B },
            ]
          : [
              { x: r - b / 2, y: i - o / 2 },
              { x: r + b / 2, y: i - o / 2 },
              { x: r + b / 2, y: i - o / 2 + x },
              { x: r + g.width / 2, y: i - o / 2 + x },
              { x: r + g.width / 2 / 2, y: i + o / 2 },
              { x: r - g.width / 2, y: i + o / 2 },
              { x: r - g.width / 2, y: i - o / 2 + x },
              { x: r - b / 2, y: i - o / 2 + x },
            ]),
        I.polygon(e, n, t)
      );
    }),
    p
  );
}
async function Ot(t, e, { config: { themeVariables: r, flowchart: o } }) {
  const { labelStyles: a } = (0, i.GX)(e);
  e.labelStyle = a;
  const s = e.assetHeight ?? 48,
    l = e.assetWidth ?? 48,
    c = Math.max(s, l),
    d = o?.wrappingWidth;
  e.width = Math.max(c, d ?? 0);
  const {
      shapeSvg: p,
      bbox: g,
      label: f,
    } = await m(t, e, "icon-shape default"),
    y = e.label ? 8 : 0,
    x = "t" === e.pos,
    { nodeBorder: b, mainBkg: k } = r,
    { stylesMap: w } = (0, i.WW)(e),
    S = u.A.svg(p),
    T = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((T.roughness = 0), (T.fillStyle = "solid"));
  const B = w.get("fill");
  T.stroke = B ?? k;
  const v = p.append("g");
  e.icon &&
    v.html(
      `<g>${await (0, n.WY)(e.icon, { height: c, width: c, fallbackPrefix: "" })}</g>`,
    );
  const _ = v.node().getBBox(),
    A = _.width,
    F = _.height,
    L = _.x,
    M = _.y,
    $ = Math.max(A, F) * Math.SQRT2 + 40,
    E = S.circle(0, 0, $, T),
    O = Math.max($, g.width),
    D = $ + g.height + y,
    K = S.rectangle(-O / 2, -D / 2, O, D, {
      ...T,
      fill: "transparent",
      stroke: "none",
    }),
    q = p.insert(() => E, ":first-child"),
    P = p.insert(() => K);
  return (
    v.attr(
      "transform",
      `translate(${-A / 2 - L},${x ? g.height / 2 + y / 2 - F / 2 - M : -g.height / 2 - y / 2 - F / 2 - M})`,
    ),
    v.attr("style", `color: ${w.get("stroke") ?? b};`),
    f.attr(
      "transform",
      `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${x ? -D / 2 : D / 2 - g.height})`,
    ),
    q.attr(
      "transform",
      `translate(0,${x ? g.height / 2 + y / 2 : -g.height / 2 - y / 2})`,
    ),
    C(e, P),
    (e.intersect = function (t) {
      return h.R.info("iconSquare intersect", e, t), I.rect(e, t);
    }),
    p
  );
}
async function Dt(t, e, { config: { themeVariables: r, flowchart: o } }) {
  const { labelStyles: a } = (0, i.GX)(e);
  e.labelStyle = a;
  const s = e.assetHeight ?? 48,
    l = e.assetWidth ?? 48,
    c = Math.max(s, l),
    d = o?.wrappingWidth;
  e.width = Math.max(c, d ?? 0);
  const {
      shapeSvg: p,
      bbox: g,
      halfPadding: f,
      label: y,
    } = await m(t, e, "icon-shape default"),
    x = "t" === e.pos,
    b = c + 2 * f,
    k = c + 2 * f,
    { nodeBorder: w, mainBkg: S } = r,
    { stylesMap: T } = (0, i.WW)(e),
    B = -k / 2,
    v = -b / 2,
    _ = e.label ? 8 : 0,
    A = u.A.svg(p),
    F = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((F.roughness = 0), (F.fillStyle = "solid"));
  const L = T.get("fill");
  F.stroke = L ?? S;
  const M = A.path(K(B, v, k, b, 5), F),
    $ = Math.max(k, g.width),
    E = b + g.height + _,
    O = A.rectangle(-$ / 2, -E / 2, $, E, {
      ...F,
      fill: "transparent",
      stroke: "none",
    }),
    D = p.insert(() => M, ":first-child").attr("class", "icon-shape2"),
    q = p.insert(() => O);
  if (e.icon) {
    const t = p.append("g");
    t.html(
      `<g>${await (0, n.WY)(e.icon, { height: c, width: c, fallbackPrefix: "" })}</g>`,
    );
    const r = t.node().getBBox(),
      i = r.width,
      o = r.height,
      a = r.x,
      s = r.y;
    t.attr(
      "transform",
      `translate(${-i / 2 - a},${x ? g.height / 2 + _ / 2 - o / 2 - s : -g.height / 2 - _ / 2 - o / 2 - s})`,
    ),
      t.attr("style", `color: ${T.get("stroke") ?? w};`);
  }
  return (
    y.attr(
      "transform",
      `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${x ? -E / 2 : E / 2 - g.height})`,
    ),
    D.attr(
      "transform",
      `translate(0,${x ? g.height / 2 + _ / 2 : -g.height / 2 - _ / 2})`,
    ),
    C(e, q),
    (e.intersect = function (t) {
      if ((h.R.info("iconSquare intersect", e, t), !e.label))
        return I.rect(e, t);
      const r = e.x ?? 0,
        i = e.y ?? 0,
        o = e.height ?? 0;
      let n = [];
      return (
        (n = x
          ? [
              { x: r - g.width / 2, y: i - o / 2 },
              { x: r + g.width / 2, y: i - o / 2 },
              { x: r + g.width / 2, y: i - o / 2 + g.height + _ },
              { x: r + k / 2, y: i - o / 2 + g.height + _ },
              { x: r + k / 2, y: i + o / 2 },
              { x: r - k / 2, y: i + o / 2 },
              { x: r - k / 2, y: i - o / 2 + g.height + _ },
              { x: r - g.width / 2, y: i - o / 2 + g.height + _ },
            ]
          : [
              { x: r - k / 2, y: i - o / 2 },
              { x: r + k / 2, y: i - o / 2 },
              { x: r + k / 2, y: i - o / 2 + b },
              { x: r + g.width / 2, y: i - o / 2 + b },
              { x: r + g.width / 2 / 2, y: i + o / 2 },
              { x: r - g.width / 2, y: i + o / 2 },
              { x: r - g.width / 2, y: i - o / 2 + b },
              { x: r - k / 2, y: i - o / 2 + b },
            ]),
        I.polygon(e, n, t)
      );
    }),
    p
  );
}
async function It(t, e, { config: { themeVariables: r, flowchart: o } }) {
  const { labelStyles: a } = (0, i.GX)(e);
  e.labelStyle = a;
  const s = e.assetHeight ?? 48,
    l = e.assetWidth ?? 48,
    c = Math.max(s, l),
    d = o?.wrappingWidth;
  e.width = Math.max(c, d ?? 0);
  const {
      shapeSvg: p,
      bbox: g,
      halfPadding: f,
      label: y,
    } = await m(t, e, "icon-shape default"),
    x = "t" === e.pos,
    b = c + 2 * f,
    k = c + 2 * f,
    { nodeBorder: w, mainBkg: S } = r,
    { stylesMap: T } = (0, i.WW)(e),
    B = -k / 2,
    v = -b / 2,
    _ = e.label ? 8 : 0,
    A = u.A.svg(p),
    F = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((F.roughness = 0), (F.fillStyle = "solid"));
  const L = T.get("fill");
  F.stroke = L ?? S;
  const M = A.path(K(B, v, k, b, 0.1), F),
    $ = Math.max(k, g.width),
    E = b + g.height + _,
    O = A.rectangle(-$ / 2, -E / 2, $, E, {
      ...F,
      fill: "transparent",
      stroke: "none",
    }),
    D = p.insert(() => M, ":first-child"),
    q = p.insert(() => O);
  if (e.icon) {
    const t = p.append("g");
    t.html(
      `<g>${await (0, n.WY)(e.icon, { height: c, width: c, fallbackPrefix: "" })}</g>`,
    );
    const r = t.node().getBBox(),
      i = r.width,
      o = r.height,
      a = r.x,
      s = r.y;
    t.attr(
      "transform",
      `translate(${-i / 2 - a},${x ? g.height / 2 + _ / 2 - o / 2 - s : -g.height / 2 - _ / 2 - o / 2 - s})`,
    ),
      t.attr("style", `color: ${T.get("stroke") ?? w};`);
  }
  return (
    y.attr(
      "transform",
      `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${x ? -E / 2 : E / 2 - g.height})`,
    ),
    D.attr(
      "transform",
      `translate(0,${x ? g.height / 2 + _ / 2 : -g.height / 2 - _ / 2})`,
    ),
    C(e, q),
    (e.intersect = function (t) {
      if ((h.R.info("iconSquare intersect", e, t), !e.label))
        return I.rect(e, t);
      const r = e.x ?? 0,
        i = e.y ?? 0,
        o = e.height ?? 0;
      let n = [];
      return (
        (n = x
          ? [
              { x: r - g.width / 2, y: i - o / 2 },
              { x: r + g.width / 2, y: i - o / 2 },
              { x: r + g.width / 2, y: i - o / 2 + g.height + _ },
              { x: r + k / 2, y: i - o / 2 + g.height + _ },
              { x: r + k / 2, y: i + o / 2 },
              { x: r - k / 2, y: i + o / 2 },
              { x: r - k / 2, y: i - o / 2 + g.height + _ },
              { x: r - g.width / 2, y: i - o / 2 + g.height + _ },
            ]
          : [
              { x: r - k / 2, y: i - o / 2 },
              { x: r + k / 2, y: i - o / 2 },
              { x: r + k / 2, y: i - o / 2 + b },
              { x: r + g.width / 2, y: i - o / 2 + b },
              { x: r + g.width / 2 / 2, y: i + o / 2 },
              { x: r - g.width / 2, y: i + o / 2 },
              { x: r - g.width / 2, y: i - o / 2 + b },
              { x: r - k / 2, y: i - o / 2 + b },
            ]),
        I.polygon(e, n, t)
      );
    }),
    p
  );
}
async function Kt(t, e, { config: { flowchart: r } }) {
  const o = new Image();
  (o.src = e?.img ?? ""), await o.decode();
  const n = Number(o.naturalWidth.toString().replace("px", "")),
    a = Number(o.naturalHeight.toString().replace("px", ""));
  e.imageAspectRatio = n / a;
  const { labelStyles: s } = (0, i.GX)(e);
  e.labelStyle = s;
  const l = r?.wrappingWidth;
  e.defaultWidth = r?.wrappingWidth;
  const c = Math.max(e.label ? (l ?? 0) : 0, e?.assetWidth ?? n),
    d =
      "on" === e.constraint && e?.assetHeight
        ? e.assetHeight * e.imageAspectRatio
        : c,
    p = "on" === e.constraint ? d / e.imageAspectRatio : (e?.assetHeight ?? a);
  e.width = Math.max(d, l ?? 0);
  const {
      shapeSvg: g,
      bbox: f,
      label: y,
    } = await m(t, e, "image-shape default"),
    x = "t" === e.pos,
    b = -d / 2,
    k = -p / 2,
    w = e.label ? 8 : 0,
    S = u.A.svg(g),
    T = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((T.roughness = 0), (T.fillStyle = "solid"));
  const B = S.rectangle(b, k, d, p, T),
    v = Math.max(d, f.width),
    _ = p + f.height + w,
    A = S.rectangle(-v / 2, -_ / 2, v, _, {
      ...T,
      fill: "none",
      stroke: "none",
    }),
    F = g.insert(() => B, ":first-child"),
    L = g.insert(() => A);
  if (e.img) {
    const t = g.append("image");
    t.attr("href", e.img),
      t.attr("width", d),
      t.attr("height", p),
      t.attr("preserveAspectRatio", "none"),
      t.attr("transform", `translate(${-d / 2},${x ? _ / 2 - p : -_ / 2})`);
  }
  return (
    y.attr(
      "transform",
      `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${x ? -p / 2 - f.height / 2 - w / 2 : p / 2 - f.height / 2 + w / 2})`,
    ),
    F.attr(
      "transform",
      `translate(0,${x ? f.height / 2 + w / 2 : -f.height / 2 - w / 2})`,
    ),
    C(e, L),
    (e.intersect = function (t) {
      if ((h.R.info("iconSquare intersect", e, t), !e.label))
        return I.rect(e, t);
      const r = e.x ?? 0,
        i = e.y ?? 0,
        o = e.height ?? 0;
      let n = [];
      return (
        (n = x
          ? [
              { x: r - f.width / 2, y: i - o / 2 },
              { x: r + f.width / 2, y: i - o / 2 },
              { x: r + f.width / 2, y: i - o / 2 + f.height + w },
              { x: r + d / 2, y: i - o / 2 + f.height + w },
              { x: r + d / 2, y: i + o / 2 },
              { x: r - d / 2, y: i + o / 2 },
              { x: r - d / 2, y: i - o / 2 + f.height + w },
              { x: r - f.width / 2, y: i - o / 2 + f.height + w },
            ]
          : [
              { x: r - d / 2, y: i - o / 2 },
              { x: r + d / 2, y: i - o / 2 },
              { x: r + d / 2, y: i - o / 2 + p },
              { x: r + f.width / 2, y: i - o / 2 + p },
              { x: r + f.width / 2 / 2, y: i + o / 2 },
              { x: r - f.width / 2, y: i + o / 2 },
              { x: r - f.width / 2, y: i - o / 2 + p },
              { x: r - d / 2, y: i - o / 2 + p },
            ]),
        I.polygon(e, n, t)
      );
    }),
    g
  );
}
async function qt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = n,
    s = "neo" === e.look ? 2 * n : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = Math.max(h.height + 2 * a, e.height ?? 0),
    d = Math.max(h.width + 2 * s, (e.width ?? 0) - c),
    p = [
      { x: 0, y: 0 },
      { x: d, y: 0 },
      { x: d + (3 * c) / 6, y: -c },
      { x: (-3 * c) / 6, y: -c },
    ];
  let g;
  const { cssStyles: f } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(l),
      r = (0, i.Fr)(e, {}),
      o = k(p),
      n = t.path(o, r);
    (g = l
      .insert(() => n, ":first-child")
      .attr("transform", `translate(${-d / 2}, ${c / 2})`)),
      f && g.attr("style", f);
  } else g = U(l, d, c, p);
  return (
    o && g.attr("style", o),
    (e.width = d),
    (e.height = c),
    C(e, g),
    (e.intersect = function (t) {
      return I.polygon(e, p, t);
    }),
    l
  );
}
async function Pt(t, e) {
  const { shapeSvg: r, bbox: i, label: o } = await m(t, e, "label"),
    n = r.insert("rect", ":first-child");
  return (
    n.attr("width", 0.1).attr("height", 0.1),
    r.attr("class", "label edgeLabel"),
    o.attr(
      "transform",
      `translate(${-i.width / 2 - (i.x - (i.left ?? 0))}, ${-i.height / 2 - (i.y - (i.top ?? 0))})`,
    ),
    C(e, n),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    r
  );
}
async function Rt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = n,
    s = "neo" === e.look ? 2 * n : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = Math.max(h.height + a, e.height ?? 0),
    d = Math.max(h.width + s, (e.width ?? 0) - c),
    p = [
      { x: 0, y: 0 },
      { x: d + (3 * c) / 6, y: 0 },
      { x: d, y: -c },
      { x: (-3 * c) / 6, y: -c },
    ];
  let g;
  const { cssStyles: f } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(l),
      r = (0, i.Fr)(e, {}),
      o = k(p),
      n = t.path(o, r);
    (g = l
      .insert(() => n, ":first-child")
      .attr("transform", `translate(${-d / 2}, ${c / 2})`)),
      f && g.attr("style", f);
  } else g = U(l, d, c, p);
  return (
    o && g.attr("style", o),
    (e.width = d),
    (e.height = c),
    C(e, g),
    (e.intersect = function (t) {
      return I.polygon(e, p, t);
    }),
    l
  );
}
async function zt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = n,
    s = "neo" === e.look ? 2 * n : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = Math.max(h.height + a, e.height ?? 0),
    d = Math.max(h.width + s, (e.width ?? 0) - c),
    p = [
      { x: (-3 * c) / 6, y: 0 },
      { x: d, y: 0 },
      { x: d + (3 * c) / 6, y: -c },
      { x: 0, y: -c },
    ];
  let g;
  const { cssStyles: f } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(l),
      r = (0, i.Fr)(e, {}),
      o = k(p),
      n = t.path(o, r);
    (g = l
      .insert(() => n, ":first-child")
      .attr("transform", `translate(${-d / 2}, ${c / 2})`)),
      f && g.attr("style", f);
  } else g = U(l, d, c, p);
  return (
    o && g.attr("style", o),
    (e.width = d),
    (e.height = c),
    C(e, g),
    (e.intersect = function (t) {
      return I.polygon(e, p, t);
    }),
    l
  );
}
function Nt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  (e.label = ""), (e.labelStyle = r);
  const n = t
      .insert("g")
      .attr("class", b(e))
      .attr("id", e.domId ?? e.id),
    { cssStyles: a } = e,
    s = Math.max(35, e?.width ?? 0),
    l = Math.max(35, e?.height ?? 0),
    c = [
      { x: s, y: 0 },
      { x: 0, y: l + 3.5 },
      { x: s - 14, y: l + 3.5 },
      { x: 0, y: 2 * l },
      { x: s, y: l - 3.5 },
      { x: 14, y: l - 3.5 },
    ],
    d = u.A.svg(n),
    p = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((p.roughness = 0), (p.fillStyle = "solid"));
  const g = k(c),
    f = d.path(g, p),
    y = n.insert(() => f, ":first-child");
  return (
    y.attr("class", "outer-path"),
    a && "handDrawn" !== e.look && y.selectAll("path").attr("style", a),
    o && "handDrawn" !== e.look && y.selectAll("path").attr("style", o),
    y.attr("transform", `translate(-${s / 2},${-l})`),
    C(e, y),
    (e.intersect = function (t) {
      return h.R.info("lightningBolt intersect", e, t), I.polygon(e, c, t);
    }),
    n
  );
}
(0, c.K)(Mt, "hexagon"),
  (0, c.K)($t, "hourglass"),
  (0, c.K)(Et, "icon"),
  (0, c.K)(Ot, "iconCircle"),
  (0, c.K)(Dt, "iconRounded"),
  (0, c.K)(It, "iconSquare"),
  (0, c.K)(Kt, "imageSquare"),
  (0, c.K)(qt, "inv_trapezoid"),
  (0, c.K)(Pt, "labelRect"),
  (0, c.K)(Rt, "lean_left"),
  (0, c.K)(zt, "lean_right"),
  (0, c.K)(Nt, "lightningBolt");
var Wt = (0, c.K)(
    (t, e, r, i, o, n, a) =>
      [
        `M${t},${e + n}`,
        `a${o},${n} 0,0,0 ${r},0`,
        `a${o},${n} 0,0,0 ${-r},0`,
        `l0,${i}`,
        `a${o},${n} 0,0,0 ${r},0`,
        "l0," + -i,
        `M${t},${e + n + a}`,
        `a${o},${n} 0,0,0 ${r},0`,
      ].join(" "),
    "createCylinderPathD",
  ),
  jt = (0, c.K)(
    (t, e, r, i, o, n, a) =>
      [
        `M${t},${e + n}`,
        `M${t + r},${e + n}`,
        `a${o},${n} 0,0,0 ${-r},0`,
        `l0,${i}`,
        `a${o},${n} 0,0,0 ${r},0`,
        "l0," + -i,
        `M${t},${e + n + a}`,
        `a${o},${n} 0,0,0 ${r},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  Ht = (0, c.K)(
    (t, e, r, i, o, n) =>
      [`M${t - r / 2},${-i / 2}`, `a${o},${n} 0,0,0 ${r},0`].join(" "),
    "createInnerCylinderPathD",
  );
async function Ut(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    l = "neo" === e.look ? 24 : n;
  if (e.width || e.height) {
    const t = e.width ?? 0;
    (e.width = (e.width ?? 0) - a), e.width < 10 && (e.width = 10);
    const r = t / 2 / (2.5 + t / 50);
    (e.height = (e.height ?? 0) - l - 3 * r), e.height < 10 && (e.height = 10);
  }
  const { shapeSvg: h, bbox: c, label: d } = await m(t, e, b(e)),
    p = (e?.width ? e?.width : c.width) + 2 * a,
    g = p / 2,
    f = g / (2.5 + p / 50),
    y = (e?.height ? e?.height : c.height) + f + 2 * l,
    x = 0.1 * y;
  let k;
  const { cssStyles: w } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(h),
      r = jt(0, 0, p, y, g, f, x),
      o = Ht(0, f, p, y, g, f),
      n = (0, i.Fr)(e, {}),
      a = t.path(r, n),
      s = t.path(o, n);
    h.insert(() => s, ":first-child").attr("class", "line"),
      (k = h.insert(() => a, ":first-child")),
      k.attr("class", "basic label-container"),
      w && k.attr("style", w);
  } else {
    const t = Wt(0, 0, p, y, g, f, x);
    k = h
      .insert("path", ":first-child")
      .attr("d", t)
      .attr("class", "basic label-container outer-path")
      .attr("style", (0, s.KL)(w))
      .attr("style", o);
  }
  return (
    k.attr("label-offset-y", f),
    k.attr("transform", `translate(${-p / 2}, ${-(y / 2 + f)})`),
    C(e, k),
    d.attr(
      "transform",
      `translate(${-c.width / 2 - (c.x - (c.left ?? 0))}, ${-c.height / 2 + f - (c.y - (c.top ?? 0))})`,
    ),
    (e.intersect = function (t) {
      const r = I.rect(e, t),
        i = r.x - (e.x ?? 0);
      if (
        0 != g &&
        (Math.abs(i) < (e.width ?? 0) / 2 ||
          (Math.abs(i) == (e.width ?? 0) / 2 &&
            Math.abs(r.y - (e.y ?? 0)) > (e.height ?? 0) / 2 - f))
      ) {
        let o = f * f * (1 - (i * i) / (g * g));
        o > 0 && (o = Math.sqrt(o)),
          (o = f - o),
          t.y - (e.y ?? 0) > 0 && (o = -o),
          (r.y += o);
      }
      return r;
    }),
    h
  );
}
async function Yt(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n;
  if (e.width || e.height) {
    const t = e.width;
    (e.width = (10 * (t ?? 0)) / 11 - 2 * a),
      e.width < 10 && (e.width = 10),
      (e.height = (e?.height ?? 0) - 2 * s),
      e.height < 10 && (e.height = 10);
  }
  const { shapeSvg: l, bbox: h, label: c } = await m(t, e, b(e)),
    d = (e?.width ? e?.width : h.width) + 2 * (a ?? 0),
    p = (e?.height ? e?.height : h.height) + 2 * (s ?? 0),
    g = "neo" === e.look ? p / 4 : p / 8,
    f = p + g,
    { cssStyles: y } = e,
    x = u.A.svg(l),
    k = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((k.roughness = 0), (k.fillStyle = "solid"));
  const S = [
      { x: -d / 2 - (d / 2) * 0.1, y: -f / 2 },
      { x: -d / 2 - (d / 2) * 0.1, y: f / 2 },
      ...w(-d / 2 - (d / 2) * 0.1, f / 2, d / 2 + (d / 2) * 0.1, f / 2, g, 0.8),
      { x: d / 2 + (d / 2) * 0.1, y: -f / 2 },
      { x: -d / 2 - (d / 2) * 0.1, y: -f / 2 },
      { x: -d / 2, y: -f / 2 },
      { x: -d / 2, y: (f / 2) * 1.1 },
      { x: -d / 2, y: -f / 2 },
    ],
    T = x.polygon(
      S.map((t) => [t.x, t.y]),
      k,
    ),
    B = l.insert(() => T, ":first-child");
  return (
    B.attr("class", "basic label-container outer-path"),
    y && "handDrawn" !== e.look && B.selectAll("path").attr("style", y),
    o && "handDrawn" !== e.look && B.selectAll("path").attr("style", o),
    B.attr("transform", `translate(0,${-g / 2})`),
    c.attr(
      "transform",
      `translate(${-d / 2 + (e.padding ?? 0) + ((d / 2) * 0.1) / 2 - (h.x - (h.left ?? 0))},${-p / 2 + (e.padding ?? 0) - g - (h.y - (h.top ?? 0))})`,
    ),
    C(e, B),
    (e.intersect = function (t) {
      return I.polygon(e, S, t);
    }),
    l
  );
}
(0, c.K)(Ut, "linedCylinder"), (0, c.K)(Yt, "linedWaveEdgedRect");
var Gt = {
    normal: "usecase-actor-shape usecase-actor-normal",
    hollow: "usecase-actor-hollow",
    awesome: "usecase-actor-awesome",
    icon: "usecase-actor-icon",
  },
  Xt = Math.PI / 3,
  Vt = (0, c.K)((t, e) => {
    const r = 0.6 * e,
      i = e * Math.sqrt(0.64),
      o = Math.cos(Xt),
      n = -Math.sin(Xt),
      a = r * -n,
      s = t + r * o,
      l = i * o,
      h = i * n;
    return `M ${a - l} ${s - h} L ${a + l} ${s + h}`;
  }, "businessMarkerPathForCircle"),
  Zt = {
    normal: Vt(-24, 12),
    hollow: Vt(-23, 9),
    awesome: Vt(-21, 13),
    icon: "M 12 -8 L 26 -26",
  },
  Qt = (0, c.K)((t, e, r) => {
    const i = (e.x ?? 0) - (e.left ?? 0),
      o = (e.y ?? 0) - (e.top ?? 0);
    t.attr(
      "transform",
      `translate(${-e.width / 2 - i},${r - e.height / 2 - o})`,
    );
  }, "positionLabel"),
  Jt = (0, c.K)((t, e, r, o, n = !1) => {
    if ("handDrawn" === e.look) {
      const a = u.A.svg(t).path(r, (0, i.Fr)(e, n ? { fill: "none" } : {}));
      return t.insert(() => a, ":first-child").attr("class", o);
    }
    const a = t.append("path").attr("class", o).attr("d", r);
    return n && a.attr("fill", "none"), a;
  }, "appendActorPath"),
  te = (0, c.K)((t, e, r, o, n, a, s = !1) => {
    if ("handDrawn" === e.look) {
      const l = u.A.svg(t).circle(
        r,
        o,
        2 * n,
        (0, i.Fr)(e, s ? { fill: "none" } : {}),
      );
      return t.insert(() => l, ":first-child").attr("class", a);
    }
    const l = t
      .append("circle")
      .attr("class", a)
      .attr("cx", r)
      .attr("cy", o)
      .attr("r", n);
    return s && l.attr("fill", "none"), l;
  }, "appendActorCircle"),
  ee = (0, c.K)((t, e, r) => {
    e.business &&
      t
        .append("path")
        .attr("class", "usecase-business-marker usecase-actor-business-marker")
        .attr("d", Zt[r])
        .attr("fill", "none")
        .attr(
          "style",
          "stroke: inherit !important; stroke-width: inherit !important",
        );
  }, "appendBusinessActorMarker");
async function re(t, e, r, o) {
  const { labelStyles: n, nodeStyles: s } = (0, i.GX)(e);
  e.labelStyle = n;
  const h =
      "icon" === r || void 0 !== e.stereotype
        ? {
            ...e,
            icon: "icon" === r ? void 0 : e.icon,
            stereotype: void 0,
          }
        : e,
    {
      shapeSvg: c,
      bbox: d,
      label: u,
    } = await m(t, h, b(e, `usecase-actor-variant usecase-actor-${r}`)),
    p = e.accessibleName ?? e.label;
  p && c.attr("role", "img").attr("aria-label", p),
    u.attr("class", "label actor-label usecase-actor-label");
  const { theme: g, themeVariables: f } = (0, l.D7)();
  let y, k;
  if (((0, a.XE)(c, e.colorIndex, g, f.borderColorArray), e.stereotype)) {
    const t = await x(c, `«${e.stereotype}»`, {
      labelStyle: n,
      useHtmlLabels: e.useHtmlLabels,
      padding: 0,
      centerLabel: !0,
      width: e.wrappingWidth,
    });
    (y = t.label.attr("class", "label usecase-stereotype")), (k = t.bbox);
  }
  const w = c
    .append("g")
    .attr("class", `usecase-actor-glyph ${Gt[r]}`)
    .attr("style", s || null);
  await o(w, e), ee(w, e, r);
  const S = e.padding ?? 8,
    T = k?.height ?? 0,
    B = 80 + d.height + (k ? T + 2 : 0),
    v = Math.max(56, d.width, k?.width ?? 0) + 2 * S,
    _ = B + 2 * S,
    A = -B / 2;
  w.attr("transform", `translate(0,${A + 36})`);
  let F = A + 72 + 8;
  y && k && ((F += T / 2), Qt(y, k, F), (F += T / 2 + 2)),
    Qt(u, d, F + d.height / 2);
  const L = c
    .insert("rect", ":first-child")
    .attr("class", "usecase-actor-outline")
    .attr("x", -v / 2)
    .attr("y", -_ / 2)
    .attr("width", v)
    .attr("height", _)
    .attr("opacity", 0)
    .attr("aria-hidden", "true");
  return C(e, L), (e.intersect = (t) => I.rect(e, t)), c;
}
(0, c.K)(re, "renderUsecaseActor");
var ie = [
  "M 0 -12",
  "C 6.627 -12 12 -17.373 12 -24",
  "C 12 -30.627 6.627 -36 0 -36",
  "C -6.627 -36 -12 -30.627 -12 -24",
  "C -12 -17.373 -6.627 -12 0 -12 Z",
  "M 0 -12 V 8",
  "M -17 -5 H 17",
  "M 0 8 L -15 28",
  "M 0 8 L 15 28",
].join(" ");
async function oe(t, e) {
  return re(t, e, "normal", (t, e) => {
    Jt(t, e, ie, "usecase-actor-stick");
  });
}
(0, c.K)(oe, "usecaseActor");
var ne = [
  "M 0 -34",
  "C 7.18 -34 13 -28.18 13 -21",
  "C 13 -13.82 7.18 -8 0 -8",
  "C -7.18 -8 -13 -13.82 -13 -21",
  "C -13 -28.18 -7.18 -34 0 -34 Z",
  "M -24 25",
  "C -24 7 -14 -3 0 -3",
  "C 14 -3 24 7 24 25",
  "C 24 28 21 30 18 30",
  "H -18",
  "C -21 30 -24 28 -24 25 Z",
].join(" ");
async function ae(t, e) {
  return re(t, e, "awesome", (t, e) => {
    Jt(t, e, ne, "usecase-actor-awesome-silhouette");
  });
}
(0, c.K)(ae, "usecaseActorAwesome");
var se = [
  "M -22 -10",
  "H 22",
  "V 0",
  "H 6",
  "L 22 17",
  "L 13 28",
  "L 0 13",
  "L -13 28",
  "L -22 17",
  "L -6 0",
  "H -22",
  "Z",
].join(" ");
async function le(t, e) {
  return re(t, e, "hollow", (t, e) => {
    te(t, e, 0, -23, 9, "usecase-actor-hollow-head", !0),
      Jt(t, e, se, "usecase-actor-hollow-body", !0);
  });
}
(0, c.K)(le, "usecaseActorHollow");
var he = (0, c.K)(async (t, e) => {
  if ("handDrawn" === e.look) {
    const r = u.A.svg(t).rectangle(-26, -28, 52, 52, (0, i.Fr)(e, {}));
    t.insert(() => r, ":first-child").attr("class", "usecase-actor-icon-frame");
  } else
    t.append("rect")
      .attr("class", "usecase-actor-icon-frame")
      .attr("x", -26)
      .attr("y", -28)
      .attr("width", 52)
      .attr("height", 52)
      .attr("rx", 4)
      .attr("ry", 4);
  const r = e.icon ?? "",
    o = await (0, n.dn)(r.includes(":") ? r : `fa:${r}`),
    a = await (0, n.WY)(r, {
      height: 42,
      width: 42,
      fallbackPrefix: "fa",
    }),
    s = t
      .append("g")
      .attr(
        "class",
        "usecase-actor-icon-symbol" + (o ? "" : " usecase-actor-icon-fallback"),
      )
      .attr("aria-hidden", "true")
      .html(`<g>${a}</g>`),
    l = s.node()?.getBBox();
  l &&
    s.attr(
      "transform",
      `translate(${-l.width / 2 - l.x},${-2 - l.height / 2 - l.y})`,
    );
}, "drawIconActor");
async function ce(t, e) {
  return re(t, e, "icon", he);
}
(0, c.K)(ce, "usecaseActorIcon");
var de = (0, c.K)((t, e, r) => {
  const i = (e.x ?? 0) - (e.left ?? 0),
    o = (e.y ?? 0) - (e.top ?? 0);
  t.attr("transform", `translate(${-e.width / 2 - i},${r - e.height / 2 - o})`);
}, "positionLabel");
async function ue(t, e) {
  const r = e,
    { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const s = r.stereotype ? { ...e, stereotype: void 0 } : e,
    {
      shapeSvg: h,
      bbox: c,
      halfPadding: d,
      label: p,
    } = await m(t, s, b(e, "usecase-business-shape"));
  p.attr("class", "label usecase-label");
  const { theme: g, themeVariables: f } = (0, l.D7)();
  let y, k;
  if (((0, a.XE)(h, e.colorIndex, g, f.borderColorArray), r.stereotype)) {
    const t = await x(h, `«${r.stereotype}»`, {
      labelStyle: o,
      useHtmlLabels: e.useHtmlLabels,
      padding: 0,
      centerLabel: !0,
      width: e.wrappingWidth,
    });
    (y = t.label.attr("class", "label usecase-stereotype")), (k = t.bbox);
  }
  const w = k ? 2 : 0,
    S = c.height + (k?.height ?? 0) + w,
    T = Math.max(c.width, k?.width ?? 0),
    B = d ?? 10,
    v = T / 2 + 2 * B,
    _ = S / 2 + 2 * B,
    A = Math.min(Math.max(B / 5, 1), B / 2),
    F = T / 2 + A,
    L = v - A,
    M = F / v,
    $ = L / v,
    E = _ * Math.sqrt(Math.max(0, 1 - M * M)),
    O = -_ * Math.sqrt(Math.max(0, 1 - $ * $));
  let D;
  if (
    (y && k && de(y, k, -S / 2 + k.height / 2),
    de(p, c, S / 2 - c.height / 2),
    "handDrawn" === e.look)
  ) {
    const t = u.A.svg(h).ellipse(0, 0, 2 * v, 2 * _, (0, i.Fr)(e, {}));
    D = h
      .insert(() => t, ":first-child")
      .attr("class", "basic label-container usecase-business-ellipse");
  } else
    D = h
      .insert("ellipse", ":first-child")
      .attr("class", "basic label-container usecase-business-ellipse")
      .attr("style", n)
      .attr("rx", v)
      .attr("ry", _)
      .attr("cx", 0)
      .attr("cy", 0);
  h.append("path")
    .attr("class", "usecase-business-marker")
    .attr("d", `M ${F} ${E} L ${L} ${O}`)
    .attr("fill", "none")
    .attr("style", n || null);
  const K = r.accessibleName ?? r.label;
  return (
    K && h.attr("role", "img").attr("aria-label", K),
    C(e, D),
    (e.calcIntersect = (t, e) => I.ellipse(t, t.width / 2, t.height / 2, e)),
    (e.intersect = (t) => I.ellipse(e, v, _, t)),
    h
  );
}
(0, c.K)(ue, "usecaseBusiness");
var pe = (0, c.K)((t, e, r, i) => {
    const o = (e.x ?? 0) - (e.left ?? 0),
      n = (e.y ?? 0) - (e.top ?? 0);
    t.attr(
      "transform",
      `translate(${r - e.width / 2 - o},${i - e.height / 2 - n})`,
    );
  }, "positionLabel"),
  ge = (0, c.K)((t) => {
    const e = Number.parseFloat(t ?? "");
    return Number.isFinite(e) && e >= 0 ? e : 1;
  }, "numericStrokeWidth");
async function fe(t, e) {
  const r = e,
    { labelStyles: o, nodeStyles: n } = (0, i.GX)(e),
    { stylesMap: a } = (0, i.WW)(e);
  e.labelStyle = o;
  const {
    shapeSvg: s,
    bbox: l,
    label: h,
  } = await m(t, e, b(e, "usecase-json-table"));
  s.attr("role", "img"),
    r.accessibleName && s.attr("aria-label", r.accessibleName),
    h.attr("class", "label usecase-json-title");
  const d = s.append("g").attr("class", "usecase-json-table-grid"),
    p = [];
  for (const t of r.jsonRows ?? []) {
    const r = await x(d, t.key, {
        labelStyle: o,
        useHtmlLabels: e.useHtmlLabels,
        padding: 0,
        centerLabel: !0,
      }),
      i = await x(d, t.value, {
        labelStyle: o,
        useHtmlLabels: e.useHtmlLabels,
        padding: 0,
        centerLabel: !0,
      });
    p.push({
      key: {
        label: r.label.attr("class", "label usecase-json-key"),
        bbox: r.bbox,
      },
      value: {
        label: i.label.attr("class", "label usecase-json-value"),
        bbox: i.bbox,
      },
    });
  }
  const g = Math.max(0, ...p.map(({ key: t }) => t.bbox.width)) + 16,
    f = Math.max(0, ...p.map(({ value: t }) => t.bbox.width)) + 16,
    y = l.width + 16,
    k = Math.max(y, g + f),
    w = f + Math.max(0, k - g - f),
    S = l.height + 8,
    T = p.map(
      ({ key: t, value: e }) => Math.max(t.bbox.height, e.bbox.height) + 8,
    ),
    B = S + T.reduce((t, e) => t + e, 0),
    v = ge(a.get("stroke-width")),
    _ = k + 2 * v,
    A = B + 2 * v,
    F = -k / 2,
    L = -B / 2,
    M = "handDrawn" === e.look ? u.A.svg(s) : void 0,
    $ = M ? (0, i.Fr)(e, {}) : void 0,
    E = (0, c.K)((t, e, r, i, o, a) => {
      if (M && $) {
        const n = M.rectangle(r, i, o, a, $);
        return t.insert(() => n, ":first-child").attr("class", e);
      }
      return t
        .insert("rect", ":first-child")
        .attr("class", e)
        .attr("x", r)
        .attr("y", i)
        .attr("width", o)
        .attr("height", a)
        .attr("style", n);
    }, "insertCell"),
    O = E(s, "label-container usecase-json-border", -_ / 2, -A / 2, _, A);
  E(d, "usecase-json-cell usecase-json-title-cell", F, L, k, S),
    d.node()?.append(h.node()),
    pe(h, l, 0, L + S / 2);
  let D = L + S;
  return (
    p.forEach(({ key: t, value: e }, r) => {
      const i = T[r],
        o = d
          .append("g")
          .attr("class", "usecase-json-row")
          .attr("data-row-index", r)
          .attr("transform", `translate(0,${D})`);
      E(o, "usecase-json-cell usecase-json-key-cell", F, 0, g, i),
        E(o, "usecase-json-cell usecase-json-value-cell", F + g, 0, w, i),
        o.node()?.append(t.label.node(), e.label.node()),
        pe(t.label, t.bbox, F + g / 2, i / 2),
        pe(e.label, e.bbox, F + g + w / 2, i / 2),
        (D += i);
    }),
    C(e, O),
    (e.intersect = (t) => I.rect(e, t)),
    s
  );
}
async function ye(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n,
    l = "neo" === e.look ? 10 : 5;
  (e.width || e.height) &&
    ((e.width = Math.max((e?.width ?? 0) - 2 * a - 2 * l, 10)),
    (e.height = Math.max((e?.height ?? 0) - 2 * s - 2 * l, 10)));
  const { shapeSvg: h, bbox: c, label: d } = await m(t, e, b(e)),
    p = (e?.width ? e?.width : c.width) + 2 * a + 2 * l - 2 * l,
    g = (e?.height ? e?.height : c.height) + 2 * s + 2 * l - 2 * l,
    f = -p / 2,
    y = -g / 2,
    { cssStyles: x } = e,
    w = u.A.svg(h),
    S = (0, i.Fr)(e, {}),
    B = [
      { x: f - l, y: y + l },
      { x: f - l, y: y + g + l },
      { x: f + p - l, y: y + g + l },
      { x: f + p - l, y: y + g },
      { x: f + p, y: y + g },
      { x: f + p, y: y + g - l },
      { x: f + p + l, y: y + g - l },
      { x: f + p + l, y: y - l },
      { x: f + l, y: y - l },
      { x: f + l, y },
      { x: f, y },
      { x: f, y: y + l },
    ],
    v = [
      { x: f, y: y + l },
      { x: f + p - l, y: y + l },
      { x: f + p - l, y: y + g },
      { x: f + p, y: y + g },
      { x: f + p, y },
      { x: f, y },
    ];
  "handDrawn" !== e.look && ((S.roughness = 0), (S.fillStyle = "solid"));
  const _ = k(B);
  let A = w.path(_, S);
  const F = k(v);
  let L = w.path(F, S);
  "handDrawn" !== e.look && ((A = T(A)), (L = T(L)));
  const M = h.insert("g", ":first-child");
  return (
    M.insert(() => A),
    M.insert(() => L),
    M.attr("class", "basic label-container outer-path"),
    x && "handDrawn" !== e.look && M.selectAll("path").attr("style", x),
    o && "handDrawn" !== e.look && M.selectAll("path").attr("style", o),
    d.attr(
      "transform",
      `translate(${-c.width / 2 - l - (c.x - (c.left ?? 0))}, ${-c.height / 2 + l - (c.y - (c.top ?? 0))})`,
    ),
    C(e, M),
    (e.intersect = function (t) {
      return I.polygon(e, B, t);
    }),
    h
  );
}
async function me(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = e.padding ?? 0,
    h = "neo" === e.look ? 16 : l,
    c = "neo" === e.look ? 12 : l;
  let d = !0;
  (e.width || e.height) &&
    ((d = !1),
    (e.width = (e?.width ?? 0) - 2 * h),
    (e.height = (e?.height ?? 0) - 3 * c));
  const p = Math.max(a.width, e?.width ?? 0) + 2 * h,
    g = Math.max(a.height, e?.height ?? 0) + 3 * c,
    f = "neo" === e.look ? g / 4 : g / 8,
    y = g + (d ? f / 2 : -f / 2),
    x = -p / 2,
    S = -y / 2,
    T = 10,
    { cssStyles: B } = e,
    v = w(x - T, S + y + T, x + p - T, S + y + T, f, 0.8),
    _ = v?.[v.length - 1],
    A = [
      { x: x - T, y: S + T },
      { x: x - T, y: S + y + T },
      ...v,
      { x: x + p - T, y: _.y - T },
      { x: x + p, y: _.y - T },
      { x: x + p, y: _.y - 20 },
      { x: x + p + T, y: _.y - 20 },
      { x: x + p + T, y: S - T },
      { x: x + T, y: S - T },
      { x: x + T, y: S },
      { x, y: S },
      { x, y: S + T },
    ],
    F = [
      { x, y: S + T },
      { x: x + p - T, y: S + T },
      { x: x + p - T, y: _.y - T },
      { x: x + p, y: _.y - T },
      { x: x + p, y: S },
      { x, y: S },
    ],
    L = u.A.svg(n),
    M = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((M.roughness = 0), (M.fillStyle = "solid"));
  const $ = k(A),
    E = L.path($, M),
    O = k(F),
    D = L.path(O, M),
    K = n.insert(() => E, ":first-child");
  return (
    K.insert(() => D),
    K.attr("class", "basic label-container outer-path"),
    B && "handDrawn" !== e.look && K.selectAll("path").attr("style", B),
    o && "handDrawn" !== e.look && K.selectAll("path").attr("style", o),
    K.attr("transform", `translate(0,${-f / 2})`),
    s.attr(
      "transform",
      `translate(${-a.width / 2 - T - (a.x - (a.left ?? 0))}, ${-a.height / 2 + T - f - (a.y - (a.top ?? 0))})`,
    ),
    C(e, K),
    (e.intersect = function (t) {
      return I.polygon(e, A, t);
    }),
    n
  );
}
async function xe(t, e, { config: { themeVariables: r } }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  (e.labelStyle = o),
    e.useHtmlLabels || (0, l.E)((0, l.zj)()) || (e.centerLabel = !0);
  const { shapeSvg: a, bbox: s, label: h } = await m(t, e, b(e)),
    c = Math.max(s.width + 2 * (e.padding ?? 0), e?.width ?? 0),
    d = Math.max(s.height + 2 * (e.padding ?? 0), e?.height ?? 0),
    p = -c / 2,
    g = -d / 2,
    { cssStyles: f } = e,
    y = u.A.svg(a),
    x = (0, i.Fr)(e, { fill: r.noteBkgColor, stroke: r.noteBorderColor });
  "handDrawn" !== e.look && ((x.roughness = 0), (x.fillStyle = "solid"));
  const k = y.rectangle(p, g, c, d, x),
    w = a.insert(() => k, ":first-child");
  return (
    w.attr("class", "basic label-container outer-path"),
    h.attr("class", "label noteLabel"),
    f && "handDrawn" !== e.look && w.selectAll("path").attr("style", f),
    n && "handDrawn" !== e.look && w.selectAll("path").attr("style", n),
    h.attr(
      "transform",
      `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-s.height / 2 - (s.y - (s.top ?? 0))})`,
    ),
    C(e, w),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    a
  );
}
(0, c.K)(fe, "usecaseJsonTable"),
  (0, c.K)(ye, "multiRect"),
  (0, c.K)(me, "multiWaveEdgedRectangle"),
  (0, c.K)(xe, "note");
var Ce = (0, c.K)(
  (t, e, r) =>
    [
      `M${t + r / 2},${e}`,
      `L${t + r},${e - r / 2}`,
      `L${t + r / 2},${e - r}`,
      `L${t},${e - r / 2}`,
      "Z",
    ].join(" "),
  "createDecisionBoxPathD",
);
async function be(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await m(t, e, b(e)),
    s = a.width + (e.padding ?? 0) + (a.height + (e.padding ?? 0)),
    l = [
      { x: s / 2, y: 0 },
      { x: s, y: -s / 2 },
      { x: s / 2, y: -s },
      { x: 0, y: -s / 2 },
    ];
  let h;
  const { cssStyles: c } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(n),
      r = (0, i.Fr)(e, {}),
      o = Ce(0, 0, s),
      a = t.path(o, r);
    (h = n
      .insert(() => a, ":first-child")
      .attr("transform", `translate(${-s / 2 + 0.5}, ${s / 2})`)),
      c && h.attr("style", c);
  } else
    (h = U(n, s, s, l)),
      h.attr("transform", `translate(${-s / 2 + 0.5}, ${s / 2})`);
  return (
    o && h.attr("style", o),
    C(e, h),
    (e.calcIntersect = function (t, e) {
      const r = t.width,
        i = [
          { x: r / 2, y: 0 },
          { x: r, y: -r / 2 },
          { x: r / 2, y: -r },
          { x: 0, y: -r / 2 },
        ];
      return I.polygon(t, i, e);
    }),
    (e.intersect = function (t) {
      return this.calcIntersect(e, t);
    }),
    n
  );
}
async function ke(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 21 : (n ?? 0),
    s = "neo" === e.look ? 12 : (n ?? 0),
    { shapeSvg: l, bbox: h, label: c } = await m(t, e, b(e)),
    d = h.width + ("neo" === e.look ? 2 * a : a),
    p = Math.max(h.height + ("neo" === e.look ? 2 * s : s), e.height ?? 0),
    g = p / 4,
    f = -Math.max(d, (e.width ?? 0) - g) / 2,
    y = -p / 2,
    x = y / 2,
    w = [
      { x: f + x, y },
      { x: f, y: 0 },
      { x: f + x, y: -y },
      { x: -f, y: -y },
      { x: -f, y },
    ],
    { cssStyles: S } = e,
    T = u.A.svg(l),
    B = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((B.roughness = 0), (B.fillStyle = "solid"));
  const v = k(w),
    _ = T.path(v, B),
    A = l.insert(() => _, ":first-child");
  return (
    A.attr("class", "basic label-container outer-path"),
    S && "handDrawn" !== e.look && A.selectAll("path").attr("style", S),
    o && "handDrawn" !== e.look && A.selectAll("path").attr("style", o),
    A.attr("transform", `translate(${-x / 2},0)`),
    c.attr(
      "transform",
      `translate(${-x / 2 - h.width / 2 - (h.x - (h.left ?? 0))}, ${-h.height / 2 - (h.y - (h.top ?? 0))})`,
    ),
    C(e, A),
    (e.intersect = function (t) {
      return I.polygon(e, w, t);
    }),
    l
  );
}
async function we(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  let n;
  (e.labelStyle = r),
    (n = e.cssClasses ? "node " + e.cssClasses : "node default");
  const a = t
      .insert("g")
      .attr("class", n)
      .attr("id", e.domId || e.id),
    s = a.insert("g"),
    c = a.insert("g").attr("class", "label").attr("style", o),
    p = e.description,
    g = e.label,
    f = await q(c, g, e.labelStyle, !0, !0);
  let y = { width: 0, height: 0 };
  if ((0, l.E)((0, l.D7)())) {
    const t = f.children[0],
      e = (0, d.Ltv)(f);
    (y = t.getBoundingClientRect()),
      e.attr("width", y.width),
      e.attr("height", y.height);
  }
  h.R.info("Text 2", p);
  const m = p || [],
    x = f.getBBox(),
    b = await q(
      c,
      Array.isArray(m) ? m.join("<br/>") : m,
      e.labelStyle,
      !0,
      !0,
    ),
    k = b.children[0],
    w = (0, d.Ltv)(b);
  (y = k.getBoundingClientRect()),
    w.attr("width", y.width),
    w.attr("height", y.height);
  const S = (e.padding || 0) / 2;
  (0, d.Ltv)(b).attr(
    "transform",
    "translate( " +
      (y.width > x.width ? 0 : (x.width - y.width) / 2) +
      ", " +
      (x.height + S + 5) +
      ")",
  ),
    (0, d.Ltv)(f).attr(
      "transform",
      "translate( " +
        (y.width < x.width ? 0 : -(x.width - y.width) / 2) +
        ", 0)",
    ),
    (y = c.node().getBBox()),
    c.attr(
      "transform",
      "translate(" + -y.width / 2 + ", " + (-y.height / 2 - S + 3) + ")",
    );
  const T = y.width + (e.padding || 0),
    B = y.height + (e.padding || 0),
    v = -y.width / 2 - S,
    _ = -y.height / 2 - S;
  let A, F;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(a),
      r = (0, i.Fr)(e, {}),
      o = t.path(K(v, _, T, B, e.rx || 0), r),
      n = t.line(
        -y.width / 2 - S,
        -y.height / 2 - S + x.height + S,
        y.width / 2 + S,
        -y.height / 2 - S + x.height + S,
        r,
      );
    (F = a.insert(
      () => (h.R.debug("Rough node insert CXC", o), n),
      ":first-child",
    )),
      (A = a.insert(
        () => (h.R.debug("Rough node insert CXC", o), o),
        ":first-child",
      ));
  } else
    (A = s.insert("rect", ":first-child")),
      (F = s.insert("line")),
      A.attr("class", "outer title-state")
        .attr("style", o)
        .attr("x", -y.width / 2 - S)
        .attr("y", -y.height / 2 - S)
        .attr("width", y.width + (e.padding || 0))
        .attr("height", y.height + (e.padding || 0)),
      F.attr("class", "divider")
        .attr("x1", -y.width / 2 - S)
        .attr("x2", y.width / 2 + S)
        .attr("y1", -y.height / 2 - S + x.height + S)
        .attr("y2", -y.height / 2 - S + x.height + S);
  return (
    C(e, A),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    a
  );
}
async function Se(t, e, { config: { themeVariables: r } }) {
  const i = r?.radius ?? 5;
  return bt(t, e, {
    rx: i,
    ry: i,
    classes: "",
    labelPaddingX: 1 * (e?.padding ?? 0),
    labelPaddingY: 1 * (e?.padding ?? 0),
  });
}
async function Te(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = "neo" === e.look ? 16 : (e.padding ?? 0),
    a = "neo" === e.look ? 12 : (e.padding ?? 0),
    { shapeSvg: l, bbox: h, label: c } = await m(t, e, b(e)),
    d = (e?.width ?? h.width) + 2 * n + ("neo" === e.look ? 8 : 16),
    p = (e?.height ?? h.height) + 2 * a,
    g = d - 8,
    f = p,
    y = 8 - d / 2,
    x = -p / 2,
    { cssStyles: k } = e,
    w = u.A.svg(l),
    S = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((S.roughness = 0), (S.fillStyle = "solid"));
  const T = [
      { x: y, y: x },
      { x: y + g, y: x },
      { x: y + g, y: x + f },
      { x: y - 8, y: x + f },
      { x: y - 8, y: x },
      { x: y, y: x },
      { x: y, y: x + f },
    ],
    B = w.polygon(
      T.map((t) => [t.x, t.y]),
      S,
    ),
    v = l.insert(() => B, ":first-child");
  return (
    v
      .attr("class", "basic label-container outer-path")
      .attr("style", (0, s.KL)(k)),
    o && "handDrawn" !== e.look && v.selectAll("path").attr("style", o),
    k && "handDrawn" !== e.look && v.selectAll("path").attr("style", o),
    c.attr(
      "transform",
      `translate(${4 - h.width / 2 - (h.x - (h.left ?? 0))}, ${-h.height / 2 - (h.y - (h.top ?? 0))})`,
    ),
    C(e, v),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    l
  );
}
async function Be(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n;
  (e.width || e.height) &&
    ((e.width = Math.max((e?.width ?? 0) - 2 * a, 10)),
    (e.height = Math.max((e?.height ?? 0) / 1.5 - 2 * s, 10)));
  const { shapeSvg: l, bbox: h, label: c } = await m(t, e, b(e)),
    d = (e?.width ? e?.width : h.width) + 2 * a,
    p = (1.5 * ((e?.height ? e?.height : h.height) + 2 * s)) / 1.5,
    g = -d / 2,
    f = -p / 2,
    { cssStyles: y } = e,
    x = u.A.svg(l),
    w = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((w.roughness = 0), (w.fillStyle = "solid"));
  const S = [
      { x: g, y: f },
      { x: g, y: f + p },
      { x: g + d, y: f + p },
      { x: g + d, y: f - p / 2 },
    ],
    T = k(S),
    B = x.path(T, w),
    v = l.insert(() => B, ":first-child");
  return (
    v.attr("class", "basic label-container  outer-path"),
    y && "handDrawn" !== e.look && v.selectChildren("path").attr("style", y),
    o && "handDrawn" !== e.look && v.selectChildren("path").attr("style", o),
    v.attr("transform", `translate(0, ${p / 4})`),
    c.attr(
      "transform",
      `translate(${-d / 2 + (e.padding ?? 0) - (h.x - (h.left ?? 0))}, ${-p / 4 + (e.padding ?? 0) - (h.y - (h.top ?? 0))})`,
    ),
    C(e, v),
    (e.intersect = function (t) {
      return I.polygon(e, S, t);
    }),
    l
  );
}
async function ve(t, e) {
  const r = e.padding ?? 0,
    i = "neo" === e.look ? 16 : 2 * r,
    o = "neo" === e.look ? 12 : r,
    n = {
      rx: 0,
      ry: 0,
      classes: "",
      labelPaddingX: e.labelPaddingX ?? i,
      labelPaddingY: o,
    },
    s = await bt(t, e, n);
  if (void 0 !== e.colorIndex) {
    const { theme: t, themeVariables: r } = (0, l.D7)();
    (0, a.XE)(s, e.colorIndex, t, r.borderColorArray);
  }
  return s;
}
(0, c.K)(be, "question"),
  (0, c.K)(ke, "rect_left_inv_arrow"),
  (0, c.K)(we, "rectWithTitle"),
  (0, c.K)(Se, "roundedRect"),
  (0, c.K)(Te, "shadedProcess"),
  (0, c.K)(Be, "slopedRect"),
  (0, c.K)(ve, "squareRect");
var _e = (0, c.K)((t, e, r) => {
  const i = t.height + r,
    o = i * Math.cos(Math.PI / 98),
    n = Math.sqrt(Math.max(0, o ** 2 - t.height ** 2));
  return {
    w: Math.max(t.width + i / 4 + e, 1.5 * i + (i - o), t.width + e + i - n),
    h: i,
  };
}, "stadiumDimensions");
async function Ae(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 40 : n,
    s = "neo" === e.look ? 24 : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    { w: c, h: d } = _e(h, a, s),
    p = d / 2,
    { cssStyles: g } = e,
    f = u.A.svg(l),
    y = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((y.roughness = 0), (y.fillStyle = "solid"));
  const x = [
      { x: -c / 2 + p, y: -d / 2 },
      { x: c / 2 - p, y: -d / 2 },
      ...S(-c / 2 + p, 0, p, 50, 90, 270),
      { x: c / 2 - p, y: d / 2 },
      ...S(c / 2 - p, 0, p, 50, 270, 450),
    ],
    w = k(x),
    T = f.path(w, y),
    B = l.insert(() => T, ":first-child");
  return (
    B.attr("class", "basic label-container outer-path"),
    g && "handDrawn" !== e.look && B.selectChildren("path").attr("style", g),
    o && "handDrawn" !== e.look && B.selectChildren("path").attr("style", o),
    C(e, B),
    (e.intersect = function (t) {
      return I.polygon(e, x, t);
    }),
    l
  );
}
async function Fe(t, e) {
  return bt(t, e, {
    rx: "neo" === e.look ? 3 : 5,
    ry: "neo" === e.look ? 3 : 5,
    classes: "flowchart-node",
  });
}
function Le(t, e, { config: { themeVariables: r } }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o;
  const { cssStyles: a } = e,
    { lineColor: s, stateBorder: l, nodeBorder: h, nodeShadow: c } = r;
  (e.width || e.height) &&
    ((e.width ?? 0) < 14 && (e.width = 14),
    (e.height ?? 0) < 14 && (e.height = 14)),
    e.width || (e.width = 14),
    e.height || (e.height = 14);
  const d = t
      .insert("g")
      .attr("class", "node default")
      .attr("id", e.domId ?? e.id),
    p = u.A.svg(d),
    g = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((g.roughness = 0), (g.fillStyle = "solid"));
  const f = p.circle(0, 0, e.width, { ...g, stroke: s, strokeWidth: 2 }),
    y = l ?? h,
    m = (5 * (e.width ?? 0)) / 14,
    x = p.circle(0, 0, m, {
      ...g,
      fill: y,
      stroke: y,
      strokeWidth: 2,
      fillStyle: "solid",
    }),
    b = d.insert(() => f, ":first-child");
  if (
    (b.insert(() => x),
    "handDrawn" !== e.look && b.attr("class", "outer-path"),
    a && b.selectAll("path").attr("style", a),
    n && b.selectAll("path").attr("style", n),
    e.width < 25 && c && "handDrawn" !== e.look)
  ) {
    const e = t.node()?.ownerSVGElement?.id ?? "",
      r = e ? `${e}-drop-shadow-small` : "drop-shadow-small";
    b.attr("style", `filter:url(#${r})`);
  }
  return (
    C(e, b),
    (e.intersect = function (t) {
      return I.circle(e, (e.width ?? 0) / 2, t);
    }),
    d
  );
}
function Me(t, e, { config: { themeVariables: r } }) {
  const { lineColor: o, nodeShadow: n } = r;
  (e.width || e.height) &&
    ((e.width ?? 0) < 14 && (e.width = 14),
    (e.height ?? 0) < 14 && (e.height = 14)),
    e.width || (e.width = 14),
    e.height || (e.height = 14);
  const a = t
    .insert("g")
    .attr("class", "node default")
    .attr("id", e.domId || e.id);
  let s;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(a).circle(0, 0, e.width, (0, i.ue)(o));
    (s = a.insert(() => t)),
      s
        .attr("class", "state-start")
        .attr("r", (e.width ?? 7) / 2)
        .attr("width", e.width ?? 14)
        .attr("height", e.height ?? 14);
  } else
    (s = a.insert("circle", ":first-child")),
      s
        .attr("class", "state-start")
        .attr("r", (e.width ?? 7) / 2)
        .attr("width", e.width ?? 14)
        .attr("height", e.height ?? 14);
  if (e.width < 25 && n && "handDrawn" !== e.look) {
    const e = t.node()?.ownerSVGElement?.id ?? "",
      r = e ? `${e}-drop-shadow-small` : "drop-shadow-small";
    s.attr("style", `filter:url(#${r})`);
  }
  return (
    C(e, s),
    (e.intersect = function (t) {
      return I.circle(e, (e.width ?? 7) / 2, t);
    }),
    a
  );
}
async function $e(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e?.padding ?? 8,
    a = "neo" === e.look ? 28 : n,
    l = "neo" === e.look ? 12 : n,
    { shapeSvg: h, bbox: c } = await m(t, e, b(e)),
    d = Math.max(c.width + 16 + a, e.width ?? 0),
    p = Math.max(c.height + l, e.height ?? 0),
    g = d - 16,
    f = p,
    y = -d / 2,
    x = -p / 2,
    k = [
      { x: 0, y: 0 },
      { x: g, y: 0 },
      { x: g, y: -f },
      { x: 0, y: -f },
      { x: 0, y: 0 },
      { x: -8, y: 0 },
      { x: g + 8, y: 0 },
      { x: g + 8, y: -f },
      { x: -8, y: -f },
      { x: -8, y: 0 },
    ];
  if ("handDrawn" === e.look) {
    const t = u.A.svg(h),
      r = (0, i.Fr)(e, {}),
      o = t.rectangle(y, x, g + 16, f, r),
      n = t.line(y + 8, x, y + 8, x + f, r),
      a = t.line(y + 8 + g, x, y + 8 + g, x + f, r);
    h.insert(() => n, ":first-child"), h.insert(() => a, ":first-child");
    const l = h.insert(() => o, ":first-child"),
      { cssStyles: c } = e;
    l.attr("class", "basic label-container").attr("style", (0, s.KL)(c)),
      C(e, l);
  } else {
    const t = U(h, g, f, k);
    o && t.attr("style", o), C(e, t);
  }
  return (
    (e.intersect = function (t) {
      return I.polygon(e, k, t);
    }),
    h
  );
}
async function Ee(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n;
  (e.width || e.height) &&
    ((e.height = Math.max((e?.height ?? 0) - 2 * s, 10)),
    (e.width = Math.max(
      (e?.width ?? 0) - 2 * a - 0.2 * (e.height + 2 * s),
      10,
    )));
  const { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = (e?.height ? e?.height : h.height) + 2 * s,
    d = 0.2 * c,
    p = 0.2 * c,
    g = (e?.width ? e?.width : h.width) + 2 * a + d - d,
    f = c,
    y = -g / 2,
    x = -f / 2,
    { cssStyles: w } = e,
    S = u.A.svg(l),
    T = (0, i.Fr)(e, {}),
    B = [
      { x: y - d / 2, y: x },
      { x: y + g + d / 2, y: x },
      { x: y + g + d / 2, y: x + f },
      { x: y - d / 2, y: x + f },
    ],
    v = [
      { x: y + g - d / 2, y: x + f },
      { x: y + g + d / 2, y: x + f },
      { x: y + g + d / 2, y: x + f - p },
    ];
  "handDrawn" !== e.look && ((T.roughness = 0), (T.fillStyle = "solid"));
  const _ = k(B),
    A = S.path(_, T),
    F = k(v),
    L = S.path(F, { ...T, fillStyle: "solid" }),
    M = l.insert(() => L, ":first-child");
  return (
    M.insert(() => A, ":first-child"),
    M.attr("class", "basic label-container outer-path"),
    w && "handDrawn" !== e.look && M.selectAll("path").attr("style", w),
    o && "handDrawn" !== e.look && M.selectAll("path").attr("style", o),
    C(e, M),
    (e.intersect = function (t) {
      return I.polygon(e, B, t);
    }),
    l
  );
}
async function Oe(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await m(t, e, b(e)),
    l = Math.max(a.width + 2 * (e.padding ?? 0), e?.width ?? 0),
    h = Math.max(a.height + 2 * (e.padding ?? 0), e?.height ?? 0),
    c = h / 8,
    d = 0.2 * l,
    p = 0.2 * h,
    g = h + c,
    { cssStyles: f } = e,
    y = u.A.svg(n),
    x = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((x.roughness = 0), (x.fillStyle = "solid"));
  const S = [
      { x: -l / 2 - (l / 2) * 0.1, y: g / 2 },
      ...w(-l / 2 - (l / 2) * 0.1, g / 2, l / 2 + (l / 2) * 0.1, g / 2, c, 0.8),
      { x: l / 2 + (l / 2) * 0.1, y: -g / 2 },
      { x: -l / 2 - (l / 2) * 0.1, y: -g / 2 },
    ],
    T = -l / 2 + (l / 2) * 0.1,
    B = -g / 2 - 0.4 * p,
    v = [
      { x: T + l - d, y: 1.3 * (B + h) },
      { x: T + l, y: B + h - p },
      { x: T + l, y: 0.9 * (B + h) },
      ...w(T + l, 1.25 * (B + h), T + l - d, 1.3 * (B + h), 0.02 * -h, 0.5),
    ],
    _ = k(S),
    A = y.path(_, x),
    F = k(v),
    L = y.path(F, { ...x, fillStyle: "solid" }),
    M = n.insert(() => L, ":first-child");
  return (
    M.insert(() => A, ":first-child"),
    M.attr("class", "basic label-container outer-path"),
    f && "handDrawn" !== e.look && M.selectAll("path").attr("style", f),
    o && "handDrawn" !== e.look && M.selectAll("path").attr("style", o),
    M.attr("transform", `translate(0,${-c / 2})`),
    s.attr(
      "transform",
      `translate(${-l / 2 + (e.padding ?? 0) - (a.x - (a.left ?? 0))},${-h / 2 + (e.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`,
    ),
    C(e, M),
    (e.intersect = function (t) {
      return I.polygon(e, S, t);
    }),
    n
  );
}
async function De(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await m(t, e, b(e)),
    s = Math.max(a.width + (e.padding ?? 0), e?.width || 0),
    l = Math.max(a.height + (e.padding ?? 0), e?.height || 0),
    h = -s / 2,
    c = -l / 2,
    d = n.insert("rect", ":first-child");
  return (
    d
      .attr("class", "text")
      .attr("style", o)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("x", h)
      .attr("y", c)
      .attr("width", s)
      .attr("height", l),
    C(e, d),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    n
  );
}
(0, c.K)(Ae, "stadium"),
  (0, c.K)(Fe, "state"),
  (0, c.K)(Le, "stateEnd"),
  (0, c.K)(Me, "stateStart"),
  (0, c.K)($e, "subroutine"),
  (0, c.K)(Ee, "taggedRect"),
  (0, c.K)(Oe, "taggedWaveEdgedRectangle"),
  (0, c.K)(De, "text");
var Ie = (0, c.K)(
    (t, e, r, i, o, n) =>
      `M${t},${e}\n    a${o},${n} 0,0,1 0,${-i}\n    l${r},0\n    a${o},${n} 0,0,1 0,${i}\n    M${r},${-i}\n    a${o},${n} 0,0,0 0,${i}\n    l${-r},0`,
    "createCylinderPathD",
  ),
  Ke = (0, c.K)(
    (t, e, r, i, o, n) =>
      [
        `M${t},${e}`,
        `M${t + r},${e}`,
        `a${o},${n} 0,0,0 0,${-i}`,
        `l${-r},0`,
        `a${o},${n} 0,0,0 0,${i}`,
        `l${r},0`,
      ].join(" "),
    "createOuterCylinderPathD",
  ),
  qe = (0, c.K)(
    (t, e, r, i, o, n) =>
      [`M${t + r / 2},${-i / 2}`, `a${o},${n} 0,0,0 0,${i}`].join(" "),
    "createInnerCylinderPathD",
  );
async function Pe(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 12 : n / 2,
    l = e.height ?? 0;
  if (
    (e.height && ((e.height = e.height - a), e.height < 5 && (e.height = 5)),
    e.width)
  ) {
    const t = l / 2 / (2.5 + l / 50);
    (e.width = e.width - a - 3 * t), e.width < 10 && (e.width = 10);
  }
  const { shapeSvg: h, bbox: c, label: d } = await m(t, e, b(e)),
    p = Math.max(e.height ?? 0, c.height) + a,
    g = p / 2,
    f = g / (2.5 + p / 50),
    y = Math.max(e.width ?? 0, c.width) + f + a,
    { cssStyles: x } = e;
  let k;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(h),
      r = Ke(0, 0, y, p, f, g),
      o = qe(0, 0, y, p, f, g),
      n = t.path(r, (0, i.Fr)(e, {})),
      a = t.path(o, (0, i.Fr)(e, { fill: "none" }));
    (k = h.insert(() => a, ":first-child")),
      (k = h.insert(() => n, ":first-child")),
      k.attr("class", "basic label-container"),
      x && k.attr("style", x);
  } else {
    const t = Ie(0, 0, y, p, f, g);
    (k = h
      .insert("path", ":first-child")
      .attr("d", t)
      .attr("class", "basic label-container")
      .attr("style", (0, s.KL)(x))
      .attr("style", o)),
      k.attr("class", "basic label-container outer-path"),
      x && k.selectAll("path").attr("style", x),
      o && k.selectAll("path").attr("style", o);
  }
  return (
    k.attr("label-offset-x", f),
    k.attr("transform", `translate(${-y / 2}, ${p / 2} )`),
    d.attr(
      "transform",
      `translate(${-c.width / 2 - f - (c.x - (c.left ?? 0))}, ${-c.height / 2 - (c.y - (c.top ?? 0))})`,
    ),
    C(e, k),
    (e.intersect = function (t) {
      const r = I.rect(e, t),
        i = r.y - (e.y ?? 0);
      if (
        0 != g &&
        (Math.abs(i) < (e.height ?? 0) / 2 ||
          (Math.abs(i) == (e.height ?? 0) / 2 &&
            Math.abs(r.x - (e.x ?? 0)) > (e.width ?? 0) / 2 - f))
      ) {
        let o = f * f * (1 - (i * i) / (g * g));
        0 != o && (o = Math.sqrt(Math.abs(o))),
          (o = f - o),
          t.x - (e.x ?? 0) > 0 && (o = -o),
          (r.x += o);
      }
      return r;
    }),
    h
  );
}
async function Re(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = (e.look, n),
    s = "neo" === e.look ? 2 * n : n,
    { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = Math.max(h.height + a, e.height ?? 0),
    d = Math.max(h.width + s, (e.width ?? 0) - c),
    p = [
      { x: (-3 * c) / 6, y: 0 },
      { x: d + (3 * c) / 6, y: 0 },
      { x: d, y: -c },
      { x: 0, y: -c },
    ];
  let g;
  const { cssStyles: f } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(l),
      r = (0, i.Fr)(e, {}),
      o = k(p),
      n = t.path(o, r);
    (g = l
      .insert(() => n, ":first-child")
      .attr("transform", `translate(${-d / 2}, ${c / 2})`)),
      f && g.attr("style", f);
  } else g = U(l, d, c, p);
  return (
    o && g.attr("style", o),
    (e.width = d),
    (e.height = c),
    C(e, g),
    (e.intersect = function (t) {
      return I.polygon(e, p, t);
    }),
    l
  );
}
async function ze(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n;
  (e.width || e.height) &&
    ((e.height = (e.height ?? 0) - 2 * s),
    e.height < 5 && (e.height = 5),
    (e.width = (e.width ?? 0) - 2 * a),
    e.width < 15 && (e.width = 15));
  const { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = (e?.width ? e?.width : h.width) + 2 * a,
    d = (e?.height ? e?.height : h.height) + 2 * s,
    { cssStyles: p } = e,
    g = u.A.svg(l),
    f = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((f.roughness = 0), (f.fillStyle = "solid"));
  const y = [
      { x: (-c / 2) * 0.8, y: -d / 2 },
      { x: (c / 2) * 0.8, y: -d / 2 },
      { x: c / 2, y: (-d / 2) * 0.6 },
      { x: c / 2, y: d / 2 },
      { x: -c / 2, y: d / 2 },
      { x: -c / 2, y: (-d / 2) * 0.6 },
    ],
    x = k(y),
    w = g.path(x, f),
    S = l.insert(() => w, ":first-child");
  return (
    S.attr("class", "basic label-container outer-path"),
    p && "handDrawn" !== e.look && S.selectChildren("path").attr("style", p),
    o && "handDrawn" !== e.look && S.selectChildren("path").attr("style", o),
    C(e, S),
    (e.intersect = function (t) {
      return I.polygon(e, y, t);
    }),
    l
  );
}
async function Ne(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 2 * n : n;
  (e.width || e.height) &&
    ((e.width = ((e?.width ?? 0) - a) / 2),
    e.width < 10 && (e.width = 10),
    (e.height = e?.height ?? 0),
    e.height < 10 && (e.height = 10));
  const { shapeSvg: s, bbox: c, label: d } = await m(t, e, b(e)),
    p = (0, l._3)((0, l.D7)().flowchart?.htmlLabels),
    g = (e?.width ? e?.width : c.width) + a,
    f = e?.height ? e?.height : g + c.height,
    y = [
      { x: 0, y: 0 },
      { x: f, y: 0 },
      { x: f / 2, y: -f },
    ],
    { cssStyles: x } = e,
    w = u.A.svg(s),
    S = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((S.roughness = 0), (S.fillStyle = "solid"));
  const T = k(y),
    B = w.path(T, S),
    v = s
      .insert(() => B, ":first-child")
      .attr("transform", `translate(${-f / 2}, ${f / 2})`)
      .attr("class", "outer-path");
  return (
    x && "handDrawn" !== e.look && v.selectChildren("path").attr("style", x),
    o && "handDrawn" !== e.look && v.selectChildren("path").attr("style", o),
    (e.width = g),
    (e.height = f),
    C(e, v),
    d.attr(
      "transform",
      `translate(${-c.width / 2 - (c.x - (c.left ?? 0))}, ${f / 2 - (c.height + (e.padding ?? 0) / (p ? 2 : 1) - (c.y - (c.top ?? 0)))})`,
    ),
    (e.intersect = function (t) {
      return h.R.info("Triangle intersect", e, y, t), I.polygon(e, y, t);
    }),
    s
  );
}
async function We(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 12 : n;
  let l = !0;
  (e.width || e.height) &&
    ((l = !1),
    (e.width = (e?.width ?? 0) - 2 * a),
    e.width < 10 && (e.width = 10),
    (e.height = (e?.height ?? 0) - 2 * s),
    e.height < 10 && (e.height = 10));
  const { shapeSvg: h, bbox: c, label: d } = await m(t, e, b(e)),
    p = (e?.width ? e?.width : c.width) + 2 * (a ?? 0),
    g = (e?.height ? e?.height : c.height) + 2 * (s ?? 0),
    f = "neo" === e.look ? g / 4 : g / 8,
    y = g + (l ? f : -f),
    { cssStyles: x } = e,
    S = 14 - p,
    T = S > 0 ? S / 2 : 0,
    B = u.A.svg(h),
    v = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((v.roughness = 0), (v.fillStyle = "solid"));
  const _ = [
      { x: -p / 2 - T, y: y / 2 },
      ...w(-p / 2 - T, y / 2, p / 2 + T, y / 2, f, 0.8),
      { x: p / 2 + T, y: -y / 2 },
      { x: -p / 2 - T, y: -y / 2 },
    ],
    A = k(_),
    F = B.path(A, v),
    L = h.insert(() => F, ":first-child");
  return (
    L.attr("class", "basic label-container outer-path"),
    x && "handDrawn" !== e.look && L.selectAll("path").attr("style", x),
    o && "handDrawn" !== e.look && L.selectAll("path").attr("style", o),
    L.attr("transform", `translate(0,${-f / 2})`),
    d.attr(
      "transform",
      `translate(${-p / 2 + (e.padding ?? 0) - (c.x - (c.left ?? 0))},${-g / 2 + (e.padding ?? 0) - f - (c.y - (c.top ?? 0))})`,
    ),
    C(e, L),
    (e.intersect = function (t) {
      return I.polygon(e, _, t);
    }),
    h
  );
}
async function je(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e.padding ?? 0,
    a = "neo" === e.look ? 16 : n,
    s = "neo" === e.look ? 20 : n;
  if (e.width || e.height) {
    (e.width = e?.width ?? 0),
      e.width < 20 && (e.width = 20),
      (e.height = e?.height ?? 0),
      e.height < 10 && (e.height = 10);
    const t = Math.min(0.2 * e.height, e.height / 4);
    (e.height = Math.ceil(e.height - s - t * (20 / 9))),
      (e.width = e.width - 2 * a);
  }
  const { shapeSvg: l, bbox: h } = await m(t, e, b(e)),
    c = (e?.width ? e?.width : h.width) + 2 * a,
    d = (e?.height ? e?.height : h.height) + s,
    p = d / 8,
    g = d + 2 * p,
    { cssStyles: f } = e,
    y = u.A.svg(l),
    x = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((x.roughness = 0), (x.fillStyle = "solid"));
  const S = [
      { x: -c / 2, y: g / 2 },
      ...w(-c / 2, g / 2, c / 2, g / 2, p, 1),
      { x: c / 2, y: -g / 2 },
      ...w(c / 2, -g / 2, -c / 2, -g / 2, p, -1),
    ],
    T = k(S),
    B = y.path(T, x),
    v = l.insert(() => B, ":first-child");
  return (
    v.attr("class", "basic label-container"),
    f && "handDrawn" !== e.look && v.selectAll("path").attr("style", f),
    o && "handDrawn" !== e.look && v.selectAll("path").attr("style", o),
    C(e, v),
    (e.intersect = function (t) {
      return I.polygon(e, S, t);
    }),
    l
  );
}
(0, c.K)(Pe, "tiltedCylinder"),
  (0, c.K)(Re, "trapezoid"),
  (0, c.K)(ze, "trapezoidalPentagon"),
  (0, c.K)(Ne, "triangle"),
  (0, c.K)(We, "waveEdgedRectangle"),
  (0, c.K)(je, "waveRectangle");
var He = 10;
async function Ue(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = "neo" === e.look ? 16 : (e.padding ?? 0),
    a = "neo" === e.look ? 12 : (e.padding ?? 0);
  (e.width || e.height) &&
    ((e.width = Math.max((e?.width ?? 0) - 2 * n - He, 10)),
    (e.height = Math.max((e?.height ?? 0) - 2 * a - He, 10)));
  const { shapeSvg: s, bbox: l, label: h } = await m(t, e, b(e)),
    c = (e?.width ? e?.width : l.width) + 2 * n + He,
    d = (e?.height ? e?.height : l.height) + 2 * a + He,
    p = c - He,
    g = d - He,
    f = -p / 2,
    y = -g / 2,
    { cssStyles: x } = e,
    k = u.A.svg(s),
    w = (0, i.Fr)(e, {}),
    S = [
      { x: f - He, y: y - He },
      { x: f - He, y: y + g },
      { x: f + p, y: y + g },
      { x: f + p, y: y - He },
    ],
    T = `M${f - He},${y - He} L${f + p},${y - He} L${f + p},${y + g} L${f - He},${y + g} L${f - He},${y - He}\n                M${f - He},${y} L${f + p},${y}\n                M${f},${y - He} L${f},${y + g}`;
  "handDrawn" !== e.look && ((w.roughness = 0), (w.fillStyle = "solid"));
  const B = k.path(T, w),
    v = s.insert(() => B, ":first-child");
  return (
    v.attr("transform", "translate(5, 5)"),
    v.attr("class", "basic label-container outer-path"),
    x && "handDrawn" !== e.look && v.selectAll("path").attr("style", x),
    o && "handDrawn" !== e.look && v.selectAll("path").attr("style", o),
    h.attr(
      "transform",
      `translate(${-l.width / 2 + 5 - (l.x - (l.left ?? 0))}, ${-l.height / 2 + 5 - (l.y - (l.top ?? 0))})`,
    ),
    C(e, v),
    (e.intersect = function (t) {
      return I.polygon(e, S, t);
    }),
    s
  );
}
(0, c.K)(Ue, "windowPane");
var Ye = new Set(["redux-color", "redux-dark-color"]),
  Ge = new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
async function Xe(t, e) {
  const r = e;
  r.alias && (e.label = r.alias);
  const { theme: o, themeVariables: n } = (0, l.zj)(),
    { rowEven: a, rowOdd: h, nodeBorder: c, borderColorArray: p } = n;
  if ("handDrawn" === e.look) {
    const { themeVariables: r } = (0, l.zj)(),
      { background: i } = r,
      o = {
        ...e,
        id: e.id + "-background",
        domId: (e.domId || e.id) + "-background",
        look: "default",
        cssStyles: ["stroke: none", `fill: ${i}`],
      };
    await Xe(t, o);
  }
  const g = (0, l.zj)();
  e.useHtmlLabels = g.htmlLabels;
  let f = g.er?.diagramPadding ?? 10,
    y = g.er?.entityPadding ?? 6;
  const { cssStyles: m } = e,
    { labelStyles: x, nodeStyles: k } = (0, i.GX)(e);
  if (0 === r.attributes.length && e.label) {
    const i = {
      rx: 0,
      ry: 0,
      labelPaddingX: f,
      labelPaddingY: 1.5 * f,
      classes: "",
    };
    (0, s.Un)(e.label, g) + 2 * i.labelPaddingX < g.er.minEntityWidth &&
      (e.width = g.er.minEntityWidth);
    const n = await bt(t, e, i);
    if (null != o && Ye.has(o)) {
      const t = r.colorIndex ?? 0;
      n.attr("data-color-id", "color-" + (t % p.length));
    }
    if (!(0, l._3)(g.htmlLabels)) {
      const t = n.select("text"),
        e = t.node()?.getBBox();
      t.attr("transform", `translate(${-e.width / 2}, 0)`);
    }
    return n;
  }
  g.htmlLabels || ((f *= 1.25), (y *= 1.25));
  let w = b(e);
  w || (w = "node default");
  const S = t
      .insert("g")
      .attr("class", w)
      .attr("id", e.domId || e.id),
    T = await Ve(S, e.label ?? "", g, 0, 0, ["name"], x);
  T.height += y;
  let B = 0;
  const v = [],
    _ = [];
  let A = 0,
    F = 0,
    L = 0,
    M = 0,
    $ = !0,
    E = !0;
  for (const t of r.attributes) {
    const e = await Ve(S, t.type, g, 0, B, ["attribute-type"], x);
    A = Math.max(A, e.width + f);
    const r = await Ve(S, t.name, g, 0, B, ["attribute-name"], x);
    F = Math.max(F, r.width + f);
    const i = await Ve(S, t.keys.join(), g, 0, B, ["attribute-keys"], x);
    L = Math.max(L, i.width + f);
    const o = await Ve(S, t.comment, g, 0, B, ["attribute-comment"], x);
    M = Math.max(M, o.width + f);
    const n = Math.max(e.height, r.height, i.height, o.height) + y;
    _.push({ yOffset: B, rowHeight: n }), (B += n);
  }
  let O = 4;
  L <= f && (($ = !1), (L = 0), O--), M <= f && ((E = !1), (M = 0), O--);
  const D = S.node().getBBox();
  if (T.width + 2 * f - (A + F + L + M) > 0) {
    const t = T.width + 2 * f - (A + F + L + M);
    (A += t / O), (F += t / O), L > 0 && (L += t / O), M > 0 && (M += t / O);
  }
  const K = A + F + L + M,
    q = u.A.svg(S),
    P = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((P.roughness = 0), (P.fillStyle = "solid"));
  let R = 0;
  _.length > 0 && (R = _.reduce((t, e) => t + (e?.rowHeight ?? 0), 0));
  const z = Math.max(D.width + 2 * f, e?.width || 0, K),
    N = Math.max((R ?? 0) + T.height, e?.height || 0),
    W = -z / 2,
    j = -N / 2;
  if (
    (S.selectAll("g:not(:first-child)").each((t, e, r) => {
      const i = (0, d.Ltv)(r[e]),
        o = i.attr("transform");
      let n = 0,
        a = 0;
      if (o) {
        const t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(o);
        t &&
          ((n = parseFloat(t[1])),
          (a = parseFloat(t[2])),
          i.attr("class").includes("attribute-name")
            ? (n += A)
            : i.attr("class").includes("attribute-keys")
              ? (n += A + F)
              : i.attr("class").includes("attribute-comment") &&
                (n += A + F + L));
      }
      i.attr(
        "transform",
        `translate(${W + f / 2 + n}, ${a + j + T.height + y / 2})`,
      );
    }),
    S.select(".name").attr(
      "transform",
      "translate(" + -T.width / 2 + ", " + (j + y / 2) + ")",
    ),
    null != o && Ye.has(o))
  ) {
    const t = r.colorIndex ?? 0;
    S.attr("data-color-id", "color-" + (t % p.length));
  }
  const H = q.rectangle(W, j, z, N, P),
    U = S.insert(() => H, ":first-child")
      .attr("class", "outer-path")
      .attr("style", m.join(""));
  v.push(0);
  for (const [t, e] of _.entries()) {
    const r = (t + 1) % 2 == 0 && 0 !== e.yOffset,
      i = q.rectangle(W, T.height + j + e?.yOffset, z, e?.rowHeight, {
        ...P,
        fill: r ? a : h,
        stroke: c,
      });
    S.insert(() => i, "g.label")
      .attr("style", m.join(""))
      .attr("class", "row-rect-" + (r ? "even" : "odd"));
  }
  const Y = 1e-4;
  let G = Ze(W, T.height + j, z + W, T.height + j, Y),
    X = q.polygon(
      G.map((t) => [t.x, t.y]),
      P,
    );
  if (
    (S.insert(() => X).attr("class", "divider"),
    (G = Ze(A + W, T.height + j, A + W, N + j, Y)),
    (X = q.polygon(
      G.map((t) => [t.x, t.y]),
      P,
    )),
    S.insert(() => X).attr("class", "divider"),
    $)
  ) {
    const t = A + F + W;
    (G = Ze(t, T.height + j, t, N + j, Y)),
      (X = q.polygon(
        G.map((t) => [t.x, t.y]),
        P,
      )),
      S.insert(() => X).attr("class", "divider");
  }
  if (E) {
    const t = A + F + L + W;
    (G = Ze(t, T.height + j, t, N + j, Y)),
      (X = q.polygon(
        G.map((t) => [t.x, t.y]),
        P,
      )),
      S.insert(() => X).attr("class", "divider");
  }
  for (const t of v) {
    const e = T.height + j + t;
    (G = Ze(W, e, z + W, e, Y)),
      (X = q.polygon(
        G.map((t) => [t.x, t.y]),
        P,
      )),
      S.insert(() => X).attr("class", "divider");
  }
  if ((C(e, U), k && "handDrawn" !== e.look))
    if (null != o && Ge.has(o)) S.selectAll("path").attr("style", k);
    else {
      const t = k.split(";"),
        e = t
          ?.filter((t) => t.includes("stroke"))
          ?.map((t) => `${t}`)
          .join("; ");
      S.selectAll("path").attr("style", e ?? ""),
        S.selectAll(".row-rect-even path").attr("style", k);
    }
  return (
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    S
  );
}
async function Ve(t, e, r, i = 0, n = 0, a = [], h = "") {
  const c = t
    .insert("g")
    .attr("class", `label ${a.join(" ")}`)
    .attr("transform", `translate(${i}, ${n})`)
    .attr("style", h);
  e !== (0, l.QO)(e) &&
    (e = (e = (0, l.QO)(e)).replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const u = c.node().appendChild(
    await (0, o.GZ)(
      c,
      e,
      {
        width: (0, s.Un)(e, r) + 100,
        style: h,
        useHtmlLabels: r.htmlLabels,
      },
      r,
    ),
  );
  if (e.includes("&lt;") || e.includes("&gt;")) {
    let t = u.children[0];
    for (
      t.textContent = t.textContent
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");
      t.childNodes[0];

    )
      (t = t.childNodes[0]),
        (t.textContent = t.textContent
          .replaceAll("&lt;", "<")
          .replaceAll("&gt;", ">"));
  }
  let p = u.getBBox();
  if ((0, l._3)(r.htmlLabels)) {
    const t = u.children[0];
    t.style.textAlign = "start";
    const e = (0, d.Ltv)(u);
    (p = t.getBoundingClientRect()),
      e.attr("width", p.width),
      e.attr("height", p.height);
  }
  return p;
}
function Ze(t, e, r, i, o) {
  return t === r
    ? [
        { x: t - o / 2, y: e },
        { x: t + o / 2, y: e },
        { x: r + o / 2, y: i },
        { x: r - o / 2, y: i },
      ]
    : [
        { x: t, y: e - o / 2 },
        { x: t, y: e + o / 2 },
        { x: r, y: i + o / 2 },
        { x: r, y: i - o / 2 },
      ];
}
async function Qe(t, e, r, i, o = r.class.padding ?? 12) {
  const n = i ? 0 : 3,
    a = t
      .insert("g")
      .attr("class", b(e))
      .attr("id", e.domId || e.id);
  let s = null,
    l = null,
    h = null,
    c = null,
    d = 0,
    u = 0,
    p = 0;
  if (
    ((s = a.insert("g").attr("class", "annotation-group text")),
    e.annotations.length > 0)
  ) {
    const t = e.annotations[0];
    await Je(s, { text: `«${t}»` }, 0), (d = s.node().getBBox().height);
  }
  (l = a.insert("g").attr("class", "label-group text")),
    await Je(l, e, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  (u = g.height), (h = a.insert("g").attr("class", "members-group text"));
  let f = 0;
  for (const t of e.members)
    f += (await Je(h, t, f, [t.parseClassifier()])) + n;
  (p = h.node().getBBox().height),
    p <= 0 && (p = o / 2),
    (c = a.insert("g").attr("class", "methods-group text"));
  let y = 0;
  for (const t of e.methods)
    y += (await Je(c, t, y, [t.parseClassifier()])) + n;
  let m = a.node().getBBox();
  if (null !== s) {
    const t = s.node().getBBox();
    s.attr("transform", `translate(${-t.width / 2})`);
  }
  return (
    l.attr("transform", `translate(${-g.width / 2}, ${d})`),
    (m = a.node().getBBox()),
    h.attr("transform", `translate(0, ${d + u + 2 * o})`),
    (m = a.node().getBBox()),
    c.attr("transform", `translate(0, ${d + u + (p ? p + 4 * o : 2 * o)})`),
    (m = a.node().getBBox()),
    { shapeSvg: a, bbox: m }
  );
}
async function Je(t, e, r, i = []) {
  const n = t.insert("g").attr("class", "label").attr("style", i.join("; ")),
    a = (0, l.zj)();
  let h =
      "useHtmlLabels" in e ? e.useHtmlLabels : ((0, l._3)(a.htmlLabels) ?? !0),
    c = "";
  (c = "text" in e ? e.text : e.label),
    !h && c.startsWith("\\") && (c = c.substring(1)),
    (0, l.Wi)(c) && (h = !0);
  const u = await (0, o.GZ)(
    n,
    (0, l.oB)((0, s.Sm)(c)),
    {
      width: (0, s.Un)(c, a) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: h,
    },
    a,
  );
  let g,
    f = 1;
  if (h) {
    const t = u.children[0],
      e = (0, d.Ltv)(u);
    (f = t.innerHTML.split("<br>").length),
      t.innerHTML.includes("</math>") &&
        (f += t.innerHTML.split("<mrow>").length - 1),
      await p(t),
      (g = t.getBoundingClientRect()),
      e.attr("width", g.width),
      e.attr("height", g.height);
  } else {
    i.includes("font-weight: bolder") &&
      (0, d.Ltv)(u).selectAll("tspan").attr("font-weight", ""),
      (f = u.children.length);
    const t = u.children[0];
    ("" === u.textContent || u.textContent.includes("&gt")) &&
      ((t.textContent =
        c[0] +
        c.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim()),
      " " === c[1] &&
        (t.textContent = t.textContent[0] + " " + t.textContent.substring(1))),
      "undefined" === t.textContent && (t.textContent = ""),
      (g = u.getBBox());
  }
  return (
    n.attr("transform", "translate(0," + (-g.height / (2 * f) + r) + ")"),
    g.height
  );
}
async function tr(t, e) {
  const r = (0, l.D7)(),
    { theme: o, themeVariables: n } = r,
    { useGradient: s, borderColorArray: h } = n,
    c = r.class.padding ?? 12,
    p = c,
    g = e.useHtmlLabels ?? (0, l._3)(r.htmlLabels) ?? !0,
    f = e;
  (f.annotations = f.annotations ?? []),
    (f.members = f.members ?? []),
    (f.methods = f.methods ?? []);
  const { shapeSvg: y, bbox: m } = await Qe(t, e, r, g, p);
  (0, a.XE)(y, e.colorIndex, o, h);
  const { labelStyles: x, nodeStyles: b } = (0, i.GX)(e);
  (e.labelStyle = x), (e.cssStyles = f.styles || "");
  const k = f.styles?.join(";") || b || "";
  e.cssStyles || (e.cssStyles = k.replaceAll("!important", "").split(";"));
  const w =
      0 === f.members.length &&
      0 === f.methods.length &&
      !r.class?.hideEmptyMembersBox,
    S = u.A.svg(y),
    T = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((T.roughness = 0), (T.fillStyle = "solid"));
  const B = Math.max(e.width ?? 0, m.width);
  let v = Math.max(e.height ?? 0, m.height);
  const _ = (e.height ?? 0) > m.height;
  0 === f.members.length && 0 === f.methods.length
    ? (v += p)
    : f.members.length > 0 && 0 === f.methods.length && (v += 2 * p);
  const A = -B / 2,
    F = -v / 2;
  let L = w ? 2 * c : 0 === f.members.length && 0 === f.methods.length ? -c : 0;
  _ && (L = 2 * c);
  const M = S.rectangle(
      A - c,
      F -
        c -
        (w ? c : 0 === f.members.length && 0 === f.methods.length ? -c / 2 : 0),
      B + 2 * c,
      v + 2 * c + L,
      T,
    ),
    $ = y.insert(() => M, ":first-child");
  $.attr("class", "basic label-container outer-path");
  const E = $.node().getBBox(),
    O =
      y.select(".annotation-group").node().getBBox().height - (w ? c / 2 : 0) ||
      0,
    D = y.select(".label-group").node().getBBox().height - (w ? c / 2 : 0) || 0,
    K =
      y.select(".members-group").node().getBBox().height - (w ? c / 2 : 0) || 0,
    q =
      (O +
        D +
        F +
        c -
        (F -
          c -
          (w
            ? c
            : 0 === f.members.length && 0 === f.methods.length
              ? -c / 2
              : 0))) /
      2;
  if (
    (y.selectAll(".text").each((t, e, i) => {
      const o = (0, d.Ltv)(i[e]),
        n = o.attr("transform");
      let a = 0;
      if (n) {
        const t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(n);
        t && (a = parseFloat(t[2]));
      }
      let s =
        a +
        F +
        c -
        (w ? c : 0 === f.members.length && 0 === f.methods.length ? -c / 2 : 0);
      if (o.attr("class").includes("methods-group")) {
        const t = Math.max(K, p / 2);
        s = _
          ? Math.max(q, O + D + t + F + 2 * p + c) + 2 * p
          : O + D + t + F + 4 * p + c;
      }
      0 === f.members.length &&
        0 === f.methods.length &&
        r.class?.hideEmptyMembersBox &&
        (s = f.annotations.length > 0 ? a - p : a),
        g || (s -= 4);
      let l = A;
      (o.attr("class").includes("label-group") ||
        o.attr("class").includes("annotation-group")) &&
        ((l = -o.node()?.getBBox().width / 2 || 0),
        y.selectAll("text").each(function (t, e, r) {
          "middle" === window.getComputedStyle(r[e]).textAnchor && (l = 0);
        })),
        o.attr("transform", `translate(${l}, ${s})`);
    }),
    f.members.length > 0 || f.methods.length > 0 || w)
  ) {
    const t = O + D + F + c,
      r = S.line(E.x, t, E.x + E.width, t + 0.001, T);
    y.insert(() => r)
      .attr("class", "divider" + ("neo" !== e.look || s ? "" : " neo-line"))
      .attr("style", k);
  }
  if (w || f.members.length > 0 || f.methods.length > 0) {
    const t = O + D + K + F + 2 * p + c,
      r = S.line(
        E.x,
        _ ? Math.max(q, t) : t,
        E.x + E.width,
        (_ ? Math.max(q, t) : t) + 0.001,
        T,
      );
    y.insert(() => r)
      .attr("class", "divider" + ("neo" !== e.look || s ? "" : " neo-line"))
      .attr("style", k);
  }
  if (
    ("handDrawn" !== f.look && y.selectAll("path").attr("style", k),
    $.select(":nth-child(2)").attr("style", k),
    y.selectAll(".divider").select("path").attr("style", k),
    e.labelStyle
      ? y.selectAll("span").attr("style", e.labelStyle)
      : y.selectAll("span").attr("style", k),
    !g)
  ) {
    const t = RegExp(/color\s*:\s*([^;]*)/),
      e = t.exec(k);
    if (e) {
      const t = e[0].replace("color", "fill");
      y.selectAll("tspan").attr("style", t);
    } else if (x) {
      const e = t.exec(x);
      if (e) {
        const t = e[0].replace("color", "fill");
        y.selectAll("tspan").attr("style", t);
      }
    }
  }
  return (
    C(e, $),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    y
  );
}
async function er(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const n = e,
    a = e,
    s = "verifyMethod" in e,
    h = b(e),
    c = (0, l.D7)(),
    { themeVariables: p } = c,
    { borderColorArray: g, requirementEdgeLabelBackground: f } = p,
    y = "elk" === c.layout ? "start" : "center",
    m = t
      .insert("g")
      .attr("class", h)
      .attr("id", e.domId ?? e.id);
  let x;
  x = s
    ? await rr(m, `&lt;&lt;${n.type}&gt;&gt;`, 0, e.labelStyle)
    : await rr(m, "&lt;&lt;Element&gt;&gt;", 0, e.labelStyle);
  let k = x;
  const w = await rr(m, n.name, k, e.labelStyle + "; font-weight: bold;");
  (k += w + 20),
    s
      ? ((k += await rr(
          m,
          n.requirementId ? `ID: ${n.requirementId}` : "",
          k,
          e.labelStyle,
          y,
        )),
        (k += await rr(m, n.text ? `Text: ${n.text}` : "", k, e.labelStyle, y)),
        (k += await rr(m, n.risk ? `Risk: ${n.risk}` : "", k, e.labelStyle, y)),
        await rr(
          m,
          n.verifyMethod ? `Verification: ${n.verifyMethod}` : "",
          k,
          e.labelStyle,
          y,
        ))
      : ((k += await rr(
          m,
          a.type ? `Type: ${a.type}` : "",
          k,
          e.labelStyle,
          y,
        )),
        await rr(
          m,
          a.docRef ? `Doc Ref: ${a.docRef}` : "",
          k,
          e.labelStyle,
          y,
        ));
  const S = (m.node()?.getBBox().width ?? 200) + 20,
    T = (m.node()?.getBBox().height ?? 200) + 20,
    B = -S / 2,
    v = -T / 2,
    _ = u.A.svg(m),
    A = (0, i.Fr)(e, {});
  "handDrawn" !== e.look && ((A.roughness = 0), (A.fillStyle = "solid"));
  const F = _.rectangle(B, v, S, T, A),
    L = m.insert(() => F, ":first-child");
  if (
    (L.attr("class", "basic label-container outer-path").attr("style", o),
    g?.length)
  ) {
    const t = e.colorIndex ?? 0;
    m.attr("data-color-id", "color-" + (t % g.length));
  }
  if (
    (m.selectAll(".label").each((t, e, r) => {
      const i = (0, d.Ltv)(r[e]),
        o = i.attr("transform");
      let n = 0,
        a = 0;
      if (o) {
        const t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(o);
        t && ((n = parseFloat(t[1])), (a = parseFloat(t[2])));
      }
      const s = a - T / 2;
      let l = B + 10;
      (0 !== e && 1 !== e) || (l = n),
        i.attr("transform", `translate(${l}, ${s + 20})`);
    }),
    k > x + w + 20)
  ) {
    const t = v + x + w + 20;
    let r;
    if ("neo" === e.look) {
      const e = 0.001,
        i = [
          [B, t],
          [B + S, t],
          [B + S, t + e],
          [B, t + e],
        ];
      r = _.polygon(i, A);
    } else r = _.line(B, t, B + S, t, A);
    m.insert(() => r).attr("class", "divider");
  }
  return (
    C(e, L),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    o &&
      "handDrawn" !== e.look &&
      (f || g?.length) &&
      m.selectAll("path").attr("style", o),
    m
  );
}
async function rr(t, e, r, i = "", n = "center") {
  if ("" === e) return 0;
  const a = t.insert("g").attr("class", "label").attr("style", i),
    h = (0, l.D7)(),
    c = h.htmlLabels ?? !0,
    u = await (0, o.GZ)(
      a,
      (0, l.oB)((0, s.Sm)(e)),
      {
        width: (0, s.Un)(e, h) + 50,
        classes: "markdown-node-label",
        useHtmlLabels: c,
        style: i,
      },
      h,
    );
  let p;
  if (c) {
    const t = u.children[0],
      e = (0, d.Ltv)(u);
    "start" === n && (0, d.Ltv)(t).style("text-align", "left"),
      (p = t.getBoundingClientRect()),
      e.attr("width", p.width),
      e.attr("height", p.height);
  } else {
    const t = u.children[0];
    for (const e of t.children) i && e.setAttribute("style", i);
    if ("start" === n) {
      t.setAttribute("text-anchor", "start");
      for (const e of t.children) e.setAttribute("text-anchor", "start");
    }
    (p = u.getBBox()), (p.height += 6);
  }
  return (
    a.attr("transform", `translate(${-p.width / 2},${-p.height / 2 + r})`),
    p.height
  );
}
(0, c.K)(Xe, "erBox"),
  (0, c.K)(Ve, "addText"),
  (0, c.K)(Ze, "lineToPolygon"),
  (0, c.K)(Qe, "textHelper"),
  (0, c.K)(Je, "addText"),
  (0, c.K)(tr, "classBox"),
  (0, c.K)(er, "requirementBox"),
  (0, c.K)(rr, "addText");
var ir = (0, c.K)((t) => {
  switch (t) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function or(t, e, { config: r }) {
  const { labelStyles: o, nodeStyles: n } = (0, i.GX)(e);
  e.labelStyle = o || "";
  const a = e.width;
  e.width = (e.width ?? 200) - 10;
  const { shapeSvg: s, bbox: l, label: h } = await m(t, e, b(e)),
    c = e.padding || 10;
  let d,
    p = "";
  "ticket" in e &&
    e.ticket &&
    r?.kanban?.ticketBaseUrl &&
    ((p = r?.kanban?.ticketBaseUrl.replace("#TICKET#", e.ticket)),
    (d = s
      .insert("svg:a", ":first-child")
      .attr("class", "kanban-ticket-link")
      .attr("xlink:href", p)
      .attr("target", "_blank")));
  const g = {
    useHtmlLabels: e.useHtmlLabels,
    labelStyle: e.labelStyle || "",
    width: e.width,
    img: e.img,
    padding: e.padding || 8,
    centerLabel: !1,
  };
  let f, y;
  ({ label: f, bbox: y } = d
    ? await x(d, ("ticket" in e && e.ticket) || "", g)
    : await x(s, ("ticket" in e && e.ticket) || "", g));
  const { label: k, bbox: w } = await x(
    s,
    ("assigned" in e && e.assigned) || "",
    g,
  );
  e.width = a;
  const S = e?.width || 0,
    T = Math.max(y.height, w.height) / 2,
    B = Math.max(l.height + 20, e?.height || 0) + T,
    v = -S / 2,
    _ = -B / 2;
  let A;
  h.attr(
    "transform",
    "translate(" + (c - S / 2) + ", " + (-T - l.height / 2) + ")",
  ),
    f.attr(
      "transform",
      "translate(" + (c - S / 2) + ", " + (-T + l.height / 2) + ")",
    ),
    k.attr(
      "transform",
      "translate(" +
        (c + S / 2 - w.width - 20) +
        ", " +
        (-T + l.height / 2) +
        ")",
    );
  const { rx: F, ry: L } = e,
    { cssStyles: M } = e;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(s),
      r = (0, i.Fr)(e, {}),
      o =
        F || L ? t.path(K(v, _, S, B, F || 0), r) : t.rectangle(v, _, S, B, r);
    (A = s.insert(() => o, ":first-child")),
      A.attr("class", "basic label-container").attr("style", M || null);
  } else {
    (A = s.insert("rect", ":first-child")),
      A.attr("class", "basic label-container __APA__")
        .attr("style", n)
        .attr("rx", F ?? 5)
        .attr("ry", L ?? 5)
        .attr("x", v)
        .attr("y", _)
        .attr("width", S)
        .attr("height", B);
    const t = "priority" in e && e.priority;
    if (t) {
      const e = s.append("line"),
        r = v + 2,
        i = _ + Math.floor((F ?? 0) / 2),
        o = _ + B - Math.floor((F ?? 0) / 2);
      e.attr("x1", r)
        .attr("y1", i)
        .attr("x2", r)
        .attr("y2", o)
        .attr("stroke-width", "4")
        .attr("stroke", ir(t));
    }
  }
  return (
    C(e, A),
    (e.height = B),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    s
  );
}
async function nr(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const {
      shapeSvg: n,
      bbox: a,
      halfPadding: l,
      label: c,
    } = await m(t, e, b(e)),
    d = a.width + 10 * l,
    p = a.height + 8 * l,
    g = 0.15 * d,
    { cssStyles: f } = e,
    y = a.width + 20,
    x = a.height + 20,
    k = Math.max(d, y),
    w = Math.max(p, x);
  let S;
  c.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
  const T = `M0 0 \n    a${g},${g} 1 0,0 ${0.25 * k},${-1 * w * 0.1}\n    a${g},${g} 1 0,0 ${0.25 * k},0\n    a${g},${g} 1 0,0 ${0.25 * k},0\n    a${g},${g} 1 0,0 ${0.25 * k},${0.1 * w}\n\n    a${g},${g} 1 0,0 ${0.15 * k},${0.33 * w}\n    a${0.8 * g},${0.8 * g} 1 0,0 0,${0.34 * w}\n    a${g},${g} 1 0,0 ${-1 * k * 0.15},${0.33 * w}\n\n    a${g},${g} 1 0,0 ${-1 * k * 0.25},${0.15 * w}\n    a${g},${g} 1 0,0 ${-1 * k * 0.25},0\n    a${g},${g} 1 0,0 ${-1 * k * 0.25},0\n    a${g},${g} 1 0,0 ${-1 * k * 0.25},${-1 * w * 0.15}\n\n    a${g},${g} 1 0,0 ${-1 * k * 0.1},${-1 * w * 0.33}\n    a${0.8 * g},${0.8 * g} 1 0,0 0,${-1 * w * 0.34}\n    a${g},${g} 1 0,0 ${0.1 * k},${-1 * w * 0.33}\n  H0 V0 Z`;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(n),
      r = (0, i.Fr)(e, {}),
      o = t.path(T, r);
    (S = n.insert(() => o, ":first-child")),
      S.attr("class", "basic label-container").attr("style", (0, s.KL)(f));
  } else
    S = n
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", o)
      .attr("d", T);
  return (
    S.attr("transform", `translate(${-k / 2}, ${-w / 2})`),
    C(e, S),
    (e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    }),
    (e.intersect = function (t) {
      return h.R.info("Bang intersect", e, t), I.rect(e, t);
    }),
    n
  );
}
async function ar(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const {
      shapeSvg: n,
      bbox: a,
      halfPadding: l,
      label: c,
    } = await m(t, e, b(e)),
    d = a.width + 2 * l,
    p = a.height + 2 * l,
    g = 0.15 * d,
    f = 0.25 * d,
    y = 0.35 * d,
    x = 0.2 * d,
    { cssStyles: k } = e;
  let w;
  const S = `M0 0 \n    a${g},${g} 0 0,1 ${0.25 * d},${-1 * d * 0.1}\n    a${y},${y} 1 0,1 ${0.4 * d},${-1 * d * 0.1}\n    a${f},${f} 1 0,1 ${0.35 * d},${0.2 * d}\n\n    a${g},${g} 1 0,1 ${0.15 * d},${0.35 * p}\n    a${x},${x} 1 0,1 ${-1 * d * 0.15},${0.65 * p}\n\n    a${f},${g} 1 0,1 ${-1 * d * 0.25},${0.15 * d}\n    a${y},${y} 1 0,1 ${-1 * d * 0.5},0\n    a${g},${g} 1 0,1 ${-1 * d * 0.25},${-1 * d * 0.15}\n\n    a${g},${g} 1 0,1 ${-1 * d * 0.1},${-1 * p * 0.35}\n    a${x},${x} 1 0,1 ${0.1 * d},${-1 * p * 0.65}\n  H0 V0 Z`;
  if ("handDrawn" === e.look) {
    const t = u.A.svg(n),
      r = (0, i.Fr)(e, {}),
      o = t.path(S, r);
    (w = n.insert(() => o, ":first-child")),
      w.attr("class", "basic label-container").attr("style", (0, s.KL)(k));
  } else
    w = n
      .insert("path", ":first-child")
      .attr("class", "basic label-container")
      .attr("style", o)
      .attr("d", S);
  return (
    c.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`),
    w.attr("transform", `translate(${-d / 2}, ${-p / 2})`),
    C(e, w),
    (e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    }),
    (e.intersect = function (t) {
      return h.R.info("Cloud intersect", e, t), I.rect(e, t);
    }),
    n
  );
}
async function sr(t, e) {
  const { labelStyles: r, nodeStyles: o } = (0, i.GX)(e);
  e.labelStyle = r;
  const {
      shapeSvg: n,
      bbox: a,
      halfPadding: s,
      label: l,
    } = await m(t, e, b(e)),
    h = a.width + 8 * s,
    c = a.height + 2 * s,
    d =
      "neo" === e.look
        ? `\n    M${-h / 2} ${c / 2 - 5}\n    v${10 - c}\n    q0,-5 5,-5\n    h${h - 10}\n    q5,0 5,5\n    v${c - 5}\n    H${-h / 2}\n    Z\n  `
        : `\n    M${-h / 2} ${c / 2 - 5}\n    v${10 - c}\n    q0,-5 5,-5\n    h${h - 10}\n    q5,0 5,5\n    v${c - 10}\n    q0,5 -5,5\n    h${-(h - 10)}\n    q-5,0 -5,-5\n    Z\n  `;
  if (!e.domId)
    throw new Error(
      `defaultMindmapNode: node "${e.id}" is missing a domId — was render.ts domId prefixing skipped?`,
    );
  const u = n
    .append("path")
    .attr("id", e.domId)
    .attr("class", "node-bkg node-" + e.type)
    .attr("style", o)
    .attr("d", d);
  return (
    n
      .append("line")
      .attr("class", "node-line-")
      .attr("x1", -h / 2)
      .attr("y1", c / 2)
      .attr("x2", h / 2)
      .attr("y2", c / 2),
    l.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`),
    n.append(() => l.node()),
    C(e, u),
    (e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    }),
    (e.intersect = function (t) {
      return I.rect(e, t);
    }),
    n
  );
}
async function lr(t, e) {
  return it(t, e, { padding: e.padding ?? 0 });
}
(0, c.K)(or, "kanbanItem"),
  (0, c.K)(nr, "bang"),
  (0, c.K)(ar, "cloud"),
  (0, c.K)(sr, "defaultMindmapNode"),
  (0, c.K)(lr, "mindmapCircle");
var hr = [
    {
      semanticName: "Process",
      name: "Rectangle",
      shortName: "rect",
      description: "Standard process shape",
      aliases: ["proc", "process", "rectangle"],
      internalAliases: ["squareRect"],
      handler: ve,
    },
    {
      semanticName: "Event",
      name: "Rounded Rectangle",
      shortName: "rounded",
      description: "Represents an event",
      aliases: ["event"],
      internalAliases: ["roundedRect"],
      handler: Se,
    },
    {
      semanticName: "Terminal Point",
      name: "Stadium",
      shortName: "stadium",
      description: "Terminal point",
      aliases: ["terminal", "pill"],
      handler: Ae,
    },
    {
      semanticName: "Subprocess",
      name: "Framed Rectangle",
      shortName: "fr-rect",
      description: "Subprocess",
      aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
      handler: $e,
    },
    {
      semanticName: "Database",
      name: "Cylinder",
      shortName: "cyl",
      description: "Database storage",
      aliases: ["db", "database", "cylinder"],
      handler: Ct,
    },
    {
      semanticName: "Data Store",
      name: "Data Store",
      shortName: "datastore",
      description: "Data flow diagram data store",
      aliases: ["data-store"],
      handler: kt,
    },
    {
      semanticName: "Folder",
      name: "Folder",
      shortName: "folder",
      description: "Folder or directory",
      aliases: ["directory"],
      handler: _t,
    },
    {
      semanticName: "Bucket",
      name: "Bucket",
      shortName: "bucket",
      description: "Object storage bucket",
      handler: W,
    },
    {
      semanticName: "Console",
      name: "Console (terminal window)",
      shortName: "console",
      description: "Terminal or console window",
      handler: nt,
    },
    {
      semanticName: "Browser",
      name: "Browser",
      shortName: "browser",
      description: "Browser window",
      handler: tt,
    },
    {
      semanticName: "Person",
      name: "Person",
      shortName: "person",
      description: "Person (circular head above a rounded body)",
      handler: ft,
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: ["circ"],
      handler: it,
    },
    {
      semanticName: "Bang",
      name: "Bang",
      shortName: "bang",
      description: "Bang",
      aliases: ["bang"],
      handler: nr,
    },
    {
      semanticName: "Cloud",
      name: "Cloud",
      shortName: "cloud",
      description: "cloud",
      aliases: ["cloud"],
      handler: ar,
    },
    {
      semanticName: "Decision",
      name: "Diamond",
      shortName: "diam",
      description: "Decision-making step",
      aliases: ["decision", "diamond", "question"],
      handler: be,
    },
    {
      semanticName: "Prepare Conditional",
      name: "Hexagon",
      shortName: "hex",
      description: "Preparation or condition step",
      aliases: ["hexagon", "prepare"],
      handler: Mt,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Right",
      shortName: "lean-r",
      description: "Represents input or output",
      aliases: ["lean-right", "in-out"],
      internalAliases: ["lean_right"],
      handler: zt,
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Left",
      shortName: "lean-l",
      description: "Represents output or input",
      aliases: ["lean-left", "out-in"],
      internalAliases: ["lean_left"],
      handler: Rt,
    },
    {
      semanticName: "Priority Action",
      name: "Trapezoid Base Bottom",
      shortName: "trap-b",
      description: "Priority action",
      aliases: ["priority", "trapezoid-bottom", "trapezoid"],
      handler: Re,
    },
    {
      semanticName: "Manual Operation",
      name: "Trapezoid Base Top",
      shortName: "trap-t",
      description: "Represents a manual task",
      aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
      internalAliases: ["inv_trapezoid"],
      handler: qt,
    },
    {
      semanticName: "Stop",
      name: "Double Circle",
      shortName: "dbl-circ",
      description: "Represents a stop point",
      aliases: ["double-circle"],
      internalAliases: ["doublecircle"],
      handler: St,
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: De,
    },
    {
      semanticName: "Card",
      name: "Notched Rectangle",
      shortName: "notch-rect",
      description: "Represents a card",
      aliases: ["card", "notched-rectangle"],
      handler: et,
    },
    {
      semanticName: "Lined/Shaded Process",
      name: "Lined Rectangle",
      shortName: "lin-rect",
      description: "Lined process shape",
      aliases: [
        "lined-rectangle",
        "lined-process",
        "lin-proc",
        "shaded-process",
      ],
      handler: Te,
    },
    {
      semanticName: "Start",
      name: "Small Circle",
      shortName: "sm-circ",
      description: "Small starting point",
      aliases: ["start", "small-circle"],
      internalAliases: ["stateStart"],
      handler: Me,
    },
    {
      semanticName: "Stop",
      name: "Framed Circle",
      shortName: "fr-circ",
      description: "Stop point",
      aliases: ["stop", "framed-circle"],
      internalAliases: ["stateEnd"],
      handler: Le,
    },
    {
      semanticName: "Fork/Join",
      name: "Filled Rectangle",
      shortName: "fork",
      description: "Fork or join in process flow",
      aliases: ["join"],
      internalAliases: ["forkJoin"],
      handler: At,
    },
    {
      semanticName: "Collate",
      name: "Hourglass",
      shortName: "hourglass",
      description: "Represents a collate operation",
      aliases: ["hourglass", "collate"],
      handler: $t,
    },
    {
      semanticName: "Comment",
      name: "Curly Brace",
      shortName: "brace",
      description: "Adds a comment",
      aliases: ["comment", "brace-l"],
      handler: ht,
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: dt,
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: pt,
    },
    {
      semanticName: "Com Link",
      name: "Lightning Bolt",
      shortName: "bolt",
      description: "Communication link",
      aliases: ["com-link", "lightning-bolt"],
      handler: Nt,
    },
    {
      semanticName: "Document",
      name: "Document",
      shortName: "doc",
      description: "Represents a document",
      aliases: ["doc", "document"],
      handler: We,
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: ["half-rounded-rectangle"],
      handler: Ft,
    },
    {
      semanticName: "Direct Access Storage",
      name: "Horizontal Cylinder",
      shortName: "h-cyl",
      description: "Direct access storage",
      aliases: ["das", "horizontal-cylinder"],
      handler: Pe,
    },
    {
      semanticName: "Disk Storage",
      name: "Lined Cylinder",
      shortName: "lin-cyl",
      description: "Disk storage",
      aliases: ["disk", "lined-cylinder"],
      handler: Ut,
    },
    {
      semanticName: "Display",
      name: "Curved Trapezoid",
      shortName: "curv-trap",
      description: "Represents a display",
      aliases: ["curved-trapezoid", "display"],
      handler: gt,
    },
    {
      semanticName: "Divided Process",
      name: "Divided Rectangle",
      shortName: "div-rect",
      description: "Divided process shape",
      aliases: ["div-proc", "divided-rectangle", "divided-process"],
      handler: wt,
    },
    {
      semanticName: "Extract",
      name: "Triangle",
      shortName: "tri",
      description: "Extraction process",
      aliases: ["extract", "triangle"],
      handler: Ne,
    },
    {
      semanticName: "Internal Storage",
      name: "Window Pane",
      shortName: "win-pane",
      description: "Internal storage",
      aliases: ["internal-storage", "window-pane"],
      handler: Ue,
    },
    {
      semanticName: "Junction",
      name: "Filled Circle",
      shortName: "f-circ",
      description: "Junction point",
      aliases: ["junction", "filled-circle"],
      handler: Bt,
    },
    {
      semanticName: "Loop Limit",
      name: "Trapezoidal Pentagon",
      shortName: "notch-pent",
      description: "Loop limit step",
      aliases: ["loop-limit", "notched-pentagon"],
      handler: ze,
    },
    {
      semanticName: "Manual File",
      name: "Flipped Triangle",
      shortName: "flip-tri",
      description: "Manual file operation",
      aliases: ["manual-file", "flipped-triangle"],
      handler: vt,
    },
    {
      semanticName: "Manual Input",
      name: "Sloped Rectangle",
      shortName: "sl-rect",
      description: "Manual input step",
      aliases: ["manual-input", "sloped-rectangle"],
      handler: Be,
    },
    {
      semanticName: "Multi-Document",
      name: "Stacked Document",
      shortName: "docs",
      description: "Multiple documents",
      aliases: ["documents", "st-doc", "stacked-document"],
      handler: me,
    },
    {
      semanticName: "Multi-Process",
      name: "Stacked Rectangle",
      shortName: "st-rect",
      description: "Multiple processes",
      aliases: ["procs", "processes", "stacked-rectangle"],
      handler: ye,
    },
    {
      semanticName: "Stored Data",
      name: "Bow Tie Rectangle",
      shortName: "bow-rect",
      description: "Stored data",
      aliases: ["stored-data", "bow-tie-rectangle"],
      handler: N,
    },
    {
      semanticName: "Summary",
      name: "Crossed Circle",
      shortName: "cross-circ",
      description: "Summary",
      aliases: ["summary", "crossed-circle"],
      handler: st,
    },
    {
      semanticName: "Tagged Document",
      name: "Tagged Document",
      shortName: "tag-doc",
      description: "Tagged document",
      aliases: ["tag-doc", "tagged-document"],
      handler: Oe,
    },
    {
      semanticName: "Tagged Process",
      name: "Tagged Rectangle",
      shortName: "tag-rect",
      description: "Tagged process",
      aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
      handler: Ee,
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: ["paper-tape"],
      handler: je,
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: ["rect_left_inv_arrow"],
      handler: ke,
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: ["lined-document"],
      handler: Yt,
    },
  ],
  cr = (0, c.K)(() => {
    const t = {
        state: Fe,
        choice: rt,
        note: xe,
        composite: ot,
        rectWithTitle: we,
        labelRect: Pt,
        block_arrow: J,
        collapsedGroup: H,
        iconSquare: It,
        iconCircle: Ot,
        icon: Et,
        iconRounded: Dt,
        imageSquare: Kt,
        anchor: P,
        kanbanItem: or,
        mindmapCircle: lr,
        defaultMindmapNode: sr,
        classBox: tr,
        erBox: Xe,
        requirementBox: er,
        usecaseActor: oe,
        usecaseActorHollow: le,
        usecaseActorAwesome: ae,
        usecaseActorIcon: ce,
        usecaseBusiness: ue,
        usecaseEllipse: Tt,
        usecaseJsonTable: fe,
      },
      e = [
        ...Object.entries(t),
        ...hr.flatMap((t) =>
          [
            t.shortName,
            ...("aliases" in t ? t.aliases : []),
            ...("internalAliases" in t ? t.internalAliases : []),
          ].map((e) => [e, t.handler]),
        ),
      ];
    return Object.fromEntries(e);
  }, "generateShapeMap")();
function dr(t) {
  return t in cr;
}
(0, c.K)(dr, "isValidShape");
