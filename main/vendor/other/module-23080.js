// vendor/other/module-23080.js — webpack module 23080
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */);
t.SecretsManagerServiceExtension = class {
  requestPreSpanHook(e) {
    const t = e.commandInput?.SecretId,
      n = {};
    return (
      "string" == typeof t &&
        t.startsWith("arn:aws:secretsmanager:") &&
        (n[o.AWS_SECRETSMANAGER_SECRET_ARN] = t),
      { spanAttributes: n, spanKind: r.SPAN_KIND.CLIENT }
    );
  }
  responseHook(e, t) {
    const n = e.data?.ARN;
    n && t.setAttribute(o.AWS_SECRETSMANAGER_SECRET_ARN, n);
  }
};
