// vendor/module-61557.js — webpack module 61557
// params: (e, t, n) = (module, exports, require)
"use strict";
t.encodeWav = function (e, t = r.AUDIO_CONFIG.sampleRate) {
  const n = 2 * e.reduce((e, t) => e + t.length, 0),
    i = new DataView(new ArrayBuffer(44 + n));
  o(i, 0, "RIFF"),
    i.setUint32(4, 36 + n, !0),
    o(i, 8, "WAVE"),
    o(i, 12, "fmt "),
    i.setUint32(16, 16, !0),
    i.setUint16(20, 1, !0),
    i.setUint16(22, 1, !0),
    i.setUint32(24, t, !0),
    i.setUint32(28, 2 * t, !0),
    i.setUint16(32, 2, !0),
    i.setUint16(34, 16, !0),
    o(i, 36, "data"),
    i.setUint32(40, n, !0);
  let a = 44;
  for (const t of e)
    for (const e of t) {
      const t = Math.max(-1, Math.min(1, e));
      i.setInt16(a, Math.round(32767 * t), !0), (a += 2);
    }
  return new Blob([i.buffer], { type: "audio/wav" });
};
const r = n(83341 /* vendor/module-83341 */);
function o(e, t, n) {
  for (let r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r));
}
