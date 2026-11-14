// app/components/voice-enrollment-prompt.js — webpack module 88359
// params: (e, t, n) = (module, exports, require)
t.VoiceEnrollmentPrompt = function (e) {
  const t = (0, o.c)(36),
    { sessionLanguage: n, onRecordSample: g, onShowRecorded: y } = e,
    v = (0, a.useRef)(!1),
    { data: b, isLoading: S } = p.api.speakerEnrollment.list.useQuery();
  let _;
  t[0] !== b
    ? ((_ = void 0 === b ? [] : b), (t[0] = b), (t[1] = _))
    : (_ = t[1]);
  const x = _,
    { getLanguageLabel: w } = (0, s.useTranscriptionLanguages)();
  let E;
  t[2] !== x || t[3] !== n
    ? ((E = (0, u.assessEnrollment)(x, n)), (t[2] = x), (t[3] = n), (t[4] = E))
    : (E = t[4]);
  const { verdict: T } = E,
    k = "usable" === T,
    C = "stale" === T;
  let I;
  t[5] !== x || t[6] !== n || t[7] !== T
    ? ((I = "missing" === T && x.some((e) => e.language !== n)),
      (t[5] = x),
      (t[6] = n),
      (t[7] = T),
      (t[8] = I))
    : (I = t[8]);
  const A = I,
    O = !S && !k;
  let R, M, P;
  if (
    (t[9] !== A || t[10] !== C || t[11] !== O
      ? ((R = () => {
          O &&
            !v.current &&
            ((v.current = !0),
            (0, l.trackClientEvent)(
              c.mixpanelEvents.speakerEnrollment.prompt_shown,
              { stale: C, languageMismatch: A },
            ));
        }),
        (M = [O, C, A]),
        (t[9] = A),
        (t[10] = C),
        (t[11] = O),
        (t[12] = R),
        (t[13] = M))
      : ((R = t[12]), (M = t[13])),
    (0, a.useEffect)(R, M),
    S)
  ) {
    let e;
    return (
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsxs)("div", {
            role: "status",
            "aria-label": "Loading voice profile",
            className: "flex min-h-11 w-full flex-col gap-2",
            children: [
              (0, r.jsx)(h.Skeleton, { className: "h-4 w-40" }),
              (0, r.jsx)(h.Skeleton, { className: "h-4 w-full" }),
            ],
          })),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  t[15] !== w
    ? ((P = (e) => w(e) ?? e), (t[15] = w), (t[16] = P))
    : (P = t[16]);
  const N = P;
  let D;
  t[17] !== N || t[18] !== n
    ? ((D = N(n)), (t[17] = N), (t[18] = n), (t[19] = D))
    : (D = t[19]);
  const j = k
    ? `Your ${D} voice profile is set up. Tap to record it again.`
    : A
      ? `This session uses ${D}, which has no voice profile yet. Record a sample to enable speaker labeling.`
      : "missing" !== T
        ? `Your ${D} voice profile stopped working after a transcription model update. Record a new sample so we can tell your voice apart again.`
        : `On one microphone, this is how we tell you from the other person, so answers respond to them and not to you. It takes about ${d.MAX_SAMPLE_SECONDS} seconds, once.`;
  if (!k) {
    let e, n, o, a, s;
    return (
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, r.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, r.jsx)(i.Speech, { className: "size-4" }),
              (0, r.jsx)(m.Typography, {
                variant: "meta",
                className: "font-medium",
                children: "Set up your voice first",
              }),
            ],
          })),
          (t[20] = e))
        : (e = t[20]),
      t[21] !== j
        ? ((n = (0, r.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [
              e,
              (0, r.jsx)(m.Typography, {
                variant: "body",
                className: "text-muted-foreground",
                children: j,
              }),
            ],
          })),
          (t[21] = j),
          (t[22] = n))
        : (n = t[22]),
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, r.jsx)(i.Mic, {})), (t[23] = o))
        : (o = t[23]),
      t[24] !== g
        ? ((a = (0, r.jsxs)(f.Button, {
            variant: "outline",
            className: "w-full",
            onClick: g,
            children: [o, " Record your voice"],
          })),
          (t[24] = g),
          (t[25] = a))
        : (a = t[25]),
      t[26] !== n || t[27] !== a
        ? ((s = (0, r.jsxs)("div", {
            className: "flex w-full flex-col gap-3 rounded-xl border p-4",
            children: [n, a],
          })),
          (t[26] = n),
          (t[27] = a),
          (t[28] = s))
        : (s = t[28]),
      s
    );
  }
  let L, F, U, B;
  return (
    t[29] === Symbol.for("react.memo_cache_sentinel")
      ? ((L = (0, r.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, r.jsx)(i.Speech, { className: "size-4" }),
            (0, r.jsx)(m.Typography, {
              variant: "meta",
              className: "font-medium",
              children: "Voice Recorded",
            }),
          ],
        })),
        (t[29] = L))
      : (L = t[29]),
    t[30] !== j
      ? ((F = (0, r.jsxs)("div", {
          className: "flex min-w-0 flex-1 flex-col gap-2",
          children: [
            L,
            (0, r.jsx)(m.Typography, {
              variant: "body",
              className: "text-muted-foreground",
              children: j,
            }),
          ],
        })),
        (t[30] = j),
        (t[31] = F))
      : (F = t[31]),
    t[32] === Symbol.for("react.memo_cache_sentinel")
      ? ((U = (0, r.jsx)(i.ChevronRight, {
          className: "text-muted-foreground size-6 shrink-0",
        })),
        (t[32] = U))
      : (U = t[32]),
    t[33] !== y || t[34] !== F
      ? ((B = (0, r.jsxs)("button", {
          type: "button",
          className: "flex min-h-11 w-full items-center gap-4 text-left",
          onClick: y,
          children: [F, U],
        })),
        (t[33] = y),
        (t[34] = F),
        (t[35] = B))
      : (B = t[35]),
    B
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(94422 /* vendor/module-94422 */),
  l = n(87093 /* vendor/module-87093 */),
  c = n(22764 /* vendor/module-22764 */),
  u = n(57e3),
  d = n(42541 /* vendor/module-42541 */),
  p = n(44189 /* vendor/module-44189 */),
  f = n(66244 /* app/components/button-variants */),
  h = n(81817 /* app/components/skeleton */),
  m = n(34483 /* app/components/typography-variants */);
