// vendor/other/module-85324.js — webpack module 85324
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.buildFeatureFlags =
  t.loopbackAudioTypes =
  t.featureSwitchKey =
  t.defaultSourcesOptions =
  t.ipcEvents =
    void 0),
  (t.ipcEvents = {
    enableLoopbackAudio: "enable-loopback-audio",
    disableLoopbackAudio: "disable-loopback-audio",
  }),
  (t.defaultSourcesOptions = { types: ["screen"] }),
  (t.featureSwitchKey = "enable-features"),
  (t.loopbackAudioTypes = {
    loopback: "loopback",
    loopbackWithMute: "loopbackWithMute",
  });
const n = {
  pulseaudioLoopbackForScreenShare: "PulseaudioLoopbackForScreenShare",
  macLoopbackAudioForScreenShare: "MacLoopbackAudioForScreenShare",
};
t.buildFeatureFlags = ({ otherEnabledFeatures: e, forceCoreAudioTap: t }) => {
  const r = [...Object.values(n), ...(e ?? [])];
  return (
    t
      ? r.push("MacCatapSystemAudioLoopbackCapture")
      : r.push("MacSckSystemAudioLoopbackOverride"),
    r.join(",")
  );
};
