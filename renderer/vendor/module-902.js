// vendor/module-902.js — webpack module 902
// params: (t, e, i) = (module, exports, require)
function n(t) {
  if (Array.isArray(t)) {
    for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
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
    (e.relativePlacementConstraint = t.constraints.relativePlacementConstraint);
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
        for (var o = 0; o < h.size; o++) (l[o] = -1 * l[o]), (d[o] = -1 * d[o]);
      else if (e > i) for (var s = 0; s < h.size; s++) l[s] = -1 * l[s];
      else if (n > r) for (var a = 0; a < h.size; a++) d[a] = -1 * d[a];
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
                  n.has(t.id) || (i.push(t.id), n.add(t.id), e[r].push(t.id));
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
                (o = s.size > 0 ? l[h.get(s.values().next().value)] : p(r).x),
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
                (r = o.size > 0 ? l[h.get(o.values().next().value)] : p(i).y),
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
      if (x < M.size / 2) y(e.relativePlacementConstraint), (w = !1), (I = !1);
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
              (i = r.size > 0 ? l[h.get(r.values().next().value)] : p(e).x),
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
              (i = r.size > 0 ? d[h.get(r.values().next().value)] : p(e).y),
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
    null == et.getChild() && et.setCenter(l[h.get(et.id)], d[h.get(et.id)]);
  }
}),
  (t.exports = h);
