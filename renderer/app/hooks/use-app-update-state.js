// app/hooks/use-app-update-state.js — webpack module 81229
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAppUpdateState = function () {
  const e = (0, r.c)(2),
    [t, n] = (0, o.useState)(i);
  let a, s;
  return (
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((a = () => {
          window.electron.ipcRendererProxy
            .invoke("renderer/get-update-state")
            .then((e) => {
              n(e);
            });
          const e = window.electron.ipcRendererProxy.on(
            "main/update-state-changed",
            (e) => {
              n(e);
            },
          );
          return () => {
            e();
          };
        }),
        (s = []),
        (e[0] = a),
        (e[1] = s))
      : ((a = e[0]), (s = e[1])),
    (0, o.useEffect)(a, s),
    t
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = {
    status: "idle",
    severity: "none",
    availableVersion: null,
    downloadProgressPercent: null,
    errorMessage: null,
    serverGated: !1,
  };
