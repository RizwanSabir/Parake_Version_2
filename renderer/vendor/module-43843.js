// vendor/module-43843.js — webpack module 43843
// params: (e, t, n) = (module, exports, require)
const r = n(96137 /* vendor/module-96137 */),
  o = n(68540 /* vendor/module-68540 */);
t.makeRendererTransport = function (e) {
  let t;
  return r.createTransport(
    e,
    async (e) => (
      t || (t = o.getIPC()), t.sendEnvelope(e.body), { statusCode: 200 }
    ),
  );
};
