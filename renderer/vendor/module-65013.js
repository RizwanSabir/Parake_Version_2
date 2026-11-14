// vendor/module-65013.js — webpack module 65013
// params: (e, t) = (module, exports, require)
"use strict";
(t.MAX_RESUME_SIZE_MB = t.sO = t.cK = void 0),
  (t.getExtensionFromMimeType = function (e) {
    return (function (e) {
      return e in t.cK;
    })(e)
      ? t.cK[e].extension
      : null;
  }),
  (t.getSupportedExtensionsLabel = function () {
    return Object.values(t.cK)
      .map((e) => e.extension.replace(".", "").toUpperCase())
      .join(", ");
  }),
  (t.cK = {
    "application/pdf": { extension: ".pdf", canRenderInline: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      extension: ".docx",
      canRenderInline: !1,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      extension: ".xlsx",
      canRenderInline: !1,
    },
    "text/plain": { extension: ".txt", canRenderInline: !0 },
    "text/markdown": { extension: ".md", canRenderInline: !0 },
  }),
  (t.sO = 128),
  t.sO,
  (t.MAX_RESUME_SIZE_MB = 8),
  t.MAX_RESUME_SIZE_MB;
