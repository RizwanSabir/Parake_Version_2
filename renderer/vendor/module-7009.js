// vendor/module-7009.js — webpack module 7009
// params: (e, t, n) = (module, exports, require)
"use strict";
t.describeResume = function (e) {
  const t = [];
  return (
    e.uploadthingFileKey && t.push("PDF"),
    null != e.fileSizeBytes && t.push((0, r.formatFileSize)(e.fileSizeBytes)),
    e.createdAt && t.push(`added ${(0, o.formatRelativeDate)(e.createdAt)}`),
    t.join(" · ")
  );
};
const r = n(26960 /* vendor/module-26960 */),
  o = n(76148 /* vendor/module-76148 */);
