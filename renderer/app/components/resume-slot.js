// app/components/resume-slot.js — webpack module 97115
// params: (e, t, n) = (module, exports, require)
t.ResumeSlot = function (e) {
  const t = (0, o.c)(72),
    {
      resumes: n,
      selectedResumeId: l,
      onResumeChange: b,
      disabled: w,
      sheet: E,
      onUpload: T,
      refresh: k,
      children: C,
    } = e,
    I = void 0 !== w && w,
    A = (0, a.useRef)(!1);
  let O, R, M, P, N, D;
  if (
    t[0] !== C ||
    t[1] !== I ||
    t[2] !== b ||
    t[3] !== T ||
    t[4] !== n ||
    t[5] !== l ||
    t[6] !== E
  ) {
    D = Symbol.for("react.early_return_sentinel");
    e: {
      let e;
      if (
        (t[13] !== l
          ? ((e = (e) => e.id === l), (t[13] = l), (t[14] = e))
          : (e = t[14]),
        (O = n.find(e)),
        E?.open)
      ) {
        let e, o, i, a;
        t[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { value: m, label: "No resume" }), (t[15] = e))
          : (e = t[15]),
          t[16] !== n
            ? ((o = [e, ...n.map(x)]), (t[16] = n), (t[17] = o))
            : (o = t[17]),
          t[18] !== b || t[19] !== E
            ? ((i = (e) => {
                b(e === m ? null : e), E.onClose();
              }),
              (t[18] = b),
              (t[19] = E),
              (t[20] = i))
            : (i = t[20]),
          t[21] !== T
            ? ((a = {
                label: "Upload a file",
                description: v,
                onPress: T,
              }),
              (t[21] = T),
              (t[22] = a))
            : (a = t[22]);
        const s = n.length > 10 ? "Search resumes" : void 0;
        let l, c;
        t[23] !== E.onClose ||
        t[24] !== i ||
        t[25] !== a ||
        t[26] !== s ||
        t[27] !== o
          ? ((l = (0, r.jsx)(h.SelectFileScreen, {
              title: "Select CV / Resume",
              files: o,
              onSelect: i,
              action: a,
              onBack: E.onClose,
              searchPlaceholder: s,
              emptyLabel: "No resumes yet.",
            })),
            (t[23] = E.onClose),
            (t[24] = i),
            (t[25] = a),
            (t[26] = s),
            (t[27] = o),
            (t[28] = l))
          : (l = t[28]),
          t[29] !== C || t[30] !== l
            ? ((c = (0, r.jsxs)(r.Fragment, { children: [l, C] })),
              (t[29] = C),
              (t[30] = l),
              (t[31] = c))
            : (c = t[31]),
          (D = c);
        break e;
      }
      (P = "flex w-full min-w-0 flex-col gap-2 max-sm:gap-3"),
        t[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, r.jsx)(u.LabelWithTooltip, {
              children: "CV / Resume",
            })),
            (t[32] = N))
          : (N = t[32]),
        (R = "min-w-0"),
        (M =
          E &&
          (0, r.jsx)(f.AttachmentRow, {
            className: "sm:hidden",
            label: O ? O.title || "My Resume" : "Add CV / Resume",
            description: O ? (0, c.describeResume)(O) : v,
            fileCount: O ? 1 : 0,
            onPress: E.onOpen,
            disabled: I,
          }));
    }
    (t[0] = C),
      (t[1] = I),
      (t[2] = b),
      (t[3] = T),
      (t[4] = n),
      (t[5] = l),
      (t[6] = E),
      (t[7] = O),
      (t[8] = R),
      (t[9] = M),
      (t[10] = P),
      (t[11] = N),
      (t[12] = D);
  } else
    (O = t[7]), (R = t[8]), (M = t[9]), (P = t[10]), (N = t[11]), (D = t[12]);
  if (D !== Symbol.for("react.early_return_sentinel")) return D;
  const j = O?.id ?? null;
  let L, F, U;
  t[33] !== n ? ((L = n.map(_)), (t[33] = n), (t[34] = L)) : (L = t[34]),
    t[35] === Symbol.for("react.memo_cache_sentinel")
      ? ((F = (e, t) => {
          !e && A.current && ((A.current = !1), t.cancel());
        }),
        (t[35] = F))
      : (F = t[35]),
    t[36] !== b || t[37] !== T || t[38] !== k
      ? ((U = (e, t) =>
          e === g
            ? (t.cancel(), (A.current = !0), k?.onRefresh())
            : e === y
              ? T()
              : void b(e === m ? null : e)),
        (t[36] = b),
        (t[37] = T),
        (t[38] = k),
        (t[39] = U))
      : (U = t[39]);
  const B = E && "max-sm:hidden";
  let z;
  t[40] !== B
    ? ((z = (0, s.cn)(
        "w-full min-w-0 data-[size=default]:h-11 sm:rounded-lg sm:text-xs sm:data-[size=default]:h-8",
        B,
      )),
      (t[40] = B),
      (t[41] = z))
    : (z = t[41]);
  const H = 0 === n.length ? "No resumes found" : "Select a resume...";
  let V, q, G, W, $, Y, K, Z, Q, J;
  return (
    t[42] !== H
      ? ((V = (0, r.jsx)(d.SelectValue, { placeholder: H })),
        (t[42] = H),
        (t[43] = V))
      : (V = t[43]),
    t[44] !== z || t[45] !== V
      ? ((q = (0, r.jsx)(d.SelectTrigger, {
          className: z,
          children: V,
        })),
        (t[44] = z),
        (t[45] = V),
        (t[46] = q))
      : (q = t[46]),
    t[47] !== n
      ? ((G =
          0 === n.length
            ? (0, r.jsx)(d.SelectItem, {
                value: "__no_resumes__",
                disabled: !0,
                children: "No resumes found",
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(d.SelectItem, {
                    value: m,
                    children: "None",
                  }),
                  n.map(S),
                ],
              })),
        (t[47] = n),
        (t[48] = G))
      : (G = t[48]),
    t[49] === Symbol.for("react.memo_cache_sentinel")
      ? ((W = (0, r.jsx)(d.SelectSeparator, {})), (t[49] = W))
      : (W = t[49]),
    t[50] !== k
      ? (($ =
          k &&
          (0, r.jsx)(d.SelectItem, {
            value: g,
            disabled: k.isRefreshing,
            children: k.isRefreshing
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(p.Spinner, { className: "h-4 w-4" }),
                    " Refreshing...",
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(i.RefreshCw, { className: "h-4 w-4" }),
                    " Refresh resumes",
                  ],
                }),
          })),
        (t[50] = k),
        (t[51] = $))
      : ($ = t[51]),
    t[52] === Symbol.for("react.memo_cache_sentinel")
      ? ((Y = (0, r.jsxs)(d.SelectItem, {
          value: y,
          children: [
            (0, r.jsx)(i.Plus, { className: "h-4 w-4" }),
            " Upload a resume",
          ],
        })),
        (t[52] = Y))
      : (Y = t[52]),
    t[53] !== G || t[54] !== $
      ? ((K = (0, r.jsxs)(d.SelectContent, {
          className: "max-w-(--anchor-width)",
          side: "top",
          children: [G, W, $, Y],
        })),
        (t[53] = G),
        (t[54] = $),
        (t[55] = K))
      : (K = t[55]),
    t[56] !== I ||
    t[57] !== U ||
    t[58] !== q ||
    t[59] !== K ||
    t[60] !== j ||
    t[61] !== L
      ? ((Z = (0, r.jsxs)(d.Select, {
          value: j,
          items: L,
          onOpenChange: F,
          onValueChange: U,
          disabled: I,
          children: [q, K],
        })),
        (t[56] = I),
        (t[57] = U),
        (t[58] = q),
        (t[59] = K),
        (t[60] = j),
        (t[61] = L),
        (t[62] = Z))
      : (Z = t[62]),
    t[63] !== C || t[64] !== R || t[65] !== Z || t[66] !== M
      ? ((Q = (0, r.jsxs)("div", {
          className: R,
          children: [M, Z, C],
        })),
        (t[63] = C),
        (t[64] = R),
        (t[65] = Z),
        (t[66] = M),
        (t[67] = Q))
      : (Q = t[67]),
    t[68] !== Q || t[69] !== P || t[70] !== N
      ? ((J = (0, r.jsxs)("div", { className: P, children: [N, Q] })),
        (t[68] = Q),
        (t[69] = P),
        (t[70] = N),
        (t[71] = J))
      : (J = t[71]),
    J
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(65013 /* vendor/module-65013 */),
  c = n(7009 /* vendor/module-7009 */),
  u = n(63110 /* app/components/label-with-tooltip */),
  d = n(9664 /* app/components/select-trigger-icon-class-name */),
  p = n(15201 /* app/components/spinner */),
  f = n(37725 /* app/components/attachment-row */),
  h = n(62564 /* app/components/on-press */),
  m = "__none__",
  g = "__refresh__",
  y = "__upload__",
  v = `PDF, up to ${l.MAX_RESUME_SIZE_MB} MB`,
  b = "Too long for calls";
function S(e) {
  return (0, r.jsxs)(
    d.SelectItem,
    {
      value: e.id,
      disabled: e.tooLongForCalls,
      className: "break-all whitespace-normal",
      children: [
        e.title || "My Resume",
        e.tooLongForCalls &&
          (0, r.jsxs)("span", {
            className: "text-muted-foreground",
            children: [" ", "· ", b],
          }),
      ],
    },
    e.id,
  );
}
function _(e) {
  return { value: e.id, label: e.title || "My Resume" };
}
function x(e) {
  return {
    value: e.id,
    label: e.title || "My Resume",
    meta: e.tooLongForCalls ? b : (0, c.describeResume)(e) || void 0,
    disabled: e.tooLongForCalls,
  };
}
