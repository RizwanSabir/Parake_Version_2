// vendor/other/module-85766.js — webpack module 85766
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.F7 =
  t.Wf =
  t.dw =
  t.Lv =
  t.kj =
  t.wM =
  t.DEFAULT_THEME_SETTINGS =
  t.E8 =
  t.k4 =
    void 0),
  (t.isTheme = function (e) {
    return n.includes(e);
  }),
  (t.k4 = "dark");
const n = ["light", "dark", "system"];
function r(e) {
  return "light" === e || "dark" === e
    ? { theme: e, resolved: e }
    : "system:light" === e
      ? { theme: "system", resolved: "light" }
      : "system:dark" === e
        ? { theme: "system", resolved: "dark" }
        : null;
}
function o(e) {
  const t = document.cookie.split("; ").find((t) => t.startsWith(`${e}=`));
  return t?.slice(e.length + 1);
}
(t.E8 = ["shell", "liveCall"]),
  (t.DEFAULT_THEME_SETTINGS = { shell: "light", liveCall: "dark" }),
  (t.wM = { shell: "pk_theme_shell", liveCall: "pk_theme_live" }),
  (t.kj = 31536e3),
  (t.Lv = {
    read: (e) =>
      "undefined" == typeof document
        ? null
        : ((function (e) {
            const n = {};
            for (const o of t.E8) {
              const i = r(e(t.wM[o]));
              i && (n[o] = i);
            }
            return n;
          })(o)[e] ?? null),
    write: (e, n, r) => {
      document.cookie = `${t.wM[e]}=${(function (e, t) {
        return "system" === e ? `system:${t}` : e;
      })(n, r)}; path=/; max-age=${t.kj}; samesite=lax`;
    },
  }),
  (t.dw = ["/dashboard", "/callSession", "/auth/desktop", "/resumeMaker"]),
  (t.Wf = ["/resumeMaker/print"]),
  (t.F7 = /^\/callSession\/[^/]+(\/mobile)?$/),
  JSON.stringify(t.dw),
  JSON.stringify(t.Wf),
  t.k4,
  JSON.stringify(t.F7.source),
  JSON.stringify(t.wM.liveCall),
  JSON.stringify(t.wM.shell),
  JSON.stringify(t.DEFAULT_THEME_SETTINGS.liveCall),
  JSON.stringify(t.DEFAULT_THEME_SETTINGS.shell),
  t.k4;
