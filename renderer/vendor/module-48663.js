// vendor/module-48663.js — webpack module 48663
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.isAssistedUserBubble = function (e, t) {
  return (
    "assisted-user" ===
    (0, r.resolveSpeakerIdentity)(e, t.enrolledSpeakerLabel).party
  );
}),
  (t.formatBubbleSpeaker = function (e, t) {
    const { party: n, tag: o } = (0, r.resolveSpeakerIdentity)(
        e,
        t.enrolledSpeakerLabel,
      ),
      i = "interview" === t.mode ? "Interviewer" : "Caller";
    return "assisted-user" === n
      ? "You"
      : "other-party" === n
        ? o
          ? `${i} ${o}`
          : i
        : o
          ? `Combined ${o}`
          : "Combined";
  });
const r = n(77862 /* vendor/module-77862 */);
