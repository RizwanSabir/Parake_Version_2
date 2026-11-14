// vendor/module-83341.js — webpack module 83341
// params: (e, t) = (module, exports, require)
"use strict";
(t.audioBytes = t.AUDIO_CONFIG = void 0),
  (t.AUDIO_CONFIG = { sampleRate: 16e3 }),
  (t.audioBytes = (e) =>
    e instanceof Blob
      ? e.size
      : ArrayBuffer.isView(e) || e instanceof ArrayBuffer
        ? e.byteLength
        : 0);
