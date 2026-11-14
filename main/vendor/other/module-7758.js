// vendor/other/module-7758.js — webpack module 7758
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "parse",
      module: {
        name: "graphql",
        versionRange: ">=14.0.0 <17",
        filePath: "language/parser.js",
      },
      functionQuery: { functionName: "parse", kind: "Sync" },
    },
    {
      channelName: "validate",
      module: {
        name: "graphql",
        versionRange: ">=14.0.0 <17",
        filePath: "validation/validate.js",
      },
      functionQuery: { functionName: "validate", kind: "Sync" },
    },
    {
      channelName: "execute",
      module: {
        name: "graphql",
        versionRange: ">=14.0.0 <17",
        filePath: "execution/execute.js",
      },
      functionQuery: { functionName: "execute", kind: "Auto" },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.graphqlChannels = {
  GRAPHQL_PARSE: "orchestrion:graphql:parse",
  GRAPHQL_VALIDATE: "orchestrion:graphql:validate",
  GRAPHQL_EXECUTE: "orchestrion:graphql:execute",
}),
  (t.graphqlConfig = r),
  (t.graphqlSubscribeInjection = o);
