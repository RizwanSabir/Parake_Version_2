// vendor/module-93302.js — webpack module 93302
// params: (t) = (module, exports, require)
var e;
(e = function () {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.i = function (t) {
        return t;
      }),
      (i.d = function (t, e, n) {
        i.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: n,
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
      i((i.s = 28))
    );
  })([
    function (t, e, i) {
      "use strict";
      function n() {}
      (n.QUALITY = 1),
        (n.DEFAULT_CREATE_BENDS_AS_NEEDED = !1),
        (n.DEFAULT_INCREMENTAL = !1),
        (n.DEFAULT_ANIMATION_ON_LAYOUT = !0),
        (n.DEFAULT_ANIMATION_DURING_LAYOUT = !1),
        (n.DEFAULT_ANIMATION_PERIOD = 50),
        (n.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1),
        (n.DEFAULT_GRAPH_MARGIN = 15),
        (n.NODE_DIMENSIONS_INCLUDE_LABELS = !1),
        (n.SIMPLE_NODE_SIZE = 40),
        (n.SIMPLE_NODE_HALF_SIZE = n.SIMPLE_NODE_SIZE / 2),
        (n.EMPTY_COMPOUND_NODE_SIZE = 40),
        (n.MIN_EDGE_LENGTH = 1),
        (n.WORLD_BOUNDARY = 1e6),
        (n.INITIAL_WORLD_BOUNDARY = n.WORLD_BOUNDARY / 1e3),
        (n.WORLD_CENTER_X = 1200),
        (n.WORLD_CENTER_Y = 900),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = i(8),
        o = i(9);
      function s(t, e, i) {
        n.call(this, i),
          (this.isOverlapingSourceAndTarget = !1),
          (this.vGraphObject = i),
          (this.bendpoints = []),
          (this.source = t),
          (this.target = e);
      }
      for (var a in ((s.prototype = Object.create(n.prototype)), n))
        s[a] = n[a];
      (s.prototype.getSource = function () {
        return this.source;
      }),
        (s.prototype.getTarget = function () {
          return this.target;
        }),
        (s.prototype.isInterGraph = function () {
          return this.isInterGraph;
        }),
        (s.prototype.getLength = function () {
          return this.length;
        }),
        (s.prototype.isOverlapingSourceAndTarget = function () {
          return this.isOverlapingSourceAndTarget;
        }),
        (s.prototype.getBendpoints = function () {
          return this.bendpoints;
        }),
        (s.prototype.getLca = function () {
          return this.lca;
        }),
        (s.prototype.getSourceInLca = function () {
          return this.sourceInLca;
        }),
        (s.prototype.getTargetInLca = function () {
          return this.targetInLca;
        }),
        (s.prototype.getOtherEnd = function (t) {
          if (this.source === t) return this.target;
          if (this.target === t) return this.source;
          throw "Node is not incident with this edge";
        }),
        (s.prototype.getOtherEndInGraph = function (t, e) {
          for (
            var i = this.getOtherEnd(t), n = e.getGraphManager().getRoot();
            ;

          ) {
            if (i.getOwner() == e) return i;
            if (i.getOwner() == n) break;
            i = i.getOwner().getParent();
          }
          return null;
        }),
        (s.prototype.updateLength = function () {
          var t = new Array(4);
          (this.isOverlapingSourceAndTarget = r.getIntersection(
            this.target.getRect(),
            this.source.getRect(),
            t,
          )),
            this.isOverlapingSourceAndTarget ||
              ((this.lengthX = t[0] - t[2]),
              (this.lengthY = t[1] - t[3]),
              Math.abs(this.lengthX) < 1 &&
                (this.lengthX = o.sign(this.lengthX)),
              Math.abs(this.lengthY) < 1 &&
                (this.lengthY = o.sign(this.lengthY)),
              (this.length = Math.sqrt(
                this.lengthX * this.lengthX + this.lengthY * this.lengthY,
              )));
        }),
        (s.prototype.updateLengthSimple = function () {
          (this.lengthX = this.target.getCenterX() - this.source.getCenterX()),
            (this.lengthY =
              this.target.getCenterY() - this.source.getCenterY()),
            Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)),
            Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)),
            (this.length = Math.sqrt(
              this.lengthX * this.lengthX + this.lengthY * this.lengthY,
            ));
        }),
        (t.exports = s);
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t) {
        this.vGraphObject = t;
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = i(10),
        o = i(13),
        s = i(0),
        a = i(16),
        h = i(5);
      function l(t, e, i, s) {
        null == i && null == s && (s = e),
          n.call(this, s),
          null != t.graphManager && (t = t.graphManager),
          (this.estimatedSize = r.MIN_VALUE),
          (this.inclusionTreeDepth = r.MAX_VALUE),
          (this.vGraphObject = s),
          (this.edges = []),
          (this.graphManager = t),
          (this.rect =
            null != i && null != e
              ? new o(e.x, e.y, i.width, i.height)
              : new o());
      }
      for (var d in ((l.prototype = Object.create(n.prototype)), n))
        l[d] = n[d];
      (l.prototype.getEdges = function () {
        return this.edges;
      }),
        (l.prototype.getChild = function () {
          return this.child;
        }),
        (l.prototype.getOwner = function () {
          return this.owner;
        }),
        (l.prototype.getWidth = function () {
          return this.rect.width;
        }),
        (l.prototype.setWidth = function (t) {
          this.rect.width = t;
        }),
        (l.prototype.getHeight = function () {
          return this.rect.height;
        }),
        (l.prototype.setHeight = function (t) {
          this.rect.height = t;
        }),
        (l.prototype.getCenterX = function () {
          return this.rect.x + this.rect.width / 2;
        }),
        (l.prototype.getCenterY = function () {
          return this.rect.y + this.rect.height / 2;
        }),
        (l.prototype.getCenter = function () {
          return new h(
            this.rect.x + this.rect.width / 2,
            this.rect.y + this.rect.height / 2,
          );
        }),
        (l.prototype.getLocation = function () {
          return new h(this.rect.x, this.rect.y);
        }),
        (l.prototype.getRect = function () {
          return this.rect;
        }),
        (l.prototype.getDiagonal = function () {
          return Math.sqrt(
            this.rect.width * this.rect.width +
              this.rect.height * this.rect.height,
          );
        }),
        (l.prototype.getHalfTheDiagonal = function () {
          return (
            Math.sqrt(
              this.rect.height * this.rect.height +
                this.rect.width * this.rect.width,
            ) / 2
          );
        }),
        (l.prototype.setRect = function (t, e) {
          (this.rect.x = t.x),
            (this.rect.y = t.y),
            (this.rect.width = e.width),
            (this.rect.height = e.height);
        }),
        (l.prototype.setCenter = function (t, e) {
          (this.rect.x = t - this.rect.width / 2),
            (this.rect.y = e - this.rect.height / 2);
        }),
        (l.prototype.setLocation = function (t, e) {
          (this.rect.x = t), (this.rect.y = e);
        }),
        (l.prototype.moveBy = function (t, e) {
          (this.rect.x += t), (this.rect.y += e);
        }),
        (l.prototype.getEdgeListToNode = function (t) {
          var e = [],
            i = this;
          return (
            i.edges.forEach(function (n) {
              if (n.target == t) {
                if (n.source != i) throw "Incorrect edge source!";
                e.push(n);
              }
            }),
            e
          );
        }),
        (l.prototype.getEdgesBetween = function (t) {
          var e = [],
            i = this;
          return (
            i.edges.forEach(function (n) {
              if (n.source != i && n.target != i)
                throw "Incorrect edge source and/or target";
              (n.target != t && n.source != t) || e.push(n);
            }),
            e
          );
        }),
        (l.prototype.getNeighborsList = function () {
          var t = new Set(),
            e = this;
          return (
            e.edges.forEach(function (i) {
              if (i.source == e) t.add(i.target);
              else {
                if (i.target != e) throw "Incorrect incidency!";
                t.add(i.source);
              }
            }),
            t
          );
        }),
        (l.prototype.withChildren = function () {
          var t = new Set();
          if ((t.add(this), null != this.child))
            for (var e = this.child.getNodes(), i = 0; i < e.length; i++)
              e[i].withChildren().forEach(function (e) {
                t.add(e);
              });
          return t;
        }),
        (l.prototype.getNoOfChildren = function () {
          var t = 0;
          if (null == this.child) t = 1;
          else
            for (var e = this.child.getNodes(), i = 0; i < e.length; i++)
              t += e[i].getNoOfChildren();
          return 0 == t && (t = 1), t;
        }),
        (l.prototype.getEstimatedSize = function () {
          if (this.estimatedSize == r.MIN_VALUE) throw "assert failed";
          return this.estimatedSize;
        }),
        (l.prototype.calcEstimatedSize = function () {
          return null == this.child
            ? (this.estimatedSize = (this.rect.width + this.rect.height) / 2)
            : ((this.estimatedSize = this.child.calcEstimatedSize()),
              (this.rect.width = this.estimatedSize),
              (this.rect.height = this.estimatedSize),
              this.estimatedSize);
        }),
        (l.prototype.scatter = function () {
          var t,
            e,
            i = -s.INITIAL_WORLD_BOUNDARY,
            n = s.INITIAL_WORLD_BOUNDARY;
          t = s.WORLD_CENTER_X + a.nextDouble() * (n - i) + i;
          var r = -s.INITIAL_WORLD_BOUNDARY,
            o = s.INITIAL_WORLD_BOUNDARY;
          (e = s.WORLD_CENTER_Y + a.nextDouble() * (o - r) + r),
            (this.rect.x = t),
            (this.rect.y = e);
        }),
        (l.prototype.updateBounds = function () {
          if (null == this.getChild()) throw "assert failed";
          if (0 != this.getChild().getNodes().length) {
            var t = this.getChild();
            if (
              (t.updateBounds(!0),
              (this.rect.x = t.getLeft()),
              (this.rect.y = t.getTop()),
              this.setWidth(t.getRight() - t.getLeft()),
              this.setHeight(t.getBottom() - t.getTop()),
              s.NODE_DIMENSIONS_INCLUDE_LABELS)
            ) {
              var e = t.getRight() - t.getLeft(),
                i = t.getBottom() - t.getTop();
              this.labelWidth &&
                ("left" == this.labelPosHorizontal
                  ? ((this.rect.x -= this.labelWidth),
                    this.setWidth(e + this.labelWidth))
                  : "center" == this.labelPosHorizontal && this.labelWidth > e
                    ? ((this.rect.x -= (this.labelWidth - e) / 2),
                      this.setWidth(this.labelWidth))
                    : "right" == this.labelPosHorizontal &&
                      this.setWidth(e + this.labelWidth)),
                this.labelHeight &&
                  ("top" == this.labelPosVertical
                    ? ((this.rect.y -= this.labelHeight),
                      this.setHeight(i + this.labelHeight))
                    : "center" == this.labelPosVertical && this.labelHeight > i
                      ? ((this.rect.y -= (this.labelHeight - i) / 2),
                        this.setHeight(this.labelHeight))
                      : "bottom" == this.labelPosVertical &&
                        this.setHeight(i + this.labelHeight));
            }
          }
        }),
        (l.prototype.getInclusionTreeDepth = function () {
          if (this.inclusionTreeDepth == r.MAX_VALUE) throw "assert failed";
          return this.inclusionTreeDepth;
        }),
        (l.prototype.transform = function (t) {
          var e = this.rect.x;
          e > s.WORLD_BOUNDARY
            ? (e = s.WORLD_BOUNDARY)
            : e < -s.WORLD_BOUNDARY && (e = -s.WORLD_BOUNDARY);
          var i = this.rect.y;
          i > s.WORLD_BOUNDARY
            ? (i = s.WORLD_BOUNDARY)
            : i < -s.WORLD_BOUNDARY && (i = -s.WORLD_BOUNDARY);
          var n = new h(e, i),
            r = t.inverseTransformPoint(n);
          this.setLocation(r.x, r.y);
        }),
        (l.prototype.getLeft = function () {
          return this.rect.x;
        }),
        (l.prototype.getRight = function () {
          return this.rect.x + this.rect.width;
        }),
        (l.prototype.getTop = function () {
          return this.rect.y;
        }),
        (l.prototype.getBottom = function () {
          return this.rect.y + this.rect.height;
        }),
        (l.prototype.getParent = function () {
          return null == this.owner ? null : this.owner.getParent();
        }),
        (t.exports = l);
    },
    function (t, e, i) {
      "use strict";
      var n = i(0);
      function r() {}
      for (var o in n) r[o] = n[o];
      (r.MAX_ITERATIONS = 2500),
        (r.DEFAULT_EDGE_LENGTH = 50),
        (r.DEFAULT_SPRING_STRENGTH = 0.45),
        (r.DEFAULT_REPULSION_STRENGTH = 4500),
        (r.DEFAULT_GRAVITY_STRENGTH = 0.4),
        (r.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1),
        (r.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8),
        (r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5),
        (r.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0),
        (r.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0),
        (r.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3),
        (r.COOLING_ADAPTATION_FACTOR = 0.33),
        (r.ADAPTATION_LOWER_NODE_LIMIT = 1e3),
        (r.ADAPTATION_UPPER_NODE_LIMIT = 5e3),
        (r.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100),
        (r.MAX_NODE_DISPLACEMENT = 3 * r.MAX_NODE_DISPLACEMENT_INCREMENTAL),
        (r.MIN_REPULSION_DIST = r.DEFAULT_EDGE_LENGTH / 10),
        (r.CONVERGENCE_CHECK_PERIOD = 100),
        (r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1),
        (r.MIN_EDGE_LENGTH = 1),
        (r.GRID_CALCULATION_CHECK_PERIOD = 10),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      function n(t, e) {
        null == t && null == e
          ? ((this.x = 0), (this.y = 0))
          : ((this.x = t), (this.y = e));
      }
      (n.prototype.getX = function () {
        return this.x;
      }),
        (n.prototype.getY = function () {
          return this.y;
        }),
        (n.prototype.setX = function (t) {
          this.x = t;
        }),
        (n.prototype.setY = function (t) {
          this.y = t;
        }),
        (n.prototype.getDifference = function (t) {
          return new DimensionD(this.x - t.x, this.y - t.y);
        }),
        (n.prototype.getCopy = function () {
          return new n(this.x, this.y);
        }),
        (n.prototype.translate = function (t) {
          return (this.x += t.width), (this.y += t.height), this;
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = i(10),
        o = i(0),
        s = i(7),
        a = i(3),
        h = i(1),
        l = i(13),
        d = i(12),
        c = i(11);
      function g(t, e, i) {
        n.call(this, i),
          (this.estimatedSize = r.MIN_VALUE),
          (this.margin = o.DEFAULT_GRAPH_MARGIN),
          (this.edges = []),
          (this.nodes = []),
          (this.isConnected = !1),
          (this.parent = t),
          null != e && e instanceof s
            ? (this.graphManager = e)
            : null != e &&
              e instanceof Layout &&
              (this.graphManager = e.graphManager);
      }
      for (var u in ((g.prototype = Object.create(n.prototype)), n))
        g[u] = n[u];
      (g.prototype.getNodes = function () {
        return this.nodes;
      }),
        (g.prototype.getEdges = function () {
          return this.edges;
        }),
        (g.prototype.getGraphManager = function () {
          return this.graphManager;
        }),
        (g.prototype.getParent = function () {
          return this.parent;
        }),
        (g.prototype.getLeft = function () {
          return this.left;
        }),
        (g.prototype.getRight = function () {
          return this.right;
        }),
        (g.prototype.getTop = function () {
          return this.top;
        }),
        (g.prototype.getBottom = function () {
          return this.bottom;
        }),
        (g.prototype.isConnected = function () {
          return this.isConnected;
        }),
        (g.prototype.add = function (t, e, i) {
          if (null == e && null == i) {
            var n = t;
            if (null == this.graphManager) throw "Graph has no graph mgr!";
            if (this.getNodes().indexOf(n) > -1) throw "Node already in graph!";
            return (n.owner = this), this.getNodes().push(n), n;
          }
          var r = t;
          if (
            !(
              this.getNodes().indexOf(e) > -1 && this.getNodes().indexOf(i) > -1
            )
          )
            throw "Source or target not in graph!";
          if (e.owner != i.owner || e.owner != this)
            throw "Both owners must be this graph!";
          return e.owner != i.owner
            ? null
            : ((r.source = e),
              (r.target = i),
              (r.isInterGraph = !1),
              this.getEdges().push(r),
              e.edges.push(r),
              i != e && i.edges.push(r),
              r);
        }),
        (g.prototype.remove = function (t) {
          var e = t;
          if (t instanceof a) {
            if (null == e) throw "Node is null!";
            if (null == e.owner || e.owner != this)
              throw "Owner graph is invalid!";
            if (null == this.graphManager)
              throw "Owner graph manager is invalid!";
            for (var i = e.edges.slice(), n = i.length, r = 0; r < n; r++)
              (o = i[r]).isInterGraph
                ? this.graphManager.remove(o)
                : o.source.owner.remove(o);
            if (-1 == (s = this.nodes.indexOf(e)))
              throw "Node not in owner node list!";
            this.nodes.splice(s, 1);
          } else if (t instanceof h) {
            var o;
            if (null == (o = t)) throw "Edge is null!";
            if (null == o.source || null == o.target)
              throw "Source and/or target is null!";
            if (
              null == o.source.owner ||
              null == o.target.owner ||
              o.source.owner != this ||
              o.target.owner != this
            )
              throw "Source and/or target owner is invalid!";
            var s,
              l = o.source.edges.indexOf(o),
              d = o.target.edges.indexOf(o);
            if (!(l > -1 && d > -1))
              throw "Source and/or target doesn't know this edge!";
            if (
              (o.source.edges.splice(l, 1),
              o.target != o.source && o.target.edges.splice(d, 1),
              -1 == (s = o.source.owner.getEdges().indexOf(o)))
            )
              throw "Not in owner's edge list!";
            o.source.owner.getEdges().splice(s, 1);
          }
        }),
        (g.prototype.updateLeftTop = function () {
          for (
            var t,
              e,
              i,
              n = r.MAX_VALUE,
              o = r.MAX_VALUE,
              s = this.getNodes(),
              a = s.length,
              h = 0;
            h < a;
            h++
          ) {
            var l = s[h];
            n > (t = l.getTop()) && (n = t), o > (e = l.getLeft()) && (o = e);
          }
          return n == r.MAX_VALUE
            ? null
            : ((i =
                null != s[0].getParent().paddingLeft
                  ? s[0].getParent().paddingLeft
                  : this.margin),
              (this.left = o - i),
              (this.top = n - i),
              new d(this.left, this.top));
        }),
        (g.prototype.updateBounds = function (t) {
          for (
            var e,
              i,
              n,
              o,
              s,
              a = r.MAX_VALUE,
              h = -r.MAX_VALUE,
              d = r.MAX_VALUE,
              c = -r.MAX_VALUE,
              g = this.nodes,
              u = g.length,
              f = 0;
            f < u;
            f++
          ) {
            var p = g[f];
            t && null != p.child && p.updateBounds(),
              a > (e = p.getLeft()) && (a = e),
              h < (i = p.getRight()) && (h = i),
              d > (n = p.getTop()) && (d = n),
              c < (o = p.getBottom()) && (c = o);
          }
          var m = new l(a, d, h - a, c - d);
          a == r.MAX_VALUE &&
            ((this.left = this.parent.getLeft()),
            (this.right = this.parent.getRight()),
            (this.top = this.parent.getTop()),
            (this.bottom = this.parent.getBottom())),
            (s =
              null != g[0].getParent().paddingLeft
                ? g[0].getParent().paddingLeft
                : this.margin),
            (this.left = m.x - s),
            (this.right = m.x + m.width + s),
            (this.top = m.y - s),
            (this.bottom = m.y + m.height + s);
        }),
        (g.calculateBounds = function (t) {
          for (
            var e,
              i,
              n,
              o,
              s = r.MAX_VALUE,
              a = -r.MAX_VALUE,
              h = r.MAX_VALUE,
              d = -r.MAX_VALUE,
              c = t.length,
              g = 0;
            g < c;
            g++
          ) {
            var u = t[g];
            s > (e = u.getLeft()) && (s = e),
              a < (i = u.getRight()) && (a = i),
              h > (n = u.getTop()) && (h = n),
              d < (o = u.getBottom()) && (d = o);
          }
          return new l(s, h, a - s, d - h);
        }),
        (g.prototype.getInclusionTreeDepth = function () {
          return this == this.graphManager.getRoot()
            ? 1
            : this.parent.getInclusionTreeDepth();
        }),
        (g.prototype.getEstimatedSize = function () {
          if (this.estimatedSize == r.MIN_VALUE) throw "assert failed";
          return this.estimatedSize;
        }),
        (g.prototype.calcEstimatedSize = function () {
          for (var t = 0, e = this.nodes, i = e.length, n = 0; n < i; n++)
            t += e[n].calcEstimatedSize();
          return (
            (this.estimatedSize =
              0 == t
                ? o.EMPTY_COMPOUND_NODE_SIZE
                : t / Math.sqrt(this.nodes.length)),
            this.estimatedSize
          );
        }),
        (g.prototype.updateConnected = function () {
          var t = this;
          if (0 != this.nodes.length) {
            var e,
              i,
              n = new c(),
              r = new Set(),
              o = this.nodes[0];
            for (
              o.withChildren().forEach(function (t) {
                n.push(t), r.add(t);
              });
              0 !== n.length;

            )
              for (
                var s = (e = (o = n.shift()).getEdges()).length, a = 0;
                a < s;
                a++
              )
                null == (i = e[a].getOtherEndInGraph(o, this)) ||
                  r.has(i) ||
                  i.withChildren().forEach(function (t) {
                    n.push(t), r.add(t);
                  });
            if (((this.isConnected = !1), r.size >= this.nodes.length)) {
              var h = 0;
              r.forEach(function (e) {
                e.owner == t && h++;
              }),
                h == this.nodes.length && (this.isConnected = !0);
            }
          } else this.isConnected = !0;
        }),
        (t.exports = g);
    },
    function (t, e, i) {
      "use strict";
      var n,
        r = i(1);
      function o(t) {
        (n = i(6)), (this.layout = t), (this.graphs = []), (this.edges = []);
      }
      (o.prototype.addRoot = function () {
        var t = this.layout.newGraph(),
          e = this.layout.newNode(null),
          i = this.add(t, e);
        return this.setRootGraph(i), this.rootGraph;
      }),
        (o.prototype.add = function (t, e, i, n, r) {
          if (null == i && null == n && null == r) {
            if (null == t) throw "Graph is null!";
            if (null == e) throw "Parent node is null!";
            if (this.graphs.indexOf(t) > -1)
              throw "Graph already in this graph mgr!";
            if ((this.graphs.push(t), null != t.parent))
              throw "Already has a parent!";
            if (null != e.child) throw "Already has a child!";
            return (t.parent = e), (e.child = t), t;
          }
          (r = i), (i = t);
          var o = (n = e).getOwner(),
            s = r.getOwner();
          if (null == o || o.getGraphManager() != this)
            throw "Source not in this graph mgr!";
          if (null == s || s.getGraphManager() != this)
            throw "Target not in this graph mgr!";
          if (o == s) return (i.isInterGraph = !1), o.add(i, n, r);
          if (
            ((i.isInterGraph = !0),
            (i.source = n),
            (i.target = r),
            this.edges.indexOf(i) > -1)
          )
            throw "Edge already in inter-graph edge list!";
          if ((this.edges.push(i), null == i.source || null == i.target))
            throw "Edge source and/or target is null!";
          if (
            -1 != i.source.edges.indexOf(i) ||
            -1 != i.target.edges.indexOf(i)
          )
            throw "Edge already in source and/or target incidency list!";
          return i.source.edges.push(i), i.target.edges.push(i), i;
        }),
        (o.prototype.remove = function (t) {
          if (t instanceof n) {
            var e = t;
            if (e.getGraphManager() != this)
              throw "Graph not in this graph mgr";
            if (
              e != this.rootGraph &&
              (null == e.parent || e.parent.graphManager != this)
            )
              throw "Invalid parent node!";
            for (
              var i, o = [], s = (o = o.concat(e.getEdges())).length, a = 0;
              a < s;
              a++
            )
              (i = o[a]), e.remove(i);
            var h,
              l = [];
            for (s = (l = l.concat(e.getNodes())).length, a = 0; a < s; a++)
              (h = l[a]), e.remove(h);
            e == this.rootGraph && this.setRootGraph(null);
            var d = this.graphs.indexOf(e);
            this.graphs.splice(d, 1), (e.parent = null);
          } else if (t instanceof r) {
            if (null == (i = t)) throw "Edge is null!";
            if (!i.isInterGraph) throw "Not an inter-graph edge!";
            if (null == i.source || null == i.target)
              throw "Source and/or target is null!";
            if (
              -1 == i.source.edges.indexOf(i) ||
              -1 == i.target.edges.indexOf(i)
            )
              throw "Source and/or target doesn't know this edge!";
            if (
              ((d = i.source.edges.indexOf(i)),
              i.source.edges.splice(d, 1),
              (d = i.target.edges.indexOf(i)),
              i.target.edges.splice(d, 1),
              null == i.source.owner ||
                null == i.source.owner.getGraphManager())
            )
              throw "Edge owner graph or owner graph manager is null!";
            if (-1 == i.source.owner.getGraphManager().edges.indexOf(i))
              throw "Not in owner graph manager's edge list!";
            (d = i.source.owner.getGraphManager().edges.indexOf(i)),
              i.source.owner.getGraphManager().edges.splice(d, 1);
          }
        }),
        (o.prototype.updateBounds = function () {
          this.rootGraph.updateBounds(!0);
        }),
        (o.prototype.getGraphs = function () {
          return this.graphs;
        }),
        (o.prototype.getAllNodes = function () {
          if (null == this.allNodes) {
            for (
              var t = [], e = this.getGraphs(), i = e.length, n = 0;
              n < i;
              n++
            )
              t = t.concat(e[n].getNodes());
            this.allNodes = t;
          }
          return this.allNodes;
        }),
        (o.prototype.resetAllNodes = function () {
          this.allNodes = null;
        }),
        (o.prototype.resetAllEdges = function () {
          this.allEdges = null;
        }),
        (o.prototype.resetAllNodesToApplyGravitation = function () {
          this.allNodesToApplyGravitation = null;
        }),
        (o.prototype.getAllEdges = function () {
          if (null == this.allEdges) {
            for (
              var t = [], e = this.getGraphs(), i = (e.length, 0);
              i < e.length;
              i++
            )
              t = t.concat(e[i].getEdges());
            (t = t.concat(this.edges)), (this.allEdges = t);
          }
          return this.allEdges;
        }),
        (o.prototype.getAllNodesToApplyGravitation = function () {
          return this.allNodesToApplyGravitation;
        }),
        (o.prototype.setAllNodesToApplyGravitation = function (t) {
          if (null != this.allNodesToApplyGravitation) throw "assert failed";
          this.allNodesToApplyGravitation = t;
        }),
        (o.prototype.getRoot = function () {
          return this.rootGraph;
        }),
        (o.prototype.setRootGraph = function (t) {
          if (t.getGraphManager() != this) throw "Root not in this graph mgr!";
          (this.rootGraph = t),
            null == t.parent && (t.parent = this.layout.newNode("Root node"));
        }),
        (o.prototype.getLayout = function () {
          return this.layout;
        }),
        (o.prototype.isOneAncestorOfOther = function (t, e) {
          if (null == t || null == e) throw "assert failed";
          if (t == e) return !0;
          for (var i, n = t.getOwner(); null != (i = n.getParent()); ) {
            if (i == e) return !0;
            if (null == (n = i.getOwner())) break;
          }
          for (n = e.getOwner(); null != (i = n.getParent()); ) {
            if (i == t) return !0;
            if (null == (n = i.getOwner())) break;
          }
          return !1;
        }),
        (o.prototype.calcLowestCommonAncestors = function () {
          for (
            var t, e, i, n, r, o = this.getAllEdges(), s = o.length, a = 0;
            a < s;
            a++
          )
            if (
              ((e = (t = o[a]).source),
              (i = t.target),
              (t.lca = null),
              (t.sourceInLca = e),
              (t.targetInLca = i),
              e != i)
            ) {
              for (n = e.getOwner(); null == t.lca; ) {
                for (t.targetInLca = i, r = i.getOwner(); null == t.lca; ) {
                  if (r == n) {
                    t.lca = r;
                    break;
                  }
                  if (r == this.rootGraph) break;
                  if (null != t.lca) throw "assert failed";
                  (t.targetInLca = r.getParent()),
                    (r = t.targetInLca.getOwner());
                }
                if (n == this.rootGraph) break;
                null == t.lca &&
                  ((t.sourceInLca = n.getParent()),
                  (n = t.sourceInLca.getOwner()));
              }
              if (null == t.lca) throw "assert failed";
            } else t.lca = e.getOwner();
        }),
        (o.prototype.calcLowestCommonAncestor = function (t, e) {
          if (t == e) return t.getOwner();
          for (var i = t.getOwner(); null != i; ) {
            for (var n = e.getOwner(); null != n; ) {
              if (n == i) return n;
              n = n.getParent().getOwner();
            }
            i = i.getParent().getOwner();
          }
          return i;
        }),
        (o.prototype.calcInclusionTreeDepths = function (t, e) {
          var i;
          null == t && null == e && ((t = this.rootGraph), (e = 1));
          for (var n = t.getNodes(), r = n.length, o = 0; o < r; o++)
            ((i = n[o]).inclusionTreeDepth = e),
              null != i.child && this.calcInclusionTreeDepths(i.child, e + 1);
        }),
        (o.prototype.includesInvalidEdge = function () {
          for (var t, e = [], i = this.edges.length, n = 0; n < i; n++)
            (t = this.edges[n]),
              this.isOneAncestorOfOther(t.source, t.target) && e.push(t);
          for (n = 0; n < e.length; n++) this.remove(e[n]);
          return !1;
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      "use strict";
      var n = i(12);
      function r() {}
      (r.calcSeparationAmount = function (t, e, i, n) {
        if (!t.intersects(e)) throw "assert failed";
        var r = new Array(2);
        this.decideDirectionsForOverlappingNodes(t, e, r),
          (i[0] = Math.min(t.getRight(), e.getRight()) - Math.max(t.x, e.x)),
          (i[1] = Math.min(t.getBottom(), e.getBottom()) - Math.max(t.y, e.y)),
          t.getX() <= e.getX() && t.getRight() >= e.getRight()
            ? (i[0] += Math.min(
                e.getX() - t.getX(),
                t.getRight() - e.getRight(),
              ))
            : e.getX() <= t.getX() &&
              e.getRight() >= t.getRight() &&
              (i[0] += Math.min(
                t.getX() - e.getX(),
                e.getRight() - t.getRight(),
              )),
          t.getY() <= e.getY() && t.getBottom() >= e.getBottom()
            ? (i[1] += Math.min(
                e.getY() - t.getY(),
                t.getBottom() - e.getBottom(),
              ))
            : e.getY() <= t.getY() &&
              e.getBottom() >= t.getBottom() &&
              (i[1] += Math.min(
                t.getY() - e.getY(),
                e.getBottom() - t.getBottom(),
              ));
        var o = Math.abs(
          (e.getCenterY() - t.getCenterY()) / (e.getCenterX() - t.getCenterX()),
        );
        e.getCenterY() === t.getCenterY() &&
          e.getCenterX() === t.getCenterX() &&
          (o = 1);
        var s = o * i[0],
          a = i[1] / o;
        i[0] < a ? (a = i[0]) : (s = i[1]),
          (i[0] = -1 * r[0] * (a / 2 + n)),
          (i[1] = -1 * r[1] * (s / 2 + n));
      }),
        (r.decideDirectionsForOverlappingNodes = function (t, e, i) {
          t.getCenterX() < e.getCenterX() ? (i[0] = -1) : (i[0] = 1),
            t.getCenterY() < e.getCenterY() ? (i[1] = -1) : (i[1] = 1);
        }),
        (r.getIntersection2 = function (t, e, i) {
          var n = t.getCenterX(),
            r = t.getCenterY(),
            o = e.getCenterX(),
            s = e.getCenterY();
          if (t.intersects(e))
            return (i[0] = n), (i[1] = r), (i[2] = o), (i[3] = s), !0;
          var a = t.getX(),
            h = t.getY(),
            l = t.getRight(),
            d = t.getX(),
            c = t.getBottom(),
            g = t.getRight(),
            u = t.getWidthHalf(),
            f = t.getHeightHalf(),
            p = e.getX(),
            m = e.getY(),
            y = e.getRight(),
            v = e.getX(),
            E = e.getBottom(),
            N = e.getRight(),
            T = e.getWidthHalf(),
            A = e.getHeightHalf(),
            w = !1,
            I = !1;
          if (n === o) {
            if (r > s)
              return (i[0] = n), (i[1] = h), (i[2] = o), (i[3] = E), !1;
            if (r < s)
              return (i[0] = n), (i[1] = c), (i[2] = o), (i[3] = m), !1;
          } else if (r === s) {
            if (n > o)
              return (i[0] = a), (i[1] = r), (i[2] = y), (i[3] = s), !1;
            if (n < o)
              return (i[0] = l), (i[1] = r), (i[2] = p), (i[3] = s), !1;
          } else {
            var C = t.height / t.width,
              L = e.height / e.width,
              M = (s - r) / (o - n),
              _ = void 0,
              x = void 0,
              O = void 0,
              D = void 0,
              R = void 0,
              b = void 0;
            if (
              (-C === M
                ? n > o
                  ? ((i[0] = d), (i[1] = c), (w = !0))
                  : ((i[0] = l), (i[1] = h), (w = !0))
                : C === M &&
                  (n > o
                    ? ((i[0] = a), (i[1] = h), (w = !0))
                    : ((i[0] = g), (i[1] = c), (w = !0))),
              -L === M
                ? o > n
                  ? ((i[2] = v), (i[3] = E), (I = !0))
                  : ((i[2] = y), (i[3] = m), (I = !0))
                : L === M &&
                  (o > n
                    ? ((i[2] = p), (i[3] = m), (I = !0))
                    : ((i[2] = N), (i[3] = E), (I = !0))),
              w && I)
            )
              return !1;
            if (
              (n > o
                ? r > s
                  ? ((_ = this.getCardinalDirection(C, M, 4)),
                    (x = this.getCardinalDirection(L, M, 2)))
                  : ((_ = this.getCardinalDirection(-C, M, 3)),
                    (x = this.getCardinalDirection(-L, M, 1)))
                : r > s
                  ? ((_ = this.getCardinalDirection(-C, M, 1)),
                    (x = this.getCardinalDirection(-L, M, 3)))
                  : ((_ = this.getCardinalDirection(C, M, 2)),
                    (x = this.getCardinalDirection(L, M, 4))),
              !w)
            )
              switch (_) {
                case 1:
                  (D = h), (O = n + -f / M), (i[0] = O), (i[1] = D);
                  break;
                case 2:
                  (O = g), (D = r + u * M), (i[0] = O), (i[1] = D);
                  break;
                case 3:
                  (D = c), (O = n + f / M), (i[0] = O), (i[1] = D);
                  break;
                case 4:
                  (O = d), (D = r + -u * M), (i[0] = O), (i[1] = D);
              }
            if (!I)
              switch (x) {
                case 1:
                  (b = m), (R = o + -A / M), (i[2] = R), (i[3] = b);
                  break;
                case 2:
                  (R = N), (b = s + T * M), (i[2] = R), (i[3] = b);
                  break;
                case 3:
                  (b = E), (R = o + A / M), (i[2] = R), (i[3] = b);
                  break;
                case 4:
                  (R = v), (b = s + -T * M), (i[2] = R), (i[3] = b);
              }
          }
          return !1;
        }),
        (r.getCardinalDirection = function (t, e, i) {
          return t > e ? i : 1 + (i % 4);
        }),
        (r.getIntersection = function (t, e, i, r) {
          if (null == r) return this.getIntersection2(t, e, i);
          var o,
            s,
            a,
            h,
            l,
            d,
            c,
            g = t.x,
            u = t.y,
            f = e.x,
            p = e.y,
            m = i.x,
            y = i.y,
            v = r.x,
            E = r.y;
          return 0 ===
            (c = (o = p - u) * (h = m - v) - (s = E - y) * (a = g - f))
            ? null
            : new n(
                (a * (d = v * y - m * E) - h * (l = f * u - g * p)) / c,
                (s * l - o * d) / c,
              );
        }),
        (r.angleOfVector = function (t, e, i, n) {
          var r = void 0;
          return (
            t !== i
              ? ((r = Math.atan((n - e) / (i - t))),
                i < t ? (r += Math.PI) : n < e && (r += this.TWO_PI))
              : (r = n < e ? this.ONE_AND_HALF_PI : this.HALF_PI),
            r
          );
        }),
        (r.doIntersect = function (t, e, i, n) {
          var r = t.x,
            o = t.y,
            s = e.x,
            a = e.y,
            h = i.x,
            l = i.y,
            d = n.x,
            c = n.y,
            g = (s - r) * (c - l) - (d - h) * (a - o);
          if (0 === g) return !1;
          var u = ((c - l) * (d - r) + (h - d) * (c - o)) / g,
            f = ((o - a) * (d - r) + (s - r) * (c - o)) / g;
          return 0 < u && u < 1 && 0 < f && f < 1;
        }),
        (r.findCircleLineIntersections = function (t, e, i, n, r, o, s) {
          var a = (i - t) * (i - t) + (n - e) * (n - e),
            h = 2 * ((t - r) * (i - t) + (e - o) * (n - e)),
            l = (t - r) * (t - r) + (e - o) * (e - o) - s * s;
          if (h * h - 4 * a * l >= 0) {
            var d = (-h + Math.sqrt(h * h - 4 * a * l)) / (2 * a),
              c = (-h - Math.sqrt(h * h - 4 * a * l)) / (2 * a);
            return d >= 0 && d <= 1 ? [d] : c >= 0 && c <= 1 ? [c] : null;
          }
          return null;
        }),
        (r.HALF_PI = 0.5 * Math.PI),
        (r.ONE_AND_HALF_PI = 1.5 * Math.PI),
        (r.TWO_PI = 2 * Math.PI),
        (r.THREE_PI = 3 * Math.PI),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      function n() {}
      (n.sign = function (t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      }),
        (n.floor = function (t) {
          return t < 0 ? Math.ceil(t) : Math.floor(t);
        }),
        (n.ceil = function (t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      function n() {}
      (n.MAX_VALUE = 2147483647), (n.MIN_VALUE = -2147483648), (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
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
        r = function (t) {
          return { value: t, next: null, prev: null };
        },
        o = function (t, e, i, n) {
          return (
            null !== t ? (t.next = e) : (n.head = e),
            null !== i ? (i.prev = e) : (n.tail = e),
            (e.prev = t),
            (e.next = i),
            n.length++,
            e
          );
        },
        s = function (t, e) {
          var i = t.prev,
            n = t.next;
          return (
            null !== i ? (i.next = n) : (e.head = n),
            null !== n ? (n.prev = i) : (e.tail = i),
            (t.prev = t.next = null),
            e.length--,
            t
          );
        },
        a = (function () {
          function t(e) {
            var i = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.length = 0),
              (this.head = null),
              (this.tail = null),
              null != e &&
                e.forEach(function (t) {
                  return i.push(t);
                });
          }
          return (
            n(t, [
              {
                key: "size",
                value: function () {
                  return this.length;
                },
              },
              {
                key: "insertBefore",
                value: function (t, e) {
                  return o(e.prev, r(t), e, this);
                },
              },
              {
                key: "insertAfter",
                value: function (t, e) {
                  return o(e, r(t), e.next, this);
                },
              },
              {
                key: "insertNodeBefore",
                value: function (t, e) {
                  return o(e.prev, t, e, this);
                },
              },
              {
                key: "insertNodeAfter",
                value: function (t, e) {
                  return o(e, t, e.next, this);
                },
              },
              {
                key: "push",
                value: function (t) {
                  return o(this.tail, r(t), null, this);
                },
              },
              {
                key: "unshift",
                value: function (t) {
                  return o(null, r(t), this.head, this);
                },
              },
              {
                key: "remove",
                value: function (t) {
                  return s(t, this);
                },
              },
              {
                key: "pop",
                value: function () {
                  return s(this.tail, this).value;
                },
              },
              {
                key: "popNode",
                value: function () {
                  return s(this.tail, this);
                },
              },
              {
                key: "shift",
                value: function () {
                  return s(this.head, this).value;
                },
              },
              {
                key: "shiftNode",
                value: function () {
                  return s(this.head, this);
                },
              },
              {
                key: "get_object_at",
                value: function (t) {
                  if (t <= this.length()) {
                    for (var e = 1, i = this.head; e < t; ) (i = i.next), e++;
                    return i.value;
                  }
                },
              },
              {
                key: "set_object_at",
                value: function (t, e) {
                  if (t <= this.length()) {
                    for (var i = 1, n = this.head; i < t; ) (n = n.next), i++;
                    n.value = e;
                  }
                },
              },
            ]),
            t
          );
        })();
      t.exports = a;
    },
    function (t, e, i) {
      "use strict";
      function n(t, e, i) {
        (this.x = null),
          (this.y = null),
          null == t && null == e && null == i
            ? ((this.x = 0), (this.y = 0))
            : "number" == typeof t && "number" == typeof e && null == i
              ? ((this.x = t), (this.y = e))
              : "Point" == t.constructor.name &&
                null == e &&
                null == i &&
                ((i = t), (this.x = i.x), (this.y = i.y));
      }
      (n.prototype.getX = function () {
        return this.x;
      }),
        (n.prototype.getY = function () {
          return this.y;
        }),
        (n.prototype.getLocation = function () {
          return new n(this.x, this.y);
        }),
        (n.prototype.setLocation = function (t, e, i) {
          "Point" == t.constructor.name && null == e && null == i
            ? ((i = t), this.setLocation(i.x, i.y))
            : "number" == typeof t &&
              "number" == typeof e &&
              null == i &&
              (parseInt(t) == t && parseInt(e) == e
                ? this.move(t, e)
                : ((this.x = Math.floor(t + 0.5)),
                  (this.y = Math.floor(e + 0.5))));
        }),
        (n.prototype.move = function (t, e) {
          (this.x = t), (this.y = e);
        }),
        (n.prototype.translate = function (t, e) {
          (this.x += t), (this.y += e);
        }),
        (n.prototype.equals = function (t) {
          if ("Point" == t.constructor.name) {
            var e = t;
            return this.x == e.x && this.y == e.y;
          }
          return this == t;
        }),
        (n.prototype.toString = function () {
          return (
            new n().constructor.name + "[x=" + this.x + ",y=" + this.y + "]"
          );
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      function n(t, e, i, n) {
        (this.x = 0),
          (this.y = 0),
          (this.width = 0),
          (this.height = 0),
          null != t &&
            null != e &&
            null != i &&
            null != n &&
            ((this.x = t), (this.y = e), (this.width = i), (this.height = n));
      }
      (n.prototype.getX = function () {
        return this.x;
      }),
        (n.prototype.setX = function (t) {
          this.x = t;
        }),
        (n.prototype.getY = function () {
          return this.y;
        }),
        (n.prototype.setY = function (t) {
          this.y = t;
        }),
        (n.prototype.getWidth = function () {
          return this.width;
        }),
        (n.prototype.setWidth = function (t) {
          this.width = t;
        }),
        (n.prototype.getHeight = function () {
          return this.height;
        }),
        (n.prototype.setHeight = function (t) {
          this.height = t;
        }),
        (n.prototype.getRight = function () {
          return this.x + this.width;
        }),
        (n.prototype.getBottom = function () {
          return this.y + this.height;
        }),
        (n.prototype.intersects = function (t) {
          return !(
            this.getRight() < t.x ||
            this.getBottom() < t.y ||
            t.getRight() < this.x ||
            t.getBottom() < this.y
          );
        }),
        (n.prototype.getCenterX = function () {
          return this.x + this.width / 2;
        }),
        (n.prototype.getMinX = function () {
          return this.getX();
        }),
        (n.prototype.getMaxX = function () {
          return this.getX() + this.width;
        }),
        (n.prototype.getCenterY = function () {
          return this.y + this.height / 2;
        }),
        (n.prototype.getMinY = function () {
          return this.getY();
        }),
        (n.prototype.getMaxY = function () {
          return this.getY() + this.height;
        }),
        (n.prototype.getWidthHalf = function () {
          return this.width / 2;
        }),
        (n.prototype.getHeightHalf = function () {
          return this.height / 2;
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
      function r() {}
      (r.lastID = 0),
        (r.createID = function (t) {
          return r.isPrimitive(t)
            ? t
            : (null != t.uniqueID || ((t.uniqueID = r.getString()), r.lastID++),
              t.uniqueID);
        }),
        (r.getString = function (t) {
          return null == t && (t = r.lastID), "Object#" + t;
        }),
        (r.isPrimitive = function (t) {
          var e = void 0 === t ? "undefined" : n(t);
          return null == t || ("object" != e && "function" != e);
        }),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      var r = i(0),
        o = i(7),
        s = i(3),
        a = i(1),
        h = i(6),
        l = i(5),
        d = i(17),
        c = i(29);
      function g(t) {
        c.call(this),
          (this.layoutQuality = r.QUALITY),
          (this.createBendsAsNeeded = r.DEFAULT_CREATE_BENDS_AS_NEEDED),
          (this.incremental = r.DEFAULT_INCREMENTAL),
          (this.animationOnLayout = r.DEFAULT_ANIMATION_ON_LAYOUT),
          (this.animationDuringLayout = r.DEFAULT_ANIMATION_DURING_LAYOUT),
          (this.animationPeriod = r.DEFAULT_ANIMATION_PERIOD),
          (this.uniformLeafNodeSizes = r.DEFAULT_UNIFORM_LEAF_NODE_SIZES),
          (this.edgeToDummyNodes = new Map()),
          (this.graphManager = new o(this)),
          (this.isLayoutFinished = !1),
          (this.isSubLayout = !1),
          (this.isRemoteUse = !1),
          null != t && (this.isRemoteUse = t);
      }
      (g.RANDOM_SEED = 1),
        (g.prototype = Object.create(c.prototype)),
        (g.prototype.getGraphManager = function () {
          return this.graphManager;
        }),
        (g.prototype.getAllNodes = function () {
          return this.graphManager.getAllNodes();
        }),
        (g.prototype.getAllEdges = function () {
          return this.graphManager.getAllEdges();
        }),
        (g.prototype.getAllNodesToApplyGravitation = function () {
          return this.graphManager.getAllNodesToApplyGravitation();
        }),
        (g.prototype.newGraphManager = function () {
          var t = new o(this);
          return (this.graphManager = t), t;
        }),
        (g.prototype.newGraph = function (t) {
          return new h(null, this.graphManager, t);
        }),
        (g.prototype.newNode = function (t) {
          return new s(this.graphManager, t);
        }),
        (g.prototype.newEdge = function (t) {
          return new a(null, null, t);
        }),
        (g.prototype.checkLayoutSuccess = function () {
          return (
            null == this.graphManager.getRoot() ||
            0 == this.graphManager.getRoot().getNodes().length ||
            this.graphManager.includesInvalidEdge()
          );
        }),
        (g.prototype.runLayout = function () {
          var t;
          return (
            (this.isLayoutFinished = !1),
            this.tilingPreLayout && this.tilingPreLayout(),
            this.initParameters(),
            (t = !this.checkLayoutSuccess() && this.layout()),
            "during" !== r.ANIMATE &&
              (t && (this.isSubLayout || this.doPostLayout()),
              this.tilingPostLayout && this.tilingPostLayout(),
              (this.isLayoutFinished = !0),
              t)
          );
        }),
        (g.prototype.doPostLayout = function () {
          this.incremental || this.transform(), this.update();
        }),
        (g.prototype.update2 = function () {
          if (
            (this.createBendsAsNeeded &&
              (this.createBendpointsFromDummyNodes(),
              this.graphManager.resetAllEdges()),
            !this.isRemoteUse)
          ) {
            for (
              var t = this.graphManager.getAllEdges(), e = 0;
              e < t.length;
              e++
            )
              t[e];
            var i = this.graphManager.getRoot().getNodes();
            for (e = 0; e < i.length; e++) i[e];
            this.update(this.graphManager.getRoot());
          }
        }),
        (g.prototype.update = function (t) {
          if (null == t) this.update2();
          else if (t instanceof s) {
            var e = t;
            if (null != e.getChild())
              for (var i = e.getChild().getNodes(), n = 0; n < i.length; n++)
                update(i[n]);
            null != e.vGraphObject && e.vGraphObject.update(e);
          } else if (t instanceof a) {
            var r = t;
            null != r.vGraphObject && r.vGraphObject.update(r);
          } else if (t instanceof h) {
            var o = t;
            null != o.vGraphObject && o.vGraphObject.update(o);
          }
        }),
        (g.prototype.initParameters = function () {
          this.isSubLayout ||
            ((this.layoutQuality = r.QUALITY),
            (this.animationDuringLayout = r.DEFAULT_ANIMATION_DURING_LAYOUT),
            (this.animationPeriod = r.DEFAULT_ANIMATION_PERIOD),
            (this.animationOnLayout = r.DEFAULT_ANIMATION_ON_LAYOUT),
            (this.incremental = r.DEFAULT_INCREMENTAL),
            (this.createBendsAsNeeded = r.DEFAULT_CREATE_BENDS_AS_NEEDED),
            (this.uniformLeafNodeSizes = r.DEFAULT_UNIFORM_LEAF_NODE_SIZES)),
            this.animationDuringLayout && (this.animationOnLayout = !1);
        }),
        (g.prototype.transform = function (t) {
          if (null == t) this.transform(new l(0, 0));
          else {
            var e = new d(),
              i = this.graphManager.getRoot().updateLeftTop();
            if (null != i) {
              e.setWorldOrgX(t.x),
                e.setWorldOrgY(t.y),
                e.setDeviceOrgX(i.x),
                e.setDeviceOrgY(i.y);
              for (var n = this.getAllNodes(), r = 0; r < n.length; r++)
                n[r].transform(e);
            }
          }
        }),
        (g.prototype.positionNodesRandomly = function (t) {
          if (null == t)
            this.positionNodesRandomly(this.getGraphManager().getRoot()),
              this.getGraphManager().getRoot().updateBounds(!0);
          else
            for (var e, i, n = t.getNodes(), r = 0; r < n.length; r++)
              null == (i = (e = n[r]).getChild()) || 0 == i.getNodes().length
                ? e.scatter()
                : (this.positionNodesRandomly(i), e.updateBounds());
        }),
        (g.prototype.getFlatForest = function () {
          for (
            var t = [],
              e = !0,
              i = this.graphManager.getRoot().getNodes(),
              r = !0,
              o = 0;
            o < i.length;
            o++
          )
            null != i[o].getChild() && (r = !1);
          if (!r) return t;
          var s = new Set(),
            a = [],
            h = new Map(),
            l = [];
          for (l = l.concat(i); l.length > 0 && e; ) {
            for (a.push(l[0]); a.length > 0 && e; ) {
              var d = a[0];
              a.splice(0, 1), s.add(d);
              var c = d.getEdges();
              for (o = 0; o < c.length; o++) {
                var g = c[o].getOtherEnd(d);
                if (h.get(d) != g) {
                  if (s.has(g)) {
                    e = !1;
                    break;
                  }
                  a.push(g), h.set(g, d);
                }
              }
            }
            if (e) {
              var u = [].concat(n(s));
              for (t.push(u), o = 0; o < u.length; o++) {
                var f = u[o],
                  p = l.indexOf(f);
                p > -1 && l.splice(p, 1);
              }
              (s = new Set()), (h = new Map());
            } else t = [];
          }
          return t;
        }),
        (g.prototype.createDummyNodesForBendpoints = function (t) {
          for (
            var e = [],
              i = t.source,
              n = this.graphManager.calcLowestCommonAncestor(
                t.source,
                t.target,
              ),
              r = 0;
            r < t.bendpoints.length;
            r++
          ) {
            var o = this.newNode(null);
            o.setRect(new Point(0, 0), new Dimension(1, 1)), n.add(o);
            var s = this.newEdge(null);
            this.graphManager.add(s, i, o), e.add(o), (i = o);
          }
          return (
            (s = this.newEdge(null)),
            this.graphManager.add(s, i, t.target),
            this.edgeToDummyNodes.set(t, e),
            t.isInterGraph() ? this.graphManager.remove(t) : n.remove(t),
            e
          );
        }),
        (g.prototype.createBendpointsFromDummyNodes = function () {
          var t = [];
          (t = t.concat(this.graphManager.getAllEdges())),
            (t = [].concat(n(this.edgeToDummyNodes.keys())).concat(t));
          for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.bendpoints.length > 0) {
              for (
                var r = this.edgeToDummyNodes.get(i), o = 0;
                o < r.length;
                o++
              ) {
                var s = r[o],
                  a = new l(s.getCenterX(), s.getCenterY()),
                  h = i.bendpoints.get(o);
                (h.x = a.x), (h.y = a.y), s.getOwner().remove(s);
              }
              this.graphManager.add(i, i.source, i.target);
            }
          }
        }),
        (g.transform = function (t, e, i, n) {
          if (null != i && null != n) {
            var r = e;
            return (
              t <= 50
                ? (r -= ((e - e / i) / 50) * (50 - t))
                : (r += ((e * n - e) / 50) * (t - 50)),
              r
            );
          }
          var o, s;
          return (
            t <= 50
              ? ((o = (9 * e) / 500), (s = e / 10))
              : ((o = (9 * e) / 50), (s = -8 * e)),
            o * t + s
          );
        }),
        (g.findCenterOfTree = function (t) {
          var e = [];
          e = e.concat(t);
          var i = [],
            n = new Map(),
            r = !1,
            o = null;
          (1 != e.length && 2 != e.length) || ((r = !0), (o = e[0]));
          for (var s = 0; s < e.length; s++) {
            var a = (d = e[s]).getNeighborsList().size;
            n.set(d, d.getNeighborsList().size), 1 == a && i.push(d);
          }
          var h = [];
          for (h = h.concat(i); !r; ) {
            var l = [];
            for (l = l.concat(h), h = [], s = 0; s < e.length; s++) {
              var d = e[s],
                c = e.indexOf(d);
              c >= 0 && e.splice(c, 1),
                d.getNeighborsList().forEach(function (t) {
                  if (i.indexOf(t) < 0) {
                    var e = n.get(t) - 1;
                    1 == e && h.push(t), n.set(t, e);
                  }
                });
            }
            (i = i.concat(h)),
              (1 != e.length && 2 != e.length) || ((r = !0), (o = e[0]));
          }
          return o;
        }),
        (g.prototype.setGraphManager = function (t) {
          this.graphManager = t;
        }),
        (t.exports = g);
    },
    function (t, e, i) {
      "use strict";
      function n() {}
      (n.seed = 1),
        (n.x = 0),
        (n.nextDouble = function () {
          return (n.x = 1e4 * Math.sin(n.seed++)), n.x - Math.floor(n.x);
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      var n = i(5);
      function r(t, e) {
        (this.lworldOrgX = 0),
          (this.lworldOrgY = 0),
          (this.ldeviceOrgX = 0),
          (this.ldeviceOrgY = 0),
          (this.lworldExtX = 1),
          (this.lworldExtY = 1),
          (this.ldeviceExtX = 1),
          (this.ldeviceExtY = 1);
      }
      (r.prototype.getWorldOrgX = function () {
        return this.lworldOrgX;
      }),
        (r.prototype.setWorldOrgX = function (t) {
          this.lworldOrgX = t;
        }),
        (r.prototype.getWorldOrgY = function () {
          return this.lworldOrgY;
        }),
        (r.prototype.setWorldOrgY = function (t) {
          this.lworldOrgY = t;
        }),
        (r.prototype.getWorldExtX = function () {
          return this.lworldExtX;
        }),
        (r.prototype.setWorldExtX = function (t) {
          this.lworldExtX = t;
        }),
        (r.prototype.getWorldExtY = function () {
          return this.lworldExtY;
        }),
        (r.prototype.setWorldExtY = function (t) {
          this.lworldExtY = t;
        }),
        (r.prototype.getDeviceOrgX = function () {
          return this.ldeviceOrgX;
        }),
        (r.prototype.setDeviceOrgX = function (t) {
          this.ldeviceOrgX = t;
        }),
        (r.prototype.getDeviceOrgY = function () {
          return this.ldeviceOrgY;
        }),
        (r.prototype.setDeviceOrgY = function (t) {
          this.ldeviceOrgY = t;
        }),
        (r.prototype.getDeviceExtX = function () {
          return this.ldeviceExtX;
        }),
        (r.prototype.setDeviceExtX = function (t) {
          this.ldeviceExtX = t;
        }),
        (r.prototype.getDeviceExtY = function () {
          return this.ldeviceExtY;
        }),
        (r.prototype.setDeviceExtY = function (t) {
          this.ldeviceExtY = t;
        }),
        (r.prototype.transformX = function (t) {
          var e = 0,
            i = this.lworldExtX;
          return (
            0 != i &&
              (e =
                this.ldeviceOrgX +
                ((t - this.lworldOrgX) * this.ldeviceExtX) / i),
            e
          );
        }),
        (r.prototype.transformY = function (t) {
          var e = 0,
            i = this.lworldExtY;
          return (
            0 != i &&
              (e =
                this.ldeviceOrgY +
                ((t - this.lworldOrgY) * this.ldeviceExtY) / i),
            e
          );
        }),
        (r.prototype.inverseTransformX = function (t) {
          var e = 0,
            i = this.ldeviceExtX;
          return (
            0 != i &&
              (e =
                this.lworldOrgX +
                ((t - this.ldeviceOrgX) * this.lworldExtX) / i),
            e
          );
        }),
        (r.prototype.inverseTransformY = function (t) {
          var e = 0,
            i = this.ldeviceExtY;
          return (
            0 != i &&
              (e =
                this.lworldOrgY +
                ((t - this.ldeviceOrgY) * this.lworldExtY) / i),
            e
          );
        }),
        (r.prototype.inverseTransformPoint = function (t) {
          return new n(
            this.inverseTransformX(t.x),
            this.inverseTransformY(t.y),
          );
        }),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      var n = i(15),
        r = i(4),
        o = i(0),
        s = i(8),
        a = i(9);
      function h() {
        n.call(this),
          (this.useSmartIdealEdgeLengthCalculation =
            r.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION),
          (this.gravityConstant = r.DEFAULT_GRAVITY_STRENGTH),
          (this.compoundGravityConstant = r.DEFAULT_COMPOUND_GRAVITY_STRENGTH),
          (this.gravityRangeFactor = r.DEFAULT_GRAVITY_RANGE_FACTOR),
          (this.compoundGravityRangeFactor =
            r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR),
          (this.displacementThresholdPerNode =
            (3 * r.DEFAULT_EDGE_LENGTH) / 100),
          (this.coolingFactor = r.DEFAULT_COOLING_FACTOR_INCREMENTAL),
          (this.initialCoolingFactor = r.DEFAULT_COOLING_FACTOR_INCREMENTAL),
          (this.totalDisplacement = 0),
          (this.oldTotalDisplacement = 0),
          (this.maxIterations = r.MAX_ITERATIONS);
      }
      for (var l in ((h.prototype = Object.create(n.prototype)), n))
        h[l] = n[l];
      (h.prototype.initParameters = function () {
        n.prototype.initParameters.call(this, arguments),
          (this.totalIterations = 0),
          (this.notAnimatedIterations = 0),
          (this.useFRGridVariant =
            r.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION),
          (this.grid = []);
      }),
        (h.prototype.calcIdealEdgeLengths = function () {
          for (
            var t,
              e,
              i,
              n,
              s,
              a,
              h,
              l = this.getGraphManager().getAllEdges(),
              d = 0;
            d < l.length;
            d++
          )
            (e = (t = l[d]).idealLength),
              t.isInterGraph &&
                ((n = t.getSource()),
                (s = t.getTarget()),
                (a = t.getSourceInLca().getEstimatedSize()),
                (h = t.getTargetInLca().getEstimatedSize()),
                this.useSmartIdealEdgeLengthCalculation &&
                  (t.idealLength += a + h - 2 * o.SIMPLE_NODE_SIZE),
                (i = t.getLca().getInclusionTreeDepth()),
                (t.idealLength +=
                  e *
                  r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR *
                  (n.getInclusionTreeDepth() +
                    s.getInclusionTreeDepth() -
                    2 * i)));
        }),
        (h.prototype.initSpringEmbedder = function () {
          var t = this.getAllNodes().length;
          this.incremental
            ? (t > r.ADAPTATION_LOWER_NODE_LIMIT &&
                (this.coolingFactor = Math.max(
                  this.coolingFactor * r.COOLING_ADAPTATION_FACTOR,
                  this.coolingFactor -
                    ((t - r.ADAPTATION_LOWER_NODE_LIMIT) /
                      (r.ADAPTATION_UPPER_NODE_LIMIT -
                        r.ADAPTATION_LOWER_NODE_LIMIT)) *
                      this.coolingFactor *
                      (1 - r.COOLING_ADAPTATION_FACTOR),
                )),
              (this.maxNodeDisplacement = r.MAX_NODE_DISPLACEMENT_INCREMENTAL))
            : (t > r.ADAPTATION_LOWER_NODE_LIMIT
                ? (this.coolingFactor = Math.max(
                    r.COOLING_ADAPTATION_FACTOR,
                    1 -
                      ((t - r.ADAPTATION_LOWER_NODE_LIMIT) /
                        (r.ADAPTATION_UPPER_NODE_LIMIT -
                          r.ADAPTATION_LOWER_NODE_LIMIT)) *
                        (1 - r.COOLING_ADAPTATION_FACTOR),
                  ))
                : (this.coolingFactor = 1),
              (this.initialCoolingFactor = this.coolingFactor),
              (this.maxNodeDisplacement = r.MAX_NODE_DISPLACEMENT)),
            (this.maxIterations = Math.max(
              5 * this.getAllNodes().length,
              this.maxIterations,
            )),
            (this.displacementThresholdPerNode =
              (3 * r.DEFAULT_EDGE_LENGTH) / 100),
            (this.totalDisplacementThreshold =
              this.displacementThresholdPerNode * this.getAllNodes().length),
            (this.repulsionRange = this.calcRepulsionRange());
        }),
        (h.prototype.calcSpringForces = function () {
          for (var t, e = this.getAllEdges(), i = 0; i < e.length; i++)
            (t = e[i]), this.calcSpringForce(t, t.idealLength);
        }),
        (h.prototype.calcRepulsionForces = function () {
          var t,
            e,
            i,
            n,
            o,
            s =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            h = this.getAllNodes();
          if (this.useFRGridVariant)
            for (
              this.totalIterations % r.GRID_CALCULATION_CHECK_PERIOD == 1 &&
                s &&
                this.updateGrid(),
                o = new Set(),
                t = 0;
              t < h.length;
              t++
            )
              (i = h[t]),
                this.calculateRepulsionForceOfANode(i, o, s, a),
                o.add(i);
          else
            for (t = 0; t < h.length; t++)
              for (i = h[t], e = t + 1; e < h.length; e++)
                (n = h[e]),
                  i.getOwner() == n.getOwner() && this.calcRepulsionForce(i, n);
        }),
        (h.prototype.calcGravitationalForces = function () {
          for (
            var t, e = this.getAllNodesToApplyGravitation(), i = 0;
            i < e.length;
            i++
          )
            (t = e[i]), this.calcGravitationalForce(t);
        }),
        (h.prototype.moveNodes = function () {
          for (var t = this.getAllNodes(), e = 0; e < t.length; e++)
            t[e].move();
        }),
        (h.prototype.calcSpringForce = function (t, e) {
          var i,
            n,
            r,
            o,
            s = t.getSource(),
            a = t.getTarget();
          if (
            this.uniformLeafNodeSizes &&
            null == s.getChild() &&
            null == a.getChild()
          )
            t.updateLengthSimple();
          else if ((t.updateLength(), t.isOverlapingSourceAndTarget)) return;
          0 != (i = t.getLength()) &&
            ((r = (n = t.edgeElasticity * (i - e)) * (t.lengthX / i)),
            (o = n * (t.lengthY / i)),
            (s.springForceX += r),
            (s.springForceY += o),
            (a.springForceX -= r),
            (a.springForceY -= o));
        }),
        (h.prototype.calcRepulsionForce = function (t, e) {
          var i,
            n,
            o,
            h,
            l,
            d,
            c,
            g = t.getRect(),
            u = e.getRect(),
            f = new Array(2),
            p = new Array(4);
          if (g.intersects(u)) {
            s.calcSeparationAmount(g, u, f, r.DEFAULT_EDGE_LENGTH / 2),
              (d = 2 * f[0]),
              (c = 2 * f[1]);
            var m =
              (t.noOfChildren * e.noOfChildren) /
              (t.noOfChildren + e.noOfChildren);
            (t.repulsionForceX -= m * d),
              (t.repulsionForceY -= m * c),
              (e.repulsionForceX += m * d),
              (e.repulsionForceY += m * c);
          } else
            this.uniformLeafNodeSizes &&
            null == t.getChild() &&
            null == e.getChild()
              ? ((i = u.getCenterX() - g.getCenterX()),
                (n = u.getCenterY() - g.getCenterY()))
              : (s.getIntersection(g, u, p),
                (i = p[2] - p[0]),
                (n = p[3] - p[1])),
              Math.abs(i) < r.MIN_REPULSION_DIST &&
                (i = a.sign(i) * r.MIN_REPULSION_DIST),
              Math.abs(n) < r.MIN_REPULSION_DIST &&
                (n = a.sign(n) * r.MIN_REPULSION_DIST),
              (o = i * i + n * n),
              (h = Math.sqrt(o)),
              (d =
                ((l =
                  ((t.nodeRepulsion / 2 + e.nodeRepulsion / 2) *
                    t.noOfChildren *
                    e.noOfChildren) /
                  o) *
                  i) /
                h),
              (c = (l * n) / h),
              (t.repulsionForceX -= d),
              (t.repulsionForceY -= c),
              (e.repulsionForceX += d),
              (e.repulsionForceY += c);
        }),
        (h.prototype.calcGravitationalForce = function (t) {
          var e, i, n, r, o, s, a, h;
          (i = ((e = t.getOwner()).getRight() + e.getLeft()) / 2),
            (n = (e.getTop() + e.getBottom()) / 2),
            (r = t.getCenterX() - i),
            (o = t.getCenterY() - n),
            (s = Math.abs(r) + t.getWidth() / 2),
            (a = Math.abs(o) + t.getHeight() / 2),
            t.getOwner() == this.graphManager.getRoot()
              ? (s > (h = e.getEstimatedSize() * this.gravityRangeFactor) ||
                  a > h) &&
                ((t.gravitationForceX = -this.gravityConstant * r),
                (t.gravitationForceY = -this.gravityConstant * o))
              : (s >
                  (h =
                    e.getEstimatedSize() * this.compoundGravityRangeFactor) ||
                  a > h) &&
                ((t.gravitationForceX =
                  -this.gravityConstant * r * this.compoundGravityConstant),
                (t.gravitationForceY =
                  -this.gravityConstant * o * this.compoundGravityConstant));
        }),
        (h.prototype.isConverged = function () {
          var t,
            e = !1;
          return (
            this.totalIterations > this.maxIterations / 3 &&
              (e =
                Math.abs(this.totalDisplacement - this.oldTotalDisplacement) <
                2),
            (t = this.totalDisplacement < this.totalDisplacementThreshold),
            (this.oldTotalDisplacement = this.totalDisplacement),
            t || e
          );
        }),
        (h.prototype.animate = function () {
          this.animationDuringLayout &&
            !this.isSubLayout &&
            (this.notAnimatedIterations == this.animationPeriod
              ? (this.update(), (this.notAnimatedIterations = 0))
              : this.notAnimatedIterations++);
        }),
        (h.prototype.calcNoOfChildrenForAllNodes = function () {
          for (
            var t, e = this.graphManager.getAllNodes(), i = 0;
            i < e.length;
            i++
          )
            (t = e[i]).noOfChildren = t.getNoOfChildren();
        }),
        (h.prototype.calcGrid = function (t) {
          var e, i;
          (e = parseInt(
            Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange),
          )),
            (i = parseInt(
              Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange),
            ));
          for (var n = new Array(e), r = 0; r < e; r++) n[r] = new Array(i);
          for (r = 0; r < e; r++)
            for (var o = 0; o < i; o++) n[r][o] = new Array();
          return n;
        }),
        (h.prototype.addNodeToGrid = function (t, e, i) {
          var n, r, o, s;
          (n = parseInt(Math.floor((t.getRect().x - e) / this.repulsionRange))),
            (r = parseInt(
              Math.floor(
                (t.getRect().width + t.getRect().x - e) / this.repulsionRange,
              ),
            )),
            (o = parseInt(
              Math.floor((t.getRect().y - i) / this.repulsionRange),
            )),
            (s = parseInt(
              Math.floor(
                (t.getRect().height + t.getRect().y - i) / this.repulsionRange,
              ),
            ));
          for (var a = n; a <= r; a++)
            for (var h = o; h <= s; h++)
              this.grid[a][h].push(t), t.setGridCoordinates(n, r, o, s);
        }),
        (h.prototype.updateGrid = function () {
          var t,
            e,
            i = this.getAllNodes();
          for (
            this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0;
            t < i.length;
            t++
          )
            (e = i[t]),
              this.addNodeToGrid(
                e,
                this.graphManager.getRoot().getLeft(),
                this.graphManager.getRoot().getTop(),
              );
        }),
        (h.prototype.calculateRepulsionForceOfANode = function (t, e, i, n) {
          if (
            (this.totalIterations % r.GRID_CALCULATION_CHECK_PERIOD == 1 &&
              i) ||
            n
          ) {
            var o,
              s = new Set();
            t.surrounding = new Array();
            for (var a = this.grid, h = t.startX - 1; h < t.finishX + 2; h++)
              for (var l = t.startY - 1; l < t.finishY + 2; l++)
                if (!(h < 0 || l < 0 || h >= a.length || l >= a[0].length))
                  for (var d = 0; d < a[h][l].length; d++)
                    if (
                      ((o = a[h][l][d]),
                      t.getOwner() == o.getOwner() &&
                        t != o &&
                        !e.has(o) &&
                        !s.has(o))
                    ) {
                      var c =
                          Math.abs(t.getCenterX() - o.getCenterX()) -
                          (t.getWidth() / 2 + o.getWidth() / 2),
                        g =
                          Math.abs(t.getCenterY() - o.getCenterY()) -
                          (t.getHeight() / 2 + o.getHeight() / 2);
                      c <= this.repulsionRange &&
                        g <= this.repulsionRange &&
                        s.add(o);
                    }
            t.surrounding = [].concat(
              (function (t) {
                if (Array.isArray(t)) {
                  for (var e = 0, i = Array(t.length); e < t.length; e++)
                    i[e] = t[e];
                  return i;
                }
                return Array.from(t);
              })(s),
            );
          }
          for (h = 0; h < t.surrounding.length; h++)
            this.calcRepulsionForce(t, t.surrounding[h]);
        }),
        (h.prototype.calcRepulsionRange = function () {
          return 0;
        }),
        (t.exports = h);
    },
    function (t, e, i) {
      "use strict";
      var n = i(1),
        r = i(4);
      function o(t, e, i) {
        n.call(this, t, e, i),
          (this.idealLength = r.DEFAULT_EDGE_LENGTH),
          (this.edgeElasticity = r.DEFAULT_SPRING_STRENGTH);
      }
      for (var s in ((o.prototype = Object.create(n.prototype)), n))
        o[s] = n[s];
      t.exports = o;
    },
    function (t, e, i) {
      "use strict";
      var n = i(3),
        r = i(4);
      function o(t, e, i, o) {
        n.call(this, t, e, i, o),
          (this.nodeRepulsion = r.DEFAULT_REPULSION_STRENGTH),
          (this.springForceX = 0),
          (this.springForceY = 0),
          (this.repulsionForceX = 0),
          (this.repulsionForceY = 0),
          (this.gravitationForceX = 0),
          (this.gravitationForceY = 0),
          (this.displacementX = 0),
          (this.displacementY = 0),
          (this.startX = 0),
          (this.finishX = 0),
          (this.startY = 0),
          (this.finishY = 0),
          (this.surrounding = []);
      }
      for (var s in ((o.prototype = Object.create(n.prototype)), n))
        o[s] = n[s];
      (o.prototype.setGridCoordinates = function (t, e, i, n) {
        (this.startX = t),
          (this.finishX = e),
          (this.startY = i),
          (this.finishY = n);
      }),
        (t.exports = o);
    },
    function (t, e, i) {
      "use strict";
      function n(t, e) {
        (this.width = 0),
          (this.height = 0),
          null !== t && null !== e && ((this.height = e), (this.width = t));
      }
      (n.prototype.getWidth = function () {
        return this.width;
      }),
        (n.prototype.setWidth = function (t) {
          this.width = t;
        }),
        (n.prototype.getHeight = function () {
          return this.height;
        }),
        (n.prototype.setHeight = function (t) {
          this.height = t;
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      var n = i(14);
      function r() {
        (this.map = {}), (this.keys = []);
      }
      (r.prototype.put = function (t, e) {
        var i = n.createID(t);
        this.contains(i) || ((this.map[i] = e), this.keys.push(t));
      }),
        (r.prototype.contains = function (t) {
          return n.createID(t), null != this.map[t];
        }),
        (r.prototype.get = function (t) {
          var e = n.createID(t);
          return this.map[e];
        }),
        (r.prototype.keySet = function () {
          return this.keys;
        }),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      var n = i(14);
      function r() {
        this.set = {};
      }
      (r.prototype.add = function (t) {
        var e = n.createID(t);
        this.contains(e) || (this.set[e] = t);
      }),
        (r.prototype.remove = function (t) {
          delete this.set[n.createID(t)];
        }),
        (r.prototype.clear = function () {
          this.set = {};
        }),
        (r.prototype.contains = function (t) {
          return this.set[n.createID(t)] == t;
        }),
        (r.prototype.isEmpty = function () {
          return 0 === this.size();
        }),
        (r.prototype.size = function () {
          return Object.keys(this.set).length;
        }),
        (r.prototype.addAllTo = function (t) {
          for (var e = Object.keys(this.set), i = e.length, n = 0; n < i; n++)
            t.push(this.set[e[n]]);
        }),
        (r.prototype.size = function () {
          return Object.keys(this.set).length;
        }),
        (r.prototype.addAll = function (t) {
          for (var e = t.length, i = 0; i < e; i++) {
            var n = t[i];
            this.add(n);
          }
        }),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      function n() {}
      (n.multMat = function (t, e) {
        for (var i = [], n = 0; n < t.length; n++) {
          i[n] = [];
          for (var r = 0; r < e[0].length; r++) {
            i[n][r] = 0;
            for (var o = 0; o < t[0].length; o++) i[n][r] += t[n][o] * e[o][r];
          }
        }
        return i;
      }),
        (n.transpose = function (t) {
          for (var e = [], i = 0; i < t[0].length; i++) {
            e[i] = [];
            for (var n = 0; n < t.length; n++) e[i][n] = t[n][i];
          }
          return e;
        }),
        (n.multCons = function (t, e) {
          for (var i = [], n = 0; n < t.length; n++) i[n] = t[n] * e;
          return i;
        }),
        (n.minusOp = function (t, e) {
          for (var i = [], n = 0; n < t.length; n++) i[n] = t[n] - e[n];
          return i;
        }),
        (n.dotProduct = function (t, e) {
          for (var i = 0, n = 0; n < t.length; n++) i += t[n] * e[n];
          return i;
        }),
        (n.mag = function (t) {
          return Math.sqrt(this.dotProduct(t, t));
        }),
        (n.normalize = function (t) {
          for (var e = [], i = this.mag(t), n = 0; n < t.length; n++)
            e[n] = t[n] / i;
          return e;
        }),
        (n.multGamma = function (t) {
          for (var e = [], i = 0, n = 0; n < t.length; n++) i += t[n];
          i *= -1 / t.length;
          for (var r = 0; r < t.length; r++) e[r] = i + t[r];
          return e;
        }),
        (n.multL = function (t, e, i) {
          for (var n = [], r = [], o = [], s = 0; s < e[0].length; s++) {
            for (var a = 0, h = 0; h < e.length; h++)
              a += -0.5 * e[h][s] * t[h];
            r[s] = a;
          }
          for (var l = 0; l < i.length; l++) {
            for (var d = 0, c = 0; c < i.length; c++) d += i[l][c] * r[c];
            o[l] = d;
          }
          for (var g = 0; g < e.length; g++) {
            for (var u = 0, f = 0; f < e[0].length; f++) u += e[g][f] * o[f];
            n[g] = u;
          }
          return n;
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
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
        r = i(11),
        o = (function () {
          function t(e, i) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (null === i && void 0 === i) ||
                (this.compareFunction = this._defaultCompareFunction);
            var n;
            (n = e instanceof r ? e.size() : e.length),
              this._quicksort(e, 0, n - 1);
          }
          return (
            n(t, [
              {
                key: "_quicksort",
                value: function (t, e, i) {
                  if (e < i) {
                    var n = this._partition(t, e, i);
                    this._quicksort(t, e, n), this._quicksort(t, n + 1, i);
                  }
                },
              },
              {
                key: "_partition",
                value: function (t, e, i) {
                  for (var n = this._get(t, e), r = e, o = i; ; ) {
                    for (; this.compareFunction(n, this._get(t, o)); ) o--;
                    for (; this.compareFunction(this._get(t, r), n); ) r++;
                    if (!(r < o)) return o;
                    this._swap(t, r, o), r++, o--;
                  }
                },
              },
              {
                key: "_get",
                value: function (t, e) {
                  return t instanceof r ? t.get_object_at(e) : t[e];
                },
              },
              {
                key: "_set",
                value: function (t, e, i) {
                  t instanceof r ? t.set_object_at(e, i) : (t[e] = i);
                },
              },
              {
                key: "_swap",
                value: function (t, e, i) {
                  var n = this._get(t, e);
                  this._set(t, e, this._get(t, i)), this._set(t, i, n);
                },
              },
              {
                key: "_defaultCompareFunction",
                value: function (t, e) {
                  return e > t;
                },
              },
            ]),
            t
          );
        })();
      t.exports = o;
    },
    function (t, e, i) {
      "use strict";
      function n() {}
      (n.svd = function (t) {
        (this.U = null),
          (this.V = null),
          (this.s = null),
          (this.m = 0),
          (this.n = 0),
          (this.m = t.length),
          (this.n = t[0].length);
        var e = Math.min(this.m, this.n);
        (this.s = (function (t) {
          for (var e = []; t-- > 0; ) e.push(0);
          return e;
        })(Math.min(this.m + 1, this.n))),
          (this.U = (function t(e) {
            if (0 == e.length) return 0;
            for (var i = [], n = 0; n < e[0]; n++) i.push(t(e.slice(1)));
            return i;
          })([this.m, e])),
          (this.V = (function t(e) {
            if (0 == e.length) return 0;
            for (var i = [], n = 0; n < e[0]; n++) i.push(t(e.slice(1)));
            return i;
          })([this.n, this.n]));
        for (
          var i = (function (t) {
              for (var e = []; t-- > 0; ) e.push(0);
              return e;
            })(this.n),
            r = (function (t) {
              for (var e = []; t-- > 0; ) e.push(0);
              return e;
            })(this.m),
            o = Math.min(this.m - 1, this.n),
            s = Math.max(0, Math.min(this.n - 2, this.m)),
            a = 0;
          a < Math.max(o, s);
          a++
        ) {
          if (a < o) {
            this.s[a] = 0;
            for (var h = a; h < this.m; h++)
              this.s[a] = n.hypot(this.s[a], t[h][a]);
            if (0 !== this.s[a]) {
              t[a][a] < 0 && (this.s[a] = -this.s[a]);
              for (var l = a; l < this.m; l++) t[l][a] /= this.s[a];
              t[a][a] += 1;
            }
            this.s[a] = -this.s[a];
          }
          for (var d = a + 1; d < this.n; d++) {
            if (
              (function (t, e) {
                return t && e;
              })(a < o, 0 !== this.s[a])
            ) {
              for (var c = 0, g = a; g < this.m; g++) c += t[g][a] * t[g][d];
              c = -c / t[a][a];
              for (var u = a; u < this.m; u++) t[u][d] += c * t[u][a];
            }
            i[d] = t[a][d];
          }
          if (
            (function (t, e) {
              return e;
            })(0, a < o)
          )
            for (var f = a; f < this.m; f++) this.U[f][a] = t[f][a];
          if (a < s) {
            i[a] = 0;
            for (var p = a + 1; p < this.n; p++) i[a] = n.hypot(i[a], i[p]);
            if (0 !== i[a]) {
              i[a + 1] < 0 && (i[a] = -i[a]);
              for (var m = a + 1; m < this.n; m++) i[m] /= i[a];
              i[a + 1] += 1;
            }
            if (
              ((i[a] = -i[a]),
              (function (t, e) {
                return t && e;
              })(a + 1 < this.m, 0 !== i[a]))
            ) {
              for (var y = a + 1; y < this.m; y++) r[y] = 0;
              for (var v = a + 1; v < this.n; v++)
                for (var E = a + 1; E < this.m; E++) r[E] += i[v] * t[E][v];
              for (var N = a + 1; N < this.n; N++)
                for (var T = -i[N] / i[a + 1], A = a + 1; A < this.m; A++)
                  t[A][N] += T * r[A];
            }
            for (var w = a + 1; w < this.n; w++) this.V[w][a] = i[w];
          }
        }
        var I = Math.min(this.n, this.m + 1);
        o < this.n && (this.s[o] = t[o][o]),
          this.m < I && (this.s[I - 1] = 0),
          s + 1 < I && (i[s] = t[s][I - 1]),
          (i[I - 1] = 0);
        for (var C = o; C < e; C++) {
          for (var L = 0; L < this.m; L++) this.U[L][C] = 0;
          this.U[C][C] = 1;
        }
        for (var M = o - 1; M >= 0; M--)
          if (0 !== this.s[M]) {
            for (var _ = M + 1; _ < e; _++) {
              for (var x = 0, O = M; O < this.m; O++)
                x += this.U[O][M] * this.U[O][_];
              x = -x / this.U[M][M];
              for (var D = M; D < this.m; D++) this.U[D][_] += x * this.U[D][M];
            }
            for (var R = M; R < this.m; R++) this.U[R][M] = -this.U[R][M];
            this.U[M][M] = 1 + this.U[M][M];
            for (var b = 0; b < M - 1; b++) this.U[b][M] = 0;
          } else {
            for (var F = 0; F < this.m; F++) this.U[F][M] = 0;
            this.U[M][M] = 1;
          }
        for (var G = this.n - 1; G >= 0; G--) {
          if (
            (function (t, e) {
              return t && e;
            })(G < s, 0 !== i[G])
          )
            for (var S = G + 1; S < e; S++) {
              for (var P = 0, U = G + 1; U < this.n; U++)
                P += this.V[U][G] * this.V[U][S];
              P = -P / this.V[G + 1][G];
              for (var Y = G + 1; Y < this.n; Y++)
                this.V[Y][S] += P * this.V[Y][G];
            }
          for (var k = 0; k < this.n; k++) this.V[k][G] = 0;
          this.V[G][G] = 1;
        }
        for (
          var H = I - 1, X = Math.pow(2, -52), z = Math.pow(2, -966);
          I > 0;

        ) {
          var B = void 0,
            V = void 0;
          for (B = I - 2; B >= -1 && -1 !== B; B--)
            if (
              Math.abs(i[B]) <=
              z + X * (Math.abs(this.s[B]) + Math.abs(this.s[B + 1]))
            ) {
              i[B] = 0;
              break;
            }
          if (B === I - 2) V = 4;
          else {
            var W = void 0;
            for (W = I - 1; W >= B && W !== B; W--) {
              var $ =
                (W !== I ? Math.abs(i[W]) : 0) +
                (W !== B + 1 ? Math.abs(i[W - 1]) : 0);
              if (Math.abs(this.s[W]) <= z + X * $) {
                this.s[W] = 0;
                break;
              }
            }
            W === B ? (V = 3) : W === I - 1 ? (V = 1) : ((V = 2), (B = W));
          }
          switch ((B++, V)) {
            case 1:
              var j = i[I - 2];
              i[I - 2] = 0;
              for (var q = I - 2; q >= B; q--) {
                var K = n.hypot(this.s[q], j),
                  Z = this.s[q] / K,
                  Q = j / K;
                (this.s[q] = K),
                  q !== B && ((j = -Q * i[q - 1]), (i[q - 1] = Z * i[q - 1]));
                for (var J = 0; J < this.n; J++)
                  (K = Z * this.V[J][q] + Q * this.V[J][I - 1]),
                    (this.V[J][I - 1] =
                      -Q * this.V[J][q] + Z * this.V[J][I - 1]),
                    (this.V[J][q] = K);
              }
              break;
            case 2:
              var tt = i[B - 1];
              i[B - 1] = 0;
              for (var et = B; et < I; et++) {
                var it = n.hypot(this.s[et], tt),
                  nt = this.s[et] / it,
                  rt = tt / it;
                (this.s[et] = it), (tt = -rt * i[et]), (i[et] = nt * i[et]);
                for (var ot = 0; ot < this.m; ot++)
                  (it = nt * this.U[ot][et] + rt * this.U[ot][B - 1]),
                    (this.U[ot][B - 1] =
                      -rt * this.U[ot][et] + nt * this.U[ot][B - 1]),
                    (this.U[ot][et] = it);
              }
              break;
            case 3:
              var st = Math.max(
                  Math.max(
                    Math.max(
                      Math.max(
                        Math.abs(this.s[I - 1]),
                        Math.abs(this.s[I - 2]),
                      ),
                      Math.abs(i[I - 2]),
                    ),
                    Math.abs(this.s[B]),
                  ),
                  Math.abs(i[B]),
                ),
                at = this.s[I - 1] / st,
                ht = this.s[I - 2] / st,
                lt = i[I - 2] / st,
                dt = this.s[B] / st,
                ct = i[B] / st,
                gt = ((ht + at) * (ht - at) + lt * lt) / 2,
                ut = at * lt * (at * lt),
                ft = 0;
              (function (t, e) {
                return t || e;
              })(0 !== gt, 0 !== ut) &&
                ((ft = Math.sqrt(gt * gt + ut)),
                gt < 0 && (ft = -ft),
                (ft = ut / (gt + ft)));
              for (
                var pt = (dt + at) * (dt - at) + ft, mt = dt * ct, yt = B;
                yt < I - 1;
                yt++
              ) {
                var vt = n.hypot(pt, mt),
                  Et = pt / vt,
                  Nt = mt / vt;
                yt !== B && (i[yt - 1] = vt),
                  (pt = Et * this.s[yt] + Nt * i[yt]),
                  (i[yt] = Et * i[yt] - Nt * this.s[yt]),
                  (mt = Nt * this.s[yt + 1]),
                  (this.s[yt + 1] = Et * this.s[yt + 1]);
                for (var Tt = 0; Tt < this.n; Tt++)
                  (vt = Et * this.V[Tt][yt] + Nt * this.V[Tt][yt + 1]),
                    (this.V[Tt][yt + 1] =
                      -Nt * this.V[Tt][yt] + Et * this.V[Tt][yt + 1]),
                    (this.V[Tt][yt] = vt);
                if (
                  ((Et = pt / (vt = n.hypot(pt, mt))),
                  (Nt = mt / vt),
                  (this.s[yt] = vt),
                  (pt = Et * i[yt] + Nt * this.s[yt + 1]),
                  (this.s[yt + 1] = -Nt * i[yt] + Et * this.s[yt + 1]),
                  (mt = Nt * i[yt + 1]),
                  (i[yt + 1] = Et * i[yt + 1]),
                  yt < this.m - 1)
                )
                  for (var At = 0; At < this.m; At++)
                    (vt = Et * this.U[At][yt] + Nt * this.U[At][yt + 1]),
                      (this.U[At][yt + 1] =
                        -Nt * this.U[At][yt] + Et * this.U[At][yt + 1]),
                      (this.U[At][yt] = vt);
              }
              i[I - 2] = pt;
              break;
            case 4:
              if (this.s[B] <= 0) {
                this.s[B] = this.s[B] < 0 ? -this.s[B] : 0;
                for (var wt = 0; wt <= H; wt++) this.V[wt][B] = -this.V[wt][B];
              }
              for (; B < H && !(this.s[B] >= this.s[B + 1]); ) {
                var It = this.s[B];
                if (
                  ((this.s[B] = this.s[B + 1]),
                  (this.s[B + 1] = It),
                  B < this.n - 1)
                )
                  for (var Ct = 0; Ct < this.n; Ct++)
                    (It = this.V[Ct][B + 1]),
                      (this.V[Ct][B + 1] = this.V[Ct][B]),
                      (this.V[Ct][B] = It);
                if (B < this.m - 1)
                  for (var Lt = 0; Lt < this.m; Lt++)
                    (It = this.U[Lt][B + 1]),
                      (this.U[Lt][B + 1] = this.U[Lt][B]),
                      (this.U[Lt][B] = It);
                B++;
              }
              I--;
          }
        }
        return { U: this.U, V: this.V, S: this.s };
      }),
        (n.hypot = function (t, e) {
          var i = void 0;
          return (
            Math.abs(t) > Math.abs(e)
              ? ((i = e / t), (i = Math.abs(t) * Math.sqrt(1 + i * i)))
              : 0 != e
                ? ((i = t / e), (i = Math.abs(e) * Math.sqrt(1 + i * i)))
                : (i = 0),
            i
          );
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
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
        r = (function () {
          function t(e, i) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : -1,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : -1;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.sequence1 = e),
              (this.sequence2 = i),
              (this.match_score = n),
              (this.mismatch_penalty = r),
              (this.gap_penalty = o),
              (this.iMax = e.length + 1),
              (this.jMax = i.length + 1),
              (this.grid = new Array(this.iMax));
            for (var s = 0; s < this.iMax; s++) {
              this.grid[s] = new Array(this.jMax);
              for (var a = 0; a < this.jMax; a++) this.grid[s][a] = 0;
            }
            this.tracebackGrid = new Array(this.iMax);
            for (var h = 0; h < this.iMax; h++) {
              this.tracebackGrid[h] = new Array(this.jMax);
              for (var l = 0; l < this.jMax; l++)
                this.tracebackGrid[h][l] = [null, null, null];
            }
            (this.alignments = []), (this.score = -1), this.computeGrids();
          }
          return (
            n(t, [
              {
                key: "getScore",
                value: function () {
                  return this.score;
                },
              },
              {
                key: "getAlignments",
                value: function () {
                  return this.alignments;
                },
              },
              {
                key: "computeGrids",
                value: function () {
                  for (var t = 1; t < this.jMax; t++)
                    (this.grid[0][t] = this.grid[0][t - 1] + this.gap_penalty),
                      (this.tracebackGrid[0][t] = [!1, !1, !0]);
                  for (var e = 1; e < this.iMax; e++)
                    (this.grid[e][0] = this.grid[e - 1][0] + this.gap_penalty),
                      (this.tracebackGrid[e][0] = [!1, !0, !1]);
                  for (var i = 1; i < this.iMax; i++)
                    for (var n = 1; n < this.jMax; n++) {
                      var r = [
                          this.sequence1[i - 1] === this.sequence2[n - 1]
                            ? this.grid[i - 1][n - 1] + this.match_score
                            : this.grid[i - 1][n - 1] + this.mismatch_penalty,
                          this.grid[i - 1][n] + this.gap_penalty,
                          this.grid[i][n - 1] + this.gap_penalty,
                        ],
                        o = this.arrayAllMaxIndexes(r);
                      (this.grid[i][n] = r[o[0]]),
                        (this.tracebackGrid[i][n] = [
                          o.includes(0),
                          o.includes(1),
                          o.includes(2),
                        ]);
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                },
              },
              {
                key: "alignmentTraceback",
                value: function () {
                  var t = [];
                  for (
                    t.push({
                      pos: [this.sequence1.length, this.sequence2.length],
                      seq1: "",
                      seq2: "",
                    });
                    t[0];

                  ) {
                    var e = t[0],
                      i = this.tracebackGrid[e.pos[0]][e.pos[1]];
                    i[0] &&
                      t.push({
                        pos: [e.pos[0] - 1, e.pos[1] - 1],
                        seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
                        seq2: this.sequence2[e.pos[1] - 1] + e.seq2,
                      }),
                      i[1] &&
                        t.push({
                          pos: [e.pos[0] - 1, e.pos[1]],
                          seq1: this.sequence1[e.pos[0] - 1] + e.seq1,
                          seq2: "-" + e.seq2,
                        }),
                      i[2] &&
                        t.push({
                          pos: [e.pos[0], e.pos[1] - 1],
                          seq1: "-" + e.seq1,
                          seq2: this.sequence2[e.pos[1] - 1] + e.seq2,
                        }),
                      0 === e.pos[0] &&
                        0 === e.pos[1] &&
                        this.alignments.push({
                          sequence1: e.seq1,
                          sequence2: e.seq2,
                        }),
                      t.shift();
                  }
                  return this.alignments;
                },
              },
              {
                key: "getAllIndexes",
                value: function (t, e) {
                  for (var i = [], n = -1; -1 !== (n = t.indexOf(e, n + 1)); )
                    i.push(n);
                  return i;
                },
              },
              {
                key: "arrayAllMaxIndexes",
                value: function (t) {
                  return this.getAllIndexes(t, Math.max.apply(null, t));
                },
              },
            ]),
            t
          );
        })();
      t.exports = r;
    },
    function (t, e, i) {
      "use strict";
      var n = function () {};
      (n.FDLayout = i(18)),
        (n.FDLayoutConstants = i(4)),
        (n.FDLayoutEdge = i(19)),
        (n.FDLayoutNode = i(20)),
        (n.DimensionD = i(21)),
        (n.HashMap = i(22)),
        (n.HashSet = i(23)),
        (n.IGeometry = i(8)),
        (n.IMath = i(9)),
        (n.Integer = i(10)),
        (n.Point = i(12)),
        (n.PointD = i(5)),
        (n.RandomSeed = i(16)),
        (n.RectangleD = i(13)),
        (n.Transform = i(17)),
        (n.UniqueIDGeneretor = i(14)),
        (n.Quicksort = i(25)),
        (n.LinkedList = i(11)),
        (n.LGraphObject = i(2)),
        (n.LGraph = i(6)),
        (n.LEdge = i(1)),
        (n.LGraphManager = i(7)),
        (n.LNode = i(3)),
        (n.Layout = i(15)),
        (n.LayoutConstants = i(0)),
        (n.NeedlemanWunsch = i(27)),
        (n.Matrix = i(24)),
        (n.SVD = i(26)),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      function n() {
        this.listeners = [];
      }
      var r = n.prototype;
      (r.addListener = function (t, e) {
        this.listeners.push({ event: t, callback: e });
      }),
        (r.removeListener = function (t, e) {
          for (var i = this.listeners.length; i >= 0; i--) {
            var n = this.listeners[i];
            n.event === t && n.callback === e && this.listeners.splice(i, 1);
          }
        }),
        (r.emit = function (t, e) {
          for (var i = 0; i < this.listeners.length; i++) {
            var n = this.listeners[i];
            t === n.event && n.callback(e);
          }
        }),
        (t.exports = n);
    },
  ]);
}),
  (t.exports = e());
