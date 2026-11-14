// app/settings-store.js — webpack module 92763
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getSetting = f),
  (t.setSetting = h),
  (t.getCurrentScreenIndex = function () {
    const e = o.screen.getAllDisplays(),
      t = f("currentScreenIndex");
    return t >= e.length
      ? (i.default.error(
          "Current screen index is out of bounds, setting to 0",
          { current: t, displays: e },
        ),
        h("currentScreenIndex", 0),
        0)
      : t;
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */)),
  s = r(n(77266 /* vendor/other/module-77266 */)),
  a = n(71975 /* vendor/other/module-71975 */),
  c = n(85766 /* vendor/other/module-85766 */),
  u = {
    isPrivate: !0,
    overlayOpacity: n(50231 /* vendor/other/module-50231 */)
      .DEFAULT_OVERLAY_OPACITY,
    fontSizeIndex: a.DEFAULT_FONT_SIZE_INDEX,
    shellTheme: c.DEFAULT_THEME_SETTINGS.shell,
    liveCallTheme: c.DEFAULT_THEME_SETTINGS.liveCall,
    autoDetectMeetings: "unset",
    locationOnScreen: "top-center",
    locationOffsetX: 0,
    locationOffsetY: 0,
    currentScreenIndex: 0,
    isTranscriptOpen: !0,
    isTranscriptionMinimized: !0,
    aiMessagesScreenHeight: 500,
    startHiddenAfterUpdate: !1,
    encryptedBypassToken: "",
    microphoneDeviceId: "",
    shareOutputDeviceId: "",
    shareOutputDefaultDeviceId: "",
  };
function l(e) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, e);
}
function d(e) {
  const t = e?.code;
  return "EPERM" === t || "EBUSY" === t || "EACCES" === t;
}
function p(e, t) {
  for (let n = 1; ; n++)
    try {
      return t();
    } catch (t) {
      if (n >= 4 || !d(t)) throw t;
      i.default.warn(`${e} blocked by a file lock (attempt ${n}), retrying`, t),
        l(15 * n);
    }
}
function f(e) {
  let t;
  try {
    t = p(`Reading "${e}"`, () => s.default.getSync(e));
  } catch (t) {
    return i.default.error(`Reading "${e}" failed, using its default`, t), u[e];
  }
  if (typeof t == typeof u[e]) return t;
  try {
    p(`Backfilling "${e}"`, () => s.default.setSync(e, u[e]));
  } catch (t) {
    i.default.error(`Backfilling the default for "${e}" failed`, t);
  }
  return u[e];
}
function h(e, t) {
  p(`Writing "${e}"`, () => s.default.setSync(e, t));
}
s.default.configure({ fileName: "settings.json" });
