// app/hooks/use-share-output-device-id.js — webpack module 17664
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useShareOutputDeviceId = function () {
  const e = (0, r.c)(6),
    [t, n, i] = (0, a.usePersistedDeviceId)(l, s);
  let c, u, d;
  return (
    e[0] !== i
      ? ((c = () =>
          window.electron.ipcRendererProxy.on(
            "main/share-output-device-reset",
            () => i(null),
          )),
        (u = [i]),
        (e[0] = i),
        (e[1] = c),
        (e[2] = u))
      : ((c = e[1]), (u = e[2])),
    (0, o.useEffect)(c, u),
    e[3] !== n || e[4] !== t
      ? ((d = { shareOutputDeviceId: t, setShareOutputDeviceId: n }),
        (e[3] = n),
        (e[4] = t),
        (e[5] = d))
      : (d = e[5]),
    d
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(65757 /* app/lib/get-device-id */),
  a = n(85263 /* vendor/module-85263 */);
function s(e) {
  return (0, i.setDeviceId)("share-output", e);
}
function l() {
  return (0, i.getDeviceId)("share-output");
}
