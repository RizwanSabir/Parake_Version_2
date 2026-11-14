// vendor/other/module-58637.js — webpack module 58637
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/other/module-16973 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(27352 /* vendor/other/module-27352 */),
  s = {};
function a(e) {
  if (!("console" in i.GLOBAL_OBJ)) return e();
  const t = i.GLOBAL_OBJ.console,
    n = {},
    r = Object.keys(s);
  r.forEach((e) => {
    const r = s[e];
    (n[e] = t[e]), (t[e] = r);
  });
  try {
    return e();
  } finally {
    r.forEach((e) => {
      t[e] = n[e];
    });
  }
}
function c() {
  return l().enabled;
}
function u(e, ...t) {
  o.DEBUG_BUILD &&
    c() &&
    a(() => {
      i.GLOBAL_OBJ.console[e](`Sentry Logger [${e}]:`, ...t);
    });
}
function l() {
  return o.DEBUG_BUILD
    ? r.getGlobalSingleton("loggerSettings", () => ({ enabled: !1 }))
    : { enabled: !1 };
}
const d = {
  enable: function () {
    l().enabled = !0;
  },
  disable: function () {
    l().enabled = !1;
  },
  isEnabled: c,
  log: function (...e) {
    u("log", ...e);
  },
  warn: function (...e) {
    u("warn", ...e);
  },
  error: function (...e) {
    u("error", ...e);
  },
};
(t.CONSOLE_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace",
]),
  (t.consoleSandbox = a),
  (t.debug = d),
  (t.originalConsoleMethods = s);
