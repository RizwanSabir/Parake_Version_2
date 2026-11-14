// app/components/on-record-sample.js — webpack module 33318
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ConnectCallSessionScreen = function (e) {
  const t = (0, o.c)(42),
    {
      callSession: n,
      onBackClick: m,
      onConnect: g,
      initialAudioSource: y,
      micDeviceId: v,
      connecting: b,
      hasActivePlan: S,
      pickedFree: _,
      isPlanLoading: x,
    } = e,
    [w, E] = (0, a.useState)(y),
    [T, k] = (0, a.useState)("connect"),
    C = "microphone" === w && !n.isMock,
    I = n.activatedAt ? n.isPlanSession : S,
    A = n.activatedAt ? n.isFreeSession : !S && !0 === _;
  if ("recorded" === T) {
    let e, o, i;
    return (
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => k("connect")),
          (o = () => k("record")),
          (t[0] = e),
          (t[1] = o))
        : ((e = t[0]), (o = t[1])),
      t[2] !== n.language
        ? ((i = (0, r.jsx)("div", {
            className:
              "bg-card rounded-window-card flex flex-col gap-4 border p-4",
            children: (0, r.jsx)(c.VoiceRecordedSummary, {
              language: n.language,
              onClose: e,
              onDeleted: o,
              renderTitle: h,
            }),
          })),
          (t[2] = n.language),
          (t[3] = i))
        : (i = t[3]),
      i
    );
  }
  if ("record" === T) {
    let e, o;
    return (
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => k("connect")), (t[4] = e))
        : (e = t[4]),
      t[5] !== n.language
        ? ((o = (0, r.jsx)("div", {
            className:
              "bg-card rounded-window-card flex flex-col gap-4 border p-4",
            children: (0, r.jsx)(u.VoiceSampleRecorder, {
              language: n.language,
              onClose: e,
              children: f,
            }),
          })),
          (t[5] = n.language),
          (t[6] = o))
        : (o = t[6]),
      o
    );
  }
  let O;
  t[7] === Symbol.for("react.memo_cache_sentinel")
    ? ((O = (0, r.jsx)("h1", {
        className: "text-xl font-medium",
        children: "Connect Call Session",
      })),
      (t[7] = O))
    : (O = t[7]);
  const R = n.isMock
    ? "Your mock interview is ready. Connect to meet the AI interviewer."
    : I
      ? "This session has no time limit. It will end when inactivity is detected."
      : "Your session is ready. Connect to start transcribing.";
  let M, P, N;
  t[8] !== R
    ? ((M = (0, r.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-2",
        children: [
          O,
          (0, r.jsx)("p", {
            className: "text-muted-foreground flex flex-col gap-1 text-center",
            children: (0, r.jsx)("span", { children: R }),
          }),
        ],
      })),
      (t[8] = R),
      (t[9] = M))
    : (M = t[9]),
    t[10] !== w || t[11] !== n.isMock || t[12] !== v
      ? ((P =
          !n.isMock &&
          (0, r.jsx)(s.AudioSourceChoice, {
            platform: "desktopApp",
            value: w,
            onChange: E,
            micDeviceId: v,
          })),
        (t[10] = w),
        (t[11] = n.isMock),
        (t[12] = v),
        (t[13] = P))
      : (P = t[13]),
    t[14] !== n.language || t[15] !== C
      ? ((N =
          C &&
          (0, r.jsx)(l.VoiceEnrollmentPrompt, {
            sessionLanguage: n.language,
            onRecordSample: () => k("record"),
            onShowRecorded: () => k("recorded"),
          })),
        (t[14] = n.language),
        (t[15] = C),
        (t[16] = N))
      : (N = t[16]);
  const D = !n.isMock && !C,
    j = A && !n.isMock;
  let L, F, U;
  t[17] !== D || t[18] !== j
    ? ((L = (0, r.jsx)(d.CallSessionConnectWarnings, {
        showWarnings: D,
        showMockVideo: j,
      })),
      (t[17] = D),
      (t[18] = j),
      (t[19] = L))
    : (L = t[19]),
    t[20] !== b || t[21] !== m
      ? ((F = (0, r.jsx)(p.Button, {
          variant: "outline",
          className: "flex-row items-center gap-1",
          onClick: m,
          disabled: b,
          children: "Back",
        })),
        (t[20] = b),
        (t[21] = m),
        (t[22] = F))
      : (F = t[22]),
    t[23] !== w || t[24] !== g
      ? ((U = () => g(w)), (t[23] = w), (t[24] = g), (t[25] = U))
      : (U = t[25]);
  const B = b || x;
  let z, H, V, q;
  return (
    t[26] !== b || t[27] !== x
      ? ((z = x
          ? "Loading..."
          : b
            ? "Connecting..."
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(i.Share, { className: "size-4" }),
                  " Connect",
                ],
              })),
        (t[26] = b),
        (t[27] = x),
        (t[28] = z))
      : (z = t[28]),
    t[29] !== U || t[30] !== B || t[31] !== z
      ? ((H = (0, r.jsx)(p.Button, {
          className: "flex-row items-center gap-1",
          onClick: U,
          disabled: B,
          children: z,
        })),
        (t[29] = U),
        (t[30] = B),
        (t[31] = z),
        (t[32] = H))
      : (H = t[32]),
    t[33] !== H || t[34] !== F
      ? ((V = (0, r.jsxs)("div", {
          className: "grid w-full grid-cols-2 gap-2",
          children: [F, H],
        })),
        (t[33] = H),
        (t[34] = F),
        (t[35] = V))
      : (V = t[35]),
    t[36] !== V || t[37] !== M || t[38] !== P || t[39] !== N || t[40] !== L
      ? ((q = (0, r.jsxs)("div", {
          className:
            "bg-card rounded-window-card flex flex-col items-center justify-center gap-4 border p-4",
          children: [M, P, N, L, V],
        })),
        (t[36] = V),
        (t[37] = M),
        (t[38] = P),
        (t[39] = N),
        (t[40] = L),
        (t[41] = q))
      : (q = t[41]),
    q
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(54380 /* app/components/audio-source-choice */),
  l = n(88359 /* app/components/voice-enrollment-prompt */),
  c = n(7293 /* app/components/on-click-7293 */),
  u = n(67393 /* app/components/on-success */),
  d = n(36397 /* app/components/call-session-connect-warnings */),
  p = n(99683 /* vendor/module-99683 */);
function f(e) {
  const { statusPanel: t, actions: n } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)("h1", {
        className: "text-xl font-medium",
        children: u.VOICE_RECORDER_TITLE,
      }),
      (0, r.jsx)("p", {
        className: "text-muted-foreground",
        children: u.VOICE_RECORDER_DESCRIPTION,
      }),
      t,
      (0, r.jsx)("div", {
        className: "grid w-full grid-cols-2 gap-2",
        children: n,
      }),
    ],
  });
}
function h(e) {
  return (0, r.jsx)("h1", {
    className: "text-xl font-medium",
    children: e,
  });
}
