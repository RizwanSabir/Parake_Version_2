// app/components/resize-button.js — webpack module 12536
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ResizeButton = function (e) {
  const t = (0, o.c)(22),
    {
      width: n,
      height: d,
      panelRef: p,
      onResize: f,
      onResizeEnd: h,
      className: m,
    } = e,
    { locationOnScreen: g } = (0, u.useLocationOnScreen)(),
    [y, v] = (0, a.useState)(!1),
    [b, S] = (0, a.useState)(null);
  let _, x, w, E, T, k, C, I;
  return (
    t[0] !== y || t[1] !== g || t[2] !== f || t[3] !== h || t[4] !== b
      ? ((_ = () => {
          if (!y || !b) return;
          const e = (e) => {
              let t = e.clientX - b.x;
              const n = e.clientY - b.y;
              g.endsWith("center") && (t *= 2),
                f({
                  width: g.endsWith("right") ? b.width - t : b.width + t,
                  height: g.startsWith("top") ? b.height + n : b.height - n,
                });
            },
            t = () => {
              v(!1),
                S(null),
                (document.body.style.cursor = ""),
                (document.body.style.userSelect = ""),
                h?.();
            };
          return (
            (document.body.style.cursor = "nwse-resize"),
            (document.body.style.userSelect = "none"),
            window.addEventListener("mousemove", e),
            window.addEventListener("mouseup", t),
            () => {
              window.removeEventListener("mousemove", e),
                window.removeEventListener("mouseup", t),
                (document.body.style.cursor = ""),
                (document.body.style.userSelect = "");
            }
          );
        }),
        (x = [y, b, f, h, g]),
        (t[0] = y),
        (t[1] = g),
        (t[2] = f),
        (t[3] = h),
        (t[4] = b),
        (t[5] = _),
        (t[6] = x))
      : ((_ = t[5]), (x = t[6])),
    (0, a.useEffect)(_, x),
    t[7] !== m ? ((w = (0, l.cn)(m)), (t[7] = m), (t[8] = w)) : (w = t[8]),
    t[9] !== d || t[10] !== p || t[11] !== n
      ? ((E = (e) => {
          e.preventDefault();
          const t = p.current?.getBoundingClientRect();
          v(!0),
            S({
              x: e.clientX,
              y: e.clientY,
              width: t?.width || n,
              height: t?.height || d,
            });
        }),
        (t[9] = d),
        (t[10] = p),
        (t[11] = n),
        (t[12] = E))
      : (E = t[12]),
    t[13] !== g
      ? ((T =
          "top-right" === g || "bottom-left" === g || "bottom-center" === g
            ? (0, r.jsx)(i.MoveDiagonal, { className: "h-4 w-4" })
            : (0, r.jsx)(i.MoveDiagonal2, { className: "h-4 w-4" })),
        (t[13] = g),
        (t[14] = T))
      : (T = t[14]),
    t[15] !== w || t[16] !== E || t[17] !== T
      ? ((k = (0, r.jsx)(s.TooltipTrigger, {
          render: (0, r.jsx)(c.LiveSessionButton, {
            className: w,
            onMouseDown: E,
            transparent: !0,
            children: T,
          }),
        })),
        (t[15] = w),
        (t[16] = E),
        (t[17] = T),
        (t[18] = k))
      : (k = t[18]),
    t[19] === Symbol.for("react.memo_cache_sentinel")
      ? ((C = (0, r.jsx)(s.TooltipContent, { children: "Resize" })),
        (t[19] = C))
      : (C = t[19]),
    t[20] !== k
      ? ((I = (0, r.jsxs)(s.Tooltip, { children: [k, C] })),
        (t[20] = k),
        (t[21] = I))
      : (I = t[21]),
    I
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(58055 /* app/components/tooltip */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(11575 /* app/components/live-session-button */),
  u = n(63324 /* app/components/location-on-screen-provider */);
