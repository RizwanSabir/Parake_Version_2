// vendor/other/module-39430.js — webpack module 39430
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(68020 /* vendor/other/module-68020 */),
  i = n(50905 /* vendor/other/module-50905 */),
  s = n(57419 /* vendor/other/module-57419 */),
  a = n(73519 /* vendor/other/module-73519 */),
  c = new WeakSet();
t.wrapMcpServerWithSentry = function (e, t) {
  if (c.has(e)) return e;
  if (!a.validateMcpServerInstance(e)) return e;
  const n = e,
    u = r.getClient(),
    l = u?.getDataCollectionOptions().genAI,
    d = {
      recordInputs: t?.recordInputs ?? l?.inputs ?? !1,
      recordOutputs: t?.recordOutputs ?? l?.outputs ?? !1,
    };
  return (
    o.fill(
      n,
      "connect",
      (e) =>
        async function (t, ...n) {
          const r = await e.call(this, t, ...n);
          return (
            s.wrapTransportOnMessage(t, d),
            s.wrapTransportSend(t, d),
            s.wrapTransportOnClose(t),
            s.wrapTransportError(t),
            r
          );
        },
    ),
    i.wrapAllMCPHandlers(n),
    i.wrapExistingHandlers(n),
    c.add(e),
    e
  );
};
