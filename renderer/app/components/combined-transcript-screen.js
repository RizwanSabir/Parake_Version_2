// app/components/combined-transcript-screen.js — webpack module 22210
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CombinedTranscriptScreen = function (e) {
  const t = (0, o.c)(60),
    {
      callSession: n,
      combinedTranscript: a,
      isMicrophoneTranscribing: l,
      isShareTranscribing: w,
      onLanguageChange: T,
      isUpdatingLanguage: k,
      onMinimize: C,
      onClear: I,
      listeningIndicator: A,
    } = e,
    { getLanguageLabel: O } = (0, u.useTranscriptionLanguages)();
  let R;
  t[0] !== n
    ? ((R = (e) => (0, p.isAssistedUserBubble)(e, (0, f.labelingFor)(n))),
      (t[0] = n),
      (t[1] = R))
    : (R = t[1]);
  const M = R;
  let P;
  if (t[2] !== a || t[3] !== M) {
    let e;
    t[5] !== M
      ? ((e = (e) => e.content.length > 0 && M(e)), (t[5] = M), (t[6] = e))
      : (e = t[6]),
      (P = a.some(e)),
      (t[2] = a),
      (t[3] = M),
      (t[4] = P);
  } else P = t[4];
  const N = P;
  let D;
  if (t[7] !== a || t[8] !== M) {
    let e;
    t[10] !== M
      ? ((e = (e) => e.content.length > 0 && !M(e)), (t[10] = M), (t[11] = e))
      : (e = t[11]),
      (D = a.some(e)),
      (t[7] = a),
      (t[8] = M),
      (t[9] = D);
  } else D = t[9];
  const j = D,
    L = n.language;
  let F, U, B, z, H, V, q, G, W, $, Y, K, Z, Q, J, X, ee, te, ne, re;
  return (
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((F = (0, d.cn)(
          "h-8 rounded-xl border border-[0.5px] border-black/6 bg-white/60 px-2.5 py-1 text-neutral-900 hover:bg-white dark:border-white/6 dark:bg-neutral-900/60 dark:text-white dark:hover:bg-neutral-950",
          "items-center gap-1.5 shadow-none focus-visible:ring-0",
          "[&_svg]:mt-0 [&_svg]:self-center",
        )),
        (t[12] = F))
      : (F = t[12]),
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((U = (0, r.jsx)(i.Globe, {
          className: "h-4 w-4 text-neutral-900 dark:text-white",
        })),
        (t[13] = U))
      : (U = t[13]),
    t[14] !== n.language || t[15] !== O
      ? ((B = O(n.language) || "loading..."),
        (t[14] = n.language),
        (t[15] = O),
        (t[16] = B))
      : (B = t[16]),
    t[17] !== B
      ? ((z = (0, r.jsx)(g.SelectTrigger, {
          size: "sm",
          iconClassName: "text-neutral-900 opacity-100 dark:text-white",
          "data-slot": "live-language-select-trigger",
          className: F,
          children: (0, r.jsxs)("div", {
            className: "flex flex-row items-center gap-1",
            children: [
              U,
              (0, r.jsx)("div", {
                className: "max-w-30 truncate",
                children: B,
              }),
            ],
          }),
        })),
        (t[17] = B),
        (t[18] = z))
      : (z = t[18]),
    t[19] !== n.language || t[20] !== k || t[21] !== T || t[22] !== z
      ? ((H = (0, r.jsx)(h.LanguageSelector, {
          selectedLanguage: L,
          onLanguageChange: T,
          disabled: k,
          transparent: !0,
          selectTrigger: z,
          showLabel: !1,
        })),
        (t[19] = n.language),
        (t[20] = k),
        (t[21] = T),
        (t[22] = z),
        (t[23] = H))
      : (H = t[23]),
    t[24] !== A || t[25] !== H
      ? ((V = (0, r.jsxs)("div", {
          "data-transparent": "true",
          className: "flex flex-row items-center gap-1 text-sm",
          children: [A, H],
        })),
        (t[24] = A),
        (t[25] = H),
        (t[26] = V))
      : (V = t[26]),
    t[27] === Symbol.for("react.memo_cache_sentinel")
      ? ((q = (0, r.jsx)(y.Shortcut, {
          noPlus: !0,
          shortcuts: [y.ShortcutKey, y.ShiftKey, i.Delete],
        })),
        (t[27] = q))
      : (q = t[27]),
    t[28] !== I
      ? ((G = (0, r.jsx)(v.LiveSessionButton, {
          transparent: !0,
          shortcut: q,
          onClick: I,
          className: "font-normal",
          children: "Clear",
        })),
        (t[28] = I),
        (t[29] = G))
      : (G = t[29]),
    t[30] === Symbol.for("react.memo_cache_sentinel")
      ? ((W = (0, r.jsx)(m.HideIcon, {})), (t[30] = W))
      : (W = t[30]),
    t[31] !== C
      ? (($ = (0, r.jsx)(c.TooltipTrigger, {
          children: (0, r.jsx)(v.LiveSessionButton, {
            transparent: !0,
            onClick: C,
            children: W,
          }),
        })),
        (t[31] = C),
        (t[32] = $))
      : ($ = t[32]),
    t[33] === Symbol.for("react.memo_cache_sentinel")
      ? ((Y = (0, r.jsx)(c.TooltipContent, { children: "Minimize" })),
        (t[33] = Y))
      : (Y = t[33]),
    t[34] !== $
      ? ((K = (0, r.jsxs)(c.Tooltip, { children: [$, Y] })),
        (t[34] = $),
        (t[35] = K))
      : (K = t[35]),
    t[36] !== G || t[37] !== K
      ? ((Z = (0, r.jsxs)("div", {
          "data-transparent": "true",
          className: "flex flex-row items-center gap-1",
          children: [G, K],
        })),
        (t[36] = G),
        (t[37] = K),
        (t[38] = Z))
      : (Z = t[38]),
    t[39] !== V || t[40] !== Z
      ? ((Q = (0, r.jsxs)("div", {
          "data-transparent": "true",
          className: "flex flex-row items-center justify-between",
          children: [V, Z],
        })),
        (t[39] = V),
        (t[40] = Z),
        (t[41] = Q))
      : (Q = t[41]),
    t[42] !== a.length
      ? ((J =
          a.length > 100 &&
          (0, r.jsx)("div", {
            className: "text-center text-sm text-neutral-500",
            children: "Showing the last 100 transcript items.",
          })),
        (t[42] = a.length),
        (t[43] = J))
      : (J = t[43]),
    t[44] !== n ||
    t[45] !== a ||
    t[46] !== N ||
    t[47] !== j ||
    t[48] !== l ||
    t[49] !== w
      ? ((X =
          a.length > 0
            ? a.slice(-100).map((e, t, o) =>
                (0, r.jsx)(
                  E,
                  {
                    item: e,
                    labeling: (0, f.labelingFor)(n),
                    isMicrophoneTranscribing: l,
                    isShareTranscribing: w,
                    hasOtherPartyContent: j,
                    hasAssistedUserContent: N,
                    announceDetection: t === o.findLastIndex(_),
                  },
                  e.id,
                ),
              )
            : w || l
              ? (0, r.jsx)("span", {
                  className: "text-sm text-neutral-500",
                  children: "Listening...",
                })
              : (0, r.jsx)("span", {
                  className: "text-sm text-neutral-500",
                  children: "Transcription is turned off.",
                })),
        (t[44] = n),
        (t[45] = a),
        (t[46] = N),
        (t[47] = j),
        (t[48] = l),
        (t[49] = w),
        (t[50] = X))
      : (X = t[50]),
    t[51] !== J || t[52] !== X
      ? ((ee = (0, r.jsxs)(s.StickToBottom.Content, {
          className: "flex flex-col px-2 py-1",
          scrollClassName: "h-full overflow-y-scroll",
          children: [J, X],
        })),
        (t[51] = J),
        (t[52] = X),
        (t[53] = ee))
      : (ee = t[53]),
    t[54] === Symbol.for("react.memo_cache_sentinel")
      ? ((te = (0, r.jsx)(x, {})), (t[54] = te))
      : (te = t[54]),
    t[55] !== ee
      ? ((ne = (0, r.jsx)(b.TransparentContent, {
          className: "relative flex flex-1 overflow-hidden",
          children: (0, r.jsxs)(s.StickToBottom, {
            className: "relative flex-1 overflow-hidden",
            resize: "smooth",
            initial: "smooth",
            children: [ee, te],
          }),
        })),
        (t[55] = ee),
        (t[56] = ne))
      : (ne = t[56]),
    t[57] !== Q || t[58] !== ne
      ? ((re = (0, r.jsxs)(S.TransparentScreen, {
          className:
            "flex max-h-[min(400px,100%)] w-[400px] min-w-[400px] flex-col gap-1 overflow-y-hidden",
          children: [Q, ne],
        })),
        (t[57] = Q),
        (t[58] = ne),
        (t[59] = re))
      : (re = t[59]),
    re
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(67593 /* vendor/module-67593 */),
  l = n(73458 /* app/components/question-detection-indicator */),
  c = n(58055 /* app/components/tooltip */),
  u = n(94422 /* vendor/module-94422 */),
  d = n(29113 /* vendor/module-29113 */),
  p = n(48663 /* vendor/module-48663 */),
  f = n(15049 /* vendor/module-15049 */),
  h = n(33898 /* app/components/language-selector */),
  m = n(52243 /* vendor/module-52243 */),
  g = n(65239 /* app/components/select-value */),
  y = n(21693 /* app/components/shortcut */),
  v = n(11575 /* app/components/live-session-button */),
  b = n(26468 /* app/components/transparent-content */),
  S = n(87807 /* app/components/transparent-screen */);
function _(e) {
  return e.detection;
}
function x() {
  const e = (0, o.c)(6),
    { state: t, scrollToBottom: n } = (0, s.useStickToBottomContext)(),
    [, l] = (0, a.useReducer)(w, 0);
  if (t.isAtBottom) return null;
  let c, u, d;
  return (
    e[0] !== l || e[1] !== n
      ? ((c = () => {
          n(), l();
        }),
        (e[0] = l),
        (e[1] = n),
        (e[2] = c))
      : (c = e[2]),
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((u = (0, r.jsxs)("span", {
          className: "flex items-center gap-1",
          children: [
            (0, r.jsx)(i.ChevronDown, { className: "h-4 w-4" }),
            "Scroll to bottom",
          ],
        })),
        (e[3] = u))
      : (u = e[3]),
    e[4] !== c
      ? ((d = (0, r.jsx)(v.LiveSessionButton, {
          transparent: !0,
          className: "absolute bottom-2 left-1/2 z-10 -translate-x-1/2",
          onClick: c,
          children: u,
        })),
        (e[4] = c),
        (e[5] = d))
      : (d = e[5]),
    d
  );
}
function w(e) {
  return e + 1;
}
function E(e) {
  const t = (0, o.c)(28),
    {
      item: n,
      labeling: i,
      isMicrophoneTranscribing: a,
      isShareTranscribing: s,
      hasOtherPartyContent: c,
      hasAssistedUserContent: u,
      announceDetection: f,
    } = e,
    h = (0, p.isAssistedUserBubble)(n, i);
  let m;
  t[0] !== i || t[1] !== n
    ? ((m = (0, p.formatBubbleSpeaker)(n, i)),
      (t[0] = i),
      (t[1] = n),
      (t[2] = m))
    : (m = t[2]);
  const g = m,
    y = h ? "self-end text-right" : "self-start",
    v = h ? (s || c ? "max-w-10/12" : null) : a || u ? "max-w-10/12" : null;
  let b;
  t[3] !== y || t[4] !== v
    ? ((b = (0, d.cn)("rounded-lg", y, v)), (t[3] = y), (t[4] = v), (t[5] = b))
    : (b = t[5]);
  const S = h ? "self-end" : "self-start";
  let _, x, w, E, T, k, C, I;
  return (
    t[6] !== S
      ? ((_ = (0, d.cn)("rounded-lg [word-break:break-word]", S)),
        (t[6] = S),
        (t[7] = _))
      : (_ = t[7]),
    t[8] !== n.partialContent
      ? ((x = (0, r.jsx)("span", {
          className: "opacity-70",
          children: n.partialContent,
        })),
        (t[8] = n.partialContent),
        (t[9] = x))
      : (x = t[9]),
    t[10] !== n.content || t[11] !== _ || t[12] !== x
      ? ((w = (0, r.jsxs)("div", {
          className: _,
          children: [n.content, x],
        })),
        (t[10] = n.content),
        (t[11] = _),
        (t[12] = x),
        (t[13] = w))
      : (w = t[13]),
    t[14] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, d.cn)("text-sm text-neutral-500")), (t[14] = E))
      : (E = t[14]),
    t[15] !== n.createdAt
      ? ((T = n.createdAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })),
        (t[15] = n.createdAt),
        (t[16] = T))
      : (T = t[16]),
    t[17] !== f || t[18] !== n.detection
      ? ((k =
          n.detection &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              " ",
              (0, r.jsx)(l.QuestionDetectionIndicator, {
                state: n.detection,
                questionColorClassName: "text-lime-500",
                announce: f,
              }),
            ],
          })),
        (t[17] = f),
        (t[18] = n.detection),
        (t[19] = k))
      : (k = t[19]),
    t[20] !== g || t[21] !== T || t[22] !== k
      ? ((C = (0, r.jsxs)("div", {
          className: E,
          children: [g, " ·", " ", T, k],
        })),
        (t[20] = g),
        (t[21] = T),
        (t[22] = k),
        (t[23] = C))
      : (C = t[23]),
    t[24] !== C || t[25] !== b || t[26] !== w
      ? ((I = (0, r.jsxs)("div", { className: b, children: [w, C] })),
        (t[24] = C),
        (t[25] = b),
        (t[26] = w),
        (t[27] = I))
      : (I = t[27]),
    I
  );
}
