// vendor/other/module-47981.js — webpack module 47981
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(41194 /* vendor/other/module-41194 */);
t.setSDKProcessingMetadata = function (e) {
  const t = r.getIsolationScope()?.getScopeData()?.sdkProcessingMetadata;
  if (!t?.normalizedRequest) {
    const t = o.httpRequestToRequestData(e);
    r.getIsolationScope().setSDKProcessingMetadata({
      normalizedRequest: t,
    });
  }
};
