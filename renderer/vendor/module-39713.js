// vendor/module-39713.js — webpack module 39713
// params: (e, t) = (module, exports, require)
"use strict";
t.createAnswerLatencyTracker = function () {
  const e = [],
    t = new Map(n.map((e) => [e, []])),
    o = new Map(),
    l = new Map(),
    c = [],
    u = [],
    d = [];
  let p = null,
    f = null,
    h = null,
    m = null,
    g = null;
  const y = (e) => {
    if (!g?.firstByte || g.timingTaken) return null;
    const { at: t, answer: n } = g.firstByte;
    if (null === n.triggerId) return null;
    g.timingTaken = !0;
    const { startedAt: r } = g;
    return {
      triggerId: n.triggerId,
      transcriptionLagMs: s(n.transcriptionLagMs),
      audioUnsentMs: s(n.audioUnsentMs),
      audioUnackedMs: s(n.audioUnackedMs),
      toRequestMs: s(n.toRequestMs),
      requestToResponseMs: s(n.requestToResponseMs),
      responseToFirstByteMs: s(n.responseToFirstTextMs),
      firstByteToAnswerMs: null === e ? null : s(Math.max(0, e - t)),
      totalMs: null === e || null === r ? null : s(Math.max(0, e - r)),
    };
  };
  return {
    recordQuestionFinal(t) {
      r(e, t.receivedAt - t.audioEndedAt), (f = t);
    },
    noteAutoCause(e) {
      h = e;
    },
    notePress(e) {
      m = e;
    },
    requestSent({ auto: e, recheck: n }, i) {
      const a = e ? (n ? "recheck" : (h ?? "autoEou")) : "manual";
      e && !n && (h = null);
      const s = f;
      f = null;
      let l = null,
        c = null,
        u = null,
        d = null;
      "manual" === a
        ? ((l = m), (m = null))
        : s &&
          ((l = s.audioEndedAt),
          (c = Math.max(0, s.receivedAt - s.audioEndedAt)),
          (u = s.audioUnsentMs ?? null),
          (d = s.audioUnackedMs ?? null)),
        o.set(a, (o.get(a) ?? 0) + 1),
        null !== l && r(t.get(a), i - l),
        (g = {
          kind: a,
          sentAt: i,
          startedAt: l,
          transcriptionLagMs: c,
          audioUnsentMs: u,
          audioUnackedMs: d,
          responseAt: null,
          answered: !1,
          firstByte: null,
          timingTaken: !1,
        });
    },
    responseReceived(e) {
      g && null === g.responseAt && (g.responseAt = e);
    },
    firstText(e, t) {
      if (!g || g.answered) return;
      g.answered = !0;
      const { kind: n, sentAt: o, startedAt: i, responseAt: a } = g;
      l.set(n, (l.get(n) ?? 0) + 1);
      const s = {
        kind: n,
        triggerId: t,
        totalMs: null === i ? null : Math.max(0, e - i),
        toRequestMs: null === i ? null : Math.max(0, o - i),
        requestToResponseMs: null === a ? null : Math.max(0, a - o),
        responseToFirstTextMs: null === a ? null : Math.max(0, e - a),
        transcriptionLagMs: g.transcriptionLagMs,
        audioUnsentMs: g.audioUnsentMs,
        audioUnackedMs: g.audioUnackedMs,
      };
      (g.firstByte = { at: e, answer: s }),
        null !== s.requestToResponseMs && r(c, s.requestToResponseMs),
        null !== s.responseToFirstTextMs && r(u, s.responseToFirstTextMs),
        null !== s.totalMs &&
          (r(d, s.totalMs),
          (!p || s.totalMs > p.totalMs) && (p = { ...s, totalMs: s.totalMs }));
    },
    firstAnswerWord: (e) => y(e),
    requestSettled: () => y(null),
    summary() {
      if (![...o.values()].some((e) => e > 0) && 0 === e.length) return null;
      const r = { ...i("transcriptionLagMs", e) };
      for (const e of n) {
        const n = a(e);
        (r[`sent${n}`] = o.get(e) ?? 0),
          (r[`answered${n}`] = l.get(e) ?? 0),
          Object.assign(r, i(`toRequest${n}Ms`, t.get(e)));
      }
      return (
        Object.assign(
          r,
          i("requestToResponseMs", c),
          i("responseToFirstTextMs", u),
          i("totalMs", d),
        ),
        p &&
          ((r.slowestTriggerId = p.triggerId),
          (r.slowestKind = p.kind),
          (r.slowestTotalMs = p.totalMs),
          (r.slowestTranscriptionLagMs = p.transcriptionLagMs),
          (r.slowestToRequestMs = p.toRequestMs),
          (r.slowestRequestToResponseMs = p.requestToResponseMs),
          (r.slowestResponseToFirstTextMs = p.responseToFirstTextMs)),
        r
      );
    },
  };
};
const n = ["autoEou", "autoIdle", "recheck", "manual"];
function r(e, t) {
  e.length < 5e3 && e.push(Math.max(0, t));
}
function o(e, t) {
  const n = Math.ceil((t / 100) * e.length);
  return e[Math.min(e.length, Math.max(1, n)) - 1];
}
function i(e, t) {
  if (0 === t.length) return {};
  const n = [...t].sort((e, t) => e - t);
  return {
    [`${e}N`]: n.length,
    [`${e}P50`]: Math.round(o(n, 50)),
    [`${e}P90`]: Math.round(o(n, 90)),
    [`${e}Max`]: Math.round(n.at(-1)),
  };
}
const a = (e) => e[0].toUpperCase() + e.slice(1),
  s = (e) => (null === e ? null : Math.round(e));
