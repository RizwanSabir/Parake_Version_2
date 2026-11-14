// vendor/other/module-28297.js — webpack module 28297
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = [
    {
      channelName: "load",
      module: {
        name: "lru-memoizer",
        versionRange: ">=2.1.0 <4",
        filePath: "lib/async.js",
      },
      functionQuery: {
        functionName: "memoizedFunction",
        kind: "Callback",
      },
    },
  ],
  o = n(22951 /* vendor/other/module-22951 */).toSubscribeInjections(r);
(t.lruMemoizerChannels = {
  LRU_MEMOIZER_LOAD: "orchestrion:lru-memoizer:load",
}),
  (t.lruMemoizerConfig = r),
  (t.lruMemoizerSubscribeInjection = o);
