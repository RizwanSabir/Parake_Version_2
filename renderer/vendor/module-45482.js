// vendor/module-45482.js — webpack module 45482
// params: (e, t, n) = (module, exports, require)
"use strict";
t.TRANSCRIPT_ENTRIES_MAX = t.limits = t._O = void 0;
const r = n(511 /* vendor/module-511 */);
(t._O = (e) => {
  const t = (t) => {
    const n = `at most ${e.toLocaleString("en-US")} characters.`;
    return t ? `${t} must be ${n}` : `Must be ${n}`;
  };
  return {
    max: e,
    message: t,
    string: (n) => r.z.string().trim().max(e, t(n)),
    capDerived: (t) => (t.length > e ? t.slice(0, e) : t),
    exceededBy: (t) =>
      `${t.toLocaleString("en-US")} characters, at most ${e.toLocaleString("en-US")} allowed`,
  };
}),
  (t.limits = {
    sessionTitle: (0, t._O)(255),
    sessionShortDescription: (0, t._O)(255),
    jobDescription: (0, t._O)(1e4),
    extraContext: (0, t._O)(2e4),
    resumeShortField: (0, t._O)(255),
    resumeField: (0, t._O)(5e3),
    resumeTotal: (0, t._O)(3e4),
    resumePdfParse: (0, t._O)(6e4),
    documentTitle: (0, t._O)(255),
    documentCustomPrompt: (0, t._O)(1e4),
    documentContent: (0, t._O)(1e6),
    chatMessage: (0, t._O)(3e3),
    transcriptEntryContent: (0, t._O)(1e4),
    transcriptEntrySpeaker: (0, t._O)(255),
    scrapedJobContent: (0, t._O)(24e3),
    scrapedDocumentContent: (0, t._O)(15e4),
  }),
  (t.TRANSCRIPT_ENTRIES_MAX = 200),
  (0, t._O)(255);
