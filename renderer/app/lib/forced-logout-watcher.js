// app/lib/forced-logout-watcher.js — webpack module 16549
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ForcedLogoutWatcher = function (e) {
  const t = (0, r.c)(2),
    { enabled: n } = e;
  let o;
  return (
    t[0] !== n
      ? ((o = {
          enabled: n,
          pollWhileHidden: !0,
          onTick: c,
          onExpired: l,
          onDisabled: s,
        }),
        (t[0] = n),
        (t[1] = o))
      : (o = t[1]),
    (0, i.useForcedLogoutCountdown)(o),
    null
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(44572 /* vendor/module-44572 */),
  i = n(9617 /* vendor/module-9617 */),
  a = "forced-logout-warning";
function s() {
  return o.toast.dismiss(a);
}
function l() {
  o.toast.dismiss(a),
    window.electron.ipcRendererProxy.invoke("renderer/set-auth-token", null);
}
function c(e, t) {
  o.toast.warning(`${e} You will be logged out in ${t}s.`, {
    id: a,
    duration: 1 / 0,
    dismissible: !1,
  });
}
