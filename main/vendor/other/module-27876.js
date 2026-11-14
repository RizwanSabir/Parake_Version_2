// vendor/other/module-27876.js — webpack module 27876
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = {
    name: "dataloader",
    versionRange: ">=2.0.0 <3",
    filePath: "index.js",
  },
  o = [
    {
      channelName: "construct",
      module: r,
      functionQuery: { functionName: "DataLoader", kind: "Sync" },
    },
    {
      channelName: "load",
      module: r,
      functionQuery: { expressionName: "load", kind: "Async" },
    },
    {
      channelName: "loadMany",
      module: r,
      functionQuery: { expressionName: "loadMany", kind: "Async" },
    },
    {
      channelName: "prime",
      module: r,
      functionQuery: { expressionName: "prime", kind: "Sync" },
    },
    {
      channelName: "clear",
      module: r,
      functionQuery: { expressionName: "clear", kind: "Sync" },
    },
    {
      channelName: "clearAll",
      module: r,
      functionQuery: { expressionName: "clearAll", kind: "Sync" },
    },
  ],
  i = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(o);
(t.dataloaderChannels = {
  DATALOADER_CONSTRUCT: "orchestrion:dataloader:construct",
  DATALOADER_LOAD: "orchestrion:dataloader:load",
  DATALOADER_LOAD_MANY: "orchestrion:dataloader:loadMany",
  DATALOADER_PRIME: "orchestrion:dataloader:prime",
  DATALOADER_CLEAR: "orchestrion:dataloader:clear",
  DATALOADER_CLEAR_ALL: "orchestrion:dataloader:clearAll",
}),
  (t.dataloaderConfig = o),
  (t.dataloaderSubscribeInjection = i);
