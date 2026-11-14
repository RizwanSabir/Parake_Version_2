// vendor/module-67728.js — webpack module 67728
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t),
  n.d(t, {
    arrow: () => Ve,
    autoPlacement: () => Be,
    autoUpdate: () => _e,
    computePosition: () => ke,
    detectOverflow: () => xe,
    flip: () => Fe,
    getOverflowAncestors: () => re,
    hide: () => ze,
    inline: () => He,
    limitShift: () => Le,
    offset: () => De,
    platform: () => be,
    shift: () => je,
    size: () => Ue,
    useFloating: () => Ne,
  });
const r = ["top", "right", "bottom", "left"],
  o = ["start", "end"],
  i = r.reduce((e, t) => e.concat(t, t + "-" + o[0], t + "-" + o[1]), []),
  a = Math.min,
  s = Math.max,
  l = Math.round,
  c = Math.floor,
  u = (e) => ({ x: e, y: e }),
  d = { left: "right", right: "left", bottom: "top", top: "bottom" };
function p(e, t, n) {
  return s(e, a(t, n));
}
function f(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function h(e) {
  return e.split("-")[0];
}
function m(e) {
  return e.split("-")[1];
}
function g(e) {
  return "x" === e ? "y" : "x";
}
function y(e) {
  return "y" === e ? "height" : "width";
}
function v(e) {
  const t = e[0];
  return "t" === t || "b" === t ? "y" : "x";
}
function b(e) {
  return g(v(e));
}
function S(e, t, n) {
  void 0 === n && (n = !1);
  const r = m(e),
    o = b(e),
    i = y(o);
  let a =
    "x" === o
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : "start" === r
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (a = k(a)), [a, k(a)];
}
function _(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const x = ["left", "right"],
  w = ["right", "left"],
  E = ["top", "bottom"],
  T = ["bottom", "top"];
function k(e) {
  const t = h(e);
  return d[t] + e.slice(t.length);
}
function C(e) {
  return "number" != typeof e
    ? (function (e) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...e };
      })(e)
    : { top: e, right: e, bottom: e, left: e };
}
function I(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function A(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = v(t),
    a = b(t),
    s = y(a),
    l = h(t),
    c = "y" === i,
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    p = r[s] / 2 - o[s] / 2;
  let f;
  switch (l) {
    case "top":
      f = { x: u, y: r.y - o.height };
      break;
    case "bottom":
      f = { x: u, y: r.y + r.height };
      break;
    case "right":
      f = { x: r.x + r.width, y: d };
      break;
    case "left":
      f = { x: r.x - o.width, y: d };
      break;
    default:
      f = { x: r.x, y: r.y };
  }
  switch (m(t)) {
    case "start":
      f[a] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      f[a] += p * (n && c ? -1 : 1);
  }
  return f;
}
async function O(e, t) {
  var n;
  void 0 === t && (t = {});
  const { x: r, y: o, platform: i, rects: a, elements: s, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: p = !1,
      padding: h = 0,
    } = f(t, e),
    m = C(h),
    g = s[p ? ("floating" === d ? "reference" : "floating") : d],
    y = I(
      await i.getClippingRect({
        element:
          null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) ||
          n
            ? g
            : g.contextElement ||
              (await (null == i.getDocumentElement
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      }),
    ),
    v =
      "floating" === d
        ? {
            x: r,
            y: o,
            width: a.floating.width,
            height: a.floating.height,
          }
        : a.reference,
    b = await (null == i.getOffsetParent
      ? void 0
      : i.getOffsetParent(s.floating)),
    S = ((await (null == i.isElement ? void 0 : i.isElement(b))) &&
      (await (null == i.getScale ? void 0 : i.getScale(b)))) || {
      x: 1,
      y: 1,
    },
    _ = I(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: v,
            offsetParent: b,
            strategy: l,
          })
        : v,
    );
  return {
    top: (y.top - _.top + m.top) / S.y,
    bottom: (_.bottom - y.bottom + m.bottom) / S.y,
    left: (y.left - _.left + m.left) / S.x,
    right: (_.right - y.right + m.right) / S.x,
  };
}
function R(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function M(e) {
  return r.some((t) => e[t] >= 0);
}
function P(e) {
  const t = a(...e.map((e) => e.left)),
    n = a(...e.map((e) => e.top));
  return {
    x: t,
    y: n,
    width: s(...e.map((e) => e.right)) - t,
    height: s(...e.map((e) => e.bottom)) - n,
  };
}
const N = new Set(["left", "top"]);
function D() {
  return "undefined" != typeof window;
}
function j(e) {
  return U(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function L(e) {
  var t;
  return (
    (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
    window
  );
}
function F(e) {
  var t;
  return null == (t = (U(e) ? e.ownerDocument : e.document) || window.document)
    ? void 0
    : t.documentElement;
}
function U(e) {
  return !!D() && (e instanceof Node || e instanceof L(e).Node);
}
function B(e) {
  return !!D() && (e instanceof Element || e instanceof L(e).Element);
}
function z(e) {
  return !!D() && (e instanceof HTMLElement || e instanceof L(e).HTMLElement);
}
function H(e) {
  return (
    !(!D() || "undefined" == typeof ShadowRoot) &&
    (e instanceof ShadowRoot || e instanceof L(e).ShadowRoot)
  );
}
function V(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = X(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    "inline" !== o &&
    "contents" !== o
  );
}
function q(e) {
  return /^(table|td|th)$/.test(j(e));
}
function G(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch (e) {}
  try {
    return e.matches(":modal");
  } catch (e) {
    return !1;
  }
}
const W = /transform|translate|scale|rotate|perspective|filter/,
  $ = /paint|layout|strict|content/,
  Y = (e) => !!e && "none" !== e;
let K;
function Z(e) {
  const t = B(e) ? X(e) : e;
  return (
    Y(t.transform) ||
    Y(t.translate) ||
    Y(t.scale) ||
    Y(t.rotate) ||
    Y(t.perspective) ||
    (!Q() && (Y(t.backdropFilter) || Y(t.filter))) ||
    W.test(t.willChange || "") ||
    $.test(t.contain || "")
  );
}
function Q() {
  return (
    null == K &&
      (K =
        "undefined" != typeof CSS &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    K
  );
}
function J(e) {
  return /^(html|body|#document)$/.test(j(e));
}
function X(e) {
  return L(e).getComputedStyle(e);
}
function ee(e) {
  return B(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function te(e) {
  if ("html" === j(e)) return e;
  const t = e.assignedSlot || e.parentNode || (H(e) && e.host) || F(e);
  return H(t) ? t.host : t;
}
function ne(e) {
  const t = te(e);
  return J(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : z(t) && V(t)
      ? t
      : ne(t);
}
function re(e, t, n) {
  var r;
  void 0 === t && (t = []), void 0 === n && (n = !0);
  const o = ne(e),
    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
    a = L(o);
  if (i) {
    const e = oe(a);
    return t.concat(
      a,
      a.visualViewport || [],
      V(o) ? o : [],
      e && n ? re(e) : [],
    );
  }
  return t.concat(o, re(o, [], n));
}
function oe(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ie(e) {
  const t = X(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = z(e),
    i = o ? e.offsetWidth : n,
    a = o ? e.offsetHeight : r,
    s = l(n) !== i || l(r) !== a;
  return s && ((n = i), (r = a)), { width: n, height: r, $: s };
}
function ae(e) {
  return B(e) ? e : e.contextElement;
}
function se(e) {
  const t = ae(e);
  if (!z(t)) return u(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = ie(t);
  let a = (i ? l(n.width) : n.width) / r,
    s = (i ? l(n.height) : n.height) / o;
  return (
    (a && Number.isFinite(a)) || (a = 1),
    (s && Number.isFinite(s)) || (s = 1),
    { x: a, y: s }
  );
}
const le = u(0);
function ce(e) {
  const t = L(e);
  return Q() && t.visualViewport
    ? {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop,
      }
    : le;
}
function ue(e, t, n, r) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  const o = e.getBoundingClientRect(),
    i = ae(e);
  let a = u(1);
  t && (r ? B(r) && (a = se(r)) : (a = se(e)));
  const s = (function (e, t, n) {
    return void 0 === t && (t = !1), !(!n || (t && n !== L(e))) && t;
  })(i, n, r)
    ? ce(i)
    : u(0);
  let l = (o.left + s.x) / a.x,
    c = (o.top + s.y) / a.y,
    d = o.width / a.x,
    p = o.height / a.y;
  if (i) {
    const e = L(i),
      t = r && B(r) ? L(r) : r;
    let n = e,
      o = oe(n);
    for (; o && r && t !== n; ) {
      const e = se(o),
        t = o.getBoundingClientRect(),
        r = X(o),
        i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
      (l *= e.x),
        (c *= e.y),
        (d *= e.x),
        (p *= e.y),
        (l += i),
        (c += a),
        (n = L(o)),
        (o = oe(n));
    }
  }
  return I({ width: d, height: p, x: l, y: c });
}
function de(e, t) {
  const n = ee(e).scrollLeft;
  return t ? t.left + n : ue(F(e)).left + n;
}
function pe(e, t) {
  const n = e.getBoundingClientRect();
  return {
    x: n.left + t.scrollLeft - de(e, n),
    y: n.top + t.scrollTop,
  };
}
function fe(e, t, n) {
  let r;
  if ("viewport" === t)
    r = (function (e, t) {
      const n = L(e),
        r = F(e),
        o = n.visualViewport;
      let i = r.clientWidth,
        a = r.clientHeight,
        s = 0,
        l = 0;
      if (o) {
        (i = o.width), (a = o.height);
        const e = Q();
        (!e || (e && "fixed" === t)) && ((s = o.offsetLeft), (l = o.offsetTop));
      }
      const c = de(r);
      if (c <= 0) {
        const e = r.ownerDocument,
          t = e.body,
          n = getComputedStyle(t),
          o =
            ("CSS1Compat" === e.compatMode &&
              parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
            0,
          a = Math.abs(r.clientWidth - t.clientWidth - o);
        a <= 25 && (i -= a);
      } else c <= 25 && (i += c);
      return { width: i, height: a, x: s, y: l };
    })(e, n);
  else if ("document" === t)
    r = (function (e) {
      const t = F(e),
        n = ee(e),
        r = e.ownerDocument.body,
        o = s(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = s(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
      let a = -n.scrollLeft + de(e);
      const l = -n.scrollTop;
      return (
        "rtl" === X(r).direction && (a += s(t.clientWidth, r.clientWidth) - o),
        { width: o, height: i, x: a, y: l }
      );
    })(F(e));
  else if (B(t))
    r = (function (e, t) {
      const n = ue(e, !0, "fixed" === t),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = z(e) ? se(e) : u(1);
      return {
        width: e.clientWidth * i.x,
        height: e.clientHeight * i.y,
        x: o * i.x,
        y: r * i.y,
      };
    })(t, n);
  else {
    const n = ce(e);
    r = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height,
    };
  }
  return I(r);
}
function he(e, t) {
  const n = te(e);
  return !(n === t || !B(n) || J(n)) && ("fixed" === X(n).position || he(n, t));
}
function me(e, t, n) {
  const r = z(t),
    o = F(t),
    i = "fixed" === n,
    a = ue(e, !0, i, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = u(0);
  function c() {
    l.x = de(o);
  }
  if (r || (!r && !i))
    if ((("body" !== j(t) || V(o)) && (s = ee(t)), r)) {
      const e = ue(t, !0, i, t);
      (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
    } else o && c();
  i && !r && o && c();
  const d = !o || r || i ? u(0) : pe(o, s);
  return {
    x: a.left + s.scrollLeft - l.x - d.x,
    y: a.top + s.scrollTop - l.y - d.y,
    width: a.width,
    height: a.height,
  };
}
function ge(e) {
  return "static" === X(e).position;
}
function ye(e, t) {
  if (!z(e) || "fixed" === X(e).position) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return F(e) === n && (n = n.ownerDocument.body), n;
}
function ve(e, t) {
  const n = L(e);
  if (G(e)) return n;
  if (!z(e)) {
    let t = te(e);
    for (; t && !J(t); ) {
      if (B(t) && !ge(t)) return t;
      t = te(t);
    }
    return n;
  }
  let r = ye(e, t);
  for (; r && q(r) && ge(r); ) r = ye(r, t);
  return r && J(r) && ge(r) && !Z(r)
    ? n
    : r ||
        (function (e) {
          let t = te(e);
          for (; z(t) && !J(t); ) {
            if (Z(t)) return t;
            if (G(t)) return null;
            t = te(t);
          }
          return null;
        })(e) ||
        n;
}
const be = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = "fixed" === o,
      a = F(r),
      s = !!t && G(t.floating);
    if (r === a || (s && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
      c = u(1);
    const d = u(0),
      p = z(r);
    if ((p || (!p && !i)) && (("body" !== j(r) || V(a)) && (l = ee(r)), p)) {
      const e = ue(r);
      (c = se(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
    }
    const f = !a || p || i ? u(0) : pe(a, l);
    return {
      width: n.width * c.x,
      height: n.height * c.y,
      x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
      y: n.y * c.y - l.scrollTop * c.y + d.y + f.y,
    };
  },
  getDocumentElement: F,
  getClippingRect: function (e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [
        ...("clippingAncestors" === n
          ? G(t)
            ? []
            : (function (e, t) {
                const n = t.get(e);
                if (n) return n;
                let r = re(e, [], !1).filter((e) => B(e) && "body" !== j(e)),
                  o = null;
                const i = "fixed" === X(e).position;
                let a = i ? te(e) : e;
                for (; B(a) && !J(a); ) {
                  const t = X(a),
                    n = Z(a);
                  n || "fixed" !== t.position || (o = null),
                    (
                      i
                        ? !n && !o
                        : (!n &&
                            "static" === t.position &&
                            o &&
                            ("absolute" === o.position ||
                              "fixed" === o.position)) ||
                          (V(a) && !n && he(e, a))
                    )
                      ? (r = r.filter((e) => e !== a))
                      : (o = t),
                    (a = te(a));
                }
                return t.set(e, r), r;
              })(t, this._c)
          : [].concat(n)),
        r,
      ],
      l = fe(t, i[0], o);
    let c = l.top,
      u = l.right,
      d = l.bottom,
      p = l.left;
    for (let e = 1; e < i.length; e++) {
      const n = fe(t, i[e], o);
      (c = s(n.top, c)),
        (u = a(n.right, u)),
        (d = a(n.bottom, d)),
        (p = s(n.left, p));
    }
    return { width: u - p, height: d - c, x: p, y: c };
  },
  getOffsetParent: ve,
  getElementRects: async function (e) {
    const t = this.getOffsetParent || ve,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: me(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  },
  getClientRects: function (e) {
    return Array.from(e.getClientRects());
  },
  getDimensions: function (e) {
    const { width: t, height: n } = ie(e);
    return { width: t, height: n };
  },
  getScale: se,
  isElement: B,
  isRTL: function (e) {
    return "rtl" === X(e).direction;
  },
};
function Se(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function _e(e, t, n, r) {
  void 0 === r && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = "function" == typeof ResizeObserver,
      layoutShift: u = "function" == typeof IntersectionObserver,
      animationFrame: d = !1,
    } = r,
    p = ae(e),
    f = o || i ? [...(p ? re(p) : []), ...(t ? re(t) : [])] : [];
  f.forEach((e) => {
    o && e.addEventListener("scroll", n, { passive: !0 }),
      i && e.addEventListener("resize", n);
  });
  const h =
    p && u
      ? (function (e, t) {
          let n,
            r = null;
          const o = F(e);
          function i() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
          }
          return (
            (function l(u, d) {
              void 0 === u && (u = !1), void 0 === d && (d = 1), i();
              const p = e.getBoundingClientRect(),
                { left: f, top: h, width: m, height: g } = p;
              if ((u || t(), !m || !g)) return;
              const y = {
                rootMargin:
                  -c(h) +
                  "px " +
                  -c(o.clientWidth - (f + m)) +
                  "px " +
                  -c(o.clientHeight - (h + g)) +
                  "px " +
                  -c(f) +
                  "px",
                threshold: s(0, a(1, d)) || 1,
              };
              let v = !0;
              function b(t) {
                const r = t[0].intersectionRatio;
                if (r !== d) {
                  if (!v) return l();
                  r
                    ? l(!1, r)
                    : (n = setTimeout(() => {
                        l(!1, 1e-7);
                      }, 1e3));
                }
                1 !== r || Se(p, e.getBoundingClientRect()) || l(), (v = !1);
              }
              try {
                r = new IntersectionObserver(b, {
                  ...y,
                  root: o.ownerDocument,
                });
              } catch (e) {
                r = new IntersectionObserver(b, y);
              }
              r.observe(e);
            })(!0),
            i
          );
        })(p, n)
      : null;
  let m,
    g = -1,
    y = null;
  l &&
    ((y = new ResizeObserver((e) => {
      let [r] = e;
      r &&
        r.target === p &&
        y &&
        t &&
        (y.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var e;
          null == (e = y) || e.observe(t);
        }))),
        n();
    })),
    p && !d && y.observe(p),
    t && y.observe(t));
  let v = d ? ue(e) : null;
  return (
    d &&
      (function t() {
        const r = ue(e);
        v && !Se(v, r) && n(), (v = r), (m = requestAnimationFrame(t));
      })(),
    n(),
    () => {
      var e;
      f.forEach((e) => {
        o && e.removeEventListener("scroll", n),
          i && e.removeEventListener("resize", n);
      }),
        null == h || h(),
        null == (e = y) || e.disconnect(),
        (y = null),
        d && cancelAnimationFrame(m);
    }
  );
}
const xe = O,
  we = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: a,
              initialPlacement: s,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: p,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: y = "none",
              flipAlignment: b = !0,
              ...C
            } = f(e, t);
          if (null != (n = i.arrow) && n.alignmentOffset) return {};
          const I = h(o),
            A = v(s),
            O = h(s) === s,
            R = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
            M =
              p ||
              (O || !b
                ? [k(s)]
                : (function (e) {
                    const t = k(e);
                    return [_(e), t, _(t)];
                  })(s)),
            P = "none" !== y;
          !p &&
            P &&
            M.push(
              ...(function (e, t, n, r) {
                const o = m(e);
                let i = (function (e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? (t ? w : x) : t ? x : w;
                    case "left":
                    case "right":
                      return t ? E : T;
                    default:
                      return [];
                  }
                })(h(e), "start" === n, r);
                return (
                  o &&
                    ((i = i.map((e) => e + "-" + o)),
                    t && (i = i.concat(i.map(_)))),
                  i
                );
              })(s, b, y, R),
            );
          const N = [s, ...M],
            D = await l.detectOverflow(t, C),
            j = [];
          let L = (null == (r = i.flip) ? void 0 : r.overflows) || [];
          if ((u && j.push(D[I]), d)) {
            const e = S(o, a, R);
            j.push(D[e[0]], D[e[1]]);
          }
          if (
            ((L = [...L, { placement: o, overflows: j }]),
            !j.every((e) => e <= 0))
          ) {
            var F, U;
            const e = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
              t = N[e];
            if (
              t &&
              ("alignment" !== d ||
                A === v(t) ||
                L.every((e) => v(e.placement) !== A || e.overflows[0] > 0))
            )
              return {
                data: { index: e, overflows: L },
                reset: { placement: t },
              };
            let n =
              null ==
              (U = L.filter((e) => e.overflows[0] <= 0).sort(
                (e, t) => e.overflows[1] - t.overflows[1],
              )[0])
                ? void 0
                : U.placement;
            if (!n)
              switch (g) {
                case "bestFit": {
                  var B;
                  const e =
                    null ==
                    (B = L.filter((e) => {
                      if (P) {
                        const t = v(e.placement);
                        return t === A || "y" === t;
                      }
                      return !0;
                    })
                      .map((e) => [
                        e.placement,
                        e.overflows
                          .filter((e) => e > 0)
                          .reduce((e, t) => e + t, 0),
                      ])
                      .sort((e, t) => e[1] - t[1])[0])
                      ? void 0
                      : B[0];
                  e && (n = e);
                  break;
                }
                case "initialPlacement":
                  n = s;
              }
            if (o !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  },
  Ee = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: c,
        } = t,
        { element: u, padding: d = 0 } = f(e, t) || {};
      if (null == u) return {};
      const h = C(d),
        g = { x: n, y: r },
        v = b(o),
        S = y(v),
        _ = await s.getDimensions(u),
        x = "y" === v,
        w = x ? "top" : "left",
        E = x ? "bottom" : "right",
        T = x ? "clientHeight" : "clientWidth",
        k = i.reference[S] + i.reference[v] - g[v] - i.floating[S],
        I = g[v] - i.reference[v],
        A = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(u));
      let O = A ? A[T] : 0;
      (O && (await (null == s.isElement ? void 0 : s.isElement(A)))) ||
        (O = l.floating[T] || i.floating[S]);
      const R = k / 2 - I / 2,
        M = O / 2 - _[S] / 2 - 1,
        P = a(h[w], M),
        N = a(h[E], M),
        D = P,
        j = O - _[S] - N,
        L = O / 2 - _[S] / 2 + R,
        F = p(D, L, j),
        U =
          !c.arrow &&
          null != m(o) &&
          L !== F &&
          i.reference[S] / 2 - (L < D ? P : N) - _[S] / 2 < 0,
        B = U ? (L < D ? L - D : L - j) : 0;
      return {
        [v]: g[v] + B,
        data: {
          [v]: F,
          centerOffset: L - F - B,
          ...(U && { alignmentOffset: B }),
        },
        reset: U,
      };
    },
  }),
  Te = function (e) {
    return (
      void 0 === e && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: a } = t,
            { offset: s = 0, mainAxis: l = !0, crossAxis: c = !0 } = f(e, t),
            u = { x: n, y: r },
            d = v(o),
            p = g(d);
          let m = u[p],
            y = u[d];
          const b = f(s, t),
            S =
              "number" == typeof b
                ? { mainAxis: b, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...b };
          if (l) {
            const e = "y" === p ? "height" : "width",
              t = i.reference[p] - i.floating[e] + S.mainAxis,
              n = i.reference[p] + i.reference[e] - S.mainAxis;
            m < t ? (m = t) : m > n && (m = n);
          }
          if (c) {
            var _, x;
            const e = "y" === p ? "width" : "height",
              t = N.has(h(o)),
              n =
                i.reference[d] -
                i.floating[e] +
                ((t && (null == (_ = a.offset) ? void 0 : _[d])) || 0) +
                (t ? 0 : S.crossAxis),
              r =
                i.reference[d] +
                i.reference[e] +
                (t ? 0 : (null == (x = a.offset) ? void 0 : x[d]) || 0) -
                (t ? S.crossAxis : 0);
            y < n ? (y = n) : y > r && (y = r);
          }
          return { [p]: m, [d]: y };
        },
      }
    );
  },
  ke = (e, t, n) => {
    const r = new Map(),
      o = { platform: be, ...n },
      i = { ...o.platform, _c: r };
    return (async (e, t, n) => {
      const {
          placement: r = "bottom",
          strategy: o = "absolute",
          middleware: i = [],
          platform: a,
        } = n,
        s = a.detectOverflow ? a : { ...a, detectOverflow: O },
        l = await (null == a.isRTL ? void 0 : a.isRTL(t));
      let c = await a.getElementRects({
          reference: e,
          floating: t,
          strategy: o,
        }),
        { x: u, y: d } = A(c, r, l),
        p = r,
        f = 0;
      const h = {};
      for (let n = 0; n < i.length; n++) {
        const m = i[n];
        if (!m) continue;
        const { name: g, fn: y } = m,
          {
            x: v,
            y: b,
            data: S,
            reset: _,
          } = await y({
            x: u,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: o,
            middlewareData: h,
            rects: c,
            platform: s,
            elements: { reference: e, floating: t },
          });
        (u = null != v ? v : u),
          (d = null != b ? b : d),
          (h[g] = { ...h[g], ...S }),
          _ &&
            f < 50 &&
            (f++,
            "object" == typeof _ &&
              (_.placement && (p = _.placement),
              _.rects &&
                (c =
                  !0 === _.rects
                    ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o,
                      })
                    : _.rects),
              ({ x: u, y: d } = A(c, p, l))),
            (n = -1));
      }
      return {
        x: u,
        y: d,
        placement: p,
        strategy: o,
        middlewareData: h,
      };
    })(e, t, { ...o, platform: i });
  };
var Ce = n(14041 /* vendor/module-14041 */),
  Ie = n(43144 /* vendor/module-43144 */),
  Ae = "undefined" != typeof document ? Ce.useLayoutEffect : function () {};
function Oe(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if ("function" == typeof e && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && "object" == typeof e) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; 0 !== r--; ) if (!Oe(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; 0 !== r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; 0 !== r--; ) {
      const n = o[r];
      if (!(("_owner" === n && e.$$typeof) || Oe(e[n], t[n]))) return !1;
    }
    return !0;
  }
  return e != e && t != t;
}
function Re(e) {
  return "undefined" == typeof window
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Me(e, t) {
  const n = Re(e);
  return Math.round(t * n) / n;
}
function Pe(e) {
  const t = Ce.useRef(e);
  return (
    Ae(() => {
      t.current = e;
    }),
    t
  );
}
function Ne(e) {
  void 0 === e && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: a } = {},
      transform: s = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [u, d] = Ce.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, f] = Ce.useState(r);
  Oe(p, r) || f(r);
  const [h, m] = Ce.useState(null),
    [g, y] = Ce.useState(null),
    v = Ce.useCallback((e) => {
      e !== x.current && ((x.current = e), m(e));
    }, []),
    b = Ce.useCallback((e) => {
      e !== w.current && ((w.current = e), y(e));
    }, []),
    S = i || h,
    _ = a || g,
    x = Ce.useRef(null),
    w = Ce.useRef(null),
    E = Ce.useRef(u),
    T = null != l,
    k = Pe(l),
    C = Pe(o),
    I = Pe(c),
    A = Ce.useCallback(() => {
      if (!x.current || !w.current) return;
      const e = { placement: t, strategy: n, middleware: p };
      C.current && (e.platform = C.current),
        ke(x.current, w.current, e).then((e) => {
          const t = { ...e, isPositioned: !1 !== I.current };
          O.current &&
            !Oe(E.current, t) &&
            ((E.current = t),
            Ie.flushSync(() => {
              d(t);
            }));
        });
    }, [p, t, n, C, I]);
  Ae(() => {
    !1 === c &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [c]);
  const O = Ce.useRef(!1);
  Ae(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  ),
    Ae(() => {
      if ((S && (x.current = S), _ && (w.current = _), S && _)) {
        if (k.current) return k.current(S, _, A);
        A();
      }
    }, [S, _, A, k, T]);
  const R = Ce.useMemo(
      () => ({
        reference: x,
        floating: w,
        setReference: v,
        setFloating: b,
      }),
      [v, b],
    ),
    M = Ce.useMemo(() => ({ reference: S, floating: _ }), [S, _]),
    P = Ce.useMemo(() => {
      const e = { position: n, left: 0, top: 0 };
      if (!M.floating) return e;
      const t = Me(M.floating, u.x),
        r = Me(M.floating, u.y);
      return s
        ? {
            ...e,
            transform: "translate(" + t + "px, " + r + "px)",
            ...(Re(M.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, M.floating, u.x, u.y]);
  return Ce.useMemo(
    () => ({
      ...u,
      update: A,
      refs: R,
      elements: M,
      floatingStyles: P,
    }),
    [u, A, R, M, P],
  );
}
const De = (e, t) => {
    const n = (function (e) {
      return (
        void 0 === e && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            const { x: o, y: i, placement: a, middlewareData: s } = t,
              l = await (async function (e, t) {
                const { placement: n, platform: r, elements: o } = e,
                  i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                  a = h(n),
                  s = m(n),
                  l = "y" === v(n),
                  c = N.has(a) ? -1 : 1,
                  u = i && l ? -1 : 1,
                  d = f(t, e);
                let {
                  mainAxis: p,
                  crossAxis: g,
                  alignmentAxis: y,
                } = "number" == typeof d
                  ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                  : {
                      mainAxis: d.mainAxis || 0,
                      crossAxis: d.crossAxis || 0,
                      alignmentAxis: d.alignmentAxis,
                    };
                return (
                  s && "number" == typeof y && (g = "end" === s ? -1 * y : y),
                  l ? { x: g * u, y: p * c } : { x: p * c, y: g * u }
                );
              })(t, e);
            return a === (null == (n = s.offset) ? void 0 : n.placement) &&
              null != (r = s.arrow) &&
              r.alignmentOffset
              ? {}
              : {
                  x: o + l.x,
                  y: i + l.y,
                  data: { ...l, placement: a },
                };
          },
        }
      );
    })(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  je = (e, t) => {
    const n = (function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o, platform: i } = t,
              {
                mainAxis: a = !0,
                crossAxis: s = !1,
                limiter: l = {
                  fn: (e) => {
                    let { x: t, y: n } = e;
                    return { x: t, y: n };
                  },
                },
                ...c
              } = f(e, t),
              u = { x: n, y: r },
              d = await i.detectOverflow(t, c),
              m = v(h(o)),
              y = g(m);
            let b = u[y],
              S = u[m];
            if (a) {
              const e = "y" === y ? "bottom" : "right";
              b = p(b + d["y" === y ? "top" : "left"], b, b - d[e]);
            }
            if (s) {
              const e = "y" === m ? "bottom" : "right";
              S = p(S + d["y" === m ? "top" : "left"], S, S - d[e]);
            }
            const _ = l.fn({ ...t, [y]: b, [m]: S });
            return {
              ..._,
              data: {
                x: _.x - n,
                y: _.y - r,
                enabled: { [y]: a, [m]: s },
              },
            };
          },
        }
      );
    })(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Le = (e, t) => ({ fn: Te(e).fn, options: [e, t] }),
  Fe = (e, t) => {
    const n = we(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ue = (e, t) => {
    const n = (function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, r;
            const { placement: o, rects: i, platform: l, elements: c } = t,
              { apply: u = () => {}, ...d } = f(e, t),
              p = await l.detectOverflow(t, d),
              g = h(o),
              y = m(o),
              b = "y" === v(o),
              { width: S, height: _ } = i.floating;
            let x, w;
            "top" === g || "bottom" === g
              ? ((x = g),
                (w =
                  y ===
                  ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((w = g), (x = "end" === y ? "top" : "bottom"));
            const E = _ - p.top - p.bottom,
              T = S - p.left - p.right,
              k = a(_ - p[x], E),
              C = a(S - p[w], T),
              I = !t.middlewareData.shift;
            let A = k,
              O = C;
            if (
              (null != (n = t.middlewareData.shift) && n.enabled.x && (O = T),
              null != (r = t.middlewareData.shift) && r.enabled.y && (A = E),
              I && !y)
            ) {
              const e = s(p.left, 0),
                t = s(p.right, 0),
                n = s(p.top, 0),
                r = s(p.bottom, 0);
              b
                ? (O =
                    S - 2 * (0 !== e || 0 !== t ? e + t : s(p.left, p.right)))
                : (A =
                    _ - 2 * (0 !== n || 0 !== r ? n + r : s(p.top, p.bottom)));
            }
            await u({ ...t, availableWidth: O, availableHeight: A });
            const R = await l.getDimensions(c.floating);
            return S !== R.width || _ !== R.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    })(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Be = (e, t) => {
    const n = (function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "autoPlacement",
          options: e,
          async fn(t) {
            var n, r, o;
            const {
                rects: a,
                middlewareData: s,
                placement: l,
                platform: c,
                elements: u,
              } = t,
              {
                crossAxis: d = !1,
                alignment: p,
                allowedPlacements: g = i,
                autoAlignment: y = !0,
                ...v
              } = f(e, t),
              b =
                void 0 !== p || g === i
                  ? (function (e, t, n) {
                      return (
                        e
                          ? [
                              ...n.filter((t) => m(t) === e),
                              ...n.filter((t) => m(t) !== e),
                            ]
                          : n.filter((e) => h(e) === e)
                      ).filter((n) => !e || m(n) === e || (!!t && _(n) !== n));
                    })(p || null, y, g)
                  : g,
              x = await c.detectOverflow(t, v),
              w = (null == (n = s.autoPlacement) ? void 0 : n.index) || 0,
              E = b[w];
            if (null == E) return {};
            const T = S(
              E,
              a,
              await (null == c.isRTL ? void 0 : c.isRTL(u.floating)),
            );
            if (l !== E) return { reset: { placement: b[0] } };
            const k = [x[h(E)], x[T[0]], x[T[1]]],
              C = [
                ...((null == (r = s.autoPlacement) ? void 0 : r.overflows) ||
                  []),
                { placement: E, overflows: k },
              ],
              I = b[w + 1];
            if (I)
              return {
                data: { index: w + 1, overflows: C },
                reset: { placement: I },
              };
            const A = C.map((e) => {
                const t = m(e.placement);
                return [
                  e.placement,
                  t && d
                    ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0)
                    : e.overflows[0],
                  e.overflows,
                ];
              }).sort((e, t) => e[1] - t[1]),
              O =
                (null ==
                (o = A.filter((e) =>
                  e[2].slice(0, m(e[0]) ? 2 : 3).every((e) => e <= 0),
                )[0])
                  ? void 0
                  : o[0]) || A[0][0];
            return O !== l
              ? {
                  data: { index: w + 1, overflows: C },
                  reset: { placement: O },
                }
              : {};
          },
        }
      );
    })(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  ze = (e, t) => {
    const n = (function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "hide",
          options: e,
          async fn(t) {
            const { rects: n, platform: r } = t,
              { strategy: o = "referenceHidden", ...i } = f(e, t);
            switch (o) {
              case "referenceHidden": {
                const e = R(
                  await r.detectOverflow(t, {
                    ...i,
                    elementContext: "reference",
                  }),
                  n.reference,
                );
                return {
                  data: {
                    referenceHiddenOffsets: e,
                    referenceHidden: M(e),
                  },
                };
              }
              case "escaped": {
                const e = R(
                  await r.detectOverflow(t, {
                    ...i,
                    altBoundary: !0,
                  }),
                  n.floating,
                );
                return { data: { escapedOffsets: e, escaped: M(e) } };
              }
              default:
                return {};
            }
          },
        }
      );
    })(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  He = (e, t) => {
    const n = (function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "inline",
          options: e,
          async fn(t) {
            const {
                placement: n,
                elements: r,
                rects: o,
                platform: i,
                strategy: l,
              } = t,
              { padding: c = 2, x: u, y: d } = f(e, t),
              p = Array.from(
                (await (null == i.getClientRects
                  ? void 0
                  : i.getClientRects(r.reference))) || [],
              ),
              m = (function (e) {
                const t = e.slice().sort((e, t) => e.y - t.y),
                  n = [];
                let r = null;
                for (let e = 0; e < t.length; e++) {
                  const o = t[e];
                  !r || o.y - r.y > r.height / 2
                    ? n.push([o])
                    : n[n.length - 1].push(o),
                    (r = o);
                }
                return n.map((e) => I(P(e)));
              })(p),
              g = I(P(p)),
              y = C(c),
              b = await i.getElementRects({
                reference: {
                  getBoundingClientRect: function () {
                    if (
                      2 === m.length &&
                      m[0].left > m[1].right &&
                      null != u &&
                      null != d
                    )
                      return (
                        m.find(
                          (e) =>
                            u > e.left - y.left &&
                            u < e.right + y.right &&
                            d > e.top - y.top &&
                            d < e.bottom + y.bottom,
                        ) || g
                      );
                    if (m.length >= 2) {
                      if ("y" === v(n)) {
                        const e = m[0],
                          t = m[m.length - 1],
                          r = "top" === h(n),
                          o = e.top,
                          i = t.bottom,
                          a = r ? e.left : t.left,
                          s = r ? e.right : t.right;
                        return {
                          top: o,
                          bottom: i,
                          left: a,
                          right: s,
                          width: s - a,
                          height: i - o,
                          x: a,
                          y: o,
                        };
                      }
                      const e = "left" === h(n),
                        t = s(...m.map((e) => e.right)),
                        r = a(...m.map((e) => e.left)),
                        o = m.filter((n) => (e ? n.left === r : n.right === t)),
                        i = o[0].top,
                        l = o[o.length - 1].bottom;
                      return {
                        top: i,
                        bottom: l,
                        left: r,
                        right: t,
                        width: t - r,
                        height: l - i,
                        x: r,
                        y: i,
                      };
                    }
                    return g;
                  },
                },
                floating: r.floating,
                strategy: l,
              });
            return o.reference.x !== b.reference.x ||
              o.reference.y !== b.reference.y ||
              o.reference.width !== b.reference.width ||
              o.reference.height !== b.reference.height
              ? { reset: { rects: b } }
              : {};
          },
        }
      );
    })(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ve = (e, t) => {
    const n = ((e) => ({
      name: "arrow",
      options: e,
      fn(t) {
        const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
        return n && ((o = n), {}.hasOwnProperty.call(o, "current"))
          ? null != n.current
            ? Ee({ element: n.current, padding: r }).fn(t)
            : {}
          : n
            ? Ee({ element: n, padding: r }).fn(t)
            : {};
        var o;
      },
    }))(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
