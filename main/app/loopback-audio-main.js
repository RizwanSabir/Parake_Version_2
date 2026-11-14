// app/loopback-audio-main.js — webpack module 41112
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.initMain = t.getLoopbackAudioMediaStream = void 0);
const r = n(73833 /* app/loopback-audio-stream */);
Object.defineProperty(t, "getLoopbackAudioMediaStream", {
  enumerable: !0,
  get: function () {
    return r.getLoopbackAudioMediaStream;
  },
});
const o = n(39423 /* vendor/other/module-39423 */);
Object.defineProperty(t, "initMain", {
  enumerable: !0,
  get: function () {
    return o.initMain;
  },
}),
  (e.exports = { initMain: o.initMain });
