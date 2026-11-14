// vendor/other/module-10958.js — webpack module 10958
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(68998 /* vendor/other/module-68998 */);
e.exports = {
  utimesMillis: function (e, t, n, o) {
    r.open(e, "r+", (e, i) => {
      if (e) return o(e);
      r.futimes(i, t, n, (e) => {
        r.close(i, (t) => {
          o && o(e || t);
        });
      });
    });
  },
  utimesMillisSync: function (e, t, n) {
    const o = r.openSync(e, "r+");
    return r.futimesSync(o, t, n), r.closeSync(o);
  },
};
