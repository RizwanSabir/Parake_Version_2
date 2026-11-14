// app/hooks/use-drag-handle.js — webpack module 37438
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.useDragHandle = function () {
  return (0, i.useContext)(u);
}),
  (t.DraggableContent = function (e) {
    const t = (0, o.c)(63);
    let n, p, f, h;
    t[0] !== e
      ? (({ minimized: h, className: n, style: f, ...p } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = p),
        (t[3] = f),
        (t[4] = h))
      : ((n = t[1]), (p = t[2]), (f = t[3]), (h = t[4]));
    const m = void 0 !== h && h,
      {
        locationOnScreen: g,
        offset: y,
        dragState: v,
        lastToolbarSize: b,
        rememberToolbarSize: S,
        parkedCircle: _,
      } = (0, s.useLocationOnScreen)(),
      x = null !== v,
      w = (0, i.useRef)(null),
      [E, T] = (0, i.useState)(null);
    let k;
    t[5] !== E
      ? ((k = () =>
          E?.firstElementChild
            ? E.firstElementChild.getBoundingClientRect()
            : (w.current?.getBoundingClientRect() ?? null)),
        (t[5] = E),
        (t[6] = k))
      : (k = t[6]);
    const C = k;
    let I, A;
    t[7] !== m || t[8] !== S || t[9] !== E?.firstElementChild
      ? ((I = () => {
          const e = E?.firstElementChild ?? w.current;
          if (m || !e) return;
          const t = new ResizeObserver(() => {
            const { width: t, height: n } = e.getBoundingClientRect();
            S({ width: t, height: n });
          });
          return t.observe(e), () => t.disconnect();
        }),
        (t[7] = m),
        (t[8] = S),
        (t[9] = E?.firstElementChild),
        (t[10] = I))
      : (I = t[10]),
      t[11] !== m || t[12] !== S || t[13] !== E
        ? ((A = [m, E, S]), (t[11] = m), (t[12] = S), (t[13] = E), (t[14] = A))
        : (A = t[14]),
      (0, i.useEffect)(I, A);
    const [O, R] = (0, i.useState)(d),
      M = (0, i.useRef)(O);
    let P, N;
    t[15] !== O
      ? ((P = () => {
          M.current = O;
        }),
        (t[15] = O),
        (t[16] = P))
      : (P = t[16]),
      (0, i.useLayoutEffect)(P),
      t[17] !== x ||
      t[18] !== m ||
      t[19] !== _ ||
      t[20] !== E?.firstElementChild
        ? ((N = () => {
            const e = w.current;
            if (x || !e) return;
            const t = {
                width: window.innerWidth,
                height: window.innerHeight,
              },
              n = M.current,
              r = (e) => {
                const {
                  left: t,
                  top: r,
                  width: o,
                  height: i,
                } = e.getBoundingClientRect();
                return {
                  left: t - n.x,
                  top: r - n.y,
                  width: o,
                  height: i,
                };
              },
              o = r(m ? e : (E?.firstElementChild ?? e)),
              i = (0, l.fitInWindow)(o, t);
            let a = { x: i.x - o.left, y: i.y - o.top };
            const s = m ? e.firstElementChild : null;
            if (s) {
              const e = r(s),
                n = _
                  ? {
                      left: _.x * t.width + e.left - o.left,
                      top: _.y * t.height + e.top - o.top,
                    }
                  : { left: e.left + a.x, top: e.top + a.y },
                i = (0, l.fitInWindow)({ ...e, ...n }, t);
              a = { x: i.x - e.left, y: i.y - e.top };
            }
            const c = { x: Math.round(a.x), y: Math.round(a.y) };
            R((e) => (e.x === c.x && e.y === c.y ? e : c));
          }),
          (t[17] = x),
          (t[18] = m),
          (t[19] = _),
          (t[20] = E?.firstElementChild),
          (t[21] = N))
        : (N = t[21]);
    const D = N;
    let j, L, F, U, B;
    t[22] !== D
      ? ((j = () => {
          D();
        }),
        (t[22] = D),
        (t[23] = j))
      : (j = t[23]),
      t[24] !== D || t[25] !== g || t[26] !== y
        ? ((L = [D, g, y]), (t[24] = D), (t[25] = g), (t[26] = y), (t[27] = L))
        : (L = t[27]),
      (0, i.useLayoutEffect)(j, L),
      t[28] !== D || t[29] !== E?.firstElementChild
        ? ((F = () => {
            const e = w.current;
            if (!e) return;
            const t = new ResizeObserver(D);
            t.observe(e);
            const n = E?.firstElementChild;
            return (
              n && t.observe(n),
              window.addEventListener("resize", D),
              () => {
                t.disconnect(), window.removeEventListener("resize", D);
              }
            );
          }),
          (t[28] = D),
          (t[29] = E?.firstElementChild),
          (t[30] = F))
        : (F = t[30]),
      t[31] !== D || t[32] !== E
        ? ((U = [D, E]), (t[31] = D), (t[32] = E), (t[33] = U))
        : (U = t[33]),
      (0, i.useEffect)(F, U),
      t[34] !== C
        ? ((B = { getToolbarRect: C }), (t[34] = C), (t[35] = B))
        : (B = t[35]);
    const { onPointerDown: z } = (0, c.useDragToMove)(B);
    let H;
    t[36] !== v || t[37] !== g
      ? ((H = v
          ? {
              position: "fixed",
              left: v.cursor.x - v.grabOffset.x,
              width: v.toolbarSize.width,
              zIndex: 50,
              ...(g.startsWith("bottom")
                ? {
                    bottom:
                      window.innerHeight -
                      (v.cursor.y - v.grabOffset.y + v.toolbarSize.height),
                  }
                : { top: v.cursor.y - v.grabOffset.y }),
            }
          : void 0),
        (t[36] = v),
        (t[37] = g),
        (t[38] = H))
      : (H = t[38]);
    const V = H;
    let q;
    t[39] !== b || t[40] !== m
      ? ((q = m && b ? { ...b } : void 0),
        (t[39] = b),
        (t[40] = m),
        (t[41] = q))
      : (q = t[41]);
    const G = q;
    let W;
    t[42] !== x || t[43] !== O
      ? ((W =
          x || (!O.x && !O.y)
            ? void 0
            : { transform: `translate(${O.x}px, ${O.y}px)` }),
        (t[42] = x),
        (t[43] = O),
        (t[44] = W))
      : (W = t[44]);
    const $ = W;
    let Y;
    t[45] !== z
      ? ((Y = { onPointerDown: z, registerTarget: T }),
        (t[45] = z),
        (t[46] = Y))
      : (Y = t[46]);
    const K = m ? "true" : void 0;
    let Z, Q, J, X;
    return (
      t[47] !== n || t[48] !== m
        ? ((Z = m
            ? (0, a.cn)("flex shrink-0 items-start justify-center", n)
            : n),
          (t[47] = n),
          (t[48] = m),
          (t[49] = Z))
        : (Z = t[49]),
      t[50] !== G || t[51] !== V || t[52] !== $ || t[53] !== f
        ? ((Q = { ...G, ...f, ...$, ...V }),
          (t[50] = G),
          (t[51] = V),
          (t[52] = $),
          (t[53] = f),
          (t[54] = Q))
        : (Q = t[54]),
      t[55] !== p || t[56] !== K || t[57] !== Z || t[58] !== Q
        ? ((J = (0, r.jsx)("div", {
            "data-transparent": K,
            ...p,
            ref: w,
            className: Z,
            style: Q,
          })),
          (t[55] = p),
          (t[56] = K),
          (t[57] = Z),
          (t[58] = Q),
          (t[59] = J))
        : (J = t[59]),
      t[60] !== Y || t[61] !== J
        ? ((X = (0, r.jsx)(u.Provider, { value: Y, children: J })),
          (t[60] = Y),
          (t[61] = J),
          (t[62] = X))
        : (X = t[62]),
      X
    );
  }),
  (t.DragTarget = function (e) {
    const t = (0, o.c)(3),
      { children: n } = e,
      a = (0, i.useContext)(u);
    if (!a)
      throw new Error("DragTarget must be rendered inside a DraggableContent");
    const { registerTarget: s } = a;
    let l;
    return (
      t[0] !== n || t[1] !== s
        ? ((l = (0, r.jsx)("div", {
            ref: s,
            className: "contents",
            children: n,
          })),
          (t[0] = n),
          (t[1] = s),
          (t[2] = l))
        : (l = t[2]),
      l
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(63324 /* app/components/location-on-screen-provider */),
  l = n(39009 /* vendor/module-39009 */),
  c = n(29833 /* app/lib/is-dragging */),
  u = (0, i.createContext)(null),
  d = { x: 0, y: 0 };
