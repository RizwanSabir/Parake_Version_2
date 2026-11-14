// app/components/audio-source-choice.js — webpack module 54380
// params: (e, t, n) = (module, exports, require)
t.AudioSourceChoice = function (e) {
  const t = (0, o.c)(36),
    { platform: n, value: a, onChange: s, micDeviceId: m } = e;
  let g;
  t[0] !== n
    ? ((g = (0, i.computerAudioLabel)(n)), (t[0] = n), (t[1] = g))
    : (g = t[1]);
  const y = g;
  let v, b, S, _, x, w, E, T;
  t[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = (0, r.jsx)(u.Typography, {
        variant: "meta",
        className: "font-medium",
        children: "Audio source",
      })),
      (t[2] = v))
    : (v = t[2]),
    t[3] !== s ? ((b = (e) => s(e)), (t[3] = s), (t[4] = b)) : (b = t[4]),
    t[5] !== y
      ? ((S = { value: "computer", label: y }), (t[5] = y), (t[6] = S))
      : (S = t[6]),
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = { value: "microphone", label: p }), (t[7] = _))
      : (_ = t[7]),
    t[8] !== S ? ((x = [S, _]), (t[8] = S), (t[9] = x)) : (x = t[9]),
    t[10] === Symbol.for("react.memo_cache_sentinel")
      ? ((w = (0, r.jsx)(c.SelectTrigger, {
          "aria-label": "Audio source",
          className: "w-fit",
          children: (0, r.jsx)(c.SelectValue, {}),
        })),
        (t[10] = w))
      : (w = t[10]),
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, r.jsx)("span", {
          className: "text-muted-foreground",
          children: "(Recommended)",
        })),
        (t[11] = E))
      : (E = t[11]),
    t[12] !== y
      ? ((T = (0, r.jsxs)("span", { children: [y, " ", E] })),
        (t[12] = y),
        (t[13] = T))
      : (T = t[13]);
  const k = d[n];
  let C, I, A, O, R, M, P, N;
  return (
    t[14] !== k
      ? ((C = (0, r.jsx)("span", {
          className: "text-muted-foreground",
          children: k,
        })),
        (t[14] = k),
        (t[15] = C))
      : (C = t[15]),
    t[16] !== C || t[17] !== T
      ? ((I = (0, r.jsxs)("span", {
          className: "flex flex-col",
          children: [T, C],
        })),
        (t[16] = C),
        (t[17] = T),
        (t[18] = I))
      : (I = t[18]),
    t[19] !== y || t[20] !== I
      ? ((A = (0, r.jsx)(c.SelectItem, {
          value: "computer",
          label: y,
          children: I,
        })),
        (t[19] = y),
        (t[20] = I),
        (t[21] = A))
      : (A = t[21]),
    t[22] === Symbol.for("react.memo_cache_sentinel")
      ? ((O = (0, r.jsx)(c.SelectItem, {
          value: "microphone",
          label: p,
          children: (0, r.jsxs)("span", {
            className: "flex max-w-72 flex-col whitespace-normal",
            children: [
              (0, r.jsx)("span", { children: p }),
              (0, r.jsx)("span", {
                className: "text-muted-foreground",
                children: f,
              }),
            ],
          }),
        })),
        (t[22] = O))
      : (O = t[22]),
    t[23] !== A
      ? ((R = (0, r.jsxs)(c.SelectContent, { children: [A, O] })),
        (t[23] = A),
        (t[24] = R))
      : (R = t[24]),
    t[25] !== R || t[26] !== b || t[27] !== x || t[28] !== a
      ? ((M = (0, r.jsxs)("div", {
          className: "flex items-center justify-between gap-3",
          children: [
            v,
            (0, r.jsxs)(c.Select, {
              value: a,
              onValueChange: b,
              items: x,
              children: [w, R],
            }),
          ],
        })),
        (t[25] = R),
        (t[26] = b),
        (t[27] = x),
        (t[28] = a),
        (t[29] = M))
      : (M = t[29]),
    t[30] !== m || t[31] !== a
      ? ((P =
          "microphone" === a &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(u.Typography, {
                variant: "body",
                className: "text-muted-foreground",
                children: f,
              }),
              (0, r.jsx)(l.LiveWaveform, {
                active: !0,
                deviceId: m,
                mode: "static",
                barGap: 2,
                height: 24,
                sensitivity: 2.5,
                className: "w-full min-w-0",
                "aria-label": "Microphone level",
                onError: h,
              }),
            ],
          })),
        (t[30] = m),
        (t[31] = a),
        (t[32] = P))
      : (P = t[32]),
    t[33] !== M || t[34] !== P
      ? ((N = (0, r.jsxs)("div", {
          className: "flex w-full flex-col gap-2",
          children: [M, P],
        })),
        (t[33] = M),
        (t[34] = P),
        (t[35] = N))
      : (N = t[35]),
    N
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(23546 /* vendor/module-23546 */),
  a = n(29776 /* vendor/module-29776 */),
  s = n(37148 /* app/lib/set-telemetry-sdk */),
  l = n(2496 /* app/components/live-waveform */),
  c = n(9664 /* app/components/select-trigger-icon-class-name */),
  u = n(34483 /* app/components/typography-variants */),
  d = {
    desktopApp: "For calls on this computer.",
    browser: "For calls in another tab.",
  },
  p = "Microphone only",
  f =
    "For calls on another device or in person. If it's on your phone, keep it on speaker.";
function h(e) {
  (e instanceof Error && "NotAllowedError" === e.name) ||
    s.log.warn(e, { code: a.codes.liveCall.mic_level_failed });
}
