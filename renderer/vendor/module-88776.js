// vendor/module-88776.js — webpack module 88776
// params: (e, t) = (module, exports, require)
"use strict";
t.mixAudioStreams = async function (e) {
  const t = new AudioContext(),
    n = t.createMediaStreamDestination();
  for (const r of e) t.createMediaStreamSource(r).connect(n);
  return (
    "suspended" === t.state && (await t.resume()),
    {
      stream: n.stream,
      close: () => {
        t.close().catch(() => {});
      },
    }
  );
};
