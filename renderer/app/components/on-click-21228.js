// app/components/on-click-21228.js — webpack module 21228
// params: (e, t, n) = (module, exports, require)
t.AnswerPreferencesScreen = function (e) {
  const t = (0, o.c)(64),
    { value: n, onSave: m, onBack: g, onClose: y, loadPreviews: v } = e,
    b = (0, h.useAnswerPreferencesDraft)(n),
    { draft: S, setDraft: _, step: x } = b;
  if (x) {
    const e = x.field,
      n = x.tab,
      o = x.subheading;
    let i, l, h, m;
    t[0] !== b
      ? ((i = () => b.leavePreference(!1)), (t[0] = b), (t[1] = i))
      : (i = t[1]),
      t[2] !== b || t[3] !== x.field
        ? ((l = () => b.resetAxis(x.field)),
          (h = b.atAxisDefaults(x.field)),
          (t[2] = b),
          (t[3] = x.field),
          (t[4] = l),
          (t[5] = h))
        : ((l = t[4]), (h = t[5])),
      t[6] !== b
        ? ((m = () => b.leavePreference(!0)), (t[6] = b), (t[7] = m))
        : (m = t[7]);
    const g = x.heading;
    let w;
    t[8] !== x
      ? ((w = x.values.map((e) => ({
          value: e,
          ...(0, a.optionMeta)(x, e),
        }))),
        (t[8] = x),
        (t[9] = w))
      : (w = t[9]);
    const E = S[x.field];
    let T, k, C, I, A, O, R;
    return (
      t[10] !== _ || t[11] !== x.field
        ? ((T = (e) => _((t) => ({ ...t, [x.field]: e }))),
          (t[10] = _),
          (t[11] = x.field),
          (t[12] = T))
        : (T = t[12]),
      t[13] !== x.heading || t[14] !== E || t[15] !== T || t[16] !== w
        ? ((k = (0, r.jsx)(f.StyleOptionCards, {
            surface: "sheet",
            ariaLabel: g,
            options: w,
            value: E,
            onChange: T,
          })),
          (t[13] = x.heading),
          (t[14] = E),
          (t[15] = T),
          (t[16] = w),
          (t[17] = k))
        : (k = t[17]),
      t[18] !== S.responseFormat ||
      t[19] !== S.useFillerWords ||
      t[20] !== S.useStarMethod ||
      t[21] !== b.setFillerWords ||
      t[22] !== b.setStarMethod ||
      t[23] !== x.field
        ? ((C =
            "responseFormat" === x.field &&
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                (0, r.jsx)(p.StarMethodSwitch, {
                  className: "w-full justify-between pl-2",
                  checked: S.useStarMethod,
                  onCheckedChange: b.setStarMethod,
                }),
                (0, r.jsx)(d.FillerWordsSwitch, {
                  className: "w-full justify-between pl-2",
                  checked: S.useFillerWords,
                  disabled: !(0, s.honorsFillerWords)(S.responseFormat),
                  onCheckedChange: b.setFillerWords,
                }),
              ],
            })),
          (t[18] = S.responseFormat),
          (t[19] = S.useFillerWords),
          (t[20] = S.useStarMethod),
          (t[21] = b.setFillerWords),
          (t[22] = b.setStarMethod),
          (t[23] = x.field),
          (t[24] = C))
        : (C = t[24]),
      t[25] !== k || t[26] !== C
        ? ((I = (0, r.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [k, C],
          })),
          (t[25] = k),
          (t[26] = C),
          (t[27] = I))
        : (I = t[27]),
      t[28] !== b.answer ||
      t[29] !== b.category ||
      t[30] !== b.handlePreviewsLoaded ||
      t[31] !== b.setCategory ||
      t[32] !== v
        ? ((A = (0, r.jsx)(c.AnswerPreviewPanel, {
            category: b.category,
            onCategoryChange: b.setCategory,
            answer: b.answer,
            onPreviewsLoaded: b.handlePreviewsLoaded,
            answerClassName: "text-sm",
            loadPreviews: v,
          })),
          (t[28] = b.answer),
          (t[29] = b.category),
          (t[30] = b.handlePreviewsLoaded),
          (t[31] = b.setCategory),
          (t[32] = v),
          (t[33] = A))
        : (A = t[33]),
      t[34] !== I || t[35] !== A
        ? ((O = (0, r.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [I, A],
          })),
          (t[34] = I),
          (t[35] = A),
          (t[36] = O))
        : (O = t[36]),
      t[37] !== y ||
      t[38] !== x.field ||
      t[39] !== x.subheading ||
      t[40] !== x.tab ||
      t[41] !== O ||
      t[42] !== i ||
      t[43] !== l ||
      t[44] !== h ||
      t[45] !== m
        ? ((R = (0, r.jsx)(
            u.CreateSessionSheetScreen,
            {
              title: n,
              description: o,
              onBack: i,
              onClose: y,
              cancelLabel: "Set default",
              onCancel: l,
              cancelDisabled: h,
              confirmLabel: "Select",
              onConfirm: m,
              children: O,
            },
            e,
          )),
          (t[37] = y),
          (t[38] = x.field),
          (t[39] = x.subheading),
          (t[40] = x.tab),
          (t[41] = O),
          (t[42] = i),
          (t[43] = l),
          (t[44] = h),
          (t[45] = m),
          (t[46] = R))
        : (R = t[46]),
      R
    );
  }
  const w = b.resetAll,
    E = b.atDefaults;
  let T;
  t[47] !== S || t[48] !== g || t[49] !== m
    ? ((T = () => {
        m(S), g();
      }),
      (t[47] = S),
      (t[48] = g),
      (t[49] = m),
      (t[50] = T))
    : (T = t[50]);
  const k = b.unchanged;
  let C, I, A;
  return (
    t[51] !== S || t[52] !== b
      ? ((C = a.ANSWER_STYLE_STEPS.map((e) => {
          const t = h.PREFERENCE_ICONS[e.field];
          return (0, r.jsxs)(
            "button",
            {
              type: "button",
              onClick: () => b.openPreference(e.field),
              className:
                "focus-ring flex w-full cursor-pointer items-center gap-3 rounded-md text-left outline-none",
              children: [
                (0, r.jsx)(t, { className: "size-4 shrink-0" }),
                (0, r.jsxs)("span", {
                  className: "flex min-w-0 flex-1 flex-col gap-1",
                  children: [
                    (0, r.jsx)(l.Typography, {
                      variant: "meta",
                      className: "font-medium",
                      children: e.tab,
                    }),
                    (0, r.jsx)(l.Typography, {
                      variant: "meta",
                      className: "text-muted-foreground truncate",
                      children: (0, h.describePreference)(e, S),
                    }),
                  ],
                }),
                (0, r.jsx)(i.ChevronRight, {
                  className: "text-muted-foreground size-4 shrink-0",
                }),
              ],
            },
            e.field,
          );
        })),
        (t[51] = S),
        (t[52] = b),
        (t[53] = C))
      : (C = t[53]),
    t[54] !== C
      ? ((I = (0, r.jsx)("div", {
          className: "flex flex-col gap-7",
          children: C,
        })),
        (t[54] = C),
        (t[55] = I))
      : (I = t[55]),
    t[56] !== b.atDefaults ||
    t[57] !== b.resetAll ||
    t[58] !== b.unchanged ||
    t[59] !== g ||
    t[60] !== y ||
    t[61] !== T ||
    t[62] !== I
      ? ((A = (0, r.jsx)(u.CreateSessionSheetScreen, {
          title: "Answer preferences",
          description:
            "Shape your answers your way. Change anytime, even mid-call.",
          onBack: g,
          onClose: y,
          cancelLabel: "Set default",
          onCancel: w,
          cancelDisabled: E,
          confirmLabel: "Save",
          onConfirm: T,
          confirmDisabled: k,
          children: I,
        })),
        (t[56] = b.atDefaults),
        (t[57] = b.resetAll),
        (t[58] = b.unchanged),
        (t[59] = g),
        (t[60] = y),
        (t[61] = T),
        (t[62] = I),
        (t[63] = A))
      : (A = t[63]),
    A
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(57995 /* vendor/module-57995 */),
  s = n(37167 /* vendor/module-37167 */),
  l = n(34483 /* app/components/typography-variants */),
  c = n(74886 /* app/components/on-click-74886 */),
  u = n(50547 /* app/components/create-session-sheet-screen */),
  d = n(7157 /* app/components/filler-words-switch */),
  p = n(49241 /* app/components/star-method-switch */),
  f = n(24107 /* app/components/style-option-cards */),
  h = n(94984 /* vendor/module-94984 */);
