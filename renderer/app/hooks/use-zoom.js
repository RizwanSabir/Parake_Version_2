// app/hooks/use-zoom.js — webpack module 72601
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useZoom = function () {
  const e = (0, r.c)(7),
    [t, n] = (0, o.useState)(100);
  let i;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((i = function () {
        window.electron.ipcRendererProxy.invoke("renderer/increase-zoom");
      }),
      (e[0] = i))
    : (i = e[0]);
  const a = i;
  let s;
  e[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((s = function () {
        window.electron.ipcRendererProxy.invoke("renderer/decrease-zoom");
      }),
      (e[1] = s))
    : (s = e[1]);
  const l = s;
  let c;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((c = function () {
        window.electron.ipcRendererProxy.invoke("renderer/reset-zoom");
      }),
      (e[2] = c))
    : (c = e[2]);
  const u = c;
  let d, p, f;
  return (
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((d = () => {
          window.electron.ipcRendererProxy
            .invoke("renderer/get-zoom")
            .then((e) => {
              n(Math.round(100 * e));
            });
          const e = window.electron.ipcRendererProxy.on(
            "main/zoom-changed",
            (e) => n(Math.round(100 * e)),
          );
          return () => {
            e();
          };
        }),
        (p = []),
        (e[3] = d),
        (e[4] = p))
      : ((d = e[3]), (p = e[4])),
    (0, o.useEffect)(d, p),
    e[5] !== t
      ? ((f = { zoom: t, increase: a, decrease: l, reset: u }),
        (e[5] = t),
        (e[6] = f))
      : (f = e[6]),
    f
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
