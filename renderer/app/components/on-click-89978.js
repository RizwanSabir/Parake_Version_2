// app/components/on-click-89978.js — webpack module 89978
// params: (e, t, n) = (module, exports, require)
"use strict";
t.App = function () {
  const e = (0, o.c)(110);
  let t, n;
  (0, M.usePointerPassThrough)(),
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((t = []), (e[0] = t))
      : (t = e[0]),
    (0, i.useEffect)(F, t),
    e[1] === Symbol.for("react.memo_cache_sentinel")
      ? ((n = []), (e[1] = n))
      : (n = e[1]),
    (0, i.useEffect)(j, n);
  const L = N.api.useUtils(),
    { apiConfig: U } = (0, C.useApiConfig)(),
    {
      locationOnScreen: B,
      offset: z,
      hiddenForScreenMove: H,
    } = (0, O.useLocationOnScreen)();
  let V;
  e[2] !== B || e[3] !== z
    ? ((V = (0, A.offsetInsets)(B, z)), (e[2] = B), (e[3] = z), (e[4] = V))
    : (V = e[4]);
  const q = V,
    [G, W] = (0, i.useState)(window.electron.showMeetingStartNotificationOnly),
    $ = (0, D.useAppUpdateState)(),
    Y = (0, i.useRef)($);
  let K, Z, Q;
  e[5] !== $
    ? ((K = () => {
        Y.current = $;
      }),
      (Z = [$]),
      (e[5] = $),
      (e[6] = K),
      (e[7] = Z))
    : ((K = e[6]), (Z = e[7])),
    (0, i.useEffect)(K, Z),
    e[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((Q = { retry: !1 }), (e[8] = Q))
      : (Q = e[8]);
  const {
    data: J,
    error: X,
    isLoading: ee,
  } = N.api.user.get.useQuery(void 0, Q);
  let te;
  e[9] !== X || e[10] !== J
    ? ((te = (0, f.resolveIsLoggedIn)(J, X)),
      (e[9] = X),
      (e[10] = J),
      (e[11] = te))
    : (te = e[11]);
  const ne = te;
  let re;
  e[12] !== ne
    ? ((re = { enabled: ne }), (e[12] = ne), (e[13] = re))
    : (re = e[13]);
  const { data: oe, isLoading: ie } = N.api.subscription.getState.useQuery(
    void 0,
    re,
  );
  let ae;
  e[14] !== ne || e[15] !== oe || e[16] !== J?.lifetimePurchasedAt
    ? ((ae = ne && ((0, d.coversCalls)(oe) || !!J?.lifetimePurchasedAt)),
      (e[14] = ne),
      (e[15] = oe),
      (e[16] = J?.lifetimePurchasedAt),
      (e[17] = ae))
    : (ae = e[17]);
  const se = ae,
    le = ee || (ie && !J?.lifetimePurchasedAt),
    [ce, ue] = (0, i.useState)(null);
  let de;
  e[18] !== L.callSession
    ? ((de = function (e) {
        const { severity: t, serverGated: n } = Y.current;
        (e && ("forced" === t || n)) || (ue(e), L.callSession.get.reset());
      }),
      (e[18] = L.callSession),
      (e[19] = de))
    : (de = e[19]);
  const pe = de;
  let fe;
  e[20] !== ce
    ? ((fe = { callSessionId: ce }), (e[20] = ce), (e[21] = fe))
    : (fe = e[21]);
  const he = !!ce;
  let me;
  e[22] !== he
    ? ((me = { enabled: he }), (e[22] = he), (e[23] = me))
    : (me = e[23]);
  const { data: ge, isLoading: ye } = N.api.callSession.get.useQuery(fe, me);
  let ve, be, Se;
  e[24] !== pe || e[25] !== L
    ? ((ve = () => {
        const e = window.electron.ipcRendererProxy.on(
            "main/auth-token-was-updated",
            () => {
              L.user.getSessionForcedLogout.reset(),
                L.user.get.reset(),
                L.invalidate();
            },
          ),
          t = window.electron.ipcRendererProxy.on(
            "main/session-did-load",
            (e) => pe(e),
          );
        return () => {
          e(), t();
        };
      }),
      (e[24] = pe),
      (e[25] = L),
      (e[26] = ve))
    : (ve = e[26]),
    e[27] === Symbol.for("react.memo_cache_sentinel")
      ? ((be = []), (e[27] = be))
      : (be = e[27]),
    (0, i.useEffect)(ve, be),
    e[28] === Symbol.for("react.memo_cache_sentinel")
      ? ((Se = function (e) {
          window.electron.ipcRendererProxy.invoke("renderer/set-auth-token", e);
        }),
        (e[28] = Se))
      : (Se = e[28]);
  const _e = Se,
    [xe, we] = (0, i.useState)(!1);
  let Ee;
  e[29] === Symbol.for("react.memo_cache_sentinel")
    ? ((Ee = function () {
        we(!0);
      }),
      (e[29] = Ee))
    : (Ee = e[29]);
  const Te = Ee;
  let ke, Ce;
  e[30] === Symbol.for("react.memo_cache_sentinel")
    ? ((ke = () => {
        const e = window.electron.ipcRendererProxy.on(
          "main/focus-window",
          () => {
            W(!1), we(!1);
          },
        );
        return () => {
          e();
        };
      }),
      (Ce = []),
      (e[30] = ke),
      (e[31] = Ce))
    : ((ke = e[30]), (Ce = e[31])),
    (0, i.useEffect)(ke, Ce);
  const [Ie, Ae] = (0, i.useState)(null),
    [Oe, Re] = (0, i.useState)("list"),
    [Me, Pe] = (0, i.useState)(null);
  let Ne;
  e[32] === Symbol.for("react.memo_cache_sentinel")
    ? ((Ne = function () {
        Pe(null), Re("list");
      }),
      (e[32] = Ne))
    : (Ne = e[32]);
  const De = Ne,
    je = (ye || ee || le) && !X,
    Le = !je && ne && "list" !== Oe;
  let Fe;
  e[33] !== pe
    ? ((Fe = function (e) {
        window.electron.ipcRendererProxy.invoke("renderer/unregister-tray"),
          pe(null),
          Re("create"),
          Ae(e),
          W(!1);
      }),
      (e[33] = pe),
      (e[34] = Fe))
    : (Fe = e[34]);
  const Ue = Fe,
    Be = ce && ge && ne,
    ze = !G && ($.serverGated || ("forced" === $.severity && !Be)),
    He = !!Be;
  let Ve, qe;
  e[35] !== ne || e[36] !== Ue || e[37] !== G || e[38] !== He
    ? ((Ve = {
        isLoggedIn: ne,
        showMeetingStartNotificationOnly: G,
        isInLiveCallSession: He,
        onStartSession: Ue,
      }),
      (e[35] = ne),
      (e[36] = Ue),
      (e[37] = G),
      (e[38] = He),
      (e[39] = Ve))
    : (Ve = e[39]),
    (0, T.useMeetingStartedDetector)(Ve),
    e[40] !== pe || e[41] !== L.user.accountSharingStatus
      ? ((qe = async function (e) {
          await L.user.accountSharingStatus.cancel();
          const t = await L.user.accountSharingStatus
            .fetch(void 0, { staleTime: 0 })
            .catch(() => L.user.accountSharingStatus.getData() ?? null);
          t?.hold && t.hold.liftsAt.getTime() > Date.now() ? De() : pe(e);
        }),
        (e[40] = pe),
        (e[41] = L.user.accountSharingStatus),
        (e[42] = qe))
      : (qe = e[42]);
  const Ge = qe,
    { showPostCallFeedbackToast: We } = (0, k.usePostCallFeedbackToast)(),
    { showEarnCreditsToast: $e } = (0, E.useEarnCreditsToast)();
  let Ye, Ke;
  if (
    e[43] !== U ||
    e[44] !== ge ||
    e[45] !== pe ||
    e[46] !== $e ||
    e[47] !== We ||
    e[48] !== L.feedback ||
    e[49] !== L.review
  ) {
    async function St(e) {
      const [t, n] = await Promise.all([
          (0, l.resolveExitPrompt)(() =>
            L.feedback.getPostCallFeedbackState.fetch(
              { callSessionId: e },
              { staleTime: 0 },
            ),
          ),
          (0, l.resolveExitPrompt)(() =>
            L.review.getSessionReviews.fetch(
              { callSessionId: e },
              { staleTime: 0 },
            ),
          ),
        ]),
        r = "available" === t?.state;
      r && We(e, t.mode), n && (0, p.owesEarnCreditsPrompt)(n, r) && $e(e, n);
    }
    (Ye = function (e) {
      const t = void 0 === e ? "list" : e;
      pe(null),
        "list" === t ? De() : Re(t),
        ge?.activatedAt && St(ge.id),
        ge?.saveTranscription &&
          ge?.activatedAt &&
          (0, P.showViewAiNotesNotification)({
            apiUrl: U.url,
            callSessionId: ge.id,
          });
    }),
      (e[43] = U),
      (e[44] = ge),
      (e[45] = pe),
      (e[46] = $e),
      (e[47] = We),
      (e[48] = L.feedback),
      (e[49] = L.review),
      (e[50] = Ye);
  } else Ye = e[50];
  e[51] !== ne
    ? ((Ke = (0, r.jsx)(v.ForcedLogoutWatcher, { enabled: ne })),
      (e[51] = ne),
      (e[52] = Ke))
    : (Ke = e[52]);
  const Ze = H && "invisible";
  let Qe, Je, Xe, et;
  e[53] !== Ze
    ? ((Qe = (0, c.cn)("relative h-screen overflow-clip", Ze)),
      (e[53] = Ze),
      (e[54] = Qe))
    : (Qe = e[54]),
    e[55] !== B
      ? ((Je = B.endsWith("center")
          ? "[&>*]:self-center"
          : B.endsWith("right")
            ? "[&>*]:self-end"
            : "[&>*]:self-start"),
        (e[55] = B),
        (e[56] = Je))
      : (Je = e[56]),
    e[57] !== B
      ? ((Xe = B.startsWith("top") ? "flex-col" : "flex-col-reverse"),
        (e[57] = B),
        (e[58] = Xe))
      : (Xe = e[58]),
    e[59] !== Je || e[60] !== Xe
      ? ((et = (0, c.cn)("absolute flex gap-2", Je, Xe)),
        (e[59] = Je),
        (e[60] = Xe),
        (e[61] = et))
      : (et = e[61]);
  const tt = 100 * q.top + "%",
    nt = 100 * q.right + "%",
    rt = 100 * q.bottom + "%",
    ot = 100 * q.left + "%";
  let it, at, st, lt;
  e[62] !== tt || e[63] !== nt || e[64] !== rt || e[65] !== ot
    ? ((it = { top: tt, right: nt, bottom: rt, left: ot }),
      (e[62] = tt),
      (e[63] = nt),
      (e[64] = rt),
      (e[65] = ot),
      (e[66] = it))
    : (it = e[66]),
    e[67] !== Ie ||
    e[68] !== ze ||
    e[69] !== ge ||
    e[70] !== Me ||
    e[71] !== Ye ||
    e[72] !== se ||
    e[73] !== Be ||
    e[74] !== ne ||
    e[75] !== xe ||
    e[76] !== le ||
    e[77] !== Le ||
    e[78] !== je ||
    e[79] !== Ge ||
    e[80] !== pe ||
    e[81] !== G ||
    e[82] !== $ ||
    e[83] !== J ||
    e[84] !== Oe
      ? ((at = xe
          ? (0, r.jsx)(I.DraggableContent, {
              minimized: !0,
              children: (0, r.jsx)(_.MinimizedIcon, {
                onClick: () => we(!1),
              }),
            })
          : ze
            ? (0, r.jsx)(w.UpdateScreen, { updateState: $ })
            : (0, r.jsx)(r.Fragment, {
                children: Be
                  ? (0, r.jsx)(b.LiveCallSessionScreen, {
                      callSession: ge,
                      exitSession: Ye,
                      hasActivePlan: se,
                      isPlanLoading: le,
                      isAdmin: J.isAdmin,
                    })
                  : (0, r.jsx)(r.Fragment, {
                      children:
                        !G &&
                        (0, r.jsxs)(I.DraggableContent, {
                          className: (0, c.cn)(
                            "bg-sidebar rounded-window flex max-h-screen shrink-0 flex-col gap-1 border p-1",
                            "transition-[width] motion-reduce:transition-none",
                            Le
                              ? h.SHELL_CREATE_WIDTH_CLASS
                              : h.SHELL_WIDTH_CLASS,
                          ),
                          style: {
                            transitionDuration: `${Le ? h.SHELL_CREATE_ENTER_MS : h.SHELL_CREATE_EXIT_MS}ms`,
                            transitionTimingFunction: u.EASE_DRAWER_CSS,
                          },
                          children: [
                            (0, r.jsx)(x.TopBar, {
                              hasActivePlan: se,
                              isPlanLoading: le,
                              onMinimize: Te,
                            }),
                            je
                              ? (0, r.jsx)("div", {
                                  className:
                                    "bg-card rounded-window-card flex w-full flex-col items-center justify-center border py-11",
                                  children: (0, r.jsx)(s.Spinner, {
                                    className: "text-muted-foreground h-6 w-6",
                                  }),
                                })
                              : ne
                                ? (0, r.jsx)(
                                    "div",
                                    {
                                      className: (0, c.cn)(
                                        "flex min-h-0 flex-1 flex-col",
                                        "list" === Oe
                                          ? "animate-drill-back"
                                          : "animate-drill-forward",
                                      ),
                                      children:
                                        "create" === Oe || "createMock" === Oe
                                          ? (0, r.jsx)(
                                              g.CreateCallSessionScreen,
                                              {
                                                startAsMock:
                                                  "createMock" === Oe,
                                                onCreated: Ge,
                                                autoStarted: Ie,
                                                clearAutoStarted: () =>
                                                  Ae(null),
                                                onCancel: De,
                                              },
                                            )
                                          : "edit" === Oe && Me
                                            ? (0, r.jsx)(
                                                y.EditCallSessionScreen,
                                                {
                                                  callSessionId: Me,
                                                  onDone: De,
                                                },
                                              )
                                            : (0, r.jsx)(m.CallSessionsList, {
                                                onSessionClick: pe,
                                                onCreateClick: () =>
                                                  Re("create"),
                                                onEditClick: (e) => {
                                                  Pe(e), Re("edit");
                                                },
                                              }),
                                    },
                                    Oe,
                                  )
                                : (0, r.jsx)(S.LoginScreen, {
                                    onSetAuthToken: _e,
                                    minimize: Te,
                                  }),
                          ],
                        }),
                    }),
              })),
        (e[67] = Ie),
        (e[68] = ze),
        (e[69] = ge),
        (e[70] = Me),
        (e[71] = Ye),
        (e[72] = se),
        (e[73] = Be),
        (e[74] = ne),
        (e[75] = xe),
        (e[76] = le),
        (e[77] = Le),
        (e[78] = je),
        (e[79] = Ge),
        (e[80] = pe),
        (e[81] = G),
        (e[82] = $),
        (e[83] = J),
        (e[84] = Oe),
        (e[85] = at))
      : (at = e[85]),
    e[86] !== et || e[87] !== it || e[88] !== at
      ? ((st = (0, r.jsx)("div", {
          "data-transparent": "true",
          className: et,
          style: it,
          children: at,
        })),
        (e[86] = et),
        (e[87] = it),
        (e[88] = at),
        (e[89] = st))
      : (st = e[89]),
    e[90] !== Qe || e[91] !== st
      ? ((lt = (0, r.jsx)("div", {
          "data-transparent": "true",
          className: Qe,
          children: st,
        })),
        (e[90] = Qe),
        (e[91] = st),
        (e[92] = lt))
      : (lt = e[92]);
  const ct = H && "invisible";
  let ut;
  e[93] !== ct
    ? ((ut = (0, c.cn)("contents", ct)), (e[93] = ct), (e[94] = ut))
    : (ut = e[94]);
  const dt = "top-right" === B ? "bottom-right" : "top-right";
  let pt, ft, ht;
  e[95] === Symbol.for("react.memo_cache_sentinel")
    ? ((pt = { "--width": "400px" }), (e[95] = pt))
    : (pt = e[95]),
    e[96] === Symbol.for("react.memo_cache_sentinel")
      ? ((ft = { unstyled: !0, className: "w-full" }), (e[96] = ft))
      : (ft = e[96]),
    e[97] !== dt
      ? ((ht = (0, r.jsx)(a.Toaster, {
          id: R.NOTIFICATION_TOASTER_ID,
          position: dt,
          visibleToasts: 3,
          gap: 8,
          style: pt,
          toastOptions: ft,
          offset: 0,
          expand: !0,
        })),
        (e[97] = dt),
        (e[98] = ht))
      : (ht = e[98]);
  const mt = "top-right" === B ? "bottom-right" : "top-right";
  let gt, yt, vt, bt;
  return (
    e[99] === Symbol.for("react.memo_cache_sentinel")
      ? ((gt = {
          className:
            "!w-[400px] !rounded-window !bg-black/75 !text-white !border-none",
          classNames: {
            actionButton:
              "!h-8 !rounded-lg !bg-white !px-3 !text-sm !font-medium !text-black",
            icon: "!ml-0 !mr-1.5",
          },
        }),
        (e[99] = gt))
      : (gt = e[99]),
    e[100] !== mt
      ? ((yt = (0, r.jsx)(a.Toaster, {
          position: mt,
          toastOptions: gt,
          offset: 0,
        })),
        (e[100] = mt),
        (e[101] = yt))
      : (yt = e[101]),
    e[102] !== ut || e[103] !== ht || e[104] !== yt
      ? ((vt = (0, r.jsxs)("div", {
          className: ut,
          children: [ht, yt],
        })),
        (e[102] = ut),
        (e[103] = ht),
        (e[104] = yt),
        (e[105] = vt))
      : (vt = e[105]),
    e[106] !== Ke || e[107] !== lt || e[108] !== vt
      ? ((bt = (0, r.jsxs)(r.Fragment, { children: [Ke, lt, vt] })),
        (e[106] = Ke),
        (e[107] = lt),
        (e[108] = vt),
        (e[109] = bt))
      : (bt = e[109]),
    bt
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(14041 /* vendor/module-14041 */),
  a = n(44572 /* vendor/module-44572 */),
  s = n(15201 /* app/components/spinner */),
  l = n(80635 /* vendor/module-80635 */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(146 /* vendor/module-146 */),
  d = n(7994 /* vendor/module-7994 */),
  p = n(8875 /* app/lib/earn-credits-opened-from-param */),
  f = n(17544 /* vendor/module-17544 */),
  h = n(44825 /* vendor/module-44825 */),
  m = n(23051 /* app/components/on-primary-action */),
  g = n(93639 /* app/components/create-call-session-screen */),
  y = n(90910 /* app/components/edit-call-session-screen */),
  v = n(16549 /* app/lib/forced-logout-watcher */),
  b = n(39911 /* app/components/on-require-gesture */),
  S = n(6525 /* app/components/login-screen */),
  _ = n(8593 /* app/components/minimized-icon */),
  x = n(64945 /* app/components/top-bar */),
  w = n(2651 /* app/components/update-screen */),
  E = n(87746 /* app/components/open-web */),
  T = n(51667 /* app/components/on-click-51667 */),
  k = n(9319 /* app/components/open-feedback-form */),
  C = n(8932 /* app/components/api-config-provider */),
  I = n(37438 /* app/hooks/use-drag-handle */),
  A = n(39009 /* vendor/module-39009 */),
  O = n(63324 /* app/components/location-on-screen-provider */),
  R = n(60566 /* app/components/on-close-60566 */),
  M = n(63764 /* app/hooks/use-pointer-pass-through */),
  P = n(50639 /* app/components/on-click-50639 */),
  N = n(46998 /* app/components/trpcreact-provider */),
  D = n(81229 /* app/hooks/use-app-update-state */);
function j() {
  const e = window.electron.ipcRendererProxy.on("main/show-error", L);
  return () => {
    e();
  };
}
function L(e) {
  a.toast.error(e);
}
function F() {
  return (
    window.electron.ipcRendererProxy.invoke("renderer/set-is-app-visible", !0),
    U
  );
}
function U() {
  window.electron.ipcRendererProxy.invoke("renderer/set-is-app-visible", !1);
}
