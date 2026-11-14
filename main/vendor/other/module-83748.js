// vendor/other/module-83748.js — webpack module 83748
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = {
  transform: function ({
    logger: e,
    message: t,
    transport: n,
    initialData: r = t?.data || [],
    transforms: o = n?.transforms,
  }) {
    return o.reduce(
      (r, o) =>
        "function" == typeof o
          ? o({ data: r, logger: e, message: t, transport: n })
          : r,
      r,
    );
  },
};
