// vendor/module-92446.js — webpack module 92446
// params: (e, t) = (module, exports, require)
"use strict";
function n(e) {
  if (!Number.isFinite(e)) return t.DEFAULT_LOGO_SCALE_INDEX;
  const n = Math.round(e);
  return Math.max(0, Math.min(t.LOGO_SCALES.length - 1, n));
}
(t.DEFAULT_LOGO_SCALE_INDEX = t.LOGO_SCALES = void 0),
  (t.clampLogoScaleIndex = n),
  (t.logoScale = function (e) {
    return t.LOGO_SCALES[n(e)] ?? 1;
  }),
  (t.LOGO_SCALES = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3]),
  (t.DEFAULT_LOGO_SCALE_INDEX = 0);
