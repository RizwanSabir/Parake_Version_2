// vendor/module-25938.js — webpack module 25938
// params: (e, t, n) = (module, exports, require)
"use strict";
t.convertTexDelimiters = function (e) {
  return (0, r.mapOutsideMarkdownCode)(e, o);
};
const r = n(72931 /* vendor/module-72931 */);
function o(e) {
  return e
    .replace(/\\\[([\s\S]+?)\\\]/g, (e, t, n, r) => {
      const o =
          ((s = r.slice(r.lastIndexOf("\n", n - 1) + 1, n)),
          i.exec(s)[0].replace(/[-*+]|\d+[.)]/g, (e) => " ".repeat(e.length))),
        a = t
          .trim()
          .split("\n")
          .map((e) =>
            (function (e) {
              return e.replace(/^[ \t]*(?:>[ \t]?)+/, "");
            })(e).trim(),
          )
          .filter(Boolean)
          .map((e) => o + e)
          .join("\n");
      var s;
      return `\n${o}$$\n${a}\n${o}$$\n`;
    })
    .replace(/\\\(([^\n]+?)\\\)/g, (e, t) => "$$" + t.trim() + "$$");
}
const i = /^[ \t]*(?:>[ \t]?)*(?:(?:[-*+]|\d+[.)])[ \t]+)?/;
