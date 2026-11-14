// vendor/module-25642.js — webpack module 25642
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.stringifyUnknownError = s),
  (t.unknownToReportFields = function (e) {
    if (e instanceof Error)
      return {
        errorName: e.name,
        message: i(e.message) || e.name,
        cause: i(e.cause ? s(e.cause) : void 0),
        stack: i(e.stack),
      };
    const t = a(e) ? e.constructor.name : "UnknownClientError";
    return { errorName: t, message: i(s(e)) || t };
  }),
  (t.buildTranscriptionContext = function ({
    reason: e,
    speechmaticsClient: t,
    audioRecorder: n,
    status: i,
    getConnectivitySnapshot: a = () => r.connectivityService.getSnapshot(),
  }) {
    return {
      reason: e,
      socketState: t?.socketState ?? null,
      audioRecorderState: n?.state ?? null,
      speechmaticsSessionId: t?.sessionId ?? null,
      lastAudioAddedAt: t?.lastAudioAddedAt ?? null,
      timeSinceLastAudioAddedMs: t?.lastAudioAddedAt
        ? Date.now() - t.lastAudioAddedAt
        : null,
      status: i,
      visibilityState:
        "undefined" != typeof document ? document.visibilityState : null,
      hidden: "undefined" != typeof document ? document.hidden : null,
      [o.CONNECTIVITY_CONTEXT_KEY]: c(a()),
      reportedAt: new Date().toISOString(),
    };
  }),
  (t.stampErrorOccurrence = function (e, { snapshot: t, occurredAt: n }) {
    return {
      ...e,
      contextData: {
        ...e.contextData,
        [o.CONNECTIVITY_CONTEXT_KEY]: c(t),
        occurredAt: n,
      },
    };
  });
const r = n(63506 /* vendor/module-63506 */),
  o = n(42811 /* vendor/module-42811 */);
function i(e) {
  if (void 0 !== e)
    return e.length > 4988 ? `${e.slice(0, 4988)}…[truncated]` : e;
}
function a(e) {
  return "undefined" != typeof Event && e instanceof Event;
}
function s(e) {
  if (e instanceof Error) return String(e);
  if (a(e)) {
    const t = [`${e.constructor.name} "${e.type}"`];
    e instanceof ErrorEvent && e.message && t.push(`(${e.message})`);
    const n = e.target?.constructor?.name;
    return n && t.push(`from ${n}`), t.join(" ");
  }
  if ("object" == typeof e && null !== e)
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  return String(e);
}
const l = (e) => (null === e ? null : new Date(e).toISOString());
function c(e) {
  return {
    ...e,
    lastCheckedAt: l(e.lastCheckedAt),
    offlineSince: l(e.offlineSince),
  };
}
