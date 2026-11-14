// vendor/module-70190.js — webpack module 70190
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.H9 = t.POST_CALL_FEEDBACK_PATH = void 0),
  (t.setPostCallFeedbackParams = function (e, n) {
    for (const [r, o] of Object.entries(
      (function (e) {
        return {
          [t.H9.callSessionId]: e?.callSessionId ?? null,
          [t.H9.surface]: e?.surface ?? null,
        };
      })(n),
    ))
      null !== o && e.set(r, o);
    return e;
  });
n(18278 /* vendor/module-18278 */);
(t.POST_CALL_FEEDBACK_PATH = "/dashboard/callSessions"),
  (t.H9 = {
    callSessionId: "showFeedback",
    surface: "feedbackSurface",
  });
