// vendor/other/module-2522.js — webpack module 2522
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76403 /* vendor/other/module-76403 */),
  o = n(19410 /* vendor/other/module-19410 */);
t.createClientReportEnvelope = function (e, t, n) {
  const i = [
    { type: "client_report" },
    {
      timestamp: n || o.dateTimestampInSeconds(),
      discarded_events: e,
    },
  ];
  return r.createEnvelope(t ? { dsn: t } : {}, [i]);
};
