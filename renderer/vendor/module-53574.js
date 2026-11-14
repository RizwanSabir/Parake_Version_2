// vendor/module-53574.js — webpack module 53574
// params: (t, e, i) = (module, exports, require)
var n;
(n = function (t) {
  return (() => {
    "use strict";
    var e = {
        658: (t) => {
          t.exports =
            null != Object.assign
              ? Object.assign.bind(Object)
              : function (t) {
                  for (
                    var e = arguments.length,
                      i = Array(e > 1 ? e - 1 : 0),
                      n = 1;
                    n < e;
                    n++
                  )
                    i[n - 1] = arguments[n];
                  return (
                    i.forEach(function (e) {
                      Object.keys(e).forEach(function (i) {
                        return (t[i] = e[i]);
                      });
                    }),
                    t
                  );
                };
        },
        548: (t, e, i) => {
          var n = function (t, e) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t))
                return (function (t, e) {
                  var i = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                  try {
                    for (
                      var s, a = t[Symbol.iterator]();
                      !(n = (s = a.next()).done) &&
                      (i.push(s.value), !e || i.length !== e);
                      n = !0
                    );
                  } catch (t) {
                    (r = !0), (o = t);
                  } finally {
                    try {
                      !n && a.return && a.return();
                    } finally {
                      if (r) throw o;
                    }
                  }
                  return i;
                })(t, e);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance",
              );
            },
            r = i(140 /* vendor/module-140 */).layoutBase.LinkedList,
            o = {
              getTopMostNodes: function (t) {
                for (var e = {}, i = 0; i < t.length; i++) e[t[i].id()] = !0;
                var n = t.filter(function (t, i) {
                  "number" == typeof t && (t = i);
                  for (var n = t.parent()[0]; null != n; ) {
                    if (e[n.id()]) return !1;
                    n = n.parent()[0];
                  }
                  return !0;
                });
                return n;
              },
              connectComponents: function (t, e, i, n) {
                var o = new r(),
                  s = new Set(),
                  a = [],
                  h = void 0,
                  l = void 0,
                  d = void 0,
                  c = !1,
                  g = 1,
                  u = [],
                  f = [],
                  p = function () {
                    var n = t.collection();
                    f.push(n);
                    var r = i[0],
                      p = t.collection();
                    p.merge(r).merge(r.descendants().intersection(e)),
                      a.push(r),
                      p.forEach(function (t) {
                        o.push(t), s.add(t), n.merge(t);
                      });
                    for (
                      var m = function () {
                        r = o.shift();
                        var l = t.collection();
                        r.neighborhood()
                          .nodes()
                          .forEach(function (t) {
                            e.intersection(r.edgesWith(t)).length > 0 &&
                              l.merge(t);
                          });
                        for (var d = 0; d < l.length; d++) {
                          var c = l[d];
                          null ==
                            (h = i.intersection(c.union(c.ancestors()))) ||
                            s.has(h[0]) ||
                            h.union(h.descendants()).forEach(function (t) {
                              o.push(t),
                                s.add(t),
                                n.merge(t),
                                i.has(t) && a.push(t);
                            });
                        }
                      };
                      0 != o.length;

                    )
                      m();
                    if (
                      (n.forEach(function (t) {
                        e.intersection(t.connectedEdges()).forEach(
                          function (t) {
                            n.has(t.source()) &&
                              n.has(t.target()) &&
                              n.merge(t);
                          },
                        );
                      }),
                      a.length == i.length && (c = !0),
                      !c || (c && g > 1))
                    ) {
                      (l = a[0]),
                        (d = l.connectedEdges().length),
                        a.forEach(function (t) {
                          t.connectedEdges().length < d &&
                            ((d = t.connectedEdges().length), (l = t));
                        }),
                        u.push(l.id());
                      var y = t.collection();
                      y.merge(a[0]),
                        a.forEach(function (t) {
                          y.merge(t);
                        }),
                        (a = []),
                        (i = i.difference(y)),
                        g++;
                    }
                  };
                do {
                  p();
                } while (!c);
                return n && u.length > 0 && n.set("dummy" + (n.size + 1), u), f;
              },
              relocateComponent: function (t, e, i) {
                if (!i.fixedNodeConstraint) {
                  var r = Number.POSITIVE_INFINITY,
                    o = Number.NEGATIVE_INFINITY,
                    s = Number.POSITIVE_INFINITY,
                    a = Number.NEGATIVE_INFINITY;
                  if ("draft" == i.quality) {
                    var h = !0,
                      l = !1,
                      d = void 0;
                    try {
                      for (
                        var c, g = e.nodeIndexes[Symbol.iterator]();
                        !(h = (c = g.next()).done);
                        h = !0
                      ) {
                        var u = c.value,
                          f = n(u, 2),
                          p = f[0],
                          m = f[1],
                          y = i.cy.getElementById(p);
                        if (y) {
                          var v = y.boundingBox(),
                            E = e.xCoords[m] - v.w / 2,
                            N = e.xCoords[m] + v.w / 2,
                            T = e.yCoords[m] - v.h / 2,
                            A = e.yCoords[m] + v.h / 2;
                          E < r && (r = E),
                            N > o && (o = N),
                            T < s && (s = T),
                            A > a && (a = A);
                        }
                      }
                    } catch (t) {
                      (l = !0), (d = t);
                    } finally {
                      try {
                        !h && g.return && g.return();
                      } finally {
                        if (l) throw d;
                      }
                    }
                    var w = t.x - (o + r) / 2,
                      I = t.y - (a + s) / 2;
                    (e.xCoords = e.xCoords.map(function (t) {
                      return t + w;
                    })),
                      (e.yCoords = e.yCoords.map(function (t) {
                        return t + I;
                      }));
                  } else {
                    Object.keys(e).forEach(function (t) {
                      var i = e[t],
                        n = i.getRect().x,
                        h = i.getRect().x + i.getRect().width,
                        l = i.getRect().y,
                        d = i.getRect().y + i.getRect().height;
                      n < r && (r = n),
                        h > o && (o = h),
                        l < s && (s = l),
                        d > a && (a = d);
                    });
                    var C = t.x - (o + r) / 2,
                      L = t.y - (a + s) / 2;
                    Object.keys(e).forEach(function (t) {
                      var i = e[t];
                      i.setCenter(i.getCenterX() + C, i.getCenterY() + L);
                    });
                  }
                }
              },
              calcBoundingBox: function (t, e, i, n) {
                for (
                  var r = Number.MAX_SAFE_INTEGER,
                    o = Number.MIN_SAFE_INTEGER,
                    s = Number.MAX_SAFE_INTEGER,
                    a = Number.MIN_SAFE_INTEGER,
                    h = void 0,
                    l = void 0,
                    d = void 0,
                    c = void 0,
                    g = t.descendants().not(":parent"),
                    u = g.length,
                    f = 0;
                  f < u;
                  f++
                ) {
                  var p = g[f];
                  r > (h = e[n.get(p.id())] - p.width() / 2) && (r = h),
                    o < (l = e[n.get(p.id())] + p.width() / 2) && (o = l),
                    s > (d = i[n.get(p.id())] - p.height() / 2) && (s = d),
                    a < (c = i[n.get(p.id())] + p.height() / 2) && (a = c);
                }
                var m = {};
                return (
                  (m.topLeftX = r),
                  (m.topLeftY = s),
                  (m.width = o - r),
                  (m.height = a - s),
                  m
                );
              },
              calcParentsWithoutChildren: function (t, e) {
                var i = t.collection();
                return (
                  e.nodes(":parent").forEach(function (t) {
                    var e = !1;
                    t.children().forEach(function (t) {
                      "none" != t.css("display") && (e = !0);
                    }),
                      e || i.merge(t);
                  }),
                  i
                );
              },
            };
          t.exports = o;
        },
        816: (t, e, i) => {
          var n = i(548 /* vendor/module-548 */),
            r = i(140 /* vendor/module-140 */).CoSELayout,
            o = i(140 /* vendor/module-140 */).CoSENode,
            s = i(140 /* vendor/module-140 */).layoutBase.PointD,
            a = i(140 /* vendor/module-140 */).layoutBase.DimensionD,
            h = i(140 /* vendor/module-140 */).layoutBase.LayoutConstants,
            l = i(140 /* vendor/module-140 */).layoutBase.FDLayoutConstants,
            d = i(140 /* vendor/module-140 */).CoSEConstants;
          t.exports = {
            coseLayout: function (t, e) {
              var i = t.cy,
                c = t.eles,
                g = c.nodes(),
                u = c.edges(),
                f = void 0,
                p = void 0,
                m = void 0,
                y = {};
              t.randomize &&
                ((f = e.nodeIndexes), (p = e.xCoords), (m = e.yCoords));
              var v = function (t) {
                  return "function" == typeof t;
                },
                E = function (t, e) {
                  return v(t) ? t(e) : t;
                },
                N = n.calcParentsWithoutChildren(i, c);
              null != t.nestingFactor &&
                (d.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR =
                  l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR =
                    t.nestingFactor),
                null != t.gravity &&
                  (d.DEFAULT_GRAVITY_STRENGTH = l.DEFAULT_GRAVITY_STRENGTH =
                    t.gravity),
                null != t.numIter &&
                  (d.MAX_ITERATIONS = l.MAX_ITERATIONS = t.numIter),
                null != t.gravityRange &&
                  (d.DEFAULT_GRAVITY_RANGE_FACTOR =
                    l.DEFAULT_GRAVITY_RANGE_FACTOR =
                      t.gravityRange),
                null != t.gravityCompound &&
                  (d.DEFAULT_COMPOUND_GRAVITY_STRENGTH =
                    l.DEFAULT_COMPOUND_GRAVITY_STRENGTH =
                      t.gravityCompound),
                null != t.gravityRangeCompound &&
                  (d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR =
                    l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR =
                      t.gravityRangeCompound),
                null != t.initialEnergyOnIncremental &&
                  (d.DEFAULT_COOLING_FACTOR_INCREMENTAL =
                    l.DEFAULT_COOLING_FACTOR_INCREMENTAL =
                      t.initialEnergyOnIncremental),
                null != t.tilingCompareBy &&
                  (d.TILING_COMPARE_BY = t.tilingCompareBy),
                "proof" == t.quality ? (h.QUALITY = 2) : (h.QUALITY = 0),
                (d.NODE_DIMENSIONS_INCLUDE_LABELS =
                  l.NODE_DIMENSIONS_INCLUDE_LABELS =
                  h.NODE_DIMENSIONS_INCLUDE_LABELS =
                    t.nodeDimensionsIncludeLabels),
                (d.DEFAULT_INCREMENTAL =
                  l.DEFAULT_INCREMENTAL =
                  h.DEFAULT_INCREMENTAL =
                    !t.randomize),
                (d.ANIMATE = l.ANIMATE = h.ANIMATE = t.animate),
                (d.TILE = t.tile),
                (d.TILING_PADDING_VERTICAL =
                  "function" == typeof t.tilingPaddingVertical
                    ? t.tilingPaddingVertical.call()
                    : t.tilingPaddingVertical),
                (d.TILING_PADDING_HORIZONTAL =
                  "function" == typeof t.tilingPaddingHorizontal
                    ? t.tilingPaddingHorizontal.call()
                    : t.tilingPaddingHorizontal),
                (d.DEFAULT_INCREMENTAL =
                  l.DEFAULT_INCREMENTAL =
                  h.DEFAULT_INCREMENTAL =
                    !0),
                (d.PURE_INCREMENTAL = !t.randomize),
                (h.DEFAULT_UNIFORM_LEAF_NODE_SIZES = t.uniformNodeDimensions),
                "transformed" == t.step &&
                  ((d.TRANSFORM_ON_CONSTRAINT_HANDLING = !0),
                  (d.ENFORCE_CONSTRAINTS = !1),
                  (d.APPLY_LAYOUT = !1)),
                "enforced" == t.step &&
                  ((d.TRANSFORM_ON_CONSTRAINT_HANDLING = !1),
                  (d.ENFORCE_CONSTRAINTS = !0),
                  (d.APPLY_LAYOUT = !1)),
                "cose" == t.step &&
                  ((d.TRANSFORM_ON_CONSTRAINT_HANDLING = !1),
                  (d.ENFORCE_CONSTRAINTS = !1),
                  (d.APPLY_LAYOUT = !0)),
                "all" == t.step &&
                  (t.randomize
                    ? (d.TRANSFORM_ON_CONSTRAINT_HANDLING = !0)
                    : (d.TRANSFORM_ON_CONSTRAINT_HANDLING = !1),
                  (d.ENFORCE_CONSTRAINTS = !0),
                  (d.APPLY_LAYOUT = !0)),
                t.fixedNodeConstraint ||
                t.alignmentConstraint ||
                t.relativePlacementConstraint
                  ? (d.TREE_REDUCTION_ON_INCREMENTAL = !1)
                  : (d.TREE_REDUCTION_ON_INCREMENTAL = !0);
              var T = new r(),
                A = T.newGraphManager();
              return (
                (function t(e, i, r, h) {
                  for (var l = i.length, d = 0; d < l; d++) {
                    var c = i[d],
                      g = null;
                    0 == c.intersection(N).length && (g = c.children());
                    var u = void 0,
                      v = c.layoutDimensions({
                        nodeDimensionsIncludeLabels:
                          h.nodeDimensionsIncludeLabels,
                      });
                    if (null != c.outerWidth() && null != c.outerHeight())
                      if (h.randomize)
                        if (c.isParent()) {
                          var T = n.calcBoundingBox(c, p, m, f);
                          u =
                            0 == c.intersection(N).length
                              ? e.add(
                                  new o(
                                    r.graphManager,
                                    new s(T.topLeftX, T.topLeftY),
                                    new a(T.width, T.height),
                                  ),
                                )
                              : e.add(
                                  new o(
                                    r.graphManager,
                                    new s(T.topLeftX, T.topLeftY),
                                    new a(parseFloat(v.w), parseFloat(v.h)),
                                  ),
                                );
                        } else
                          u = e.add(
                            new o(
                              r.graphManager,
                              new s(
                                p[f.get(c.id())] - v.w / 2,
                                m[f.get(c.id())] - v.h / 2,
                              ),
                              new a(parseFloat(v.w), parseFloat(v.h)),
                            ),
                          );
                      else
                        u = e.add(
                          new o(
                            r.graphManager,
                            new s(
                              c.position("x") - v.w / 2,
                              c.position("y") - v.h / 2,
                            ),
                            new a(parseFloat(v.w), parseFloat(v.h)),
                          ),
                        );
                    else u = e.add(new o(this.graphManager));
                    (u.id = c.data("id")),
                      (u.nodeRepulsion = E(h.nodeRepulsion, c)),
                      (u.paddingLeft = parseInt(c.css("padding"))),
                      (u.paddingTop = parseInt(c.css("padding"))),
                      (u.paddingRight = parseInt(c.css("padding"))),
                      (u.paddingBottom = parseInt(c.css("padding"))),
                      h.nodeDimensionsIncludeLabels &&
                        ((u.labelWidth = c.boundingBox({
                          includeLabels: !0,
                          includeNodes: !1,
                          includeOverlays: !1,
                        }).w),
                        (u.labelHeight = c.boundingBox({
                          includeLabels: !0,
                          includeNodes: !1,
                          includeOverlays: !1,
                        }).h),
                        (u.labelPosVertical = c.css("text-valign")),
                        (u.labelPosHorizontal = c.css("text-halign"))),
                      (y[c.data("id")] = u),
                      isNaN(u.rect.x) && (u.rect.x = 0),
                      isNaN(u.rect.y) && (u.rect.y = 0),
                      null != g &&
                        g.length > 0 &&
                        t(r.getGraphManager().add(r.newGraph(), u), g, r, h);
                  }
                })(A.addRoot(), n.getTopMostNodes(g), T, t),
                (function (e, i, n) {
                  for (var r = 0, o = 0, s = 0; s < n.length; s++) {
                    var a = n[s],
                      h = y[a.data("source")],
                      c = y[a.data("target")];
                    if (h && c && h !== c && 0 == h.getEdgesBetween(c).length) {
                      var g = i.add(e.newEdge(), h, c);
                      (g.id = a.id()),
                        (g.idealLength = E(t.idealEdgeLength, a)),
                        (g.edgeElasticity = E(t.edgeElasticity, a)),
                        (r += g.idealLength),
                        o++;
                    }
                  }
                  null != t.idealEdgeLength &&
                    (o > 0
                      ? (d.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = r / o)
                      : v(t.idealEdgeLength)
                        ? (d.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH = 50)
                        : (d.DEFAULT_EDGE_LENGTH = l.DEFAULT_EDGE_LENGTH =
                            t.idealEdgeLength),
                    (d.MIN_REPULSION_DIST = l.MIN_REPULSION_DIST =
                      l.DEFAULT_EDGE_LENGTH / 10),
                    (d.DEFAULT_RADIAL_SEPARATION = l.DEFAULT_EDGE_LENGTH));
                })(T, A, u),
                (function (t, e) {
                  e.fixedNodeConstraint &&
                    (t.constraints.fixedNodeConstraint = e.fixedNodeConstraint),
                    e.alignmentConstraint &&
                      (t.constraints.alignmentConstraint =
                        e.alignmentConstraint),
                    e.relativePlacementConstraint &&
                      (t.constraints.relativePlacementConstraint =
                        e.relativePlacementConstraint);
                })(T, t),
                T.runLayout(),
                y
              );
            },
          };
        },
        212: (t, e, i) => {
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
              };
            })(),
            r = i(658 /* vendor/module-658 */),
            o = i(548 /* vendor/module-548 */),
            s = i(657 /* vendor/module-657 */).spectralLayout,
            a = i(816 /* vendor/module-816 */).coseLayout,
            h = Object.freeze({
              quality: "default",
              randomize: !0,
              animate: !0,
              animationDuration: 1e3,
              animationEasing: void 0,
              fit: !0,
              padding: 30,
              nodeDimensionsIncludeLabels: !1,
              uniformNodeDimensions: !1,
              packComponents: !0,
              step: "all",
              samplingType: !0,
              sampleSize: 25,
              nodeSeparation: 75,
              piTol: 1e-7,
              nodeRepulsion: function (t) {
                return 4500;
              },
              idealEdgeLength: function (t) {
                return 50;
              },
              edgeElasticity: function (t) {
                return 0.45;
              },
              nestingFactor: 0.1,
              gravity: 0.25,
              numIter: 2500,
              tile: !0,
              tilingCompareBy: void 0,
              tilingPaddingVertical: 10,
              tilingPaddingHorizontal: 10,
              gravityRangeCompound: 1.5,
              gravityCompound: 1,
              gravityRange: 3.8,
              initialEnergyOnIncremental: 0.3,
              fixedNodeConstraint: void 0,
              alignmentConstraint: void 0,
              relativePlacementConstraint: void 0,
              ready: function () {},
              stop: function () {},
            }),
            l = (function () {
              function t(e) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.options = r({}, h, e));
              }
              return (
                n(t, [
                  {
                    key: "run",
                    value: function () {
                      var t = this.options,
                        e = t.cy,
                        i = t.eles,
                        n = [],
                        r = [],
                        h = void 0,
                        l = [];
                      !t.fixedNodeConstraint ||
                        (Array.isArray(t.fixedNodeConstraint) &&
                          0 != t.fixedNodeConstraint.length) ||
                        (t.fixedNodeConstraint = void 0),
                        t.alignmentConstraint &&
                          (!t.alignmentConstraint.vertical ||
                            (Array.isArray(t.alignmentConstraint.vertical) &&
                              0 != t.alignmentConstraint.vertical.length) ||
                            (t.alignmentConstraint.vertical = void 0),
                          !t.alignmentConstraint.horizontal ||
                            (Array.isArray(t.alignmentConstraint.horizontal) &&
                              0 != t.alignmentConstraint.horizontal.length) ||
                            (t.alignmentConstraint.horizontal = void 0)),
                        !t.relativePlacementConstraint ||
                          (Array.isArray(t.relativePlacementConstraint) &&
                            0 != t.relativePlacementConstraint.length) ||
                          (t.relativePlacementConstraint = void 0),
                        (t.fixedNodeConstraint ||
                          t.alignmentConstraint ||
                          t.relativePlacementConstraint) &&
                          ((t.tile = !1), (t.packComponents = !1));
                      var d = void 0,
                        c = !1;
                      if (
                        (e.layoutUtilities &&
                          t.packComponents &&
                          ((d = e.layoutUtilities("get")) ||
                            (d = e.layoutUtilities()),
                          (c = !0)),
                        i.nodes().length > 0)
                      )
                        if (c) {
                          var g = o.getTopMostNodes(t.eles.nodes());
                          if (
                            ((h = o.connectComponents(e, t.eles, g)).forEach(
                              function (t) {
                                var e = t.boundingBox();
                                l.push({
                                  x: e.x1 + e.w / 2,
                                  y: e.y1 + e.h / 2,
                                });
                              },
                            ),
                            t.randomize &&
                              h.forEach(function (e) {
                                (t.eles = e), n.push(s(t));
                              }),
                            "default" == t.quality || "proof" == t.quality)
                          ) {
                            var u = e.collection();
                            if (t.tile) {
                              var f = new Map(),
                                p = 0,
                                m = {
                                  nodeIndexes: f,
                                  xCoords: [],
                                  yCoords: [],
                                },
                                y = [];
                              if (
                                (h.forEach(function (t, e) {
                                  0 == t.edges().length &&
                                    (t.nodes().forEach(function (e, i) {
                                      u.merge(t.nodes()[i]),
                                        e.isParent() ||
                                          (m.nodeIndexes.set(
                                            t.nodes()[i].id(),
                                            p++,
                                          ),
                                          m.xCoords.push(
                                            t.nodes()[0].position().x,
                                          ),
                                          m.yCoords.push(
                                            t.nodes()[0].position().y,
                                          ));
                                    }),
                                    y.push(e));
                                }),
                                u.length > 1)
                              ) {
                                var v = u.boundingBox();
                                l.push({
                                  x: v.x1 + v.w / 2,
                                  y: v.y1 + v.h / 2,
                                }),
                                  h.push(u),
                                  n.push(m);
                                for (var E = y.length - 1; E >= 0; E--)
                                  h.splice(y[E], 1),
                                    n.splice(y[E], 1),
                                    l.splice(y[E], 1);
                              }
                            }
                            h.forEach(function (e, i) {
                              (t.eles = e),
                                r.push(a(t, n[i])),
                                o.relocateComponent(l[i], r[i], t);
                            });
                          } else
                            h.forEach(function (e, i) {
                              o.relocateComponent(l[i], n[i], t);
                            });
                          var N = new Set();
                          if (h.length > 1) {
                            var T = [],
                              A = i.filter(function (t) {
                                return "none" == t.css("display");
                              });
                            h.forEach(function (e, i) {
                              var s = void 0;
                              if (
                                ("draft" == t.quality && (s = n[i].nodeIndexes),
                                e.nodes().not(A).length > 0)
                              ) {
                                var a = { edges: [], nodes: [] },
                                  h = void 0;
                                e
                                  .nodes()
                                  .not(A)
                                  .forEach(function (e) {
                                    if ("draft" == t.quality)
                                      if (e.isParent()) {
                                        var l = o.calcBoundingBox(
                                          e,
                                          n[i].xCoords,
                                          n[i].yCoords,
                                          s,
                                        );
                                        a.nodes.push({
                                          x: l.topLeftX,
                                          y: l.topLeftY,
                                          width: l.width,
                                          height: l.height,
                                        });
                                      } else
                                        (h = s.get(e.id())),
                                          a.nodes.push({
                                            x:
                                              n[i].xCoords[h] -
                                              e.boundingbox().w / 2,
                                            y:
                                              n[i].yCoords[h] -
                                              e.boundingbox().h / 2,
                                            width: e.boundingbox().w,
                                            height: e.boundingbox().h,
                                          });
                                    else
                                      r[i][e.id()] &&
                                        a.nodes.push({
                                          x: r[i][e.id()].getLeft(),
                                          y: r[i][e.id()].getTop(),
                                          width: r[i][e.id()].getWidth(),
                                          height: r[i][e.id()].getHeight(),
                                        });
                                  }),
                                  e.edges().forEach(function (e) {
                                    var h = e.source(),
                                      l = e.target();
                                    if (
                                      "none" != h.css("display") &&
                                      "none" != l.css("display")
                                    )
                                      if ("draft" == t.quality) {
                                        var d = s.get(h.id()),
                                          c = s.get(l.id()),
                                          g = [],
                                          u = [];
                                        if (h.isParent()) {
                                          var f = o.calcBoundingBox(
                                            h,
                                            n[i].xCoords,
                                            n[i].yCoords,
                                            s,
                                          );
                                          g.push(f.topLeftX + f.width / 2),
                                            g.push(f.topLeftY + f.height / 2);
                                        } else
                                          g.push(n[i].xCoords[d]),
                                            g.push(n[i].yCoords[d]);
                                        if (l.isParent()) {
                                          var p = o.calcBoundingBox(
                                            l,
                                            n[i].xCoords,
                                            n[i].yCoords,
                                            s,
                                          );
                                          u.push(p.topLeftX + p.width / 2),
                                            u.push(p.topLeftY + p.height / 2);
                                        } else
                                          u.push(n[i].xCoords[c]),
                                            u.push(n[i].yCoords[c]);
                                        a.edges.push({
                                          startX: g[0],
                                          startY: g[1],
                                          endX: u[0],
                                          endY: u[1],
                                        });
                                      } else
                                        r[i][h.id()] &&
                                          r[i][l.id()] &&
                                          a.edges.push({
                                            startX: r[i][h.id()].getCenterX(),
                                            startY: r[i][h.id()].getCenterY(),
                                            endX: r[i][l.id()].getCenterX(),
                                            endY: r[i][l.id()].getCenterY(),
                                          });
                                  }),
                                  a.nodes.length > 0 && (T.push(a), N.add(i));
                              }
                            });
                            var w = d.packComponents(T, t.randomize).shifts;
                            if ("draft" == t.quality)
                              n.forEach(function (t, e) {
                                var i = t.xCoords.map(function (t) {
                                    return t + w[e].dx;
                                  }),
                                  n = t.yCoords.map(function (t) {
                                    return t + w[e].dy;
                                  });
                                (t.xCoords = i), (t.yCoords = n);
                              });
                            else {
                              var I = 0;
                              N.forEach(function (t) {
                                Object.keys(r[t]).forEach(function (e) {
                                  var i = r[t][e];
                                  i.setCenter(
                                    i.getCenterX() + w[I].dx,
                                    i.getCenterY() + w[I].dy,
                                  );
                                }),
                                  I++;
                              });
                            }
                          }
                        } else {
                          var C = t.eles.boundingBox();
                          if (
                            (l.push({
                              x: C.x1 + C.w / 2,
                              y: C.y1 + C.h / 2,
                            }),
                            t.randomize)
                          ) {
                            var L = s(t);
                            n.push(L);
                          }
                          "default" == t.quality || "proof" == t.quality
                            ? (r.push(a(t, n[0])),
                              o.relocateComponent(l[0], r[0], t))
                            : o.relocateComponent(l[0], n[0], t);
                        }
                      var M = function (e, i) {
                        if ("default" == t.quality || "proof" == t.quality) {
                          "number" == typeof e && (e = i);
                          var o = void 0,
                            s = void 0,
                            a = e.data("id");
                          return (
                            r.forEach(function (t) {
                              a in t &&
                                ((o = {
                                  x: t[a].getRect().getCenterX(),
                                  y: t[a].getRect().getCenterY(),
                                }),
                                (s = t[a]));
                            }),
                            t.nodeDimensionsIncludeLabels &&
                              (s.labelWidth &&
                                ("left" == s.labelPosHorizontal
                                  ? (o.x += s.labelWidth / 2)
                                  : "right" == s.labelPosHorizontal &&
                                    (o.x -= s.labelWidth / 2)),
                              s.labelHeight &&
                                ("top" == s.labelPosVertical
                                  ? (o.y += s.labelHeight / 2)
                                  : "bottom" == s.labelPosVertical &&
                                    (o.y -= s.labelHeight / 2))),
                            null == o &&
                              (o = {
                                x: e.position("x"),
                                y: e.position("y"),
                              }),
                            { x: o.x, y: o.y }
                          );
                        }
                        var h = void 0;
                        return (
                          n.forEach(function (t) {
                            var i = t.nodeIndexes.get(e.id());
                            null != i &&
                              (h = { x: t.xCoords[i], y: t.yCoords[i] });
                          }),
                          null == h &&
                            (h = {
                              x: e.position("x"),
                              y: e.position("y"),
                            }),
                          { x: h.x, y: h.y }
                        );
                      };
                      if (
                        "default" == t.quality ||
                        "proof" == t.quality ||
                        t.randomize
                      ) {
                        var _ = o.calcParentsWithoutChildren(e, i),
                          x = i.filter(function (t) {
                            return "none" == t.css("display");
                          });
                        (t.eles = i.not(x)),
                          i
                            .nodes()
                            .not(":parent")
                            .not(x)
                            .layoutPositions(this, t, M),
                          _.length > 0 &&
                            _.forEach(function (t) {
                              t.position(M(t));
                            });
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = l;
        },
        657: (t, e, i) => {
          var n = i(548 /* vendor/module-548 */),
            r = i(140 /* vendor/module-140 */).layoutBase.Matrix,
            o = i(140 /* vendor/module-140 */).layoutBase.SVD;
          t.exports = {
            spectralLayout: function (t) {
              var e = t.cy,
                i = t.eles,
                s = i.nodes(),
                a = i.nodes(":parent"),
                h = new Map(),
                l = new Map(),
                d = new Map(),
                c = [],
                g = [],
                u = [],
                f = [],
                p = [],
                m = [],
                y = [],
                v = [],
                E = void 0,
                N = 1e8,
                T = 1e-9,
                A = t.piTol,
                w = t.samplingType,
                I = t.nodeSeparation,
                C = void 0,
                L = function (t, e, i) {
                  for (
                    var n = [],
                      r = 0,
                      o = 0,
                      s = 0,
                      a = void 0,
                      h = [],
                      d = 0,
                      g = 1,
                      u = 0;
                    u < E;
                    u++
                  )
                    h[u] = N;
                  for (n[o] = t, h[t] = 0; o >= r; ) {
                    s = n[r++];
                    for (var f = c[s], y = 0; y < f.length; y++)
                      h[(a = l.get(f[y]))] == N &&
                        ((h[a] = h[s] + 1), (n[++o] = a));
                    m[s][e] = h[s] * I;
                  }
                  if (i) {
                    for (var v = 0; v < E; v++)
                      m[v][e] < p[v] && (p[v] = m[v][e]);
                    for (var T = 0; T < E; T++)
                      p[T] > d && ((d = p[T]), (g = T));
                  }
                  return g;
                };
              n.connectComponents(e, i, n.getTopMostNodes(s), h),
                a.forEach(function (t) {
                  n.connectComponents(
                    e,
                    i,
                    n.getTopMostNodes(t.descendants().intersection(i)),
                    h,
                  );
                });
              for (var M = 0, _ = 0; _ < s.length; _++)
                s[_].isParent() || l.set(s[_].id(), M++);
              var x = !0,
                O = !1,
                D = void 0;
              try {
                for (
                  var R, b = h.keys()[Symbol.iterator]();
                  !(x = (R = b.next()).done);
                  x = !0
                ) {
                  var F = R.value;
                  l.set(F, M++);
                }
              } catch (t) {
                (O = !0), (D = t);
              } finally {
                try {
                  !x && b.return && b.return();
                } finally {
                  if (O) throw D;
                }
              }
              for (var G = 0; G < l.size; G++) c[G] = [];
              a.forEach(function (t) {
                for (
                  var e = t.children().intersection(i);
                  0 == e.nodes(":childless").length;

                )
                  e = e.nodes()[0].children().intersection(i);
                var n = 0,
                  r = e.nodes(":childless")[0].connectedEdges().length;
                e.nodes(":childless").forEach(function (t, e) {
                  t.connectedEdges().length < r &&
                    ((r = t.connectedEdges().length), (n = e));
                }),
                  d.set(t.id(), e.nodes(":childless")[n].id());
              }),
                s.forEach(function (t) {
                  var e;
                  (e = t.isParent() ? l.get(d.get(t.id())) : l.get(t.id())),
                    t
                      .neighborhood()
                      .nodes()
                      .forEach(function (n) {
                        i.intersection(t.edgesWith(n)).length > 0 &&
                          (n.isParent()
                            ? c[e].push(d.get(n.id()))
                            : c[e].push(n.id()));
                      });
                });
              var S = function (t) {
                  var i = l.get(t),
                    n = void 0;
                  h.get(t).forEach(function (r) {
                    (n = e.getElementById(r).isParent() ? d.get(r) : r),
                      c[i].push(n),
                      c[l.get(n)].push(t);
                  });
                },
                P = !0,
                U = !1,
                Y = void 0;
              try {
                for (
                  var k, H = h.keys()[Symbol.iterator]();
                  !(P = (k = H.next()).done);
                  P = !0
                )
                  S(k.value);
              } catch (t) {
                (U = !0), (Y = t);
              } finally {
                try {
                  !P && H.return && H.return();
                } finally {
                  if (U) throw Y;
                }
              }
              var X = void 0;
              if ((E = l.size) > 2) {
                C = E < t.sampleSize ? E : t.sampleSize;
                for (var z = 0; z < E; z++) m[z] = [];
                for (var B = 0; B < C; B++) v[B] = [];
                return (
                  "draft" == t.quality || "all" == t.step
                    ? ((function (t) {
                        var e = void 0;
                        if (t) {
                          e = Math.floor(Math.random() * E);
                          for (var i = 0; i < E; i++) p[i] = N;
                          for (var n = 0; n < C; n++)
                            (f[n] = e), (e = L(e, n, t));
                        } else {
                          !(function () {
                            for (var t = 0, e = 0, i = !1; e < C; ) {
                              (t = Math.floor(Math.random() * E)), (i = !1);
                              for (var n = 0; n < e; n++)
                                if (f[n] == t) {
                                  i = !0;
                                  break;
                                }
                              i || ((f[e] = t), e++);
                            }
                          })();
                          for (var r = 0; r < C; r++) L(f[r], r, t);
                        }
                        for (var o = 0; o < E; o++)
                          for (var s = 0; s < C; s++) m[o][s] *= m[o][s];
                        for (var a = 0; a < C; a++) y[a] = [];
                        for (var h = 0; h < C; h++)
                          for (var l = 0; l < C; l++) y[h][l] = m[f[l]][h];
                      })(w),
                      (function () {
                        for (
                          var t = o.svd(y),
                            e = t.S,
                            i = t.U,
                            n = t.V,
                            s = e[0] * e[0] * e[0],
                            a = [],
                            h = 0;
                          h < C;
                          h++
                        ) {
                          a[h] = [];
                          for (var l = 0; l < C; l++)
                            (a[h][l] = 0),
                              h == l &&
                                (a[h][l] =
                                  e[h] / (e[h] * e[h] + s / (e[h] * e[h])));
                        }
                        v = r.multMat(r.multMat(n, a), r.transpose(i));
                      })(),
                      (function () {
                        for (
                          var t = void 0,
                            e = void 0,
                            i = [],
                            n = [],
                            o = [],
                            s = [],
                            a = 0;
                          a < E;
                          a++
                        )
                          (i[a] = Math.random()), (n[a] = Math.random());
                        (i = r.normalize(i)), (n = r.normalize(n));
                        for (var h = T, l = T, d = void 0; ; ) {
                          for (var c = 0; c < E; c++) o[c] = i[c];
                          if (
                            ((i = r.multGamma(r.multL(r.multGamma(o), m, v))),
                            (t = r.dotProduct(o, i)),
                            (i = r.normalize(i)),
                            (h = r.dotProduct(o, i)),
                            (d = Math.abs(h / l)) <= 1 + A && d >= 1)
                          )
                            break;
                          l = h;
                        }
                        for (var f = 0; f < E; f++) o[f] = i[f];
                        for (l = T; ; ) {
                          for (var p = 0; p < E; p++) s[p] = n[p];
                          if (
                            ((s = r.minusOp(
                              s,
                              r.multCons(o, r.dotProduct(o, s)),
                            )),
                            (n = r.multGamma(r.multL(r.multGamma(s), m, v))),
                            (e = r.dotProduct(s, n)),
                            (n = r.normalize(n)),
                            (h = r.dotProduct(s, n)),
                            (d = Math.abs(h / l)) <= 1 + A && d >= 1)
                          )
                            break;
                          l = h;
                        }
                        for (var y = 0; y < E; y++) s[y] = n[y];
                        (g = r.multCons(o, Math.sqrt(Math.abs(t)))),
                          (u = r.multCons(s, Math.sqrt(Math.abs(e))));
                      })(),
                      (X = { nodeIndexes: l, xCoords: g, yCoords: u }))
                    : (l.forEach(function (t, i) {
                        g.push(e.getElementById(i).position("x")),
                          u.push(e.getElementById(i).position("y"));
                      }),
                      (X = { nodeIndexes: l, xCoords: g, yCoords: u })),
                  X
                );
              }
              var V = l.keys(),
                W = e.getElementById(V.next().value),
                $ = W.position(),
                j = W.outerWidth();
              if ((g.push($.x), u.push($.y), 2 == E)) {
                var q = e.getElementById(V.next().value).outerWidth();
                g.push($.x + j / 2 + q / 2 + t.idealEdgeLength), u.push($.y);
              }
              return { nodeIndexes: l, xCoords: g, yCoords: u };
            },
          };
        },
        579: (t, e, i) => {
          var n = i(212 /* vendor/module-212 */),
            r = function (t) {
              t && t("layout", "fcose", n);
            };
          "undefined" != typeof cytoscape && r(cytoscape), (t.exports = r);
        },
        140: (e) => {
          e.exports = t;
        },
      },
      i = {},
      n = (function t(n) {
        var r = i[n];
        if (void 0 !== r) return r.exports;
        var o = (i[n] = { exports: {} });
        return e[n](o, o.exports, t), o.exports;
      })(579);
    return n;
  })();
}),
  (t.exports = n(i(74550 /* vendor/module-74550 */)));
