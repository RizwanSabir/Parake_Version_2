// vendor/module-64614.js — webpack module 64614
// params: (e, t, n) = (module, exports, require)
"use strict";
t.connectOpenAIRealtime = async function ({
  clientSecret: e,
  onFatalError: t,
  onUsage: n,
  micTrack: o,
}) {
  const i = new RTCPeerConnection(),
    a = new MediaStream(),
    s = new AbortController(),
    l = document.createElement("audio");
  (l.autoplay = !0), (l.style.display = "none"), document.body.appendChild(l);
  let c,
    u,
    d,
    p,
    f = null,
    h = !1,
    m = !1;
  const g = () => {
      try {
        c && clearTimeout(c),
          u && clearTimeout(u),
          s.abort(),
          i.getSenders().forEach((e) => e.track?.stop()),
          f?.getTracks().forEach((e) => e.stop()),
          i.close();
      } finally {
        (l.srcObject = null), l.remove();
      }
    },
    y = (e) => {
      if (!m)
        if (((m = !0), h))
          try {
            t?.(e);
          } finally {
            g();
          }
        else p?.(e);
    };
  try {
    const t = new Promise((e, t) => {
      (p = t),
        (i.ontrack = (t) => {
          t.streams[0]?.getTracks().forEach((e) => a.addTrack(e)),
            t.streams[0] || a.addTrack(t.track),
            l.srcObject || ((l.srcObject = a), l.play().catch(() => {})),
            c && clearTimeout(c),
            (h = !0),
            e();
        });
    });
    return (
      (i.onconnectionstatechange = () => {
        "failed" === i.connectionState &&
          y(new Error("Realtime voice connection failed"));
      }),
      (f = await (async function (e) {
        return e
          ? new MediaStream([e.clone()])
          : navigator.mediaDevices.getUserMedia({
              audio: {
                echoCancellation: !0,
                noiseSuppression: !0,
                autoGainControl: !0,
              },
            });
      })(o)),
      f.getAudioTracks().forEach((e) => i.addTrack(e, f)),
      (d = i.createDataChannel("oai-events")),
      (d.onopen = () => {
        d?.send(JSON.stringify({ type: "response.create" }));
      }),
      (d.onmessage = (e) => {
        let t;
        try {
          t = JSON.parse(String(e.data));
        } catch {
          return;
        }
        if (n) {
          const e = (0, r.parseRealtimeTurnUsage)(t);
          e && n(e);
        }
      }),
      (d.onerror = () => y(new Error("Realtime data channel error"))),
      (u = setTimeout(
        () => y(new Error("Timed out during realtime SDP exchange")),
        15e3,
      )),
      await Promise.race([
        (async () => {
          const t = await i.createOffer();
          await i.setLocalDescription(t);
          const n = await fetch("https://api.openai.com/v1/realtime/calls", {
            method: "POST",
            body: t.sdp,
            headers: {
              Authorization: `Bearer ${e}`,
              "Content-Type": "application/sdp",
            },
            signal: s.signal,
          });
          if (!n.ok)
            throw new Error(
              `Realtime SDP exchange failed (${n.status}): ${await n.text().catch(() => "")}`,
            );
          const r = await n.text();
          await i.setRemoteDescription({ type: "answer", sdp: r });
        })(),
        t,
      ]),
      clearTimeout(u),
      (u = void 0),
      h ||
        (c = setTimeout(
          () => y(new Error("Timed out waiting for interviewer audio")),
          15e3,
        )),
      await t,
      { remoteStream: a, stop: g }
    );
  } catch (e) {
    throw (g(), e);
  }
};
const r = n(8204 /* vendor/module-8204 */);
