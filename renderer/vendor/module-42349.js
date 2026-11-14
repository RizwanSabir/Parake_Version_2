// vendor/module-42349.js — webpack module 42349
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, { IU: () => _, U: () => v, qV: () => T });
var i = r(99624 /* vendor/module-99624 */),
  o = r(16450 /* vendor/module-16450 */),
  n = r(83035 /* vendor/module-83035 */),
  a = r(27741 /* vendor/module-27741 */),
  s = r(33870 /* vendor/module-33870 */),
  l = r(8679 /* vendor/module-8679 */),
  h = r(27166 /* vendor/module-27166 */),
  c = r(79456 /* vendor/module-79456 */),
  d = r(27197 /* vendor/module-27197 */),
  u = r(7083 /* vendor/module-7083 */),
  p = (0, c.K)(async (t, e) => {
    const r = (0, l.D7)(),
      { theme: i, themeVariables: c, handDrawnSeed: p } = r,
      { clusterBkg: g, clusterBorder: f, borderColorArray: y } = c,
      m = f,
      {
        labelStyles: x,
        nodeStyles: C,
        borderStyles: b,
        backgroundStyles: k,
      } = (0, n.GX)(e),
      w = t
        .insert("g")
        .attr("class", "cluster swimlane " + (e.cssClasses || ""))
        .attr("id", e.domId ?? e.id)
        .attr("data-id", e.id)
        .attr("data-et", "cluster")
        .attr("data-look", e.look);
    (0, s.XE)(w, e.colorIndex, i, y);
    const S = (0, l._3)(r.flowchart.htmlLabels),
      T = "LR" === e.direction,
      B = w.insert("g").attr("class", "cluster-label swimlane-label"),
      v = await (0, a.GZ)(B, e.label, {
        style: e.labelStyle,
        useHtmlLabels: S,
        isNode: !0,
        width: e.width,
      });
    let _ = v.getBBox();
    if (S) {
      const t = v.children[0],
        e = (0, d.Ltv)(v);
      (_ = t.getBoundingClientRect()),
        e.attr("width", _.width),
        e.attr("height", _.height);
    }
    const A = e.padding ?? 0,
      F = e.width <= _.width + A ? _.width + A : e.width;
    e.width <= _.width + A ? (e.diff = (F - e.width) / 2 - A) : (e.diff = -A);
    const L = e.height,
      M = e.y - L / 2,
      $ = e.y + L / 2,
      E = e.x - F / 2,
      O = void 0 !== e.swimlaneContentTop ? e.swimlaneContentTop : M + L / 3,
      D = T ? 4 : 0,
      I = _.height + 2 * D;
    let K, q;
    if (T) {
      const t = Math.max(I, _.height + 2 * D),
        r = E + t,
        i = Math.max(0, F - t);
      if ("handDrawn" === e.look) {
        const o = u.A.svg(w),
          a = (0, n.Fr)(e, {
            roughness: 0.7,
            fill: g,
            stroke: m,
            seed: p,
          }),
          s = (0, n.Fr)(e, {
            roughness: 0.7,
            fill: "none",
            stroke: m,
            seed: p,
          }),
          l = o.rectangle(E, M, t, L, a);
        K = w.insert(() => l, ":first-child").attr("class", "swimlane-title");
        const h = o.rectangle(r, M, i, L, s);
        (q = w.insert(() => h, ":first-child").attr("class", "swimlane-body")),
          K.select("path:nth-child(2)").attr("style", b.join(";")),
          K.select("path").attr("style", k.join(";").replace("fill", "stroke"));
      } else
        (K = w.insert("rect", ":first-child")),
          (q = w.insert("rect", ":first-child")),
          K.attr("class", "swimlane-title")
            .attr("style", C)
            .attr("x", E)
            .attr("y", M)
            .attr("width", t)
            .attr("height", L)
            .attr("fill", g)
            .attr("stroke", m),
          q
            .attr("class", "swimlane-body")
            .attr("style", C)
            .attr("x", r)
            .attr("y", M)
            .attr("width", i)
            .attr("height", L)
            .attr("fill", "none")
            .attr("stroke", m);
      const o = E + t / 2,
        a = e.y;
      B.attr(
        "transform",
        `translate(${o}, ${a}) rotate(-90) translate(${-_.width / 2}, ${-_.height / 2})`,
      );
    } else {
      const t = Math.max(0, O - M),
        r = Math.min(I, t),
        i = M + r,
        o = Math.max(0, $ - i),
        a = e.x - F / 2;
      if ("handDrawn" === e.look) {
        const t = u.A.svg(w),
          s = (0, n.Fr)(e, {
            roughness: 0.7,
            fill: g,
            stroke: m,
            fillWeight: 3,
            seed: p,
          }),
          l = (0, n.Fr)(e, {
            roughness: 0.7,
            fill: "none",
            stroke: m,
            seed: p,
          }),
          h = t.rectangle(a, M, F, r, s);
        K = w.insert(() => h, ":first-child").attr("class", "swimlane-title");
        const c = t.rectangle(a, i, F, o, l);
        (q = w.insert(() => c, ":first-child").attr("class", "swimlane-body")),
          K.select("path:nth-child(2)").attr("style", b.join(";")),
          K.select("path").attr("style", k.join(";").replace("fill", "stroke"));
      } else
        (K = w.insert("rect", ":first-child")),
          (q = w.insert("rect", ":first-child")),
          K.attr("class", "swimlane-title")
            .attr("style", C)
            .attr("x", a)
            .attr("y", M)
            .attr("width", F)
            .attr("height", r)
            .attr("fill", g)
            .attr("stroke", m),
          q
            .attr("class", "swimlane-body")
            .attr("style", C)
            .attr("x", a)
            .attr("y", i)
            .attr("width", F)
            .attr("height", o)
            .attr("fill", "none")
            .attr("stroke", m);
      const s = e.x - _.width / 2,
        l = M + (r - _.height) / 2;
      B.attr("transform", `translate(${s}, ${l})`);
    }
    if ((h.R.trace("Swimlane data ", e, JSON.stringify(e)), x)) {
      const t = B.select("span");
      t && t.attr("style", x);
    }
    return (
      (e.offsetX = 0),
      (e.width = F),
      (e.height = L),
      (e.offsetY = _.height - A / 2),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: w, labelBBox: _ }
    );
  }, "swimlane"),
  g = (0, c.K)(async (t, e) => {
    h.R.info("Creating subgraph rect for ", e.id, e);
    const r = (0, l.D7)(),
      { theme: c, themeVariables: p, handDrawnSeed: g } = r,
      { clusterBkg: f, clusterBorder: y, borderColorArray: m } = p,
      {
        labelStyles: x,
        nodeStyles: C,
        borderStyles: b,
        backgroundStyles: k,
      } = (0, n.GX)(e),
      w = t
        .insert("g")
        .attr("class", "cluster " + e.cssClasses)
        .attr("id", e.domId)
        .attr("data-look", e.look);
    (0, s.XE)(w, e.colorIndex, c, m);
    const S = (0, l.E)(r),
      T = w.insert("g").attr("class", "cluster-label ");
    let B;
    B =
      "markdown" === e.labelType
        ? await (0, a.GZ)(T, e.label, {
            style: e.labelStyle,
            useHtmlLabels: S,
            isNode: !0,
            width: e.width,
          })
        : await (0, o.DA)(T, e.label, e.labelStyle || "", !1, !0);
    let v = B.getBBox();
    if ((0, l.E)(r)) {
      const t = B.children[0],
        e = (0, d.Ltv)(B);
      (v = t.getBoundingClientRect()),
        e.attr("width", v.width),
        e.attr("height", v.height);
    }
    const _ = e.width <= v.width + e.padding ? v.width + e.padding : e.width;
    e.width <= v.width + e.padding
      ? (e.diff = (_ - e.width) / 2 - e.padding)
      : (e.diff = -e.padding);
    const A = e.height,
      F = e.x - _ / 2,
      L = e.y - A / 2;
    let M;
    if ((h.R.trace("Data ", e, JSON.stringify(e)), "handDrawn" === e.look)) {
      const t = u.A.svg(w),
        r = (0, n.Fr)(e, {
          roughness: 0.7,
          fill: f,
          stroke: y,
          fillWeight: 3,
          seed: g,
        }),
        i = t.path((0, o.FA)(F, L, _, A, 0), r);
      (M = w.insert(
        () => (h.R.debug("Rough node insert CXC", i), i),
        ":first-child",
      )),
        M.select("path:nth-child(2)").attr("style", b.join(";")),
        M.select("path").attr("style", k.join(";").replace("fill", "stroke"));
    } else
      (M = w.insert("rect", ":first-child")),
        M.attr("style", C)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", F)
          .attr("y", L)
          .attr("width", _)
          .attr("height", A);
    const { subGraphTitleTopMargin: $ } = (0, i.Oi)(r);
    if (
      (T.attr(
        "transform",
        `translate(${e.x - v.width / 2}, ${e.y - e.height / 2 + $})`,
      ),
      x)
    ) {
      const t = T.select("span");
      t && t.attr("style", x);
    }
    const E = M.node().getBBox();
    return (
      (e.offsetX = 0),
      (e.width = E.width),
      (e.height = E.height),
      (e.offsetY = v.height - e.padding / 2),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: w, labelBBox: v }
    );
  }, "rect"),
  f = (0, c.K)((t, e) => {
    const r = t.insert("g").attr("class", "note-cluster").attr("id", e.domId),
      i = r.insert("rect", ":first-child"),
      n = 0 * e.padding,
      a = n / 2;
    i.attr("rx", e.rx)
      .attr("ry", e.ry)
      .attr("x", e.x - e.width / 2 - a)
      .attr("y", e.y - e.height / 2 - a)
      .attr("width", e.width + n)
      .attr("height", e.height + n)
      .attr("fill", "none");
    const s = i.node().getBBox();
    return (
      (e.width = s.width),
      (e.height = s.height),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: r, labelBBox: { width: 0, height: 0 } }
    );
  }, "noteGroup"),
  y = (0, c.K)(async (t, e) => {
    const r = (0, l.D7)(),
      { theme: i, themeVariables: n, handDrawnSeed: a } = r,
      {
        altBackground: h,
        borderColorArray: c,
        compositeBackground: p,
        compositeTitleBackground: g,
        nodeBorder: f,
      } = n,
      y = t
        .insert("g")
        .attr("class", e.cssClasses)
        .attr("id", e.domId)
        .attr("data-id", e.id)
        .attr("data-look", e.look);
    (0, s.XE)(y, e.colorIndex, i, c);
    const m = y.insert("g", ":first-child"),
      x = y.insert("g").attr("class", "cluster-label");
    let C = y.append("rect");
    const b = await (0, o.DA)(x, e.label, e.labelStyle, void 0, !0);
    let k = b.getBBox();
    if ((0, l.E)(r)) {
      const t = b.children[0],
        e = (0, d.Ltv)(b);
      (k = t.getBoundingClientRect()),
        e.attr("width", k.width),
        e.attr("height", k.height);
    }
    const w = 0 * e.padding,
      S = w / 2,
      T = (e.width <= k.width + e.padding ? k.width + e.padding : e.width) + w;
    e.width <= k.width + e.padding
      ? (e.diff = (T - e.width) / 2 - e.padding)
      : (e.diff = -e.padding);
    const B = e.height + w,
      v = e.height + w - k.height - 6,
      _ = e.x - T / 2,
      A = e.y - B / 2;
    e.width = T;
    const F = e.y - e.height / 2 - S + k.height + 2;
    let L;
    if ("handDrawn" === e.look) {
      const t = e.cssClasses.includes("statediagram-cluster-alt"),
        r = u.A.svg(y),
        i =
          e.rx || e.ry
            ? r.path((0, o.FA)(_, A, T, B, 10), {
                roughness: 0.7,
                fill: g,
                fillStyle: "solid",
                stroke: f,
                seed: a,
              })
            : r.rectangle(_, A, T, B, { seed: a });
      L = y.insert(() => i, ":first-child");
      const n = r.rectangle(_, F, T, v, {
        fill: t ? h : p,
        fillStyle: t ? "hachure" : "solid",
        stroke: f,
        seed: a,
      });
      (L = y.insert(() => i, ":first-child")),
        (C = y.insert(() => n)),
        L.attr("class", "outer"),
        C.attr("class", "inner");
    } else {
      L = m.insert("rect", ":first-child");
      const t = "outer";
      L.attr("class", t)
        .attr("x", _)
        .attr("y", A)
        .attr("width", T)
        .attr("height", B)
        .attr("data-look", e.look),
        C.attr("class", "inner")
          .attr("x", _)
          .attr("y", F)
          .attr("width", T)
          .attr("height", v);
    }
    x.attr(
      "transform",
      `translate(${e.x - k.width / 2}, ${A + 1 - ((0, l.E)(r) ? 0 : 3)})`,
    );
    const M = L.node().getBBox();
    return (
      (e.height = M.height),
      (e.offsetX = 0),
      (e.offsetY = k.height - e.padding / 2),
      (e.labelBBox = k),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: y, labelBBox: k }
    );
  }, "roundedWithTitle"),
  m = (0, c.K)(async (t, e) => {
    h.R.info("Creating subgraph rect for ", e.id, e);
    const r = (0, l.D7)(),
      { themeVariables: s, handDrawnSeed: c } = r,
      { clusterBkg: p, clusterBorder: g } = s,
      {
        labelStyles: f,
        nodeStyles: y,
        borderStyles: m,
        backgroundStyles: x,
      } = (0, n.GX)(e),
      C = t
        .insert("g")
        .attr("class", "cluster " + e.cssClasses)
        .attr("id", e.domId)
        .attr("data-look", e.look),
      b = (0, l.E)(r),
      k = C.insert("g").attr("class", "cluster-label "),
      w = await (0, a.GZ)(k, e.label, {
        style: e.labelStyle,
        useHtmlLabels: b,
        isNode: !0,
        width: e.width,
      });
    let S = w.getBBox();
    if ((0, l.E)(r)) {
      const t = w.children[0],
        e = (0, d.Ltv)(w);
      (S = t.getBoundingClientRect()),
        e.attr("width", S.width),
        e.attr("height", S.height);
    }
    const T = e.width <= S.width + e.padding ? S.width + e.padding : e.width;
    e.width <= S.width + e.padding
      ? (e.diff = (T - e.width) / 2 - e.padding)
      : (e.diff = -e.padding);
    const B = e.height,
      v = e.x - T / 2,
      _ = e.y - B / 2;
    let A;
    if ((h.R.trace("Data ", e, JSON.stringify(e)), "handDrawn" === e.look)) {
      const t = u.A.svg(C),
        r = (0, n.Fr)(e, {
          roughness: 0.7,
          fill: p,
          stroke: g,
          fillWeight: 4,
          seed: c,
        }),
        i = t.path((0, o.FA)(v, _, T, B, e.rx), r);
      (A = C.insert(
        () => (h.R.debug("Rough node insert CXC", i), i),
        ":first-child",
      )),
        A.select("path:nth-child(2)").attr("style", m.join(";")),
        A.select("path").attr("style", x.join(";").replace("fill", "stroke"));
    } else
      (A = C.insert("rect", ":first-child")),
        A.attr("style", y)
          .attr("rx", e.rx)
          .attr("ry", e.ry)
          .attr("x", v)
          .attr("y", _)
          .attr("width", T)
          .attr("height", B);
    const { subGraphTitleTopMargin: F } = (0, i.Oi)(r);
    if (
      (k.attr(
        "transform",
        `translate(${e.x - S.width / 2}, ${e.y - e.height / 2 + F})`,
      ),
      f)
    ) {
      const t = k.select("span");
      t && t.attr("style", f);
    }
    const L = A.node().getBBox();
    return (
      (e.offsetX = 0),
      (e.width = L.width),
      (e.height = L.height),
      (e.offsetY = S.height - e.padding / 2),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: C, labelBBox: S }
    );
  }, "kanbanSection"),
  x = (0, c.K)((t, e) => {
    const r = (0, l.D7)(),
      { theme: i, themeVariables: n, handDrawnSeed: a } = r,
      { altBackground: h, nodeBorder: c, borderColorArray: d } = n,
      p = t
        .insert("g")
        .attr("class", e.cssClasses)
        .attr("id", e.domId)
        .attr("data-look", e.look);
    (0, s.XE)(p, e.colorIndex, i, d);
    const g = p.insert("g", ":first-child"),
      f = 0 * e.padding,
      y = e.width + f;
    e.diff = -e.padding;
    const m = e.height + f,
      x = e.x - y / 2,
      C = e.y - m / 2;
    let b;
    if (((e.width = y), "handDrawn" === e.look)) {
      const t = u.A.svg(p).rectangle(x, C, y, m, {
        fill: h ?? "#efefef",
        fillStyle: "solid",
        roughness: 0.5,
        strokeLineDash: [5],
        stroke: c,
        seed: a,
      });
      b = p.insert(() => t, ":first-child").attr("class", "divider");
    } else {
      b = g.insert("rect", ":first-child");
      let t = "outer";
      e.look,
        (t = "divider"),
        b
          .attr("class", t)
          .attr("x", x)
          .attr("y", C)
          .attr("width", y)
          .attr("height", m)
          .attr("data-look", e.look);
    }
    const k = b.node().getBBox();
    return (
      (e.height = k.height),
      (e.offsetX = 0),
      (e.offsetY = 0),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: p, labelBBox: {} }
    );
  }, "divider"),
  C = (0, c.K)(async (t, e, r) => {
    h.R.info(`Creating ${r.cssClass} for `, e.id, e);
    const c = (0, l.D7)(),
      { theme: p, themeVariables: g, handDrawnSeed: f } = c,
      { borderColorArray: y } = g,
      { labelStyles: m, borderStyles: x } = (0, n.GX)(e),
      C = t
        .insert("g")
        .attr("class", "cluster " + r.cssClass + " " + e.cssClasses)
        .attr("id", e.domId ?? e.id)
        .attr("data-look", e.look);
    (0, s.XE)(C, e.colorIndex, p, y);
    const b = (0, l.E)(c),
      k = C.insert("g").attr("class", "cluster-label");
    let w = { width: 0, height: 0 };
    const S = e.label?.trim();
    if (S) {
      let t;
      if (
        ((t =
          "markdown" === e.labelType
            ? await (0, a.GZ)(k, e.label, {
                style: e.labelStyle,
                useHtmlLabels: b,
                isNode: !0,
                width: e.width,
              })
            : await (0, o.DA)(k, e.label, e.labelStyle || "", !1, !0)),
        (w = t.getBBox()),
        b)
      ) {
        const e = t.children[0],
          r = (0, d.Ltv)(t);
        (w = e.getBoundingClientRect()),
          r.attr("width", w.width),
          r.attr("height", w.height);
      }
    }
    const T = e.width <= w.width + e.padding ? w.width + e.padding : e.width;
    e.width <= w.width + e.padding
      ? (e.diff = (T - e.width) / 2 - e.padding)
      : (e.diff = -e.padding);
    const B = e.height,
      v = e.x - T / 2,
      _ = e.y - B / 2;
    let A;
    if ("handDrawn" === e.look) {
      const t = u.A.svg(C),
        i = (0, n.Fr)(e, {
          roughness: r.roughness,
          fill: r.fill,
          stroke: r.stroke,
          strokeWidth: r.strokeWidth,
          seed: f,
          ...("none" === r.fill ? { fillWeight: 0 } : { fillStyle: "solid" }),
          ...(r.strokeDash ? { strokeLineDash: r.strokeDash } : {}),
        }),
        a = t.path((0, o.FA)(v, _, T, B, r.rx), i);
      (A = C.insert(() => a, ":first-child")),
        A.select("path:nth-child(2)").attr("style", x.join(";"));
    } else
      (A = C.insert("rect", ":first-child")),
        A.attr("rx", r.rx)
          .attr("ry", r.rx)
          .attr("x", v)
          .attr("y", _)
          .attr("width", T)
          .attr("height", B)
          .attr("fill", r.fill)
          .attr("stroke", r.stroke)
          .attr("stroke-width", r.strokeWidth + "px"),
        r.strokeDash && A.attr("stroke-dasharray", r.strokeDash.join(", "));
    if (S) {
      const { subGraphTitleTopMargin: t } = (0, i.Oi)(c);
      if (
        (k.attr(
          "transform",
          `translate(${e.x - w.width / 2}, ${e.y - e.height / 2 + t})`,
        ),
        m)
      ) {
        const t = k.select("span");
        t && t.attr("style", m);
      }
    }
    const F = A.node().getBBox();
    return (
      (e.offsetX = 0),
      (e.width = F.width),
      (e.height = F.height),
      (e.offsetY = w.height - e.padding / 2),
      (e.intersect = function (t) {
        return (0, o.nM)(e, t);
      }),
      { cluster: C, labelBBox: w }
    );
  }, "createContainerGroup"),
  b = (0, c.K)(async (t, e) => {
    const { themeVariables: r } = (0, l.D7)(),
      i = r.flowContainerStroke || r.secondaryBorderColor;
    return C(t, e, {
      cssClass: "flow-cluster",
      rx: 10,
      fill: "none",
      stroke: i,
      strokeWidth: 0.75,
      roughness: 0.7,
    });
  }, "flowGroup"),
  k = (0, c.K)((t, e) => {
    const r = t.boundaryType || "rect",
      i = "package" === r ? 20 : t.padding,
      o = "package" === r ? e.height + 10 : 0,
      n = Math.max(t.width, e.width + i),
      a = "package" === r ? Math.max(t.height, o + 2 * t.padding) : t.height,
      s = t.x - n / 2,
      l = t.y - a / 2;
    return {
      boundaryType: r,
      width: n,
      height: a,
      x: s,
      y: l,
      bodyY: l + o,
      bodyHeight: a - o,
      tabHeight: o,
      tabWidth: "package" === r ? Math.min(n, Math.max(80, e.width + 20)) : 0,
    };
  }, "getUsecaseSystemBoundaryGeometry"),
  w = {
    rect: g,
    squareRect: g,
    roundedWithTitle: y,
    noteGroup: f,
    divider: x,
    kanbanSection: m,
    flowGroup: b,
    usecaseSystemBoundary: (0, c.K)(async (t, e) => {
      h.R.info("Creating usecase system boundary for ", e.id, e);
      const r = (0, l.D7)(),
        { theme: c, themeVariables: p, handDrawnSeed: g } = r,
        { clusterBkg: f, clusterBorder: y, borderColorArray: m } = p,
        { labelStyles: x, nodeStyles: C } = (0, n.GX)(e),
        { stylesMap: b } = (0, n.WW)(e),
        w = e.boundaryType || "rect",
        S = t
          .insert("g")
          .attr(
            "class",
            `cluster usecase-system-boundary usecase-system-boundary-${w} ${e.cssClasses}`,
          )
          .attr("id", "string" == typeof e.domId ? e.domId : e.id)
          .attr("data-boundary-type", w)
          .attr("data-look", e.look);
      (0, s.XE)(S, e.colorIndex, c, m);
      const T = (0, l.E)(r),
        B = S.insert("g").attr("class", "cluster-label system-boundary-title"),
        v = await (0, a.GZ)(B, e.label, {
          style: x,
          useHtmlLabels: T,
          isNode: !0,
        });
      let _ = v.getBBox();
      if (T) {
        const t = v.children[0],
          e = (0, d.Ltv)(v);
        (_ = t.getBoundingClientRect()),
          e.attr("width", _.width),
          e.attr("height", _.height);
      }
      const A = k(e, _),
        {
          width: F,
          height: L,
          x: M,
          y: $,
          bodyY: E,
          bodyHeight: O,
          tabHeight: D,
          tabWidth: I,
        } = A;
      e.diff =
        e.width <= _.width + e.padding
          ? (F - e.width) / 2 - e.padding
          : -e.padding;
      const K = (0, n.Fr)(e, {
        fill: b.get("fill") || f,
        stroke: b.get("stroke") || y,
        strokeWidth: b.get("stroke-width")?.replace("px", "") || 1,
        seed: g,
      });
      if ("handDrawn" === e.look) {
        const t = u.A.svg(S),
          e = t.rectangle(M, E, F, O, K);
        if (
          (S.insert(() => e, ":first-child").attr(
            "class",
            "boundary-body label-container",
          ),
          "package" === w)
        ) {
          const e = t.rectangle(M, $, I, D, K);
          S.insert(() => e, ":first-child").attr(
            "class",
            "boundary-tab system-boundary-package-tab label-container",
          );
        }
      } else
        S.insert("rect", ":first-child")
          .attr("class", "boundary-body label-container")
          .attr("style", C)
          .attr("x", M)
          .attr("y", E)
          .attr("width", F)
          .attr("height", O),
          "package" === w &&
            S.insert("rect", ":first-child")
              .attr(
                "class",
                "boundary-tab system-boundary-package-tab label-container",
              )
              .attr("style", C)
              .attr("x", M)
              .attr("y", $)
              .attr("width", I)
              .attr("height", D);
      const { subGraphTitleTopMargin: q } = (0, i.Oi)(r);
      return (
        "package" === w
          ? B.attr(
              "transform",
              `translate(${M + (I - _.width) / 2}, ${$ + (D - _.height) / 2})`,
            )
          : B.attr("transform", `translate(${e.x - _.width / 2}, ${$ + q})`),
        x && (B.attr("style", x), B.select("span").attr("style", x)),
        (e.offsetX = 0),
        (e.width = F),
        (e.height = L),
        (e.offsetY = _.height - e.padding / 2),
        (e.labelBBox = _),
        (e.intersect = function (t) {
          return (0, o.nM)(e, t);
        }),
        { cluster: S, labelBBox: _ }
      );
    }, "usecaseSystemBoundary"),
    swimlane: p,
  },
  S = new Set(["noteGroup", "divider"]),
  T = (0, c.K)((t) => !S.has(t ?? "rect"), "clusterPaintsTitle"),
  B = new Map(),
  v = (0, c.K)(async (t, e) => {
    const r = e.shape || "rect",
      i = await w[r](t, e);
    return B.set(e.id, i), i;
  }, "insertCluster"),
  _ = (0, c.K)(() => {
    B = new Map();
  }, "clear");
