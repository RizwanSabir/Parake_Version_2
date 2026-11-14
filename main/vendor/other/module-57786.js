// vendor/other/module-57786.js — webpack module 57786
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = /\(error: (.*)\)/,
  r = /captureMessage|captureException/;
function o(...e) {
  const t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, r = 0, o = 0) => {
    const s = [],
      a = e.split("\n");
    for (let e = r; e < a.length; e++) {
      let r = a[e];
      r.length > 1024 && (r = r.slice(0, 1024));
      const i = n.test(r) ? r.replace(n, "$1") : r;
      if (!i.includes("Error: ")) {
        for (const e of t) {
          const t = e(i);
          if (t) {
            s.push(t);
            break;
          }
        }
        if (s.length >= 50 + o) break;
      }
    }
    return i(s.slice(o));
  };
}
function i(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(s(t).function || "") && t.pop(),
    t.reverse(),
    r.test(s(t).function || "") &&
      (t.pop(), r.test(s(t).function || "") && t.pop()),
    t.slice(0, 50).map((e) => ({
      ...e,
      filename: e.filename || s(t).filename,
      function: e.function || "?",
    }))
  );
}
function s(e) {
  return e[e.length - 1] || {};
}
const a = "<anonymous>";
(t.UNKNOWN_FUNCTION = "?"),
  (t.createStackParser = o),
  (t.getFramesFromEvent = function (e) {
    const t = e.exception;
    if (t) {
      const e = [];
      try {
        return (
          t.values.forEach((t) => {
            t.stacktrace.frames && e.push(...t.stacktrace.frames);
          }),
          e
        );
      } catch {
        return;
      }
    }
  }),
  (t.getFunctionName = function (e) {
    try {
      return (e && "function" == typeof e && e.name) || a;
    } catch {
      return a;
    }
  }),
  (t.normalizeStackTracePath = function (e) {
    let t = e?.startsWith("file://") ? e.slice(7) : e;
    return t?.match(/\/[A-Z]:/) && (t = t.slice(1)), t;
  }),
  (t.stackParserFromStackParserOptions = function (e) {
    return Array.isArray(e) ? o(...e) : e;
  }),
  (t.stripSentryFramesAndReverse = i);
