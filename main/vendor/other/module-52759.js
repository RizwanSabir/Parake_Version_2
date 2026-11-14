// vendor/other/module-52759.js — webpack module 52759
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "send",
      module: {
        name: "@smithy/core",
        versionRange: ">=3.24.0 <4",
        filePath: "dist-cjs/submodules/client/index.js",
      },
      functionQuery: {
        className: "Client",
        methodName: "send",
        kind: "Async",
      },
    },
    {
      channelName: "send",
      module: {
        name: "@smithy/smithy-client",
        versionRange: ">=1.0.3 <5",
        filePath: "dist-cjs/index.js",
      },
      functionQuery: {
        className: "Client",
        methodName: "send",
        kind: "Async",
      },
    },
    {
      channelName: "send",
      module: {
        name: "@aws-sdk/smithy-client",
        versionRange: "^3.1.0",
        filePath: "dist-cjs/index.js",
      },
      functionQuery: {
        className: "Client",
        methodName: "send",
        kind: "Async",
      },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.awsSdkChannels = {
  AWS_SMITHY_CORE_SEND: "orchestrion:@smithy/core:send",
  AWS_SMITHY_CLIENT_SEND: "orchestrion:@smithy/smithy-client:send",
  AWS_SDK_SMITHY_CLIENT_SEND: "orchestrion:@aws-sdk/smithy-client:send",
}),
  (t.awsSdkConfig = r),
  (t.awsSdkSubscribeInjection = o);
