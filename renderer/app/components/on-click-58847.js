// app/components/on-click-58847.js — webpack module 58847
// params: (e, t, n) = (module, exports, require)
t.ListSortMenu = function (e) {
  const t = (0, o.c)(35),
    {
      value: n,
      onChange: p,
      options: f,
      label: h,
      showValue: m,
      embedded: g,
    } = e,
    y = void 0 === h ? "Sort" : h,
    v = void 0 !== m && m,
    b = void 0 !== g && g;
  let S;
  if (t[0] !== f || t[1] !== n) {
    let e;
    t[3] !== n
      ? ((e = (e) => e.value === n), (t[3] = n), (t[4] = e))
      : (e = t[4]),
      (S = f.find(e)),
      (t[0] = f),
      (t[1] = n),
      (t[2] = S);
  } else S = t[2];
  const _ = S;
  let x;
  t[5] !== b || t[6] !== f || t[7] !== n
    ? ((x = b && !(0, a.isDefaultSort)(n, f)),
      (t[5] = b),
      (t[6] = f),
      (t[7] = n),
      (t[8] = x))
    : (x = t[8]);
  const w = x;
  let E;
  t[9] !== _ ||
  t[10] !== w ||
  t[11] !== b ||
  t[12] !== y ||
  t[13] !== v ||
  t[14] !== n
    ? ((E = (0, r.jsx)(l.DropdownMenuTrigger, {
        render: b
          ? (0, r.jsxs)(s.Button, {
              variant: "ghost",
              className:
                "group/sort h-full gap-0 rounded-none px-3 focus-visible:ring-inset active:scale-100 max-md:w-9 max-md:px-0",
              children: [
                w
                  ? (0, r.jsx)(d, {
                      sort: n,
                      className: "text-foreground size-4 shrink-0",
                    })
                  : (0, r.jsx)(i.ArrowUpDown, {
                      className: "text-muted-foreground size-4 shrink-0",
                    }),
                (0, r.jsx)("span", {
                  className:
                    "grid grid-cols-[0fr] opacity-0 transition-[grid-template-columns,opacity] duration-(--duration-base) ease-(--ease-out-strong) motion-reduce:transition-none md:group-data-[popup-open]/sort:grid-cols-[1fr] md:group-data-[popup-open]/sort:opacity-100",
                  children: (0, r.jsx)("span", {
                    className: "min-w-0 overflow-hidden",
                    children: (0, r.jsxs)("span", {
                      className: "flex items-center gap-1.5 pl-1.5",
                      children: [
                        (0, r.jsx)(c.Typography, {
                          variant: "body",
                          className: "whitespace-nowrap",
                          children: _?.label ?? y,
                        }),
                        (0, r.jsx)(i.ChevronDown, {
                          className: "text-muted-foreground size-3.5 shrink-0",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)("span", {
                  className: "sr-only",
                  children: _ ? `${y}: ${_.label}` : y,
                }),
              ],
            })
          : v
            ? (0, r.jsxs)(s.Button, {
                variant: "outline",
                className:
                  "h-9 gap-1.5 rounded-lg px-3 max-md:size-9 max-md:px-0",
                children: [
                  (0, r.jsx)(i.ArrowUpDown, { className: "size-4" }),
                  (0, r.jsx)(c.Typography, {
                    variant: "body",
                    className: "max-md:hidden",
                    children: _?.label ?? y,
                  }),
                  (0, r.jsx)(i.ChevronDown, {
                    className: "text-muted-foreground size-3.5 max-md:hidden",
                  }),
                  (0, r.jsx)("span", {
                    className: "sr-only",
                    children: y,
                  }),
                ],
              })
            : (0, r.jsxs)(s.Button, {
                variant: "outline",
                size: "icon",
                className: "size-9 rounded-lg",
                children: [
                  (0, r.jsx)(i.ArrowUpDown, {}),
                  (0, r.jsx)("span", {
                    className: "sr-only",
                    children: y,
                  }),
                ],
              }),
      })),
      (t[9] = _),
      (t[10] = w),
      (t[11] = b),
      (t[12] = y),
      (t[13] = v),
      (t[14] = n),
      (t[15] = E))
    : (E = t[15]);
  const T = b ? "end" : "start";
  let k, C, I, A, O, R;
  return (
    t[16] !== p ? ((k = (e) => p(e)), (t[16] = p), (t[17] = k)) : (k = t[17]),
    t[18] !== f ? ((C = f.map(u)), (t[18] = f), (t[19] = C)) : (C = t[19]),
    t[20] !== k || t[21] !== C || t[22] !== n
      ? ((I = (0, r.jsx)(l.DropdownMenuRadioGroup, {
          value: n,
          onValueChange: k,
          children: C,
        })),
        (t[20] = k),
        (t[21] = C),
        (t[22] = n),
        (t[23] = I))
      : (I = t[23]),
    t[24] !== w || t[25] !== p || t[26] !== f
      ? ((A =
          w &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.DropdownMenuSeparator, {}),
              (0, r.jsx)(l.DropdownMenuItem, {
                onClick: () => p((0, a.defaultSortOf)(f)),
                children: "Clear",
              }),
            ],
          })),
        (t[24] = w),
        (t[25] = p),
        (t[26] = f),
        (t[27] = A))
      : (A = t[27]),
    t[28] !== I || t[29] !== A || t[30] !== T
      ? ((O = (0, r.jsxs)(l.DropdownMenuContent, {
          align: T,
          children: [I, A],
        })),
        (t[28] = I),
        (t[29] = A),
        (t[30] = T),
        (t[31] = O))
      : (O = t[31]),
    t[32] !== O || t[33] !== E
      ? ((R = (0, r.jsxs)(l.DropdownMenu, { children: [E, O] })),
        (t[32] = O),
        (t[33] = E),
        (t[34] = R))
      : (R = t[34]),
    R
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(8240 /* vendor/module-8240 */),
  s = n(66244 /* app/components/button-variants */),
  l = n(69287 /* app/components/dropdown-menu */),
  c = n(34483 /* app/components/typography-variants */);
function u(e) {
  return (0, r.jsx)(
    l.DropdownMenuRadioItem,
    { value: e.value, closeOnClick: !0, children: e.label },
    e.value,
  );
}
function d(e) {
  const t = (0, o.c)(8),
    { sort: n, className: s } = e;
  let l;
  t[0] !== n ? ((l = (0, a.parseSort)(n)), (t[0] = n), (t[1] = l)) : (l = t[1]);
  const { field: c, direction: u } = l,
    d = "asc" === u;
  if ("title" === c || "name" === c) {
    let e;
    return (
      t[2] !== d || t[3] !== s
        ? ((e = d
            ? (0, r.jsx)(i.ArrowDownAZ, { className: s })
            : (0, r.jsx)(i.ArrowDownZA, { className: s })),
          (t[2] = d),
          (t[3] = s),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let p;
  return (
    t[5] !== d || t[6] !== s
      ? ((p = d
          ? (0, r.jsx)(i.ArrowDownNarrowWide, { className: s })
          : (0, r.jsx)(i.ArrowDownWideNarrow, { className: s })),
        (t[5] = d),
        (t[6] = s),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
