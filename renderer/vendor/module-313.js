// vendor/module-313.js — webpack module 313
// params: (e, t) = (module, exports, require)
"use strict";
t.buildCompanyLogoUrl = function (e, t = "", n) {
  const r = e?.trim().toLowerCase();
  if (!r) return;
  const o = n ? `&theme=${n}` : "";
  return `${t}/api/company-logo?domain=${encodeURIComponent(r)}${o}`;
};
