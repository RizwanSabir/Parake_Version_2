// app/lib/get-device-id.js — webpack module 65757
// params: (e, t) = (module, exports, require)
"use strict";
(t.getDeviceId = function (e) {
  return window.electron.ipcRendererProxy.invoke(n[e]);
}),
  (t.setDeviceId = function (e, t) {
    return window.electron.ipcRendererProxy.invoke(r[e], t);
  });
const n = {
    microphone: "renderer/get-microphone-device-id",
    "share-output": "renderer/get-share-output-device-id",
  },
  r = {
    microphone: "renderer/set-microphone-device-id",
    "share-output": "renderer/set-share-output-device-id",
  };
