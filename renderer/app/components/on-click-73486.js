// app/components/on-click-73486.js — webpack module 73486
// params: (e, t, n) = (module, exports, require)
"use strict";
t.MoreSelect = function (e) {
  const t = (0, o.c)(98),
    { liveSession: n, hasActivePlan: A, isPlanLoading: O } = e,
    [R, M] = (0, s.useState)(!1),
    P = (0, _.useBrand)(),
    [N, D] = (0, s.useState)(!1),
    [j, L] = (0, s.useState)(!1),
    { apiConfig: F } = (0, S.useApiConfig)(),
    U = (0, b.useOpenVoiceProfile)();
  let B;
  t[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((B = { retry: !1 }), (t[0] = B))
    : (B = t[0]);
  const {
    data: z,
    error: H,
    isPending: V,
  } = E.api.user.get.useQuery(void 0, B);
  let q;
  t[1] !== H || t[2] !== z
    ? ((q = (0, w.resolveIsLoggedIn)(z, H)), (t[1] = H), (t[2] = z), (t[3] = q))
    : (q = t[3]);
  const G = q;
  let W;
  t[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((W = function () {
        window.electron.ipcRendererProxy.invoke(
          "renderer/set-auth-token",
          null,
        ),
          M(!1);
      }),
      (t[4] = W))
    : (W = t[4]);
  const $ = W,
    [Y, K] = (0, s.useState)(!0);
  let Z;
  t[5] === Symbol.for("react.memo_cache_sentinel")
    ? ((Z = function (e) {
        K(e),
          window.electron.ipcRendererProxy.invoke("renderer/set-is-private", e);
      }),
      (t[5] = Z))
    : (Z = t[5]);
  const Q = Z;
  let J;
  t[6] !== A || t[7] !== O
    ? ((J = { hasActivePlan: A, isPlanLoading: O }),
      (t[6] = A),
      (t[7] = O),
      (t[8] = J))
    : (J = t[8]);
  const { autoDetectMeetings: X, setAutoDetectMeetings: ee } = (0,
    k.useAutoDetectMeetings)(J),
    te = (0, T.useAppUpdateState)();
  let ne, re, oe;
  t[9] === Symbol.for("react.memo_cache_sentinel")
    ? ((ne = () => {
        window.electron.ipcRendererProxy
          .invoke("renderer/get-is-private")
          .then((e) => {
            "boolean" == typeof e && K(e);
          });
        const e = window.electron.ipcRendererProxy.on(
          "main/private-mode-changed",
          (e) => K(e),
        );
        return () => {
          e();
        };
      }),
      (re = []),
      (t[9] = ne),
      (t[10] = re))
    : ((ne = t[9]), (re = t[10])),
    (0, s.useEffect)(ne, re),
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((oe = function () {
          window.electron.ipcRendererProxy.invoke("renderer/install-update");
        }),
        (t[11] = oe))
      : (oe = t[11]);
  const ie = oe,
    [ae, se] = (0, s.useState)(!1);
  let le, ce, ue;
  t[12] === Symbol.for("react.memo_cache_sentinel")
    ? ((ce = () => {
        window.electron.ipcRendererProxy
          .invoke("renderer/get-are-there-multiple-screens")
          .then((e) => {
            "boolean" == typeof e && se(e);
          });
      }),
      (le = []),
      (t[12] = le),
      (t[13] = ce))
    : ((le = t[12]), (ce = t[13])),
    (0, s.useEffect)(ce, le),
    t[14] === Symbol.for("react.memo_cache_sentinel")
      ? ((ue = function () {
          window.electron.ipcRendererProxy.invoke(
            "renderer/set-current-screen-index-to-next",
          );
        }),
        (t[14] = ue))
      : (ue = t[14]);
  const de = ue,
    pe = "interview" === n?.callSession.mode && !z?.isAdmin;
  let fe, he, me, ge, ye;
  t[15] !== V || t[16] !== n
    ? ((fe = (0, r.jsx)(p.TooltipTrigger, {
        render: (0, r.jsx)(i.Select.Trigger, {
          render: n
            ? (0, r.jsx)(g.LiveSessionButton, {
                transparent: !0,
                disabled: V,
                children: V
                  ? (0, r.jsx)(u.Spinner, { className: "h-4 w-4" })
                  : (0, r.jsx)(a.MoreVertical, {
                      className: "h-4 w-4",
                    }),
              })
            : (0, r.jsx)(y.Button, {
                variant: "outline",
                size: "icon",
                className: "h-8 w-8",
                loading: V,
                children:
                  !V &&
                  (0, r.jsx)(a.MoreVertical, {
                    className: "h-4 w-4",
                  }),
              }),
        }),
      })),
      (t[15] = V),
      (t[16] = n),
      (t[17] = fe))
    : (fe = t[17]),
    t[18] === Symbol.for("react.memo_cache_sentinel")
      ? ((he = (0, r.jsx)(p.TooltipContent, { children: "More" })),
        (t[18] = he))
      : (he = t[18]),
    t[19] !== fe
      ? ((me = (0, r.jsxs)(p.Tooltip, { children: [fe, he] })),
        (t[19] = fe),
        (t[20] = me))
      : (me = t[20]),
    t[21] !== G || t[22] !== z
      ? ((ge =
          G &&
          (0, r.jsxs)(p.Tooltip, {
            children: [
              (0, r.jsx)(p.TooltipTrigger, {
                children: (0, r.jsxs)("div", {
                  className: "flex flex-row items-center gap-1 p-1 text-left",
                  children: [
                    (0, r.jsx)(a.User, {
                      className: "text-muted-foreground h-4 w-4",
                    }),
                    " ",
                    (0, r.jsx)("span", {
                      className: "max-w-32 truncate",
                      children: z.email,
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(p.TooltipContent, { children: z.email }),
            ],
          })),
        (t[21] = G),
        (t[22] = z),
        (t[23] = ge))
      : (ge = t[23]),
    t[24] !== te.status
      ? ((ye =
          "downloaded" === te.status &&
          (0, r.jsxs)("div", {
            className:
              "hover:bg-accent flex flex-row items-center justify-between gap-1 rounded-lg rounded-t-lg border p-2 text-sm shadow select-none",
            onClick: ie,
            children: [
              "Install update",
              " ",
              (0, r.jsx)(a.Download, {
                className: "text-muted-foreground h-4 w-4",
              }),
            ],
          })),
        (t[24] = te.status),
        (t[25] = ye))
      : (ye = t[25]);
  const ve = F.url + "/dashboard";
  let be, Se, _e, xe, we;
  t[26] === Symbol.for("react.memo_cache_sentinel")
    ? ((be = () => M(!1)), (t[26] = be))
    : (be = t[26]),
    t[27] === Symbol.for("react.memo_cache_sentinel")
      ? ((Se = (0, r.jsxs)("span", {
          className: "flex flex-row items-center gap-1",
          children: [
            (0, r.jsx)(a.LayoutDashboard, {
              className: "fill-muted-foreground text-muted-foreground h-4 w-4",
            }),
            " ",
            "Dashboard",
          ],
        })),
        (t[27] = Se))
      : (Se = t[27]),
    t[28] === Symbol.for("react.memo_cache_sentinel")
      ? ((_e = (0, r.jsx)("span", {
          className: "flex flex-row items-center gap-1",
          children: (0, r.jsx)(a.ArrowUpRight, {
            className: "text-muted-foreground h-5 w-5",
          }),
        })),
        (t[28] = _e))
      : (_e = t[28]),
    t[29] !== ve
      ? ((xe = (0, r.jsxs)("a", {
          href: ve,
          onClick: be,
          target: "_blank",
          className:
            "hover:bg-accent flex flex-row items-center justify-between gap-1 rounded-t-lg p-2 select-none",
          children: [Se, _e],
        })),
        (t[29] = ve),
        (t[30] = xe))
      : (xe = t[30]),
    t[31] !== n || t[32] !== U
      ? ((we =
          !n &&
          (0, r.jsxs)("button", {
            type: "button",
            onClick: () => {
              M(!1), U();
            },
            className:
              "hover:bg-accent flex w-full flex-row items-center gap-1 border-t p-2 select-none",
            children: [
              (0, r.jsx)(a.Speech, {
                className: "text-muted-foreground h-4 w-4",
              }),
              " Voice profile",
            ],
          })),
        (t[31] = n),
        (t[32] = U),
        (t[33] = we))
      : (we = t[33]);
  const Ee = F.url + "/dashboard?support=true";
  let Te, ke, Ce, Ie, Ae, Oe;
  t[34] === Symbol.for("react.memo_cache_sentinel")
    ? ((Te = () => M(!1)), (t[34] = Te))
    : (Te = t[34]),
    t[35] === Symbol.for("react.memo_cache_sentinel")
      ? ((ke = (0, r.jsxs)("span", {
          className: "flex flex-row items-center gap-1",
          children: [
            (0, r.jsx)(a.LifeBuoy, {
              className: "text-muted-foreground h-4 w-4",
            }),
            " Get help",
          ],
        })),
        (t[35] = ke))
      : (ke = t[35]),
    t[36] === Symbol.for("react.memo_cache_sentinel")
      ? ((Ce = (0, r.jsx)("span", {
          className: "flex flex-row items-center gap-1",
          children: (0, r.jsx)(a.ArrowUpRight, {
            className: "text-muted-foreground h-5 w-5",
          }),
        })),
        (t[36] = Ce))
      : (Ce = t[36]),
    t[37] !== Ee
      ? ((Ie = (0, r.jsxs)("a", {
          href: Ee,
          onClick: Te,
          target: "_blank",
          className:
            "hover:bg-accent flex flex-row items-center justify-between gap-1 border-t p-2 select-none",
          children: [ke, Ce],
        })),
        (t[37] = Ee),
        (t[38] = Ie))
      : (Ie = t[38]),
    t[39] !== ae || t[40] !== P.name
      ? ((Ae =
          ae &&
          (0, r.jsxs)("div", {
            className:
              "hover:bg-accent flex flex-row items-center justify-between gap-1 border-t p-2",
            onClick: de,
            children: [
              (0, r.jsx)(c.LabelWithTooltip, {
                tooltip: `Move ${P.name} to the next screen`,
                className: "font-normal",
                children: "Next Screen",
              }),
              (0, r.jsx)(y.Button, {
                variant: "outline",
                size: "icon",
                className: "h-6 w-6",
                children: (0, r.jsx)(a.MoveRight, {
                  className: "h-4 w-4",
                }),
              }),
            ],
          })),
        (t[39] = ae),
        (t[40] = P.name),
        (t[41] = Ae))
      : (Ae = t[41]),
    t[42] !== Y || t[43] !== pe
      ? ((Oe = () => {
          pe || Q(!Y);
        }),
        (t[42] = Y),
        (t[43] = pe),
        (t[44] = Oe))
      : (Oe = t[44]);
  const Re = pe
    ? "Private mode can not be disabled in interview mode."
    : `Disable this to make ${P.name} visible during screen sharing.`;
  let Me, Pe, Ne, De, je, Le, Fe, Ue, Be, ze, He, Ve, qe, Ge;
  return (
    t[45] !== Re
      ? ((Me = (0, r.jsx)(c.LabelWithTooltip, {
          tooltip: Re,
          className: "font-normal",
          children: "Private",
        })),
        (t[45] = Re),
        (t[46] = Me))
      : (Me = t[46]),
    t[47] !== Y || t[48] !== pe
      ? ((Pe = (0, r.jsx)(d.Switch, { checked: Y, disabled: pe })),
        (t[47] = Y),
        (t[48] = pe),
        (t[49] = Pe))
      : (Pe = t[49]),
    t[50] !== Oe || t[51] !== Me || t[52] !== Pe
      ? ((Ne = (0, r.jsxs)("div", {
          className:
            "hover:bg-accent flex flex-row items-center justify-between gap-1 border-t p-2",
          onClick: Oe,
          children: [Me, Pe],
        })),
        (t[50] = Oe),
        (t[51] = Me),
        (t[52] = Pe),
        (t[53] = Ne))
      : (Ne = t[53]),
    t[54] !== X ||
    t[55] !== P.name ||
    t[56] !== A ||
    t[57] !== n ||
    t[58] !== ee
      ? ((De =
          !n &&
          (0, r.jsxs)("div", {
            className: (0, f.cn)(
              "flex flex-row items-center justify-between gap-1 border-t p-2",
              A ? "hover:bg-accent" : "text-muted-foreground",
              !A && "cursor-not-allowed opacity-70",
            ),
            onClick: () => {
              A && ee("enabled" !== X ? "enabled" : "disabled");
            },
            children: [
              (0, r.jsx)(c.LabelWithTooltip, {
                tooltip: `If enabled, ${P.name} will automatically detect calls and show a notification asking you to start a session.${A ? "" : " Available for subscription and lifetime plans."}`,
                className: "font-normal",
                children: "Meeting Detect",
              }),
              (0, r.jsx)(d.Switch, {
                checked: "enabled" === X,
                disabled: !A,
              }),
            ],
          })),
        (t[54] = X),
        (t[55] = P.name),
        (t[56] = A),
        (t[57] = n),
        (t[58] = ee),
        (t[59] = De))
      : (De = t[59]),
    t[60] === Symbol.for("react.memo_cache_sentinel")
      ? ((je = (0, r.jsx)(I.ZoomControls, {})), (t[60] = je))
      : (je = t[60]),
    t[61] !== P.darkOnly || t[62] !== n
      ? ((Le =
          !P.darkOnly &&
          (0, r.jsx)(C.ThemeControls, {
            scope: n ? "liveCall" : "shell",
            surface: n ? "desktop_live_menu" : "desktop_more_menu",
          })),
        (t[61] = P.darkOnly),
        (t[62] = n),
        (t[63] = Le))
      : (Le = t[63]),
    t[64] !== G || t[65] !== n
      ? ((Fe =
          G &&
          !n &&
          (0, r.jsxs)("div", {
            onClick: $,
            className:
              "hover:bg-accent flex flex-row items-center gap-1 border-t p-2 select-none",
            children: [
              (0, r.jsx)(a.LogOut, {
                className: "text-error h-4 w-4",
              }),
              " Logout",
            ],
          })),
        (t[64] = G),
        (t[65] = n),
        (t[66] = Fe))
      : (Fe = t[66]),
    t[67] !== xe ||
    t[68] !== we ||
    t[69] !== Ie ||
    t[70] !== Ae ||
    t[71] !== Ne ||
    t[72] !== De ||
    t[73] !== Le ||
    t[74] !== Fe
      ? ((Ue = (0, r.jsxs)("div", {
          className: "rounded-lg border text-sm shadow",
          children: [xe, we, Ie, Ae, Ne, De, je, Le, Fe],
        })),
        (t[67] = xe),
        (t[68] = we),
        (t[69] = Ie),
        (t[70] = Ae),
        (t[71] = Ne),
        (t[72] = De),
        (t[73] = Le),
        (t[74] = Fe),
        (t[75] = Ue))
      : (Ue = t[75]),
    t[76] !== n || t[77] !== z?.isAdmin
      ? ((Be =
          n &&
          (0, r.jsx)(m.LiveMoreSelect, {
            callSession: n.callSession,
            onLanguageChange: n.onLanguageChange,
            isUpdatingLanguage: n.isUpdatingLanguage,
            onAutoAnswerChange: n.onAutoAnswerChange,
            isUpdatingAutoAnswer: n.isUpdatingAutoAnswer,
            autoExtend: n.autoExtend,
            isAdmin: z?.isAdmin,
            showLogo: n.showLogo,
            onShowLogoChange: n.onShowLogoChange,
            logoSize: n.logoSize,
            onEdit: () => {
              M(!1), D(!0);
            },
            onEditAnswerPreferences: () => {
              M(!1), L(!0);
            },
          })),
        (t[76] = n),
        (t[77] = z?.isAdmin),
        (t[78] = Be))
      : (Be = t[78]),
    t[79] !== ge || t[80] !== ye || t[81] !== Ue || t[82] !== Be
      ? ((ze = (0, r.jsx)(v.SelectContent, {
          children: (0, r.jsxs)("div", {
            className: "flex flex-col gap-1 text-sm",
            children: [ge, ye, Ue, Be],
          }),
        })),
        (t[79] = ge),
        (t[80] = ye),
        (t[81] = Ue),
        (t[82] = Be),
        (t[83] = ze))
      : (ze = t[83]),
    t[84] !== R || t[85] !== me || t[86] !== ze
      ? ((He = (0, r.jsxs)(v.Select, {
          open: R,
          onOpenChange: M,
          children: [me, ze],
        })),
        (t[84] = R),
        (t[85] = me),
        (t[86] = ze),
        (t[87] = He))
      : (He = t[87]),
    t[88] !== N || t[89] !== n
      ? ((Ve =
          n &&
          (0, r.jsx)(h.EditLiveCallSessionDialog, {
            open: N,
            setOpen: D,
            callSession: n.callSession,
            onSettingsUpdate: n.onSettingsUpdate,
          })),
        (t[88] = N),
        (t[89] = n),
        (t[90] = Ve))
      : (Ve = t[90]),
    t[91] !== j || t[92] !== n
      ? ((qe =
          n &&
          (0, r.jsx)(l.LiveAnswerPreferencesDialog, {
            callSession: n.callSession,
            open: j,
            onOpenChange: L,
            loadPreviews: x.loadCategoryPreviews,
          })),
        (t[91] = j),
        (t[92] = n),
        (t[93] = qe))
      : (qe = t[93]),
    t[94] !== He || t[95] !== Ve || t[96] !== qe
      ? ((Ge = (0, r.jsxs)(r.Fragment, { children: [He, Ve, qe] })),
        (t[94] = He),
        (t[95] = Ve),
        (t[96] = qe),
        (t[97] = Ge))
      : (Ge = t[97]),
    Ge
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(21044 /* vendor/module-21044 */),
  a = n(87952 /* vendor/module-87952 */),
  s = n(14041 /* vendor/module-14041 */),
  l = n(65522 /* app/components/on-error */),
  c = n(63110 /* app/components/label-with-tooltip */),
  u = n(15201 /* app/components/spinner */),
  d = n(88364 /* app/components/switch */),
  p = n(58055 /* app/components/tooltip */),
  f = n(29113 /* vendor/module-29113 */),
  h = n(81359 /* app/components/edit-live-call-session-dialog */),
  m = n(52092 /* app/components/on-click-52092 */),
  g = n(11575 /* app/components/live-session-button */),
  y = n(99683 /* vendor/module-99683 */),
  v = n(65239 /* app/components/select-value */),
  b = n(66785 /* app/hooks/use-open-voice-profile */),
  S = n(8932 /* app/components/api-config-provider */),
  _ = n(74920 /* app/lib/apply-brand-attribute */),
  x = n(13466 /* vendor/module-13466 */),
  w = n(17544 /* vendor/module-17544 */),
  E = n(46998 /* app/components/trpcreact-provider */),
  T = n(81229 /* app/hooks/use-app-update-state */),
  k = n(97197 /* app/hooks/use-auto-detect-meetings */),
  C = n(92284 /* app/components/on-click-92284 */),
  I = n(71318 /* app/components/zoom-controls */);
