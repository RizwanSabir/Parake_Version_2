// vendor/module-74550.js — webpack module 74550
// params: (t, e, i) = (module, exports, require)
var n;
(n = function (t) {
  return (() => {
    "use strict";
    var e = {
        45: (t, e, i) => {
          var n = {};
          (n.layoutBase = i(551 /* vendor/module-551 */)),
            (n.CoSEConstants = i(806 /* vendor/module-806 */)),
            (n.CoSEEdge = i(767 /* vendor/module-767 */)),
            (n.CoSEGraph = i(880 /* vendor/module-880 */)),
            (n.CoSEGraphManager = i(578 /* vendor/module-578 */)),
            (n.CoSELayout = i(765 /* vendor/module-765 */)),
            (n.CoSENode = i(991 /* vendor/module-991 */)),
            (n.ConstraintHandler = i(902 /* vendor/module-902 */)),
            (t.exports = n);
        },
        806: (t, e, i) => {
          var n = i(551 /* vendor/module-551 */).FDLayoutConstants;
          function r() {}
          for (var o in n) r[o] = n[o];
          (r.DEFAULT_USE_MULTI_LEVEL_SCALING = !1),
            (r.DEFAULT_RADIAL_SEPARATION = n.DEFAULT_EDGE_LENGTH),
            (r.DEFAULT_COMPONENT_SEPERATION = 60),
            (r.TILE = !0),
            (r.TILING_PADDING_VERTICAL = 10),
            (r.TILING_PADDING_HORIZONTAL = 10),
            (r.TRANSFORM_ON_CONSTRAINT_HANDLING = !0),
            (r.ENFORCE_CONSTRAINTS = !0),
            (r.APPLY_LAYOUT = !0),
            (r.RELAX_MOVEMENT_ON_CONSTRAINTS = !0),
            (r.TREE_REDUCTION_ON_INCREMENTAL = !0),
            (r.PURE_INCREMENTAL = r.DEFAULT_INCREMENTAL),
            (t.exports = r);
        },
        767: (t, e, i) => {
          var n = i(551 /* vendor/module-551 */).FDLayoutEdge;
          function r(t, e, i) {
            n.call(this, t, e, i);
          }
          for (var o in ((r.prototype = Object.create(n.prototype)), n))
            r[o] = n[o];
          t.exports = r;
        },
        880: (t, e, i) => {
          var n = i(551 /* vendor/module-551 */).LGraph;
          function r(t, e, i) {
            n.call(this, t, e, i);
          }
          for (var o in ((r.prototype = Object.create(n.prototype)), n))
            r[o] = n[o];
          t.exports = r;
        },
        578: (t, e, i) => {
          var n = i(551 /* vendor/module-551 */).LGraphManager;
          function r(t) {
            n.call(this, t);
          }
          for (var o in ((r.prototype = Object.create(n.prototype)), n))
            r[o] = n[o];
          t.exports = r;
        },
        765: (t, e, i) => {
          var n = i(551 /* vendor/module-551 */).FDLayout,
            r = i(578 /* vendor/module-578 */),
            o = i(880 /* vendor/module-880 */),
            s = i(991 /* vendor/module-991 */),
            a = i(767 /* vendor/module-767 */),
            h = i(806 /* vendor/module-806 */),
            l = i(902 /* vendor/module-902 */),
            d = i(551 /* vendor/module-551 */).FDLayoutConstants,
            c = i(551 /* vendor/module-551 */).LayoutConstants,
            g = i(551 /* vendor/module-551 */).Point,
            u = i(551 /* vendor/module-551 */).PointD,
            f = i(551 /* vendor/module-551 */).DimensionD,
            p = i(551 /* vendor/module-551 */).Layout,
            m = i(551 /* vendor/module-551 */).Integer,
            y = i(551 /* vendor/module-551 */).IGeometry,
            v = i(551 /* vendor/module-551 */).LGraph,
            E = i(551 /* vendor/module-551 */).Transform,
            N = i(551 /* vendor/module-551 */).LinkedList;
          function T() {
            n.call(this), (this.toBeTiled = {}), (this.constraints = {});
          }
          for (var A in ((T.prototype = Object.create(n.prototype)), n))
            T[A] = n[A];
          (T.prototype.newGraphManager = function () {
            var t = new r(this);
            return (this.graphManager = t), t;
          }),
            (T.prototype.newGraph = function (t) {
              return new o(null, this.graphManager, t);
            }),
            (T.prototype.newNode = function (t) {
              return new s(this.graphManager, t);
            }),
            (T.prototype.newEdge = function (t) {
              return new a(null, null, t);
            }),
            (T.prototype.initParameters = function () {
              n.prototype.initParameters.call(this, arguments),
                this.isSubLayout ||
                  (h.DEFAULT_EDGE_LENGTH < 10
                    ? (this.idealEdgeLength = 10)
                    : (this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH),
                  (this.useSmartIdealEdgeLengthCalculation =
                    h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION),
                  (this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH),
                  (this.compoundGravityConstant =
                    d.DEFAULT_COMPOUND_GRAVITY_STRENGTH),
                  (this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR),
                  (this.compoundGravityRangeFactor =
                    d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR),
                  (this.prunedNodesAll = []),
                  (this.growTreeIterations = 0),
                  (this.afterGrowthIterations = 0),
                  (this.isTreeGrowing = !1),
                  (this.isGrowthFinished = !1));
            }),
            (T.prototype.initSpringEmbedder = function () {
              n.prototype.initSpringEmbedder.call(this),
                (this.coolingCycle = 0),
                (this.maxCoolingCycle =
                  this.maxIterations / d.CONVERGENCE_CHECK_PERIOD),
                (this.finalTemperature = 0.04),
                (this.coolingAdjuster = 1);
            }),
            (T.prototype.layout = function () {
              return (
                c.DEFAULT_CREATE_BENDS_AS_NEEDED &&
                  (this.createBendpoints(), this.graphManager.resetAllEdges()),
                (this.level = 0),
                this.classicLayout()
              );
            }),
            (T.prototype.classicLayout = function () {
              if (
                ((this.nodesWithGravity =
                  this.calculateNodesToApplyGravitationTo()),
                this.graphManager.setAllNodesToApplyGravitation(
                  this.nodesWithGravity,
                ),
                this.calcNoOfChildrenForAllNodes(),
                this.graphManager.calcLowestCommonAncestors(),
                this.graphManager.calcInclusionTreeDepths(),
                this.graphManager.getRoot().calcEstimatedSize(),
                this.calcIdealEdgeLengths(),
                this.incremental)
              )
                h.TREE_REDUCTION_ON_INCREMENTAL &&
                  (this.reduceTrees(),
                  this.graphManager.resetAllNodesToApplyGravitation(),
                  (e = new Set(this.getAllNodes())),
                  (i = this.nodesWithGravity.filter(function (t) {
                    return e.has(t);
                  })),
                  this.graphManager.setAllNodesToApplyGravitation(i));
              else {
                var t = this.getFlatForest();
                if (t.length > 0) this.positionNodesRadially(t);
                else {
                  this.reduceTrees(),
                    this.graphManager.resetAllNodesToApplyGravitation();
                  var e = new Set(this.getAllNodes()),
                    i = this.nodesWithGravity.filter(function (t) {
                      return e.has(t);
                    });
                  this.graphManager.setAllNodesToApplyGravitation(i),
                    this.positionNodesRandomly();
                }
              }
              return (
                Object.keys(this.constraints).length > 0 &&
                  (l.handleConstraints(this), this.initConstraintVariables()),
                this.initSpringEmbedder(),
                h.APPLY_LAYOUT && this.runSpringEmbedder(),
                !0
              );
            }),
            (T.prototype.tick = function () {
              if (
                (this.totalIterations++,
                this.totalIterations === this.maxIterations &&
                  !this.isTreeGrowing &&
                  !this.isGrowthFinished)
              ) {
                if (!(this.prunedNodesAll.length > 0)) return !0;
                this.isTreeGrowing = !0;
              }
              if (
                this.totalIterations % d.CONVERGENCE_CHECK_PERIOD == 0 &&
                !this.isTreeGrowing &&
                !this.isGrowthFinished
              ) {
                if (this.isConverged()) {
                  if (!(this.prunedNodesAll.length > 0)) return !0;
                  this.isTreeGrowing = !0;
                }
                this.coolingCycle++,
                  0 == this.layoutQuality
                    ? (this.coolingAdjuster = this.coolingCycle)
                    : 1 == this.layoutQuality &&
                      (this.coolingAdjuster = this.coolingCycle / 3),
                  (this.coolingFactor = Math.max(
                    this.initialCoolingFactor -
                      (Math.pow(
                        this.coolingCycle,
                        Math.log(
                          100 *
                            (this.initialCoolingFactor - this.finalTemperature),
                        ) / Math.log(this.maxCoolingCycle),
                      ) /
                        100) *
                        this.coolingAdjuster,
                    this.finalTemperature,
                  )),
                  (this.animationPeriod = Math.ceil(
                    this.initialAnimationPeriod * Math.sqrt(this.coolingFactor),
                  ));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(),
                      this.updateGrid(),
                      this.growTree(this.prunedNodesAll),
                      this.graphManager.resetAllNodesToApplyGravitation();
                    var t = new Set(this.getAllNodes()),
                      e = this.nodesWithGravity.filter(function (e) {
                        return t.has(e);
                      });
                    this.graphManager.setAllNodesToApplyGravitation(e),
                      this.graphManager.updateBounds(),
                      this.updateGrid(),
                      h.PURE_INCREMENTAL
                        ? (this.coolingFactor =
                            d.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2)
                        : (this.coolingFactor =
                            d.DEFAULT_COOLING_FACTOR_INCREMENTAL);
                  } else
                    (this.isTreeGrowing = !1), (this.isGrowthFinished = !0);
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged()) return !0;
                this.afterGrowthIterations % 10 == 0 &&
                  (this.graphManager.updateBounds(), this.updateGrid()),
                  h.PURE_INCREMENTAL
                    ? (this.coolingFactor =
                        (d.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2) *
                        ((100 - this.afterGrowthIterations) / 100))
                    : (this.coolingFactor =
                        d.DEFAULT_COOLING_FACTOR_INCREMENTAL *
                        ((100 - this.afterGrowthIterations) / 100)),
                  this.afterGrowthIterations++;
              }
              var i = !this.isTreeGrowing && !this.isGrowthFinished,
                n =
                  (this.growTreeIterations % 10 == 1 && this.isTreeGrowing) ||
                  (this.afterGrowthIterations % 10 == 1 &&
                    this.isGrowthFinished);
              return (
                (this.totalDisplacement = 0),
                this.graphManager.updateBounds(),
                this.calcSpringForces(),
                this.calcRepulsionForces(i, n),
                this.calcGravitationalForces(),
                this.moveNodes(),
                this.animate(),
                !1
              );
            }),
            (T.prototype.getPositionsData = function () {
              for (
                var t = this.graphManager.getAllNodes(), e = {}, i = 0;
                i < t.length;
                i++
              ) {
                var n = t[i].rect,
                  r = t[i].id;
                e[r] = {
                  id: r,
                  x: n.getCenterX(),
                  y: n.getCenterY(),
                  w: n.width,
                  h: n.height,
                };
              }
              return e;
            }),
            (T.prototype.runSpringEmbedder = function () {
              (this.initialAnimationPeriod = 25),
                (this.animationPeriod = this.initialAnimationPeriod);
              var t = !1;
              if ("during" === d.ANIMATE) this.emit("layoutstarted");
              else {
                for (; !t; ) t = this.tick();
                this.graphManager.updateBounds();
              }
            }),
            (T.prototype.moveNodes = function () {
              for (var t = this.getAllNodes(), e = 0; e < t.length; e++)
                t[e].calculateDisplacement();
              for (
                Object.keys(this.constraints).length > 0 &&
                  this.updateDisplacements(),
                  e = 0;
                e < t.length;
                e++
              )
                t[e].move();
            }),
            (T.prototype.initConstraintVariables = function () {
              var t = this;
              (this.idToNodeMap = new Map()), (this.fixedNodeSet = new Set());
              for (
                var e = this.graphManager.getAllNodes(), i = 0;
                i < e.length;
                i++
              ) {
                var n = e[i];
                this.idToNodeMap.set(n.id, n);
              }
              var r = function e(i) {
                for (
                  var n, r = i.getChild().getNodes(), o = 0, s = 0;
                  s < r.length;
                  s++
                )
                  null == (n = r[s]).getChild()
                    ? t.fixedNodeSet.has(n.id) && (o += 100)
                    : (o += e(n));
                return o;
              };
              if (this.constraints.fixedNodeConstraint)
                for (
                  this.constraints.fixedNodeConstraint.forEach(function (e) {
                    t.fixedNodeSet.add(e.nodeId);
                  }),
                    e = this.graphManager.getAllNodes(),
                    i = 0;
                  i < e.length;
                  i++
                )
                  if (null != (n = e[i]).getChild()) {
                    var o = r(n);
                    o > 0 && (n.fixedNodeWeight = o);
                  }
              if (this.constraints.relativePlacementConstraint) {
                var s = new Map(),
                  a = new Map();
                if (
                  ((this.dummyToNodeForVerticalAlignment = new Map()),
                  (this.dummyToNodeForHorizontalAlignment = new Map()),
                  (this.fixedNodesOnHorizontal = new Set()),
                  (this.fixedNodesOnVertical = new Set()),
                  this.fixedNodeSet.forEach(function (e) {
                    t.fixedNodesOnHorizontal.add(e),
                      t.fixedNodesOnVertical.add(e);
                  }),
                  this.constraints.alignmentConstraint)
                ) {
                  if (this.constraints.alignmentConstraint.vertical) {
                    var l = this.constraints.alignmentConstraint.vertical;
                    for (i = 0; i < l.length; i++)
                      this.dummyToNodeForVerticalAlignment.set("dummy" + i, []),
                        l[i].forEach(function (e) {
                          s.set(e, "dummy" + i),
                            t.dummyToNodeForVerticalAlignment
                              .get("dummy" + i)
                              .push(e),
                            t.fixedNodeSet.has(e) &&
                              t.fixedNodesOnHorizontal.add("dummy" + i);
                        });
                  }
                  if (this.constraints.alignmentConstraint.horizontal) {
                    var d = this.constraints.alignmentConstraint.horizontal;
                    for (i = 0; i < d.length; i++)
                      this.dummyToNodeForHorizontalAlignment.set(
                        "dummy" + i,
                        [],
                      ),
                        d[i].forEach(function (e) {
                          a.set(e, "dummy" + i),
                            t.dummyToNodeForHorizontalAlignment
                              .get("dummy" + i)
                              .push(e),
                            t.fixedNodeSet.has(e) &&
                              t.fixedNodesOnVertical.add("dummy" + i);
                        });
                  }
                }
                if (h.RELAX_MOVEMENT_ON_CONSTRAINTS)
                  (this.shuffle = function (t) {
                    var e, i, n;
                    for (n = t.length - 1; n >= (2 * t.length) / 3; n--)
                      (e = Math.floor(Math.random() * (n + 1))),
                        (i = t[n]),
                        (t[n] = t[e]),
                        (t[e] = i);
                    return t;
                  }),
                    (this.nodesInRelativeHorizontal = []),
                    (this.nodesInRelativeVertical = []),
                    (this.nodeToRelativeConstraintMapHorizontal = new Map()),
                    (this.nodeToRelativeConstraintMapVertical = new Map()),
                    (this.nodeToTempPositionMapHorizontal = new Map()),
                    (this.nodeToTempPositionMapVertical = new Map()),
                    this.constraints.relativePlacementConstraint.forEach(
                      function (e) {
                        if (e.left) {
                          var i = s.has(e.left) ? s.get(e.left) : e.left,
                            n = s.has(e.right) ? s.get(e.right) : e.right;
                          t.nodesInRelativeHorizontal.includes(i) ||
                            (t.nodesInRelativeHorizontal.push(i),
                            t.nodeToRelativeConstraintMapHorizontal.set(i, []),
                            t.dummyToNodeForVerticalAlignment.has(i)
                              ? t.nodeToTempPositionMapHorizontal.set(
                                  i,
                                  t.idToNodeMap
                                    .get(
                                      t.dummyToNodeForVerticalAlignment.get(
                                        i,
                                      )[0],
                                    )
                                    .getCenterX(),
                                )
                              : t.nodeToTempPositionMapHorizontal.set(
                                  i,
                                  t.idToNodeMap.get(i).getCenterX(),
                                )),
                            t.nodesInRelativeHorizontal.includes(n) ||
                              (t.nodesInRelativeHorizontal.push(n),
                              t.nodeToRelativeConstraintMapHorizontal.set(
                                n,
                                [],
                              ),
                              t.dummyToNodeForVerticalAlignment.has(n)
                                ? t.nodeToTempPositionMapHorizontal.set(
                                    n,
                                    t.idToNodeMap
                                      .get(
                                        t.dummyToNodeForVerticalAlignment.get(
                                          n,
                                        )[0],
                                      )
                                      .getCenterX(),
                                  )
                                : t.nodeToTempPositionMapHorizontal.set(
                                    n,
                                    t.idToNodeMap.get(n).getCenterX(),
                                  )),
                            t.nodeToRelativeConstraintMapHorizontal
                              .get(i)
                              .push({ right: n, gap: e.gap }),
                            t.nodeToRelativeConstraintMapHorizontal
                              .get(n)
                              .push({ left: i, gap: e.gap });
                        } else {
                          var r = a.has(e.top) ? a.get(e.top) : e.top,
                            o = a.has(e.bottom) ? a.get(e.bottom) : e.bottom;
                          t.nodesInRelativeVertical.includes(r) ||
                            (t.nodesInRelativeVertical.push(r),
                            t.nodeToRelativeConstraintMapVertical.set(r, []),
                            t.dummyToNodeForHorizontalAlignment.has(r)
                              ? t.nodeToTempPositionMapVertical.set(
                                  r,
                                  t.idToNodeMap
                                    .get(
                                      t.dummyToNodeForHorizontalAlignment.get(
                                        r,
                                      )[0],
                                    )
                                    .getCenterY(),
                                )
                              : t.nodeToTempPositionMapVertical.set(
                                  r,
                                  t.idToNodeMap.get(r).getCenterY(),
                                )),
                            t.nodesInRelativeVertical.includes(o) ||
                              (t.nodesInRelativeVertical.push(o),
                              t.nodeToRelativeConstraintMapVertical.set(o, []),
                              t.dummyToNodeForHorizontalAlignment.has(o)
                                ? t.nodeToTempPositionMapVertical.set(
                                    o,
                                    t.idToNodeMap
                                      .get(
                                        t.dummyToNodeForHorizontalAlignment.get(
                                          o,
                                        )[0],
                                      )
                                      .getCenterY(),
                                  )
                                : t.nodeToTempPositionMapVertical.set(
                                    o,
                                    t.idToNodeMap.get(o).getCenterY(),
                                  )),
                            t.nodeToRelativeConstraintMapVertical
                              .get(r)
                              .push({ bottom: o, gap: e.gap }),
                            t.nodeToRelativeConstraintMapVertical
                              .get(o)
                              .push({ top: r, gap: e.gap });
                        }
                      },
                    );
                else {
                  var c = new Map(),
                    g = new Map();
                  this.constraints.relativePlacementConstraint.forEach(
                    function (t) {
                      if (t.left) {
                        var e = s.has(t.left) ? s.get(t.left) : t.left,
                          i = s.has(t.right) ? s.get(t.right) : t.right;
                        c.has(e) ? c.get(e).push(i) : c.set(e, [i]),
                          c.has(i) ? c.get(i).push(e) : c.set(i, [e]);
                      } else {
                        var n = a.has(t.top) ? a.get(t.top) : t.top,
                          r = a.has(t.bottom) ? a.get(t.bottom) : t.bottom;
                        g.has(n) ? g.get(n).push(r) : g.set(n, [r]),
                          g.has(r) ? g.get(r).push(n) : g.set(r, [n]);
                      }
                    },
                  );
                  var u = function (t, e) {
                      var i = [],
                        n = [],
                        r = new N(),
                        o = new Set(),
                        s = 0;
                      return (
                        t.forEach(function (a, h) {
                          if (!o.has(h)) {
                            (i[s] = []), (n[s] = !1);
                            var l = h;
                            for (
                              r.push(l), o.add(l), i[s].push(l);
                              0 != r.length;

                            )
                              (l = r.shift()),
                                e.has(l) && (n[s] = !0),
                                t.get(l).forEach(function (t) {
                                  o.has(t) ||
                                    (r.push(t), o.add(t), i[s].push(t));
                                });
                            s++;
                          }
                        }),
                        { components: i, isFixed: n }
                      );
                    },
                    f = u(c, t.fixedNodesOnHorizontal);
                  (this.componentsOnHorizontal = f.components),
                    (this.fixedComponentsOnHorizontal = f.isFixed);
                  var p = u(g, t.fixedNodesOnVertical);
                  (this.componentsOnVertical = p.components),
                    (this.fixedComponentsOnVertical = p.isFixed);
                }
              }
            }),
            (T.prototype.updateDisplacements = function () {
              var t = this;
              if (
                (this.constraints.fixedNodeConstraint &&
                  this.constraints.fixedNodeConstraint.forEach(function (e) {
                    var i = t.idToNodeMap.get(e.nodeId);
                    (i.displacementX = 0), (i.displacementY = 0);
                  }),
                this.constraints.alignmentConstraint)
              ) {
                if (this.constraints.alignmentConstraint.vertical)
                  for (
                    var e = this.constraints.alignmentConstraint.vertical,
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    for (var n = 0, r = 0; r < e[i].length; r++) {
                      if (this.fixedNodeSet.has(e[i][r])) {
                        n = 0;
                        break;
                      }
                      n += this.idToNodeMap.get(e[i][r]).displacementX;
                    }
                    var o = n / e[i].length;
                    for (r = 0; r < e[i].length; r++)
                      this.idToNodeMap.get(e[i][r]).displacementX = o;
                  }
                if (this.constraints.alignmentConstraint.horizontal) {
                  var s = this.constraints.alignmentConstraint.horizontal;
                  for (i = 0; i < s.length; i++) {
                    var a = 0;
                    for (r = 0; r < s[i].length; r++) {
                      if (this.fixedNodeSet.has(s[i][r])) {
                        a = 0;
                        break;
                      }
                      a += this.idToNodeMap.get(s[i][r]).displacementY;
                    }
                    var l = a / s[i].length;
                    for (r = 0; r < s[i].length; r++)
                      this.idToNodeMap.get(s[i][r]).displacementY = l;
                  }
                }
              }
              if (this.constraints.relativePlacementConstraint)
                if (h.RELAX_MOVEMENT_ON_CONSTRAINTS)
                  this.totalIterations % 10 == 0 &&
                    (this.shuffle(this.nodesInRelativeHorizontal),
                    this.shuffle(this.nodesInRelativeVertical)),
                    this.nodesInRelativeHorizontal.forEach(function (e) {
                      if (!t.fixedNodesOnHorizontal.has(e)) {
                        var i = 0;
                        (i = t.dummyToNodeForVerticalAlignment.has(e)
                          ? t.idToNodeMap.get(
                              t.dummyToNodeForVerticalAlignment.get(e)[0],
                            ).displacementX
                          : t.idToNodeMap.get(e).displacementX),
                          t.nodeToRelativeConstraintMapHorizontal
                            .get(e)
                            .forEach(function (n) {
                              var r;
                              n.right
                                ? (r =
                                    t.nodeToTempPositionMapHorizontal.get(
                                      n.right,
                                    ) -
                                    t.nodeToTempPositionMapHorizontal.get(e) -
                                    i) < n.gap && (i -= n.gap - r)
                                : (r =
                                    t.nodeToTempPositionMapHorizontal.get(e) -
                                    t.nodeToTempPositionMapHorizontal.get(
                                      n.left,
                                    ) +
                                    i) < n.gap && (i += n.gap - r);
                            }),
                          t.nodeToTempPositionMapHorizontal.set(
                            e,
                            t.nodeToTempPositionMapHorizontal.get(e) + i,
                          ),
                          t.dummyToNodeForVerticalAlignment.has(e)
                            ? t.dummyToNodeForVerticalAlignment
                                .get(e)
                                .forEach(function (e) {
                                  t.idToNodeMap.get(e).displacementX = i;
                                })
                            : (t.idToNodeMap.get(e).displacementX = i);
                      }
                    }),
                    this.nodesInRelativeVertical.forEach(function (e) {
                      if (!t.fixedNodesOnHorizontal.has(e)) {
                        var i = 0;
                        (i = t.dummyToNodeForHorizontalAlignment.has(e)
                          ? t.idToNodeMap.get(
                              t.dummyToNodeForHorizontalAlignment.get(e)[0],
                            ).displacementY
                          : t.idToNodeMap.get(e).displacementY),
                          t.nodeToRelativeConstraintMapVertical
                            .get(e)
                            .forEach(function (n) {
                              var r;
                              n.bottom
                                ? (r =
                                    t.nodeToTempPositionMapVertical.get(
                                      n.bottom,
                                    ) -
                                    t.nodeToTempPositionMapVertical.get(e) -
                                    i) < n.gap && (i -= n.gap - r)
                                : (r =
                                    t.nodeToTempPositionMapVertical.get(e) -
                                    t.nodeToTempPositionMapVertical.get(n.top) +
                                    i) < n.gap && (i += n.gap - r);
                            }),
                          t.nodeToTempPositionMapVertical.set(
                            e,
                            t.nodeToTempPositionMapVertical.get(e) + i,
                          ),
                          t.dummyToNodeForHorizontalAlignment.has(e)
                            ? t.dummyToNodeForHorizontalAlignment
                                .get(e)
                                .forEach(function (e) {
                                  t.idToNodeMap.get(e).displacementY = i;
                                })
                            : (t.idToNodeMap.get(e).displacementY = i);
                      }
                    });
                else {
                  for (i = 0; i < this.componentsOnHorizontal.length; i++) {
                    var d = this.componentsOnHorizontal[i];
                    if (this.fixedComponentsOnHorizontal[i])
                      for (r = 0; r < d.length; r++)
                        this.dummyToNodeForVerticalAlignment.has(d[r])
                          ? this.dummyToNodeForVerticalAlignment
                              .get(d[r])
                              .forEach(function (e) {
                                t.idToNodeMap.get(e).displacementX = 0;
                              })
                          : (this.idToNodeMap.get(d[r]).displacementX = 0);
                    else {
                      var c = 0,
                        g = 0;
                      for (r = 0; r < d.length; r++)
                        this.dummyToNodeForVerticalAlignment.has(d[r])
                          ? ((c +=
                              (f = this.dummyToNodeForVerticalAlignment.get(
                                d[r],
                              )).length *
                              this.idToNodeMap.get(f[0]).displacementX),
                            (g += f.length))
                          : ((c += this.idToNodeMap.get(d[r]).displacementX),
                            g++);
                      var u = c / g;
                      for (r = 0; r < d.length; r++)
                        this.dummyToNodeForVerticalAlignment.has(d[r])
                          ? this.dummyToNodeForVerticalAlignment
                              .get(d[r])
                              .forEach(function (e) {
                                t.idToNodeMap.get(e).displacementX = u;
                              })
                          : (this.idToNodeMap.get(d[r]).displacementX = u);
                    }
                  }
                  for (i = 0; i < this.componentsOnVertical.length; i++)
                    if (
                      ((d = this.componentsOnVertical[i]),
                      this.fixedComponentsOnVertical[i])
                    )
                      for (r = 0; r < d.length; r++)
                        this.dummyToNodeForHorizontalAlignment.has(d[r])
                          ? this.dummyToNodeForHorizontalAlignment
                              .get(d[r])
                              .forEach(function (e) {
                                t.idToNodeMap.get(e).displacementY = 0;
                              })
                          : (this.idToNodeMap.get(d[r]).displacementY = 0);
                    else {
                      for (c = 0, g = 0, r = 0; r < d.length; r++) {
                        var f;
                        this.dummyToNodeForHorizontalAlignment.has(d[r])
                          ? ((c +=
                              (f = this.dummyToNodeForHorizontalAlignment.get(
                                d[r],
                              )).length *
                              this.idToNodeMap.get(f[0]).displacementY),
                            (g += f.length))
                          : ((c += this.idToNodeMap.get(d[r]).displacementY),
                            g++);
                      }
                      for (u = c / g, r = 0; r < d.length; r++)
                        this.dummyToNodeForHorizontalAlignment.has(d[r])
                          ? this.dummyToNodeForHorizontalAlignment
                              .get(d[r])
                              .forEach(function (e) {
                                t.idToNodeMap.get(e).displacementY = u;
                              })
                          : (this.idToNodeMap.get(d[r]).displacementY = u);
                    }
                }
            }),
            (T.prototype.calculateNodesToApplyGravitationTo = function () {
              var t,
                e,
                i = [],
                n = this.graphManager.getGraphs(),
                r = n.length;
              for (e = 0; e < r; e++)
                (t = n[e]).updateConnected(),
                  t.isConnected || (i = i.concat(t.getNodes()));
              return i;
            }),
            (T.prototype.createBendpoints = function () {
              var t = [];
              t = t.concat(this.graphManager.getAllEdges());
              var e,
                i = new Set();
              for (e = 0; e < t.length; e++) {
                var n = t[e];
                if (!i.has(n)) {
                  var r = n.getSource(),
                    o = n.getTarget();
                  if (r == o)
                    n.getBendpoints().push(new u()),
                      n.getBendpoints().push(new u()),
                      this.createDummyNodesForBendpoints(n),
                      i.add(n);
                  else {
                    var s = [];
                    if (
                      ((s = (s = s.concat(r.getEdgeListToNode(o))).concat(
                        o.getEdgeListToNode(r),
                      )),
                      !i.has(s[0]))
                    ) {
                      var a;
                      if (s.length > 1)
                        for (a = 0; a < s.length; a++) {
                          var h = s[a];
                          h.getBendpoints().push(new u()),
                            this.createDummyNodesForBendpoints(h);
                        }
                      s.forEach(function (t) {
                        i.add(t);
                      });
                    }
                  }
                }
                if (i.size == t.length) break;
              }
            }),
            (T.prototype.positionNodesRadially = function (t) {
              for (
                var e = new g(0, 0),
                  i = Math.ceil(Math.sqrt(t.length)),
                  n = 0,
                  r = 0,
                  o = 0,
                  s = new u(0, 0),
                  a = 0;
                a < t.length;
                a++
              ) {
                a % i == 0 &&
                  ((o = 0),
                  (r = n),
                  0 != a && (r += h.DEFAULT_COMPONENT_SEPERATION),
                  (n = 0));
                var l = t[a],
                  d = p.findCenterOfTree(l);
                (e.x = o),
                  (e.y = r),
                  (s = T.radialLayout(l, d, e)).y > n && (n = Math.floor(s.y)),
                  (o = Math.floor(s.x + h.DEFAULT_COMPONENT_SEPERATION));
              }
              this.transform(
                new u(c.WORLD_CENTER_X - s.x / 2, c.WORLD_CENTER_Y - s.y / 2),
              );
            }),
            (T.radialLayout = function (t, e, i) {
              var n = Math.max(
                this.maxDiagonalInTree(t),
                h.DEFAULT_RADIAL_SEPARATION,
              );
              T.branchRadialLayout(e, null, 0, 359, 0, n);
              var r = v.calculateBounds(t),
                o = new E();
              o.setDeviceOrgX(r.getMinX()),
                o.setDeviceOrgY(r.getMinY()),
                o.setWorldOrgX(i.x),
                o.setWorldOrgY(i.y);
              for (var s = 0; s < t.length; s++) t[s].transform(o);
              var a = new u(r.getMaxX(), r.getMaxY());
              return o.inverseTransformPoint(a);
            }),
            (T.branchRadialLayout = function (t, e, i, n, r, o) {
              var s = (n - i + 1) / 2;
              s < 0 && (s += 180);
              var a = (((s + i) % 360) * y.TWO_PI) / 360,
                h = (Math.cos(a), r * Math.cos(a)),
                l = r * Math.sin(a);
              t.setCenter(h, l);
              var d = [],
                c = (d = d.concat(t.getEdges())).length;
              null != e && c--;
              for (
                var g, u = 0, f = d.length, p = t.getEdgesBetween(e);
                p.length > 1;

              ) {
                var m = p[0];
                p.splice(0, 1);
                var v = d.indexOf(m);
                v >= 0 && d.splice(v, 1), f--, c--;
              }
              g = null != e ? (d.indexOf(p[0]) + 1) % f : 0;
              for (var E = Math.abs(n - i) / c, N = g; u != c; N = ++N % f) {
                var A = d[N].getOtherEnd(t);
                if (A != e) {
                  var w = (i + u * E) % 360,
                    I = (w + E) % 360;
                  T.branchRadialLayout(A, t, w, I, r + o, o), u++;
                }
              }
            }),
            (T.maxDiagonalInTree = function (t) {
              for (var e = m.MIN_VALUE, i = 0; i < t.length; i++) {
                var n = t[i].getDiagonal();
                n > e && (e = n);
              }
              return e;
            }),
            (T.prototype.calcRepulsionRange = function () {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }),
            (T.prototype.groupZeroDegreeMembers = function () {
              var t = this,
                e = {};
              (this.memberGroups = {}), (this.idToDummyNode = {});
              for (
                var i = [], n = this.graphManager.getAllNodes(), r = 0;
                r < n.length;
                r++
              ) {
                var o = (a = n[r]).getParent();
                0 !== this.getNodeDegreeWithChildren(a) ||
                  (null != o.id && this.getToBeTiled(o)) ||
                  i.push(a);
              }
              for (r = 0; r < i.length; r++) {
                var a,
                  h = (a = i[r]).getParent().id;
                void 0 === e[h] && (e[h] = []), (e[h] = e[h].concat(a));
              }
              Object.keys(e).forEach(function (i) {
                if (e[i].length > 1) {
                  var n = "DummyCompound_" + i;
                  t.memberGroups[n] = e[i];
                  var r = e[i][0].getParent(),
                    o = new s(t.graphManager);
                  (o.id = n),
                    (o.paddingLeft = r.paddingLeft || 0),
                    (o.paddingRight = r.paddingRight || 0),
                    (o.paddingBottom = r.paddingBottom || 0),
                    (o.paddingTop = r.paddingTop || 0),
                    (t.idToDummyNode[n] = o);
                  var a = t.getGraphManager().add(t.newGraph(), o),
                    h = r.getChild();
                  h.add(o);
                  for (var l = 0; l < e[i].length; l++) {
                    var d = e[i][l];
                    h.remove(d), a.add(d);
                  }
                }
              });
            }),
            (T.prototype.clearCompounds = function () {
              var t = {},
                e = {};
              this.performDFSOnCompounds();
              for (var i = 0; i < this.compoundOrder.length; i++)
                (e[this.compoundOrder[i].id] = this.compoundOrder[i]),
                  (t[this.compoundOrder[i].id] = [].concat(
                    this.compoundOrder[i].getChild().getNodes(),
                  )),
                  this.graphManager.remove(this.compoundOrder[i].getChild()),
                  (this.compoundOrder[i].child = null);
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(t, e);
            }),
            (T.prototype.clearZeroDegreeMembers = function () {
              var t = this,
                e = (this.tiledZeroDegreePack = []);
              Object.keys(this.memberGroups).forEach(function (i) {
                var n = t.idToDummyNode[i];
                if (
                  ((e[i] = t.tileNodes(
                    t.memberGroups[i],
                    n.paddingLeft + n.paddingRight,
                  )),
                  (n.rect.width = e[i].width),
                  (n.rect.height = e[i].height),
                  n.setCenter(e[i].centerX, e[i].centerY),
                  (n.labelMarginLeft = 0),
                  (n.labelMarginTop = 0),
                  h.NODE_DIMENSIONS_INCLUDE_LABELS)
                ) {
                  var r = n.rect.width,
                    o = n.rect.height;
                  n.labelWidth &&
                    ("left" == n.labelPosHorizontal
                      ? ((n.rect.x -= n.labelWidth),
                        n.setWidth(r + n.labelWidth),
                        (n.labelMarginLeft = n.labelWidth))
                      : "center" == n.labelPosHorizontal && n.labelWidth > r
                        ? ((n.rect.x -= (n.labelWidth - r) / 2),
                          n.setWidth(n.labelWidth),
                          (n.labelMarginLeft = (n.labelWidth - r) / 2))
                        : "right" == n.labelPosHorizontal &&
                          n.setWidth(r + n.labelWidth)),
                    n.labelHeight &&
                      ("top" == n.labelPosVertical
                        ? ((n.rect.y -= n.labelHeight),
                          n.setHeight(o + n.labelHeight),
                          (n.labelMarginTop = n.labelHeight))
                        : "center" == n.labelPosVertical && n.labelHeight > o
                          ? ((n.rect.y -= (n.labelHeight - o) / 2),
                            n.setHeight(n.labelHeight),
                            (n.labelMarginTop = (n.labelHeight - o) / 2))
                          : "bottom" == n.labelPosVertical &&
                            n.setHeight(o + n.labelHeight));
                }
              });
            }),
            (T.prototype.repopulateCompounds = function () {
              for (var t = this.compoundOrder.length - 1; t >= 0; t--) {
                var e = this.compoundOrder[t],
                  i = e.id,
                  n = e.paddingLeft,
                  r = e.paddingTop,
                  o = e.labelMarginLeft,
                  s = e.labelMarginTop;
                this.adjustLocations(
                  this.tiledMemberPack[i],
                  e.rect.x,
                  e.rect.y,
                  n,
                  r,
                  o,
                  s,
                );
              }
            }),
            (T.prototype.repopulateZeroDegreeMembers = function () {
              var t = this,
                e = this.tiledZeroDegreePack;
              Object.keys(e).forEach(function (i) {
                var n = t.idToDummyNode[i],
                  r = n.paddingLeft,
                  o = n.paddingTop,
                  s = n.labelMarginLeft,
                  a = n.labelMarginTop;
                t.adjustLocations(e[i], n.rect.x, n.rect.y, r, o, s, a);
              });
            }),
            (T.prototype.getToBeTiled = function (t) {
              var e = t.id;
              if (null != this.toBeTiled[e]) return this.toBeTiled[e];
              var i = t.getChild();
              if (null == i) return (this.toBeTiled[e] = !1), !1;
              for (var n = i.getNodes(), r = 0; r < n.length; r++) {
                var o = n[r];
                if (this.getNodeDegree(o) > 0)
                  return (this.toBeTiled[e] = !1), !1;
                if (null != o.getChild()) {
                  if (!this.getToBeTiled(o))
                    return (this.toBeTiled[e] = !1), !1;
                } else this.toBeTiled[o.id] = !1;
              }
              return (this.toBeTiled[e] = !0), !0;
            }),
            (T.prototype.getNodeDegree = function (t) {
              t.id;
              for (var e = t.getEdges(), i = 0, n = 0; n < e.length; n++) {
                var r = e[n];
                r.getSource().id !== r.getTarget().id && (i += 1);
              }
              return i;
            }),
            (T.prototype.getNodeDegreeWithChildren = function (t) {
              var e = this.getNodeDegree(t);
              if (null == t.getChild()) return e;
              for (var i = t.getChild().getNodes(), n = 0; n < i.length; n++) {
                var r = i[n];
                e += this.getNodeDegreeWithChildren(r);
              }
              return e;
            }),
            (T.prototype.performDFSOnCompounds = function () {
              (this.compoundOrder = []),
                this.fillCompexOrderByDFS(
                  this.graphManager.getRoot().getNodes(),
                );
            }),
            (T.prototype.fillCompexOrderByDFS = function (t) {
              for (var e = 0; e < t.length; e++) {
                var i = t[e];
                null != i.getChild() &&
                  this.fillCompexOrderByDFS(i.getChild().getNodes()),
                  this.getToBeTiled(i) && this.compoundOrder.push(i);
              }
            }),
            (T.prototype.adjustLocations = function (t, e, i, n, r, o, s) {
              i += r + s;
              for (var a = (e += n + o), h = 0; h < t.rows.length; h++) {
                var l = t.rows[h];
                e = a;
                for (var d = 0, c = 0; c < l.length; c++) {
                  var g = l[c];
                  (g.rect.x = e),
                    (g.rect.y = i),
                    (e += g.rect.width + t.horizontalPadding),
                    g.rect.height > d && (d = g.rect.height);
                }
                i += d + t.verticalPadding;
              }
            }),
            (T.prototype.tileCompoundMembers = function (t, e) {
              var i = this;
              (this.tiledMemberPack = []),
                Object.keys(t).forEach(function (n) {
                  var r = e[n];
                  if (
                    ((i.tiledMemberPack[n] = i.tileNodes(
                      t[n],
                      r.paddingLeft + r.paddingRight,
                    )),
                    (r.rect.width = i.tiledMemberPack[n].width),
                    (r.rect.height = i.tiledMemberPack[n].height),
                    r.setCenter(
                      i.tiledMemberPack[n].centerX,
                      i.tiledMemberPack[n].centerY,
                    ),
                    (r.labelMarginLeft = 0),
                    (r.labelMarginTop = 0),
                    h.NODE_DIMENSIONS_INCLUDE_LABELS)
                  ) {
                    var o = r.rect.width,
                      s = r.rect.height;
                    r.labelWidth &&
                      ("left" == r.labelPosHorizontal
                        ? ((r.rect.x -= r.labelWidth),
                          r.setWidth(o + r.labelWidth),
                          (r.labelMarginLeft = r.labelWidth))
                        : "center" == r.labelPosHorizontal && r.labelWidth > o
                          ? ((r.rect.x -= (r.labelWidth - o) / 2),
                            r.setWidth(r.labelWidth),
                            (r.labelMarginLeft = (r.labelWidth - o) / 2))
                          : "right" == r.labelPosHorizontal &&
                            r.setWidth(o + r.labelWidth)),
                      r.labelHeight &&
                        ("top" == r.labelPosVertical
                          ? ((r.rect.y -= r.labelHeight),
                            r.setHeight(s + r.labelHeight),
                            (r.labelMarginTop = r.labelHeight))
                          : "center" == r.labelPosVertical && r.labelHeight > s
                            ? ((r.rect.y -= (r.labelHeight - s) / 2),
                              r.setHeight(r.labelHeight),
                              (r.labelMarginTop = (r.labelHeight - s) / 2))
                            : "bottom" == r.labelPosVertical &&
                              r.setHeight(s + r.labelHeight));
                  }
                });
            }),
            (T.prototype.tileNodes = function (t, e) {
              var i = this.tileNodesByFavoringDim(t, e, !0),
                n = this.tileNodesByFavoringDim(t, e, !1),
                r = this.getOrgRatio(i);
              return this.getOrgRatio(n) < r ? n : i;
            }),
            (T.prototype.getOrgRatio = function (t) {
              var e = t.width / t.height;
              return e < 1 && (e = 1 / e), e;
            }),
            (T.prototype.calcIdealRowWidth = function (t, e) {
              var i = h.TILING_PADDING_VERTICAL,
                n = h.TILING_PADDING_HORIZONTAL,
                r = t.length,
                o = 0,
                s = 0,
                a = 0;
              t.forEach(function (t) {
                (o += t.getWidth()),
                  (s += t.getHeight()),
                  t.getWidth() > a && (a = t.getWidth());
              });
              var l,
                d = o / r,
                c = s / r,
                g = Math.pow(i - n, 2) + 4 * (d + n) * (c + i) * r,
                u = (n - i + Math.sqrt(g)) / (2 * (d + n));
              e ? (l = Math.ceil(u)) == u && l++ : (l = Math.floor(u));
              var f = l * (d + n) - n;
              return a > f && (f = a), f + 2 * n;
            }),
            (T.prototype.tileNodesByFavoringDim = function (t, e, i) {
              var n = h.TILING_PADDING_VERTICAL,
                r = h.TILING_PADDING_HORIZONTAL,
                o = h.TILING_COMPARE_BY,
                s = {
                  rows: [],
                  rowWidth: [],
                  rowHeight: [],
                  width: 0,
                  height: e,
                  verticalPadding: n,
                  horizontalPadding: r,
                  centerX: 0,
                  centerY: 0,
                };
              o && (s.idealRowWidth = this.calcIdealRowWidth(t, i));
              var a = function (t) {
                  return t.rect.width * t.rect.height;
                },
                l = function (t, e) {
                  return a(e) - a(t);
                };
              t.sort(function (t, e) {
                var i = l;
                return s.idealRowWidth ? (i = o)(t.id, e.id) : i(t, e);
              });
              for (var d = 0, c = 0, g = 0; g < t.length; g++)
                (d += (u = t[g]).getCenterX()), (c += u.getCenterY());
              for (
                s.centerX = d / t.length, s.centerY = c / t.length, g = 0;
                g < t.length;
                g++
              ) {
                var u = t[g];
                if (0 == s.rows.length) this.insertNodeToRow(s, u, 0, e);
                else if (
                  this.canAddHorizontal(s, u.rect.width, u.rect.height)
                ) {
                  var f = s.rows.length - 1;
                  s.idealRowWidth || (f = this.getShortestRowIndex(s)),
                    this.insertNodeToRow(s, u, f, e);
                } else this.insertNodeToRow(s, u, s.rows.length, e);
                this.shiftToLastRow(s);
              }
              return s;
            }),
            (T.prototype.insertNodeToRow = function (t, e, i, n) {
              var r = n;
              i == t.rows.length &&
                (t.rows.push([]), t.rowWidth.push(r), t.rowHeight.push(0));
              var o = t.rowWidth[i] + e.rect.width;
              t.rows[i].length > 0 && (o += t.horizontalPadding),
                (t.rowWidth[i] = o),
                t.width < o && (t.width = o);
              var s = e.rect.height;
              i > 0 && (s += t.verticalPadding);
              var a = 0;
              s > t.rowHeight[i] &&
                ((a = t.rowHeight[i]),
                (t.rowHeight[i] = s),
                (a = t.rowHeight[i] - a)),
                (t.height += a),
                t.rows[i].push(e);
            }),
            (T.prototype.getShortestRowIndex = function (t) {
              for (
                var e = -1, i = Number.MAX_VALUE, n = 0;
                n < t.rows.length;
                n++
              )
                t.rowWidth[n] < i && ((e = n), (i = t.rowWidth[n]));
              return e;
            }),
            (T.prototype.getLongestRowIndex = function (t) {
              for (
                var e = -1, i = Number.MIN_VALUE, n = 0;
                n < t.rows.length;
                n++
              )
                t.rowWidth[n] > i && ((e = n), (i = t.rowWidth[n]));
              return e;
            }),
            (T.prototype.canAddHorizontal = function (t, e, i) {
              if (t.idealRowWidth) {
                var n = t.rows.length - 1;
                return (
                  t.rowWidth[n] + e + t.horizontalPadding <= t.idealRowWidth
                );
              }
              var r = this.getShortestRowIndex(t);
              if (r < 0) return !0;
              var o = t.rowWidth[r];
              if (o + t.horizontalPadding + e <= t.width) return !0;
              var s,
                a,
                h = 0;
              return (
                t.rowHeight[r] < i &&
                  r > 0 &&
                  (h = i + t.verticalPadding - t.rowHeight[r]),
                (s =
                  t.width - o >= e + t.horizontalPadding
                    ? (t.height + h) / (o + e + t.horizontalPadding)
                    : (t.height + h) / t.width),
                (h = i + t.verticalPadding),
                (a =
                  t.width < e ? (t.height + h) / e : (t.height + h) / t.width) <
                  1 && (a = 1 / a),
                s < 1 && (s = 1 / s),
                s < a
              );
            }),
            (T.prototype.shiftToLastRow = function (t) {
              var e = this.getLongestRowIndex(t),
                i = t.rowWidth.length - 1,
                n = t.rows[e],
                r = n[n.length - 1],
                o = r.width + t.horizontalPadding;
              if (t.width - t.rowWidth[i] > o && e != i) {
                n.splice(-1, 1),
                  t.rows[i].push(r),
                  (t.rowWidth[e] = t.rowWidth[e] - o),
                  (t.rowWidth[i] = t.rowWidth[i] + o),
                  (t.width = t.rowWidth[instance.getLongestRowIndex(t)]);
                for (var s = Number.MIN_VALUE, a = 0; a < n.length; a++)
                  n[a].height > s && (s = n[a].height);
                e > 0 && (s += t.verticalPadding);
                var h = t.rowHeight[e] + t.rowHeight[i];
                (t.rowHeight[e] = s),
                  t.rowHeight[i] < r.height + t.verticalPadding &&
                    (t.rowHeight[i] = r.height + t.verticalPadding);
                var l = t.rowHeight[e] + t.rowHeight[i];
                (t.height += l - h), this.shiftToLastRow(t);
              }
            }),
            (T.prototype.tilingPreLayout = function () {
              h.TILE &&
                (this.groupZeroDegreeMembers(),
                this.clearCompounds(),
                this.clearZeroDegreeMembers());
            }),
            (T.prototype.tilingPostLayout = function () {
              h.TILE &&
                (this.repopulateZeroDegreeMembers(),
                this.repopulateCompounds());
            }),
            (T.prototype.reduceTrees = function () {
              for (var t, e = [], i = !0; i; ) {
                var n = this.graphManager.getAllNodes(),
                  r = [];
                i = !1;
                for (var o = 0; o < n.length; o++)
                  if (
                    1 == (t = n[o]).getEdges().length &&
                    !t.getEdges()[0].isInterGraph &&
                    null == t.getChild()
                  ) {
                    if (h.PURE_INCREMENTAL) {
                      var s = t.getEdges()[0].getOtherEnd(t),
                        a = new f(
                          t.getCenterX() - s.getCenterX(),
                          t.getCenterY() - s.getCenterY(),
                        );
                      r.push([t, t.getEdges()[0], t.getOwner(), a]);
                    } else r.push([t, t.getEdges()[0], t.getOwner()]);
                    i = !0;
                  }
                if (1 == i) {
                  for (var l = [], d = 0; d < r.length; d++)
                    1 == r[d][0].getEdges().length &&
                      (l.push(r[d]), r[d][0].getOwner().remove(r[d][0]));
                  e.push(l),
                    this.graphManager.resetAllNodes(),
                    this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = e;
            }),
            (T.prototype.growTree = function (t) {
              for (var e, i = t[t.length - 1], n = 0; n < i.length; n++)
                (e = i[n]),
                  this.findPlaceforPrunedNode(e),
                  e[2].add(e[0]),
                  e[2].add(e[1], e[1].source, e[1].target);
              t.splice(t.length - 1, 1),
                this.graphManager.resetAllNodes(),
                this.graphManager.resetAllEdges();
            }),
            (T.prototype.findPlaceforPrunedNode = function (t) {
              var e,
                i,
                n = t[0];
              if (
                ((i = n == t[1].source ? t[1].target : t[1].source),
                h.PURE_INCREMENTAL)
              )
                n.setCenter(
                  i.getCenterX() + t[3].getWidth(),
                  i.getCenterY() + t[3].getHeight(),
                );
              else {
                var r = i.startX,
                  o = i.finishX,
                  s = i.startY,
                  a = i.finishY,
                  l = [0, 0, 0, 0];
                if (s > 0)
                  for (var c = r; c <= o; c++)
                    l[0] +=
                      this.grid[c][s - 1].length + this.grid[c][s].length - 1;
                if (o < this.grid.length - 1)
                  for (c = s; c <= a; c++)
                    l[1] +=
                      this.grid[o + 1][c].length + this.grid[o][c].length - 1;
                if (a < this.grid[0].length - 1)
                  for (c = r; c <= o; c++)
                    l[2] +=
                      this.grid[c][a + 1].length + this.grid[c][a].length - 1;
                if (r > 0)
                  for (c = s; c <= a; c++)
                    l[3] +=
                      this.grid[r - 1][c].length + this.grid[r][c].length - 1;
                for (var g, u, f = m.MAX_VALUE, p = 0; p < l.length; p++)
                  l[p] < f ? ((f = l[p]), (g = 1), (u = p)) : l[p] == f && g++;
                if (3 == g && 0 == f)
                  0 == l[0] && 0 == l[1] && 0 == l[2]
                    ? (e = 1)
                    : 0 == l[0] && 0 == l[1] && 0 == l[3]
                      ? (e = 0)
                      : 0 == l[0] && 0 == l[2] && 0 == l[3]
                        ? (e = 3)
                        : 0 == l[1] && 0 == l[2] && 0 == l[3] && (e = 2);
                else if (2 == g && 0 == f) {
                  var y = Math.floor(2 * Math.random());
                  e =
                    0 == l[0] && 0 == l[1]
                      ? 0 == y
                        ? 0
                        : 1
                      : 0 == l[0] && 0 == l[2]
                        ? 0 == y
                          ? 0
                          : 2
                        : 0 == l[0] && 0 == l[3]
                          ? 0 == y
                            ? 0
                            : 3
                          : 0 == l[1] && 0 == l[2]
                            ? 0 == y
                              ? 1
                              : 2
                            : 0 == l[1] && 0 == l[3]
                              ? 0 == y
                                ? 1
                                : 3
                              : 0 == y
                                ? 2
                                : 3;
                } else
                  e =
                    4 == g && 0 == f ? (y = Math.floor(4 * Math.random())) : u;
                0 == e
                  ? n.setCenter(
                      i.getCenterX(),
                      i.getCenterY() -
                        i.getHeight() / 2 -
                        d.DEFAULT_EDGE_LENGTH -
                        n.getHeight() / 2,
                    )
                  : 1 == e
                    ? n.setCenter(
                        i.getCenterX() +
                          i.getWidth() / 2 +
                          d.DEFAULT_EDGE_LENGTH +
                          n.getWidth() / 2,
                        i.getCenterY(),
                      )
                    : 2 == e
                      ? n.setCenter(
                          i.getCenterX(),
                          i.getCenterY() +
                            i.getHeight() / 2 +
                            d.DEFAULT_EDGE_LENGTH +
                            n.getHeight() / 2,
                        )
                      : n.setCenter(
                          i.getCenterX() -
                            i.getWidth() / 2 -
                            d.DEFAULT_EDGE_LENGTH -
                            n.getWidth() / 2,
                          i.getCenterY(),
                        );
              }
            }),
            (t.exports = T);
        },
        991: (t, e, i) => {
          var n = i(551 /* vendor/module-551 */).FDLayoutNode,
            r = i(551 /* vendor/module-551 */).IMath;
          function o(t, e, i, r) {
            n.call(this, t, e, i, r);
          }
          for (var s in ((o.prototype = Object.create(n.prototype)), n))
            o[s] = n[s];
          (o.prototype.calculateDisplacement = function () {
            var t = this.graphManager.getLayout();
            null != this.getChild() && this.fixedNodeWeight
              ? ((this.displacementX +=
                  (t.coolingFactor *
                    (this.springForceX +
                      this.repulsionForceX +
                      this.gravitationForceX)) /
                  this.fixedNodeWeight),
                (this.displacementY +=
                  (t.coolingFactor *
                    (this.springForceY +
                      this.repulsionForceY +
                      this.gravitationForceY)) /
                  this.fixedNodeWeight))
              : ((this.displacementX +=
                  (t.coolingFactor *
                    (this.springForceX +
                      this.repulsionForceX +
                      this.gravitationForceX)) /
                  this.noOfChildren),
                (this.displacementY +=
                  (t.coolingFactor *
                    (this.springForceY +
                      this.repulsionForceY +
                      this.gravitationForceY)) /
                  this.noOfChildren)),
              Math.abs(this.displacementX) >
                t.coolingFactor * t.maxNodeDisplacement &&
                (this.displacementX =
                  t.coolingFactor *
                  t.maxNodeDisplacement *
                  r.sign(this.displacementX)),
              Math.abs(this.displacementY) >
                t.coolingFactor * t.maxNodeDisplacement &&
                (this.displacementY =
                  t.coolingFactor *
                  t.maxNodeDisplacement *
                  r.sign(this.displacementY)),
              this.child &&
                this.child.getNodes().length > 0 &&
                this.propogateDisplacementToChildren(
                  this.displacementX,
                  this.displacementY,
                );
          }),
            (o.prototype.propogateDisplacementToChildren = function (t, e) {
              for (
                var i, n = this.getChild().getNodes(), r = 0;
                r < n.length;
                r++
              )
                null == (i = n[r]).getChild()
                  ? ((i.displacementX += t), (i.displacementY += e))
                  : i.propogateDisplacementToChildren(t, e);
            }),
            (o.prototype.move = function () {
              var t = this.graphManager.getLayout();
              (null != this.child && 0 != this.child.getNodes().length) ||
                (this.moveBy(this.displacementX, this.displacementY),
                (t.totalDisplacement +=
                  Math.abs(this.displacementX) + Math.abs(this.displacementY))),
                (this.springForceX = 0),
                (this.springForceY = 0),
                (this.repulsionForceX = 0),
                (this.repulsionForceY = 0),
                (this.gravitationForceX = 0),
                (this.gravitationForceY = 0),
                (this.displacementX = 0),
                (this.displacementY = 0);
            }),
            (o.prototype.setPred1 = function (t) {
              this.pred1 = t;
            }),
            (o.prototype.getPred1 = function () {
              return pred1;
            }),
            (o.prototype.getPred2 = function () {
              return pred2;
            }),
            (o.prototype.setNext = function (t) {
              this.next = t;
            }),
            (o.prototype.getNext = function () {
              return next;
            }),
            (o.prototype.setProcessed = function (t) {
              this.processed = t;
            }),
            (o.prototype.isProcessed = function () {
              return processed;
            }),
            (t.exports = o);
        },
        902: (t, e, i) => {
          function n(t) {
            if (Array.isArray(t)) {
              for (var e = 0, i = Array(t.length); e < t.length; e++)
                i[e] = t[e];
              return i;
            }
            return Array.from(t);
          }
          var r = i(806 /* vendor/module-806 */),
            o = i(551 /* vendor/module-551 */).LinkedList,
            s = i(551 /* vendor/module-551 */).Matrix,
            a = i(551 /* vendor/module-551 */).SVD;
          function h() {}
          (h.handleConstraints = function (t) {
            var e = {};
            (e.fixedNodeConstraint = t.constraints.fixedNodeConstraint),
              (e.alignmentConstraint = t.constraints.alignmentConstraint),
              (e.relativePlacementConstraint =
                t.constraints.relativePlacementConstraint);
            for (
              var i = new Map(),
                h = new Map(),
                l = [],
                d = [],
                c = t.getAllNodes(),
                g = 0,
                u = 0;
              u < c.length;
              u++
            ) {
              var f = c[u];
              null == f.getChild() &&
                (h.set(f.id, g++),
                l.push(f.getCenterX()),
                d.push(f.getCenterY()),
                i.set(f.id, f));
            }
            e.relativePlacementConstraint &&
              e.relativePlacementConstraint.forEach(function (t) {
                t.gap ||
                  0 == t.gap ||
                  (t.left
                    ? (t.gap =
                        r.DEFAULT_EDGE_LENGTH +
                        i.get(t.left).getWidth() / 2 +
                        i.get(t.right).getWidth() / 2)
                    : (t.gap =
                        r.DEFAULT_EDGE_LENGTH +
                        i.get(t.top).getHeight() / 2 +
                        i.get(t.bottom).getHeight() / 2));
              });
            var p = function (t) {
                var e = 0,
                  i = 0;
                return (
                  t.forEach(function (t) {
                    (e += l[h.get(t)]), (i += d[h.get(t)]);
                  }),
                  { x: e / t.size, y: i / t.size }
                );
              },
              m = function (t, e, i, r, s) {
                var a = new Map();
                t.forEach(function (t, e) {
                  a.set(e, 0);
                }),
                  t.forEach(function (t, e) {
                    t.forEach(function (t) {
                      a.set(t.id, a.get(t.id) + 1);
                    });
                  });
                var c = new Map(),
                  g = new Map(),
                  u = new o();
                a.forEach(function (t, n) {
                  0 == t
                    ? (u.push(n),
                      i ||
                        ("horizontal" == e
                          ? c.set(n, h.has(n) ? l[h.get(n)] : r.get(n))
                          : c.set(n, h.has(n) ? d[h.get(n)] : r.get(n))))
                    : c.set(n, Number.NEGATIVE_INFINITY),
                    i && g.set(n, new Set([n]));
                }),
                  i &&
                    s.forEach(function (t) {
                      var n = [];
                      if (
                        (t.forEach(function (t) {
                          i.has(t) && n.push(t);
                        }),
                        n.length > 0)
                      ) {
                        var o = 0;
                        n.forEach(function (t) {
                          "horizontal" == e
                            ? (c.set(t, h.has(t) ? l[h.get(t)] : r.get(t)),
                              (o += c.get(t)))
                            : (c.set(t, h.has(t) ? d[h.get(t)] : r.get(t)),
                              (o += c.get(t)));
                        }),
                          (o /= n.length),
                          t.forEach(function (t) {
                            i.has(t) || c.set(t, o);
                          });
                      } else {
                        var s = 0;
                        t.forEach(function (t) {
                          s +=
                            "horizontal" == e
                              ? h.has(t)
                                ? l[h.get(t)]
                                : r.get(t)
                              : h.has(t)
                                ? d[h.get(t)]
                                : r.get(t);
                        }),
                          (s /= t.length),
                          t.forEach(function (t) {
                            c.set(t, s);
                          });
                      }
                    });
                for (
                  var f = function () {
                    var n = u.shift();
                    t.get(n).forEach(function (t) {
                      if (c.get(t.id) < c.get(n) + t.gap)
                        if (i && i.has(t.id)) {
                          var o;
                          if (
                            ((o =
                              "horizontal" == e
                                ? h.has(t.id)
                                  ? l[h.get(t.id)]
                                  : r.get(t.id)
                                : h.has(t.id)
                                  ? d[h.get(t.id)]
                                  : r.get(t.id)),
                            c.set(t.id, o),
                            o < c.get(n) + t.gap)
                          ) {
                            var s = c.get(n) + t.gap - o;
                            g.get(n).forEach(function (t) {
                              c.set(t, c.get(t) - s);
                            });
                          }
                        } else c.set(t.id, c.get(n) + t.gap);
                      a.set(t.id, a.get(t.id) - 1),
                        0 == a.get(t.id) && u.push(t.id),
                        i &&
                          g.set(
                            t.id,
                            (function (t, e) {
                              var i = new Set(t),
                                n = !0,
                                r = !1,
                                o = void 0;
                              try {
                                for (
                                  var s, a = e[Symbol.iterator]();
                                  !(n = (s = a.next()).done);
                                  n = !0
                                ) {
                                  var h = s.value;
                                  i.add(h);
                                }
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
                            })(g.get(n), g.get(t.id)),
                          );
                    });
                  };
                  0 != u.length;

                )
                  f();
                if (i) {
                  var p = new Set();
                  t.forEach(function (t, e) {
                    0 == t.length && p.add(e);
                  });
                  var m = [];
                  g.forEach(function (t, e) {
                    if (p.has(e)) {
                      var r = !1,
                        o = !0,
                        s = !1,
                        a = void 0;
                      try {
                        for (
                          var h, l = t[Symbol.iterator]();
                          !(o = (h = l.next()).done);
                          o = !0
                        ) {
                          var d = h.value;
                          i.has(d) && (r = !0);
                        }
                      } catch (t) {
                        (s = !0), (a = t);
                      } finally {
                        try {
                          !o && l.return && l.return();
                        } finally {
                          if (s) throw a;
                        }
                      }
                      if (!r) {
                        var c = !1,
                          g = void 0;
                        m.forEach(function (e, i) {
                          e.has([].concat(n(t))[0]) && ((c = !0), (g = i));
                        }),
                          c
                            ? t.forEach(function (t) {
                                m[g].add(t);
                              })
                            : m.push(new Set(t));
                      }
                    }
                  }),
                    m.forEach(function (t, i) {
                      var n = Number.POSITIVE_INFINITY,
                        o = Number.POSITIVE_INFINITY,
                        s = Number.NEGATIVE_INFINITY,
                        a = Number.NEGATIVE_INFINITY,
                        g = !0,
                        u = !1,
                        f = void 0;
                      try {
                        for (
                          var p, m = t[Symbol.iterator]();
                          !(g = (p = m.next()).done);
                          g = !0
                        ) {
                          var y,
                            v = p.value;
                          y =
                            "horizontal" == e
                              ? h.has(v)
                                ? l[h.get(v)]
                                : r.get(v)
                              : h.has(v)
                                ? d[h.get(v)]
                                : r.get(v);
                          var E = c.get(v);
                          y < n && (n = y),
                            y > s && (s = y),
                            E < o && (o = E),
                            E > a && (a = E);
                        }
                      } catch (t) {
                        (u = !0), (f = t);
                      } finally {
                        try {
                          !g && m.return && m.return();
                        } finally {
                          if (u) throw f;
                        }
                      }
                      var N = (n + s) / 2 - (o + a) / 2,
                        T = !0,
                        A = !1,
                        w = void 0;
                      try {
                        for (
                          var I, C = t[Symbol.iterator]();
                          !(T = (I = C.next()).done);
                          T = !0
                        ) {
                          var L = I.value;
                          c.set(L, c.get(L) + N);
                        }
                      } catch (t) {
                        (A = !0), (w = t);
                      } finally {
                        try {
                          !T && C.return && C.return();
                        } finally {
                          if (A) throw w;
                        }
                      }
                    });
                }
                return c;
              },
              y = function (t) {
                var e = 0,
                  i = 0,
                  n = 0,
                  r = 0;
                if (
                  (t.forEach(function (t) {
                    t.left
                      ? l[h.get(t.left)] - l[h.get(t.right)] >= 0
                        ? e++
                        : i++
                      : d[h.get(t.top)] - d[h.get(t.bottom)] >= 0
                        ? n++
                        : r++;
                  }),
                  e > i && n > r)
                )
                  for (var o = 0; o < h.size; o++)
                    (l[o] = -1 * l[o]), (d[o] = -1 * d[o]);
                else if (e > i)
                  for (var s = 0; s < h.size; s++) l[s] = -1 * l[s];
                else if (n > r)
                  for (var a = 0; a < h.size; a++) d[a] = -1 * d[a];
              },
              v = function (t) {
                var e = [],
                  i = new o(),
                  n = new Set(),
                  r = 0;
                return (
                  t.forEach(function (o, s) {
                    if (!n.has(s)) {
                      e[r] = [];
                      var a = s;
                      for (i.push(a), n.add(a), e[r].push(a); 0 != i.length; )
                        (a = i.shift()),
                          t.get(a).forEach(function (t) {
                            n.has(t.id) ||
                              (i.push(t.id), n.add(t.id), e[r].push(t.id));
                          });
                      r++;
                    }
                  }),
                  e
                );
              },
              E = function (t) {
                var e = new Map();
                return (
                  t.forEach(function (t, i) {
                    e.set(i, []);
                  }),
                  t.forEach(function (t, i) {
                    t.forEach(function (t) {
                      e.get(i).push(t),
                        e.get(t.id).push({
                          id: i,
                          gap: t.gap,
                          direction: t.direction,
                        });
                    });
                  }),
                  e
                );
              },
              N = function (t) {
                var e = new Map();
                return (
                  t.forEach(function (t, i) {
                    e.set(i, []);
                  }),
                  t.forEach(function (t, i) {
                    t.forEach(function (t) {
                      e.get(t.id).push({
                        id: i,
                        gap: t.gap,
                        direction: t.direction,
                      });
                    });
                  }),
                  e
                );
              },
              T = [],
              A = [],
              w = !1,
              I = !1,
              C = new Set(),
              L = new Map(),
              M = new Map(),
              _ = [];
            if (
              (e.fixedNodeConstraint &&
                e.fixedNodeConstraint.forEach(function (t) {
                  C.add(t.nodeId);
                }),
              e.relativePlacementConstraint &&
                (e.relativePlacementConstraint.forEach(function (t) {
                  t.left
                    ? (L.has(t.left)
                        ? L.get(t.left).push({
                            id: t.right,
                            gap: t.gap,
                            direction: "horizontal",
                          })
                        : L.set(t.left, [
                            {
                              id: t.right,
                              gap: t.gap,
                              direction: "horizontal",
                            },
                          ]),
                      L.has(t.right) || L.set(t.right, []))
                    : (L.has(t.top)
                        ? L.get(t.top).push({
                            id: t.bottom,
                            gap: t.gap,
                            direction: "vertical",
                          })
                        : L.set(t.top, [
                            {
                              id: t.bottom,
                              gap: t.gap,
                              direction: "vertical",
                            },
                          ]),
                      L.has(t.bottom) || L.set(t.bottom, []));
                }),
                (M = E(L)),
                (_ = v(M))),
              r.TRANSFORM_ON_CONSTRAINT_HANDLING)
            ) {
              if (e.fixedNodeConstraint && e.fixedNodeConstraint.length > 1)
                e.fixedNodeConstraint.forEach(function (t, e) {
                  (T[e] = [t.position.x, t.position.y]),
                    (A[e] = [l[h.get(t.nodeId)], d[h.get(t.nodeId)]]);
                }),
                  (w = !0);
              else if (e.alignmentConstraint)
                !(function () {
                  var t = 0;
                  if (e.alignmentConstraint.vertical) {
                    for (
                      var i = e.alignmentConstraint.vertical,
                        r = function (e) {
                          var r = new Set();
                          i[e].forEach(function (t) {
                            r.add(t);
                          });
                          var o,
                            s = new Set(
                              [].concat(n(r)).filter(function (t) {
                                return C.has(t);
                              }),
                            );
                          (o =
                            s.size > 0
                              ? l[h.get(s.values().next().value)]
                              : p(r).x),
                            i[e].forEach(function (e) {
                              (T[t] = [o, d[h.get(e)]]),
                                (A[t] = [l[h.get(e)], d[h.get(e)]]),
                                t++;
                            });
                        },
                        o = 0;
                      o < i.length;
                      o++
                    )
                      r(o);
                    w = !0;
                  }
                  if (e.alignmentConstraint.horizontal) {
                    for (
                      var s = e.alignmentConstraint.horizontal,
                        a = function (e) {
                          var i = new Set();
                          s[e].forEach(function (t) {
                            i.add(t);
                          });
                          var r,
                            o = new Set(
                              [].concat(n(i)).filter(function (t) {
                                return C.has(t);
                              }),
                            );
                          (r =
                            o.size > 0
                              ? l[h.get(o.values().next().value)]
                              : p(i).y),
                            s[e].forEach(function (e) {
                              (T[t] = [l[h.get(e)], r]),
                                (A[t] = [l[h.get(e)], d[h.get(e)]]),
                                t++;
                            });
                        },
                        c = 0;
                      c < s.length;
                      c++
                    )
                      a(c);
                    w = !0;
                  }
                  e.relativePlacementConstraint && (I = !0);
                })();
              else if (e.relativePlacementConstraint) {
                for (var x = 0, O = 0, D = 0; D < _.length; D++)
                  _[D].length > x && ((x = _[D].length), (O = D));
                if (x < M.size / 2)
                  y(e.relativePlacementConstraint), (w = !1), (I = !1);
                else {
                  var R = new Map(),
                    b = new Map(),
                    F = [];
                  _[O].forEach(function (t) {
                    L.get(t).forEach(function (e) {
                      "horizontal" == e.direction
                        ? (R.has(t) ? R.get(t).push(e) : R.set(t, [e]),
                          R.has(e.id) || R.set(e.id, []),
                          F.push({ left: t, right: e.id }))
                        : (b.has(t) ? b.get(t).push(e) : b.set(t, [e]),
                          b.has(e.id) || b.set(e.id, []),
                          F.push({ top: t, bottom: e.id }));
                    });
                  }),
                    y(F),
                    (I = !1);
                  var G = m(R, "horizontal"),
                    S = m(b, "vertical");
                  _[O].forEach(function (t, e) {
                    (A[e] = [l[h.get(t)], d[h.get(t)]]),
                      (T[e] = []),
                      G.has(t) ? (T[e][0] = G.get(t)) : (T[e][0] = l[h.get(t)]),
                      S.has(t) ? (T[e][1] = S.get(t)) : (T[e][1] = d[h.get(t)]);
                  }),
                    (w = !0);
                }
              }
              if (w) {
                for (
                  var P, U = s.transpose(T), Y = s.transpose(A), k = 0;
                  k < U.length;
                  k++
                )
                  (U[k] = s.multGamma(U[k])), (Y[k] = s.multGamma(Y[k]));
                var H = s.multMat(U, s.transpose(Y)),
                  X = a.svd(H);
                P = s.multMat(X.V, s.transpose(X.U));
                for (var z = 0; z < h.size; z++) {
                  var B = [l[z], d[z]],
                    V = [P[0][0], P[1][0]],
                    W = [P[0][1], P[1][1]];
                  (l[z] = s.dotProduct(B, V)), (d[z] = s.dotProduct(B, W));
                }
                I && y(e.relativePlacementConstraint);
              }
            }
            if (r.ENFORCE_CONSTRAINTS) {
              if (e.fixedNodeConstraint && e.fixedNodeConstraint.length > 0) {
                var $ = { x: 0, y: 0 };
                e.fixedNodeConstraint.forEach(function (t, e) {
                  var i,
                    n,
                    r =
                      ((n = {
                        x: l[h.get(t.nodeId)],
                        y: d[h.get(t.nodeId)],
                      }),
                      { x: (i = t.position).x - n.x, y: i.y - n.y });
                  ($.x += r.x), ($.y += r.y);
                }),
                  ($.x /= e.fixedNodeConstraint.length),
                  ($.y /= e.fixedNodeConstraint.length),
                  l.forEach(function (t, e) {
                    l[e] += $.x;
                  }),
                  d.forEach(function (t, e) {
                    d[e] += $.y;
                  }),
                  e.fixedNodeConstraint.forEach(function (t) {
                    (l[h.get(t.nodeId)] = t.position.x),
                      (d[h.get(t.nodeId)] = t.position.y);
                  });
              }
              if (e.alignmentConstraint) {
                if (e.alignmentConstraint.vertical)
                  for (
                    var j = e.alignmentConstraint.vertical,
                      q = function (t) {
                        var e = new Set();
                        j[t].forEach(function (t) {
                          e.add(t);
                        });
                        var i,
                          r = new Set(
                            [].concat(n(e)).filter(function (t) {
                              return C.has(t);
                            }),
                          );
                        (i =
                          r.size > 0
                            ? l[h.get(r.values().next().value)]
                            : p(e).x),
                          e.forEach(function (t) {
                            C.has(t) || (l[h.get(t)] = i);
                          });
                      },
                      K = 0;
                    K < j.length;
                    K++
                  )
                    q(K);
                if (e.alignmentConstraint.horizontal)
                  for (
                    var Z = e.alignmentConstraint.horizontal,
                      Q = function (t) {
                        var e = new Set();
                        Z[t].forEach(function (t) {
                          e.add(t);
                        });
                        var i,
                          r = new Set(
                            [].concat(n(e)).filter(function (t) {
                              return C.has(t);
                            }),
                          );
                        (i =
                          r.size > 0
                            ? d[h.get(r.values().next().value)]
                            : p(e).y),
                          e.forEach(function (t) {
                            C.has(t) || (d[h.get(t)] = i);
                          });
                      },
                      J = 0;
                    J < Z.length;
                    J++
                  )
                    Q(J);
              }
              e.relativePlacementConstraint &&
                (function () {
                  var t = new Map(),
                    i = new Map(),
                    n = new Map(),
                    r = new Map(),
                    o = new Map(),
                    s = new Map(),
                    a = new Set(),
                    c = new Set();
                  if (
                    (C.forEach(function (t) {
                      a.add(t), c.add(t);
                    }),
                    e.alignmentConstraint)
                  ) {
                    if (e.alignmentConstraint.vertical)
                      for (
                        var g = e.alignmentConstraint.vertical,
                          u = function (e) {
                            n.set("dummy" + e, []),
                              g[e].forEach(function (i) {
                                t.set(i, "dummy" + e),
                                  n.get("dummy" + e).push(i),
                                  C.has(i) && a.add("dummy" + e);
                              }),
                              o.set("dummy" + e, l[h.get(g[e][0])]);
                          },
                          f = 0;
                        f < g.length;
                        f++
                      )
                        u(f);
                    if (e.alignmentConstraint.horizontal)
                      for (
                        var p = e.alignmentConstraint.horizontal,
                          y = function (t) {
                            r.set("dummy" + t, []),
                              p[t].forEach(function (e) {
                                i.set(e, "dummy" + t),
                                  r.get("dummy" + t).push(e),
                                  C.has(e) && c.add("dummy" + t);
                              }),
                              s.set("dummy" + t, d[h.get(p[t][0])]);
                          },
                          T = 0;
                        T < p.length;
                        T++
                      )
                        y(T);
                  }
                  var A = new Map(),
                    w = new Map(),
                    I = function (e) {
                      L.get(e).forEach(function (n) {
                        var r = void 0,
                          o = void 0;
                        "horizontal" == n.direction
                          ? ((r = t.get(e) ? t.get(e) : e),
                            (o = t.get(n.id)
                              ? {
                                  id: t.get(n.id),
                                  gap: n.gap,
                                  direction: n.direction,
                                }
                              : n),
                            A.has(r) ? A.get(r).push(o) : A.set(r, [o]),
                            A.has(o.id) || A.set(o.id, []))
                          : ((r = i.get(e) ? i.get(e) : e),
                            (o = i.get(n.id)
                              ? {
                                  id: i.get(n.id),
                                  gap: n.gap,
                                  direction: n.direction,
                                }
                              : n),
                            w.has(r) ? w.get(r).push(o) : w.set(r, [o]),
                            w.has(o.id) || w.set(o.id, []));
                      });
                    },
                    M = !0,
                    _ = !1,
                    x = void 0;
                  try {
                    for (
                      var O, D = L.keys()[Symbol.iterator]();
                      !(M = (O = D.next()).done);
                      M = !0
                    )
                      I(O.value);
                  } catch (t) {
                    (_ = !0), (x = t);
                  } finally {
                    try {
                      !M && D.return && D.return();
                    } finally {
                      if (_) throw x;
                    }
                  }
                  var R = E(A),
                    b = E(w),
                    F = v(R),
                    G = v(b),
                    S = N(A),
                    P = N(w),
                    U = [],
                    Y = [];
                  F.forEach(function (t, e) {
                    (U[e] = []),
                      t.forEach(function (t) {
                        0 == S.get(t).length && U[e].push(t);
                      });
                  }),
                    G.forEach(function (t, e) {
                      (Y[e] = []),
                        t.forEach(function (t) {
                          0 == P.get(t).length && Y[e].push(t);
                        });
                    });
                  var k = m(A, "horizontal", a, o, U),
                    H = m(w, "vertical", c, s, Y),
                    X = function (t) {
                      n.get(t)
                        ? n.get(t).forEach(function (e) {
                            l[h.get(e)] = k.get(t);
                          })
                        : (l[h.get(t)] = k.get(t));
                    },
                    z = !0,
                    B = !1,
                    V = void 0;
                  try {
                    for (
                      var W, $ = k.keys()[Symbol.iterator]();
                      !(z = (W = $.next()).done);
                      z = !0
                    )
                      X(W.value);
                  } catch (t) {
                    (B = !0), (V = t);
                  } finally {
                    try {
                      !z && $.return && $.return();
                    } finally {
                      if (B) throw V;
                    }
                  }
                  var j = function (t) {
                      r.get(t)
                        ? r.get(t).forEach(function (e) {
                            d[h.get(e)] = H.get(t);
                          })
                        : (d[h.get(t)] = H.get(t));
                    },
                    q = !0,
                    K = !1,
                    Z = void 0;
                  try {
                    for (
                      var Q, J = H.keys()[Symbol.iterator]();
                      !(q = (Q = J.next()).done);
                      q = !0
                    )
                      j(Q.value);
                  } catch (t) {
                    (K = !0), (Z = t);
                  } finally {
                    try {
                      !q && J.return && J.return();
                    } finally {
                      if (K) throw Z;
                    }
                  }
                })();
            }
            for (var tt = 0; tt < c.length; tt++) {
              var et = c[tt];
              null == et.getChild() &&
                et.setCenter(l[h.get(et.id)], d[h.get(et.id)]);
            }
          }),
            (t.exports = h);
        },
        551: (e) => {
          e.exports = t;
        },
      },
      i = {},
      n = (function t(n) {
        var r = i[n];
        if (void 0 !== r) return r.exports;
        var o = (i[n] = { exports: {} });
        return e[n](o, o.exports, t), o.exports;
      })(45);
    return n;
  })();
}),
  (t.exports = n(i(93302 /* vendor/module-93302 */)));
