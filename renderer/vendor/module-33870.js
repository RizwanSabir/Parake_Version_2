// vendor/module-33870.js — webpack module 33870
// params: (t, e, r) = (module, exports, require)
"use strict";
r.d(e, {
  Fx: () => o,
  Hu: () => h,
  Ic: () => n,
  P1: () => a,
  XE: () => d,
  nw: () => c,
  rq: () => l,
});
var i = r(79456 /* vendor/module-79456 */),
  o = new Set(["redux-color", "redux-dark-color"]),
  n = (0, i.K)((t) => Array.isArray(t) && t.length > 0, "hasPalette"),
  a = (0, i.K)((t, e) => null != t && o.has(t) && n(e), "isColorTheme"),
  s = /^[\w-]+$/,
  l = (0, i.K)((t) => {
    const e = "string" == typeof t || "number" == typeof t ? String(t) : "";
    return s.test(e) ? e : "classic";
  }, "safeLook"),
  h = (0, i.K)((t) => (n(t) ? t.length : 0), "paletteSlotCount"),
  c = (0, i.K)(
    (t, e) =>
      n(e)
        ? h(e)
        : "number" == typeof t && Number.isInteger(t) && t > 0 && t <= 64
          ? t
          : 12,
    "colorSlotCount",
  ),
  d = (0, i.K)((t, e, r, i) => {
    if (void 0 === e || !a(r, i)) return;
    const o = e % h(i);
    t.attr("data-color-id", `color-${o}`);
  }, "stampColorSlot");
