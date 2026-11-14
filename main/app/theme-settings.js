// app/theme-settings.js — webpack module 5252
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.THEME_SETTING_KEYS = void 0),
  (t.readThemeSettings = function () {
    return {
      shell: (0, r.getSetting)(t.THEME_SETTING_KEYS.shell),
      liveCall: (0, r.getSetting)(t.THEME_SETTING_KEYS.liveCall),
    };
  });
const r = n(92763 /* app/settings-store */);
t.THEME_SETTING_KEYS = {
  shell: "shellTheme",
  liveCall: "liveCallTheme",
};
