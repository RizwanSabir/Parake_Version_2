// vendor/other/module-21268.js — webpack module 21268
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */);
t.KinesisServiceExtension = class {
  requestPreSpanHook(e) {
    const t = e.commandInput?.StreamName,
      n = {};
    return (
      t && (n[o._AWS_KINESIS_STREAM_NAME] = t),
      { spanAttributes: n, spanKind: r.SPAN_KIND.CLIENT }
    );
  }
};
