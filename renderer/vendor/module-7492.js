// vendor/module-7492.js — webpack module 7492
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */),
  o = n(8888 /* vendor/module-8888 */),
  i = n(27352 /* vendor/module-27352 */);
function a(e, t, n) {
  return e
    .map((e) =>
      r.isPrimitive(e) ? String(e) : JSON.stringify(o.normalize(e, t, n)),
    )
    .join(" ");
}
(t.createConsoleTemplateAttributes = function (e, t) {
  const n = {},
    r = new Array(t.length).fill("{}").join(" ");
  return (
    (n["sentry.message.template"] = `${e} ${r}`),
    t.forEach((e, t) => {
      n[`sentry.message.parameter.${t}`] = e;
    }),
    n
  );
}),
  (t.formatConsoleArgs = function (e, t, n) {
    return "util" in i.GLOBAL_OBJ &&
      "function" == typeof i.GLOBAL_OBJ.util.format
      ? i.GLOBAL_OBJ.util.format(...e)
      : a(e, t, n);
  }),
  (t.hasConsoleSubstitutions = function (e) {
    return /%[sdifocO]/.test(e);
  }),
  (t.safeJoinConsoleArgs = a);
