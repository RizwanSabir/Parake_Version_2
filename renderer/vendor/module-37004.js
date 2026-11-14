// vendor/module-37004.js — webpack module 37004
// params: (e, t) = (module, exports, require)
"use strict";
t.resolveActiveInputDevice = function (e, t) {
  const n = e.filter((e) => "audioinput" === e.kind),
    r = t
      ? n.find((e) => e.deviceId === t)
      : n.find((e) => "default" === e.deviceId);
  return r?.label ? `${r.deviceId}|${r.groupId}|${r.label}` : null;
};
