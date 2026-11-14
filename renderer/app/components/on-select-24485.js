// app/components/on-select-24485.js — webpack module 24485
// params: (e, t, n) = (module, exports, require)
t.CallDocumentSlot = function (e) {
  const t = (0, o.c)(75),
    {
      documents: n,
      isLoading: S,
      hasError: _,
      selectedDocumentIds: x,
      onChange: w,
      disabled: E,
      className: T,
      sheet: k,
      addMethods: C,
      menuActions: I,
      children: A,
    } = e,
    O = void 0 !== E && E;
  let R;
  t[0] !== n ? ((R = n?.map(b) ?? []), (t[0] = n), (t[1] = R)) : (R = t[1]);
  const M = R;
  let P;
  t[2] !== n?.length || t[3] !== w
    ? ((P = (e) => {
        w({
          selectedIds: e,
          selectionMode: (0, c.resolveDocumentSelectionMode)(
            e.length,
            n?.length,
          ),
        });
      }),
      (t[2] = n?.length),
      (t[3] = w),
      (t[4] = P))
    : (P = t[4]);
  const N = P;
  let D;
  t[5] !== n
    ? ((D = (e) => n?.find((t) => t.id === e)?.title), (t[5] = n), (t[6] = D))
    : (D = t[6]);
  const j = D;
  let L, F, U, B;
  if (
    t[7] !== C ||
    t[8] !== A ||
    t[9] !== T ||
    t[10] !== O ||
    t[11] !== n ||
    t[12] !== N ||
    t[13] !== _ ||
    t[14] !== S ||
    t[15] !== x ||
    t[16] !== k
  ) {
    B = Symbol.for("react.early_return_sentinel");
    e: {
      let e;
      t[21] !== n
        ? ((e = (e) => n?.find((t) => t.id === e)), (t[21] = n), (t[22] = e))
        : (e = t[22]);
      const o = x.map(e).filter(v);
      if (k?.open) {
        let e, o, i, a, s;
        t[23] !== n ? ((e = n ?? []), (t[23] = n), (t[24] = e)) : (e = t[24]),
          t[25] !== e
            ? ((o = e.map(y)), (t[25] = e), (t[26] = o))
            : (o = t[26]),
          t[27] !== N || t[28] !== k
            ? ((i = (e) => {
                N(e), k.onClose();
              }),
              (t[27] = N),
              (t[28] = k),
              (t[29] = i))
            : (i = t[29]),
          t[30] !== C ||
          t[31] !== x ||
          t[32] !== k.onClose ||
          t[33] !== o ||
          t[34] !== i
            ? ((a = (0, r.jsx)(m.SelectDocumentsScreen, {
                documents: o,
                selected: x,
                onConfirm: i,
                methods: C,
                onBack: k.onClose,
              })),
              (t[30] = C),
              (t[31] = x),
              (t[32] = k.onClose),
              (t[33] = o),
              (t[34] = i),
              (t[35] = a))
            : (a = t[35]),
          t[36] !== A || t[37] !== a
            ? ((s = (0, r.jsxs)(r.Fragment, { children: [a, A] })),
              (t[36] = A),
              (t[37] = a),
              (t[38] = s))
            : (s = t[38]),
          (B = s);
        break e;
      }
      t[39] !== T
        ? ((L = (0, a.cn)(
            "flex w-full min-w-0 flex-col gap-2 max-sm:gap-3",
            T,
          )),
          (t[39] = T),
          (t[40] = L))
        : (L = t[40]),
        t[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, r.jsx)(u.LabelWithTooltip, {
              children: "Documents",
            })),
            (t[41] = F))
          : (F = t[41]),
        (U =
          k &&
          (0, r.jsx)(h.AttachmentRow, {
            className: "sm:hidden",
            label:
              o.length > 0 ? (0, s.summarizeDocuments)(o) : "Add documents",
            description:
              o.length > 0
                ? (0, s.describeDocuments)(o)
                : "Job spec, notes, anything the AI should know",
            fileCount: o.length,
            onPress: k.onOpen,
            disabled: O || S || _,
          }));
    }
    (t[7] = C),
      (t[8] = A),
      (t[9] = T),
      (t[10] = O),
      (t[11] = n),
      (t[12] = N),
      (t[13] = _),
      (t[14] = S),
      (t[15] = x),
      (t[16] = k),
      (t[17] = L),
      (t[18] = F),
      (t[19] = U),
      (t[20] = B);
  } else (L = t[17]), (F = t[18]), (U = t[19]), (B = t[20]);
  if (B !== Symbol.for("react.early_return_sentinel")) return B;
  const z = k && "max-sm:hidden";
  let H;
  t[42] !== z
    ? ((H = (0, a.cn)("min-h-11 sm:min-h-8 sm:rounded-lg sm:text-xs", z)),
      (t[42] = z),
      (t[43] = H))
    : (H = t[43]);
  const V = O || S || _;
  let q, G, W, $;
  t[44] !== n?.length || t[45] !== _ || t[46] !== S
    ? ((q = _
        ? (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.AlertCircle, {
                className: "text-error size-4",
              }),
              (0, r.jsx)("span", {
                className: "text-error sm:text-xs",
                children: "Failed to load documents",
              }),
            ],
          })
        : S
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(f.Spinner, { className: "size-4" }),
                (0, r.jsx)("span", {
                  className: "sm:text-xs",
                  children: "Loading documents...",
                }),
              ],
            })
          : 0 === n?.length
            ? (0, r.jsx)("span", {
                className: "sm:text-xs",
                children: "No documents found",
              })
            : (0, r.jsx)("span", {
                className: "sm:text-xs",
                children: "Select documents",
              })),
      (t[44] = n?.length),
      (t[45] = _),
      (t[46] = S),
      (t[47] = q))
    : (q = t[47]),
    t[48] !== N || t[49] !== M
      ? ((G = (0, r.jsx)(d.CommandItem, {
          onSelect: () => N(M.map(g)),
          className: "flex-1 cursor-pointer justify-center",
          children: "Select All",
        })),
        (t[48] = N),
        (t[49] = M),
        (t[50] = G))
      : (G = t[50]),
    t[51] !== N
      ? ((W = (0, r.jsx)(d.CommandItem, {
          onSelect: () => N([]),
          className: "flex-1 cursor-pointer justify-center",
          children: "Clear",
        })),
        (t[51] = N),
        (t[52] = W))
      : (W = t[52]),
    t[53] !== G || t[54] !== W
      ? (($ = (0, r.jsxs)("div", {
          className: "flex items-center",
          children: [G, W],
        })),
        (t[53] = G),
        (t[54] = W),
        (t[55] = $))
      : ($ = t[55]);
  const Y = M.length > 10;
  let K, Z, Q;
  return (
    t[56] !== j
      ? ((K = (e, t) => {
          const n = (0, l.getDocumentSelectionLabel)({
            selectedIds: e,
            totalCount: t.length,
            getTitleById: j,
          });
          return (0, r.jsxs)("div", {
            className: "flex w-full min-w-0 items-center justify-between gap-2",
            children: [
              (0, r.jsx)("span", {
                className:
                  "text-foreground min-w-0 flex-1 truncate text-left text-sm font-normal sm:text-xs",
                children: n,
              }),
              (0, r.jsx)(i.ChevronDown, {
                className:
                  "text-muted-foreground h-4 cursor-pointer transition-transform group-data-[popup-open]/multi-select:rotate-180",
              }),
            ],
          });
        }),
        (t[56] = j),
        (t[57] = K))
      : (K = t[57]),
    t[58] !== N ||
    t[59] !== I ||
    t[60] !== M ||
    t[61] !== x ||
    t[62] !== H ||
    t[63] !== V ||
    t[64] !== q ||
    t[65] !== $ ||
    t[66] !== Y ||
    t[67] !== K
      ? ((Z = (0, r.jsx)(p.MultiSelect, {
          className: H,
          options: M,
          onValueChange: N,
          defaultValue: x,
          disabled: V,
          placeholder: q,
          action: I,
          hideSelectAll: !0,
          footer: $,
          popoverSide: "top",
          variant: "default",
          searchable: Y,
          animation: 0.2,
          modalPopover: !0,
          valueRenderer: K,
        })),
        (t[58] = N),
        (t[59] = I),
        (t[60] = M),
        (t[61] = x),
        (t[62] = H),
        (t[63] = V),
        (t[64] = q),
        (t[65] = $),
        (t[66] = Y),
        (t[67] = K),
        (t[68] = Z))
      : (Z = t[68]),
    t[69] !== A || t[70] !== Z || t[71] !== L || t[72] !== F || t[73] !== U
      ? ((Q = (0, r.jsxs)("div", {
          className: L,
          children: [F, U, Z, A],
        })),
        (t[69] = A),
        (t[70] = Z),
        (t[71] = L),
        (t[72] = F),
        (t[73] = U),
        (t[74] = Q))
      : (Q = t[74]),
    Q
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(70759 /* vendor/module-70759 */),
  l = n(22909 /* vendor/module-22909 */),
  c = n(51764 /* vendor/module-51764 */),
  u = n(63110 /* app/components/label-with-tooltip */),
  d = n(42325 /* app/components/command-separator */),
  p = n(28688 /* app/components/get-selected-values */),
  f = n(15201 /* app/components/spinner */),
  h = n(37725 /* app/components/attachment-row */),
  m = n(4442 /* app/components/on-click-4442 */);
function g(e) {
  return e.value;
}
function y(e) {
  return {
    value: e.id,
    label: e.title,
    meta: (0, s.describeDocument)(e),
  };
}
function v(e) {
  return void 0 !== e;
}
function b(e) {
  return { label: e.title, value: e.id };
}
