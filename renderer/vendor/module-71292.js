// vendor/module-71292.js — webpack module 71292
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.buildAudioInputOptions = function (e) {
  const t = e.filter(
    (e) =>
      "audioinput" === e.kind &&
      "" !== e.deviceId &&
      "default" !== e.deviceId &&
      "communications" !== e.deviceId,
  );
  return [
    r.SYSTEM_DEFAULT_OPTION,
    ...t.map((e, t) => ({
      value: e.deviceId,
      label: e.label || `Microphone ${t + 1}`,
    })),
  ];
}),
  (t.buildAudioOutputOptions = function (e) {
    return [
      r.SYSTEM_DEFAULT_OPTION,
      ...e.map((e) => ({
        value: e.id,
        label: e.isDefault ? `${e.name} (default)` : e.name,
      })),
    ];
  });
const r = n(98479 /* vendor/module-98479 */);
