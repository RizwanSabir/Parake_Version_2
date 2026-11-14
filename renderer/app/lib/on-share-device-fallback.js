// app/lib/on-share-device-fallback.js — webpack module 71956
// params: (e, t, n) = (module, exports, require)
t.useShareTranscription = function ({
  onAddTranscript: e,
  onAddPartialTranscript: t,
  onEndOfUtterance: n,
  onStopTranscription: f,
  onRequireGesture: h,
  onScreenRecordingPermissionDenied: m,
  onEvent: g,
  callSessionId: y,
  interviewer: v,
}) {
  const b = "useShareTranscription",
    S = (0, a.useShareTranscription)(
      {
        onAddTranscript: e,
        onAddPartialTranscript: t,
        onEndOfUtterance: n,
        callSessionId: y,
        interviewer: v,
      },
      {
        transcriptionDeps: (0, p.useTranscriptionDeps)(),
        showToastInfo: (e) => o.toast.info(e),
        onSilenceDetected: g
          ? ({ everReceivedAudio: e }) =>
              g({ type: "silence-detected", everReceivedAudio: e })
          : void 0,
        onSilenceEnded: g
          ? (e) => g({ type: "silence-ended", endedBy: e })
          : void 0,
        pushShareAudio: async (e) => {
          await window.electron.ipcRendererProxy.invoke(
            "renderer/audio-processor/push-share-audio",
            e,
          );
        },
        onAfterStop: async (e) => {
          try {
            await window.electron.ipcRendererProxy.invoke(
              "renderer/stop-share-loopback",
            );
          } catch {}
          try {
            await window.electron.disableLoopbackAudio();
          } finally {
            e?.willRestart || f();
          }
        },
        acquireStream: async (e, { setVideoStream: t, setIsMuted: n }) => {
          const r = await (0, d.acquirePinnedShareLoopbackStream)({
            onShareDeviceFallback: () => g?.({ type: "device-fallback" }),
          });
          if (r) return r;
          if (!(0, u.supportsSystemAudioCapture)()) {
            const e =
              u.knownMacOsNames[parseInt(c.osVersionRaw.split(".")[0], 10)] ||
              "Unknown";
            return {
              kind: "failure",
              displayMessage: (0, s.unsupportedMacOsMessage)({
                appName: (0, l.getBrand)().name,
                osVersion: c.osVersionRaw,
                osName: e,
              }),
              source: `${b}.performStart.unsupportedMacOsVersion`,
              error: new Error("Unsupported macOS version"),
              severity: "info",
            };
          }
          if (
            !(
              await window.electron.ipcRendererProxy.invoke(
                "renderer/get-screen-recording-permission-status",
              )
            ).granted
          )
            return (
              m(),
              {
                kind: "failure",
                displayMessage: (0, s.screenRecordingPermissionMessage)(
                  (0, l.getBrand)().name,
                ),
                source: `${b}.performStart.permissionDenied`,
                severity: "info",
              }
            );
          let o;
          try {
            const e = new CaptureController();
            e.setFocusBehavior("no-focus-change"),
              await window.electron.enableLoopbackAudio(),
              (o = await navigator.mediaDevices.getDisplayMedia({
                video: { displaySurface: "browser" },
                audio: {
                  echoCancellation: !1,
                  noiseSuppression: !1,
                  suppressLocalAudioPlayback: !1,
                },
                preferCurrentTab: !1,
                selfBrowserSurface: "exclude",
                systemAudio: "include",
                controller: e,
                surfaceSwitching: "include",
                monitorTypeSurfaces: "exclude",
              }));
          } catch (t) {
            const n =
              t instanceof Error && t.message.toLowerCase().includes("gesture");
            n && h();
            const r =
              (0, u.showsSystemSharePicker)() &&
              (0, s.isDismissedSharePicker)(t);
            return {
              kind: "failure",
              displayMessage: (0, s.screenShareErrorMessage)(
                t,
                e.capturePlatform,
              ),
              source: `${b}.performStart.getDisplayMedia`,
              error: t,
              severity: n || r ? "info" : "error",
              silent: n || r,
            };
          }
          e.setMediaStream(o);
          const a = o.getVideoTracks()[0];
          if ((o.getVideoTracks().forEach((e) => e.stop()), !a))
            return {
              kind: "failure",
              displayMessage: s.DESKTOP_AUDIO_CAPTURE_FAILED_MESSAGE,
              source: `${b}.performStart.getVideoTrack`,
              severity: "error",
            };
          t(new MediaStream([a]));
          const p = o.getAudioTracks()[0];
          return p
            ? ((0, i.attachTrackWatchdog)(p, {
                reasonKey: "audio-track",
                sourceBase: `${b}.audioTrack`,
                endedDisplayMessage: s.DESKTOP_AUDIO_CAPTURE_ENDED_MESSAGE,
                endedSeverity: "error",
                onMuteChange: n,
                recoverable: !0,
                statusRef: e.statusRef,
                queueAction: e.queueAction,
              }),
              {
                kind: "success",
                mediaStream: o,
                audioRecorderStream: new MediaStream([p]),
              })
            : {
                kind: "failure",
                displayMessage: s.DESKTOP_AUDIO_CAPTURE_FAILED_MESSAGE,
                source: `${b}.performStart.getAudioTrack`,
                severity: "error",
              };
        },
      },
    ),
    { mutateAsync: _, isPending: x } = (0, r.useMutation)({
      mutationFn: async () => {
        try {
          return await window.electron.ipcRendererProxy.invoke(
            "renderer/capture-screenshot",
          );
        } catch (e) {
          throw (
            (S.reportLiveCallSessionError({
              severity: "error",
              source: `${b}.captureScreenShot`,
              reason: "capture-screenshot-failed",
              error: e,
            }),
            e)
          );
        }
      },
    });
  return {
    isTranscribing: S.isTranscribing,
    isMuted: S.isMuted,
    displayError: S.displayError,
    clearDisplayError: S.clearDisplayError,
    videoStream: S.videoStream,
    startTranscription: S.startTranscription,
    restartSession: S.restartSession,
    stopTranscription: S.stopTranscription,
    forceEndOfUtterance: S.forceEndOfUtterance,
    captureScreenShot: _,
    isCapturingScreenShot: x,
  };
};
const r = n(24383 /* vendor/module-24383 */),
  o = n(44572 /* vendor/module-44572 */),
  i = n(66165 /* vendor/module-66165 */),
  a = n(20956 /* vendor/module-20956 */),
  s = n(83817 /* vendor/module-83817 */),
  l = n(74920 /* app/lib/apply-brand-attribute */),
  c = n(50272 /* app/lib/os-version-raw */),
  u = n(34916 /* app/lib/get-os-data */),
  d = n(50632 /* app/lib/acquire-pinned-share-loopback-stream */),
  p = n(50225 /* app/hooks/use-transcription-deps */);
