// vendor/module-3384.js — webpack module 3384
// params: (t, e, r) = (module, exports, require)
r.d(e, { T: () => M });
var n = r(47845 /* vendor/module-47845 */),
  o = r(50405 /* vendor/module-50405 */),
  i = r(7817 /* vendor/module-7817 */),
  s = r(29187 /* vendor/module-29187 */),
  u = r(68282 /* vendor/module-68282 */),
  a = r(97342 /* vendor/module-97342 */),
  c = r(88748 /* vendor/module-88748 */),
  h = r(96956 /* vendor/module-96956 */),
  f = r(31475 /* vendor/module-31475 */),
  l = r(34517 /* vendor/module-34517 */),
  d = r(71140 /* vendor/module-71140 */),
  A = r(92888 /* vendor/module-92888 */),
  v = Object.prototype.hasOwnProperty;
const p = function (t) {
  if (null == t) return !0;
  if (
    (0, f.A)(t) &&
    ((0, h.A)(t) ||
      "string" == typeof t ||
      "function" == typeof t.splice ||
      (0, l.A)(t) ||
      (0, A.A)(t) ||
      (0, c.A)(t))
  )
    return !t.length;
  var e = (0, a.A)(t);
  if ("[object Map]" == e || "[object Set]" == e) return !t.size;
  if ((0, d.A)(t)) return !(0, u.A)(t).length;
  for (var r in t) if (v.call(t, r)) return !1;
  return !0;
};
var _ = r(28539 /* vendor/module-28539 */),
  b = r(34501 /* vendor/module-34501 */),
  g = r(91130 /* vendor/module-91130 */),
  y = r(50695 /* vendor/module-50695 */),
  j = r(25567 /* vendor/module-25567 */),
  O = r(47216 /* vendor/module-47216 */);
const w = function (t) {
    return t != t;
  },
  m = function (t, e) {
    return (
      !(null == t || !t.length) &&
      (function (t, e, r) {
        return e == e
          ? (function (t, e, r) {
              for (var n = r - 1, o = t.length; ++n < o; )
                if (t[n] === e) return n;
              return -1;
            })(t, e, r)
          : (0, O.A)(t, w, r);
      })(t, e, 0) > -1
    );
  },
  C = function (t, e, r) {
    for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
      if (r(e, t[n])) return !0;
    return !1;
  };
var P = r(62026 /* vendor/module-62026 */),
  E = r(28574 /* vendor/module-28574 */);
var z = r(39922 /* vendor/module-39922 */),
  L =
    E.A && 1 / (0, z.A)(new E.A([, -0]))[1] == 1 / 0
      ? function (t) {
          return new E.A(t);
        }
      : function () {};
const N = L;
var S = r(40376 /* vendor/module-40376 */);
const D = (0, y.A)(function (t) {
  return (function (t, e, r) {
    var n = -1,
      o = m,
      i = t.length,
      s = !0,
      u = [],
      a = u;
    if (r) (s = !1), (o = C);
    else if (i >= 200) {
      var c = e ? null : N(t);
      if (c) return (0, z.A)(c);
      (s = !1), (o = P.A), (a = new j.A());
    } else a = e ? [] : u;
    t: for (; ++n < i; ) {
      var h = t[n],
        f = e ? e(h) : h;
      if (((h = r || 0 !== h ? h : 0), s && f == f)) {
        for (var l = a.length; l--; ) if (a[l] === f) continue t;
        e && a.push(f), u.push(h);
      } else o(a, f, r) || (a !== u && a.push(f), u.push(h));
    }
    return u;
  })((0, g.A)(t, 1, S.A, !0));
});
var k = r(12643 /* vendor/module-12643 */),
  F = r(11815 /* vendor/module-11815 */),
  x = "\0";
class M {
  constructor(t = {}) {
    (this._isDirected =
      !Object.prototype.hasOwnProperty.call(t, "directed") || t.directed),
      (this._isMultigraph =
        !!Object.prototype.hasOwnProperty.call(t, "multigraph") &&
        t.multigraph),
      (this._isCompound =
        !!Object.prototype.hasOwnProperty.call(t, "compound") && t.compound),
      (this._label = void 0),
      (this._defaultNodeLabelFn = n.A(void 0)),
      (this._defaultEdgeLabelFn = n.A(void 0)),
      (this._nodes = {}),
      this._isCompound &&
        ((this._parent = {}), (this._children = {}), (this._children[x] = {})),
      (this._in = {}),
      (this._preds = {}),
      (this._out = {}),
      (this._sucs = {}),
      (this._edgeObjs = {}),
      (this._edgeLabels = {});
  }
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(t) {
    return (this._label = t), this;
  }
  graph() {
    return this._label;
  }
  setDefaultNodeLabel(t) {
    return o.A(t) || (t = n.A(t)), (this._defaultNodeLabelFn = t), this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return i.A(this._nodes);
  }
  sources() {
    var t = this;
    return s.A(this.nodes(), function (e) {
      return p(t._in[e]);
    });
  }
  sinks() {
    var t = this;
    return s.A(this.nodes(), function (e) {
      return p(t._out[e]);
    });
  }
  setNodes(t, e) {
    var r = arguments,
      n = this;
    return (
      _.A(t, function (t) {
        r.length > 1 ? n.setNode(t, e) : n.setNode(t);
      }),
      this
    );
  }
  setNode(t, e) {
    return Object.prototype.hasOwnProperty.call(this._nodes, t)
      ? (arguments.length > 1 && (this._nodes[t] = e), this)
      : ((this._nodes[t] =
          arguments.length > 1 ? e : this._defaultNodeLabelFn(t)),
        this._isCompound &&
          ((this._parent[t] = x),
          (this._children[t] = {}),
          (this._children[x][t] = !0)),
        (this._in[t] = {}),
        (this._preds[t] = {}),
        (this._out[t] = {}),
        (this._sucs[t] = {}),
        ++this._nodeCount,
        this);
  }
  node(t) {
    return this._nodes[t];
  }
  hasNode(t) {
    return Object.prototype.hasOwnProperty.call(this._nodes, t);
  }
  removeNode(t) {
    if (Object.prototype.hasOwnProperty.call(this._nodes, t)) {
      var e = (t) => this.removeEdge(this._edgeObjs[t]);
      delete this._nodes[t],
        this._isCompound &&
          (this._removeFromParentsChildList(t),
          delete this._parent[t],
          _.A(this.children(t), (t) => {
            this.setParent(t);
          }),
          delete this._children[t]),
        _.A(i.A(this._in[t]), e),
        delete this._in[t],
        delete this._preds[t],
        _.A(i.A(this._out[t]), e),
        delete this._out[t],
        delete this._sucs[t],
        --this._nodeCount;
    }
    return this;
  }
  setParent(t, e) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (b.A(e)) e = x;
    else {
      for (var r = (e += ""); !b.A(r); r = this.parent(r))
        if (r === t)
          throw new Error(
            "Setting " + e + " as parent of " + t + " would create a cycle",
          );
      this.setNode(e);
    }
    return (
      this.setNode(t),
      this._removeFromParentsChildList(t),
      (this._parent[t] = e),
      (this._children[e][t] = !0),
      this
    );
  }
  _removeFromParentsChildList(t) {
    delete this._children[this._parent[t]][t];
  }
  parent(t) {
    if (this._isCompound) {
      var e = this._parent[t];
      if (e !== x) return e;
    }
  }
  children(t) {
    if ((b.A(t) && (t = x), this._isCompound)) {
      var e = this._children[t];
      if (e) return i.A(e);
    } else {
      if (t === x) return this.nodes();
      if (this.hasNode(t)) return [];
    }
  }
  predecessors(t) {
    var e = this._preds[t];
    if (e) return i.A(e);
  }
  successors(t) {
    var e = this._sucs[t];
    if (e) return i.A(e);
  }
  neighbors(t) {
    var e = this.predecessors(t);
    if (e) return D(e, this.successors(t));
  }
  isLeaf(t) {
    return (
      0 === (this.isDirected() ? this.successors(t) : this.neighbors(t)).length
    );
  }
  filterNodes(t) {
    var e = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound,
    });
    e.setGraph(this.graph());
    var r = this;
    _.A(this._nodes, function (r, n) {
      t(n) && e.setNode(n, r);
    }),
      _.A(this._edgeObjs, function (t) {
        e.hasNode(t.v) && e.hasNode(t.w) && e.setEdge(t, r.edge(t));
      });
    var n = {};
    function o(t) {
      var i = r.parent(t);
      return void 0 === i || e.hasNode(i)
        ? ((n[t] = i), i)
        : i in n
          ? n[i]
          : o(i);
    }
    return (
      this._isCompound &&
        _.A(e.nodes(), function (t) {
          e.setParent(t, o(t));
        }),
      e
    );
  }
  setDefaultEdgeLabel(t) {
    return o.A(t) || (t = n.A(t)), (this._defaultEdgeLabelFn = t), this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return k.A(this._edgeObjs);
  }
  setPath(t, e) {
    var r = this,
      n = arguments;
    return (
      F.A(t, function (t, o) {
        return n.length > 1 ? r.setEdge(t, o, e) : r.setEdge(t, o), o;
      }),
      this
    );
  }
  setEdge() {
    var t,
      e,
      r,
      n,
      o = !1,
      i = arguments[0];
    "object" == typeof i && null !== i && "v" in i
      ? ((t = i.v),
        (e = i.w),
        (r = i.name),
        2 === arguments.length && ((n = arguments[1]), (o = !0)))
      : ((t = i),
        (e = arguments[1]),
        (r = arguments[3]),
        arguments.length > 2 && ((n = arguments[2]), (o = !0))),
      (t = "" + t),
      (e = "" + e),
      b.A(r) || (r = "" + r);
    var s = B(this._isDirected, t, e, r);
    if (Object.prototype.hasOwnProperty.call(this._edgeLabels, s))
      return o && (this._edgeLabels[s] = n), this;
    if (!b.A(r) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(t),
      this.setNode(e),
      (this._edgeLabels[s] = o ? n : this._defaultEdgeLabelFn(t, e, r));
    var u = (function (t, e, r, n) {
      var o = "" + e,
        i = "" + r;
      if (!t && o > i) {
        var s = o;
        (o = i), (i = s);
      }
      var u = { v: o, w: i };
      return n && (u.name = n), u;
    })(this._isDirected, t, e, r);
    return (
      (t = u.v),
      (e = u.w),
      Object.freeze(u),
      (this._edgeObjs[s] = u),
      T(this._preds[e], t),
      T(this._sucs[t], e),
      (this._in[e][s] = u),
      (this._out[t][s] = u),
      this._edgeCount++,
      this
    );
  }
  edge(t, e, r) {
    var n =
      1 === arguments.length
        ? I(this._isDirected, arguments[0])
        : B(this._isDirected, t, e, r);
    return this._edgeLabels[n];
  }
  hasEdge(t, e, r) {
    var n =
      1 === arguments.length
        ? I(this._isDirected, arguments[0])
        : B(this._isDirected, t, e, r);
    return Object.prototype.hasOwnProperty.call(this._edgeLabels, n);
  }
  removeEdge(t, e, r) {
    var n =
        1 === arguments.length
          ? I(this._isDirected, arguments[0])
          : B(this._isDirected, t, e, r),
      o = this._edgeObjs[n];
    return (
      o &&
        ((t = o.v),
        (e = o.w),
        delete this._edgeLabels[n],
        delete this._edgeObjs[n],
        $(this._preds[e], t),
        $(this._sucs[t], e),
        delete this._in[e][n],
        delete this._out[t][n],
        this._edgeCount--),
      this
    );
  }
  inEdges(t, e) {
    var r = this._in[t];
    if (r) {
      var n = k.A(r);
      return e
        ? s.A(n, function (t) {
            return t.v === e;
          })
        : n;
    }
  }
  outEdges(t, e) {
    var r = this._out[t];
    if (r) {
      var n = k.A(r);
      return e
        ? s.A(n, function (t) {
            return t.w === e;
          })
        : n;
    }
  }
  nodeEdges(t, e) {
    var r = this.inEdges(t, e);
    if (r) return r.concat(this.outEdges(t, e));
  }
}
function T(t, e) {
  t[e] ? t[e]++ : (t[e] = 1);
}
function $(t, e) {
  --t[e] || delete t[e];
}
function B(t, e, r, n) {
  var o = "" + e,
    i = "" + r;
  if (!t && o > i) {
    var s = o;
    (o = i), (i = s);
  }
  return o + "" + i + "" + (b.A(n) ? "\0" : n);
}
function I(t, e) {
  return B(t, e.v, e.w, e.name);
}
(M.prototype._nodeCount = 0), (M.prototype._edgeCount = 0);
