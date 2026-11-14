// vendor/module-68800.js — webpack module 68800
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31085 /* vendor/module-31085 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(31517 /* vendor/module-31517 */);
const a = Object.freeze({
  reach: 160,
  strength: 11,
  deform: 19,
  taper: 1.95,
  curve: 2.8,
  falloff: 24,
  smoothing: 0.3,
  handover: 0.6,
  squash: 1.2,
  blur: 1,
  fadeMs: 180,
});
let s = null,
  l = null,
  c = null,
  u = null,
  d = 0,
  p = 0,
  f = !1,
  h = "",
  m = 0;
function g(e) {
  if (e === l) return;
  if (
    ((l = e),
    (c = null),
    (u = null),
    (f = !1),
    (m = 0),
    (p = ("undefined" != typeof window && window.devicePixelRatio) || 1),
    te(),
    !e || "undefined" == typeof Image)
  )
    return;
  const t = new Image();
  (t.decoding = "async"),
    (t.onload = () => {
      l === e && ((c = t), L());
    }),
    (t.src = e.src);
}
const y = new Set();
let v = !1,
  b = 0,
  S = 0,
  _ = Number.NaN,
  x = Number.NaN,
  w = 0,
  E = 0,
  T = 0,
  k = null,
  C = !0,
  I = !1;
function A(e, t = !0) {
  const n = !0 === t ? {} : t;
  n.sprite && g(n.sprite);
  const r = {
    el: e,
    opts: {
      reach: Math.max(1, n.reach ?? a.reach),
      strength: Math.max(0, Math.min(64, n.strength ?? a.strength)),
      deform: Math.max(0, Math.min(32, n.deform ?? a.deform)),
      taper: Math.max(1, Math.min(4, n.taper ?? a.taper)),
      curve: Math.max(1, Math.min(4, n.curve ?? a.curve)),
      falloff: Math.max(2, Math.min(200, n.falloff ?? a.falloff)),
      smoothing: O(n.smoothing ?? a.smoothing),
      handover: O(n.handover ?? a.handover),
      squash: Math.max(0, Math.min(3, n.squash ?? a.squash)),
      blur: Math.max(0, Math.min(24, n.blur ?? a.blur)),
      fadeMs: Math.max(1, n.fadeMs ?? a.fadeMs),
    },
  };
  return (
    y.add(r),
    v ||
      0 === y.size ||
      "undefined" == typeof document ||
      (M("(pointer: fine)") &&
        ((v = !0),
        document.addEventListener("pointermove", N, { passive: !0 }),
        document.addEventListener("pointerleave", j),
        document.addEventListener("pointercancel", j),
        document.addEventListener("keydown", D, { passive: !0 }),
        document.addEventListener("visibilitychange", j),
        window.addEventListener("blur", j))),
    L(),
    () => {
      y.delete(r),
        k === r && (k = null),
        0 === y.size &&
          queueMicrotask(() => {
            0 === y.size &&
              v &&
              ((v = !1),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerleave", j),
              document.removeEventListener("pointercancel", j),
              document.removeEventListener("keydown", D),
              document.removeEventListener("visibilitychange", j),
              window.removeEventListener("blur", j),
              0 !== b && (cancelAnimationFrame(b), (b = 0)),
              (k = null),
              (T = 0),
              te(),
              F && (F.remove(), (F = null), (U = null), (B = null)),
              V && (V.remove(), (V = null)));
          });
    }
  );
}
const O = (e) => Math.max(0, Math.min(1, e)),
  R = (e) => (s ? { ...e.opts, ...s } : e.opts),
  M = (e) =>
    "function" == typeof window.matchMedia && window.matchMedia(e).matches;
function P() {
  if (f) return h || "disabled by a fail-safe";
  if (!l) return "no pointer sprite set";
  if (!c) return "pointer sprite still loading";
  if (M("(prefers-reduced-motion: reduce)"))
    return "prefers-reduced-motion is on";
  if (M("(forced-colors: active)")) return "forced colours are active";
  if (!M("(pointer: fine)") || !M("(hover: hover)")) return "no fine pointer";
  if ((window.devicePixelRatio || 1) !== p)
    return "display scale changed since the sprite was set — reload";
  const e = window.visualViewport;
  return e && Math.abs(e.scale - 1) > 0.001 ? "page is zoomed" : null;
}
function N(e) {
  (C = "mouse" === e.pointerType || "" === e.pointerType),
    (I = !1),
    W++,
    (_ = w = e.clientX),
    (x = E = e.clientY),
    ee && ((ee = !1), J(), (re = 0), (oe = 0), (ie = ae = Number.NaN)),
    L();
}
function D() {
  (I = !0), te();
}
function j() {
  (_ = x = Number.NaN), L();
}
function L() {
  v && 0 === b && ((S = performance.now()), (b = requestAnimationFrame(ge)));
}
let F = null,
  U = null,
  B = null,
  z = !1;
const H = "thinking-orb-gravity-hide";
let V = null,
  q = !1;
const G = new WeakMap();
let W = 0,
  $ = -1,
  Y = 0,
  K = -1;
function Z(e, t) {
  const n = document.elementFromPoint(e, t);
  if (!n) return !1;
  const r = (function (e) {
    const t = G.get(e);
    if (t) return t;
    const n = document.documentElement,
      r = n.classList.contains(H);
    r && n.classList.remove(H);
    const o = getComputedStyle(e).cursor;
    return r && n.classList.add(H), G.set(e, o), o;
  })(n);
  return "auto" !== r && "default" !== r
    ? (Q(), !1)
    : (q ||
        (V ||
          ((V = document.createElement("style")),
          (V.textContent = `html.${H}, html.${H} * { cursor: none !important; }`),
          document.head.appendChild(V)),
        document.documentElement.classList.add(H),
        (q = !0),
        ($ = W),
        (K = Y)),
      !0);
}
function Q() {
  q && (document.documentElement.classList.remove(H), (q = !1), ($ = -1));
}
function J() {
  F && z && ((F.style.display = "none"), (z = !1));
}
let X = Number.NEGATIVE_INFINITY,
  ee = !1;
function te() {
  (ee = !1), Q(), J(), (re = 0), (oe = 0), (ie = ae = Number.NaN);
}
const ne = { cx: 0, cy: 0, r: 0 };
let re = 0,
  oe = 0,
  ie = Number.NaN,
  ae = Number.NaN;
let se = null,
  le = null,
  ce = null,
  ue = null,
  de = null,
  pe = 0,
  fe = 0,
  he = 0;
function me(e, t, n) {
  if (!(B && U && F && l && c)) return;
  const r = l,
    o = R(e),
    i = Math.min(3, window.devicePixelRatio || 1);
  if (
    (se ||
      ((se = document.createElement("canvas")), (le = se.getContext("2d"))),
    ce || ((ce = document.createElement("canvas")), (ue = ce.getContext("2d"))),
    !le || !ue)
  )
    return;
  if (
    ((u && d === i) ||
      ((u = (function (e) {
        if (!c || !l) return null;
        const t = document.createElement("canvas");
        (t.width = Math.ceil(l.width * e)),
          (t.height = Math.ceil(l.height * e));
        const n = t.getContext("2d", { willReadFrequently: !0 });
        return n
          ? (n.scale(e, e),
            n.drawImage(c, 0, 0, l.width, l.height),
            n.getImageData(0, 0, t.width, t.height))
          : null;
      })(i)),
      (d = i)),
    !u)
  )
    return;
  if (i !== pe || r.width !== fe || r.height !== he) {
    (pe = i), (fe = r.width), (he = r.height);
    const e = Math.ceil((r.width + 96) * i),
      t = Math.ceil((r.height + 96) * i);
    (U.width = se.width = ce.width = e),
      (U.height = se.height = ce.height = t),
      (U.style.width = `${r.width + 96}px`),
      (U.style.height = `${r.height + 96}px`),
      (de = ue.createImageData(e, t));
  }
  const a = U.width,
    s = U.height,
    p = Math.pow(t, o.curve),
    f = 1 - Math.exp(-n / (0.012 + 0.14 * o.smoothing));
  (re += (o.strength * p - re) * f), (oe += (o.deform * p - oe) * f);
  let h = re * i,
    m = oe * i;
  if (Number.isNaN(ie)) (ie = ne.cx), (ae = ne.cy);
  else {
    const e = 1 - Math.exp(-n / (0.05 + 0.6 * o.handover));
    (ie += (ne.cx - ie) * e), (ae += (ne.cy - ae) * e);
  }
  const g = 48 * i,
    y = g + r.hotX * i,
    v = g + r.hotY * i,
    b = y + (ie - w) * i,
    S = v + (ae - E) * i,
    _ = Math.hypot(b - y, S - v) || 1,
    x = (b - y) / _,
    T = (S - v) / _,
    k = o.falloff * i;
  if (o.squash > 0) {
    const e = Math.hypot(0.5 * r.width - r.hotX, r.height - r.hotY) || 1,
      t = (0.5 * r.width - r.hotX) / e,
      n = (r.height - r.hotY) / e,
      i = Math.max(0, -(x * t + T * n)),
      a = 1 + o.squash * i;
    (h *= a), (m *= a);
  }
  const C = Math.ceil(Math.max(m, 1)) + 4,
    I = Math.floor(Math.min(g, g + x * h) - C),
    A = Math.floor(Math.min(g, g + T * h) - C),
    O = Math.ceil(Math.max(g, g + x * h) + r.width * i + C),
    M = Math.ceil(Math.max(g, g + T * h) + r.height * i + C),
    P = Math.max(0, I),
    N = Math.max(0, A),
    D = Math.min(a, O) - P,
    j = Math.min(s, M) - N;
  m > 0.01
    ? ((function (e, t, n, r, o, i, a) {
        if (!u || !de) return;
        const s = de.width,
          l = de.height,
          c = u,
          d = c.width,
          p = c.height,
          f = c.data,
          h = de.data;
        h.fill(0);
        const m = Math.max(1, Math.hypot(d, p)),
          g = i - r,
          y = a - o,
          v = Math.hypot(g, y) || 1,
          b = g / v,
          S = y / v,
          _ = Math.max(0, Math.floor(n + Math.min(0, e * b) - 3)),
          x = Math.min(s, Math.ceil(n + d + Math.max(0, e * b) + 3)),
          w = Math.max(0, Math.floor(n + Math.min(0, e * S) - 3)),
          E = Math.min(l, Math.ceil(n + p + Math.max(0, e * S) + 3));
        for (let l = w; l < E; l++)
          for (let c = _; c < x; c++) {
            const u = 4 * (l * s + c);
            let g = c - n,
              y = l - n;
            if (e > 0.01) {
              let s = c,
                d = l,
                p = 0,
                f = 0,
                v = 0,
                b = 1;
              for (let n = 0; n < 7; n++) {
                const n = Math.hypot(s - r, d - o) / m;
                (p = e * Math.pow(Math.min(1, n), t)),
                  (f = i - s),
                  (v = a - d),
                  (b = Math.hypot(f, v) || 1),
                  (s += 0.5 * (c - (p * f) / b - s)),
                  (d += 0.5 * (l - (p * v) / b - d));
              }
              const S = s + (p * f) / b - c,
                _ = d + (p * v) / b - l;
              if (S * S + _ * _ > 2.25) {
                h[u] = h[u + 1] = h[u + 2] = h[u + 3] = 0;
                continue;
              }
              (g = s - n), (y = d - n);
            }
            const v = Math.floor(g),
              b = Math.floor(y);
            if (v < -1 || b < -1 || v >= d || b >= p) {
              h[u] = h[u + 1] = h[u + 2] = h[u + 3] = 0;
              continue;
            }
            const S = g - v,
              _ = y - b;
            let x = 0,
              w = 0,
              E = 0,
              T = 0;
            for (let e = 0; e < 4; e++) {
              const t = v + (1 & e),
                n = b + (e >> 1);
              if (t < 0 || n < 0 || t >= d || n >= p) continue;
              const r = 4 * (n * d + t),
                o = (1 & e ? S : 1 - S) * (e >> 1 ? _ : 1 - _) * f[r + 3];
              (x += f[r] * o),
                (w += f[r + 1] * o),
                (E += f[r + 2] * o),
                (T += o);
            }
            T > 0
              ? ((h[u] = x / T),
                (h[u + 1] = w / T),
                (h[u + 2] = E / T),
                (h[u + 3] = T))
              : (h[u] = h[u + 1] = h[u + 2] = h[u + 3] = 0);
          }
      })(m, o.taper, g, y, v, b, S),
      ue.putImageData(de, 0, 0, P, N, D, j))
    : (ue.setTransform(1, 0, 0, 1, 0, 0),
      ue.clearRect(0, 0, a, s),
      ue.drawImage(c, g, g, r.width * i, r.height * i));
  const L = B,
    H = le;
  if (
    (L.setTransform(1, 0, 0, 1, 0, 0),
    L.clearRect(0, 0, a, s),
    (L.globalAlpha = 1),
    (L.globalCompositeOperation = "source-over"),
    L.drawImage(ce, 0, 0),
    h > 0.5)
  ) {
    const e = g + r.width * i * 0.42,
      t = g + r.height * i * 0.5,
      n = k / 2,
      a = H.createLinearGradient(e - x * n, t - T * n, e + x * n, t + T * n);
    a.addColorStop(0, "rgba(0,0,0,0)"), a.addColorStop(1, "rgba(0,0,0,1)");
    for (let e = 10; e >= 1; e--) {
      const t = e / 10;
      H.setTransform(1, 0, 0, 1, 0, 0),
        (H.globalCompositeOperation = "source-over"),
        (H.globalAlpha = 1),
        H.clearRect(P, N, D, j),
        H.drawImage(ce, P, N, D, j, P + x * h * t, N + T * h * t, D, j),
        (H.globalCompositeOperation = "destination-in"),
        (H.fillStyle = a),
        H.fillRect(P, N, D, j),
        (L.globalCompositeOperation = "destination-over"),
        (L.globalAlpha = 0.9 * Math.pow(1 - t, 1.6)),
        o.blur > 0 &&
          (L.filter = `blur(${(o.blur * Math.sqrt(t) * i).toFixed(2)}px)`),
        L.drawImage(se, P, N, D, j, P, N, D, j);
    }
    (L.filter = "none"),
      (L.globalAlpha = 1),
      (L.globalCompositeOperation = "source-over");
  }
  (F.style.transform = `translate3d(${(w - r.hotX - 48).toFixed(2)}px,${(E - r.hotY - 48).toFixed(2)}px,0)`),
    z || ((F.style.display = ""), (z = !0));
}
function ge(e) {
  if (((b = 0), !v)) return;
  const t = performance.now();
  try {
    !(function (e) {
      const t = Math.min(0.05, Math.max(0.001, (e - S) / 1e3));
      (S = e), Y++;
      let n = null,
        r = 0;
      if (!Number.isNaN(_) && null === P()) {
        let t = Number.POSITIVE_INFINITY;
        for (const e of y) {
          if (!e.el.isConnected) continue;
          const r = e.el.getBoundingClientRect();
          if (r.width <= 0) continue;
          const o = r.left + r.width / 2,
            i = r.top + r.height / 2,
            a = Math.min(r.width, r.height) / 2,
            s = R(e).reach;
          if (_ < o - a - s || _ > o + a + s || x < i - a - s || x > i + a + s)
            continue;
          const l = Math.hypot(_ - o, x - i) - a;
          l <= s &&
            l < t &&
            ((t = l), (n = e), (ne.cx = o), (ne.cy = i), (ne.r = a));
        }
        if (n) {
          const o = 1 - Math.max(0, t) / R(n).reach;
          (r = o * o * (3 - 2 * o)), (X = e);
        }
      }
      const o = k ?? n,
        i = o ? R(o).fadeMs : a.fadeMs,
        s = 1 - Math.exp((-1e3 * t) / (i / 3));
      if (((T += (r - T) * s), n && n !== k && (k = n), !n && T < 0.002)) {
        if (((T = 0), k && q && !ee && C && !I && !Number.isNaN(_))) {
          if (e - X < 500)
            return (
              Z(_, x) ? me(k, 0, t) : J(), void (b = requestAnimationFrame(ge))
            );
          if (z) return Q(), (ee = !0), void (k = null);
        }
        return (k = null), void te();
      }
      k &&
        (T > 0.002 &&
        C &&
        !I &&
        !Number.isNaN(_) &&
        (function () {
          if (F) return !0;
          const e = document.createElement("div");
          (e.className = "thinking-orb-gravity-cursor"),
            e.setAttribute("aria-hidden", "true"),
            (e.style.cssText =
              "position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;display:none");
          const t = document.createElement("canvas");
          (t.style.display = "block"),
            e.appendChild(t),
            document.body.appendChild(e);
          const n = t.getContext("2d");
          return n
            ? ((F = e), (U = t), (B = n), (pe = 0), !0)
            : (e.remove(), !1);
        })() &&
        Z(_, x)
          ? $ === W && Y - K < 2 && !z
            ? J()
            : me(k, T, t)
          : T > 0.002 && !Number.isNaN(_) && C && !I
            ? J()
            : te(),
        (b = requestAnimationFrame(ge)));
    })(e);
  } catch (e) {
    return (
      (f = !0),
      (h = `disabled after an error (${e instanceof Error ? e.message : String(e)})`),
      te(),
      void (k = null)
    );
  }
  const n = performance.now() - t;
  n > 12
    ? ++m >= 30 &&
      !f &&
      ((f = !0),
      (h = `disabled after slow frames (~${Math.round(n)}ms each)`),
      te())
    : (m = 0);
}
const ye = {
  working: "Working…",
  searching: "Searching…",
  solving: "Solving…",
  listening: "Listening…",
  connecting: "Connecting…",
  weaving: "Weaving…",
  composing: "Composing…",
  breathing: "Thinking…",
  shaping: "Shaping…",
};
(t.MODE_DRAWS = i.MODE_DRAWS),
  (t.MODE_FRAMES = i.MODE_FRAMES),
  (t.STATE_TO_MODE = i.STATE_TO_MODE),
  (t.angleDelta = i.angleDelta),
  (t.countDots = i.countDots),
  (t.fibDir = i.fibDir),
  (t.finalizeFrame = i.finalizeFrame),
  (t.frac = i.frac),
  (t.hashD = i.hashD),
  (t.lerp = i.lerp),
  (t.makeProj = i.makeProj),
  (t.radiusScale = i.radiusScale),
  (t.resolvePreset = i.resolvePreset),
  (t.scaleCounts = i.scaleCounts),
  (t.scaleRadii = i.scaleRadii),
  (t.vnoise = i.vnoise),
  (t.GRAVITY_DEFAULTS = a),
  (t.ThinkingOrb = function ({
    state: e = "working",
    size: t = 64,
    theme: n = "auto",
    speed: a = 1,
    paused: s = !1,
    color: l,
    dots: c = 1,
    dotSize: u = 1,
    opts: d,
    frame: p,
    gravity: f,
    style: h,
    "aria-label": m,
    ...g
  }) {
    const y = o.useRef(null),
      v = d ? JSON.stringify(d) : "",
      b = (function (e, t) {
        const [n, r] = o.useState(!0);
        return (
          o.useEffect(() => {
            if ("dark" === e) return void r(!0);
            if ("light" === e) return void r(!1);
            const n = () => {
              const e = (function (e) {
                let t = e;
                for (; t; ) {
                  const e = t.getAttribute("data-theme");
                  if ("dark" === e) return !0;
                  if ("light" === e) return !1;
                  if (t.classList.contains("dark")) return !0;
                  if (t.classList.contains("light")) return !1;
                  t = t.parentElement;
                }
                return null;
              })(t.current);
              r(
                e ??
                  ("undefined" == typeof matchMedia ||
                    matchMedia("(prefers-color-scheme: dark)").matches),
              );
            };
            n();
            const o =
                "undefined" != typeof matchMedia
                  ? matchMedia("(prefers-color-scheme: dark)")
                  : null,
              i = () => n();
            null == o || o.addEventListener("change", i);
            let a = null;
            return (
              "undefined" != typeof MutationObserver &&
                t.current &&
                ((a = new MutationObserver(n)),
                a.observe(document.documentElement, {
                  attributes: !0,
                  attributeFilter: ["class", "data-theme"],
                  subtree: !0,
                })),
              () => {
                null == o || o.removeEventListener("change", i),
                  null == a || a.disconnect();
              }
            );
          }, [e, t]),
          n
        );
      })(n, y),
      S = f ? JSON.stringify(f) : "";
    o.useEffect(() => {
      const e = y.current;
      if (e && f) return A(e, !0 === f || f);
    }, [S]);
    const _ = (function () {
      const [e, t] = o.useState(!1);
      return (
        o.useEffect(() => {
          if ("undefined" == typeof matchMedia) return;
          const e = matchMedia("(prefers-reduced-motion: reduce)");
          t(e.matches);
          const n = (e) => t(e.matches);
          return (
            e.addEventListener("change", n),
            () => e.removeEventListener("change", n)
          );
        }, []),
        e
      );
    })();
    return (
      o.useEffect(() => {
        const n = y.current;
        if (!n) return;
        const r = Math.min(
          2,
          ("undefined" != typeof devicePixelRatio && devicePixelRatio) || 1,
        );
        (n.width = Math.round(t * r)), (n.height = Math.round(t * r));
        const o = n.getContext("2d");
        if (!o) return;
        const { mode: f, speed: h, opts: m } = i.resolvePreset(e, t);
        let g = 1 !== c ? i.scaleCounts(m, Math.max(0.1, c)) : m;
        1 !== u && (g = i.scaleRadii(g, Math.max(0.1, u))),
          d && (g = { ...g, ...d });
        const v = p ?? i.MODE_FRAMES[f],
          S = (function (e) {
            if (!e) return;
            const t = e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
            if (t) {
              let e = t[1];
              3 === e.length && (e = e.replace(/./g, (e) => e + e));
              const n = parseInt(e, 16);
              return {
                r: (n >> 16) & 255,
                g: (n >> 8) & 255,
                b: 255 & n,
              };
            }
            const n = e
              .trim()
              .match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
            return n
              ? { r: Number(n[1]), g: Number(n[2]), b: Number(n[3]) }
              : void 0;
          })(l),
          x = h * a,
          w = (e) => {
            o.setTransform(r, 0, 0, r, 0, 0),
              o.clearRect(0, 0, t, t),
              i.paintFrame(o, v(t, e, g), b, S);
          };
        if (_) return void w(0.6);
        let E = 0,
          T = !1;
        const k = () => {
            w((performance.now() / 1e3) * x),
              T && (E = requestAnimationFrame(k));
          },
          C = () => {
            T || s || ((T = !0), (E = requestAnimationFrame(k)));
          },
          I = () => {
            (T = !1), cancelAnimationFrame(E);
          };
        w((performance.now() / 1e3) * x);
        let A = !0;
        const O =
          "undefined" != typeof IntersectionObserver
            ? new IntersectionObserver(([e]) => {
                (A = e.isIntersecting),
                  A && "hidden" !== document.visibilityState ? C() : I();
              })
            : null;
        null == O || O.observe(n);
        const R = () => {
          "hidden" === document.visibilityState ? I() : A && C();
        };
        return (
          document.addEventListener("visibilitychange", R),
          O || C(),
          () => {
            I(),
              null == O || O.disconnect(),
              document.removeEventListener("visibilitychange", R);
          }
        );
      }, [e, t, b, a, s, _, l, c, u, v, p]),
      r.jsx("canvas", {
        ref: y,
        role: "img",
        "aria-label": m ?? ye[e],
        style: { width: t, height: t, display: "block", ...h },
        ...g,
      })
    );
  }),
  (t.attachGravity = A),
  (t.getGravityConfig = function () {
    return { ...a, ...(s ?? {}) };
  }),
  (t.getGravityStatus = function () {
    const e = "undefined" == typeof window ? "no window" : P();
    return {
      orbs: y.size,
      tracking: v,
      active: z,
      blockedBy: 0 === y.size ? "no orb has gravity on" : e,
    };
  }),
  (t.resetGravity = function () {
    (f = !1), (h = ""), (m = 0), L();
  }),
  (t.setGravityConfig = function (e) {
    (s = e ? { ...(s ?? {}), ...e } : null), L();
  }),
  (t.setGravitySprite = g);
