// vendor/module-87929.js — webpack module 87929
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.formValuesFromCallSession = function (e, t) {
  const n = null === t || t.includes(e.resumeId ?? "");
  return {
    sessionMode: e.mode,
    title: e.title,
    companyDomain: e.companyDomain ?? void 0,
    description: e.description,
    jobPostUrl: e.jobPostUrl,
    resumeId: n ? e.resumeId : null,
    documentSelectionMode: e.documentSelectionMode,
    language: e.language,
    extraContext: e.extraContext,
    responseLength: e.responseLength,
    responseFormat: e.responseFormat,
    responseTone: e.responseTone,
    useStarMethod: e.useStarMethod,
    useFillerWords: e.useFillerWords,
    aiModel: e.aiModel,
    autoAnswer: e.autoAnswer,
    saveTranscription: e.saveTranscription,
    selectedDocumentIds: e.documentIds ?? [],
  };
}),
  (t.updateLiveInputFromFormValues = function (e, t, { isMock: n }) {
    return {
      callSessionId: e,
      mode: t.sessionMode,
      title: t.title,
      companyDomain: t.companyDomain,
      description: t.description,
      jobPostUrl: t.jobPostUrl,
      language: t.language,
      extraContext: t.extraContext,
      resumeId: o(t),
      saveTranscription: (0, r.savesTranscription)(n, t.saveTranscription),
      isMock: n,
      aiModel: t.aiModel,
      responseLength: t.responseLength,
      responseFormat: t.responseFormat,
      responseTone: t.responseTone,
      useStarMethod: t.useStarMethod,
      useFillerWords: t.useFillerWords,
      autoAnswer: t.autoAnswer,
      documentSelectionMode: t.documentSelectionMode,
      selectedDocumentIds: t.selectedDocumentIds,
    };
  }),
  (t.createInputFromFormValues = function (e, { isMock: t }) {
    return {
      mode: e.sessionMode,
      title: e.title,
      companyDomain: e.companyDomain,
      description: e.description,
      jobPostUrl: e.jobPostUrl,
      language: e.language,
      extraContext: e.extraContext,
      resumeId: o(e),
      saveTranscription: (0, r.savesTranscription)(t, e.saveTranscription),
      aiModel: e.aiModel,
      autoAnswer: e.autoAnswer,
      responseLength: e.responseLength,
      responseFormat: e.responseFormat,
      responseTone: e.responseTone,
      useStarMethod: e.useStarMethod,
      useFillerWords: e.useFillerWords,
      documentSelectionMode: e.documentSelectionMode,
      selectedDocumentIds: e.selectedDocumentIds,
      isMock: t,
    };
  });
const r = n(58404 /* vendor/module-58404 */),
  o = (e) => ("interview" === e.sessionMode ? e.resumeId : null);
