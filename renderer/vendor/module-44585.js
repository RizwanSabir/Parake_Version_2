// vendor/module-44585.js — webpack module 44585
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, { G1: () => a, PW: () => o, Y: () => r });
const r = i("end"),
  o = i("start");
function i(e) {
  return function (t) {
    const n = (t && t.position && t.position[e]) || {};
    if (
      "number" == typeof n.line &&
      n.line > 0 &&
      "number" == typeof n.column &&
      n.column > 0
    )
      return {
        line: n.line,
        column: n.column,
        offset:
          "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0,
      };
  };
}
function a(e) {
  const t = o(e),
    n = r(e);
  if (t && n) return { start: t, end: n };
}
