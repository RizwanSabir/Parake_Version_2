// app/components/debug-tools-menu.js — webpack module 15078
// params: (e, t, n) = (module, exports, require)
"use strict";
t.DebugToolsMenu = function (e) {
  const t = (0, o.c)(23),
    { open: n, onOpenChange: c, children: u, canEditApiEnvironment: d } = e;
  let p;
  t[0] !== c
    ? ((p = function () {
        window.electron.ipcRendererProxy.invoke("renderer/open-log-file"),
          c(!1);
      }),
      (t[0] = c),
      (t[1] = p))
    : (p = t[1]);
  const f = p;
  let h;
  t[2] !== c
    ? ((h = function () {
        window.electron.ipcRendererProxy.invoke("renderer/toggle-devtools"),
          c(!1);
      }),
      (t[2] = c),
      (t[3] = h))
    : (h = t[3]);
  const m = h,
    g = (0, a.useRef)(null);
  let y, v, b, S, _, x, w, E;
  return (
    t[4] !== u
      ? ((y = (0, r.jsx)("span", { ref: g, children: u })),
        (t[4] = u),
        (t[5] = y))
      : (y = t[5]),
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((v = (0, r.jsx)(i.FileText, { className: "h-4 w-4" })), (t[6] = v))
      : (v = t[6]),
    t[7] !== f
      ? ((b = (0, r.jsxs)("div", {
          className:
            "hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm",
          onClick: f,
          children: [v, " Logs"],
        })),
        (t[7] = f),
        (t[8] = b))
      : (b = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((S = (0, r.jsx)(i.Terminal, { className: "h-4 w-4" })), (t[9] = S))
      : (S = t[9]),
    t[10] !== m
      ? ((_ = (0, r.jsxs)("div", {
          className:
            "hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm",
          onClick: m,
          children: [S, " Dev Tools"],
        })),
        (t[10] = m),
        (t[11] = _))
      : (_ = t[11]),
    t[12] !== d
      ? ((x = d && (0, r.jsx)(l.ApiEnvironmentMenu, {})),
        (t[12] = d),
        (t[13] = x))
      : (x = t[13]),
    t[14] !== b || t[15] !== _ || t[16] !== x
      ? ((w = (0, r.jsxs)(s.PopoverContent, {
          anchor: g,
          align: "start",
          className: "w-72 p-1.5",
          children: [b, _, x],
        })),
        (t[14] = b),
        (t[15] = _),
        (t[16] = x),
        (t[17] = w))
      : (w = t[17]),
    t[18] !== c || t[19] !== n || t[20] !== y || t[21] !== w
      ? ((E = (0, r.jsxs)(s.Popover, {
          open: n,
          onOpenChange: c,
          children: [y, w],
        })),
        (t[18] = c),
        (t[19] = n),
        (t[20] = y),
        (t[21] = w),
        (t[22] = E))
      : (E = t[22]),
    E
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(35973 /* app/components/popover */),
  l = n(5207 /* app/components/on-select */);
