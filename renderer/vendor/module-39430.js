// vendor/module-39430.js — webpack module 39430
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(68020 /* vendor/module-68020 */),
  i = n(50905 /* vendor/module-50905 */),
  a = n(57419 /* vendor/module-57419 */),
  s = n(73519 /* vendor/module-73519 */),
  l = new WeakSet();
t.wrapMcpServerWithSentry = function (e, t) {
  if (l.has(e)) return e;
  if (!s.validateMcpServerInstance(e)) return e;
  const n = e,
    c = r.getClient(),
    u = c?.getDataCollectionOptions().genAI,
    d = {
      recordInputs: t?.recordInputs ?? u?.inputs ?? !1,
      recordOutputs: t?.recordOutputs ?? u?.outputs ?? !1,
    };
  return (
    o.fill(
      n,
      "connect",
      (e) =>
        async function (t, ...n) {
          const r = await e.call(this, t, ...n);
          return (
            a.wrapTransportOnMessage(t, d),
            a.wrapTransportSend(t, d),
            a.wrapTransportOnClose(t),
            a.wrapTransportError(t),
            r
          );
        },
    ),
    i.wrapAllMCPHandlers(n),
    i.wrapExistingHandlers(n),
    l.add(e),
    e
  );
};
