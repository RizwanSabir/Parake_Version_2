// app/lib/on-closed.js — webpack module 82011
// params: (e, t, n) = (module, exports, require)
t.useSpeakerEnrollmentRecorder = function ({ language: e, onSaved: t }) {
  const n = v.api.useUtils(),
    {
      workletUrl: S,
      uploadVoiceSample: _,
      getCapturePlatform: x,
    } = (0, i.useVoicePlatform)(),
    [w, E] = (0, r.useState)("intro"),
    [T, k] = (0, r.useState)(b),
    [C, I] = (0, r.useState)(null),
    [A, O] = (0, r.useState)(null),
    R = (0, r.useRef)(!1),
    [M] = (0, r.useState)(h.createEnrollmentAttempts),
    P = v.api.callSession.generateSpeechmaticsApiKey.useMutation(),
    N = (
      t,
      { message: n = m.FAILURE_MESSAGES[t], stage: r, error: i } = {},
    ) => {
      I(t), E("error"), o.toast.error(n);
      const l = i instanceof Error ? i.name : null;
      (0, a.trackClientEvent)(s.mixpanelEvents.speakerEnrollment.failed, {
        language: e,
        reason: t,
        stage: r ?? null,
        errorName: l,
      }),
        r &&
          y.log.warn(i instanceof Error ? i : `voice recording failed: ${r}`, {
            code: g.codes.speakerEnrollment.recording_failed,
            reason: t,
            stage: r,
            language: e,
          });
    };
  (0, r.useEffect)(() => () => M.discard(), [M]);
  const D = () => {
      const e = M.current();
      if (e?.take.stopPromise) return e.take.stopPromise;
      const t = e?.held("session");
      if (!e || !t || "recording" !== w) return Promise.resolve();
      const { take: n } = e;
      return (
        (n.stopPromise = (async () => {
          if (
            (e.held("recorder")?.stop(),
            n.sampleCount < m.MIN_SAMPLE_SECONDS * l.AUDIO_CONFIG.sampleRate)
          )
            return e.release(), void N("too_short");
          E("finishing");
          try {
            const r = await t.finish();
            if (e.isStale) return;
            if ((e.disown("session"), e.release(), !r))
              return void N("not_one_voice");
            (n.identifiers = r), E("review");
          } catch (t) {
            if (e.isStale) return;
            e.release(), N("service", { stage: "finish", error: t });
          }
        })()),
        n.stopPromise
      );
    },
    j = T.sampleCount >= m.MAX_SAMPLE_SECONDS * l.AUDIO_CONFIG.sampleRate;
  (0, r.useEffect)(() => {
    "recording" === w && j && D();
  }, [w, j, D]);
  const L = () => {
      M.discard(), k(b), O(null), I(null), E("intro");
    },
    F = T.sampleCount / l.AUDIO_CONFIG.sampleRate;
  return {
    step: w,
    elapsedSeconds: F,
    micStream: A,
    hasHeardVoice: null !== T.lastVoiceSampleCount,
    secondsSinceVoice:
      (T.sampleCount - (T.lastVoiceSampleCount ?? 0)) /
      l.AUDIO_CONFIG.sampleRate,
    canFinish: F >= m.MIN_SAMPLE_SECONDS,
    failure: C,
    start: async () => {
      if ("intro" !== w && "review" !== w && "error" !== w) return;
      const t = M.begin(e),
        { take: n } = t;
      I(null), E("starting"), k(b);
      const r = (e, n) => {
        t.isStale || (M.discard(), N("service", { stage: e, error: n }));
      };
      try {
        const o = await t.step(() => P.mutateAsync({ purpose: "enrollment" }));
        if (!o) return;
        let i;
        try {
          i = await t.acquire(
            "micStream",
            () =>
              navigator.mediaDevices.getUserMedia({
                audio: {
                  echoCancellation: !0,
                  noiseSuppression: !0,
                  autoGainControl: !0,
                },
              }),
            (e) => {
              e.getTracks().forEach((e) => e.stop()),
                O((t) => (t === e ? null : t));
            },
          );
        } catch (e) {
          return void (
            t.isStale ||
            (M.discard(),
            N("microphone", {
              message: (0, d.microphoneErrorMessage)(e, x()),
              error: e,
            }))
          );
        }
        if (!i) return;
        O(i);
        const p = await t.acquire(
          "session",
          () =>
            (0, f.startSpeakerEnrollmentSession)({
              speechmaticsApiKey: o,
              language: e,
              onClosed: () => {
                t.held("session") && !n.stopPromise && r("session-closed");
              },
            }),
          (e) => e.abort(),
        );
        if (!p) return;
        const h = await t.acquire(
          "recorder",
          () =>
            (0, u.createAudioRecorder)({
              stream: i,
              workletUrl: S,
              onError: () => r("recorder"),
              onAudio: (e) => {
                if (
                  n.sampleCount >=
                  m.MAX_SAMPLE_SECONDS * l.AUDIO_CONFIG.sampleRate
                )
                  return;
                n.frames.push(e), (n.sampleCount += e.length);
                const t = (0, c.rmsLevel)(e) >= m.VOICE_LEVEL_THRESHOLD;
                k((e) => ({
                  sampleCount: n.sampleCount,
                  lastVoiceSampleCount: t
                    ? n.sampleCount
                    : e.lastVoiceSampleCount,
                })),
                  p.sendAudio(e);
              },
            }),
          (e) => e.close(),
        );
        if (!h) return;
        h.start(),
          E("recording"),
          (0, a.trackClientEvent)(
            s.mixpanelEvents.speakerEnrollment.recording_started,
            { language: e },
          );
      } catch (e) {
        r("start", e);
      }
    },
    stop: D,
    save: async () => {
      await D();
      const e = M.current(),
        r = e?.take;
      if (e && r?.identifiers && !R.current) {
        (R.current = !0), E("saving");
        try {
          await _(
            new File([(0, p.encodeWav)(r.frames)], "voice-sample.wav", {
              type: "audio/wav",
            }),
            {
              speakerIdentifiers: r.identifiers,
              language: r.language,
            },
          ),
            await n.speakerEnrollment.list.invalidate(),
            (0, a.trackClientEvent)(s.mixpanelEvents.speakerEnrollment.saved, {
              language: r.language,
              hasSample: !0,
            }),
            e.isStale || (L(), t?.());
        } catch (t) {
          await n.speakerEnrollment.list.invalidate(),
            e.isStale || N("save_failed", { stage: "save", error: t });
        } finally {
          R.current = !1;
        }
      }
    },
    reset: L,
  };
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(44572 /* vendor/module-44572 */),
  i = n(68972 /* vendor/module-68972 */),
  a = n(87093 /* vendor/module-87093 */),
  s = n(22764 /* vendor/module-22764 */),
  l = n(83341 /* vendor/module-83341 */),
  c = n(88193 /* vendor/module-88193 */),
  u = n(9917 /* vendor/module-9917 */),
  d = n(83817 /* vendor/module-83817 */),
  p = n(61557 /* vendor/module-61557 */),
  f = n(81610 /* vendor/module-81610 */),
  h = n(24585 /* vendor/module-24585 */),
  m = n(42541 /* vendor/module-42541 */),
  g = n(29776 /* vendor/module-29776 */),
  y = n(37148 /* app/lib/set-telemetry-sdk */),
  v = n(44189 /* vendor/module-44189 */),
  b = { sampleCount: 0, lastVoiceSampleCount: null };
