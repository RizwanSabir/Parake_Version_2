// vendor/module-86551.js — webpack module 86551
// params: (t, e, n) = (module, exports, require)
n.d(e, { Z: () => I });
var o = n(4301 /* vendor/module-4301 */),
  r = n(79456 /* vendor/module-79456 */),
  s = 1e-5,
  i = 1e-6;
function a(t) {
  const e = [];
  for (let n = 0; n < t.length - 1; n++) e.push({ a: t[n], b: t[n + 1] });
  return e;
}
function c(t, e, n, o) {
  const r = e.x - t.x,
    s = e.y - t.y,
    a = o.x - n.x,
    c = o.y - n.y,
    f = r * c - s * a;
  if (0 === f) return null;
  const d = n.x - t.x,
    l = n.y - t.y,
    u = (d * c - l * a) / f,
    h = (d * s - l * r) / f;
  return u <= i || u >= 0.999999 || h <= i || h >= 0.999999
    ? null
    : { point: { x: t.x + u * r, y: t.y + u * s }, tA: u, tB: h };
}
function f(t) {
  return Math.abs(t.b.x - t.a.x) >= Math.abs(t.b.y - t.a.y);
}
function d(t, e, n) {
  if ("rounded" !== t.curve) return !1;
  const o = t.points,
    r = o[e],
    s = o[e + 1];
  if (!r || !s) return !1;
  const i = Math.hypot(s.x - r.x, s.y - r.y),
    a = n * i,
    c = e > 0 ? m(o[e - 1], r, s, 5) : null;
  if (c && a < c.cutLen) return !0;
  const f = e + 2 < o.length ? m(r, s, o[e + 2], 5) : null;
  return null !== f && i - a < f.cutLen;
}
function l(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n],
      r = a(o.points);
    for (let s = n + 1; s < t.length; s++) {
      const n = t[s],
        i = a(n.points);
      for (const [t, s] of r.entries())
        for (const [r, a] of i.entries()) {
          const i = c(s.a, s.b, a.a, a.b);
          if (!i) continue;
          if (d(o, t, i.tA) || d(n, r, i.tB)) continue;
          const l = f(s);
          l !== f(a) && l
            ? e.push({
                jumpEdgeId: o.id,
                otherEdgeId: n.id,
                segIndex: t,
                t: i.tA,
                point: i.point,
              })
            : e.push({
                jumpEdgeId: n.id,
                otherEdgeId: o.id,
                segIndex: r,
                t: i.tB,
                point: i.point,
              });
        }
    }
  }
  return e;
}
function u(t) {
  const e = Math.round(1e3 * t) / 1e3;
  return Number.isInteger(e), `${e}`;
}
function h(t) {
  return `${u(t.x)},${u(t.y)}`;
}
function g(t) {
  const e = t.b.x - t.a.x,
    n = t.b.y - t.a.y;
  return Math.abs(e) >= Math.abs(n) ? (e >= 0 ? 1 : 0) : n >= 0 ? 1 : 0;
}
function p(t, e) {
  if (t.length < 2) return t.map((t) => ({ ...t }));
  const n = t.map((t) => ({ ...t })),
    r = e.arrowTypeStart && o.hq[e.arrowTypeStart];
  if (r) {
    const e = t[0],
      o = t[1],
      s = Math.atan2(o.y - e.y, o.x - e.x);
    (n[0].x = e.x + r * Math.cos(s)), (n[0].y = e.y + r * Math.sin(s));
  }
  const s = e.arrowTypeEnd && o.hq[e.arrowTypeEnd];
  if (s) {
    const e = t.length,
      o = t[e - 2],
      r = t[e - 1],
      i = Math.atan2(r.y - o.y, r.x - o.x);
    (n[e - 1].x = r.x - s * Math.cos(i)), (n[e - 1].y = r.y - s * Math.sin(i));
  }
  return n;
}
function x(t, e, n, o, r) {
  const s = t.point.x,
    i = t.point.y,
    a = { x: s - e * t.r, y: i - n * t.r },
    c = { x: s + e * t.r, y: i + n * t.r },
    f = [`L${h(a)}`];
  return (
    "arc" === r
      ? f.push(`A${u(t.r)},${u(t.r)} 0 0 ${o} ${h(c)}`)
      : f.push(`M${h(c)}`),
    f
  );
}
function m(t, e, n, o) {
  const r = e.x - t.x,
    i = e.y - t.y,
    a = n.x - e.x,
    c = n.y - e.y,
    f = Math.hypot(r, i),
    d = Math.hypot(a, c);
  if (f < s || d < s) return null;
  const l = r / f,
    u = i / f,
    h = a / d,
    g = c / d,
    p = l * h + u * g,
    x = Math.max(-1, Math.min(1, p)),
    m = Math.acos(x);
  if (m < s || Math.abs(Math.PI - m) < s) return null;
  const y = Math.min(o / Math.sin(m / 2), f / 2, d / 2);
  return {
    startX: e.x - l * y,
    startY: e.y - u * y,
    endX: e.x + h * y,
    endY: e.y + g * y,
    ctrlX: e.x,
    ctrlY: e.y,
    cutLen: y,
  };
}
function y(t, e, n) {
  const o = t.points;
  if (o.length < 2) return "";
  const r = p(o, t),
    s = "rounded" === t.curve,
    i = a(r),
    c = new Map();
  for (const t of e) {
    const e = i[t.segIndex];
    if (!e) continue;
    const o = Math.hypot(e.b.x - e.a.x, e.b.y - e.a.y),
      r = c.get(t.segIndex) ?? [];
    r.push({ t: t.t, point: t.point, d: t.t * o, r: n.jumpRadius }),
      c.set(t.segIndex, r);
  }
  const f = [`M${h(r[0])}`];
  for (let t = 0; t < i.length; t++) {
    const e = i[t],
      o = Math.hypot(e.b.x - e.a.x, e.b.y - e.a.y),
      a = 0 === o ? 0 : (e.b.x - e.a.x) / o,
      d = 0 === o ? 0 : (e.b.y - e.a.y) / o,
      l = g(e);
    let p = 0;
    if (s && t > 0) {
      const e = m(r[t - 1], r[t], r[t + 1] ?? r[t], 5);
      e && (p = e.cutLen);
    }
    let y = o,
      b = null;
    s &&
      t < i.length - 1 &&
      ((b = m(r[t], r[t + 1], r[t + 2] ?? r[t + 1], 5)),
      b && (y = o - b.cutLen));
    const M = 0.6 * n.jumpRadius,
      K = [...(c.get(t) ?? [])]
        .sort((t, e) => t.t - e.t)
        .filter((t) => {
          const e = Math.min(t.d - p, y - t.d) - 2;
          return (t.r = Math.min(t.r, e)), t.r >= M;
        });
    for (let t = 0; t < K.length - 1; t++) {
      const e = K[t + 1].d - K[t].d;
      if (K[t].r + K[t + 1].r > e) {
        const n = e / 2;
        (K[t].r = Math.min(K[t].r, n)), (K[t + 1].r = Math.min(K[t + 1].r, n));
      }
    }
    for (const t of K) t.r < M || f.push(...x(t, a, d, l, n.jumpStyle));
    s && b
      ? (f.push(`L${u(b.startX)},${u(b.startY)}`),
        f.push(`Q${u(b.ctrlX)},${u(b.ctrlY)} ${u(b.endX)},${u(b.endY)}`))
      : f.push(`L${h(e.b)}`);
  }
  return f.join(" ");
}
function b(t) {
  return /^[\d\s+,.LMelm-]*$/.test(t);
}
function M(t) {
  return (
    !t ||
    "linear" === t ||
    "rounded" === t ||
    "step" === t ||
    "stepBefore" === t ||
    "stepAfter" === t
  );
}
function K(t) {
  if (!t) return null;
  try {
    const e =
        "function" == typeof atob
          ? atob(t)
          : Buffer.from(t, "base64").toString(),
      n = JSON.parse(e);
    if (!Array.isArray(n)) return null;
    const o = [];
    for (const t of n)
      t &&
        "number" == typeof t.x &&
        "number" == typeof t.y &&
        o.push({ x: t.x, y: t.y });
    return o.length >= 2 ? o : null;
  } catch {
    return null;
  }
}
function I(t, e, n) {
  if (!n.enabled) return;
  const o = t.node();
  if (!o) return;
  const r = new Map();
  for (const t of e) r.set(t.id, t);
  const s = new Map();
  for (const t of o.querySelectorAll("path[data-id]")) {
    const e = t.getAttribute("data-id");
    null === e || s.has(e) || s.set(e, t);
  }
  const i = [];
  for (const t of e) {
    const e = s.get(t.id);
    if (!e) continue;
    const n = K(e.getAttribute("data-points")) ?? t.points;
    i.push({ ...t, points: n });
  }
  const a = l(i);
  if (0 === a.length) return;
  const c = new Map();
  for (const t of a) {
    const e = c.get(t.jumpEdgeId) ?? [];
    e.push(t), c.set(t.jumpEdgeId, e);
  }
  for (const t of i) {
    const e = c.get(t.id);
    if (!e || 0 === e.length) continue;
    const o = r.get(t.id),
      i = o?.curve;
    if (void 0 !== i && !M(i)) continue;
    const a = s.get(t.id);
    if (!a) continue;
    if (void 0 === i && !b(a.getAttribute("d") ?? "")) continue;
    const f = a.getAttribute("style") ?? "",
      d = /stroke-dasharray\s*:\s*0\s+([\d.]+)\s+[\d.]+\s+([\d.]+)/.exec(f),
      l = d ? Number.parseFloat(d[1]) : null,
      u = d ? Number.parseFloat(d[2]) : null,
      h = y(t, e, n);
    if (
      (a.setAttribute("d", h),
      null !== l && null !== u && "function" == typeof a.getTotalLength)
    ) {
      const t = a.getTotalLength(),
        e = `0 ${l} ${Math.max(0, t - l - u)} ${u}`,
        n = f
          .replace(/stroke-dasharray\s*:[^;]*;?/g, `stroke-dasharray: ${e};`)
          .replace(/;\s*;+/g, ";");
      a.setAttribute("style", n);
    }
  }
}
(0, r.K)(a, "buildSegmentList"),
  (0, r.K)(c, "segmentIntersection"),
  (0, r.K)(f, "isHorizontalSeg"),
  (0, r.K)(d, "crossingSitsInRoundedCorner"),
  (0, r.K)(l, "findEdgeIntersections"),
  (0, r.K)(u, "fmt"),
  (0, r.K)(h, "pointToString"),
  (0, r.K)(g, "getArcSweepFlag"),
  (0, r.K)(p, "applyMarkerOffsets"),
  (0, r.K)(x, "emitJump"),
  (0, r.K)(m, "computeRoundedCorner"),
  (0, r.K)(y, "rewriteEdgePath"),
  (0, r.K)(b, "isStraightPath"),
  (0, r.K)(M, "curveSupportsLineHops"),
  (0, r.K)(K, "decodeDataPoints"),
  (0, r.K)(I, "applyLineJumpsToSvg");
