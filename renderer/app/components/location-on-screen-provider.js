// app/components/location-on-screen-provider.js — webpack module 63324
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.LocationOnScreenProvider = function (e) {
  const t = (0, o.c)(35),
    { children: n } = e,
    [u, d] = (0, i.useState)(null),
    [p, f] = (0, i.useState)(l.NO_OFFSET),
    [h, m] = (0, i.useState)(null),
    [g, y] = (0, i.useState)(!1);
  let v;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = function (e, t) {
        const n = void 0 === t ? l.NO_OFFSET : t,
          r = (0, l.clampOffset)(e, n);
        d(e),
          f(r),
          m(null),
          window.electron.ipcRendererProxy.invoke(
            "renderer/set-location-on-screen",
            { location: e, offset: r },
          );
      }),
      (t[0] = v))
    : (v = t[0]);
  const b = v;
  let S;
  t[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((S = function (e) {
        d(e);
      }),
      (t[1] = S))
    : (S = t[1]);
  const _ = S,
    [x, w] = (0, i.useState)(!1);
  let E;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((E = function (e) {
        w(e);
      }),
      (t[2] = E))
    : (E = t[2]);
  const T = E,
    [k, C] = (0, i.useState)(null);
  let I;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((I = (e) => {
        if (0 === e.width || 0 === e.height) return;
        const t = {
          width: Math.round(e.width),
          height: Math.round(e.height),
        };
        C((e) => (e?.width === t.width && e.height === t.height ? e : t));
      }),
      (t[3] = I))
    : (I = t[3]);
  const A = I,
    [O, R] = (0, i.useState)(null),
    M = (0, i.useRef)(O);
  let P, N;
  t[4] !== O
    ? ((P = () => {
        M.current = O;
      }),
      (t[4] = O),
      (t[5] = P))
    : (P = t[5]),
    (0, i.useLayoutEffect)(P),
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((N = (e) => {
          const { initialLocation: t, ...n } = e;
          R(n),
            _(t),
            window.electron.ipcRendererProxy.invoke(
              "renderer/set-ignore-mouse-events",
              !1,
            );
        }),
        (t[6] = N))
      : (N = t[6]);
  const D = N;
  let j;
  t[7] === Symbol.for("react.memo_cache_sentinel")
    ? ((j = (e, t) => {
        R((t) => (t ? { ...t, cursor: e } : t)), _(t);
      }),
      (t[7] = j))
    : (j = t[7]);
  const L = j;
  let F;
  t[8] === Symbol.for("react.memo_cache_sentinel")
    ? ((F = (e) => {
        const t = M.current;
        e
          ? (b(e.location, e.offset), "circle" === e.handle && m(e.corner))
          : t && _(t.originalLocation),
          R(null);
      }),
      (t[8] = F))
    : (F = t[8]);
  const U = F;
  let B, z, H, V, q, G;
  t[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((z = () => {
        window.electron.ipcRendererProxy
          .invoke("renderer/get-location-on-screen")
          .then((e) => {
            const { location: t, offset: n } = e;
            d(t), f((0, l.clampOffset)(t, n));
          });
      }),
      (B = []),
      (t[9] = B),
      (t[10] = z))
    : ((B = t[9]), (z = t[10])),
    (0, i.useEffect)(z, B),
    t[11] !== u || t[12] !== p
      ? ((H = () => {
          if (!u) return;
          const e = u,
            t = function (t) {
              (t === e && 0 === p.x && 0 === p.y) || b(t);
            },
            n = window.electron.ipcRendererProxy.on(
              "main/up-app-shortcut-pressed",
              () => t(e.replace("bottom", "top")),
            ),
            r = window.electron.ipcRendererProxy.on(
              "main/down-app-shortcut-pressed",
              () => t(e.replace("top", "bottom")),
            ),
            o = window.electron.ipcRendererProxy.on(
              "main/left-app-shortcut-pressed",
              () =>
                t(
                  e.endsWith("right")
                    ? e.replace("right", "center")
                    : e.replace("center", "left"),
                ),
            ),
            i = window.electron.ipcRendererProxy.on(
              "main/right-app-shortcut-pressed",
              () =>
                t(
                  e.endsWith("left")
                    ? e.replace("left", "center")
                    : e.replace("center", "right"),
                ),
            );
          return () => {
            n(), r(), o(), i();
          };
        }),
        (V = [u, p]),
        (t[11] = u),
        (t[12] = p),
        (t[13] = H),
        (t[14] = V))
      : ((H = t[13]), (V = t[14])),
    (0, i.useEffect)(H, V),
    t[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((q = () => T(!0)), (t[15] = q))
      : (q = t[15]),
    t[16] !== O ||
    t[17] !== g ||
    t[18] !== k ||
    t[19] !== u ||
    t[20] !== p ||
    t[21] !== h
      ? ((G = {
          locationOnScreen: u,
          offset: p,
          showLocationSelectorScreen: q,
          dragState: O,
          startDrag: D,
          updateDrag: L,
          endDrag: U,
          lastToolbarSize: k,
          rememberToolbarSize: A,
          parkedCircle: h,
          hiddenForScreenMove: g,
          setHiddenForScreenMove: y,
        }),
        (t[16] = O),
        (t[17] = g),
        (t[18] = k),
        (t[19] = u),
        (t[20] = p),
        (t[21] = h),
        (t[22] = G))
      : (G = t[22]);
  const W = G;
  let $;
  t[23] === Symbol.for("react.memo_cache_sentinel")
    ? (($ = function (e) {
        b(e), T(!1);
      }),
      (t[23] = $))
    : ($ = t[23]);
  const Y = $;
  if (!u) return null;
  const K = W,
    Z = x && "hidden";
  let Q, J, X, ee;
  return (
    t[24] !== Z ? ((Q = (0, a.cn)(Z)), (t[24] = Z), (t[25] = Q)) : (Q = t[25]),
    t[26] !== n || t[27] !== Q
      ? ((J = (0, r.jsx)("div", { className: Q, children: n })),
        (t[26] = n),
        (t[27] = Q),
        (t[28] = J))
      : (J = t[28]),
    t[29] !== x
      ? ((X =
          x &&
          (0, r.jsx)(s.LocationSelectorScreen, {
            onSelectLocation: Y,
          })),
        (t[29] = x),
        (t[30] = X))
      : (X = t[30]),
    t[31] !== K || t[32] !== J || t[33] !== X
      ? ((ee = (0, r.jsxs)(c.Provider, {
          value: K,
          children: [J, X],
        })),
        (t[31] = K),
        (t[32] = J),
        (t[33] = X),
        (t[34] = ee))
      : (ee = t[34]),
    ee
  );
}),
  (t.useLocationOnScreen = function () {
    const e = (0, i.useContext)(c);
    if (!e)
      throw new Error(
        "useLocationOnScreen must be used within a LocationOnScreenProvider",
      );
    return e;
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(76394 /* app/components/on-click-76394 */),
  l = n(39009 /* vendor/module-39009 */),
  c = (0, i.createContext)(void 0);
