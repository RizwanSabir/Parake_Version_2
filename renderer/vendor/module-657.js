// vendor/module-657.js — webpack module 657
// params: (t, e, i) = (module, exports, require)
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
            h[(a = l.get(f[y]))] == N && ((h[a] = h[s] + 1), (n[++o] = a));
          m[s][e] = h[s] * I;
        }
        if (i) {
          for (var v = 0; v < E; v++) m[v][e] < p[v] && (p[v] = m[v][e]);
          for (var T = 0; T < E; T++) p[T] > d && ((d = p[T]), (g = T));
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
                (n.isParent() ? c[e].push(d.get(n.id())) : c[e].push(n.id()));
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
                for (var n = 0; n < C; n++) (f[n] = e), (e = L(e, n, t));
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
                      (a[h][l] = e[h] / (e[h] * e[h] + s / (e[h] * e[h])));
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
                  ((s = r.minusOp(s, r.multCons(o, r.dotProduct(o, s)))),
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
