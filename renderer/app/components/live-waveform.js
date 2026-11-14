// app/components/live-waveform.js — webpack module 2496
// params: (e, t, n) = (module, exports, require)
t.LiveWaveform = void 0;
const r = n(31085 /* vendor/module-31085 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(29113 /* vendor/module-29113 */);
t.LiveWaveform = ({
  active: e = !1,
  processing: t = !1,
  deviceId: n,
  stream: a,
  barWidth: s = 3,
  barGap: l = 1,
  barRadius: c = 1.5,
  barColor: u,
  fadeEdges: d = !0,
  fadeWidth: p = 24,
  barHeight: f = 4,
  height: h = 64,
  sensitivity: m = 1,
  smoothingTimeConstant: g = 0.8,
  fftSize: y = 256,
  historySize: v = 60,
  updateRate: b = 30,
  mode: S = "static",
  onError: _,
  onStreamReady: x,
  onStreamEnd: w,
  className: E,
  ...T
}) => {
  const k = (0, o.useRef)(null),
    C = (0, o.useRef)(null),
    I = (0, o.useRef)([]),
    A = (0, o.useRef)(null),
    O = (0, o.useRef)(null),
    R = (0, o.useRef)(null),
    M = (0, o.useRef)(!1),
    P = (0, o.useRef)(0),
    N = (0, o.useRef)(0),
    D = (0, o.useRef)(null),
    j = (0, o.useRef)([]),
    L = (0, o.useRef)(0),
    F = (0, o.useRef)([]),
    U = (0, o.useRef)(!0),
    B = (0, o.useRef)(null),
    z = (0, o.useRef)(0),
    H = "number" == typeof h ? `${h}px` : h;
  return (
    (0, o.useEffect)(() => {
      const e = k.current,
        t = C.current;
      if (!e || !t) return;
      const n = new ResizeObserver(() => {
        const n = t.getBoundingClientRect(),
          r = window.devicePixelRatio || 1;
        (e.width = n.width * r),
          (e.height = n.height * r),
          (e.style.width = `${n.width}px`),
          (e.style.height = `${n.height}px`);
        const o = e.getContext("2d");
        o && o.scale(r, r),
          (B.current = null),
          (z.current = n.width),
          (U.current = !0);
      });
      return n.observe(t), () => n.disconnect();
    }, []),
    (0, o.useEffect)(() => {
      if (t && !e) {
        let e = 0;
        L.current = 0;
        const t = () => {
          (e += 0.03), (L.current = Math.min(1, L.current + 0.02));
          const n = [],
            r = Math.floor(
              (C.current?.getBoundingClientRect().width || 200) / (s + l),
            );
          if ("static" === S) {
            const t = Math.floor(r / 2);
            for (let o = 0; o < r; o++) {
              const r = (o - t) / t,
                i = 1 - 0.4 * Math.abs(r),
                a =
                  (0.25 * Math.sin(1.5 * e + 3 * r) +
                    0.2 * Math.sin(0.8 * e - 2 * r) +
                    0.15 * Math.cos(2 * e + r) +
                    0.2) *
                  i;
              let s = a;
              if (j.current.length > 0 && L.current < 1) {
                const e = Math.min(o, j.current.length - 1);
                s = (j.current[e] ?? 0) * (1 - L.current) + a * L.current;
              }
              n.push(Math.max(0.05, Math.min(1, s)));
            }
          } else
            for (let t = 0; t < r; t++) {
              const o = (t - r / 2) / (r / 2),
                i = 1 - 0.4 * Math.abs(o),
                a =
                  (0.25 * Math.sin(1.5 * e + 0.15 * t) +
                    0.2 * Math.sin(0.8 * e - 0.1 * t) +
                    0.15 * Math.cos(2 * e + 0.05 * t) +
                    0.2) *
                  i;
              let s = a;
              if (j.current.length > 0 && L.current < 1) {
                const e = Math.floor((t / r) * j.current.length);
                s = (j.current[e] ?? 0) * (1 - L.current) + a * L.current;
              }
              n.push(Math.max(0.05, Math.min(1, s)));
            }
          "static" === S ? (F.current = n) : (I.current = n),
            (U.current = !0),
            (D.current = requestAnimationFrame(t));
        };
        return (
          t(),
          () => {
            D.current && cancelAnimationFrame(D.current);
          }
        );
      }
      if (
        !e &&
        !t &&
        ("static" === S ? F.current.length > 0 : I.current.length > 0)
      ) {
        let e = 0;
        const t = () => {
          (e += 0.03),
            e < 1
              ? ("static" === S
                  ? (F.current = F.current.map((t) => t * (1 - e)))
                  : (I.current = I.current.map((t) => t * (1 - e))),
                (U.current = !0),
                requestAnimationFrame(t))
              : ("static" === S ? (F.current = []) : (I.current = []),
                (U.current = !0));
        };
        t();
      }
    }, [t, e, s, l, S]),
    (0, o.useEffect)(() => {
      const t = () => {
        R.current &&
          (M.current && R.current.getTracks().forEach((e) => e.stop()),
          (R.current = null),
          (M.current = !1),
          w?.());
      };
      return e
        ? ((async () => {
            try {
              const e =
                a ??
                (await navigator.mediaDevices.getUserMedia({
                  audio: n
                    ? {
                        deviceId: { exact: n },
                        echoCancellation: !0,
                        noiseSuppression: !0,
                        autoGainControl: !0,
                      }
                    : {
                        echoCancellation: !0,
                        noiseSuppression: !0,
                        autoGainControl: !0,
                      },
                }));
              (R.current = e), (M.current = !a), x?.(e);
              const t = new (window.AudioContext ||
                  window.webkitAudioContext)(),
                r = t.createAnalyser();
              (r.fftSize = y),
                (r.smoothingTimeConstant = g),
                t.createMediaStreamSource(e).connect(r),
                (O.current = t),
                (A.current = r),
                (I.current = []);
            } catch (e) {
              _?.(e);
            }
          })(),
          () => {
            t(),
              O.current &&
                "closed" !== O.current.state &&
                (O.current.close(), (O.current = null)),
              P.current && (cancelAnimationFrame(P.current), (P.current = 0));
          })
        : (t(),
          O.current &&
            "closed" !== O.current.state &&
            (O.current.close(), (O.current = null)),
          void (
            P.current && (cancelAnimationFrame(P.current), (P.current = 0))
          ));
    }, [e, n, a, y, g, _, x, w]),
    (0, o.useEffect)(() => {
      const n = k.current;
      if (!n) return;
      const r = n.getContext("2d");
      if (!r) return;
      let o;
      U.current = !0;
      const i = (a) => {
        const h = n.getBoundingClientRect();
        if (e && a - N.current > b && ((N.current = a), A.current)) {
          const e = new Uint8Array(A.current.frequencyBinCount);
          if ((A.current.getByteFrequencyData(e), "static" === S)) {
            const t = Math.floor(0.05 * e.length),
              n = Math.floor(0.4 * e.length),
              r = e.slice(t, n),
              o = Math.floor(h.width / (s + l)),
              i = Math.floor(o / 2),
              a = [];
            for (let e = i - 1; e >= 0; e--) {
              const t = Math.floor((e / i) * r.length),
                n = Math.min(1, ((r[t] ?? 0) / 255) * m);
              a.push(Math.max(0.05, n));
            }
            for (let e = 0; e < i; e++) {
              const t = Math.floor((e / i) * r.length),
                n = Math.min(1, ((r[t] ?? 0) / 255) * m);
              a.push(Math.max(0.05, n));
            }
            (F.current = a), (j.current = a);
          } else {
            let t = 0;
            const n = Math.floor(0.05 * e.length),
              r = Math.floor(0.4 * e.length),
              o = e.slice(n, r);
            for (let e = 0; e < o.length; e++) t += o[e] ?? 0;
            const i = (t / o.length / 255) * m;
            I.current.push(Math.min(1, Math.max(0.05, i))),
              (j.current = [...I.current]),
              I.current.length > v && I.current.shift();
          }
          U.current = !0;
        }
        if (!U.current && !e) return void (o = requestAnimationFrame(i));
        (U.current = e), r.clearRect(0, 0, h.width, h.height);
        const g = u || getComputedStyle(n).color || "#000",
          y = s + l,
          _ = Math.floor(h.width / y),
          x = h.height / 2,
          w = "static" === S ? F.current.length > 0 : I.current.length > 0;
        if (!e && !t && !w) {
          (r.fillStyle = g), (r.globalAlpha = 0.15);
          const e = x - f / 2;
          for (let t = 0; t < _; t++) {
            const n = t * y;
            c > 0
              ? (r.beginPath(), r.roundRect(n, e, s, f, c), r.fill())
              : r.fillRect(n, e, s, f);
          }
          r.globalAlpha = 1;
        }
        if ("static" === S) {
          const e = F.current;
          for (let t = 0; t < _ && t < e.length; t++) {
            const n = e[t] || 0.1,
              o = t * y,
              i = Math.max(f, n * h.height * 0.8),
              a = x - i / 2;
            (r.fillStyle = g),
              (r.globalAlpha = 0.4 + 0.6 * n),
              c > 0
                ? (r.beginPath(), r.roundRect(o, a, s, i, c), r.fill())
                : r.fillRect(o, a, s, i);
          }
        } else
          for (let e = 0; e < _ && e < I.current.length; e++) {
            const t = I.current.length - 1 - e,
              n = I.current[t] || 0.1,
              o = h.width - (e + 1) * y,
              i = Math.max(f, n * h.height * 0.8),
              a = x - i / 2;
            (r.fillStyle = g),
              (r.globalAlpha = 0.4 + 0.6 * n),
              c > 0
                ? (r.beginPath(), r.roundRect(o, a, s, i, c), r.fill())
                : r.fillRect(o, a, s, i);
          }
        if (d && p > 0 && h.width > 0) {
          if (!B.current || z.current !== h.width) {
            const e = r.createLinearGradient(0, 0, h.width, 0),
              t = Math.min(0.3, p / h.width);
            e.addColorStop(0, "rgba(255,255,255,1)"),
              e.addColorStop(t, "rgba(255,255,255,0)"),
              e.addColorStop(1 - t, "rgba(255,255,255,0)"),
              e.addColorStop(1, "rgba(255,255,255,1)"),
              (B.current = e),
              (z.current = h.width);
          }
          (r.globalCompositeOperation = "destination-out"),
            (r.fillStyle = B.current),
            r.fillRect(0, 0, h.width, h.height),
            (r.globalCompositeOperation = "source-over");
        }
        (r.globalAlpha = 1), (o = requestAnimationFrame(i));
      };
      return (
        (o = requestAnimationFrame(i)),
        () => {
          o && cancelAnimationFrame(o);
        }
      );
    }, [e, t, m, b, v, s, f, l, c, u, d, p, S]),
    (0, r.jsx)("div", {
      className: (0, i.cn)("relative h-full w-full", E),
      ref: C,
      style: { height: H },
      "aria-label": e
        ? "Live audio waveform"
        : t
          ? "Processing audio"
          : "Audio waveform idle",
      role: "img",
      ...T,
      children: (0, r.jsx)("canvas", {
        className: "block h-full w-full",
        ref: k,
        "aria-hidden": "true",
      }),
    })
  );
};
