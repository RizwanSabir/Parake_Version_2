// vendor/other/module-39423.js — webpack module 39423
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.initMain = void 0;
const r = n(84157 /* external/electron */),
  o = n(85324 /* vendor/other/module-85324 */);
t.initMain = (e = {}) => {
  const {
      forceCoreAudioTap: t = !1,
      loopbackWithMute: n = !1,
      onAfterGetSources: i,
      sessionOverride: s,
      sourcesOptions: a = o.defaultSourcesOptions,
    } = e,
    c = r.app.commandLine.getSwitchValue(o.featureSwitchKey)?.split(",");
  r.app.commandLine.hasSwitch(o.featureSwitchKey) &&
    r.app.commandLine.removeSwitch(o.featureSwitchKey);
  const u = (0, o.buildFeatureFlags)({
    otherEnabledFeatures: c,
    forceCoreAudioTap: t,
  });
  r.app.commandLine.appendSwitch(o.featureSwitchKey, u),
    r.ipcMain.handle(o.ipcEvents.enableLoopbackAudio, () => {
      (s || r.session.defaultSession).setDisplayMediaRequestHandler(
        async (e, t) => {
          let s;
          try {
            (s = await r.desktopCapturer.getSources(a)), i && (s = i(s));
          } catch {
            throw new Error(
              "Failed to get sources for system audio loopback capture.",
            );
          }
          if (0 === s.length)
            throw new Error(
              "No sources found for system audio loopback capture.",
            );
          t({
            video: s[0],
            audio: n
              ? o.loopbackAudioTypes.loopbackWithMute
              : o.loopbackAudioTypes.loopback,
          });
        },
      );
    }),
    r.ipcMain.handle(o.ipcEvents.disableLoopbackAudio, () => {
      (s || r.session.defaultSession).setDisplayMediaRequestHandler(null);
    });
};
