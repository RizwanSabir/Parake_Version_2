// vendor/other/module-95870.js — webpack module 95870
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(57975 /* external/node_util */),
  o = n(96137 /* vendor/other/module-96137 */);
t.captureLog = function (e, ...t) {
  const [n, i, s, a] = t;
  if (Array.isArray(i)) {
    const t = { ...s };
    (t["sentry.message.template"] = n),
      i.forEach((e, n) => {
        t[`sentry.message.parameter.${n}`] = e;
      });
    const c = r.format(n, ...i);
    o._INTERNAL_captureLog({ level: e, message: c, attributes: t }, a?.scope);
  } else
    o._INTERNAL_captureLog(
      { level: e, message: n, attributes: i },
      s?.scope ?? a?.scope,
    );
};
