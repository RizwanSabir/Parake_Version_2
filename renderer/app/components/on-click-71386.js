// app/components/on-click-71386.js — webpack module 71386
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AiMessagesScreen = function (e) {
  const t = (0, o.c)(110),
    {
      aiMessages: n,
      onClearAiMessages: b,
      onResponseCopied: S,
      isSubmittedAiResponse: _,
      isStreamingAiResponse: x,
      isAwaitingAutoDetection: w,
      answerPanelStatus: E,
      autoAnswer: T,
      onAutoAnswerChange: k,
      isUpdatingAutoAnswer: C,
      isMinimized: I,
      setIsMinimized: A,
      width: O,
      height: R,
      onResize: M,
      onResizeEnd: P,
    } = e,
    { locationOnScreen: N } = (0, f.useLocationOnScreen)(),
    D = (0, a.useRef)(null),
    { fontSizeIndex: j } = (0, m.useFontSize)(),
    L = _ && !w;
  let F, U, B;
  t[0] !== T || t[1] !== k
    ? ((F = () => k(!T)), (t[0] = T), (t[1] = k), (t[2] = F))
    : (F = t[2]),
    t[3] !== E
      ? ((U = (0, r.jsx)(s.AutoAnswerToggleLabel, { status: E })),
        (t[3] = E),
        (t[4] = U))
      : (U = t[4]),
    t[5] !== T || t[6] !== C || t[7] !== F || t[8] !== U
      ? ((B = (0, r.jsx)(u.LiveSessionButton, {
          transparent: !0,
          className: "font-normal",
          "aria-label": "Auto Answer",
          "aria-pressed": T,
          disabled: C,
          onClick: F,
          children: U,
        })),
        (t[5] = T),
        (t[6] = C),
        (t[7] = F),
        (t[8] = U),
        (t[9] = B))
      : (B = t[9]);
  const z = B,
    [H, V] = (0, a.useState)(n.length > 0 ? n.length - 1 : 0),
    [q, G] = (0, a.useState)(!1);
  let W;
  t[10] !== n.length
    ? ((W = function (e) {
        V(e), e === n.length - 1 && G(!1);
      }),
      (t[10] = n.length),
      (t[11] = W))
    : (W = t[11]);
  const $ = W;
  let Y, K, Z;
  t[12] !== n.length || t[13] !== H || t[14] !== b || t[15] !== $
    ? ((Y = () => {
        const e = window.electron.ipcRendererProxy.on(
            "main/previous-ai-message-shortcut-pressed",
            () => {
              0 !== H && $(H - 1);
            },
          ),
          t = window.electron.ipcRendererProxy.on(
            "main/next-ai-message-shortcut-pressed",
            () => {
              H !== n.length - 1 && $(H + 1);
            },
          ),
          r = window.electron.ipcRendererProxy.on(
            "main/clear-ai-messages-shortcut-pressed",
            () => b(),
          );
        return () => {
          e(), t(), r();
        };
      }),
      (t[12] = n.length),
      (t[13] = H),
      (t[14] = b),
      (t[15] = $),
      (t[16] = Y))
    : (Y = t[16]),
    t[17] !== n || t[18] !== H
      ? ((K = [H, n]), (t[17] = n), (t[18] = H), (t[19] = K))
      : (K = t[19]),
    (0, a.useEffect)(Y, K),
    t[20] !== n.length || t[21] !== $
      ? ((Z = function () {
          $(n.length > 0 ? n.length - 1 : 0);
        }),
        (t[20] = n.length),
        (t[21] = $),
        (t[22] = Z))
      : (Z = t[22]);
  const Q = Z;
  let J, X, ee, te;
  if (
    (t[23] !== n || t[24] !== H || t[25] !== $
      ? ((J = () => {
          const e = n.length > 0 ? n[n.length - 1] : null;
          H >= n.length - 2 || "auto-ai-help" !== e?.metadata?.trigger?.kind
            ? $(n.length > 0 ? n.length - 1 : 0)
            : G(!0);
        }),
        (t[23] = n),
        (t[24] = H),
        (t[25] = $),
        (t[26] = J))
      : (J = t[26]),
    t[27] !== n.length
      ? ((X = [n.length]), (t[27] = n.length), (t[28] = X))
      : (X = t[28]),
    (0, a.useEffect)(J, X),
    t[29] !== n || t[30] !== x || t[31] !== A
      ? ((ee = () => {
          const e = (0, v.resolveAiMessagesMinimizeAction)({
            lastMessage: n[n.length - 1] ?? null,
            messageCount: n.length,
            isStreamingAiResponse: x,
          });
          "open" === e && A(!1), "minimize" === e && A(!0);
        }),
        (t[29] = n),
        (t[30] = x),
        (t[31] = A),
        (t[32] = ee))
      : (ee = t[32]),
    t[33] !== n.length || t[34] !== x
      ? ((te = [n.length, x]), (t[33] = n.length), (t[34] = x), (t[35] = te))
      : (te = t[35]),
    (0, a.useEffect)(ee, te),
    0 === n.length && (!L || I))
  )
    return z;
  const ne = I ? "max-w-max" : "max-h-full";
  let re;
  t[36] !== ne
    ? ((re = (0, c.cn)("relative flex flex-col gap-1 overflow-y-hidden", ne)),
      (t[36] = ne),
      (t[37] = re))
    : (re = t[37]);
  const oe = I ? void 0 : R,
    ie = I ? void 0 : O;
  let ae, se, le, ce, ue, de, pe;
  t[38] !== oe || t[39] !== ie
    ? ((ae = { height: oe, width: ie }),
      (t[38] = oe),
      (t[39] = ie),
      (t[40] = ae))
    : (ae = t[40]),
    t[41] !== n.length ||
    t[42] !== Q ||
    t[43] !== R ||
    t[44] !== H ||
    t[45] !== I ||
    t[46] !== q ||
    t[47] !== N ||
    t[48] !== M ||
    t[49] !== P ||
    t[50] !== $ ||
    t[51] !== O
      ? ((se =
          !I &&
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              "data-transparent": "true",
              className: "flex flex-row items-center gap-1",
              children: [
                "bottom-right" === N &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(y.ResizeButton, {
                        width: O,
                        height: R,
                        panelRef: D,
                        onResize: M,
                        onResizeEnd: P,
                      }),
                      (0, r.jsx)(p.Separator, {}),
                    ],
                  }),
                (0, r.jsxs)(l.Tooltip, {
                  children: [
                    (0, r.jsx)(l.TooltipTrigger, {
                      render: (0, r.jsx)(u.LiveSessionButton, {
                        shortcut: (0, r.jsx)(h.Shortcut, {
                          noPlus: !0,
                          shortcuts: [h.ShortcutKey, i.ArrowLeft],
                        }),
                        onClick: () => $(H - 1),
                        disabled: 0 === H,
                        className: "font-normal",
                        transparent: !0,
                      }),
                    }),
                    (0, r.jsx)(l.TooltipContent, {
                      children: "Previous",
                    }),
                  ],
                }),
                (0, r.jsxs)(l.Tooltip, {
                  children: [
                    (0, r.jsx)(l.TooltipTrigger, {
                      render: (0, r.jsx)(u.LiveSessionButton, {
                        shortcut: (0, r.jsx)(h.Shortcut, {
                          noPlus: !0,
                          shortcuts: [h.ShortcutKey, i.ArrowRight],
                        }),
                        onClick: () => $(H + 1),
                        disabled: !n.length || H === n.length - 1,
                        className: "font-normal",
                        transparent: !0,
                      }),
                    }),
                    (0, r.jsx)(l.TooltipContent, {
                      children: "Next",
                    }),
                  ],
                }),
                q &&
                  (0, r.jsx)(u.LiveSessionButton, {
                    onClick: Q,
                    className: "font-normal",
                    transparent: !0,
                    children: "New",
                  }),
              ],
            }),
          })),
        (t[41] = n.length),
        (t[42] = Q),
        (t[43] = R),
        (t[44] = H),
        (t[45] = I),
        (t[46] = q),
        (t[47] = N),
        (t[48] = M),
        (t[49] = P),
        (t[50] = $),
        (t[51] = O),
        (t[52] = se))
      : (se = t[52]),
    t[53] === Symbol.for("react.memo_cache_sentinel")
      ? ((le = (0, r.jsx)(h.Shortcut, {
          className: "gap-1",
          noPlus: !0,
          shortcuts: [h.ShortcutKey, i.Delete],
        })),
        (t[53] = le))
      : (le = t[53]),
    t[54] !== b
      ? ((ce = (0, r.jsx)(u.LiveSessionButton, {
          transparent: !0,
          shortcut: le,
          onClick: b,
          className: "font-normal",
          children: "Clear",
        })),
        (t[54] = b),
        (t[55] = ce))
      : (ce = t[55]),
    t[56] !== I || t[57] !== A
      ? ((ue = () => A(!I)), (t[56] = I), (t[57] = A), (t[58] = ue))
      : (ue = t[58]),
    t[59] !== I
      ? ((de = I
          ? (0, r.jsx)(i.Maximize2, { className: "h-4 w-4" })
          : (0, r.jsx)(i.Minimize2, { className: "h-4 w-4" })),
        (t[59] = I),
        (t[60] = de))
      : (de = t[60]),
    t[61] !== ue || t[62] !== de
      ? ((pe = (0, r.jsx)(l.TooltipTrigger, {
          children: (0, r.jsx)(u.LiveSessionButton, {
            onClick: ue,
            transparent: !0,
            children: de,
          }),
        })),
        (t[61] = ue),
        (t[62] = de),
        (t[63] = pe))
      : (pe = t[63]);
  const fe = I ? "Expand" : "Minimize";
  let he, me, ge, ye, ve, be, Se, _e, xe;
  return (
    t[64] !== fe
      ? ((he = (0, r.jsx)(l.TooltipContent, {
          className: "flex flex-row items-center",
          children: fe,
        })),
        (t[64] = fe),
        (t[65] = he))
      : (he = t[65]),
    t[66] !== pe || t[67] !== he
      ? ((me = (0, r.jsxs)(l.Tooltip, { children: [pe, he] })),
        (t[66] = pe),
        (t[67] = he),
        (t[68] = me))
      : (me = t[68]),
    t[69] !== R ||
    t[70] !== I ||
    t[71] !== N ||
    t[72] !== M ||
    t[73] !== P ||
    t[74] !== O
      ? ((ge =
          !I &&
          ("bottom-left" === N || "bottom-center" === N) &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p.Separator, {}),
              (0, r.jsx)(y.ResizeButton, {
                width: O,
                height: R,
                panelRef: D,
                onResize: M,
                onResizeEnd: P,
              }),
            ],
          })),
        (t[69] = R),
        (t[70] = I),
        (t[71] = N),
        (t[72] = M),
        (t[73] = P),
        (t[74] = O),
        (t[75] = ge))
      : (ge = t[75]),
    t[76] !== z || t[77] !== ce || t[78] !== me || t[79] !== ge
      ? ((ye = (0, r.jsxs)("div", {
          "data-transparent": "true",
          className: "flex flex-row items-center gap-1",
          children: [z, ce, me, ge],
        })),
        (t[76] = z),
        (t[77] = ce),
        (t[78] = me),
        (t[79] = ge),
        (t[80] = ye))
      : (ye = t[80]),
    t[81] !== se || t[82] !== ye
      ? ((ve = (0, r.jsxs)("div", {
          "data-transparent": "true",
          className: "flex flex-row items-center justify-between",
          children: [se, ye],
        })),
        (t[81] = se),
        (t[82] = ye),
        (t[83] = ve))
      : (ve = t[83]),
    t[84] !== n.length || t[85] !== L || t[86] !== j || t[87] !== I
      ? ((be =
          L &&
          !n.length &&
          !I &&
          (0, r.jsx)(g.AiMessage, {
            aiMessage: {
              id: "loading",
              role: "assistant",
              parts: [],
            },
            isLoading: !0,
            fontSizeIndex: j,
          })),
        (t[84] = n.length),
        (t[85] = L),
        (t[86] = j),
        (t[87] = I),
        (t[88] = be))
      : (be = t[88]),
    t[89] !== n ||
    t[90] !== j ||
    t[91] !== H ||
    t[92] !== I ||
    t[93] !== x ||
    t[94] !== S
      ? ((Se =
          !I &&
          n[H] &&
          (0, r.jsx)(g.AiMessage, {
            aiMessage: n[H],
            isLoading: H === n.length - 1 && x,
            fontSizeIndex: j,
            onResponseCopied: S,
          })),
        (t[89] = n),
        (t[90] = j),
        (t[91] = H),
        (t[92] = I),
        (t[93] = x),
        (t[94] = S),
        (t[95] = Se))
      : (Se = t[95]),
    t[96] !== R ||
    t[97] !== I ||
    t[98] !== N ||
    t[99] !== M ||
    t[100] !== P ||
    t[101] !== O
      ? ((_e =
          !I &&
          N.startsWith("top") &&
          (0, r.jsx)(y.ResizeButton, {
            className: (0, c.cn)(
              "absolute size-6 rounded-2xl",
              "top-right" === N ? "bottom-2 left-2" : "right-2 bottom-2",
            ),
            width: O,
            height: R,
            panelRef: D,
            onResize: M,
            onResizeEnd: P,
          })),
        (t[96] = R),
        (t[97] = I),
        (t[98] = N),
        (t[99] = M),
        (t[100] = P),
        (t[101] = O),
        (t[102] = _e))
      : (_e = t[102]),
    t[103] !== re ||
    t[104] !== ae ||
    t[105] !== ve ||
    t[106] !== be ||
    t[107] !== Se ||
    t[108] !== _e
      ? ((xe = (0, r.jsxs)(d.TransparentScreen, {
          ref: D,
          className: re,
          style: ae,
          children: [ve, be, Se, _e],
        })),
        (t[103] = re),
        (t[104] = ae),
        (t[105] = ve),
        (t[106] = be),
        (t[107] = Se),
        (t[108] = _e),
        (t[109] = xe))
      : (xe = t[109]),
    xe
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(12829 /* app/components/auto-answer-toggle-label */),
  l = n(58055 /* app/components/tooltip */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(11575 /* app/components/live-session-button */),
  d = n(87807 /* app/components/transparent-screen */),
  p = n(74422 /* app/components/separator-74422 */),
  f = n(63324 /* app/components/location-on-screen-provider */),
  h = n(21693 /* app/components/shortcut */),
  m = n(43830 /* app/hooks/use-font-size */),
  g = n(93385 /* app/components/on-scroll */),
  y = n(12536 /* app/components/resize-button */),
  v = n(54906 /* vendor/module-54906 */);
