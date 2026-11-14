// vendor/module-32973.js — webpack module 32973
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAudioInputOptions = function () {
  return (0, o.useDeviceOptions)(
    "audio-input-devices",
    i,
    r.buildAudioInputOptions,
  );
};
const r = n(71292 /* vendor/module-71292 */),
  o = n(79249 /* vendor/module-79249 */),
  i = () => navigator.mediaDevices.enumerateDevices();
