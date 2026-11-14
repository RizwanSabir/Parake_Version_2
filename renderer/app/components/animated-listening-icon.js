// app/components/animated-listening-icon.js — webpack module 43052
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AnimatedListeningIcon = function (e) {
  const t = (0, o.c)(15),
    {
      tooltipContent: n,
      onClick: f,
      showLogo: h,
      logoHeight: m,
      minimized: g,
      error: y,
      isTranscribing: v,
      isMock: b,
    } = e,
    S = void 0 === m ? 28 : m,
    _ = void 0 !== v && v,
    x = void 0 !== b && b,
    { resolvedTheme: w } = (0, s.useTheme)(),
    E = (0, d.useDragHandle)();
  let T;
  t[0] !== E ||
  t[1] !== y ||
  t[2] !== x ||
  t[3] !== _ ||
  t[4] !== S ||
  t[5] !== g ||
  t[6] !== f ||
  t[7] !== w ||
  t[8] !== h
    ? ((T = (0, r.jsx)(l.TooltipTrigger, {
        render: h
          ? (0, r.jsx)(u.Logo, {
              white: "dark" === w,
              height: S,
              className: "pl-1",
              onClick: f,
            })
          : (0, r.jsx)(p.LiveSessionButton, {
              transparent: !g,
              onClick: f,
              onPointerDown: g ? (e) => E?.onPointerDown(e, "circle") : void 0,
              className: (0, c.cn)(g && "h-10 w-10"),
              children: (0, r.jsxs)("div", {
                className: (0, c.cn)(
                  "relative flex flex-row items-center justify-around",
                  g ? "h-10 w-6 py-2" : "h-8 py-2",
                  !g && (x ? "w-5" : "w-4"),
                ),
                children: [
                  x
                    ? (0, r.jsx)(a.MockListeningOrb, {
                        active: _,
                        theme: "dark" === w ? "dark" : "light",
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("div", {
                            className: (0, c.cn)(
                              "relative overflow-hidden rounded-full bg-lime-500/20",
                              g ? "w-1" : "w-0.5",
                              "h-1/2",
                            ),
                            children: (0, r.jsx)("div", {
                              className: (0, c.cn)(
                                "absolute right-0 bottom-0 left-0 h-full origin-bottom rounded-full bg-lime-500",
                                _ ? "animate-listening-bar h-full" : "h-0",
                              ),
                              style: {
                                animationDelay: "0ms",
                                animationDuration: "1200ms",
                              },
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, c.cn)(
                              "relative overflow-hidden rounded-full bg-lime-500/20",
                              g ? "w-1" : "w-0.5",
                              "h-full",
                            ),
                            children: (0, r.jsx)("div", {
                              className: (0, c.cn)(
                                "absolute right-0 bottom-0 left-0 h-full origin-bottom rounded-full bg-lime-500",
                                _ ? "animate-listening-bar h-full" : "h-0",
                              ),
                              style: {
                                animationDelay: "150ms",
                                animationDuration: "1100ms",
                              },
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: (0, c.cn)(
                              "relative overflow-hidden rounded-full bg-lime-500/20",
                              g ? "w-1" : "w-0.5",
                              "h-3/4",
                            ),
                            children: (0, r.jsx)("div", {
                              className: (0, c.cn)(
                                "absolute right-0 bottom-0 left-0 h-full origin-bottom rounded-full bg-lime-500",
                                _ ? "animate-listening-bar h-full" : "h-0",
                              ),
                              style: {
                                animationDelay: "300ms",
                                animationDuration: "1000ms",
                              },
                            }),
                          }),
                        ],
                      }),
                  y &&
                    (0, r.jsx)("div", {
                      className: "absolute",
                      children: (0, r.jsx)(i.AlertTriangle, {
                        className: "h-6 w-6 fill-neutral-100 text-red-500",
                      }),
                    }),
                ],
              }),
            }),
      })),
      (t[0] = E),
      (t[1] = y),
      (t[2] = x),
      (t[3] = _),
      (t[4] = S),
      (t[5] = g),
      (t[6] = f),
      (t[7] = w),
      (t[8] = h),
      (t[9] = T))
    : (T = t[9]);
  const k = y || n;
  let C, I;
  return (
    t[10] !== k
      ? ((C = (0, r.jsx)(l.TooltipContent, {
          className: "max-w-xs text-center",
          children: k,
        })),
        (t[10] = k),
        (t[11] = C))
      : (C = t[11]),
    t[12] !== T || t[13] !== C
      ? ((I = (0, r.jsxs)(l.Tooltip, { children: [T, C] })),
        (t[12] = T),
        (t[13] = C),
        (t[14] = I))
      : (I = t[14]),
    I
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(26614 /* vendor/module-26614 */),
  s = n(97867 /* app/components/theme-provider */),
  l = n(58055 /* app/components/tooltip */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(55233 /* app/components/logo */),
  d = n(37438 /* app/hooks/use-drag-handle */),
  p = n(11575 /* app/components/live-session-button */);
