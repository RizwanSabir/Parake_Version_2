// vendor/module-44612.js — webpack module 44612
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.SPEECHMATICS_REALTIME_URL = t.SPEECHMATICS_MODEL = void 0),
  (t.silenceTriggerSeconds = function (e) {
    const t = parseInt(e?.slice(0, 8) ?? "", 16) % 100;
    return o[Math.floor(t / 10)] ?? 1;
  }),
  (t.parseLanguageCode = i),
  (t.buildSpeechmaticsSessionConfig = function ({
    language: e,
    transcription: n,
  }) {
    const { language: o, domain: a } = i(e);
    return {
      transcription_config: {
        language: o,
        domain: a,
        model: t.SPEECHMATICS_MODEL,
        max_delay: 1.5,
        ...n,
      },
      audio_format: {
        type: "raw",
        encoding: "pcm_f32le",
        sample_rate: r.AUDIO_CONFIG.sampleRate,
      },
    };
  });
const r = n(83341 /* vendor/module-83341 */);
(t.SPEECHMATICS_MODEL = "enhanced"),
  (t.SPEECHMATICS_REALTIME_URL = "wss://global.rt.speechmatics.com/v2");
const o = [0.3, 0.4];
function i(e) {
  if (!e.includes(":")) return { language: e, domain: void 0 };
  const [t, n] = e.split(":");
  return { language: t, domain: n };
}
