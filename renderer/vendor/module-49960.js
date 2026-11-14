// vendor/module-49960.js — webpack module 49960
// params: (e, t, n) = (module, exports, require)
"use strict";
t.collectPendingTranscriptEntries = function (e) {
  return e
    .filter((e) => e.completed && e.content && "saved" !== e.saveState)
    .slice(-r.TRANSCRIPT_ENTRIES_MAX)
    .map((e) => ({
      id: e.id,
      content: e.content,
      type: e.type,
      speaker: e.speaker,
      createdAt: e.createdAt,
    }));
};
const r = n(45482 /* vendor/module-45482 */);
