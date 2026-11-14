// vendor/module-64642.js — webpack module 64642
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.z4 =
  t.lJ =
  t.x4 =
  t.$o =
  t.DEFAULT_AI_MODEL =
  t.DEFAULT_RESPONSE_STYLE =
  t.n4 =
  t.F =
  t.DD =
  t.wS =
  t.XX =
  t.DEFAULT_LANGUAGE =
    void 0),
  (t.createSessionInitialValues = function ({
    lastSession: e,
    resumes: n,
    sessionMode: r,
  }) {
    return {
      documentSelectionMode: e?.documentSelectionMode ?? t.z4,
      language: e?.language ?? t.DEFAULT_LANGUAGE,
      extraContext: t.$o,
      responseLength: e?.responseLength ?? t.XX,
      responseFormat: e?.responseFormat ?? t.wS,
      responseTone: e?.responseTone ?? t.DD,
      useStarMethod: e?.useStarMethod ?? t.F,
      useFillerWords: e?.useFillerWords ?? t.n4,
      autoAnswer: e?.autoAnswer ?? t.lJ,
      saveTranscription: e?.saveTranscription ?? t.x4,
      aiModel: i(e),
      sessionMode: r,
      title: "",
      companyDomain: void 0,
      description: "",
      jobPostUrl: null,
      selectedDocumentIds: [],
      resumeId: a(e, n),
    };
  });
const r = n(44239 /* vendor/module-44239 */);
(t.DEFAULT_LANGUAGE = "en"),
  (t.XX = "balanced"),
  (t.wS = "balanced"),
  (t.DD = "simple"),
  (t.F = !1),
  (t.n4 = !1),
  (t.DEFAULT_RESPONSE_STYLE = {
    responseLength: t.XX,
    responseFormat: t.wS,
    responseTone: t.DD,
    useStarMethod: t.F,
    useFillerWords: t.n4,
  }),
  (t.DEFAULT_AI_MODEL = "gemini-3-5-flash-lite"),
  (t.$o = ""),
  (t.x4 = !0),
  (t.lJ = !1),
  (t.z4 = "all");
const o = {
  "claude-sonnet-4-5": "claude-sonnet-5",
  "gpt-5-6-sol": "gpt-5-6-terra",
};
function i(e) {
  return e?.createdOnCurrentApiVersion
    ? (function (e) {
        const n = o[e] ?? e;
        return r.AI_MODEL_SELECTABLE_VALUES.includes(n)
          ? n
          : t.DEFAULT_AI_MODEL;
      })(e.aiModel)
    : t.DEFAULT_AI_MODEL;
}
function a(e, t) {
  const n = e?.resumeId ?? void 0;
  return t ? (t.some((e) => e.id === n) ? n : t[0]?.id) : n;
}
