// app/components/sheet-file-row.js — webpack module 5859
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.SHEET_FILE_ROW = void 0),
  (t.SheetFileRowBody = function (e) {
    const t = (0, o.c)(15),
      { icon: n, label: s, meta: l, indented: c } = e,
      u = void 0 !== c && c && "ml-4";
    let d, p, f, h, m, g;
    return (
      t[0] !== u
        ? ((d = (0, i.cn)(
            "bg-accent-secondary border-border text-muted-foreground flex size-9 shrink-0 items-center justify-center rounded-lg border",
            u,
          )),
          (t[0] = u),
          (t[1] = d))
        : (d = t[1]),
      t[2] !== n || t[3] !== d
        ? ((p = (0, r.jsx)("span", { className: d, children: n })),
          (t[2] = n),
          (t[3] = d),
          (t[4] = p))
        : (p = t[4]),
      t[5] !== s
        ? ((f = (0, r.jsx)(a.Typography, {
            variant: "meta",
            truncate: !0,
            className: "font-medium",
            children: s,
          })),
          (t[5] = s),
          (t[6] = f))
        : (f = t[6]),
      t[7] !== l
        ? ((h =
            l &&
            (0, r.jsx)(a.Typography, {
              variant: "label",
              truncate: !0,
              className: "text-muted-foreground",
              children: l,
            })),
          (t[7] = l),
          (t[8] = h))
        : (h = t[8]),
      t[9] !== f || t[10] !== h
        ? ((m = (0, r.jsxs)("span", {
            className: "flex min-w-0 flex-1 flex-col gap-1",
            children: [f, h],
          })),
          (t[9] = f),
          (t[10] = h),
          (t[11] = m))
        : (m = t[11]),
      t[12] !== p || t[13] !== m
        ? ((g = (0, r.jsxs)(r.Fragment, { children: [p, m] })),
          (t[12] = p),
          (t[13] = m),
          (t[14] = g))
        : (g = t[14]),
      g
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(34483 /* app/components/typography-variants */);
t.SHEET_FILE_ROW =
  "focus-ring flex h-14 w-full cursor-pointer items-center gap-3 rounded-md text-left outline-none";
