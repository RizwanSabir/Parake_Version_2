// vendor/module-548.js — webpack module 548
// params: (t, e, i) = (module, exports, require)
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
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
                  e.intersection(r.edgesWith(t)).length > 0 && l.merge(t);
                });
              for (var d = 0; d < l.length; d++) {
                var c = l[d];
                null == (h = i.intersection(c.union(c.ancestors()))) ||
                  s.has(h[0]) ||
                  h.union(h.descendants()).forEach(function (t) {
                    o.push(t), s.add(t), n.merge(t), i.has(t) && a.push(t);
                  });
              }
            };
            0 != o.length;

          )
            m();
          if (
            (n.forEach(function (t) {
              e.intersection(t.connectedEdges()).forEach(function (t) {
                n.has(t.source()) && n.has(t.target()) && n.merge(t);
              });
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
