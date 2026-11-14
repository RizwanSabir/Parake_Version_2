// app/components/on-click-7293.js — webpack module 7293
// params: (e, t, n) = (module, exports, require)
t.VoiceRecordedSummary = function (e) {
  const t = (0, o.c)(46),
    { language: n, onClose: m, onDeleted: g, renderTitle: y } = e,
    [v, b] = (0, a.useState)(!1),
    { data: S } = c.api.speakerEnrollment.list.useQuery();
  let _;
  if (t[0] !== n || t[1] !== S) {
    const e = void 0 === S ? [] : S,
      { enrollment: r } = (0, l.assessEnrollment)(e, n);
    (_ = r ? `Recorded ${(0, s.formatShortDate)(r.createdAt)}` : null),
      (t[0] = n),
      (t[1] = S),
      (t[2] = _);
  } else _ = t[2];
  const x = _;
  let w;
  t[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((w = (e) =>
        (0, r.jsxs)(u.Button, {
          variant: "destructive",
          size: e,
          onClick: () => b(!0),
          children: [(0, r.jsx)(i.Trash2, {}), " Delete Voice"],
        })),
      (t[3] = w))
    : (w = t[3]);
  const E = w;
  let T;
  t[4] !== v || t[5] !== n || t[6] !== g
    ? ((T = (0, r.jsx)(f.DeleteVoiceProfileDialog, {
        open: v,
        onOpenChange: b,
        language: n,
        onDeleted: g,
      })),
      (t[4] = v),
      (t[5] = n),
      (t[6] = g),
      (t[7] = T))
    : (T = t[7]);
  const k = T;
  let C, I, A, O;
  t[8] === Symbol.for("react.memo_cache_sentinel")
    ? ((C = (0, r.jsx)("div", {
        className: "rounded-full border p-2.5",
        children: (0, r.jsx)(i.Check, {
          className: "text-primary size-6",
        }),
      })),
      (t[8] = C))
    : (C = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((I = (0, r.jsx)(p.Typography, {
          variant: "body",
          render: (0, r.jsx)("p", {}),
          children: "We got enough data for your voice.",
        })),
        (t[9] = I))
      : (I = t[9]),
    t[10] !== x
      ? ((A =
          x &&
          (0, r.jsx)(p.Typography, {
            variant: "body",
            render: (0, r.jsx)("p", {
              className: "text-muted-foreground font-medium",
            }),
            children: x,
          })),
        (t[10] = x),
        (t[11] = A))
      : (A = t[11]),
    t[12] !== A
      ? ((O = (0, r.jsxs)(r.Fragment, {
          children: [
            C,
            (0, r.jsxs)("div", {
              className: "flex flex-col items-center text-center",
              children: [I, A],
            }),
          ],
        })),
        (t[12] = A),
        (t[13] = O))
      : (O = t[13]);
  const R = O;
  if (y) {
    let e, n, o, i, a, s;
    return (
      t[14] !== y
        ? ((e = y(h.VOICE_RECORDER_TITLE)), (t[14] = y), (t[15] = e))
        : (e = t[15]),
      t[16] !== R
        ? ((n = (0, r.jsx)("div", {
            className: "flex flex-col items-center gap-6 py-4",
            children: R,
          })),
          (t[16] = R),
          (t[17] = n))
        : (n = t[17]),
      t[18] !== m
        ? ((o = (0, r.jsx)(u.Button, {
            variant: "secondary",
            size: "xl",
            onClick: m,
            children: "Back",
          })),
          (t[18] = m),
          (t[19] = o))
        : (o = t[19]),
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = E("xl")), (t[20] = i))
        : (i = t[20]),
      t[21] !== o
        ? ((a = (0, r.jsxs)("div", {
            className: "grid w-full grid-cols-2 gap-2",
            children: [o, i],
          })),
          (t[21] = o),
          (t[22] = a))
        : (a = t[22]),
      t[23] !== k || t[24] !== n || t[25] !== a || t[26] !== e
        ? ((s = (0, r.jsxs)(r.Fragment, { children: [e, n, a, k] })),
          (t[23] = k),
          (t[24] = n),
          (t[25] = a),
          (t[26] = e),
          (t[27] = s))
        : (s = t[27]),
      s
    );
  }
  let M, P, N, D, j, L, F, U, B;
  return (
    t[28] === Symbol.for("react.memo_cache_sentinel")
      ? ((M = (0, r.jsx)(i.ArrowLeft, {})), (t[28] = M))
      : (M = t[28]),
    t[29] !== m
      ? ((P = (0, r.jsx)(u.Button, {
          variant: "ghost",
          size: "icon-lg",
          "aria-label": "Back",
          onClick: m,
          children: M,
        })),
        (t[29] = m),
        (t[30] = P))
      : (P = t[30]),
    t[31] === Symbol.for("react.memo_cache_sentinel")
      ? ((N = (0, r.jsx)(d.DrawerTitle, {
          className: "truncate text-center",
          children: h.VOICE_RECORDER_TITLE,
        })),
        (t[31] = N))
      : (N = t[31]),
    t[32] !== P
      ? ((D = (0, r.jsxs)("div", {
          className:
            "grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2 px-4 pt-7 pb-4",
          children: [P, N],
        })),
        (t[32] = P),
        (t[33] = D))
      : (D = t[33]),
    t[34] !== R
      ? ((j = (0, r.jsx)("div", {
          className:
            "flex min-h-0 flex-col items-center gap-6 overflow-y-auto px-4 pt-4 pb-8",
          children: R,
        })),
        (t[34] = R),
        (t[35] = j))
      : (j = t[35]),
    t[36] !== m
      ? ((L = (0, r.jsx)(u.Button, {
          variant: "secondary",
          size: "2xl",
          onClick: m,
          children: "Cancel",
        })),
        (t[36] = m),
        (t[37] = L))
      : (L = t[37]),
    t[38] === Symbol.for("react.memo_cache_sentinel")
      ? ((F = E("2xl")), (t[38] = F))
      : (F = t[38]),
    t[39] !== L
      ? ((U = (0, r.jsxs)(d.DrawerFooter, {
          className: "grid grid-cols-2 items-center pb-8",
          children: [L, F],
        })),
        (t[39] = L),
        (t[40] = U))
      : (U = t[40]),
    t[41] !== k || t[42] !== D || t[43] !== j || t[44] !== U
      ? ((B = (0, r.jsxs)(r.Fragment, { children: [D, j, U, k] })),
        (t[41] = k),
        (t[42] = D),
        (t[43] = j),
        (t[44] = U),
        (t[45] = B))
      : (B = t[45]),
    B
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(91917 /* vendor/module-91917 */),
  l = n(57e3),
  c = n(44189 /* vendor/module-44189 */),
  u = n(66244 /* app/components/button-variants */),
  d = n(6207 /* app/components/drawer */),
  p = n(34483 /* app/components/typography-variants */),
  f = n(29527 /* app/components/delete-voice-profile-dialog */),
  h = n(67393 /* app/components/on-success */);
