// vendor/module-32103.js — webpack module 32103
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useMockInterviewer = function ({ callSessionId: e, isMock: t }) {
  const n = d.api.callSession.generateRealtimeSessionToken.useMutation(),
    s = d.api.callSession.recordRealtimeUsage.useMutation({
      meta: a.fireAndForgetMutationMeta,
    }),
    u = (0, r.useRef)(null),
    h = () => {
      u.current?.(), (u.current = null);
    };
  return {
    isMock: t,
    acquire: async ({ helpers: t, sourceBase: r, micStream: a }) => {
      try {
        if (!e) throw new Error("Call session ID is required");
        const { clientSecret: d } = await n.mutateAsync({
            callSessionId: e,
          }),
          f = await (0, c.connectOpenAIRealtime)({
            clientSecret: d,
            micTrack: a?.getAudioTracks()[0],
            onUsage: (t) => s.mutate({ callSessionId: e, usage: t }),
            onFatalError: (n) => {
              (0, o.trackClientEvent)(
                i.mixpanelEvents.mockInterview.voice_lost,
                { callSessionId: e, reason: "connection_lost" },
              ),
                t.queueAction({
                  action: "STOP",
                  reason: "mock-connection-lost",
                  error: {
                    displayMessage:
                      "Lost the connection to the AI interviewer, so the mock interview stopped. Check your internet connection, then start it again.",
                    source: `${r}.performStart.mock.connectionLost`,
                    severity: "error",
                    error: n,
                    reason: "mock-connection-lost",
                  },
                });
            },
          });
        u.current = f.stop;
        const h = f.remoteStream.getAudioTracks()[0];
        if (
          (h &&
            (0, p.attachTrackWatchdog)(h, {
              reasonKey: "mock-audio-track",
              sourceBase: `${r}.mockAudioTrack`,
              endedDisplayMessage:
                "The AI interviewer's voice stopped, so the mock interview ended. Start it again to continue.",
              endedSeverity: "error",
              statusRef: t.statusRef,
              queueAction: (n) => {
                (0, o.trackClientEvent)(
                  i.mixpanelEvents.mockInterview.voice_lost,
                  { callSessionId: e, reason: "audio_track_ended" },
                ),
                  t.queueAction(n);
              },
            }),
          !a)
        )
          return (
            t.setMediaStream(f.remoteStream),
            {
              kind: "success",
              mediaStream: f.remoteStream,
              audioRecorderStream: f.remoteStream,
            }
          );
        const m = await (0, l.mixAudioStreams)([a, f.remoteStream]);
        return (
          (u.current = () => {
            m.close(), f.stop();
          }),
          {
            kind: "success",
            mediaStream: a,
            audioRecorderStream: m.stream,
          }
        );
      } catch (e) {
        h();
        const n =
          (e instanceof Error || e instanceof DOMException) &&
          "NotAllowedError" === e.name;
        return {
          kind: "failure",
          displayMessage: f(e, t.capturePlatform),
          source: `${r}.performStart.mock.connect`,
          error: e,
          severity: n ? "info" : "error",
        };
      }
    },
    hangUp: h,
  };
};
const r = n(14041 /* vendor/module-14041 */),
  o = n(87093 /* vendor/module-87093 */),
  i = n(22764 /* vendor/module-22764 */),
  a = n(96241 /* vendor/module-96241 */),
  s = n(83817 /* vendor/module-83817 */),
  l = n(88776 /* vendor/module-88776 */),
  c = n(64614 /* vendor/module-64614 */),
  u = n(353 /* vendor/module-353 */),
  d = n(44189 /* vendor/module-44189 */),
  p = n(66165 /* vendor/module-66165 */);
function f(e, t) {
  return (0, s.isMediaCaptureError)(e)
    ? (0, s.microphoneErrorMessage)(e, t)
    : e instanceof Error && u.ServerError.isError(e, "MOCK_POOL_UNAVAILABLE")
      ? (0, u.unwrapErrorMessage)(e)
      : "Couldn't start the mock interview. Try again in a moment.";
}
