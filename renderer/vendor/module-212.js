// vendor/module-212.js — webpack module 212
// params: (t, e, i) = (module, exports, require)
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
                ((d = e.layoutUtilities("get")) || (d = e.layoutUtilities()),
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
                                (m.nodeIndexes.set(t.nodes()[i].id(), p++),
                                m.xCoords.push(t.nodes()[0].position().x),
                                m.yCoords.push(t.nodes()[0].position().y));
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
                        h.splice(y[E], 1), n.splice(y[E], 1), l.splice(y[E], 1);
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
                                  x: n[i].xCoords[h] - e.boundingbox().w / 2,
                                  y: n[i].yCoords[h] - e.boundingbox().h / 2,
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
                  ? (r.push(a(t, n[0])), o.relocateComponent(l[0], r[0], t))
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
                  null != i && (h = { x: t.xCoords[i], y: t.yCoords[i] });
                }),
                null == h &&
                  (h = {
                    x: e.position("x"),
                    y: e.position("y"),
                  }),
                { x: h.x, y: h.y }
              );
            };
            if ("default" == t.quality || "proof" == t.quality || t.randomize) {
              var _ = o.calcParentsWithoutChildren(e, i),
                x = i.filter(function (t) {
                  return "none" == t.css("display");
                });
              (t.eles = i.not(x)),
                i.nodes().not(":parent").not(x).layoutPositions(this, t, M),
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
