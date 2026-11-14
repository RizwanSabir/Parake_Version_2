// app/lib/get-os-data.js — webpack module 34916
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.getOsData =
  t.showsSystemSharePicker =
  t.supportsSystemAudioCapture =
  t.knownMacOsNames =
    void 0),
  (t.getDesktopClientHeaders = async function () {
    const { os: e, osVersion: n, osVersionRaw: o } = (0, t.getOsData)();
    return {
      [r.DESKTOP_APP_VERSION_HEADER]: await l(),
      "x-parakeet-desktop-os": e,
      "x-parakeet-desktop-os-version": n,
      "x-parakeet-desktop-os-version-raw": o,
    };
  });
const r = n(79076 /* app/lib/desktop-app-version-header */);
let o, i, a, s;
async function l() {
  return (
    (o ??= window.electron.ipcRendererProxy.invoke("renderer/get-version")), o
  );
}
(t.knownMacOsNames = {
  26: "Tahoe",
  15: "Sequoia",
  14: "Sonoma",
  13: "Ventura",
  12: "Monterey",
  11: "Big Sur",
  10: "Catalina or earlier",
}),
  (t.supportsSystemAudioCapture = () => {
    const { os: e, osVersionRaw: n } = (0, t.getOsData)();
    if ("macos" !== e) return !0;
    const [r = 0, o = 0] = n.split(".").map((e) => parseInt(e, 10));
    return r > 13 || (13 === r && o >= 2);
  }),
  (t.showsSystemSharePicker = () => {
    const { os: e, osVersionRaw: n } = (0, t.getOsData)();
    return "macos" === e && parseInt(n.split(".")[0] ?? "", 10) >= 15;
  }),
  (t.getOsData = () => {
    if (!i || !a || !s) {
      const e =
          "darwin" === window.electron.platform
            ? "macos"
            : "win32" === window.electron.platform
              ? "windows"
              : "unknown",
        n = window.electron.osVersion || "unknown",
        r = (function (e, n) {
          return "macos" === e
            ? `${(function (e) {
                const [n = ""] = e.split("."),
                  r = parseInt(n, 10);
                return `macOS ${t.knownMacOsNames[r] || "Unknown macOS"}`;
              })(n)} (${n})`
            : "windows" === e
              ? `${(function (e) {
                  const [t, n, r = 0] = e.split(".").map(Number);
                  return 10 === t && 0 === n
                    ? r >= 22e3
                      ? "Windows 11"
                      : "Windows 10"
                    : 6 === t && 3 === n
                      ? "Windows 8.1"
                      : 6 === t && 2 === n
                        ? "Windows 8"
                        : 6 === t && 1 === n
                          ? "Windows 7"
                          : "Unknown";
                })(n)} (${n})`
              : `${e} ${n}`;
        })(e, n);
      (i = e), (a = n), (s = r);
    }
    return { os: i, osVersion: s, osVersionRaw: a };
  });
