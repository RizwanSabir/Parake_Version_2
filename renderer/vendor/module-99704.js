// vendor/module-99704.js — webpack module 99704
// params: (t, e, i) = (module, exports, require)
var r;
(r = function (t) {
  return (function (t) {
    var e = {};
    function i(r) {
      if (e[r]) return e[r].exports;
      var n = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.i = function (t) {
        return t;
      }),
      (i.d = function (t, e, r) {
        i.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 1))
    );
  })([
    function (e, i) {
      e.exports = t;
    },
    function (t, e, i) {
      "use strict";
      var r = i(0).layoutBase.LayoutConstants,
        n = i(0).layoutBase.FDLayoutConstants,
        o = i(0).CoSEConstants,
        s = i(0).CoSELayout,
        a = i(0).CoSENode,
        h = i(0).layoutBase.PointD,
        l = i(0).layoutBase.DimensionD,
        g = {
          ready: function () {},
          stop: function () {},
          quality: "default",
          nodeDimensionsIncludeLabels: !1,
          refresh: 30,
          fit: !0,
          padding: 10,
          randomize: !0,
          nodeRepulsion: 4500,
          idealEdgeLength: 50,
          edgeElasticity: 0.45,
          nestingFactor: 0.1,
          gravity: 0.25,
          numIter: 2500,
          tile: !0,
          animate: "end",
          animationDuration: 500,
          tilingPaddingVertical: 10,
          tilingPaddingHorizontal: 10,
          gravityRangeCompound: 1.5,
          gravityCompound: 1,
          gravityRange: 3.8,
          initialEnergyOnIncremental: 0.5,
        };
      function u(t) {
        (this.options = (function (t, e) {
          var i = {};
          for (var r in t) i[r] = t[r];
          for (var r in e) i[r] = e[r];
          return i;
        })(g, t)),
          c(this.options);
      }
      var c = function (t) {
        null != t.nodeRepulsion &&
          (o.DEFAULT_REPULSION_STRENGTH = n.DEFAULT_REPULSION_STRENGTH =
            t.nodeRepulsion),
          null != t.idealEdgeLength &&
            (o.DEFAULT_EDGE_LENGTH = n.DEFAULT_EDGE_LENGTH = t.idealEdgeLength),
          null != t.edgeElasticity &&
            (o.DEFAULT_SPRING_STRENGTH = n.DEFAULT_SPRING_STRENGTH =
              t.edgeElasticity),
          null != t.nestingFactor &&
            (o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR =
              n.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR =
                t.nestingFactor),
          null != t.gravity &&
            (o.DEFAULT_GRAVITY_STRENGTH = n.DEFAULT_GRAVITY_STRENGTH =
              t.gravity),
          null != t.numIter &&
            (o.MAX_ITERATIONS = n.MAX_ITERATIONS = t.numIter),
          null != t.gravityRange &&
            (o.DEFAULT_GRAVITY_RANGE_FACTOR = n.DEFAULT_GRAVITY_RANGE_FACTOR =
              t.gravityRange),
          null != t.gravityCompound &&
            (o.DEFAULT_COMPOUND_GRAVITY_STRENGTH =
              n.DEFAULT_COMPOUND_GRAVITY_STRENGTH =
                t.gravityCompound),
          null != t.gravityRangeCompound &&
            (o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR =
              n.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR =
                t.gravityRangeCompound),
          null != t.initialEnergyOnIncremental &&
            (o.DEFAULT_COOLING_FACTOR_INCREMENTAL =
              n.DEFAULT_COOLING_FACTOR_INCREMENTAL =
                t.initialEnergyOnIncremental),
          "draft" == t.quality
            ? (r.QUALITY = 0)
            : "proof" == t.quality
              ? (r.QUALITY = 2)
              : (r.QUALITY = 1),
          (o.NODE_DIMENSIONS_INCLUDE_LABELS =
            n.NODE_DIMENSIONS_INCLUDE_LABELS =
            r.NODE_DIMENSIONS_INCLUDE_LABELS =
              t.nodeDimensionsIncludeLabels),
          (o.DEFAULT_INCREMENTAL =
            n.DEFAULT_INCREMENTAL =
            r.DEFAULT_INCREMENTAL =
              !t.randomize),
          (o.ANIMATE = n.ANIMATE = r.ANIMATE = t.animate),
          (o.TILE = t.tile),
          (o.TILING_PADDING_VERTICAL =
            "function" == typeof t.tilingPaddingVertical
              ? t.tilingPaddingVertical.call()
              : t.tilingPaddingVertical),
          (o.TILING_PADDING_HORIZONTAL =
            "function" == typeof t.tilingPaddingHorizontal
              ? t.tilingPaddingHorizontal.call()
              : t.tilingPaddingHorizontal);
      };
      (u.prototype.run = function () {
        var t,
          e,
          i = this.options,
          r = ((this.idToLNode = {}), (this.layout = new s())),
          n = this;
        (n.stopped = !1),
          (this.cy = this.options.cy),
          this.cy.trigger({ type: "layoutstart", layout: this });
        var o = r.newGraphManager();
        this.gm = o;
        var a = this.options.eles.nodes(),
          h = this.options.eles.edges();
        (this.root = o.addRoot()),
          this.processChildrenList(this.root, this.getTopMostNodes(a), r);
        for (var l = 0; l < h.length; l++) {
          var g = h[l],
            u = this.idToLNode[g.data("source")],
            c = this.idToLNode[g.data("target")];
          u !== c &&
            0 == u.getEdgesBetween(c).length &&
            (o.add(r.newEdge(), u, c).id = g.id());
        }
        var d = function (t, e) {
            "number" == typeof t && (t = e);
            var i = t.data("id"),
              r = n.idToLNode[i];
            return {
              x: r.getRect().getCenterX(),
              y: r.getRect().getCenterY(),
            };
          },
          p = function o() {
            for (
              var s,
                a = function () {
                  i.fit && i.cy.fit(i.eles, i.padding),
                    t ||
                      ((t = !0),
                      n.cy.one("layoutready", i.ready),
                      n.cy.trigger({ type: "layoutready", layout: n }));
                },
                h = n.options.refresh,
                l = 0;
              l < h && !s;
              l++
            )
              s = n.stopped || n.layout.tick();
            if (s)
              return (
                r.checkLayoutSuccess() && !r.isSubLayout && r.doPostLayout(),
                r.tilingPostLayout && r.tilingPostLayout(),
                (r.isLayoutFinished = !0),
                n.options.eles.nodes().positions(d),
                a(),
                n.cy.one("layoutstop", n.options.stop),
                n.cy.trigger({ type: "layoutstop", layout: n }),
                e && cancelAnimationFrame(e),
                void (t = !1)
              );
            var g = n.layout.getPositionsData();
            i.eles.nodes().positions(function (t, e) {
              if (("number" == typeof t && (t = e), !t.isParent())) {
                for (
                  var i = t.id(), r = g[i], n = t;
                  null == r &&
                  ((r =
                    g[n.data("parent")] ||
                    g["DummyCompound_" + n.data("parent")]),
                  (g[i] = r),
                  null != (n = n.parent()[0]));

                );
                return null != r
                  ? { x: r.x, y: r.y }
                  : { x: t.position("x"), y: t.position("y") };
              }
            }),
              a(),
              (e = requestAnimationFrame(o));
          };
        return (
          r.addListener("layoutstarted", function () {
            "during" === n.options.animate && (e = requestAnimationFrame(p));
          }),
          r.runLayout(),
          "during" !== this.options.animate &&
            (n.options.eles
              .nodes()
              .not(":parent")
              .layoutPositions(n, n.options, d),
            (t = !1)),
          this
        );
      }),
        (u.prototype.getTopMostNodes = function (t) {
          for (var e = {}, i = 0; i < t.length; i++) e[t[i].id()] = !0;
          var r = t.filter(function (t, i) {
            "number" == typeof t && (t = i);
            for (var r = t.parent()[0]; null != r; ) {
              if (e[r.id()]) return !1;
              r = r.parent()[0];
            }
            return !0;
          });
          return r;
        }),
        (u.prototype.processChildrenList = function (t, e, i) {
          for (var r = e.length, n = 0; n < r; n++) {
            var o,
              s,
              g = e[n],
              u = g.children(),
              c = g.layoutDimensions({
                nodeDimensionsIncludeLabels:
                  this.options.nodeDimensionsIncludeLabels,
              });
            if (
              (((o =
                null != g.outerWidth() && null != g.outerHeight()
                  ? t.add(
                      new a(
                        i.graphManager,
                        new h(
                          g.position("x") - c.w / 2,
                          g.position("y") - c.h / 2,
                        ),
                        new l(parseFloat(c.w), parseFloat(c.h)),
                      ),
                    )
                  : t.add(new a(this.graphManager))).id = g.data("id")),
              (o.paddingLeft = parseInt(g.css("padding"))),
              (o.paddingTop = parseInt(g.css("padding"))),
              (o.paddingRight = parseInt(g.css("padding"))),
              (o.paddingBottom = parseInt(g.css("padding"))),
              this.options.nodeDimensionsIncludeLabels && g.isParent())
            ) {
              var d = g.boundingBox({
                  includeLabels: !0,
                  includeNodes: !1,
                }).w,
                p = g.boundingBox({
                  includeLabels: !0,
                  includeNodes: !1,
                }).h,
                f = g.css("text-halign");
              (o.labelWidth = d), (o.labelHeight = p), (o.labelPos = f);
            }
            (this.idToLNode[g.data("id")] = o),
              isNaN(o.rect.x) && (o.rect.x = 0),
              isNaN(o.rect.y) && (o.rect.y = 0),
              null != u &&
                u.length > 0 &&
                ((s = i.getGraphManager().add(i.newGraph(), o)),
                this.processChildrenList(s, u, i));
          }
        }),
        (u.prototype.stop = function () {
          return (this.stopped = !0), this;
        });
      var d = function (t) {
        t("layout", "cose-bilkent", u);
      };
      "undefined" != typeof cytoscape && d(cytoscape), (t.exports = d);
    },
  ]);
}),
  (t.exports = r(i(40110 /* vendor/module-40110 */)));
