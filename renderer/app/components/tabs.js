// app/components/tabs.js — webpack module 93432
// params: (e, t, n) = (module, exports, require)
(t.Tabs = function (e) {
  const t = (0, o.c)(8);
  let n, s, l, c;
  return (
    t[0] !== e
      ? (({ className: n, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = s))
      : ((n = t[1]), (s = t[2])),
    t[3] !== n
      ? ((l = (0, a.cn)("flex flex-col gap-2", n)), (t[3] = n), (t[4] = l))
      : (l = t[4]),
    t[5] !== s || t[6] !== l
      ? ((c = (0, r.jsx)(i.Tabs.Root, {
          "data-slot": "tabs",
          className: l,
          ...s,
        })),
        (t[5] = s),
        (t[6] = l),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}),
  (t.TabsList = function (e) {
    const t = (0, o.c)(15);
    let n, l, c, u;
    t[0] !== e
      ? (({ className: l, variant: u, children: n, ...c } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = l),
        (t[3] = c),
        (t[4] = u))
      : ((n = t[1]), (l = t[2]), (c = t[3]), (u = t[4]));
    const d = void 0 === u ? "pill" : u,
      p = s[d];
    let f, h, m;
    return (
      t[5] !== l || t[6] !== p
        ? ((f = (0, a.cn)(
            "text-muted-foreground inline-flex items-center justify-center",
            p,
            l,
          )),
          (t[5] = l),
          (t[6] = p),
          (t[7] = f))
        : (f = t[7]),
      t[8] !== d
        ? ((h =
            "line" === d &&
            (0, r.jsx)(i.Tabs.Indicator, {
              className:
                "bg-foreground absolute -bottom-px left-0 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left) transition-[translate,width] duration-(--duration-slow) ease-(--ease-out-strong) motion-reduce:transition-none",
            })),
          (t[8] = d),
          (t[9] = h))
        : (h = t[9]),
      t[10] !== n || t[11] !== c || t[12] !== f || t[13] !== h
        ? ((m = (0, r.jsxs)(i.Tabs.List, {
            "data-slot": "tabs-list",
            className: f,
            ...c,
            children: [n, h],
          })),
          (t[10] = n),
          (t[11] = c),
          (t[12] = f),
          (t[13] = h),
          (t[14] = m))
        : (m = t[14]),
      m
    );
  }),
  (t.TabsTrigger = function (e) {
    const t = (0, o.c)(10);
    let n, s, c;
    t[0] !== e
      ? (({ className: n, variant: c, ...s } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = s),
        (t[3] = c))
      : ((n = t[1]), (s = t[2]), (c = t[3]));
    const u = l[void 0 === c ? "pill" : c];
    let d, p;
    return (
      t[4] !== n || t[5] !== u
        ? ((d = (0, a.cn)(
            "focus-ring inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            u,
            n,
          )),
          (t[4] = n),
          (t[5] = u),
          (t[6] = d))
        : (d = t[6]),
      t[7] !== s || t[8] !== d
        ? ((p = (0, r.jsx)(i.Tabs.Tab, {
            "data-slot": "tabs-trigger",
            className: d,
            ...s,
          })),
          (t[7] = s),
          (t[8] = d),
          (t[9] = p))
        : (p = t[9]),
      p
    );
  }),
  (t.TabsContent = function (e) {
    const t = (0, o.c)(10);
    let n, s, l;
    t[0] !== e
      ? (({ className: n, animated: l, ...s } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = s),
        (t[3] = l))
      : ((n = t[1]), (s = t[2]), (l = t[3]));
    const c =
      void 0 !== l &&
      l &&
      "animate-in fade-in-0 duration-(--duration-slow) ease-(--ease-out-strong) data-[activation-direction=left]:slide-in-from-left-4 data-[activation-direction=right]:slide-in-from-right-4 motion-reduce:animate-none";
    let u, d;
    return (
      t[4] !== n || t[5] !== c
        ? ((u = (0, a.cn)("flex-1 outline-none", c, n)),
          (t[4] = n),
          (t[5] = c),
          (t[6] = u))
        : (u = t[6]),
      t[7] !== s || t[8] !== u
        ? ((d = (0, r.jsx)(i.Tabs.Panel, {
            "data-slot": "tabs-content",
            className: u,
            ...s,
          })),
          (t[7] = s),
          (t[8] = u),
          (t[9] = d))
        : (d = t[9]),
      d
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(58472 /* vendor/module-58472 */),
  a = n(29113 /* vendor/module-29113 */),
  s = {
    pill: "bg-muted phone:h-(--control-h-lg) phone:rounded-(--radius-pill) phone:bg-secondary phone:p-1 h-(--control-h-md) w-fit rounded-(--radius-surface) p-0.75",
    line: "relative h-(--control-h-xl) w-full border-b",
    band: "",
  },
  l = {
    pill: "data-[active]:bg-background dark:data-[active]:text-foreground dark:data-[active]:border-input text-foreground dark:text-muted-foreground phone:h-full phone:rounded-(--radius-pill-item) phone:border-0 phone:px-4 phone:py-1.5 phone:text-muted-foreground phone:data-[active]:text-foreground phone:data-[active]:shadow-none h-[calc(100%-1px)] rounded-(--radius-control) border border-transparent transition-[color,box-shadow,border-color] data-[active]:shadow-(--shadow-raised)",
    line: "text-muted-foreground hover:text-foreground data-[active]:text-foreground h-full transition-colors",
    band: "dark:data-[active]:text-foreground dark:data-[active]:border-input dark:text-muted-foreground border-transparent transition-[color,box-shadow,border-color] text-muted-foreground data-[active]:text-foreground hover:text-foreground -mb-px h-auto min-w-0 flex-col items-start justify-start gap-1 rounded-none whitespace-normal border-0 border-r border-b-2 border-r-border border-b-transparent px-4 pt-4 pb-3.5 text-left last:border-r-0 data-[active]:border-b-primary data-[active]:bg-accent-secondary data-[active]:font-semibold data-[active]:shadow-none dark:data-[active]:border-r-border [&_svg]:text-primary",
  };
