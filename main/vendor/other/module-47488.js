// vendor/other/module-47488.js — webpack module 47488
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
t.mergeEvents = function (e, t) {
  !(function (e) {
    delete e.sdkProcessingMetadata?.capturedSpanScope,
      delete e.sdkProcessingMetadata?.capturedSpanIsolationScope;
    for (const t of e.spans || []) delete t.spanRecorder;
  })(t);
  const n = {
    ...e,
    ...t,
    contexts: {
      ...e.contexts,
      ...t.contexts,
      app: { ...e.contexts?.app, ...t.contexts?.app },
      device: { ...e.contexts?.device, ...t.contexts?.device },
    },
    tags: { ...e.tags, ...t.tags },
    sdk: { ...e.sdk, ...t.sdk },
  };
  return (e.extra || t.extra) && (n.extra = { ...e.extra, ...t.extra }), n;
};
