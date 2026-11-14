// app/components/create-session-sheet-screen.js — webpack module 50547
// params: (e, t, n) = (module, exports, require)
t.CreateSessionSheetScreen = function (e) {
  const t = (0, o.c)(41),
    {
      title: n,
      description: p,
      onBack: f,
      onClose: h,
      hideBack: m,
      cancelLabel: g,
      onCancel: y,
      cancelDisabled: v,
      confirmLabel: b,
      onConfirm: S,
      confirmDisabled: _,
      hideCancel: x,
      pinned: w,
      list: E,
      renderTitle: T,
      children: k,
    } = e,
    C = void 0 === g ? "Cancel" : g,
    I = void 0 === b ? "Save" : b,
    A = (0, u.useDrillTitleRender)(),
    O = T ?? A;
  let R, M;
  t[0] !== m || t[1] !== f
    ? ((R =
        !m &&
        (0, r.jsxs)(s.Button, {
          type: "button",
          variant: "ghost",
          size: "icon",
          onClick: f,
          className: "absolute top-6 left-0 size-10",
          children: [
            (0, r.jsx)(i.MoveLeft, { className: "size-5" }),
            (0, r.jsx)("span", {
              className: "sr-only",
              children: "Back",
            }),
          ],
        })),
      (t[0] = m),
      (t[1] = f),
      (t[2] = R))
    : (R = t[2]),
    t[3] !== h
      ? ((M =
          h &&
          (0, r.jsxs)(s.Button, {
            type: "button",
            variant: "ghost",
            size: "icon",
            onClick: h,
            className: "absolute top-6 right-0 size-10",
            children: [
              (0, r.jsx)(i.XIcon, { className: "size-5" }),
              (0, r.jsx)("span", {
                className: "sr-only",
                children: "Close",
              }),
            ],
          })),
        (t[3] = h),
        (t[4] = M))
      : (M = t[4]);
  const P = !p && "h-10";
  let N, D, j, L, F, U;
  t[5] !== P
    ? ((N = (0, a.cn)("flex items-center justify-center", P)),
      (t[5] = P),
      (t[6] = N))
    : (N = t[6]),
    t[7] !== O || t[8] !== n
      ? ((D = (0, r.jsx)(c.Typography, {
          variant: "title",
          className: "truncate text-xl",
          render: O,
          children: n,
        })),
        (t[7] = O),
        (t[8] = n),
        (t[9] = D))
      : (D = t[9]),
    t[10] !== N || t[11] !== D
      ? ((j = (0, r.jsx)("div", { className: N, children: D })),
        (t[10] = N),
        (t[11] = D),
        (t[12] = j))
      : (j = t[12]),
    t[13] !== p
      ? ((L =
          p &&
          (0, r.jsx)(c.Typography, {
            className: "text-muted-foreground text-center",
            children: p,
          })),
        (t[13] = p),
        (t[14] = L))
      : (L = t[14]),
    t[15] !== j || t[16] !== L
      ? ((F = (0, r.jsxs)("div", {
          className: "flex flex-col gap-1 px-12",
          children: [j, L],
        })),
        (t[15] = j),
        (t[16] = L),
        (t[17] = F))
      : (F = t[17]),
    t[18] !== F || t[19] !== R || t[20] !== M
      ? ((U = (0, r.jsxs)("div", {
          className: "relative flex shrink-0 flex-col pt-6 pb-4",
          children: [R, M, F],
        })),
        (t[18] = F),
        (t[19] = R),
        (t[20] = M),
        (t[21] = U))
      : (U = t[21]);
  const B = w || E ? "pt-2" : "pt-4";
  let z, H, V, q;
  return (
    t[22] !== B
      ? ((z = (0, a.cn)("flex min-h-full flex-col pr-4 pb-4", B)),
        (t[22] = B),
        (t[23] = z))
      : (z = t[23]),
    t[24] !== k || t[25] !== z
      ? ((H = (0, r.jsx)(l.ScrollArea, {
          className: "-mr-4 flex min-h-0 flex-1 flex-col",
          focusRing: !1,
          viewportClassName: "h-auto min-h-0 flex-1 max-sm:scroll-fade-y",
          contentClassName: z,
          children: k,
        })),
        (t[24] = k),
        (t[25] = z),
        (t[26] = H))
      : (H = t[26]),
    t[27] !== v ||
    t[28] !== C ||
    t[29] !== _ ||
    t[30] !== I ||
    t[31] !== x ||
    t[32] !== f ||
    t[33] !== y ||
    t[34] !== S
      ? ((V =
          S &&
          (0, r.jsx)(d.CreateSessionFooter, {
            onBack: y ?? f,
            backLabel: C,
            backDisabled: v,
            nextLabel: I,
            onNext: S,
            nextDisabled: _,
            hideBackOnMobile: x,
          })),
        (t[27] = v),
        (t[28] = C),
        (t[29] = _),
        (t[30] = I),
        (t[31] = x),
        (t[32] = f),
        (t[33] = y),
        (t[34] = S),
        (t[35] = V))
      : (V = t[35]),
    t[36] !== w || t[37] !== U || t[38] !== H || t[39] !== V
      ? ((q = (0, r.jsxs)("div", {
          className: "animate-drill-forward flex min-h-0 flex-1 flex-col",
          children: [U, w, H, V],
        })),
        (t[36] = w),
        (t[37] = U),
        (t[38] = H),
        (t[39] = V),
        (t[40] = q))
      : (q = t[40]),
    q
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(29113 /* vendor/module-29113 */),
  s = n(66244 /* app/components/button-variants */),
  l = n(11801 /* app/components/scroll-area */),
  c = n(34483 /* app/components/typography-variants */),
  u = n(42665 /* app/components/on-open */),
  d = n(29789 /* app/components/create-session-footer */);
