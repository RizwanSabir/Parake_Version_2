// vendor/other/module-73453.js — webpack module 73453
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.getAppCacheDir = function () {
  const e = (0, o.homedir)();
  let t;
  return (
    (t =
      "win32" === process.platform
        ? process.env.LOCALAPPDATA || r.join(e, "AppData", "Local")
        : "darwin" === process.platform
          ? r.join(e, "Library", "Caches")
          : process.env.XDG_CACHE_HOME || r.join(e, ".cache")),
    t
  );
};
const r = n(16928 /* external/path */),
  o = n(70857 /* external/os */);
