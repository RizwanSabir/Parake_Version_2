// app/components/locked-session-shell.js — webpack module 59176
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LockedSessionShell = function (e) {
  const t = (0, o.c)(18),
    {
      lockVariant: n,
      onClaim: h,
      onCancel: m,
      hasActivePlan: g,
      isPlanLoading: y,
    } = e,
    [v, b] = (0, i.useState)(!1),
    S = (0, s.useBrand)();
  if (v) {
    let e, n, o, i;
    return (
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsx)(u.Shortcut, {
            shortcuts: [u.ShortcutKey, "H"],
          })),
          (t[0] = e))
        : (e = t[0]),
      t[1] !== S.name
        ? ((n = (0, r.jsxs)("div", {
            className: "flex flex-row items-center gap-0.5",
            children: [S.name, " (", e, ")"],
          })),
          (t[1] = S.name),
          (t[2] = n))
        : (n = t[2]),
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => b(!1)), (t[3] = o))
        : (o = t[3]),
      t[4] !== n
        ? ((i = (0, r.jsx)(l.DraggableContent, {
            minimized: !0,
            children: (0, r.jsx)(d.AnimatedListeningIcon, {
              tooltipContent: n,
              onClick: o,
              minimized: !0,
              isTranscribing: !1,
            }),
          })),
          (t[4] = n),
          (t[5] = i))
        : (i = t[5]),
      i
    );
  }
  let _, x, w, E, T;
  return (
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = (0, a.cn)(
          "bg-sidebar rounded-window flex max-h-screen shrink-0 flex-col gap-1 overflow-y-hidden border p-1",
          c.SHELL_WIDTH_CLASS,
        )),
        (t[6] = _))
      : (_ = t[6]),
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((x = () => b(!0)), (t[7] = x))
      : (x = t[7]),
    t[8] !== g || t[9] !== y
      ? ((w = (0, r.jsx)(f.TopBar, {
          hasActivePlan: g,
          isPlanLoading: y,
          onMinimize: x,
        })),
        (t[8] = g),
        (t[9] = y),
        (t[10] = w))
      : (w = t[10]),
    t[11] !== n || t[12] !== m || t[13] !== h
      ? ((E = (0, r.jsx)(p.LockedCallSessionScreen, {
          lockVariant: n,
          onCancelClick: m,
          onClaimClick: h,
        })),
        (t[11] = n),
        (t[12] = m),
        (t[13] = h),
        (t[14] = E))
      : (E = t[14]),
    t[15] !== w || t[16] !== E
      ? ((T = (0, r.jsxs)(l.DraggableContent, {
          className: _,
          children: [w, E],
        })),
        (t[15] = w),
        (t[16] = E),
        (t[17] = T))
      : (T = t[17]),
    T
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(74920 /* app/lib/apply-brand-attribute */),
  l = n(37438 /* app/hooks/use-drag-handle */),
  c = n(44825 /* vendor/module-44825 */),
  u = n(21693 /* app/components/shortcut */),
  d = n(43052 /* app/components/animated-listening-icon */),
  p = n(77080 /* app/components/locked-call-session-screen */),
  f = n(64945 /* app/components/top-bar */);
