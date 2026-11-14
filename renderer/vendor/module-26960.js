// vendor/module-26960.js — webpack module 26960
// params: (e, t) = (module, exports, require)
"use strict";
t.formatFileSize = function (e) {
  if (e < 1024) return `${e} B`;
  const t = e / 1024;
  if (t < 1024) return `${Math.round(t)} KB`;
  const n = t / 1024;
  return n < 1024 ? `${n.toFixed(1)} MB` : `${(n / 1024).toFixed(1)} GB`;
};
