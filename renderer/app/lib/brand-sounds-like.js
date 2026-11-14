// app/lib/brand-sounds-like.js — webpack module 39360
// params: (e, t, n) = (module, exports, require)
"use strict";
t.brandSoundsLike = function (e) {
  const t = r.BRAND_IDS.find((t) => r.BRANDS[t].name === e);
  return t ? r.BRANDS[t].spokenAs : null;
};
const r = n(81592 /* app/lib/brands */);
