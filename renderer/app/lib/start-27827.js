// app/lib/start-27827.js — webpack module 27827
// params: (e, t, n) = (module, exports, require)
t.useRealtimeSupport = function ({
  callSessionId: e,
  initialCallSession: t,
  isMobile: n,
  onAnswerBlocked: u,
  activateParams: d,
  onRequireGesture: p,
  onScreenRecordingPermissionDenied: f,
  onMicrophonePermissionDenied: h,
  onMicrophoneEvent: m,
  onShareEvent: g,
}) {
  const { apiConfig: y } = (0, o.useApiConfig)();
  return (0, r.useRealtimeSupport)(
    {
      callSessionId: e,
      initialCallSession: t,
      isMobile: n,
      onAnswerBlocked: u,
      activateParams: d,
    },
    {
      useShareTranscription: (e) =>
        (0, c.useShareTranscription)({
          ...e,
          onRequireGesture: p,
          onScreenRecordingPermissionDenied: f,
          onEvent: g,
        }),
      useMicrophoneTranscription: (e) =>
        (0, l.useMicrophoneTranscription)(e, {
          onPermissionDenied: h,
          onEvent: (t) => {
            e.onSourceEvent(t), m(t);
          },
        }),
      useAiMessages: s.useAiMessages,
      coupleShareAndMicrophone: !1,
      transcriptFlushTransport: {
        apiUrl: y.url + "/api/callSession/transcript",
        getHeaders: a.getDesktopClientHeaders,
        fetchImpl: i.desktopFetch,
      },
      audioProcessor: {
        start: () =>
          window.electron.ipcRendererProxy.invoke(
            "renderer/audio-processor/start",
          ),
        stop: () =>
          window.electron.ipcRendererProxy.invoke(
            "renderer/audio-processor/stop",
          ),
      },
      retryUserQuery: !1,
    },
  );
};
const r = n(26241 /* app/lib/is-activated */),
  o = n(8932 /* app/components/api-config-provider */),
  i = n(33445 /* app/lib/desktop-fetch */),
  a = n(34916 /* app/lib/get-os-data */),
  s = n(65563 /* app/hooks/use-ai-messages */),
  l = n(99295 /* app/hooks/use-microphone-transcription */),
  c = n(71956 /* app/lib/on-share-device-fallback */);
