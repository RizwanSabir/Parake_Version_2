// vendor/other/module-12006.js — webpack module 12006
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(54305 /* vendor/other/module-54305 */),
  o = n(6044 /* vendor/other/module-6044 */),
  i = n(21268 /* vendor/other/module-21268 */),
  s = n(74119 /* vendor/other/module-74119 */),
  a = n(37966 /* vendor/other/module-37966 */),
  c = n(23080 /* vendor/other/module-23080 */),
  u = n(21628 /* vendor/other/module-21628 */),
  l = n(88139 /* vendor/other/module-88139 */),
  d = n(3681 /* vendor/other/module-3681 */);
t.ServicesExtensions = class {
  constructor() {
    this._services = new Map([
      ["SecretsManager", new c.SecretsManagerServiceExtension()],
      ["SFN", new d.StepFunctionsServiceExtension()],
      ["SQS", new l.SqsServiceExtension()],
      ["SNS", new u.SnsServiceExtension()],
      ["DynamoDB", new o.DynamodbServiceExtension()],
      ["Lambda", new s.LambdaServiceExtension()],
      ["S3", new a.S3ServiceExtension()],
      ["Kinesis", new i.KinesisServiceExtension()],
      ["BedrockRuntime", new r.BedrockRuntimeServiceExtension()],
    ]);
  }
  requestPreSpanHook(e) {
    const t = this._services.get(e.serviceName);
    return t ? t.requestPreSpanHook(e) : {};
  }
  requestPostSpanHook(e, t) {
    const n = this._services.get(e.serviceName);
    n?.requestPostSpanHook?.(e, t);
  }
  responseHook(e, t) {
    const n = this._services.get(e.request.serviceName);
    n?.responseHook?.(e, t);
  }
};
