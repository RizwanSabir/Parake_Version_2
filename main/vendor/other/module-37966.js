// vendor/other/module-37966.js — webpack module 37966
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */);
t.S3ServiceExtension = class {
  requestPreSpanHook(e) {
    const t = e.commandInput?.Bucket,
      n = {};
    return (
      t && (n[o.AWS_S3_BUCKET] = t),
      { spanAttributes: n, spanKind: r.SPAN_KIND.CLIENT }
    );
  }
};
