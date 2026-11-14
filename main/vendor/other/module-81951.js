// vendor/other/module-81951.js — webpack module 81951
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(87561 /* vendor/other/module-87561 */);
e.exports = (e, t) => {
  const n = r(e, null, !0),
    o = r(t, null, !0),
    i = n.compare(o);
  if (0 === i) return null;
  const s = i > 0,
    a = s ? n : o,
    c = s ? o : n,
    u = !!a.prerelease.length;
  if (c.prerelease.length && !u) {
    if (!c.patch && !c.minor) return "major";
    if (0 === c.compareMain(a)) return c.minor && !c.patch ? "minor" : "patch";
  }
  const l = u ? "pre" : "";
  return n.major !== o.major
    ? l + "major"
    : n.minor !== o.minor
      ? l + "minor"
      : n.patch !== o.patch
        ? l + "patch"
        : "prerelease";
};
