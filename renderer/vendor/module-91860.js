// vendor/module-91860.js — webpack module 91860
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/module-27352 */),
  o = new Map(),
  i = new Set();
function a(e, t) {
  return (
    (function (e) {
      if (r.GLOBAL_OBJ._sentryModuleMetadata)
        for (const t of Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)) {
          const n = r.GLOBAL_OBJ._sentryModuleMetadata[t];
          if (i.has(t)) continue;
          i.add(t);
          const a = e(t);
          for (const e of a.reverse())
            if (e.filename) {
              o.set(e.filename, n);
              break;
            }
        }
    })(e),
    o.get(t)
  );
}
(t.addMetadataToStackFrames = function (e, t) {
  t.exception?.values?.forEach((t) => {
    t.stacktrace?.frames?.forEach((t) => {
      if (!t.filename || t.module_metadata) return;
      const n = a(e, t.filename);
      n && (t.module_metadata = n);
    });
  });
}),
  (t.getFilenameToMetadataMap = function (e) {
    if (!r.GLOBAL_OBJ._sentryModuleMetadata) return {};
    const t = {};
    for (const n of Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)) {
      const o = r.GLOBAL_OBJ._sentryModuleMetadata[n],
        i = e(n);
      for (const e of i.reverse())
        if (e.filename) {
          t[e.filename] = o;
          break;
        }
    }
    return t;
  }),
  (t.getMetadataForUrl = a),
  (t.stripMetadataFromStackFrames = function (e) {
    e.exception?.values?.forEach((e) => {
      e.stacktrace?.frames?.forEach((e) => {
        delete e.module_metadata;
      });
    });
  });
