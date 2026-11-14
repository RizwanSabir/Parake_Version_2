// vendor/other/module-50231.js — webpack module 50231
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.OVERLAY_OPACITY_STEP = t.Ku = t.km = t.DEFAULT_OVERLAY_OPACITY = void 0),
  (t.clampOverlayOpacity = function (e) {
    const n = Math.max(t.km, Math.min(t.Ku, e));
    return Math.round(n / t.OVERLAY_OPACITY_STEP) * t.OVERLAY_OPACITY_STEP;
  }),
  (t.DEFAULT_OVERLAY_OPACITY = 45),
  (t.km = 15),
  (t.Ku = 95),
  (t.OVERLAY_OPACITY_STEP = 10);
