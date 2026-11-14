// app/components/audio-control-button.js — webpack module 63760
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AudioControlButton = function (e) {
  const t = (0, o.c)(30),
    {
      type: n,
      isTranscribing: c,
      isMuted: u,
      error: d,
      starting: p,
      onStart: f,
      onStop: h,
    } = e,
    m = "microphone" === n,
    g = m ? "your microphone" : "system audio",
    y = m ? "Microphone" : "System audio";
  let v;
  t[0] !== d || t[1] !== u || t[2] !== c || t[3] !== y || t[4] !== g
    ? ((v = function () {
        return (
          d ||
          (c
            ? u
              ? `${y} is muted — please unmute to continue transcribing.`
              : `Stop listening to ${g}.`
            : `Start listening to ${g}.`)
        );
      }),
      (t[0] = d),
      (t[1] = u),
      (t[2] = c),
      (t[3] = y),
      (t[4] = g),
      (t[5] = v))
    : (v = t[5]);
  const b = v,
    S = d
      ? "bg-red-500/20 hover:bg-red-500/30"
      : "hover:bg-neutral-100 dark:hover:bg-neutral-900";
  let _;
  t[6] !== S
    ? ((_ = (0, s.cn)("relative h-8 w-6 rounded-(--radius-disc)", S)),
      (t[6] = S),
      (t[7] = _))
    : (_ = t[7]);
  const x = c ? h : f;
  let w, E, T, k, C, I, A;
  return (
    t[8] !== m
      ? ((w = m
          ? (0, r.jsx)(i.Mic, {
              className: "h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100",
            })
          : (0, r.jsx)(i.Laptop, {
              className: "h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100",
            })),
        (t[8] = m),
        (t[9] = w))
      : (w = t[9]),
    t[10] !== d || t[11] !== u || t[12] !== c
      ? ((E =
          c &&
          !d &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              !u &&
                (0, r.jsx)("div", {
                  className:
                    "animate-recording-pulse absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500",
                }),
              (0, r.jsx)("div", {
                className: (0, s.cn)(
                  "absolute top-1 right-1 h-2.5 w-2.5 rounded-full border border-red-600",
                  u ? "bg-neutral-500" : "bg-red-500",
                ),
              }),
            ],
          })),
        (t[10] = d),
        (t[11] = u),
        (t[12] = c),
        (t[13] = E))
      : (E = t[13]),
    t[14] !== d
      ? ((T =
          d &&
          (0, r.jsx)(i.AlertTriangle, {
            className:
              "absolute top-0 right-0 h-4 w-4 fill-neutral-100 text-red-500",
          })),
        (t[14] = d),
        (t[15] = T))
      : (T = t[15]),
    t[16] !== p ||
    t[17] !== _ ||
    t[18] !== x ||
    t[19] !== w ||
    t[20] !== E ||
    t[21] !== T
      ? ((k = (0, r.jsx)(a.TooltipTrigger, {
          children: (0, r.jsxs)(l.Button, {
            size: "icon",
            className: _,
            variant: "ghost",
            disabled: p,
            onClick: x,
            children: [w, E, T],
          }),
        })),
        (t[16] = p),
        (t[17] = _),
        (t[18] = x),
        (t[19] = w),
        (t[20] = E),
        (t[21] = T),
        (t[22] = k))
      : (k = t[22]),
    t[23] !== b ? ((C = b()), (t[23] = b), (t[24] = C)) : (C = t[24]),
    t[25] !== C
      ? ((I = (0, r.jsx)(a.TooltipContent, {
          className: "max-w-xs text-center",
          children: (0, r.jsx)("div", {
            className: "flex flex-col gap-y-1",
            children: C,
          }),
        })),
        (t[25] = C),
        (t[26] = I))
      : (I = t[26]),
    t[27] !== I || t[28] !== k
      ? ((A = (0, r.jsxs)(a.Tooltip, { children: [k, I] })),
        (t[27] = I),
        (t[28] = k),
        (t[29] = A))
      : (A = t[29]),
    A
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(58055 /* app/components/tooltip */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(99683 /* vendor/module-99683 */);
