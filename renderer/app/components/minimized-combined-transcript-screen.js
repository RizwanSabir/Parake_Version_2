// app/components/minimized-combined-transcript-screen.js — webpack module 46866
// params: (e, t, n) = (module, exports, require)
"use strict";
t.MinimizedCombinedTranscriptScreen = function (e) {
  const t = (0, o.c)(26),
    {
      combinedTranscript: n,
      isMicrophoneTranscribing: m,
      isShareTranscribing: g,
      width: y,
      listeningIndicator: v,
      onUnMinimize: b,
      onClear: S,
    } = e;
  let _, x, w, E, T, k, C, I, A, O, R, M;
  return (
    t[0] !== y ? ((_ = { width: y }), (t[0] = y), (t[1] = _)) : (_ = t[1]),
    t[2] !== v
      ? ((x = (0, r.jsx)("div", {
          "data-transparent": "true",
          className: "flex h-full flex-row items-center",
          children: v,
        })),
        (t[2] = v),
        (t[3] = x))
      : (x = t[3]),
    t[4] !== n || t[5] !== m || t[6] !== g
      ? ((w = (0, r.jsx)(d.TransparentContent, {
          className:
            "relative flex h-[32px] flex-1 flex-row items-center overflow-hidden text-sm",
          children:
            n.length > 0
              ? (0, r.jsx)("div", {
                  "data-transparent": "true",
                  className:
                    "absolute right-0 flex h-full items-center gap-1 whitespace-nowrap",
                  children: n.filter(h).map(f),
                })
              : m || g
                ? (0, r.jsx)("div", {
                    className: "px-1 text-neutral-800 dark:text-neutral-100",
                    children: "Listening...",
                  })
                : (0, r.jsx)("div", {
                    className: "px-1 text-neutral-600 dark:text-neutral-300",
                    children: "Transcription is turned off.",
                  }),
        })),
        (t[4] = n),
        (t[5] = m),
        (t[6] = g),
        (t[7] = w))
      : (w = t[7]),
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, r.jsx)(c.Separator, {})), (t[8] = E))
      : (E = t[8]),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = (0, r.jsx)(s.Shortcut, {
          noPlus: !0,
          shortcuts: [s.ShortcutKey, s.ShiftKey, i.Delete],
        })),
        (t[9] = T))
      : (T = t[9]),
    t[10] !== S
      ? ((k = (0, r.jsx)(u.LiveSessionButton, {
          transparent: !0,
          shortcut: T,
          onClick: S,
          className: "font-normal",
          children: "Clear",
        })),
        (t[10] = S),
        (t[11] = k))
      : (k = t[11]),
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((C = (0, r.jsx)(l.HideIcon, { inverted: !0 })), (t[12] = C))
      : (C = t[12]),
    t[13] !== b
      ? ((I = (0, r.jsx)(a.TooltipTrigger, {
          children: (0, r.jsx)(u.LiveSessionButton, {
            transparent: !0,
            onClick: b,
            children: C,
          }),
        })),
        (t[13] = b),
        (t[14] = I))
      : (I = t[14]),
    t[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((A = (0, r.jsx)(a.TooltipContent, { children: "Expand" })),
        (t[15] = A))
      : (A = t[15]),
    t[16] !== I
      ? ((O = (0, r.jsxs)(a.Tooltip, { children: [I, A] })),
        (t[16] = I),
        (t[17] = O))
      : (O = t[17]),
    t[18] !== O || t[19] !== k
      ? ((R = (0, r.jsxs)("div", {
          "data-transparent": "true",
          className: "flex h-full flex-row items-center gap-1",
          children: [E, k, O],
        })),
        (t[18] = O),
        (t[19] = k),
        (t[20] = R))
      : (R = t[20]),
    t[21] !== _ || t[22] !== R || t[23] !== x || t[24] !== w
      ? ((M = (0, r.jsxs)(p.TransparentScreen, {
          className:
            "flex flex-row items-center justify-between gap-1 transition-[width] duration-200 ease-out motion-reduce:transition-none",
          style: _,
          children: [x, w, R],
        })),
        (t[21] = _),
        (t[22] = R),
        (t[23] = x),
        (t[24] = w),
        (t[25] = M))
      : (M = t[25]),
    M
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(58055 /* app/components/tooltip */),
  s = n(21693 /* app/components/shortcut */),
  l = n(52243 /* vendor/module-52243 */),
  c = n(74422 /* app/components/separator-74422 */),
  u = n(11575 /* app/components/live-session-button */),
  d = n(26468 /* app/components/transparent-content */),
  p = n(87807 /* app/components/transparent-screen */);
function f(e) {
  return (0, r.jsxs)(
    "div",
    {
      className:
        "flex h-full flex-row items-center gap-1 rounded-xl bg-neutral-100/50 px-2 py-1 dark:bg-neutral-900/50",
      children: [
        (0, r.jsx)("span", { children: e.content }),
        e.partialContent &&
          (0, r.jsx)("span", {
            className: "opacity-70",
            children: e.partialContent,
          }),
      ],
    },
    e.createdAt.toISOString(),
  );
}
function h(e) {
  return e.content;
}
