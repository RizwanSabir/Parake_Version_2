// vendor/module-42541.js — webpack module 42541
// params: (e, t) = (module, exports, require)
"use strict";
(t.FAILURE_MESSAGES =
  t.VOICE_LEVEL_THRESHOLD =
  t.MAX_SAMPLE_SECONDS =
  t.MIN_SAMPLE_SECONDS =
    void 0),
  (t.resolveVoiceRecorderStatus = function ({
    elapsedSeconds: e,
    secondsSinceVoice: n,
    hasHeardVoice: r,
    failure: o,
    hasStopped: i = !1,
  }) {
    const a = e >= t.MAX_SAMPLE_SECONDS,
      s = e >= t.MIN_SAMPLE_SECONDS,
      l = `${Math.min(Math.floor(e), t.MAX_SAMPLE_SECONDS)} of ${t.MAX_SAMPLE_SECONDS} seconds`;
    return o
      ? {
          message: null,
          tone: "error",
          counter: null,
          isComplete: !1,
        }
      : i || (a && r)
        ? {
            message: "We got enough data for your voice.",
            tone: "success",
            counter: l,
            isComplete: !0,
          }
        : r
          ? n >= 6
            ? {
                message: "Still there? Keep reading.",
                tone: "muted",
                counter: l,
                isComplete: !1,
              }
            : n >= 2.5
              ? {
                  message: "Please keep speaking.",
                  tone: "muted",
                  counter: l,
                  isComplete: !1,
                }
              : {
                  message: s
                    ? "Keep reading for a better match, or stop now."
                    : null,
                  tone: "muted",
                  counter: l,
                  isComplete: !1,
                }
          : e >= 3
            ? {
                message: "We can't hear your mic. Check that it isn't muted.",
                tone: "error",
                counter: l,
                isComplete: !1,
              }
            : {
                message: null,
                tone: "muted",
                counter: l,
                isComplete: !1,
              };
  }),
  (t.MIN_SAMPLE_SECONDS = 10),
  (t.MAX_SAMPLE_SECONDS = 30),
  (t.VOICE_LEVEL_THRESHOLD = 0.02),
  (t.FAILURE_MESSAGES = {
    microphone:
      "Couldn't turn on your microphone. Check it's connected and allowed, then try again.",
    too_short: `Keep speaking for at least ${t.MIN_SAMPLE_SECONDS} seconds so we have enough audio.`,
    not_one_voice:
      "We could not pick out your voice. Try again somewhere quieter, with only you speaking.",
    service:
      "We could not set up the recording. You can skip this and continue.",
    save_failed:
      "Your recording is fine, but we could not save it. Please try again.",
  });
