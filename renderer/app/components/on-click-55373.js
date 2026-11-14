// app/components/on-click-55373.js — webpack module 55373
// params: (e, t, n) = (module, exports, require)
t.VoiceProfileSection = function (e) {
  const t = (0, o.c)(23),
    { openRecorder: n } = e,
    u = void 0 !== n && n,
    [E, T] = (0, a.useState)(null),
    [k, C] = (0, a.useState)(u ? c.DEFAULT_LANGUAGE : null),
    [I, A] = (0, a.useState)(null),
    { data: O, isLoading: R } = p.api.speakerEnrollment.list.useQuery(),
    M = void 0 === O ? [] : O,
    { getLanguageLabel: P } = (0, s.useTranscriptionLanguages)();
  let N;
  t[0] !== P ? ((N = (e) => P(e) ?? e), (t[0] = P), (t[1] = N)) : (N = t[1]);
  const D = N,
    j = M.map(x);
  let L;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((L = { limit: 1 }), (t[2] = L))
    : (L = t[2]);
  const F = !R;
  let U;
  t[3] !== F ? ((U = { enabled: F }), (t[3] = F), (t[4] = U)) : (U = t[4]);
  const { data: B } = p.api.callSession.getMany.useQuery(L, U),
    z =
      [B?.data[0]?.language, c.DEFAULT_LANGUAGE].find(
        (e) => !!e && !j.includes(e),
      ) ??
      B?.data[0]?.language ??
      c.DEFAULT_LANGUAGE;
  let H;
  t[5] !== E
    ? ((H = (e) => e.language === E), (t[5] = E), (t[6] = H))
    : (H = t[6]);
  const V = M.find(H),
    q = _,
    G = (0, l.useIsPhone)();
  let W;
  t[7] !== E
    ? ((W = (e) =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(f.Button, {
              variant: "secondary",
              size: e,
              onClick: () => {
                C(E), T(null);
              },
              children: [(0, r.jsx)(i.Mic, {}), " Re-record"],
            }),
            (0, r.jsxs)(f.Button, {
              variant: "destructive",
              size: e,
              onClick: () => {
                A(E), T(null);
              },
              children: [(0, r.jsx)(i.Trash2, {}), " Delete"],
            }),
          ],
        })),
      (t[7] = E),
      (t[8] = W))
    : (W = t[8]);
  const $ = W;
  let Y;
  t[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((Y = (0, r.jsx)(b.VoiceProfileIntro, {})), (t[9] = Y))
    : (Y = t[9]);
  const K = R
      ? (0, r.jsx)("div", {
          role: "status",
          "aria-label": "Loading voice profiles",
          children: (0, r.jsx)(g.Skeleton, {
            className: "h-14 w-full rounded-2xl",
          }),
        })
      : (0, r.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            M.map((e) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, r.jsxs)(w, {
                      onClick: () => T(e.language),
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex min-w-0 flex-1 flex-col",
                          children: [
                            (0, r.jsxs)(y.Typography, {
                              variant: "body",
                              render: (0, r.jsx)("span", {
                                className: "truncate",
                              }),
                              children: [D(e.language), " ·", " ", q(e.status)],
                            }),
                            (0, r.jsxs)(y.Typography, {
                              variant: "meta",
                              className:
                                "text-muted-foreground truncate leading-[1.3]",
                              render: (0, r.jsx)("span", {}),
                              children: [
                                "Recorded ",
                                (0, d.formatShortDate)(e.createdAt),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)(i.ChevronRight, {
                          className: "text-muted-foreground size-4 shrink-0",
                        }),
                      ],
                    }),
                    "stale" === e.status &&
                      (0, r.jsxs)(y.Typography, {
                        variant: "body",
                        render: (0, r.jsx)("p", {
                          className: "text-error flex items-center gap-2",
                        }),
                        children: [
                          (0, r.jsx)(i.TriangleAlert, {
                            className: "size-4 shrink-0",
                          }),
                          "The transcription model changed, so this profile no longer works. Record a new sample to get speaker labeling back.",
                        ],
                      }),
                  ],
                },
                e.language,
              ),
            ),
            (0, r.jsxs)(w, {
              className: "min-h-14 border-dashed",
              onClick: () => C(z),
              children: [
                (0, r.jsx)(y.Typography, {
                  variant: "body",
                  render: (0, r.jsx)("span", {
                    className: "min-w-0 flex-1 truncate",
                  }),
                  children:
                    0 === M.length
                      ? "Record your voice"
                      : "Add another language",
                }),
                (0, r.jsx)(i.Plus, {
                  className: "text-muted-foreground size-4 shrink-0",
                }),
              ],
            }),
          ],
        }),
    Z = G
      ? (0, r.jsx)(m.Drawer, {
          open: null !== E,
          onOpenChange: (e) => {
            e || T(null);
          },
          showSwipeHandle: !0,
          children: (0, r.jsxs)(m.DrawerContent, {
            initialFocus: !1,
            children: [
              (0, r.jsxs)(m.DrawerHeader, {
                children: [
                  (0, r.jsx)(m.DrawerTitle, {
                    children: E ? `${D(E)} Voice Profile` : "",
                  }),
                  (0, r.jsx)(m.DrawerDescription, {
                    children: V
                      ? `${q(V.status)} · Recorded ${(0, d.formatShortDate)(V.createdAt)}`
                      : "",
                  }),
                ],
              }),
              (0, r.jsx)(m.DrawerFooter, {
                className: "gap-3 pb-8",
                children: $("2xl"),
              }),
            ],
          }),
        })
      : (0, r.jsx)(h.Dialog, {
          open: null !== E,
          onOpenChange: (e) => {
            e || T(null);
          },
          children: (0, r.jsxs)(h.DialogContent, {
            size: "sm",
            initialFocus: !1,
            children: [
              (0, r.jsx)(h.DialogTitle, {
                children: E ? `${D(E)} Voice Profile` : "",
              }),
              (0, r.jsx)(h.DialogDescription, {
                children: V
                  ? `${q(V.status)} · Recorded ${(0, d.formatShortDate)(V.createdAt)}`
                  : "",
              }),
              (0, r.jsx)(h.DialogFooter, {
                layout: "stretch",
                className: "mt-2",
                children: $("xl"),
              }),
            ],
          }),
        }),
    Q = null !== k;
  let J;
  t[10] === Symbol.for("react.memo_cache_sentinel")
    ? ((J = (e) => {
        e || C(null);
      }),
      (t[10] = J))
    : (J = t[10]);
  const X = k ?? z;
  let ee, te, ne;
  return (
    t[11] !== j || t[12] !== Q || t[13] !== X
      ? ((ee = (0, r.jsx)(S.VoiceProfileRecorderDialog, {
          open: Q,
          onOpenChange: J,
          language: X,
          enrolledLanguages: j,
        })),
        (t[11] = j),
        (t[12] = Q),
        (t[13] = X),
        (t[14] = ee))
      : (ee = t[14]),
    t[15] !== I
      ? ((te =
          null !== I &&
          (0, r.jsx)(v.DeleteVoiceProfileDialog, {
            open: !0,
            onOpenChange: (e) => {
              e || A(null);
            },
            language: I,
          })),
        (t[15] = I),
        (t[16] = te))
      : (te = t[16]),
    t[17] !== Y || t[18] !== K || t[19] !== Z || t[20] !== ee || t[21] !== te
      ? ((ne = (0, r.jsxs)("section", {
          className: "flex w-full flex-col gap-4",
          children: [Y, K, Z, ee, te],
        })),
        (t[17] = Y),
        (t[18] = K),
        (t[19] = Z),
        (t[20] = ee),
        (t[21] = te),
        (t[22] = ne))
      : (ne = t[22]),
    ne
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(94422 /* vendor/module-94422 */),
  l = n(59211 /* vendor/module-59211 */),
  c = n(64642 /* vendor/module-64642 */),
  u = n(29113 /* vendor/module-29113 */),
  d = n(91917 /* vendor/module-91917 */),
  p = n(44189 /* vendor/module-44189 */),
  f = n(66244 /* app/components/button-variants */),
  h = n(98980 /* app/components/dialog */),
  m = n(6207 /* app/components/drawer */),
  g = n(81817 /* app/components/skeleton */),
  y = n(34483 /* app/components/typography-variants */),
  v = n(29527 /* app/components/delete-voice-profile-dialog */),
  b = n(45778 /* vendor/module-45778 */),
  S = n(83264 /* app/components/on-click-83264 */);
function _(e) {
  return "stale" === e ? "Needs re-recording" : "Active";
}
function x(e) {
  return e.language;
}
function w(e) {
  const t = (0, o.c)(6),
    { children: n, onClick: i, className: a } = e;
  let s, l;
  return (
    t[0] !== a
      ? ((s = (0, u.cn)(
          "border-foreground/12 bg-card hover:bg-hover flex w-full cursor-pointer items-center gap-2.5 rounded-2xl border px-3.5 py-2 text-left transition-colors",
          a,
        )),
        (t[0] = a),
        (t[1] = s))
      : (s = t[1]),
    t[2] !== n || t[3] !== i || t[4] !== s
      ? ((l = (0, r.jsx)("button", {
          type: "button",
          onClick: i,
          className: s,
          children: n,
        })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = s),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
