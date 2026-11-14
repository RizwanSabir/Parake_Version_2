// app/components/top-bar.js — webpack module 64945
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TopBar = function (e) {
  const t = (0, o.c)(31),
    { onMinimize: n, hasActivePlan: m, isPlanLoading: g } = e,
    { showLocationSelectorScreen: y } = (0, c.useLocationOnScreen)(),
    v = (0, s.useDragHandle)();
  let b;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((b = function () {
        window.electron.ipcRendererProxy.invoke("renderer/quit-app");
      }),
      (t[0] = b))
    : (b = t[0]);
  const S = b;
  let _, x, w, E, T, k, C, I, A, O, R, M, P, N;
  return (
    t[1] !== v
      ? ((_ = (e) => {
          (0, l.pressedOnControl)(e.target) || v?.onPointerDown(e, "top_bar");
        }),
        (t[1] = v),
        (t[2] = _))
      : (_ = t[2]),
    t[3] !== v
      ? ((x = (e) => v?.onPointerDown(e, "logo")), (t[3] = v), (t[4] = x))
      : (x = t[4]),
    t[5] !== n || t[6] !== x
      ? ((w = (0, r.jsx)(h.TopBarLogo, {
          onMinimize: n,
          onPointerDown: x,
        })),
        (t[5] = n),
        (t[6] = x),
        (t[7] = w))
      : (w = t[7]),
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, r.jsx)(d.CreditsButton, {})), (t[8] = E))
      : (E = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = (0, r.jsx)(a.HideIcon, {})), (t[9] = T))
      : (T = t[9]),
    t[10] !== n
      ? ((k = (0, r.jsx)(f.TopBarIconButton, {
          icon: T,
          tooltip: "Hide",
          ariaLabel: "Hide",
          onClick: n,
        })),
        (t[10] = n),
        (t[11] = k))
      : (k = t[11]),
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((C = (0, r.jsx)(i.Move, { className: "h-4 w-4" })), (t[12] = C))
      : (C = t[12]),
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = (0, r.jsxs)("span", {
          className: "flex flex-row items-center gap-0.5",
          children: [
            "Hold and drag to move (",
            (0, r.jsx)(u.Shortcut, {
              shortcuts: [u.ShortcutKey, u.ShiftKey, i.Move],
            }),
            ")",
          ],
        })),
        (t[13] = I))
      : (I = t[13]),
    t[14] !== v
      ? ((A = (e) => v?.onPointerDown(e, "move_button")),
        (t[14] = v),
        (t[15] = A))
      : (A = t[15]),
    t[16] !== y || t[17] !== A
      ? ((O = (0, r.jsx)(f.TopBarIconButton, {
          icon: C,
          tooltip: I,
          ariaLabel: "Move",
          onClick: y,
          onPointerDown: A,
        })),
        (t[16] = y),
        (t[17] = A),
        (t[18] = O))
      : (O = t[18]),
    t[19] !== m || t[20] !== g
      ? ((R = (0, r.jsx)(p.MoreSelect, {
          hasActivePlan: m,
          isPlanLoading: g,
        })),
        (t[19] = m),
        (t[20] = g),
        (t[21] = R))
      : (R = t[21]),
    t[22] === Symbol.for("react.memo_cache_sentinel")
      ? ((M = (0, r.jsx)(f.TopBarIconButton, {
          icon: (0, r.jsx)(i.X, { className: "h-4 w-4" }),
          tooltip: "Close",
          ariaLabel: "Close",
          variant: "destructive",
          onClick: S,
        })),
        (t[22] = M))
      : (M = t[22]),
    t[23] !== O || t[24] !== R || t[25] !== k
      ? ((P = (0, r.jsxs)("div", {
          className: "flex flex-row items-center gap-2",
          children: [
            E,
            (0, r.jsxs)("div", {
              className: "flex flex-row items-center gap-1",
              children: [k, O, R, M],
            }),
          ],
        })),
        (t[23] = O),
        (t[24] = R),
        (t[25] = k),
        (t[26] = P))
      : (P = t[26]),
    t[27] !== P || t[28] !== _ || t[29] !== w
      ? ((N = (0, r.jsxs)("div", {
          className: "flex flex-row justify-between px-3 py-2 select-none",
          onPointerDown: _,
          children: [w, P],
        })),
        (t[27] = P),
        (t[28] = _),
        (t[29] = w),
        (t[30] = N))
      : (N = t[30]),
    N
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(52243 /* vendor/module-52243 */),
  s = n(37438 /* app/hooks/use-drag-handle */),
  l = n(87230 /* vendor/module-87230 */),
  c = n(63324 /* app/components/location-on-screen-provider */),
  u = n(21693 /* app/components/shortcut */),
  d = n(82683 /* app/components/credits-button */),
  p = n(73486 /* app/components/on-click-73486 */),
  f = n(4274 /* vendor/module-4274 */),
  h = n(32148 /* app/components/top-bar-logo */);
