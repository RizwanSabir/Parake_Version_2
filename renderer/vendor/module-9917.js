// vendor/module-9917.js — webpack module 9917
// params: (e, t, n) = (module, exports, require)
"use strict";
t.createAudioRecorder = async function ({
  stream: e,
  onAudio: t,
  onError: n,
  workletUrl: o,
}) {
  const i = new AudioContext(r.AUDIO_CONFIG);
  try {
    "running" !== i.state && (await i.resume()),
      await i.audioWorklet.addModule(o);
  } catch (e) {
    throw (i.close(), e);
  }
  const a = i.createMediaStreamSource(e),
    s = new AudioWorkletNode(i, "pcm-framer", {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: [1],
      processorOptions: r.AUDIO_CONFIG,
    }),
    l = i.createGain();
  l.gain.value = 0;
  let c = "inactive";
  function u() {
    (s.port.onmessage = null),
      (s.onprocessorerror = null),
      a.disconnect(),
      s.disconnect(),
      l.disconnect(),
      (c = "inactive");
  }
  return {
    get state() {
      return c;
    },
    start() {
      "recording" !== c &&
        (s.port.postMessage("reset"),
        (s.port.onmessage = (e) => {
          t(e.data);
        }),
        (s.onprocessorerror = n),
        a.connect(s),
        s.connect(l),
        l.connect(i.destination),
        (c = "recording"));
    },
    stop() {
      u();
    },
    close() {
      u(), s.port.postMessage("stop"), i.close();
    },
  };
};
const r = n(83341 /* vendor/module-83341 */);
