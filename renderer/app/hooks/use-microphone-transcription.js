// app/hooks/use-microphone-transcription.js — webpack module 99295
// params: (e, t, n) = (module, exports, require)
t.useMicrophoneTranscription = function (e, t) {
  const n = (0, r.c)(8);
  let o;
  n[0] !== t
    ? ((o = void 0 === t ? {} : t), (n[0] = t), (n[1] = o))
    : (o = n[1]);
  const { onPermissionDenied: f, onEvent: h } = o,
    m = (0, s.useTranscriptionDeps)();
  let g, y;
  return (
    n[2] !== h
      ? ((g = (e) => {
          "device-fallback" === e.type &&
            (0, a.setDeviceId)("microphone", null).catch(c),
            h?.(e);
        }),
        (n[2] = h),
        (n[3] = g))
      : (g = n[3]),
    n[4] !== f || n[5] !== m || n[6] !== g
      ? ((y = {
          transcriptionDeps: m,
          processMicAudio: p,
          flushProcessedMicAudio: d,
          getPreferredDeviceId: u,
          onEvent: g,
          echoCancellation: !1,
          showToastInfo: l,
          trackEndedSeverity: "error",
          onPermissionDenied: f,
        }),
        (n[4] = f),
        (n[5] = m),
        (n[6] = g),
        (n[7] = y))
      : (y = n[7]),
    (0, i.useMicrophoneTranscription)(e, y)
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(44572 /* vendor/module-44572 */),
  i = n(65559 /* vendor/module-65559 */),
  a = n(65757 /* app/lib/get-device-id */),
  s = n(50225 /* app/hooks/use-transcription-deps */);
function l(e) {
  return o.toast.info(e);
}
function c() {}
function u() {
  return (0, a.getDeviceId)("microphone");
}
function d() {
  return window.electron.ipcRendererProxy.invoke(
    "renderer/audio-processor/flush-mic",
  );
}
function p(e) {
  return window.electron.ipcRendererProxy.invoke(
    "renderer/audio-processor/process-mic-audio",
    e,
  );
}
