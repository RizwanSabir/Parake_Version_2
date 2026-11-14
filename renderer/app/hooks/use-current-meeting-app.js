// app/hooks/use-current-meeting-app.js — webpack module 36828
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useCurrentMeetingApp = function () {
  const e = (0, r.c)(2),
    [t, n] = (0, o.useState)(void 0);
  let i, a;
  return (
    e[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((i = () => {
          let e = !0;
          const t = (t) => {
            e && t && n(t);
          };
          window.electron.ipcRendererProxy
            .invoke("renderer/get-current-meeting-app")
            .then(t);
          const r = window.electron.ipcRendererProxy.on(
            "main/meeting-app-changed",
            t,
          );
          return () => {
            (e = !1), r();
          };
        }),
        (a = []),
        (e[0] = i),
        (e[1] = a))
      : ((i = e[0]), (a = e[1])),
    (0, o.useEffect)(i, a),
    t
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
