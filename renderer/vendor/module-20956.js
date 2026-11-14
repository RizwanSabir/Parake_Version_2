// vendor/module-20956.js — webpack module 20956
// params: (e, t, n) = (module, exports, require)
t.useShareTranscription = function (
  {
    onAddTranscript: e,
    onAddPartialTranscript: t,
    onEndOfUtterance: n,
    callSessionId: l,
    interviewer: c,
  },
  {
    transcriptionDeps: u,
    acquireStream: d,
    pushShareAudio: p,
    showToastInfo: f,
    onAfterStop: h,
    onSilenceDetected: m,
    onSilenceEnded: g,
  },
) {
  const y = "useShareTranscription",
    [v, b] = (0, r.useState)(null),
    [S, _] = (0, r.useState)(!1),
    x = (0, a.useAudioChunkCombiner)(),
    w = (0, r.useRef)(null),
    E = (w.current ??= (0, i.createRecoveryBudget)()),
    T = (0, r.useRef)(null),
    k = (T.current ??= (0, i.createRecoveryBudget)(
      i.RECONNECT_RETRY_DELAYS_MS,
    )),
    C = (0, s.useTranscriptionSession)(
      {
        label: "Screen Sharing",
        sourceBase: y,
        source: "share",
        callSessionId: l,
        speakerDiarization: !0,
        onAddTranscript: e,
        onAddPartialTranscript: t,
        onEndOfUtterance: n,
        recoveryBudget: E,
        reconnectBudget: k,
        onAudio: async ({
          audio: e,
          speechmaticsClient: t,
          recordChunkInterval: n,
        }) => {
          x.combine(e, (e) => {
            n(), t.sendAudio(e);
          }),
            await p?.(e);
        },
        flushPendingAudio: (e) => {
          x.flush((t) => e.sendAudio(t));
        },
        silenceWatchdog: {
          onSilenceDetected: m,
          onSilenceEnded: g,
          isMuted: S,
        },
        acquireStream: (e) =>
          c?.isMock()
            ? c.acquire({ helpers: e, sourceBase: y })
            : d(e, { setVideoStream: b, setIsMuted: _ }),
        onAfterStop: async (e) => {
          c?.hangUp(), b(null), _(!1), await h?.(e);
        },
      },
      u,
    );
  return (
    (0, r.useEffect)(() => {
      S &&
        C.isTranscribing &&
        (f(
          `${(0, o.computerAudioLabel)("desktopApp" === u.capturePlatform ? "desktopApp" : "browser")} is muted — please unmute to continue transcribing.`,
        ),
        C.reportLiveCallSessionError({
          severity: "warning",
          source: `${y}.onMuteChange`,
          reason: "audio-track-muted-warning",
          error: new Error("audio-track-muted-warning"),
        }));
    }, [S, C.isTranscribing]),
    {
      isTranscribing: C.isTranscribing,
      isMuted: S,
      displayError: C.displayError,
      clearDisplayError: () => C.setDisplayError(null),
      videoStream: v,
      startTranscription: async (e) => {
        x.reset(), await C.startTranscription(e);
      },
      restartSession: async (e, t) => {
        const n = !!t?.reacquireStream || !!c?.isMock();
        n || x.reset(), await C.restartSession(e, { reacquireStream: n });
      },
      stopTranscription: () => C.stopTranscription(),
      forceEndOfUtterance: C.forceEndOfUtterance,
      reportLiveCallSessionError: C.reportLiveCallSessionError,
      getCurrentSettings: C.getCurrentSettings,
    }
  );
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(23546 /* vendor/module-23546 */),
  i = n(88194 /* vendor/module-88194 */),
  a = n(46263 /* vendor/module-46263 */),
  s = n(51273 /* vendor/module-51273 */);
