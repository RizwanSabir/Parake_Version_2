// app/hooks/use-transcription-deps.js — webpack module 50225
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useTranscriptionDeps = u),
  (t.useTranscriptionSession = function (e) {
    return (0, i.useTranscriptionSession)(e, u());
  });
const o = n(44572 /* vendor/module-44572 */),
  i = n(51273 /* vendor/module-51273 */),
  a = n(87093 /* vendor/module-87093 */),
  s = n(9917 /* vendor/module-9917 */),
  l = n(72836 /* app/lib/initialize-speechmatics-session */),
  c = r(n(59946 /* vendor/module-59946 */));
function u() {
  return {
    capturePlatform: "desktopApp",
    showToastError: (e, t) => o.toast.error(e, { id: t?.id }),
    showToastWarning: (e, t) => o.toast.warning(e, { id: t?.id }),
    createAudioRecorder: (e) =>
      (0, s.createAudioRecorder)({ ...e, workletUrl: c.default }),
    initializeSpeechmaticsSession: (e) =>
      (0, l.initializeSpeechmaticsSession)(e),
    trackEvent: a.trackClientEvent,
  };
}
