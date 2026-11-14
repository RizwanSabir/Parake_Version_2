// app/lib/initialize-speechmatics-session.js — webpack module 72836
// params: (e, t, n) = (module, exports, require)
"use strict";
t.initializeSpeechmaticsSession = void 0;
const r = n(29521 /* vendor/module-29521 */),
  o = n(83341 /* vendor/module-83341 */),
  i = n(39360 /* app/lib/brand-sounds-like */),
  a = n(44612 /* vendor/module-44612 */);
function s(e, t) {
  if ("AddTranscript" !== e.message && "AddPartialTranscript" !== e.message)
    throw new Error(
      "This function should only be called for AddTranscript and AddPartialTranscript messages",
    );
  const n = [];
  let r = null;
  for (const t of e.results) {
    const e = t.alternatives?.sort((e, t) => t.confidence - e.confidence)[0];
    if (!e) continue;
    const o = e.speaker,
      i = "UU" !== o && o ? (/^S\d+$/.test(o) ? o.slice(1) : o) : null;
    null === i || (r && i === r.speaker)
      ? r || (r = { speaker: null, results: [] })
      : (r && r.results.length > 0 && n.push(r),
        (r = { speaker: i, results: [] })),
      r.results.push({ type: t.type, content: e.content });
  }
  r && r.results.length > 0 && n.push(r);
  for (const e of n) {
    let n = "";
    for (const t of e.results) n += ("word" === t.type ? " " : "") + t.content;
    n && t({ content: n, speaker: e.speaker });
  }
}
class l extends Error {
  kind;
  constructor(e) {
    super(e), (this.kind = e);
  }
}
const c = new Set(["ja"]);
async function u({
  speechmaticsApiKey: e,
  callSessionId: t,
  language: n,
  speakerDiarization: r,
  speakers: o,
  additionalVocab: c,
  onAddTranscript: u,
  onAddPartialTranscript: p,
  onEndOfUtterance: f,
  onError: h,
  onWarning: m,
  onInfo: g,
  onServerEndedUnexpectedly: y,
}) {
  const v = c?.length
      ? c.map((e) => {
          const t = (0, i.brandSoundsLike)(e);
          return t ? { content: e, sounds_like: [...t] } : { content: e };
        })
      : void 0,
    b = new d({
      url: a.SPEECHMATICS_REALTIME_URL,
      ...(v ? { connectionTimeout: 15e3 } : {}),
    });
  let S = !0,
    _ = !1;
  b.addEventListener("receiveMessage", ({ data: e }) => {
    if (!_)
      if (S && v && "Error" === e.message && "invalid_config" === e.type)
        _ = !0;
      else if ("AddTranscript" === e.message) {
        const t = (function (e) {
          if ("AddTranscript" !== e.message) return null;
          let t = null;
          for (const n of e.results)
            "punctuation" !== n.type &&
              n.alternatives?.length &&
              (t = Math.max(t ?? 0, n.end_time));
          return t;
        })(e);
        s(e, (e) => u(null === t ? e : { ...e, audioEndSeconds: t }));
      } else if ("AddPartialTranscript" === e.message) s(e, p);
      else if ("EndOfTranscript" === e.message)
        p({ content: "", speaker: null }), b.wasStopped || y?.();
      else if ("EndOfUtterance" === e.message)
        f(b.isForceEndOfUtteranceInProgress);
      else if ("RecognitionStarted" === e.message) b.sessionId = e.id ?? null;
      else if ("AudioAdded" === e.message)
        (b.lastAudioAddedAt = Date.now()), (b.ackedAudioFrames = e.seq_no);
      else if ("Warning" === e.message)
        m?.({
          type: e.type,
          reason: e.reason,
          code: e.code,
          durationLimit: e.duration_limit,
        });
      else if ("Info" === e.message)
        g?.({
          type: e.type,
          reason: e.reason,
          code: e.code,
          quality: e.quality,
          usage: e.usage,
          quota: e.quota,
          lastUpdated: e.last_updated,
        });
      else if ("Error" === e.message) {
        if (
          b.wasStopped &&
          e.reason.includes("Stream doesn't contain enough data.")
        )
          return;
        h({ reason: e.reason, type: e.type, code: e.code });
      }
  });
  try {
    await b.start(
      e,
      (0, a.buildSpeechmaticsSessionConfig)({
        language: n,
        transcription: {
          diarization: r ? "speaker" : void 0,
          speaker_diarization_config:
            o && o.length > 0 ? { speakers: o } : void 0,
          conversation_config: {
            end_of_utterance_silence_trigger: (0, a.silenceTriggerSeconds)(
              t ?? null,
            ),
          },
          enable_partials: !0,
          additional_vocab: v,
        },
      }),
    );
  } catch (e) {
    const t =
      e instanceof Error &&
      e.message.includes("waiting for RecognitionStarted");
    if (!v || (!_ && !t)) throw e;
    const n = _ ? "refused" : "timed_out";
    throw (
      ((_ = !0),
      "open" === b.socketState &&
        b.stopRecognition({ noTimeout: !0 }).catch(() => {}),
      new l(n))
    );
  }
  return (S = !1), b;
}
t.initializeSpeechmaticsSession = async (e) => {
  const t = c.has((0, a.parseLanguageCode)(e.language).language)
    ? null
    : e.additionalVocab;
  if (!t?.length) return u({ ...e, additionalVocab: null });
  try {
    return await u({ ...e, additionalVocab: t });
  } catch (t) {
    if (!(t instanceof l)) throw t;
    return e.onVocabularyRejected?.(t.kind), u({ ...e, additionalVocab: null });
  }
};
class d extends r.RealtimeClient {
  wasStopped = !1;
  isForceEndOfUtteranceInProgress = !1;
  sessionId = null;
  lastAudioAddedAt = null;
  ackedAudioFrames = 0;
  sentAudioMs = 0;
  sentAudioFrames = 0;
  audioPieces = [];
  sendAudio(e, t = Date.now()) {
    super.sendAudio(e);
    const n = this.sentAudioMs;
    (this.sentAudioFrames += 1),
      (this.sentAudioMs +=
        ((0, o.audioBytes)(e) /
          Float32Array.BYTES_PER_ELEMENT /
          o.AUDIO_CONFIG.sampleRate) *
        1e3);
    const r = t - this.sentAudioMs,
      i = this.audioPieces.at(-1);
    (!i || Math.abs(r - i.wallMinusAudioMs) >= 200) &&
      this.audioPieces.push({ startMs: n, wallMinusAudioMs: r });
  }
  capturedAt(e) {
    const t =
      this.audioPieces.findLast(({ startMs: t }) => t < e) ??
      this.audioPieces[0];
    return t ? e + t.wallMinusAudioMs : null;
  }
  get unsentAudioMs() {
    const e = this.audioPieces[0];
    return e
      ? Math.max(0, Date.now() - e.wallMinusAudioMs - this.sentAudioMs)
      : 0;
  }
  get unackedAudioMs() {
    return 0 === this.sentAudioFrames
      ? 0
      : (Math.max(0, this.sentAudioFrames - this.ackedAudioFrames) *
          this.sentAudioMs) /
          this.sentAudioFrames;
  }
  async forceEndOfUtterance() {
    Date.now(),
      super.forceEndOfUtterance(),
      (this.isForceEndOfUtteranceInProgress = !0);
    const e = new Promise((e) => {
        setTimeout(() => e("timeout"), 3e3);
      }),
      t = new Promise((e) => {
        const t = (n) => {
          "EndOfUtterance" === n.data.message &&
            (this.removeEventListener("receiveMessage", t),
            e("end of utterance"));
        };
        this.addEventListener("receiveMessage", t);
      });
    await Promise.race([e, t]), (this.isForceEndOfUtteranceInProgress = !1);
  }
  stopRecognition(e) {
    return (this.wasStopped = !0), super.stopRecognition(e);
  }
}
