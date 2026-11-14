// app/components/on-click-92284.js — webpack module 92284
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ThemeControls = function (e) {
  const t = (0, o.c)(13),
    { className: n, scope: i, surface: f } = e,
    { theme: h, setTheme: m } = (0, a.useThemeSetting)(i);
  let g, y, v, b, S;
  return (
    t[0] !== n
      ? ((g = (0, c.cn)(
          "flex flex-row items-center justify-between gap-2 border-t px-2 py-1",
          n,
        )),
        (t[0] = n),
        (t[1] = g))
      : (g = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((y = (0, r.jsx)("span", {
          className: "text-sm",
          children: "Theme",
        })),
        (t[2] = y))
      : (y = t[2]),
    t[3] !== i || t[4] !== m || t[5] !== f || t[6] !== h
      ? ((v = p.map((e) => {
          const { icon: t, label: n } = d[e],
            o = h === e;
          return (0, r.jsxs)(
            s.Tooltip,
            {
              children: [
                (0, r.jsx)(s.TooltipTrigger, {
                  render: (0, r.jsx)(u.Button, {
                    variant: o ? "default" : "outline",
                    size: "icon",
                    className: "h-6 w-6",
                    "aria-label": n,
                    "aria-pressed": o,
                    onClick: () => {
                      (0, l.trackThemeChange)({
                        scope: i,
                        theme: e,
                        previousTheme: h,
                        surface: f,
                      }),
                        m(e);
                    },
                    children: (0, r.jsx)(t, { className: "h-4 w-4" }),
                  }),
                }),
                (0, r.jsx)(s.TooltipContent, { children: n }),
              ],
            },
            e,
          );
        })),
        (t[3] = i),
        (t[4] = m),
        (t[5] = f),
        (t[6] = h),
        (t[7] = v))
      : (v = t[7]),
    t[8] !== v
      ? ((b = (0, r.jsx)("div", {
          className: "flex flex-row items-center gap-1",
          children: v,
        })),
        (t[8] = v),
        (t[9] = b))
      : (b = t[9]),
    t[10] !== g || t[11] !== b
      ? ((S = (0, r.jsxs)("div", { className: g, children: [y, b] })),
        (t[10] = g),
        (t[11] = b),
        (t[12] = S))
      : (S = t[12]),
    S
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(97867 /* app/components/theme-provider */),
  s = n(58055 /* app/components/tooltip */),
  l = n(63497 /* vendor/module-63497 */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(99683 /* vendor/module-99683 */),
  d = {
    light: { icon: i.Sun, label: "Light" },
    dark: { icon: i.Moon, label: "Dark" },
    system: { icon: i.SunMoon, label: "Auto" },
  },
  p = ["light", "dark", "system"];
