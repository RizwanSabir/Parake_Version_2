// vendor/other/module-8506.js — webpack module 8506
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = { name: "mongoose", versionRange: ">=5.9.7 <9.7.0" },
  i = [
    "find",
    "findOne",
    "deleteOne",
    "deleteMany",
    "estimatedDocumentCount",
    "countDocuments",
    "distinct",
    "where",
    "$where",
    "findOneAndUpdate",
    "findOneAndDelete",
    "findOneAndReplace",
    "remove",
    "count",
    "findOneAndRemove",
  ],
  s = [
    {
      channelName: "query_exec",
      module: { ...o, filePath: "lib/query.js" },
      functionQuery: { expressionName: "exec", kind: "Auto" },
    },
    {
      channelName: "aggregate_exec",
      module: { ...o, filePath: "lib/aggregate.js" },
      functionQuery: { expressionName: "exec", kind: "Auto" },
    },
    {
      channelName: "model_save",
      module: { ...o, filePath: "lib/model.js" },
      functionQuery: { expressionName: "save", kind: "Auto" },
    },
    {
      channelName: "model_insert_many",
      module: { ...o, filePath: "lib/model.js" },
      functionQuery: { expressionName: "insertMany", kind: "Auto" },
    },
    {
      channelName: "model_bulk_write",
      module: { ...o, filePath: "lib/model.js" },
      functionQuery: { expressionName: "bulkWrite", kind: "Auto" },
    },
    {
      channelName: "model_remove",
      module: { ...o, filePath: "lib/model.js" },
      functionQuery: { expressionName: "remove", kind: "Auto" },
    },
    {
      channelName: "model_aggregate",
      module: { ...o, filePath: "lib/model.js" },
      functionQuery: { expressionName: "aggregate", kind: "Sync" },
    },
    ...i.map((e) => ({
      channelName: `ctx_${e}`,
      module: { ...o, filePath: "lib/query.js" },
      functionQuery: { expressionName: e, kind: "Sync" },
    })),
  ],
  a = i.map((e) => `orchestrion:mongoose:ctx_${e}`),
  c = r.toSubscribeInjections(s);
(t.MONGOOSE_CONTEXT_CAPTURE_CHANNELS = a),
  (t.mongooseChannels = {
    MONGOOSE_QUERY_EXEC: "orchestrion:mongoose:query_exec",
    MONGOOSE_AGGREGATE_EXEC: "orchestrion:mongoose:aggregate_exec",
    MONGOOSE_MODEL_SAVE: "orchestrion:mongoose:model_save",
    MONGOOSE_MODEL_INSERT_MANY: "orchestrion:mongoose:model_insert_many",
    MONGOOSE_MODEL_BULK_WRITE: "orchestrion:mongoose:model_bulk_write",
    MONGOOSE_MODEL_REMOVE: "orchestrion:mongoose:model_remove",
    MONGOOSE_MODEL_AGGREGATE: "orchestrion:mongoose:model_aggregate",
  }),
  (t.mongooseConfig = s),
  (t.mongooseSubscribeInjection = c);
