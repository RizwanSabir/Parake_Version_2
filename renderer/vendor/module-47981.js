// vendor/module-47981.js — webpack module 47981
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(41194 /* vendor/module-41194 */);
t.setSDKProcessingMetadata = function (e) {
  const t = r.getIsolationScope()?.getScopeData()?.sdkProcessingMetadata;
  if (!t?.normalizedRequest) {
    const t = o.httpRequestToRequestData(e);
    r.getIsolationScope().setSDKProcessingMetadata({
      normalizedRequest: t,
    });
  }
};
