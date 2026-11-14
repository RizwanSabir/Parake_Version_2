// vendor/module-96062.js — webpack module 96062
// params: (e, t) = (module, exports, require)
"use strict";
t.hydrateTranscriptRow = function (e) {
  return {
    id: e.id,
    content: e.content,
    partialContent: "",
    type: e.type,
    speaker: e.speaker,
    createdAt: e.createdAt,
    completed: !0,
    saveState: "saved",
    detection: e.questionDetection ?? void 0,
  };
};
