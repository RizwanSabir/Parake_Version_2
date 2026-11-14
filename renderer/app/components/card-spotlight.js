// app/components/card-spotlight.js — webpack module 38255
// params: (e, t, n) = (module, exports, require)
t.CardSpotlight = function (e) {
  const t = (0, o.c)(9),
    { accentFrom: n, feather: d } = e,
    p = void 0 !== d && d,
    y = (0, i.useRef)(null);
  let x, w;
  t[0] !== n
    ? ((x = () => {
        const e = y.current,
          t = e?.parentElement;
        if (!e || !t) return;
        if (!window.matchMedia?.("(pointer: fine)").matches) return;
        const r = t.closest("[data-slot=card]") ?? t,
          o = r.querySelector("[data-spotlight-edge]");
        let i = 0,
          a = 0,
          d = 0,
          p = 0,
          x = !0,
          w = 0,
          E = 0,
          T = 0,
          k = 0,
          C = 0,
          I = 0;
        const A =
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
            !1,
          O = () => {
            i = 0;
            const n = t.getBoundingClientRect(),
              a = d - n.left + "px",
              s = p - n.top + "px";
            if (
              (e.style.setProperty("--spotlight-x", a),
              e.style.setProperty("--spotlight-y", s),
              e.style.setProperty("--spotlight-glow-x", a),
              e.style.setProperty("--spotlight-glow-y", s),
              o)
            ) {
              const e = r.getBoundingClientRect();
              o.style.setProperty("--edge-x", d - e.left + 1 + "px"),
                o.style.setProperty("--edge-y", p - e.top + 1 + "px");
            }
            const l = performance.now(),
              c = l - T;
            T && c > 0 && ((k = (d - w) / c), (C = (p - E) / c)),
              (w = d),
              (E = p),
              (T = l),
              window.clearTimeout(I),
              (I = window.setTimeout(() => {
                (T = 0), (k = 0), (C = 0);
              }, u));
          },
          R = () => {
            const n = t.getBoundingClientRect(),
              r = t.querySelector("[data-spotlight-quiet]"),
              o = r
                ? (function (e) {
                    const t = [],
                      n = (e) => {
                        e.width > 0 && e.height > 0 && t.push(e);
                      },
                      r = document.createRange(),
                      o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
                    for (let e = o.nextNode(); e; e = o.nextNode())
                      e.textContent?.trim() &&
                        (r.selectNodeContents(e), n(r.getBoundingClientRect()));
                    for (const t of e.querySelectorAll("img, svg"))
                      n(t.getBoundingClientRect());
                    return t;
                  })(r)
                : [],
              i = [...t.querySelectorAll("[data-spotlight-quiet-box]")].map(c),
              a = [
                ...o.map((e) => v(e, n, f, h)),
                ...i.map((e) => v(e, n, m, g)),
              ];
            a.length &&
              e.style.setProperty("--spotlight-quiet-mask", a.join(", "));
          },
          M = (t) => {
            (d = t.clientX),
              (p = t.clientY),
              t.target instanceof Element &&
              t.target
                .closest("button, a, [role=button]")
                ?.closest("[data-spotlight-controls]")
                ? (e.dataset.overControl = "")
                : delete e.dataset.overControl;
          },
          P = (e) => {
            M(e), i || (i = requestAnimationFrame(O));
          },
          N = (t) => {
            M(t),
              (e.dataset.snap = ""),
              o && (o.dataset.snap = ""),
              cancelAnimationFrame(i),
              R(),
              (T = 0),
              O(),
              (e.dataset.active = ""),
              o && (o.dataset.active = ""),
              cancelAnimationFrame(a),
              (a = requestAnimationFrame(() => {
                a = requestAnimationFrame(() => {
                  delete e.dataset.snap, o && delete o.dataset.snap;
                });
              }));
          },
          D = () => {
            if (
              (delete e.dataset.active,
              o && delete o.dataset.active,
              A || (!k && !C))
            )
              return;
            cancelAnimationFrame(i);
            const n = t.getBoundingClientRect(),
              a = l,
              s = `${d - n.left + a(k)}px`,
              c = `${p - n.top + a(C)}px`;
            for (const t of ["--spotlight-x", "--spotlight-glow-x"])
              e.style.setProperty(t, s);
            for (const t of ["--spotlight-y", "--spotlight-glow-y"])
              e.style.setProperty(t, c);
            if (o) {
              const e = r.getBoundingClientRect();
              o.style.setProperty("--edge-x", `${d - e.left + 1 + a(k)}px`),
                o.style.setProperty("--edge-y", `${p - e.top + 1 + a(C)}px`);
            }
          };
        r.addEventListener("pointerenter", N),
          r.addEventListener("pointermove", P),
          r.addEventListener("pointerleave", D);
        const j = () => {
            void 0 !== e.dataset.active && R();
          },
          L = new ResizeObserver(j);
        L.observe(r), document.fonts?.addEventListener("loadingdone", j);
        let F = 0;
        const U = new IntersectionObserver((e) => {
          var r;
          n &&
            e.some(s) &&
            (U.disconnect(),
            (r = () => {
              (function (e) {
                const t = _.get(e);
                if (t) return t;
                const n = new Promise((t) => {
                  const n = new Image();
                  (n.crossOrigin = "anonymous"),
                    (n.onload = () => {
                      try {
                        const e = document.createElement("canvas");
                        (e.width = b), (e.height = b);
                        const r = e.getContext("2d", {
                          willReadFrequently: !0,
                        });
                        if (!r) return t(null);
                        r.drawImage(n, 0, 0, b, b);
                        const { data: o } = r.getImageData(0, 0, b, b);
                        t(
                          (function (e) {
                            const t = Array.from({ length: 12 }, () => ({
                              weight: 0,
                              r: 0,
                              g: 0,
                              b: 0,
                            }));
                            for (let n = 0; n + 3 < e.length; n += 4) {
                              const r = e[n] ?? 0,
                                o = e[n + 1] ?? 0,
                                i = e[n + 2] ?? 0,
                                a = e[n + 3] ?? 0,
                                s = Math.max(r, o, i),
                                l = Math.min(r, o, i);
                              if (a < 200 || s < 40) continue;
                              const c = (s - l) / s;
                              if (c < 0.3) continue;
                              const u =
                                t[
                                  Math.floor((S(r, o, i, s, l) / 360) * 12) % 12
                                ];
                              u &&
                                ((u.weight += c),
                                (u.r += r * c),
                                (u.g += o * c),
                                (u.b += i * c));
                            }
                            const n = t.reduce((e, t) =>
                              t.weight > e.weight ? t : e,
                            );
                            if (0 === n.weight) return null;
                            const r = (e) => Math.round(e / n.weight);
                            return `rgb(${r(n.r)} ${r(n.g)} ${r(n.b)})`;
                          })(o),
                        );
                      } catch {
                        t(null);
                      }
                    }),
                    (n.onerror = () => t(null)),
                    (n.src = e);
                });
                return _.set(e, n), n;
              })(n).then((e) => {
                x &&
                  e &&
                  (t.style.setProperty("--spotlight-dot-color", e),
                  o?.style.setProperty("--spotlight-dot-color", e));
              });
            }),
            (F =
              "function" == typeof window.requestIdleCallback
                ? window.requestIdleCallback(r, { timeout: 2e3 })
                : window.setTimeout(r, 200)));
        });
        return (
          n && U.observe(r),
          () => {
            var e;
            (x = !1),
              L.disconnect(),
              document.fonts?.removeEventListener("loadingdone", j),
              U.disconnect(),
              (e = F),
              "function" == typeof window.cancelIdleCallback
                ? window.cancelIdleCallback(e)
                : window.clearTimeout(e),
              r.removeEventListener("pointerenter", N),
              r.removeEventListener("pointermove", P),
              r.removeEventListener("pointerleave", D),
              cancelAnimationFrame(i),
              cancelAnimationFrame(a),
              window.clearTimeout(I),
              t.style.removeProperty("--spotlight-dot-color"),
              o?.style.removeProperty("--spotlight-dot-color");
          }
        );
      }),
      (w = [n]),
      (t[0] = n),
      (t[1] = x),
      (t[2] = w))
    : ((x = t[1]), (w = t[2])),
    (0, i.useEffect)(x, w);
  const E = p && "card-spotlight-feather";
  let T, k, C, I;
  return (
    t[3] !== E
      ? ((T = (0, a.cn)(
          "card-spotlight-frame pointer-events-none absolute inset-0 -z-10 rounded-[inherit]",
          E,
        )),
        (t[3] = E),
        (t[4] = T))
      : (T = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((k = (0, r.jsx)("span", {
          className: "card-spotlight absolute inset-0",
        })),
        (C = (0, r.jsx)("span", {
          className: "card-dots absolute inset-0",
        })),
        (t[5] = k),
        (t[6] = C))
      : ((k = t[5]), (C = t[6])),
    t[7] !== T
      ? ((I = (0, r.jsxs)("span", {
          ref: y,
          "aria-hidden": !0,
          className: T,
          children: [k, C],
        })),
        (t[7] = T),
        (t[8] = I))
      : (I = t[8]),
    I
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */);
function s(e) {
  return e.isIntersecting;
}
function l(e) {
  return Math.max(-d, Math.min(d, e * p));
}
function c(e) {
  return e.getBoundingClientRect();
}
const u = 90,
  d = 24,
  p = 60,
  f = 40,
  h = 28,
  m = 14,
  g = 10,
  y = [0.15, 0.3, 0.45, 0.6, 0.75, 0.9].map((e) => [e, e * e * (3 - 2 * e)]);
function v(e, t, n, r) {
  const o = e.width / 2,
    i = e.height / 2,
    a = e.left - t.left + o,
    s = e.top - t.top + i,
    l = o * Math.SQRT2 + n,
    c = i * Math.SQRT2 + r,
    u = Math.min(0.9, 1.06 * Math.hypot(o / l, i / c)),
    d = (e) => `${(100 * e).toFixed(1)}%`,
    p = y.map(
      ([e = 0, t = 0]) => `rgb(0 0 0 / ${t.toFixed(3)}) ${d(u + (1 - u) * e)}`,
    );
  return `radial-gradient(${l}px ${c}px at ${a}px ${s}px, transparent ${d(u)}, ${p.join(", ")}, #000)`;
}
const b = 32;
function S(e, t, n, r, o) {
  const i = r - o;
  return (
    (60 *
      (r === e
        ? ((t - n) / i) % 6
        : r === t
          ? (n - e) / i + 2
          : (e - t) / i + 4) +
      360) %
    360
  );
}
const _ = new Map();
