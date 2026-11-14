// app/hooks/use-audio-output-options.js — webpack module 69146
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAudioOutputOptions = function () {
  return (0, o.useDeviceOptions)(
    "audio-output-devices",
    i,
    r.buildAudioOutputOptions,
  );
};
const r = n(71292 /* vendor/module-71292 */),
  o = n(79249 /* vendor/module-79249 */),
  i = () =>
    window.electron.ipcRendererProxy.invoke("renderer/list-output-devices");
