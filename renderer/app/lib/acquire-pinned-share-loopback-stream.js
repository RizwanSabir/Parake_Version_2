// app/lib/acquire-pinned-share-loopback-stream.js — webpack module 50632
// params: (e, t, n) = (module, exports, require)
"use strict";
t.acquirePinnedShareLoopbackStream = async function ({
  onShareDeviceFallback: e,
} = {}) {
  if ("win32" !== window.electron.platform) return null;
  let t,
    n = null;
  try {
    n = await (0, r.getDeviceId)("share-output");
  } catch {
    return null;
  }
  if (!n) return null;
  try {
    t = await window.electron.ipcRendererProxy.invoke(
      "renderer/start-share-loopback",
      n,
    );
  } catch (e) {
    t = { ok: !1, error: e instanceof Error ? e.message : String(e) };
  }
  return t.ok
    ? {
        kind: "success",
        mediaStream: new MediaStream(),
        audioRecorderStream: new MediaStream(),
        createRecorder: async ({ onAudio: e }) =>
          (0, o.createIpcLoopbackRecorder)({ onAudio: e }),
      }
    : ((0, r.setDeviceId)("share-output", null).catch(() => {}), e?.(), null);
};
const r = n(65757 /* app/lib/get-device-id */),
  o = n(27495 /* app/lib/start */);
