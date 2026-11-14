// vendor/other/module-35600.js — webpack module 35600
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(70857 /* external/os */),
  o = n(52018 /* external/tty */),
  i = n(56071 /* vendor/other/module-56071 */),
  { env: s } = process;
let a;
function c(e, t = {}) {
  return (
    0 !==
      (n = (function (e, { streamIsTTY: t, sniffFlags: n = !0 } = {}) {
        const o = (function () {
          if ("FORCE_COLOR" in s)
            return "true" === s.FORCE_COLOR
              ? 1
              : "false" === s.FORCE_COLOR
                ? 0
                : 0 === s.FORCE_COLOR.length
                  ? 1
                  : Math.min(Number.parseInt(s.FORCE_COLOR, 10), 3);
        })();
        void 0 !== o && (a = o);
        const c = n ? a : o;
        if (0 === c) return 0;
        if (n) {
          if (i("color=16m") || i("color=full") || i("color=truecolor"))
            return 3;
          if (i("color=256")) return 2;
        }
        if (e && !t && void 0 === c) return 0;
        const u = c || 0;
        if ("dumb" === s.TERM) return u;
        if ("win32" === process.platform) {
          const e = r.release().split(".");
          return Number(e[0]) >= 10 && Number(e[2]) >= 10586
            ? Number(e[2]) >= 14931
              ? 3
              : 2
            : 1;
        }
        if ("CI" in s)
          return [
            "TRAVIS",
            "CIRCLECI",
            "APPVEYOR",
            "GITLAB_CI",
            "GITHUB_ACTIONS",
            "BUILDKITE",
            "DRONE",
          ].some((e) => e in s) || "codeship" === s.CI_NAME
            ? 1
            : u;
        if ("TEAMCITY_VERSION" in s)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION)
            ? 1
            : 0;
        if ("truecolor" === s.COLORTERM) return 3;
        if ("TERM_PROGRAM" in s) {
          const e = Number.parseInt(
            (s.TERM_PROGRAM_VERSION || "").split(".")[0],
            10,
          );
          switch (s.TERM_PROGRAM) {
            case "iTerm.app":
              return e >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(s.TERM)
          ? 2
          : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
                s.TERM,
              ) || "COLORTERM" in s
            ? 1
            : u;
      })(e, { streamIsTTY: e && e.isTTY, ...t })) && {
      level: n,
      hasBasic: !0,
      has256: n >= 2,
      has16m: n >= 3,
    }
  );
  var n;
}
i("no-color") || i("no-colors") || i("color=false") || i("color=never")
  ? (a = 0)
  : (i("color") || i("colors") || i("color=true") || i("color=always")) &&
    (a = 1),
  (e.exports = {
    supportsColor: c,
    stdout: c({ isTTY: o.isatty(1) }),
    stderr: c({ isTTY: o.isatty(2) }),
  });
