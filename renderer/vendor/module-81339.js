// vendor/module-81339.js — webpack module 81339
// params: (e, t, n) = (module, exports, require)
"use strict";
function r() {
  return "undefined" != typeof window;
}
function o(e) {
  return s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function i(e) {
  var t;
  return (
    (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
    window
  );
}
function a(e) {
  var t;
  return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document)
    ? void 0
    : t.documentElement;
}
function s(e) {
  return !!r() && (e instanceof Node || e instanceof i(e).Node);
}
function l(e) {
  return !!r() && (e instanceof Element || e instanceof i(e).Element);
}
function c(e) {
  return !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement);
}
function u(e) {
  return (
    !(!r() || "undefined" == typeof ShadowRoot) &&
    (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
  );
}
function d(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = x(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    "inline" !== o &&
    "contents" !== o
  );
}
function p(e) {
  return /^(table|td|th)$/.test(o(e));
}
function f(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch (e) {}
  try {
    return e.matches(":modal");
  } catch (e) {
    return !1;
  }
}
n.r(t),
  n.d(t, {
    getComputedStyle: () => x,
    getContainingBlock: () => b,
    getDocumentElement: () => a,
    getFrameElement: () => C,
    getNearestOverflowAncestor: () => T,
    getNodeName: () => o,
    getNodeScroll: () => w,
    getOverflowAncestors: () => k,
    getParentNode: () => E,
    getWindow: () => i,
    isContainingBlock: () => v,
    isElement: () => l,
    isHTMLElement: () => c,
    isLastTraversableNode: () => _,
    isNode: () => s,
    isOverflowElement: () => d,
    isShadowRoot: () => u,
    isTableElement: () => p,
    isTopLayer: () => f,
    isWebKit: () => S,
  });
const h = /transform|translate|scale|rotate|perspective|filter/,
  m = /paint|layout|strict|content/,
  g = (e) => !!e && "none" !== e;
let y;
function v(e) {
  const t = l(e) ? x(e) : e;
  return (
    g(t.transform) ||
    g(t.translate) ||
    g(t.scale) ||
    g(t.rotate) ||
    g(t.perspective) ||
    (!S() && (g(t.backdropFilter) || g(t.filter))) ||
    h.test(t.willChange || "") ||
    m.test(t.contain || "")
  );
}
function b(e) {
  let t = E(e);
  for (; c(t) && !_(t); ) {
    if (v(t)) return t;
    if (f(t)) return null;
    t = E(t);
  }
  return null;
}
function S() {
  return (
    null == y &&
      (y =
        "undefined" != typeof CSS &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    y
  );
}
function _(e) {
  return /^(html|body|#document)$/.test(o(e));
}
function x(e) {
  return i(e).getComputedStyle(e);
}
function w(e) {
  return l(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function E(e) {
  if ("html" === o(e)) return e;
  const t = e.assignedSlot || e.parentNode || (u(e) && e.host) || a(e);
  return u(t) ? t.host : t;
}
function T(e) {
  const t = E(e);
  return _(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : c(t) && d(t)
      ? t
      : T(t);
}
function k(e, t, n) {
  var r;
  void 0 === t && (t = []), void 0 === n && (n = !0);
  const o = T(e),
    a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
    s = i(o);
  if (a) {
    const e = C(s);
    return t.concat(
      s,
      s.visualViewport || [],
      d(o) ? o : [],
      e && n ? k(e) : [],
    );
  }
  return t.concat(o, k(o, [], n));
}
function C(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
