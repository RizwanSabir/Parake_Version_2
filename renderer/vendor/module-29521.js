// vendor/module-29521.js — webpack module 29521
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { RealtimeClient: () => c });
var r = class extends EventTarget {
    dispatchTypedEvent(e, t) {
      return super.dispatchEvent(t);
    }
  },
  o = Object.defineProperty,
  i = (e, t, n) =>
    ((e, t, n) =>
      t in e
        ? o(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n))(e, "symbol" != typeof t ? t + "" : t, n);
class a extends Event {
  constructor(e) {
    super("socketStateChange"), i(this, "socketState", e);
  }
}
class s extends Event {
  constructor(e) {
    super("receiveMessage"), i(this, "data", e);
  }
}
class l extends Event {
  constructor(e) {
    super("sendMessage"), i(this, "data", e);
  }
}
class c extends r {
  constructor(e = {}) {
    super(),
      i(this, "url"),
      i(this, "appId"),
      i(this, "enableLegacy"),
      i(this, "timeout"),
      i(this, "socket"),
      i(this, "lastAudioAddedSeqNo", 0),
      (this.url = e.url ?? "wss://eu2.rt.speechmatics.com/v2"),
      (this.appId = e.appId),
      (this.enableLegacy = e.enableLegacy ?? !1),
      (this.timeout = e.connectionTimeout ?? 1e4);
  }
  get socketState() {
    if (this.socket)
      return {
        [WebSocket.CONNECTING]: "connecting",
        [WebSocket.OPEN]: "open",
        [WebSocket.CLOSING]: "closing",
        [WebSocket.CLOSED]: "closed",
      }[this.socket.readyState];
  }
  async connect(e) {
    return new Promise((t, n) => {
      const r = new URL(this.url);
      r.searchParams.append("jwt", e),
        this.appId && r.searchParams.append("sm-app", this.appId),
        this.enableLegacy &&
          r.searchParams.append("sm-enable-legacy-rt", "true"),
        (this.socket = new WebSocket(r.toString())),
        this.dispatchTypedEvent("socketStateChange", new a(this.socketState)),
        this.socket.addEventListener(
          "open",
          () => {
            t();
          },
          { once: !0 },
        ),
        this.socket.addEventListener("error", (e) => {
          this.dispatchTypedEvent("socketStateChange", new a(this.socketState)),
            n(e);
        }),
        this.socket.addEventListener("close", () => {
          this.dispatchTypedEvent("socketStateChange", new a(this.socketState));
        }),
        this.socket.addEventListener("message", (e) => {
          const t = JSON.parse(e.data);
          (function (e) {
            return (
              "object" == typeof e &&
              null !== e &&
              "message" in e &&
              "string" == typeof e.message
            );
          })(t) &&
            ("AudioAdded" === t.message &&
              (this.lastAudioAddedSeqNo = t.seq_no),
            this.dispatchTypedEvent("receiveMessage", new s(t)));
        });
    });
  }
  sendMessage(e) {
    if (!this.socket) throw new d("Client socket not initialized");
    this.socket.send(JSON.stringify(e)),
      this.dispatchTypedEvent("sendMessage", new l(e));
  }
  sendAudio(e) {
    if (!this.socket || this.socket.readyState !== this.socket.OPEN)
      throw new d("Socket not ready to receive audio");
    this.socket.send(e);
  }
  async getSpeakers(e = {}) {
    this.sendMessage({ message: "GetSpeakers", final: e.final });
    const t = new Promise((e, t) => {
      this.addEventListener("receiveMessage", ({ data: n }) => {
        "SpeakersResult" === n.message
          ? e(n)
          : "Error" === n.message && t(new Error(n.type));
      }),
        this.addEventListener("socketStateChange", (e) => {
          "closed" === e.socketState && t(new Error("Socket closed"));
        });
    });
    return e.timeout ? Promise.race([t, p(e.timeout, "SpeakersResult")]) : t;
  }
  async start(e, t) {
    t.transcription_config, await this.connect(e);
    const n = new Promise((e, n) => {
      this.addEventListener("receiveMessage", ({ data: t }) => {
        "RecognitionStarted" === t.message
          ? e(t)
          : "Error" === t.message && n(new Error(t.type));
      });
      const r = {
        audio_format: u,
        ...t,
        message: "StartRecognition",
      };
      this.sendMessage(r);
    });
    return Promise.race([n, p(this.timeout, "RecognitionStarted")]);
  }
  async stopRecognition({ noTimeout: e } = {}) {
    const t = new Promise((e) => {
      this.addEventListener("receiveMessage", ({ data: t }) => {
        "EndOfTranscript" === t.message && (this.socket?.close(), e());
      }),
        this.sendMessage({
          message: "EndOfStream",
          last_seq_no: this.lastAudioAddedSeqNo,
        });
    });
    if (!e) return Promise.race([t, p(this.timeout, "EndOfTranscript")]);
  }
  setRecognitionConfig(e) {
    this.sendMessage({
      message: "SetRecognitionConfig",
      transcription_config: e,
    });
  }
  forceEndOfUtterance(e) {
    this.sendMessage({ message: "ForceEndOfUtterance", channel: e });
  }
}
const u = { type: "file" };
class d extends Error {
  constructor(e, t) {
    super(e, t), (this.name = "SpeechmaticsRealtimeError");
  }
}
function p(e, t) {
  return new Promise((n, r) => {
    setTimeout(() => r(new d(`Timed out after ${e}ms waiting for ${t}`)), e);
  });
}
