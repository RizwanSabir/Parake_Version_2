// vendor/module-96748.js — webpack module 96748
// params: (e, t, n) = (module, exports, require)
"use strict";
t.convertBulletsToMarkdown = function (e) {
  return (0, r.mapOutsideMarkdownCode)(
    e,
    (e) =>
      e
        .replace(/^(\s*)- (?:[-*•] )+/gm, "$1- ")
        .replace(/^•\s+/gm, "- ")
        .replace(/^‣\s+/gm, "- ")
        .replace(/^▪\s+/gm, "- ")
        .replace(/^▫\s+/gm, "- ")
        .replace(/^‧\s+/gm, "- ")
        .replace(/^(>\s*.*)\n(?!\n|>)/gm, "$1\n\n"),
    { inlineCode: !1 },
  );
};
const r = n(72931 /* vendor/module-72931 */);
