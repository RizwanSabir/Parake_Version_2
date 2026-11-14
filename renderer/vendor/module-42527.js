// vendor/module-42527.js — webpack module 42527
// params: (e, t) = (module, exports, require)
"use strict";
(t.F7 =
  t.Wf =
  t.dw =
  t.cookieThemeStore =
  t.kj =
  t.wM =
  t.DEFAULT_THEME_SETTINGS =
  t.THEME_SCOPES =
  t.DARK_CLASS =
    void 0),
  (t.getSystemTheme = function () {
    return "undefined" == typeof window
      ? "light"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }),
  (t.resolveTheme = function (e, t) {
    return "system" === e ? t : e;
  }),
  (t.applyThemeClass = function (e) {
    "undefined" != typeof document &&
      document.documentElement.classList.toggle(t.DARK_CLASS, "dark" === e);
  }),
  (t.DARK_CLASS = "dark");
function n(e) {
  return "light" === e || "dark" === e
    ? { theme: e, resolved: e }
    : "system:light" === e
      ? { theme: "system", resolved: "light" }
      : "system:dark" === e
        ? { theme: "system", resolved: "dark" }
        : null;
}
function r(e) {
  const t = document.cookie.split("; ").find((t) => t.startsWith(`${e}=`));
  return t?.slice(e.length + 1);
}
(t.THEME_SCOPES = ["shell", "liveCall"]),
  (t.DEFAULT_THEME_SETTINGS = { shell: "light", liveCall: "dark" }),
  (t.wM = { shell: "pk_theme_shell", liveCall: "pk_theme_live" }),
  (t.kj = 31536e3),
  (t.cookieThemeStore = {
    read: (e) =>
      "undefined" == typeof document
        ? null
        : ((function (e) {
            const r = {};
            for (const o of t.THEME_SCOPES) {
              const i = n(e(t.wM[o]));
              i && (r[o] = i);
            }
            return r;
          })(r)[e] ?? null),
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
  t.DARK_CLASS,
  JSON.stringify(t.F7.source),
  JSON.stringify(t.wM.liveCall),
  JSON.stringify(t.wM.shell),
  JSON.stringify(t.DEFAULT_THEME_SETTINGS.liveCall),
  JSON.stringify(t.DEFAULT_THEME_SETTINGS.shell),
  t.DARK_CLASS;
