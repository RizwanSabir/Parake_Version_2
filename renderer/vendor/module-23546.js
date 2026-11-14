// vendor/module-23546.js — webpack module 23546
// params: (e, t) = (module, exports, require)
"use strict";
(t.VOICE_REMINDER =
  t.VOICE_CARD =
  t.NO_SOUND_STATUS =
  t.MIC_ONLY_CONFIRMATION =
  t.ONLY_YOU_MESSAGE =
  t.MIC_SILENT_ANSWER_MESSAGE =
  t.micCheckNotice =
  t.RETRY_TAB_NOTICE =
  t.computerAudioLabel =
    void 0),
  (t.computerAudioNotice = function (e, t) {
    const r = "answer" === t ? "Microphone only and answer" : "Microphone only";
    switch (e) {
      case "offer":
        return "answer" === t
          ? {
              title: "We only hear your microphone",
              body: "If your call is on another device or in person, switch and we'll listen for both sides.",
              primary: r,
              secondary: n,
            }
          : {
              title: "We can't hear call audio on your computer",
              body: "Switch to microphone only? We'll turn off system audio and listen for both sides on your microphone.",
              primary: r,
              secondary: n,
            };
      case "tab-offer":
        return {
          title: "We can't hear call audio in your tab",
          body: "If your call is in another tab, check you shared it with audio. If it's on another device or in person, switch to microphone only.",
          primary: r,
          secondary: n,
        };
      case "fix-choose-device":
        return {
          title: "We can't hear your system audio",
          primary: "Choose device",
        };
      case "fix-restart":
        return {
          title: "We can't hear your system audio",
          primary: "Restart system audio",
        };
      case "fix-retry":
        return {
          title: "We can't hear your system audio",
          primary: "Retry system audio",
        };
      case "fix-permission":
        return { title: "We can't hear your system audio" };
    }
  }),
  (t.computerAudioLabel = (e) =>
    "desktopApp" === e ? "System audio" : "Tab audio");
const n = "Not now";
(t.RETRY_TAB_NOTICE = {
  title: "We can't hear your tab audio",
  primary: "Retry tab audio",
}),
  (t.micCheckNotice = (e) => ({
    title: "We can't hear your microphone",
    body: e
      ? "The other side is coming through, but your mic hasn't picked up any sound."
      : "The other side is coming through, but your mic hasn't picked up any sound. Check it's on and not muted.",
    primary: e ? "Choose device" : void 0,
  })),
  (t.MIC_SILENT_ANSWER_MESSAGE = {
    withPicker:
      "We can't hear anything on your microphone. Choose another device, or check it's on and not muted.",
    withoutPicker:
      "We can't hear anything on your microphone. Check it's on, not muted, and allowed for this app.",
  }),
  (t.ONLY_YOU_MESSAGE = "We only hear you. Keep your phone on speaker."),
  (t.MIC_ONLY_CONFIRMATION = "Listening on your microphone only"),
  (t.NO_SOUND_STATUS = "No sound"),
  (t.VOICE_CARD = {
    title: "Help us tell your voice apart",
    body: "On one microphone we can't always tell who's speaking, so an answer may respond to what you said. Record your voice after this call to fix that from your next session.",
    primary: "Remind me after the call",
    secondary: n,
  }),
  (t.VOICE_REMINDER = {
    title: "Record your voice for next time",
    body: "It takes about 30 seconds, and lets us tell you apart from the other person when listening on your microphone.",
    primary: "Record voice",
    secondary: n,
  });
