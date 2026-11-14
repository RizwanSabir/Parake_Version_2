// vendor/module-83817.js — webpack module 83817
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  if (null === e || "object" != typeof e) return;
  const t = e.name;
  return "string" == typeof t ? t : void 0;
}
function r(e) {
  if (null === e || "object" != typeof e) return "";
  const t = e.message;
  return "string" == typeof t ? t : "";
}
(t.DESKTOP_AUDIO_CAPTURE_ENDED_MESSAGE =
  t.DESKTOP_AUDIO_CAPTURE_FAILED_MESSAGE =
    void 0),
  (t.isMediaCaptureError = function (e) {
    const t = n(e);
    return void 0 !== t && [...o, ...i, ...a].includes(t);
  }),
  (t.microphoneErrorMessage = function (e, t) {
    const s = n(e);
    return void 0 !== s && o.includes(s)
      ? "desktopApp" === t
        ? "The app isn't allowed to use your microphone. Turn it on in your computer's privacy settings (on a Mac: System Settings → Privacy & Security → Microphone), then try again."
        : "mobileApp" === t
          ? "Microphone access is off for this app. Turn it on in your phone's Settings, then try again."
          : (function (e) {
                return /by system/i.test(r(e));
              })(e)
            ? "Your computer is blocking your browser from using the microphone. Turn it on in your computer's privacy settings (on a Mac: System Settings → Privacy & Security → Microphone), then try again."
            : /dismissed/i.test(r(e))
              ? "You closed the microphone prompt. Try again and choose Allow, so the AI can hear you."
              : "Microphone access is blocked for this site. Allow it in your browser's site settings (the icon next to the address bar), then try again."
      : void 0 !== s && i.includes(s)
        ? "No microphone found. Connect one, or check it's switched on, then try again."
        : void 0 !== s && a.includes(s)
          ? "Your microphone couldn't start: another app may be holding it, or it was just unplugged. Close that app or reconnect the microphone, then try again."
          : "Couldn't turn on your microphone. Check it's connected and allowed, then try again.";
  }),
  (t.isDismissedSharePicker = function (e) {
    return (
      "NotAllowedError" === n(e) &&
      /^permission (denied|dismissed)( by user)?$/i.test(r(e).trim())
    );
  }),
  (t.screenRecordingPermissionMessage = function (e) {
    return `${e} needs the "Screen & System Audio Recording" permission to hear your call. Turn it on in System Settings → Privacy & Security, then try again.`;
  }),
  (t.unsupportedMacOsMessage = function ({
    appName: e,
    osVersion: t,
    osName: n,
  }) {
    return `Hearing your call needs macOS 13.2 (Ventura) or later, and this Mac runs macOS ${t} (${n}). Update macOS, or use ${e} in Chrome instead.`;
  }),
  (t.screenShareErrorMessage = function (e, r) {
    const i = n(e);
    if (void 0 !== i && o.includes(i)) {
      const e = "desktopApp" === r ? "the app" : "your browser";
      return `Your computer is blocking ${e} from capturing the screen. Turn it on in your computer's privacy settings (on a Mac: System Settings → Privacy & Security → Screen & System Audio Recording), restart ${e}, then try again.`;
    }
    return "desktopApp" === r
      ? t.DESKTOP_AUDIO_CAPTURE_FAILED_MESSAGE
      : void 0 !== i && a.includes(i)
        ? "Your browser couldn't start capturing that tab. Try sharing it again; if it keeps happening, restart Chrome."
        : "Couldn't start sharing the tab. Try again and pick the tab your call is in.";
  }),
  (t.transcriptionStoppedMessage = function (e, t, n) {
    const r = "microphone" === e ? "your microphone" : "the call audio";
    switch (t) {
      case "connection":
        return `Lost the connection while transcribing ${r}, so it stopped. Check your internet connection, then start it again.`;
      case "service":
        return `The transcription service stopped responding, so transcribing ${r} stopped. Start it again in a moment.`;
      case "stalled":
        return "microphone" === e
          ? "No sound has come from your microphone for a while, so transcription stopped. Check it's still connected, then start it again."
          : "desktopApp" === n
            ? "No sound has come from your computer's audio for a while, so transcription stopped. Start System audio again to keep going."
            : "No sound has come from the shared call for a while, so transcription stopped. Check the tab is still shared, then start it again.";
      case "start":
        return `Couldn't start transcribing ${r}. Check your internet connection, then try again.`;
      case "unexpected":
        return `Transcribing ${r} stopped unexpectedly. Start it again; if it keeps happening, reload the page or restart the app.`;
    }
  });
const o = ["NotAllowedError", "SecurityError"],
  i = ["NotFoundError", "OverconstrainedError"],
  a = ["NotReadableError", "AbortError"];
(t.DESKTOP_AUDIO_CAPTURE_FAILED_MESSAGE =
  "Couldn't start capturing your computer's audio. Try again; if it keeps happening, restart the app."),
  (t.DESKTOP_AUDIO_CAPTURE_ENDED_MESSAGE =
    "Capturing your computer's audio stopped unexpectedly. Start System audio again to keep going.");
