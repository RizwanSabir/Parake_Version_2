// vendor/module-81610.js — webpack module 81610
// params: (e, t, n) = (module, exports, require)
"use strict";
t.startSpeakerEnrollmentSession = async function ({
  speechmaticsApiKey: e,
  language: t,
  onClosed: n,
}) {
  const a = new r.RealtimeClient({
      url: i.SPEECHMATICS_REALTIME_URL,
    }),
    s = (function (e) {
      let t,
        r = !1,
        o = null;
      const i = new Promise((e, n) => {
        t = n;
      });
      i.catch(() => {});
      const a = (e) => {
        r ||
          o ||
          ((o = e),
          t(e),
          ((e) => {
            n?.(e);
          })(e));
      };
      return (
        e.addEventListener("socketStateChange", ({ socketState: e }) => {
          "closed" === e &&
            a(new Error("Speechmatics enrollment session closed"));
        }),
        e.addEventListener("receiveMessage", ({ data: e }) => {
          "Error" === e.message &&
            a(new Error(`Speechmatics enrollment session error: ${e.type}`));
        }),
        {
          ended: i,
          get error() {
            return o;
          },
          report: a,
          expectClose: () => {
            r = !0;
          },
        }
      );
    })(a),
    l = new Promise((e) => {
      a.addEventListener("receiveMessage", ({ data: t }) => {
        "AddTranscript" === t.message && e();
      });
    }),
    c = () => (
      s.expectClose(), a.stopRecognition({ noTimeout: !0 }).catch(() => {})
    );
  try {
    await a.start(
      e,
      (0, i.buildSpeechmaticsSessionConfig)({
        language: t,
        transcription: {
          diarization: "speaker",
          speaker_diarization_config: { get_speakers: !0 },
        },
      }),
    );
  } catch (e) {
    throw (await c(), e);
  }
  return {
    sendAudio: (e) => {
      if (!s.error)
        try {
          a.sendAudio(e);
        } catch (e) {
          s.report(e instanceof Error ? e : new Error(String(e)));
        }
    },
    finish: async () => {
      await (async function (e, t) {
        let n;
        const r = new Promise((e) => {
          n = setTimeout(e, 8e3);
        });
        try {
          await Promise.race([t, r]);
        } finally {
          clearTimeout(n);
        }
      })(0, Promise.race([s.ended, l]));
      const e = await Promise.race([
          s.ended,
          a.getSpeakers({ final: !1, timeout: 1e4 }),
        ]),
        t = (0, o.extractSpeakerIdentifiers)(e);
      return await c(), t;
    },
    abort: () => {
      c();
    },
  };
};
const r = n(29521 /* vendor/module-29521 */),
  o = n(57e3),
  i = n(44612 /* vendor/module-44612 */);
