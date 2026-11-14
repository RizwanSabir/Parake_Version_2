// app/loopback-audio-stream.js — webpack module 73833
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.getLoopbackAudioMediaStream = void 0;
const r = n(84157 /* external/electron */),
  o = n(85324 /* vendor/other/module-85324 */);
t.getLoopbackAudioMediaStream = async (e = {}) => {
  const { removeVideo: t = !0 } = e;
  await r.ipcRenderer.invoke(o.ipcEvents.enableLoopbackAudio);
  const n = await navigator.mediaDevices.getDisplayMedia({
    video: !0,
    audio: !0,
  });
  return (
    t &&
      n.getVideoTracks().forEach((e) => {
        e.stop(), n.removeTrack(e);
      }),
    await r.ipcRenderer.invoke(o.ipcEvents.disableLoopbackAudio),
    n
  );
};
