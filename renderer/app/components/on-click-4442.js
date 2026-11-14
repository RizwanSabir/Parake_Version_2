// app/components/on-click-4442.js — webpack module 4442
// params: (e, t, n) = (module, exports, require)
t.SelectDocumentsScreen = function (e) {
  const t = (0, o.c)(48),
    {
      documents: n,
      selected: f,
      onConfirm: v,
      methods: b,
      onBack: S,
      emptyLabel: _,
    } = e,
    x = void 0 === _ ? "No documents yet." : _,
    [w, E] = (0, a.useState)(""),
    [T, k] = (0, a.useState)(f),
    [C, I] = (0, a.useState)(!1);
  let A, O;
  if (t[0] !== n || t[1] !== w) {
    const e = w.trim().toLowerCase();
    (A = e ? n.filter((t) => t.label.toLowerCase().includes(e)) : n),
      (O = new Set(A.map(y))),
      (t[0] = n),
      (t[1] = w),
      (t[2] = A),
      (t[3] = O);
  } else (A = t[2]), (O = t[3]);
  const R = O;
  let M;
  if (t[4] !== T || t[5] !== R) {
    let e;
    t[7] !== R ? ((e = (e) => R.has(e)), (t[7] = R), (t[8] = e)) : (e = t[8]),
      (M = T.filter(e)),
      (t[4] = T),
      (t[5] = R),
      (t[6] = M);
  } else M = t[6];
  const P = M,
    N = A.length > 0 && P.length === A.length;
  let D;
  t[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((D = (e) =>
        k((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]))),
      (t[9] = D))
    : (D = t[9]);
  const j = D,
    L =
      0 === T.length
        ? "Done"
        : `Add ${T.length} document${1 === T.length ? "" : "s"}`;
  let F, U, B, z, H;
  t[10] !== T || t[11] !== v
    ? ((F = () => v(T)), (t[10] = T), (t[11] = v), (t[12] = F))
    : (F = t[12]),
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((U = (e) => E(e.target.value)), (t[13] = U))
      : (U = t[13]),
    t[14] !== w
      ? ((B = (0, r.jsx)("div", {
          className: "-mx-4 border-b pt-2 pb-3",
          children: (0, r.jsx)("div", {
            className: "px-4",
            children: (0, r.jsx)(c.SearchInput, {
              placeholder: "Search documents",
              value: w,
              onChange: U,
            }),
          }),
        })),
        (t[14] = w),
        (t[15] = B))
      : (B = t[15]),
    t[16] === Symbol.for("react.memo_cache_sentinel")
      ? ((z = () => I(g)), (t[16] = z))
      : (z = t[16]),
    t[17] === Symbol.for("react.memo_cache_sentinel")
      ? ((H = (0, r.jsx)(p.SheetFileRowBody, {
          icon: (0, r.jsx)(i.Plus, { className: "size-4.5" }),
          label: "Add a new document",
          meta: "Upload, scrape a URL, or write your own",
        })),
        (t[17] = H))
      : (H = t[17]);
  const V = C && "rotate-180";
  let q, G, W, $, Y, K, Z, Q;
  return (
    t[18] !== V
      ? ((q = (0, s.cn)(
          "text-muted-foreground size-5 shrink-0 transition-transform duration-(--duration-base) motion-reduce:transition-none",
          V,
        )),
        (t[18] = V),
        (t[19] = q))
      : (q = t[19]),
    t[20] !== q
      ? ((G = (0, r.jsx)(i.ChevronDown, { className: q })),
        (t[20] = q),
        (t[21] = G))
      : (G = t[21]),
    t[22] !== C || t[23] !== G
      ? ((W = (0, r.jsxs)("button", {
          type: "button",
          onClick: z,
          "aria-expanded": C,
          className: p.SHEET_FILE_ROW,
          children: [H, G],
        })),
        (t[22] = C),
        (t[23] = G),
        (t[24] = W))
      : (W = t[24]),
    t[25] !== C || t[26] !== b
      ? (($ = C && b.map(m)), (t[25] = C), (t[26] = b), (t[27] = $))
      : ($ = t[27]),
    t[28] === Symbol.for("react.memo_cache_sentinel")
      ? ((Y = (0, r.jsx)("div", {
          className: "bg-border my-1 h-px w-full shrink-0",
        })),
        (t[28] = Y))
      : (Y = t[28]),
    t[29] !== N ||
    t[30] !== n ||
    t[31] !== x ||
    t[32] !== A.length ||
    t[33] !== P ||
    t[34] !== R
      ? ((K =
          0 === A.length
            ? (0, r.jsx)(u.Typography, {
                className: "text-muted-foreground",
                render: (0, r.jsx)("span", { className: "py-3" }),
                children: 0 === n.length ? x : "No matches.",
              })
            : (0, r.jsxs)("div", {
                className: "flex w-full items-center gap-3 py-2",
                children: [
                  (0, r.jsxs)(u.Typography, {
                    variant: "label",
                    className: "text-muted-foreground min-w-0 flex-1",
                    children: [P.length, " of ", A.length, " selected"],
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    onClick: () =>
                      k((e) =>
                        N ? e.filter((e) => !R.has(e)) : [...e, ...R].filter(h),
                      ),
                    className:
                      "focus-ring shrink-0 cursor-pointer rounded-md outline-none",
                    children: (0, r.jsx)(u.Typography, {
                      variant: "meta",
                      className: "font-medium",
                      children: N ? "Deselect all" : "Select all",
                    }),
                  }),
                ],
              })),
        (t[29] = N),
        (t[30] = n),
        (t[31] = x),
        (t[32] = A.length),
        (t[33] = P),
        (t[34] = R),
        (t[35] = K))
      : (K = t[35]),
    t[36] !== T || t[37] !== A
      ? ((Z =
          A.length > 0 &&
          A.map((e) =>
            (0, r.jsxs)(
              "label",
              {
                className: p.SHEET_FILE_ROW,
                children: [
                  (0, r.jsx)(p.SheetFileRowBody, {
                    icon: (0, r.jsx)(i.FileText, {
                      className: "size-4.5",
                    }),
                    label: e.label,
                    meta: e.meta,
                  }),
                  (0, r.jsx)(l.Checkbox, {
                    className: "size-5",
                    checked: T.includes(e.value),
                    onCheckedChange: () => j(e.value),
                  }),
                ],
              },
              e.value,
            ),
          )),
        (t[36] = T),
        (t[37] = A),
        (t[38] = Z))
      : (Z = t[38]),
    t[39] !== S ||
    t[40] !== W ||
    t[41] !== $ ||
    t[42] !== K ||
    t[43] !== Z ||
    t[44] !== L ||
    t[45] !== F ||
    t[46] !== B
      ? ((Q = (0, r.jsxs)(d.CreateSessionSheetScreen, {
          title: "Select documents",
          onBack: S,
          hideCancel: !0,
          confirmLabel: L,
          onConfirm: F,
          list: !0,
          pinned: B,
          children: [W, $, Y, K, Z],
        })),
        (t[39] = S),
        (t[40] = W),
        (t[41] = $),
        (t[42] = K),
        (t[43] = Z),
        (t[44] = L),
        (t[45] = F),
        (t[46] = B),
        (t[47] = Q))
      : (Q = t[47]),
    Q
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(64671 /* app/components/checkbox */),
  c = n(57583 /* app/components/search-input */),
  u = n(34483 /* app/components/typography-variants */),
  d = n(50547 /* app/components/create-session-sheet-screen */),
  p = n(5859 /* app/components/sheet-file-row */),
  f = { upload: i.Upload, url: i.Globe, manual: i.PencilLine };
function h(e, t, n) {
  return n.indexOf(e) === t;
}
function m(e) {
  const t = f[e.kind];
  return (0, r.jsxs)(
    "button",
    {
      type: "button",
      onClick: e.onPress,
      className: p.SHEET_FILE_ROW,
      children: [
        (0, r.jsx)(p.SheetFileRowBody, {
          indented: !0,
          icon: (0, r.jsx)(t, { className: "size-4.5" }),
          label: e.label,
          meta: e.description,
        }),
        (0, r.jsx)(i.ChevronRight, {
          className: "text-muted-foreground size-5 shrink-0",
        }),
      ],
    },
    e.kind,
  );
}
function g(e) {
  return !e;
}
function y(e) {
  return e.value;
}
