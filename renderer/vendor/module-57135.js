// vendor/module-57135.js — webpack module 57135
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  return null === e.firstMicAtMs || e.micWords < 30
    ? null
    : e.firstMicAtMs + t.I;
}
function r(e) {
  return e.isStarting
    ? "starting"
    : e.isTranscribing
      ? e.isMuted
        ? "muted"
        : "recording"
      : e.hasError
        ? "failed"
        : "stopped";
}
function o({ pinnedDeviceId: e, devices: t }) {
  if (!e) return "default";
  if (0 === t.length) return "unknown";
  const n = t.find((t) => t.id === e);
  return n
    ? n.isDefault
      ? "pinned-default"
      : "pinned-other"
    : "pinned-missing";
}
function i({ browserDevices: e }) {
  const t = (t) =>
      e.find((e) => "audiooutput" === e.kind && e.deviceId === t)?.groupId,
    n = t("default"),
    r = t("communications");
  return n && r ? (n === r ? "same" : "different") : "unknown";
}
(t.wordCount = t.emptyCaptureSnapshotTally = t.I = void 0),
  (t.tallyCaptureSnapshotLines = function (e, n, r) {
    const o = n.filter(
      (t) =>
        t.completed && !e.countedIds.has(t.id) && t.createdAt.getTime() >= r,
    );
    if (0 === o.length) return e;
    const i = new Set(e.countedIds);
    let {
      firstMicAtMs: a,
      micWords: s,
      shareLines: l,
      callShareLines: c,
      lastShareAtMs: u,
      firstCallShareAtMs: d,
      shareWords: p,
    } = e;
    for (const e of o) {
      i.add(e.id);
      const n = e.createdAt.getTime();
      if ("share" === e.type) {
        l += 1;
        const r = (0, t.wordCount)(e.content);
        (p += r),
          r >= 3 && ((c += 1), (d = Math.min(d ?? n, n))),
          (u = Math.max(u ?? n, n));
      }
      ("microphone" !== e.type && "combined" !== e.type) ||
        ((s += (0, t.wordCount)(e.content)),
        (a = null === a ? n : Math.min(a, n)));
    }
    return {
      countedIds: i,
      firstMicAtMs: a,
      micWords: s,
      shareLines: l,
      callShareLines: c,
      lastShareAtMs: u,
      firstCallShareAtMs: d,
      shareWords: p,
    };
  }),
  (t.callUnderWayAtMs = n),
  (t.decideCaptureSnapshot = function (e, t) {
    return (function (e, t) {
      const r = n(e);
      return null !== r && t >= r;
    })(e, t)
      ? e.shareLines > 0
        ? "share-heard"
        : "share-unheard"
      : null;
  }),
  (t.shareCaptureState = r),
  (t.captureSnapshotProperties = function ({
    callSessionId: e,
    outcome: t,
    share: n,
    rejoined: a,
    meetingApp: s,
    unrecognizedMicApps: l,
    shareOutput: c,
  }) {
    return {
      callSessionId: e,
      outcome: t,
      shareState: r(n),
      rejoined: a,
      meetingApp: s,
      unrecognizedMicApps: l.slice(0, 3),
      ...(c && { shareOutputDevice: o(c), commsOutput: i(c) }),
    };
  }),
  (t.I = 6e4),
  (t.emptyCaptureSnapshotTally = {
    countedIds: new Set(),
    firstMicAtMs: null,
    micWords: 0,
    shareLines: 0,
    callShareLines: 0,
    lastShareAtMs: null,
    firstCallShareAtMs: null,
    shareWords: 0,
  }),
  (t.wordCount = (e) => e.split(/\s+/).filter(Boolean).length);
