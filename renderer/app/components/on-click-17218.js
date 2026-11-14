// app/components/on-click-17218.js — webpack module 17218
// params: (e, t, n) = (module, exports, require)
t.OptionList = function (e) {
  const t = (0, o.c)(11),
    { label: n, options: s, value: l, onSelect: c, query: u } = e,
    d = void 0 === u ? "" : u;
  let p;
  if (t[0] !== s || t[1] !== d) {
    const e = d.trim().toLowerCase();
    (p = e ? s.filter((t) => t.label.toLowerCase().includes(e)) : s),
      (t[0] = s),
      (t[1] = d),
      (t[2] = p);
  } else p = t[2];
  const f = p;
  if (0 === f.length) {
    let e;
    return (
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsx)(a.Typography, {
            className: "text-muted-foreground",
            render: (0, r.jsx)("span", { className: "py-3" }),
            children: "No matches.",
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let h, m;
  return (
    t[4] !== c || t[5] !== f || t[6] !== l
      ? ((h = f.map((e, t) => {
          const n = e.value === l,
            o = !!e.group && e.group !== f[t - 1]?.group;
          return (0, r.jsxs)(
            "div",
            {
              children: [
                o &&
                  (0, r.jsx)(a.Typography, {
                    variant: "meta",
                    className: (0, i.cn)(
                      "text-muted-foreground block pb-2",
                      0 === t ? "pt-3" : "pt-5",
                    ),
                    render: (0, r.jsx)("h3", {}),
                    children: e.group,
                  }),
                (0, r.jsxs)("button", {
                  type: "button",
                  role: "option",
                  "aria-selected": n,
                  onClick: () => c(e.value),
                  className:
                    "focus-ring flex h-11 w-full cursor-pointer items-center gap-2 rounded-md text-left outline-none",
                  children: [
                    e.leading,
                    (0, r.jsxs)("span", {
                      className: "flex min-w-0 flex-1 items-center gap-2",
                      children: [
                        (0, r.jsx)(a.Typography, {
                          className: "truncate",
                          children: e.label,
                        }),
                        e.note &&
                          (0, r.jsx)(a.Typography, {
                            variant: "meta",
                            className: "text-muted-foreground shrink-0",
                            children: e.note,
                          }),
                      ],
                    }),
                    (0, r.jsx)("span", {
                      className: (0, i.cn)(
                        "size-4 shrink-0 rounded-full",
                        n
                          ? "border-foreground bg-foreground border-5"
                          : "border-border border",
                      ),
                      "aria-hidden": !0,
                    }),
                  ],
                }),
              ],
            },
            e.value,
          );
        })),
        (t[4] = c),
        (t[5] = f),
        (t[6] = l),
        (t[7] = h))
      : (h = t[7]),
    t[8] !== n || t[9] !== h
      ? ((m = (0, r.jsx)("div", {
          role: "listbox",
          "aria-label": n,
          children: h,
        })),
        (t[8] = n),
        (t[9] = h),
        (t[10] = m))
      : (m = t[10]),
    m
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(34483 /* app/components/typography-variants */);
