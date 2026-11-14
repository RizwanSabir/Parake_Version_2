// app/hooks/use-overlay-opacity.js — webpack module 30551
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useOverlayOpacity = function () {
  const e = (0, r.c)(7),
    [t, n] = (0, o.useState)(i.DEFAULT_OVERLAY_OPACITY);
  let a;
  e[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((a = function () {
        window.electron.ipcRendererProxy.invoke(
          "renderer/increase-overlay-opacity",
        );
      }),
      (e[0] = a))
    : (a = e[0]);
  const s = a;
  let l;
  e[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((l = function () {
        window.electron.ipcRendererProxy.invoke(
          "renderer/decrease-overlay-opacity",
        );
      }),
      (e[1] = l))
    : (l = e[1]);
  const c = l;
  let u;
  e[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((u = function () {
        window.electron.ipcRendererProxy.invoke(
          "renderer/reset-overlay-opacity",
        );
      }),
      (e[2] = u))
    : (u = e[2]);
  const d = u;
  let p, f, h;
  return (
    e[3] === Symbol.for("react.memo_cache_sentinel")
      ? ((p = () => {
          window.electron.ipcRendererProxy
            .invoke("renderer/get-overlay-opacity")
            .then((e) => {
              n((0, i.clampOverlayOpacity)(e));
            });
          const e = window.electron.ipcRendererProxy.on(
            "main/overlay-opacity-changed",
            (e) => n((0, i.clampOverlayOpacity)(e)),
          );
          return () => {
            e();
          };
        }),
        (f = []),
        (e[3] = p),
        (e[4] = f))
      : ((p = e[3]), (f = e[4])),
    (0, o.useEffect)(p, f),
    e[5] !== t
      ? ((h = {
          overlayOpacity: t,
          increase: s,
          decrease: c,
          reset: d,
        }),
        (e[5] = t),
        (e[6] = h))
      : (h = e[6]),
    h
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */),
  i = n(4282 /* vendor/module-4282 */);
