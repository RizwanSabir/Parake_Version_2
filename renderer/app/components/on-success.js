// app/components/on-success.js — webpack module 67393
// params: (e, t, n) = (module, exports, require)
(t.VOICE_RECORDER_DESCRIPTION = t.VOICE_RECORDER_TITLE = void 0),
  (t.VoiceSampleRecorder = function (e) {
    const t = (0, o.c)(96),
      {
        language: n,
        onClose: v,
        onSaved: b,
        actionSize: S,
        requestCloseRef: _,
        children: x,
      } = e,
      w = void 0 === S ? "xl" : S;
    let E, T;
    t[0] !== v || t[1] !== b
      ? ((E = () => {
          v(), b?.();
        }),
        (t[0] = v),
        (t[1] = b),
        (t[2] = E))
      : (E = t[2]),
      t[3] !== n || t[4] !== E
        ? ((T = { language: n, onSaved: E }),
          (t[3] = n),
          (t[4] = E),
          (t[5] = T))
        : (T = t[5]);
    const k = (0, s.useSpeakerEnrollmentRecorder)(T),
      [C, I] = (0, a.useState)(!1),
      A = u.api.useUtils(),
      { data: O, isPending: R } = u.api.user.get.useQuery();
    let M;
    t[6] !== A
      ? ((M = { onSuccess: () => A.user.get.invalidate() }),
        (t[6] = A),
        (t[7] = M))
      : (M = t[7]);
    const P = u.api.speakerEnrollment.consent.useMutation(M),
      N = !!O?.voiceConsentedAt || P.isSuccess,
      [D, j] = (0, a.useState)(!1);
    let L;
    t[8] !== v || t[9] !== k
      ? ((L = () => {
          k.reset(), v();
        }),
        (t[8] = v),
        (t[9] = k),
        (t[10] = L))
      : (L = t[10]);
    const F = L,
      U = "intro" === k.step || "starting" === k.step,
      B = "error" === k.step,
      z = B && "save_failed" === k.failure,
      H = "finishing" === k.step || "review" === k.step || "saving" === k.step,
      V =
        ("recording" === k.step && k.canFinish) ||
        "finishing" === k.step ||
        "review" === k.step ||
        z;
    let q;
    t[11] !== F || t[12] !== V
      ? ((q = () => {
          V ? I(!0) : F();
        }),
        (t[11] = F),
        (t[12] = V),
        (t[13] = q))
      : (q = t[13]);
    const G = q;
    let W, $;
    t[14] !== G || t[15] !== _
      ? ((W = () => {
          _ && (_.current = G);
        }),
        (t[14] = G),
        (t[15] = _),
        (t[16] = W))
      : (W = t[16]),
      (0, a.useLayoutEffect)(W),
      t[17] !== H ||
      t[18] !== k.elapsedSeconds ||
      t[19] !== k.failure ||
      t[20] !== k.hasHeardVoice ||
      t[21] !== k.secondsSinceVoice
        ? (($ = (0, c.resolveVoiceRecorderStatus)({
            elapsedSeconds: k.elapsedSeconds,
            secondsSinceVoice: k.secondsSinceVoice,
            hasHeardVoice: k.hasHeardVoice,
            failure: k.failure,
            hasStopped: H,
          })),
          (t[17] = H),
          (t[18] = k.elapsedSeconds),
          (t[19] = k.failure),
          (t[20] = k.hasHeardVoice),
          (t[21] = k.secondsSinceVoice),
          (t[22] = $))
        : ($ = t[22]);
    const Y = $,
      K = "recording" === k.step,
      Z = `Keep reading. You can stop after ${c.MIN_SAMPLE_SECONDS} seconds.`;
    let Q, J, X, ee, te, ne, re;
    t[23] !== H || t[24] !== n
      ? ((Q =
          !H &&
          (0, r.jsx)("div", {
            className: "bg-accent-secondary rounded-xl border p-4",
            children: (0, r.jsx)(h.Typography, {
              variant: "body",
              render: (0, r.jsx)("p", {}),
              children: (0, l.voiceSamplePassage)(n),
            }),
          })),
        (t[23] = H),
        (t[24] = n),
        (t[25] = Q))
      : (Q = t[25]),
      t[26] !== B ||
      t[27] !== U ||
      t[28] !== K ||
      t[29] !== Y.message ||
      t[30] !== Y.tone
        ? ((J = U
            ? (0, r.jsx)(h.Typography, {
                variant: "body",
                render: (0, r.jsx)("p", { className: "font-medium" }),
                children:
                  "Press “Start recording”, then read the text out loud.",
              })
            : B
              ? (0, r.jsx)(h.Typography, {
                  variant: "body",
                  render: (0, r.jsx)("p", {
                    className: "text-muted-foreground",
                  }),
                  children: "Press “Try again” when you’re ready.",
                })
              : Y.message
                ? (0, r.jsx)(h.Typography, {
                    variant: "body",
                    render: (0, r.jsx)("p", { className: y[Y.tone] }),
                    children: Y.message,
                  })
                : K &&
                  (0, r.jsx)(h.Typography, {
                    variant: "body",
                    render: (0, r.jsx)("p", {
                      className: "text-muted-foreground",
                    }),
                    children: Z,
                  })),
          (t[26] = B),
          (t[27] = U),
          (t[28] = K),
          (t[29] = Y.message),
          (t[30] = Y.tone),
          (t[31] = J))
        : (J = t[31]),
      t[32] !== U || t[33] !== Y.counter
        ? ((X =
            !U &&
            Y.counter &&
            (0, r.jsx)(h.Typography, {
              variant: "body",
              render: (0, r.jsx)("p", { className: "font-medium" }),
              children: Y.counter,
            })),
          (t[32] = U),
          (t[33] = Y.counter),
          (t[34] = X))
        : (X = t[34]),
      t[35] !== K || t[36] !== k.elapsedSeconds
        ? ((ee =
            K &&
            (0, r.jsx)(f.Progress, {
              value: (k.elapsedSeconds / c.MAX_SAMPLE_SECONDS) * 100,
            })),
          (t[35] = K),
          (t[36] = k.elapsedSeconds),
          (t[37] = ee))
        : (ee = t[37]),
      t[38] !== J || t[39] !== X || t[40] !== ee
        ? ((te = (0, r.jsxs)("div", {
            className:
              "flex min-h-12 w-full flex-col items-center gap-2 text-center",
            children: [J, X, ee],
          })),
          (t[38] = J),
          (t[39] = X),
          (t[40] = ee),
          (t[41] = te))
        : (te = t[41]),
      t[42] !== K || t[43] !== k.micStream || t[44] !== Y.isComplete
        ? ((ne = Y.isComplete
            ? (0, r.jsx)("div", {
                className: "self-center rounded-full border p-2.5",
                children: (0, r.jsx)(i.Check, {
                  className: "text-primary size-6",
                }),
              })
            : (0, r.jsx)(p.LiveWaveform, {
                active: K,
                stream: k.micStream,
                mode: "static",
                barGap: 2,
                height: 32,
                className: "w-full min-w-0",
              })),
          (t[42] = K),
          (t[43] = k.micStream),
          (t[44] = Y.isComplete),
          (t[45] = ne))
        : (ne = t[45]),
      t[46] !== te || t[47] !== ne || t[48] !== Q
        ? ((re = (0, r.jsxs)("div", {
            className: "flex min-w-0 flex-col gap-4",
            children: [Q, te, ne],
          })),
          (t[46] = te),
          (t[47] = ne),
          (t[48] = Q),
          (t[49] = re))
        : (re = t[49]);
    const oe = re;
    let ie;
    t[50] !== N ||
    t[51] !== B ||
    t[52] !== U ||
    t[53] !== R ||
    t[54] !== k ||
    t[55] !== z ||
    t[56] !== Y.isComplete
      ? ((ie = B
          ? {
              label: "Try again",
              onClick: () => {
                z ? k.save() : k.start();
              },
            }
          : U
            ? {
                label: "Start recording",
                icon: (0, r.jsx)(i.Mic, {}),
                loading: "starting" === k.step || R,
                onClick: () => (N ? void k.start() : j(!0)),
              }
            : "recording" !== k.step || Y.isComplete
              ? {
                  label: "Save voice",
                  loading: "finishing" === k.step || "saving" === k.step,
                  onClick: () => {
                    k.save();
                  },
                }
              : {
                  label: "Stop recording",
                  icon: (0, r.jsx)(i.CircleStop, {}),
                  disabled: !k.canFinish,
                  onClick: () => {
                    k.stop();
                  },
                }),
        (t[50] = N),
        (t[51] = B),
        (t[52] = U),
        (t[53] = R),
        (t[54] = k),
        (t[55] = z),
        (t[56] = Y.isComplete),
        (t[57] = ie))
      : (ie = t[57]);
    const ae = ie;
    let se;
    t[58] !== w || t[59] !== G
      ? ((se = (0, r.jsx)(d.Button, {
          variant: "secondary",
          size: w,
          onClick: G,
          children: "Cancel",
        })),
        (t[58] = w),
        (t[59] = G),
        (t[60] = se))
      : (se = t[60]);
    const le = ae.loading ?? ae.disabled ?? !1,
      ce = !ae.loading && ae.icon;
    let ue, de;
    t[61] !== w ||
    t[62] !== ae.label ||
    t[63] !== ae.loading ||
    t[64] !== ae.onClick ||
    t[65] !== le ||
    t[66] !== ce
      ? ((ue = (0, r.jsxs)(d.Button, {
          size: w,
          loading: ae.loading,
          disabled: le,
          onClick: ae.onClick,
          children: [ce, ae.label],
        })),
        (t[61] = w),
        (t[62] = ae.label),
        (t[63] = ae.loading),
        (t[64] = ae.onClick),
        (t[65] = le),
        (t[66] = ce),
        (t[67] = ue))
      : (ue = t[67]),
      t[68] !== se || t[69] !== ue
        ? ((de = (0, r.jsxs)(r.Fragment, { children: [se, ue] })),
          (t[68] = se),
          (t[69] = ue),
          (t[70] = de))
        : (de = t[70]);
    const pe = de,
      fe = "intro" !== k.step;
    let he, me, ge, ye, ve, be, Se;
    return (
      t[71] !== pe || t[72] !== x || t[73] !== G || t[74] !== oe || t[75] !== fe
        ? ((he = x({
            statusPanel: oe,
            actions: pe,
            close: G,
            languageLocked: fe,
          })),
          (t[71] = pe),
          (t[72] = x),
          (t[73] = G),
          (t[74] = oe),
          (t[75] = fe),
          (t[76] = he))
        : (he = t[76]),
      t[77] !== F
        ? ((me = () => {
            I(!1), F();
          }),
          (t[77] = F),
          (t[78] = me))
        : (me = t[78]),
      t[79] !== C || t[80] !== me
        ? ((ge = (0, r.jsx)(m.DiscardRecordingDialog, {
            open: C,
            onOpenChange: I,
            onLeave: me,
          })),
          (t[79] = C),
          (t[80] = me),
          (t[81] = ge))
        : (ge = t[81]),
      t[82] !== P.isPending
        ? ((ye = (e) => {
            (!e && P.isPending) || j(e);
          }),
          (t[82] = P.isPending),
          (t[83] = ye))
        : (ye = t[83]),
      t[84] !== P || t[85] !== k
        ? ((ve = () =>
            P.mutate(void 0, {
              onSuccess: () => {
                j(!1), k.start();
              },
            })),
          (t[84] = P),
          (t[85] = k),
          (t[86] = ve))
        : (ve = t[86]),
      t[87] !== P.isPending || t[88] !== D || t[89] !== ye || t[90] !== ve
        ? ((be = (0, r.jsx)(g.VoiceConsentDialog, {
            open: D,
            onOpenChange: ye,
            isAgreeing: P.isPending,
            onAgree: ve,
          })),
          (t[87] = P.isPending),
          (t[88] = D),
          (t[89] = ye),
          (t[90] = ve),
          (t[91] = be))
        : (be = t[91]),
      t[92] !== he || t[93] !== ge || t[94] !== be
        ? ((Se = (0, r.jsxs)(r.Fragment, { children: [he, ge, be] })),
          (t[92] = he),
          (t[93] = ge),
          (t[94] = be),
          (t[95] = Se))
        : (Se = t[95]),
      Se
    );
  });
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(82011 /* app/lib/on-closed */),
  l = n(83066 /* vendor/module-83066 */),
  c = n(42541 /* vendor/module-42541 */),
  u = n(44189 /* vendor/module-44189 */),
  d = n(66244 /* app/components/button-variants */),
  p = n(2496 /* app/components/live-waveform */),
  f = n(35881 /* app/components/progress */),
  h = n(34483 /* app/components/typography-variants */),
  m = n(22800 /* app/components/discard-recording-dialog */),
  g = n(36531 /* app/components/voice-consent-dialog */),
  y = {
    muted: "text-muted-foreground",
    error: "text-error",
    success: "text-primary",
  };
(t.VOICE_RECORDER_TITLE = "Record Voice Sample"),
  (t.VOICE_RECORDER_DESCRIPTION = `Read the text below out loud in your normal voice. It takes about ${c.MAX_SAMPLE_SECONDS} seconds.`);
