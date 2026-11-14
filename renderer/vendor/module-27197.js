// vendor/module-27197.js — webpack module 27197
// params: (t, e, r) = (module, exports, require)
"use strict";
function i(t, e) {
  let r;
  if (void 0 === e)
    for (const e of t)
      null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
  else {
    let i = -1;
    for (let o of t)
      null != (o = e(o, ++i, t)) &&
        (r < o || (void 0 === r && o >= o)) &&
        (r = o);
  }
  return r;
}
function o(t, e) {
  let r;
  if (void 0 === e)
    for (const e of t)
      null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
  else {
    let i = -1;
    for (let o of t)
      null != (o = e(o, ++i, t)) &&
        (r > o || (void 0 === r && o >= o)) &&
        (r = o);
  }
  return r;
}
function n(t) {
  return t;
}
r.d(e, {
  JLW: () => Xa,
  l78: () => g,
  tlR: () => p,
  qrM: () => ls,
  Yu4: () => cs,
  IA3: () => us,
  Wi0: () => gs,
  PGM: () => fs,
  OEq: () => ms,
  y8u: () => bs,
  olC: () => ws,
  IrU: () => Ts,
  oDi: () => _s,
  Q7f: () => Fs,
  cVp: () => Ms,
  lUB: () => Qa,
  Lx9: () => Es,
  nVG: () => zs,
  uxU: () => Ns,
  Xf2: () => Hs,
  GZz: () => Ys,
  UPb: () => Xs,
  dyv: () => Gs,
  GPZ: () => Pr,
  Sk5: () => jr,
  bEH: () => ki,
  n8j: () => es,
  T9B: () => i,
  jkA: () => o,
  rLf: () => os,
  WH: () => Ai,
  m4Y: () => io,
  UMr: () => _i,
  w7C: () => ba,
  zt: () => ka,
  Ltv: () => wa,
  UAC: () => bo,
  DCK: () => Qo,
  TUC: () => Fo,
  Agd: () => xo,
  t6C: () => go,
  wXd: () => yo,
  ABi: () => Bo,
  Ui6: () => Po,
  rGn: () => Lo,
  ucG: () => fo,
  YPH: () => To,
  Mol: () => Ao,
  PGu: () => vo,
  GuW: () => _o,
  hkb: () => ri,
});
var a = 1e-6;
function s(t) {
  return "translate(" + t + ",0)";
}
function l(t) {
  return "translate(0," + t + ")";
}
function h(t) {
  return (e) => +t(e);
}
function c(t, e) {
  return (
    (e = Math.max(0, t.bandwidth() - 2 * e) / 2),
    t.round() && (e = Math.round(e)),
    (r) => +t(r) + e
  );
}
function d() {
  return !this.__axis;
}
function u(t, e) {
  var r = [],
    i = null,
    o = null,
    u = 6,
    p = 6,
    g = 3,
    f = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : 0.5,
    y = 1 === t || 4 === t ? -1 : 1,
    m = 4 === t || 2 === t ? "x" : "y",
    x = 1 === t || 3 === t ? s : l;
  function C(s) {
    var l = i ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()),
      C = o ?? (e.tickFormat ? e.tickFormat.apply(e, r) : n),
      b = Math.max(u, 0) + g,
      k = e.range(),
      w = +k[0] + f,
      S = +k[k.length - 1] + f,
      T = (e.bandwidth ? c : h)(e.copy(), f),
      B = s.selection ? s.selection() : s,
      v = B.selectAll(".domain").data([null]),
      _ = B.selectAll(".tick").data(l, e).order(),
      A = _.exit(),
      F = _.enter().append("g").attr("class", "tick"),
      L = _.select("line"),
      M = _.select("text");
    (v = v.merge(
      v
        .enter()
        .insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"),
    )),
      (_ = _.merge(F)),
      (L = L.merge(
        F.append("line")
          .attr("stroke", "currentColor")
          .attr(m + "2", y * u),
      )),
      (M = M.merge(
        F.append("text")
          .attr("fill", "currentColor")
          .attr(m, y * b)
          .attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em"),
      )),
      s !== B &&
        ((v = v.transition(s)),
        (_ = _.transition(s)),
        (L = L.transition(s)),
        (M = M.transition(s)),
        (A = A.transition(s)
          .attr("opacity", a)
          .attr("transform", function (t) {
            return isFinite((t = T(t)))
              ? x(t + f)
              : this.getAttribute("transform");
          })),
        F.attr("opacity", a).attr("transform", function (t) {
          var e = this.parentNode.__axis;
          return x((e && isFinite((e = e(t))) ? e : T(t)) + f);
        })),
      A.remove(),
      v.attr(
        "d",
        4 === t || 2 === t
          ? p
            ? "M" + y * p + "," + w + "H" + f + "V" + S + "H" + y * p
            : "M" + f + "," + w + "V" + S
          : p
            ? "M" + w + "," + y * p + "V" + f + "H" + S + "V" + y * p
            : "M" + w + "," + f + "H" + S,
      ),
      _.attr("opacity", 1).attr("transform", function (t) {
        return x(T(t) + f);
      }),
      L.attr(m + "2", y * u),
      M.attr(m, y * b).text(C),
      B.filter(d)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"),
      B.each(function () {
        this.__axis = T;
      });
  }
  return (
    (C.scale = function (t) {
      return arguments.length ? ((e = t), C) : e;
    }),
    (C.ticks = function () {
      return (r = Array.from(arguments)), C;
    }),
    (C.tickArguments = function (t) {
      return arguments.length
        ? ((r = null == t ? [] : Array.from(t)), C)
        : r.slice();
    }),
    (C.tickValues = function (t) {
      return arguments.length
        ? ((i = null == t ? null : Array.from(t)), C)
        : i && i.slice();
    }),
    (C.tickFormat = function (t) {
      return arguments.length ? ((o = t), C) : o;
    }),
    (C.tickSize = function (t) {
      return arguments.length ? ((u = p = +t), C) : u;
    }),
    (C.tickSizeInner = function (t) {
      return arguments.length ? ((u = +t), C) : u;
    }),
    (C.tickSizeOuter = function (t) {
      return arguments.length ? ((p = +t), C) : p;
    }),
    (C.tickPadding = function (t) {
      return arguments.length ? ((g = +t), C) : g;
    }),
    (C.offset = function (t) {
      return arguments.length ? ((f = +t), C) : f;
    }),
    C
  );
}
function p(t) {
  return u(1, t);
}
function g(t) {
  return u(3, t);
}
function f() {}
function y(t) {
  return null == t
    ? f
    : function () {
        return this.querySelector(t);
      };
}
function m() {
  return [];
}
function x(t) {
  return null == t
    ? m
    : function () {
        return this.querySelectorAll(t);
      };
}
function C(t) {
  return function () {
    return this.matches(t);
  };
}
function b(t) {
  return function (e) {
    return e.matches(t);
  };
}
var k = Array.prototype.find;
function w() {
  return this.firstElementChild;
}
var S = Array.prototype.filter;
function T() {
  return Array.from(this.children);
}
function B(t) {
  return new Array(t.length);
}
function v(t, e) {
  (this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = e);
}
function _(t, e, r, i, o, n) {
  for (var a, s = 0, l = e.length, h = n.length; s < h; ++s)
    (a = e[s]) ? ((a.__data__ = n[s]), (i[s] = a)) : (r[s] = new v(t, n[s]));
  for (; s < l; ++s) (a = e[s]) && (o[s] = a);
}
function A(t, e, r, i, o, n, a) {
  var s,
    l,
    h,
    c = new Map(),
    d = e.length,
    u = n.length,
    p = new Array(d);
  for (s = 0; s < d; ++s)
    (l = e[s]) &&
      ((p[s] = h = a.call(l, l.__data__, s, e) + ""),
      c.has(h) ? (o[s] = l) : c.set(h, l));
  for (s = 0; s < u; ++s)
    (h = a.call(t, n[s], s, n) + ""),
      (l = c.get(h))
        ? ((i[s] = l), (l.__data__ = n[s]), c.delete(h))
        : (r[s] = new v(t, n[s]));
  for (s = 0; s < d; ++s) (l = e[s]) && c.get(p[s]) === l && (o[s] = l);
}
function F(t) {
  return t.__data__;
}
function L(t) {
  return "object" == typeof t && "length" in t ? t : Array.from(t);
}
function M(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
v.prototype = {
  constructor: v,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function (t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function (t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t);
  },
};
var $ = "http://www.w3.org/1999/xhtml";
const E = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: $,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function O(t) {
  var e = (t += ""),
    r = e.indexOf(":");
  return (
    r >= 0 && "xmlns" !== (e = t.slice(0, r)) && (t = t.slice(r + 1)),
    E.hasOwnProperty(e) ? { space: E[e], local: t } : t
  );
}
function D(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function I(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function K(t, e) {
  return function () {
    this.setAttribute(t, e);
  };
}
function q(t, e) {
  return function () {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function P(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    null == r ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function R(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    null == r
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, r);
  };
}
function z(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  );
}
function N(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
function W(t, e, r) {
  return function () {
    this.style.setProperty(t, e, r);
  };
}
function j(t, e, r) {
  return function () {
    var i = e.apply(this, arguments);
    null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, r);
  };
}
function H(t, e) {
  return (
    t.style.getPropertyValue(e) ||
    z(t).getComputedStyle(t, null).getPropertyValue(e)
  );
}
function U(t) {
  return function () {
    delete this[t];
  };
}
function Y(t, e) {
  return function () {
    this[t] = e;
  };
}
function G(t, e) {
  return function () {
    var r = e.apply(this, arguments);
    null == r ? delete this[t] : (this[t] = r);
  };
}
function X(t) {
  return t.trim().split(/^|\s+/);
}
function V(t) {
  return t.classList || new Z(t);
}
function Z(t) {
  (this._node = t), (this._names = X(t.getAttribute("class") || ""));
}
function Q(t, e) {
  for (var r = V(t), i = -1, o = e.length; ++i < o; ) r.add(e[i]);
}
function J(t, e) {
  for (var r = V(t), i = -1, o = e.length; ++i < o; ) r.remove(e[i]);
}
function tt(t) {
  return function () {
    Q(this, t);
  };
}
function et(t) {
  return function () {
    J(this, t);
  };
}
function rt(t, e) {
  return function () {
    (e.apply(this, arguments) ? Q : J)(this, t);
  };
}
function it() {
  this.textContent = "";
}
function ot(t) {
  return function () {
    this.textContent = t;
  };
}
function nt(t) {
  return function () {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function at() {
  this.innerHTML = "";
}
function st(t) {
  return function () {
    this.innerHTML = t;
  };
}
function lt(t) {
  return function () {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ht() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ct() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function dt(t) {
  return function () {
    var e = this.ownerDocument,
      r = this.namespaceURI;
    return r === $ && e.documentElement.namespaceURI === $
      ? e.createElement(t)
      : e.createElementNS(r, t);
  };
}
function ut(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function pt(t) {
  var e = O(t);
  return (e.local ? ut : dt)(e);
}
function gt() {
  return null;
}
function ft() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function yt() {
  var t = this.cloneNode(!1),
    e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function mt() {
  var t = this.cloneNode(!0),
    e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function xt(t) {
  return function () {
    var e = this.__on;
    if (e) {
      for (var r, i = 0, o = -1, n = e.length; i < n; ++i)
        (r = e[i]),
          (t.type && r.type !== t.type) || r.name !== t.name
            ? (e[++o] = r)
            : this.removeEventListener(r.type, r.listener, r.options);
      ++o ? (e.length = o) : delete this.__on;
    }
  };
}
function Ct(t, e, r) {
  return function () {
    var i,
      o = this.__on,
      n = (function (t) {
        return function (e) {
          t.call(this, e, this.__data__);
        };
      })(e);
    if (o)
      for (var a = 0, s = o.length; a < s; ++a)
        if ((i = o[a]).type === t.type && i.name === t.name)
          return (
            this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = n), (i.options = r)),
            void (i.value = e)
          );
    this.addEventListener(t.type, n, r),
      (i = {
        type: t.type,
        name: t.name,
        value: e,
        listener: n,
        options: r,
      }),
      o ? o.push(i) : (this.__on = [i]);
  };
}
function bt(t, e, r) {
  var i = z(t),
    o = i.CustomEvent;
  "function" == typeof o
    ? (o = new o(e, r))
    : ((o = i.document.createEvent("Event")),
      r
        ? (o.initEvent(e, r.bubbles, r.cancelable), (o.detail = r.detail))
        : o.initEvent(e, !1, !1)),
    t.dispatchEvent(o);
}
function kt(t, e) {
  return function () {
    return bt(this, t, e);
  };
}
function wt(t, e) {
  return function () {
    return bt(this, t, e.apply(this, arguments));
  };
}
Z.prototype = {
  add: function (t) {
    this._names.indexOf(t) < 0 &&
      (this._names.push(t),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (t) {
    var e = this._names.indexOf(t);
    e >= 0 &&
      (this._names.splice(e, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0;
  },
};
var St = [null];
function Tt(t, e) {
  (this._groups = t), (this._parents = e);
}
function Bt() {
  return new Tt([[document.documentElement]], St);
}
Tt.prototype = Bt.prototype = {
  constructor: Tt,
  select: function (t) {
    "function" != typeof t && (t = y(t));
    for (
      var e = this._groups, r = e.length, i = new Array(r), o = 0;
      o < r;
      ++o
    )
      for (
        var n, a, s = e[o], l = s.length, h = (i[o] = new Array(l)), c = 0;
        c < l;
        ++c
      )
        (n = s[c]) &&
          (a = t.call(n, n.__data__, c, s)) &&
          ("__data__" in n && (a.__data__ = n.__data__), (h[c] = a));
    return new Tt(i, this._parents);
  },
  selectAll: function (t) {
    t =
      "function" == typeof t
        ? (function (t) {
            return function () {
              return null == (e = t.apply(this, arguments))
                ? []
                : Array.isArray(e)
                  ? e
                  : Array.from(e);
              var e;
            };
          })(t)
        : x(t);
    for (var e = this._groups, r = e.length, i = [], o = [], n = 0; n < r; ++n)
      for (var a, s = e[n], l = s.length, h = 0; h < l; ++h)
        (a = s[h]) && (i.push(t.call(a, a.__data__, h, s)), o.push(a));
    return new Tt(i, o);
  },
  selectChild: function (t) {
    return this.select(
      null == t
        ? w
        : (function (t) {
            return function () {
              return k.call(this.children, t);
            };
          })("function" == typeof t ? t : b(t)),
    );
  },
  selectChildren: function (t) {
    return this.selectAll(
      null == t
        ? T
        : (function (t) {
            return function () {
              return S.call(this.children, t);
            };
          })("function" == typeof t ? t : b(t)),
    );
  },
  filter: function (t) {
    "function" != typeof t && (t = C(t));
    for (
      var e = this._groups, r = e.length, i = new Array(r), o = 0;
      o < r;
      ++o
    )
      for (var n, a = e[o], s = a.length, l = (i[o] = []), h = 0; h < s; ++h)
        (n = a[h]) && t.call(n, n.__data__, h, a) && l.push(n);
    return new Tt(i, this._parents);
  },
  data: function (t, e) {
    if (!arguments.length) return Array.from(this, F);
    var r,
      i = e ? A : _,
      o = this._parents,
      n = this._groups;
    "function" != typeof t &&
      ((r = t),
      (t = function () {
        return r;
      }));
    for (
      var a = n.length,
        s = new Array(a),
        l = new Array(a),
        h = new Array(a),
        c = 0;
      c < a;
      ++c
    ) {
      var d = o[c],
        u = n[c],
        p = u.length,
        g = L(t.call(d, d && d.__data__, c, o)),
        f = g.length,
        y = (l[c] = new Array(f)),
        m = (s[c] = new Array(f));
      i(d, u, y, m, (h[c] = new Array(p)), g, e);
      for (var x, C, b = 0, k = 0; b < f; ++b)
        if ((x = y[b])) {
          for (b >= k && (k = b + 1); !(C = m[k]) && ++k < f; );
          x._next = C || null;
        }
    }
    return ((s = new Tt(s, o))._enter = l), (s._exit = h), s;
  },
  enter: function () {
    return new Tt(this._enter || this._groups.map(B), this._parents);
  },
  exit: function () {
    return new Tt(this._exit || this._groups.map(B), this._parents);
  },
  join: function (t, e, r) {
    var i = this.enter(),
      o = this,
      n = this.exit();
    return (
      "function" == typeof t
        ? (i = t(i)) && (i = i.selection())
        : (i = i.append(t + "")),
      null != e && (o = e(o)) && (o = o.selection()),
      null == r ? n.remove() : r(n),
      i && o ? i.merge(o).order() : o
    );
  },
  merge: function (t) {
    for (
      var e = t.selection ? t.selection() : t,
        r = this._groups,
        i = e._groups,
        o = r.length,
        n = i.length,
        a = Math.min(o, n),
        s = new Array(o),
        l = 0;
      l < a;
      ++l
    )
      for (
        var h,
          c = r[l],
          d = i[l],
          u = c.length,
          p = (s[l] = new Array(u)),
          g = 0;
        g < u;
        ++g
      )
        (h = c[g] || d[g]) && (p[g] = h);
    for (; l < o; ++l) s[l] = r[l];
    return new Tt(s, this._parents);
  },
  selection: function () {
    return this;
  },
  order: function () {
    for (var t = this._groups, e = -1, r = t.length; ++e < r; )
      for (var i, o = t[e], n = o.length - 1, a = o[n]; --n >= 0; )
        (i = o[n]) &&
          (a &&
            4 ^ i.compareDocumentPosition(a) &&
            a.parentNode.insertBefore(i, a),
          (a = i));
    return this;
  },
  sort: function (t) {
    function e(e, r) {
      return e && r ? t(e.__data__, r.__data__) : !e - !r;
    }
    t || (t = M);
    for (
      var r = this._groups, i = r.length, o = new Array(i), n = 0;
      n < i;
      ++n
    ) {
      for (
        var a, s = r[n], l = s.length, h = (o[n] = new Array(l)), c = 0;
        c < l;
        ++c
      )
        (a = s[c]) && (h[c] = a);
      h.sort(e);
    }
    return new Tt(o, this._parents).order();
  },
  call: function () {
    var t = arguments[0];
    return (arguments[0] = this), t.apply(null, arguments), this;
  },
  nodes: function () {
    return Array.from(this);
  },
  node: function () {
    for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
      for (var i = t[e], o = 0, n = i.length; o < n; ++o) {
        var a = i[o];
        if (a) return a;
      }
    return null;
  },
  size: function () {
    let t = 0;
    for (const e of this) ++t;
    return t;
  },
  empty: function () {
    return !this.node();
  },
  each: function (t) {
    for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
      for (var o, n = e[r], a = 0, s = n.length; a < s; ++a)
        (o = n[a]) && t.call(o, o.__data__, a, n);
    return this;
  },
  attr: function (t, e) {
    var r = O(t);
    if (arguments.length < 2) {
      var i = this.node();
      return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
    }
    return this.each(
      (null == e
        ? r.local
          ? I
          : D
        : "function" == typeof e
          ? r.local
            ? R
            : P
          : r.local
            ? q
            : K)(r, e),
    );
  },
  style: function (t, e, r) {
    return arguments.length > 1
      ? this.each(
          (null == e ? N : "function" == typeof e ? j : W)(t, e, r ?? ""),
        )
      : H(this.node(), t);
  },
  property: function (t, e) {
    return arguments.length > 1
      ? this.each((null == e ? U : "function" == typeof e ? G : Y)(t, e))
      : this.node()[t];
  },
  classed: function (t, e) {
    var r = X(t + "");
    if (arguments.length < 2) {
      for (var i = V(this.node()), o = -1, n = r.length; ++o < n; )
        if (!i.contains(r[o])) return !1;
      return !0;
    }
    return this.each(("function" == typeof e ? rt : e ? tt : et)(r, e));
  },
  text: function (t) {
    return arguments.length
      ? this.each(null == t ? it : ("function" == typeof t ? nt : ot)(t))
      : this.node().textContent;
  },
  html: function (t) {
    return arguments.length
      ? this.each(null == t ? at : ("function" == typeof t ? lt : st)(t))
      : this.node().innerHTML;
  },
  raise: function () {
    return this.each(ht);
  },
  lower: function () {
    return this.each(ct);
  },
  append: function (t) {
    var e = "function" == typeof t ? t : pt(t);
    return this.select(function () {
      return this.appendChild(e.apply(this, arguments));
    });
  },
  insert: function (t, e) {
    var r = "function" == typeof t ? t : pt(t),
      i = null == e ? gt : "function" == typeof e ? e : y(e);
    return this.select(function () {
      return this.insertBefore(
        r.apply(this, arguments),
        i.apply(this, arguments) || null,
      );
    });
  },
  remove: function () {
    return this.each(ft);
  },
  clone: function (t) {
    return this.select(t ? mt : yt);
  },
  datum: function (t) {
    return arguments.length
      ? this.property("__data__", t)
      : this.node().__data__;
  },
  on: function (t, e, r) {
    var i,
      o,
      n = (function (t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".");
            return (
              r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
              { type: t, name: e }
            );
          });
      })(t + ""),
      a = n.length;
    if (!(arguments.length < 2)) {
      for (s = e ? Ct : xt, i = 0; i < a; ++i) this.each(s(n[i], e, r));
      return this;
    }
    var s = this.node().__on;
    if (s)
      for (var l, h = 0, c = s.length; h < c; ++h)
        for (i = 0, l = s[h]; i < a; ++i)
          if ((o = n[i]).type === l.type && o.name === l.name) return l.value;
  },
  dispatch: function (t, e) {
    return this.each(("function" == typeof e ? wt : kt)(t, e));
  },
  [Symbol.iterator]: function* () {
    for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
      for (var i, o = t[e], n = 0, a = o.length; n < a; ++n)
        (i = o[n]) && (yield i);
  },
};
const vt = Bt;
var _t = { value: () => {} };
function At() {
  for (var t, e = 0, r = arguments.length, i = {}; e < r; ++e) {
    if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    i[t] = [];
  }
  return new Ft(i);
}
function Ft(t) {
  this._ = t;
}
function Lt(t, e) {
  for (var r, i = 0, o = t.length; i < o; ++i)
    if ((r = t[i]).name === e) return r.value;
}
function Mt(t, e, r) {
  for (var i = 0, o = t.length; i < o; ++i)
    if (t[i].name === e) {
      (t[i] = _t), (t = t.slice(0, i).concat(t.slice(i + 1)));
      break;
    }
  return null != r && t.push({ name: e, value: r }), t;
}
Ft.prototype = At.prototype = {
  constructor: Ft,
  on: function (t, e) {
    var r,
      i,
      o = this._,
      n =
        ((i = o),
        (t + "")
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              r = t.indexOf(".");
            if (
              (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !i.hasOwnProperty(t))
            )
              throw new Error("unknown type: " + t);
            return { type: t, name: e };
          })),
      a = -1,
      s = n.length;
    if (!(arguments.length < 2)) {
      if (null != e && "function" != typeof e)
        throw new Error("invalid callback: " + e);
      for (; ++a < s; )
        if ((r = (t = n[a]).type)) o[r] = Mt(o[r], t.name, e);
        else if (null == e) for (r in o) o[r] = Mt(o[r], t.name, null);
      return this;
    }
    for (; ++a < s; )
      if ((r = (t = n[a]).type) && (r = Lt(o[r], t.name))) return r;
  },
  copy: function () {
    var t = {},
      e = this._;
    for (var r in e) t[r] = e[r].slice();
    return new Ft(t);
  },
  call: function (t, e) {
    if ((r = arguments.length - 2) > 0)
      for (var r, i, o = new Array(r), n = 0; n < r; ++n)
        o[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (n = 0, r = (i = this._[t]).length; n < r; ++n) i[n].value.apply(e, o);
  },
  apply: function (t, e, r) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var i = this._[t], o = 0, n = i.length; o < n; ++o)
      i[o].value.apply(e, r);
  },
};
const $t = At;
var Et,
  Ot,
  Dt = 0,
  It = 0,
  Kt = 0,
  qt = 0,
  Pt = 0,
  Rt = 0,
  zt = "object" == typeof performance && performance.now ? performance : Date,
  Nt =
    "object" == typeof window && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17);
        };
function Wt() {
  return Pt || (Nt(jt), (Pt = zt.now() + Rt));
}
function jt() {
  Pt = 0;
}
function Ht() {
  this._call = this._time = this._next = null;
}
function Ut(t, e, r) {
  var i = new Ht();
  return i.restart(t, e, r), i;
}
function Yt() {
  (Pt = (qt = zt.now()) + Rt), (Dt = It = 0);
  try {
    !(function () {
      Wt(), ++Dt;
      for (var t, e = Et; e; )
        (t = Pt - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
      --Dt;
    })();
  } finally {
    (Dt = 0),
      (function () {
        for (var t, e, r = Et, i = 1 / 0; r; )
          r._call
            ? (i > r._time && (i = r._time), (t = r), (r = r._next))
            : ((e = r._next),
              (r._next = null),
              (r = t ? (t._next = e) : (Et = e)));
        (Ot = t), Xt(i);
      })(),
      (Pt = 0);
  }
}
function Gt() {
  var t = zt.now(),
    e = t - qt;
  e > 1e3 && ((Rt -= e), (qt = t));
}
function Xt(t) {
  Dt ||
    (It && (It = clearTimeout(It)),
    t - Pt > 24
      ? (t < 1 / 0 && (It = setTimeout(Yt, t - zt.now() - Rt)),
        Kt && (Kt = clearInterval(Kt)))
      : (Kt || ((qt = zt.now()), (Kt = setInterval(Gt, 1e3))),
        (Dt = 1),
        Nt(Yt)));
}
function Vt(t, e, r) {
  var i = new Ht();
  return (
    (e = null == e ? 0 : +e),
    i.restart(
      (r) => {
        i.stop(), t(r + e);
      },
      e,
      r,
    ),
    i
  );
}
Ht.prototype = Ut.prototype = {
  constructor: Ht,
  restart: function (t, e, r) {
    if ("function" != typeof t)
      throw new TypeError("callback is not a function");
    (r = (null == r ? Wt() : +r) + (null == e ? 0 : +e)),
      this._next ||
        Ot === this ||
        (Ot ? (Ot._next = this) : (Et = this), (Ot = this)),
      (this._call = t),
      (this._time = r),
      Xt();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Xt());
  },
};
var Zt = $t("start", "end", "cancel", "interrupt"),
  Qt = [];
function Jt(t, e, r, i, o, n) {
  var a = t.__transition;
  if (a) {
    if (r in a) return;
  } else t.__transition = {};
  !(function (t, e, r) {
    var i,
      o = t.__transition;
    function n(l) {
      var h, c, d, u;
      if (1 !== r.state) return s();
      for (h in o)
        if ((u = o[h]).name === r.name) {
          if (3 === u.state) return Vt(n);
          4 === u.state
            ? ((u.state = 6),
              u.timer.stop(),
              u.on.call("interrupt", t, t.__data__, u.index, u.group),
              delete o[h])
            : +h < e &&
              ((u.state = 6),
              u.timer.stop(),
              u.on.call("cancel", t, t.__data__, u.index, u.group),
              delete o[h]);
        }
      if (
        (Vt(function () {
          3 === r.state &&
            ((r.state = 4), r.timer.restart(a, r.delay, r.time), a(l));
        }),
        (r.state = 2),
        r.on.call("start", t, t.__data__, r.index, r.group),
        2 === r.state)
      ) {
        for (
          r.state = 3, i = new Array((d = r.tween.length)), h = 0, c = -1;
          h < d;
          ++h
        )
          (u = r.tween[h].value.call(t, t.__data__, r.index, r.group)) &&
            (i[++c] = u);
        i.length = c + 1;
      }
    }
    function a(e) {
      for (
        var o =
            e < r.duration
              ? r.ease.call(null, e / r.duration)
              : (r.timer.restart(s), (r.state = 5), 1),
          n = -1,
          a = i.length;
        ++n < a;

      )
        i[n].call(t, o);
      5 === r.state && (r.on.call("end", t, t.__data__, r.index, r.group), s());
    }
    function s() {
      for (var i in ((r.state = 6), r.timer.stop(), delete o[e], o)) return;
      delete t.__transition;
    }
    (o[e] = r),
      (r.timer = Ut(
        function (t) {
          (r.state = 1),
            r.timer.restart(n, r.delay, r.time),
            r.delay <= t && n(t - r.delay);
        },
        0,
        r.time,
      ));
  })(t, r, {
    name: e,
    index: i,
    group: o,
    on: Zt,
    tween: Qt,
    time: n.time,
    delay: n.delay,
    duration: n.duration,
    ease: n.ease,
    timer: null,
    state: 0,
  });
}
function te(t, e) {
  var r = re(t, e);
  if (r.state > 0) throw new Error("too late; already scheduled");
  return r;
}
function ee(t, e) {
  var r = re(t, e);
  if (r.state > 3) throw new Error("too late; already running");
  return r;
}
function re(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e])) throw new Error("transition not found");
  return r;
}
function ie(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return t * (1 - r) + e * r;
    }
  );
}
var oe,
  ne = 180 / Math.PI,
  ae = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function se(t, e, r, i, o, n) {
  var a, s, l;
  return (
    (a = Math.sqrt(t * t + e * e)) && ((t /= a), (e /= a)),
    (l = t * r + e * i) && ((r -= t * l), (i -= e * l)),
    (s = Math.sqrt(r * r + i * i)) && ((r /= s), (i /= s), (l /= s)),
    t * i < e * r && ((t = -t), (e = -e), (l = -l), (a = -a)),
    {
      translateX: o,
      translateY: n,
      rotate: Math.atan2(e, t) * ne,
      skewX: Math.atan(l) * ne,
      scaleX: a,
      scaleY: s,
    }
  );
}
function le(t, e, r, i) {
  function o(t) {
    return t.length ? t.pop() + " " : "";
  }
  return function (n, a) {
    var s = [],
      l = [];
    return (
      (n = t(n)),
      (a = t(a)),
      (function (t, i, o, n, a, s) {
        if (t !== o || i !== n) {
          var l = a.push("translate(", null, e, null, r);
          s.push({ i: l - 4, x: ie(t, o) }, { i: l - 2, x: ie(i, n) });
        } else (o || n) && a.push("translate(" + o + e + n + r);
      })(n.translateX, n.translateY, a.translateX, a.translateY, s, l),
      (function (t, e, r, n) {
        t !== e
          ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
            n.push({
              i: r.push(o(r) + "rotate(", null, i) - 2,
              x: ie(t, e),
            }))
          : e && r.push(o(r) + "rotate(" + e + i);
      })(n.rotate, a.rotate, s, l),
      (function (t, e, r, n) {
        t !== e
          ? n.push({
              i: r.push(o(r) + "skewX(", null, i) - 2,
              x: ie(t, e),
            })
          : e && r.push(o(r) + "skewX(" + e + i);
      })(n.skewX, a.skewX, s, l),
      (function (t, e, r, i, n, a) {
        if (t !== r || e !== i) {
          var s = n.push(o(n) + "scale(", null, ",", null, ")");
          a.push({ i: s - 4, x: ie(t, r) }, { i: s - 2, x: ie(e, i) });
        } else
          (1 === r && 1 === i) || n.push(o(n) + "scale(" + r + "," + i + ")");
      })(n.scaleX, n.scaleY, a.scaleX, a.scaleY, s, l),
      (n = a = null),
      function (t) {
        for (var e, r = -1, i = l.length; ++r < i; ) s[(e = l[r]).i] = e.x(t);
        return s.join("");
      }
    );
  };
}
var he = le(
    function (t) {
      const e = new (
        "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
      )(t + "");
      return e.isIdentity ? ae : se(e.a, e.b, e.c, e.d, e.e, e.f);
    },
    "px, ",
    "px)",
    "deg)",
  ),
  ce = le(
    function (t) {
      return null == t
        ? ae
        : (oe ||
            (oe = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          oe.setAttribute("transform", t),
          (t = oe.transform.baseVal.consolidate())
            ? se((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
            : ae);
    },
    ", ",
    ")",
    ")",
  );
function de(t, e) {
  var r, i;
  return function () {
    var o = ee(this, t),
      n = o.tween;
    if (n !== r)
      for (var a = 0, s = (i = r = n).length; a < s; ++a)
        if (i[a].name === e) {
          (i = i.slice()).splice(a, 1);
          break;
        }
    o.tween = i;
  };
}
function ue(t, e, r) {
  var i, o;
  if ("function" != typeof r) throw new Error();
  return function () {
    var n = ee(this, t),
      a = n.tween;
    if (a !== i) {
      o = (i = a).slice();
      for (var s = { name: e, value: r }, l = 0, h = o.length; l < h; ++l)
        if (o[l].name === e) {
          o[l] = s;
          break;
        }
      l === h && o.push(s);
    }
    n.tween = o;
  };
}
function pe(t, e, r) {
  var i = t._id;
  return (
    t.each(function () {
      var t = ee(this, i);
      (t.value || (t.value = {}))[e] = r.apply(this, arguments);
    }),
    function (t) {
      return re(t, i).value[e];
    }
  );
}
function ge(t, e, r) {
  (t.prototype = e.prototype = r), (r.constructor = t);
}
function fe(t, e) {
  var r = Object.create(t.prototype);
  for (var i in e) r[i] = e[i];
  return r;
}
function ye() {}
var me = 0.7,
  xe = 1 / me,
  Ce = "\\s*([+-]?\\d+)\\s*",
  be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  we = /^#([0-9a-f]{3,8})$/,
  Se = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`),
  Te = new RegExp(`^rgb\\(${ke},${ke},${ke}\\)$`),
  Be = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${be}\\)$`),
  ve = new RegExp(`^rgba\\(${ke},${ke},${ke},${be}\\)$`),
  _e = new RegExp(`^hsl\\(${be},${ke},${ke}\\)$`),
  Ae = new RegExp(`^hsla\\(${be},${ke},${ke},${be}\\)$`),
  Fe = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
function Le() {
  return this.rgb().formatHex();
}
function Me() {
  return this.rgb().formatRgb();
}
function $e(t) {
  var e, r;
  return (
    (t = (t + "").trim().toLowerCase()),
    (e = we.exec(t))
      ? ((r = e[1].length),
        (e = parseInt(e[1], 16)),
        6 === r
          ? Ee(e)
          : 3 === r
            ? new Ke(
                ((e >> 8) & 15) | ((e >> 4) & 240),
                ((e >> 4) & 15) | (240 & e),
                ((15 & e) << 4) | (15 & e),
                1,
              )
            : 8 === r
              ? Oe(
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  (255 & e) / 255,
                )
              : 4 === r
                ? Oe(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255,
                  )
                : null)
      : (e = Se.exec(t))
        ? new Ke(e[1], e[2], e[3], 1)
        : (e = Te.exec(t))
          ? new Ke(
              (255 * e[1]) / 100,
              (255 * e[2]) / 100,
              (255 * e[3]) / 100,
              1,
            )
          : (e = Be.exec(t))
            ? Oe(e[1], e[2], e[3], e[4])
            : (e = ve.exec(t))
              ? Oe(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  e[4],
                )
              : (e = _e.exec(t))
                ? We(e[1], e[2] / 100, e[3] / 100, 1)
                : (e = Ae.exec(t))
                  ? We(e[1], e[2] / 100, e[3] / 100, e[4])
                  : Fe.hasOwnProperty(t)
                    ? Ee(Fe[t])
                    : "transparent" === t
                      ? new Ke(NaN, NaN, NaN, 0)
                      : null
  );
}
function Ee(t) {
  return new Ke((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
}
function Oe(t, e, r, i) {
  return i <= 0 && (t = e = r = NaN), new Ke(t, e, r, i);
}
function De(t) {
  return (
    t instanceof ye || (t = $e(t)),
    t ? new Ke((t = t.rgb()).r, t.g, t.b, t.opacity) : new Ke()
  );
}
function Ie(t, e, r, i) {
  return 1 === arguments.length ? De(t) : new Ke(t, e, r, i ?? 1);
}
function Ke(t, e, r, i) {
  (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +i);
}
function qe() {
  return `#${Ne(this.r)}${Ne(this.g)}${Ne(this.b)}`;
}
function Pe() {
  const t = Re(this.opacity);
  return `${1 === t ? "rgb(" : "rgba("}${ze(this.r)}, ${ze(this.g)}, ${ze(this.b)}${1 === t ? ")" : `, ${t})`}`;
}
function Re(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ze(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ne(t) {
  return ((t = ze(t)) < 16 ? "0" : "") + t.toString(16);
}
function We(t, e, r, i) {
  return (
    i <= 0
      ? (t = e = r = NaN)
      : r <= 0 || r >= 1
        ? (t = e = NaN)
        : e <= 0 && (t = NaN),
    new He(t, e, r, i)
  );
}
function je(t) {
  if (t instanceof He) return new He(t.h, t.s, t.l, t.opacity);
  if ((t instanceof ye || (t = $e(t)), !t)) return new He();
  if (t instanceof He) return t;
  var e = (t = t.rgb()).r / 255,
    r = t.g / 255,
    i = t.b / 255,
    o = Math.min(e, r, i),
    n = Math.max(e, r, i),
    a = NaN,
    s = n - o,
    l = (n + o) / 2;
  return (
    s
      ? ((a =
          e === n
            ? (r - i) / s + 6 * (r < i)
            : r === n
              ? (i - e) / s + 2
              : (e - r) / s + 4),
        (s /= l < 0.5 ? n + o : 2 - n - o),
        (a *= 60))
      : (s = l > 0 && l < 1 ? 0 : a),
    new He(a, s, l, t.opacity)
  );
}
function He(t, e, r, i) {
  (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +i);
}
function Ue(t) {
  return (t = (t || 0) % 360) < 0 ? t + 360 : t;
}
function Ye(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ge(t, e, r) {
  return (
    255 *
    (t < 60
      ? e + ((r - e) * t) / 60
      : t < 180
        ? r
        : t < 240
          ? e + ((r - e) * (240 - t)) / 60
          : e)
  );
}
function Xe(t, e, r, i, o) {
  var n = t * t,
    a = n * t;
  return (
    ((1 - 3 * t + 3 * n - a) * e +
      (4 - 6 * n + 3 * a) * r +
      (1 + 3 * t + 3 * n - 3 * a) * i +
      a * o) /
    6
  );
}
ge(ye, $e, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Le,
  formatHex: Le,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return je(this).formatHsl();
  },
  formatRgb: Me,
  toString: Me,
}),
  ge(
    Ke,
    Ie,
    fe(ye, {
      brighter(t) {
        return (
          (t = null == t ? xe : Math.pow(xe, t)),
          new Ke(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? me : Math.pow(me, t)),
          new Ke(this.r * t, this.g * t, this.b * t, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Ke(ze(this.r), ze(this.g), ze(this.b), Re(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: qe,
      formatHex: qe,
      formatHex8: function () {
        return `#${Ne(this.r)}${Ne(this.g)}${Ne(this.b)}${Ne(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
      },
      formatRgb: Pe,
      toString: Pe,
    }),
  ),
  ge(
    He,
    function (t, e, r, i) {
      return 1 === arguments.length ? je(t) : new He(t, e, r, i ?? 1);
    },
    fe(ye, {
      brighter(t) {
        return (
          (t = null == t ? xe : Math.pow(xe, t)),
          new He(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? me : Math.pow(me, t)),
          new He(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        var t = (this.h % 360) + 360 * (this.h < 0),
          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          r = this.l,
          i = r + (r < 0.5 ? r : 1 - r) * e,
          o = 2 * r - i;
        return new Ke(
          Ge(t >= 240 ? t - 240 : t + 120, o, i),
          Ge(t, o, i),
          Ge(t < 120 ? t + 240 : t - 120, o, i),
          this.opacity,
        );
      },
      clamp() {
        return new He(Ue(this.h), Ye(this.s), Ye(this.l), Re(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const t = Re(this.opacity);
        return `${1 === t ? "hsl(" : "hsla("}${Ue(this.h)}, ${100 * Ye(this.s)}%, ${100 * Ye(this.l)}%${1 === t ? ")" : `, ${t})`}`;
      },
    }),
  );
const Ve = (t) => () => t;
function Ze(t, e) {
  return function (r) {
    return t + r * e;
  };
}
function Qe(t, e) {
  var r = e - t;
  return r ? Ze(t, r) : Ve(isNaN(t) ? e : t);
}
const Je = (function t(e) {
  var r = (function (t) {
    return 1 === (t = +t)
      ? Qe
      : function (e, r) {
          return r - e
            ? (function (t, e, r) {
                return (
                  (t = Math.pow(t, r)),
                  (e = Math.pow(e, r) - t),
                  (r = 1 / r),
                  function (i) {
                    return Math.pow(t + i * e, r);
                  }
                );
              })(e, r, t)
            : Ve(isNaN(e) ? r : e);
        };
  })(e);
  function i(t, e) {
    var i = r((t = Ie(t)).r, (e = Ie(e)).r),
      o = r(t.g, e.g),
      n = r(t.b, e.b),
      a = Qe(t.opacity, e.opacity);
    return function (e) {
      return (
        (t.r = i(e)), (t.g = o(e)), (t.b = n(e)), (t.opacity = a(e)), t + ""
      );
    };
  }
  return (i.gamma = t), i;
})(1);
function tr(t) {
  return function (e) {
    var r,
      i,
      o = e.length,
      n = new Array(o),
      a = new Array(o),
      s = new Array(o);
    for (r = 0; r < o; ++r)
      (i = Ie(e[r])), (n[r] = i.r || 0), (a[r] = i.g || 0), (s[r] = i.b || 0);
    return (
      (n = t(n)),
      (a = t(a)),
      (s = t(s)),
      (i.opacity = 1),
      function (t) {
        return (i.r = n(t)), (i.g = a(t)), (i.b = s(t)), i + "";
      }
    );
  };
}
tr(function (t) {
  var e = t.length - 1;
  return function (r) {
    var i = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
      o = t[i],
      n = t[i + 1],
      a = i > 0 ? t[i - 1] : 2 * o - n,
      s = i < e - 1 ? t[i + 2] : 2 * n - o;
    return Xe((r - i / e) * e, a, o, n, s);
  };
}),
  tr(function (t) {
    var e = t.length;
    return function (r) {
      var i = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
        o = t[(i + e - 1) % e],
        n = t[i % e],
        a = t[(i + 1) % e],
        s = t[(i + 2) % e];
      return Xe((r - i / e) * e, o, n, a, s);
    };
  });
var er = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  rr = new RegExp(er.source, "g");
function ir(t, e) {
  var r,
    i,
    o,
    n = (er.lastIndex = rr.lastIndex = 0),
    a = -1,
    s = [],
    l = [];
  for (t += "", e += ""; (r = er.exec(t)) && (i = rr.exec(e)); )
    (o = i.index) > n &&
      ((o = e.slice(n, o)), s[a] ? (s[a] += o) : (s[++a] = o)),
      (r = r[0]) === (i = i[0])
        ? s[a]
          ? (s[a] += i)
          : (s[++a] = i)
        : ((s[++a] = null), l.push({ i: a, x: ie(r, i) })),
      (n = rr.lastIndex);
  return (
    n < e.length && ((o = e.slice(n)), s[a] ? (s[a] += o) : (s[++a] = o)),
    s.length < 2
      ? l[0]
        ? (function (t) {
            return function (e) {
              return t(e) + "";
            };
          })(l[0].x)
        : (function (t) {
            return function () {
              return t;
            };
          })(e)
      : ((e = l.length),
        function (t) {
          for (var r, i = 0; i < e; ++i) s[(r = l[i]).i] = r.x(t);
          return s.join("");
        })
  );
}
function or(t, e) {
  var r;
  return (
    "number" == typeof e
      ? ie
      : e instanceof $e
        ? Je
        : (r = $e(e))
          ? ((e = r), Je)
          : ir
  )(t, e);
}
function nr(t) {
  return function () {
    this.removeAttribute(t);
  };
}
function ar(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local);
  };
}
function sr(t, e, r) {
  var i,
    o,
    n = r + "";
  return function () {
    var a = this.getAttribute(t);
    return a === n ? null : a === i ? o : (o = e((i = a), r));
  };
}
function lr(t, e, r) {
  var i,
    o,
    n = r + "";
  return function () {
    var a = this.getAttributeNS(t.space, t.local);
    return a === n ? null : a === i ? o : (o = e((i = a), r));
  };
}
function hr(t, e, r) {
  var i, o, n;
  return function () {
    var a,
      s,
      l = r(this);
    if (null != l)
      return (a = this.getAttribute(t)) === (s = l + "")
        ? null
        : a === i && s === o
          ? n
          : ((o = s), (n = e((i = a), l)));
    this.removeAttribute(t);
  };
}
function cr(t, e, r) {
  var i, o, n;
  return function () {
    var a,
      s,
      l = r(this);
    if (null != l)
      return (a = this.getAttributeNS(t.space, t.local)) === (s = l + "")
        ? null
        : a === i && s === o
          ? n
          : ((o = s), (n = e((i = a), l)));
    this.removeAttributeNS(t.space, t.local);
  };
}
function dr(t, e) {
  var r, i;
  function o() {
    var o = e.apply(this, arguments);
    return (
      o !== i &&
        (r =
          (i = o) &&
          (function (t, e) {
            return function (r) {
              this.setAttributeNS(t.space, t.local, e.call(this, r));
            };
          })(t, o)),
      r
    );
  }
  return (o._value = e), o;
}
function ur(t, e) {
  var r, i;
  function o() {
    var o = e.apply(this, arguments);
    return (
      o !== i &&
        (r =
          (i = o) &&
          (function (t, e) {
            return function (r) {
              this.setAttribute(t, e.call(this, r));
            };
          })(t, o)),
      r
    );
  }
  return (o._value = e), o;
}
function pr(t, e) {
  return function () {
    te(this, t).delay = +e.apply(this, arguments);
  };
}
function gr(t, e) {
  return (
    (e = +e),
    function () {
      te(this, t).delay = e;
    }
  );
}
function fr(t, e) {
  return function () {
    ee(this, t).duration = +e.apply(this, arguments);
  };
}
function yr(t, e) {
  return (
    (e = +e),
    function () {
      ee(this, t).duration = e;
    }
  );
}
var mr = vt.prototype.constructor;
function xr(t) {
  return function () {
    this.style.removeProperty(t);
  };
}
var Cr = 0;
function br(t, e, r, i) {
  (this._groups = t), (this._parents = e), (this._name = r), (this._id = i);
}
function kr() {
  return ++Cr;
}
var wr = vt.prototype;
br.prototype = function (t) {
  return vt().transition(t);
}.prototype = {
  constructor: br,
  select: function (t) {
    var e = this._name,
      r = this._id;
    "function" != typeof t && (t = y(t));
    for (
      var i = this._groups, o = i.length, n = new Array(o), a = 0;
      a < o;
      ++a
    )
      for (
        var s, l, h = i[a], c = h.length, d = (n[a] = new Array(c)), u = 0;
        u < c;
        ++u
      )
        (s = h[u]) &&
          (l = t.call(s, s.__data__, u, h)) &&
          ("__data__" in s && (l.__data__ = s.__data__),
          (d[u] = l),
          Jt(d[u], e, r, u, d, re(s, r)));
    return new br(n, this._parents, e, r);
  },
  selectAll: function (t) {
    var e = this._name,
      r = this._id;
    "function" != typeof t && (t = x(t));
    for (var i = this._groups, o = i.length, n = [], a = [], s = 0; s < o; ++s)
      for (var l, h = i[s], c = h.length, d = 0; d < c; ++d)
        if ((l = h[d])) {
          for (
            var u,
              p = t.call(l, l.__data__, d, h),
              g = re(l, r),
              f = 0,
              y = p.length;
            f < y;
            ++f
          )
            (u = p[f]) && Jt(u, e, r, f, p, g);
          n.push(p), a.push(l);
        }
    return new br(n, a, e, r);
  },
  selectChild: wr.selectChild,
  selectChildren: wr.selectChildren,
  filter: function (t) {
    "function" != typeof t && (t = C(t));
    for (
      var e = this._groups, r = e.length, i = new Array(r), o = 0;
      o < r;
      ++o
    )
      for (var n, a = e[o], s = a.length, l = (i[o] = []), h = 0; h < s; ++h)
        (n = a[h]) && t.call(n, n.__data__, h, a) && l.push(n);
    return new br(i, this._parents, this._name, this._id);
  },
  merge: function (t) {
    if (t._id !== this._id) throw new Error();
    for (
      var e = this._groups,
        r = t._groups,
        i = e.length,
        o = r.length,
        n = Math.min(i, o),
        a = new Array(i),
        s = 0;
      s < n;
      ++s
    )
      for (
        var l,
          h = e[s],
          c = r[s],
          d = h.length,
          u = (a[s] = new Array(d)),
          p = 0;
        p < d;
        ++p
      )
        (l = h[p] || c[p]) && (u[p] = l);
    for (; s < i; ++s) a[s] = e[s];
    return new br(a, this._parents, this._name, this._id);
  },
  selection: function () {
    return new mr(this._groups, this._parents);
  },
  transition: function () {
    for (
      var t = this._name,
        e = this._id,
        r = kr(),
        i = this._groups,
        o = i.length,
        n = 0;
      n < o;
      ++n
    )
      for (var a, s = i[n], l = s.length, h = 0; h < l; ++h)
        if ((a = s[h])) {
          var c = re(a, e);
          Jt(a, t, r, h, s, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease,
          });
        }
    return new br(i, this._parents, t, r);
  },
  call: wr.call,
  nodes: wr.nodes,
  node: wr.node,
  size: wr.size,
  empty: wr.empty,
  each: wr.each,
  on: function (t, e) {
    var r = this._id;
    return arguments.length < 2
      ? re(this.node(), r).on.on(t)
      : this.each(
          (function (t, e, r) {
            var i,
              o,
              n = (function (t) {
                return (t + "")
                  .trim()
                  .split(/^|\s+/)
                  .every(function (t) {
                    var e = t.indexOf(".");
                    return e >= 0 && (t = t.slice(0, e)), !t || "start" === t;
                  });
              })(e)
                ? te
                : ee;
            return function () {
              var a = n(this, t),
                s = a.on;
              s !== i && (o = (i = s).copy()).on(e, r), (a.on = o);
            };
          })(r, t, e),
        );
  },
  attr: function (t, e) {
    var r = O(t),
      i = "transform" === r ? ce : or;
    return this.attrTween(
      t,
      "function" == typeof e
        ? (r.local ? cr : hr)(r, i, pe(this, "attr." + t, e))
        : null == e
          ? (r.local ? ar : nr)(r)
          : (r.local ? lr : sr)(r, i, e),
    );
  },
  attrTween: function (t, e) {
    var r = "attr." + t;
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (null == e) return this.tween(r, null);
    if ("function" != typeof e) throw new Error();
    var i = O(t);
    return this.tween(r, (i.local ? dr : ur)(i, e));
  },
  style: function (t, e, r) {
    var i = "transform" == (t += "") ? he : or;
    return null == e
      ? this.styleTween(
          t,
          (function (t, e) {
            var r, i, o;
            return function () {
              var n = H(this, t),
                a = (this.style.removeProperty(t), H(this, t));
              return n === a
                ? null
                : n === r && a === i
                  ? o
                  : (o = e((r = n), (i = a)));
            };
          })(t, i),
        ).on("end.style." + t, xr(t))
      : "function" == typeof e
        ? this.styleTween(
            t,
            (function (t, e, r) {
              var i, o, n;
              return function () {
                var a = H(this, t),
                  s = r(this),
                  l = s + "";
                return (
                  null == s &&
                    (this.style.removeProperty(t), (l = s = H(this, t))),
                  a === l
                    ? null
                    : a === i && l === o
                      ? n
                      : ((o = l), (n = e((i = a), s)))
                );
              };
            })(t, i, pe(this, "style." + t, e)),
          ).each(
            (function (t, e) {
              var r,
                i,
                o,
                n,
                a = "style." + e,
                s = "end." + a;
              return function () {
                var l = ee(this, t),
                  h = l.on,
                  c = null == l.value[a] ? n || (n = xr(e)) : void 0;
                (h === r && o === c) || (i = (r = h).copy()).on(s, (o = c)),
                  (l.on = i);
              };
            })(this._id, t),
          )
        : this.styleTween(
            t,
            (function (t, e, r) {
              var i,
                o,
                n = r + "";
              return function () {
                var a = H(this, t);
                return a === n ? null : a === i ? o : (o = e((i = a), r));
              };
            })(t, i, e),
            r,
          ).on("end.style." + t, null);
  },
  styleTween: function (t, e, r) {
    var i = "style." + (t += "");
    if (arguments.length < 2) return (i = this.tween(i)) && i._value;
    if (null == e) return this.tween(i, null);
    if ("function" != typeof e) throw new Error();
    return this.tween(
      i,
      (function (t, e, r) {
        var i, o;
        function n() {
          var n = e.apply(this, arguments);
          return (
            n !== o &&
              (i =
                (o = n) &&
                (function (t, e, r) {
                  return function (i) {
                    this.style.setProperty(t, e.call(this, i), r);
                  };
                })(t, n, r)),
            i
          );
        }
        return (n._value = e), n;
      })(t, e, r ?? ""),
    );
  },
  text: function (t) {
    return this.tween(
      "text",
      "function" == typeof t
        ? (function (t) {
            return function () {
              var e = t(this);
              this.textContent = e ?? "";
            };
          })(pe(this, "text", t))
        : (function (t) {
            return function () {
              this.textContent = t;
            };
          })(null == t ? "" : t + ""),
    );
  },
  textTween: function (t) {
    var e = "text";
    if (arguments.length < 1) return (e = this.tween(e)) && e._value;
    if (null == t) return this.tween(e, null);
    if ("function" != typeof t) throw new Error();
    return this.tween(
      e,
      (function (t) {
        var e, r;
        function i() {
          var i = t.apply(this, arguments);
          return (
            i !== r &&
              (e =
                (r = i) &&
                (function (t) {
                  return function (e) {
                    this.textContent = t.call(this, e);
                  };
                })(i)),
            e
          );
        }
        return (i._value = t), i;
      })(t),
    );
  },
  remove: function () {
    return this.on(
      "end.remove",
      (function (t) {
        return function () {
          var e = this.parentNode;
          for (var r in this.__transition) if (+r !== t) return;
          e && e.removeChild(this);
        };
      })(this._id),
    );
  },
  tween: function (t, e) {
    var r = this._id;
    if (((t += ""), arguments.length < 2)) {
      for (var i, o = re(this.node(), r).tween, n = 0, a = o.length; n < a; ++n)
        if ((i = o[n]).name === t) return i.value;
      return null;
    }
    return this.each((null == e ? de : ue)(r, t, e));
  },
  delay: function (t) {
    var e = this._id;
    return arguments.length
      ? this.each(("function" == typeof t ? pr : gr)(e, t))
      : re(this.node(), e).delay;
  },
  duration: function (t) {
    var e = this._id;
    return arguments.length
      ? this.each(("function" == typeof t ? fr : yr)(e, t))
      : re(this.node(), e).duration;
  },
  ease: function (t) {
    var e = this._id;
    return arguments.length
      ? this.each(
          (function (t, e) {
            if ("function" != typeof e) throw new Error();
            return function () {
              ee(this, t).ease = e;
            };
          })(e, t),
        )
      : re(this.node(), e).ease;
  },
  easeVarying: function (t) {
    if ("function" != typeof t) throw new Error();
    return this.each(
      (function (t, e) {
        return function () {
          var r = e.apply(this, arguments);
          if ("function" != typeof r) throw new Error();
          ee(this, t).ease = r;
        };
      })(this._id, t),
    );
  },
  end: function () {
    var t,
      e,
      r = this,
      i = r._id,
      o = r.size();
    return new Promise(function (n, a) {
      var s = { value: a },
        l = {
          value: function () {
            0 === --o && n();
          },
        };
      r.each(function () {
        var r = ee(this, i),
          o = r.on;
        o !== t &&
          ((e = (t = o).copy())._.cancel.push(s),
          e._.interrupt.push(s),
          e._.end.push(l)),
          (r.on = e);
      }),
        0 === o && n();
    });
  },
  [Symbol.iterator]: wr[Symbol.iterator],
};
var Sr = {
  time: null,
  delay: 0,
  duration: 250,
  ease: function (t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  },
};
function Tr(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
  return r;
}
(vt.prototype.interrupt = function (t) {
  return this.each(function () {
    !(function (t, e) {
      var r,
        i,
        o,
        n = t.__transition,
        a = !0;
      if (n) {
        for (o in ((e = null == e ? null : e + ""), n))
          (r = n[o]).name === e
            ? ((i = r.state > 2 && r.state < 5),
              (r.state = 6),
              r.timer.stop(),
              r.on.call(
                i ? "interrupt" : "cancel",
                t,
                t.__data__,
                r.index,
                r.group,
              ),
              delete n[o])
            : (a = !1);
        a && delete t.__transition;
      }
    })(this, t);
  });
}),
  (vt.prototype.transition = function (t) {
    var e, r;
    t instanceof br
      ? ((e = t._id), (t = t._name))
      : ((e = kr()), ((r = Sr).time = Wt()), (t = null == t ? null : t + ""));
    for (var i = this._groups, o = i.length, n = 0; n < o; ++n)
      for (var a, s = i[n], l = s.length, h = 0; h < l; ++h)
        (a = s[h]) && Jt(a, t, e, h, s, r || Tr(a, e));
    return new br(i, this._parents, t, e);
  });
const { abs: Br, max: vr, min: _r } = Math;
function Ar(t) {
  return { type: t };
}
function Fr(t, e) {
  if (!isFinite(t) || 0 === t) return null;
  var r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"),
    i = t.slice(0, r);
  return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(r + 1)];
}
function Lr(t) {
  return (t = Fr(Math.abs(t))) ? t[1] : NaN;
}
["w", "e"].map(Ar),
  ["n", "s"].map(Ar),
  ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Ar);
var Mr,
  $r =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Er(t) {
  if (!(e = $r.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Or({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10],
  });
}
function Or(t) {
  (this.fill = void 0 === t.fill ? " " : t.fill + ""),
    (this.align = void 0 === t.align ? ">" : t.align + ""),
    (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
    (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
    (this.zero = !!t.zero),
    (this.width = void 0 === t.width ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = void 0 === t.precision ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = void 0 === t.type ? "" : t.type + "");
}
function Dr(t, e) {
  var r = Fr(t, e);
  if (!r) return t + "";
  var i = r[0],
    o = r[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + i
    : i.length > o + 1
      ? i.slice(0, o + 1) + "." + i.slice(o + 1)
      : i + new Array(o - i.length + 2).join("0");
}
(Er.prototype = Or.prototype),
  (Or.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? "0" : "") +
      (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
      (this.comma ? "," : "") +
      (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
      (this.trim ? "~" : "") +
      this.type
    );
  });
const Ir = {
  "%": (t, e) => (100 * t).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: function (t) {
    return Math.abs((t = Math.round(t))) >= 1e21
      ? t.toLocaleString("en").replace(/,/g, "")
      : t.toString(10);
  },
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Dr(100 * t, e),
  r: Dr,
  s: function (t, e) {
    var r = Fr(t, e);
    if (!r) return (Mr = void 0), t.toPrecision(e);
    var i = r[0],
      o = r[1],
      n = o - (Mr = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
      a = i.length;
    return n === a
      ? i
      : n > a
        ? i + new Array(n - a + 1).join("0")
        : n > 0
          ? i.slice(0, n) + "." + i.slice(n)
          : "0." +
            new Array(1 - n).join("0") +
            Fr(t, Math.max(0, e + n - 1))[0];
  },
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
};
function Kr(t) {
  return t;
}
var qr,
  Pr,
  Rr,
  zr = Array.prototype.map,
  Nr = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function Wr(t) {
  var e = 0,
    r = t.children,
    i = r && r.length;
  if (i) for (; --i >= 0; ) e += r[i].value;
  else e = 1;
  t.value = e;
}
function jr(t, e) {
  t instanceof Map
    ? ((t = [void 0, t]), void 0 === e && (e = Ur))
    : void 0 === e && (e = Hr);
  for (var r, i, o, n, a, s = new Xr(t), l = [s]; (r = l.pop()); )
    if ((o = e(r.data)) && (a = (o = Array.from(o)).length))
      for (r.children = o, n = a - 1; n >= 0; --n)
        l.push((i = o[n] = new Xr(o[n]))),
          (i.parent = r),
          (i.depth = r.depth + 1);
  return s.eachBefore(Gr);
}
function Hr(t) {
  return t.children;
}
function Ur(t) {
  return Array.isArray(t) ? t[1] : null;
}
function Yr(t) {
  void 0 !== t.data.value && (t.value = t.data.value), (t.data = t.data.data);
}
function Gr(t) {
  var e = 0;
  do {
    t.height = e;
  } while ((t = t.parent) && t.height < ++e);
}
function Xr(t) {
  (this.data = t), (this.depth = this.height = 0), (this.parent = null);
}
function Vr(t) {
  (t.x0 = Math.round(t.x0)),
    (t.y0 = Math.round(t.y0)),
    (t.x1 = Math.round(t.x1)),
    (t.y1 = Math.round(t.y1));
}
function Zr(t, e, r, i, o) {
  for (
    var n,
      a = t.children,
      s = -1,
      l = a.length,
      h = t.value && (i - e) / t.value;
    ++s < l;

  )
    ((n = a[s]).y0 = r), (n.y1 = o), (n.x0 = e), (n.x1 = e += n.value * h);
}
function Qr(t, e, r, i, o) {
  for (
    var n,
      a = t.children,
      s = -1,
      l = a.length,
      h = t.value && (o - r) / t.value;
    ++s < l;

  )
    ((n = a[s]).x0 = e), (n.x1 = i), (n.y0 = r), (n.y1 = r += n.value * h);
}
(qr = (function (t) {
  var e,
    r,
    i =
      void 0 === t.grouping || void 0 === t.thousands
        ? Kr
        : ((e = zr.call(t.grouping, Number)),
          (r = t.thousands + ""),
          function (t, i) {
            for (
              var o = t.length, n = [], a = 0, s = e[0], l = 0;
              o > 0 &&
              s > 0 &&
              (l + s + 1 > i && (s = Math.max(1, i - l)),
              n.push(t.substring((o -= s), o + s)),
              !((l += s + 1) > i));

            )
              s = e[(a = (a + 1) % e.length)];
            return n.reverse().join(r);
          }),
    o = void 0 === t.currency ? "" : t.currency[0] + "",
    n = void 0 === t.currency ? "" : t.currency[1] + "",
    a = void 0 === t.decimal ? "." : t.decimal + "",
    s =
      void 0 === t.numerals
        ? Kr
        : (function (t) {
            return function (e) {
              return e.replace(/[0-9]/g, function (e) {
                return t[+e];
              });
            };
          })(zr.call(t.numerals, String)),
    l = void 0 === t.percent ? "%" : t.percent + "",
    h = void 0 === t.minus ? "−" : t.minus + "",
    c = void 0 === t.nan ? "NaN" : t.nan + "";
  function d(t, e) {
    var r = (t = Er(t)).fill,
      d = t.align,
      u = t.sign,
      p = t.symbol,
      g = t.zero,
      f = t.width,
      y = t.comma,
      m = t.precision,
      x = t.trim,
      C = t.type;
    "n" === C
      ? ((y = !0), (C = "g"))
      : Ir[C] || (void 0 === m && (m = 12), (x = !0), (C = "g")),
      (g || ("0" === r && "=" === d)) && ((g = !0), (r = "0"), (d = "="));
    var b =
        (e && void 0 !== e.prefix ? e.prefix : "") +
        ("$" === p
          ? o
          : "#" === p && /[boxX]/.test(C)
            ? "0" + C.toLowerCase()
            : ""),
      k =
        ("$" === p ? n : /[%p]/.test(C) ? l : "") +
        (e && void 0 !== e.suffix ? e.suffix : ""),
      w = Ir[C],
      S = /[defgprs%]/.test(C);
    function T(t) {
      var e,
        o,
        n,
        l = b,
        p = k;
      if ("c" === C) (p = w(t) + p), (t = "");
      else {
        var T = (t = +t) < 0 || 1 / t < 0;
        if (
          ((t = isNaN(t) ? c : w(Math.abs(t), m)),
          x &&
            (t = (function (t) {
              t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i)
                switch (t[i]) {
                  case ".":
                    o = e = i;
                    break;
                  case "0":
                    0 === o && (o = i), (e = i);
                    break;
                  default:
                    if (!+t[i]) break t;
                    o > 0 && (o = 0);
                }
              return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
            })(t)),
          T && 0 === +t && "+" !== u && (T = !1),
          (l = (T ? ("(" === u ? u : h) : "-" === u || "(" === u ? "" : u) + l),
          (p =
            ("s" !== C || isNaN(t) || void 0 === Mr ? "" : Nr[8 + Mr / 3]) +
            p +
            (T && "(" === u ? ")" : "")),
          S)
        )
          for (e = -1, o = t.length; ++e < o; )
            if (48 > (n = t.charCodeAt(e)) || n > 57) {
              (p = (46 === n ? a + t.slice(e + 1) : t.slice(e)) + p),
                (t = t.slice(0, e));
              break;
            }
      }
      y && !g && (t = i(t, 1 / 0));
      var B = l.length + t.length + p.length,
        v = B < f ? new Array(f - B + 1).join(r) : "";
      switch (
        (y && g && ((t = i(v + t, v.length ? f - p.length : 1 / 0)), (v = "")),
        d)
      ) {
        case "<":
          t = l + t + p + v;
          break;
        case "=":
          t = l + v + t + p;
          break;
        case "^":
          t = v.slice(0, (B = v.length >> 1)) + l + t + p + v.slice(B);
          break;
        default:
          t = v + l + t + p;
      }
      return s(t);
    }
    return (
      (m =
        void 0 === m
          ? 6
          : /[gprs]/.test(C)
            ? Math.max(1, Math.min(21, m))
            : Math.max(0, Math.min(20, m))),
      (T.toString = function () {
        return t + "";
      }),
      T
    );
  }
  return {
    format: d,
    formatPrefix: function (t, e) {
      var r = 3 * Math.max(-8, Math.min(8, Math.floor(Lr(e) / 3))),
        i = Math.pow(10, -r),
        o = d((((t = Er(t)).type = "f"), t), { suffix: Nr[8 + r / 3] });
      return function (t) {
        return o(i * t);
      };
    },
  };
})({ thousands: ",", grouping: [3], currency: ["$", ""] })),
  (Pr = qr.format),
  (Rr = qr.formatPrefix),
  (Xr.prototype = jr.prototype =
    {
      constructor: Xr,
      count: function () {
        return this.eachAfter(Wr);
      },
      each: function (t, e) {
        let r = -1;
        for (const i of this) t.call(e, i, ++r, this);
        return this;
      },
      eachAfter: function (t, e) {
        for (var r, i, o, n = this, a = [n], s = [], l = -1; (n = a.pop()); )
          if ((s.push(n), (r = n.children)))
            for (i = 0, o = r.length; i < o; ++i) a.push(r[i]);
        for (; (n = s.pop()); ) t.call(e, n, ++l, this);
        return this;
      },
      eachBefore: function (t, e) {
        for (var r, i, o = this, n = [o], a = -1; (o = n.pop()); )
          if ((t.call(e, o, ++a, this), (r = o.children)))
            for (i = r.length - 1; i >= 0; --i) n.push(r[i]);
        return this;
      },
      find: function (t, e) {
        let r = -1;
        for (const i of this) if (t.call(e, i, ++r, this)) return i;
      },
      sum: function (t) {
        return this.eachAfter(function (e) {
          for (
            var r = +t(e.data) || 0, i = e.children, o = i && i.length;
            --o >= 0;

          )
            r += i[o].value;
          e.value = r;
        });
      },
      sort: function (t) {
        return this.eachBefore(function (e) {
          e.children && e.children.sort(t);
        });
      },
      path: function (t) {
        for (
          var e = this,
            r = (function (t, e) {
              if (t === e) return t;
              var r = t.ancestors(),
                i = e.ancestors(),
                o = null;
              for (t = r.pop(), e = i.pop(); t === e; )
                (o = t), (t = r.pop()), (e = i.pop());
              return o;
            })(e, t),
            i = [e];
          e !== r;

        )
          (e = e.parent), i.push(e);
        for (var o = i.length; t !== r; ) i.splice(o, 0, t), (t = t.parent);
        return i;
      },
      ancestors: function () {
        for (var t = this, e = [t]; (t = t.parent); ) e.push(t);
        return e;
      },
      descendants: function () {
        return Array.from(this);
      },
      leaves: function () {
        var t = [];
        return (
          this.eachBefore(function (e) {
            e.children || t.push(e);
          }),
          t
        );
      },
      links: function () {
        var t = this,
          e = [];
        return (
          t.each(function (r) {
            r !== t && e.push({ source: r.parent, target: r });
          }),
          e
        );
      },
      copy: function () {
        return jr(this).eachBefore(Yr);
      },
      [Symbol.iterator]: function* () {
        var t,
          e,
          r,
          i,
          o = this,
          n = [o];
        do {
          for (t = n.reverse(), n = []; (o = t.pop()); )
            if ((yield o, (e = o.children)))
              for (r = 0, i = e.length; r < i; ++r) n.push(e[r]);
        } while (n.length);
      },
    });
const Jr = (function t(e) {
  function r(t, r, i, o, n) {
    !(function (t, e, r, i, o, n) {
      for (
        var a,
          s,
          l,
          h,
          c,
          d,
          u,
          p,
          g,
          f,
          y,
          m = [],
          x = e.children,
          C = 0,
          b = 0,
          k = x.length,
          w = e.value;
        C < k;

      ) {
        (l = o - r), (h = n - i);
        do {
          c = x[b++].value;
        } while (!c && b < k);
        for (
          d = u = c,
            y = c * c * (f = Math.max(h / l, l / h) / (w * t)),
            g = Math.max(u / y, y / d);
          b < k;
          ++b
        ) {
          if (
            ((c += s = x[b].value),
            s < d && (d = s),
            s > u && (u = s),
            (y = c * c * f),
            (p = Math.max(u / y, y / d)) > g)
          ) {
            c -= s;
            break;
          }
          g = p;
        }
        m.push((a = { value: c, dice: l < h, children: x.slice(C, b) })),
          a.dice
            ? Zr(a, r, i, o, w ? (i += (h * c) / w) : n)
            : Qr(a, r, i, w ? (r += (l * c) / w) : o, n),
          (w -= c),
          (C = b);
      }
    })(e, t, r, i, o, n);
  }
  return (
    (r.ratio = function (e) {
      return t((e = +e) > 1 ? e : 1);
    }),
    r
  );
})((1 + Math.sqrt(5)) / 2);
function ti() {
  return 0;
}
function ei(t) {
  return function () {
    return t;
  };
}
function ri() {
  var t = Jr,
    e = !1,
    r = 1,
    i = 1,
    o = [0],
    n = ti,
    a = ti,
    s = ti,
    l = ti,
    h = ti;
  function c(t) {
    return (
      (t.x0 = t.y0 = 0),
      (t.x1 = r),
      (t.y1 = i),
      t.eachBefore(d),
      (o = [0]),
      e && t.eachBefore(Vr),
      t
    );
  }
  function d(e) {
    var r = o[e.depth],
      i = e.x0 + r,
      c = e.y0 + r,
      d = e.x1 - r,
      u = e.y1 - r;
    d < i && (i = d = (i + d) / 2),
      u < c && (c = u = (c + u) / 2),
      (e.x0 = i),
      (e.y0 = c),
      (e.x1 = d),
      (e.y1 = u),
      e.children &&
        ((r = o[e.depth + 1] = n(e) / 2),
        (i += h(e) - r),
        (c += a(e) - r),
        (d -= s(e) - r) < i && (i = d = (i + d) / 2),
        (u -= l(e) - r) < c && (c = u = (c + u) / 2),
        t(e, i, c, d, u));
  }
  return (
    (c.round = function (t) {
      return arguments.length ? ((e = !!t), c) : e;
    }),
    (c.size = function (t) {
      return arguments.length ? ((r = +t[0]), (i = +t[1]), c) : [r, i];
    }),
    (c.tile = function (e) {
      return arguments.length
        ? ((t = (function (t) {
            if ("function" != typeof t) throw new Error();
            return t;
          })(e)),
          c)
        : t;
    }),
    (c.padding = function (t) {
      return arguments.length
        ? c.paddingInner(t).paddingOuter(t)
        : c.paddingInner();
    }),
    (c.paddingInner = function (t) {
      return arguments.length
        ? ((n = "function" == typeof t ? t : ei(+t)), c)
        : n;
    }),
    (c.paddingOuter = function (t) {
      return arguments.length
        ? c.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t)
        : c.paddingTop();
    }),
    (c.paddingTop = function (t) {
      return arguments.length
        ? ((a = "function" == typeof t ? t : ei(+t)), c)
        : a;
    }),
    (c.paddingRight = function (t) {
      return arguments.length
        ? ((s = "function" == typeof t ? t : ei(+t)), c)
        : s;
    }),
    (c.paddingBottom = function (t) {
      return arguments.length
        ? ((l = "function" == typeof t ? t : ei(+t)), c)
        : l;
    }),
    (c.paddingLeft = function (t) {
      return arguments.length
        ? ((h = "function" == typeof t ? t : ei(+t)), c)
        : h;
    }),
    c
  );
}
const ii = Math.PI / 180,
  oi = 180 / Math.PI,
  ni = 0.96422,
  ai = 0.82521,
  si = 4 / 29,
  li = 6 / 29,
  hi = 3 * li * li,
  ci = li * li * li;
function di(t) {
  if (t instanceof ui) return new ui(t.l, t.a, t.b, t.opacity);
  if (t instanceof xi) return Ci(t);
  t instanceof Ke || (t = De(t));
  var e,
    r,
    i = yi(t.r),
    o = yi(t.g),
    n = yi(t.b),
    a = pi((0.2225045 * i + 0.7168786 * o + 0.0606169 * n) / 1);
  return (
    i === o && o === n
      ? (e = r = a)
      : ((e = pi((0.4360747 * i + 0.3850649 * o + 0.1430804 * n) / ni)),
        (r = pi((0.0139322 * i + 0.0971045 * o + 0.7141733 * n) / ai))),
    new ui(116 * a - 16, 500 * (e - a), 200 * (a - r), t.opacity)
  );
}
function ui(t, e, r, i) {
  (this.l = +t), (this.a = +e), (this.b = +r), (this.opacity = +i);
}
function pi(t) {
  return t > ci ? Math.pow(t, 1 / 3) : t / hi + si;
}
function gi(t) {
  return t > li ? t * t * t : hi * (t - si);
}
function fi(t) {
  return (
    255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
  );
}
function yi(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function mi(t, e, r, i) {
  return 1 === arguments.length
    ? (function (t) {
        if (t instanceof xi) return new xi(t.h, t.c, t.l, t.opacity);
        if ((t instanceof ui || (t = di(t)), 0 === t.a && 0 === t.b))
          return new xi(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var e = Math.atan2(t.b, t.a) * oi;
        return new xi(
          e < 0 ? e + 360 : e,
          Math.sqrt(t.a * t.a + t.b * t.b),
          t.l,
          t.opacity,
        );
      })(t)
    : new xi(t, e, r, i ?? 1);
}
function xi(t, e, r, i) {
  (this.h = +t), (this.c = +e), (this.l = +r), (this.opacity = +i);
}
function Ci(t) {
  if (isNaN(t.h)) return new ui(t.l, 0, 0, t.opacity);
  var e = t.h * ii;
  return new ui(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
function bi(t) {
  return function (e, r) {
    var i = t((e = mi(e)).h, (r = mi(r)).h),
      o = Qe(e.c, r.c),
      n = Qe(e.l, r.l),
      a = Qe(e.opacity, r.opacity);
    return function (t) {
      return (
        (e.h = i(t)), (e.c = o(t)), (e.l = n(t)), (e.opacity = a(t)), e + ""
      );
    };
  };
}
ge(
  ui,
  function (t, e, r, i) {
    return 1 === arguments.length ? di(t) : new ui(t, e, r, i ?? 1);
  },
  fe(ye, {
    brighter(t) {
      return new ui(this.l + 18 * (t ?? 1), this.a, this.b, this.opacity);
    },
    darker(t) {
      return new ui(this.l - 18 * (t ?? 1), this.a, this.b, this.opacity);
    },
    rgb() {
      var t = (this.l + 16) / 116,
        e = isNaN(this.a) ? t : t + this.a / 500,
        r = isNaN(this.b) ? t : t - this.b / 200;
      return new Ke(
        fi(
          3.1338561 * (e = ni * gi(e)) -
            1.6168667 * (t = 1 * gi(t)) -
            0.4906146 * (r = ai * gi(r)),
        ),
        fi(-0.9787684 * e + 1.9161415 * t + 0.033454 * r),
        fi(0.0719453 * e - 0.2289914 * t + 1.4052427 * r),
        this.opacity,
      );
    },
  }),
),
  ge(
    xi,
    mi,
    fe(ye, {
      brighter(t) {
        return new xi(this.h, this.c, this.l + 18 * (t ?? 1), this.opacity);
      },
      darker(t) {
        return new xi(this.h, this.c, this.l - 18 * (t ?? 1), this.opacity);
      },
      rgb() {
        return Ci(this).rgb();
      },
    }),
  );
const ki = bi(function (t, e) {
  var r = e - t;
  return r
    ? Ze(t, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r)
    : Ve(isNaN(t) ? e : t);
});
function wi(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
  }
  return this;
}
bi(Qe);
class Si extends Map {
  constructor(t, e = Bi) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: e },
      }),
      null != t)
    )
      for (const [e, r] of t) this.set(e, r);
  }
  get(t) {
    return super.get(Ti(this, t));
  }
  has(t) {
    return super.has(Ti(this, t));
  }
  set(t, e) {
    return super.set(
      (function ({ _intern: t, _key: e }, r) {
        const i = e(r);
        return t.has(i) ? t.get(i) : (t.set(i, r), r);
      })(this, t),
      e,
    );
  }
  delete(t) {
    return super.delete(
      (function ({ _intern: t, _key: e }, r) {
        const i = e(r);
        return t.has(i) && ((r = t.get(i)), t.delete(i)), r;
      })(this, t),
    );
  }
}
function Ti({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : r;
}
function Bi(t) {
  return null !== t && "object" == typeof t ? t.valueOf() : t;
}
Set;
const vi = Symbol("implicit");
function _i() {
  var t = new Si(),
    e = [],
    r = [],
    i = vi;
  function o(o) {
    let n = t.get(o);
    if (void 0 === n) {
      if (i !== vi) return i;
      t.set(o, (n = e.push(o) - 1));
    }
    return r[n % r.length];
  }
  return (
    (o.domain = function (r) {
      if (!arguments.length) return e.slice();
      (e = []), (t = new Si());
      for (const i of r) t.has(i) || t.set(i, e.push(i) - 1);
      return o;
    }),
    (o.range = function (t) {
      return arguments.length ? ((r = Array.from(t)), o) : r.slice();
    }),
    (o.unknown = function (t) {
      return arguments.length ? ((i = t), o) : i;
    }),
    (o.copy = function () {
      return _i(e, r).unknown(i);
    }),
    wi.apply(o, arguments),
    o
  );
}
function Ai() {
  var t,
    e,
    r = _i().unknown(void 0),
    i = r.domain,
    o = r.range,
    n = 0,
    a = 1,
    s = !1,
    l = 0,
    h = 0,
    c = 0.5;
  function d() {
    var r = i().length,
      d = a < n,
      u = d ? a : n,
      p = d ? n : a;
    (t = (p - u) / Math.max(1, r - l + 2 * h)),
      s && (t = Math.floor(t)),
      (u += (p - u - t * (r - l)) * c),
      (e = t * (1 - l)),
      s && ((u = Math.round(u)), (e = Math.round(e)));
    var g = (function (t, e, r) {
      (t = +t),
        (e = +e),
        (r =
          (o = arguments.length) < 2 ? ((e = t), (t = 0), 1) : o < 3 ? 1 : +r);
      for (
        var i = -1,
          o = 0 | Math.max(0, Math.ceil((e - t) / r)),
          n = new Array(o);
        ++i < o;

      )
        n[i] = t + i * r;
      return n;
    })(r).map(function (e) {
      return u + t * e;
    });
    return o(d ? g.reverse() : g);
  }
  return (
    delete r.unknown,
    (r.domain = function (t) {
      return arguments.length ? (i(t), d()) : i();
    }),
    (r.range = function (t) {
      return arguments.length
        ? (([n, a] = t), (n = +n), (a = +a), d())
        : [n, a];
    }),
    (r.rangeRound = function (t) {
      return ([n, a] = t), (n = +n), (a = +a), (s = !0), d();
    }),
    (r.bandwidth = function () {
      return e;
    }),
    (r.step = function () {
      return t;
    }),
    (r.round = function (t) {
      return arguments.length ? ((s = !!t), d()) : s;
    }),
    (r.padding = function (t) {
      return arguments.length ? ((l = Math.min(1, (h = +t))), d()) : l;
    }),
    (r.paddingInner = function (t) {
      return arguments.length ? ((l = Math.min(1, t)), d()) : l;
    }),
    (r.paddingOuter = function (t) {
      return arguments.length ? ((h = +t), d()) : h;
    }),
    (r.align = function (t) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, t))), d()) : c;
    }),
    (r.copy = function () {
      return Ai(i(), [n, a]).round(s).paddingInner(l).paddingOuter(h).align(c);
    }),
    wi.apply(d(), arguments)
  );
}
const Fi = Math.sqrt(50),
  Li = Math.sqrt(10),
  Mi = Math.sqrt(2);
function $i(t, e, r) {
  const i = (e - t) / Math.max(0, r),
    o = Math.floor(Math.log10(i)),
    n = i / Math.pow(10, o),
    a = n >= Fi ? 10 : n >= Li ? 5 : n >= Mi ? 2 : 1;
  let s, l, h;
  return (
    o < 0
      ? ((h = Math.pow(10, -o) / a),
        (s = Math.round(t * h)),
        (l = Math.round(e * h)),
        s / h < t && ++s,
        l / h > e && --l,
        (h = -h))
      : ((h = Math.pow(10, o) * a),
        (s = Math.round(t / h)),
        (l = Math.round(e / h)),
        s * h < t && ++s,
        l * h > e && --l),
    l < s && 0.5 <= r && r < 2 ? $i(t, e, 2 * r) : [s, l, h]
  );
}
function Ei(t, e, r) {
  return $i((t = +t), (e = +e), (r = +r))[2];
}
function Oi(t, e, r) {
  r = +r;
  const i = (e = +e) < (t = +t),
    o = i ? Ei(e, t, r) : Ei(t, e, r);
  return (i ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Di(t, e) {
  return null == t || null == e
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Ii(t, e) {
  return null == t || null == e
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function Ki(t) {
  let e, r, i;
  function o(t, i, o = 0, n = t.length) {
    if (o < n) {
      if (0 !== e(i, i)) return n;
      do {
        const e = (o + n) >>> 1;
        r(t[e], i) < 0 ? (o = e + 1) : (n = e);
      } while (o < n);
    }
    return o;
  }
  return (
    2 !== t.length
      ? ((e = Di), (r = (e, r) => Di(t(e), r)), (i = (e, r) => t(e) - r))
      : ((e = t === Di || t === Ii ? t : qi), (r = t), (i = t)),
    {
      left: o,
      center: function (t, e, r = 0, n = t.length) {
        const a = o(t, e, r, n - 1);
        return a > r && i(t[a - 1], e) > -i(t[a], e) ? a - 1 : a;
      },
      right: function (t, i, o = 0, n = t.length) {
        if (o < n) {
          if (0 !== e(i, i)) return n;
          do {
            const e = (o + n) >>> 1;
            r(t[e], i) <= 0 ? (o = e + 1) : (n = e);
          } while (o < n);
        }
        return o;
      },
    }
  );
}
function qi() {
  return 0;
}
const Pi = Ki(Di),
  Ri = Pi.right,
  zi =
    (Pi.left,
    Ki(function (t) {
      return null === t ? NaN : +t;
    }).center,
    Ri);
function Ni(t, e) {
  var r,
    i = e ? e.length : 0,
    o = t ? Math.min(i, t.length) : 0,
    n = new Array(o),
    a = new Array(i);
  for (r = 0; r < o; ++r) n[r] = Ui(t[r], e[r]);
  for (; r < i; ++r) a[r] = e[r];
  return function (t) {
    for (r = 0; r < o; ++r) a[r] = n[r](t);
    return a;
  };
}
function Wi(t, e) {
  var r = new Date();
  return (
    (t = +t),
    (e = +e),
    function (i) {
      return r.setTime(t * (1 - i) + e * i), r;
    }
  );
}
function ji(t, e) {
  var r,
    i = {},
    o = {};
  for (r in ((null !== t && "object" == typeof t) || (t = {}),
  (null !== e && "object" == typeof e) || (e = {}),
  e))
    r in t ? (i[r] = Ui(t[r], e[r])) : (o[r] = e[r]);
  return function (t) {
    for (r in i) o[r] = i[r](t);
    return o;
  };
}
function Hi(t, e) {
  e || (e = []);
  var r,
    i = t ? Math.min(e.length, t.length) : 0,
    o = e.slice();
  return function (n) {
    for (r = 0; r < i; ++r) o[r] = t[r] * (1 - n) + e[r] * n;
    return o;
  };
}
function Ui(t, e) {
  var r,
    i,
    o = typeof e;
  return null == e || "boolean" === o
    ? Ve(e)
    : ("number" === o
        ? ie
        : "string" === o
          ? (r = $e(e))
            ? ((e = r), Je)
            : ir
          : e instanceof $e
            ? Je
            : e instanceof Date
              ? Wi
              : ((i = e),
                !ArrayBuffer.isView(i) || i instanceof DataView
                  ? Array.isArray(e)
                    ? Ni
                    : ("function" != typeof e.valueOf &&
                          "function" != typeof e.toString) ||
                        isNaN(e)
                      ? ji
                      : ie
                  : Hi))(t, e);
}
function Yi(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return Math.round(t * (1 - r) + e * r);
    }
  );
}
function Gi(t) {
  return +t;
}
var Xi = [0, 1];
function Vi(t) {
  return t;
}
function Zi(t, e) {
  return (e -= t = +t)
    ? function (r) {
        return (r - t) / e;
      }
    : ((r = isNaN(e) ? NaN : 0.5),
      function () {
        return r;
      });
  var r;
}
function Qi(t, e, r) {
  var i = t[0],
    o = t[1],
    n = e[0],
    a = e[1];
  return (
    o < i ? ((i = Zi(o, i)), (n = r(a, n))) : ((i = Zi(i, o)), (n = r(n, a))),
    function (t) {
      return n(i(t));
    }
  );
}
function Ji(t, e, r) {
  var i = Math.min(t.length, e.length) - 1,
    o = new Array(i),
    n = new Array(i),
    a = -1;
  for (
    t[i] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
    ++a < i;

  )
    (o[a] = Zi(t[a], t[a + 1])), (n[a] = r(e[a], e[a + 1]));
  return function (e) {
    var r = zi(t, e, 1, i) - 1;
    return n[r](o[r](e));
  };
}
function to(t, e) {
  return e
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown());
}
function eo() {
  return (function () {
    var t,
      e,
      r,
      i,
      o,
      n,
      a = Xi,
      s = Xi,
      l = Ui,
      h = Vi;
    function c() {
      var t,
        e,
        r,
        l = Math.min(a.length, s.length);
      return (
        h !== Vi &&
          ((t = a[0]),
          (e = a[l - 1]),
          t > e && ((r = t), (t = e), (e = r)),
          (h = function (r) {
            return Math.max(t, Math.min(e, r));
          })),
        (i = l > 2 ? Ji : Qi),
        (o = n = null),
        d
      );
    }
    function d(e) {
      return null == e || isNaN((e = +e))
        ? r
        : (o || (o = i(a.map(t), s, l)))(t(h(e)));
    }
    return (
      (d.invert = function (r) {
        return h(e((n || (n = i(s, a.map(t), ie)))(r)));
      }),
      (d.domain = function (t) {
        return arguments.length ? ((a = Array.from(t, Gi)), c()) : a.slice();
      }),
      (d.range = function (t) {
        return arguments.length ? ((s = Array.from(t)), c()) : s.slice();
      }),
      (d.rangeRound = function (t) {
        return (s = Array.from(t)), (l = Yi), c();
      }),
      (d.clamp = function (t) {
        return arguments.length ? ((h = !!t || Vi), c()) : h !== Vi;
      }),
      (d.interpolate = function (t) {
        return arguments.length ? ((l = t), c()) : l;
      }),
      (d.unknown = function (t) {
        return arguments.length ? ((r = t), d) : r;
      }),
      function (r, i) {
        return (t = r), (e = i), c();
      }
    );
  })()(Vi, Vi);
}
function ro(t) {
  var e = t.domain;
  return (
    (t.ticks = function (t) {
      var r = e();
      return (function (t, e, r) {
        if (!((r = +r) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const i = e < t,
          [o, n, a] = i ? $i(e, t, r) : $i(t, e, r);
        if (!(n >= o)) return [];
        const s = n - o + 1,
          l = new Array(s);
        if (i)
          if (a < 0) for (let t = 0; t < s; ++t) l[t] = (n - t) / -a;
          else for (let t = 0; t < s; ++t) l[t] = (n - t) * a;
        else if (a < 0) for (let t = 0; t < s; ++t) l[t] = (o + t) / -a;
        else for (let t = 0; t < s; ++t) l[t] = (o + t) * a;
        return l;
      })(r[0], r[r.length - 1], t ?? 10);
    }),
    (t.tickFormat = function (t, r) {
      var i = e();
      return (function (t, e, r, i) {
        var o,
          n = Oi(t, e, r);
        switch ((i = Er(i ?? ",f")).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != i.precision ||
                isNaN(
                  (o = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Lr(e) / 3))) -
                        Lr(Math.abs(t)),
                    );
                  })(n, a)),
                ) ||
                (i.precision = o),
              Rr(i, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != i.precision ||
              isNaN(
                (o = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, Lr(e) - Lr(t)) + 1
                  );
                })(n, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (i.precision = o - ("e" === i.type));
            break;
          case "f":
          case "%":
            null != i.precision ||
              isNaN(
                (o = (function (t) {
                  return Math.max(0, -Lr(Math.abs(t)));
                })(n)),
              ) ||
              (i.precision = o - 2 * ("%" === i.type));
        }
        return Pr(i);
      })(i[0], i[i.length - 1], t ?? 10, r);
    }),
    (t.nice = function (r) {
      null == r && (r = 10);
      var i,
        o,
        n = e(),
        a = 0,
        s = n.length - 1,
        l = n[a],
        h = n[s],
        c = 10;
      for (
        h < l && ((o = l), (l = h), (h = o), (o = a), (a = s), (s = o));
        c-- > 0;

      ) {
        if ((o = Ei(l, h, r)) === i) return (n[a] = l), (n[s] = h), e(n);
        if (o > 0) (l = Math.floor(l / o) * o), (h = Math.ceil(h / o) * o);
        else {
          if (!(o < 0)) break;
          (l = Math.ceil(l * o) / o), (h = Math.floor(h * o) / o);
        }
        i = o;
      }
      return t;
    }),
    t
  );
}
function io() {
  var t = eo();
  return (
    (t.copy = function () {
      return to(t, io());
    }),
    wi.apply(t, arguments),
    ro(t)
  );
}
const oo = 1e3,
  no = 6e4,
  ao = 36e5,
  so = 864e5,
  lo = 6048e5,
  ho = 31536e6,
  co = new Date(),
  uo = new Date();
function po(t, e, r, i) {
  function o(e) {
    return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
  }
  return (
    (o.floor = (e) => (t((e = new Date(+e))), e)),
    (o.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
    (o.round = (t) => {
      const e = o(t),
        r = o.ceil(t);
      return t - e < r - t ? e : r;
    }),
    (o.offset = (t, r) => (
      e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
    )),
    (o.range = (r, i, n) => {
      const a = [];
      if (
        ((r = o.ceil(r)),
        (n = null == n ? 1 : Math.floor(n)),
        !(r < i && n > 0))
      )
        return a;
      let s;
      do {
        a.push((s = new Date(+r))), e(r, n), t(r);
      } while (s < r && r < i);
      return a;
    }),
    (o.filter = (r) =>
      po(
        (e) => {
          if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
        },
        (t, i) => {
          if (t >= t)
            if (i < 0) for (; ++i <= 0; ) for (; e(t, -1), !r(t); );
            else for (; --i >= 0; ) for (; e(t, 1), !r(t); );
        },
      )),
    r &&
      ((o.count = (e, i) => (
        co.setTime(+e), uo.setTime(+i), t(co), t(uo), Math.floor(r(co, uo))
      )),
      (o.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? o.filter(
                i ? (e) => i(e) % t === 0 : (e) => o.count(0, e) % t === 0,
              )
            : o
          : null
      ))),
    o
  );
}
const go = po(
  () => {},
  (t, e) => {
    t.setTime(+t + e);
  },
  (t, e) => e - t,
);
(go.every = (t) => (
  (t = Math.floor(t)),
  isFinite(t) && t > 0
    ? t > 1
      ? po(
          (e) => {
            e.setTime(Math.floor(e / t) * t);
          },
          (e, r) => {
            e.setTime(+e + r * t);
          },
          (e, r) => (r - e) / t,
        )
      : go
    : null
)),
  go.range;
const fo = po(
    (t) => {
      t.setTime(t - t.getMilliseconds());
    },
    (t, e) => {
      t.setTime(+t + e * oo);
    },
    (t, e) => (e - t) / oo,
    (t) => t.getUTCSeconds(),
  ),
  yo =
    (fo.range,
    po(
      (t) => {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * oo);
      },
      (t, e) => {
        t.setTime(+t + e * no);
      },
      (t, e) => (e - t) / no,
      (t) => t.getMinutes(),
    )),
  mo =
    (yo.range,
    po(
      (t) => {
        t.setUTCSeconds(0, 0);
      },
      (t, e) => {
        t.setTime(+t + e * no);
      },
      (t, e) => (e - t) / no,
      (t) => t.getUTCMinutes(),
    )),
  xo =
    (mo.range,
    po(
      (t) => {
        t.setTime(
          t - t.getMilliseconds() - t.getSeconds() * oo - t.getMinutes() * no,
        );
      },
      (t, e) => {
        t.setTime(+t + e * ao);
      },
      (t, e) => (e - t) / ao,
      (t) => t.getHours(),
    )),
  Co =
    (xo.range,
    po(
      (t) => {
        t.setUTCMinutes(0, 0, 0);
      },
      (t, e) => {
        t.setTime(+t + e * ao);
      },
      (t, e) => (e - t) / ao,
      (t) => t.getUTCHours(),
    )),
  bo =
    (Co.range,
    po(
      (t) => t.setHours(0, 0, 0, 0),
      (t, e) => t.setDate(t.getDate() + e),
      (t, e) =>
        (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * no) / so,
      (t) => t.getDate() - 1,
    )),
  ko =
    (bo.range,
    po(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCDate(t.getUTCDate() + e);
      },
      (t, e) => (e - t) / so,
      (t) => t.getUTCDate() - 1,
    )),
  wo =
    (ko.range,
    po(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCDate(t.getUTCDate() + e);
      },
      (t, e) => (e - t) / so,
      (t) => Math.floor(t / so),
    ));
function So(t) {
  return po(
    (e) => {
      e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
        e.setHours(0, 0, 0, 0);
    },
    (t, e) => {
      t.setDate(t.getDate() + 7 * e);
    },
    (t, e) =>
      (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * no) / lo,
  );
}
wo.range;
const To = So(0),
  Bo = So(1),
  vo = So(2),
  _o = So(3),
  Ao = So(4),
  Fo = So(5),
  Lo = So(6);
function Mo(t) {
  return po(
    (e) => {
      e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
        e.setUTCHours(0, 0, 0, 0);
    },
    (t, e) => {
      t.setUTCDate(t.getUTCDate() + 7 * e);
    },
    (t, e) => (e - t) / lo,
  );
}
To.range, Bo.range, vo.range, _o.range, Ao.range, Fo.range, Lo.range;
const $o = Mo(0),
  Eo = Mo(1),
  Oo = Mo(2),
  Do = Mo(3),
  Io = Mo(4),
  Ko = Mo(5),
  qo = Mo(6),
  Po =
    ($o.range,
    Eo.range,
    Oo.range,
    Do.range,
    Io.range,
    Ko.range,
    qo.range,
    po(
      (t) => {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setMonth(t.getMonth() + e);
      },
      (t, e) =>
        e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear()),
      (t) => t.getMonth(),
    )),
  Ro =
    (Po.range,
    po(
      (t) => {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCMonth(t.getUTCMonth() + e);
      },
      (t, e) =>
        e.getUTCMonth() -
        t.getUTCMonth() +
        12 * (e.getUTCFullYear() - t.getUTCFullYear()),
      (t) => t.getUTCMonth(),
    )),
  zo =
    (Ro.range,
    po(
      (t) => {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setFullYear(t.getFullYear() + e);
      },
      (t, e) => e.getFullYear() - t.getFullYear(),
      (t) => t.getFullYear(),
    ));
(zo.every = (t) =>
  isFinite((t = Math.floor(t))) && t > 0
    ? po(
        (e) => {
          e.setFullYear(Math.floor(e.getFullYear() / t) * t),
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0);
        },
        (e, r) => {
          e.setFullYear(e.getFullYear() + r * t);
        },
      )
    : null),
  zo.range;
const No = po(
  (t) => {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  },
  (t, e) => {
    t.setUTCFullYear(t.getUTCFullYear() + e);
  },
  (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
  (t) => t.getUTCFullYear(),
);
function Wo(t, e, r, i, o, n) {
  const a = [
    [fo, 1, oo],
    [fo, 5, 5e3],
    [fo, 15, 15e3],
    [fo, 30, 3e4],
    [n, 1, no],
    [n, 5, 3e5],
    [n, 15, 9e5],
    [n, 30, 18e5],
    [o, 1, ao],
    [o, 3, 108e5],
    [o, 6, 216e5],
    [o, 12, 432e5],
    [i, 1, so],
    [i, 2, 1728e5],
    [r, 1, lo],
    [e, 1, 2592e6],
    [e, 3, 7776e6],
    [t, 1, ho],
  ];
  function s(e, r, i) {
    const o = Math.abs(r - e) / i,
      n = Ki(([, , t]) => t).right(a, o);
    if (n === a.length) return t.every(Oi(e / ho, r / ho, i));
    if (0 === n) return go.every(Math.max(Oi(e, r, i), 1));
    const [s, l] = a[o / a[n - 1][2] < a[n][2] / o ? n - 1 : n];
    return s.every(l);
  }
  return [
    function (t, e, r) {
      const i = e < t;
      i && ([t, e] = [e, t]);
      const o = r && "function" == typeof r.range ? r : s(t, e, r),
        n = o ? o.range(t, +e + 1) : [];
      return i ? n.reverse() : n;
    },
    s,
  ];
}
(No.every = (t) =>
  isFinite((t = Math.floor(t))) && t > 0
    ? po(
        (e) => {
          e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0);
        },
        (e, r) => {
          e.setUTCFullYear(e.getUTCFullYear() + r * t);
        },
      )
    : null),
  No.range;
const [jo, Ho] = Wo(No, Ro, $o, wo, Co, mo),
  [Uo, Yo] = Wo(zo, Po, To, bo, xo, yo);
function Go(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Xo(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Vo(t, e, r) {
  return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
}
var Zo,
  Qo,
  Jo = { "-": "", _: " ", 0: "0" },
  tn = /^\s*\d+/,
  en = /^%/,
  rn = /[\\^$*+?|[\]().{}]/g;
function on(t, e, r) {
  var i = t < 0 ? "-" : "",
    o = (i ? -t : t) + "",
    n = o.length;
  return i + (n < r ? new Array(r - n + 1).join(e) + o : o);
}
function nn(t) {
  return t.replace(rn, "\\$&");
}
function an(t) {
  return new RegExp("^(?:" + t.map(nn).join("|") + ")", "i");
}
function sn(t) {
  return new Map(t.map((t, e) => [t.toLowerCase(), e]));
}
function ln(t, e, r) {
  var i = tn.exec(e.slice(r, r + 1));
  return i ? ((t.w = +i[0]), r + i[0].length) : -1;
}
function hn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 1));
  return i ? ((t.u = +i[0]), r + i[0].length) : -1;
}
function cn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.U = +i[0]), r + i[0].length) : -1;
}
function dn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.V = +i[0]), r + i[0].length) : -1;
}
function un(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.W = +i[0]), r + i[0].length) : -1;
}
function pn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 4));
  return i ? ((t.y = +i[0]), r + i[0].length) : -1;
}
function gn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), r + i[0].length) : -1;
}
function fn(t, e, r) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
  return i
    ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), r + i[0].length)
    : -1;
}
function yn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 1));
  return i ? ((t.q = 3 * i[0] - 3), r + i[0].length) : -1;
}
function mn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.m = i[0] - 1), r + i[0].length) : -1;
}
function xn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.d = +i[0]), r + i[0].length) : -1;
}
function Cn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 3));
  return i ? ((t.m = 0), (t.d = +i[0]), r + i[0].length) : -1;
}
function bn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.H = +i[0]), r + i[0].length) : -1;
}
function kn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.M = +i[0]), r + i[0].length) : -1;
}
function wn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 2));
  return i ? ((t.S = +i[0]), r + i[0].length) : -1;
}
function Sn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 3));
  return i ? ((t.L = +i[0]), r + i[0].length) : -1;
}
function Tn(t, e, r) {
  var i = tn.exec(e.slice(r, r + 6));
  return i ? ((t.L = Math.floor(i[0] / 1e3)), r + i[0].length) : -1;
}
function Bn(t, e, r) {
  var i = en.exec(e.slice(r, r + 1));
  return i ? r + i[0].length : -1;
}
function vn(t, e, r) {
  var i = tn.exec(e.slice(r));
  return i ? ((t.Q = +i[0]), r + i[0].length) : -1;
}
function _n(t, e, r) {
  var i = tn.exec(e.slice(r));
  return i ? ((t.s = +i[0]), r + i[0].length) : -1;
}
function An(t, e) {
  return on(t.getDate(), e, 2);
}
function Fn(t, e) {
  return on(t.getHours(), e, 2);
}
function Ln(t, e) {
  return on(t.getHours() % 12 || 12, e, 2);
}
function Mn(t, e) {
  return on(1 + bo.count(zo(t), t), e, 3);
}
function $n(t, e) {
  return on(t.getMilliseconds(), e, 3);
}
function En(t, e) {
  return $n(t, e) + "000";
}
function On(t, e) {
  return on(t.getMonth() + 1, e, 2);
}
function Dn(t, e) {
  return on(t.getMinutes(), e, 2);
}
function In(t, e) {
  return on(t.getSeconds(), e, 2);
}
function Kn(t) {
  var e = t.getDay();
  return 0 === e ? 7 : e;
}
function qn(t, e) {
  return on(To.count(zo(t) - 1, t), e, 2);
}
function Pn(t) {
  var e = t.getDay();
  return e >= 4 || 0 === e ? Ao(t) : Ao.ceil(t);
}
function Rn(t, e) {
  return (t = Pn(t)), on(Ao.count(zo(t), t) + (4 === zo(t).getDay()), e, 2);
}
function zn(t) {
  return t.getDay();
}
function Nn(t, e) {
  return on(Bo.count(zo(t) - 1, t), e, 2);
}
function Wn(t, e) {
  return on(t.getFullYear() % 100, e, 2);
}
function jn(t, e) {
  return on((t = Pn(t)).getFullYear() % 100, e, 2);
}
function Hn(t, e) {
  return on(t.getFullYear() % 1e4, e, 4);
}
function Un(t, e) {
  var r = t.getDay();
  return on(
    (t = r >= 4 || 0 === r ? Ao(t) : Ao.ceil(t)).getFullYear() % 1e4,
    e,
    4,
  );
}
function Yn(t) {
  var e = t.getTimezoneOffset();
  return (
    (e > 0 ? "-" : ((e *= -1), "+")) +
    on((e / 60) | 0, "0", 2) +
    on(e % 60, "0", 2)
  );
}
function Gn(t, e) {
  return on(t.getUTCDate(), e, 2);
}
function Xn(t, e) {
  return on(t.getUTCHours(), e, 2);
}
function Vn(t, e) {
  return on(t.getUTCHours() % 12 || 12, e, 2);
}
function Zn(t, e) {
  return on(1 + ko.count(No(t), t), e, 3);
}
function Qn(t, e) {
  return on(t.getUTCMilliseconds(), e, 3);
}
function Jn(t, e) {
  return Qn(t, e) + "000";
}
function ta(t, e) {
  return on(t.getUTCMonth() + 1, e, 2);
}
function ea(t, e) {
  return on(t.getUTCMinutes(), e, 2);
}
function ra(t, e) {
  return on(t.getUTCSeconds(), e, 2);
}
function ia(t) {
  var e = t.getUTCDay();
  return 0 === e ? 7 : e;
}
function oa(t, e) {
  return on($o.count(No(t) - 1, t), e, 2);
}
function na(t) {
  var e = t.getUTCDay();
  return e >= 4 || 0 === e ? Io(t) : Io.ceil(t);
}
function aa(t, e) {
  return (t = na(t)), on(Io.count(No(t), t) + (4 === No(t).getUTCDay()), e, 2);
}
function sa(t) {
  return t.getUTCDay();
}
function la(t, e) {
  return on(Eo.count(No(t) - 1, t), e, 2);
}
function ha(t, e) {
  return on(t.getUTCFullYear() % 100, e, 2);
}
function ca(t, e) {
  return on((t = na(t)).getUTCFullYear() % 100, e, 2);
}
function da(t, e) {
  return on(t.getUTCFullYear() % 1e4, e, 4);
}
function ua(t, e) {
  var r = t.getUTCDay();
  return on(
    (t = r >= 4 || 0 === r ? Io(t) : Io.ceil(t)).getUTCFullYear() % 1e4,
    e,
    4,
  );
}
function pa() {
  return "+0000";
}
function ga() {
  return "%";
}
function fa(t) {
  return +t;
}
function ya(t) {
  return Math.floor(+t / 1e3);
}
function ma(t) {
  return new Date(t);
}
function xa(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function Ca(t, e, r, i, o, n, a, s, l, h) {
  var c = eo(),
    d = c.invert,
    u = c.domain,
    p = h(".%L"),
    g = h(":%S"),
    f = h("%I:%M"),
    y = h("%I %p"),
    m = h("%a %d"),
    x = h("%b %d"),
    C = h("%B"),
    b = h("%Y");
  function k(t) {
    return (
      l(t) < t
        ? p
        : s(t) < t
          ? g
          : a(t) < t
            ? f
            : n(t) < t
              ? y
              : i(t) < t
                ? o(t) < t
                  ? m
                  : x
                : r(t) < t
                  ? C
                  : b
    )(t);
  }
  return (
    (c.invert = function (t) {
      return new Date(d(t));
    }),
    (c.domain = function (t) {
      return arguments.length ? u(Array.from(t, xa)) : u().map(ma);
    }),
    (c.ticks = function (e) {
      var r = u();
      return t(r[0], r[r.length - 1], e ?? 10);
    }),
    (c.tickFormat = function (t, e) {
      return null == e ? k : h(e);
    }),
    (c.nice = function (t) {
      var r = u();
      return (
        (t && "function" == typeof t.range) ||
          (t = e(r[0], r[r.length - 1], t ?? 10)),
        t
          ? u(
              (function (t, e) {
                var r,
                  i = 0,
                  o = (t = t.slice()).length - 1,
                  n = t[i],
                  a = t[o];
                return (
                  a < n &&
                    ((r = i), (i = o), (o = r), (r = n), (n = a), (a = r)),
                  (t[i] = e.floor(n)),
                  (t[o] = e.ceil(a)),
                  t
                );
              })(r, t),
            )
          : c
      );
    }),
    (c.copy = function () {
      return to(c, Ca(t, e, r, i, o, n, a, s, l, h));
    }),
    c
  );
}
function ba() {
  return wi.apply(
    Ca(Uo, Yo, zo, Po, To, bo, xo, yo, fo, Qo).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
(Zo = (function (t) {
  var e = t.dateTime,
    r = t.date,
    i = t.time,
    o = t.periods,
    n = t.days,
    a = t.shortDays,
    s = t.months,
    l = t.shortMonths,
    h = an(o),
    c = sn(o),
    d = an(n),
    u = sn(n),
    p = an(a),
    g = sn(a),
    f = an(s),
    y = sn(s),
    m = an(l),
    x = sn(l),
    C = {
      a: function (t) {
        return a[t.getDay()];
      },
      A: function (t) {
        return n[t.getDay()];
      },
      b: function (t) {
        return l[t.getMonth()];
      },
      B: function (t) {
        return s[t.getMonth()];
      },
      c: null,
      d: An,
      e: An,
      f: En,
      g: jn,
      G: Un,
      H: Fn,
      I: Ln,
      j: Mn,
      L: $n,
      m: On,
      M: Dn,
      p: function (t) {
        return o[+(t.getHours() >= 12)];
      },
      q: function (t) {
        return 1 + ~~(t.getMonth() / 3);
      },
      Q: fa,
      s: ya,
      S: In,
      u: Kn,
      U: qn,
      V: Rn,
      w: zn,
      W: Nn,
      x: null,
      X: null,
      y: Wn,
      Y: Hn,
      Z: Yn,
      "%": ga,
    },
    b = {
      a: function (t) {
        return a[t.getUTCDay()];
      },
      A: function (t) {
        return n[t.getUTCDay()];
      },
      b: function (t) {
        return l[t.getUTCMonth()];
      },
      B: function (t) {
        return s[t.getUTCMonth()];
      },
      c: null,
      d: Gn,
      e: Gn,
      f: Jn,
      g: ca,
      G: ua,
      H: Xn,
      I: Vn,
      j: Zn,
      L: Qn,
      m: ta,
      M: ea,
      p: function (t) {
        return o[+(t.getUTCHours() >= 12)];
      },
      q: function (t) {
        return 1 + ~~(t.getUTCMonth() / 3);
      },
      Q: fa,
      s: ya,
      S: ra,
      u: ia,
      U: oa,
      V: aa,
      w: sa,
      W: la,
      x: null,
      X: null,
      y: ha,
      Y: da,
      Z: pa,
      "%": ga,
    },
    k = {
      a: function (t, e, r) {
        var i = p.exec(e.slice(r));
        return i ? ((t.w = g.get(i[0].toLowerCase())), r + i[0].length) : -1;
      },
      A: function (t, e, r) {
        var i = d.exec(e.slice(r));
        return i ? ((t.w = u.get(i[0].toLowerCase())), r + i[0].length) : -1;
      },
      b: function (t, e, r) {
        var i = m.exec(e.slice(r));
        return i ? ((t.m = x.get(i[0].toLowerCase())), r + i[0].length) : -1;
      },
      B: function (t, e, r) {
        var i = f.exec(e.slice(r));
        return i ? ((t.m = y.get(i[0].toLowerCase())), r + i[0].length) : -1;
      },
      c: function (t, r, i) {
        return T(t, e, r, i);
      },
      d: xn,
      e: xn,
      f: Tn,
      g: gn,
      G: pn,
      H: bn,
      I: bn,
      j: Cn,
      L: Sn,
      m: mn,
      M: kn,
      p: function (t, e, r) {
        var i = h.exec(e.slice(r));
        return i ? ((t.p = c.get(i[0].toLowerCase())), r + i[0].length) : -1;
      },
      q: yn,
      Q: vn,
      s: _n,
      S: wn,
      u: hn,
      U: cn,
      V: dn,
      w: ln,
      W: un,
      x: function (t, e, i) {
        return T(t, r, e, i);
      },
      X: function (t, e, r) {
        return T(t, i, e, r);
      },
      y: gn,
      Y: pn,
      Z: fn,
      "%": Bn,
    };
  function w(t, e) {
    return function (r) {
      var i,
        o,
        n,
        a = [],
        s = -1,
        l = 0,
        h = t.length;
      for (r instanceof Date || (r = new Date(+r)); ++s < h; )
        37 === t.charCodeAt(s) &&
          (a.push(t.slice(l, s)),
          null != (o = Jo[(i = t.charAt(++s))])
            ? (i = t.charAt(++s))
            : (o = "e" === i ? " " : "0"),
          (n = e[i]) && (i = n(r, o)),
          a.push(i),
          (l = s + 1));
      return a.push(t.slice(l, s)), a.join("");
    };
  }
  function S(t, e) {
    return function (r) {
      var i,
        o,
        n = Vo(1900, void 0, 1);
      if (T(n, t, (r += ""), 0) != r.length) return null;
      if ("Q" in n) return new Date(n.Q);
      if ("s" in n) return new Date(1e3 * n.s + ("L" in n ? n.L : 0));
      if (
        (e && !("Z" in n) && (n.Z = 0),
        "p" in n && (n.H = (n.H % 12) + 12 * n.p),
        void 0 === n.m && (n.m = "q" in n ? n.q : 0),
        "V" in n)
      ) {
        if (n.V < 1 || n.V > 53) return null;
        "w" in n || (n.w = 1),
          "Z" in n
            ? ((o = (i = Xo(Vo(n.y, 0, 1))).getUTCDay()),
              (i = o > 4 || 0 === o ? Eo.ceil(i) : Eo(i)),
              (i = ko.offset(i, 7 * (n.V - 1))),
              (n.y = i.getUTCFullYear()),
              (n.m = i.getUTCMonth()),
              (n.d = i.getUTCDate() + ((n.w + 6) % 7)))
            : ((o = (i = Go(Vo(n.y, 0, 1))).getDay()),
              (i = o > 4 || 0 === o ? Bo.ceil(i) : Bo(i)),
              (i = bo.offset(i, 7 * (n.V - 1))),
              (n.y = i.getFullYear()),
              (n.m = i.getMonth()),
              (n.d = i.getDate() + ((n.w + 6) % 7)));
      } else
        ("W" in n || "U" in n) &&
          ("w" in n || (n.w = "u" in n ? n.u % 7 : "W" in n ? 1 : 0),
          (o =
            "Z" in n
              ? Xo(Vo(n.y, 0, 1)).getUTCDay()
              : Go(Vo(n.y, 0, 1)).getDay()),
          (n.m = 0),
          (n.d =
            "W" in n
              ? ((n.w + 6) % 7) + 7 * n.W - ((o + 5) % 7)
              : n.w + 7 * n.U - ((o + 6) % 7)));
      return "Z" in n
        ? ((n.H += (n.Z / 100) | 0), (n.M += n.Z % 100), Xo(n))
        : Go(n);
    };
  }
  function T(t, e, r, i) {
    for (var o, n, a = 0, s = e.length, l = r.length; a < s; ) {
      if (i >= l) return -1;
      if (37 === (o = e.charCodeAt(a++))) {
        if (
          ((o = e.charAt(a++)),
          !(n = k[o in Jo ? e.charAt(a++) : o]) || (i = n(t, r, i)) < 0)
        )
          return -1;
      } else if (o != r.charCodeAt(i++)) return -1;
    }
    return i;
  }
  return (
    (C.x = w(r, C)),
    (C.X = w(i, C)),
    (C.c = w(e, C)),
    (b.x = w(r, b)),
    (b.X = w(i, b)),
    (b.c = w(e, b)),
    {
      format: function (t) {
        var e = w((t += ""), C);
        return (
          (e.toString = function () {
            return t;
          }),
          e
        );
      },
      parse: function (t) {
        var e = S((t += ""), !1);
        return (
          (e.toString = function () {
            return t;
          }),
          e
        );
      },
      utcFormat: function (t) {
        var e = w((t += ""), b);
        return (
          (e.toString = function () {
            return t;
          }),
          e
        );
      },
      utcParse: function (t) {
        var e = S((t += ""), !0);
        return (
          (e.toString = function () {
            return t;
          }),
          e
        );
      },
    }
  );
})({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
})),
  (Qo = Zo.format),
  Zo.parse,
  Zo.utcFormat,
  Zo.utcParse;
const ka = (function (t) {
  for (var e = new Array(10), r = 0; r < 10; )
    e[r] = "#" + t.slice(6 * r, 6 * ++r);
  return e;
})("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function wa(t) {
  return "string" == typeof t
    ? new Tt([[document.querySelector(t)]], [document.documentElement])
    : new Tt([[t]], St);
}
function Sa(t) {
  return function () {
    return t;
  };
}
const Ta = Math.abs,
  Ba = Math.atan2,
  va = Math.cos,
  _a = Math.max,
  Aa = Math.min,
  Fa = Math.sin,
  La = Math.sqrt,
  Ma = 1e-12,
  $a = Math.PI,
  Ea = $a / 2,
  Oa = 2 * $a;
function Da(t) {
  return t >= 1 ? Ea : t <= -1 ? -Ea : Math.asin(t);
}
const Ia = Math.PI,
  Ka = 2 * Ia,
  qa = 1e-6,
  Pa = Ka - qa;
function Ra(t) {
  this._ += t[0];
  for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
}
class za {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append =
        null == t
          ? Ra
          : (function (t) {
              let e = Math.floor(t);
              if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
              if (e > 15) return Ra;
              const r = 10 ** e;
              return function (t) {
                this._ += t[0];
                for (let e = 1, i = t.length; e < i; ++e)
                  this._ += Math.round(arguments[e] * r) / r + t[e];
              };
            })(t));
  }
  moveTo(t, e) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
  }
  closePath() {
    null !== this._x1 &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, e) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
  }
  quadraticCurveTo(t, e, r, i) {
    this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, e, r, i, o, n) {
    this
      ._append`C${+t},${+e},${+r},${+i},${(this._x1 = +o)},${(this._y1 = +n)}`;
  }
  arcTo(t, e, r, i, o) {
    if (((t = +t), (e = +e), (r = +r), (i = +i), (o = +o) < 0))
      throw new Error(`negative radius: ${o}`);
    let n = this._x1,
      a = this._y1,
      s = r - t,
      l = i - e,
      h = n - t,
      c = a - e,
      d = h * h + c * c;
    if (null === this._x1) this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
    else if (d > qa)
      if (Math.abs(c * s - l * h) > qa && o) {
        let u = r - n,
          p = i - a,
          g = s * s + l * l,
          f = u * u + p * p,
          y = Math.sqrt(g),
          m = Math.sqrt(d),
          x = o * Math.tan((Ia - Math.acos((g + d - f) / (2 * y * m))) / 2),
          C = x / m,
          b = x / y;
        Math.abs(C - 1) > qa && this._append`L${t + C * h},${e + C * c}`,
          this
            ._append`A${o},${o},0,0,${+(c * u > h * p)},${(this._x1 = t + b * s)},${(this._y1 = e + b * l)}`;
      } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
  }
  arc(t, e, r, i, o, n) {
    if (((t = +t), (e = +e), (n = !!n), (r = +r) < 0))
      throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(i),
      s = r * Math.sin(i),
      l = t + a,
      h = e + s,
      c = 1 ^ n,
      d = n ? i - o : o - i;
    null === this._x1
      ? this._append`M${l},${h}`
      : (Math.abs(this._x1 - l) > qa || Math.abs(this._y1 - h) > qa) &&
        this._append`L${l},${h}`,
      r &&
        (d < 0 && (d = (d % Ka) + Ka),
        d > Pa
          ? this
              ._append`A${r},${r},0,1,${c},${t - a},${e - s}A${r},${r},0,1,${c},${(this._x1 = l)},${(this._y1 = h)}`
          : d > qa &&
            this
              ._append`A${r},${r},0,${+(d >= Ia)},${c},${(this._x1 = t + r * Math.cos(o))},${(this._y1 = e + r * Math.sin(o))}`);
  }
  rect(t, e, r, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${(r = +r)}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Na(t) {
  let e = 3;
  return (
    (t.digits = function (r) {
      if (!arguments.length) return e;
      if (null == r) e = null;
      else {
        const t = Math.floor(r);
        if (!(t >= 0)) throw new RangeError(`invalid digits: ${r}`);
        e = t;
      }
      return t;
    }),
    () => new za(e)
  );
}
function Wa(t) {
  return t.innerRadius;
}
function ja(t) {
  return t.outerRadius;
}
function Ha(t) {
  return t.startAngle;
}
function Ua(t) {
  return t.endAngle;
}
function Ya(t) {
  return t && t.padAngle;
}
function Ga(t, e, r, i, o, n, a) {
  var s = t - r,
    l = e - i,
    h = (a ? n : -n) / La(s * s + l * l),
    c = h * l,
    d = -h * s,
    u = t + c,
    p = e + d,
    g = r + c,
    f = i + d,
    y = (u + g) / 2,
    m = (p + f) / 2,
    x = g - u,
    C = f - p,
    b = x * x + C * C,
    k = o - n,
    w = u * f - g * p,
    S = (C < 0 ? -1 : 1) * La(_a(0, k * k * b - w * w)),
    T = (w * C - x * S) / b,
    B = (-w * x - C * S) / b,
    v = (w * C + x * S) / b,
    _ = (-w * x + C * S) / b,
    A = T - y,
    F = B - m,
    L = v - y,
    M = _ - m;
  return (
    A * A + F * F > L * L + M * M && ((T = v), (B = _)),
    {
      cx: T,
      cy: B,
      x01: -c,
      y01: -d,
      x11: T * (o / k - 1),
      y11: B * (o / k - 1),
    }
  );
}
function Xa() {
  var t = Wa,
    e = ja,
    r = Sa(0),
    i = null,
    o = Ha,
    n = Ua,
    a = Ya,
    s = null,
    l = Na(h);
  function h() {
    var h,
      c,
      d,
      u = +t.apply(this, arguments),
      p = +e.apply(this, arguments),
      g = o.apply(this, arguments) - Ea,
      f = n.apply(this, arguments) - Ea,
      y = Ta(f - g),
      m = f > g;
    if ((s || (s = h = l()), p < u && ((c = p), (p = u), (u = c)), p > Ma))
      if (y > Oa - Ma)
        s.moveTo(p * va(g), p * Fa(g)),
          s.arc(0, 0, p, g, f, !m),
          u > Ma && (s.moveTo(u * va(f), u * Fa(f)), s.arc(0, 0, u, f, g, m));
      else {
        var x,
          C,
          b = g,
          k = f,
          w = g,
          S = f,
          T = y,
          B = y,
          v = a.apply(this, arguments) / 2,
          _ = v > Ma && (i ? +i.apply(this, arguments) : La(u * u + p * p)),
          A = Aa(Ta(p - u) / 2, +r.apply(this, arguments)),
          F = A,
          L = A;
        if (_ > Ma) {
          var M = Da((_ / u) * Fa(v)),
            $ = Da((_ / p) * Fa(v));
          (T -= 2 * M) > Ma
            ? ((w += M *= m ? 1 : -1), (S -= M))
            : ((T = 0), (w = S = (g + f) / 2)),
            (B -= 2 * $) > Ma
              ? ((b += $ *= m ? 1 : -1), (k -= $))
              : ((B = 0), (b = k = (g + f) / 2));
        }
        var E = p * va(b),
          O = p * Fa(b),
          D = u * va(S),
          I = u * Fa(S);
        if (A > Ma) {
          var K,
            q = p * va(k),
            P = p * Fa(k),
            R = u * va(w),
            z = u * Fa(w);
          if (y < $a)
            if (
              (K = (function (t, e, r, i, o, n, a, s) {
                var l = r - t,
                  h = i - e,
                  c = a - o,
                  d = s - n,
                  u = d * l - c * h;
                if (!(u * u < Ma))
                  return [
                    t + (u = (c * (e - n) - d * (t - o)) / u) * l,
                    e + u * h,
                  ];
              })(E, O, R, z, q, P, D, I))
            ) {
              var N = E - K[0],
                W = O - K[1],
                j = q - K[0],
                H = P - K[1],
                U =
                  1 /
                  Fa(
                    ((d =
                      (N * j + W * H) /
                      (La(N * N + W * W) * La(j * j + H * H))) > 1
                      ? 0
                      : d < -1
                        ? $a
                        : Math.acos(d)) / 2,
                  ),
                Y = La(K[0] * K[0] + K[1] * K[1]);
              (F = Aa(A, (u - Y) / (U - 1))), (L = Aa(A, (p - Y) / (U + 1)));
            } else F = L = 0;
        }
        B > Ma
          ? L > Ma
            ? ((x = Ga(R, z, E, O, p, L, m)),
              (C = Ga(q, P, D, I, p, L, m)),
              s.moveTo(x.cx + x.x01, x.cy + x.y01),
              L < A
                ? s.arc(x.cx, x.cy, L, Ba(x.y01, x.x01), Ba(C.y01, C.x01), !m)
                : (s.arc(x.cx, x.cy, L, Ba(x.y01, x.x01), Ba(x.y11, x.x11), !m),
                  s.arc(
                    0,
                    0,
                    p,
                    Ba(x.cy + x.y11, x.cx + x.x11),
                    Ba(C.cy + C.y11, C.cx + C.x11),
                    !m,
                  ),
                  s.arc(C.cx, C.cy, L, Ba(C.y11, C.x11), Ba(C.y01, C.x01), !m)))
            : (s.moveTo(E, O), s.arc(0, 0, p, b, k, !m))
          : s.moveTo(E, O),
          u > Ma && T > Ma
            ? F > Ma
              ? ((x = Ga(D, I, q, P, u, -F, m)),
                (C = Ga(E, O, R, z, u, -F, m)),
                s.lineTo(x.cx + x.x01, x.cy + x.y01),
                F < A
                  ? s.arc(x.cx, x.cy, F, Ba(x.y01, x.x01), Ba(C.y01, C.x01), !m)
                  : (s.arc(
                      x.cx,
                      x.cy,
                      F,
                      Ba(x.y01, x.x01),
                      Ba(x.y11, x.x11),
                      !m,
                    ),
                    s.arc(
                      0,
                      0,
                      u,
                      Ba(x.cy + x.y11, x.cx + x.x11),
                      Ba(C.cy + C.y11, C.cx + C.x11),
                      m,
                    ),
                    s.arc(
                      C.cx,
                      C.cy,
                      F,
                      Ba(C.y11, C.x11),
                      Ba(C.y01, C.x01),
                      !m,
                    )))
              : s.arc(0, 0, u, S, w, m)
            : s.lineTo(D, I);
      }
    else s.moveTo(0, 0);
    if ((s.closePath(), h)) return (s = null), h + "" || null;
  }
  return (
    (h.centroid = function () {
      var r = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
        i =
          (+o.apply(this, arguments) + +n.apply(this, arguments)) / 2 - $a / 2;
      return [va(i) * r, Fa(i) * r];
    }),
    (h.innerRadius = function (e) {
      return arguments.length
        ? ((t = "function" == typeof e ? e : Sa(+e)), h)
        : t;
    }),
    (h.outerRadius = function (t) {
      return arguments.length
        ? ((e = "function" == typeof t ? t : Sa(+t)), h)
        : e;
    }),
    (h.cornerRadius = function (t) {
      return arguments.length
        ? ((r = "function" == typeof t ? t : Sa(+t)), h)
        : r;
    }),
    (h.padRadius = function (t) {
      return arguments.length
        ? ((i = null == t ? null : "function" == typeof t ? t : Sa(+t)), h)
        : i;
    }),
    (h.startAngle = function (t) {
      return arguments.length
        ? ((o = "function" == typeof t ? t : Sa(+t)), h)
        : o;
    }),
    (h.endAngle = function (t) {
      return arguments.length
        ? ((n = "function" == typeof t ? t : Sa(+t)), h)
        : n;
    }),
    (h.padAngle = function (t) {
      return arguments.length
        ? ((a = "function" == typeof t ? t : Sa(+t)), h)
        : a;
    }),
    (h.context = function (t) {
      return arguments.length ? ((s = t ?? null), h) : s;
    }),
    h
  );
}
function Va(t) {
  return "object" == typeof t && "length" in t ? t : Array.from(t);
}
function Za(t) {
  this._context = t;
}
function Qa(t) {
  return new Za(t);
}
function Ja(t) {
  return t[0];
}
function ts(t) {
  return t[1];
}
function es(t, e) {
  var r = Sa(!0),
    i = null,
    o = Qa,
    n = null,
    a = Na(s);
  function s(s) {
    var l,
      h,
      c,
      d = (s = Va(s)).length,
      u = !1;
    for (null == i && (n = o((c = a()))), l = 0; l <= d; ++l)
      !(l < d && r((h = s[l]), l, s)) === u &&
        ((u = !u) ? n.lineStart() : n.lineEnd()),
        u && n.point(+t(h, l, s), +e(h, l, s));
    if (c) return (n = null), c + "" || null;
  }
  return (
    (t = "function" == typeof t ? t : void 0 === t ? Ja : Sa(t)),
    (e = "function" == typeof e ? e : void 0 === e ? ts : Sa(e)),
    (s.x = function (e) {
      return arguments.length
        ? ((t = "function" == typeof e ? e : Sa(+e)), s)
        : t;
    }),
    (s.y = function (t) {
      return arguments.length
        ? ((e = "function" == typeof t ? t : Sa(+t)), s)
        : e;
    }),
    (s.defined = function (t) {
      return arguments.length
        ? ((r = "function" == typeof t ? t : Sa(!!t)), s)
        : r;
    }),
    (s.curve = function (t) {
      return arguments.length ? ((o = t), null != i && (n = o(i)), s) : o;
    }),
    (s.context = function (t) {
      return arguments.length
        ? (null == t ? (i = n = null) : (n = o((i = t))), s)
        : i;
    }),
    s
  );
}
function rs(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function is(t) {
  return t;
}
function os() {
  var t = is,
    e = rs,
    r = null,
    i = Sa(0),
    o = Sa(Oa),
    n = Sa(0);
  function a(a) {
    var s,
      l,
      h,
      c,
      d,
      u = (a = Va(a)).length,
      p = 0,
      g = new Array(u),
      f = new Array(u),
      y = +i.apply(this, arguments),
      m = Math.min(Oa, Math.max(-Oa, o.apply(this, arguments) - y)),
      x = Math.min(Math.abs(m) / u, n.apply(this, arguments)),
      C = x * (m < 0 ? -1 : 1);
    for (s = 0; s < u; ++s)
      (d = f[(g[s] = s)] = +t(a[s], s, a)) > 0 && (p += d);
    for (
      null != e
        ? g.sort(function (t, r) {
            return e(f[t], f[r]);
          })
        : null != r &&
          g.sort(function (t, e) {
            return r(a[t], a[e]);
          }),
        s = 0,
        h = p ? (m - u * C) / p : 0;
      s < u;
      ++s, y = c
    )
      (l = g[s]),
        (c = y + ((d = f[l]) > 0 ? d * h : 0) + C),
        (f[l] = {
          data: a[l],
          index: s,
          value: d,
          startAngle: y,
          endAngle: c,
          padAngle: x,
        });
    return f;
  }
  return (
    (a.value = function (e) {
      return arguments.length
        ? ((t = "function" == typeof e ? e : Sa(+e)), a)
        : t;
    }),
    (a.sortValues = function (t) {
      return arguments.length ? ((e = t), (r = null), a) : e;
    }),
    (a.sort = function (t) {
      return arguments.length ? ((r = t), (e = null), a) : r;
    }),
    (a.startAngle = function (t) {
      return arguments.length
        ? ((i = "function" == typeof t ? t : Sa(+t)), a)
        : i;
    }),
    (a.endAngle = function (t) {
      return arguments.length
        ? ((o = "function" == typeof t ? t : Sa(+t)), a)
        : o;
    }),
    (a.padAngle = function (t) {
      return arguments.length
        ? ((n = "function" == typeof t ? t : Sa(+t)), a)
        : n;
    }),
    a
  );
}
function ns() {}
function as(t, e, r) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + e) / 6,
    (t._y0 + 4 * t._y1 + r) / 6,
  );
}
function ss(t) {
  this._context = t;
}
function ls(t) {
  return new ss(t);
}
function hs(t) {
  this._context = t;
}
function cs(t) {
  return new hs(t);
}
function ds(t) {
  this._context = t;
}
function us(t) {
  return new ds(t);
}
Array.prototype.slice,
  (Za.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, e)
              : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(t, e);
      }
    },
  }),
  (ss.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          as(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, e)
              : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._context.lineTo(
              (5 * this._x0 + this._x1) / 6,
              (5 * this._y0 + this._y1) / 6,
            );
        default:
          as(this, t, e);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = e);
    },
  }),
  (hs.prototype = {
    areaStart: ns,
    areaEnd: ns,
    lineStart: function () {
      (this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
          NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        case 2:
          this._context.moveTo(
            (this._x2 + 2 * this._x3) / 3,
            (this._y2 + 2 * this._y3) / 3,
          ),
            this._context.lineTo(
              (this._x3 + 2 * this._x2) / 3,
              (this._y3 + 2 * this._y2) / 3,
            ),
            this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2),
            this.point(this._x3, this._y3),
            this.point(this._x4, this._y4);
      }
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          (this._point = 1), (this._x2 = t), (this._y2 = e);
          break;
        case 1:
          (this._point = 2), (this._x3 = t), (this._y3 = e);
          break;
        case 2:
          (this._point = 3),
            (this._x4 = t),
            (this._y4 = e),
            this._context.moveTo(
              (this._x0 + 4 * this._x1 + t) / 6,
              (this._y0 + 4 * this._y1 + e) / 6,
            );
          break;
        default:
          as(this, t, e);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = e);
    },
  }),
  (ds.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 3 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var r = (this._x0 + 4 * this._x1 + t) / 6,
            i = (this._y0 + 4 * this._y1 + e) / 6;
          this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
          break;
        case 3:
          this._point = 4;
        default:
          as(this, t, e);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = e);
    },
  });
class ps {
  constructor(t, e) {
    (this._context = t), (this._x = e);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (0 !== this._line && 1 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              e,
              t,
              e,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + e) / 2),
              t,
              this._y0,
              t,
              e,
            );
    }
    (this._x0 = t), (this._y0 = e);
  }
}
function gs(t) {
  return new ps(t, !0);
}
function fs(t) {
  return new ps(t, !1);
}
function ys(t, e) {
  (this._basis = new ss(t)), (this._beta = e);
}
ys.prototype = {
  lineStart: function () {
    (this._x = []), (this._y = []), this._basis.lineStart();
  },
  lineEnd: function () {
    var t = this._x,
      e = this._y,
      r = t.length - 1;
    if (r > 0)
      for (
        var i, o = t[0], n = e[0], a = t[r] - o, s = e[r] - n, l = -1;
        ++l <= r;

      )
        (i = l / r),
          this._basis.point(
            this._beta * t[l] + (1 - this._beta) * (o + i * a),
            this._beta * e[l] + (1 - this._beta) * (n + i * s),
          );
    (this._x = this._y = null), this._basis.lineEnd();
  },
  point: function (t, e) {
    this._x.push(+t), this._y.push(+e);
  },
};
const ms = (function t(e) {
  function r(t) {
    return 1 === e ? new ss(t) : new ys(t, e);
  }
  return (
    (r.beta = function (e) {
      return t(+e);
    }),
    r
  );
})(0.85);
function xs(t, e, r) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - e),
    t._y2 + t._k * (t._y1 - r),
    t._x2,
    t._y2,
  );
}
function Cs(t, e) {
  (this._context = t), (this._k = (1 - e) / 6);
}
Cs.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        xs(this, this._x1, this._y1);
    }
    (this._line || (0 !== this._line && 1 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        (this._point = 2), (this._x1 = t), (this._y1 = e);
        break;
      case 2:
        this._point = 3;
      default:
        xs(this, t, e);
    }
    (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = e);
  },
};
const bs = (function t(e) {
  function r(t) {
    return new Cs(t, e);
  }
  return (
    (r.tension = function (e) {
      return t(+e);
    }),
    r
  );
})(0);
function ks(t, e) {
  (this._context = t), (this._k = (1 - e) / 6);
}
ks.prototype = {
  areaStart: ns,
  areaEnd: ns,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      case 2:
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      case 3:
        this.point(this._x3, this._y3),
          this.point(this._x4, this._y4),
          this.point(this._x5, this._y5);
    }
  },
  point: function (t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        (this._point = 1), (this._x3 = t), (this._y3 = e);
        break;
      case 1:
        (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = e));
        break;
      case 2:
        (this._point = 3), (this._x5 = t), (this._y5 = e);
        break;
      default:
        xs(this, t, e);
    }
    (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = e);
  },
};
const ws = (function t(e) {
  function r(t) {
    return new ks(t, e);
  }
  return (
    (r.tension = function (e) {
      return t(+e);
    }),
    r
  );
})(0);
function Ss(t, e) {
  (this._context = t), (this._k = (1 - e) / 6);
}
Ss.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (0 !== this._line && 3 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, e) {
    switch (((t = +t), (e = +e), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        xs(this, t, e);
    }
    (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = e);
  },
};
const Ts = (function t(e) {
  function r(t) {
    return new Ss(t, e);
  }
  return (
    (r.tension = function (e) {
      return t(+e);
    }),
    r
  );
})(0);
function Bs(t, e, r) {
  var i = t._x1,
    o = t._y1,
    n = t._x2,
    a = t._y2;
  if (t._l01_a > Ma) {
    var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
      l = 3 * t._l01_a * (t._l01_a + t._l12_a);
    (i = (i * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l),
      (o = (o * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l);
  }
  if (t._l23_a > Ma) {
    var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
      c = 3 * t._l23_a * (t._l23_a + t._l12_a);
    (n = (n * h + t._x1 * t._l23_2a - e * t._l12_2a) / c),
      (a = (a * h + t._y1 * t._l23_2a - r * t._l12_2a) / c);
  }
  t._context.bezierCurveTo(i, o, n, a, t._x2, t._y2);
}
function vs(t, e) {
  (this._context = t), (this._alpha = e);
}
vs.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
    }
    (this._line || (0 !== this._line && 1 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, e) {
    if (((t = +t), (e = +e), this._point)) {
      var r = this._x2 - t,
        i = this._y2 - e;
      this._l23_a = Math.sqrt(
        (this._l23_2a = Math.pow(r * r + i * i, this._alpha)),
      );
    }
    switch (this._point) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Bs(this, t, e);
    }
    (this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = e);
  },
};
const _s = (function t(e) {
  function r(t) {
    return e ? new vs(t, e) : new Cs(t, 0);
  }
  return (
    (r.alpha = function (e) {
      return t(+e);
    }),
    r
  );
})(0.5);
function As(t, e) {
  (this._context = t), (this._alpha = e);
}
As.prototype = {
  areaStart: ns,
  areaEnd: ns,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._x5 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
      this._y5 =
        NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      case 2:
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      case 3:
        this.point(this._x3, this._y3),
          this.point(this._x4, this._y4),
          this.point(this._x5, this._y5);
    }
  },
  point: function (t, e) {
    if (((t = +t), (e = +e), this._point)) {
      var r = this._x2 - t,
        i = this._y2 - e;
      this._l23_a = Math.sqrt(
        (this._l23_2a = Math.pow(r * r + i * i, this._alpha)),
      );
    }
    switch (this._point) {
      case 0:
        (this._point = 1), (this._x3 = t), (this._y3 = e);
        break;
      case 1:
        (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = e));
        break;
      case 2:
        (this._point = 3), (this._x5 = t), (this._y5 = e);
        break;
      default:
        Bs(this, t, e);
    }
    (this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = e);
  },
};
const Fs = (function t(e) {
  function r(t) {
    return e ? new As(t, e) : new ks(t, 0);
  }
  return (
    (r.alpha = function (e) {
      return t(+e);
    }),
    r
  );
})(0.5);
function Ls(t, e) {
  (this._context = t), (this._alpha = e);
}
Ls.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
      (this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0);
  },
  lineEnd: function () {
    (this._line || (0 !== this._line && 3 === this._point)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (t, e) {
    if (((t = +t), (e = +e), this._point)) {
      var r = this._x2 - t,
        i = this._y2 - e;
      this._l23_a = Math.sqrt(
        (this._l23_2a = Math.pow(r * r + i * i, this._alpha)),
      );
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Bs(this, t, e);
    }
    (this._l01_a = this._l12_a),
      (this._l12_a = this._l23_a),
      (this._l01_2a = this._l12_2a),
      (this._l12_2a = this._l23_2a),
      (this._x0 = this._x1),
      (this._x1 = this._x2),
      (this._x2 = t),
      (this._y0 = this._y1),
      (this._y1 = this._y2),
      (this._y2 = e);
  },
};
const Ms = (function t(e) {
  function r(t) {
    return e ? new Ls(t, e) : new Ss(t, 0);
  }
  return (
    (r.alpha = function (e) {
      return t(+e);
    }),
    r
  );
})(0.5);
function $s(t) {
  this._context = t;
}
function Es(t) {
  return new $s(t);
}
function Os(t) {
  return t < 0 ? -1 : 1;
}
function Ds(t, e, r) {
  var i = t._x1 - t._x0,
    o = e - t._x1,
    n = (t._y1 - t._y0) / (i || (o < 0 && -0)),
    a = (r - t._y1) / (o || (i < 0 && -0)),
    s = (n * o + a * i) / (i + o);
  return (
    (Os(n) + Os(a)) * Math.min(Math.abs(n), Math.abs(a), 0.5 * Math.abs(s)) || 0
  );
}
function Is(t, e) {
  var r = t._x1 - t._x0;
  return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
}
function Ks(t, e, r) {
  var i = t._x0,
    o = t._y0,
    n = t._x1,
    a = t._y1,
    s = (n - i) / 3;
  t._context.bezierCurveTo(i + s, o + s * e, n - s, a - s * r, n, a);
}
function qs(t) {
  this._context = t;
}
function Ps(t) {
  this._context = new Rs(t);
}
function Rs(t) {
  this._context = t;
}
function zs(t) {
  return new qs(t);
}
function Ns(t) {
  return new Ps(t);
}
function Ws(t) {
  this._context = t;
}
function js(t) {
  var e,
    r,
    i = t.length - 1,
    o = new Array(i),
    n = new Array(i),
    a = new Array(i);
  for (o[0] = 0, n[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e)
    (o[e] = 1), (n[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
  for (
    o[i - 1] = 2, n[i - 1] = 7, a[i - 1] = 8 * t[i - 1] + t[i], e = 1;
    e < i;
    ++e
  )
    (r = o[e] / n[e - 1]), (n[e] -= r), (a[e] -= r * a[e - 1]);
  for (o[i - 1] = a[i - 1] / n[i - 1], e = i - 2; e >= 0; --e)
    o[e] = (a[e] - o[e + 1]) / n[e];
  for (n[i - 1] = (t[i] + o[i - 1]) / 2, e = 0; e < i - 1; ++e)
    n[e] = 2 * t[e + 1] - o[e + 1];
  return [o, n];
}
function Hs(t) {
  return new Ws(t);
}
function Us(t, e) {
  (this._context = t), (this._t = e);
}
function Ys(t) {
  return new Us(t, 0.5);
}
function Gs(t) {
  return new Us(t, 0);
}
function Xs(t) {
  return new Us(t, 1);
}
function Vs(t, e, r) {
  (this.k = t), (this.x = e), (this.y = r);
}
($s.prototype = {
  areaStart: ns,
  areaEnd: ns,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (t, e) {
    (t = +t),
      (e = +e),
      this._point
        ? this._context.lineTo(t, e)
        : ((this._point = 1), this._context.moveTo(t, e));
  },
}),
  (qs.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          Ks(this, this._t0, Is(this, this._t0));
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, e) {
      var r = NaN;
      if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3), Ks(this, Is(this, (r = Ds(this, t, e))), r);
            break;
          default:
            Ks(this, this._t0, (r = Ds(this, t, e)));
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = e),
          (this._t0 = r);
      }
    },
  }),
  ((Ps.prototype = Object.create(qs.prototype)).point = function (t, e) {
    qs.prototype.point.call(this, e, t);
  }),
  (Rs.prototype = {
    moveTo: function (t, e) {
      this._context.moveTo(e, t);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (t, e) {
      this._context.lineTo(e, t);
    },
    bezierCurveTo: function (t, e, r, i, o, n) {
      this._context.bezierCurveTo(e, t, i, r, n, o);
    },
  }),
  (Ws.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = []), (this._y = []);
    },
    lineEnd: function () {
      var t = this._x,
        e = this._y,
        r = t.length;
      if (r)
        if (
          (this._line
            ? this._context.lineTo(t[0], e[0])
            : this._context.moveTo(t[0], e[0]),
          2 === r)
        )
          this._context.lineTo(t[1], e[1]);
        else
          for (var i = js(t), o = js(e), n = 0, a = 1; a < r; ++n, ++a)
            this._context.bezierCurveTo(
              i[0][n],
              o[0][n],
              i[1][n],
              o[1][n],
              t[a],
              e[a],
            );
      (this._line || (0 !== this._line && 1 === r)) &&
        this._context.closePath(),
        (this._line = 1 - this._line),
        (this._x = this._y = null);
    },
    point: function (t, e) {
      this._x.push(+t), this._y.push(+e);
    },
  }),
  (Us.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
      0 < this._t &&
        this._t < 1 &&
        2 === this._point &&
        this._context.lineTo(this._x, this._y),
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
        this._line >= 0 &&
          ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (t, e) {
      switch (((t = +t), (e = +e), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, e)
              : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0)
            this._context.lineTo(this._x, e), this._context.lineTo(t, e);
          else {
            var r = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(r, this._y), this._context.lineTo(r, e);
          }
      }
      (this._x = t), (this._y = e);
    },
  }),
  (Vs.prototype = {
    constructor: Vs,
    scale: function (t) {
      return 1 === t ? this : new Vs(this.k * t, this.x, this.y);
    },
    translate: function (t, e) {
      return (0 === t) & (0 === e)
        ? this
        : new Vs(this.k, this.x + this.k * t, this.y + this.k * e);
    },
    apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      return t * this.k + this.x;
    },
    applyY: function (t) {
      return t * this.k + this.y;
    },
    invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return t
        .copy()
        .domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      return t
        .copy()
        .domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  }),
  new Vs(1, 0, 0),
  Vs.prototype;
