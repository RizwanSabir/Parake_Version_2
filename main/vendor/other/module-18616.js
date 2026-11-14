// vendor/other/module-18616.js — webpack module 18616
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */);
function o(e, t) {
  const n = t.length;
  return e?.slice(-n) === t ? e.slice(0, -n) : e;
}
(t.extractAttributesFromNormalizedRequest = function (e) {
  return {
    [r.RPC_SYSTEM]: "aws-api",
    [r.RPC_METHOD]: e.commandName,
    [r.RPC_SERVICE]: e.serviceName,
    [r.CLOUD_REGION]: e.region,
  };
}),
  (t.normalizeV3Request = function (e, t, n, r) {
    return {
      serviceName: e?.replace(/\s+/g, ""),
      commandName: o(t, "Command"),
      commandInput: n,
      region: r,
    };
  }),
  (t.removeSuffixFromStringIfExists = o);
