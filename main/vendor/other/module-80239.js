// vendor/other/module-80239.js — webpack module 80239
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.createShareOutputPin = function ({
  read: e,
  write: t,
  listDevices: o,
  onReset: i,
}) {
  const s = () => {
    try {
      return o().find((e) => e.isDefault)?.id;
    } catch {
      return;
    }
  };
  let a = null;
  const c = (e) => {
    try {
      t(e);
    } catch {}
  };
  return {
    get() {
      const t = e(),
        { deviceId: o } = t;
      if (!o) return null;
      const u = s();
      if (void 0 === u) return o;
      let { defaultAtPin: l } = t;
      return (
        l === r &&
          ((l = a?.deviceId === o ? a.defaultAtPin : u),
          (a = { deviceId: o, defaultAtPin: l }),
          c(a)),
        u === l ? o : (c(n), i(), null)
      );
    },
    set(e) {
      (a = null), t(e ? { deviceId: e, defaultAtPin: s() ?? r } : n);
    },
  };
};
const n = { deviceId: "", defaultAtPin: "" },
  r = "unknown";
