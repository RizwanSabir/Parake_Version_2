// vendor/other/module-21044.js — webpack module 21044
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = function (e) {
  return Object.defineProperties(t, {
    defaultLabel: { value: "", writable: !0 },
    labelPadding: { value: !0, writable: !0 },
    maxLabelLength: { value: 0, writable: !0 },
    labelLength: {
      get() {
        switch (typeof t.labelPadding) {
          case "boolean":
            return t.labelPadding ? t.maxLabelLength : 0;
          case "number":
            return t.labelPadding;
          default:
            return 0;
        }
      },
    },
  });
  function t(n) {
    t.maxLabelLength = Math.max(t.maxLabelLength, n.length);
    const r = {};
    for (const t of e.levels)
      r[t] = (...r) => e.logData(r, { level: t, scope: n });
    return (r.log = r.info), r;
  }
};
