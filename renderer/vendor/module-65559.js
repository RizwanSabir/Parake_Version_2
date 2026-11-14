// vendor/module-65559.js — webpack module 65559
// params: (e, t, n) = (module, exports, require)
(t.R = void 0),
  (t.useMicrophoneTranscription = function (
    {
      isMobile: e,
      onAddTranscript: n,
      onAddPartialTranscript: u,
      onEndOfUtterance: d,
      callSessionId: p,
      onSpeakerIdIgnored: f,
      interviewer: h,
    },
    {
      transcriptionDeps: m,
      processMicAudio: g,
      echoCancellation: y,
      showToastInfo: v,
      trackEndedSeverity: b,
      onPermissionDenied: S,
      flushProcessedMicAudio: _,
      getPreferredDeviceId: x,
      onEvent: w,
    },
  ) {
    const E = "useMicrophoneTranscription",
      [T, k] = (0, r.useState)(!1),
      C = (0, l.useAudioChunkCombiner)(),
      I = (0, r.useRef)(null),
      A = (0, r.useRef)(Promise.resolve());
    function O(e) {
      const n = A.current.then(e);
      return (
        (A.current = Promise.race([
          n.catch(() => {}),
          new Promise((e) => setTimeout(e, t.R)),
        ])),
        n
      );
    }
    async function R() {
      try {
        return (await x?.()) ?? null;
      } catch {
        return null;
      }
    }
    function M(e) {
      Promise.resolve()
        .then(() => w?.(e))
        .catch(() => {});
    }
    function P(e) {
      return (
        e instanceof DOMException && "NotAllowedError" === e.name && S?.(),
        {
          kind: "failure",
          displayMessage: (0, o.microphoneErrorMessage)(e, m.capturePlatform),
          source: `${E}.performStart.getUserMedia`,
          error: e,
          severity: "info",
        }
      );
    }
    const N = (0, r.useRef)(null),
      D = (N.current ??= (0, a.createRecoveryBudget)(
        a.RECONNECT_RETRY_DELAYS_MS,
      )),
      j = (0, c.useTranscriptionSession)(
        {
          label: "Microphone",
          sourceBase: E,
          source: "microphone",
          callSessionId: p,
          speakerDiarization: e,
          onAddTranscript: n,
          onAddPartialTranscript: u,
          onEndOfUtterance: d,
          reconnectBudget: D,
          onAfterStop: () => {
            k(!1), h?.hangUp();
          },
          onSpeakerIdIgnored: f,
          onAudio: ({
            audio: e,
            speechmaticsClient: t,
            recordChunkInterval: n,
          }) =>
            O(async () => {
              const r = await g(e);
              for (const e of r)
                C.combine(e, (e) => {
                  n(), t.sendAudio(e);
                });
            }),
          flushPendingAudio: (e) =>
            O(async () => {
              const t = (await _?.()) ?? [],
                n = (t) => e.sendAudio(t);
              for (const e of t) C.combine(e, n);
              C.flush(n);
            }),
          silenceWatchdog: {
            onSilenceDetected: w
              ? ({ everReceivedAudio: e }) =>
                  M({
                    type: "silence-detected",
                    everReceivedAudio: e,
                  })
              : void 0,
            onSilenceEnded: w
              ? (e) => M({ type: "silence-ended", endedBy: e })
              : void 0,
            isMuted: T,
          },
          acquireStream: async (e) => {
            const t = await R(),
              n = { echoCancellation: y, noiseSuppression: !1 };
            let r;
            try {
              r = await navigator.mediaDevices.getUserMedia({
                audio: t ? { ...n, deviceId: { exact: t } } : n,
              });
            } catch (e) {
              const o =
                (e instanceof Error || e instanceof DOMException) &&
                [
                  "OverconstrainedError",
                  "NotFoundError",
                  "NotReadableError",
                ].includes(e.name);
              if (!t || !o) return P(e);
              try {
                (r = await navigator.mediaDevices.getUserMedia({
                  audio: n,
                })),
                  M({ type: "device-fallback" });
              } catch (e) {
                return P(e);
              }
            }
            e.setMediaStream(r),
              L().then((e) => {
                I.current = e;
              });
            const o = r.getAudioTracks()[0];
            return (
              o &&
                (0, i.attachTrackWatchdog)(o, {
                  reasonKey: "mic-track",
                  sourceBase: `${E}.audioTrack`,
                  endedDisplayMessage:
                    "Your microphone disconnected, so transcription stopped. Reconnect it, then start the microphone again.",
                  endedSeverity: b,
                  onMuteChange: k,
                  statusRef: e.statusRef,
                  queueAction: e.queueAction,
                }),
              h?.isMock()
                ? h.acquire({
                    helpers: e,
                    sourceBase: E,
                    micStream: r,
                  })
                : {
                    kind: "success",
                    mediaStream: r,
                    audioRecorderStream: r,
                  }
            );
          },
        },
        m,
      );
    async function L() {
      try {
        const e = await navigator.mediaDevices.enumerateDevices(),
          t = await R();
        return (0, s.resolveActiveInputDevice)(e, t);
      } catch (e) {
        return (
          j.reportLiveCallSessionError({
            severity: "warning",
            source: `${E}.getActiveInputDeviceIdentity`,
            reason: "enumerate-devices-failed",
            error: e,
          }),
          null
        );
      }
    }
    (0, r.useEffect)(() => {
      T &&
        j.isTranscribing &&
        (v("Microphone is muted — please unmute it to continue transcribing."),
        j.reportLiveCallSessionError({
          severity: "warning",
          source: `${E}.onMuteChange`,
          reason: "mic-track-muted-warning",
          error: new Error("mic-track-muted-warning"),
        }));
    }, [T, j.isTranscribing]);
    const F = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        const e = () => {
          F.current && clearTimeout(F.current),
            (F.current = setTimeout(() => {
              (async () => {
                const e = await L(),
                  t = j.getCurrentSettings();
                t &&
                  I.current !== e &&
                  (j.queueAction({
                    action: "RESTART",
                    settings: t,
                    reacquireStream: !0,
                  }),
                  (I.current = e));
              })();
            }, 250));
        };
        return (
          L().then((e) => {
            I.current = e;
          }),
          navigator.mediaDevices.addEventListener("devicechange", e),
          () => {
            navigator.mediaDevices.removeEventListener("devicechange", e),
              F.current && clearTimeout(F.current);
          }
        );
      }, []),
      {
        isTranscribing: j.isTranscribing,
        isMuted: T,
        displayError: j.displayError,
        clearDisplayError: () => j.setDisplayError(null),
        startTranscription: async (e) => {
          C.reset(), await j.startTranscription(e);
        },
        restartSession: async (e, t) => {
          C.reset(),
            await j.restartSession(e, {
              reacquireStream: !!t?.reacquireStream || !!h?.isMock(),
            });
        },
        stopTranscription: () => j.stopTranscription(),
        forceEndOfUtterance: j.forceEndOfUtterance,
      }
    );
  });
const r = n(14041 /* vendor/module-14041 */),
  o = n(83817 /* vendor/module-83817 */),
  i = n(66165 /* vendor/module-66165 */),
  a = n(88194 /* vendor/module-88194 */),
  s = n(37004 /* vendor/module-37004 */),
  l = n(46263 /* vendor/module-46263 */),
  c = n(51273 /* vendor/module-51273 */);
t.R = 250;
