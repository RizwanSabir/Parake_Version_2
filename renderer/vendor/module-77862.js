// vendor/module-77862.js — webpack module 77862
// params: (e, t, n) = (module, exports, require)
"use strict";
t.resolveSpeakerIdentity = function (e, t) {
  const { speaker: n } = e,
    o = n === r.ENROLLED_SPEAKER_LABEL,
    i = o ? null : n;
  if ("microphone" === e.type)
    return {
      party: t && n && !o ? "other-party" : "assisted-user",
      tag: i,
    };
  if ("share" === e.type) return { party: "other-party", tag: i };
  if ("combined" === e.type) {
    if (o) return { party: "assisted-user", tag: i };
    if (t && n) return { party: "other-party", tag: i };
  }
  return { party: "unknown", tag: i };
};
const r = n(57e3);
