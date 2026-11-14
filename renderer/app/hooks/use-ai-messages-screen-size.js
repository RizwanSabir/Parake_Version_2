// app/hooks/use-ai-messages-screen-size.js — webpack module 47058
// params: (e, t, n) = (module, exports, require)
"use strict";
t.useAiMessagesScreenSize = function (e, t) {
  const n = (0, r.c)(13),
    [a, s] = (0, o.useState)(null),
    [l, c] = (0, o.useState)(null),
    u = (0, o.useRef)(a);
  let d;
  n[0] !== e
    ? ((d = (t) => {
        const { width: n, height: r } = t,
          o = e.current?.clientWidth || 1 / 0,
          a = {
            width: Math.min(Math.max(n, 500), o),
            height: i(r, e.current),
          };
        (u.current = a), s(a);
      }),
      (n[0] = e),
      (n[1] = d))
    : (d = n[1]);
  const p = d;
  let f, h, m;
  n[2] !== e
    ? ((f = () => {
        window.electron.ipcRendererProxy
          .invoke("renderer/get-ai-messages-screen-size")
          .then((t) => {
            t && "number" == typeof t.height && c(i(t.height, e.current));
          });
      }),
      (h = [e]),
      (n[2] = e),
      (n[3] = f),
      (n[4] = h))
    : ((f = n[3]), (h = n[4])),
    (0, o.useEffect)(f, h),
    n[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = () => {
          u.current &&
            window.electron.ipcRendererProxy.invoke(
              "renderer/set-ai-messages-screen-size",
              { height: u.current.height },
            );
        }),
        (n[5] = m))
      : (m = n[5]);
  const g = m;
  let y;
  n[6] !== t || n[7] !== a || n[8] !== l
    ? ((y = a ?? { width: t ?? 700, height: l ?? 500 }),
      (n[6] = t),
      (n[7] = a),
      (n[8] = l),
      (n[9] = y))
    : (y = n[9]);
  const v = y;
  let b;
  return (
    n[10] !== p || n[11] !== v
      ? ((b = { size: v, setSize: p, commitSize: g }),
        (n[10] = p),
        (n[11] = v),
        (n[12] = b))
      : (b = n[12]),
    b
  );
};
const r = n(54005 /* vendor/module-54005 */),
  o = n(14041 /* vendor/module-14041 */);
function i(e, t) {
  return Math.min(Math.max(e, 320), t?.clientHeight || 1 / 0);
}
