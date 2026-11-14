// vendor/other/module-39851.js — webpack module 39851
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = (e) => ({
    name: "@langchain/langgraph",
    versionRange: ">=0.0.0 <2.0.0",
    filePath: e,
  }),
  i = [
    ...["dist/graph/state.cjs", "dist/graph/state.js"].map((e) => ({
      channelName: "stateGraphCompile",
      module: o(e),
      functionQuery: {
        className: "StateGraph",
        methodName: "compile",
        kind: "Sync",
      },
    })),
    ...[
      "dist/prebuilt/react_agent_executor.cjs",
      "dist/prebuilt/react_agent_executor.js",
    ].map((e) => ({
      channelName: "createReactAgent",
      module: o(e),
      functionQuery: {
        functionName: "createReactAgent",
        kind: "Sync",
      },
    })),
  ],
  s = r.toSubscribeInjections(i);
(t.langgraphChannels = {
  LANGGRAPH_STATE_GRAPH_COMPILE:
    "orchestrion:@langchain/langgraph:stateGraphCompile",
  LANGGRAPH_CREATE_REACT_AGENT:
    "orchestrion:@langchain/langgraph:createReactAgent",
}),
  (t.langgraphConfig = i),
  (t.langgraphSubscribeInjection = s);
