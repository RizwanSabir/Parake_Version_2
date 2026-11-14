// vendor/module-28229.js — webpack module 28229
// params: (e, t, n) = (module, exports, require)
"use strict";
n.r(t),
  n.d(t, {
    alignments: () => o,
    clamp: () => p,
    createCoords: () => u,
    evaluate: () => f,
    expandPaddingObject: () => A,
    floor: () => c,
    getAlignment: () => m,
    getAlignmentAxis: () => b,
    getAlignmentSides: () => S,
    getAxisLength: () => y,
    getExpandedPlacements: () => _,
    getOppositeAlignmentPlacement: () => x,
    getOppositeAxis: () => g,
    getOppositeAxisPlacements: () => C,
    getOppositePlacement: () => I,
    getPaddingObject: () => O,
    getSide: () => h,
    getSideAxis: () => v,
    max: () => s,
    min: () => a,
    placements: () => i,
    rectToClientRect: () => R,
    round: () => l,
    sides: () => r,
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
  return t.reference[i] > t.floating[i] && (a = I(a)), [a, I(a)];
}
function _(e) {
  const t = I(e);
  return [x(e), t, x(t)];
}
function x(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const w = ["left", "right"],
  E = ["right", "left"],
  T = ["top", "bottom"],
  k = ["bottom", "top"];
function C(e, t, n, r) {
  const o = m(e);
  let i = (function (e, t, n) {
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? E : w) : t ? w : E;
      case "left":
      case "right":
        return t ? T : k;
      default:
        return [];
    }
  })(h(e), "start" === n, r);
  return (
    o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(x)))), i
  );
}
function I(e) {
  const t = h(e);
  return d[t] + e.slice(t.length);
}
function A(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function O(e) {
  return "number" != typeof e ? A(e) : { top: e, right: e, bottom: e, left: e };
}
function R(e) {
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
