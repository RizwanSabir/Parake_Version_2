// vendor/module-58637.js — webpack module 58637
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/module-16973 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(27352 /* vendor/module-27352 */),
  a = {};
function s(e) {
  if (!("console" in i.GLOBAL_OBJ)) return e();
  const t = i.GLOBAL_OBJ.console,
    n = {},
    r = Object.keys(a);
  r.forEach((e) => {
    const r = a[e];
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
function l() {
  return u().enabled;
}
function c(e, ...t) {
  o.DEBUG_BUILD &&
    l() &&
    s(() => {
      i.GLOBAL_OBJ.console[e](`Sentry Logger [${e}]:`, ...t);
    });
}
function u() {
  return o.DEBUG_BUILD
    ? r.getGlobalSingleton("loggerSettings", () => ({ enabled: !1 }))
    : { enabled: !1 };
}
const d = {
  enable: function () {
    u().enabled = !0;
  },
  disable: function () {
    u().enabled = !1;
  },
  isEnabled: l,
  log: function (...e) {
    c("log", ...e);
  },
  warn: function (...e) {
    c("warn", ...e);
  },
  error: function (...e) {
    c("error", ...e);
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
  (t.consoleSandbox = s),
  (t.debug = d),
  (t.originalConsoleMethods = a);
