// vendor/other/module-38693.js — webpack module 38693
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const t =
    /^(Command|Cmd|Control|Ctrl|CommandOrControl|CmdOrCtrl|Alt|Option|AltGr|Shift|Super)$/,
  n =
    /^([0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]']|F1*[1-9]|F10|F2[0-4]|Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen)$/;
e.exports = function (e) {
  let r = e.split("+"),
    o = !1;
  return r.every((e, i) => {
    const s = n.test(e),
      a = t.test(e);
    if (s) {
      if (o) return !1;
      o = !0;
    }
    return !(i === r.length - 1 && !o) && (s || a);
  });
};
