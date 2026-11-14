// vendor/module-816.js — webpack module 816
// params: (t, e, i) = (module, exports, require)
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
    t.randomize && ((f = e.nodeIndexes), (p = e.xCoords), (m = e.yCoords));
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
        (d.DEFAULT_GRAVITY_STRENGTH = l.DEFAULT_GRAVITY_STRENGTH = t.gravity),
      null != t.numIter && (d.MAX_ITERATIONS = l.MAX_ITERATIONS = t.numIter),
      null != t.gravityRange &&
        (d.DEFAULT_GRAVITY_RANGE_FACTOR = l.DEFAULT_GRAVITY_RANGE_FACTOR =
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
      null != t.tilingCompareBy && (d.TILING_COMPARE_BY = t.tilingCompareBy),
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
              nodeDimensionsIncludeLabels: h.nodeDimensionsIncludeLabels,
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
                  new s(c.position("x") - v.w / 2, c.position("y") - v.h / 2),
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
            (t.constraints.alignmentConstraint = e.alignmentConstraint),
          e.relativePlacementConstraint &&
            (t.constraints.relativePlacementConstraint =
              e.relativePlacementConstraint);
      })(T, t),
      T.runLayout(),
      y
    );
  },
};
