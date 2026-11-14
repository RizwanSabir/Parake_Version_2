// app/audio-processor-controller.js — webpack module 75796
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.startAudioProcessor = function () {
  o.start();
}),
  (t.getAudioProcessor = function () {
    return o;
  }),
  (t.stopAudioProcessor = function () {
    o.stop();
  });
const r = n(85648 /* vendor/other/module-85648 */),
  o = new (n(83340 /* app/native-audio-bindings */).AudioProcessor)(
    r.AUDIO_CONFIG,
  );
