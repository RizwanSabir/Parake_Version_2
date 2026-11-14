// app/components/on-click-83264.js — webpack module 83264
// params: (e, t, n) = (module, exports, require)
t.VoiceProfileRecorderDialog = function (e) {
  const t = (0, o.c)(53),
    {
      open: n,
      onOpenChange: m,
      language: g,
      enrolledLanguages: y,
      onSaved: v,
    } = e,
    {
      data: b,
      isLoading: S,
      error: _,
      getLanguageLabel: x,
    } = (0, s.useTranscriptionLanguages)(),
    [w, E] = (0, a.useState)(null),
    [T, k] = (0, a.useState)("recorder"),
    C = w ?? g;
  let I, A, O;
  t[0] !== n
    ? ((I = () => {
        n || E(null), n && k("recorder");
      }),
      (A = [n]),
      (t[0] = n),
      (t[1] = I),
      (t[2] = A))
    : ((I = t[1]), (A = t[2])),
    (0, a.useEffect)(I, A),
    t[3] !== C || t[4] !== x
      ? ((O = x(C) ?? C), (t[3] = C), (t[4] = x), (t[5] = O))
      : (O = t[5]);
  const R = O;
  let M;
  t[6] !== R || t[7] !== C || t[8] !== y
    ? ((M = y.includes(C)
        ? `The sample is recorded for ${R} sessions and replaces your current ${R} profile.`
        : `The sample is recorded for ${R} sessions; add a profile for each language you hold calls in.`),
      (t[6] = R),
      (t[7] = C),
      (t[8] = y),
      (t[9] = M))
    : (M = t[9]);
  const P = M;
  let N;
  t[10] !== m ? ((N = () => m(!1)), (t[10] = m), (t[11] = N)) : (N = t[11]);
  const D = (0, a.useRef)(N);
  let j;
  t[12] !== m
    ? ((j = (e) => {
        e ? m(!0) : D.current();
      }),
      (t[12] = m),
      (t[13] = j))
    : (j = t[13]);
  const L = j,
    F = (0, l.useIsPhone)(),
    [U, B] = (0, a.useState)(F);
  n || U === F || B(F);
  const z = !!_;
  let H, V, q, G, W;
  t[14] === Symbol.for("react.memo_cache_sentinel")
    ? ((H = (e) => {
        E(e), k("recorder");
      }),
      (V = () => k("recorder")),
      (t[14] = H),
      (t[15] = V))
    : ((H = t[14]), (V = t[15])),
    t[16] !== m ? ((q = () => m(!1)), (t[16] = m), (t[17] = q)) : (q = t[17]),
    t[18] !== U
      ? ((G = U
          ? (0, r.jsx)(f.DrawerTitle, {})
          : (0, r.jsx)(p.DialogTitle, {})),
        (t[18] = U),
        (t[19] = G))
      : (G = t[19]),
    t[20] !== C ||
    t[21] !== S ||
    t[22] !== b ||
    t[23] !== q ||
    t[24] !== G ||
    t[25] !== z
      ? ((W = (0, r.jsx)(u.LanguagePicker, {
          languages: b,
          isLoading: S,
          error: z,
          value: C,
          onSelect: H,
          onBack: V,
          onClose: q,
          renderTitle: G,
        })),
        (t[20] = C),
        (t[21] = S),
        (t[22] = b),
        (t[23] = q),
        (t[24] = G),
        (t[25] = z),
        (t[26] = W))
      : (W = t[26]);
  const $ = W;
  let Y;
  t[27] !== R
    ? ((Y = (e) =>
        (0, r.jsxs)("button", {
          type: "button",
          disabled: e,
          className: (0, c.cn)(
            "bg-accent-secondary flex h-15 w-full items-center justify-between rounded-xl border py-2 pr-2 pl-4 text-left [&_svg]:shrink-0",
            e ? "opacity-60" : "cursor-pointer",
          ),
          onClick: () => k("language"),
          children: [
            (0, r.jsxs)("span", {
              className: "flex items-center gap-2",
              children: [
                (0, r.jsx)(i.Languages, { className: "size-5" }),
                (0, r.jsx)("span", {
                  className: "text-sm font-medium",
                  children: "Language",
                }),
              ],
            }),
            (0, r.jsxs)("span", {
              className: "text-muted-foreground flex items-center gap-2",
              children: [
                (0, r.jsx)("span", {
                  className: "max-w-28 truncate text-sm font-medium",
                  children: R,
                }),
                (0, r.jsx)(i.ChevronRight, { className: "size-5" }),
              ],
            }),
          ],
        })),
      (t[27] = R),
      (t[28] = Y))
    : (Y = t[28]);
  const K = Y;
  if (!U) {
    let e, o;
    return (
      t[29] !== C ||
      t[30] !== P ||
      t[31] !== $ ||
      t[32] !== K ||
      t[33] !== m ||
      t[34] !== v ||
      t[35] !== T
        ? ((e = (0, r.jsx)(p.DialogContent, {
            size: "md",
            showCloseButton: !1,
            initialFocus: !1,
            className: "flex flex-col gap-4 py-6",
            children:
              "language" === T
                ? (0, r.jsx)("div", {
                    className: "flex h-[70svh] min-h-0 flex-col",
                    children: $,
                  })
                : (0, r.jsx)(h.VoiceSampleRecorder, {
                    language: C,
                    onClose: () => m(!1),
                    onSaved: v,
                    requestCloseRef: D,
                    children: (e) => {
                      const {
                        statusPanel: t,
                        actions: n,
                        languageLocked: o,
                      } = e;
                      return (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(p.DialogTitle, {
                            children: h.VOICE_RECORDER_TITLE,
                          }),
                          (0, r.jsxs)(p.DialogDescription, {
                            children: [h.VOICE_RECORDER_DESCRIPTION, " ", P],
                          }),
                          K(o),
                          t,
                          (0, r.jsx)(p.DialogFooter, {
                            layout: "stretch",
                            children: n,
                          }),
                        ],
                      });
                    },
                  }),
          })),
          (t[29] = C),
          (t[30] = P),
          (t[31] = $),
          (t[32] = K),
          (t[33] = m),
          (t[34] = v),
          (t[35] = T),
          (t[36] = e))
        : (e = t[36]),
      t[37] !== L || t[38] !== n || t[39] !== e
        ? ((o = (0, r.jsx)(p.Dialog, {
            open: n,
            onOpenChange: L,
            children: e,
          })),
          (t[37] = L),
          (t[38] = n),
          (t[39] = e),
          (t[40] = o))
        : (o = t[40]),
      o
    );
  }
  let Z, Q;
  return (
    t[41] !== C ||
    t[42] !== P ||
    t[43] !== $ ||
    t[44] !== K ||
    t[45] !== m ||
    t[46] !== v ||
    t[47] !== T
      ? ((Z = (0, r.jsx)(f.DrawerContent, {
          initialFocus: !1,
          children: (0, r.jsx)("div", {
            className: "flex min-h-0 flex-1 flex-col pb-8",
            children:
              "language" === T
                ? (0, r.jsx)("div", {
                    className: "flex h-[75svh] min-h-0 flex-col px-4",
                    children: $,
                  })
                : (0, r.jsx)(h.VoiceSampleRecorder, {
                    language: C,
                    onClose: () => m(!1),
                    onSaved: v,
                    actionSize: "2xl",
                    requestCloseRef: D,
                    children: (e) => {
                      const {
                        statusPanel: t,
                        actions: n,
                        close: o,
                        languageLocked: a,
                      } = e;
                      return (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2 px-4 pt-7 pb-4",
                            children: [
                              (0, r.jsx)(d.Button, {
                                variant: "ghost",
                                size: "icon-lg",
                                "aria-label": "Back",
                                onClick: o,
                                children: (0, r.jsx)(i.ArrowLeft, {}),
                              }),
                              (0, r.jsx)(f.DrawerTitle, {
                                className: "truncate text-center",
                                children: h.VOICE_RECORDER_TITLE,
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex min-h-0 flex-col gap-12 overflow-y-auto px-4 pt-4 pb-8",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                  (0, r.jsxs)(f.DrawerDescription, {
                                    className: "text-wrap",
                                    children: [
                                      h.VOICE_RECORDER_DESCRIPTION,
                                      " ",
                                      P,
                                    ],
                                  }),
                                  K(a),
                                ],
                              }),
                              t,
                            ],
                          }),
                          (0, r.jsx)(f.DrawerFooter, {
                            className: "grid grid-cols-2 items-center pb-0",
                            children: n,
                          }),
                        ],
                      });
                    },
                  }),
          }),
        })),
        (t[41] = C),
        (t[42] = P),
        (t[43] = $),
        (t[44] = K),
        (t[45] = m),
        (t[46] = v),
        (t[47] = T),
        (t[48] = Z))
      : (Z = t[48]),
    t[49] !== L || t[50] !== n || t[51] !== Z
      ? ((Q = (0, r.jsx)(f.Drawer, {
          open: n,
          onOpenChange: L,
          showSwipeHandle: !0,
          children: Z,
        })),
        (t[49] = L),
        (t[50] = n),
        (t[51] = Z),
        (t[52] = Q))
      : (Q = t[52]),
    Q
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(94422 /* vendor/module-94422 */),
  l = n(59211 /* vendor/module-59211 */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(95793 /* app/components/language-picker */),
  d = n(66244 /* app/components/button-variants */),
  p = n(98980 /* app/components/dialog */),
  f = n(6207 /* app/components/drawer */),
  h = n(67393 /* app/components/on-success */);
