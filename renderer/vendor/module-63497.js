// vendor/module-63497.js — webpack module 63497
// params: (e, t, n) = (module, exports, require)
"use strict";
t.trackThemeChange = function ({
  scope: e,
  theme: t,
  previousTheme: n,
  surface: a,
}) {
  t !== n &&
    (0, o.trackClientEvent)(i.mixpanelEvents.theme.changed, {
      scope: e,
      theme: t,
      previousTheme: n,
      resolved: (0, r.resolveTheme)(t, (0, r.getSystemTheme)()),
      surface: a,
    });
};
const r = n(42527 /* vendor/module-42527 */),
  o = n(87093 /* vendor/module-87093 */),
  i = n(22764 /* vendor/module-22764 */);
