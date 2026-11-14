// app/web-meeting-detector.js — webpack module 66707
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.detectWebMeetingService = async function () {
    if (
      "darwin" === process.platform &&
      "granted" !== o.systemPreferences.getMediaAccessStatus("screen")
    )
      return null;
    try {
      const e = (
          await o.desktopCapturer.getSources({
            types: ["window"],
            thumbnailSize: { width: 0, height: 0 },
            fetchWindowIcons: !1,
          })
        ).map((e) => e.name),
        t = (0, s.matchWebMeetingService)(e);
      return (
        t ||
          o.app.isPackaged ||
          i.default.info(
            "No web meeting service matched. Titles:",
            JSON.stringify(e),
          ),
        t
      );
    } catch (e) {
      return (
        i.default.warn("Could not read window titles for meeting service", e),
        null
      );
    }
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */)),
  s = n(59437 /* vendor/other/module-59437 */);
