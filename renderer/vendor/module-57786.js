// vendor/module-57786.js — webpack module 57786
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = /\(error: (.*)\)/,
  r = /captureMessage|captureException/;
function o(...e) {
  const t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, r = 0, o = 0) => {
    const a = [],
      s = e.split("\n");
    for (let e = r; e < s.length; e++) {
      let r = s[e];
      r.length > 1024 && (r = r.slice(0, 1024));
      const i = n.test(r) ? r.replace(n, "$1") : r;
      if (!i.includes("Error: ")) {
        for (const e of t) {
          const t = e(i);
          if (t) {
            a.push(t);
            break;
          }
        }
        if (a.length >= 50 + o) break;
      }
    }
    return i(a.slice(o));
  };
}
function i(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(a(t).function || "") && t.pop(),
    t.reverse(),
    r.test(a(t).function || "") &&
      (t.pop(), r.test(a(t).function || "") && t.pop()),
    t.slice(0, 50).map((e) => ({
      ...e,
      filename: e.filename || a(t).filename,
      function: e.function || "?",
    }))
  );
}
function a(e) {
  return e[e.length - 1] || {};
}
const s = "<anonymous>";
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
      return (e && "function" == typeof e && e.name) || s;
    } catch {
      return s;
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
