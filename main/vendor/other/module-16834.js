// vendor/other/module-16834.js — webpack module 16834
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = ["dist", "dist/esm"].flatMap((e) => [
    {
      channelName: "requestHandler",
      module: {
        name: "@remix-run/server-runtime",
        versionRange: ">=2.0.0 <3",
        filePath: `${e}/server.js`,
      },
      astQuery: 'FunctionExpression[id.name="requestHandler"]',
      functionQuery: { kind: "Async" },
    },
    {
      channelName: "matchServerRoutes",
      module: {
        name: "@remix-run/server-runtime",
        versionRange: ">=2.0.0 <3",
        filePath: `${e}/routeMatching.js`,
      },
      functionQuery: {
        functionName: "matchServerRoutes",
        kind: "Sync",
      },
    },
    {
      channelName: "callRouteLoader",
      module: {
        name: "@remix-run/server-runtime",
        versionRange: ">=2.9.0 <3",
        filePath: `${e}/data.js`,
      },
      functionQuery: {
        functionName: "callRouteLoader",
        kind: "Async",
      },
    },
    {
      channelName: "callRouteAction",
      module: {
        name: "@remix-run/server-runtime",
        versionRange: ">=2.9.0 <3",
        filePath: `${e}/data.js`,
      },
      functionQuery: {
        functionName: "callRouteAction",
        kind: "Async",
      },
    },
    {
      channelName: "callRouteLoader",
      module: {
        name: "@remix-run/server-runtime",
        versionRange: ">=2.0.0 <2.9.0",
        filePath: `${e}/data.js`,
      },
      functionQuery: {
        functionName: "callRouteLoaderRR",
        kind: "Async",
      },
    },
    {
      channelName: "callRouteAction",
      module: {
        name: "@remix-run/server-runtime",
        versionRange: ">=2.0.0 <2.9.0",
        filePath: `${e}/data.js`,
      },
      functionQuery: {
        functionName: "callRouteActionRR",
        kind: "Async",
      },
    },
  ]),
  i = r.toSubscribeInjections(o);
(t.remixChannels = {
  REMIX_REQUEST_HANDLER: "orchestrion:@remix-run/server-runtime:requestHandler",
  REMIX_MATCH_SERVER_ROUTES:
    "orchestrion:@remix-run/server-runtime:matchServerRoutes",
  REMIX_CALL_ROUTE_LOADER:
    "orchestrion:@remix-run/server-runtime:callRouteLoader",
  REMIX_CALL_ROUTE_ACTION:
    "orchestrion:@remix-run/server-runtime:callRouteAction",
}),
  (t.remixConfig = o),
  (t.remixSubscribeInjection = i);
